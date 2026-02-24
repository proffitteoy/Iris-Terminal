import { Tables, TablesInsert, TablesUpdate } from "@/types/database"

export const getFoldersByWorkspaceId = async (_workspaceId: string) => {
  return [] as Tables<"folders">[]
}

export const createFolder = async (_folder: TablesInsert<"folders">) => {
  return null
}

export const updateFolder = async (_folderId: string, _folder: TablesUpdate<"folders">) => {
  return null
}

export const deleteFolder = async (_folderId: string) => {
  return true
}
