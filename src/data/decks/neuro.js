// ============================================================
// RadStack — Neuroradiology Deck
// ============================================================
// Edit ONLY this file when adding/updating neuro cards.
// Card IDs must be unique across ALL deck files.
// Naming convention: neuro-[section]-[###]
// ============================================================


export const neuroSubsections = [
  {
    id: 'neuro-anatomy',
    label: 'Brain Anatomy',
    cards: [
      {
        id: 'neuro-branat-001',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #1?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #1',
          },
          hint: 'Anterior-most part of the corpus callosum',
        },
        back: {
          answer: 'Rostrum of the Corpus Callosum',
          explanation: 'The rostrum is the thin, inferior-most anterior portion of the corpus callosum, connecting the genu to the lamina terminalis. It is the thinnest part of the corpus callosum and lies just above the anterior commissure. Absence or thinning of the rostrum is an early marker of corpus callosum agenesis/dysgenesis.',
          keyFact: 'In corpus callosum agenesis, the parts disappear in order: posterior body and splenium first, then genu, then rostrum last — the rostrum is the final part to form and first to be missing on imaging.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/corpus-callosum',
          tags: ['MRI', 'neuro', 'anatomy', 'corpus callosum', 'midline', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-002',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #2?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #2',
          },
          hint: 'Knee-shaped anterior bend of the corpus callosum',
        },
        back: {
          answer: 'Genu of the Corpus Callosum',
          explanation: 'The genu is the anteriorly curved "knee" of the corpus callosum. It contains fibers connecting the prefrontal cortices bilaterally (forceps minor). On sagittal MRI, it is the most anterior rounded portion before it narrows into the rostrum. It is a common site for white matter changes in MS and small vessel disease.',
          keyFact: 'The genu connects the prefrontal lobes via forceps minor; the splenium connects the occipital lobes via forceps major — remember G for Genu = front, S for Splenium = back.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/genu-of-corpus-callosum',
          tags: ['MRI', 'neuro', 'anatomy', 'corpus callosum', 'midline', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-003',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #3?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #3',
          },
        },
        back: {
          answer: 'Body of the Corpus Callosum',
          explanation: 'The body (trunk) is the long middle segment of the corpus callosum running in the anteroposterior direction between the genu and splenium. It lies superior to the fornix and third ventricle. The body connects the motor and premotor cortices bilaterally and is well seen on midline sagittal MRI as a broad white matter band.',
          keyFact: 'The corpus callosum from anterior to posterior: Rostrum → Genu → Body → Splenium. A useful mnemonic: "Really Good Brain Stuff."',
          radiopaediaUrl: 'https://radiopaedia.org/articles/corpus-callosum',
          tags: ['MRI', 'neuro', 'anatomy', 'corpus callosum', 'midline', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-004',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #4?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #4',
          },
          hint: 'Thickest, most posterior part of the corpus callosum',
        },
        back: {
          answer: 'Splenium of the Corpus Callosum',
          explanation: 'The splenium is the posterior bulbous thickening of the corpus callosum. It contains fibers connecting the occipital and posterior parietal cortices (forceps major). It is the most commonly involved segment in various pathologies including MS plaques, lymphoma, Marchiafava-Bignami disease, and osmotic demyelination. It is also the last segment to mature myelinate (~6 months of age).',
          keyFact: 'Splenium lesions: MS (most common), lymphoma, Marchiafava-Bignami (alcohol), osmotic demyelination, and "MERS" (mild encephalitis/encephalopathy with reversible splenium lesion).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/splenium-of-corpus-callosum',
          tags: ['MRI', 'neuro', 'anatomy', 'corpus callosum', 'midline', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-005',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #5?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #5',
          },
          hint: 'Small grey matter bridge connecting the two thalami',
        },
        back: {
          answer: 'Massa Intermedia of the Thalami (Interthalamic Adhesion)',
          explanation: 'The massa intermedia (interthalamic adhesion) is a grey matter bridge connecting the two thalami across the third ventricle. It is present in approximately 70–80% of individuals and absent in ~20% as a normal variant. It is not a commissure (no axonal crossing). Its absence is associated with certain congenital anomalies including corpus callosum agenesis.',
          keyFact: 'The massa intermedia is absent in ~20% of normal individuals — do not mistake its absence for pathology. It is NOT a commissure; it contains no crossing axons.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/interthalamic-adhesion',
          tags: ['MRI', 'neuro', 'anatomy', 'thalamus', 'midline', 'sagittal', 'third ventricle'],
        },
      },
      {
        id: 'neuro-branat-006',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #6?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #6',
          },
          hint: 'Most superior part of the brainstem, between the diencephalon and pons',
        },
        back: {
          answer: 'Midbrain (Mesencephalon)',
          explanation: 'The midbrain is the most superior brainstem segment, connecting to the diencephalon above and the pons below. On sagittal MRI, it is identified by the tectum (quadrigeminal plate) posteriorly and the cerebral peduncles anteriorly. It houses the oculomotor (CN III) and trochlear (CN IV) nuclei. The midbrain-pons junction is at the level of the inferior colliculi.',
          keyFact: 'Midbrain landmarks: tectum (quadrigeminal plate) posteriorly, tegmentum centrally, cerebral peduncles anteriorly. "Hummingbird sign" of midbrain atrophy = PSP (progressive supranuclear palsy).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/midbrain',
          tags: ['MRI', 'neuro', 'anatomy', 'brainstem', 'midbrain', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-007',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #7?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #7',
          },
          hint: 'Middle brainstem segment, contains the basis pontis',
        },
        back: {
          answer: 'Pons',
          explanation: 'The pons is the middle segment of the brainstem, lying between the midbrain superiorly and medulla oblongata inferiorly. On sagittal MRI, it is characterized by the prominent ventral bulge of the basis pontis. It contains CN V–VIII nuclei and the pontine micturition centre. The fourth ventricle lies dorsal to the pons and medulla.',
          keyFact: '"Hot cross bun sign" on axial MRI = cruciform T2 hyperintensity in pons = multiple system atrophy (MSA-C). Central pontine myelinolysis (osmotic demyelination) causes characteristic "trident" shape on axial imaging.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pons',
          tags: ['MRI', 'neuro', 'anatomy', 'brainstem', 'pons', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-008',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #8?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #8',
          },
          hint: 'Most inferior brainstem segment, continuous with the spinal cord',
        },
        back: {
          answer: 'Medulla Oblongata',
          explanation: 'The medulla oblongata is the most caudal brainstem segment, continuous with the cervical spinal cord at the foramen magnum. It contains the cardiac, respiratory, and vasomotor centres as well as CN IX–XII nuclei. On sagittal MRI, it is identified as the tapering inferior brainstem below the pons. The medullary pyramids (corticospinal tracts) are on its ventral surface.',
          keyFact: 'Lateral medullary (Wallenberg) syndrome = PICA or vertebral artery occlusion → crossed findings: ipsilateral face + contralateral body sensory loss, ipsilateral Horner, dysphagia, vertigo.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/medulla-oblongata',
          tags: ['MRI', 'neuro', 'anatomy', 'brainstem', 'medulla', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-009',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #9?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #9',
          },
          hint: 'Four bumps on the dorsal midbrain surface',
        },
        back: {
          answer: 'Quadrigeminal Plate of the Midbrain (Tectum)',
          explanation: 'The quadrigeminal plate (tectum) forms the dorsal surface of the midbrain and consists of two pairs of colliculi: the superior colliculi (visual reflexes) and inferior colliculi (auditory reflexes). On sagittal MRI, it appears as a four-bump contour on the dorsal midbrain. The pineal gland sits just superior and posterior to the quadrigeminal plate.',
          keyFact: 'Parinaud syndrome (dorsal midbrain syndrome) = compression of superior colliculi by pineal region mass → upgaze palsy, convergence-retraction nystagmus, and light-near dissociation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/quadrigeminal-plate',
          tags: ['MRI', 'neuro', 'anatomy', 'midbrain', 'tectum', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-010',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #10?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #10',
          },
          hint: 'Master endocrine gland, sits in the sella turcica',
        },
        back: {
          answer: 'Pituitary Gland',
          explanation: 'The pituitary gland sits within the sella turcica of the sphenoid bone. On sagittal MRI, the anterior lobe (adenohypophysis) is isointense to grey matter on T1, while the posterior lobe (neurohypophysis) shows characteristic T1 hyperintensity due to ADH-containing neurosecretory granules. Normal height is ≤8 mm in adults (up to 10–12 mm in pregnant/lactating women).',
          keyFact: 'Loss of the posterior pituitary T1 bright spot = diabetes insipidus until proven otherwise. Normal pituitary height: ≤8 mm adults, ≤10–12 mm in pregnancy/lactation, ≤6 mm in children.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pituitary-gland',
          tags: ['MRI', 'neuro', 'anatomy', 'pituitary', 'sella', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-011',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #11?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #11',
          },
          hint: 'Posterior slope of the sella turcica, formed by the basilar part of the occipital bone',
        },
        back: {
          answer: 'Clivus',
          explanation: 'The clivus is a bony structure formed by the basilar part of the occipital bone (lower two-thirds) and the body of the sphenoid (upper one-third), forming the posterior wall of the nasopharynx and floor of the posterior cranial fossa. On T1 MRI, the clivus is normally hyperintense due to fatty marrow. T1 hypointensity of the clivus is a red flag for marrow replacement by tumour or infection.',
          keyFact: 'Chordoma is the classic primary tumour of the clivus — midline, T2 hyperintense, lobulated, destructive, with characteristic "honeycomb" or physaliphorous cells. T1 hypointensity of clivus = marrow replacement until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/clivus',
          tags: ['MRI', 'neuro', 'anatomy', 'clivus', 'skull base', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-012',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #12?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #12',
          },
          hint: 'Central foliated lobule of the cerebellum on the midline',
        },
        back: {
          answer: 'Cerebellar Vermis',
          explanation: 'The cerebellar vermis is the midline unpaired portion of the cerebellum, flanked by the two cerebellar hemispheres. On sagittal midline MRI, its distinct lobules (lingula, centralis, culmen, declive, folium, tuber, pyramis, uvula, and nodulus) are visible. The vermis coordinates truncal balance and gait; isolated vermis lesions cause truncal ataxia.',
          keyFact: 'Vermis hypoplasia/dysgenesis = key feature of Dandy-Walker malformation (triad: vermis hypoplasia, enlarged 4th ventricle, posterior fossa cyst communicating with 4th ventricle). Nodulus + uvula of vermis = flocculonodular lobe (vestibulocerebellum).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebellar-vermis',
          tags: ['MRI', 'neuro', 'anatomy', 'cerebellum', 'vermis', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-013',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #13?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #13',
          },
          hint: 'Inferior tip of the cerebellar hemisphere that extends toward the foramen magnum',
        },
        back: {
          answer: 'Cerebellar Tonsil',
          explanation: 'The cerebellar tonsils are the most inferior portions of the cerebellar hemispheres, normally positioned at or above the level of the foramen magnum. On sagittal MRI, they appear as rounded structures just posterior to the medulla. Tonsillar position is measured relative to the McRae line (basion to opisthion). Herniation >5 mm below the foramen magnum = Chiari I malformation.',
          keyFact: 'Chiari I = cerebellar tonsils >5 mm below foramen magnum on sagittal MRI. Associated with syringomyelia in ~30–70%. Chiari II = tonsillar herniation + myelomeningocele + beaked tectum + lückenschädel skull.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebellar-tonsils',
          tags: ['MRI', 'neuro', 'anatomy', 'cerebellum', 'tonsil', 'Chiari', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-014',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #14?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #14',
          },
          hint: 'CSF-filled space dorsal to the pons and medulla, anterior to the cerebellum',
        },
        back: {
          answer: 'Fourth Ventricle',
          explanation: 'The fourth ventricle is a diamond-shaped CSF space lying between the brainstem (pons and medulla) anteriorly and the cerebellum posteriorly. It communicates with the third ventricle via the cerebral aqueduct (of Sylvius) and with the subarachnoid space via the foramina of Magendie (median) and Luschka (lateral). Obstruction at the level of the fourth ventricle causes obstructive hydrocephalus.',
          keyFact: 'Choroid plexus papilloma in children: most common in the lateral ventricle (atrium). In adults: most common in the fourth ventricle. Ependymoma in children: "plastic" tumour of 4th ventricle that squeezes through foramina — best distinguishing feature from medulloblastoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fourth-ventricle',
          tags: ['MRI', 'neuro', 'anatomy', 'fourth ventricle', 'posterior fossa', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-015',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #15?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #15',
          },
          hint: 'Large CSF-filled space between the cerebellum and the inner surface of the occipital bone',
        },
        back: {
          answer: 'Cisterna Magna (Cerebellomedullary Cistern)',
          explanation: 'The cisterna magna is the largest subarachnoid cistern, lying posterior to the medulla and inferior to the cerebellum. It communicates with the fourth ventricle via the foramen of Magendie. A prominent cisterna magna (>10 mm) may be a normal variant ("mega cisterna magna") or associated with Dandy-Walker spectrum. Unlike Dandy-Walker, mega cisterna magna has a normal vermis and no communication with the 4th ventricle.',
          keyFact: 'Dandy-Walker vs. mega cisterna magna: in Dandy-Walker, the posterior fossa cyst communicates with the 4th ventricle and the vermis is hypoplastic; in mega cisterna magna, the vermis is normal and the 4th ventricle is separate.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cisterna-magna',
          tags: ['MRI', 'neuro', 'anatomy', 'cisterna magna', 'posterior fossa', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-016',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #16?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #16',
          },
          hint: 'CSF cistern posterior to the quadrigeminal plate',
        },
        back: {
          answer: 'Quadrigeminal Plate Cistern (Superior Cistern / Ambient Cistern)',
          explanation: 'The quadrigeminal plate cistern (also called the superior cistern or quadrigeminal cistern) is the subarachnoid space posterior to the quadrigeminal plate of the midbrain. It communicates with the ambient cisterns laterally and the cisterna magna inferiorly. It is a key landmark on sagittal MRI and is the location of the pineal gland and vein of Galen. Arachnoid cysts and pineal region masses arise here.',
          keyFact: 'Pineal region masses occupying the quadrigeminal cistern: germ cell tumour (most common in young males), pineocytoma, pineoblastoma, and arachnoid cyst. All can compress the tectum and cause Parinaud syndrome + obstructive hydrocephalus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/quadrigeminal-cistern',
          tags: ['MRI', 'neuro', 'anatomy', 'cistern', 'pineal', 'midbrain', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-017',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #17?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #17',
          },
          hint: 'Dural fold separating the cerebellum from the occipital lobes',
        },
        back: {
          answer: 'Tentorium Cerebelli',
          explanation: 'The tentorium cerebelli is a crescent-shaped dural fold that separates the cerebellum (infratentorial compartment) from the occipital lobes (supratentorial compartment). It is attached to the posterior clinoid processes anteriorly and the transverse sinuses posteriorly. The tentorial incisura is the opening through which the midbrain passes. Uncal herniation (transtentorial herniation) occurs when the medial temporal lobe is forced through this opening.',
          keyFact: 'Supratentorial vs. infratentorial lesions: the tentorium is the dividing line. Tentorial incisura transmits CN III — ipsilateral CN III palsy ("blown pupil") is the classic sign of uncal transtentorial herniation compressing CN III.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tentorium-cerebelli',
          tags: ['MRI', 'neuro', 'anatomy', 'tentorium', 'dura', 'posterior fossa', 'sagittal'],
        },
      },
      {
        id: 'neuro-branat-018',
        front: {
          question: 'On this mid-sagittal T1 MRI, what structure is labeled #18?',
          image: {
            src: '/images_neuro/brain01.png',
            alt: 'Mid-sagittal T1 brain MRI with numbered anatomical structures',
            caption: 'Identify structure #18',
          },
          hint: 'C-shaped gyrus arching over the corpus callosum on the medial surface',
        },
        back: {
          answer: 'Cingulate Gyrus',
          explanation: 'The cingulate gyrus is a C-shaped cortical gyrus on the medial surface of each cerebral hemisphere, arching above and around the corpus callosum. It is a core component of the limbic system and is involved in emotion, learning, and memory. The cingulate sulcus separates it from the medial frontal and parietal cortex. The posterior cingulate cortex connects to the precuneus and is a key node in the default mode network.',
          keyFact: 'Subfalcine herniation = cingulate gyrus displaced under the falx cerebri by an ipsilateral mass. It is the most common type of intracranial herniation and can compress the anterior cerebral artery causing ACA territory infarction.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cingulate-gyrus',
          tags: ['MRI', 'neuro', 'anatomy', 'cingulate', 'limbic', 'medial cortex', 'sagittal'],
        },
      },

  {
    id: 'neuro-branat-019',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #1?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #1',
      },
      hint: 'White matter commissure spanning the interhemispheric fissure — superior-most labeled structure',
    },
    back: {
      answer: 'Body of the Corpus Callosum',
      explanation: 'The corpus callosum is the largest white matter commissure connecting the cerebral hemispheres. Its body is the long middle segment between the genu anteriorly and splenium posteriorly. On sagittal T1, it appears as a broad hypointense band (relative to cortex) arching over the lateral ventricles. Agenesis or dysgenesis of the corpus callosum is associated with Chiari II, Dandy-Walker, and holoprosencephaly.',
      keyFact: 'The corpus callosum develops from anterior to posterior — genu first, splenium last. Partial agenesis therefore always spares the genu and affects the splenium/posterior body.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/corpus-callosum',
      tags: ['MRI', 'neuroanatomy', 'midline', 'white matter', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-020',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #2?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #2',
      },
      hint: 'Posterior bulbous end of the largest white matter commissure',
    },
    back: {
      answer: 'Splenium of the Corpus Callosum',
      explanation: 'The splenium is the thickest and most posterior part of the corpus callosum. It contains fibers interconnecting the occipital and posterior parietal lobes. The splenium is particularly vulnerable to osmotic demyelination and is the last segment to develop embryologically. Isolated splenium lesions are seen with Marchiafava-Bignami disease, MERS (mild encephalitis with reversible splenium lesion), and hypoglycemia.',
      keyFact: 'Splenium restricted diffusion with clinical encephalopathy → think MERS or hypoglycemia. Splenium + alcohol/malnutrition → Marchiafava-Bignami.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/splenium-of-the-corpus-callosum',
      tags: ['MRI', 'neuroanatomy', 'midline', 'white matter', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-021',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #3?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #3',
      },
      hint: 'Arched white matter bundle running beneath the corpus callosum, connecting hippocampus to mammillary bodies',
    },
    back: {
      answer: 'Fornix',
      explanation: 'The fornix is a paired C-shaped white matter tract that forms the main efferent pathway of the hippocampus, projecting to the mammillary bodies (via the postcommissural fornix) and septal nuclei (precommissural fornix). It runs along the inferior surface of the corpus callosum as the body, then arches downward as the columns into the hypothalamus. Damage to the fornix causes anterograde amnesia similar to hippocampal injury.',
      keyFact: 'Fornix → mammillary bodies → anterior thalamus → cingulate cortex = Papez circuit. Disruption at any point = anterograde amnesia.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/fornix-brain',
      tags: ['MRI', 'neuroanatomy', 'midline', 'limbic', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-022',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #4?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #4',
      },
      hint: 'Gray matter bridge crossing the third ventricle between the two thalami — absent in ~20% of people',
    },
    back: {
      answer: 'Massa Intermedia (Interthalamic Adhesion)',
      explanation: 'The massa intermedia is a midline gray matter connection across the third ventricle between the two thalami. It is a normal anatomical variant absent in approximately 20–25% of individuals (more often absent in males). It is not a true commissure (does not carry decussating fibers). On sagittal MRI it appears as a round soft-tissue nodule projecting into the third ventricle, which should not be mistaken for a colloid cyst or third ventricular mass.',
      keyFact: 'Massa intermedia is absent in ~20% of normals. Do not mistake it for a third ventricular mass — it lacks rim enhancement and is isointense to gray matter.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/interthalamic-adhesion',
      tags: ['MRI', 'neuroanatomy', 'thalamus', 'third ventricle', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-023',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #5?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #5',
      },
      hint: 'Small white matter commissure at the anterior wall of the third ventricle, just above the lamina terminalis',
    },
    back: {
      answer: 'Anterior Commissure',
      explanation: 'The anterior commissure is a compact white matter bundle crossing the midline at the anterior wall of the third ventricle, anterior to the columns of the fornix. It interconnects the olfactory bulbs, amygdalae, and temporal lobes bilaterally. On sagittal MRI it appears as a small round hypointense nodule. It is a key landmark on axial MRI for identifying the AC-PC plane used in stereotactic neurosurgery.',
      keyFact: 'Anterior commissure is the key landmark for the AC-PC line used in stereotactic surgery and brain atlases. It connects the olfactory bulbs and temporal lobes.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/anterior-commissure',
      tags: ['MRI', 'neuroanatomy', 'midline', 'white matter', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-024',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #6?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #6',
      },
      hint: 'Commissure at the posterior wall of the third ventricle, just above the superior colliculi — marks the junction of diencephalon and midbrain',
    },
    back: {
      answer: 'Posterior Commissure',
      explanation: 'The posterior commissure is a white matter bundle crossing the dorsal midline at the junction of the diencephalon and midbrain, at the level of the superior colliculi. It carries fibers involved in the pupillary light reflex (pretectal-Edinger-Westphal pathway). Compression or infiltration of this region (e.g., by a pineal mass) causes Parinaud syndrome: upgaze palsy, convergence-retraction nystagmus, and light-near dissociation.',
      keyFact: 'Posterior commissure compression = Parinaud syndrome (dorsal midbrain syndrome): upgaze palsy + convergence-retraction nystagmus + light-near dissociation. Classic cause: pineal region mass.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-commissure',
      tags: ['MRI', 'neuroanatomy', 'midbrain', 'pineal', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-025',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #7?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #7',
      },
      hint: 'Small commissure at the posterior roof of the third ventricle, just anterior to the pineal gland',
    },
    back: {
      answer: 'Habenular Commissure',
      explanation: 'The habenular commissure connects the habenular nuclei bilaterally and runs just anterior to the pineal gland at the posterior roof of the third ventricle. The habenular nuclei are part of the epithalamus and are involved in limbic-to-brainstem connections, modulating serotonin and dopamine pathways. The habenular commissure and posterior commissure together form the pineal gland stalk region, important for identifying pineal masses.',
      keyFact: 'Habenular commissure lies just anterior to the pineal gland. Calcification of the habenular commissure is a normal aging finding and should not be confused with a pineal mass.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/habenular-commissure',
      tags: ['MRI', 'neuroanatomy', 'epithalamus', 'pineal', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-026',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #8?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #8',
      },
      hint: 'Midline epithalamic gland known for calcification in adults; tumors here cause Parinaud syndrome',
    },
    back: {
      answer: 'Pineal Gland',
      explanation: 'The pineal gland is a midline neuroendocrine structure in the epithalamus that secretes melatonin and regulates circadian rhythm. Physiologic calcification occurs in >50% of adults on CT. Pineal masses include germinoma (most common, elevated β-hCG or PLAP), pineocytoma, pineoblastoma, and teratoma. Masses >1 cm or asymmetric calcification warrant MRI workup. Compression of the dorsal midbrain causes Parinaud syndrome.',
      keyFact: 'Pineal germinoma is the most common pineal mass; elevates β-hCG/PLAP, occurs in young males, and is exquisitely radiosensitive. Pineoblastoma is aggressive and associated with bilateral retinoblastoma (trilateral retinoblastoma).',
      radiopaediaUrl: 'https://radiopaedia.org/articles/pineal-gland',
      tags: ['MRI', 'neuroanatomy', 'pineal', 'epithalamus', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-027',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #9?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #9',
      },
      hint: 'Upper paired midbrain tectal bumps involved in visual reflexes',
    },
    back: {
      answer: 'Superior Colliculi',
      explanation: 'The superior colliculi are paired dorsal midbrain (tectum) structures that mediate visual orienting reflexes and saccadic eye movements. They receive direct retinal input via the optic tract. The superior colliculi are part of the quadrigeminal plate. Compression by pineal region masses or hypertrophic olivary degeneration can cause visual disturbances and upgaze palsy (Parinaud syndrome).',
      keyFact: 'Superior colliculi = visual reflexes (optic tectum). Inferior colliculi = auditory relay. Both visible as the quadrigeminal plate on sagittal MRI. "Tectal gliomas" are usually indolent low-grade tumors.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/superior-colliculus',
      tags: ['MRI', 'neuroanatomy', 'midbrain', 'tectum', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-028',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #10?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #10',
      },
      hint: 'Lower paired midbrain tectal bumps serving as auditory relay',
    },
    back: {
      answer: 'Inferior Colliculi',
      explanation: 'The inferior colliculi are the lower pair of the quadrigeminal plate (midbrain tectum), serving as an important relay station in the auditory pathway between the cochlear nuclei/lateral lemniscus and the medial geniculate nucleus of the thalamus. They are smaller than the superior colliculi on sagittal MRI. Lesions here cause auditory processing deficits rather than deafness.',
      keyFact: 'Quadrigeminal plate mnemonic: superior (bigger) = visual, inferior (smaller) = auditory. "2 eyes above, 2 ears below."',
      radiopaediaUrl: 'https://radiopaedia.org/articles/inferior-colliculus',
      tags: ['MRI', 'neuroanatomy', 'midbrain', 'tectum', 'auditory', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-029',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #11?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #11',
      },
      hint: 'CSF channel connecting the third and fourth ventricles, running through the midbrain tegmentum',
    },
    back: {
      answer: 'Cerebral Aqueduct (Aqueduct of Sylvius)',
      explanation: 'The cerebral aqueduct is the narrow CSF channel (~1–2 mm diameter) connecting the third ventricle superiorly to the fourth ventricle inferiorly, running through the midbrain tectum/tegmentum. It is the most common site of congenital obstruction causing hydrocephalus (aqueductal stenosis). On sagittal T2 MRI, normal aqueductal flow void is visible. Absence of this flow void suggests aqueductal stenosis or obstruction.',
      keyFact: 'Aqueductal stenosis is the most common cause of congenital obstructive hydrocephalus. On sagittal T2, absent flow void through the aqueduct is a key finding. Tectal gliomas and pineal masses are acquired causes.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/cerebral-aqueduct',
      tags: ['MRI', 'neuroanatomy', 'midbrain', 'CSF', 'hydrocephalus', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-030',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #12?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #12',
      },
      hint: 'Paired CSF passageways between the lateral and third ventricles, one on each side of the massa intermedia',
    },
    back: {
      answer: 'Foramen of Monro (Interventricular Foramen)',
      explanation: 'The foramina of Monro are the paired openings connecting each lateral ventricle to the third ventricle. They are bordered anteriorly by the columns of the fornix and posteriorly by the anterior pole of the thalamus. Obstruction at the foramen of Monro causes unilateral or asymmetric hydrocephalus of the affected lateral ventricle. The classic obstructing lesion is a colloid cyst, which sits at the foramen and can cause sudden death from acute hydrocephalus.',
      keyFact: 'Colloid cyst at the foramen of Monro → intermittent positional headache, acute hydrocephalus, sudden death. On MRI: T1 hyperintense, T2 variable round lesion at the anterior third ventricle/foramen of Monro.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/interventricular-foramen-of-monro',
      tags: ['MRI', 'neuroanatomy', 'ventricles', 'CSF', 'hydrocephalus', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-031',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #13?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #13',
      },
      hint: 'CSF-filled cistern between the cerebral peduncles, anterior to the midbrain',
    },
    back: {
      answer: 'Interpeduncular Cistern',
      explanation: 'The interpeduncular cistern is a subarachnoid space cistern situated between the cerebral peduncles of the midbrain anteriorly. It contains the basilar artery bifurcation, posterior cerebral arteries, superior cerebellar arteries, and CN III (oculomotor nerve). It communicates with the prepontine cistern inferiorly and the ambient cistern laterally. A posterior communicating artery aneurysm can compress CN III within this region.',
      keyFact: 'CN III runs through the interpeduncular cistern — PCom aneurysm here causes a painful CN III palsy with pupil involvement (surgical emergency). This differentiates it from microvascular CN III palsy (pupil spared).',
      radiopaediaUrl: 'https://radiopaedia.org/articles/interpeduncular-cistern',
      tags: ['MRI', 'neuroanatomy', 'cistern', 'subarachnoid', 'midbrain', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-032',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #14?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #14',
      },
      hint: 'Paired round hypothalamic nuclei at the floor of the third ventricle, part of the Papez circuit',
    },
    back: {
      answer: 'Mammillary Body',
      explanation: 'The mammillary bodies are paired round hypothalamic nuclei at the posterior floor of the third ventricle. They are major components of the Papez circuit, receiving input from the hippocampus via the fornix and projecting to the anterior thalamic nuclei. They are exquisitely sensitive to thiamine deficiency — mammillary body T2 signal and enhancement is the hallmark of Wernicke encephalopathy. Atrophy of the mammillary bodies is also seen in chronic alcoholism and chronic amnesia.',
      keyFact: 'Wernicke encephalopathy: mammillary body T2 hyperintensity and enhancement + periaqueductal gray + medial thalami. Triad: ophthalmoplegia, ataxia, confusion. Treat immediately with IV thiamine.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/mammillary-bodies',
      tags: ['MRI', 'neuroanatomy', 'hypothalamus', 'limbic', 'Wernicke', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-033',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #15?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #15',
      },
      hint: 'X-shaped decussation of the optic nerves at the base of the brain, just above the sella',
    },
    back: {
      answer: 'Optic Chiasm',
      explanation: 'The optic chiasm is where the nasal fibers of each optic nerve decussate to join the contralateral optic tract, while temporal fibers remain ipsilateral. It lies just above the sella turcica and pituitary gland, anterior to the hypothalamus. Compression from below (pituitary macroadenoma) causes bitemporal hemianopia due to preferential injury to the crossing nasal fibers. On MRI the chiasm appears as a flat H-shaped structure on coronal imaging.',
      keyFact: 'Pituitary macroadenoma compressing the chiasm from below → bitemporal hemianopia (loss of temporal fields bilaterally). "Crossing nasal fibers = central field blind." Field defect confirms chiasmal rather than optic nerve or tract lesion.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/optic-chiasm',
      tags: ['MRI', 'neuroanatomy', 'optic pathway', 'sellar', 'visual field', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-034',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #16?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #16',
      },
      hint: 'Endocrine gland within the sella turcica, composed of anterior and posterior lobes with distinct MRI signal',
    },
    back: {
      answer: 'Pituitary Gland',
      explanation: 'The pituitary gland occupies the sella turcica and consists of the adenohypophysis (anterior lobe, 80%) and neurohypophysis (posterior lobe). On T1 MRI, the posterior pituitary normally has a characteristic T1 hyperintense "bright spot" due to stored vasopressin granules — absence of this is a key finding in central diabetes insipidus. Normal height is up to 8 mm in women of reproductive age (10 mm in pregnancy/lactation) and 6 mm in men/post-menopausal women.',
      keyFact: 'Posterior pituitary T1 bright spot = normal. Loss of bright spot → central DI. Pituitary height >10–12 mm in non-pregnant adult + mass effect on chiasm → macroadenoma (>1 cm). Microadenoma <1 cm.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/pituitary-gland',
      tags: ['MRI', 'neuroanatomy', 'pituitary', 'sellar', 'endocrine', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-035',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #17?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #17',
      },
      hint: 'Slender connection between the hypothalamus and posterior pituitary, passing through the diaphragma sellae',
    },
    back: {
      answer: 'Infundibular Stalk (Pituitary Stalk)',
      explanation: 'The infundibular stalk connects the hypothalamus to the posterior pituitary, transmitting axons of magnocellular neurons (AVP/oxytocin) and the hypophyseal portal system (hypothalamic releasing hormones to anterior pituitary). Normal stalk width is ≤3.5 mm at the base (narrows inferiorly). Stalk thickening >3.5 mm or with nodular morphology raises concern for germinoma, Langerhans cell histiocytosis, sarcoidosis, lymphocytic hypophysitis, or metastasis.',
      keyFact: 'Thickened pituitary stalk (>3.5 mm) DDx: germinoma > LCH > sarcoidosis > lymphocytic hypophysitis > metastasis. In a child with DI and stalk thickening → biopsy for germinoma vs LCH before empiric treatment.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/pituitary-stalk',
      tags: ['MRI', 'neuroanatomy', 'pituitary', 'infundibulum', 'sellar', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-036',
    front: {
      question: 'On this mid-sagittal T1 MRI, what structure is labeled #18?',
      image: {
        src: '/images_neuro/brain02.png',
        alt: 'Mid-sagittal T1 brain MRI with numbered anatomical labels',
        caption: 'Identify structure #18',
      },
      hint: 'CSF-filled subarachnoid cistern immediately superior to the sella, surrounding the infundibulum',
    },
    back: {
      answer: 'Suprasellar Cistern',
      explanation: 'The suprasellar cistern is a subarachnoid space cistern lying above the sella turcica, containing the optic chiasm, infundibular stalk, proximal internal carotid arteries, A1 segments, and the circle of Willis anteriorly. On axial CT/MRI it has a characteristic pentagonal or star-shaped configuration. Key pathologies arising here include craniopharyngioma (most common suprasellar mass in children), germinoma, hypothalamic glioma, meningioma (adults), and aneurysm.',
      keyFact: 'Suprasellar mass in a child with calcification + cystic + motor oil fluid = craniopharyngioma (adamantinomatous type). In an adult, calcification + suprasellar = meningioma until proven otherwise.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/suprasellar-cistern',
      tags: ['MRI', 'neuroanatomy', 'cistern', 'suprasellar', 'sellar', 'sagittal', 'anatomy'],
    },
  },
  {
    id: 'neuro-branat-037',
    front: {
      question: 'Identify structure #1 on this MRV. What is its clinical significance in raised intracranial pressure?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #1',
      },
    },
    back: {
      answer: 'Superior Sagittal Sinus (SSS)',
      explanation: 'The SSS runs in the superior margin of the falx cerebri from the crista galli to the torcular Herophili (confluence of sinuses). It drains the superficial cerebral veins and is the primary site of CSF reabsorption via arachnoid granulations. Thrombosis causes parasagittal hemorrhagic infarcts and raised ICP. It is the most commonly thrombosed dural sinus.',
      keyFact: 'SSS thrombosis → parasagittal bilateral cortical venous infarcts + raised ICP. Most common dural sinus thrombosis site.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/superior-sagittal-sinus',
      tags: ['MRV', 'MRI', 'neuro', 'venous anatomy', 'dural sinuses', 'cerebral veins'],
    },
  },
  {
    id: 'neuro-branat-038',
    front: {
      question: 'Identify structure #2 on this MRV. What vessels converge to form it, and what does it drain into?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #2',
      },
    },
    back: {
      answer: 'Vein of Galen (Great Cerebral Vein)',
      explanation: 'The vein of Galen is formed by the union of the two internal cerebral veins and the basal veins of Rosenthal. It is a short midline vessel that drains into the straight sinus. A vein of Galen malformation (VOGM) is an arteriovenous fistula where arterial flow directly enters this vein, causing it to massively dilate — classically presenting with neonatal high-output cardiac failure.',
      keyFact: 'Vein of Galen = junction of internal cerebral veins + basal veins of Rosenthal → straight sinus. VOGM causes neonatal cardiac failure.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/great-cerebral-vein',
      tags: ['MRV', 'MRI', 'neuro', 'venous anatomy', 'vein of Galen', 'deep veins'],
    },
  },
  {
    id: 'neuro-branat-039',
    front: {
      question: 'Identify structure #3 on this MRV. What do they drain, and what is the significance of asymmetry or non-visualization?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #3',
      },
    },
    back: {
      answer: 'Internal Cerebral Veins (ICVs)',
      explanation: 'The ICVs are paired deep medullary veins running in the roof of the third ventricle within the tela choroidea. They drain the deep white matter, basal ganglia, thalami, and choroid plexus, converging posteriorly to form the vein of Galen. Thrombosis of the ICVs causes deep cerebral venous thrombosis — bilateral thalamic hemorrhagic infarcts are the hallmark imaging finding.',
      keyFact: 'ICV thrombosis → bilateral thalamic hemorrhagic infarcts. Paired veins in roof of 3rd ventricle draining basal ganglia and thalami.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/internal-cerebral-vein',
      tags: ['MRV', 'MRI', 'neuro', 'deep cerebral veins', 'thalamus', 'venous thrombosis'],
    },
  },
  {
    id: 'neuro-branat-040',
    front: {
      question: 'Identify structure #4 on this MRV. What two structures does it connect, and what runs alongside it in the tentorium?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #4',
      },
    },
    back: {
      answer: 'Straight Sinus (Sinus Rectus)',
      explanation: 'The straight sinus runs in the junction of the falx cerebri and tentorium cerebelli, connecting the vein of Galen anteriorly to the confluence of sinuses (torcular Herophili) posteriorly. The inferior sagittal sinus joins it anteriorly. It is bordered by the falcotentorial junction. Isolated straight sinus thrombosis is rare but causes deep venous infarction similar to ICV thrombosis.',
      keyFact: 'Straight sinus = vein of Galen + inferior sagittal sinus → torcular Herophili; runs in falcotentorial junction.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/straight-sinus',
      tags: ['MRV', 'MRI', 'neuro', 'dural sinuses', 'venous anatomy', 'tentorium'],
    },
  },
  {
    id: 'neuro-branat-041',
    front: {
      question: 'Identify structure #5 on this MRV. What territory does it drain, and what is its eponymous clinical relevance?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #5',
      },
    },
    back: {
      answer: 'Vein of Labbé (Inferior Anastomotic Vein)',
      explanation: 'The vein of Labbé is a large superficial cortical vein connecting the superficial middle cerebral vein to the transverse sinus. It drains the lateral temporal lobe. Along with the vein of Trolard superiorly, it forms an anastomotic network between the SSS and transverse sinus. Thrombosis causes temporal lobe venous infarction, often hemorrhagic, and is a feared complication of sigmoid/transverse sinus thrombosis.',
      keyFact: 'Vein of Labbé: superficial middle cerebral vein → transverse sinus; thrombosis = temporal lobe hemorrhagic infarct.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/vein-of-labbe',
      tags: ['MRV', 'MRI', 'neuro', 'cortical veins', 'temporal lobe', 'venous anatomy'],
    },
  },
  {
    id: 'neuro-branat-042',
    front: {
      question: 'Identify structure #6 on this MRV. Where does it begin and terminate, and what is the clinical significance of its bilateral absence on MRV?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #6',
      },
    },
    back: {
      answer: 'Internal Jugular Vein (IJV)',
      explanation: 'The IJV begins at the jugular foramen as the continuation of the sigmoid sinus and descends in the carotid sheath to join the subclavian vein, forming the brachiocephalic vein. It carries most of the cerebral venous drainage. Bilateral non-visualization on MRV suggests severe bilateral sigmoid/IJV thrombosis. Unilateral aplasia/hypoplasia is a common normal variant (more often on the left).',
      keyFact: 'IJV = sigmoid sinus continuation from jugular foramen. Left IJV hypoplasia is a common normal variant — do not overcall thrombosis.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/internal-jugular-vein',
      tags: ['MRV', 'MRI', 'neuro', 'jugular vein', 'venous drainage', 'normal variant'],
    },
  },
  {
    id: 'neuro-branat-043',
    front: {
      question: 'Identify structure #7 on this MRV. What is the significance of unilateral hypoplasia, and what finding on non-contrast CT suggests its thrombosis?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #7',
      },
    },
    back: {
      answer: 'Transverse Sinus',
      explanation: 'The transverse sinuses run laterally in the attached margin of the tentorium cerebelli from the torcular Herophili to the sigmoid sinuses. The right is dominant in ~60% and absent/hypoplastic on the left is a common normal variant. Thrombosis causes raised ICP and may be masked by normal asymmetry. On non-contrast CT, the "dense clot sign" in the sinus is a direct sign of thrombosis; on MRV, absent flow signal confirms it.',
      keyFact: 'Right transverse sinus dominant in 60%; left hypoplasia is a normal variant. Thrombosis = dense sinus sign on NCCT + absent flow on MRV.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/transverse-sinuses',
      tags: ['MRV', 'MRI', 'neuro', 'dural sinuses', 'transverse sinus', 'venous thrombosis'],
    },
  },
  {
    id: 'neuro-branat-044',
    front: {
      question: 'Identify structure #8 on this MRV. What is its course, and what is the "empty delta sign"?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #8',
      },
    },
    back: {
      answer: 'Sigmoid Sinus',
      explanation: 'The sigmoid sinus is the S-shaped continuation of the transverse sinus, coursing in the posterior cranial fossa groove on the mastoid to exit at the jugular foramen as the IJV. The "empty delta sign" (or delta sign) on contrast CT refers to enhancement of the dural walls surrounding a non-enhancing thrombus within the superior sagittal sinus — this is not specific to the sigmoid but is the classic CT sign of dural sinus thrombosis.',
      keyFact: 'Empty delta sign on contrast CT = enhancing sinus wall surrounding non-enhancing thrombus — classic sign of dural venous sinus thrombosis.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/sigmoid-sinus',
      tags: ['MRV', 'MRI', 'neuro', 'sigmoid sinus', 'dural sinuses', 'delta sign'],
    },
  },
  {
    id: 'neuro-branat-045',
    front: {
      question: 'Identify structure #9 on this MRV. What four sinuses converge here, and what is its eponymous alternative name?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #9',
      },
    },
    back: {
      answer: 'Confluence of Sinuses (Torcular Herophili)',
      explanation: 'The torcular Herophili is the confluence of the superior sagittal sinus, straight sinus, and bilateral occipital sinuses at the internal occipital protuberance, diverging into the bilateral transverse sinuses. It is highly variable in morphology — asymmetric drainage is common. Hypoplasia or asymmetry should not be mistaken for thrombosis on MRV. The name "torcular" refers to its wine-press shape described by Herophilus.',
      keyFact: 'Torcular Herophili = SSS + straight sinus + occipital sinuses → bilateral transverse sinuses. Highly variable anatomy — asymmetry is normal.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/confluence-of-sinuses',
      tags: ['MRV', 'MRI', 'neuro', 'confluence of sinuses', 'torcular', 'dural sinuses'],
    },
  },
  {
    id: 'neuro-branat-046',
    front: {
      question: 'Identify structure #10 on this MRV. What does it anastomose, and how does it differ from the vein of Labbé in location and drainage?',
      image: {
        src: '/images_neuro/brain03.png',
        alt: 'Brain MRV with labeled dural venous sinuses',
        caption: 'MRV — identify structure #10',
      },
    },
    back: {
      answer: 'Vein of Trolard (Superior Anastomotic Vein)',
      explanation: 'The vein of Trolard is the largest superficial cortical anastomotic vein, connecting the superficial middle cerebral vein to the superior sagittal sinus over the parietal convexity. It is the superior counterpart to the vein of Labbé (which drains inferiorly to the transverse sinus). Together they form a collateral network. Trolard thrombosis causes parietal lobe cortical venous infarction.',
      keyFact: 'Trolard (superior) → SSS over parietal convexity; Labbé (inferior) → transverse sinus via temporal lobe. Mirror-image anastomotic veins.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/superior-anastomotic-vein-of-trolard',
      tags: ['MRV', 'MRI', 'neuro', 'cortical veins', 'vein of Trolard', 'venous anatomy'],
    },
  },


{
  id: 'neuro-branat-047',
  front: {
    question: 'Identify the cranial nerve highlighted on this MRI. Describe its cisternal course and what foramen it traverses.',
    image: {
      src: '/images_neuro/CN23.png',
      alt: 'Axial MRI showing cranial nerve II',
      caption: 'Identify the highlighted cranial nerve',
    },
  },
  back: {
    answer: 'CN II — Optic Nerve',
    explanation: 'The optic nerve travels from the retina through the optic canal (not a true foramen of the skull base — it is within the lesser wing of sphenoid) to the optic chiasm. It is surrounded by meningeal sheaths (dura, arachnoid, pia) and subarachnoid CSF, making it susceptible to raised ICP (papilledema). It is a CNS tract, not a peripheral nerve.',
    keyFact: 'CN II is the only cranial nerve surrounded by meningeal sheaths — optic nerve sheath meningiomas enhance along the nerve producing the "tram-track" sign on MRI.',
    image: {
      src: '/images_neuro/CN23a.png',
      alt: 'Annotated MRI identifying CN II — Optic Nerve',
      caption: 'CN II — Optic Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/optic-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'optic nerve', 'skull base'],
  },
},

// CN III — Oculomotor Nerve
{
  id: 'neuro-branat-048',
  front: {
    question: 'On this same MRI, identify the second cranial nerve visible. What is its course from the midbrain to the orbit, and what is the clinical significance of its relationship to the posterior communicating artery?',
    image: {
      src: '/images_neuro/CN23.png',
      alt: 'Axial MRI showing cranial nerve III',
      caption: 'Identify the second highlighted cranial nerve',
    },
  },
  back: {
    answer: 'CN III — Oculomotor Nerve',
    explanation: 'CN III exits the midbrain at the interpeduncular fossa, passes between the posterior cerebral artery (PCA) and superior cerebellar artery (SCA), then runs along the lateral wall of the cavernous sinus before entering the orbit via the superior orbital fissure. Its close proximity to the PcomA means an aneurysm at this junction classically causes a pupil-involving CN III palsy.',
    keyFact: 'Pupil-involving CN III palsy = compressive lesion (PcomA aneurysm) until proven otherwise — the parasympathetic pupillomotor fibres run on the outside of the nerve and are first affected by extrinsic compression.',
    image: {
      src: '/images_neuro/CN23a.png',
      alt: 'Annotated MRI identifying CN III — Oculomotor Nerve',
      caption: 'CN III — Oculomotor Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/oculomotor-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'oculomotor', 'skull base'],
  },
},

// CN IV — Trochlear Nerve
{
  id: 'neuro-branat-049',
  front: {
    question: 'Identify the cranial nerve shown on this MRI. What unique anatomical features distinguish it from all other cranial nerves?',
    image: {
      src: '/images_neuro/CN4.png',
      alt: 'MRI showing cranial nerve IV',
      caption: 'Identify the highlighted cranial nerve',
    },
  },
  back: {
    answer: 'CN IV — Trochlear Nerve',
    explanation: 'CN IV is the only cranial nerve to exit the dorsal brainstem (dorsal midbrain, below the inferior colliculi), the only one to fully decussate before exiting, and the thinnest and longest intracranial cranial nerve. It wraps around the brainstem, passes between PCA and SCA (like CN III), runs in the lateral cavernous sinus wall, and enters the orbit via the superior orbital fissure to innervate the superior oblique.',
    keyFact: 'CN IV: only dorsal exit, only complete decussation, thinnest/longest intracranial CN — causes vertical diplopia (hypertropia) with head tilt toward the affected side (Bielschowsky).',
    image: {
      src: '/images_neuro/CN4a.png',
      alt: 'Annotated MRI identifying CN IV — Trochlear Nerve',
      caption: 'CN IV — Trochlear Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/trochlear-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'trochlear', 'skull base'],
  },
},

// CN V — Trigeminal Nerve
{
  id: 'neuro-branat-050',
  front: {
    question: 'Identify the cranial nerve on this MRI. Name its three divisions and the foramina each traverses to exit the skull.',
    image: {
      src: '/images_neuro/CN5.png',
      alt: 'MRI showing cranial nerve V',
      caption: 'Identify the highlighted cranial nerve',
    },
  },
  back: {
    answer: 'CN V — Trigeminal Nerve (V1/V2/V3)',
    explanation: 'The trigeminal nerve is the largest cranial nerve. V1 (ophthalmic) exits via the superior orbital fissure; V2 (maxillary) via foramen rotundum; V3 (mandibular) via foramen ovale. The Gasserian (trigeminal) ganglion sits in Meckel\'s cave, a CSF-containing dural recess at the petrous apex, which is visible on MRI as a T2-hyperintense structure.',
    keyFact: 'V1 = superior orbital fissure, V2 = foramen rotundum, V3 = foramen ovale — "Standing Room Only" mnemonic. Perineural spread of head/neck tumours follows CN V proximally toward Meckel\'s cave.',
    image: {
      src: '/images_neuro/CN5a.png',
      alt: 'Annotated MRI identifying CN V — Trigeminal Nerve',
      caption: 'CN V — Trigeminal Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/trigeminal-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'trigeminal', 'skull base'],
  },
},

// CN VI — Abducens Nerve
{
  id: 'neuro-branat-051',
  front: {
    question: 'Identify the cranial nerve on this MRI. Why is this nerve particularly vulnerable to raised intracranial pressure despite its distant exit from the foramen?',
    image: {
      src: '/images_neuro/CN6.png',
      alt: 'MRI showing cranial nerve VI',
      caption: 'Identify the highlighted cranial nerve',
    },
  },
  back: {
    answer: 'CN VI — Abducens Nerve',
    explanation: 'CN VI exits the pontomedullary junction, takes the longest intradural course of any cranial nerve (ascending the clivus), and makes a sharp bend over the petrous apex (Dorello\'s canal) before entering the cavernous sinus and exiting via the superior orbital fissure to innervate the lateral rectus. Its long course and sharp angulation over the petrous apex make it vulnerable to downward brainstem displacement from raised ICP — a "false localizing sign."',
    keyFact: 'CN VI palsy as a false localizing sign of raised ICP: the long clival course and acute bend at Dorello\'s canal cause traction/compression even when the pathology is remote.',
    image: {
      src: '/images_neuro/CN6a.png',
      alt: 'Annotated MRI identifying CN VI — Abducens Nerve',
      caption: 'CN VI — Abducens Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/abducens-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'abducens', 'skull base'],
  },
},

// CN VII — Facial Nerve
{
  id: 'neuro-branat-052',
  front: {
    question: 'Identify the first of two cranial nerves visible on this MRI. Describe the three segments of its intratemporal course.',
    image: {
      src: '/images_neuro/CN78.png',
      alt: 'MRI showing cranial nerves VII and VIII',
      caption: 'Identify CN VII on this image',
    },
  },
  back: {
    answer: 'CN VII — Facial Nerve',
    explanation: 'CN VII and VIII travel together through the internal auditory canal (IAC). CN VII then enters the facial canal with three intratemporal segments: (1) labyrinthine — shortest, no blood supply, most vulnerable to ischemia; (2) tympanic (horizontal); (3) mastoid (vertical), exiting at the stylomastoid foramen. The geniculate ganglion (where the labyrinthine and tympanic segments meet) is the most common site of schwannoma and enhancement in Bell\'s palsy.',
    keyFact: 'Three intratemporal CN VII segments: labyrinthine → tympanic → mastoid. Geniculate ganglion = key landmark; normal enhancement here can be physiologic due to rich vascular plexus.',
    image: {
      src: '/images_neuro/CN78a.png',
      alt: 'Annotated MRI identifying CN VII — Facial Nerve',
      caption: 'CN VII — Facial Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/facial-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'facial nerve', 'temporal bone'],
  },
},

// CN VIII — Vestibulocochlear Nerve
{
  id: 'neuro-branat-053',
  front: {
    question: 'Identify the second cranial nerve on this MRI. What are its two functional divisions, and what pathology most commonly arises from this nerve?',
    image: {
      src: '/images_neuro/CN78.png',
      alt: 'MRI showing cranial nerves VII and VIII',
      caption: 'Identify CN VIII on this image',
    },
  },
  back: {
    answer: 'CN VIII — Vestibulocochlear Nerve',
    explanation: 'CN VIII has two divisions: the cochlear nerve (hearing) and vestibular nerve (balance). Both travel through the IAC alongside CN VII. Vestibular schwannoma (acoustic neuroma) arises most commonly from the superior vestibular division of CN VIII at the glial-Schwann cell junction near the porus acusticus. On MRI it appears as an enhancing CPA-IAC mass that "ices" the porus acusticus.',
    keyFact: 'Vestibular schwannoma: enhancing CPA-IAC mass widening the porus acusticus — bilateral = NF2 (look for other schwannomas, meningiomas, ependymomas).',
    image: {
      src: '/images_neuro/CN78a.png',
      alt: 'Annotated MRI identifying CN VIII — Vestibulocochlear Nerve',
      caption: 'CN VIII — Vestibulocochlear Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/vestibulocochlear-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'vestibulocochlear', 'CPA', 'schwannoma'],
  },
},

// CN IX — Glossopharyngeal Nerve
{
  id: 'neuro-branat-054',
  front: {
    question: 'Identify the first of two cranial nerves on this MRI. What foramen does it traverse, and what structures share this foramen?',
    image: {
      src: '/images_neuro/CN910.png',
      alt: 'MRI showing cranial nerves IX and X',
      caption: 'Identify CN IX on this image',
    },
  },
  back: {
    answer: 'CN IX — Glossopharyngeal Nerve',
    explanation: 'CN IX exits the lateral medulla and passes through the jugular foramen (pars nervosa, anteromedial compartment) alongside CN X and XI, and the sigmoid sinus/jugular bulb (pars vascularis). CN IX carries taste from the posterior 1/3 of the tongue, sensation from the pharynx/middle ear, and provides parasympathetic innervation to the parotid via the lesser petrosal nerve. Jugular foramen schwannomas and glomus jugulare tumours affect these nerves.',
    keyFact: 'Jugular foramen contents: CN IX, X, XI + jugular vein. Pulsatile tinnitus + jugular foramen mass = glomus jugulare (paraganglioma). CN IX in pars nervosa, CN X/XI also pass through.',
    image: {
      src: '/images_neuro/CN910a.png',
      alt: 'Annotated MRI identifying CN IX — Glossopharyngeal Nerve',
      caption: 'CN IX — Glossopharyngeal Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/glossopharyngeal-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'glossopharyngeal', 'jugular foramen'],
  },
},

// CN X — Vagus Nerve
{
  id: 'neuro-branat-055',
  front: {
    question: 'Identify the second cranial nerve on this MRI. What is its course from the brainstem to the thorax, and what is the clinical significance of its asymmetric recurrent laryngeal nerve anatomy?',
    image: {
      src: '/images_neuro/CN910.png',
      alt: 'MRI showing cranial nerves IX and X',
      caption: 'Identify CN X on this image',
    },
  },
  back: {
    answer: 'CN X — Vagus Nerve',
    explanation: 'CN X exits the medulla via the lateral sulcus, passes through the jugular foramen (pars vascularis), descends in the carotid sheath, and gives rise to the recurrent laryngeal nerve (RLN). The left RLN loops under the aortic arch (making it vulnerable to mediastinal pathology), while the right loops under the subclavian artery. CN X palsy causes ipsilateral vocal cord paralysis (paramedian cord on CT/MRI) and dysphagia.',
    keyFact: 'Left RLN loops under aortic arch — left vocal cord paralysis raises concern for aortopulmonary window lymphadenopathy, lung cancer, or aortic aneurysm. Always image the entire course.',
    image: {
      src: '/images_neuro/CN910a.png',
      alt: 'Annotated MRI identifying CN X — Vagus Nerve',
      caption: 'CN X — Vagus Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/vagus-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'vagus nerve', 'jugular foramen'],
  },
},

// CN XI — Accessory Nerve (bonus — exits same foramen as IX/X, no dedicated image provided)
// Per user key, CN11 is NOT listed — skipping to CN XII

// CN XII — Hypoglossal Nerve
{
  id: 'neuro-branat-056',
  front: {
    question: 'Identify the cranial nerve on this MRI. What foramen does it traverse, and what imaging finding on tongue MRI indicates a chronic ipsilateral lesion of this nerve?',
    image: {
      src: '/images_neuro/CN12.png',
      alt: 'MRI showing cranial nerve XII',
      caption: 'Identify the highlighted cranial nerve',
    },
  },
  back: {
    answer: 'CN XII — Hypoglossal Nerve',
    explanation: 'CN XII exits the medulla via the preolivary sulcus and passes through the hypoglossal canal (anterior condylar canal) at the occipital condyle. It provides motor supply to all intrinsic and most extrinsic tongue muscles (except palatoglossus). Acute CN XII palsy shows T2 hyperintensity and swelling of the ipsilateral tongue on MRI; chronic palsy shows ipsilateral fatty atrophy (T1 hyperintense, small hemitongue) with tongue deviation toward the side of the lesion on protrusion.',
    keyFact: 'Chronic CN XII palsy → ipsilateral hemitongue fatty atrophy (T1 bright, volume loss). Tongue deviates toward the weak/atrophic side on protrusion. Hypoglossal canal is the key landmark.',
    image: {
      src: '/images_neuro/CN12a.png',
      alt: 'Annotated MRI identifying CN XII — Hypoglossal Nerve',
      caption: 'CN XII — Hypoglossal Nerve (annotated)',
    },
    radiopaediaUrl: 'https://radiopaedia.org/articles/hypoglossal-nerve',
    tags: ['MRI', 'cranial nerve', 'neuro anatomy', 'hypoglossal', 'skull base'],
  },
},

      // ── skull1.png ──────────────────────────────────────────

      {
        id: 'neuro-branat-057',
        front: {
          question: 'Name the structure labeled A on this CT skull base image.',
          image: {
            src: '/images_neuro/skull1.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label A.',
          },
        },
        back: {
          answer: 'Pterygomaxillary fissure',
          explanation: 'The pterygomaxillary fissure is a vertical gap between the posterior wall of the maxillary sinus and the pterygoid process of the sphenoid. It communicates medially with the pterygopalatine fossa (PPF) and laterally with the infratemporal fossa. On axial CT it appears as a thin lucent cleft just posterior to the maxillary sinus. It is the lateral gateway to the PPF and a key route for perineural tumor spread.',
          keyFact: 'Pterygomaxillary fissure = lateral door to the pterygopalatine fossa; widening or erosion signals perineural spread (e.g., adenoid cystic carcinoma).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pterygomaxillary-fissure',
          tags: ['CT', 'skull base', 'anatomy', 'pterygopalatine fossa', 'head and neck'],
        },
      },

      {
        id: 'neuro-branat-058',
        front: {
          question: 'Name the structure labeled B on this CT skull base image.',
          image: {
            src: '/images_neuro/skull1.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label B.',
          },
        },
        back: {
          answer: 'Foramen spinosum',
          explanation: 'The foramen spinosum is a small oval foramen in the greater wing of the sphenoid, posterolateral to foramen ovale. It transmits the middle meningeal artery (and vein) and the meningeal branch of the mandibular nerve. On CT it is the smallest of the three foramina in the middle cranial fossa floor (ovale > spinosum > lacerum). Enlargement raises concern for dural arteriovenous fistula or meningioma.',
          keyFact: 'Foramen spinosum transmits the middle meningeal artery — rupture causes an epidural hematoma with a classic "lens-shaped" collection.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/foramen-spinosum',
          tags: ['CT', 'skull base', 'anatomy', 'foramen', 'middle meningeal artery'],
        },
      },

      {
        id: 'neuro-branat-059',
        front: {
          question: 'Name the structure labeled C on this CT skull base image.',
          image: {
            src: '/images_neuro/skull1.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label C.',
          },
        },
        back: {
          answer: 'Carotid canal',
          explanation: 'The carotid canal is a bony channel in the petrous temporal bone that transmits the internal carotid artery (ICA) and the carotid sympathetic plexus. It enters the skull base inferiorly and curves anteromedially to emerge at the foramen lacerum. On CT it appears as a well-corticated tubular channel. Dehiscence, irregular walls, or soft-tissue within the canal suggests paraganglioma, metastasis, or ICA dissection.',
          keyFact: 'Carotid canal transmits the ICA and sympathetic plexus; a pulsatile middle ear mass abutting it = glomus jugulare/tympanicum until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/carotid-canal',
          tags: ['CT', 'skull base', 'anatomy', 'carotid canal', 'internal carotid artery', 'petrous temporal bone'],
        },
      },

      {
        id: 'neuro-branat-060',
        front: {
          question: 'Name the structure labeled D on this CT skull base image.',
          image: {
            src: '/images_neuro/skull1.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label D.',
          },
        },
        back: {
          answer: 'Foramen ovale',
          explanation: 'Foramen ovale is an oval opening in the greater wing of the sphenoid transmitting V3 (mandibular division of trigeminal nerve), the accessory meningeal artery, and the lesser petrosal nerve. It is the largest of the paired foramina in the posterior middle cranial fossa floor and lies posteromedial to foramen spinosum. Asymmetric enlargement is the hallmark of perineural spread from oral cavity or oropharyngeal malignancy along V3.',
          keyFact: 'Foramen ovale transmits V3. Asymmetric enlargement on CT = perineural tumor spread along the mandibular nerve — always compare sides.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/foramen-ovale-skull',
          tags: ['CT', 'skull base', 'anatomy', 'foramen ovale', 'trigeminal nerve', 'perineural spread'],
        },
      },

      {
        id: 'neuro-branat-061',
        front: {
          question: 'Name the structure labeled E on this CT skull base image.',
          image: {
            src: '/images_neuro/skull1.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label E.',
          },
        },
        back: {
          answer: 'Vidian canal (pterygoid canal)',
          explanation: 'The Vidian canal (pterygoid canal) runs anteroposteriorly through the base of the pterygoid process, connecting the foramen lacerum posteriorly with the pterygopalatine fossa anteriorly. It transmits the Vidian nerve (nerve of the pterygoid canal = greater petrosal nerve + deep petrosal nerve) and the Vidian artery. On axial CT it appears as a small round canal at the base of the pterygoid plates. It is a key route for skull base tumor spread between the middle cranial fossa and the PPF.',
          keyFact: 'Vidian canal connects foramen lacerum → pterygopalatine fossa; transmits the Vidian nerve. Obliteration or expansion = perineural/direct tumor spread along this corridor.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pterygoid-canal',
          tags: ['CT', 'skull base', 'anatomy', 'vidian canal', 'pterygoid canal', 'pterygopalatine fossa'],
        },
      },

      {
        id: 'neuro-branat-062',
        front: {
          question: 'Name the structure labeled F on this CT skull base image.',
          image: {
            src: '/images_neuro/skull1.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label F.',
          },
        },
        back: {
          answer: 'Pterygopalatine fossa (PPF)',
          explanation: 'The pterygopalatine fossa is a small pyramidal fat-containing space deep to the infratemporal fossa, bounded by the maxillary sinus anteriorly, pterygoid plates posteriorly, and palatine bone medially. It is a critical crossroads communicating with 7 spaces: orbit (inferior orbital fissure), middle cranial fossa (foramen rotundum/Vidian canal), nasopharynx (palatovaginal canal), nasal cavity (sphenopalatine foramen), oral cavity (greater/lesser palatine canals), infratemporal fossa (pterygomaxillary fissure), and cavernous sinus (via V2). Fat obliteration on CT/MRI = perineural spread.',
          keyFact: 'PPF is the "Grand Central Station" of skull base — communicates with 7 spaces. Fat obliteration = perineural tumor spread; always check foramen rotundum and V2.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pterygopalatine-fossa',
          tags: ['CT', 'skull base', 'anatomy', 'pterygopalatine fossa', 'perineural spread', 'head and neck'],
        },
      },

      {
        id: 'neuro-branat-063',
        front: {
          question: 'Name the structure labeled G on this CT skull base image.',
          image: {
            src: '/images_neuro/skull1.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label G.',
          },
        },
        back: {
          answer: 'Middle turbinate',
          explanation: 'The middle turbinate is a bony projection from the ethmoid bone forming the lateral nasal wall in the middle third of the nasal cavity. It is the inferior boundary of the middle meatus. Pneumatization of the middle turbinate is called a concha bullosa, the most common anatomic variant of the sinonasal tract. The middle turbinate is a key surgical landmark in functional endoscopic sinus surgery (FESS).',
          keyFact: 'Pneumatized middle turbinate = concha bullosa — most common sinonasal anatomic variant; can narrow the middle meatus and predispose to sinusitis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/middle-turbinate',
          tags: ['CT', 'sinonasal', 'anatomy', 'turbinate', 'head and neck'],
        },
      },

      {
        id: 'neuro-branat-064',
        front: {
          question: 'Name the structure labeled H on this CT skull base image.',
          image: {
            src: '/images_neuro/skull1.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label H.',
          },
        },
        back: {
          answer: 'Nasolacrimal duct',
          explanation: 'The nasolacrimal duct is a membranous canal that drains tears from the lacrimal sac inferiorly through the nasolacrimal canal in the maxilla to open into the inferior meatus of the nasal cavity. On CT it appears as a tubular bony canal along the anteromedial orbit/maxillary face. Obstruction causes epiphora and dacryocystitis. Dacryocystorhinostomy (DCR) creates a bypass opening into the nasal cavity.',
          keyFact: 'Nasolacrimal duct drains into the inferior meatus (not middle meatus). Obstruction → dacryocystitis; medial canthal mass in this context = dacryocele.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nasolacrimal-duct',
          tags: ['CT', 'orbit', 'sinonasal', 'anatomy', 'nasolacrimal duct', 'head and neck'],
        },
      },

      // ── skull2.png ──────────────────────────────────────────

      {
        id: 'neuro-branat-065',
        front: {
          question: 'Name the structure labeled A on this CT skull base image.',
          image: {
            src: '/images_neuro/skull2.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label A.',
          },
        },
        back: {
          answer: 'Inferior orbital fissure',
          explanation: 'The inferior orbital fissure is a horizontal gap in the floor and lateral wall of the orbit, separating the orbital floor (maxilla/palatine) from the greater wing of the sphenoid. It communicates between the orbit and the pterygopalatine fossa (medially) and the infratemporal fossa (laterally). It transmits the maxillary nerve (V2), the zygomatic nerve, the infraorbital vessels, and parasympathetic fibers from the pterygopalatine ganglion. Tumors from the PPF can extend into the orbit via this fissure.',
          keyFact: 'Inferior orbital fissure transmits V2 (maxillary nerve) and connects the orbit to the pterygopalatine fossa — a key perineural spread pathway.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/inferior-orbital-fissure',
          tags: ['CT', 'orbit', 'skull base', 'anatomy', 'inferior orbital fissure', 'perineural spread'],
        },
      },

      {
        id: 'neuro-branat-066',
        front: {
          question: 'Name the structure labeled B on this CT skull base image.',
          image: {
            src: '/images_neuro/skull2.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label B.',
          },
        },
        back: {
          answer: 'Pterygopalatine fossa (PPF)',
          explanation: 'The pterygopalatine fossa is a small pyramidal fat-containing space deep to the infratemporal fossa, bounded by the maxillary sinus anteriorly, pterygoid plates posteriorly, and palatine bone medially. It is a critical crossroads communicating with 7 spaces: orbit (inferior orbital fissure), middle cranial fossa (foramen rotundum/Vidian canal), nasopharynx (palatovaginal canal), nasal cavity (sphenopalatine foramen), oral cavity (greater/lesser palatine canals), infratemporal fossa (pterygomaxillary fissure), and cavernous sinus (via V2). Fat obliteration on CT/MRI = perineural spread.',
          keyFact: 'PPF is the "Grand Central Station" of skull base — communicates with 7 spaces. Fat obliteration = perineural tumor spread; always check foramen rotundum and V2.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pterygopalatine-fossa',
          tags: ['CT', 'skull base', 'anatomy', 'pterygopalatine fossa', 'head and neck'],
        },
      },

      // ── skull3.png ──────────────────────────────────────────

      {
        id: 'neuro-branat-067',
        front: {
          question: 'Name the structure labeled A on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label A.',
          },
        },
        back: {
          answer: 'Inferior turbinate',
          explanation: 'The inferior turbinate is an independent bone (not part of the ethmoid) forming the most inferior and largest of the nasal turbinates. It projects from the lateral nasal wall and forms the lateral boundary of the inferior meatus, which receives the nasolacrimal duct. Hypertrophy of the inferior turbinate is the most common cause of nasal airway obstruction. It is separated from the middle turbinate by the middle meatus.',
          keyFact: 'Inferior turbinate is a separate bone (not ethmoid); the nasolacrimal duct drains into the inferior meatus beneath it — the only turbinate to receive a duct.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/inferior-turbinate',
          tags: ['CT', 'sinonasal', 'anatomy', 'turbinate', 'head and neck'],
        },
      },

      {
        id: 'neuro-branat-068',
        front: {
          question: 'Name the structure labeled B on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label B.',
          },
        },
        back: {
          answer: 'Foramen of Vesalius (sphenoidal emissary foramen)',
          explanation: 'The foramen of Vesalius is an inconstant emissary foramen in the greater wing of the sphenoid, located anteromedial to foramen ovale. When present (~40% of individuals), it transmits an emissary vein connecting the cavernous sinus to the pterygoid venous plexus, and sometimes the accessory meningeal artery. It is important because it can be mistaken for foramen ovale on imaging, and emissary veins through it are a route for spread of extracranial infection intracranially.',
          keyFact: 'Foramen of Vesalius is anteromedial to foramen ovale; it is inconstant (~40%). Transmits an emissary vein between cavernous sinus and pterygoid plexus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/foramen-of-vesalius',
          tags: ['CT', 'skull base', 'anatomy', 'foramen of vesalius', 'emissary vein', 'sphenoid'],
        },
      },

      {
        id: 'neuro-branat-069',
        front: {
          question: 'Name the structure labeled C on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label C.',
          },
        },
        back: {
          answer: 'Foramen spinosum',
          explanation: 'The foramen spinosum is a small oval foramen in the greater wing of the sphenoid, posterolateral to foramen ovale. It transmits the middle meningeal artery (and vein) and the meningeal branch of the mandibular nerve. On CT it is the smallest of the three foramina in the middle cranial fossa floor (ovale > spinosum > lacerum). Enlargement raises concern for dural arteriovenous fistula or meningioma.',
          keyFact: 'Spinosum is always posterolateral to ovale. Mnemonic: "SO" — Spinosum is Outside (lateral to) Ovale.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/foramen-spinosum',
          tags: ['CT', 'skull base', 'anatomy', 'foramen spinosum', 'middle meningeal artery'],
        },
      },

      {
        id: 'neuro-branat-070',
        front: {
          question: 'Name the structure labeled D on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label D.',
          },
        },
        back: {
          answer: 'Eustachian tube (pharyngotympanic tube)',
          explanation: 'The Eustachian tube connects the nasopharynx to the middle ear cavity (tympanic cavity), equalizing pressure and draining mucus. The lateral one-third is bony (within the petrous temporal bone) and the medial two-thirds is cartilaginous. On axial CT it appears as a bony canal running anterolaterally from the nasopharyngeal wall toward the middle ear. Obstruction (e.g., by nasopharyngeal carcinoma or adenoid hypertrophy) causes otitis media with effusion.',
          keyFact: 'Unilateral otitis media with effusion in an adult = nasopharyngeal carcinoma until proven otherwise — always examine the Eustachian tube orifice and fossa of Rosenmüller.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/eustachian-tube',
          tags: ['CT', 'skull base', 'temporal bone', 'anatomy', 'eustachian tube', 'nasopharynx'],
        },
      },

      {
        id: 'neuro-branat-071',
        front: {
          question: 'Name the structure labeled E on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label E.',
          },
        },
        back: {
          answer: 'Carotid canal',
          explanation: 'The carotid canal is a bony channel in the petrous temporal bone that transmits the internal carotid artery (ICA) and the carotid sympathetic plexus. It enters the skull base inferiorly and curves anteromedially to emerge at the foramen lacerum. On CT it appears as a well-corticated tubular channel. Dehiscence, irregular walls, or soft-tissue within the canal suggests paraganglioma, metastasis, or ICA dissection.',
          keyFact: 'Carotid canal transmits the ICA and sympathetic plexus; a pulsatile middle ear mass abutting it = glomus jugulare/tympanicum until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/carotid-canal',
          tags: ['CT', 'skull base', 'anatomy', 'carotid canal', 'internal carotid artery', 'petrous temporal bone'],
        },
      },

      {
        id: 'neuro-branat-072',
        front: {
          question: 'Name the structure labeled F on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label F.',
          },
        },
        back: {
          answer: 'Foramen lacerum',
          explanation: 'Foramen lacerum is an irregular, cartilage-filled opening at the junction of the petrous apex, sphenoid body, and occipital bone. In life it is largely occluded by fibrocartilage and does not transmit major structures through its full extent — the ICA passes over (not through) it. The Vidian nerve and the greater petrosal nerve pass through its upper portion. It is a common site of perineural tumor spread and is assessed on MRI for asymmetric T2 signal or enhancement.',
          keyFact: 'Foramen lacerum is filled with fibrocartilage in vivo — the ICA passes OVER it, not through it. It is a route for skull base tumor extension assessed on MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/foramen-lacerum',
          tags: ['CT', 'MRI', 'skull base', 'anatomy', 'foramen lacerum', 'internal carotid artery'],
        },
      },

      {
        id: 'neuro-branat-073',
        front: {
          question: 'Name the structure labeled G on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label G.',
          },
        },
        back: {
          answer: 'Foramen ovale',
          explanation: 'Foramen ovale is an oval opening in the greater wing of the sphenoid transmitting V3 (mandibular division of trigeminal nerve), the accessory meningeal artery, and the lesser petrosal nerve. It is the largest of the paired foramina in the posterior middle cranial fossa floor and lies posteromedial to foramen spinosum. Asymmetric enlargement is the hallmark of perineural spread from oral cavity or oropharyngeal malignancy along V3.',
          keyFact: 'Foramen ovale transmits V3. Asymmetric enlargement on CT = perineural tumor spread along the mandibular nerve — always compare sides.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/foramen-ovale-skull',
          tags: ['CT', 'skull base', 'anatomy', 'foramen ovale', 'trigeminal nerve', 'perineural spread'],
        },
      },

      {
        id: 'neuro-branat-074',
        front: {
          question: 'Name the structure labeled H on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label H.',
          },
        },
        back: {
          answer: 'Pterygopalatine fossa (PPF)',
          explanation: 'The pterygopalatine fossa is a small pyramidal fat-containing space deep to the infratemporal fossa, bounded by the maxillary sinus anteriorly, pterygoid plates posteriorly, and palatine bone medially. It is a critical crossroads communicating with 7 spaces: orbit (inferior orbital fissure), middle cranial fossa (foramen rotundum/Vidian canal), nasopharynx (palatovaginal canal), nasal cavity (sphenopalatine foramen), oral cavity (greater/lesser palatine canals), infratemporal fossa (pterygomaxillary fissure), and cavernous sinus (via V2). Fat obliteration on CT/MRI = perineural spread.',
          keyFact: 'PPF is the "Grand Central Station" of skull base — communicates with 7 spaces. Fat obliteration = perineural tumor spread; always check foramen rotundum and V2.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pterygopalatine-fossa',
          tags: ['CT', 'skull base', 'anatomy', 'pterygopalatine fossa', 'head and neck'],
        },
      },

      {
        id: 'neuro-branat-075',
        front: {
          question: 'Name the structure labeled I on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label I.',
          },
        },
        back: {
          answer: 'Middle turbinate',
          explanation: 'The middle turbinate is a bony projection from the ethmoid bone forming the lateral nasal wall in the middle third of the nasal cavity. It is the inferior boundary of the middle meatus. Pneumatization of the middle turbinate is called a concha bullosa, the most common anatomic variant of the sinonasal tract. The middle turbinate is a key surgical landmark in functional endoscopic sinus surgery (FESS).',
          keyFact: 'Pneumatized middle turbinate = concha bullosa — most common sinonasal anatomic variant; can narrow the middle meatus and predispose to sinusitis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/middle-turbinate',
          tags: ['CT', 'sinonasal', 'anatomy', 'turbinate', 'head and neck'],
        },
      },

      {
        id: 'neuro-branat-076',
        front: {
          question: 'Name the structure labeled J on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label J.',
          },
        },
        back: {
          answer: 'Middle meatus',
          explanation: 'The middle meatus is the air-containing space between the middle and inferior turbinates on the lateral nasal wall. It is the most important drainage pathway of the sinonasal tract, receiving secretions from the frontal sinus (via the frontal recess/nasofrontal duct), the anterior ethmoid cells, and the maxillary sinus (via the ostiomeatal unit/infundibulum). Obstruction of the middle meatus is the common final pathway in chronic rhinosinusitis.',
          keyFact: 'Middle meatus drains frontal sinus, anterior ethmoid, and maxillary sinus. Ostiomeatal unit (OMU) obstruction → chronic sinusitis in these three sinuses.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ostiomeatal-unit',
          tags: ['CT', 'sinonasal', 'anatomy', 'middle meatus', 'ostiomeatal unit', 'sinusitis'],
        },
      },

      {
        id: 'neuro-branat-077',
        front: {
          question: 'Name the structure labeled K on this CT skull base image.',
          image: {
            src: '/images_neuro/skull3.png',
            alt: 'Axial CT skull base with labeled structures',
            caption: 'Axial CT — skull base window. Identify label K.',
          },
        },
        back: {
          answer: 'Inferior meatus',
          explanation: 'The inferior meatus is the space between the inferior turbinate and the floor of the nasal cavity. It is the largest of the three meatuses. It receives the opening of the nasolacrimal duct at its anterosuperior aspect (valve of Hasner). The inferior meatus is used clinically as the route for nasal endoscopy and antral lavage. No sinuses drain into the inferior meatus.',
          keyFact: 'Inferior meatus receives only the nasolacrimal duct (via valve of Hasner) — no sinuses drain here. The largest meatus but the least complex sinusitis-wise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/inferior-meatus',
          tags: ['CT', 'sinonasal', 'anatomy', 'inferior meatus', 'nasolacrimal duct', 'head and neck'],
        },
      },
      // ============================================================
// Cards: Brain Neurovascular Anatomy — Diagram Set 01
// IDs: neuro-branat-078 to neuro-branat-081
// ============================================================

{
  id: 'neuro-branat-078',
  front: {
    question: 'Name the structure labeled A in this diagram of the brain neurovascular anatomy.',
    image: {
      src: '/images_neuro/brain_vasc01.png',
      alt: 'Brain neurovascular anatomy diagram with structures labeled A–D',
    },
  },
  back: {
    answer: 'Recurrent artery of Heubner (medial striate artery)',
    explanation: 'The recurrent artery of Heubner is the largest medial perforating branch of the ACA, arising near the A1–A2 junction and coursing back toward the ICA before entering the anterior perforated substance. It supplies the head of the caudate, anterior limb of the internal capsule, and anteromedial putamen. Occlusion causes contralateral hemiparesis (arm > leg), dysarthria, and facial weakness mimicking MCA territory infarct.',
    keyFact: 'Heubner = largest ACA perforator; arises at A1/A2 junction; supplies caudate head + anterior internal capsule. Infarct → arm-predominant hemiparesis.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/recurrent-artery-of-heubner',
    tags: ['anatomy', 'neuroradiology', 'vascular', 'ACA', 'perforators', 'brain'],
  },
},

{
  id: 'neuro-branat-079',
  front: {
    question: 'Name the structure labeled B in this diagram of the brain neurovascular anatomy.',
    image: {
      src: '/images_neuro/brain_vasc01.png',
      alt: 'Brain neurovascular anatomy diagram with structures labeled A–D',
    },
  },
  back: {
    answer: 'Lateral lenticulostriate arteries',
    explanation: 'The lateral lenticulostriates are perforating branches arising from the M1 segment of the MCA. They supply the superior putamen, globus pallidus, posterior limb of the internal capsule, and corona radiata. They are the classic site of hypertensive hemorrhage and lacunar infarction.',
    keyFact: 'Lateral lenticulostriates = MCA perforators; classic site of hypertensive basal ganglia hemorrhage and lacunar infarcts of the posterior limb of the internal capsule.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/lenticulostriate-arteries',
    tags: ['anatomy', 'neuroradiology', 'vascular', 'MCA', 'perforators', 'brain'],
  },
},

{
  id: 'neuro-branat-080',
  front: {
    question: 'Name the structure labeled C in this diagram of the brain neurovascular anatomy.',
    image: {
      src: '/images_neuro/brain_vasc01.png',
      alt: 'Brain neurovascular anatomy diagram with structures labeled A–D',
    },
  },
  back: {
    answer: 'Anterior choroidal artery (AChA)',
    explanation: 'The anterior choroidal artery arises from the ICA (occasionally MCA) just distal to the PComA. It supplies the posterior limb of the internal capsule (retrolenticular), optic tract, lateral geniculate body, hippocampus, amygdala, and choroid plexus of the temporal horn. AChA infarction produces the classic triad of contralateral hemiplegia, hemisensory loss, and homonymous hemianopia.',
    keyFact: 'AChA classic triad: contralateral hemiplegia + hemisensory loss + homonymous hemianopia. Arises from ICA distal to PComA; supplies posterior limb IC + optic tract.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/anterior-choroidal-artery',
    tags: ['anatomy', 'neuroradiology', 'vascular', 'ICA', 'choroidal', 'brain'],
  },
},

{
  id: 'neuro-branat-081',
  front: {
    question: 'Name the structure labeled D in this diagram of the brain neurovascular anatomy.',
    image: {
      src: '/images_neuro/brain_vasc01.png',
      alt: 'Brain neurovascular anatomy diagram with structures labeled A–D',
    },
  },
  back: {
    answer: 'Medial lenticulostriate arteries',
    explanation: 'The medial lenticulostriates arise from the A1 segment of the ACA (and sometimes directly from the ICA). They supply the anterior limb of the internal capsule, anteromedial caudate, and adjacent anterior perforated substance. They are smaller and fewer in number than the lateral lenticulostriates.',
    keyFact: 'Medial lenticulostriates = ACA (A1) perforators; supply anterior limb of internal capsule and caudate head. Lateral lenticulostriates = MCA perforators.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/lenticulostriate-arteries',
    tags: ['anatomy', 'neuroradiology', 'vascular', 'ACA', 'perforators', 'brain'],
  },
},

    ],
  },

  {
    id: 'neuro-spine-anatomy',
    label: 'Spine Anatomy',
    cards: [
      {
        id: 'neuro-spine-anatomy-001',
        front: {
          question: 'Name the seven cervical vertebrae landmarks visible on a lateral cervical spine radiograph. Which level is the most commonly injured in adults?',
        },
        back: {
          answer: 'C1 (atlas), C2 (axis), C3–C6 (typical cervical), C7 (vertebra prominens). Most commonly injured: C5–C6 in adults.',
          explanation: 'C1 has no vertebral body — it is a ring. C2 has the dens (odontoid process). C7 is the vertebra prominens (prominent spinous process). The C5–C6 level is biomechanically stressed and most commonly fractured/dislocated in hyperflexion/extension injuries. In elderly patients with osteoporosis, C1–C2 and C6–C7 are also frequently involved.',
          keyFact: 'C5–C6 = most common adult cervical injury level. C1 = atlas (no body). C2 = axis (dens). C7 = vertebra prominens.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cervical-spine',
          tags: ['anatomy', 'spine', 'cervical', 'xray'],
        },
      },
      {
        id: 'neuro-spine-anatomy-002',
        front: {
          question: 'What are the normal alignment lines assessed on a lateral cervical spine radiograph?',
        },
        back: {
          answer: 'Anterior vertebral line, posterior vertebral line, spinolaminar line, and posterior spinous process line. All four should form smooth curves.',
          explanation: 'Loss of alignment in any of these lines indicates ligamentous injury, fracture, or dislocation. The predental space (atlas–dens interval) should be ≤3 mm in adults and ≤5 mm in children. The prevertebral soft tissue at C3 should be ≤7 mm (or ≤⅓ vertebral body width at C3); at C6 ≤22 mm.',
          keyFact: 'Predental space: ≤3 mm adults, ≤5 mm children. Prevertebral soft tissue: ≤7 mm at C3, ≤22 mm at C6.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lateral-cervical-spine-radiograph-assessment',
          tags: ['anatomy', 'spine', 'cervical', 'alignment', 'xray'],
        },
      },
      {
        id: 'neuro-spine-anatomy-003',
        front: {
          question: 'Describe the MRI appearance of the normal intervertebral disc on T2-weighted imaging. What does loss of the T2 bright signal indicate?',
        },
        back: {
          answer: 'Normal disc: T2 bright nucleus pulposus (high water content) surrounded by T2 dark annulus fibrosus. Loss of T2 signal = disc desiccation (degeneration).',
          explanation: 'The nucleus pulposus is hydrophilic and normally very bright on T2. Disc degeneration reduces proteoglycan content and water, causing T2 hypointensity ("black disc"). The annulus fibrosus is composed of concentric collagen rings and is normally T2 dark. Disc protrusion/extrusion displaces the nucleus through a defect in the annulus.',
          keyFact: 'T2 bright disc = normal hydration. T2 dark ("black disc") = degeneration/desiccation. Nucleus = inner bright; annulus = outer dark.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/intervertebral-disc',
          tags: ['anatomy', 'spine', 'disc', 'mri', 't2'],
        },
      },
      {
        id: 'neuro-spine-anatomy-004',
        front: {
          question: 'Classify disc pathology using the standard nomenclature: what is the difference between a bulge, protrusion, extrusion, and sequestration?',
        },
        back: {
          answer: 'Bulge: >50% of disc circumference displaced. Protrusion: <50% circumference, base wider than depth. Extrusion: base narrower than depth (material extends beyond disc space). Sequestration: free disc fragment with no connection to parent disc.',
          explanation: 'This nomenclature (from the North American Spine Society) is critical for radiologist reporting. Protrusions retain an annular connection; extrusions breach the posterior longitudinal ligament (PLL). Sequestered fragments can migrate superiorly or inferiorly and present as epidural masses. Foraminal and far lateral herniations affect the exiting nerve root (one level above the exiting root in the lumbar spine).',
          keyFact: 'Sequestration = free fragment (no connection to disc). Extrusion = base < depth. Protrusion = base > depth. Bulge = >50% circumference.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/intervertebral-disc-herniation',
          tags: ['anatomy', 'spine', 'disc', 'herniation', 'nomenclature'],
        },
      },
      {
        id: 'neuro-spine-anatomy-005',
        front: {
          question: 'What is the conus medullaris? Where does it normally terminate in adults and neonates? What is the filum terminale?',
        },
        back: {
          answer: 'Conus medullaris = tapered end of the spinal cord. Adult: terminates at L1–L2 (acceptable range L1 lower third to L2–L3 disc). Neonate: L2–L3. Filum terminale = non-neural fibrous extension from conus to coccyx.',
          explanation: 'A conus below L2–L3 in adults is termed a "low-lying conus" and should prompt evaluation for tethered cord syndrome. The filum terminale internum extends from the conus to S2; the filum externum (coccygeal ligament) continues to the coccyx. A fatty or thickened filum (>2 mm) is associated with tethered cord.',
          keyFact: 'Normal adult conus: at or above L1–L2. Low-lying conus (<L2–L3) = tethered cord until proven otherwise. Fatty filum: >2 mm = abnormal.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/conus-medullaris',
          tags: ['anatomy', 'spine', 'conus', 'mri', 'tethered-cord'],
        },
      },
      {
        id: 'neuro-spine-anatomy-006',
        front: {
          question: 'Describe the spinal cord white and gray matter organization on axial MRI. Where are the corticospinal tracts, dorsal columns, and spinothalamic tracts located?',
        },
        back: {
          answer: 'Gray matter: butterfly/H-shaped, central. White matter surrounds it. Corticospinal tracts: lateral funiculi. Dorsal columns (vibration/proprioception): posterior funiculi. Lateral spinothalamic tract (pain/temp): lateral funiculi, anterior to corticospinal.',
          explanation: 'The dorsal horn (posterior gray) receives sensory input; the ventral horn (anterior gray) contains motor neurons. Upper motor neuron lesions affect corticospinal tracts; lower motor neuron lesions affect the anterior horn. Brown-Séquard syndrome (hemi-cord lesion) causes ipsilateral motor loss + proprioception loss, and contralateral pain/temperature loss (spinothalamic crosses within 1–2 levels of entry).',
          keyFact: 'Dorsal columns = ipsilateral vibration/proprioception. Spinothalamic = contralateral pain/temperature. Corticospinal = ipsilateral motor (below decussation).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-cord',
          tags: ['anatomy', 'spine', 'spinal-cord', 'tracts', 'mri'],
        },
      },
      {
        id: 'neuro-spine-anatomy-007',
        front: {
          question: 'What is the Modic classification of vertebral endplate changes on MRI? Describe each type.',
        },
        back: {
          answer: 'Modic Type 1: T1 dark, T2 bright (edema/inflammation, active). Type 2: T1 bright, T2 bright (fatty marrow replacement, chronic). Type 3: T1 dark, T2 dark (sclerosis).',
          explanation: 'Modic changes reflect degenerative endplate pathology adjacent to degenerated discs. Type 1 may enhance with gadolinium and can mimic infection — key board distinction. Type 2 (fatty) is most common and stable. Type 3 is rare, representing subchondral bone sclerosis. Transitions from Type 1 → Type 2 occur over time.',
          keyFact: 'Modic 1 = T1↓ T2↑ (edema, can enhance — mimics infection). Modic 2 = T1↑ T2↑ (fat). Modic 3 = T1↓ T2↓ (sclerosis).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/modic-changes',
          tags: ['anatomy', 'spine', 'mri', 'modic', 'degeneration', 'endplate'],
        },
      },
      {
        id: 'neuro-spine-anatomy-008',
        front: {
          question: 'What nerve root exits at the L4–L5 level? Which root does a paracentral L4–L5 disc herniation typically compress?',
        },
        back: {
          answer: 'L5 nerve root exits at L4–L5 (between L4 and L5 pedicles). A paracentral disc herniation at L4–L5 compresses the traversing L5 root (not the exiting L4 root).',
          explanation: 'In the lumbar spine, nerve roots exit below their numbered vertebra (e.g., L4 root exits at L4–L5 foramen). A paracentral herniation at L4–L5 compresses the traversing L5 root in the lateral recess. A far lateral/foraminal herniation at L4–L5 compresses the exiting L4 root. This distinction is critical for surgical planning.',
          keyFact: 'Paracentral herniation = traversing root compressed. Foraminal herniation = exiting root compressed. L4–L5 paracentral → L5 radiculopathy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lumbar-disc-herniation',
          tags: ['anatomy', 'spine', 'lumbar', 'nerve-root', 'herniation'],
        },
      },
      {
        id: 'neuro-spine-anatomy-009',
        front: {
          question: 'Describe the MRI appearance and location of the spinal epidural space. What structures are found there normally?',
        },
        back: {
          answer: 'The epidural space is between the dural sac and vertebral canal walls. It is most prominent posteriorly. Normal contents: epidural fat (T1 bright), epidural venous plexus (Batson plexus), and loose connective tissue.',
          explanation: 'Epidural fat is most abundant at lumbar levels and attenuates with age/steroid use. The Batson venous plexus is valveless and communicates with pelvic/thoracic veins, providing a route for metastatic spread. The epidural space is the target for epidural analgesia. Epidural lipomatosis (excessive fat) can cause cord/cauda equina compression.',
          keyFact: 'Epidural space = between dura and bone. Contains fat (T1 bright) + Batson plexus (valveless, routes for mets). Most prominent posteriorly in lumbar spine.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-epidural-space',
          tags: ['anatomy', 'spine', 'epidural', 'mri'],
        },
      },
      {
        id: 'neuro-spine-anatomy-010',
        front: {
          question: 'What is the normal AP diameter of the cervical spinal canal? Below what measurement is cervical stenosis considered significant?',
        },
        back: {
          answer: 'Normal cervical canal AP diameter: 17–18 mm at C3–C7. Relative stenosis: <13 mm. Absolute stenosis: <10 mm.',
          explanation: 'The Torg ratio (canal diameter / vertebral body AP diameter) is used to assess congenital narrowing: <0.8 suggests congenital stenosis. In lumbar stenosis, the cross-sectional area of the dural sac <100 mm² on axial MRI indicates significant stenosis. Trefoil canal shape (triangular on axial imaging) is characteristic of severe degenerative lumbar stenosis.',
          keyFact: 'Cervical canal: <10 mm = absolute stenosis, <13 mm = relative stenosis. Torg ratio <0.8 = congenital narrowing. Lumbar dural sac <100 mm² = significant stenosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cervical-spinal-stenosis',
          tags: ['anatomy', 'spine', 'stenosis', 'cervical', 'measurement'],
        },
      },
      {
        id: 'neuro-spine-anatomy-011',
        front: {
          question: 'Identify the ligaments of the spine. Which ligament, when ossified, causes OPLL? Which, when hypertrophied/buckled, causes central stenosis?',
        },
        back: {
          answer: 'OPLL: Ossification of the Posterior Longitudinal Ligament (PLL). Central stenosis: Ligamentum flavum hypertrophy/buckling.',
          explanation: 'OPLL is most common in the cervical spine and is more prevalent in East Asian populations. It appears as a linear ossification behind the vertebral bodies on CT. The ligamentum flavum connects adjacent laminae and normally measures ≤4 mm; hypertrophy (>4 mm) causes central canal stenosis, especially at L4–L5. The anterior longitudinal ligament (ALL) resists extension; the PLL resists flexion.',
          keyFact: 'OPLL = PLL ossification (cervical, East Asian). Ligamentum flavum >4 mm = hypertrophy → central stenosis (especially L4–L5).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ossification-of-the-posterior-longitudinal-ligament',
          tags: ['anatomy', 'spine', 'ligaments', 'opll', 'stenosis'],
        },
      },
      {
        id: 'neuro-spine-anatomy-012',
        front: {
          question: 'Describe the normal MRI appearance of the spinal cord on T1 and T2. What signal change in the cord indicates myelopathy?',
        },
        back: {
          answer: 'Normal cord: T1 isointense to gray matter; T2 slightly hyperintense to cord parenchyma with a thin CSF rim (T2 bright). Myelopathy: T2 hyperintensity within the cord substance.',
          explanation: 'T2 hyperintensity in the cord at a stenotic level indicates myelopathy (edema, gliosis, or demyelination). Chronic myelopathy shows T1 hypointensity (cavitation/myelomalacia). Enhancement indicates active injury/inflammation. The cord should be smooth and fill the spinal canal without compression deformity. Syringomyelia appears as a central CSF-signal cavity within the cord.',
          keyFact: 'Cord T2 hyperintensity = myelopathy signal. T1 cord hypointensity = myelomalacia (chronic, irreversible). Central CSF cavity = syrinx.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cervical-spondylotic-myelopathy',
          tags: ['anatomy', 'spine', 'mri', 'myelopathy', 'cord'],
        },
      },
      {
        id: 'neuro-spine-anatomy-013',
        front: {
          question: 'What are the ossification centers of a typical vertebra? What is a limbus vertebra, and how does it differ from a fracture?',
        },
        back: {
          answer: 'Three primary ossification centers: centrum (body) + two neural arches. Ring apophysis = secondary center (fuses by 25 years). Limbus vertebra = unfused ring apophysis (usually anterior-superior corner) due to disc herniation under it.',
          explanation: 'A limbus vertebra is a normal variant caused by herniation of disc material (Schmorl node variant) under the anterior ring apophysis before it fuses, resulting in a triangular bony fragment at the vertebral corner. It has smooth corticated margins (unlike an acute fracture). Most common at the lumbar levels. Schmorl nodes = disc herniation into the vertebral endplate (superior or inferior).',
          keyFact: 'Limbus vertebra = corticated triangular fragment at anterior vertebral corner; smooth margins distinguish from acute fracture. Schmorl node = intravertebral disc herniation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/limbus-vertebra',
          tags: ['anatomy', 'spine', 'variant', 'limbus', 'ossification'],
        },
      },
      {
        id: 'neuro-spine-anatomy-014',
        front: {
          question: 'What is the craniocervical junction (CVJ)? Name three key radiographic measurements used to assess it.',
        },
        back: {
          answer: 'CVJ = articulation of skull base with C1 and C2. Key measurements: (1) Basion-dens interval (BDI) ≤12 mm. (2) Basion-axial interval (BAI) ≤12 mm. (3) McGregor line — dens should not project >4.5 mm above it (indicator of basilar invagination).',
          explanation: 'Additional CVJ measurements: Powers ratio (basion-C1 arch) for atlanto-occipital dislocation — normal ≤1.0; >1.0 = anterior dislocation. ADI (atlanto-dens interval) ≤3 mm adults, ≤5 mm children. CV junction injuries are high-energy and life-threatening. Basilar invagination (dens invaginates into foramen magnum) is seen in Paget disease, osteomalacia, and OI.',
          keyFact: 'BDI ≤12 mm. BAI ≤12 mm. McGregor line: dens ≤4.5 mm above line. ADI ≤3 mm (adult), ≤5 mm (child). Powers ratio >1.0 = AOD.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/craniocervical-junction',
          tags: ['anatomy', 'spine', 'cvj', 'measurement', 'trauma'],
        },
      },
      {
        id: 'neuro-spine-anatomy-015',
        front: {
          question: 'Describe the anatomy of the C1–C2 articulation (atlantoaxial joint). What are the stabilizing ligaments and what injury/condition disrupts them?',
        },
        back: {
          answer: 'C1 (atlas): no body, two lateral masses, anterior and posterior arches. C2 (axis): has the odontoid process (dens). Key stabilizers: transverse atlantal ligament (TAL) — most important; also alar ligaments and apical ligament.',
          explanation: 'The TAL holds the dens against the anterior arch of C1 and maintains the atlantoaxial joint. TAL rupture causes atlantoaxial instability (ADI >3 mm in adults). TAL rupture occurs in trauma, Down syndrome, rheumatoid arthritis, and os odontoideum. The dens (odontoid) is a fracture-prone structure — Type II (base of dens) is the most common and has the highest non-union rate.',
          keyFact: 'TAL = most important C1–C2 stabilizer. TAL injury → ADI >3 mm. Odontoid Type II fracture = most common, highest non-union risk. RA, Down syndrome → C1–C2 instability.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/atlantoaxial-joint',
          tags: ['anatomy', 'spine', 'c1', 'c2', 'atlantoaxial', 'ligament'],
        },
      },
      {
        id: 'neuro-spine-anatomy-016',
        front: {
          question: 'What is a Chance fracture? What is the mechanism, and what associated injuries must be sought?',
        },
        back: {
          answer: 'Chance fracture = horizontal fracture through the posterior elements ± vertebral body, caused by hyperflexion-distraction (seat belt injury). Associated injuries: intra-abdominal injuries (bowel/mesentery tears, solid organ) in ~50%.',
          explanation: 'Chance fractures occur at the thoracolumbar junction (T12–L2) most commonly. The "seat belt sign" on CT is the imaging clue — a horizontal fracture through spinous process, pedicles, and vertebral body. Purely ligamentous Chance fractures are also described. The distraction mechanism can avulse the posterior longitudinal ligament. Always evaluate the abdomen when a Chance fracture is identified.',
          keyFact: 'Chance fracture = seat belt + hyperflexion → horizontal fracture T12–L2. Seek intra-abdominal injuries (~50%). All three columns disrupted = unstable.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chance-fracture',
          tags: ['anatomy', 'spine', 'trauma', 'chance', 'thoracolumbar'],
        },
      },
      {
        id: 'neuro-spine-anatomy-017',
        front: {
          question: 'Describe the Denis three-column model of spinal stability. Which combinations of column injury are unstable?',
        },
        back: {
          answer: 'Anterior column: ALL + anterior ½ of body/disc. Middle column: posterior ½ of body/disc + PLL. Posterior column: pedicles, facets, ligamentum flavum, posterior elements. Two or more column injury = unstable.',
          explanation: 'Denis classification guides surgical vs. conservative management. Burst fractures disrupt the anterior and middle columns → potentially unstable (especially if posterior column also involved). Wedge compression fractures involve only the anterior column → typically stable. The middle column is the key stabilizer: middle column disruption means the fracture is potentially unstable.',
          keyFact: 'Denis 3 columns: Anterior (ALL + ant body), Middle (post body + PLL), Posterior (posterior elements). ≥2 columns = unstable. Middle column = key.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/three-column-model-of-spinal-stability-denis',
          tags: ['anatomy', 'spine', 'trauma', 'denis', 'stability'],
        },
      },
      {
        id: 'neuro-spine-anatomy-018',
        front: {
          question: 'What are the MRI features of a spinal cord arteriovenous fistula (AVF)? What is the classic demographic and clinical presentation?',
        },
        back: {
          answer: 'Spinal dural AVF MRI: T2 hyperintensity in the central cord (lower thoracic/conus), perimedullary flow voids (tortuous veins on the dorsal cord surface), cord edema, and enhancement with gadolinium.',
          explanation: 'Spinal dural AVF (Type I) is the most common spinal vascular malformation. Classic patient: middle-aged/elderly man with progressive ascending myelopathy (legs first), often worse after exercise/erect posture. The fistula is at the nerve root sleeve (dural); arterialized venous hypertension causes cord edema. Angiography is gold standard; treatment is endovascular embolization or surgical disconnection.',
          keyFact: 'Spinal dural AVF: middle-aged man + progressive myelopathy + dorsal cord flow voids + T2 edema (lower cord). Perimedullary flow voids = classic clue.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-dural-arteriovenous-fistula',
          tags: ['anatomy', 'spine', 'vascular', 'avf', 'mri'],
        },
      },
      {
        id: 'neuro-spine-anatomy-019',
        front: {
          question: 'What is spondylolysis? What imaging modality best demonstrates it, and at what level does it most commonly occur?',
        },
        back: {
          answer: 'Spondylolysis = stress fracture of the pars interarticularis. Most common level: L5 (85–95%). Best imaging: CT (sagittal reformats) or SPECT for active lesions.',
          explanation: 'Spondylolysis is caused by repetitive hyperextension (gymnasts, football linemen). On oblique X-ray, the "Scottie dog" sign is seen: the pars defect appears as a collar on the dog\'s neck. CT confirms the defect. SPECT or MRI (STIR) shows active stress response before frank fracture. Bilateral spondylolysis permits anterior vertebral slip = spondylolisthesis, graded 1–4 (Meyerding) by degree of slip.',
          keyFact: 'Spondylolysis = pars fracture, L5 most common. Oblique X-ray = collar on Scottie dog. SPECT = most sensitive for active lesion. Bilateral → spondylolisthesis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spondylolysis',
          tags: ['anatomy', 'spine', 'lumbar', 'spondylolysis', 'pars'],
        },
      },
      {
        id: 'neuro-spine-anatomy-020',
        front: {
          question: 'What is the cauda equina? At what spinal level does it begin, and what constitutes cauda equina syndrome?',
        },
        back: {
          answer: 'Cauda equina = bundle of lumbar and sacral nerve roots below the conus medullaris (below L1–L2). Cauda equina syndrome: bilateral leg weakness, saddle anesthesia, bowel/bladder dysfunction due to compression of multiple roots.',
          explanation: 'The cauda equina is enclosed within the thecal sac and floats in CSF. Massive central disc herniation (most common at L4–L5), epidural hematoma, abscess, or tumor can compress multiple roots causing cauda equina syndrome — a surgical emergency. On MRI, loss of the normal nerve root pattern and compression of the thecal sac is seen. Contrast enhancement of nerve roots may indicate arachnoiditis or leptomeningeal disease.',
          keyFact: 'Cauda equina = nerve roots below conus (L1–L2). Cauda equina syndrome = saddle anesthesia + bladder/bowel → surgical emergency. Most common cause: large L4–L5 disc herniation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cauda-equina',
          tags: ['anatomy', 'spine', 'cauda-equina', 'mri', 'emergency'],
        },
      },
      {
        id: 'neuro-spine-anatomy-021',
        front: {
          question: 'Describe the MRI features of spinal cord infarction (anterior spinal artery syndrome). How does it differ from transverse myelitis?',
        },
        back: {
          answer: 'Spinal cord infarction: sudden onset, "owl eyes" (bilateral anterior horn T2 hyperintensity) on axial MRI, DWI restriction, predominantly at mid-thoracic cord (T4 watershed). Transverse myelitis: subacute onset, central cord T2 signal, ≥2 vertebral body lengths, often enhances.',
          explanation: 'The anterior spinal artery supplies the anterior ⅔ of the cord; infarction causes bilateral corticospinal + spinothalamic loss (motor + pain/temperature), sparing dorsal columns. The "owl eyes" pattern on axial T2 represents bilateral anterior horn ischemia. In contrast, transverse myelitis (MS, NMO, viral) tends to have more diffuse cord involvement and a subacute onset. DWI restriction in the cord strongly favors infarction.',
          keyFact: 'Anterior spinal artery infarct: "owl eyes" (bilateral ant horn T2+), DWI restriction, sudden onset. Transverse myelitis: >2 VB segments, enhances, subacute. Watershed: T4 level.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-cord-infarction',
          tags: ['anatomy', 'spine', 'infarction', 'mri', 'cord'],
        },
      },
      {
        id: 'neuro-spine-anatomy-022',
        front: {
          question: 'What is the Meyerding grading system for spondylolisthesis? How is grade determined on lateral radiograph?',
        },
        back: {
          answer: 'Meyerding grades: divide the superior endplate of the lower vertebra into quarters. Grade I: 0–25% slip. Grade II: 25–50%. Grade III: 50–75%. Grade IV: 75–100%. Grade V (spondyloptosis): >100% (complete slip).',
          explanation: 'The slippage percentage = horizontal displacement of the upper vertebra / AP width of the lower vertebra × 100%. Isthmic spondylolisthesis (due to bilateral spondylolysis) is most common at L5–S1. Degenerative spondylolisthesis (facet arthritis without pars defect) is most common at L4–L5 and occurs most often in older women. Grade III+ usually requires surgical stabilization.',
          keyFact: 'Meyerding: I=0–25%, II=25–50%, III=50–75%, IV=75–100%, V=complete (spondyloptosis). Isthmic = pars defect at L5–S1; degenerative = L4–L5, older women.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meyerding-grading-system-spondylolisthesis',
          tags: ['anatomy', 'spine', 'spondylolisthesis', 'meyerding', 'grading'],
        },
      },
      {
        id: 'neuro-spine-anatomy-023',
        front: {
          question: 'What are the sacral foramina, and how many are there? What nerve roots exit at S1 and S2?',
        },
        back: {
          answer: 'There are 4 pairs of anterior (pelvic) and 4 pairs of posterior sacral foramina. S1 and S2 nerve roots exit through the S1 and S2 posterior sacral foramina respectively.',
          explanation: 'Sacral nerve roots are important for bladder, bowel, and sexual function. Sacral fractures passing through the foramina (Denis Zone II) risk S1–S2 nerve injury. Zone I fractures are through the sacral ala (lateral to foramina) with low neurological risk. Zone III fractures are central (through the sacral canal) — highest risk of neurological injury. The sacral hiatus is the caudal opening of the sacral canal used for caudal epidural injections.',
          keyFact: 'Sacral Denis zones: I = ala (safe), II = foraminal (S1–S4 risk), III = central canal (highest neuro risk). 4 pairs anterior + 4 posterior foramina.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sacral-fractures',
          tags: ['anatomy', 'spine', 'sacrum', 'foramina', 'nerve-roots'],
        },
      },
      {
        id: 'neuro-spine-anatomy-024',
        front: {
          question: 'On a sagittal lumbar spine MRI, how do you identify the L4–L5 disc versus L5–S1? What anatomical landmark is used?',
        },
        back: {
          answer: 'Count from the conus/termination of the spinal cord, or use the lumbosacral junction (L5–S1). On sagittal MRI, trace from the sacrum superiorly: the first disc above the sacrum is L5–S1, the next is L4–L5. Alternatively, count from T12 (12th rib attachment).',
          explanation: 'Accurate disc level identification is essential before spine intervention. Counting from above (using T12 and the 12th rib) is the most reliable method. The iliac crest generally lies at the L4–L5 level on lateral X-ray (used for landmark for lumbar puncture). The L5 vertebra has a characteristic "squared" body and short pedicles. The S1 segment is part of the sacrum and lacks a disc below it.',
          keyFact: 'Count from sacrum up OR from 12th rib down for lumbar disc identification. L4–L5 ≈ iliac crest level on lateral X-ray. L5–S1 = lowest mobile disc.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lumbar-spine',
          tags: ['anatomy', 'spine', 'lumbar', 'identification', 'mri'],
        },
      },
      {
        id: 'neuro-spine-anatomy-025',
        front: {
          question: 'What is a tarlov cyst (perineural cyst)? What is its MRI appearance and clinical significance?',
        },
        back: {
          answer: 'Tarlov cysts = CSF-filled dilations of the nerve root sleeves, usually at the sacral levels (S2–S4). MRI: CSF signal (T1 dark, T2 bright), well-defined, follows nerve root, no wall enhancement.',
          explanation: 'Tarlov cysts are typically incidental findings. Large cysts can cause sacral radiculopathy, perineal pain, or bladder dysfunction through nerve root compression. They may cause bony remodeling of the sacrum. Distinguishing features from other cystic lesions: follow CSF signal on all sequences, arise from the root sleeve, and are located at sacral levels. Symptomatic cysts can be treated with aspiration, fibrin glue injection, or surgical excision.',
          keyFact: 'Tarlov cyst = CSF signal, sacral (S2–S4), nerve root sleeve origin, often incidental. Large cysts → sacral radiculopathy. No wall enhancement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tarlov-cyst',
          tags: ['anatomy', 'spine', 'sacrum', 'cyst', 'mri', 'tarlov'],
        },
      },
      // ============================================================
// SPINE RADIOGRAPH ANATOMY — Image-based flashcards
// IDs: neuro-spine-anatomy-026 through neuro-spine-anatomy-034
// ============================================================

{
  id: 'neuro-spine-anatomy-026',
  front: {
    question: 'Structure #1 on this spine radiograph — name this labeled structure.',
    image: {
      src: '/images_neuro/spine_radio.png',
      alt: 'Spine radiograph with labeled anatomical structures',
      caption: 'Identify structure #1',
    },
  },
  back: {
    answer: 'Transverse Process',
    explanation: 'The transverse process projects laterally from the junction of the pedicle and lamina. In the lumbar spine, the transverse processes are large and serve as attachment points for the psoas and quadratus lumborum muscles. On AP radiograph, they project laterally from the vertebral body like wings.',
    keyFact: 'Transverse process fractures in the lumbar spine are associated with significant retroperitoneal injury — always assess for associated visceral or vascular trauma.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/transverse-process',
    tags: ['XR', 'spine', 'anatomy', 'lumbar', 'posterior elements'],
  },
},

{
  id: 'neuro-spine-anatomy-027',
  front: {
    question: 'Structure #2 on this spine radiograph — name this labeled structure.',
    image: {
      src: '/images_neuro/spine_radio.png',
      alt: 'Spine radiograph with labeled anatomical structures',
      caption: 'Identify structure #2',
    },
  },
  back: {
    answer: 'Pedicle',
    explanation: 'The pedicle connects the vertebral body anteriorly to the posterior elements (lamina, transverse and articular processes). On AP radiograph, pedicles appear as oval densities ("owl eyes") on either side of the midline. Pedicle integrity is critical in assessing spinal metastatic disease.',
    keyFact: '"Winking owl sign" on AP radiograph = absent pedicle shadow, classically from osteolytic metastasis destroying the pedicle.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/pedicle-of-vertebral-arch',
    tags: ['XR', 'spine', 'anatomy', 'pedicle', 'posterior elements', 'metastasis'],
  },
},

{
  id: 'neuro-spine-anatomy-028',
  front: {
    question: 'Structure #3 on this spine radiograph — name this labeled structure.',
    image: {
      src: '/images_neuro/spine_radio.png',
      alt: 'Spine radiograph with labeled anatomical structures',
      caption: 'Identify structure #3',
    },
  },
  back: {
    answer: 'Superior Articular Process',
    explanation: 'The superior articular process projects superiorly from the junction of the pedicle and lamina, forming the superior facet of the zygapophyseal (facet) joint. It articulates with the inferior articular process of the vertebra above. Facet joint osteoarthritis commonly involves these processes.',
    keyFact: 'The superior articular process faces posteriorly in the lumbar spine — it "hugs" the inferior articular process of the level above, forming the facet joint.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/zygapophyseal-joint',
    tags: ['XR', 'spine', 'anatomy', 'facet joint', 'posterior elements', 'lumbar'],
  },
},

{
  id: 'neuro-spine-anatomy-029',
  front: {
    question: 'Structure #4 on this spine radiograph — name this labeled structure.',
    image: {
      src: '/images_neuro/spine_radio.png',
      alt: 'Spine radiograph with labeled anatomical structures',
      caption: 'Identify structure #4',
    },
  },
  back: {
    answer: 'Pars Interarticularis',
    explanation: 'The pars interarticularis (isthmus) is the segment of bone between the superior and inferior articular processes, connecting them within the lamina. It is the site of stress fracture in spondylolysis. On oblique radiograph, the pars forms the "neck" of the Scottie dog — a break here = spondylolysis.',
    keyFact: 'Scottie dog sign on oblique lumbar XR: collar on the dog\'s neck = pars defect (spondylolysis). Most common at L4–L5 and L5–S1.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/pars-interarticularis',
    tags: ['XR', 'spine', 'anatomy', 'pars interarticularis', 'spondylolysis', 'lumbar'],
  },
},

{
  id: 'neuro-spine-anatomy-030',
  front: {
    question: 'Structure #5 on this spine radiograph — name this labeled structure.',
    image: {
      src: '/images_neuro/spine_radio.png',
      alt: 'Spine radiograph with labeled anatomical structures',
      caption: 'Identify structure #5',
    },
  },
  back: {
    answer: 'Lamina',
    explanation: 'The lamina is a flat plate of bone forming the posterior wall of the vertebral foramen, connecting the spinous process medially to the pedicle and articular processes laterally. The two laminae fuse posteriorly to form the base of the spinous process. Laminectomy involves surgical removal of the lamina to decompress the canal.',
    keyFact: 'Absent lamina on XR/CT post-laminectomy creates the "open roof" appearance — a normal post-surgical finding not to be mistaken for fracture.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/vertebral-lamina',
    tags: ['XR', 'spine', 'anatomy', 'lamina', 'posterior elements', 'vertebral arch'],
  },
},

{
  id: 'neuro-spine-anatomy-031',
  front: {
    question: 'Structure #6 on this spine radiograph — name this labeled structure.',
    image: {
      src: '/images_neuro/spine_radio.png',
      alt: 'Spine radiograph with labeled anatomical structures',
      caption: 'Identify structure #6',
    },
  },
  back: {
    answer: 'Inferior Articular Process',
    explanation: 'The inferior articular process projects inferiorly from the lamina and forms the inferior facet of the zygapophyseal joint, articulating with the superior articular process of the vertebra below. In the lumbar spine it faces anteriorly, complementing the posteriorly-facing superior articular process above.',
    keyFact: 'Locked facets (jumped facets) occur when the inferior articular process dislocates anterior to the superior articular process below — indicates severe ligamentous injury and instability.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/zygapophyseal-joint',
    tags: ['XR', 'spine', 'anatomy', 'facet joint', 'posterior elements', 'trauma'],
  },
},

{
  id: 'neuro-spine-anatomy-032',
  front: {
    question: 'Structure #7 on this spine radiograph — name this labeled structure.',
    image: {
      src: '/images_neuro/spine_radio.png',
      alt: 'Spine radiograph with labeled anatomical structures',
      caption: 'Identify structure #7',
    },
  },
  back: {
    answer: 'Spinous Process',
    explanation: 'The spinous process projects posteriorly from the junction of the two laminae and is palpable along the midline of the back. On AP radiograph it appears as a teardrop-shaped midline density. Spinous process fractures ("clay shoveler\'s fracture") classically occur at C6–T1 from forceful flexion.',
    keyFact: 'Clay shoveler\'s fracture = avulsion of spinous process (C6–T1) from sudden flexion with muscle contraction — stable injury, no neurological deficit expected.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/clay-shovellers-fracture',
    tags: ['XR', 'spine', 'anatomy', 'spinous process', 'posterior elements', 'trauma'],
  },
},

{
  id: 'neuro-spine-anatomy-033',
  front: {
    question: 'Structure #8 on this spine radiograph — name this labeled structure.',
    image: {
      src: '/images_neuro/spine_radio.png',
      alt: 'Spine radiograph with labeled anatomical structures',
      caption: 'Identify structure #8',
    },
  },
  back: {
    answer: 'Interlaminar Space',
    explanation: 'The interlaminar space is the gap between adjacent laminae, bounded superiorly and inferiorly by laminae, laterally by the facet joints, and covered by the ligamentum flavum posteriorly. It is the window used for epidural and intrathecal injections and is the target for interlaminar epidural steroid injections.',
    keyFact: 'The interlaminar space is the access point for epidural steroid injections and lumbar puncture — ligamentum flavum hypertrophy narrows this space and contributes to lumbar spinal stenosis.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/lumbar-spinal-stenosis',
    tags: ['XR', 'spine', 'anatomy', 'interlaminar space', 'lumbar', 'stenosis'],
  },
},

{
  id: 'neuro-spine-anatomy-034',
  front: {
    question: 'Structure #9 on this spine radiograph — name this labeled structure.',
    image: {
      src: '/images_neuro/spine_radio.png',
      alt: 'Spine radiograph with labeled anatomical structures',
      caption: 'Identify structure #9',
    },
  },
  back: {
    answer: 'Intervertebral Disc',
    explanation: 'The intervertebral disc consists of a central nucleus pulposus (gelatinous) surrounded by the annulus fibrosus (fibrocartilaginous rings). On radiograph, the disc appears as a radiolucent space between vertebral endplates. Disc height loss, endplate irregularity, and vacuum disc phenomenon are key XR findings of disc degeneration.',
    keyFact: 'Vacuum disc phenomenon (nitrogen gas in disc on XR/CT) = degenerative disc disease; if seen in the setting of infection (discitis), gas is unusual and suggests gas-forming organism.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/intervertebral-disc',
    tags: ['XR', 'spine', 'anatomy', 'intervertebral disc', 'degeneration', 'discitis'],
  },
},
    ],
  },
  {
    id: 'neuro-head-neck',
    label: 'Head, Neck & Skull Base Anatomy',
    cards: [
      {
        id: 'neuro-head-neck-001',
        front: {
          question: 'Name the four spaces of the suprahyoid neck and their key contents. Which space is most commonly involved by deep neck infections?',
        },
        back: {
          answer: 'Key suprahyoid spaces: (1) Parapharyngeal space (PPS) — fat, fat surrounds parotid, trigeminal branches. (2) Masticator space — muscles of mastication, V3, mandible. (3) Parotid space — parotid gland, CN VII, lymph nodes. (4) Carotid space — carotid artery, IJV, CN IX–XII. Most common deep neck infection: peritonsillar/parapharyngeal.',
          explanation: 'The parapharyngeal space is a key anatomic crossroads — displacement of PPS fat by an adjacent mass helps localize the origin. Medial PPS displacement = parotid space mass; lateral PPS displacement = pharyngeal mucosal space mass. The retropharyngeal space (between pharyngeal muscles and prevertebral fascia) is a common pathway for descending neck infections reaching the mediastinum.',
          keyFact: 'PPS fat displacement is the key localizer: medial = parotid mass; lateral = pharyngeal mucosa mass. Retropharyngeal space = route to mediastinum for descending infections.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spaces-of-the-neck',
          tags: ['anatomy', 'head-neck', 'spaces', 'ct', 'mri'],
        },
      },
      {
        id: 'neuro-head-neck-002',
        front: {
          question: 'Describe the imaging appearance of a branchial cleft cyst. Where is the most common location, and what branchial apparatus does it derive from?',
        },
        back: {
          answer: 'Second branchial cleft cyst: anterolateral neck, posterior to submandibular gland, lateral to carotid space, anterior to sternocleidomastoid. CT: thin-walled cystic mass, fluid attenuation, non-enhancing wall. MRI: T2 bright, T1 variable.',
          explanation: 'Second branchial cleft cysts (Bailey type II) account for 90–95% of branchial anomalies. They arise from incomplete closure of the cervical sinus. If infected, walls thicken and enhance. First branchial cleft cysts occur near the parotid/external auditory canal. Third/fourth branchial anomalies are rare and typically near the piriform sinus. The "beak sign" — pointing between the ICA and ECA — is characteristic of a second branchial cleft cyst.',
          keyFact: 'Second BCC (most common): posterior to submandibular gland, lateral to carotid, anterior to SCM. "Beak sign" between ICA and ECA. T2 bright cyst.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/branchial-cleft-cyst',
          tags: ['anatomy', 'head-neck', 'cyst', 'branchial', 'ct', 'mri'],
        },
      },
      {
        id: 'neuro-head-neck-003',
        front: {
          question: 'What is a thyroglossal duct cyst? Where is the most common location, and what is the classic imaging finding?',
        },
        back: {
          answer: 'Thyroglossal duct cyst: midline neck cyst along the path of thyroid descent (foramen cecum → hyoid → thyroid). Most common location: infrahyoid (65%), at or just below the hyoid bone. CT: midline cystic mass embedded in the strap muscles, closely associated with the hyoid.',
          explanation: 'Thyroglossal duct cysts arise from remnants of the thyroglossal duct along which the thyroid descends from the foramen cecum. They move with swallowing and tongue protrusion (distinguishes from other midline cysts). Infected cysts show rim enhancement. Ectopic thyroid tissue may be present in the wall — always check for a normal thyroid gland before surgery. Thyroglossal duct carcinoma is rare (papillary thyroid cancer most common).',
          keyFact: 'Thyroglossal duct cyst: midline, at/below hyoid, moves with swallowing. Always confirm normal thyroid before surgery (ectopic thyroid in wall possible).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thyroglossal-duct-cyst',
          tags: ['anatomy', 'head-neck', 'cyst', 'thyroglossal', 'midline', 'ct'],
        },
      },
      {
        id: 'neuro-head-neck-004',
        front: {
          question: 'Classify paranasal sinus anatomy. What is the ostiomeatal complex (OMC), and why is it important?',
        },
        back: {
          answer: 'OMC = final common drainage pathway for the anterior ethmoid sinuses, maxillary sinuses, and frontal sinuses. Includes: maxillary ostium, infundibulum, ethmoid bulla, hiatus semilunaris, and middle meatus.',
          explanation: 'OMC obstruction (due to anatomic variants like concha bullosa, paradoxical middle turbinate, Haller cells, or deviated septum) causes recurrent sinusitis. Coronal CT of the sinuses (sinonasal CT) is performed to map OMC anatomy before FESS (functional endoscopic sinus surgery). Key anatomic variants: concha bullosa (pneumatized middle turbinate), Onodi cell (posterior ethmoid cell adjacent to optic nerve), and Haller cell (infraorbital ethmoid cell that may obstruct the OMC).',
          keyFact: 'OMC drains: maxillary + anterior ethmoid + frontal sinuses. Coronal CT before FESS. Key variants: concha bullosa, Haller cell (OMC obstruction), Onodi cell (optic nerve risk).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ostiomeatal-complex',
          tags: ['anatomy', 'head-neck', 'sinuses', 'omc', 'ct'],
        },
      },
      {
        id: 'neuro-head-neck-005',
        front: {
          question: 'What are the radiological features of Ludwig\'s angina? What is the danger of this condition?',
        },
        back: {
          answer: 'Ludwig\'s angina = rapidly spreading cellulitis of the bilateral submandibular, sublingual, and submental spaces. CT: fat stranding, gas-forming infection, multispatial spread, no drainable abscess early. Danger: airway compromise and descending mediastinitis.',
          explanation: 'Ludwig\'s angina is a dental infection (80% from 2nd/3rd molar) that spreads rapidly through the floor of the mouth spaces. CT is critical for: (1) defining extent, (2) identifying drainable abscesses, (3) evaluating the airway, and (4) detecting spread to the parapharyngeal or retropharyngeal spaces. The retropharyngeal space can conduct infection to the mediastinum (descending necrotizing mediastinitis) — a rapidly fatal complication. Management: IV antibiotics + surgical drainage + airway protection.',
          keyFact: 'Ludwig\'s angina: bilateral floor of mouth infection (dental origin). CT to evaluate: abscess, airway, spread. Retropharyngeal extension → descending mediastinitis (life-threatening).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ludwigs-angina',
          tags: ['anatomy', 'head-neck', 'infection', 'ct', 'emergency'],
        },
      },
      {
        id: 'neuro-head-neck-006',
        front: {
          question: 'Describe the imaging characteristics of a pleomorphic adenoma of the parotid gland on MRI. What feature, if present, suggests malignant transformation?',
        },
        back: {
          answer: 'Pleomorphic adenoma (benign mixed tumor): T1 iso/hypointense, T2 markedly hyperintense (homogeneous in small, heterogeneous in large), well-defined, lobulated, no invasion. Malignant transformation (carcinoma ex pleomorphic adenoma): irregular margins, T2 signal loss, infiltration into adjacent structures, facial nerve involvement.',
          explanation: 'Pleomorphic adenoma is the most common parotid tumor (70%). The marked T2 hyperintensity is characteristic and helps distinguish from Warthin tumor (which is T1/T2 heterogeneous, bilateral in 10%). Malignant features: invasion of deep lobe/facial nerve, perineural spread along CN VII, lymphadenopathy. Pleomorphic adenomas must be excised with a margin to prevent recurrence (seeding during enucleation causes multinodular recurrence).',
          keyFact: 'Pleomorphic adenoma: T2 markedly bright, lobulated, benign = most common parotid mass. Malignant transformation: loss of T2 signal + invasion. Warthin = bilateral, T1/T2 mixed.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pleomorphic-adenoma',
          tags: ['anatomy', 'head-neck', 'parotid', 'mri', 'salivary'],
        },
      },
      {
        id: 'neuro-head-neck-007',
        front: {
          question: 'What are the imaging features of nasopharyngeal carcinoma (NPC)? What is the classic presentation and which nerve is commonly involved?',
        },
        back: {
          answer: 'NPC: mass in the nasopharynx (often arising in the fossa of Rosenmüller), infiltrating, enhancing. Extension through foramen lacerum to cavernous sinus → CN VI palsy (abducens) is classic. Bilateral retropharyngeal and upper cervical (level II) adenopathy common.',
          explanation: 'NPC is associated with EBV and is more common in Chinese/Southeast Asian populations. It is T2 intermediate (not as bright as a cyst), enhances, and infiltrates adjacent structures. Perineural spread along CN V2 (foramen rotundum) and CN V3 (foramen ovale) can cause facial numbness. The fossa of Rosenmüller (lateral pharyngeal recess) is the most common site of origin. Level V cervical nodes (posterior triangle) are also a classic metastatic site.',
          keyFact: 'NPC: fossa of Rosenmüller origin, EBV-related, bilateral retropharyngeal/level II nodes. Foramen lacerum → cavernous sinus → CN VI palsy. Check foramen rotundum/ovale for perineural spread.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nasopharyngeal-carcinoma',
          tags: ['anatomy', 'head-neck', 'nasopharynx', 'malignancy', 'ct', 'mri'],
        },
      },
      {
        id: 'neuro-head-neck-008',
        front: {
          question: 'Identify the contents of the orbit. What are the four compartments of the orbit used in imaging localization?',
        },
        back: {
          answer: 'Orbital compartments: (1) Globe (intraconal vs. extraconal). (2) Intraconal space (inside the cone of rectus muscles) — contains optic nerve, orbital fat, vessels. (3) Extraconal space (outside cone) — lacrimal gland, orbital fat. (4) Subperiosteal space (between periorbita and orbital walls).',
          explanation: 'Intraconal masses: optic nerve glioma, optic nerve sheath meningioma, cavernous hemangioma, orbital varix. Extraconal masses: lacrimal gland tumors, dermoid cysts, lymphoma, rhabdomyosarcoma (most common pediatric orbital malignancy). Subperiosteal abscess (complication of ethmoid sinusitis) is located in the subperiosteal space medially. Proptosis direction helps localize: inferior proptosis = orbital floor or lacrimal; superior proptosis = floor of anterior fossa mass.',
          keyFact: 'Intraconal: optic nerve glioma, meningioma, cavernous hemangioma. Extraconal: lacrimal gland, lymphoma, rhabdo (peds). Subperiosteal: abscess from ethmoid sinusitis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/orbit',
          tags: ['anatomy', 'head-neck', 'orbit', 'mri', 'ct'],
        },
      },
      {
        id: 'neuro-head-neck-009',
        front: {
          question: 'What is the imaging appearance of optic nerve glioma vs. optic nerve sheath meningioma? How do they differ clinically and radiologically?',
        },
        back: {
          answer: 'Optic nerve glioma: fusiform enlargement of the optic nerve, T2 bright, no separation of nerve from mass (expands it), associated with NF1. Optic nerve sheath meningioma (ONSM): "tram-track" enhancement of the sheath around the preserved nerve, eccentric, calcifications, older women.',
          explanation: 'Gliomas (pilocytic astrocytoma) are pediatric, often bilateral if NF1-associated, and extend through the optic chiasm. ONSM are typically adult women (similar to intracranial meningiomas). "Tram-track" = enhancing tumor around a non-enhancing optic nerve on axial MRI. In NF1: optic glioma + T2 bright unidentified bright objects (UBOs) in basal ganglia and cerebellum. Perioptic enhancement (around optic nerve sheath) can also occur in sarcoid, optic perineuritis, or lymphoma.',
          keyFact: 'Optic glioma: fusiform, T2 bright, NF1-associated, pediatric. ONSM: "tram-track" enhancement, adult women, calcifications. NF1 → bilateral gliomas through chiasm.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/optic-nerve-glioma',
          tags: ['anatomy', 'head-neck', 'orbit', 'optic-nerve', 'mri'],
        },
      },
      {
        id: 'neuro-head-neck-010',
        front: {
          question: 'What is the carotid space? Name its contents from skull base to mediastinum and the tumors that arise in it.',
        },
        back: {
          answer: 'Carotid space contents: ICA (above bifurcation) / CCA (below), IJV, CN IX, X, XI, XII, cervical sympathetic chain. Key tumors: paraganglioma (carotid body tumor, vagal, glomus jugulare/tympanicum), schwannoma (CN X or sympathetic), and metastatic nodes.',
          explanation: 'Carotid body tumor: at the carotid bifurcation, splays the ICA and ECA (Lyre sign on angiography), highly vascular (avid enhancement, flow voids). 10% bilateral, 10% malignant, associated with SDH mutations. Vagal schwannoma: posterior carotid space, displaces ICA anteromedially. Glomus jugulare: at the jugular foramen, "salt and pepper" on MRI (flow voids + hemorrhage), permeative bone destruction on CT. Glomus tympanicum: confined to middle ear, arises from the cochlear promontory.',
          keyFact: 'Carotid body tumor: Lyre sign (splays ICA/ECA), avid enhancement. Vagal schwannoma: ICA pushed anterior. Glomus jugulare: "salt and pepper" + jugular foramen destruction. SDH mutations in familial cases.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/carotid-space',
          tags: ['anatomy', 'head-neck', 'carotid-space', 'paraganglioma', 'mri'],
        },
      },
      {
        id: 'neuro-head-neck-011',
        front: {
          question: 'Describe the anatomy of the internal auditory canal (IAC). What structures course through it, and what tumors arise there?',
        },
        back: {
          answer: 'IAC contents (Bill\'s bar divides anterior/posterior; transverse crest divides superior/inferior): Superior anterior = facial nerve (CN VII). Superior posterior = superior vestibular nerve. Inferior anterior = cochlear nerve. Inferior posterior = inferior vestibular nerve. Mnemonic: "Seven Up, Coke Down" (facial VII = superior ant, cochlear = inferior ant).',
          explanation: 'Vestibular schwannoma (acoustic neuroma) arises from the vestibular division (usually superior), causes asymmetric SNHL, and appears as an enhancing IAC/CPA mass that widens the IAC ("ice cream cone" shape). The cochlear nerve is anterior and inferior. Facial nerve schwannomas arise from CN VII and may involve the labyrinthine or geniculate segments. MRI with gadolinium (3T, 0.8mm thickness) is the gold standard for IAC lesions.',
          keyFact: '"Seven Up, Coke Down": CN VII = superior anterior, cochlear = inferior anterior. Vestibular schwannoma: enhancing IAC mass, widens canal, ice cream cone shape. SNHL = asymmetric → MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/internal-auditory-canal',
          tags: ['anatomy', 'head-neck', 'iac', 'temporal-bone', 'mri', 'ct'],
        },
      },
      {
        id: 'neuro-head-neck-012',
        front: {
          question: 'What are the skull base foramina and their key contents? Which foramen is affected by jugular foramen syndrome?',
        },
        back: {
          answer: 'Key foramina: Foramen ovale (V3, lesser petrosal nerve). Foramen rotundum (V2). Superior orbital fissure (CN III, IV, V1, VI + ophthalmic veins). Foramen spinosum (middle meningeal artery). Carotid canal (ICA). Jugular foramen (CN IX, X, XI + IJV). Hypoglossal canal (CN XII). Jugular foramen syndrome (Vernet syndrome): CN IX, X, XI palsy.',
          explanation: 'Jugular foramen is divided into: pars nervosa (anterior, CN IX + inferior petrosal sinus) and pars vascularis (posterior, CN X, XI + IJV). Glomus jugulare tumors, meningiomas, and schwannomas are the main tumors here. Vernet syndrome (IX, X, XI) = jugular foramen. Collet-Sicard syndrome (IX–XII) = lesion near jugular foramen + hypoglossal canal. Villaret syndrome = adds sympathetic chain (Horner).',
          keyFact: 'Jugular foramen: CN IX + X + XI + IJV. Vernet = IX+X+XI palsy. Collet-Sicard = IX–XII. Glomus jugulare is the classic tumor. Foramen ovale = V3 (perineural spread route for oral cancer).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/jugular-foramen',
          tags: ['anatomy', 'head-neck', 'skull-base', 'foramina', 'cranial-nerves'],
        },
      },
      {
        id: 'neuro-head-neck-013',
        front: {
          question: 'What is perineural spread of head and neck cancer? Name the most common primary tumors and the nerves involved.',
        },
        back: {
          answer: 'Perineural spread (PNS) = tumor tracking along nerve sheaths. Most common primaries: adenoid cystic carcinoma (highest propensity), squamous cell carcinoma (SCC) of the skin, mucoepidermoid carcinoma, lymphoma. Most commonly affected: CN V (trigeminal) and CN VII (facial).',
          explanation: 'MRI is the gold standard for PNS detection: look for nerve enlargement, enhancement, loss of perineural fat, and foraminal enlargement on CT. V2 spreads via foramen rotundum → Meckel cave → cavernous sinus. V3 spreads via foramen ovale. Facial nerve involvement: parotid malignancy → geniculate ganglion → IAC → CPA. PNS is clinically silent until advanced (facial numbness/palsy may be the only sign). PNS upstages the tumor and worsens prognosis.',
          keyFact: 'PNS: adenoid cystic carcinoma = highest risk. CN V + CN VII most involved. MRI: nerve enlargement + enhancement + foraminal fat loss. V2 → foramen rotundum; V3 → foramen ovale.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/perineural-spread-of-tumour',
          tags: ['anatomy', 'head-neck', 'perineural-spread', 'mri', 'cranial-nerves'],
        },
      },
      {
        id: 'neuro-head-neck-014',
        front: {
          question: 'Describe the lymph node levels of the neck (I–VII). What primary sites drain to each level?',
        },
        back: {
          answer: 'Level I (submandibular/submental): oral cavity. Level II (upper jugular): nasopharynx, oropharynx, parotid. Level III (mid-jugular): larynx, hypopharynx. Level IV (lower jugular): thyroid, infraclavicular primaries. Level V (posterior triangle): nasopharynx (NPC = classic), occipital scalp. Level VI (central compartment): thyroid, subglottis, trachea. Level VII (superior mediastinal): thyroid.',
          explanation: 'Recognizing which nodal level is involved helps predict the primary tumor site (useful when searching for an unknown primary). Short axis >10 mm (15 mm for jugulodigastric node) or central necrosis = malignant node on CT/MRI. Bilateral level V nodes → NPC. Retropharyngeal nodes (not numbered, medial to carotid) → NPC, thyroid, pharyngeal primaries.',
          keyFact: 'Level II = oropharynx/nasopharynx. Level IV = thyroid/infraclavicular primary. Level V bilateral = NPC. Node: SA >10 mm OR central necrosis = malignant. Retropharyngeal = NPC.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cervical-lymph-node-levels',
          tags: ['anatomy', 'head-neck', 'lymph-nodes', 'levels', 'staging'],
        },
      },
      {
        id: 'neuro-head-neck-015',
        front: {
          question: 'What is the radiological appearance of the normal temporal bone anatomy? Name the four parts of the temporal bone and the key structures in each.',
        },
        back: {
          answer: 'Four parts: (1) Squamous: lateral wall of middle cranial fossa. (2) Petrous: contains IAC, cochlea, semicircular canals, carotid canal. (3) Tympanic: forms the external auditory canal (EAC). (4) Mastoid: air cells posterior to EAC.',
          explanation: 'High-resolution CT of the temporal bone (0.5–0.625 mm) is the primary imaging tool. The ossicular chain (malleus, incus, stapes) is best seen on CT. The cochlea (2.5–2.75 turns), semicircular canals (superior, lateral, posterior), and vestibule form the labyrinth. The tegmen tympani separates the middle ear from the middle cranial fossa. Cholesteatoma (acquired > congenital) fills the epitympanum and erodes the ossicles and scutum.',
          keyFact: 'Petrous = key clinical structure (cochlea, semicircular canals, IAC, carotid canal). Tegmen = middle ear roof. Cholesteatoma: epitympanum + scutum erosion. CT temporal bone for ossicular evaluation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/temporal-bone',
          tags: ['anatomy', 'head-neck', 'temporal-bone', 'ct', 'ear'],
        },
      },
      {
        id: 'neuro-head-neck-016',
        front: {
          question: 'What is cholesteatoma? Describe its imaging appearance on CT and MRI, and name the two types.',
        },
        back: {
          answer: 'Cholesteatoma = keratinizing squamous epithelium accumulation in the middle ear. CT: soft tissue mass in the epitympanum/middle ear, ossicular erosion (especially incus long process), and scutum erosion. MRI: DWI restricted (high signal on DWI, low ADC) — key for recurrence detection.',
          explanation: 'Acquired cholesteatoma (Pars flaccida type, Prussak\'s space) is most common and arises from retraction pockets. Congenital cholesteatoma: white pearly mass behind an intact tympanic membrane in children. CT shows ossicular erosion, tegmen erosion (risk of intracranial extension), or lateral semicircular canal erosion (fistula). Post-op recurrence detection: non-echo-planar DWI (HASTE) at 1.5T or 3T identifies keratin debris as DWI hyperintense, even for 2–3 mm residual disease.',
          keyFact: 'Cholesteatoma: DWI bright (restricted diffusion) = key for recurrence. CT: scutum + incus long process erosion + Prussak\'s space (Pars flaccida). Congenital: intact TM + white mass in children.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cholesteatoma',
          tags: ['anatomy', 'head-neck', 'temporal-bone', 'cholesteatoma', 'dwi', 'ct'],
        },
      },
      {
        id: 'neuro-head-neck-017',
        front: {
          question: 'What is the normal CT appearance of the parathyroid glands? How are they localized on imaging prior to surgery for primary hyperparathyroidism?',
        },
        back: {
          answer: 'Normal parathyroid glands are too small to see on CT (<5 mm, 25–40 mg each). Adenomas: hypervascular, oval, posterior to thyroid, T2 bright on MRI. Localization: Tc-99m sestamibi scintigraphy (+ SPECT/CT) combined with ultrasound is first-line. CT (4D-CT) used for ectopic/failed re-do cases.',
          explanation: 'Most people have 4 parathyroid glands (superior pair at upper posterior thyroid, inferior pair more variable). Ectopic parathyroids (15%) may be in the mediastinum, thymus, or retroesophageal. Sestamibi washes out from normal tissue but is retained by hyperfunctioning adenoma. 4D-CT (pre-contrast, arterial, delayed) shows adenoma as avid arterial enhancement with early washout. US is highly operator-dependent but cheap/radiation-free.',
          keyFact: 'Parathyroid adenoma: sestamibi SPECT/CT + US = first line. 4D-CT = ectopic/failed re-do cases. Adenoma: T2 bright on MRI, arterial enhancement on CT. Ectopic locations: mediastinum, thymus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/parathyroid-adenoma',
          tags: ['anatomy', 'head-neck', 'parathyroid', 'nuclear', 'ct'],
        },
      },
      {
        id: 'neuro-head-neck-018',
        front: {
          question: 'Describe the TI-RADS (ACR) classification for thyroid nodules. At what size threshold is FNA recommended for a TR5 nodule?',
        },
        back: {
          answer: 'ACR TI-RADS: TR1 (benign, 0 pts), TR2 (not suspicious, 2 pts), TR3 (mildly suspicious, 3 pts), TR4 (moderately suspicious, 4–6 pts), TR5 (highly suspicious, ≥7 pts). TR5 FNA threshold: ≥1 cm.',
          explanation: 'ACR TI-RADS assigns points based on: composition (solid = 2 pts), echogenicity (hypoechoic = 2 pts), shape (taller-than-wide = 3 pts), margin (irregular/extrathyroidal = 2–3 pts), and echogenic foci (macrocalcifications = 1 pt, peripheral calcifications = 2 pts, punctate echogenic foci/microcalcifications = 3 pts). Highly suspicious features include: markedly hypoechoic, taller-than-wide, spiculated margins, microcalcifications, extrathyroidal extension. FNA thresholds vary by TR category and size.',
          keyFact: 'ACR TI-RADS: ≥7 pts = TR5 → FNA at ≥1 cm. High suspicion features: taller-than-wide, markedly hypoechoic, spiculated margin, microcalcifications. Points: solid=2, hypoechoic=2, taller-wide=3, irregular margin=2, punctate foci=3.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acr-ti-rads',
          tags: ['anatomy', 'head-neck', 'thyroid', 'tirads', 'ultrasound'],
        },
      },
      {
        id: 'neuro-head-neck-019',
        front: {
          question: 'What are the imaging features of a carotid body tumor (paraganglioma at the carotid bifurcation)? What is the "Lyre sign"?',
        },
        back: {
          answer: 'Carotid body tumor: intensely enhancing mass at the carotid bifurcation, splaying the ICA and ECA. "Lyre sign" = widening of the angle between ICA and ECA by the tumor on angiography or MRA. MRI: "salt and pepper" pattern (flow voids + hemorrhagic foci) in larger tumors.',
          explanation: 'Carotid body tumors (chemodectomas) are the most common head and neck paraganglioma. They are highly vascular (do not biopsy). Associated with SDH gene mutations (succinate dehydrogenase — B, C, D subunits). 10% bilateral (more with genetic mutations), 10% malignant (no reliable imaging features for malignancy — defined by metastases). Preoperative embolization reduces surgical blood loss. Must be distinguished from vagal paraganglioma (which displaces ICA anteriorly) and lymphadenopathy.',
          keyFact: 'Carotid body tumor: bifurcation location, Lyre sign (ICA/ECA splayed), salt-and-pepper MRI, avid enhancement. SDH mutations → bilateral (SDHB/C/D). Do NOT biopsy. 10% bilateral, 10% malignant.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/carotid-body-tumour',
          tags: ['anatomy', 'head-neck', 'paraganglioma', 'carotid', 'mri', 'ct'],
        },
      },
      {
        id: 'neuro-head-neck-020',
        front: {
          question: 'What is the imaging differential diagnosis for a CPA (cerebellopontine angle) mass? What are the key distinguishing features of each?',
        },
        back: {
          answer: 'CPA masses (most common to least): (1) Vestibular schwannoma (80%): enhancing, centered in IAC, widens canal, "ice cream cone". (2) Meningioma (10%): broad dural base, calcifications, no IAC widening, "tram track" enhancement, dural tail. (3) Epidermoid (5%): DWI bright, T2 very bright like CSF, "cauliflower" shape, insinuates. Others: lipoma (T1 fat signal), arachnoid cyst (CSF signal, no enhancement).',
          explanation: 'Key distinguishing points: Schwannoma is CENTERED in the IAC and widens it; meningioma is eccentrically placed and has a dural tail/calcifications. Epidermoid cysts insinuate around structures (not displace) and are DWI positive — the key way to distinguish from arachnoid cysts (DWI negative). Lipoma follows fat signal on all sequences. FLAIR helps: epidermoid is "dirty CSF" (not completely suppressed).',
          keyFact: 'CPA: 80% schwannoma (IAC-centered), 10% meningioma (dural tail, no IAC widening), 5% epidermoid (DWI bright, insinuates). Epidermoid vs arachnoid cyst: DWI positive vs negative.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebellopontine-angle-mass',
          tags: ['anatomy', 'head-neck', 'cpa', 'mri', 'differential'],
        },
      },
      {
        id: 'neuro-head-neck-021',
        front: {
          question: 'What is fibrous dysplasia of the skull/facial bones? What are its CT and MRI appearances? What is the "ground glass" pattern?',
        },
        back: {
          answer: 'Fibrous dysplasia: replacement of medullary bone by fibrous tissue + immature woven bone. CT: "ground glass" matrix (homogeneous intermediate attenuation, 70–130 HU), bony expansion, NO periosteal reaction, NO aggressive features. MRI: T1 dark, T2 variable, may enhance.',
          explanation: 'Fibrous dysplasia is monostotic (70–80%) or polyostotic. In the head, it most commonly involves the frontal/temporal bones and skull base. It causes cosmetic deformity but also can narrow the optic canal (vision loss) or IAC (SNHL). McCune-Albright syndrome = polyostotic fibrous dysplasia + café-au-lait spots + precocious puberty. Cherubism = familial fibrous dysplasia limited to the jaws. Malignant transformation (<1%) to osteosarcoma — look for aggressive features (cortical destruction, soft tissue mass).',
          keyFact: 'Fibrous dysplasia: "ground glass" CT (70–130 HU), bony expansion, NO periosteal reaction. McCune-Albright = polyostotic + café-au-lait + precocious puberty. Optic canal involvement → vision loss.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fibrous-dysplasia',
          tags: ['anatomy', 'head-neck', 'skull', 'fibrous-dysplasia', 'ct'],
        },
      },
      {
        id: 'neuro-head-neck-022',
        front: {
          question: 'What is Graves disease on thyroid ultrasound? Describe the typical US and nuclear medicine findings.',
        },
        back: {
          answer: 'Graves disease US: diffusely enlarged thyroid, heterogeneous echogenicity, markedly increased vascularity on color Doppler ("thyroid inferno"). Nuclear medicine (Tc-99m pertechnetate or I-123): diffusely increased uptake throughout the entire gland (>35% at 24h with I-123).',
          explanation: 'Graves disease is the most common cause of hyperthyroidism in young women. Autoimmune (TSH receptor antibodies). The "thyroid inferno" on color Doppler reflects hypervascular parenchyma. A normal or low uptake on nuclear scan in a hyperthyroid patient indicates destructive thyroiditis (Hashimoto\'s thyroiditis in hypothyroid phase, subacute/de Quervain\'s thyroiditis, or postpartum thyroiditis) — this is the key nuclear medicine distinction. Toxic multinodular goiter shows heterogeneous patchy uptake with "hot" nodules.',
          keyFact: 'Graves: diffuse goiter, thyroid inferno on US, diffusely increased nuclear uptake. Low uptake + hyperthyroid = destructive thyroiditis. Toxic MNG = patchy "hot" nodules.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/graves-disease-of-the-thyroid',
          tags: ['anatomy', 'head-neck', 'thyroid', 'ultrasound', 'nuclear'],
        },
      },
      {
        id: 'neuro-head-neck-023',
        front: {
          question: 'Describe the normal MRI anatomy of the pituitary gland. What is the normal size limit for the anterior pituitary in women?',
        },
        back: {
          answer: 'Anterior pituitary (adenohypophysis): T1 isointense, T2 slightly hyperintense, enhances uniformly. Posterior pituitary (neurohypophysis): T1 bright spot (normal in 80%). Normal pituitary height: ≤8 mm in adult men, ≤10 mm in adult women (≤12 mm in puberty/pregnancy/postpartum).',
          explanation: 'The pituitary stalk should be midline and ≤3 mm at the level of the optic chiasm. Tilting of the stalk raises the question of a stalk lesion (germinoma, LCH, sarcoid, mets). The pituitary gland has a convex superior border during puberty/pregnancy — this is normal. Microadenomas (<10 mm) appear as T1 hypointense foci within the enhancing gland on dynamic gadolinium study. Macroadenomas (>10 mm) may extend superiorly (optic chiasm compression) or laterally (Knosp grade for cavernous sinus invasion).',
          keyFact: 'Pituitary height: ≤8 mm men, ≤10 mm women (≤12 mm pregnant). Posterior pituitary T1 bright = normal. Stalk ≤3 mm, midline. Microadenoma: T1 dark in enhancing gland (dynamic MRI).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pituitary-gland',
          tags: ['anatomy', 'head-neck', 'pituitary', 'mri', 'sella'],
        },
      },
      {
        id: 'neuro-head-neck-024',
        front: {
          question: 'What is the "empty sella"? What are its causes and is it clinically significant?',
        },
        back: {
          answer: 'Empty sella = herniation of subarachnoid space into the sella turcica, compressing the pituitary against the floor. Primary empty sella: incompetent diaphragma sellae + increased CSF pulsation (associated with obesity, increased ICP, multi-parity). Secondary empty sella: prior pituitary infarction (Sheehan syndrome), surgery, radiation, or pituitary apoplexy.',
          explanation: 'MRI: sella filled with CSF signal (T1 dark, T2 bright), stalk displaced posteriorly, pituitary tissue visible only as a thin rim against the floor. Primary empty sella is usually incidental and patients are often endocrinologically normal (though subtle hypopituitarism is possible). Secondary empty sella is associated with hypopituitarism proportional to the degree of pituitary destruction. Intracranial hypertension (IIH) may cause progressive enlargement of an empty sella.',
          keyFact: 'Empty sella: CSF in sella on MRI, stalk tilted posteriorly. Primary = incidental, incompetent diaphragma. Secondary = post-apoplexy/Sheehan/surgery. IIH → progressive empty sella.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/empty-sella',
          tags: ['anatomy', 'head-neck', 'pituitary', 'sella', 'mri'],
        },
      },
      {
        id: 'neuro-head-neck-025',
        front: {
          question: 'Describe the anatomy of the cavernous sinus. What structures run through it, and what pathology is detected on MRI?',
        },
        back: {
          answer: 'Cavernous sinus contents: CN III, IV, V1, V2 in the lateral dural wall (III > IV > V1 > V2 superior to inferior). CN VI and the ICA + sympathetic plexus pass through the sinus itself (not the wall). Key pathologies: cavernous sinus thrombosis (CT/MRI: filling defect, enhancement of dural walls), carotid-cavernous fistula, meningioma, pituitary macroadenoma invasion (Knosp), schwannoma (CN VI), perineural spread.',
          explanation: 'Cavernous sinus thrombosis: typically from sinusitis (sphenoid/ethmoid), orbital cellulitis, or dental infection. CT shows lack of normal sinus enhancement and proptosis; MRI shows abnormal signal in the sinus. Carotid-cavernous fistula (CCF): direct (high flow, post-trauma) or indirect (dural fistula, spontaneous). Features: proptosis, chemosis, dilated superior ophthalmic vein, enlarged cavernous sinus. CN VI palsy is the most common cranial nerve palsy in cavernous sinus disease (traverses sinus freely).',
          keyFact: 'Cavernous sinus wall (lateral, superior → inferior): CN III, IV, V1, V2. Through the sinus: CN VI + ICA. CN VI palsy = most common cavernous sinus CN palsy. CCF: dilated SOV + proptosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cavernous-sinus',
          tags: ['anatomy', 'head-neck', 'cavernous-sinus', 'mri', 'cranial-nerves'],
        },
      },
      {
        id: 'neuro-head-neck-026',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull04.png',
            alt: 'Axial CT skull base at pterygopalatine fossa level',
            caption: 'Axial CT — Skull Base (Pterygopalatine Fossa Level)',
            maskSides: { left: '24%', right: '24%' },
          },
        },
        back: {
          answer: 'Inferior orbital fissure',
        },
      },
      {
        id: 'neuro-head-neck-027',
        front: {
          question: 'Name the structure',
          image: {
            src: '/images_neuro/skull05.png',
            alt: 'Axial CT skull base at pterygopalatine fossa level',
            caption: 'Axial CT — Skull Base (Pterygopalatine Fossa Level)',
            maskSides: { left: '24%', right: '24%' },
          },
        },
        back: {
          answer: 'Eustachian tube',
        },
      },
      {
        id: 'neuro-head-neck-028',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull06.png',
            alt: 'Axial CT skull base at pterygopalatine fossa level',
            caption: 'Axial CT — Skull Base (Pterygopalatine Fossa Level)',
            maskSides: { left: '24%', right: '24%' },
          },
        },
        back: {
          answer: 'Foramen lacerum',
        },
      },
      {
        id: 'neuro-head-neck-029',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull07.png',
            alt: 'Axial CT skull base at pterygopalatine fossa level',
            caption: 'Axial CT — Skull Base (Pterygopalatine Fossa Level)',
            maskSides: { left: '24%', right: '24%' },
          },
        },
        back: {
          answer: 'Pterygopalatine fossa',
        },
      },
      {
        id: 'neuro-head-neck-030',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull08.png',
            alt: 'Axial CT skull base at pterygopalatine fossa level',
            caption: 'Axial CT — Skull Base (Pterygopalatine Fossa Level)',
            maskSides: { left: '24%', right: '24%' },
          },
        },
        back: {
          answer: 'Uncinate process',
            },
      },
      {
        id: 'neuro-head-neck-031',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull09.png',
            alt: 'Axial CT skull base at pterygopalatine fossa level',
            caption: 'Axial CT — Skull Base (Pterygopalatine Fossa Level)',
            maskSides: { left: '24%', right: '24%' },
          },
        },
        back: {
          answer: 'Middle meatus',
        },
      },
      {
        id: 'neuro-head-neck-032',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull10.png',
            alt: 'Axial CT skull base at pterygopalatine fossa level',
            caption: 'Axial CT — Skull Base (Pterygopalatine Fossa Level)',
            maskSides: { left: '24%', right: '24%' },
          },
        },
        back: {
          answer: 'Foramen spinosum',
        },
      },
      {
        id: 'neuro-head-neck-033',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull11.png',
            alt: 'Axial CT facial bones at inferior orbital fissure level',
            caption: 'Axial CT — Facial Bones (Inferior Orbital Fissure Level)',
            maskSides: { left: '20%', right: '22%' },
          },
        },
        back: {
          answer: 'Foramen ovale',
        },
      },
      {
        id: 'neuro-head-neck-034',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull12.png',
            alt: 'Axial CT orbital apex level showing superior orbital fissure',
            caption: 'Axial CT — Orbital Apex Level',
            maskSides: { left: '22%', right: '24%' },
          },
        },
        back: {
          answer: 'Sphenoid bone',
        },
      },
      {
        id: 'neuro-head-neck-037',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull13.png',
            alt: 'Axial CT orbital apex level showing superior orbital fissure',
            caption: 'Axial CT — Orbital Apex Level',
            maskSides: { left: '22%', right: '24%' },
          },
        },
        back: {
          answer: 'Vidian canal',
        },
      },
      {
        id: 'neuro-head-neck-038',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull14.png',
            alt: 'Axial CT orbital apex level showing superior orbital fissure',
            caption: 'Axial CT — Orbital Apex Level',
            maskSides: { left: '22%', right: '24%' },
          },
        },
        back: {
          answer: 'Pterygopalatine fossa',
        },
      },
      {
        id: 'neuro-head-neck-039',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull01.png',
            alt: 'Axial CT orbital apex level showing superior orbital fissure',
            caption: 'Axial CT — Orbital Apex Level',
            maskSides: { left: '22%', right: '24%' },
          },
        },
        back: {
          answer: 'Lamina papyracea',
        },
      },
      {
        id: 'neuro-head-neck-035',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull02.png',
            alt: 'Axial CT skull base at sella turcica level',
            caption: 'Axial CT — Skull Base (Sella Turcica Level)',
            maskSides: { left: '24%', right: '22%' },
          },
        },
        back: {
          answer: 'Superior orbital fissure',
        },
      },
      {
        id: 'neuro-head-neck-036',
        front: {
          question: 'Name the structure.',
          image: {
            src: '/images_neuro/skull03.png',
            alt: 'Axial CT orbital level showing lamina papyracea',
            caption: 'Axial CT — Orbital Level',
            maskSides: { left: '22%', right: '24%' },
          },
        },
        back: {
          answer: 'Sella turcica',
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
          question: 'A 72-year-old with sudden left hemiplegia. Non-contrast CT shows a hyperdense right MCA. What does this sign represent and what is its significance?',
        },
        back: {
          answer: 'Hyperdense MCA sign — indicates acute thrombus/embolus in the MCA. Associated with large core infarct and poor outcome if untreated.',
          explanation: 'The hyperdense MCA sign appears within the first few hours of ischemic stroke as an attenuation of ~60–90 HU (vs. ~35–40 HU for normal vessels) due to fresh thrombus. It indicates M1 segment occlusion. A "dot sign" in the Sylvian fissure indicates M2/M3 occlusion. Both predict a large territory infarct.',
          keyFact: 'Hyperdense MCA sign = acute thrombus. Check the contralateral MCA for comparison. Any unexplained dense vessel on NCCT in stroke context warrants urgent CTA for LVO (large vessel occlusion) assessment for thrombectomy eligibility.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hyperdense-mca-sign',
          tags: ['stroke', 'ct', 'mca', 'lvo'],
        },
      },
      {
        id: 'neuro-stroke-002',
        front: {
          question: 'What is the DWI/ADC appearance of acute, subacute, and chronic infarcts, and what is the timeframe for each stage?',
        },
        back: {
          answer: 'Acute (0–7 days): DWI bright, ADC dark (restricted). Subacute (1–3 weeks): DWI may normalize or fade, ADC initially dark then normalizes ("pseudonormalization" ~7–10 days). Chronic (>3 weeks): DWI dark, ADC bright (encephalomalacia/free diffusion).',
          explanation: 'DWI detects cytotoxic edema within minutes of ischemia (earliest imaging marker of infarction). ADC values decrease to nadir at ~24–48 hrs then gradually normalize over 1–2 weeks (pseudonormalization). After 2–3 weeks, the infarcted region becomes encephalomalacic with free diffusion (dark DWI, bright ADC).',
          keyFact: 'Pseudonormalization of ADC at ~7–10 days can be misleading — check T2/FLAIR for established infarct signal. DWI remains elevated for 1–2 weeks due to T2 shine-through even as ADC normalizes.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ischaemic-stroke',
          tags: ['stroke', 'dwi', 'mri', 'ischemia'],
        },
      },
      {
        id: 'neuro-stroke-003',
        front: {
          question: 'What is the ASPECTS score, how is it calculated, and what threshold is used for thrombectomy eligibility?',
        },
        back: {
          answer: 'ASPECTS (Alberta Stroke Program Early CT Score) scores 10 regions of the MCA territory on CT: 10 = normal; 0 = complete MCA territory involvement. Each region with early ischemic changes = subtract 1 point. Thrombectomy typically requires ASPECTS ≥6.',
          explanation: 'ASPECTS regions: C (caudate), L (lenticular nucleus), IC (internal capsule), I (insular ribbon), M1-M3 (anterior/posterior/lateral MCA cortex), M4-M6 (upper M1-M3 equivalents). Scored on single CT slice at basal ganglia and at corona radiata level. ASPECTS <6 predicts poor outcome with reperfusion therapy.',
          keyFact: 'ASPECTS 10 regions: C, L, IC, I, M1, M2, M3, M4, M5, M6. Each ischemic change = -1 point. ASPECTS ≥6 generally required for thrombectomy (per most RCTs). ASPECTS 0-5 = large core, poor reperfusion benefit.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/alberta-stroke-program-early-ct-score-aspects',
          tags: ['stroke', 'ct', 'scoring', 'thrombectomy'],
        },
      },
      {
        id: 'neuro-stroke-004',
        front: {
          question: 'What is the MRI "mismatch" concept in acute stroke, and what does it represent clinically?',
        },
        back: {
          answer: 'Mismatch = perfusion-weighted imaging (PWI) lesion > DWI lesion. The DWI core = irreversibly infarcted tissue. The "penumbra" = PWI-DWI mismatch = ischemic but potentially salvageable tissue with reperfusion.',
          explanation: 'The ischemic penumbra is the target of thrombolytic and thrombectomy therapy. A large mismatch (penumbra > core) indicates significant salvageable tissue. This principle underpins extended window thrombectomy (6–24 hrs: DAWN/DEFUSE-3 trials). CT perfusion maps (CBF, CBV, MTT, Tmax) provide similar information more rapidly.',
          keyFact: 'DWI = core (dead). PWI or CTP Tmax >6s = penumbra (at-risk). Large mismatch ratio (>1.8) and volume (>15 mL) = patient benefits from thrombectomy up to 24 hrs. DAWN/DEFUSE-3 changed stroke treatment windows using this concept.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ischaemic-penumbra',
          tags: ['stroke', 'mri', 'perfusion', 'thrombectomy'],
        },
      },
      {
        id: 'neuro-stroke-005',
        front: {
          question: 'A 58-year-old presents with sudden severe headache. NCCT shows hyperdensity in the basal cisterns. What is the diagnosis and next step?',
        },
        back: {
          answer: 'Subarachnoid hemorrhage (SAH). Next step: urgent CT angiography to identify an aneurysm. LP if CT negative and clinical suspicion high (xanthochromia).',
          explanation: 'SAH appears as hyperdense blood in the subarachnoid space, most commonly in the basal cisterns (aneurysmal), sulci, or Sylvian fissures. CT sensitivity for SAH is >95% within 6 hours, decreasing over time. The most common cause is rupture of a berry aneurysm. The Hunt-Hess and Fisher scales grade clinical severity and predict vasospasm risk.',
          keyFact: 'Fisher scale predicts vasospasm risk: Grade 3 (thick clot in cisterns) = highest risk of vasospasm at 4–14 days. "Thunderclap headache" = worst headache of life = SAH until proven otherwise. NCCT sensitivity ~98% within 6 hrs.',
          differentials: [
            { dx: 'Ruptured saccular (berry) aneurysm (most common, ~80%)' },
            { dx: 'Perimesencephalic non-aneurysmal SAH (benign)' },
            { dx: 'AVM rupture' },
            { dx: 'Traumatic SAH' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/subarachnoid-haemorrhage',
          tags: ['stroke', 'hemorrhage', 'sah', 'ct', 'aneurysm'],
        },
      },
      {
        id: 'neuro-stroke-006',
        front: {
          question: 'What are the MRI features of hypertensive intracerebral hemorrhage, and what are the typical locations?',
        },
        back: {
          answer: 'Hypertensive ICH is hyperdense on NCCT (~60-80 HU). Most common locations: putamen (most common, ~35%), thalamus (25%), pons (10%), cerebellum (10%), lobar cortex (15%). Typically well-defined, round/oval.',
          explanation: 'Hypertensive hemorrhages occur in the territory of penetrating arteries (lenticulostriate, thalamoperforating) affected by lipohyalinosis. The hematoma evolution on MRI follows a predictable signal pattern based on hemoglobin breakdown products. A spot sign on CTA (active extravasation) predicts hematoma expansion.',
          keyFact: 'Hematoma MRI stages: Hyperacute (oxyhemoglobin: T1 iso, T2 bright) → Acute (deoxyhemoglobin: T1 iso, T2 dark) → Early subacute (intracellular methemoglobin: T1 bright, T2 dark) → Late subacute (extracellular methemoglobin: T1 bright, T2 bright) → Chronic (hemosiderin: T1 dark, T2 dark).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/intracerebral-haemorrhage',
          tags: ['stroke', 'hemorrhage', 'hypertension', 'ct', 'mri'],
        },
      },
      {
        id: 'neuro-stroke-007',
        front: {
          question: 'What is cerebral amyloid angiopathy (CAA), what is its classic imaging pattern on SWI, and what are associated findings?',
        },
        back: {
          answer: 'CAA: multiple lobar (cortical/subcortical) microbleeds on SWI/T2*. Classic distribution: posterior > frontal, sparing basal ganglia and brainstem. Associated with: lobar ICH, superficial siderosis, cortical convexity SAH.',
          explanation: 'CAA is caused by amyloid deposition in cortical and leptomeningeal vessel walls, leading to vessel fragility, microbleeds, and lobar hemorrhage. It predominantly affects elderly patients and is a major cause of lobar ICH. The Boston criteria use MRI SWI findings for diagnosis. CAA is associated with Alzheimer disease and is exacerbated by anticoagulation.',
          keyFact: 'CAA = lobar microbleeds on SWI (cortical/subcortical). Hypertensive microbleeds = deep (basal ganglia, thalamus, brainstem). Lobar ICH in elderly with no hypertension = think CAA. CAA-ri = inflammatory variant (leukoencephalopathy responding to steroids).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebral-amyloid-angiopathy',
          tags: ['stroke', 'hemorrhage', 'swi', 'amyloid', 'elderly'],
        },
      },
      {
        id: 'neuro-stroke-008',
        front: {
          question: 'What is cerebral venous thrombosis (CVT), what are its imaging features, and what is the most reliable diagnostic sign?',
        },
        back: {
          answer: 'CVT imaging: NCCT = hyperdense sinus/cortical vein (not always present). MRI = T1/T2 hyperintense thrombus in sinus. Most reliable = filling defect on contrast MRV or CTV ("empty delta sign" on CT).',
          explanation: 'CVT is associated with oral contraceptives, pregnancy, dehydration, thrombophilia, and infection. It causes venous infarcts (hemorrhagic, bilateral, non-arterial territory distribution). The SSS and transverse sinuses are most commonly involved. Treatment is anticoagulation even in the presence of hemorrhage. The "empty delta sign" on contrast CT shows peripheral sinus enhancement with central filling defect.',
          keyFact: '"Empty delta sign" = contrast-enhanced CT showing peripheral enhancement of SSS with central hypodense clot. Most reliable MRI sign = absent flow on contrast MRV. Treat with anticoagulation even if hemorrhage present.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebral-venous-thrombosis',
          tags: ['stroke', 'venous', 'thrombosis', 'mri', 'ct'],
        },
      },
      {
        id: 'neuro-stroke-009',
        front: {
          question: 'A 34-year-old woman on OCPs presents with right arm and face weakness. MRI shows a cortical infarct. What should be considered and what imaging is next?',
        },
        back: {
          answer: 'Young stroke workup: CVT (venous infarct), arterial dissection, paradoxical embolism (PFO), hypercoagulable state. Next imaging: MRV for venous thrombosis, MRA/CTA for dissection, echocardiogram.',
          explanation: 'Young stroke has a broad differential. Cortical infarcts in a venous territory (bilateral, parasagittal, near dural sinuses) suggest CVT. Cervical artery dissection (ICA, VA) presents with neck pain + stroke or TIA. PFO allows paradoxical embolism through a right-to-left shunt. CADASIL causes early-onset lacunar strokes with characteristic temporal pole WM changes.',
          keyFact: 'Young stroke mnemonic TOAST: Large artery, Other (PFO, dissection, hypercoagulable), Atherosclerotic, Small vessel, Thromboembolism. OCPs + CVT: SSS thrombosis with bilateral parasagittal hemorrhagic infarcts.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ischaemic-stroke',
          tags: ['stroke', 'young', 'workup', 'mri'],
        },
      },
      {
        id: 'neuro-stroke-010',
        front: {
          question: 'What is PRES (posterior reversible encephalopathy syndrome), what are its causes, and what is the classic imaging appearance?',
        },
        back: {
          answer: 'PRES: bilateral predominantly posterior (occipital/parietal) white matter T2/FLAIR hyperintensity representing vasogenic edema. Causes: hypertensive crisis, eclampsia, immunosuppressants (cyclosporine, tacrolimus), renal failure.',
          explanation: 'PRES results from failure of cerebrovascular autoregulation leading to vasogenic edema, predominantly in the posterior circulation (less sympathetic innervation). It is usually reversible with blood pressure control. Lesions are FLAIR/T2 hyperintense with increased ADC (vasogenic edema). Atypical locations (frontal, temporal, brainstem) occur in ~30% and can be confusing.',
          keyFact: 'PRES: "posterior" vasogenic edema (increased ADC) on FLAIR. Key causes: pre-eclampsia/eclampsia, hypertensive crisis, cyclosporine/tacrolimus. Despite the name, NOT always posterior and NOT always reversible (infarction can occur if untreated).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-reversible-encephalopathy-syndrome-pres',
          tags: ['stroke', 'pres', 'mri', 'hypertension', 'vasogenic-edema'],
        },
      },
      {
        id: 'neuro-stroke-011',
        front: {
          question: 'What is the Spetzler-Martin grading system for AVMs, and how does it affect management?',
        },
        back: {
          answer: 'Spetzler-Martin grade = Size (1-3) + Eloquence (0 or 1) + Venous drainage (0 or 1). Grade 1-2: surgery low risk. Grade 3: intermediate. Grade 4-5: surgery high risk, consider radiosurgery or endovascular.',
          explanation: 'Size: <3 cm=1, 3-6 cm=2, >6 cm=3. Eloquent location (speech, motor, visual, thalamus, brainstem, etc.)=1. Deep venous drainage=1. Maximum grade 5. Grade I-II AVMs have <5% surgical morbidity; Grade III: 5-15%; Grade IV-V: >15%. AVMs present most commonly with hemorrhage (50%), seizure (25%), or focal deficits.',
          keyFact: 'Spetzler-Martin = Size + Eloquence + Venous drainage. "T2-bag of worms" = AVM nidus. Annual hemorrhage risk ~2-4%/year, higher in deep, small, or deep-draining AVMs. DSA is gold standard for characterization.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spetzler-martin-grading-system-for-arteriovenous-malformations',
          tags: ['stroke', 'avm', 'vascular', 'scoring', 'grading'],
        },
      },
      {
        id: 'neuro-stroke-012',
        front: {
          question: 'What is the classic MRI appearance of a cavernous malformation (cavernoma)?',
        },
        back: {
          answer: '"Popcorn" heterogeneous T1/T2 signal mass with a complete dark hemosiderin rim on T2-weighted images. Angiographically occult. SWI shows prominent blooming.',
          explanation: 'Cavernous malformations are low-flow vascular malformations containing multiple blood products at different stages of evolution. The heterogeneous "popcorn" appearance results from repeated microhemorrhages. The complete T2-dark rim is hemosiderin in surrounding brain. They may be associated with a developmental venous anomaly (DVA) which should be preserved at surgery.',
          keyFact: 'Cavernoma = popcorn T1/T2 + complete dark rim on T2 (hemosiderin). Angiographically occult (not seen on DSA). Multiple cavernomas → check for familial form (CCM1/2/3 mutations) or prior radiation. Associated DVA must be preserved at surgery.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebral-cavernous-malformation',
          tags: ['stroke', 'vascular', 'mri', 'cavernoma', 'hemorrhage'],
        },
      },
      {
        id: 'neuro-stroke-013',
        front: {
          question: 'What is the "artery of Percheron" and what is its classic imaging appearance on MRI when occluded?',
        },
        back: {
          answer: 'Artery of Percheron: a single trunk supplying both paramedian thalami (and sometimes rostral midbrain). Occlusion causes bilateral paramedian thalamic infarcts ± midbrain infarct — DWI bright bilaterally in medial thalami.',
          explanation: 'This anatomic variant (present in ~30% of people) means a single perforating artery supplies both thalami. Its occlusion mimics metabolic/toxic encephalopathy clinically (confusion, hypersomnolence, memory impairment). The "V" or "butterfly" pattern of bilateral paramedian thalamic DWI restriction is pathognomonic on MRI.',
          keyFact: '"V-sign" or butterfly bilateral paramedian thalamic infarcts on DWI = artery of Percheron occlusion. Clinical: sudden coma/confusion without motor deficits. Top of basilar syndrome differs by including midbrain and occipital involvement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/artery-of-percheron',
          tags: ['stroke', 'thalamus', 'dwi', 'vascular-anatomy'],
        },
      },
      {
        id: 'neuro-stroke-014',
        front: {
          question: 'What is superficial siderosis and what are its MRI features and clinical presentation?',
        },
        back: {
          answer: 'Superficial siderosis: hemosiderin deposition on leptomeningeal surfaces from chronic subarachnoid hemorrhage. T2/T2*-dark rim coating brain surface, brainstem, and cranial nerves. Clinical triad: sensorineural hearing loss + cerebellar ataxia + pyramidal signs.',
          explanation: 'The hemosiderin rim is best seen on T2*-weighted gradient echo or SWI sequences as a characteristic dark coating of the brain, brainstem, and cerebellum. CN VIII is particularly vulnerable (long intradural course). A causative lesion (dural tear, AVM, vascular malformation) is found in <50% of cases. MRI is far more sensitive than CT for this diagnosis.',
          keyFact: 'Superficial siderosis triad: hearing loss + ataxia + pyramidal signs. T2* dark rim = pathognomonic on MRI (coating brain surface). Cause = chronic SAH from any source. CT may show subtle hyperdensity around brainstem.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/superficial-siderosis',
          tags: ['stroke', 'hemorrhage', 'mri', 'swi', 'siderosis'],
        },
      },
      {
        id: 'neuro-stroke-015',
        front: {
          question: 'What are the MRI features of hypertrophic olivary degeneration (HOD) and what is its pathophysiology?',
        },
        back: {
          answer: 'HOD: T2 hyperintensity and hypertrophy of the inferior olivary nucleus (ION) in the medulla. Develops secondary to lesion in the Guillain-Mollaret triangle (dentate nucleus → contralateral red nucleus → ipsilateral ION).',
          explanation: 'HOD is a unique trans-synaptic degeneration where the affected structure hypertrophies (paradoxically). The causative lesion (hemorrhage, infarct, surgery, demyelination) is in the brainstem along the dentato-rubro-olivary pathway. MRI evolution: T2 hyperintensity appears within 4 weeks; hypertrophy at ~6 months; resolves after ~4 years. No enhancement.',
          keyFact: 'HOD timeline: T2 bright within weeks → ION hypertrophy at ~6 months → resolves by ~4 years. Clinical: palatal myoclonus (rhythmic soft palate movement). Look for causative brainstem lesion (hemorrhage/infarct) on the same MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hypertrophic-olivary-degeneration',
          tags: ['stroke', 'brainstem', 'mri', 'degeneration'],
        },
      },
      {
        id: 'neuro-stroke-016',
        front: {
          question: 'What is intracranial hypotension (spontaneous), and what are its classic MRI findings?',
        },
        back: {
          answer: 'Spontaneous intracranial hypotension (SIH): orthostatic headache (worse standing, better lying). MRI: diffuse pachymeningeal (dural) enhancement, subdural collections, sagging brain (effacement of suprasellar cisterns, tonsillar herniation), enlarged pituitary.',
          explanation: 'SIH results from CSF leak through a dural tear, usually cervicothoracic. Monroe-Kellie doctrine: decreased CSF volume → venous engorgement and dural hyperemia → pachymeningeal enhancement. "Sagging brain" reduces the mammillary body-pons distance. Contrast MRI is the key diagnostic tool. Treatment: epidural blood patch.',
          keyFact: 'SIH mnemonic "SEEPS": Subdural collections, Enhancement (pachymeningeal), Engorgement of venous sinuses, Pituitary enlargement, Sagging brain (decreased mammillary body-pons distance). Orthostatic headache = SIH until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spontaneous-intracranial-hypotension',
          tags: ['stroke', 'csf', 'mri', 'dura', 'headache'],
        },
      },
      {
        id: 'neuro-stroke-017',
        front: {
          question: 'What is a developmental venous anomaly (DVA), and how does it appear on MRI?',
        },
        back: {
          answer: 'DVA: a "caput medusae" of medullary veins converging into a large transcortical or transependymal draining vein. T1+C MRI: linear "umbrellalike" or "caput medusae" enhancement. Usually asymptomatic and benign.',
          explanation: 'DVAs are the most common vascular malformation (~2.5% of population). They represent anomalous venous drainage and are considered variants of normal venous development (not true malformations). They are almost always incidental and should NOT be resected (they provide venous drainage for normal brain). They are frequently associated with adjacent cavernomas.',
          keyFact: 'DVA = most common intracranial vascular malformation. Caput medusae appearance on post-contrast T1. Benign — do NOT resect. Associated cavernoma is the cause of symptoms (seizure/hemorrhage), not the DVA itself.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/developmental-venous-anomaly',
          tags: ['stroke', 'vascular', 'mri', 'dva'],
        },
      },
      {
        id: 'neuro-stroke-018',
        front: {
          question: 'What are the imaging findings in Wallenberg (lateral medullary) syndrome?',
        },
        back: {
          answer: 'Lateral medullary infarct on DWI: wedge-shaped DWI-bright area in the posterolateral medulla. Usually from PICA or vertebral artery occlusion.',
          explanation: 'Wallenberg syndrome: ipsilateral facial numbness (CN V), Horner syndrome (descending sympathetics), dysphagia/hoarseness (CN IX/X), limb ataxia (cerebellum/inferior cerebellar peduncle); contralateral body pain and temperature loss (spinothalamic tract). Motor power and reflexes are preserved. PICA is the most common cause; vertebral artery dissection is common in younger patients.',
          keyFact: 'Wallenberg = lateral medullary infarct = PICA territory. Crossed sensory syndrome: ipsilateral FACE + contralateral BODY pain/temp loss. Dysphagia + Horner + ataxia + crossed sensory = classic Wallenberg.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lateral-medullary-syndrome',
          tags: ['stroke', 'brainstem', 'dwi', 'medulla', 'pica'],
        },
      },
      {
        id: 'neuro-stroke-019',
        front: {
          question: 'What is the imaging approach to non-contrast CT for acute hemorrhagic stroke, and how do you distinguish hemorrhagic transformation from primary ICH?',
        },
        back: {
          answer: 'Primary ICH: well-defined, round/oval hyperdensity, often deep (basal ganglia). Hemorrhagic transformation (HT): patchy, irregular, cortical or involving a pre-existing infarct zone. HT types: HI1/HI2 (petechiae), PH1 (≤30% infarct volume), PH2 (>30% of infarct, mass effect).',
          explanation: 'The ECASS classification divides HT into hemorrhagic infarction (HI1, HI2) and parenchymal hematoma (PH1, PH2). PH2 (>30% of infarct volume with significant mass effect) is associated with poor outcome and is more likely after thrombolysis or thrombectomy. HI types don\'t worsen outcomes. Distinguishing HT from primary ICH requires knowing the clinical context and pre-existing infarct.',
          keyFact: 'PH2 hemorrhagic transformation = >30% of infarct volume with mass effect = significantly worse outcome post-thrombolysis. HI1/HI2 = petechial hemorrhage within infarct = does not worsen outcome. Timing: HT most common at 2–7 days.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/haemorrhagic-transformation',
          tags: ['stroke', 'hemorrhage', 'ct', 'thrombolysis'],
        },
      },
      {
        id: 'neuro-stroke-020',
        front: {
          question: 'What are the imaging features of nonketotic hyperglycemia-induced hemichorea-hemiballismus?',
        },
        back: {
          answer: 'T1 hyperintensity (and CT hyperdensity) in the contralateral striatum (putamen > caudate), without mass effect or enhancement. Symptoms: sudden involuntary movements of one hemibody in an elderly diabetic.',
          explanation: 'This condition occurs in poorly controlled hyperglycemia (usually non-ketotic). The basal ganglia signal change is contralateral to the affected limbs. T2 signal can be variable (hypo- or hyperintense). The exact mechanism is debated (petechial hemorrhage vs. metabolic astrocyte dysfunction). Glucose control usually reverses both symptoms and imaging findings within weeks to months.',
          keyFact: 'Elderly diabetic + hemichorea-hemiballismus + T1-hyperintense putamen (contralateral to movements) = nonketotic hyperglycemia. No mass effect, no enhancement. Glucose control = treatment. Resolves in weeks to months.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/non-ketotic-hyperglycaemia',
          tags: ['stroke', 'basal-ganglia', 'mri', 'metabolic', 'movement-disorders'],
        },
      },
    ],
  },
  {
    id: 'neuro-tumors',
    label: 'Brain Tumors',
    cards: [
      {
        id: 'neuro-tumors-001',
        front: {
          question: 'A 55-year-old presents with seizures. MRI shows a ring-enhancing mass with central necrosis and surrounding edema in the right temporal lobe. What is the most likely diagnosis?',
        },
        back: {
          answer: 'Glioblastoma (GBM, WHO Grade 4)',
          explanation: 'GBM is the most common and most malignant primary brain tumor in adults (peak 55–65 years). Classic MRI: heterogeneous ring-enhancing mass with central necrosis, surrounding vasogenic edema, and mass effect. It often crosses the corpus callosum ("butterfly glioma"). Median survival remains ~15 months with treatment.',
          keyFact: 'GBM ring-enhancing mass: thicker, more irregular ring than abscess. High rCBV on perfusion MRI (high tumor vascularity). Butterfly pattern across corpus callosum is pathognomonic for GBM. MRI spectroscopy: elevated Cho/NAA ratio.',
          differentials: [
            { dx: 'Glioblastoma (most likely in elderly)' },
            { dx: 'Brain metastasis (usually multiple; single metastasis mimics GBM)' },
            { dx: 'Brain abscess (central DWI bright, thin smooth ring)' },
            { dx: 'Lymphoma (usually homogeneous enhancement; periventricular)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/glioblastoma',
          tags: ['tumors', 'mri', 'glioma', 'glioblastoma', 'adult'],
        },
      },
      {
        id: 'neuro-tumors-002',
        front: {
          question: 'What imaging features distinguish glioblastoma from a solitary brain metastasis?',
        },
        back: {
          answer: 'GBM: infiltrating margins (T2/FLAIR signal extends beyond enhancing tumor), corpus callosum crossing, irregular thick ring. Metastasis: well-defined margins, "clean" core, minimal T2 beyond enhancement, often at gray-white junction.',
          explanation: 'Single metastases can be indistinguishable from GBM on conventional MRI. Advanced techniques help: MR spectroscopy (metastasis may show lipid/lactate peaks), perfusion (GBM has higher rCBV), and the relative absence of tumor infiltration on DWI may favor metastasis. Clinical context (known primary cancer) is crucial.',
          keyFact: 'GBM clues: corpus callosum crossing, infiltrative margins, single mass in white matter. Metastasis clues: at gray-white junction, well-defined, multiple, known primary. Perfusion: GBM rCBV high; lymphoma rCBV low-intermediate.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/brain-metastases',
          tags: ['tumors', 'mri', 'glioblastoma', 'metastasis', 'differentials'],
        },
      },
      {
        id: 'neuro-tumors-003',
        front: {
          question: 'What are the MRI features of brain metastases, and which primary tumors most commonly metastasize to the brain?',
        },
        back: {
          answer: 'Brain mets: multiple ring-enhancing or nodular lesions at gray-white junction, with surrounding edema disproportionate to lesion size. Most common primaries: lung (most common), breast, melanoma, renal cell, colon.',
          explanation: 'Metastases preferentially lodge at the gray-white junction due to vessel narrowing. They tend to have disproportionately large surrounding edema. Melanoma mets are often T1 hyperintense (melanin or blood). RCC mets are highly vascular. Small mets may only be seen on post-contrast MRI (contrast improves sensitivity vs. CT ~40%).',
          keyFact: 'Gray-white junction location = metastasis (watershed zone where tumor emboli lodge). "Multiple ring-enhancing lesions" in adults = metastases until proven otherwise. Melanoma mets: T1 bright (melanin) + bleed easily. Lung cancer: single met most common.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/brain-metastases',
          tags: ['tumors', 'mri', 'metastasis', 'adult'],
        },
      },
      {
        id: 'neuro-tumors-004',
        front: {
          question: 'What are the MRI features of primary CNS lymphoma (PCNSL), and what clinical context should raise suspicion?',
        },
        back: {
          answer: 'PCNSL: homogeneous (solid) avidly enhancing periventricular mass. DWI restricted. Low rCBV on perfusion (paradoxically). T2 iso-hypointense (hypercellular). Immunocompromised: may be necrotic, ring-enhancing.',
          explanation: 'PCNSL is a diffuse large B-cell lymphoma arising in the CNS. In immunocompetent patients: usually homogeneously enhancing, periventricular, often contacts ependyma or corpus callosum. In HIV/AIDS: often EBV-driven, ring-enhancing, indistinguishable from toxoplasmosis by imaging alone (requires Thallium SPECT or biopsy). Responds dramatically to corticosteroids (biopsy must be done BEFORE steroids).',
          keyFact: 'PCNSL = periventricular, homogeneous enhancement, DWI restricted, LOW rCBV (paradox). "Vanishing tumor" with steroids = PCNSL. HIV + ring-enhancing mass: lymphoma (EBV+, Thallium SPECT hot) vs. toxoplasmosis (Thallium SPECT cold).',
          differentials: [
            { dx: 'PCNSL (periventricular, homogeneous, DWI restricted)' },
            { dx: 'Glioblastoma (ring-enhancing, heterogeneous, high rCBV)' },
            { dx: 'Toxoplasmosis (HIV, ring-enhancing, responds to empiric therapy)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/primary-cns-lymphoma',
          tags: ['tumors', 'mri', 'lymphoma', 'immunocompromised'],
        },
      },
      {
        id: 'neuro-tumors-005',
        front: {
          question: 'A 35-year-old with seizures has a WHO grade 2 glioma. What IDH mutation status means, and how does it affect imaging and prognosis?',
        },
        back: {
          answer: 'IDH-mutant gliomas: better prognosis, younger patients, more commonly frontal lobe, T2/FLAIR hyperintense without enhancement. IDH-wild type (GBM-like behavior): worse prognosis, higher grade, more enhancement, midline involvement.',
          explanation: 'The 2021 WHO Classification of CNS Tumors is based on molecular markers. IDH mutation is the key prognostic factor: IDH-mutant astrocytoma (grades 2-4) has better prognosis than IDH-wild type glioblastoma. IDH-mutant gliomas often appear as non-enhancing, T2-hyperintense cortical/subcortical masses (particularly frontal). 2-HG MR spectroscopy can non-invasively detect IDH mutation.',
          keyFact: 'IDH-mutant = better prognosis, frontal, younger, often non-enhancing. IDH-wild type at any grade = GBM biology = poor prognosis. 1p/19q codeletion + IDH mutation = oligodendroglioma (most favorable grade 2-3 glioma). MGMT methylation = better response to temozolomide.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/diffuse-glioma',
          tags: ['tumors', 'mri', 'glioma', 'molecular', 'idh'],
        },
      },
      {
        id: 'neuro-tumors-006',
        front: {
          question: 'What are the classic imaging features of a meningioma, and what imaging features suggest malignancy?',
        },
        back: {
          answer: 'Meningioma: extra-axial, broad dural base, homogeneous enhancement, "dural tail" sign, buckling of adjacent cortex, CSF/vascular cleft. T1 iso-, T2 iso-hyperintense. Calcification common on CT.',
          explanation: 'Meningiomas are the most common extra-axial intracranial tumor (WHO grade 1 in most). They arise from arachnoid cap cells. The "dural tail" (linear dural enhancement) is characteristic but not pathognomonic (also seen in metastases, lymphoma). Benign features: homogeneous, well-defined, calcified. Atypical (grade 2)/anaplastic (grade 3): brain invasion, irregular margins, heterogeneous, necrosis, high rCBV.',
          keyFact: 'Meningioma = extra-axial + dural tail + homogeneous enhancement. "Dural tail" is in 72% of meningiomas but also in mets/lymphoma. Hyperostosis of adjacent bone = slow-growing meningioma. Brain invasion = atypical (grade 2). Psammomatous calcification on CT = classic.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meningioma',
          tags: ['tumors', 'mri', 'extra-axial', 'meningioma'],
        },
      },
      {
        id: 'neuro-tumors-007',
        front: {
          question: 'What are the imaging features of a vestibular schwannoma, and how is it distinguished from meningioma in the CPA?',
        },
        back: {
          answer: 'Vestibular schwannoma: centered at IAC (ice cream cone shape), avid enhancement. Meningioma: broad dural base, centered on posterior petrous, calcification, no IAC involvement, dural tail.',
          explanation: 'Schwannomas arise from Schwann cells of CN VIII and typically enlarge the IAC (creating the "ice cream cone" or "trumpet" shape on coronal MRI). They are T1 iso, T2 heterogeneous, avidly enhancing. Bilateral vestibular schwannomas = NF2. HINTS: hear "sensorineural hearing loss + tinnitus + vertigo" → think CPA mass → order MRI with gadolinium.',
          keyFact: '"Ice cream cone" extending from IAC = schwannoma. Dural based centered on posterior petrous WITHOUT IAC involvement = meningioma. Bilateral = NF2. Key imaging: CISS/FIESTA sequence (steady-state free precession) best shows small schwannomas within IAC.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/vestibular-schwannoma',
          tags: ['tumors', 'mri', 'cpa', 'schwannoma', 'iac'],
        },
      },
      {
        id: 'neuro-tumors-008',
        front: {
          question: 'What is the classic MRI appearance of a craniopharyngioma and how do the two subtypes differ?',
        },
        back: {
          answer: 'Adamantinomatous (children): suprasellar, cystic+solid, calcifications (80%), heterogeneous T1 signal (varying protein/cholesterol), peripheral enhancement. Squamous-papillary (adults): predominantly solid, rare calcification, T1 hypointense cysts.',
          explanation: 'Craniopharyngiomas arise from Rathke\'s pouch epithelial remnants. They are the most common non-glial intracranial tumor in children. Classic presentation: headache + bitemporal hemianopia + growth failure (GH deficiency). CT detects calcifications better; MRI delineates suprasellar extension. The cysts have variable T1 signal ("motor oil" content).',
          keyFact: 'Craniopharyngioma "3 Cs": Calcification + Cysts + Contrast enhancement. Suprasellar location + calcification in a child = craniopharyngioma until proven otherwise. Bimodal age: 5-15 yrs and >50 yrs.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/craniopharyngioma',
          tags: ['tumors', 'mri', 'suprasellar', 'pediatric', 'craniopharyngioma'],
        },
      },
      {
        id: 'neuro-tumors-009',
        front: {
          question: 'A 10-year-old child has a midline cerebellar mass that is hyperdense on CT and shows restricted diffusion on MRI. What is the most likely diagnosis?',
        },
        back: {
          answer: 'Medulloblastoma (WHO Grade 4)',
          explanation: 'Medulloblastoma is the most common malignant posterior fossa tumor in children, typically arising from the cerebellar vermis. It is hyperdense on CT (highly cellular), enhances avidly, and restricts diffusion (DWI bright, ADC dark) due to densely packed small blue cells. It can disseminate via CSF (drop metastases). Requires full spine MRI to assess for seeding.',
          keyFact: 'Medulloblastoma mnemonic: "Midline, Malignant, Mobile (drops metastases), Myelinated-like diffusion (restricted)." Pilocytic astrocytoma in contrast: cystic with enhancing mural nodule, high ADC (opposite of medulloblastoma). ATRT is indistinguishable (infant clue).',
          differentials: [
            { dx: 'Medulloblastoma (midline, restricted diffusion, school age)' },
            { dx: 'Pilocytic astrocytoma (cystic + mural nodule, high ADC, cerebellar hemisphere)' },
            { dx: 'Ependymoma (floor of 4th ventricle, calcification, "toothpaste" through foramina)' },
            { dx: 'ATRT (infant, indistinguishable, INI1 mutation)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/medulloblastoma',
          tags: ['tumors', 'ct', 'mri', 'pediatric', 'posterior-fossa', 'medulloblastoma'],
        },
      },
      {
        id: 'neuro-tumors-010',
        front: {
          question: 'What are the MRI features of a pilocytic astrocytoma (PA), and how does it differ from medulloblastoma on imaging?',
        },
        back: {
          answer: 'Pilocytic astrocytoma (WHO Grade 1): cystic mass with an avidly enhancing mural nodule; high ADC (vs. medulloblastoma low ADC). Cerebellar hemisphere > vermis. Excellent prognosis with resection.',
          explanation: 'PA is the most common pediatric brain tumor overall and the most common benign posterior fossa tumor. The cyst wall usually does not enhance (distinguishing from hemangioblastoma where the cyst wall may enhance). PA has high ADC values due to low cellularity, in contrast to medulloblastoma. It may also occur supratentorially (optic pathway glioma in NF1, diencephalic glioma).',
          keyFact: 'PA = cyst + mural nodule + high ADC. Mural nodule enhances; non-enhancing cyst wall. Medulloblastoma = solid, midline, low ADC. PA mural nodule must be fully resected for cure. Optic pathway PA = strong association with NF1.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pilocytic-astrocytoma',
          tags: ['tumors', 'mri', 'pediatric', 'posterior-fossa', 'pilocytic'],
        },
      },
      {
        id: 'neuro-tumors-011',
        front: {
          question: 'What is the classic imaging appearance of an ependymoma, and how does it differ from medulloblastoma?',
        },
        back: {
          answer: 'Ependymoma (WHO Grade 2-3): arises from 4th ventricle floor (unlike medulloblastoma from roof/vermis), "plastic" or "toothpaste" tumor extending through foramina of Luschka/Magendie, calcifications, heterogeneous enhancement. ADC intermediate.',
          explanation: 'Fourth ventricular ependymoma is the 3rd most common pediatric posterior fossa tumor. Its origin from the floor of the 4th ventricle (not the vermis) and its tendency to squeeze through the foramina of Luschka (laterally) and Magendie (inferiorly) is characteristic. It can also present in the spinal cord (most common spinal cord intramedullary tumor in adults).',
          keyFact: '"Plastic ependymoma": squeezes through foramina of Luschka and Magendie like toothpaste. Arises from 4th ventricle FLOOR. Medulloblastoma arises from ROOF/vermis. Calcification in 50%. Spinal ependymoma = most common intramedullary tumor in adults (especially cervical).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ependymoma',
          tags: ['tumors', 'mri', 'pediatric', 'posterior-fossa', 'ependymoma'],
        },
      },
      {
        id: 'neuro-tumors-012',
        front: {
          question: 'What are the imaging features of a hemangioblastoma, and with which syndrome is it associated?',
        },
        back: {
          answer: 'Hemangioblastoma: cystic mass with intensely enhancing mural nodule; flow voids in or around nodule; high rCBV on perfusion. In young adult with multiple hemangioblastomas = von Hippel-Lindau (VHL) syndrome.',
          explanation: 'Hemangioblastomas are benign WHO grade 1 tumors that are the most common primary intraaxial posterior fossa tumor in adults. VHL is autosomal dominant (chromosome 3p mutation). VHL-associated manifestations: CNS hemangioblastomas (cerebellum, brainstem, spinal cord), retinal hemangioblastomas, clear cell RCC, pheochromocytoma, pancreatic cysts/tumors. The cyst wall of a hemangioblastoma does NOT enhance (vs. PA-like appearance).',
          keyFact: 'Hemangioblastoma = intensely enhancing mural nodule + flow voids + high CBV. VHL = multiple hemangioblastomas + RCC + pheochromocytoma + retinal hemangioblastoma. If cyst wall enhances → think other diagnosis. ADC high (hypervascular, not hypercellular).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/haemangioblastoma',
          tags: ['tumors', 'mri', 'posterior-fossa', 'vhl', 'hemangioblastoma'],
        },
      },
      {
        id: 'neuro-tumors-013',
        front: {
          question: 'What is a DNET (dysembryoplastic neuroepithelial tumor) and what are its classic imaging features?',
        },
        back: {
          answer: 'DNET (WHO Grade 1): cortically based, wedge/triangular shaped, "bubbly" multicystic T2-hyperintense mass with apex pointing toward ventricle. No enhancement, no mass effect. Long-standing drug-resistant seizures in young patient.',
          explanation: 'DNETs are benign glioneuronal tumors arising from the supratentorial cortex (temporal lobe most common). The "bubbly" appearance results from multiple small internal cysts. They can cause scalloping/remodeling of the inner skull table (slow growing). They do not enhance in ~75% (mild punctate enhancement in ~25%). Strong association with focal cortical dysplasia.',
          keyFact: 'DNET = cortical "bubbly" T2-bright mass + triangular shape apex toward ventricle + no edema + no mass effect + young patient with seizures. Scalloping of inner table on CT in 40-60% (slow growth). Classic temporal lobe location.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/dysembryoplastic-neuroepithelial-tumour',
          tags: ['tumors', 'mri', 'cortical', 'seizures', 'dnet'],
        },
      },
      {
        id: 'neuro-tumors-014',
        front: {
          question: 'What is the imaging appearance of a colloid cyst and why is it clinically important?',
        },
        back: {
          answer: 'Colloid cyst: well-defined hyperdense (CT) or T1-hyperintense (MRI) midline mass at the foramen of Monro. Can cause intermittent or acute obstructive hydrocephalus. Mortality risk from acute obstruction.',
          explanation: 'Colloid cysts arise from the tela choroidea of the 3rd ventricle and act as a ball-valve at the foramen of Monro. They are typically hyperdense on NCCT (high protein/cholesterol content). On MRI, T1 signal is variable (most commonly hyperintense). They do not enhance. Even small cysts can cause sudden death from acute hydrocephalus. Surgery or stereotactic aspiration indicated for symptomatic or large cysts.',
          keyFact: 'Colloid cyst = hyperdense NCCT at foramen of Monro = EMERGENCY if symptomatic. Characteristic "Bruns syndrome": positional postural headache (head position changes trigger hydrocephalus). T1 hyperintense on MRI due to mucoid protein content. No enhancement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/colloid-cyst',
          tags: ['tumors', 'ct', 'mri', 'ventricle', 'colloid-cyst'],
        },
      },
      {
        id: 'neuro-tumors-015',
        front: {
          question: 'What are the imaging features of an epidermoid cyst vs. an arachnoid cyst, and how does DWI distinguish them?',
        },
        back: {
          answer: 'Epidermoid: CSF-like on CT/T1/T2, heterogeneous on FLAIR ("dirty CSF"), BRIGHT on DWI (T2 shine-through + restricted diffusion). Arachnoid cyst: perfectly follows CSF on ALL sequences including FLAIR and DWI (dark DWI).',
          explanation: 'Epidermoid cysts arise from epithelial cells trapped at neural tube closure and grow by desquamation. They tend to insinuate around structures in cisterns (CPA most common). Their DWI brightness is the key differentiating feature from arachnoid cysts. FLAIR shows internal heterogeneity ("dirty" signal) in epidermoids vs. complete CSF suppression in arachnoid cysts.',
          keyFact: 'Epidermoid = CSF-like BUT bright on DWI. Arachnoid cyst = follows CSF on ALL sequences including DWI (dark). FLAIR: epidermoid = "dirty" (internal signal); arachnoid cyst = completely suppressed. Both are non-enhancing.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/epidermoid-cyst-intracranial',
          tags: ['tumors', 'mri', 'dwi', 'cpa', 'epidermoid'],
        },
      },
      {
        id: 'neuro-tumors-016',
        front: {
          question: 'What is a pituitary macroadenoma and what imaging features suggest it has invaded the cavernous sinus?',
        },
        back: {
          answer: 'Pituitary macroadenoma ≥1 cm: sellar mass with suprasellar extension (snowman/figure-8 shape), displacement of normal pituitary, dumbbell shape. Cavernous sinus invasion: encasement of ICA >25% (Knosp grade 3-4), loss of venous compartment.',
          explanation: 'The Knosp grading system (0-4) assesses cavernous sinus invasion using the medial and lateral margins of the intracavernous ICA as references. Grade 3-4 = cavernous sinus invasion (cannot be fully resected). The "waist" sign on coronal MRI is the indentation of the diaphragma sellae as the adenoma herniates through it (creating the snowman/figure-8 shape). Most common secreting: prolactinoma (medical treatment first).',
          keyFact: 'Knosp grade 3-4 = cavernous sinus invasion (ICA encasement >50%). Prolactinoma = most common pituitary adenoma; treat with dopamine agonist (cabergoline) first, not surgery. "Snowman" sign = macroadenoma herniating through diaphragma sellae.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pituitary-adenoma',
          tags: ['tumors', 'mri', 'sellar', 'pituitary', 'macroadenoma'],
        },
      },
      {
        id: 'neuro-tumors-017',
        front: {
          question: 'What is leptomeningeal carcinomatosis and what imaging is most sensitive for its detection?',
        },
        back: {
          answer: 'Leptomeningeal carcinomatosis (LMC): spread of tumor cells through CSF. Most sensitive: contrast-enhanced MRI showing linear leptomeningeal (pial) enhancement. Also: FLAIR hyperintensity in sulci, communicating hydrocephalus, cranial nerve enhancement.',
          explanation: 'LMC occurs with breast, lung, melanoma, lymphoma, and GI primaries. Post-contrast T1-weighted MRI shows linear/nodular enhancement along sulci, cisterns, cranial nerves, and spinal cord surface. FLAIR shows sulcal hyperintensity. LP cytology has low sensitivity per single tap (~50%); MRI is more sensitive for demonstrating extent. Ependymal metastases cause subependymal enhancement.',
          keyFact: 'LMC = leptomeningeal enhancement on post-contrast MRI + sulcal FLAIR signal + cranial nerve/spine involvement. Primary cancers: breast > lung > melanoma. LP cytology has ~50% sensitivity (serial LPs increase yield). Carries poor prognosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/leptomeningeal-carcinomatosis',
          tags: ['tumors', 'mri', 'meninges', 'metastasis', 'csf'],
        },
      },
      {
        id: 'neuro-tumors-018',
        front: {
          question: 'What is the imaging appearance of a hypothalamic hamartoma, and what are its classic clinical associations?',
        },
        back: {
          answer: 'Hypothalamic hamartoma: non-enhancing mass in the tuber cinereum/hypothalamus, between pituitary stalk and mammillary bodies. T1 isointense to gray matter, T2 iso-hyperintense. Classic associations: gelastic seizures (laughing) and central precocious puberty.',
          explanation: 'Hypothalamic hamartomas are congenital, non-neoplastic heterotopic gray matter nodules. They do not grow or enhance. Small pedunculated lesions cause precocious puberty; larger sessile lesions cause gelastic (laughing) seizures with drug-resistant epilepsy. Surgical or radiosurgical disconnection can be curative for the epilepsy.',
          keyFact: 'Hypothalamic hamartoma = non-enhancing, non-growing mass at tuber cinereum. Gelastic seizures (pathognomonic association) + precocious puberty. Key: it does NOT enhance — any enhancement suggests another diagnosis (astrocytoma). FLAIR iso-to-hyperintense.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hypothalamic-hamartoma',
          tags: ['tumors', 'mri', 'hypothalamus', 'pediatric', 'seizures'],
        },
      },
      {
        id: 'neuro-tumors-019',
        front: {
          question: 'What imaging features help distinguish high-grade from low-grade glioma?',
        },
        back: {
          answer: 'High-grade (WHO 3-4): contrast enhancement, central necrosis, high rCBV on perfusion, elevated Cho/NAA on spectroscopy, restricted diffusion (hypercellularity). Low-grade (WHO 2): T2/FLAIR hyperintense without enhancement, low rCBV, may have 1p/19q codeletion (oligodendroglioma).',
          explanation: 'Contrast enhancement in a glioma correlates with blood-brain barrier breakdown and indicates at least WHO grade 3 (some non-enhancing WHO grade 3 exist). Perfusion MRI (rCBV) is the most reliable non-invasive marker of glioma grade. MR spectroscopy shows elevated choline (cell membrane turnover) and decreased NAA (neuronal loss) in high-grade tumors. IDH mutation predicts better prognosis across grades.',
          keyFact: 'Enhancement = malignant transformation. rCBV >2x normal cerebral blood volume = high grade. Cho/NAA ratio >2 = high grade on MR spectroscopy. Non-enhancing infiltrative T2 mass in young adult = think IDH-mutant low-grade glioma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/grading-of-glial-tumours',
          tags: ['tumors', 'mri', 'glioma', 'grading', 'perfusion'],
        },
      },
      {
        id: 'neuro-tumors-020',
        front: {
          question: 'What are the neurocutaneous syndromes (phakomatoses) and their key brain tumor associations?',
        },
        back: {
          answer: 'NF1: optic pathway glioma (pilocytic), UBOs, plexiform neurofibromas, sphenoid wing dysplasia. NF2: bilateral vestibular schwannomas, meningiomas, ependymomas (MISME). TSC: cortical tubers, subependymal nodules, SEGA (near foramen of Monro). VHL: hemangioblastomas. Sturge-Weber: cortical angioma + calcifications.',
          explanation: 'NF1 (chromosome 17, neurofibromin): most common phakomatosis. UBOs (unidentified bright objects) are T2-hyperintense foci in basal ganglia/thalamus/cerebellum, not true tumors. NF2 (chromosome 22, merlin): bilateral acoustic neuromas are diagnostic. TSC (TSC1/TSC2): tubers are epileptogenic; SEGAs need monitoring for growth near foramen of Monro.',
          keyFact: 'NF2 = bilateral vestibular schwannomas = diagnostic (MISME: Multiple Inherited Schwannomas, Meningiomas, Ependymomas). NF1 = optic glioma + UBOs + Lisch nodules (iris hamartomas). TSC SEGA: watch for growth at foramen of Monro → obstructive hydrocephalus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/phakomatoses',
          tags: ['tumors', 'syndromes', 'nf1', 'nf2', 'tsc', 'vhl'],
        },
      },
    ],
  },
  {
    id: 'neuro-trauma',
    label: 'Head Trauma',
    cards: [
      {
        id: 'neuro-trauma-001',
        front: {
          question: 'A patient presents after a car accident with a brief loss of consciousness. CT shows a biconvex hyperdense collection overlying the right temporal lobe. What is the diagnosis and typical mechanism?',
        },
        back: {
          answer: 'Epidural hematoma (EDH). Mechanism: temporal bone fracture → middle meningeal artery laceration (arterial). Classic "lucid interval" followed by rapid deterioration.',
          explanation: 'EDH is typically caused by arterial bleeding (middle meningeal artery) from a temporal bone fracture. The hematoma is confined by tight dural attachments at suture lines, creating a biconvex shape. It does NOT cross sutures. Treatment: emergent surgical evacuation if >30 mL volume, >15 mm thickness, or symptomatic.',
          keyFact: 'EDH = biconvex, ARTERIAL, does NOT cross sutures, DOES cross the midline. "Lucid interval" = classic but present in only ~50%. Temporal fracture + EDH = middle meningeal artery. Venous EDH (from dural sinus injury) can cross sutures.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/extradural-haematoma',
          tags: ['trauma', 'ct', 'hemorrhage', 'edh'],
        },
      },
      {
        id: 'neuro-trauma-002',
        front: {
          question: 'What is the CT appearance of acute, subacute, and chronic subdural hematoma, and what is the typical mechanism?',
        },
        back: {
          answer: 'SDH CT signal: Acute (<7 days): hyperdense (>60 HU). Subacute (1-3 wks): isodense (can be missed!). Chronic (>3 wks): hypodense. Crescent-shaped, crosses sutures, does not cross midline falx. Mechanism: bridging vein rupture (venous, lower velocity).',
          explanation: 'SDH results from tearing of bridging veins between the cortex and dural sinuses. Common in elderly (cerebral atrophy stretches bridging veins), alcoholics, anticoagulated patients. Isodense subacute SDH can be missed — look for medial displacement of sulci, effaced subarachnoid space, and asymmetric gyri. Bilateral isodense SDHs may normalize the brain appearance.',
          keyFact: 'SDH CT stages: >60 HU = acute. Isodense = subacute (1-3 weeks — easy to miss!). Hypodense = chronic. Crescent = SDH. Biconvex = EDH. Chronic SDH: mixed density = acute-on-chronic (rebleeding into chronic). Isodense SDH clue: inward bowing of white matter sulci.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/subdural-haematoma',
          tags: ['trauma', 'ct', 'hemorrhage', 'sdh'],
        },
      },
      {
        id: 'neuro-trauma-003',
        front: {
          question: 'What is diffuse axonal injury (DAI), what are its MRI features, and why is CT often negative?',
        },
        back: {
          answer: 'DAI: axonal shearing from rotational acceleration-deceleration forces. CT often negative (microscopic tears, no macroscopic hemorrhage). MRI SWI/T2*: petechial hemorrhages at gray-white junction, corpus callosum, brainstem. DWI: restricted diffusion in white matter tracks.',
          explanation: 'DAI grade correlates with prognosis: Grade 1 (gray-white junction), Grade 2 (corpus callosum), Grade 3 (brainstem/dorsal tegmentum) — most severe. Non-hemorrhagic DAI is only visible on DWI (restricted diffusion in white matter) and FLAIR. SWI/T2* is most sensitive for hemorrhagic DAI microbleeds. DAI is the most common cause of prolonged unconsciousness after TBI with normal CT.',
          keyFact: 'DAI grades: 1=gray-white junction, 2=corpus callosum, 3=brainstem. CT often negative. Use SWI/T2* for hemorrhagic axonal injury (most sensitive). DWI detects non-hemorrhagic DAI. Brainstem involvement (Grade 3) = worst prognosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/diffuse-axonal-injury',
          tags: ['trauma', 'mri', 'swi', 'dwi', 'dai'],
        },
      },
      {
        id: 'neuro-trauma-004',
        front: {
          question: 'What is a growing skull fracture (leptomeningeal cyst) and what are its imaging features?',
        },
        back: {
          answer: 'Leptomeningeal cyst: extra-axial CSF-intensity mass herniating through a skull fracture defect. Follows CSF on all sequences (T1 dark, T2 bright, DWI dark). Adjacent gliosis (FLAIR hyperintense) in underlying brain. History of prior head trauma in childhood.',
          explanation: 'Growing skull fractures occur after cranial fractures in infants (<3 years) when a dural tear allows arachnoid herniation through the fracture line. CSF pulsations prevent fracture healing and cause progressive bony erosion. The underlying brain shows gliosis. The lesion may enlarge over years and cause seizures, neurological deficits, or cosmetic deformity. Treatment: dural repair and cranioplasty.',
          keyFact: 'Growing skull fracture = leptomeningeal cyst. Child + prior skull fracture + progressive bony defect + CSF-like extra-axial mass = this diagnosis. DWI dark (follows CSF) distinguishes from epidermoid (DWI bright). FLAIR shows adjacent brain gliosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/growing-skull-fracture',
          tags: ['trauma', 'mri', 'pediatric', 'fracture', 'csf'],
        },
      },
      {
        id: 'neuro-trauma-005',
        front: {
          question: 'What CT findings indicate transtentorial (uncal) herniation, and what are the resulting cranial nerve and vascular complications?',
        },
        back: {
          answer: 'CT findings: effaced suprasellar and perimesencephalic cisterns, medial temporal lobe displacement across the tentorial incisura, midline shift, contralateral or bilateral hydrocephalus. CN III palsy (fixed dilated pupil), PCA compression (occipital infarct), Duret hemorrhages (brainstem).',
          explanation: 'Transtentorial herniation occurs when a supratentorial mass pushes the uncus of the temporal lobe over the tentorium. CN III is compressed at the posterior communicating artery, causing ipsilateral fixed dilated pupil (parasympathetic fibers on CN III periphery are compressed first). PCA compression causes occipital lobe infarcts. Duret hemorrhages are secondary brainstem hemorrhages from stretching of perforating arteries.',
          keyFact: '"Blown pupil" (fixed dilated) = ipsilateral CN III compression from uncal herniation (or posterior communicating artery aneurysm). Effaced basal cisterns on CT = herniation is imminent or occurring = neurosurgical emergency.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transtentorial-herniation',
          tags: ['trauma', 'ct', 'herniation', 'emergency'],
        },
      },
      {
        id: 'neuro-trauma-006',
        front: {
          question: 'What is the "coup-contrecoup" injury pattern in head trauma, and where do cerebral contusions most commonly occur?',
        },
        back: {
          answer: 'Coup injury: directly beneath impact site. Contrecoup: opposite to impact (more severe with moving head/stationary object). Most common sites: inferior frontal and anterior temporal lobes (bony prominences of skull base).',
          explanation: 'Cerebral contusions are cortical surface hemorrhages from direct brain-skull contact. They appear as hyperdense gyral hemorrhages on CT, often with surrounding edema. The frontal and temporal poles are most vulnerable due to the irregular contours of the anterior and middle cranial fossae. Contusions may enlarge (blossom) over 24–72 hours — follow-up CT is essential.',
          keyFact: 'Contusion = cortical hyperdensity (hemorrhage) ± surrounding edema. Most common sites: orbitofrontal and anterior temporal lobes (rough skull base surface). May BLOSSOM (enlarge) on follow-up CT 24-72 hrs — always rescan! Check CT for satellite lesions.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebral-contusion',
          tags: ['trauma', 'ct', 'contusion', 'hemorrhage'],
        },
      },
      {
        id: 'neuro-trauma-007',
        front: {
          question: 'What imaging features differentiate non-accidental trauma (shaken baby syndrome) from accidental head trauma in children?',
        },
        back: {
          answer: 'Non-accidental trauma (NAT) findings: bilateral or interhemispheric SDH, retinal hemorrhages, diffuse cerebral edema, DAI, posterior rib fractures/metaphyseal corner fractures (different ages). No plausible mechanism for injury.',
          explanation: 'Shaken baby syndrome results from violent shaking causing SDH (interhemispheric or bilateral) from bridging vein rupture, retinal hemorrhages, and DAI. Bilateral SDHs of different densities (different ages) suggest repeated trauma. Key brain findings: subdural along interhemispheric fissure, diffuse cerebral edema/injury pattern. Skeletal survey is required when NAT is suspected.',
          keyFact: 'NAT triad: SDH + retinal hemorrhages + encephalopathy. Interhemispheric SDH in infant = highly suspicious for NAT. Injuries of different ages (multiple SDH densities) = repeated abuse. Absent SDH does not exclude NAT — DAI and diffuse cerebral injury can occur.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/non-accidental-injury',
          tags: ['trauma', 'ct', 'mri', 'pediatric', 'nat'],
        },
      },
    ],
  },
  {
    id: 'neuro-infection',
    label: 'Infection & Inflammation',
    cards: [
      {
        id: 'neuro-infection-001',
        front: {
          question: 'A 10-year-old presents with fever, headache, and a seizure. MRI shows a ring-enhancing temporal lobe mass with central DWI restriction and reduced rCBV. What is the diagnosis?',
        },
        back: {
          answer: 'Pyogenic brain abscess',
          explanation: 'Brain abscesses show a smooth, thin ring of enhancement surrounding a central purulent cavity. The key distinguishing feature from necrotic tumor is bright DWI/dark ADC in the abscess center (thick pus restricts diffusion). Perfusion shows low rCBV (avascular). Sources: sinusitis, dental, hematogenous, direct extension. Common organisms: Streptococcus, Staph, anaerobes.',
          keyFact: 'Abscess vs necrotic tumor: abscess = central DWI bright/ADC dark; necrotic tumor = central DWI dark (like CSF). Also: abscess wall is THINNER medially (toward ventricle). Danger: if abscess ruptures into ventricle → pyogenic ventriculitis (high mortality).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebral-abscess',
          tags: ['infection', 'mri', 'abscess', 'ring-enhancing'],
        },
      },
      {
        id: 'neuro-infection-002',
        front: {
          question: 'What are the MRI features of herpes simplex encephalitis (HSE), and what sequence is most sensitive?',
        },
        back: {
          answer: 'HSE: T2/FLAIR hyperintensity in medial temporal lobes, insular cortex, and cingulate gyrus — bilateral but asymmetric. DWI bright in acute phase. Does NOT involve the putamen (helps differentiate from arboviral encephalitis).',
          explanation: 'HSE (HSV-1 in adults, HSV-2 in neonates) is the most common fatal sporadic encephalitis. It has a predilection for the limbic system. Treatment with acyclovir must be started immediately based on clinical suspicion — do not wait for MRI. The temporal lobe involvement may lead to Klüver-Bucy syndrome and anterograde amnesia. DWI shows restricted diffusion early (may precede FLAIR changes).',
          keyFact: 'HSE = bilateral asymmetric medial temporal + insular + cingulate FLAIR hyperintensity. SPARES basal ganglia (key DDx from flaviviral encephalitis). Start acyclovir immediately — don\'t wait for MRI/PCR. DWI restriction is earliest sign.',
          differentials: [
            { dx: 'HSV encephalitis (temporal/insular/cingulate, spares basal ganglia)' },
            { dx: 'Japanese encephalitis / West Nile (bilateral thalamic/BG involvement)' },
            { dx: 'Autoimmune encephalitis (anti-NMDAR: temporal lobe, can mimic HSE)' },
            { dx: 'Paraneoplastic limbic encephalitis (medial temporal, subacute, associated malignancy)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/herpes-simplex-encephalitis',
          tags: ['infection', 'mri', 'encephalitis', 'temporal-lobe'],
        },
      },
      {
        id: 'neuro-infection-003',
        front: {
          question: 'What are the MRI findings of cryptococcal meningitis, and what sequence shows the classic "soap bubble" lesions?',
        },
        back: {
          answer: 'Cryptococcal meningitis MRI: leptomeningeal enhancement, "soap bubble" or "gelatinous pseudocyst" T2-hyperintense lesions in the basal ganglia and perivascular spaces (Virchow-Robin spaces). Most common CNS fungal infection in HIV/AIDS.',
          explanation: 'Cryptococcus neoformans spreads to the CNS via CSF and preferentially expands the perivascular (Virchow-Robin) spaces in the basal ganglia, creating the characteristic soap bubble appearance on T2 MRI. There may be minimal meningeal enhancement (immunocompromised patients mount little inflammatory response). India ink preparation of CSF and cryptococcal antigen test are diagnostic.',
          keyFact: '"Soap bubble" or "gelatinous pseudocysts" in basal ganglia perivascular spaces = cryptococcal meningitis. In HIV with CD4 <100. No enhancement (anergic patient). Dilated VR spaces on T2 MRI. Treat with amphotericin B + flucytosine.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cryptococcal-meningitis',
          tags: ['infection', 'mri', 'fungal', 'hiv', 'meningitis'],
        },
      },
      {
        id: 'neuro-infection-004',
        front: {
          question: 'An HIV-positive patient with CD4 <200 presents with new neurological deficits. MRI shows bilateral white matter T2/FLAIR hyperintensity without enhancement or mass effect. What is the diagnosis?',
        },
        back: {
          answer: 'Progressive multifocal leukoencephalopathy (PML) — caused by JC virus reactivation in immunocompromised patients.',
          explanation: 'PML presents as demyelinating white matter lesions without enhancement or mass effect in immunocompromised patients (HIV/AIDS, natalizumab therapy, post-transplant). MRI shows asymmetric confluent T2/FLAIR white matter signal with subcortical U-fiber involvement and no mass effect. Paradoxically, immune reconstitution (starting ART) can cause PML-IRIS with new enhancement and worsening edema.',
          keyFact: 'PML = no enhancement + no mass effect + asymmetric confluent white matter T2 lesions in immunocompromised. JC virus (polyomavirus). U-fiber involvement (subcortical). Contrast this with lymphoma (periventricular + enhancing) and toxoplasmosis (ring-enhancing + mass effect). PML-IRIS: immune reconstitution → new enhancement after starting ART.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/progressive-multifocal-leukoencephalopathy',
          tags: ['infection', 'mri', 'hiv', 'pml', 'white-matter'],
        },
      },
      {
        id: 'neuro-infection-005',
        front: {
          question: 'What is the imaging appearance of neurocysticercosis (NCC), and how do the stages appear on MRI?',
        },
        back: {
          answer: 'NCC stages: Vesicular (viable cyst, no edema, no enhancement, scolex visible as eccentric hyperdense "hole with a dot"). Colloidal vesicular (cyst degenerates, ring enhancement + edema). Nodular granular (solid nodule, decreased edema). Calcified nodular (punctate calcification).',
          explanation: 'Neurocysticercosis (Taenia solium) is the most common parasitic CNS infection worldwide. The "hole with a dot" sign refers to a CSF-signal cyst containing an eccentric scolex (white matter larval head) — pathognomonic on T1/CISS sequences. Multiple lesions at various stages are common. Treatment with albendazole ± steroids (anti-parasitics may exacerbate inflammation — use steroids).',
          keyFact: '"Hole with a dot" on MRI (cyst + eccentric scolex) = neurocysticercosis (pathognomonic). Stages: live cyst (no enhancement) → dying (ring enhancement) → dead (calcification). Most common cause of new-onset seizures in endemic areas.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neurocysticercosis',
          tags: ['infection', 'mri', 'parasitic', 'cysticercosis', 'seizures'],
        },
      },
      {
        id: 'neuro-infection-006',
        front: {
          question: 'What are the imaging findings in Wernicke encephalopathy and where are the classic locations of T2 hyperintensity?',
        },
        back: {
          answer: 'Wernicke encephalopathy (thiamine deficiency): symmetric T2/FLAIR hyperintensity in mammillary bodies, medial thalami (dorsomedial nuclei), and periaqueductal gray. Mammillary body enhancement on post-contrast MRI.',
          explanation: 'Wernicke encephalopathy results from thiamine (B1) deficiency, most commonly in alcoholics, but also in malnutrition, prolonged vomiting, and bariatric surgery patients. The classic triad (ophthalmoplegia, ataxia, confusion) is present in <33% of cases. MRI is more sensitive than CT. Late finding: mammillary body atrophy = Korsakoff syndrome (irreversible). Treat immediately with IV thiamine.',
          keyFact: 'Wernicke MRI: symmetric periaqueductal gray + medial thalami + mammillary bodies T2 bright ± enhancement. Classic triad only in 33%. TREAT WITH IV THIAMINE FIRST — never give glucose before thiamine (depletes remaining stores). Mamillary body atrophy = Korsakoff (irreversible).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/wernicke-encephalopathy',
          tags: ['infection', 'mri', 'metabolic', 'wernicke', 'thiamine'],
        },
      },
      {
        id: 'neuro-infection-007',
        front: {
          question: 'What is Creutzfeldt-Jakob disease (CJD) and what are the classic MRI findings?',
        },
        back: {
          answer: 'CJD (prion disease): rapidly progressive dementia + myoclonus. MRI FLAIR and DWI: bilateral symmetric cortical ribboning + striatal (caudate, putamen) hyperintensity + thalamic involvement. DWI is most sensitive and specific (94% accuracy).',
          explanation: 'Sporadic CJD (sCJD) is the most common form (85%). Variant CJD (from BSE/mad cow) shows "pulvinar sign" — bilateral posterior thalamic T2/DWI hyperintensity more prominent than striatal. EEG shows triphasic waves. CSF 14-3-3 protein elevated. MRI DWI is the single best diagnostic tool with ~95% accuracy. In later stages, cortical atrophy develops and DWI changes disappear.',
          keyFact: 'CJD = rapidly progressive dementia + myoclonus + cortical ribboning on DWI. Variant CJD: "pulvinar sign" (posterior thalamic hyperintensity). Extensive cortical DWI restriction = essentially pathognomonic for CJD. DWI is most sensitive/specific sequence.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/creutzfeldt-jakob-disease',
          tags: ['infection', 'mri', 'dwi', 'prion', 'dementia'],
        },
      },
      {
        id: 'neuro-infection-008',
        front: {
          question: 'What is toxoplasmosis in the CNS and how is it distinguished from primary CNS lymphoma on imaging in HIV/AIDS?',
        },
        back: {
          answer: 'Toxoplasmosis: ring-enhancing lesion(s) at gray-white junction or basal ganglia, often multiple, surrounded by edema. Lymphoma: periventricular, homogeneous enhancement, DWI restricted, low rCBV. Thallium-201 SPECT: toxo = cold; lymphoma = hot.',
          explanation: 'In HIV with CD4 <200 and ring-enhancing brain lesions, empiric treatment for toxoplasmosis is started first (sulfamethoxazole/pyrimethamine). If no clinical/radiological improvement in 10-14 days → brain biopsy for lymphoma. Toxoplasma lesions show eccentric nodule (concentric ring sign) within the ring on some images.',
          keyFact: 'HIV + CD4 <200 + ring-enhancing lesion(s) = treat empirically for toxoplasmosis. No improvement in 2 weeks → biopsy for lymphoma. Thallium SPECT: lymphoma = HOT (metabolically active); toxo = COLD. MR spectroscopy: lymphoma = Cho peak; toxo = lipid-lactate peak.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebral-toxoplasmosis',
          tags: ['infection', 'mri', 'hiv', 'toxoplasmosis', 'ring-enhancing'],
        },
      },
      {
        id: 'neuro-infection-009',
        front: {
          question: 'What is Sturge-Weber syndrome and what are the classic imaging findings?',
        },
        back: {
          answer: 'Sturge-Weber (encephalotrigeminal angiomatosis): gyriform cortical calcifications (tram-track) + lobar atrophy + leptomeningeal angioma (enhancement on contrast MRI). Port-wine stain (facial angioma) in V1/V2 distribution.',
          explanation: 'Sturge-Weber is a sporadic neurocutaneous syndrome. The intracranial manifestations result from pial angiomatosis causing chronic venous ischemia. CT shows characteristic gyriform (tram-track) calcifications in the affected hemisphere (typically parieto-occipital). The affected hemisphere is atrophic with compensatory calvarial thickening, enlarged ipsilateral choroid plexus, and Dyke-Davidoff-Masson changes (thickened calvarium, elevated petrous bone, enlarged sinuses).',
          keyFact: 'Sturge-Weber "tram-track" gyriform calcifications on CT + leptomeningeal enhancement on MRI + ipsilateral hemispheric atrophy + port-wine stain. Gadolinium-enhanced MRI is essential to show the full extent. Choroid plexus ipsilateral enlargement is characteristic.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sturge-weber-syndrome',
          tags: ['infection', 'ct', 'mri', 'neurocutaneous', 'calcification'],
        },
      },
      {
        id: 'neuro-infection-010',
        front: {
          question: 'What is tuberculous meningitis, and what are its distinctive imaging features compared to bacterial meningitis?',
        },
        back: {
          answer: 'TB meningitis: thick exudate in basal cisterns with avid enhancement (basilar meningitis pattern). Complications: communicating hydrocephalus, vasculitis → basal ganglia infarcts (perforating artery territory), cranial neuropathies.',
          explanation: 'TB meningitis has a predilection for the basal cisterns, unlike pneumococcal/viral meningitis which is more convexity-predominant. The thick gelatinous exudate enhances on post-contrast MRI, filling and obscuring the basal cisterns. Perforating artery vasculitis leads to basal ganglia and internal capsule infarcts. Tuberculomas appear as ring-enhancing or nodular lesions with central "target" sign on MRI.',
          keyFact: 'TB meningitis = thick basilar meningeal enhancement + hydrocephalus + basal ganglia infarcts (perforating artery vasculitis). "Target sign" on T1+C: central calcification/necrosis surrounded by enhancement. Contrast MRI is essential to show extent. Long treatment course required (9-12 months).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tuberculous-meningitis',
          tags: ['infection', 'mri', 'tuberculosis', 'meningitis', 'basilar'],
        },
      },
    ],
  },
  {
    id: 'neuro-demyelinating',
    label: 'Demyelinating Disease',
    cards: [
      {
        id: 'neuro-demyelinating-001',
        front: {
          question: 'What are the MRI features of multiple sclerosis (MS), and what are the McDonald criteria for spatial and temporal dissemination?',
        },
        back: {
          answer: 'MS MRI: periventricular T2/FLAIR lesions perpendicular to ventricles (Dawson\'s fingers on sagittal), juxtacortical, infratentorial, and spinal cord lesions. Dissemination in space (DIS): ≥1 lesion in ≥2 of 4 locations. Dissemination in time (DIT): new T2 lesion or new enhancing lesion on follow-up.',
          explanation: 'MS plaques have characteristic locations: periventricular (calloso-septal interface = "Dawson\'s fingers"), juxtacortical (cortex adjacent white matter), infratentorial (brainstem, cerebellum), and spinal cord (<2 vertebral segments, dorsal, peripheral). Active plaques enhance with gadolinium (open ring in tumefactive MS). The optic nerve is a fifth location for DIS but requires dedicated MRI sequences.',
          keyFact: 'Dawson\'s fingers = periventricular MS plaques perpendicular to ventricles on sagittal FLAIR (aligned with medullary veins). 2017 McDonald criteria DIS: ≥2 of: periventricular, juxtacortical/cortical, infratentorial, spinal cord. MS never involves the gray matter exclusively or causes restricted diffusion (except in acute MS).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/multiple-sclerosis',
          tags: ['demyelinating', 'mri', 'ms', 'white-matter', 'flair'],
        },
      },
      {
        id: 'neuro-demyelinating-002',
        front: {
          question: 'What is a "black hole" on T1 MRI in MS, and what does it signify?',
        },
        back: {
          answer: '"Black holes" = T1-hypointense MS plaques = areas of severe axonal loss (gliosis ± irreversible axonal destruction). Permanent T1 black holes correlate with disability accumulation. Transient T1 hypointensity can occur in acute active plaques.',
          explanation: 'Most MS plaques are T2-hyperintense but T1-isointense. Persistent T1 hypointensity ("chronic black holes") indicates severe myelin and axonal loss, with gliosis replacing normal tissue. They correlate with progressive disability and are a marker of neurodegeneration beyond demyelination. Enhancing acute lesions may temporarily appear as T1 black holes but typically revert.',
          keyFact: 'T2 bright + T1 dark (black hole) = severe axonal loss in MS. T2 bright + T1 isointense = demyelination with relative axonal preservation. T1 black hole burden correlates with clinical disability better than T2 lesion count.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/t1-black-holes-in-multiple-sclerosis',
          tags: ['demyelinating', 'mri', 'ms', 'axonal-loss'],
        },
      },
      {
        id: 'neuro-demyelinating-003',
        front: {
          question: 'What is neuromyelitis optica spectrum disorder (NMOSD), and how does it differ from MS on MRI?',
        },
        back: {
          answer: 'NMOSD (AQP4-IgG positive): longitudinally extensive transverse myelitis (LETM >3 vertebral segments), severe optic neuritis (often bilateral), area postrema lesions (intractable hiccups). MS: short spinal cord lesion (<2 segments), dorsal/lateral, optic neuritis unilateral.',
          explanation: 'NMOSD is caused by antibodies against aquaporin-4 (AQP4), a water channel in astrocytic foot processes. Key distinguishing MRI features: LETM involving central cord (AQP4-rich regions), bilateral or posterior optic nerve involvement, and bright signal in the area postrema (dorsal medulla) on FLAIR. Brain lesions may involve periependymal regions. Anti-MOG antibody disease is a separate entity with bilateral optic neuritis and short spinal cord lesions.',
          keyFact: 'NMOSD vs MS: LETM (>3 segments, central cord) vs. short (≤2 segments, peripheral cord). Optic neuritis: NMOSD = bilateral, severe, posterior; MS = unilateral, mild. Area postrema lesion = hiccups/vomiting (pathognomonic for NMOSD). AQP4-IgG test is diagnostic.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neuromyelitis-optica',
          tags: ['demyelinating', 'mri', 'nmosd', 'spine', 'optic'],
        },
      },
      {
        id: 'neuro-demyelinating-004',
        front: {
          question: 'What is Alexander disease and what are its characteristic MRI findings?',
        },
        back: {
          answer: 'Alexander disease (GFAP mutation): frontal-predominant white matter T2 hyperintensity (spares posterior), T1 hyperintense periventricular rim (frontal horns) with enhancement, subcortical U-fiber and caudate head involvement. Macrocephaly in infants.',
          explanation: 'Alexander disease (fibrinoid leukodystrophy) is caused by mutations in GFAP (glial fibrillary acidic protein), leading to Rosenthal fiber accumulation in astrocytes. The infantile form presents with macrocephaly, seizures, and developmental delay. The periventricular frontal T1 hyperintensity/T2 hypointensity/enhancement is a highly characteristic finding. One of the few metabolic disorders with brain enhancement.',
          keyFact: 'Alexander disease mnemonic: "A-F-F-E-C-T-S": Astrocyte (GFAP mutation), Frontal predominance, Frontal horn T1 bright rim + Enhancement, Caudate heads involved, T2 hyperintense white matter (spares posterior initially), Subcortical U-fibers involved. Enhancement = rare in leukodystrophies = Alexander disease clue.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/alexander-disease',
          tags: ['demyelinating', 'mri', 'leukodystrophy', 'pediatric', 'metabolic'],
        },
      },
      {
        id: 'neuro-demyelinating-005',
        front: {
          question: 'What is ADEM (acute disseminated encephalomyelitis), and how does it differ from MS?',
        },
        back: {
          answer: 'ADEM: monophasic (single attack), post-infectious or post-vaccination, large multifocal T2 lesions in white and gray matter (including thalami and basal ganglia), often enhancing simultaneously (same age). MS: relapsing-remitting, no gray matter predominance, lesions at different ages.',
          explanation: 'ADEM is an immune-mediated demyelinating disease typically triggered by infection (EBV, influenza, VZV) or vaccination, 2-4 weeks prior. It predominantly affects children. The large lesions involving deep gray matter (thalami, basal ganglia) help distinguish it from MS. All lesions enhance simultaneously (same time point) vs. MS where lesions are of different ages. It is usually self-limited with complete or near-complete recovery.',
          keyFact: 'ADEM vs MS: ADEM = monophasic + post-infectious + all lesions same age (enhance together) + deep gray matter involvement + children. MS = relapsing + young adults + lesions different ages + periventricular/calloso-septal. ADEM lesions often large and bilateral.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acute-disseminated-encephalomyelitis-adem',
          tags: ['demyelinating', 'mri', 'adem', 'pediatric', 'post-infectious'],
        },
      },
      {
        id: 'neuro-demyelinating-006',
        front: {
          question: 'What is osmotic demyelination syndrome (central pontine myelinolysis), and what are its MRI features?',
        },
        back: {
          answer: 'ODS/CPM: T2/FLAIR "trident" or "bat wing" hyperintensity in central pons, sparing the corticospinal tracts and peripheral pontine fibers. Caused by rapid correction of hyponatremia (>8–10 mEq/L/day). MRI changes lag clinical symptoms by 1–2 weeks.',
          explanation: 'Central pontine myelinolysis (now called osmotic demyelination syndrome) typically follows rapid sodium correction after prolonged hyponatremia. The central pons is most vulnerable; extrapontine sites include basal ganglia, thalamus, and cerebral white matter. The "trident" or "bat wing" pattern refers to central pontine T2 hyperintensity sparing the peripheral fibers and corticospinal tracts. DWI shows restricted diffusion acutely.',
          keyFact: 'ODS/CPM = rapid hyponatremia correction (>8-10 mEq/L/day) → T2 "bat wing" central pons. DWI shows acute restriction. MRI may be normal for 1-2 weeks after clinical onset. Prevention: correct sodium slowly (<8-10 mEq/L per 24 hours).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osmotic-demyelination-syndrome',
          tags: ['demyelinating', 'mri', 'metabolic', 'sodium', 'pons'],
        },
      },
    ],
  },
  {
    id: 'neuro-spine',
    label: 'Spine',
    cards: [
      {
        id: 'neuro-spine-001',
        front: {
          question: 'What are the MRI features of acute disc herniation causing cord compression, and what levels are most commonly affected?',
        },
        back: {
          answer: 'Disc herniation: focal T2-hypointense material posterior to disc space causing cord/thecal sac compression. Most common levels: C5-6, C6-7 (cervical); L4-5, L5-S1 (lumbar).',
          explanation: 'Disc herniations are classified as protrusion (broad-based), extrusion (narrow neck, extends beyond endplates), and sequestration (free fragment). On sagittal T2, herniated disc material is T2-hypointense. Cord signal change (T2 myelopathy signal) indicates cord injury and poor surgical prognosis if not treated. Foraminal herniations affect the exiting root; paracentral herniations affect the traversing root.',
          keyFact: 'Cervical: C5-6 (C6 root: lateral elbow/thumb), C6-7 (C7 root: middle finger). Lumbar: L4-5 (L5 root: dorsal foot), L5-S1 (S1 root: lateral foot/heel). Foraminal = exiting root; paracentral = traversing root. Cord T2 signal = myelopathy = urgent.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/intervertebral-disc-herniation',
          tags: ['spine', 'mri', 'disc', 'cord-compression'],
        },
      },
      {
        id: 'neuro-spine-002',
        front: {
          question: 'What is spinal cord myelopathy, how does it appear on MRI, and what are the common causes?',
        },
        back: {
          answer: 'Myelopathy = intrinsic spinal cord T2 hyperintensity (cord signal change). Causes: degenerative spondylosis (most common), inflammatory/demyelinating (MS, NMOSD), vascular (anterior spinal artery infarct: "owl eyes" pattern), infectious (transverse myelitis), tumoral.',
          explanation: 'T2 hyperintensity within the spinal cord on MRI represents edema, demyelination, gliosis, or ischemia. The location within the cord cross-section helps with diagnosis: central gray (metabolic/vascular), dorsal columns (subacute combined degeneration/B12 deficiency), peripheral/posterior (MS), central+expansion (intramedullary tumor). Cord enhancement suggests active inflammation or tumor.',
          keyFact: 'T2 cord signal location aids diagnosis: Anterior cord = vascular (anterior spinal artery). Posterior columns = B12 deficiency (subacute combined degeneration) or copper deficiency. Central = syrinx or intramedullary tumor. Peripheral, short segment = MS.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-cord-myelopathy',
          tags: ['spine', 'mri', 'cord', 'myelopathy'],
        },
      },
      {
        id: 'neuro-spine-003',
        front: {
          question: 'What are the MRI features of spinal epidural abscess, and what is the imaging approach?',
        },
        back: {
          answer: 'Spinal epidural abscess: T2-hyperintense epidural collection compressing the cord/thecal sac. Ring or homogeneous enhancement post-contrast. Often associated with adjacent discitis/osteomyelitis (T2 bright disc + endplate signal change + paraspinal soft tissue involvement).',
          explanation: 'Epidural abscesses typically arise from hematogenous spread (IV drug use, bacteremia) or direct extension from discitis-osteomyelitis. Staphylococcus aureus is the most common organism. MRI with gadolinium is the investigation of choice. The posterior epidural space is most commonly affected (except in the anterior cervical spine). Urgent surgical decompression is needed if neurological deficits present.',
          keyFact: 'Epidural abscess MRI: T2 bright + ring/homogeneous enhancement in epidural space + cord compression. Look for associated discitis (T2 bright disc + irregular enhancing endplates). DWI bright in the abscess center helps confirm pus. URGENT surgical decompression if neurological deficit.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-epidural-abscess',
          tags: ['spine', 'mri', 'infection', 'epidural', 'emergency'],
        },
      },
      {
        id: 'neuro-spine-004',
        front: {
          question: 'What is the imaging appearance of a spinal cord ependymoma and where does it most commonly occur?',
        },
        back: {
          answer: 'Spinal cord ependymoma: central intramedullary T2 heterogeneous mass with hemosiderin "cap" sign (T2 dark polar caps = sentinel hemorrhage), enhancing, associated syrinx. Most common site: cervical cord (adults). Most common spinal intramedullary tumor in adults.',
          explanation: 'Spinal ependymomas arise from the central canal ependyma. The "cap sign" (hemosiderin deposits at the poles) is pathognomonic and represents recurrent microscopic hemorrhage at the tumor margins. They are usually well-defined and amenable to complete surgical resection. Myxopapillary ependymoma is a distinct type arising at the conus/filum terminale.',
          keyFact: '"Cap sign" (hemosiderin at poles) = spinal ependymoma (pathognomonic). Central intramedullary location. Most common intramedullary tumor in adults = ependymoma. In children = astrocytoma. Myxopapillary ependymoma: at conus/filum, sacral region, can be large and hemorrhagic.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-ependymoma',
          tags: ['spine', 'mri', 'tumor', 'intramedullary', 'ependymoma'],
        },
      },
      {
        id: 'neuro-spine-005',
        front: {
          question: 'What are the MRI features of metastatic spinal cord compression, and what is the emergent management?',
        },
        back: {
          answer: 'Vertebral metastases: T1-hypointense (replacing marrow fat), T2-variable, enhancing after gadolinium. Epidural extension compresses thecal sac/cord. Whole spine MRI urgent. Management: immediate dexamethasone + radiation ± decompressive surgery.',
          explanation: 'Metastatic epidural spinal cord compression (MESCC) is an oncologic emergency. MRI of the entire spine is essential to identify all lesions. T1 signal is the key: normal vertebral marrow is T1-bright (fat); metastasis replaces marrow fat making it T1-dark. T2 may be variable. Contrast helps delineate epidural extension. Treatment: high-dose dexamethasone immediately, then radiation; surgery for radioresistant tumors or instability.',
          keyFact: 'MESCC = oncologic emergency. T1-dark vertebral lesions = marrow infiltration (mets/myeloma). MRI whole spine urgently. Start dexamethasone IMMEDIATELY. Most common primaries: breast, lung, prostate, RCC, lymphoma. "Winking owl sign" on X-ray: pedicle erosion from met.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/metastatic-epidural-spinal-cord-compression',
          tags: ['spine', 'mri', 'metastasis', 'emergency', 'cord-compression'],
        },
      },
      {
        id: 'neuro-spine-006',
        front: {
          question: 'What is a Chiari I malformation and what associated finding in the spinal cord requires specific MRI evaluation?',
        },
        back: {
          answer: 'Chiari I: cerebellar tonsils >5 mm below foramen magnum on sagittal MRI. Associated: syringohydromyelia (30-70% of cases) — requires full spinal MRI to detect.',
          explanation: 'Syringohydromyelia (syrinx = CSF-containing cavity within the cord) in Chiari I results from altered CSF dynamics at the foramen magnum. It appears as a central cord T2-hyperintense linear cavity on sagittal MRI. Posterior fossa decompression typically resolves or stabilizes the syrinx. Any syrinx without a clear cause (tumor, Chiari, tethered cord) warrants full spine imaging.',
          keyFact: 'Chiari I = tonsils >5 mm below FM. 30-70% have syrinx → always get full spine MRI. Syrinx treatment = treat the underlying cause (decompression for Chiari I). Isolated syrinx without Chiari = rule out tethered cord, intramedullary tumor, AVM.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chiari-i-malformation',
          tags: ['spine', 'mri', 'chiari', 'syrinx', 'congenital'],
        },
      },
      {
        id: 'neuro-spine-007',
        front: {
          question: 'What is the MRI appearance of a spinal cord astrocytoma, and how does it differ from ependymoma?',
        },
        back: {
          answer: 'Spinal cord astrocytoma (most common intramedullary tumor in children): ill-defined, eccentric, asymmetric. No cap sign. Heterogeneous enhancement. No clear surgical plane (infiltrative). Cord expansion. Ependymoma: central, well-defined, cap sign, complete surgical resection usually possible.',
          explanation: 'Spinal cord astrocytomas are typically WHO grade 1-2 (pilocytic or diffuse) in children. They have an infiltrative growth pattern without a surgical plane, making complete resection difficult. The tumor often occupies multiple spinal levels with cord expansion. Ependymomas in adults tend to be well-circumscribed and surgically resectable. Astrocytomas and ependymomas can both have associated syrinx.',
          keyFact: 'Children intramedullary tumor = astrocytoma (eccentric, infiltrative, no cap sign). Adults = ependymoma (central, cap sign, surgically resectable). Pilocytic astrocytoma: most common spinal cord tumor in children, enhancing, cystic component possible.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-cord-astrocytoma',
          tags: ['spine', 'mri', 'tumor', 'intramedullary', 'astrocytoma'],
        },
      },
      {
        id: 'neuro-spine-008',
        front: {
          question: 'What are the imaging features of ankylosing spondylitis (AS) in the spine?',
        },
        back: {
          answer: 'Ankylosing spondylitis: "bamboo spine" (syndesmophytes bridging vertebrae), squaring of vertebrae, bilateral sacroiliitis (erosion + sclerosis), Romanus lesions (corner erosions with sclerosis — Shiny corners), dagger sign (midline posterior ligament ossification).',
          explanation: 'AS predominantly affects young HLA-B27 positive males. Sacroiliitis is the earliest and most characteristic finding. MRI shows bone marrow edema (Romanus lesions) at discovertebral junctions early, before radiographic changes. Complications include cauda equina syndrome from arachnoiditis, "dagger fracture" through the ossified spine, and atlantoaxial subluxation.',
          keyFact: '"Bamboo spine" on X-ray + bilateral sacroiliitis = ankylosing spondylitis. Dagger fracture = transverse fracture through ossified AS spine (look like a "chalk-stick" fracture) — associated with severe neurological injury. MRI shows active inflammation (STIR edema) before X-ray changes.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ankylosing-spondylitis',
          tags: ['spine', 'xray', 'mri', 'inflammatory', 'spondylarthropathy'],
        },
      },
      // ============================================================
// RadStack – Neuro Spine Flashcards
// New cards: neuro-spine-009 through neuro-spine-030
// Insert these into the neuro-spine subsection of src/data/decks/neuro.js
// ============================================================

// --- PASTE THESE CARDS INTO THE neuro-spine subsection cards[] array ---

      {
        id: 'neuro-spine-009',
        front: {
          question: 'What are the three compartments used to localize spinal lesions, and what is the significance of each?',
        },
        back: {
          answer: 'Intramedullary (within cord), intradural extramedullary (within thecal sac but outside cord), and extradural (outside thecal sac).',
          explanation: 'Compartment localization is the first and most critical step in evaluating any spinal mass, because the differential diagnosis differs dramatically between compartments. Intramedullary lesions expand the cord; intradural extramedullary lesions displace/compress the cord with a CSF cleft visible between lesion and cord; extradural lesions compress the thecal sac from outside. Note that epidural = extradural in location.',
          keyFact: 'The CSF cleft sign (CSF visible between mass and cord) confirms an intradural extramedullary location. No cleft = intramedullary; thecal sac compressed from without = extradural.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-cord-lesion-localization',
          tags: ['spine', 'mri', 'localization', 'tumor', 'anatomy'],
        },
      },

      {
        id: 'neuro-spine-010',
        front: {
          question: 'What are the classic MRI features of spinal ependymoma, and how does it differ from astrocytoma?',
          hint: 'Think: central vs eccentric, cap sign, hemorrhage',
        },
        back: {
          answer: 'Ependymoma: central, well-defined, homogeneous enhancement, hemorrhagic cap sign (T2 hypointense poles). Astrocytoma: eccentric, ill-defined, heterogeneous/patchy enhancement, hemorrhage uncommon.',
          explanation: 'Ependymoma is the most common intramedullary tumor in adults, while astrocytoma is most common in children. Ependymomas arise centrally within the cord, are well-demarcated, and frequently hemorrhage — producing the classic hemosiderin cap (dark T2 poles). Astrocytomas have infiltrative margins making complete resection difficult. Both can cause cord expansion and associated syrinx.',
          keyFact: 'Hemosiderin cap sign = hypointense poles on T2 = ependymoma until proven otherwise. Ependymoma is central + well-defined; astrocytoma is eccentric + infiltrative.',
          differentials: [
            { dx: 'Ependymoma (most common intramedullary tumor in adults)' },
            { dx: 'Astrocytoma (most common intramedullary tumor in children)' },
            { dx: 'Hemangioblastoma (associated with VHL; intense homogeneous enhancement)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-ependymoma',
          tags: ['spine', 'mri', 'intramedullary', 'ependymoma', 'tumor'],
        },
      },

      {
        id: 'neuro-spine-011',
        front: {
          question: 'Where is myxopapillary ependymoma found, and what are its classic imaging features?',
        },
        back: {
          answer: 'Exclusively at the conus medullaris/filum terminale (cauda equina region). Classic: sausage-shaped, lobulated, T2 bright, avid enhancement, peripheral hemosiderin blooming on GRE.',
          explanation: 'Myxopapillary ependymoma (WHO grade I) is the most common tumor of the cauda equina region, arising from ependymal glia of the conus and filum terminale. It grows slowly, often becoming large before diagnosis. Hemorrhage is common, causing T2 hypointense peripheral rim and GRE blooming. Vertebral scalloping from chronic pressure erosion may be seen. Leptomeningeal dissemination can occur.',
          keyFact: 'Myxopapillary ependymoma = conus/filum location, sausage-shaped, bleeds → GRE blooming rim. It is the #1 tumor at the cauda equina.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/myxopapillary-ependymoma',
          tags: ['spine', 'mri', 'ependymoma', 'conus', 'cauda-equina'],
        },
      },

      {
        id: 'neuro-spine-012',
        front: {
          question: 'What syndrome is associated with spinal hemangioblastoma, and what are the classic MRI findings?',
        },
        back: {
          answer: 'Von Hippel-Lindau (VHL) syndrome — 30% of spinal hemangioblastomas. MRI: small, intensely and homogeneously enhancing nodule, usually posteriorly located in thoracic cord, with surrounding edema and serpentine perimedullary flow voids.',
          explanation: 'Hemangioblastomas are benign (WHO grade I) vascular tumors that are the third most common intramedullary tumor. Spinal involvement occurs in ~25% of VHL cases (cerebellum 75%). Despite small size, they cause disproportionate edema and can be associated with syrinx. When multiple lesions are found in the neuraxis (cord, retina, cerebellum), VHL should be suspected. The pial vascular supply creates the characteristic flow voids around the lesion.',
          keyFact: 'Small enhancing nodule + large surrounding edema + flow voids = hemangioblastoma. Multiple lesions → think VHL (pheochromocytoma, clear cell RCC, endolymphatic sac tumor also associated).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-cord-haemangioblastoma',
          tags: ['spine', 'mri', 'hemangioblastoma', 'vhl', 'intramedullary'],
        },
      },

      {
        id: 'neuro-spine-013',
        front: {
          question: 'What are the MRI features that distinguish MS cord lesions from NMO cord lesions?',
        },
        back: {
          answer: 'MS: short segment (<2 vertebral levels), peripheral/partial cord, no/mild swelling, cervical predominance. NMO: long segment (>3 levels), central, full transverse diameter, cord swelling, optic nerve involvement.',
          explanation: 'MS cord lesions are typically short, occupy less than half the cord cross-section, are peripherally located, and preferentially involve the cervical cord. NMO (associated with aquaporin-4 antibodies) produces longitudinally extensive transverse myelitis (LETM) involving the majority of the cord in cross-section, often with cord swelling acutely and atrophy chronically. The cervicothoracic cord is predominantly involved in NMO. Brain lesions in NMO are periependymal (area postrema, ventricles).',
          keyFact: 'MS = Short + Peripheral + Partial cord. NMO = Long (>3 levels) + Central + Full transverse + Optic nerve + AQP4 antibody positive.',
          differentials: [
            { dx: 'MS (short, peripheral, partial)' },
            { dx: 'NMOSD (long, central, full transverse, optic nerve)' },
            { dx: 'Transverse myelitis (long, bilateral, swollen cord)' },
            { dx: 'Spinal cord infarct (long, restricted diffusion, owl-eye)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/neuromyelitis-optica',
          tags: ['spine', 'mri', 'ms', 'nmo', 'demyelinating'],
        },
      },

      {
        id: 'neuro-spine-014',
        front: {
          question: 'What is subacute combined degeneration, what causes it, and what is the classic MRI appearance?',
        },
        back: {
          answer: 'Myelopathy from vitamin B12 deficiency (also copper deficiency, nitrous oxide). MRI: bilateral symmetric T2 hyperintensity in dorsal columns, "inverted V sign" on axial images. No enhancement.',
          explanation: 'Subacute combined degeneration (SCD) involves the dorsal and lateral columns of the cord. Causes include pernicious anemia, gastrointestinal surgery, strict vegetarian diet, and drugs (nitrous oxide, proton pump inhibitors, metformin). The T2 signal preferentially affects the posterior columns, creating an inverted V or inverted U shape on axial images. The cervical and thoracic cord are most commonly involved. HIV vacuolar myelopathy mimics B12 deficiency with similar posterior column T2 signal.',
          keyFact: 'Inverted V sign on axial T2 = dorsal column signal = B12 deficiency (SCD) until proven otherwise. Also think copper deficiency and nitrous oxide toxicity.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/subacute-combined-degeneration-of-the-spinal-cord',
          tags: ['spine', 'mri', 'b12', 'metabolic', 'dorsal-columns'],
        },
      },

      {
        id: 'neuro-spine-015',
        front: {
          question: 'What is the owl-eye sign in the spine, and what does it indicate?',
        },
        back: {
          answer: 'Bilateral symmetric T2 hyperintensity of the anterior horn cells on axial MRI, resembling owl eyes — classic sign of anterior spinal artery infarction.',
          explanation: 'Anterior spinal artery (ASA) infarction preferentially affects the central gray matter (anterior horns) because gray matter is more vulnerable to ischemia than white matter. The resulting bilateral symmetric T2 hyperintensity in the ventral horns creates the owl-eye appearance on axial imaging. ASA infarcts are typically long segment (>2 vertebral body levels), show restricted diffusion acutely, and spare the dorsal columns (posterior spinal arteries). The artery of Adamkiewicz (usually left-sided, T9–12) supplies the distal cord.',
          keyFact: 'Owl-eye sign = bilateral anterior horn T2 signal = anterior spinal artery infarct. Dorsal columns spared = preserved proprioception (anterior cord syndrome clinically).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-cord-infarction',
          tags: ['spine', 'mri', 'infarct', 'anterior-spinal-artery', 'cord'],
        },
      },

      {
        id: 'neuro-spine-016',
        front: {
          question: 'What is a spinal dural arteriovenous fistula (dAVF), what are the MRI findings, and what eponym is associated with its myelopathy?',
        },
        back: {
          answer: 'Type 1 spinal AVM (most common, 85%): fistula between radiculomedullary artery and radicular vein causing venous hypertension. MRI: long segment T2 cord edema + serpentine perimedullary flow voids (dorsal). Foix-Alajouanine syndrome.',
          explanation: 'Dural AVFs cause progressive congestive myelopathy via venous hypertension rather than direct arterial steal. They are acquired lesions seen in older males, most commonly in the thoracic spine. On MRI the cord is swollen with T2 edema, and dorsal perimedullary flow voids (serpiginous, NOT blob-like) represent dilated veins. Catheter angiography is the gold standard; CTA/MRA may miss them. Foix-Alajouanine syndrome is the eponym for the subacute progressive myelopathy caused by a dAVF.',
          keyFact: 'Serpentine flow voids (dorsal, punctate/serpiginous) + long cord edema in older male = dAVF = Foix-Alajouanine. Flow voids are NOT blob-like (that is CSF pulsation artifact).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-dural-arteriovenous-fistula',
          tags: ['spine', 'mri', 'avf', 'vascular', 'foix-alajouanine'],
        },
      },

      {
        id: 'neuro-spine-017',
        front: {
          question: 'What is a syrinx, what are the most common causes, and what MRI features suggest it requires further workup?',
        },
        back: {
          answer: 'Syrinx = fluid-filled cavity within the spinal cord. Most common cause: Chiari I malformation (90% of congenital cases). Features requiring workup: cord signal abnormality surrounding the cavity, cord atrophy, eccentric shape, or enhancement.',
          explanation: 'Hydromyelia (ependyma-lined central canal dilatation) and syringomyelia (gliosis-lined parenchymal cavity) are collectively called syrinx. Up to 2 mm central canal dilation is within normal limits. Congenital causes: Chiari I & II, Klippel-Feil, myelomeningocele. Acquired causes: post-traumatic, post-inflammatory, tumor (ependymoma and hemangioblastoma most commonly). A simple central T2 hyperintensity surrounded by normal-appearing cord = benign central cord dilation. Surrounding cord signal abnormality or atrophy = myelopathic changes requiring investigation.',
          keyFact: 'Central cord dilation + normal surrounding cord = likely benign. Add surrounding cord T2 signal or atrophy = myelopathy. Always look for Chiari I, tethered cord, or intramedullary tumor as cause.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/syringohydromyelia',
          tags: ['spine', 'mri', 'syrinx', 'chiari', 'cord'],
        },
      },

      {
        id: 'neuro-spine-018',
        front: {
          question: 'What are the Modic classification types for vertebral endplate changes, and which type mimics osteomyelitis?',
        },
        back: {
          answer: 'Type 1: T1 dark / T2 bright (edema) — mimics osteomyelitis. Type 2: T1 bright / T2 bright (fatty metaplasia). Type 3: T1 dark / T2 dark (sclerosis/fibrosis).',
          explanation: 'Modic changes reflect the progression of degenerative endplate injury. Type 1 (edema/inflammation) is clinically active, associated with back pain, and can appear indistinguishable from discitis/osteomyelitis on MRI — clinical correlation and sometimes biopsy are required. Type 2 (fatty metaplasia) is stable and less symptomatic. Type 3 (sclerosis) is burned-out and of unclear clinical significance. The sequence follows: inflammation → fat → sclerosis.',
          keyFact: 'Modic 1 (T1↓T2↑ = edema) looks like infection — clinical correlation required. Mnemonic: 1=edema/inflammatory, 2=fat/fatty, 3=sclerosis/scar.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/modic-changes',
          tags: ['spine', 'mri', 'modic', 'degenerative', 'endplate'],
        },
      },

      {
        id: 'neuro-spine-019',
        front: {
          question: 'What is the difference between a disc protrusion and a disc extrusion? What defines a disc bulge?',
        },
        back: {
          answer: 'Protrusion: herniation (<25% circumference) where base is WIDER than the dome. Extrusion: herniation where dome is WIDER than the neck (like a saccular aneurysm). Bulge: disc material extending >180° of circumference (>25% of disc).',
          explanation: 'Per consensus nomenclature, herniation refers to focal disc displacement covering less than 90° of circumference. A protrusion has a wider base than apex (broad-based focal herniation). An extrusion has a narrower neck than dome — it may migrate cranially or caudally and can become a sequestered (free) fragment. A bulge is circumferential and symmetric/asymmetric extension >180°. The term "herniation" alone should not appear in radiology reports; use protrusion or extrusion.',
          keyFact: 'Protrusion = base wider (contained). Extrusion = dome wider than neck (like an aneurysm — may migrate). Sequestration = free fragment. Bulge = >180°, not a herniation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lumbar-disc-herniation',
          tags: ['spine', 'mri', 'disc', 'herniation', 'degenerative'],
        },
      },

      {
        id: 'neuro-spine-020',
        front: {
          question: 'An L4-5 disc herniation at the foraminal level will compress which nerve root? What about a central/subarticular herniation at the same level?',
        },
        back: {
          answer: 'Foraminal L4-5 herniation compresses the EXITING L4 nerve root. Central/subarticular L4-5 herniation compresses the DESCENDING (traversing) L5 nerve root.',
          explanation: 'In the lumbar spine, each nerve exits below its same-numbered vertebra. At L4-5, the L4 nerve root exits through the L4-5 foramen; the L5 root is still descending through the lateral recess toward the L5-S1 foramen. A foraminal disc catches the exiting nerve (named for the disc level above); a central or subarticular disc catches the descending nerve (named for the disc level below). Over 90% of lumbar disc herniations occur at L4-5 and L5-S1.',
          keyFact: 'Rule: Foraminal disc = exiting nerve (same level number as disc above). Central/subarticular disc = traversing/descending nerve (same level number as disc below). At L4-5: foraminal = L4, central = L5.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lumbar-disc-herniation',
          tags: ['spine', 'disc', 'nerve-root', 'lumbar', 'radiculopathy'],
        },
      },

      {
        id: 'neuro-spine-021',
        front: {
          question: 'What is the classic MRI appearance of spinal schwannoma, and what distinguishes it from neurofibroma?',
        },
        back: {
          answer: 'Both: T2 bright, enhancing intradural mass. Schwannoma: does NOT envelop the parent nerve, cystic change/hemorrhage common, multiple → NF-2. Neurofibroma: envelops the nerve, target sign (T2 bright rim + dark center), plexiform = pathognomonic NF-1.',
          explanation: 'Schwannoma and neurofibroma are the most common intradural extramedullary tumors. Schwannomas arise from the nerve sheath (Schwann cells) and are encapsulated — enabling nerve-sparing resection. Neurofibromas infiltrate between nerve fascicles, requiring nerve sacrifice. Dumbbell morphology (waist at the neural foramen) is classic for both. The target sign (T2 hypointense center + hyperintense rim) favors neurofibroma. Central necrosis/hemorrhage favors schwannoma.',
          keyFact: 'Target sign (T2 dark center + bright rim) = neurofibroma → NF-1. Cystic change/hemorrhage = schwannoma → NF-2. Plexiform neurofibroma = pathognomonic NF-1.',
          differentials: [
            { dx: 'Schwannoma (does not envelop nerve, cystic/hemorrhagic)' },
            { dx: 'Neurofibroma (envelops nerve, target sign, NF-1)' },
            { dx: 'Meningioma (posterior/lateral thoracic, dural tail, women)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-schwannoma',
          tags: ['spine', 'mri', 'schwannoma', 'neurofibroma', 'intradural'],
        },
      },

      {
        id: 'neuro-spine-022',
        front: {
          question: 'What are the classic imaging features of spinal meningioma, and what is the typical location and demographic?',
        },
        back: {
          answer: 'Older women (70%), posterior/lateral thoracic spine most common (also anterior cervical). MRI: intensely and homogeneously enhancing intradural extramedullary mass with dural tail. T1 iso-to-hypo, slightly T2 bright. May calcify.',
          explanation: 'Spinal meningiomas are WHO grade I benign tumors that adhere to but do not originate from the dura. They comprise ~25% of intradural extramedullary tumors. The thoracic spine is the most common location (posterior/lateral), followed by the cervical spine (anterior). Associated with NF-2 (especially if multiple or in young patients) and prior radiation. The dural tail sign and intense homogeneous enhancement are characteristic. Calcification may be seen.',
          keyFact: 'Spinal meningioma = older woman + posterior/lateral thoracic + avid homogeneous enhancement + dural tail. Multiple spinal meningiomas → think NF-2.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-meningioma',
          tags: ['spine', 'mri', 'meningioma', 'intradural', 'thoracic'],
        },
      },

      {
        id: 'neuro-spine-023',
        front: {
          question: 'What are the MRI features of discitis/osteomyelitis, and what is the most sensitive finding for early spinal infection?',
        },
        back: {
          answer: 'Most sensitive sign: paraspinal or epidural inflammatory change (enhancement). Other features: endplate erosion/destruction, disc T2 signal increase, disc enhancement, fluid signal across disc space.',
          explanation: 'Discitis/osteomyelitis most commonly results from hematogenous spread to the endplates (in adults, the disc is avascular but the endplates receive end-capillary branches). In adults, one endplate is usually infected first; spread occurs through the disc to adjacent endplates. MRI is the optimal imaging modality. Endplate edema (T1 low, T2 high with enhancement) and disc enhancement are hallmarks. Fat-suppressed post-contrast T1 sequences are critical — epidural fat is normally bright on T1, making fat suppression essential to detect early epidural spread.',
          keyFact: 'Paraspinal/epidural enhancement = most sensitive MRI sign of spinal infection. Key risk factors: diabetes, IV drug use, prior spine surgery. Modic 1 changes can mimic discitis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-discitis-osteomyelitis',
          tags: ['spine', 'mri', 'infection', 'discitis', 'osteomyelitis'],
        },
      },

      {
        id: 'neuro-spine-024',
        front: {
          question: 'What is Pott disease, how does it differ from pyogenic discitis/osteomyelitis on imaging, and what is a gibbus deformity?',
        },
        back: {
          answer: 'Pott disease = spinal tuberculosis (Mycobacterium tuberculosis). Key difference: discs usually SPARED (TB lacks proteolytic enzymes). Gibbus deformity = acute focal kyphosis from anterior vertebral compression, classic for TB.',
          explanation: 'Unlike pyogenic infection (which starts in the endplate and readily crosses the disc), TB preferentially affects the vertebral body and spares the disc because M. tuberculosis lacks disc-degrading enzymes. Anterior vertebral body wedging leads to gibbus deformity (acute angled kyphosis). Large paraspinal abscesses (psoas abscess) are characteristic. Approximately 10% of Pott disease patients have active pulmonary TB. Gibbus deformity also occurs in achondroplasia and mucopolysaccharidoses.',
          keyFact: 'TB spine (Pott) = disc SPARED + anterior vertebral body + gibbus deformity + psoas abscess. Pyogenic = disc involved. Disc preservation = think TB.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-tuberculosis',
          tags: ['spine', 'infection', 'tuberculosis', 'pott', 'ct'],
        },
      },

      {
        id: 'neuro-spine-025',
        front: {
          question: 'What are the imaging features of a vertebral hemangioma, and what makes one "aggressive"?',
        },
        back: {
          answer: 'Classic: T1 bright + T2 bright (fat-containing), "jail bar/corduroy" trabecular pattern on CT/X-ray. Aggressive: lacks fat (isointense T1), has epidural soft tissue component capable of causing cord compression — more common in women and the thoracic spine.',
          explanation: 'Vertebral hemangiomas are the most common benign "tumor" of the spine, found incidentally in ~10% of the population. They are actually low-flow cavernous vascular malformations. The thickened vertical trabeculae create the corduroy (sagittal) or stippled (axial CT) appearance. On MRI they are bright on both T1 and T2 due to fat and slow-flow blood. Aggressive variants lose their fat content (T1 isointense), may expand the vertebral body, and develop an extradural component threatening the cord.',
          keyFact: 'Hemangioma = T1 bright + T2 bright + corduroy on CT = incidental. T1 isointense hemangioma with epidural extension = aggressive variant = can cause cord compression.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/vertebral-haemangioma',
          tags: ['spine', 'mri', 'ct', 'hemangioma', 'extradural'],
        },
      },

      {
        id: 'neuro-spine-026',
        front: {
          question: 'What is arachnoiditis, what are the two classic MRI patterns, and what are the common causes?',
        },
        back: {
          answer: 'Inflammation/scarring of leptomeninges causing cauda equina nerve root adhesions. Pattern 1: Empty thecal sac sign (roots clumped peripherally). Pattern 2: Central clumping (roots fused centrally). Causes: lumbar surgery (most common), infection, intrathecal injection.',
          explanation: 'Arachnoiditis occurs in 10–15% of patients after spine surgery and can cause failed back surgery syndrome. The fibrous adhesions cause the cauda equina roots to clump either peripherally (empty thecal sac — no roots visible centrally) or centrally (central matted cord). Enhancement for 6 weeks post-op is considered normal; after 6 weeks, enhancement suggests infection or inflammation. Arachnoiditis is also seen after TB meningitis and chemical injury (intrathecal steroids, anesthetics).',
          keyFact: 'Empty thecal sac sign (peripheral root clumping) OR central root clumping = arachnoiditis. Post-op enhancement >6 weeks = suspect infection or arachnoiditis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/arachnoiditis',
          tags: ['spine', 'mri', 'arachnoiditis', 'cauda-equina', 'post-op'],
        },
      },

      {
        id: 'neuro-spine-027',
        front: {
          question: 'How do you differentiate post-surgical scar tissue from recurrent disc herniation on MRI?',
        },
        back: {
          answer: 'Post-contrast T1 MRI: scar enhances homogeneously (immediately and on delayed images). Recurrent disc does NOT enhance or enhances only peripherally (rim enhancement from granulation tissue at margins).',
          explanation: 'On pre-contrast T1, both scar and recurrent disc appear as non-specific soft tissue at the operative site. Post-contrast imaging is essential. Epidural fibrosis/scar tissue enhances intensely and homogeneously because it is well-vascularized granulation tissue. A recurrent disc herniation does not enhance centrally (avascular), though its periphery may show rim enhancement from surrounding granulation tissue. This distinction is critical because recurrent disc may be re-operated on, while scar is managed conservatively.',
          keyFact: 'Post-contrast MRI: Scar = homogeneous enhancement. Disc = no enhancement (or peripheral rim only). Pre-contrast: both look the same — always give contrast.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/failed-back-surgery-syndrome',
          tags: ['spine', 'mri', 'post-op', 'scar', 'disc'],
        },
      },

      {
        id: 'neuro-spine-028',
        front: {
          question: 'What is the Torg-Pavlov ratio and what does it measure?',
        },
        back: {
          answer: 'Torg-Pavlov ratio = cervical canal diameter / vertebral body width. Ratio <0.85 indicates developmental cervical canal stenosis.',
          explanation: 'The Torg-Pavlov ratio is used on lateral radiographs (or CT) to assess for congenital narrowing of the cervical spinal canal. A ratio less than 0.85 suggests significant narrowing and predisposition to spinal cord injury, particularly central cord syndrome with hyperextension. The cervical epidural space is predominantly filled with venous plexus (not fat), making it more prone to cord compromise with even mild stenosis. Symptomatic stenosis is most common in the cervical spine.',
          keyFact: 'Torg-Pavlov ratio <0.85 = cervical stenosis. Canal/vertebral body width ratio measured on lateral X-ray or CT. Predisposes to central cord syndrome with hyperextension.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/torg-pavlov-ratio',
          tags: ['spine', 'ct', 'xray', 'stenosis', 'cervical'],
        },
      },

      {
        id: 'neuro-spine-029',
        front: {
          question: 'What is the conus medullaris normal termination level, and below what level should a low-lying conus raise concern for tethered cord?',
        },
        back: {
          answer: 'Normal conus terminates at L1 (range T12–L1/L2 superior endplate). Conus below the inferior endplate of L2 raises concern for tethered cord syndrome.',
          explanation: 'Tethered cord syndrome occurs when the caudal spinal cord is abnormally fixed, causing progressive neurological deficits from traction. Common causes include spinal lipomas, tight/fatty filum terminale (>2 mm thick), and post-repair myelomeningocele. A fatty filum appears as T1 hyperintensity in the filum. For lumbar puncture or myelography, the needle must be placed below the conus — awareness of a low-lying conus is critical to avoid cord injury.',
          keyFact: 'Conus at or below L2 inferior endplate = possible tethered cord. Tight/fatty filum terminale (>2 mm, T1 bright) = most common cause. Association with lipomyelomeningocele and spinal dysraphism.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tethered-spinal-cord-syndrome',
          tags: ['spine', 'mri', 'tethered-cord', 'conus', 'anatomy'],
        },
      },

      {
        id: 'neuro-spine-030',
        front: {
          question: 'Describe the spinal cord syndromes: central cord, anterior cord, Brown-Séquard, and posterior cord. What causes each?',
        },
        back: {
          answer: 'Central cord: UE > LE weakness, hyperextension in elderly with spondylosis. Anterior cord: bilateral motor loss + pain/temp loss, spared proprioception; ASA infarct or flexion injury. Brown-Séquard: ipsilateral motor + contralateral pain/temp loss; penetrating trauma or rotation. Posterior cord: loss of proprioception/vibration; hyperextension (rare).',
          explanation: 'Central cord syndrome is the most common incomplete cord syndrome, resulting from injury around the central canal. Upper extremity weakness predominates because corticospinal fibers serving the arms are more central/medial. Anterior cord syndrome (the most devastating) spares dorsal columns — proprioception and vibration remain intact while motor function and pain/temperature are lost. Brown-Séquard results from hemicord injury with ipsilateral corticospinal (motor) and contralateral spinothalamic (pain/temp) deficits due to tract decussation patterns.',
          keyFact: 'Anterior cord (worst): motor paralysis + pain/temp gone, BUT proprioception INTACT. Central cord: UE worse than LE. Brown-Séquard: ipsilateral motor, contralateral pain/temp. Hemorrhagic cord injury = worst prognosis on MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinal-cord-syndromes',
          tags: ['spine', 'mri', 'cord-syndrome', 'trauma', 'anatomy'],
        },
      },
    ],
  },
  {
    id: 'neuro-congenital',
    label: 'Congenital Brain Malformations',
    cards: [
      {
        id: 'neuro-congenital-001',
        front: {
          question: 'What is schizencephaly and what are the two types? What is the key diagnostic imaging feature?',
        },
        back: {
          answer: 'Schizencephaly: full-thickness gray matter-lined cleft from ependyma to pia. Closed-lip: cleft walls apposed (subtle — key feature: gray matter extends from ventricle to cortex). Open-lip: CSF-filled cleft.',
          explanation: 'Schizencephaly is a neuronal migration disorder caused by 2nd-trimester insult or genetics (EMX2 mutation), resulting in a full-thickness communication between the brain surface and ventricular ependyma. The GRAY MATTER LINING of the cleft is pathognomonic — it distinguishes it from porencephalic cysts (no gray matter lining). Associated with absent septum pellucidum (90%) and septo-optic dysplasia. Presents with seizures and developmental delay.',
          keyFact: 'Key feature: GRAY MATTER LINES the cleft (not white matter or CSF). Closed-lip can be subtle — trace gray matter from lateral ventricle to brain surface. Absent septum pellucidum in 90%. Open-lip is obvious (CSF cleft). Multiplanar MRI essential — single plane can miss it.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/schizencephaly',
          tags: ['congenital', 'mri', 'neuronal-migration', 'seizures'],
        },
      },
      {
        id: 'neuro-congenital-002',
        front: {
          question: 'What is gray matter heterotopia and what are its imaging features? How is it distinguished from tuberous sclerosis on MRI?',
        },
        back: {
          answer: 'Gray matter heterotopia: ectopic gray matter nodules that maintain isointensity with cortical gray matter on ALL sequences. No enhancement. Types: subependymal (most common), band (ribbon of gray within white matter), focal subcortical.',
          explanation: 'Heterotopias result from arrest of neuronal migration. The key imaging feature is signal identical to cortex on all sequences (T1, T2, FLAIR, T1+C) — they follow gray matter exactly. They do NOT enhance, distinguishing them from subependymal giant cell astrocytomas in tuberous sclerosis (which enhance). Subependymal heterotopias are most common, lining the lateral ventricles.',
          keyFact: 'Gray matter heterotopia = follows cortex signal on ALL sequences + NO enhancement. Key DDx from TSC: TSC subependymal nodules calcify and enhance (especially SEGA near foramen of Monro); heterotopias do NOT enhance and do NOT calcify. Periventricular location is classic for both.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gray-matter-heterotopia',
          tags: ['congenital', 'mri', 'neuronal-migration', 'seizures'],
        },
      },
      {
        id: 'neuro-congenital-003',
        front: {
          question: 'What is holoprosencephaly and what are the three subtypes?',
        },
        back: {
          answer: 'Alobar (most severe): monoventricle, fused thalami, absent falx/interhemispheric fissure, midline facial anomalies. Semilobar: partial separation of posterior hemispheres. Lobar (mildest): nearly normal with fused frontal horns, absent septum pellucidum.',
          explanation: 'Holoprosencephaly results from failure of prosencephalon induction and cleavage, usually with chromosomal abnormalities (trisomy 13 most common). Alobar is detected prenatally by ultrasound showing the monoventricle and fused thalami. Midline facial anomalies (cyclopia, proboscis, cleft lip/palate) correlate with severity. A rare middle interhemispheric variant affects posterior frontal and parietal regions.',
          keyFact: 'Alobar = monoventricle + fused thalami + absent falx = most severe. "The face predicts the brain": midline facial abnormalities (cyclopia, hypotelorism, cleft) parallel brain severity. Associated with trisomy 13. SHH gene mutation in familial cases.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/holoprosencephaly',
          tags: ['congenital', 'mri', 'fetal', 'midline', 'holoprosencephaly'],
        },
      },
      {
        id: 'neuro-congenital-004',
        front: {
          question: 'What is periventricular leukomalacia (PVL) and what are its imaging features at different stages?',
        },
        back: {
          answer: 'PVL: ischemic white matter injury in premature neonates. Early: echogenic foci on neonatal ultrasound. Late: decreased periventricular white matter volume, irregular/scalloped lateral ventricle walls, deep sulci pointing toward enlarged ventricles (Swiss cheese appearance if severe).',
          explanation: 'PVL primarily affects premature infants (<32 weeks) and is the main imaging correlate of cerebral palsy (spastic diplegia). It results from ischemia/inflammation in the watershed periventricular white matter where oligodendrocyte precursors are vulnerable. Ultrasound is used for initial screening in the NICU but has high false-negative rate (~55%). MRI is definitive: scalloped ventricular walls, decreased white matter volume, and gliosis (T2/FLAIR signal).',
          keyFact: 'PVL = white matter injury in prematurity = leading MRI cause of spastic diplegia/CP. Late PVL: irregular ventricle walls + deep sulci extending toward ventricles + decreased WM volume. MRI shows deep cortical sulci close to dilated lateral ventricles. Ultrasound misses ~55% of significant PVL.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/periventricular-leukomalacia',
          tags: ['congenital', 'mri', 'pediatric', 'white-matter', 'prematurity'],
        },
      },
      {
        id: 'neuro-congenital-005',
        front: {
          question: 'What is tuberous sclerosis complex (TSC) and what are the CNS imaging features?',
        },
        back: {
          answer: 'TSC CNS: cortical tubers (FLAIR/T2 hyperintense cortical/subcortical lesions, epileptogenic), subependymal nodules (calcified, T1 bright), subependymal giant cell astrocytoma (SEGA — enhancing mass at foramen of Monro, can cause hydrocephalus).',
          explanation: 'TSC is autosomal dominant (TSC1/TSC2 gene mutations), characterized by hamartomatous lesions in multiple organs. The CNS triad is: tubers + subependymal nodules + SEGA. Subependymal nodules calcify and are T1 hyperintense on MRI; they do not enhance unless they become SEGA. SEGA is diagnosed by interval growth near the foramen of Monro — it is the only reliable imaging sign to distinguish SEGA from stable subependymal nodule. Extra-CNS: renal AML, pulmonary LAM, cardiac rhabdomyoma.',
          keyFact: 'TSC imaging triad: Tubers (epileptogenic, FLAIR bright) + Subependymal nodules (calcify, T1 bright, do NOT enhance unless SEGA) + SEGA (near foramen of Monro, enhances, GROWS). Interval growth near foramen of Monro = SEGA = risk of hydrocephalus = treat with mTOR inhibitor or resect.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tuberous-sclerosis-complex',
          tags: ['congenital', 'mri', 'neurocutaneous', 'tsc', 'seizures'],
        },
      },
      {
        id: 'neuro-congenital-006',
        front: {
          question: 'What is the Dandy-Walker malformation and what are the classic imaging criteria?',
        },
        back: {
          answer: 'Dandy-Walker malformation (DWM): triad of (1) complete or partial agenesis of cerebellar vermis, (2) cystic dilation of 4th ventricle filling the posterior fossa, and (3) enlarged posterior fossa (elevated torcula/torcular Herophili). Hydrocephalus in 80%.',
          explanation: 'DWM is a congenital posterior fossa malformation. Key features on sagittal MRI: elevated tentorium/torcula above lambda, absence/hypoplasia of vermis, large 4th ventricle communicating cyst. The keyhole shape of the 4th ventricle cyst on axial imaging is characteristic. Associated with corpus callosum agenesis (20-25%) and cortical malformations. Distinguished from mega cisterna magna (normal vermis and 4th ventricle) and Blake\'s pouch cyst.',
          keyFact: 'DWM triad: (1) Vermis agenesis/hypoplasia + (2) Enlarged 4th ventricle cyst + (3) Elevated torcula/posterior fossa. Distinguished from mega cisterna magna (MCM): MCM = normal 4th ventricle + normal vermis + retrocerebellar CSF. Elevated torcula = key DWM feature.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/dandy-walker-malformation',
          tags: ['congenital', 'mri', 'posterior-fossa', 'cerebellum'],
        },
      },
    ],
  },
  {
    id: 'neuro-sella',
    label: 'Sellar & Skull Base',
    cards: [
      {
        id: 'neuro-sella-001',
        front: {
          question: 'What is the differential diagnosis for a sellar/suprasellar mass and how is it approached systematically?',
        },
        back: {
          answer: 'Sellar/suprasellar DDx by location: Intrasellar: pituitary adenoma (most common), Rathke cleft cyst. Suprasellar: craniopharyngioma, meningioma, optic glioma, hypothalamic hamartoma, aneurysm. Both: pituitary macroadenoma, craniopharyngioma.',
          explanation: 'The approach to sellar masses uses the "6 Ps": Pituitary adenoma, Pituitary apoplexy, Parasellar meningioma, Pituitary metastasis, Primitive germ cell tumor, Plus craniopharyngioma. Location, calcification (craniopharyngioma), cystic vs. solid, and patient age guide the diagnosis. MRI with dedicated thin-cut coronal sequences is the imaging modality of choice.',
          keyFact: 'Sellar mass "must-not-miss": (1) Aneurysm of ICA/PCOM mimicking sellar mass — always CTA before biopsy. (2) Pituitary apoplexy (hemorrhage/infarct of adenoma) = ophthalmoplegia + sudden headache + hormone crash = emergency. (3) Lymphocytic hypophysitis in peripartum women.',
          differentials: [
            { dx: 'Pituitary macroadenoma (most common sellar mass)' },
            { dx: 'Craniopharyngioma (suprasellar, cystic, calcified, bimodal age)' },
            { dx: 'Rathke cleft cyst (intrasellar, non-enhancing, T1 variable)' },
            { dx: 'Meningioma (dural-based, homogeneous enhancement, no calcification)' },
            { dx: 'Cavernous ICA aneurysm (pulsation artifact, CTA diagnosis)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/sellar-region-differential-diagnosis',
          tags: ['sella', 'mri', 'differentials', 'pituitary'],
        },
      },
      {
        id: 'neuro-sella-002',
        front: {
          question: 'What is pituitary apoplexy and what are its CT/MRI findings and clinical presentation?',
        },
        back: {
          answer: 'Pituitary apoplexy: sudden hemorrhage or infarction of a pituitary adenoma. CT: hyperdense sellar mass. MRI: T1 bright (hemorrhage/infarct) in sellar mass. Presents with sudden severe headache + visual loss + ophthalmoplegia + panhypopituitarism.',
          explanation: 'Pituitary apoplexy is a neuroendocrine emergency requiring urgent MRI, hormone replacement, and often surgical decompression. Bleeding into an adenoma causes acute mass effect on the optic chiasm (vision loss) and cavernous sinuses (CN III/IV/VI palsies). The T1 hyperintensity from blood distinguishes it from Rathke cleft cyst (which can also be T1 bright but is non-hemorrhagic). Immediate glucocorticoid replacement is critical.',
          keyFact: 'Pituitary apoplexy = sudden headache + visual loss + CN palsy (III/IV/VI) + panhypopituitarism. T1 bright sellar mass = blood. URGENT: give steroids immediately (adrenal crisis risk), then urgent surgical decompression if vision threatened. MRI better than CT for soft tissue detail.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pituitary-apoplexy',
          tags: ['sella', 'mri', 'ct', 'emergency', 'hemorrhage'],
        },
      },
      {
        id: 'neuro-sella-003',
        front: {
          question: 'What is panhypopituitarism with ectopic posterior pituitary, and what are the MRI features?',
        },
        back: {
          answer: 'Primary panhypopituitarism with ectopic posterior pituitary: absent/thin pituitary stalk, small anterior pituitary, small sella, and ectopic T1-bright spot at the median eminence/tuber cinereum (not in the sella). Short stature + GH deficiency is the presenting complaint.',
          explanation: 'The posterior pituitary bright spot results from neurosecretory granules (ADH, oxytocin in phospholipid vesicles). When the pituitary infundibulum is disrupted (congenitally or by perinatal trauma/breech delivery), ADH transport is blocked and the neurosecretory material accumulates at the median eminence, creating an ectopic bright spot. The anterior pituitary (which relies on portal blood from the hypothalamus) also becomes hypoplastic.',
          keyFact: 'Ectopic posterior pituitary bright spot at tuber cinereum + small/absent anterior pituitary + thin/absent stalk = panhypopituitarism. Common in breech birth. The ectopic spot maintains ADH function (usually no DI) but the anterior pituitary hormones are deficient.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ectopic-posterior-pituitary',
          tags: ['sella', 'mri', 'pituitary', 'pediatric', 'congenital'],
        },
      },
    ],
  },
  {
    id: 'neuro-neurocutaneous',
    label: 'Neurocutaneous Syndromes',
    cards: [
      {
        id: 'neuro-neurocutaneous-001',
        front: {
          question: 'What are the diagnostic criteria and imaging findings of Neurofibromatosis Type 1 (NF1)?',
        },
        back: {
          answer: 'NF1 brain imaging: optic pathway gliomas (T2 bright, ± enhancement), UBOs (T2 bright, non-enhancing in basal ganglia/thalamus/cerebellum), sphenoid wing dysplasia (orbital pulsation from absent greater sphenoid wing), plexiform neurofibromas.',
          explanation: 'NF1 is the most common neurocutaneous syndrome (chromosome 17q11, neurofibromin). Diagnosis requires ≥2 of: ≥6 café-au-lait macules, ≥2 neurofibromas or 1 plexiform, axillary/inguinal freckling, optic glioma, ≥2 Lisch nodules, sphenoid wing dysplasia, affected first-degree relative. UBOs (unidentified bright objects) are T2-bright foci in basal ganglia/thalamus/cerebellum — not true tumors, resolve with age.',
          keyFact: 'NF1 = chromosome 17, neurofibromin tumor suppressor. UBOs are T2 bright, non-enhancing, no mass effect = hamartomatous not neoplastic. Optic pathway glioma: affects 15% of NF1 patients, usually pilocytic astrocytoma, may require treatment if vision-threatening. Sphenoid wing dysplasia = pulsating exophthalmos.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neurofibromatosis-type-1',
          tags: ['neurocutaneous', 'mri', 'nf1', 'glioma', 'optic'],
        },
      },
      {
        id: 'neuro-neurocutaneous-002',
        front: {
          question: 'What are the imaging features of Neurofibromatosis Type 2 (NF2) and what is the MISME acronym?',
        },
        back: {
          answer: 'NF2 (chromosome 22q, merlin/schwannomin): bilateral vestibular schwannomas (pathognomonic), multiple meningiomas, spinal ependymomas, other schwannomas (cranial/spinal nerves). MISME = Multiple Inherited Schwannomas, Meningiomas, Ependymomas.',
          explanation: 'NF2 is less common than NF1 (1:50,000 vs 1:3,000). Bilateral vestibular schwannomas (acoustic neuromas) are pathognomonic and usually present in the 2nd decade. MRI shows bilateral IAC masses with avid enhancement (ice cream cone or dumbbell shaped). Spinal ependymomas are the most common intramedullary tumor in NF2. Meningiomas are multiple and may be intracranial or spinal.',
          keyFact: 'NF2 = MISME. Bilateral vestibular schwannomas = DIAGNOSTIC. Chromosome 22 (2 sounds like 2 ears). NF2 should be considered in any young patient with vestibular schwannoma — contralateral IAC dedicated MRI is essential. Spinal ependymomas are the most common intramedullary tumor in NF2.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neurofibromatosis-type-2',
          tags: ['neurocutaneous', 'mri', 'nf2', 'schwannoma', 'bilateral'],
        },
      },
      {
        id: 'neuro-neurocutaneous-003',
        front: {
          question: 'What is von Hippel-Lindau (VHL) syndrome and what are its CNS and systemic manifestations?',
        },
        back: {
          answer: 'VHL (chromosome 3p, VHL gene): CNS hemangioblastomas (cerebellum, brainstem, spinal cord), retinal hemangioblastomas, clear cell renal cell carcinoma, pheochromocytoma, endolymphatic sac tumors, pancreatic cysts/tumors.',
          explanation: 'VHL is autosomal dominant. Multiple CNS hemangioblastomas or one with a VHL-associated visceral lesion confirms the diagnosis. Hemangioblastomas in VHL are multiple (40% of VHL patients) and present 10 years earlier than sporadic hemangioblastomas. Annual surveillance MRI (brain and spine) is recommended. Clear cell RCC is the leading cause of death.',
          keyFact: 'VHL diagnosis requires: multiple hemangioblastomas OR one hemangioblastoma + visceral lesion (RCC, pheo, pancreatic cyst). Chromosome 3p (3 letters = 3p). Most common VHL CNS finding: cerebellar hemangioblastoma. RCC is the most common cause of death in VHL.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/von-hippel-lindau-syndrome',
          tags: ['neurocutaneous', 'mri', 'vhl', 'hemangioblastoma', 'rcc'],
        },
      },
    ],
  },
  {
    id: 'neuro-metabolic',
    label: 'Metabolic & Toxic Brain Disease',
    cards: [
      {
        id: 'neuro-metabolic-001',
        front: {
          question: 'What are the MRI findings of hepatic encephalopathy and which brain structure shows T1 hyperintensity?',
        },
        back: {
          answer: 'Hepatic encephalopathy: bilateral T1 hyperintensity of the globus pallidus (and substantia nigra). Due to manganese deposition from portosystemic shunting. Also: cortical T2 changes in acute liver failure.',
          explanation: 'In chronic liver disease with portosystemic shunting, manganese (normally cleared by the liver) accumulates in the basal ganglia, particularly the globus pallidus, causing T1 hyperintensity on MRI. This finding is symmetric and bilateral, without enhancement. In acute liver failure, cortical diffusion restriction and T2 changes may be superimposed. Ammonia toxicity causes astrocyte swelling.',
          keyFact: 'Bilateral globus pallidus T1 bright = hepatic encephalopathy (manganese deposition). No enhancement. Improves with liver transplant or closure of portosystemic shunts. Other causes of bilateral GP T1 bright: NF1 (GP specifically), Japanese encephalitis, carbon monoxide poisoning.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatic-encephalopathy',
          tags: ['metabolic', 'mri', 'basal-ganglia', 'liver', 'manganese'],
        },
      },
      {
        id: 'neuro-metabolic-002',
        front: {
          question: 'What are the MRI features of carbon monoxide poisoning?',
        },
        back: {
          answer: 'CO poisoning: bilateral symmetric T2/FLAIR hyperintensity of the globus pallidus (most characteristic) ± white matter changes ± hippocampal involvement. Acute: DWI restriction in GP. Delayed neurological syndrome may develop 2-4 weeks later.',
          explanation: 'Carbon monoxide binds hemoglobin with 240x the affinity of oxygen, causing cellular hypoxia. The globus pallidus is the most sensitive structure due to its high metabolic demand. MRI changes may be subtle initially — SWI can show signal change. A "delayed neuropsychiatric syndrome" (dementia, personality change, parkinsonism) can develop days to weeks after apparent recovery, corresponding to white matter demyelination on MRI.',
          keyFact: 'CO poisoning = bilateral GP T2 bright on MRI (± DWI restriction acutely). "Delayed neuropsychiatric syndrome" = white matter changes on MRI 2-4 weeks later. Treat with 100% O2 or hyperbaric oxygen. Cyanide also causes GP involvement — can be indistinguishable.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/carbon-monoxide-poisoning-neurological-manifestations',
          tags: ['metabolic', 'mri', 'basal-ganglia', 'toxic', 'co-poisoning'],
        },
      },
      {
        id: 'neuro-metabolic-003',
        front: {
          question: 'What is methanol toxicity and its characteristic brain MRI findings?',
        },
        back: {
          answer: 'Methanol poisoning: bilateral symmetric T2/FLAIR hemorrhagic necrosis of the putamen. Also: optic nerve/chiasm involvement (→ blindness). CT: bilateral putaminal hypodensity or hemorrhage.',
          explanation: 'Methanol is metabolized to formaldehyde and formic acid, which preferentially damage the putamen and optic nerves. Bilateral putaminal necrosis is the imaging hallmark — it may be hemorrhagic (T1 bright on MRI, hyperdense on CT). Visual loss may precede or accompany neurological deterioration. Treatment: fomepizole (blocks alcohol dehydrogenase) + hemodialysis.',
          keyFact: 'Methanol = bilateral putaminal necrosis (T2 bright, may be hemorrhagic) + optic nerve involvement → blindness. Compare with CO (globus pallidus). "Met-put" = methanol affects putamen. CT: bilateral putamen hypodense (necrosis) or hyperdense (hemorrhagic necrosis).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/methanol-poisoning',
          tags: ['metabolic', 'mri', 'toxic', 'putamen', 'bilateral'],
        },
      },
    ],
  },
  {
    id: 'neuro-hn',
    label: 'Head & Neck — Clinical Cases',
    cards: [
  // ── CONGENITAL / DEVELOPMENTAL NECK MASSES ──────────────

  {
    id: 'neuro-hn-001',
    front: {
      question: 'A 40-year-old man has a well-circumscribed midline cystic neck mass embedded within the strap muscles, between the hyoid bone and thyroid cartilage. What is the diagnosis?',
      hint: 'Think embryologic descent of the thyroid primordium.',
    },
    back: {
      answer: 'Thyroglossal duct cyst (TGDC)',
      explanation: 'The thyroid primordium descends from the foramen cecum to its normal pre-laryngeal position by the 7th week of gestation, connected by the thyroglossal duct which normally involutes by weeks 8–10. Persistence of duct epithelium gives rise to a TGDC. The cyst is midline (or slightly off-midline) and closely related to the hyoid bone because the duct is intimately associated with it. On CT it appears as a well-circumscribed homogeneous low-attenuation mass; MRI shows T1 hypointense, T2 hyperintense signal.',
      keyFact: '65% of TGDCs are in the strap muscles just inferior to the hyoid; 15% are at the hyoid level. Any chunky calcifications or nodularity → think thyroid carcinoma arising in the cyst.',
      differentials: [
        { dx: 'Thyroglossal duct cyst' },
        { dx: 'Dermoid/epidermoid cyst' },
        { dx: 'Delphian lymph node' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/thyroglossal-duct-cyst',
      tags: ['ct', 'mri', 'neck', 'congenital', 'cyst'],
    },
  },

  {
    id: 'neuro-hn-002',
    front: {
      question: 'In 70–75% of patients with a lingual thyroid, what important anatomical fact must the radiologist report?',
    },
    back: {
      answer: 'Absence of a normal orthotopic thyroid gland in the thyroid bed',
      explanation: 'Ectopic lingual thyroid results from failure of the thyroid primordium to descend from the foramen cecum. It appears as a well-circumscribed midline mass at the base of the tongue, hyperdense on non-contrast CT (similar to normal thyroid), with avid enhancement and uptake on Tc-99m pertechnetate scan. In 70–75% of cases it represents the only functioning thyroid tissue.',
      keyFact: 'Always look at the thyroid bed when you see a hyperdense midline base-of-tongue mass — if empty, the lingual thyroid is the patient\'s only thyroid. Do NOT remove without this check.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/lingual-thyroid',
      tags: ['ct', 'nuclear-medicine', 'thyroid', 'congenital', 'base-of-tongue'],
    },
  },

  {
    id: 'neuro-hn-003',
    front: {
      question: 'A cystic well-circumscribed mass is seen along the anterior margin of the sternocleidomastoid muscle at the angle of the mandible. How does patient age change your leading diagnosis?',
    },
    back: {
      answer: 'Young patient → second branchial cleft cyst; older patient (>40–60) → necrotic SCC lymph node (HPV-related or otherwise)',
      explanation: 'Second branchial cleft cysts classically occur along the anteromedial border of the SCM at the level of the mandibular angle (level II). However, in patients over 40–60, a cystic-appearing mass at this location is a necrotic metastatic lymph node from SCC until proven otherwise — the primary is almost always the ipsilateral palatine tonsil or base of tongue. Even a lesion that looks like a simple cyst can be a met.',
      keyFact: 'Rule: cystic level-II neck mass in a patient >40 = necrotic SCC node (NOT a branchial cleft cyst) until proven otherwise. Any node with central necrosis = metastatic SCC regardless of size.',
      differentials: [
        { dx: 'Necrotic SCC lymph node (HPV-related)' },
        { dx: 'Second branchial cleft cyst' },
        { dx: 'Cystic schwannoma' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/second-branchial-cleft-cyst',
      tags: ['ct', 'neck', 'lymph-node', 'scc', 'branchial-cleft'],
    },
  },

  {
    id: 'neuro-hn-004',
    front: {
      question: 'What are the imaging hallmarks of a ranula, and what term is used when it extends below the mylohyoid muscle?',
    },
    back: {
      answer: 'Simple ranula: unilocular cyst in the sublingual space. When it herniates below the mylohyoid → "plunging ranula"',
      explanation: 'A ranula is a mucous retention cyst arising from the sublingual gland or space. Simple ranulas are confined above the mylohyoid (sublingual space); plunging ranulas extend through or around the posterior free margin of the mylohyoid into the submandibular or parapharyngeal space. They are typically lateral, thin-walled, and follow fluid signal (T2 bright, T1 dark). The key testable facts are sublingual gland origin and the term "plunging" once below the mylohyoid.',
      keyFact: 'Ranula = sublingual gland origin, lateral location. "Plunging" = below the mylohyoid muscle. Floor-of-mouth dermoid is midline with "sack of marbles" fat globules — don\'t confuse.',
      differentials: [
        { dx: 'Ranula (plunging)' },
        { dx: 'Dermoid/epidermoid cyst' },
        { dx: 'Submandibular gland cyst' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/ranula',
      tags: ['ct', 'mri', 'sublingual', 'cyst', 'floor-of-mouth'],
    },
  },

  // ── SALIVARY GLANDS ──────────────────────────────────────

  {
    id: 'neuro-hn-005',
    front: {
      question: 'Sialolithiasis occurs most commonly in which salivary gland, and why?',
    },
    back: {
      answer: 'Submandibular gland (80% of cases)',
      explanation: 'The submandibular gland has a wider duct lumen but a tighter orifice, lies in a dependent position, and its duct (Wharton\'s duct) follows an uphill course to drain at the sublingual papilla. These anatomical features, combined with more viscous, calcium-rich secretions, predispose it to calculus formation. 10–20% of submandibular sialoliths are not radiopaque on plain films; CT and ultrasound are the modalities of choice.',
      keyFact: 'Sialolithiasis mnemonic — "SMG gets stones" (80%). Chronic obstruction → acute enhancement/enlargement → later fatty atrophy. Calcifications can extend anywhere along the duct into the sublingual space.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/sialolithiasis',
      tags: ['ct', 'ultrasound', 'salivary-gland', 'submandibular', 'calculus'],
    },
  },

  {
    id: 'neuro-hn-006',
    front: {
      question: 'What are the salivary duct names for the parotid, submandibular, and sublingual glands?',
    },
    back: {
      answer: 'Parotid = Stensen\'s duct; Submandibular = Wharton\'s duct; Sublingual = Rivinus ducts',
      explanation: 'Stensen\'s duct opens opposite the upper second molar. Wharton\'s duct runs from the submandibular gland, curves around the posterior free edge of the mylohyoid, and drains into the sublingual papilla at the anterior floor of the mouth. The sublingual gland drains via multiple small Rivinus ducts (some join Wharton\'s duct as the duct of Bartholin).',
      keyFact: 'Memory trick: "Parotid = Stensen (S for Stensen, P for Parotid — they share nothing); Sub-mandibular = Wharton\'s; Sub-lingual = Rivinus."',
      radiopaediaUrl: 'https://radiopaedia.org/articles/parotid-gland',
      tags: ['anatomy', 'salivary-gland', 'duct', 'head-neck'],
    },
  },

  {
    id: 'neuro-hn-007',
    front: {
      question: 'What is the most common benign salivary gland tumor, and what are its characteristic MRI features?',
    },
    back: {
      answer: 'Pleomorphic adenoma (benign mixed tumor — BMT)',
      explanation: 'Pleomorphic adenoma accounts for 60–70% of parotid tumors and 90% occur in the superficial lobe. It is slow-growing, well-circumscribed, and arises in middle-aged patients with a slight female predominance. The hallmark MRI feature is markedly T2 hyperintense signal (as bright as or brighter than CSF) due to myxoid stroma. Patchy enhancement is typical. It displaces rather than invades adjacent structures.',
      keyFact: 'BMT key fact: T2 as bright as CSF + crosses stylomandibular tunnel (dumbbell shape). It has small malignant potential → surgical resection required. If spilled during surgery → ugly recurrence.',
      differentials: [
        { dx: 'Pleomorphic adenoma (BMT)' },
        { dx: 'Warthin tumor' },
        { dx: 'Mucoepidermoid carcinoma' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/pleomorphic-adenoma',
      tags: ['mri', 'parotid', 'salivary-gland', 'benign-tumor'],
    },
  },

  {
    id: 'neuro-hn-008',
    front: {
      question: 'What features distinguish Warthin tumor from pleomorphic adenoma of the parotid?',
    },
    back: {
      answer: 'Warthin tumor: cystic, bilateral (15%), occurs exclusively in the parotid, seen in male smokers, takes up Tc-99m pertechnetate',
      explanation: 'Warthin tumor (papillary cystadenoma lymphomatosum) is the second most common benign parotid tumor. Unlike pleomorphic adenoma (solid, usually unilateral), Warthin tumors are often cystic and may be bilateral in 15% of cases. They occur almost exclusively in the parotid (the only salivary gland with intraglandular lymph nodes) and are strongly associated with smoking. They uniquely take up Tc-99m pertechnetate, similar to thyroid tissue.',
      keyFact: 'Warthin = Wet (cystic), bilateral (15%), Male smoker, Tc-99m avid. The ONLY parotid tumor to take up pertechnetate (excluding the ultra-rare oncocytoma).',
      differentials: [
        { dx: 'Warthin tumor' },
        { dx: 'Pleomorphic adenoma' },
        { dx: 'Parotid lymph node' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/warthin-tumour',
      tags: ['mri', 'ct', 'parotid', 'salivary-gland', 'benign-tumor'],
    },
  },

  {
    id: 'neuro-hn-009',
    front: {
      question: 'What is the most common malignant tumor of the minor salivary glands, and what is the most important imaging feature of adenoid cystic carcinoma?',
    },
    back: {
      answer: 'Most common minor salivary gland malignancy: mucoepidermoid carcinoma. Key feature of adenoid cystic carcinoma: perineural spread.',
      explanation: 'The general rule in salivary gland tumors: the smaller the gland, the higher the proportion of malignant tumors. Mucoepidermoid carcinoma is the most common malignant tumor of minor salivary glands and also of the parotid. Adenoid cystic carcinoma strongly favors minor glands and is notorious for perineural spread along cranial nerve branches, which can extend intracranially along V3 or VII and may widen neural foramina.',
      keyFact: '"Adenoid cystic = perineural spread." Look for enhancement tracking along V3 into foramen ovale or along the facial nerve. Neural foramen widening on imaging should raise suspicion for schwannoma first, then adenoid cystic carcinoma.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/adenoid-cystic-carcinoma-of-the-salivary-glands',
      tags: ['mri', 'salivary-gland', 'malignancy', 'perineural-spread'],
    },
  },

  {
    id: 'neuro-hn-010',
    front: {
      question: 'Bilateral parotid enlargement with multiple cystic and solid lesions in a painless presentation should raise suspicion for which condition?',
    },
    back: {
      answer: 'Benign lymphoepithelial disease (BLED) — associated with HIV',
      explanation: 'Benign lymphoepithelial disease presents with bilateral diffusely enlarged parotid glands containing multiple mixed solid and cystic lesions. It is painless (unlike acute parotitis) and is strongly associated with HIV infection. Sjögren syndrome can also cause bilateral parotid involvement, appearing as a honeycombed gland, but is typically seen in women in their 60s and carries a markedly elevated risk (~1000×) of non-Hodgkin MALT lymphoma.',
      keyFact: 'Bilateral parotid cystic/solid masses, painless → HIV (BLED). Bilateral parotid + dry eyes/dry mouth + older woman → Sjögren (risk of MALT lymphoma). Bilateral parotid lymphoma → think Sjögren.',
      differentials: [
        { dx: 'Benign lymphoepithelial disease (HIV)' },
        { dx: 'Sjögren syndrome' },
        { dx: 'Sarcoidosis' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/hiv-parotid-disease',
      tags: ['ct', 'mri', 'parotid', 'hiv', 'sjogren'],
    },
  },

  // ── DEEP NECK SPACES ─────────────────────────────────────

  {
    id: 'neuro-hn-011',
    front: {
      question: 'What are the contents of the parotid space, and what is the imaging landmark that divides the superficial from deep lobe of the parotid gland?',
    },
    back: {
      answer: 'Contents: parotid gland, CN VII (facial nerve), retromandibular vein. Superficial/deep division: the retromandibular vein (which runs just medial to the facial nerve)',
      explanation: 'The parotid space contains the parotid gland, CN VII, and the retromandibular vein. The facial nerve itself is not directly visible on imaging, but the retromandibular vein is a reliable surrogate — it runs just medial to the nerve. A line connecting the lateral surface of the posterior belly of the digastric and the lateral mandibular ramus separates superficial (lateral to CN VII) from deep (medial to CN VII) lobe; 90% of pleomorphic adenomas arise in the superficial lobe. The parotid is the only salivary gland with intraglandular lymph nodes.',
      keyFact: 'Retromandibular vein = surrogate marker for CN VII in the parotid. Parotid Mass Pushes parapharyngeal fat Medially (PMPM mnemonic).',
      radiopaediaUrl: 'https://radiopaedia.org/articles/parotid-space',
      tags: ['anatomy', 'parotid', 'cn7', 'deep-neck-space'],
    },
  },

  {
    id: 'neuro-hn-012',
    front: {
      question: 'What are the contents of the parapharyngeal space, and which direction does a parotid mass displace the parapharyngeal fat?',
    },
    back: {
      answer: 'Contents: fat, branches of CN V3 (trigeminal), pterygoid veins. Parotid mass → medial displacement of parapharyngeal fat.',
      explanation: 'The parapharyngeal space (PPS; also called "pre-styloid" PPS) is primarily a fat-filled space with branches of V3 and pterygoid venous plexus. It acts as a crossroads surrounded by other spaces. The direction of parapharyngeal fat displacement identifies the space of origin: parotid → medial; masticator → posteromedial; carotid → anterior; superficial mucosal space → lateral.',
      keyFact: 'Parapharyngeal fat displacement map: Parotid Mass Pushes Medially (PMPM). Carotid space = anterior. Masticator space = posterior-medial. Superficial mucosal space = lateral.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/parapharyngeal-space',
      tags: ['anatomy', 'deep-neck-space', 'parapharyngeal', 'ct'],
    },
  },

  {
    id: 'neuro-hn-013',
    front: {
      question: 'What are the contents of the carotid space, and what are the three classic tumors that arise there?',
    },
    back: {
      answer: 'Contents: carotid artery, internal jugular vein, CN IX, CN X, CN XI, internal jugular chain lymph nodes. Classic tumors: (1) paraganglioma, (2) schwannoma, (3) neurofibroma.',
      explanation: 'The carotid space (also called "post-styloid" or "retro-styloid" parapharyngeal space) runs from the skull base to the aortic arch. Carotid space masses displace the parapharyngeal fat anteriorly. Paragangliomas are hypervascular with salt-and-pepper MRI appearance. Schwannomas enhance intensely but are considered hypovascular (enhancement from extravascular leakage). Neurofibromas show a T2 target sign (bright rim, dark center) and are NF-1 associated.',
      keyFact: 'Carotid space mass → anterior parapharyngeal fat displacement. Three tumors: Para-Salt-Neuro. Schwannoma vs. paraganglioma: schwannoma is avascular on angio (no tumor blush); paraganglioma has intense tumor blush.',
      differentials: [
        { dx: 'Paraganglioma (glomus vagale)' },
        { dx: 'Schwannoma (vagal)' },
        { dx: 'Neurofibroma' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/carotid-space',
      tags: ['anatomy', 'deep-neck-space', 'carotid-space', 'paraganglioma'],
    },
  },

  {
    id: 'neuro-hn-014',
    front: {
      question: 'What are the contents of the masticator space, and what is the most common mass lesion there in an adult?',
    },
    back: {
      answer: 'Contents: muscles of mastication (masseter, temporalis, medial and lateral pterygoids), mandibular ramus/angle, inferior alveolar nerve (V3 branch). Most common adult mass: odontogenic abscess.',
      explanation: 'The masticator space extends superiorly along the temporalis muscle to the infratemporal fossa and skull base, which is a key route for aggressive spread of infection or neoplasm. On imaging, masticator space masses displace the parapharyngeal fat posteriorly and medially. In adults, the most common pathology is odontogenic abscess; other lesions include sarcomas (children), nerve sheath tumors of V3, and perineural spread from head and neck malignancies.',
      keyFact: 'Masticator space: "muscles + mandibular ramus + V3." Adult mass = odontogenic abscess first. Masticator mass displaces PPF posterior-medially. Perineural spread along V3 = think adenoid cystic carcinoma or melanoma.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/masticator-space',
      tags: ['anatomy', 'deep-neck-space', 'masticator', 'infection'],
    },
  },

  {
    id: 'neuro-hn-015',
    front: {
      question: 'A retropharyngeal abscess is dangerous because of its relationship to which space, and where can infection spread?',
    },
    back: {
      answer: 'The danger space lies immediately posterior to the retropharyngeal space; infection can spread inferiorly through the danger space into the mediastinum.',
      explanation: 'The retropharyngeal space is a midline space deep to the oral and nasal pharynx extending from the skull base to about C6–C7. The alar fascia separates the true retropharyngeal space anteriorly from the danger space posteriorly. The danger space extends from the skull base all the way into the posterior mediastinum, making descending necrotizing mediastinitis a feared complication. Most retropharyngeal infections spread from tonsillar tissue.',
      keyFact: 'Danger space = potential route to mediastinum. Retropharyngeal abscess: midline, centrally low density, must evaluate for mediastinal extension on CT. Contrast with longus colli tendinitis: non-enhancing lenticular effusion + amorphous calcification anterior to C1-C2.',
      differentials: [
        { dx: 'Retropharyngeal abscess' },
        { dx: 'Longus colli tendinitis (calcific tendinitis)' },
        { dx: 'Suppurative nodes of Rouvière' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/retropharyngeal-abscess',
      tags: ['ct', 'deep-neck-space', 'infection', 'retropharyngeal'],
    },
  },

  {
    id: 'neuro-hn-016',
    front: {
      question: 'What is the classic CT/MRI appearance of longus colli tendinitis, and what is the clinical triad?',
    },
    back: {
      answer: 'CT: amorphous calcium hydroxyapatite deposits anterior to C1-C2 + non-enhancing lenticular prevertebral fluid collection. Clinical triad: acute neck pain, odynophagia, low-grade fever.',
      explanation: 'Acute longus colli (retropharyngeal) tendinitis results from calcium hydroxyapatite deposition in the superior oblique fibers of the longus colli, which lie inferior to the anterior arch of C1. The calcification coupled with a smooth, non-enhancing prevertebral effusion is nearly pathognomonic. The absence of rim enhancement (unlike an abscess) is the critical distinguishing feature.',
      keyFact: 'Key differentiator: longus colli tendinitis → non-enhancing effusion + calcification anterior to C1-C2. Retropharyngeal abscess → rim-enhancing collection, usually no calcification. Non-enhancement = benign fluid, not pus.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/longus-colli-tendinitis',
      tags: ['ct', 'prevertebral', 'calcification', 'tendinitis', 'neck'],
    },
  },

  // ── PARAGANGLIOMAS ───────────────────────────────────────

  {
    id: 'neuro-hn-017',
    front: {
      question: 'What are the four types of head and neck paragangliomas, and how are they distinguished by location?',
    },
    back: {
      answer: 'Carotid body tumor (carotid bifurcation, splays ICA/ECA); glomus vagale (carotid space, ~2 cm below jugular foramen); glomus jugulare (jugular foramen, destroys middle ear floor); glomus tympanicum (cochlear promontory, middle ear floor intact)',
      explanation: 'All four are histologically identical paragangliomas but named by location. Carotid body tumors splay the ICA and ECA on angiography. Glomus vagale tumors are in the high carotid space. Glomus jugulare erodes the jugular foramen and floor of the middle ear. Glomus tympanicum is confined to the cochlear promontory. All are hypervascular with salt-and-pepper T1/T2 MRI appearance (flow voids = pepper; subacute hemorrhage = salt) in lesions >2 cm.',
      keyFact: 'Location = name: Bifurcation=carotid body; 2cm below skull base=vagale; At jugular foramen + middle ear floor destroyed=jugulare; Middle ear floor intact=tympanicum. Middle ear floor status is the key CT discriminator between jugulare and tympanicum.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/paraganglioma-of-the-head-and-neck',
      tags: ['ct', 'mri', 'paraganglioma', 'carotid-space', 'skull-base'],
    },
  },

  {
    id: 'neuro-hn-018',
    front: {
      question: 'What genetic syndromes are associated with multiple or bilateral paragangliomas, and what nuclear medicine agent targets them?',
    },
    back: {
      answer: 'Syndromes: Von Hippel-Lindau, NF-1, MEN 2A/2B, and familial paraganglioma syndromes (SDH mutations). Nuclear agent: In-111 octreotide (somatostatin analog). Also FDG-PET avid.',
      explanation: 'Sporadic paragangliomas are multicentric in 2–10% of cases; in familial cases, 25–75% are multiple. Look for bilateral carotid body tumors, contralateral carotid bifurcation lesions, or synchronous glomus jugulare/tympanicum lesions. Paragangliomas express somatostatin receptors, allowing octreotide scintigraphy for detection. They are also FDG-PET avid. The most common presenting symptom is hoarseness from vagal nerve involvement.',
      keyFact: 'Multiple/bilateral paragangliomas → hereditary syndrome (VHL, NF-1, MEN2, SDH mutations). 40% of all paragangliomas are hereditary. Octreotide scan or FDG-PET for staging multifocal disease.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/paraganglioma-of-the-head-and-neck',
      tags: ['mri', 'nuclear-medicine', 'paraganglioma', 'vhl', 'hereditary'],
    },
  },

  // ── VOCAL CORD / LARYNX ──────────────────────────────────

  {
    id: 'neuro-hn-019',
    front: {
      question: 'What constellation of CT findings indicates vocal cord paralysis on the affected side?',
    },
    back: {
      answer: 'Paramedian cord position, ballooning (dilation) of the ipsilateral laryngeal ventricle (spinnaker sail sign), anteromedial rotation of the arytenoid, thickened/medialized aryepiglottic fold, enlarged ipsilateral pyriform sinus, ± posterior cricoarytenoid muscle atrophy.',
      explanation: 'Vocal cord paralysis (VCP) results from dysfunction of CN X or the recurrent laryngeal nerve (RLN). The right RLN loops around the subclavian artery; the left RLN loops around the aortic arch at the aortopulmonary window. A key imaging task is tracing the nerve from brainstem to larynx looking for causative lesions. The ipsilateral laryngeal ventricle dilates (spinnaker sail sign on axial CT) as the primary sign of cord paralysis.',
      keyFact: 'Spinnaker sail sign = ipsilateral dilated laryngeal ventricle = VCP. Left-sided VCP → scan the chest to the AP window. Right-sided VCP → scan to the right subclavian. VCP + ipsilateral pyriform sinus dilation = classic.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/vocal-cord-palsy',
      tags: ['ct', 'larynx', 'vocal-cord', 'cranial-nerve', 'cn10'],
    },
  },

  {
    id: 'neuro-hn-020',
    front: {
      question: 'How are laryngeal cancers subdivided, and which subtype has the best prognosis and why?',
    },
    back: {
      answer: 'Supraglottic, glottic, and subglottic. Glottic (true vocal cord) has the best prognosis because it has a sparse lymphatic supply, causing late nodal metastasis.',
      explanation: 'Supraglottic tumors are more aggressive (early nodal mets, rich lymphatics in pre-epiglottic fat) and don\'t cause hoarseness until late. Glottic tumors arise at the true cords, present with early hoarseness, and metastasize late. Subglottic tumors are least common, often small compared to nodal burden, and can have bilateral nodal disease. Invasion of the cricoid cartilage is a contraindication to conservation laryngeal surgery. Anterior commissure soft tissue >2 mm suggests glottic involvement.',
      keyFact: 'Glottic = best prognosis (sparse lymphatics, early hoarseness = early detection). Supraglottic = worst (early mets, no hoarseness). Cricoid invasion = contraindication to partial laryngectomy.',
      differentials: [
        { dx: 'Glottic SCC' },
        { dx: 'Supraglottic SCC' },
        { dx: 'Subglottic SCC' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/laryngeal-squamous-cell-carcinoma',
      tags: ['ct', 'mri', 'larynx', 'scc', 'staging'],
    },
  },

  {
    id: 'neuro-hn-021',
    front: {
      question: 'What is a laryngocele, and what is the most common cause of saccular dilation?',
    },
    back: {
      answer: 'Dilation of the laryngeal saccule (appendix of the laryngeal ventricle). Most common cause: 15% are due to an underlying laryngeal tumor causing obstruction.',
      explanation: 'The laryngeal saccule is the blind-ending appendix of the laryngeal ventricle extending anterosuperiorly. When dilated with air it is called a laryngocele; with fluid it may still be called a laryngocele or a saccular cyst. When infected, it is a laryngopyocele. Internal laryngoceles remain within the thyrohyoid membrane; external types herniate through it. The key clinical point is that 15% are caused by an underlying laryngeal tumor obstructing the saccule neck.',
      keyFact: '15% of laryngoceles are caused by an underlying laryngeal carcinoma. Always look for a mass at the saccule neck when you see a laryngocele. Internal = inside thyrohyoid membrane; external = herniates through it.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/laryngocele',
      tags: ['ct', 'larynx', 'cyst', 'laryngocele', 'scc'],
    },
  },

  // ── LYMPH NODES ──────────────────────────────────────────

  {
    id: 'neuro-hn-022',
    front: {
      question: 'What are the cervical lymph node levels I through VII, and which level is separated by the jugular vein (spinal accessory nerve) into 2A and 2B?',
    },
    back: {
      answer: 'Level I: submental (IA) and submandibular (IB); II: upper internal jugular (IIA = abutting/anterior to IJV, IIB = posterior with fat plane); III: mid jugular; IV: lower jugular; V: posterior triangle; VI: anterior compartment; VII: superior mediastinal. The IJV (= spinal accessory nerve) separates IIA from IIB.',
      explanation: 'Key anatomical borders: anterior belly of digastric separates IA from IB; stylohyoid muscle separates IB from IIA; lower hyoid separates II from III; lower cricoid separates III from IV. Level IIA nodes abut or are anterior/medial/lateral to the internal jugular vein; IIB nodes are posterior to the IJV with a fat plane between them.',
      keyFact: 'Level separators: Digastric (IA/IB), Stylohyoid (IB/IIA), IJV/spinal accessory (IIA/IIB), hyoid (II/III), cricoid (III/IV). HPV-SCC → necrotic level IIA node; Nasopharyngeal SCC → retropharyngeal nodes first.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/cervical-lymph-node-levels',
      tags: ['anatomy', 'lymph-node', 'neck', 'nodal-levels'],
    },
  },

  {
    id: 'neuro-hn-023',
    front: {
      question: 'What imaging features of a cervical lymph node indicate extracapsular spread, and why is this clinically significant?',
    },
    back: {
      answer: 'Irregular/indistinct nodal margins with infiltration into adjacent fat/structures, loss of fat plane between node and carotid artery. Significance: reduces prognosis by ~50%.',
      explanation: 'Extracapsular spread (ECS) is defined radiologically as irregular or hazy nodal borders with infiltration of adjacent structures. Loss of the fat plane between a suspicious node and the carotid artery, and the degree of tumor circumferentially surrounding the arterial wall, indicates carotid invasion. Any node with central necrosis is considered metastatic from SCC regardless of size. ECS is a critical staging finding that changes surgical and treatment planning.',
      keyFact: 'Any necrotic node = SCC met (regardless of size). Irregular border + hazy fat = extracapsular spread = 50% worse prognosis. >270° carotid encasement = carotid invasion (unresectable).',
      radiopaediaUrl: 'https://radiopaedia.org/articles/cervical-lymph-node-metastasis',
      tags: ['ct', 'mri', 'lymph-node', 'scc', 'extracapsular-spread'],
    },
  },

  {
    id: 'neuro-hn-024',
    front: {
      question: 'What is the most common location of nasopharyngeal SCC, what are the earliest imaging signs, and what nodal level is first involved?',
    },
    back: {
      answer: 'Most common location: fossa of Rosenmüller. Earliest sign: effacement of fat in the fossa of Rosenmüller. First nodal involvement: retropharyngeal nodes.',
      explanation: 'Nasopharyngeal carcinoma (NPC) has a bimodal age distribution (15–30 years Chinese/Asian, and >40 years) and is EBV-associated. The fossa of Rosenmüller (lateral pharyngeal recess) is the most common primary site. Effacement of the normally present fat pad there is the earliest imaging sign. Unilateral mastoid effusion should prompt careful evaluation of the fossa of Rosenmüller. Skull base erosion occurs in ~30% of cases; MRI > CT for assessing marrow invasion (loss of T1 bright marrow signal in the clivus).',
      keyFact: 'NPC triad: fossa of Rosenmüller → retropharyngeal nodes → bilateral neck nodes. Unilateral mastoid effusion in an adult = look at the fossa of Rosenmüller (Eustachian tube obstruction). Nodal mets in 90% at presentation.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/nasopharyngeal-carcinoma',
      tags: ['mri', 'ct', 'nasopharynx', 'scc', 'skull-base'],
    },
  },

  // ── TEMPORAL BONE ────────────────────────────────────────

  {
    id: 'neuro-hn-025',
    front: {
      question: 'What are the three middle ear compartments, and what is the "attic"?',
    },
    back: {
      answer: 'Epitympanum (attic) = above the scutum; mesotympanum = directly behind the eardrum; hypotympanum = below the tympanic membrane, where the Eustachian tube arises.',
      explanation: 'The middle ear has three vertical subdivisions based on the tympanic membrane and scutum. The epitympanum ("attic") is everything above the tip of the scutum and is where acquired cholesteatomas from pars flaccida most often grow, entering Prussak\'s space. The mesotympanum is the region directly behind the eardrum. The hypotympanum is below the tympanic membrane and is where the Eustachian tube opens.',
      keyFact: 'Attic = epitympanum. Pars flaccida cholesteatoma → attic/Prussak\'s space → scutum erosion first. Pars tensa cholesteatoma is less common and involves inner ear structures earlier.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/middle-ear',
      tags: ['ct', 'temporal-bone', 'middle-ear', 'anatomy'],
    },
  },

  {
    id: 'neuro-hn-026',
    front: {
      question: 'What are the CT and MRI features of an acquired cholesteatoma, and what is the most commonly eroded ossicle?',
    },
    back: {
      answer: 'CT: non-dependent soft tissue mass in the epitympanum/Prussak\'s space with scutum erosion; MRI: T1 dark, T2 bright, restricted diffusion (DWI). Most commonly eroded ossicle: long process of the incus.',
      explanation: 'Acquired cholesteatoma is exfoliated epithelial debris growing in the wrong place. Pars flaccida type (more common) grows through a perforation into Prussak\'s space (between the incus and the lateral tympanic bone). The scutum is eroded early — a very specific sign of acquired cholesteatoma. The malleus head is displaced medially. On DWI, cholesteatoma restricts diffusion, which is the key MRI distinguishing feature from other middle ear opacities.',
      keyFact: 'Cholesteatoma = T1 dark, T2 bright, RESTRICTS diffusion. Scutum erosion = first and most specific CT sign. Long process of incus = most commonly eroded ossicle. Labyrinthine fistula most commonly involves the lateral semicircular canal.',
      differentials: [
        { dx: 'Acquired cholesteatoma' },
        { dx: 'Chronic otitis media' },
        { dx: 'Congenital cholesteatoma' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/cholesteatoma',
      tags: ['ct', 'mri', 'temporal-bone', 'cholesteatoma', 'dwi'],
    },
  },

  {
    id: 'neuro-hn-027',
    front: {
      question: 'How do you distinguish cholesterol granuloma from cholesteatoma of the petrous apex on MRI?',
    },
    back: {
      answer: 'Cholesterol granuloma: T1 bright AND T2 bright, does NOT restrict diffusion. Cholesteatoma: T1 dark, T2 bright, RESTRICTS diffusion.',
      explanation: 'Both lesions cause smooth expansile bony change and can be similar on CT. The MRI distinction is critical: cholesterol granuloma contains chronic blood products (methemoglobin) making it T1 bright; cholesteatoma lacks these products and is T1 dark. Both are T2 bright. DWI is the key differentiator — cholesteatoma restricts, cholesterol granuloma does not. Cholesterol granuloma is the most common primary petrous apex lesion.',
      keyFact: 'Memory: CG (Cholesterol Granuloma) = Glowing on T1 (T1 AND T2 bright, no restriction). Cholesteatoma = T1 Dark + restricts. Both cause smooth expansile bony change on CT.',
      differentials: [
        { dx: 'Cholesterol granuloma' },
        { dx: 'Congenital cholesteatoma (petrous apex)' },
        { dx: 'Mucocele' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/cholesterol-granuloma-of-the-petrous-apex',
      tags: ['mri', 'temporal-bone', 'petrous-apex', 'dwi'],
    },
  },

  {
    id: 'neuro-hn-028',
    front: {
      question: 'What is otosclerosis (otospongiosis), and what are its two forms with their characteristic locations and hearing loss types?',
    },
    back: {
      answer: 'Fenestral otosclerosis: hypodense plaque at the fissula ante fenestram (anterior to oval window) → conductive hearing loss. Retrofenestral (cochlear): demineralization surrounding the cochlea → mixed hearing loss.',
      explanation: 'Otosclerosis (better termed otospongiosis) involves replacement of normal dense endochondral otic capsule bone with vascular spongy bone. The fissula ante fenestram is the pathognomonic site for fenestral disease, causing stapes fixation to the oval window. Retrofenestral disease is more severe and almost always coexists with fenestral disease. It is bilateral in 80% and presents in the 2nd–3rd decade. The otic capsule normally appears as the densest bone in the body — any lucency there is abnormal.',
      keyFact: 'Fenestral otosclerosis = hypodense plaque at fissula ante fenestram (anterior to oval window) = pathognomonic. Bilateral 80% of the time. Retrofenestral = cochlear demineralization = sensorineural component added. Otic capsule should always be the brightest bone on CT.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/otosclerosis',
      tags: ['ct', 'temporal-bone', 'hearing-loss', 'otosclerosis'],
    },
  },

  {
    id: 'neuro-hn-029',
    front: {
      question: 'What is the most common cause of congenital sensorineural hearing loss on imaging, and what is the diagnostic threshold?',
    },
    back: {
      answer: 'Large endolymphatic sac anomaly (LESA) / large vestibular aqueduct syndrome (LVAS). Diagnostic threshold: vestibular aqueduct diameter >1.5 mm on CT midway between the crus communis and intracranial aperture.',
      explanation: 'LESA results from arrested development at the 7th gestational week, causing enlargement of the endolymphatic duct and sac. On MRI it appears as an enlarged endolymphatic sac (T2 bright); on CT there is a corresponding enlarged bony vestibular aqueduct. The vestibular aqueduct should never be larger than the adjacent posterior semicircular canal. The classic clinical scenario is progressive SNHL in a child or young adult exacerbated by minor head trauma (fragile cochlea). It is bilateral in most cases and associated with absence of the cochlear modiolus (>90%).',
      keyFact: 'LESA/LVAS: vestibular aqueduct >1.5 mm = abnormal. Classic: progressive SNHL in child worsened by minor trauma. Most common congenital inner ear anomaly on imaging. Association with cochlear modiolus absence (>90%).',
      radiopaediaUrl: 'https://radiopaedia.org/articles/large-vestibular-aqueduct',
      tags: ['ct', 'mri', 'temporal-bone', 'inner-ear', 'hearing-loss', 'congenital'],
    },
  },

  {
    id: 'neuro-hn-030',
    front: {
      question: 'What is superior semicircular canal dehiscence, and what are its clinical manifestations?',
    },
    back: {
      answer: 'Absence/extreme thinning of the bony roof over the superior semicircular canal, creating a "third mobile window." Manifests as Tullio phenomenon (vertigo/nystagmus induced by loud sounds) and sound/pressure-induced vestibular symptoms.',
      explanation: 'Superior semicircular canal dehiscence (SSCD) is best demonstrated on high-resolution CT of the temporal bones in the coronal and Poschl (short-axis, perpendicular to the petrous ridge) planes; a dehiscence ≥2 mm is diagnostic. The third mobile window allows abnormal pressure transmission into the inner ear. Associated thinning of the tegmen tympani may be present. Radiological findings may be present without clinical symptoms (similar to degenerative spine disease).',
      keyFact: 'SSCD: coronal and Poschl CT planes are essential. Dehiscence ≥2 mm. Tullio phenomenon = vertigo/nystagmus with loud noises. Can cause apparent conductive hearing loss despite normal ossicles. "Third window" = the key pathophysiology.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/superior-semicircular-canal-dehiscence',
      tags: ['ct', 'temporal-bone', 'semicircular-canal', 'dehiscence'],
    },
  },

  {
    id: 'neuro-hn-031',
    front: {
      question: 'What are the six segments of the facial nerve (CN VII), and which segments can normally enhance on MRI?',
    },
    back: {
      answer: 'Segments: (1) intracranial/cisternal, (2) meatal/canalicular (IAC), (3) labyrinthine (IAC to geniculate ganglion), (4) tympanic (GG to pyramidal eminence), (5) mastoid (pyramidal eminence to stylomastoid foramen), (6) extratemporal. Normal enhancement: tympanic, mastoid, and geniculate ganglion segments (and sometimes labyrinthine). NO normal enhancement: cisternal, canalicular, extratemporal.',
      explanation: 'The facial nerve exits the stylomastoid foramen and divides in the parotid. The anterior genu is where the nerve makes its turn at the geniculate ganglion on axial CT. Abnormal enhancement in the cisternal or canalicular segment is the classic finding in Bell\'s palsy. In Ramsay Hunt syndrome (herpes zoster reactivation), CN V is usually also involved. Nodular enhancement suggests tumor (schwannoma or malignancy) rather than inflammatory enhancement.',
      keyFact: 'Normal CN7 enhancement: Tympanic + Mastoid + Geniculate ganglion. Abnormal: Cisternal + Canalicular + Extratemporal. Bell\'s palsy → abnormal canalicular segment enhancement. Nodular enhancement → think tumor. T-bone fracture → transverse > longitudinal for facial nerve damage.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/facial-nerve',
      tags: ['mri', 'temporal-bone', 'cn7', 'facial-nerve'],
    },
  },

  {
    id: 'neuro-hn-032',
    front: {
      question: 'What are the differences between longitudinal and transverse temporal bone fractures?',
    },
    back: {
      answer: 'Longitudinal: along the long axis, more common, more ossicular dislocation, less facial nerve damage (~20%), more conductive hearing loss. Transverse: crosses the short axis, less common, more vascular injury, more facial nerve damage (>30%), more SNHL.',
      explanation: 'Longitudinal fractures run parallel to the long axis of the petrous bone and account for the majority of temporal bone fractures. They preferentially disrupt the ossicular chain and cause conductive hearing loss. Transverse fractures are less common but more likely to violate the otic capsule (otic capsule-violating fractures have a worse prognosis for hearing and facial nerve function). The otic capsule violation status is more clinically predictive than the fracture orientation itself.',
      keyFact: 'Otic capsule violation = worst prognostic finding in temporal bone fractures (overrides longitudinal vs. transverse classification). Transverse fractures: more facial nerve palsy (>30%), more SNHL. Longitudinal: more conductive loss, ossicular dislocation.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/temporal-bone-fracture',
      tags: ['ct', 'temporal-bone', 'fracture', 'trauma'],
    },
  },

  {
    id: 'neuro-hn-033',
    front: {
      question: 'What is necrotizing (malignant) otitis externa, who gets it, and what is the causative organism?',
    },
    back: {
      answer: 'Aggressive infection of the external auditory canal spreading to the skull base. Patient: diabetic (95%). Causative organism: Pseudomonas aeruginosa (98%).',
      explanation: 'Necrotizing otitis externa (NOE) begins in the EAC and spreads to the soft tissues and skull base via the fissures of Santorini. CT shows EAC soft tissue swelling and adjacent bony destruction. MRI is better for evaluating intracranial complications (osteomyelitis, venous sinus thrombosis, meningitis). It may involve CN VII at the stylomastoid foramen causing facial nerve palsy. Distinguishing NOE from exostosis: exostosis is bilateral, bone-density, in surfers/swimmers without diabetes.',
      keyFact: 'NOE = Diabetic + Pseudomonas (98%) + bone destruction. CT for bony involvement, MRI for soft tissue/intracranial extension. EAC exostosis (surfer\'s ear) = bilateral, chronic cold water exposure, immunocompetent — do not confuse.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/malignant-necrotizing-otitis-externa',
      tags: ['ct', 'mri', 'temporal-bone', 'infection', 'external-ear'],
    },
  },

  {
    id: 'neuro-hn-034',
    front: {
      question: 'What is Gradenigo syndrome, and what is the anatomy of Dorello\'s canal?',
    },
    back: {
      answer: 'Gradenigo syndrome: triad of otomastoiditis + facial pain (trigeminal neuropathy) + lateral rectus palsy (CN VI). Dorello\'s canal: the most medial point of the petrous ridge between the pontine cistern and cavernous sinus — where CN VI is vulnerable.',
      explanation: 'Apical petrositis is a rare complication of otomastoiditis/mastoid surgery. When infection involves the petrous apex, it can involve Dorello\'s canal where CN VI runs, causing lateral rectus palsy. The triad (otomastoiditis + trigeminal pain + abducens palsy) = Gradenigo syndrome. Complications of untreated apical petrositis include skull base osteomyelitis, ICA vasospasm, venous sinus thrombosis, and descending mediastinitis.',
      keyFact: 'Gradenigo = Otomastoiditis + Facial pain (V) + Lateral rectus palsy (CN VI) from Dorello\'s canal involvement. CN VI is the longest intracranial course nerve → most vulnerable to apical petrositis.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/gradenigo-syndrome',
      tags: ['ct', 'mri', 'petrous-apex', 'cn6', 'skull-base', 'infection'],
    },
  },

  {
    id: 'neuro-hn-035',
    front: {
      question: 'What is the most common CPA (cerebellopontine angle) mass, and what MRI feature helps determine surgical approach?',
    },
    back: {
      answer: 'Most common CPA mass: vestibular schwannoma (80–90%). A fundal cap of CSF ≥2 mm between the lateral tumor margin and the cochlear canal enables a hearing-preservation surgical approach.',
      explanation: 'Vestibular schwannomas arise most commonly from the inferior vestibular division of CN VIII near the Obersteiner-Redlich zone (transition from central glial to peripheral Schwann cells). When small they conform to the IAC ("ice cream cone" appearance when they extend into the CPA). They are isointense to brain on T1, hyperintense on T2, with intense enhancement. Bilateral vestibular schwannomas are pathognomonic for NF-2 (MISME: Multiple Intracranial Schwannomas, Meningiomas, and Ependymomas).',
      keyFact: 'Fundal cap ≥2 mm CSF = hearing preservation surgery possible. Ice cream cone shape = schwannoma extending from IAC into CPA. Bilateral vestibular schwannomas = NF-2 (MISME). NF-2 also causes meningiomas, ependymomas, and ocular changes.',
      differentials: [
        { dx: 'Vestibular schwannoma' },
        { dx: 'Meningioma' },
        { dx: 'Epidermoid' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/vestibular-schwannoma',
      tags: ['mri', 'cpa', 'schwannoma', 'cn8', 'nf2'],
    },
  },

  // ── SKULL BASE & SINUSES ─────────────────────────────────

  {
    id: 'neuro-hn-036',
    front: {
      question: 'What cranial nerves pass through the following foramina: foramen ovale, foramen rotundum, jugular foramen, hypoglossal canal?',
    },
    back: {
      answer: 'Foramen ovale: CN V3 (mandibular). Foramen rotundum: CN V2 (maxillary). Jugular foramen: CN IX, X, XI. Hypoglossal canal: CN XII.',
      explanation: 'Skull base foraminal anatomy is one of the most highly tested topics on boards. Additional key foramina: superior orbital fissure (CN III, IV, V1, VI); internal auditory canal (CN VII, VIII); stylomastoid foramen (CN VII exit); foramen lacerum (no major nerve but ICA passes through). Perineural spread along V3 to foramen ovale or V2 to foramen rotundum is a key finding in adenoid cystic carcinoma and should be specifically sought on MRI.',
      keyFact: 'Mnemonic for jugular foramen: "Golf Club Joint" = CN IX (Glossopharyngeal), CN X (vaguS/Swallowing), CN XI (Spinal accessory). Foramen ovale = V3 (think "O" for Oral/mandibular). Foramen rotundum = V2 (think "R" for Round = maxiRRary).',
      radiopaediaUrl: 'https://radiopaedia.org/articles/skull-base-foramina-and-their-contents',
      tags: ['anatomy', 'skull-base', 'cranial-nerve', 'foramen'],
    },
  },

  {
    id: 'neuro-hn-037',
    front: {
      question: 'What are the essential elements that define each LeFort fracture type, and what structure is common to all three?',
    },
    back: {
      answer: 'All LeFort types include pterygoid process fracture. LeFort 1: lateral nasal aperture ("floating palate"). LeFort 2: inferior orbital rim and orbital floor ("pyramidal"). LeFort 3: zygomatic arch and lateral orbital rim/wall ("craniofacial dissociation/separated face").',
      explanation: 'The pterygoid process must be fractured for any LeFort classification. LeFort 1 is the most inferior, separating the palate from the maxilla. LeFort 2 separates the maxilla from the face in a pyramidal pattern. LeFort 3 (craniofacial dissociation) separates the entire face from the cranium and involves the zygomatic arches. Facial fractures can disrupt the frontal sinus outflow tract, leading to mucocele formation (buzzword: "expanded, airless sinus").',
      keyFact: 'All LeForts = pterygoid process fracture. Without pterygoid involvement → it\'s not a LeFort. Unique features: LeFort 1 = lateral nasal aperture; LeFort 2 = orbital floor/rim; LeFort 3 = zygomatic arch. CSF leak → anterior skull base fracture is most common site.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/le-fort-fractures',
      tags: ['ct', 'facial-fracture', 'lefort', 'trauma'],
    },
  },

  {
    id: 'neuro-hn-038',
    front: {
      question: 'What is the most common sinonasal cancer by location, and how does allergic fungal sinusitis differ from acute invasive fungal sinusitis on CT?',
    },
    back: {
      answer: 'Most common location: maxillary antrum (SCC). Allergic fungal: hyperdense sinus contents + normal immune system + no fat stranding (no invasion). Acute invasive: fat stranding in orbit/masticator/pterygopalatine fossa, immunocompromised patient, necrotic mucosa (non-enhancing on MRI).',
      explanation: 'Allergic fungal sinusitis (AFS) occurs in immunocompetent patients (often with asthma). The fungal mucin is hyperdense on CT and T1/T2 dark on MRI due to high protein and metal content. It does not invade but can expand/remodel sinus walls. Acute invasive fungal sinusitis (AIFS) requires an immunocompromised host (neutropenic = Aspergillus; diabetic in DKA = Mucor/Zygomycetes). Key CT finding of AIFS = fat stranding outside the sinus (not bone destruction — that\'s late). MRI mucosa may not enhance (necrotic).',
      keyFact: 'Invasive fungal sinusitis key CT sign = fat stranding OUTSIDE the sinus (orbital fat, masticator fat, PPF) — this does NOT require bone destruction. AFS = hyperdense centrally, normal immunity. DKA + sinus disease = Mucor until proven otherwise.',
      differentials: [
        { dx: 'Acute invasive fungal sinusitis' },
        { dx: 'Allergic fungal sinusitis' },
        { dx: 'Bacterial sinusitis' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/fungal-sinusitis',
      tags: ['ct', 'mri', 'sinusitis', 'fungal', 'immunocompromised'],
    },
  },

  {
    id: 'neuro-hn-039',
    front: {
      question: 'What is a mucocele, what is the most common sinus affected, and how does it differ from a tumor on imaging?',
    },
    back: {
      answer: 'Mucocele = obstructed sinus that expands circumferentially with mucus accumulation. Most common: frontal sinus. Key difference from tumor: mucocele does NOT enhance centrally (peripheral mucosal enhancement only); tumors have solid enhancement.',
      explanation: 'Mucocele results from sinus outflow obstruction (trauma, chronic sinusitis, prior surgery, CF). The sinus expands circumferentially ("expanded, airless sinus" buzzword), eroding and remodeling (not destroying) the walls. On CT it is filled with soft tissue density; on MRI it may be T1 bright (inspissated secretions) or T1 dark with T2 bright signal. The periphery may enhance from inflamed mucosa but central enhancement should not occur.',
      keyFact: 'Mucocele = "expanded, airless sinus" — no central enhancement (vs. tumor). Frontal sinus is most common (often post-trauma). Sinonasal polyposis = widening of the infundibulum (bony remodeling, not destruction). Inverted papilloma = lateral nasal wall at middle turbinate + focal hyperostosis at origin + cerebriform MRI pattern.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/mucocele-paranasal-sinus',
      tags: ['ct', 'mri', 'sinusitis', 'mucocele', 'frontal-sinus'],
    },
  },

  {
    id: 'neuro-hn-040',
    front: {
      question: 'What is juvenile nasopharyngeal angiofibroma (JNA), and what are its classic imaging features?',
    },
    back: {
      answer: 'Vascular fibrous tumor arising in the sphenopalatine foramen in male teenagers. CT/MRI: centered at sphenopalatine foramen, bone remodeling (not destruction), extremely vascular with flow voids on MRI, intense enhancement. Pre-surgical embolization via internal maxillary artery is standard.',
      explanation: 'JNA is the most common benign nasopharyngeal tumor in adolescent males. It classically presents with unilateral nasal obstruction and recurrent epistaxis. The tumor arises from the sphenopalatine foramen and can extend into the pterygomaxillary fissure, pterygopalatine fossa, infratemporal fossa, and intracranially. Bone remodeling (not destruction) distinguishes it from malignancy. The clinical history (male teenager + nosebleeds) is often the key.',
      keyFact: 'JNA = Male teenager + epistaxis + sphenopalatine foramen mass + bone remodeling + flow voids. Primary supply = internal maxillary artery (terminal branch) ± ascending pharyngeal artery. DO NOT biopsy without angiography. Pre-surgical embolization is routine.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/juvenile-nasopharyngeal-angiofibroma',
      tags: ['ct', 'mri', 'nasopharynx', 'vascular', 'benign-tumor'],
    },
  },

  {
    id: 'neuro-hn-041',
    front: {
      question: 'What is esthesioneuroblastoma, and what is its classic imaging appearance?',
    },
    back: {
      answer: 'Olfactory neuroblastoma arising from olfactory epithelium at the cribiform plate. Classic appearance: dumbbell shape straddling the cribiform plate with a "waist" at the plate; intracranial posterior cyst(s) are a diagnostic finding.',
      explanation: 'Esthesioneuroblastoma (olfactory neuroblastoma) has a bimodal age distribution (teens and 50–60s). It originates at the cribiform plate and grows both upward (intracranially) and downward (into the nasal cavity and sinuses), creating a dumbbell shape. Intracranial cysts adjacent to the tumor are characteristic and help distinguish it from other sinonasal tumors. Octreotide scintigraphy is positive (neural crest origin). The Kadish staging system is used.',
      keyFact: 'Esthesioneuroblastoma = cribiform plate origin + dumbbell shape + intracranial peripheral cysts (diagnostic). Octreotide positive. Bimodal age (teens and 50s). Can resemble inverted papilloma but the cribiform location and dumbbell shape are key.',
      differentials: [
        { dx: 'Esthesioneuroblastoma' },
        { dx: 'Sinonasal SCC/SNUC' },
        { dx: 'Inverted papilloma' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/olfactory-neuroblastoma',
      tags: ['mri', 'ct', 'sinonasal', 'tumor', 'skull-base'],
    },
  },

  {
    id: 'neuro-hn-042',
    front: {
      question: 'What is Wegener\'s granulomatosis (GPA), and what is the classic triad plus the serology and imaging findings in the nose?',
    },
    back: {
      answer: 'GPA triad: renal masses + sinus mucosal thickening with nasal septal erosion + cavitary lung nodules/fibrosis. Serology: c-ANCA positive. Nasal: cartilaginous septal erosion (vs. syphilis which affects bony septum).',
      explanation: 'Granulomatosis with polyangiitis (formerly Wegener\'s) is a necrotizing vasculitis affecting the upper and lower respiratory tracts and kidneys. Sinonasal involvement causes mucosal thickening and nasal septal perforation affecting the cartilaginous (anterior) septum. Syphilis, surgery, and cocaine use also cause septal perforation but involve the cartilage predominantly; syphilis uniquely affects the bony septum. c-ANCA (anti-PR3) is the serologic marker.',
      keyFact: 'GPA: c-ANCA + renal disease + saddle nose deformity + cavitary lung nodules. Nasal septal perforation: GPA/cocaine/surgery = cartilaginous; Syphilis = bony septum. "When I say GPA, you say c-ANCA."',
      radiopaediaUrl: 'https://radiopaedia.org/articles/granulomatosis-with-polyangiitis',
      tags: ['ct', 'mri', 'vasculitis', 'sinonasal', 'wegener'],
    },
  },

  // ── ORBIT ────────────────────────────────────────────────

  {
    id: 'neuro-hn-043',
    front: {
      question: 'What is the most common intraocular malignancy in children vs. adults?',
    },
    back: {
      answer: 'Children: retinoblastoma (calcification within the globe of a child = retinoblastoma). Adults: uveal melanoma (most common intraocular lesion in adults).',
      explanation: 'Retinoblastoma is caused by RB1 tumor suppressor gene mutation (chromosome 13 — "unlucky 13"). It presents before age 3 (rare after 6), with a normal-sized or larger globe, and intraocular calcification on CT. It can be bilateral (30%) or trilateral (pineal involvement). Uveal melanoma in adults presents as an enhancing soft tissue mass in the posterior globe with a collar-button shape (constricted by Bruch\'s membrane); it has a strong predilection for liver metastases.',
      keyFact: 'Calcification in child\'s globe = retinoblastoma. Globe size: retinoblastoma = normal; PHPV = small; Coats\' = smaller. Adult posterior globe enhancing mass = melanoma → get liver MRI. Collar-button shape = Bruch\'s membrane constriction.',
      differentials: [
        { dx: 'Retinoblastoma (child)' },
        { dx: 'Coats\' disease' },
        { dx: 'PHPV' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/retinoblastoma',
      tags: ['ct', 'mri', 'orbit', 'globe', 'pediatric'],
    },
  },

  {
    id: 'neuro-hn-044',
    front: {
      question: 'What is the classic imaging appearance of optic nerve sheath meningioma, and what syndrome is associated with it?',
    },
    back: {
      answer: 'Tram-track sign: enhancement or calcification running parallel to and surrounding the optic nerve on axial CT (or T1+C FS MRI). Associated with NF-2.',
      explanation: 'Optic nerve sheath meningiomas arise from meningothelial cells of the arachnoid surrounding the optic nerve. The tram-track sign represents two enhancing tumor strips separated by the central hypodense optic nerve on axial imaging. Calcification occurs in 20–50% of cases and can also create this appearance on CT. NF-2 association should prompt a search for other MISME lesions (schwannomas, meningiomas, ependymomas). Unlike optic glioma (which enlarges the nerve itself), optic sheath meningioma surrounds the nerve.',
      keyFact: 'Tram-track = optic nerve sheath meningioma. The nerve is dark (negative defect), the tumor flanks it. NF-2 = MISME (Multiple Intracranial and Spinal Meningiomas, schwannomas, Ependymomas). Optic glioma enlarges the nerve; meningioma surrounds it.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/optic-nerve-sheath-meningioma',
      tags: ['ct', 'mri', 'orbit', 'optic-nerve', 'meningioma', 'nf2'],
    },
  },

  {
    id: 'neuro-hn-045',
    front: {
      question: 'How does thyroid orbitopathy (Graves\' ophthalmopathy) differ from orbital pseudotumor on imaging, and what is the order of extraocular muscle involvement in Graves\'?',
    },
    back: {
      answer: 'Graves: muscle belly enlargement SPARING the tendinous insertion, painless, bilateral, T2 bright early; Pseudotumor (IgG4 sclerosing): involves muscle AND tendon, painful, usually unilateral, T2 dark. Graves order: IR > MR > SR > LR > SO/IO (I\'M Slow, Like Running Slowly).',
      explanation: 'Thyroid orbitopathy is caused by TSH receptor antibodies activating orbital fibroblasts and adipocytes, causing muscle belly fibrosis. The classic feature is myotendinous insertion sparing — the tendon is not involved. Orbital pseudotumor (IgG4 disease) involves the entire muscle including tendons, causes pain, and responds to steroids. Graves\' is bilateral and can cause proptosis leading to compressive optic neuropathy.',
      keyFact: 'Graves\' = tendon SPARED, painless, bilateral. Pseudotumor = tendon INVOLVED, painful, responds to steroids. Muscle order: "I\'M SLow Like Running" = Inferior, Medial, Superior, Lateral, Superior Oblique/Inferior Oblique.',
      differentials: [
        { dx: 'Thyroid orbitopathy (Graves\')' },
        { dx: 'Orbital pseudotumor (IgG4)' },
        { dx: 'Orbital metastasis' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/thyroid-eye-disease',
      tags: ['ct', 'mri', 'orbit', 'thyroid', 'graves'],
    },
  },

  {
    id: 'neuro-hn-046',
    front: {
      question: 'What is the most common benign congenital orbital mass, and what is the most common extra-ocular orbital malignancy in children?',
    },
    back: {
      answer: 'Most common benign congenital orbital mass: dermoid cyst (superior lateral orbit, frontozygomatic suture, fat-containing). Most common extra-ocular malignancy in children: rhabdomyosarcoma (superior medial orbit, bone destruction, "bulky orbital mass in a 7-year-old").',
      explanation: 'Orbital dermoid arises from the frontozygomatic suture in the superolateral orbit and contains fat ± calcium. It presents in the first decade. Rhabdomyosarcoma is the most common extra-ocular malignancy in children and classically involves the superior medial orbit with bone destruction. It is a bulky, aggressive-looking lesion. Both dermoid (benign) and rhabdomyosarcoma are more common than orbital metastases in children.',
      keyFact: 'Dermoid: superolateral, fat-containing, frontozygomatic suture, first decade, BENIGN. Rhabdomyosarcoma: superomedial, bone destruction, aggressive, 7-year-old. Adult orbital malignancy: lymphoma (upper outer, lacrimal gland, MALT type).',
      differentials: [
        { dx: 'Orbital dermoid' },
        { dx: 'Rhabdomyosarcoma' },
        { dx: 'Orbital metastasis' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/orbital-dermoid-cyst',
      tags: ['mri', 'ct', 'orbit', 'pediatric', 'congenital'],
    },
  },

  {
    id: 'neuro-hn-047',
    front: {
      question: 'What differentiates pre-septal (periorbital) from post-septal (orbital) cellulitis on imaging, and what is the clinical significance?',
    },
    back: {
      answer: 'Pre-septal: infection anterior to the orbital septum → treated medically. Post-septal: infection posterior to the orbital septum (within the orbit) → surgical drainage.',
      explanation: 'The orbital septum originates from the periosteum and inserts in the eyelid along the tarsal plate. Pre-septal infections usually start from adjacent teeth or face infection. Post-septal infections typically arise from paranasal sinusitis (especially ethmoid sinusitis → subperiosteal abscess along the medial orbit wall). Subperiosteal abscess has a classic look as a rim-enhancing collection between the periorbita and the medial orbital wall, associated with adjacent ethmoid opacification.',
      keyFact: 'Pre-septal = medical management. Post-septal = surgical. Ethmoid sinusitis → medial subperiosteal orbital abscess. Cavernous sinus thrombosis is a feared complication of post-septal cellulitis.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/orbital-cellulitis',
      tags: ['ct', 'orbit', 'infection', 'cellulitis'],
    },
  },

  // ── VASCULAR / NECK PATHOLOGY ────────────────────────────

  {
    id: 'neuro-hn-048',
    front: {
      question: 'What is Lemierre\'s syndrome, and what is the causative organism?',
    },
    back: {
      answer: 'Thrombophlebitis of the internal jugular vein with septic pulmonary emboli, following oropharyngeal infection. Causative organism: Fusobacterium necrophorum.',
      explanation: 'Lemierre\'s syndrome classically follows pharyngitis or tonsillitis (or recent ENT surgery) and involves septic thrombophlebitis of the internal jugular vein with septic emboli to the lungs (and less commonly other organs). CT shows intraluminal filling defect in the IJV, perivascular fat stranding, and multiple peripheral pulmonary nodules (septic emboli). Fusobacterium necrophorum is the classic anaerobic organism.',
      keyFact: 'Lemierre\'s = post-tonsillitis + IJV thrombophlebitis + septic pulmonary emboli. Organism = Fusobacterium necrophorum. CT: intraluminal filling defect + perivascular stranding + lung nodules. Different from Grisel\'s syndrome (torticollis + atlantoaxial instability after H&N surgery).',
      radiopaediaUrl: 'https://radiopaedia.org/articles/lemierre-syndrome',
      tags: ['ct', 'vascular', 'infection', 'jugular-vein', 'neck'],
    },
  },

  {
    id: 'neuro-hn-049',
    front: {
      question: 'What is fibrous dysplasia of the skull base, and how does it differ from Paget\'s disease on imaging?',
    },
    back: {
      answer: 'Fibrous dysplasia: ground-glass matrix, age <30, spares the otic capsule, favors the outer table, associated with McCune-Albright syndrome. Paget\'s: osteolysis circumscripta (lytic phase) or mixed sclerotic phase, age >50–60, involves inner table, can have basilar invagination.',
      explanation: 'Fibrous dysplasia replaces normal marrow with fibro-osseous tissue, appearing as a ground-glass matrix on CT. It commonly involves the skull base and facial bones and can expand foramina causing cranial neuropathies. Critically, fibrous dysplasia of the skull SPARES the otic capsule (unlike Paget\'s which can narrow the otic capsule and cause deafness). McCune-Albright syndrome = multifocal fibrous dysplasia + café-au-lait spots + precocious puberty.',
      keyFact: 'Fibrous dysplasia vs. Paget\'s: FD = young (<30), ground-glass, outer table, SPARES otic capsule, McCune-Albright. Paget\'s = old, osteolysis circumscripta (frontal/occipital), inner table, deafness most common complication. Both can have giant "cotton wool" sclerotic phase.',
      differentials: [
        { dx: 'Fibrous dysplasia' },
        { dx: 'Paget\'s disease' },
        { dx: 'Meningioma (hyperostosis)' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/fibrous-dysplasia',
      tags: ['ct', 'skull-base', 'fibrous-dysplasia', 'pagets'],
    },
  },

  {
    id: 'neuro-hn-050',
    front: {
      question: 'What is an aberrant internal carotid artery in the middle ear, and why is it critical to recognize?',
    },
    back: {
      answer: 'The C1 (cervical) ICA segment is aplastic/hypoplastic; an enlarged caroticotympanic artery traverses the middle ear tympanic cavity and joins the horizontal petrous ICA. It mimics a glomus tympanicum on otoscopy. DO NOT BIOPSY.',
      explanation: 'Aberrant ICA results from involution of the cervical ICA with compensatory hypertrophy of the caroticotympanic artery, which runs through the tympanic cavity (causing pulsatile tinnitus and a vascular mass behind the eardrum). The key CT finding is connection to the horizontal petrous carotid canal — this confirms the diagnosis. The oldest trick is confusing it with a glomus tympanicum paraganglioma. Biopsy would cause catastrophic hemorrhage.',
      keyFact: 'Aberrant ICA: pulsatile tinnitus + vascular retrotympanic mass + connection to horizontal carotid canal on CT. Classic mimic of glomus tympanicum. The connection to the horizontal petrous ICA canal is the diagnostic key. DO NOT BIOPSY.',
      differentials: [
        { dx: 'Aberrant internal carotid artery' },
        { dx: 'Glomus tympanicum' },
        { dx: 'High-riding dehiscent jugular bulb' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/aberrant-internal-carotid-artery',
      tags: ['ct', 'temporal-bone', 'vascular', 'ica', 'middle-ear'],
    },
  },

  // ── THYROID & PARATHYROID ────────────────────────────────

  {
    id: 'neuro-hn-051',
    front: {
      question: 'What imaging features of a thyroid nodule on ultrasound require FNA biopsy per ACR TI-RADS, and what CT feature should prompt suspicion for thyroid carcinoma in a TGDC?',
    },
    back: {
      answer: 'Sonographic features favoring malignancy: marked hypoechogenicity, microcalcifications, taller-than-wide shape, irregular margin, extrathyroidal extension. In TGDC: irregular nodularity, chunky calcifications, or enhancing solid components → suspect thyroid carcinoma in the cyst.',
      explanation: 'Thyroid carcinoma arising within a thyroglossal duct cyst is uncommon but must be considered when a TGDC contains solid nodularity or dystrophic calcifications that appear irregular or chunky (rather than thin-walled). On ultrasound, ACR TI-RADS assigns points for composition, echogenicity, shape, margin, and echogenic foci to guide FNA decisions. The most common primary thyroid carcinoma is papillary (RET/PTC rearrangements, "Orphan Annie" nuclei).',
      keyFact: 'Malignant TGDC features: irregular nodularity + chunky calcifications. Normal TGDC: thin-walled, homogeneous fluid. Psammomatous calcifications in a thyroid nodule = papillary carcinoma. Medullary thyroid carcinoma = calcitonin marker, amyloid stroma, RET mutation, MEN2A/2B.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/thyroid-nodule',
      tags: ['ultrasound', 'thyroid', 'carcinoma', 'tgdc'],
    },
  },

  {
    id: 'neuro-hn-052',
    front: {
      question: 'What is the typical location and imaging appearance of a parathyroid adenoma on sestamibi scintigraphy and MRI?',
    },
    back: {
      answer: 'Parathyroid adenoma: most commonly inferior to the lower thyroid pole (most common ectopic site = tracheoesophageal groove or mediastinum). Sestamibi (Tc-99m): persistent focal uptake at 2 hours (thyroid washes out). MRI: T2 hyperintense oval mass posterior to lower thyroid.',
      explanation: 'Parathyroid adenomas are the most common cause of primary hyperparathyroidism. They are typically small (~1–2 cm), oval, T2 hyperintense on MRI, and located posterior to the inferior thyroid pole. Ectopic glands may be in the tracheoesophageal groove, retroesophageal, intrathyroidal, or in the mediastinum (following the thymopharyngeal tract). Sestamibi early phase shows both thyroid and parathyroid uptake; delayed (2-hour) phase shows thyroid washout with persistent parathyroid uptake.',
      keyFact: 'Sestamibi 2-hour delayed = parathyroid adenoma (thyroid washes out, adenoma persists). MRI: T2 bright oval mass posterior to inferior thyroid. Most common ectopic site: tracheoesophageal groove → mediastinum (following thymopharyngeal tract). 4D-CT (3-phase + morphology) is increasingly used.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/parathyroid-adenoma',
      tags: ['nuclear-medicine', 'mri', 'parathyroid', 'thyroid', 'neck'],
    },
  },

  // ── ADDITIONAL HIGH-YIELD CARDS ──────────────────────────

  {
    id: 'neuro-hn-053',
    front: {
      question: 'What is the mylohyoid rule for spread of odontogenic infection, and which space does infection from the second and third molar roots enter?',
    },
    back: {
      answer: 'The attachment of the mylohyoid muscle to the mylohyoid ridge determines spread: anterior mandibular tooth roots (above mylohyoid line) → sublingual space; second and third molar roots (below mylohyoid line) → submandibular space.',
      explanation: 'The mylohyoid muscle forms the floor of the mouth and its attachment to the mylohyoid ridge divides drainage pathways. Most anterior tooth infections exit above the mylohyoid attachment and enter the sublingual space. Second and third molar roots typically extend below the mylohyoid attachment and drain into the submandibular space. Ludwig\'s angina is a severe polymicrobial cellulitis of the floor of the mouth involving all these spaces, with characteristic gas on CT.',
      keyFact: 'Mylohyoid rule: Anterior teeth → sublingual space. 2nd/3rd molars → submandibular space. Ludwig\'s angina = floor-of-mouth cellulitis with gas, starting from odontogenic source — gas is the CT hallmark.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/odontogenic-infection',
      tags: ['ct', 'infection', 'odontogenic', 'floor-of-mouth', 'spaces'],
    },
  },

  {
    id: 'neuro-hn-054',
    front: {
      question: 'What is the most common odontogenic cyst, and how does it differ from a dentigerous cyst?',
    },
    back: {
      answer: 'Most common odontogenic cyst: periapical (radicular) cyst — at the APEX of a non-vital tooth, round with well-corticated border, usually <2 cm. Dentigerous cyst: around the CROWN of an unerupted tooth, can displace the tooth distally.',
      explanation: 'Periapical cysts result from inflammation (dental caries/trauma) causing cystic degeneration around the periodontal ligament at the tooth apex. They are acquired lesions. Dentigerous cysts are developmental, form around the crown of an unerupted tooth, and can displace teeth to unusual positions (condylar region, orbital floor). The keratocystic odontogenic tumor (KOT/OKC) is multilocular with "daughter cysts," occurs at the mandibular ramus/body, and when multiple suggests Gorlin syndrome.',
      keyFact: 'Periapical cyst = apex of non-vital tooth (acquired). Dentigerous cyst = crown of unerupted tooth (developmental), displaces tooth. KOT/OKC = multilocular "daughter cysts" at mandibular ramus/body → Gorlin syndrome if multiple.',
      differentials: [
        { dx: 'Periapical (radicular) cyst' },
        { dx: 'Dentigerous (follicular) cyst' },
        { dx: 'Keratocystic odontogenic tumor' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/periapical-cyst',
      tags: ['ct', 'odontogenic', 'jaw', 'cyst'],
    },
  },

  {
    id: 'neuro-hn-055',
    front: {
      question: 'What imaging features distinguish ameloblastoma from an odontogenic keratocyst in the mandible?',
    },
    back: {
      answer: 'Ameloblastoma: multi-cystic "soap bubbles," extensive tooth root resorption, mandibular expansion, solid components on CT/MRI (favors ameloblastoma diagnosis). KOT: multilocular with daughter cysts, grows ALONG bone without significant expansion, no solid component.',
      explanation: 'Ameloblastoma is a locally aggressive odontogenic tumor. It is multi-cystic with a soap-bubble appearance and causes significant mandibular expansion and tooth root resorption. The presence of a solid component on MRI or CT strongly favors ameloblastoma over a simple cystic lesion. KOT tends to grow along the length of the mandible without significant cortical expansion and may have daughter cysts. About 5% of ameloblastomas arise from dentigerous cysts.',
      keyFact: 'Ameloblastoma = aggressive, multi-cystic soap bubbles, tooth root resorption, solid component, mandibular expansion. KOT = along-the-bone growth, daughter cysts, minimal expansion, Gorlin syndrome if multiple. Solid component on MRI = ameloblastoma.',
      differentials: [
        { dx: 'Ameloblastoma' },
        { dx: 'Keratocystic odontogenic tumor' },
        { dx: 'Dentigerous cyst' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/ameloblastoma',
      tags: ['ct', 'mri', 'jaw', 'mandible', 'odontogenic', 'tumor'],
    },
  },

  {
    id: 'neuro-hn-056',
    front: {
      question: 'What is inverted papilloma of the nasal cavity, and what are its key imaging features?',
    },
    back: {
      answer: 'Benign sinonasal tumor at the lateral nasal wall (middle turbinate). Key features: focal hyperostosis at tumor origin, cerebriform (convoluted) MRI pattern on T1+C and T2, impaired ipsilateral maxillary drainage. 10% harbor concurrent SCC.',
      explanation: 'Inverted papilloma (Schneiderian papilloma) is uncommon but highly testable due to its distinctive imaging features. Its classic location is the lateral nasal wall, most often related to the middle turbinate. A focal area of hyperostosis (bony thickening/sclerosis) at the attachment site is characteristic. The cerebriform/convoluted striated pattern on MRI (alternating bright and dark striations on T2 and T1+C) reflects the inverted growth pattern of epithelium. It requires wide surgical resection because 10% harbor SCC.',
      keyFact: 'Inverted papilloma = lateral nasal wall + focal hyperostosis at origin + cerebriform MRI pattern. 10% concurrent SCC → wide resection required. Cerebriform = looks like brain convolutions on T2/T1+C. Primary location: middle turbinate attachment.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/inverted-papilloma-sinonasal',
      tags: ['ct', 'mri', 'sinonasal', 'papilloma', 'lateral-nasal-wall'],
    },
  },

  {
    id: 'neuro-hn-057',
    front: {
      question: 'What is the antrochoanal polyp, what is its buzzword, and how is it distinguished from other nasal masses?',
    },
    back: {
      answer: 'Inflammatory polyp arising from the maxillary sinus, extending through the ostium into the nasopharynx. Buzzword: "widening of the maxillary ostium." No bony destruction (smooth sinus enlargement).',
      explanation: 'Antrochoanal polyps occur in young adults (30s–40s), originate from the maxillary antrum, and extend through the sinus ostium (or accessory ostium) into the choana and nasopharynx. They are thin-stalked and benign. The key distinguishing features are widening of the maxillary ostium without bone destruction, smooth enlargement, and extension to the nasopharynx. They are more unilateral and larger than typical inflammatory polyps.',
      keyFact: 'Antrochoanal polyp buzzword = "widening of the maxillary ostium" without bone destruction. Young adult, unilateral, extends from antrum through ostium to nasopharynx. Thin stalk from maxillary sinus. Contrast: sinonasal polyposis = bilateral, widening of infundibulum, bony remodeling.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/antrochoanal-polyp',
      tags: ['ct', 'sinonasal', 'polyp', 'maxillary-sinus'],
    },
  },

  {
    id: 'neuro-hn-058',
    front: {
      question: 'A carotid-cavernous fistula (CCF) presents with pulsatile exophthalmos and an enlarged superior ophthalmic vein. How do direct and indirect CCF differ?',
    },
    back: {
      answer: 'Direct CCF: high-flow fistula between intracavernous ICA and cavernous sinus (usually trauma). Indirect CCF: low-flow dural arteriovenous fistula between meningeal ECA branches and cavernous sinus (spontaneous, postmenopausal women).',
      explanation: 'Direct CCF (Barrow type A) typically results from trauma and causes high-flow arteriovenous shunting with dramatic proptosis, chemosis, and pulsatile tinnitus. Imaging shows a markedly dilated superior ophthalmic vein and enlarged cavernous sinus. Indirect CCF (Barrow types B-D) involves small dural branches of the ECA/ICA; presentation is more indolent and can mimic orbital pseudotumor. Both types show arterialization of the superior ophthalmic vein on angiography.',
      keyFact: 'Pulsatile exophthalmos + enlarged superior ophthalmic vein = CCF. Direct = trauma, high-flow, dramatic. Indirect = spontaneous, low-flow, postmenopausal women. Treatment: endovascular embolization. Enlarged SOV is also a sign of cavernous sinus thrombosis — distinguish clinically.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/carotid-cavernous-fistula',
      tags: ['ct', 'mri', 'orbit', 'vascular', 'fistula', 'cavernous-sinus'],
    },
  },

  {
    id: 'neuro-hn-059',
    front: {
      question: 'What is Tolosa-Hunt syndrome, and how does it differ from orbital pseudotumor?',
    },
    back: {
      answer: 'Tolosa-Hunt: IgG4 inflammatory process involving the cavernous sinus → painful ophthalmoplegia from multiple CN palsies (III, IV, VI, V1). Responds to steroids. Orbital pseudotumor: same IgG4 process but involving the orbit\'s extraocular muscles (painful, T2 dark, steroid-responsive).',
      explanation: 'Tolosa-Hunt syndrome is histologically identical to orbital pseudotumor (IgG4 sclerosing inflammation) but affects the cavernous sinus rather than the orbital cone. Both are painful and steroid-responsive, distinguishing them from Graves\' (painless, not steroid-responsive). MRI shows enhancing soft tissue in the cavernous sinus that may extend to the superior orbital fissure. The differential includes cavernous sinus meningioma, metastasis, and lymphoma (all less steroid-responsive).',
      keyFact: 'Tolosa-Hunt = cavernous sinus pseudotumor → painful multiple CN palsies (III, IV, VI) → steroid-responsive. Orbital pseudotumor = same IgG4 process in the orbit, painful, steroid-responsive, T2 dark muscle. Painless + T2 dark = pseudotumor/TH; Painless + T2 dark but NOT steroid-responsive = lymphoma.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/tolosa-hunt-syndrome',
      tags: ['mri', 'orbit', 'cavernous-sinus', 'inflammatory', 'cranial-nerve'],
    },
  },

  {
    id: 'neuro-hn-060',
    front: {
      question: 'What are the key imaging features of labyrinthitis ossificans, and why is early detection critical?',
    },
    back: {
      answer: 'CT: new calcification/ossification within the cochlea (membranous labyrinth). MRI: loss of normal T2 bright fluid signal in the cochlea. Classic history: child with prior bacterial meningitis. Critical because cochlear calcification is a contraindication to cochlear implant.',
      explanation: 'Labyrinthitis ossificans results from post-inflammatory ossification of the membranous labyrinth, most commonly following bacterial meningitis (ages 2–18 months). MRI (T2) is more sensitive than CT for early disease — loss of the normally bright fluid signal in the cochlea precedes visible calcification on CT. Early cochlear implantation is often recommended before complete ossification, because dense calcification makes implantation technically impossible.',
      keyFact: 'Labyrinthitis ossificans = history of childhood meningitis + cochlear ossification on CT. MRI detects early loss of T2 cochlear signal BEFORE CT shows calcification. Cochlear calcification = contraindication to cochlear implant. Act fast.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/labyrinthitis-ossificans',
      tags: ['ct', 'mri', 'temporal-bone', 'inner-ear', 'meningitis'],
    },
  },

  {
    id: 'neuro-hn-061',
    front: {
      question: 'What is the pterygopalatine fossa (PPF), and what are the key routes of tumor spread to and from it?',
    },
    back: {
      answer: 'PPF: small fat-filled space between the posterior maxillary wall, pterygoid process, and palatine bone. It is a crossroads for spread: anteriorly (inferior orbital fissure → orbit), superiorly (foramen rotundum → middle cranial fossa via V2), posteriorly (pterygoid canal → foramen lacerum), inferiorly (greater palatine canal → hard palate), laterally (pterygomaxillary fissure → infratemporal fossa).',
      explanation: 'The PPF is a critical anatomical crossroads for perineural and direct spread of head and neck malignancies. Obliteration of the normal fat signal within the PPF on CT or MRI is an important finding suggesting tumor involvement. Adenoid cystic carcinoma and squamous cell carcinoma can spread via V2 into the foramen rotundum, gaining intracranial access. Invasion of the PPF fat is also a key sign of acute invasive fungal sinusitis.',
      keyFact: 'PPF fat obliteration = tumor involvement. Routes: foramen rotundum → V2 → middle fossa (intracranial). Inferior orbital fissure → orbit. Fat stranding in PPF on CT in immunocompromised patient = invasive fungal sinusitis. Perineural spread signature tumor = adenoid cystic carcinoma.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/pterygopalatine-fossa',
      tags: ['ct', 'mri', 'skull-base', 'pterygopalatine-fossa', 'perineural-spread'],
    },
  },

  {
    id: 'neuro-hn-062',
    front: {
      question: 'What is the endolymphatic sac tumor, and what syndrome should you immediately consider?',
    },
    back: {
      answer: 'Rare vascular tumor of the endolymphatic sac. Imaging: internal amorphous calcifications on CT + T2 bright with intense enhancement + flow voids on MRI + tumor blush on angiography. Classic association: Von Hippel-Lindau (VHL) syndrome.',
      explanation: 'Endolymphatic sac tumors (ELSTs) are papillary adenomatous tumors arising from the endolymphatic sac, located posterior to the posterior semicircular canal near the vestibular aqueduct. Although most are sporadic, they are strongly associated with VHL disease — bilateral or multifocal ELSTs are essentially pathognomonic for VHL. They present with progressive SNHL, tinnitus, and vertigo. The classic CT finding is amorphous intratumoral calcification.',
      keyFact: 'Endolymphatic sac tumor = VHL disease. Classic CT = amorphous internal calcifications posterior to the semicircular canal. T2 bright + intense enhancement + flow voids. Bilateral ELSTs = VHL until proven otherwise. Location: aperture of the vestibular aqueduct.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/endolymphatic-sac-tumour',
      tags: ['ct', 'mri', 'temporal-bone', 'vhl', 'inner-ear', 'tumor'],
    },
  },

  {
    id: 'neuro-hn-063',
    front: {
      question: 'What is the zygomaticomaxillary complex (tripod) fracture, and what structures are involved?',
    },
    back: {
      answer: 'Tripod fracture: involves the zygoma at three "legs": (1) zygomatic arch, (2) inferior orbital rim/orbital floor, (3) lateral orbital wall (frontozygomatic suture). It is the most common complex facial fracture pattern.',
      explanation: 'The zygomaticomaxillary complex (ZMC or tripod) fracture results from a blow to the cheek. The three legs of the tripod are the zygomatic arch, the infraorbital rim/orbital floor, and the frontozygomatic suture at the lateral orbital wall. CT shows fractures at all three sites with rotation/displacement of the zygoma. Orbital floor involvement can cause inferior rectus entrapment and enophthalmos. Nasal bone fractures are the most common facial bone fractures overall but ZMC is the most common complex pattern.',
      keyFact: 'ZMC (tripod) = most common complex facial fracture. Three sites: zygomatic arch + orbital floor/rim + frontozygomatic suture. Check for orbital fat herniation → inferior rectus entrapment. Nasal bone = most common individual facial fracture.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/zygomaticomaxillary-complex-fracture',
      tags: ['ct', 'facial-fracture', 'trauma', 'orbit'],
    },
  },

  {
    id: 'neuro-hn-064',
    front: {
      question: 'What are the imaging features of a carotid body tumor on MRI and catheter angiography, and what is the classic angiographic pattern?',
    },
    back: {
      answer: 'MRI: avidly enhancing mass at carotid bifurcation, salt-and-pepper T1 appearance (lesions >2 cm), flow voids. Angiography: splaying of ICA and ECA (Lyre sign), prolonged tumor blush, early draining veins. Primary supply: ascending pharyngeal artery.',
      explanation: 'Carotid body tumors arise from chemoreceptor tissue at the carotid bifurcation. The "lyre sign" on angiography describes the characteristic widening (splaying) of the ICA and ECA by the tumor. As the lesion enlarges, it encases but does not narrow the carotid arteries. Salt = T1 bright subacute hemorrhage; pepper = T1/T2 dark flow voids from high-flow vessels. Bilateral in 5–10% (sporadic) or up to 25–75% (familial).',
      keyFact: 'Carotid body tumor = Lyre sign on angiography (splaying of ICA and ECA). Salt = subacute hemorrhage (T1 bright); Pepper = flow voids (T1/T2 dark). Bilateral in familial cases (25–75%). Primary supply = ascending pharyngeal artery.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/carotid-body-tumour',
      tags: ['mri', 'angiography', 'paraganglioma', 'carotid', 'neck'],
    },
  },

  {
    id: 'neuro-hn-065',
    front: {
      question: 'What imaging features on neck MRI indicate carotid artery invasion by a head and neck tumor, and when is it considered unresectable?',
    },
    back: {
      answer: 'Loss of fat plane between the node/tumor and carotid artery suggests invasion. Tumor encasing >270° (three-quarters) of the circumference = carotid artery invasion; considered unresectable when >270° encasement is present.',
      explanation: 'Carotid artery assessment is critical in surgical planning for head and neck cancers. An intact fat plane between the tumor and the artery argues against invasion. The degree of circumferential encasement is the most important metric: <180° = likely resectable; 180–270° = borderline (may need vascular surgeon); >270° = carotid invasion, typically unresectable without reconstruction. MRI is superior to CT for soft tissue detail, but both are used.',
      keyFact: '>270° carotid encasement = invasion = typically unresectable. Loss of fat plane = concerning but not definitive. Pre-surgical balloon occlusion test may be needed when resection of the ICA is contemplated.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/carotid-artery-invasion-head-and-neck-cancer',
      tags: ['mri', 'ct', 'neck', 'scc', 'carotid', 'staging'],
    },
  },

  {
    id: 'neuro-hn-066',
    front: {
      question: 'What is Coats\' disease, and how is it distinguished from retinoblastoma on imaging?',
    },
    back: {
      answer: 'Coats\' disease: retinal telangiectasia with subretinal exudate and detachment. NOT calcified (retinoblastoma IS calcified). Globe is SMALLER than normal (retinoblastoma is normal-to-larger). CT/MRI: hyperdense T1/T2 bright (due to proteinaceous/lipid subretinal fluid). Typically unilateral, young boys.',
      explanation: 'Coats\' disease is caused by abnormal leaky retinal vessels leading to exudative retinal detachment. The key MRI features are T1 and T2 hyperintensity from subretinal lipid/protein-rich exudate, with a smaller-than-normal globe. Critically, Coats\' is NOT calcified. Retinoblastoma has a normal or enlarged globe with intraocular calcification on CT. PHPV also lacks calcification and presents with a small globe (microphthalmos).',
      keyFact: 'Globe size differentials: Retinoblastoma = normal; Coats = smaller; PHPV = small (microphthalmos). Calcification: Retinoblastoma = YES; Coats = NO; PHPV = NO. Coats = boy, unilateral, T1/T2 bright (proteinaceous fluid), no calcification.',
      differentials: [
        { dx: 'Coats\' disease' },
        { dx: 'Retinoblastoma' },
        { dx: 'PHPV' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/coats-disease',
      tags: ['ct', 'mri', 'orbit', 'globe', 'pediatric'],
    },
  },

  {
    id: 'neuro-hn-067',
    front: {
      question: 'What are the three sinonasal disease patterns on CT, and which is most common?',
    },
    back: {
      answer: 'Most common: infundibular pattern (unilateral maxillary disease from ipsilateral ostial obstruction). Second: ostiomeatal unit pattern (bilateral, multiple sinuses from middle meatus disease). Third: sinonasal polyposis pattern (bilateral pansinusitis with polyps, widening of the infundibulum, bony remodeling — associated with CF and aspirin sensitivity).',
      explanation: 'The infundibular pattern shows disease isolated to one maxillary sinus from blockage at the ipsilateral infundibulum — the most common pattern. The ostiomeatal unit (OMU) pattern involves the ipsilateral maxillary, frontal, and anterior ethmoid sinuses from middle meatus disease. Sinonasal polyposis causes diffuse bilateral disease with bony remodeling (not destruction) and widening of the infundibulum. CF and aspirin sensitivity (Samter\'s triad) are testable associations with polyposis.',
      keyFact: 'Most common sinusitis pattern: infundibular (unilateral maxillary). Sinonasal polyposis: bilateral pansinusitis + soft tissue polyps + widened infundibulum + CF/Samter\'s triad (ASA sensitivity + asthma + polyposis). Polyposis causes remodeling; tumor causes destruction.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/inflammatory-sinonasal-disease',
      tags: ['ct', 'sinusitis', 'sinonasal', 'polyposis'],
    },
  },

  {
    id: 'neuro-hn-068',
    front: {
      question: 'What is the imaging appearance and clinical presentation of a glomus tympanicum vs. a high-riding jugular bulb, and how are they distinguished?',
    },
    back: {
      answer: 'Glomus tympanicum: enhancing mass ON the cochlear promontory, middle ear floor is INTACT, pulsatile tinnitus, vascular mass on otoscopy. High-riding jugular bulb: the bulb rides high, no mass on the promontory, middle ear floor may be thinned or dehiscent, incidental vascular "mass" behind the eardrum.',
      explanation: 'Both cause a vascular-appearing retrotympanic mass. Glomus tympanicum is a paraganglioma confined to the cochlear promontory; it is small, enhancing, and the osseous floor of the middle ear is intact (distinguishing it from glomus jugulare which destroys the floor). A high-riding jugular bulb is a normal variant where the jugular bulb extends superior to the floor of the internal auditory canal, occasionally protruding into the middle ear. CT clearly shows the bulb as an extension of the jugular vein, not a mass on the promontory.',
      keyFact: 'Glomus tympanicum = mass ON cochlear promontory + middle ear floor INTACT. Glomus jugulare = middle ear floor DESTROYED. High-riding jugular bulb = normal vein anatomy, no promontory mass. Aberrant ICA = connects to horizontal petrous ICA canal.',
      differentials: [
        { dx: 'Glomus tympanicum' },
        { dx: 'Aberrant internal carotid artery' },
        { dx: 'High-riding dehiscent jugular bulb' },
      ],
      radiopaediaUrl: 'https://radiopaedia.org/articles/glomus-tympanicum',
      tags: ['ct', 'temporal-bone', 'paraganglioma', 'middle-ear'],
    },
  },

  {
    id: 'neuro-hn-069',
    front: {
      question: 'What is the classic imaging appearance and location of a second branchial cleft cyst, and where do first and fourth branchial anomalies occur?',
    },
    back: {
      answer: 'Second BCC: cystic mass at the anteromedial SCM border (level II), between the carotid bifurcation and adjacent SCM. First branchial anomaly: near the external auditory canal / parotid. Fourth branchial anomaly (sinus): left side, piriform sinus → thyroid.',
      explanation: 'Branchial cleft anomalies arise from incomplete obliteration of the pharyngeal pouches/clefts during embryogenesis. Second BCCs are by far the most common (95%) and present as smooth cystic masses at the angle of the mandible along the SCM — they can track medially between the internal and external carotid arteries toward the lateral pharyngeal wall (Bailey type II classification). First branchial anomalies appear near the parotid or EAC (CN VII risk during surgery). Fourth branchial sinus tracts almost always occur on the left, track from the piriform sinus to the thyroid.',
      keyFact: 'Second BCC = most common (95%), level II, anteromedial SCM. In patient >40 → rule out necrotic SCC node first. Fourth branchial sinus = left piriform sinus → thyroid (causes suppurative thyroiditis). First BCC = near EAC/parotid, CN VII risk at surgery.',
      radiopaediaUrl: 'https://radiopaedia.org/articles/branchial-cleft-cyst',
      tags: ['ct', 'mri', 'congenital', 'neck', 'branchial-cleft'],
    },
  },

  {
    id: 'neuro-hn-070',
    front: {
      question: 'What key imaging findings should always be reported when evaluating a neck CT for a head and neck primary malignancy?',
    },
    back: {
      answer: 'Primary tumor extent and T-stage features; nodal morphology (size, necrosis, extracapsular spread); carotid artery encasement (>270° = invasion); retropharyngeal nodal involvement; skull base invasion; perineural spread along named cranial nerve branches; pre-epiglottic or paraglottic space involvement (for laryngeal tumors); distant disease.',
      explanation: 'Staging CT for head and neck SCC requires a systematic approach. Nodal factors affecting prognosis include size (>1 cm for most levels), central necrosis (pathognomonic for SCC), extracapsular spread, and bilateral/contralateral disease. Surgical planning requires knowledge of carotid encasement, skull base involvement, and the extent of pre-epiglottic/paraglottic invasion for laryngeal conservation planning. MRI is preferred for assessing perineural spread, marrow invasion, and cavernous sinus involvement.',
      keyFact: 'Checklist for H&N cancer CT: (1) primary site and T-stage, (2) necrotic nodes/ECS, (3) carotid encasement (>270° = unresectable), (4) pre-epiglottic fat invasion (laryngeal), (5) skull base erosion (nasopharyngeal), (6) perineural spread (adenoid cystic), (7) retropharyngeal nodes (nasopharyngeal primary).',
      radiopaediaUrl: 'https://radiopaedia.org/articles/head-and-neck-cancer-staging',
      tags: ['ct', 'mri', 'neck', 'scc', 'staging', 'lymph-node'],
    },
  },
    ],
  },
]
