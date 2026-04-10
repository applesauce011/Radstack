// ============================================================
// RadStack — Subspecialty Configuration
// ============================================================
// Defines the display metadata for each subspecialty deck.
// Card content lives in ./decks/[subspecialty].js
//
// To add a new subspecialty:
//   1. Add an entry here
//   2. Create src/data/decks/[id].js  (see any existing file as template)
//   3. Import and add it to DECK_MODULES in index.js
// ============================================================

export const SUBSPECIALTY_CONFIG = [
  {
    id: 'neuro',
    label: 'Neuroradiology',
    icon: '🧠',
    color: '#8B5CF6',
    colorDim: 'rgba(139,92,246,0.15)',
  },
  {
    id: 'chest',
    label: 'Chest Radiology',
    icon: '🫁',
    color: '#22D3EE',
    colorDim: 'rgba(34,211,238,0.15)',
  },
  {
    id: 'msk',
    label: 'MSK Radiology',
    icon: '🦴',
    color: '#F59E0B',
    colorDim: 'rgba(245,158,11,0.15)',
  },
  {
    id: 'abdominal',
    label: 'Abdominal Radiology',
    icon: '🫀',
    color: '#10B981',
    colorDim: 'rgba(16,185,129,0.15)',
  },
  {
    id: 'breast',
    label: 'Breast Radiology',
    icon: '🩻',
    color: '#F43F5E',
    colorDim: 'rgba(244,63,94,0.15)',
  },
  {
    id: 'gu',
    label: 'Genitourinary',
    icon: '🫘',
    color: '#3B82F6',
    colorDim: 'rgba(59,130,246,0.15)',
  },
  {
    id: 'pediatric',
    label: 'Pediatric Radiology',
    icon: '👶',
    color: '#EC4899',
    colorDim: 'rgba(236,72,153,0.15)',
  },
  {
    id: 'nucs',
    label: 'Nuclear Medicine',
    icon: '☢️',
    color: '#14B8A6',
    colorDim: 'rgba(20,184,166,0.15)',
  },
  {
    id: 'ir',
    label: 'Interventional Radiology',
    icon: '🩹',
    color: '#F97316',
    colorDim: 'rgba(249,115,22,0.15)',
  },
  {
    id: 'emergency',
    label: 'Emergency Radiology',
    icon: '🚨',
    color: '#EF4444',
    colorDim: 'rgba(239,68,68,0.15)',
  },
]
