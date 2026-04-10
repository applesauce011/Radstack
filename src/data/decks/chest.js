// ============================================================
// RadStack — Chest Radiology Deck
// ============================================================
// Edit ONLY this file when adding/updating chest cards.
// Card IDs must be unique across ALL deck files.
// Naming convention: chest-[section]-[###]
// ============================================================

export const chestSubsections = [
  {
    id: 'chest-anatomy',
    label: 'Chest Anatomy',
    cards: [
      {
        id: 'chest-anat-001',
        front: {
          question: 'On this PA chest radiograph, what structure forms the right heart border?',
          image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chest_X-ray_PA_3-8-2010.png/800px-Chest_X-ray_PA_3-8-2010.png',
            alt: 'PA chest radiograph',
            caption: 'PA Chest Radiograph',
          },
        },
        back: {
          answer: 'Right atrium',
          explanation: 'The right heart border on a PA chest X-ray is formed superiorly by the SVC and inferiorly by the right atrium. The left heart border is formed by the aortic knuckle, main pulmonary artery, left atrial appendage, and left ventricle.',
          keyFact: 'Silhouette sign: if a lesion erases a border, it must be in the same anatomical plane. Right heart border loss = right middle lobe pathology.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chest-x-ray-anatomy',
          tags: ['anatomy', 'CXR', 'heart borders'],
        },
      },
    ],
  },
  {
    id: 'chest-airways',
    label: 'Airways & COPD',
    cards: [],
  },
  {
    id: 'chest-ild',
    label: 'Interstitial Lung Disease',
    cards: [
      {
        id: 'chest-ild-001',
        front: {
          question: 'A 60-year-old male with progressive dyspnea. Describe the key findings on this HRCT and give the most likely diagnosis.',
          image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/IPF_before_LTx.jpg/800px-IPF_before_LTx.jpg',
            alt: 'HRCT chest showing UIP pattern',
            caption: 'HRCT chest, prone axial',
          },
        },
        back: {
          answer: 'UIP pattern — Usual Interstitial Pneumonia (IPF)',
          explanation: 'Key HRCT features of UIP: bilateral, peripheral, basal-predominant reticulation with honeycombing ± traction bronchiectasis. Absence of features suggesting alternative diagnosis.',
          keyFact: 'UIP = subpleural, basal, honeycombing. Ground glass in UIP is LESS than reticulation. If GGO > reticulation → think NSIP.',
          differentials: [
            { dx: 'IPF (UIP pattern)' },
            { dx: 'Fibrotic NSIP' },
            { dx: 'Chronic HP' },
            { dx: 'Connective tissue disease ILD' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/usual-interstitial-pneumonia',
          tags: ['ILD', 'UIP', 'IPF', 'HRCT', 'honeycombing'],
        },
      },
      {
        id: 'chest-ild-002',
        front: {
          question: 'Name the HRCT pattern shown. What is the characteristic distribution?',
          image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sarcoidosis_-_CT.jpg/800px-Sarcoidosis_-_CT.jpg',
            alt: 'CT chest showing perilymphatic nodules',
            caption: 'HRCT chest axial',
          },
        },
        back: {
          answer: 'Perilymphatic nodules — Sarcoidosis',
          explanation: 'Perilymphatic distribution: nodules along bronchovascular bundles, fissures, and subpleural regions. Upper and mid lobe predominance. Classic for sarcoidosis.',
          keyFact: 'Three nodule patterns: Perilymphatic (sarcoid, silicosis) → Centrilobular (HP, infection) → Random (miliary TB, hematogenous mets).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sarcoidosis-pulmonary-manifestations',
          tags: ['sarcoidosis', 'perilymphatic', 'nodules', 'HRCT'],
        },
      },
    ],
  },
  {
    id: 'chest-pleura',
    label: 'Pleura & Mediastinum',
    cards: [
      {
        id: 'chest-pleura-001',
        front: {
          question: 'What does this CT finding represent, and what is the key measurement to guide management?',
          image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pneumothorax_CT.jpg/800px-Pneumothorax_CT.jpg',
            alt: 'CT chest showing pneumothorax',
            caption: 'Axial CT chest lung windows',
          },
        },
        back: {
          answer: 'Pneumothorax',
          explanation: 'Pleural air appears as an absence of lung markings with a visible pleural edge. On CT, the visceral pleural line is clearly seen. The degree of collapse and mediastinal shift determine urgency.',
          keyFact: 'BTS criteria: pneumothorax >2 cm at the level of the hilum = large → requires intervention. Tension PTX: contralateral mediastinal shift + tracheal deviation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pneumothorax',
          tags: ['pneumothorax', 'pleura', 'CT', 'emergency'],
        },
      },
    ],
  },
  {
    id: 'chest-pulm-vascular',
    label: 'Pulmonary Vascular',
    cards: [],
  },
  {
    id: 'chest-infection',
    label: 'Infection & Consolidation',
    cards: [],
  },
  {
    id: 'chest-tumors',
    label: 'Thoracic Tumors',
    cards: [],
  },
]
