// ============================================================
// RadStack — Cheat Sheets Configuration
// ============================================================
// Maps the daily-review sheet package (public/sheets/) onto the same
// subspecialty tabs used by the flashcards. Each entry with a `file` is a
// real sheet; entries without one render as a disabled "coming soon" tab
// until that subspecialty's package arrives.
//
// Access model: only `nucs` is free. Every other sheet with a `file`
// requires an active paid subscription (checked in CheatSheetsPage).
// ============================================================

export const CHEAT_SHEET_FREE_IDS = new Set(['nucs'])

export const CHEAT_SHEETS = [
  { id: 'nucs', label: 'Nuclear Medicine', icon: '☢️', color: '#14B8A6', colorDim: 'rgba(20,184,166,0.15)', file: 'nucs.json' },
  { id: 'ir', label: 'Interventional Radiology', icon: '🩹', color: '#F97316', colorDim: 'rgba(249,115,22,0.15)', file: 'ir-vascular.json' },
  { id: 'msk', label: 'MSK Radiology', icon: '🦴', color: '#F59E0B', colorDim: 'rgba(245,158,11,0.15)', file: 'msk.json' },
  { id: 'chest', label: 'Chest Radiology', icon: '🫁', color: '#22D3EE', colorDim: 'rgba(34,211,238,0.15)', file: 'chest.json' },
  { id: 'neuro', label: 'Neuroradiology', icon: '🧠', color: '#8B5CF6', colorDim: 'rgba(139,92,246,0.15)' },
  { id: 'abdominal', label: 'Abdominal Radiology', icon: '🫀', color: '#10B981', colorDim: 'rgba(16,185,129,0.15)', file: 'gi.json' },
  { id: 'breast', label: 'Breast Radiology', icon: '🩻', color: '#F43F5E', colorDim: 'rgba(244,63,94,0.15)' },
  { id: 'gu', label: 'Genitourinary', icon: '🫘', color: '#3B82F6', colorDim: 'rgba(59,130,246,0.15)', file: 'gu.json' },
  { id: 'pediatric', label: 'Pediatric Radiology', icon: '👶', color: '#EC4899', colorDim: 'rgba(236,72,153,0.15)', file: 'peds.json' },
  { id: 'obstetrics', label: 'Obstetrics & Gynecology', icon: '🤰', color: '#EC4899', colorDim: 'rgba(236,72,153,0.15)' },
  { id: 'cardiac', label: 'Cardiac Radiology', icon: '❤️', color: '#DC2626', colorDim: 'rgba(220,38,38,0.15)' },
  { id: 'physics', label: 'Imaging Physics', icon: '⚛️', color: '#6366F1', colorDim: 'rgba(99,102,241,0.15)' },
]

export function getCheatSheet(id) {
  return CHEAT_SHEETS.find(s => s.id === id)
}

export function isCheatSheetFree(id) {
  return CHEAT_SHEET_FREE_IDS.has(id)
}
