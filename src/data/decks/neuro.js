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
        id: 'neuro-anatomy-001',
        front: {
          question: 'Identify the labeled structure: the C-shaped commissure connecting the two cerebral hemispheres, visible on midline sagittal MRI.',
        },
        back: {
          answer: 'Corpus callosum',
          explanation: 'The corpus callosum is the largest white matter commissure. It develops anterior-to-posterior: genu and body first, then splenium, then rostrum last. Agenesis therefore affects posterior parts first (absent splenium before genu).',
          keyFact: 'Order A→P: Rostrum → Genu → Body → Splenium. Mnemonic: "Really Good Body Shape". Splenium = thickest, last to develop, first absent in agenesis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/corpus-callosum',
          tags: ['mri', 'anatomy', 'white-matter', 'commissure'],
        },
      },
      {
        id: 'neuro-anatomy-002',
        front: {
          question: 'Identify the four parts of the corpus callosum on this sagittal MRI, from anterior to posterior. Which part develops last?',
        },
        back: {
          answer: 'Rostrum (most anterior-inferior), Genu, Body, Splenium (most posterior). Rostrum develops last.',
          explanation: 'The genu connects the frontal lobes; the body connects parietal lobes; the splenium connects occipital lobes; the rostrum is the thin inferior reflection. In complete agenesis, Probst bundles run parallel to the interhemispheric fissure instead of crossing. Partial agenesis spares the genu/anterior body.',
          keyFact: '"Really Good Body Shape" (Rostrum, Genu, Body, Splenium). Rostrum = last to develop, first absent in partial agenesis. Splenium = thickest part.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/corpus-callosum',
          tags: ['mri', 'anatomy', 'white-matter'],
        },
      },
      {
        id: 'neuro-anatomy-003',
        front: {
          question: 'On this axial brain MRI, identify the paired gray matter structures forming the floor of the lateral ventricles. Name all basal ganglia components.',
        },
        back: {
          answer: 'Striatum (caudate + putamen), globus pallidus, subthalamic nucleus, substantia nigra. Lenticular nucleus = putamen + globus pallidus.',
          explanation: 'The caudate head bulges into the frontal horn of the lateral ventricle. The caudate and putamen are separated by the internal capsule but connected anteriorly at the nucleus accumbens. The putamen + GP form the lenticular nucleus visible as a wedge-shaped structure on axial MRI.',
          keyFact: 'Caudate + Putamen = Striatum. Putamen + GP = Lenticular nucleus. Internal capsule separates caudate from putamen. Caudate head = landmark for lateral ventricle frontal horn.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/basal-ganglia',
          tags: ['anatomy', 'mri', 'basal-ganglia', 'gray-matter'],
        },
      },
      {
        id: 'neuro-anatomy-004',
        front: {
          question: 'Diagram the basal ganglia direct and indirect pathways. Which nuclei are the output stations, and what neurotransmitter is lost in Parkinson disease?',
        },
        back: {
          answer: 'Output: GPi + SNr → thalamus → cortex. Direct pathway: striatum → GPi (inhibitory, facilitates movement). Indirect: striatum → GPe → STN → GPi (inhibitory, suppresses movement). Lost in PD: dopamine from substantia nigra pars compacta (SNc).',
          explanation: 'In PD, loss of dopaminergic SNc neurons reduces direct pathway activation and increases indirect pathway activity → increased GPi output → thalamic suppression → reduced cortical motor activation (bradykinesia, rigidity). DBS target: STN or GPi. The "hummingbird sign" on sagittal MRI (midbrain atrophy) is seen in PSP, not PD.',
          keyFact: 'PD: loss of SNc dopamine → GPi overactive → thalamic suppression. DBS targets: STN or GPi. GPi + SNr = output stations. Direct = facilitatory; Indirect = inhibitory to movement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/basal-ganglia',
          tags: ['anatomy', 'basal-ganglia', 'pathways', 'parkinson'],
        },
      },
      {
        id: 'neuro-anatomy-005',
        front: {
          question: 'Identify the structure on this coronal MRI: crescent-shaped gray matter forming the medial wall of the temporal horn. What sequence best evaluates it for epilepsy?',
        },
        back: {
          answer: 'Hippocampus. Best evaluated on thin-section coronal T2 and FLAIR perpendicular to its long axis. In mesial temporal sclerosis: T2 hyperintensity + volume loss + loss of internal architecture.',
          explanation: 'Hippocampal subfields CA1–CA4: CA1 most vulnerable to ischemia; CA2 relatively spared in MTS. The dentate gyrus and subiculum complete the hippocampal formation. Papez circuit: hippocampus → fornix → mammillary bodies → anterior thalamus → cingulate → back to hippocampus. The fornix is the major output tract.',
          keyFact: 'MTS: CA1, CA3, CA4 lost; CA2 spared. Coronal thin-section T2/FLAIR = best sequence. MTS triad: T2↑ + atrophy + loss of internal architecture. Bilateral MTS → bilateral coronal cuts essential.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hippocampus',
          tags: ['anatomy', 'mri', 'temporal-lobe', 'epilepsy', 'hippocampus'],
        },
      },
      {
        id: 'neuro-anatomy-006',
        front: {
          question: 'Name the CSF space visible on this axial MRI between the cerebral peduncles. Which cranial nerve exits into it, and what pathology causes its effacement?',
        },
        back: {
          answer: 'Interpeduncular cistern. CN III (oculomotor) exits here. Effacement = transtentorial herniation or diffuse cerebral edema.',
          explanation: 'The interpeduncular cistern contains the basilar artery tip, posterior communicating arteries, and CN III. Adjacent cisterns: ambient (lateral, CN IV, PCA, SCA) and quadrigeminal (posterior, vein of Galen). Effacement of perimesencephalic cisterns on CT/MRI is a critical sign of imminent herniation. A PComm aneurysm here causes a pupil-involving CN III palsy.',
          keyFact: 'Interpeduncular cistern: CN III + basilar tip + PComm arteries. PComm aneurysm → pupil-involving CN III palsy. Effaced cisterns = herniation. Quadrigeminal cistern contains vein of Galen.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/interpeduncular-cistern',
          tags: ['anatomy', 'cisterns', 'mri', 'herniation', 'cn3'],
        },
      },
      {
        id: 'neuro-anatomy-007',
        front: {
          question: 'Name the five major intracranial cisterns, their key contents, and where LP is performed to sample CSF.',
        },
        back: {
          answer: '(1) Interpeduncular: basilar tip, CN III. (2) Chiasmatic: optic chiasm, A1 ACA. (3) Quadrigeminal: vein of Galen, pineal. (4) Ambient: CN IV, PCA, SCA. (5) Pontine: basilar artery, CN V–VII. LP: lumbar cistern at L3–L4.',
          explanation: 'The cisterna magna (cerebellomedullary cistern) is the largest cistern posterior to medulla; communicates with 4th ventricle via Magendie. Normal CSF: clear, opening pressure 6–20 cmH2O, protein <45 mg/dL, glucose >60% serum. LP at L3–L4 avoids the conus (ends at L1–L2). Cisternal SAH: blood in perimesencephalic cisterns on CT in the first hours.',
          keyFact: 'LP at L3–L4 (below conus). Cisterna magna = largest. Quadrigeminal cistern: vein of Galen thrombosis → bilateral thalamic infarcts. SAH: blood fills basal cisterns first on CT.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/subarachnoid-cisterns',
          tags: ['anatomy', 'cisterns', 'csf', 'mri'],
        },
      },
      {
        id: 'neuro-anatomy-008',
        front: {
          question: 'Identify the ventricular system and foramina of communication on this MRI. What is the Evans ratio and what value indicates hydrocephalus?',
        },
        back: {
          answer: 'Lateral ventricles → foramina of Monro → 3rd ventricle → aqueduct of Sylvius → 4th ventricle → foramina of Magendie (midline) + Luschka (lateral) → subarachnoid space. Evans ratio >0.3 = hydrocephalus.',
          explanation: 'Evans ratio = frontal horn width / inner skull width at same level. The aqueduct (narrowest point) is the most common site of obstruction. Temporal horns >2 mm wide indicate hydrocephalus when not due to atrophy. In NPH (normal pressure hydrocephalus): dilated ventricles + gait apraxia + urinary incontinence + dementia (Hakim triad), with disproportionately large ventricles vs. sulci.',
          keyFact: 'Evans ratio >0.3 = hydrocephalus. Aqueduct = most common obstruction site. NPH triad: wet, wobbly, wacky (incontinence, gait, dementia). Temporal horn >2 mm = significant hydrocephalus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ventricular-system',
          tags: ['anatomy', 'ventricles', 'mri', 'hydrocephalus'],
        },
      },
      {
        id: 'neuro-anatomy-009',
        front: {
          question: 'Identify the thin membrane between the frontal horns on this axial MRI. What is the cavum septum pellucidum, and what condition requires an absent septum pellucidum?',
        },
        back: {
          answer: 'Septum pellucidum. Cavum septum pellucidum = CSF-filled space between two leaflets (normal in neonates, incidental in adults). Absent septum pellucidum = septo-optic dysplasia (de Morsier syndrome) or holoprosencephaly.',
          explanation: 'CSP extends anteriorly; cavum vergae = extension posterior to foramen of Monro. Both are normal variants. Septo-optic dysplasia (de Morsier): absent septum + optic nerve hypoplasia + pituitary dysfunction. In holoprosencephaly the septum is always absent because the hemispheres fail to separate. A "box-shaped" monoventricle is characteristic of alobar HPE.',
          keyFact: 'Absent septum pellucidum: think septo-optic dysplasia (+ optic hypoplasia + hypopituitarism) or holoprosencephaly. CSP = normal variant; extends posteriorly = cavum vergae.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/septum-pellucidum',
          tags: ['anatomy', 'mri', 'septum-pellucidum', 'variant'],
        },
      },
      {
        id: 'neuro-anatomy-010',
        front: {
          question: 'What is the blood supply of the internal capsule? A small infarct in the posterior limb causes what classic syndrome?',
        },
        back: {
          answer: 'Posterior limb: lenticulostriate arteries (M1 MCA branches). Anterior limb: recurrent artery of Heubner (ACA). Genu: anterior choroidal artery. Posterior limb infarct → pure motor hemiplegia (lacunar syndrome).',
          explanation: 'Lenticulostriate arteries are end arteries → vulnerable to hypertensive lipohyalinosis → lacunar infarcts. The posterior limb contains the corticospinal tract (motor fibers). The genu contains corticobulbar fibers (central facial palsy). The anterior limb connects prefrontal cortex to thalamus. Classic lacunar syndromes: pure motor, pure sensory, sensorimotor, ataxic hemiparesis, dysarthria-clumsy hand.',
          keyFact: 'Posterior limb IC = corticospinal tract → pure motor lacune. Lenticulostriates = perforators from M1, hypertension → lacunes. Genu = corticobulbar → central facial palsy. Anterior limb: recurrent artery of Heubner (ACA).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/internal-capsule',
          tags: ['anatomy', 'internal-capsule', 'stroke', 'vascular', 'lacunar'],
        },
      },
      {
        id: 'neuro-anatomy-011',
        front: {
          question: 'Identify the white matter tract on this axial MRI that fans out from the internal capsule to all cortical areas. What pathology preferentially affects it in hypertension?',
        },
        back: {
          answer: 'Corona radiata. Hypertension → small vessel disease → white matter hyperintensities (leukoaraiosis) in the corona radiata and periventricular white matter on FLAIR.',
          explanation: 'The corona radiata is the fan-shaped white matter projection fiber system connecting the internal capsule to all cortical regions. It includes corticospinal, corticobulbar, and thalamocortical fibers. Leukoaraiosis (white matter hyperintensities) in the corona radiata and deep white matter is the hallmark of chronic small vessel disease and is associated with stroke risk, cognitive impairment, and gait disturbance.',
          keyFact: 'Corona radiata = projection fibers fanning out above IC. Hypertension → leukoaraiosis (periventricular + deep WMH on FLAIR). CADASIL: WMH characteristically in anterior temporal poles + external capsule.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/corona-radiata',
          tags: ['anatomy', 'white-matter', 'corona-radiata', 'small-vessel'],
        },
      },
      {
        id: 'neuro-anatomy-012',
        front: {
          question: 'What is the ACA territory and what deficits result from ACA infarction? Identify the ACA on this CT angiogram.',
        },
        back: {
          answer: 'ACA supplies medial frontal/parietal lobes, anterior corpus callosum. Infarct: contralateral leg > arm weakness (leg area medial), frontal lobe syndrome (abulia, disinhibition), urinary incontinence.',
          explanation: 'A1 = from ICA to Acomm; A2 = from Acomm to distal. Recurrent artery of Heubner (RAH) = first branch of A2, supplies anterior limb IC and head of caudate. Bilateral ACA infarct (from single Acomm aneurysm/spasm): bilateral leg weakness + severe abulia. ACA infarct spares the hand/face area (which is lateral/MCA territory).',
          keyFact: 'ACA infarct: leg > arm weakness (medial homunculus). Bilateral ACA: akinetic mutism/abulia. RAH = ACA branch to anterior limb IC + caudate head. ACA spares hand/face (MCA territory).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/anterior-cerebral-artery',
          tags: ['anatomy', 'vascular', 'aca', 'stroke', 'territory'],
        },
      },
      {
        id: 'neuro-anatomy-013',
        front: {
          question: 'What territory does the MCA supply? Identify the MCA on this CT angiogram and name the deficits of complete MCA territory infarction.',
        },
        back: {
          answer: 'MCA supplies lateral frontal, parietal, temporal, and insular cortex + deep white matter + basal ganglia (via lenticulostriates). Complete MCA infarct: contralateral hemiplegia (arm/face > leg), hemisensory loss, aphasia (dominant) or neglect (non-dominant), hemianopia.',
          explanation: 'M1 = horizontal segment (gives lenticulostriate perforators); M2 = insular segments; M3 = opercular; M4 = cortical. The MCA territory is the largest — complete MCA stroke is devastating. Hyperdense MCA sign on CT = acute thrombus. The insular ribbon sign (loss of cortical gray/white differentiation at insula) is an early CT ischemia sign. ASPECTS score assesses MCA territory ischemia.',
          keyFact: 'Complete MCA: arm/face > leg weakness + aphasia (dominant) or neglect (non-dominant) + hemianopia. M1 perforators = lenticulostriates → lacunes. Hyperdense MCA sign = CT marker of acute thrombus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/middle-cerebral-artery',
          tags: ['anatomy', 'vascular', 'mca', 'stroke', 'territory'],
        },
      },
      {
        id: 'neuro-anatomy-014',
        front: {
          question: 'What is the PCA territory? A PCA infarct causes what classic visual deficit? Identify the PCA on this image.',
        },
        back: {
          answer: 'PCA supplies occipital lobe (primary visual cortex), posterior temporal lobe, thalamus (via thalamoperforators), midbrain. PCA infarct: contralateral homonymous hemianopia (with macular sparing if calcarine collaterals intact).',
          explanation: 'P1 = precommunicating PCA (thalamoperforators, including artery of Percheron from a common trunk); P2 = postcommunicating. Bilateral PCA infarcts (basilar top) → cortical blindness (Anton syndrome — patient denies blindness). PCA + posterior thalamic infarct: visual field defect + thalamic pain syndrome. Dominant PCA: alexia without agraphia (splenium + dominant occipital lobe).',
          keyFact: 'PCA infarct: homonymous hemianopia (macular sparing common). Bilateral PCA: Anton syndrome (cortical blindness, patient unaware). Artery of Percheron (common P1 trunk) → bilateral paramedian thalamic infarcts.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-cerebral-artery',
          tags: ['anatomy', 'vascular', 'pca', 'stroke', 'vision'],
        },
      },
      {
        id: 'neuro-anatomy-015',
        front: {
          question: 'Identify the dural venous sinuses on this MR venogram. Which sinus is most commonly thrombosed, and what is the "empty delta" sign?',
        },
        back: {
          answer: 'Main sinuses: superior sagittal (SSS), inferior sagittal, straight sinus, transverse (bilateral), sigmoid → IJV, cavernous (bilateral). Most commonly thrombosed: SSS (then transverse). Empty delta sign: triangular filling defect in SSS on contrast CT (thrombus with surrounding enhancing collaterals).',
          explanation: 'The SSS drains into the right transverse sinus in most people. Torcular Herophili = confluence of sinuses. CVT risk factors: pregnancy/OCP, dehydration, hypercoagulable states, infection. MRI: T1 bright clot in sinus; MRV: flow gap. The straight sinus receives the vein of Galen and inferior sagittal sinus. Thrombosis of straight sinus → bilateral thalamic and deep venous infarcts.',
          keyFact: 'Empty delta sign = SSS thrombus on contrast CT. Most common sinus thrombosed: SSS. Straight sinus thrombosis → bilateral thalamic infarcts. MRV: filling defect = thrombus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/dural-venous-sinus-thrombosis',
          tags: ['anatomy', 'venous', 'dural-sinuses', 'mri', 'cvt'],
        },
      },
      {
        id: 'neuro-anatomy-016',
        front: {
          question: 'Identify the circle of Willis on this CT angiogram. Which segments are most commonly absent/hypoplastic?',
        },
        back: {
          answer: 'Circle of Willis: bilateral ICA → ACA (A1) + MCA (M1) → PCA (P1), connected by anterior communicating (Acomm) and posterior communicating (Pcomm) arteries. Most commonly absent/hypoplastic: A1 segment (ACA) and P1 segment (PCA), and Pcomm.',
          explanation: 'A complete circle of Willis is present in only ~20–25% of the population. Fetal PCA = PCA primarily supplied by Pcomm rather than basilar (normal variant in 20–30%). When one ICA occludes, a complete circle allows collateral flow. The Acomm is the most common site of berry aneurysm (30–35%), followed by PComm junction (25%), MCA bifurcation (20%), and basilar tip (10%).',
          keyFact: 'Acomm = most common aneurysm site (30–35%). Fetal PCA = PCA from Pcomm (normal variant, 20–30%). Complete circle only in 20–25% of people. Berry aneurysm rupture → subarachnoid hemorrhage.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/circle-of-willis',
          tags: ['anatomy', 'vascular', 'circle-of-willis', 'aneurysm'],
        },
      },
      {
        id: 'neuro-anatomy-017',
        front: {
          question: 'Identify the thalamus on this axial MRI. Name its key nuclei and their clinical functions. Which thalamic structure is visible as the "massa intermedia"?',
        },
        back: {
          answer: 'Key thalamic nuclei: VPL (body sensation), VPM (face sensation), LGN (vision), MGN (hearing), VA/VL (motor, cerebellothalamic), pulvinar (association), anterior (Papez/memory), DM (prefrontal, emotion). Massa intermedia = interthalamic adhesion bridging 3rd ventricle.',
          explanation: 'The thalamus is the relay station for nearly all sensory input to cortex. Pure thalamic strokes cause contralateral hemisensory loss ± thalamic pain (Dejerine-Roussy syndrome). Bilateral paramedian thalamic infarcts (artery of Percheron) cause sudden coma + vertical gaze palsy. The pulvinar sign (T2 hyperintensity in pulvinar) is characteristic of variant CJD.',
          keyFact: 'VPL = body sensation (lateral lemniscus input). LGN = vision relay. Bilateral thalamic infarcts → coma (artery of Percheron). Pulvinar sign (T2↑) = variant CJD. Dejerine-Roussy = thalamic pain syndrome.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thalamus',
          tags: ['anatomy', 'thalamus', 'mri', 'vascular'],
        },
      },
      {
        id: 'neuro-anatomy-018',
        front: {
          question: 'Identify the posterior fossa structures on this sagittal MRI. Name the key boundaries of the posterior fossa and its major contents.',
        },
        back: {
          answer: 'Posterior fossa bounded: anteriorly by clivus, superiorly by tentorium cerebelli, posteriorly by occipital bone, inferiorly by foramen magnum. Contains: brainstem (midbrain, pons, medulla), cerebellum, 4th ventricle, basilar artery, cranial nerves V–XII.',
          explanation: 'The tentorium cerebelli separates the posterior fossa (infratentorial) from the supratentorial compartment. Transtentorial herniation compresses the midbrain. The foramen magnum transmits the medulla, vertebral arteries, CN XI, and the spinal cord. Posterior fossa masses in children: medulloblastoma (vermis, 4th ventricle), pilocytic astrocytoma (cerebellar hemisphere), ependymoma (4th ventricle floor).',
          keyFact: 'Posterior fossa (infratentorial): brainstem + cerebellum + 4th ventricle. Bounded superiorly by tentorium. Pediatric posterior fossa masses: medulloblastoma > pilocytic astrocytoma > ependymoma. Transtentorial herniation compresses CN III.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-cranial-fossa',
          tags: ['anatomy', 'posterior-fossa', 'mri', 'cerebellum'],
        },
      },
      {
        id: 'neuro-anatomy-019',
        front: {
          question: 'Name the three cerebellar peduncles, their fiber directions, and the key tracts they carry.',
        },
        back: {
          answer: 'Superior cerebellar peduncle (SCP/brachium conjunctivum): output from dentate nucleus → thalamus (crosses in midbrain). Middle cerebellar peduncle (MCP/brachium pontis): largest, input from contralateral pontine nuclei (corticopontocerebellar). Inferior cerebellar peduncle (ICP/restiform body): input from spinal cord (spinocerebellar) + vestibular nuclei.',
          explanation: 'The SCP decussation is in the tegmentum of the caudal midbrain — lesion here causes ipsilateral cerebellar ataxia contralateral to the crossing. MCP atrophy is the MRI hallmark of MSA-C (multiple system atrophy-cerebellar type) and causes the "hot cross bun" sign on axial pons imaging. ICP carries spinocerebellar and cuneocerebellar tracts for proprioception.',
          keyFact: 'SCP = cerebellar output (dentate → thalamus, crosses in midbrain). MCP = largest, corticopontocerebellar input. ICP = spinocerebellar proprioception. MCP + "hot cross bun" pons sign = MSA-C.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebellar-peduncles',
          tags: ['anatomy', 'cerebellum', 'peduncles', 'mri'],
        },
      },
      {
        id: 'neuro-anatomy-020',
        front: {
          question: 'Identify the brainstem levels and cranial nerve exit points on this sagittal MRI. Which CN exits from the dorsal brainstem?',
        },
        back: {
          answer: 'Midbrain: CN III (ventral interpeduncular fossa), CN IV (only dorsal exit — from inferior colliculi). Pons: CN V (lateral), VI (ventral pontomedullary), VII+VIII (lateral pontomedullary). Medulla: CN IX, X, XI (lateral sulcus), XII (ventral sulcus). CN IV = only CN to exit dorsally and cross.',
          explanation: 'CN IV is the only cranial nerve to exit dorsally and completely decussate — a dorsal midbrain lesion (pineal region) can cause bilateral CN IV palsy (bilateral superior oblique palsy → bilateral extorsion). CN VI has the longest intracranial course → frequently injured with raised ICP (false localizing sign). CN VII and VIII travel together through the IAC.',
          keyFact: 'CN IV = only dorsal exit + completely crosses. CN VI = longest intracranial course → false localizing sign in raised ICP. CN III exits ventrally from interpeduncular fossa. VII + VIII = travel together in IAC.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cranial-nerves',
          tags: ['anatomy', 'brainstem', 'cranial-nerves', 'mri'],
        },
      },
      {
        id: 'neuro-anatomy-021',
        front: {
          question: 'What is the normal position of the cerebellar tonsils relative to the foramen magnum? What defines Chiari I vs Chiari II malformation?',
        },
        back: {
          answer: 'Normal: cerebellar tonsils at or ≤5 mm above foramen magnum. Chiari I: tonsils ≥5 mm below foramen magnum (tonsillar herniation only, no brainstem descent). Chiari II: tonsils + vermis + brainstem descend; always with open neural tube defect (myelomeningocele).',
          explanation: 'Chiari I: often incidental, may cause headache worse with Valsalva, syringomyelia (25–65%), scoliosis. Treatment: posterior fossa decompression if symptomatic. Chiari II: "lemon sign" (frontal scalloping) + "banana sign" (curved cerebellum) on prenatal US; associated with hydrocephalus, tectal beaking (fused superior colliculi), absent corpus callosum (partial). The tonsils must be ≥5 mm below FM on sagittal MRI to diagnose Chiari I.',
          keyFact: 'Chiari I: tonsils ≥5 mm below FM, syrinx in 25–65%, no NTD. Chiari II: tonsils + vermis + brainstem descent + myelomeningocele + hydrocephalus + tectal beaking. Lemon + banana signs on prenatal US.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chiari-i-malformation',
          tags: ['anatomy', 'chiari', 'mri', 'posterior-fossa', 'syrinx'],
        },
      },
      {
        id: 'neuro-anatomy-022',
        front: {
          question: 'Identify the limbic system structures on this coronal MRI and describe the Papez circuit.',
        },
        back: {
          answer: 'Papez circuit: Hippocampus → Fornix → Mammillary bodies → Mammillothalamic tract → Anterior thalamus → Cingulate cortex → Entorhinal cortex → Hippocampus. Key limbic structures: hippocampus, amygdala, cingulate gyrus, parahippocampal gyrus.',
          explanation: 'The fornix is the major output tract of the hippocampus, running beneath the corpus callosum to the mammillary bodies. Bilateral fornix lesion = anterograde amnesia. The amygdala lies anterior to the hippocampus in the medial temporal lobe; bilateral amygdala damage causes Klüver-Bucy syndrome (hypersexuality, hyperorality, placidity). The cingulate gyrus sits above the corpus callosum on medial surface.',
          keyFact: 'Papez circuit: Hippo → Fornix → Mamm. bodies → Mamm.thal. tract → Ant. thalamus → Cingulate → Hippo. Fornix lesion = amnesia. Amygdala damage = Klüver-Bucy syndrome.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/papez-circuit',
          tags: ['anatomy', 'limbic', 'memory', 'mri'],
        },
      },
      {
        id: 'neuro-anatomy-023',
        front: {
          question: 'Describe the normal myelination pattern on MRI: what does the brain look like at birth vs. 2 years? Which sequences are most useful?',
        },
        back: {
          answer: 'At birth: T1 bright in deep white matter (posterior limb IC, posterior brainstem). T2 dark in same regions. By 2 years: adult-like myelination on T1. By 3 years: adult-like on T2. Myelination proceeds posterior→anterior, inferior→superior, central→peripheral.',
          explanation: 'Key milestones: Posterior limb IC (T1 bright) at birth. Anterior limb IC myelinated by 6–12 months. Subcortical white matter myelination complete by 2 years on T1, 3 years on T2. T1 is best in the first year; T2 is better in the second year. Delayed myelination (T2 white matter too bright for age) is a key finding in leukodystrophies, metabolic disorders, and hypothyroidism.',
          keyFact: 'Myelination: posterior→anterior, inferior→superior, central→peripheral. Posterior limb IC bright on T1 at birth. Adult-like: T1 by 2y, T2 by 3y. Delayed myelination: T2 WM hyperintensity for age → leukodystrophy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/myelination-of-the-brain',
          tags: ['anatomy', 'myelination', 'mri', 'pediatric', 'white-matter'],
        },
      },
      {
        id: 'neuro-anatomy-024',
        front: {
          question: 'Identify the primary motor cortex on this brain diagram. What is the precentral gyrus homunculus, and where are the leg, arm, and face areas located?',
        },
        back: {
          answer: 'Primary motor cortex = precentral gyrus (anterior to central sulcus). Homunculus: leg area = medial (ACA territory); trunk = parasagittal; arm/hand = lateral/superior; face = most lateral inferior (MCA territory). Primary sensory cortex = postcentral gyrus.',
          explanation: 'The central sulcus separates frontal (motor) from parietal (sensory) lobes. The "knob" of the precentral gyrus = hand motor area — easily identified on axial MRI as an inverted Omega or hook shape. ACA territory infarct → leg weakness sparing face/arm. MCA territory → arm/face weakness sparing leg. The supplementary motor area (SMA, medial frontal lobe) mediates bimanual coordination; SMA lesion → transient contralateral weakness.',
          keyFact: 'Precentral gyrus = motor cortex. "Omega sign" = hand motor area on axial MRI. Leg medial (ACA), arm/face lateral (MCA). Postcentral gyrus = sensory cortex. Lesion planning: identify central sulcus before surgery.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/precentral-gyrus',
          tags: ['anatomy', 'motor-cortex', 'mri', 'homunculus'],
        },
      },
      {
        id: 'neuro-anatomy-025',
        front: {
          question: 'What is the "H" or "bat-wing" appearance on axial MRI at the level of the pons, and what pathology causes the "hot cross bun" sign?',
        },
        back: {
          answer: '"H" shape on axial pons MRI = normal basilar pons architecture (gray pontine nuclei + transverse pontocerebellar fibers). "Hot cross bun" sign = cruciform T2 hyperintensity in pons due to degeneration of pontocerebellar fibers, sparing corticospinal tracts → MSA-C (multiple system atrophy, cerebellar type).',
          explanation: 'The normal pons has a characteristic H-shaped gray matter pattern on axial MRI. In MSA-C, selective degeneration of pontine nuclei and MCP produces the "hot cross bun" sign — a cross of T2 bright signal in the pons. Other MSA-C features: putaminal T2 hypointensity + lateral rim hyperintensity ("putaminal slit sign"), cerebellar and MCP atrophy. The "hummingbird sign" (midbrain atrophy) is seen in PSP, not MSA.',
          keyFact: '"Hot cross bun" sign = MSA-C (cruciform T2↑ pons). "Hummingbird sign" (midbrain dorsal atrophy on sagittal) = PSP. "Putaminal slit sign" (lateral rim T2↑) = MSA. Normal pons: H-shaped gray matter on axial T2.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hot-cross-bun-sign-brain',
          tags: ['anatomy', 'pons', 'msa', 'mri', 'hot-cross-bun'],
        },
      },
      {
        id: 'neuro-anatomy-026',
        front: {
          question: 'What is the normal signal of the posterior pituitary on T1 MRI, and what does its absence indicate?',
        },
        back: {
          answer: 'Posterior pituitary = T1 bright spot (neurohypophysis, stores ADH/vasopressin). Absent bright spot indicates central diabetes insipidus (DI) — loss of ADH storage. Ectopic bright spot = ectopic posterior pituitary (at median eminence), associated with panhypopituitarism.',
          explanation: 'The T1 bright spot is due to ADH-containing neurosecretory granules in the posterior pituitary. It is present in ~80% of normal subjects. Absent bright spot + DI symptoms → look for pituitary stalk thickening (Langerhans cell histiocytosis, germinoma, sarcoidosis, lymphocytic hypophysitis). Ectopic posterior pituitary occurs when pituitary descent is arrested during fetal development, always causing pituitary stalk absence/thinning + anterior pituitary hypoplasia.',
          keyFact: 'Posterior pituitary T1 bright spot = ADH granules, present in 80% normal. Absent: central DI. Ectopic bright spot at median eminence = ectopic post pituitary + panhypopituitarism. Stalk thickening + absent bright spot = LCH/germinoma/sarcoid.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-pituitary-bright-spot',
          tags: ['anatomy', 'pituitary', 'mri', 'diabetes-insipidus'],
        },
      },
      {
        id: 'neuro-anatomy-027',
        front: {
          question: 'What are the normal MRI signal characteristics of the major brain structures on T1 and T2? Which structures are T1 bright normally?',
        },
        back: {
          answer: 'T1 bright (hyperintense): fat, blood products (met-Hb, protein-rich fluid), melanin, calcium (sometimes), gadolinium enhancement, posterior pituitary. T2 bright: CSF, edema, most pathology. Gray matter: slightly T2 brighter than white matter. White matter: T1 brighter than gray matter (myelin).',
          explanation: 'White matter appears brighter than gray matter on T1 due to myelin lipid content. On T2, gray matter appears slightly brighter. The globus pallidus and substantia nigra are naturally T2 dark due to iron deposition (increases with age). T1 bright lesions to know: subacute hemorrhage (met-Hb), lipoma, dermoid, melanoma mets, protein-rich cyst, calcification (variable), Wernicke (mammillary bodies), neurofibromatosis (plexiform enhancement).',
          keyFact: 'T1 bright: fat, met-Hb, melanin, gadolinium, protein, posterior pituitary. WM brighter than GM on T1 (myelin). GM slightly brighter than WM on T2. GP + SN: T2 dark (iron). Calcification: T1 variable, T2 dark, CT bright.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mri-signal-characteristics',
          tags: ['mri', 'physics', 'signal', 'anatomy'],
        },
      },
      {
        id: 'neuro-anatomy-028',
        front: {
          question: 'Identify the paired structures at the junction of midbrain and diencephalon. What is the "hummingbird sign" and what disease causes it?',
        },
        back: {
          answer: 'Red nuclei (paired, at midbrain level). "Hummingbird sign" = midbrain atrophy on sagittal MRI causing the midbrain-pons junction to look like a hummingbird in profile → Progressive Supranuclear Palsy (PSP).',
          explanation: 'The red nucleus is T2 hypointense due to iron and is visible as a paired round structure at the midbrain level. PSP causes selective midbrain tegmentum atrophy (AP diameter <17 mm) → "hummingbird" silhouette on sagittal MRI (also called "penguin sign"). The "morning glory sign" is the corresponding axial midbrain appearance. PSP clinical: vertical gaze palsy, falls, axial rigidity, early dysphagia.',
          keyFact: 'Hummingbird sign = sagittal midbrain atrophy → PSP (midbrain AP <17 mm). Red nuclei = paired T2 dark structures in midbrain tegmentum. Morning glory sign = axial midbrain PSP. Vertical gaze palsy + falls = PSP clinically.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hummingbird-sign-brain',
          tags: ['anatomy', 'midbrain', 'psp', 'mri', 'atrophy'],
        },
      },
      {
        id: 'neuro-anatomy-029',
        front: {
          question: 'What are the normal MRI dimensions of the pituitary gland? How is a microadenoma detected on dynamic gadolinium MRI?',
        },
        back: {
          answer: 'Normal height: ≤8 mm (men), ≤10 mm (women), ≤12 mm (puberty/pregnancy). Microadenoma (<10 mm): T1 hypointense relative to enhancing normal gland on dynamic gadolinium (gland enhances first, adenoma enhances later/less). Macroadenoma >10 mm.',
          explanation: 'Dynamic pituitary MRI: thin coronal slices, rapid gadolinium injection, images at 30s intervals. Normal gland enhances avidly → microadenoma appears as hypointense focus. Prolactinoma = most common microadenoma (elevated prolactin). Cushing disease = ACTH-secreting microadenoma (often very small). Knosp grade (0–4) assesses macroadenoma cavernous sinus invasion: grade ≥3 = encasement of ICA, not surgically resectable.',
          keyFact: 'Normal pituitary: ≤8 mm (M), ≤10 mm (F), ≤12 mm (pregnant). Microadenoma: T1 dark spot in enhancing gland on dynamic MRI. Prolactinoma = most common. Knosp ≥3 = cavernous sinus encasement (unresectable).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pituitary-microadenoma',
          tags: ['anatomy', 'pituitary', 'mri', 'adenoma', 'sella'],
        },
      },
      {
        id: 'neuro-anatomy-030',
        front: {
          question: 'What is the "flow void" on MRI and in which sequences is it most prominent? What structures produce flow voids in the brain?',
        },
        back: {
          answer: 'Flow void = signal loss from rapidly moving protons (blood) that leave the imaging slice before echo. Most prominent on T2 and gradient echo. Normal flow voids: ICA, MCA, basilar artery, dural sinuses, large veins.',
          explanation: 'In vascular tumors (e.g., paraganglioma, hemangioblastoma) and AVMs, prominent flow voids are a key diagnostic feature — "bag of worms" appearance. Loss of a normal flow void in a vessel suggests slow flow or thrombosis. In AVM, the nidus appears as a tangle of flow voids on T2. Dural AVF: perimedullary/intracranial flow voids from arterialized veins. Slow flow in venous structures may not produce a void.',
          keyFact: 'Flow void: T2 dark signal = fast-flowing blood (arteries + large veins). "Bag of worms" flow voids = AVM nidus or paraganglioma. Loss of normal flow void = thrombosis or slow flow. Prominent perimedullary flow voids = spinal dural AVF.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/flow-void',
          tags: ['mri', 'physics', 'flow-void', 'vascular'],
        },
      },
      {
        id: 'neuro-anatomy-031',
        front: {
          question: 'Identify the major cerebral sulci and lobes on this axial MRI. Name the sulcus that separates the frontal from parietal lobe.',
        },
        back: {
          answer: 'Central sulcus separates frontal (precentral = motor) from parietal (postcentral = sensory) lobe. Lateral sulcus (Sylvian fissure) separates frontal/parietal from temporal lobe. Parieto-occipital sulcus = parietal from occipital. Calcarine sulcus = primary visual cortex location.',
          explanation: 'Key identifiers on axial MRI: the superior frontal sulcus and precentral sulcus help identify the central sulcus. The "hand knob" (omega/epsilon shape) on axial MRI marks the hand motor area of the precentral gyrus. Broca area = inferior frontal gyrus (dominant hemisphere, language production). Wernicke area = posterior superior temporal gyrus (dominant hemisphere, language comprehension).',
          keyFact: 'Central sulcus = motor (precentral) vs sensory (postcentral). Sylvian fissure = frontal/parietal from temporal. Broca (IFG) = speech production; Wernicke (posterior STG) = comprehension. Both dominant hemisphere. Hand knob = Omega/epsilon sign on axial MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cerebral-lobes',
          tags: ['anatomy', 'cortex', 'sulci', 'mri', 'lobes'],
        },
      },
      {
        id: 'neuro-anatomy-032',
        front: {
          question: 'What is the "insular ribbon sign" on CT in acute MCA stroke, and why is the insula an early ischemia target?',
        },
        back: {
          answer: 'Insular ribbon sign = loss of the normal gray-white differentiation at the insular cortex on CT in acute MCA ischemia. Indicates cytotoxic edema. The insula is affected early because it is the deepest MCA territory cortex with no collateral supply from ACA or PCA.',
          explanation: 'The insula receives blood exclusively from MCA branches with no leptomeningeal collaterals. Early CT signs of acute MCA stroke: loss of insular ribbon, sulcal effacement, hyperdense MCA sign, loss of lentiform nucleus definition. ASPECTS score systematically assesses these changes in 10 MCA territory regions. ASPECTS ≥6 predicts favorable outcome with thrombectomy; <6 predicts poor prognosis.',
          keyFact: 'Insular ribbon sign = earliest CT sign of MCA territory ischemia (loss of cortical gray-white distinction at insula). ASPECTS score: 10 = normal; subtract 1 per affected region. ASPECTS <6 = poor prognosis with large core infarct.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/insular-ribbon-sign',
          tags: ['anatomy', 'insula', 'stroke', 'ct', 'early-signs'],
        },
      },
      {
        id: 'neuro-anatomy-033',
        front: {
          question: 'Identify the claustrum on this axial MRI. What is its significance in MRI pattern recognition?',
        },
        back: {
          answer: 'Claustrum = thin sheet of gray matter between the putamen and insular cortex, separated by the external capsule (medially) and extreme capsule (laterally). Key diagnostic role: T2 hyperintensity of claustrum is a sensitive marker of heroin leukoencephalopathy (chasing the dragon).',
          explanation: 'The claustrum is sandwiched between two white matter layers: external capsule (between claustrum and putamen) and extreme capsule (between claustrum and insula). In heroin-induced spongiform leukoencephalopathy ("chasing the dragon"), there is symmetric T2 hyperintensity in the posterior white matter + claustrum involvement. Anatomically, the external capsule is commonly involved in MCA lenticulostriate infarcts alongside the putamen.',
          keyFact: 'Claustrum = thin gray matter between external capsule (medial) and extreme capsule (lateral). T2 hyperintensity of claustrum = heroin leukoencephalopathy ("chasing the dragon") pattern. External capsule ± putamen = lenticulostriate infarct.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/claustrum',
          tags: ['anatomy', 'claustrum', 'mri', 'white-matter'],
        },
      },
      {
        id: 'neuro-anatomy-034',
        front: {
          question: 'Identify the pineal gland on this sagittal MRI. What is normal pineal size, when is calcification abnormal, and what tumor arises here?',
        },
        back: {
          answer: 'Normal pineal: <10 mm. Calcification: normal in adults, abnormal in children <6 years. Key tumor: germinoma (most common pineal region tumor, teen males, hCG+/-). Also: pineocytoma, pineoblastoma, teratoma.',
          explanation: 'The pineal gland sits in the quadrigeminal cistern. A large pineal mass compresses the aqueduct (hydrocephalus) and tectal plate (Parinaud syndrome: upgaze palsy, convergence-retraction nystagmus, lid retraction). Germinoma: isointense T1, T2, avid enhancement, bifocal (pineal + suprasellar). Teratoma: heterogeneous, fat + calcification, AFP↑. Pineoblastoma: aggressive, drop mets, young children.',
          keyFact: 'Pineal mass → Parinaud syndrome (upgaze palsy) + hydrocephalus. Germinoma = most common pineal tumor (teen male, bifocal). Calcification in child <6 = abnormal → pineal mass. Normal size <10 mm.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pineal-region-tumours',
          tags: ['anatomy', 'pineal', 'mri', 'tumor', 'parinaud'],
        },
      },
      {
        id: 'neuro-anatomy-035',
        front: {
          question: 'Identify the meningeal layers and the types of intracranial hemorrhage associated with each space.',
        },
        back: {
          answer: 'Layers outside-in: periosteum → dura → epidural space → subdural space → arachnoid → subarachnoid space (CSF) → pia → brain. Epidural hematoma (EDH): between skull and dura (biconvex). Subdural hematoma (SDH): between dura and arachnoid (crescent). SAH: subarachnoid space.',
          explanation: 'EDH: usually arterial (middle meningeal artery), biconvex (lenticular), doesn\'t cross suture lines, does cross midline. SDH: usually venous (bridging veins), crescent-shaped, crosses sutures, doesn\'t cross midline falx. SAH: fills sulci/cisterns (star-shaped). Intraparenchymal: within brain substance. Subdural "lucid interval" followed by deterioration = classic EDH presentation.',
          keyFact: 'EDH = biconvex, arterial, MMA, doesn\'t cross sutures. SDH = crescent, venous bridging veins, crosses sutures, doesn\'t cross midline. EDH: lucid interval. SAH: worst headache of life, fills cisterns.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meninges',
          tags: ['anatomy', 'meninges', 'hemorrhage', 'ct', 'edh', 'sdh'],
        },
      },
      {
        id: 'neuro-anatomy-036',
        front: {
          question: 'What is the normal width of the temporal horn of the lateral ventricle, and what finding indicates temporal lobe atrophy?',
        },
        back: {
          answer: 'Normal temporal horn: <2 mm or virtually slit-like. Temporal horn width >2 mm without raised ICP indicates temporal lobe (hippocampal) atrophy. Hippocampal volume loss → temporal horn enlargement is a key MRI marker of Alzheimer disease.',
          explanation: 'The temporal horn of the lateral ventricle is normally slit-like and barely visible. Dilation indicates hippocampal/parahippocampal atrophy (or hydrocephalus if all ventricles enlarged). In Alzheimer disease, medial temporal lobe atrophy (MTA) can be scored on coronal MRI: 0 = normal to 4 = severe (MTA scale). Unilateral temporal horn dilation + ipsilateral hippocampal T2 signal = MTS.',
          keyFact: 'Normal temporal horn: <2 mm (slit-like). >2 mm = hippocampal atrophy. Medial temporal atrophy scale (0-4) for Alzheimer MRI. Unilateral temporal horn dilation + hippocampal T2↑ = MTS (epilepsy).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/medial-temporal-lobe-atrophy',
          tags: ['anatomy', 'temporal-horn', 'atrophy', 'mri', 'alzheimer'],
        },
      },
      {
        id: 'neuro-anatomy-037',
        front: {
          question: 'What imaging features distinguish obstructive (non-communicating) from communicating hydrocephalus on CT/MRI?',
        },
        back: {
          answer: 'Obstructive: dilated ventricles upstream from blockage (e.g., lateral+3rd but not 4th = aqueductal stenosis). Communicating: all four ventricles dilated. Periventricular lucency/edema = transependymal flow of CSF (active hydrocephalus). NPH: enlarged ventricles disproportionate to sulcal atrophy.',
          explanation: 'Transependymal edema appears as periventricular FLAIR/T2 hyperintensity ("halo") around the ventricles — indicates active CSF transudation under pressure. Key obstructive causes: aqueductal stenosis (congenital or acquired), 4th ventricle outlet obstruction (Dandy-Walker), intraventricular tumor/colloid cyst. Communicating causes: post-SAH/meningitis adhesions, leptomeningeal carcinomatosis, NPH.',
          keyFact: 'Obstructive: asymmetric ventricular dilation upstream of block. Communicating: all ventricles dilated. Transependymal edema (periventricular FLAIR↑) = active hydrocephalus under pressure. NPH: Evans >0.3, enlarged ventricles > sulci, Hakim triad.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hydrocephalus',
          tags: ['anatomy', 'hydrocephalus', 'ct', 'mri', 'ventricles'],
        },
      },
      {
        id: 'neuro-anatomy-038',
        front: {
          question: 'What are the Brodmann areas for primary motor (4), primary somatosensory (3/1/2), primary visual (17), and primary auditory (41/42) cortex? Where are Broca and Wernicke areas?',
        },
        back: {
          answer: 'BA 4 = primary motor (precentral gyrus). BA 3/1/2 = primary sensory (postcentral gyrus). BA 17 = primary visual (calcarine cortex). BA 41/42 = primary auditory (Heschl gyrus, superior temporal). Broca = BA 44/45 (inferior frontal, dominant). Wernicke = BA 22 (posterior superior temporal, dominant).',
          explanation: 'These areas are critical for surgical planning and interpreting functional MRI (fMRI). BA 6 = premotor/supplementary motor area (SMA). BA 44/45 Broca = expressive aphasia if lesioned (dominant IFG). BA 22 Wernicke = receptive aphasia (posterior STG). Damage to arcuate fasciculus (connects Broca + Wernicke) = conduction aphasia (poor repetition, preserved comprehension and fluency).',
          keyFact: 'Motor = BA4 (precentral). Sensory = BA 3/1/2 (postcentral). Visual = BA17 (calcarine). Auditory = BA41/42 (Heschl). Broca = BA44/45 = expressive aphasia. Wernicke = BA22 = receptive aphasia. Arcuate fasciculus lesion = conduction aphasia.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/brodmann-areas',
          tags: ['anatomy', 'brodmann', 'cortex', 'aphasia', 'functional'],
        },
      },
      {
        id: 'neuro-anatomy-039',
        front: {
          question: 'What does the AICA supply, and how does AICA territory infarction differ from PICA territory infarction? Identify both on this posterior fossa MRI.',
        },
        back: {
          answer: 'AICA: anterior inferior cerebellum + lateral inferior pons + inner ear (cochlea/labyrinth). AICA infarct: lateral inferior pontine syndrome + sensorineural hearing loss + vertigo. PICA: posterior inferior cerebellum + lateral medulla. PICA infarct: Wallenberg syndrome (no hearing loss).',
          explanation: 'AICA arises from the basilar artery at the pontomedullary junction; it gives the internal auditory artery to the labyrinth. AICA infarct = lateral inferior pons + anterior inferior cerebellum + hearing loss (labyrinthine artery). PICA arises from vertebral artery; PICA infarct = lateral medulla (Wallenberg) + posterior inferior cerebellum. Both cause ipsilateral facial numbness and contralateral body pain/temp loss, but AICA adds hearing loss.',
          keyFact: 'AICA infarct = lateral inferior pons + hearing loss + vertigo (labyrinthine artery from AICA). PICA infarct = Wallenberg (lateral medulla) + posterior inferior cerebellum, NO hearing loss. Key distinction: AICA causes SNHL, PICA does not.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/anterior-inferior-cerebellar-artery',
          tags: ['anatomy', 'aica', 'pica', 'posterior-fossa', 'stroke'],
        },
      },
      {
        id: 'neuro-anatomy-040',
        front: {
          question: 'What does the MLF (medial longitudinal fasciculus) connect, and what is internuclear ophthalmoplegia (INO)? Where is the lesion on MRI?',
        },
        back: {
          answer: 'MLF connects CN VI nucleus (pons) to contralateral CN III nucleus (midbrain), mediating conjugate horizontal gaze. INO: lesion of ipsilateral MLF → ipsilateral adduction failure on contralateral gaze + contralateral abducting nystagmus. Bilateral INO in young patient = MS until proven otherwise.',
          explanation: 'The MLF is a paired white matter tract in the dorsal brainstem tegmentum. In right INO: right MLF lesion → right eye cannot adduct on left gaze; left eye abducts with nystagmus. The "WEBINO" syndrome = wall-eyed bilateral INO (bilateral MLF lesion + exotropia). One-and-a-half syndrome = ipsilateral MLF + ipsilateral PPRF lesion → ipsilateral complete gaze palsy + contralateral INO; only the contralateral eye can abduct.',
          keyFact: 'MLF: CN VI nucleus (pons) → contralateral CN III (midbrain). INO = ipsilateral adduction failure + contralateral ABducting nystagmus. Bilateral INO in young = MS. One-and-a-half = MLF + PPRF ipsilateral lesion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/internuclear-ophthalmoplegia',
          tags: ['anatomy', 'mlf', 'ino', 'brainstem', 'mri', 'ms'],
        },
      },
      {
        id: 'neuro-anatomy-041',
        front: {
          question: 'Describe the normal MRI appearance of the choroid plexus. Where is it found, and what pathology causes unilateral choroid plexus enlargement?',
        },
        back: {
          answer: 'Choroid plexus: T1 iso, T2 iso/bright, enhances avidly on post-contrast MRI. Located in: atria of lateral ventricles (largest glomus), roof of 3rd ventricle, roof of 4th ventricle. Absent from frontal and occipital horns. Unilateral enlargement → choroid plexus papilloma (child) or meningioma (adult).',
          explanation: 'The choroid plexus produces CSF (500 mL/day); total CSF volume ~150 mL (turned over ~3× daily). Choroid plexus cysts are common normal variants (T2 bright, follow CSF, no enhancement). Choroid plexus papilloma: most common in children under 5, causes communicating hydrocephalus from overproduction. Xanthogranulomas are common benign calcified lesions in the glomus of the choroid plexus.',
          keyFact: 'Choroid plexus: avid enhancement, in atria (largest) + 3rd + 4th ventricles (NOT in frontal/occipital horns). Papilloma = unilateral enlargement in child + communicating hydrocephalus. CP cysts = normal variants (T2 bright, CSF signal, no enhancement).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/choroid-plexus',
          tags: ['anatomy', 'choroid-plexus', 'mri', 'csf'],
        },
      },
      {
        id: 'neuro-anatomy-042',
        front: {
          question: 'What is the Sylvian fissure (lateral sulcus), what structures does it contain, and what does its asymmetry or filling indicate?',
        },
        back: {
          answer: 'Sylvian fissure = lateral sulcus separating frontal/parietal lobes (superiorly) from temporal lobe (inferiorly). Contains: MCA branches (M2-M3), superficial middle cerebral vein. Filling with blood on CT (dense Sylvian fissure) = SAH. Effacement = mass effect. Asymmetry = normal variant or parasylvian lesion.',
          explanation: 'The Sylvian fissure is the deepest and most prominent brain sulcus. The MCA main trunk (M1) runs in the Sylvian fissure. In SAH, blood fills the Sylvian fissure bilaterally (especially prominent with MCA aneurysm rupture). The insular cortex is visible deep within the Sylvian fissure. Sylvian fissure epidermoid (CPA) extends along the fissure — insinuating T2-bright, DWI-positive mass.',
          keyFact: 'Sylvian fissure = deepest sulcus, contains MCA (M2-M3) branches. Blood in Sylvian fissure = SAH. Insular cortex is visible deep within it. Effacement = mass effect/edema. Epidermoid can extend along Sylvian fissure.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lateral-sulcus',
          tags: ['anatomy', 'sylvian', 'mca', 'sah', 'mri'],
        },
      },
      {
        id: 'neuro-anatomy-043',
        front: {
          question: 'What are the key structures visible on axial MRI at the midbrain level? Name the substantia nigra appearance and its significance.',
        },
        back: {
          answer: 'Midbrain structures: cerebral peduncles (anteriorly, corticospinal tracts), substantia nigra (T2 dark, between peduncles and tegmentum), red nucleus (T2 dark, round, paired in tegmentum), periaqueductal gray (PAG), superior colliculi (posteriorly).',
          explanation: 'Substantia nigra: normally T2 dark due to neuromelanin and iron. Loss of T2 hypointensity (SN pallor) or loss of the normal nigrosomes on SWI/neuromelanin MRI indicates neurodegeneration (PD). The "swallow tail sign" on SWI = normal nigrosome-1 bright spot in dorsolateral SN — absent in PD. Tectal plate (superior + inferior colliculi) compression by pineal mass → Parinaud syndrome (upgaze palsy).',
          keyFact: 'Substantia nigra: normally T2 dark (iron + neuromelanin). "Swallow tail sign" on SWI = normal nigrosome-1; absent in PD. Red nucleus: paired, T2 dark, tegmentum. Tectal plate compression = Parinaud syndrome (pineal mass). Cerebral peduncles = corticospinal tracts.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/substantia-nigra',
          tags: ['anatomy', 'midbrain', 'substantia-nigra', 'parkinson', 'mri'],
        },
      },
      {
        id: 'neuro-anatomy-044',
        front: {
          question: 'What are the three cerebellar arterial territories and which syndrome results from the most clinically important one?',
        },
        back: {
          answer: 'SCA (superior cerebellar artery): superior cerebellum + dentate nuclei. AICA: anterior inferior cerebellum + lateral inferior pons + cochlea. PICA (largest, most important): posterior inferior cerebellum + lateral medulla → Wallenberg syndrome.',
          explanation: 'Wallenberg syndrome (lateral medullary syndrome, PICA infarct): ipsilateral face numbness (CN V), ipsilateral Horner (descending sympathetics), ipsilateral ataxia (cerebellum), ipsilateral palatal/pharyngeal palsy (CN IX/X, dysphagia/dysarthria), contralateral body pain/temperature loss (STT). Spares: motor strength, vibration. The mnemonic: AICA infarct = same features but ADD hearing loss.',
          keyFact: 'Wallenberg (PICA): ipsilateral face numbness, Horner, ataxia, dysphagia; contralateral body pain/temp loss. NO weakness, NO hearing loss. AICA = same + hearing loss. SCA = superior cerebellum + dentate. PICA from vertebral artery.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-inferior-cerebellar-artery',
          tags: ['anatomy', 'cerebellum', 'pica', 'wallenberg', 'stroke'],
        },
      },
      {
        id: 'neuro-anatomy-045',
        front: {
          question: 'What are the key measurements of the craniovertebral junction on MRI/radiograph? What is basilar invagination?',
        },
        back: {
          answer: 'Key CVJ measurements: McGregor line: dens tip ≤4.5 mm above. Atlantodental interval (ADI): ≤3 mm adult, ≤5 mm child. Basion-dens interval (BDI): ≤12 mm. Basion-axial interval (BAI): ≤12 mm. Basilar invagination = dens >4.5 mm above McGregor line → foramen magnum compression.',
          explanation: 'McGregor line runs from posterior hard palate to inner occipital curve. Basilar invagination causes dens to project upward through foramen magnum, compressing the medulla/upper cord. Causes: Paget disease, osteomalacia, OI, rheumatoid arthritis (pannus erosion of dens), Chiari malformation. ADI >3 mm in adult indicates atlantoaxial instability (TAL rupture or RA pannus). Os odontoideum = separate ossicle at dens tip, associated with instability.',
          keyFact: 'McGregor line: dens >4.5 mm above = basilar invagination. ADI >3 mm (adult) = atlantoaxial instability (TAL rupture, RA). Causes of BI: Paget, RA, OI. BDI + BAI: both ≤12 mm normal. Os odontoideum → instability.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/craniovertebral-junction',
          tags: ['anatomy', 'craniovertebral', 'mri', 'measurement', 'basilar-invagination'],
        },
      },
      {
        id: 'neuro-anatomy-046',
        front: {
          question: 'What is the normal MRI appearance of white matter on FLAIR? What pattern of WMH is characteristic of CADASIL?',
        },
        back: {
          answer: 'Normal: periventricular "caps" at frontal/occipital horn tips = normal. Punctate subcortical/periventricular WMH increase with age (small vessel disease/leukoaraiosis). CADASIL (cerebral autosomal dominant arteriopathy): WMH characteristically in anterior temporal poles + external capsule — >95% specific.',
          explanation: 'CADASIL is caused by NOTCH3 mutations. The anterior temporal lobe and external capsule involvement distinguishes it from other small vessel diseases. Other patterns: MS = periventricular + juxtacortical + infratentorial (Dawson fingers). CSVD = subcortical + basal ganglia. Migraine = punctate, non-specific. WMH grading: Fazekas scale (0–3). Confluent periventricular WMH = Fazekas 3 = significant.',
          keyFact: 'CADASIL: anterior temporal pole + external capsule WMH = >95% specific (NOTCH3 mutation). MS: periventricular + juxtacortical + infratentorial. CSVD: subcortical + deep WM. Fazekas 3 (confluent) = significant leukoaraiosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/white-matter-hyperintensities',
          tags: ['mri', 'white-matter', 'flair', 'cadasil', 'small-vessel'],
        },
      },
      {
        id: 'neuro-anatomy-047',
        front: {
          question: 'Identify the mammillary bodies on this MRI. What acute and chronic changes are seen in Wernicke encephalopathy?',
        },
        back: {
          answer: 'Mammillary bodies: paired round structures at floor of 3rd ventricle/hypothalamus, relay hippocampal memory output. Acute Wernicke: T2/FLAIR hyperintensity + enhancement of mammillary bodies + periaqueductal gray + dorsomedial thalami. Chronic: mammillary body atrophy (Korsakoff syndrome).',
          explanation: 'Wernicke encephalopathy = thiamine (B1) deficiency, usually alcoholism or malnutrition. Classic triad: ataxia, ophthalmoplegia, confusion (only 10–30% present with full triad). MRI hallmarks: symmetric T2 bright + enhancement around aqueduct, mammillary bodies, medial thalami, and tectal plate. Mammillary body atrophy = chronic, irreversible marker of Korsakoff psychosis (anterograde amnesia + confabulation).',
          keyFact: 'Wernicke: symmetric T2↑ + enhancement of periaqueductal gray + mammillary bodies + medial thalami. Thiamine deficiency, alcoholism. Korsakoff (chronic) = mammillary atrophy + amnesia + confabulation. Only 10–30% have full clinical triad.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/wernicke-encephalopathy',
          tags: ['anatomy', 'mammillary', 'wernicke', 'mri', 'thiamine'],
        },
      },
      {
        id: 'neuro-anatomy-048',
        front: {
          question: 'What causes FLAIR hyperintensity in the subarachnoid space (sulcal FLAIR hyperintensity), and how do you distinguish SAH from meningitis?',
        },
        back: {
          answer: 'Sulcal FLAIR hyperintensity causes: SAH (most common), meningitis/encephalitis, leptomeningeal carcinomatosis, PRES, supplemental O2 artifact. SAH: follows cisterns + sulci, often most prominent at base/vertex. Meningitis: sulcal FLAIR + pial enhancement (leptomeningeal enhancement) on T1 post-contrast.',
          explanation: 'Normally CSF is suppressed on FLAIR. Protein/blood in CSF impairs suppression → bright sulci. Supplemental O2 also causes sulcal FLAIR signal (high O2 tension affects T1 of CSF). SAH is confirmed by: LP (xanthochromia if >12h after onset), CT (94% sensitive in first 6h), FLAIR (sensitive for small SAH). Pial enhancement (sulcal T1 enhancement) = leptomeningeal carcinomatosis or meningitis — not seen in simple SAH unless complicated.',
          keyFact: 'Sulcal FLAIR bright: SAH first (most common), then meningitis, then leptomeningeal mets, then PRES. Supplemental O2 = artifact. SAH on CT: 94% sensitive <6h. Pial enhancement = meningitis/leptomeningeal carcinomatosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sulcal-flair-hyperintensity',
          tags: ['mri', 'flair', 'sah', 'meningitis', 'subarachnoid'],
        },
      },
      {
        id: 'neuro-anatomy-049',
        front: {
          question: 'What is DWI (diffusion-weighted imaging)? Describe true restricted diffusion vs T2 shine-through, and name three conditions that cause restricted diffusion.',
        },
        back: {
          answer: 'Restricted diffusion = DWI bright + ADC dark (true restriction, e.g., acute ischemia). T2 shine-through = DWI bright + ADC bright (T2 effect carried through, not true restriction). Key causes: acute ischemia, brain abscess (central DWI bright), epidermoid cyst, CJD (cortical ribboning), hypercellular tumors (lymphoma).',
          explanation: 'ADC (apparent diffusion coefficient) map must always be checked to confirm true restriction vs shine-through. In acute stroke, DWI changes within minutes; ADC values drop to <700 × 10⁻⁶ mm²/s. Pseudonormalization of DWI occurs at ~1–2 weeks (DWI returns to isointense while ADC remains dark). DWI is also sensitive for epidermoid (distinguishes from arachnoid cyst: epidermoid DWI bright, arachnoid DWI dark). CJD: cortical ribboning DWI pattern.',
          keyFact: 'True restriction: DWI↑ + ADC↓. Shine-through: DWI↑ + ADC↑. Acute ischemia: DWI changes within minutes. Abscess central DWI↑ (pus). Epidermoid DWI↑ (vs arachnoid cyst DWI–). CJD: cortical ribboning. Lymphoma: DWI↑ (hypercellular).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/diffusion-weighted-imaging-of-the-brain',
          tags: ['mri', 'dwi', 'adc', 'stroke', 'physics'],
        },
      },
      {
        id: 'neuro-anatomy-050',
        front: {
          question: 'What is SWI (susceptibility-weighted imaging)? Which structures appear dark, and what is the clinical significance of microbleed distribution?',
        },
        back: {
          answer: 'SWI: most sensitive sequence for blood products (deoxyhemoglobin, hemosiderin) and iron/calcium. Appears dark (blooming artifact). Microbleed distribution: lobar (cortical/subcortical) = CAA; deep (basal ganglia, thalamus, brainstem, cerebellum) = hypertensive small vessel disease.',
          explanation: 'Cerebral amyloid angiopathy (CAA) causes amyloid deposition in cortical vessels → lobar microbleeds + lobar ICH. Boston criteria for CAA require ≥2 lobar microbleeds on MRI. CAA can cause cortical superficial siderosis (sulcal hemosiderin). Hypertensive microbleeds are in deep structures (lenticulostriate territory). Cavernous malformations: "popcorn" lesion on T2 with complete hemosiderin rim, very conspicuous on SWI.',
          keyFact: 'Lobar microbleeds (cortical/subcortical) = CAA. Deep microbleeds (BG/thalamus/brainstem) = hypertensive SVD. Boston criteria CAA: ≥2 lobar microbleeds. SWI = most sensitive for microbleeds (more than T2*). Cavernoma = "popcorn" + complete hemosiderin ring on SWI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/susceptibility-weighted-imaging',
          tags: ['mri', 'swi', 'microbleeds', 'caa', 'hemorrhage'],
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
]
