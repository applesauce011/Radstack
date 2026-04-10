// ============================================================
// RadStack — Flashcard Data Structure
// ============================================================
// Each subspecialty is a "deck group" with subsections.
// Each subsection has an array of cards.
//
// Card schema:
// {
//   id: string (unique),
//   front: {
//     question: string,
//     image?: { src: string, alt: string, caption?: string },
//     hint?: string,
//   },
//   back: {
//     answer: string,
//     explanation: string,        // concise background
//     keyFact: string,            // 💡 the lightbulb highlight
//     images?: [{ src, alt, caption }],
//     differentials?: [{ dx: string, image?: { src, alt } }],
//     radiopaediaUrl?: string,
//     tags?: string[],
//   }
// }
// ============================================================

export const SUBSPECIALTIES = [
  {
    id: 'neuro',
    label: 'Neuroradiology',
    icon: '🧠',
    color: '#8B5CF6',
    colorDim: 'rgba(139,92,246,0.15)',
    subsections: [
      {
        id: 'neuro-anatomy',
        label: 'Brain Anatomy',
        cards: [
          {
            id: 'neuro-anat-001',
            front: {
              question: 'Identify the structure indicated by the arrow on this axial CT.',
              image: {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Computed_tomography_of_human_brain_-_large.png/800px-Computed_tomography_of_human_brain_-_large.png',
                alt: 'Axial CT brain',
                caption: 'Axial CT brain at the level of the basal ganglia',
              },
              hint: 'C-shaped structure lateral to the third ventricle',
            },
            back: {
              answer: 'Caudate nucleus (head)',
              explanation: 'The caudate nucleus is a C-shaped deep gray matter structure forming the lateral wall of the frontal horn of the lateral ventricle. It is part of the striatum along with the putamen.',
              keyFact: 'Caudate atrophy → box-car ventricles → classic for Huntington disease.',
              radiopaediaUrl: 'https://radiopaedia.org/articles/caudate-nucleus',
              tags: ['anatomy', 'basal ganglia', 'CT'],
            },
          },
          {
            id: 'neuro-anat-002',
            front: {
              question: 'What is the name of the white matter tract connecting the two cerebral hemispheres, seen here on midline sagittal MRI?',
              image: {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/MRI_brain_sagittal_section.jpg/800px-MRI_brain_sagittal_section.jpg',
                alt: 'Midline sagittal MRI brain',
                caption: 'Midline sagittal T1 MRI',
              },
            },
            back: {
              answer: 'Corpus callosum',
              explanation: 'The largest white matter commissure connecting the two hemispheres. Divided into rostrum, genu, body, and splenium (anterior to posterior). The splenium is the thickest part.',
              keyFact: 'Genu = frontal lobes; Splenium = parietal/occipital lobes. Lesions here in MS = "Dawson fingers" on sagittal FLAIR.',
              radiopaediaUrl: 'https://radiopaedia.org/articles/corpus-callosum',
              tags: ['anatomy', 'white matter', 'MRI'],
            },
          },
        ],
      },
      {
        id: 'neuro-stroke',
        label: 'Stroke & Vascular',
        cards: [
          {
            id: 'neuro-stroke-001',
            front: {
              question: 'A 68-year-old presents with sudden left-sided weakness. What does this DWI MRI show and what is the diagnosis?',
              image: {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MCA_Territory_Infarct_-_DWI.jpg/800px-MCA_Territory_Infarct_-_DWI.jpg',
                alt: 'DWI MRI showing bright signal in right MCA territory',
                caption: 'DWI sequence, axial',
              },
            },
            back: {
              answer: 'Right MCA territory acute infarct',
              explanation: 'DWI bright signal (restricted diffusion) with corresponding ADC dark signal = cytotoxic edema from acute infarction. The MCA territory includes frontal, parietal, and temporal lobes laterally.',
              keyFact: 'DWI bright + ADC dark = true restriction = acute stroke. DWI bright + ADC bright = "T2 shine-through" — NOT acute ischemia.',
              radiopaediaUrl: 'https://radiopaedia.org/articles/middle-cerebral-artery-mca-infarct',
              tags: ['stroke', 'MCA', 'DWI', 'vascular'],
            },
          },
          {
            id: 'neuro-stroke-002',
            front: {
              question: 'What pattern of hemorrhage is shown on this non-contrast CT, and what is the classic etiology?',
              image: {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Subarachnoid_haemorrhage.jpg/800px-Subarachnoid_haemorrhage.jpg',
                alt: 'Non-contrast CT showing hyperdense blood in subarachnoid space',
                caption: 'Non-contrast CT head',
              },
            },
            back: {
              answer: 'Subarachnoid hemorrhage (SAH)',
              explanation: 'Blood filling the basal cisterns and sulci appears hyperdense on NCCT. Classic cause is a ruptured saccular (berry) aneurysm, most common at the circle of Willis.',
              keyFact: '"Worst headache of my life" + SAH → ruptured aneurysm until proven otherwise. Most common site: AComm > PComm > MCA bifurcation.',
              radiopaediaUrl: 'https://radiopaedia.org/articles/subarachnoid-haemorrhage',
              tags: ['hemorrhage', 'SAH', 'aneurysm', 'CT'],
            },
          },
        ],
      },
      {
        id: 'neuro-tumors',
        label: 'Brain Tumors',
        cards: [
          {
            id: 'neuro-tumor-001',
            front: {
              question: 'This contrast-enhanced MRI shows a ring-enhancing lesion in a 55-year-old with known lung cancer. What is the most likely diagnosis?',
              image: {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Glioblastoma_-_MR_coronal_with_contrast.jpg/800px-Glioblastoma_-_MR_coronal_with_contrast.jpg',
                alt: 'Coronal T1 post-contrast MRI showing ring-enhancing lesion',
                caption: 'Coronal T1+C MRI',
              },
            },
            back: {
              answer: 'Brain metastasis',
              explanation: 'Ring-enhancing lesions at the gray-white junction in a patient with known primary malignancy = metastases first. Lung is the #1 primary in both sexes.',
              keyFact: 'Ring-enhancing lesion mnemonic: MAGIC DR — Metastasis, Abscess, Glioblastoma, Infarct (subacute), Contusion, Demyelination, Radiation necrosis.',
              differentials: [
                { dx: 'Brain metastasis' },
                { dx: 'GBM (primary)' },
                { dx: 'Brain abscess' },
                { dx: 'Tumefactive MS' },
              ],
              radiopaediaUrl: 'https://radiopaedia.org/articles/brain-metastases',
              tags: ['tumor', 'metastasis', 'ring-enhancing', 'MRI'],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'chest',
    label: 'Chest Radiology',
    icon: '🫁',
    color: '#22D3EE',
    colorDim: 'rgba(34,211,238,0.15)',
    subsections: [
      {
        id: 'chest-anatomy',
        label: 'Chest Anatomy',
        cards: [
          {
            id: 'chest-anat-001',
            front: {
              question: 'On this PA chest radiograph, what structure is indicated by the arrow at the right heart border?',
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
    ],
  },
  {
    id: 'msk',
    label: 'MSK Radiology',
    icon: '🦴',
    color: '#F59E0B',
    colorDim: 'rgba(245,158,11,0.15)',
    subsections: [
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
    ],
  },
  {
    id: 'abdominal',
    label: 'Abdominal Radiology',
    icon: '🫀',
    color: '#10B981',
    colorDim: 'rgba(16,185,129,0.15)',
    subsections: [
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
      {
        id: 'abd-gi',
        label: 'GI Tract',
        cards: [
          {
            id: 'abd-gi-001',
            front: {
              question: 'A 70-year-old with sudden severe abdominal pain. What does this CT finding show?',
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
    ],
  },
]

// ============================================================
// Utility: flatten all cards across all decks
// ============================================================
export function getAllCards() {
  return SUBSPECIALTIES.flatMap(sub =>
    sub.subsections.flatMap(section =>
      section.cards.map(card => ({
        ...card,
        subspecialtyId: sub.id,
        subsectionId: section.id,
      }))
    )
  )
}

export function getCardsBySubspecialty(subspecialtyId) {
  const sub = SUBSPECIALTIES.find(s => s.id === subspecialtyId)
  if (!sub) return []
  return sub.subsections.flatMap(section =>
    section.cards.map(card => ({
      ...card,
      subspecialtyId: sub.id,
      subsectionId: section.id,
    }))
  )
}

export function getCardsBySubsection(subsectionId) {
  for (const sub of SUBSPECIALTIES) {
    const section = sub.subsections.find(s => s.id === subsectionId)
    if (section) {
      return section.cards.map(card => ({
        ...card,
        subspecialtyId: sub.id,
        subsectionId: section.id,
      }))
    }
  }
  return []
}

export function getSubspecialty(id) {
  return SUBSPECIALTIES.find(s => s.id === id)
}

export function getTotalCardCount() {
  return getAllCards().length
}
