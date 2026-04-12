// ============================================================
// RadStack — Imaging Physics Deck
// ============================================================
// Naming convention: physics-[section]-[###]
// ============================================================

export const physicsSubsections = [
  {
    id: 'physics-xray',
    label: 'X-Ray & Fluoroscopy',
    cards: [
      {
        id: 'physics-xray-001',
        front: {
          question: 'What is the photoelectric effect and at what photon energies does it predominate in diagnostic imaging?',
          hint: 'Think about which tissues exploit this effect for contrast.',
        },
        back: {
          answer: 'Complete absorption of an incident photon by an inner-shell electron, which is ejected from the atom. Predominates at lower photon energies (< ~80 keV in soft tissue) and with high atomic number (Z) materials.',
          explanation: 'The probability of the photoelectric effect is proportional to Z³/E³ — it increases sharply with atomic number and decreases with photon energy. Iodine (Z=53) and barium (Z=56) exploit this for contrast. Bone (calcium, Z=20) also benefits relative to soft tissue (Z≈7). At diagnostic energies, the photoelectric effect is the primary source of subject contrast on radiographs.',
          keyFact: 'Photoelectric effect ∝ Z³/E³ — this is why iodine and barium are such effective contrast agents, and why higher kVp reduces soft-tissue contrast.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/photoelectric-effect',
          tags: ['physics', 'X-ray', 'photoelectric', 'contrast', 'kVp'],
        },
      },
    ],
  },
]
