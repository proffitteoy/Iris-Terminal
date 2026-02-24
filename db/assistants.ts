import { Tables, TablesInsert, TablesUpdate } from "@/types/database"

export const getAssistantById = async (_assistantId: string) => {
  return null
}

export const getAssistantWorkspacesByWorkspaceId = async (_workspaceId: string) => {
  return { assistants: [] as Tables<"assistants">[] }
}

export const getAssistantWorkspacesByAssistantId = async (_assistantId: string) => {
  return { workspaces: [] as Tables<"workspaces">[] }
}

export const createAssistant = async (_assistant: TablesInsert<"assistants">, _workspaceId: string) => {
  return null
}

export const createAssistants = async (_assistants: TablesInsert<"assistants">[], _workspaceId: string) => {
  return []
}

export const createAssistantWorkspaces = async (
  _items: { user_id: string; assistant_id: string; workspace_id: string }[]
) => {
  return []
}

export const updateAssistant = async (_assistantId: string, _assistant: TablesUpdate<"assistants">) => {
  return null
}

export const deleteAssistant = async (_assistantId: string) => {
  return true
}

export const deleteAssistantWorkspace = async (_assistantId: string, _workspaceId: string) => {
  return true
}
