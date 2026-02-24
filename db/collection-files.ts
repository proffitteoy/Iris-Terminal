import { Tables, TablesInsert } from "@/types/database"

export const getCollectionFilesByCollectionId = async (_collectionId: string) => {
  return { files: [] as Tables<"files">[] }
}

export const createCollectionFile = async (_collectionFile: TablesInsert<"collection_files">) => {
  return null
}

export const createCollectionFiles = async (_collectionFiles: TablesInsert<"collection_files">[]) => {
  return []
}

export const deleteCollectionFile = async (_collectionId: string, _fileId: string) => {
  return true
}
