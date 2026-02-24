import { Tables, TablesInsert } from "@/types/database"

export const getAssistantCollectionsByAssistantId = async (_assistantId: string) => {
  return { collections: [] as Tables<"collections">[] }
}

export const createAssistantCollection = async (_assistantCollection: TablesInsert<"assistant_collections">) => {
  return null
}

export const createAssistantCollections = async (_assistantCollections: TablesInsert<"assistant_collections">[]) => {
  return []
}

export const deleteAssistantCollection = async (_assistantId: string, _collectionId: string) => {
  return true
}
