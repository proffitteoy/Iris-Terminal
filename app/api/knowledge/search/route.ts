import { buildCitations } from "@/lib/agent/citation-builder"
import { composeContextPacket } from "@/lib/agent/context-composer"
import { analyzeQuery } from "@/lib/agent/query-analyzer"
import { runRetrievalRouter } from "@/lib/agent/retrieval-router"
import { RetrievalLogPayload } from "@/lib/knowledge/types"
import { logRetrievalEvent } from "@/lib/knowledge/retrieval-logger"
import { ensureLocalBootstrap } from "@/lib/local-bootstrap"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

const normalizeMode = (value: unknown) => {
  if (value === "chat_only" || value === "grounded" || value === "auto") {
    return value
  }
  return "auto"
}

interface WorkspaceRow {
  id: string
  name: string
  instructions: string
}

export async function POST(request: Request) {
  const { workspace } = await ensureLocalBootstrap()
  const json = (await request.json()) as {
    query?: string
    mode?: "auto" | "chat_only" | "grounded"
    workspace_id?: string
    chat_id?: string
    message_id?: string
    top_k?: number
  }

  const query = json.query?.trim()
  if (!query) {
    return NextResponse.json({ message: "query 不能为空" }, { status: 400 })
  }

  const mode = normalizeMode(json.mode)
  const analysis = analyzeQuery({
    query,
    mode,
    topK: json.top_k
  })

  const workspaceId = json.workspace_id ?? workspace.id

  if (!analysis.shouldRetrieve) {
    return NextResponse.json({
      analysis,
      candidates: [],
      sources: [],
      citations: []
    })
  }

  const candidates = await runRetrievalRouter({
    analysis,
    workspaceId
  })

  const workspaceRows = await prisma.$queryRaw<WorkspaceRow[]>`
    SELECT "id", "name", "instructions"
    FROM "workspaces"
    WHERE "id" = ${workspaceId}::uuid
    LIMIT 1;
  `
  const workspaceRow = workspaceRows[0]

  const contextPacket = composeContextPacket({
    workspaceName: workspaceRow?.name ?? workspace.name,
    workspaceInstruction: workspaceRow?.instructions ?? "",
    query,
    candidates
  })
  const citations = buildCitations({ sources: contextPacket.sources })

  const logPayload: RetrievalLogPayload = {
    chat_id: json.chat_id ?? null,
    message_id: json.message_id ?? null,
    query,
    mode: analysis.mode,
    strategy: analysis.strategy,
    recalled_items: candidates.map(item => ({
      chunk_id: item.chunk_id,
      note_id: item.note_id,
      score: item.final_score
    })),
    final_context: {
      sources: contextPacket.sources,
      token_budget: contextPacket.token_budget,
      used_tokens: contextPacket.used_tokens
    }
  }
  await logRetrievalEvent(logPayload)

  return NextResponse.json({
    analysis,
    candidates,
    sources: contextPacket.sources,
    citations,
    context_preview: contextPacket.text
  })
}
