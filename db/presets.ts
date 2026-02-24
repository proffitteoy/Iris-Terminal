import { Tables, TablesInsert, TablesUpdate } from "@/types/database"

export const getPresetById = async (_presetId: string) => {
  return null
}

export const getPresetWorkspacesByWorkspaceId = async (_workspaceId: string) => {
  return { presets: [] as Tables<"presets">[] }
}

export const getPresetWorkspacesByPresetId = async (_presetId: string) => {
  return { workspaces: [] as Tables<"workspaces">[] }
}

export const createPreset = async (_preset: TablesInsert<"presets">, _workspaceId: string) => {
  return null
}

export const createPresets = async (_presets: TablesInsert<"presets">[], _workspaceId: string) => {
  return []
}

export const createPresetWorkspaces = async (
  _items: { user_id: string; preset_id: string; workspace_id: string }[]
) => {
  return []
}

export const updatePreset = async (_presetId: string, _preset: TablesUpdate<"presets">) => {
  return null
}

export const deletePreset = async (_presetId: string) => {
  return true
}

export const deletePresetWorkspace = async (_presetId: string, _workspaceId: string) => {
  return true
}
