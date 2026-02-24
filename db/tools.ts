import { Tables, TablesInsert, TablesUpdate } from "@/types/database"

export const getToolById = async (_toolId: string) => {
  return null
}

export const getToolWorkspacesByWorkspaceId = async (_workspaceId: string) => {
  return { tools: [] as Tables<"tools">[] }
}

export const getToolWorkspacesByToolId = async (_toolId: string) => {
  return { workspaces: [] as Tables<"workspaces">[] }
}

export const createTool = async (_tool: TablesInsert<"tools">, _workspaceId: string) => {
  return null
}

export const createTools = async (_tools: TablesInsert<"tools">[], _workspaceId: string) => {
  return []
}

export const createToolWorkspaces = async (
  _items: { user_id: string; tool_id: string; workspace_id: string }[]
) => {
  return []
}

export const updateTool = async (_toolId: string, _tool: TablesUpdate<"tools">) => {
  return null
}

export const deleteTool = async (_toolId: string) => {
  return true
}

export const deleteToolWorkspace = async (_toolId: string, _workspaceId: string) => {
  return true
}
