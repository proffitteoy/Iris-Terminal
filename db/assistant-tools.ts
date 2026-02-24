import { Tables, TablesInsert } from "@/types/database"

export const getAssistantToolsByAssistantId = async (_assistantId: string) => {
  return { tools: [] as Tables<"tools">[] }
}

export const createAssistantTool = async (_assistantTool: TablesInsert<"assistant_tools">) => {
  return null
}

export const createAssistantTools = async (_assistantTools: TablesInsert<"assistant_tools">[]) => {
  return []
}

export const deleteAssistantTool = async (_assistantId: string, _toolId: string) => {
  return true
}
