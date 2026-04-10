// ============================================================
// RadStack — MSK Radiology Deck
// ============================================================
// Edit ONLY this file when adding/updating MSK cards.
// Card IDs must be unique across ALL deck files.
// Naming convention: msk-[section]-[###]
// ============================================================

export const mskSubsections = [
  {
    id: 'msk-anatomy',
    label: 'MSK Anatomy',
    cards: [
      {
        id: 'msk-anat-001',
        front: {
          question: 'Identify the structure labeled on this coronal MRI of the knee.',
          image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/MRI_of_human_knee.jpg/800px-MRI_of_human_knee.jpg',
            alt: 'Coronal MRI of the knee',
            caption: 'Coronal PD fat-sat MRI knee',
          },
        },
        back: {
          answer: 'Medial collateral ligament (MCL)',
          explanation: 'The MCL runs from the medial femoral condyle to the proximal tibia. It resists valgus stress. On MRI, it appears as a low signal band on all sequences when intact.',
          keyFact: 'MCL tears: Grade I (periligamentous edema), II (partial tear), III (complete). MCL injuries often associated with ACL tears and medial meniscus tears — "Unhappy Triad."',
          radiopaediaUrl: 'https://radiopaedia.org/articles/medial-collateral-ligament-of-the-knee',
          tags: ['anatomy', 'knee', 'ligament', 'MRI'],
        },
      },
    ],
  },
  {
    id: 'msk-trauma',
    label: 'Fractures & Trauma',
    cards: [
      {
        id: 'msk-trauma-001',
        front: {
          question: 'Describe the fracture pattern seen on this wrist radiograph. What is the diagnosis?',
          image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Colles_fracture.jpg/800px-Colles_fracture.jpg',
            alt: 'Lateral wrist X-ray showing distal radius fracture',
            caption: 'Lateral wrist radiograph',
          },
        },
        back: {
          answer: "Colles' fracture",
          explanation: "Distal radius fracture with dorsal angulation and displacement ('dinner fork' deformity). Typically from FOOSH (fall on outstretched hand). Common in elderly osteoporotic women.",
          keyFact: "Colles = distal radius, dorsal tilt (dinner fork). Smith's = distal radius, volar tilt (reverse Colles). Barton = intra-articular with subluxation.",
          radiopaediaUrl: 'https://radiopaedia.org/articles/colles-fracture',
          tags: ['fracture', 'wrist', 'distal radius', 'trauma'],
        },
      },
      {
        id: 'msk-trauma-002',
        front: {
          question: 'A 25-year-old athlete has lateral hip pain after a fall. What injury is shown on this pelvis X-ray?',
          image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Fractured_pelvis.jpg/800px-Fractured_pelvis.jpg',
            alt: 'AP pelvis radiograph',
            caption: 'AP pelvis radiograph',
          },
        },
        back: {
          answer: 'Avulsion fracture of the anterior superior iliac spine (ASIS)',
          explanation: 'Avulsion injuries occur at apophyseal sites in adolescents/young adults. ASIS = sartorius + TFL. AIIS = rectus femoris (straight head). Ischial tuberosity = hamstrings.',
          keyFact: 'Apophyseal avulsion sites in the pelvis: ASIS (sartorius), AIIS (rectus femoris), ischial tuberosity (hamstrings), lesser trochanter (iliopsoas).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/avulsion-fracture-of-the-anterior-superior-iliac-spine',
          tags: ['avulsion', 'pelvis', 'ASIS', 'trauma', 'apophysis'],
        },
      },
    ],
  },
  { id: 'msk-arthritis',  label: 'Arthritis & Crystal Disease', cards: [] },
  { id: 'msk-tumors',    label: 'Bone & Soft Tissue Tumors',   cards: [] },
  { id: 'msk-infection', label: 'Infection & Osteomyelitis',   cards: [] },
  { id: 'msk-sports',    label: 'Sports & Tendons',            cards: [] },
  { id: 'msk-metabolic', label: 'Metabolic Bone Disease',      cards: [] },
]
