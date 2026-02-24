import { Tables, TablesInsert } from "@/types/database"

export const getAssistantFilesByAssistantId = async (_assistantId: string) => {
  return { files: [] as Tables<"files">[] }
}

export const createAssistantFile = async (_assistantFile: TablesInsert<"assistant_files">) => {
  return null
}

export const createAssistantFiles = async (_assistantFiles: TablesInsert<"assistant_files">[]) => {
  return []
}

export const deleteAssistantFile = async (_assistantId: string, _fileId: string) => {
  return true
}
