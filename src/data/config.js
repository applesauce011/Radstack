// ============================================================
// RadStack — Subspecialty Configuration
// ============================================================
// Defines the display metadata for each subspecialty deck.
// Card content lives in ./decks/[subspecialty].js
//
// Access model:
//   ANATOMY_SECTIONS — admin-granted access required
//   Everything else  — free for all users
// ============================================================

export const LAST_UPDATED = 'April 2026'

// ── Free sections ─────────────────────────────────────────────
// These sections are accessible to all users (no account needed).
// All other non-anatomy sections require a premium subscription.
export const FREE_SECTIONS = new Set([
  'msk-tumors',          // Bone & Soft Tissue Tumors  — MSK
  'neuro-stroke',        // Stroke & Vascular           — Neuroradiology
  'chest-anatomy',       // Chest Anatomy               — Chest
  'abd-gi-esophagus',   // Esophagus                   — Abdominal
  'breast-anatomy',      // Anatomy & Technique         — Breast
  'gu-retroperitoneum',  // Retroperitoneum & Adrenal   — GU
  'peds-chest',          // Pediatric Chest             — Pediatric
  'nucs-physics',        // Radiopharmacy & Physics     — Nuclear Medicine
  'ir-vasc-anatomy',     // Vascular Anatomy            — IR
  'ob-early-pregnancy',  // Early Pregnancy & Viability — OB/GYN
  'cardiac-anatomy',     // Cardiac Anatomy & Physiology — Cardiac
  'physics-contrast',    // Contrast Media              — Physics
])

// ── Anatomy-gated sections ────────────────────────────────────
// Users must be granted anatomy access by an admin to study
// these decks. These are hidden entirely from users without access.
export const ANATOMY_SECTIONS = new Set([
  'neuro-anatomy',        // Brain Anatomy
  'neuro-spine-anatomy',  // Spine Anatomy
  'neuro-head-neck',      // Head, Neck & Skull Base Anatomy
  'msk-shoulder-anatomy', // Shoulder Anatomy
  'msk-knee-anatomy',     // Knee Anatomy
  'msk-ankle-anatomy',    // Ankle Anatomy
  'msk-wrist-anatomy',    // Wrist Anatomy
])

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
    id: 'obstetrics',
    label: 'Obstetrics & Gynecology',
    icon: '🤰',
    color: '#EC4899',
    colorDim: 'rgba(236,72,153,0.15)',
  },
  {
    id: 'cardiac',
    label: 'Cardiac Radiology',
    icon: '❤️',
    color: '#DC2626',
    colorDim: 'rgba(220,38,38,0.15)',
  },
  {
    id: 'physics',
    label: 'Imaging Physics',
    icon: '⚛️',
    color: '#6366F1',
    colorDim: 'rgba(99,102,241,0.15)',
  },
]
