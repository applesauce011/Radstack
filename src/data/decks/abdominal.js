// ============================================================
// RadStack — Abdominal Radiology Deck
// ============================================================
// Naming convention: abd-[section]-[###]
// ============================================================

export const abdominalSubsections = [
  {
    id: 'abd-liver',
    label: 'Liver',
    cards: [
      {
        id: 'abd-liver-001',
        front: {
          question: 'A 45-year-old with known cirrhosis. What does this arterial phase CT finding represent, and what scoring system is used?',
          image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/HCC_-_CT.jpg/800px-HCC_-_CT.jpg',
            alt: 'Arterial phase CT abdomen showing enhancing liver lesion',
            caption: 'Arterial phase CT abdomen',
          },
        },
        back: {
          answer: 'Hepatocellular carcinoma (HCC) — LI-RADS 5',
          explanation: 'Classic HCC imaging hallmark: arterial phase hyperenhancement (APHE) with washout on portal venous phase. "Washout + capsule" in a cirrhotic liver = LI-RADS 5 (definitely HCC).',
          keyFact: 'LI-RADS 5 criteria: APHE + at least one of: washout, enhancing capsule, threshold growth. No biopsy needed for treatment in cirrhotic liver.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatocellular-carcinoma',
          tags: ['liver', 'HCC', 'LI-RADS', 'CT', 'cirrhosis'],
        },
      },
    ],
  },
  { id: 'abd-biliary',    label: 'Biliary System',     cards: [] },
  { id: 'abd-pancreas',  label: 'Pancreas',            cards: [] },
  { id: 'abd-spleen',    label: 'Spleen',              cards: [] },
  {
    id: 'abd-gi',
    label: 'GI Tract',
    cards: [
      {
        id: 'abd-gi-001',
        front: {
          question: 'A 70-year-old with sudden severe abdominal pain. What does this finding show?',
          image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Pneumoperitoneum_-_Xray.jpg/800px-Pneumoperitoneum_-_Xray.jpg',
            alt: 'Upright chest X-ray showing free air under diaphragm',
            caption: 'Upright chest radiograph',
          },
        },
        back: {
          answer: 'Pneumoperitoneum (free air under the diaphragm)',
          explanation: 'Free intraperitoneal air is seen under the right hemidiaphragm on an upright CXR. Most common cause is perforated hollow viscus (peptic ulcer > diverticular disease).',
          keyFact: 'Rigler sign on supine AXR = air on both sides of bowel wall = pneumoperitoneum. On CT, free air is most sensitive (even small amounts).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pneumoperitoneum',
          tags: ['pneumoperitoneum', 'free air', 'perforation', 'CXR', 'emergency'],
        },
      },
    ],
  },
  { id: 'abd-peritoneum', label: 'Peritoneum & Mesentery', cards: [] },
  { id: 'abd-adrenal',   label: 'Adrenal Glands',      cards: [] },
  { id: 'abd-renal',     label: 'Kidneys & Ureters',   cards: [] },
]
