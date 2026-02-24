import { Tables, TablesInsert, TablesUpdate } from "@/types/database"

export const getModelById = async (_modelId: string) => {
  return null
}

export const getModelWorkspacesByWorkspaceId = async (_workspaceId: string) => {
  return { models: [] as Tables<"models">[] }
}

export const getModelWorkspacesByModelId = async (_modelId: string) => {
  return { workspaces: [] as Tables<"workspaces">[] }
}

export const createModel = async (_model: TablesInsert<"models">, _workspaceId: string) => {
  return null
}

export const createModels = async (_models: TablesInsert<"models">[], _workspaceId: string) => {
  return []
}

export const createModelWorkspaces = async (
  _items: { user_id: string; model_id: string; workspace_id: string }[]
) => {
  return []
}

export const updateModel = async (_modelId: string, _model: TablesUpdate<"models">) => {
  return null
}

export const deleteModel = async (_modelId: string) => {
  return true
}

export const deleteModelWorkspace = async (_modelId: string, _workspaceId: string) => {
  return true
}
