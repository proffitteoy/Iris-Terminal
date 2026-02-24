import { Tables, TablesInsert, TablesUpdate } from "@/types/database"

export const getCollectionById = async (_collectionId: string) => {
  return null
}

export const getCollectionWorkspacesByWorkspaceId = async (_workspaceId: string) => {
  return { collections: [] as Tables<"collections">[] }
}

export const getCollectionWorkspacesByCollectionId = async (_collectionId: string) => {
  return { workspaces: [] as Tables<"workspaces">[] }
}

export const createCollection = async (_collection: TablesInsert<"collections">, _workspaceId: string) => {
  return null
}

export const createCollections = async (_collections: TablesInsert<"collections">[], _workspaceId: string) => {
  return []
}

export const createCollectionWorkspaces = async (
  _items: { user_id: string; collection_id: string; workspace_id: string }[]
) => {
  return []
}

export const updateCollection = async (_collectionId: string, _collection: TablesUpdate<"collections">) => {
  return null
}

export const deleteCollection = async (_collectionId: string) => {
  return true
}

export const deleteCollectionWorkspace = async (_collectionId: string, _workspaceId: string) => {
  return true
}
