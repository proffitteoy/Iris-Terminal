import { Tables, TablesInsert, TablesUpdate } from "@/types/database"

export const getPromptById = async (_promptId: string) => {
  return null
}

export const getPromptWorkspacesByWorkspaceId = async (_workspaceId: string) => {
  return { prompts: [] as Tables<"prompts">[] }
}

export const getPromptWorkspacesByPromptId = async (_promptId: string) => {
  return { workspaces: [] as Tables<"workspaces">[] }
}

export const createPrompt = async (_prompt: TablesInsert<"prompts">, _workspaceId: string) => {
  return null
}

export const createPrompts = async (_prompts: TablesInsert<"prompts">[], _workspaceId: string) => {
  return []
}

export const createPromptWorkspaces = async (
  _items: { user_id: string; prompt_id: string; workspace_id: string }[]
) => {
  return []
}

export const updatePrompt = async (_promptId: string, _prompt: TablesUpdate<"prompts">) => {
  return null
}

export const deletePrompt = async (_promptId: string) => {
  return true
}

export const deletePromptWorkspace = async (_promptId: string, _workspaceId: string) => {
  return true
}
