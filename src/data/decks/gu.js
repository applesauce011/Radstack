// ============================================================
// RadStack — Genitourinary Deck
// ============================================================
// Naming convention: gu-[section]-[###]
// ============================================================

export const guSubsections = [
  { id: 'gu-retroperitoneum', label: 'Retroperitoneum & Adrenal', cards: [
    {
      id: 'gu-retroperitoneum-001',
      front: {
        question: 'What are the three compartments of the retroperitoneum and their contents?',
        hint: 'Separated by anterior/posterior renal fascia and lateroconal fascia',
      },
      back: {
        answer: 'Anterior pararenal space (colon, duodenum, pancreas), perirenal space (kidneys, proximal ureter, adrenals), posterior pararenal space (fat only)',
        explanation: 'The retroperitoneum is divided by Gerota\'s fascia (anterior renal fascia) and Zuckerkandl\'s fascia (posterior renal fascia). The perirenal space surrounds each kidney and contains the proximal ureter and adrenal glands embedded in fat. The posterior pararenal space is a potential space containing only fat.',
        keyFact: 'Gerota\'s fascia = anterior renal fascia; Zuckerkandl\'s fascia = posterior renal fascia. The perirenal space is the key compartment containing kidneys, adrenals, and proximal ureters.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/retroperitoneal-spaces',
        tags: ['anatomy', 'CT', 'retroperitoneum', 'fascia'],
      },
    },
    {
      id: 'gu-retroperitoneum-002',
      front: {
        question: 'What is the most common primary malignant retroperitoneal tumor in adults, and what is its imaging hallmark?',
      },
      back: {
        answer: 'Liposarcoma — fat-containing retroperitoneal mass',
        explanation: 'Liposarcomas are the most common primary retroperitoneal malignant tumors; 10–15% of all liposarcomas arise from the retroperitoneum. The well-differentiated subtype is most common and predominantly fatty. More aggressive subtypes (myxoid, round-cell, pleomorphic, dedifferentiated) have minimal macroscopic fat and may be indistinguishable from other sarcomas.',
        keyFact: 'Do NOT call a retroperitoneal fatty mass a lipoma — fat-containing retroperitoneal lesions are liposarcoma until proven otherwise. Fat + calcification in a retroperitoneal mass = liposarcoma over AML.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/retroperitoneal-liposarcoma',
        tags: ['CT', 'retroperitoneum', 'tumor', 'liposarcoma', 'fat'],
      },
    },
    {
      id: 'gu-retroperitoneum-003',
      front: {
        question: 'What is retroperitoneal fibrosis, what does it do to the ureters on imaging, and what is its most common cause?',
      },
      back: {
        answer: 'Fibro-inflammatory tissue encasing retroperitoneal structures causing medial ureteral deviation and obstruction; 75% idiopathic (Ormond disease)',
        explanation: 'Retroperitoneal fibrosis (RPF) causes a soft tissue mantle around the aorta, IVC, and iliac vessels, classically causing medial deviation and "waisting" of the ureters. Unlike malignant lymphadenopathy, RPF rarely displaces the aorta anteriorly. It is associated with IgG4-related disease, medications (methysergide, ergotamine), and malignancy (~10%).',
        keyFact: 'RPF causes MEDIAL ureteral deviation (vs. lateral deviation from adenopathy or aortic aneurysm). Associated with IgG4 disease. Active disease is FDG-avid and gallium-avid; late/fibrotic disease is cold.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/retroperitoneal-fibrosis',
        tags: ['CT', 'MRI', 'retroperitoneum', 'fibrosis', 'ureter'],
      },
    },
    {
      id: 'gu-retroperitoneum-004',
      front: {
        question: 'What are the CT criteria for diagnosing an adrenal adenoma on noncontrast imaging, and what is the washout threshold on adrenal protocol CT?',
      },
      back: {
        answer: 'Noncontrast attenuation ≤10 HU = adenoma. If >10 HU: absolute washout ≥60% or relative washout ≥40% = adenoma.',
        explanation: 'Adrenal adenomas contain intracytoplasmic lipid. Approximately 70–80% measure ≤10 HU on noncontrast CT (lipid-rich). For lipid-poor adenomas (>10 HU), adrenal protocol CT is performed with unenhanced, 60-second enhanced, and 15-minute delayed phases. Absolute washout = (E−D)/(E−U) × 100; relative washout = (E−D)/E × 100.',
        keyFact: 'Noncontrast ≤10 HU → stop, call adenoma. >10 HU → get washout: absolute ≥60% or relative ≥40% = adenoma. Metastases wash out slowly (<60% absolute, <40% relative).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/adrenal-adenoma',
        tags: ['CT', 'adrenal', 'adenoma', 'washout', 'incidentaloma'],
      },
    },
    {
      id: 'gu-retroperitoneum-005',
      front: {
        question: 'How does MRI chemical shift imaging diagnose a lipid-rich adrenal adenoma, and what is the mechanism?',
      },
      back: {
        answer: 'Signal drop-out on out-of-phase (OOP) images compared to in-phase (IP) images = lipid-rich adenoma',
        explanation: 'Adenomas contain intracytoplasmic lipid. On GRE chemical shift imaging, fat and water protons cancel each other out on OOP images because they resonate at different frequencies. When fat and water coexist in the same voxel (as in adenoma), OOP signal is reduced relative to IP. Metastases generally do not suppress on OOP images.',
        keyFact: 'Signal LOSS on out-of-phase vs. in-phase = lipid-rich adenoma. Exceptions: clear cell RCC metastasis, HCC metastasis, and well-differentiated adrenocortical carcinoma can rarely drop out too.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/adrenal-adenoma',
        tags: ['MRI', 'adrenal', 'adenoma', 'chemical-shift', 'lipid'],
      },
    },
    {
      id: 'gu-retroperitoneum-006',
      front: {
        question: 'What is an adrenal myelolipoma, and what is its pathognomonic imaging feature?',
      },
      back: {
        answer: 'Benign adrenal neoplasm of myeloid cells and fat; macroscopic fat in an adrenal mass is virtually diagnostic',
        explanation: 'Adrenal myelolipoma is composed of erythrocyte precursors (myeloid cells) and fat, not smooth muscle. It is usually an incidental finding and can be large (>4 cm). The presence of macroscopic fat in an adrenal mass is virtually diagnostic of myelolipoma. A retroperitoneal liposarcoma may mimic a myelolipoma, but typically presents as a large mass that displaces rather than arises from the adrenal.',
        keyFact: 'Macroscopic fat in adrenal mass = myelolipoma (not AML — that is renal). Do not confuse with AML despite the similar name. Both are fat-containing, but myelolipoma is adrenal and AML is renal.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/adrenal-myelolipoma',
        tags: ['CT', 'MRI', 'adrenal', 'myelolipoma', 'fat', 'benign'],
      },
    },
    {
      id: 'gu-retroperitoneum-007',
      front: {
        question: 'What is a pheochromocytoma, and what are its classic MRI features and associated syndromes?',
      },
      back: {
        answer: 'Catecholamine-secreting neuroendocrine tumor of adrenal medulla; T2 hyperintense "light bulb sign" and avid enhancement; associated with MEN 2A/2B, VHL, NF1',
        explanation: 'Pheochromocytomas arise from chromaffin cells of the adrenal medulla and cause episodic hypertension, headaches, and diaphoresis. They can be large, heterogeneous, and cystic/necrotic. On MRI, they classically show marked T2 hyperintensity ("light bulb sign") with avid enhancement and variable washout. Approximately 10% are malignant and 10% are extra-adrenal (paragangliomas).',
        keyFact: '"10% rule": 10% malignant, 10% bilateral, 10% extra-adrenal, 10% pediatric. MRI light bulb sign = marked T2 hyperintensity. Most common extra-adrenal site = organ of Zuckerkandl (aortic bifurcation to bladder).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/phaeochromocytoma',
        tags: ['MRI', 'CT', 'adrenal', 'pheochromocytoma', 'tumor', 'neuroendocrine'],
      },
    },
    {
      id: 'gu-retroperitoneum-008',
      front: {
        question: 'What characterizes adrenal cortical carcinoma on imaging, and what hormonal syndromes may it cause?',
      },
      back: {
        answer: 'Large (>4 cm), heterogeneous adrenal mass with internal necrosis/hemorrhage; causes Cushing syndrome, hyperaldosteronism, and/or virilization in ~66% of cases',
        explanation: 'Adrenal cortical carcinoma (ACC) is a rare malignancy (prevalence ~1/1,000,000). Approximately 66% are functional, producing a disordered array of cortical hormones. On imaging, ACC presents as a large, heterogeneous mass with necrosis, hemorrhage, and occasionally calcification. It does not meet CT washout criteria for adenoma.',
        keyFact: 'Any adrenal mass >4 cm without diagnostic imaging features of adenoma or myelolipoma is suspicious. ACC is the adrenal mass with combined hypercortisolism + hyperandrogenaemia (disordered hormone production distinguishes from isolated Conn adenoma).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/adrenal-cortical-carcinoma',
        tags: ['CT', 'adrenal', 'carcinoma', 'malignant', 'tumor'],
      },
    },
    {
      id: 'gu-retroperitoneum-009',
      front: {
        question: 'What syndromes are associated with pheochromocytoma/paraganglioma, and what nuclear medicine studies detect extra-adrenal disease?',
      },
      back: {
        answer: 'MEN 2A, MEN 2B, VHL, NF1, hereditary paraganglioma-pheochromocytoma (SDHx). Detection: I-123 MIBG, In-111 pentetreotide, Ga-68 DOTATATE PET/CT',
        explanation: 'Hereditary paraganglioma-pheochromocytoma syndrome (SDH gene mutations) carries a 50% risk of malignant pheochromocytoma. MEN 2A/2B typically causes bilateral intra-adrenal pheochromocytomas. Carney\'s triad involves gastric leiomyosarcoma, pulmonary chondroma, and paragangliomas. Ga-68 DOTATATE PET/CT has high sensitivity for somatostatin receptor-expressing tumors.',
        keyFact: 'Bladder paraganglioma = post-micturition syncope (catecholamine release during urination). SDHx = highest risk of malignant pheo (50%). Bilateral pheo = think MEN 2A/2B or VHL.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/paraganglioma',
        tags: ['nuclear-medicine', 'adrenal', 'pheochromocytoma', 'paraganglioma', 'hereditary'],
      },
    },
    {
      id: 'gu-retroperitoneum-010',
      front: {
        question: 'What causes adrenal hemorrhage, and how is it distinguished from an adrenal mass on CT?',
      },
      back: {
        answer: 'Causes: anticoagulation, trauma, underlying malignancy, Waterhouse-Friderichsen syndrome (Neisseria meningitidis). Distinguished by lack of enhancement and rapid onset of new mass.',
        explanation: 'Adrenal hemorrhage appears as a hyperattenuating heterogeneous adrenal mass on noncontrast CT that shows no enhancement on postcontrast images (all phases similar in attenuation). If prior imaging is available, rapid onset of a new adrenal "mass" confirms hemorrhage. Follow-up imaging confirms resolution. Bilateral adrenal hemorrhage (Waterhouse-Friderichsen) causes acute adrenal insufficiency.',
        keyFact: 'Adrenal hemorrhage: hyperattenuating on noncontrast CT, DOES NOT ENHANCE on any postcontrast phase. Rapid appearance of new adrenal mass + anticoagulation history = hemorrhage. Follow-up to confirm resolution.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/adrenal-haemorrhage',
        tags: ['CT', 'adrenal', 'hemorrhage', 'trauma'],
      },
    },
  ]},

  { id: 'gu-renal', label: 'Kidneys & Renal Masses', cards: [
    {
      id: 'gu-renal-001',
      front: {
        question: 'What are the normal CT phases used in renal mass evaluation, and what is the primary utility of each?',
      },
      back: {
        answer: 'Noncontrast (fat, calcification, baseline HU) → Nephrographic phase 100s (mass detection and enhancement) → Excretory phase 8–15 min (collecting system, urothelium)',
        explanation: 'A renal mass protocol CT uses at least three phases. The arterial/corticomedullary phase (20–40s) is used for vascular assessment. The nephrographic phase (100s) is most sensitive for tumor detection as the parenchyma enhances homogeneously. The excretory phase (8–15 min) evaluates the collecting system, papilla, and urothelium and can distinguish renal sinus cysts from hydronephrosis.',
        keyFact: 'Enhancement = increase of ≥20 HU from noncontrast to nephrographic phase. Equivocal: 10–19 HU. No enhancement: <10 HU. Nephrographic phase = best for detecting renal tumors.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ct-urography',
        tags: ['CT', 'kidney', 'renal-mass', 'protocol', 'enhancement'],
      },
    },
    {
      id: 'gu-renal-002',
      front: {
        question: 'Summarize the 2019 Bosniak classification of cystic renal masses and the malignancy risk for each category.',
      },
      back: {
        answer: 'I: <1% (simple cyst, no follow-up) | II: <1% (thin septa/wall that may enhance, no follow-up) | IIF: 0–38% (follow-up required) | III: ~50% (surgical or close follow-up) | IV: ~90% (surgical excision)',
        explanation: 'The 2019 update incorporated MRI and refined criteria. Category I is a simple cyst with thin smooth wall. Category II allows up to 3 thin septa and includes hyperdense cysts ≤3 cm. IIF includes any lesion violating Category II rules but not reaching III. Category III requires enhancing thick wall/septa (≥4 mm). Category IV requires any enhancing nodule with acute margins or nodule ≥4 mm with obtuse margins.',
        keyFact: 'Bosniak IIF vs III: IIF = violates Category II but no enhancing thick septa/wall. III = ANY enhancing thick (≥4 mm) septation or wall. Calcification alone does NOT upgrade — removed from 2019 criteria.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/bosniak-classification-of-renal-cystic-masses-1',
        tags: ['CT', 'MRI', 'kidney', 'cystic-mass', 'Bosniak', 'classification'],
      },
    },
    {
      id: 'gu-renal-003',
      front: {
        question: 'What are the classic imaging features of clear cell RCC, papillary RCC, and chromophobe RCC, and how does enhancement differ?',
      },
      back: {
        answer: 'Clear cell: avidly enhances (equal to cortex on CMP), T2 hyperintense, most aggressive. Papillary: hypovascular, enhances less than cortex, T2 hypointense. Chromophobe: intermediate enhancement, best prognosis.',
        explanation: 'Clear cell RCC (~75%) is the most common subtype; it is typically hyperenhancing on corticomedullary phase due to high vascularity, and T2 hyperintense on MRI. Papillary RCC is hypovascular, enhances less than the cortex, and is T2 hypointense (enters the "T2 dark cyst" differential). Chromophobe RCC (~5%) has the best 5-year survival (~90%). Sarcomatoid differentiation can arise from any subtype and portends poor prognosis.',
        keyFact: 'Clear cell = avidly enhances, T2 bright; Papillary = hypoenhances, T2 dark; Chromophobe = Birt-Hogg-Dubé association, best prognosis. All RCCs metastasize as LYTIC bone lesions.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-cell-carcinoma',
        tags: ['CT', 'MRI', 'kidney', 'RCC', 'renal-cell-carcinoma', 'tumor'],
      },
    },
    {
      id: 'gu-renal-004',
      front: {
        question: 'What is the diagnostic significance of macroscopic fat in a non-calcified renal lesion, and what is the exception?',
      },
      back: {
        answer: 'Macroscopic fat in a non-calcified renal lesion = diagnostic of angiomyolipoma (AML). Exception: calcification in a fat-containing lesion raises suspicion for RCC.',
        explanation: 'AML is a benign hamartoma of blood vessels, smooth muscle, and fat. The presence of macroscopic fat is virtually diagnostic. AMLs are the most common benign renal neoplasm. Most are sporadic (unilateral, solitary), but 40% are associated with tuberous sclerosis (multiple, bilateral). When AMLs are >4 cm, risk of spontaneous hemorrhage from microaneurysm rupture increases.',
        keyFact: 'Fat with NO calcification = AML. Fat WITH calcification = think RCC (RCC can rarely contain fat, but nearly always has calcification/ossification). AML >4 cm → increased hemorrhage risk.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-angiomyolipoma',
        tags: ['CT', 'MRI', 'kidney', 'AML', 'angiomyolipoma', 'fat', 'benign'],
      },
    },
    {
      id: 'gu-renal-005',
      front: {
        question: 'What are the key imaging features of oncocytoma, and how does it differ from RCC on imaging?',
      },
      back: {
        answer: 'Oncocytoma: homogeneous enhancement, central scar (33%), spoke-wheel vascularity on Doppler, segmental enhancement inversion sign. Cannot reliably differentiate from RCC on imaging.',
        explanation: 'Oncocytoma is a benign renal tumor arising from tubular cells. The central scar is seen in ~33% and is the most discussed distinguishing feature. The segmental enhancement inversion sign ("flip-flop") refers to early hypoenhancement of the central scar with relative late hyperenhancement compared to tumor. On PET, oncocytoma is typically HOTTER than renal parenchyma (opposite of RCC).',
        keyFact: 'Oncocytoma = PET HOT (RCC = PET cold). Central scar on CT/MRI, spoke-wheel vascularity on US. Despite these features, imaging cannot exclude RCC — most undergo biopsy or resection.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-oncocytoma',
        tags: ['CT', 'MRI', 'ultrasound', 'kidney', 'oncocytoma', 'benign', 'tumor'],
      },
    },
    {
      id: 'gu-renal-006',
      front: {
        question: 'What are the inherited syndromes associated with renal cell carcinoma and what tumor type does each predispose to?',
      },
      back: {
        answer: 'VHL → bilateral clear cell RCC; Birt-Hogg-Dubé → chromophobe RCC + oncocytomas; Tuberous sclerosis → bilateral AMLs (+ slightly increased RCC risk); Hereditary papillary RCC (MET mutation) → bilateral papillary RCC; HLRCC (FH mutation) → papillary RCC + uterine leiomyomas; Sickle cell trait → medullary RCC',
        explanation: 'VHL (chromosome 3 mutation) causes multiple bilateral clear cell RCCs, renal cysts, pheochromocytomas, CNS hemangioblastomas, and pancreatic cysts/neuroendocrine tumors. Birt-Hogg-Dubé (chromosome 17p) also causes cystic lung disease. Tuberous sclerosis causes bilateral AMLs (50% of TS patients), and RCC occurs in ~2–3%.',
        keyFact: 'Mnemonic — VHL: Clear cell. BHD: Chromophobe. TS: AMLs. Papillary hereditary: MET gene (HPRCC). Sickle cell trait: Medullary RCC (highly aggressive, young males). HLRCC: Papillary + uterine leiomyomas.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/von-hippel-lindau-disease',
        tags: ['CT', 'MRI', 'kidney', 'RCC', 'hereditary', 'VHL', 'tuberous-sclerosis'],
      },
    },
    {
      id: 'gu-renal-007',
      front: {
        question: 'What is renal medullary carcinoma, and with what condition is it associated?',
      },
      back: {
        answer: 'Aggressive infiltrative central renal mass in young adult males with sickle cell TRAIT; mean survival ~15 months',
        explanation: 'Renal medullary carcinoma is an extremely aggressive neoplasm arising from collecting duct cells in the renal medulla. On CT, it appears as an ill-defined, infiltrative, hypovascular central renal mass with necrosis and hemorrhage. It is almost exclusively seen in young adults with sickle cell trait (not sickle cell disease). The imaging appearance mimics renal TCC, which occurs in an older population.',
        keyFact: 'Young Black male + sickle cell TRAIT + central infiltrative renal mass = medullary carcinoma. Not to be confused with collecting duct carcinoma (which it resembles). Mean survival ~15 months; poor response to chemotherapy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-medullary-carcinoma',
        tags: ['CT', 'kidney', 'RCC', 'medullary', 'sickle-cell', 'tumor'],
      },
    },
    {
      id: 'gu-renal-008',
      front: {
        question: 'What are the common imaging presentations of renal lymphoma?',
        hint: 'Most common pattern involves bilateral involvement',
      },
      back: {
        answer: 'Multiple hypoechoic/hypoenhancing bilateral renal masses (most common, ~50%); direct retroperitoneal extension; diffuse infiltration causing nephromegaly; solitary mass',
        explanation: 'Renal lymphoma (most commonly high-grade B-cell) disseminates hematogenously or spreads from the retroperitoneum. Primary renal lymphoma is very rare. The key imaging feature is that retroperitoneal adenopathy is usually present. Lymphoma is unique among renal masses in that it tends to preserve the normal reniform shape despite infiltration. Leukemia most commonly affects the kidney of all visceral organs, causing smooth bilateral enlargement.',
        keyFact: 'Renal lymphoma = most common METASTATIC tumor to invade the kidney. Most common pattern = multiple bilateral hypoechoic cortical masses + retroperitoneal adenopathy. Preserves reniform shape = key feature.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-lymphoma',
        tags: ['CT', 'ultrasound', 'kidney', 'lymphoma', 'bilateral', 'tumor'],
      },
    },
    {
      id: 'gu-renal-009',
      front: {
        question: 'What is a fat-poor (lipid-poor) AML and how should it be worked up on MRI?',
      },
      back: {
        answer: 'T2 hypointense solid renal mass without macroscopic fat on CT; MRI with chemical shift and DWI helps but biopsy usually required to exclude RCC',
        explanation: 'Approximately 4–5% of AMLs lack macroscopic fat (fat-poor AML). These appear as hyperdense enhancing masses on CT. On MRI, fat-poor AML is classically T2 hypointense (which it shares with papillary RCC). A T2 hypointense mass may represent fat-poor AML or papillary RCC — biopsy is usually recommended. In contrast, T2 hyperintense solid mass suggests clear cell RCC or oncocytoma.',
        keyFact: 'T2 dark + no fat = lipid-poor AML vs. papillary RCC (biopsy usually needed). T2 bright + no fat = clear cell RCC vs. oncocytoma. Fat-poor AMLs are overrepresented in tuberous sclerosis (~30% of TS AMLs are lipid-poor).',
        tags: ['MRI', 'kidney', 'AML', 'renal-mass', 'T2'],
      },
    },
    {
      id: 'gu-renal-010',
      front: {
        question: 'How does RCC invade the venous system, and how does tumor thrombus differ from bland thrombus on Doppler?',
      },
      back: {
        answer: 'RCC has propensity for renal vein → IVC → right atrium invasion. Tumor thrombus: arterial Doppler flow within thrombus on color Doppler; bland thrombus: no internal flow.',
        explanation: 'Renal vein invasion (Robson stage IIIA) and IVC extension are important for surgical planning. Tumor thrombus will demonstrate internal color Doppler flow with an arterial waveform on spectral Doppler, distinguishing it from bland clot. MRI is excellent for characterizing the extent of IVC involvement relative to the hepatic veins and right atrium, which determines the surgical approach.',
        keyFact: 'Arterial Doppler flow within a renal vein filling defect = tumor thrombus. No flow = bland thrombus. IVC involvement below hepatic veins (Robson IVB) vs. above (IIIVC) changes operative approach. Tumor thrombus does not preclude surgery.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-cell-carcinoma',
        tags: ['CT', 'MRI', 'ultrasound', 'kidney', 'RCC', 'vascular', 'tumor-thrombus'],
      },
    },
    {
      id: 'gu-renal-011',
      front: {
        question: 'What is autosomal dominant polycystic kidney disease (ADPKD), and what extra-renal manifestations are associated?',
      },
      back: {
        answer: 'ADPKD: bilateral enlarged kidneys with multiple cysts of varying attenuation; extra-renal: hepatic cysts (70%), intracranial saccular aneurysms (15%), seminal vesicle cysts, mitral valve prolapse',
        explanation: 'ADPKD is the most common inherited renal disease and accounts for 10% of patients on long-term dialysis. Patients present with progressive renal failure in their 3rd–4th decades. On imaging, kidneys are markedly enlarged with multiple cysts of varying attenuation due to internal hemorrhage. ADPKD does not intrinsically increase RCC risk, but dialysis (which many ADPKD patients require) does.',
        keyFact: 'ADPKD: berry aneurysms in 15% (screen with MRA), hepatic cysts 70%, seminal vesicle cysts. Cysts have variable HU due to hemorrhage. Does NOT increase RCC risk per se — but dialysis does.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/autosomal-dominant-polycystic-kidney-disease',
        tags: ['CT', 'MRI', 'ultrasound', 'kidney', 'ADPKD', 'cystic-disease', 'hereditary'],
      },
    },
    {
      id: 'gu-renal-012',
      front: {
        question: 'What distinguishes ADPKD from ARPKD on imaging, and what hepatic finding is characteristic of ARPKD?',
      },
      back: {
        answer: 'ADPKD: large bilateral cysts, adult. ARPKD: innumerable tiny cysts too small to resolve individually (echogenic kidneys on US), neonates. ARPKD always has congenital hepatic fibrosis (not cysts).',
        explanation: 'ARPKD is a diagnosis of infancy with poor prognosis. The cysts are so small they cannot be individually resolved by ultrasound, causing diffusely enlarged echogenic kidneys with loss of corticomedullary differentiation. If the child survives infancy, congenital hepatic fibrosis develops — this is ALWAYS present. The ratio of liver and kidney disease is inversely related (worse liver = better kidneys and vice versa).',
        keyFact: 'ARPKD: bilateral enlarged echogenic kidneys on neonatal US + congenital hepatic FIBROSIS (not cysts — that is ADPKD). ADPKD = "AD adult" with large cysts. ARPKD = "AR infant" with echogenic kidneys.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/autosomal-recessive-polycystic-kidney-disease',
        tags: ['ultrasound', 'CT', 'kidney', 'ARPKD', 'cystic-disease', 'pediatric'],
      },
    },
    {
      id: 'gu-renal-013',
      front: {
        question: 'What is the classic triad of causes of medullary nephrocalcinosis, and what are the causes of cortical nephrocalcinosis?',
      },
      back: {
        answer: 'Medullary: hyperparathyroidism (most common), medullary sponge kidney, type 1 RTA, furosemide (in children). Cortical: acute cortical necrosis, chronic glomerulonephritis, Alport syndrome, hyperoxaluria.',
        explanation: 'Medullary nephrocalcinosis involves calcification of the renal medullary pyramids and is much more common than cortical nephrocalcinosis. It is caused by hypercalcemia/hypercalciuria. Cortical nephrocalcinosis is dystrophic peripheral calcification sparing the medullary pyramids — it indicates diffuse cortical injury. Cortical necrosis on CT shows a lack of enhancement of the renal cortex with preserved medullary enhancement.',
        keyFact: 'Medullary nephrocalcinosis mnemonic: "DRHIP": Distal RTA, RTA, Hyperparathyroidism, Infection (TB), Papillary necrosis, medullary sponge kidney. Cortical nephrocalcinosis = cortical necrosis, Alport, hyperoxaluria.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/nephrocalcinosis',
        tags: ['CT', 'ultrasound', 'XR', 'kidney', 'nephrocalcinosis', 'calcification'],
      },
    },
    {
      id: 'gu-renal-014',
      front: {
        question: 'What are the imaging signs of papillary necrosis and what conditions cause it?',
      },
      back: {
        answer: 'Ball-on-tee sign, lobster claw sign, signet ring sign on CT urography. Causes: POSTCARD mnemonic — Pyelonephritis, Obstruction, Sickle cell, TB, Cirrhosis, Analgesics (NSAIDs), Renal vein thrombosis, Diabetes',
        explanation: 'Papillary necrosis is ischemic necrosis and sloughing of renal papillary tissue. On CT urography (excretory phase), pooling of contrast in papillary regions creates distinctive patterns. The ball-on-tee sign describes contrast filling a central papilla, the lobster claw sign describes contrast filling only the periphery of the papilla, and the signet ring sign describes contrast surrounding a sloughed papilla.',
        keyFact: 'POSTCARD mnemonic for papillary necrosis causes. Diabetes is the most common cause. 50% of sickle cell patients develop papillary necrosis. Sloughed papilla can cause collecting system filling defects.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-papillary-necrosis',
        tags: ['CT', 'kidney', 'papillary-necrosis', 'collecting-system', 'IVP'],
      },
    },
    {
      id: 'gu-renal-015',
      front: {
        question: 'What is xanthogranulomatous pyelonephritis (XGP), what is its classic imaging finding, and how does it present?',
      },
      back: {
        answer: 'Chronic destructive granulomatous infection replacing renal parenchyma with fibro-fatty tissue. Classic: "bear paw sign" — staghorn calculus + radially arranged hypoattenuating masses. Associated organisms: Proteus mirabilis, E. coli.',
        explanation: 'XGP is a chronic renal infection due to obstructing staghorn calculi, leading to replacement of renal parenchyma with fibro-fatty inflammatory tissue. The bear paw sign represents the configuration of hypoattenuating fibro-fatty masses arranged radially, reminiscent of a bear\'s paw. XGP can be diffuse (85%) or localized. Perinephric stranding and Gerota\'s/Zuckerkandl\'s fascia thickening are common. Treatment is nephrectomy.',
        keyFact: 'XGP = staghorn calculus + "bear paw sign" on CT = destroyed kidney filled with fatty inflammatory tissue. Confused with: acute obstructing stone with pyonephrosis, or renal neoplasm with calcification.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/xanthogranulomatous-pyelonephritis',
        tags: ['CT', 'kidney', 'infection', 'XGP', 'staghorn'],
      },
    },
    {
      id: 'gu-renal-016',
      front: {
        question: 'What is emphysematous pyelonephritis, in what patient population does it occur, and what is the emergency management?',
      },
      back: {
        answer: 'Gas replacing renal parenchyma caused by gas-forming organisms (E. coli most common); occurs almost exclusively in diabetics or immunocompromised. Emergency: broad-spectrum antibiotics + nephrectomy. Mortality up to 40%.',
        explanation: 'Emphysematous pyelonephritis is a severe complication of acute pyelonephritis characterized by parenchymal replacement by gas. On ultrasound, high-amplitude echoes with dirty posterior acoustic shadowing represent gas locules. Gas extending into the perinephric space is associated with a worse prognosis. This is distinct from emphysematous pyelitis, where gas is localized to the collecting system (less severe).',
        keyFact: 'Emphysematous PYELOnephritis = parenchymal gas = surgical emergency (nephrectomy). Emphysematous PYELITIS = collecting system gas only = less severe, medical management often sufficient. Both strongly associated with diabetes.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/emphysematous-pyelonephritis',
        tags: ['CT', 'ultrasound', 'kidney', 'infection', 'gas', 'diabetes'],
      },
    },
    {
      id: 'gu-renal-017',
      front: {
        question: 'What are the imaging findings of renal tuberculosis, and what is the "putty kidney"?',
      },
      back: {
        answer: 'Early: calyceal blunting (moth-eaten calyces). Late: focal cavitary lesions with calcification, scarring, infundibular strictures, papillary necrosis. End-stage "putty kidney" = autonephrectomy with dystrophic calcification replacing entire atrophic kidney.',
        explanation: 'Renal TB results from hematogenous dissemination of Mycobacterium tuberculosis. Active pulmonary TB is present in only ~10%. Chronic changes tend to be unilateral despite bilateral initial infection. The phantom calyx sign describes absence of opacification of a calyx due to focal infundibular stenosis. Calcified mesenteric lymph nodes and calcified adrenal glands may also be seen.',
        keyFact: 'Renal TB progression: calyceal blunting → cavitary necrosis → infundibular stricture ("phantom calyx") → ureteral strictures → contracted bladder → autonephrectomy (putty kidney). Putty kidney = end-stage TB = completely calcified atrophic kidney.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-tuberculosis',
        tags: ['CT', 'IVP', 'kidney', 'tuberculosis', 'infection', 'calcification'],
      },
    },
    {
      id: 'gu-renal-018',
      front: {
        question: 'What is a Page kidney, and what is the mechanism of hypertension?',
      },
      back: {
        answer: 'Extrinsic renal compression by subcapsular hematoma/urinoma → decreased renal blood flow → activated renin-angiotensin → secondary hypertension. Classic history: hypertension weeks after renal trauma, biopsy, or lithotripsy.',
        explanation: 'Named after I. H. Page who performed cellophane-wrapping experiments on kidneys. The unyielding renal capsule prevents expansion of the subcapsular collection, causing parenchymal compression and hemodynamic alteration. Hypertension typically develops several months after the initial event. Percutaneous drainage of the hematoma may be effective treatment.',
        keyFact: 'Page kidney = subcapsular hematoma + new hypertension after renal procedure. The tough renal capsule is the key — if the pancreas had a capsule, you could get "Page pancreas." Percutaneous drainage is often curative.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/page-kidney',
        tags: ['CT', 'ultrasound', 'kidney', 'trauma', 'hypertension', 'hematoma'],
      },
    },
    {
      id: 'gu-renal-019',
      front: {
        question: 'What is the AAST (OIS) classification of renal trauma, and which grades involve the collecting system and vascular structures?',
      },
      back: {
        answer: 'Grade I: contusion/subcapsular hematoma (95% of injuries). Grade II: superficial laceration ≤1 cm. Grade III: deep laceration >1 cm, no collecting system injury. Grade IV: collecting system injury (urinary extravasation), segmental vascular injury. Grade V: main renal artery/vein avulsion, shattered kidney.',
        explanation: 'The OIS scale was updated in 2018 to include vascular injuries. A key pitfall: Grade III injuries may initially lack urinary extravasation if a clot is present, but extravasation may appear later as urokinase lyses the clot. Traumatic renal artery thrombosis causes permanent renal function loss after ~2 hours of ischemia. Delayed imaging is essential to detect urinary extravasation.',
        keyFact: 'Delayed CT phase is essential in renal trauma — may show urinary extravasation (Grade IV) that is absent on initial imaging due to clot. Active bleeding = increasing density/size on delayed phase. Pseudoaneurysm/AVF = decreasing density on delayed phase.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-trauma',
        tags: ['CT', 'kidney', 'trauma', 'AAST', 'grading', 'laceration'],
      },
    },
    {
      id: 'gu-renal-020',
      front: {
        question: 'What are the sonographic criteria for a simple renal cyst, and what SRU follow-up guidelines apply to simple ovarian/renal cysts?',
      },
      back: {
        answer: 'Simple cyst: imperceptibly thin wall, anechoic, posterior through-transmission, no internal flow. SRU: premenopausal simple ovarian cyst ≤7 cm = no follow-up; >7 cm = follow-up 2–6 months. Simple renal cyst: no follow-up even if large.',
        explanation: 'A simple renal cyst that meets sonographic criteria is benign and requires no follow-up regardless of size. On CT, a simple cyst must attenuate close to 0 HU (must be <20 HU), have no enhancing components, and an imperceptible wall (Bosniak I). Harmonic imaging helps confirm simple cyst by eliminating artifactual low-level echoes.',
        keyFact: 'Simple renal cyst = no follow-up needed regardless of size. Lesions <20 HU on CT with no enhancement = Bosniak I. Bosniak I and II = <1% malignancy risk = no follow-up needed.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-cyst',
        tags: ['ultrasound', 'CT', 'kidney', 'cyst', 'Bosniak', 'follow-up'],
      },
    },
    {
      id: 'gu-renal-021',
      front: {
        question: 'What is the Weigert-Meyer rule for duplicated collecting systems, and which moiety is at risk for what complication?',
      },
      back: {
        answer: 'Upper pole ureter: ectopic insertion (medial and inferior) → ureterocele and obstruction. Lower pole ureter: normal insertion → vesicoureteral reflux.',
        explanation: 'In a complete ureteral duplication, the upper pole ureter crosses the lower pole ureter and inserts ectopically (below and medial to the normal ureteral orifice). Ectopic insertion commonly results in ureterocele formation and obstruction of the upper moiety. The lower moiety ureter inserts normally at the trigone but is prone to vesicoureteral reflux. Mnemonic: "upper obstructs, lower refluxes."',
        keyFact: '"Upper obstructs, lower refluxes" — Weigert-Meyer rule. Upper pole → ureterocele (dilated ureter inserts ectopically = cobra head sign on imaging). Lower pole → reflux.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/weigert-meyer-rule',
        tags: ['CT', 'ultrasound', 'kidney', 'duplication', 'Weigert-Meyer', 'congenital'],
      },
    },
    {
      id: 'gu-renal-022',
      front: {
        question: 'What is a striated nephrogram, and what are the differential diagnoses for unilateral versus bilateral patterns?',
      },
      back: {
        answer: 'Alternating linear bands of low/high enhancement in a radial pattern. Unilateral: acute ureteral obstruction, acute pyelonephritis, renal infarct, renal vein thrombosis. Bilateral: pyelonephritis, ATN, hypotension, ARPKD.',
        explanation: 'A striated nephrogram results from alternating zones of normal and reduced perfusion through the corticomedullary layers. It is a nonspecific pattern but helps narrow the differential. Bilateral striated nephrogram in a hypotensive patient suggests ATN or systemic hypotension, while unilateral is more likely obstructive or infectious.',
        keyFact: 'Striated nephrogram = alternating enhancement bands, radial pattern. Unilateral → acute obstruction or pyelonephritis first. Bilateral → hypotension/ATN or bilateral obstruction first.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/striated-nephrogram',
        tags: ['CT', 'kidney', 'nephrogram', 'pyelonephritis', 'obstruction'],
      },
    },
    {
      id: 'gu-renal-023',
      front: {
        question: 'What is lithium nephropathy and what are its characteristic imaging features?',
      },
      back: {
        answer: 'Long-term lithium use → nephrogenic diabetes insipidus or chronic renal insufficiency. Classic: numerous uniform microcysts (2–5 mm) in bilateral normal-sized kidneys; best seen on MRI.',
        explanation: 'Lithium nephropathy is related to long-term lithium use (bipolar disorder treatment). The classic appearance is innumerable scattered uniform microcysts in bilateral normal-sized kidneys. On ultrasound, these appear as punctate echogenic foci. CT may show calcification within the cysts. MRI is the most sensitive modality, showing tiny fluid-intensity nonenhancing cysts in the renal cortex and medulla.',
        keyFact: 'Bipolar disorder + multiple bilateral tiny renal cysts = lithium nephropathy. Key: cysts are UNIFORM and MICROCYSTS (2–5 mm), bilateral, in NORMAL-SIZED kidneys (distinguishes from uremic cystic disease where kidneys are small and atrophic).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/lithium-nephropathy',
        tags: ['MRI', 'CT', 'ultrasound', 'kidney', 'lithium', 'cystic', 'toxic'],
      },
    },
    {
      id: 'gu-renal-024',
      front: {
        question: 'What is medullary sponge kidney, and what is its classic imaging appearance?',
      },
      back: {
        answer: 'Cystic dilation of collecting tubules in the medullary pyramids → stasis and stone formation. Classic: "paintbrush" or "fan-shaped" streaks of contrast extending from papillae on IVP/excretory CT; medullary nephrocalcinosis.',
        explanation: 'Medullary sponge kidney (tubular ectasia) is a congenital condition associated with Ehlers-Danlos syndrome, Caroli disease, and Beckwith-Wiedemann syndrome. The ectatic tubules cause stasis and recurrent nephrolithiasis. On excretory urography or CT, tubular ectasia produces paintbrush-like streaks of contrast extending from the papillae into the dilated tubules. Associated calcifications of the medullary pyramids (medullary nephrocalcinosis) are classic.',
        keyFact: 'Medullary sponge kidney = paintbrush/fan streaks of contrast from papillae + medullary nephrocalcinosis. Associated with Ehlers-Danlos, Beckwith-Wiedemann (most testable association). Often UNILATERAL (asymmetric) nephrocalcinosis.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/medullary-sponge-kidney',
        tags: ['CT', 'IVP', 'kidney', 'medullary-sponge-kidney', 'nephrocalcinosis', 'congenital'],
      },
    },
  ]},

  { id: 'gu-stones', label: 'Stones, Obstruction & Ureter', cards: [
    {
      id: 'gu-stones-001',
      front: {
        question: 'What are the types of urinary stones, which are radiopaque on plain film, and which are not visible on CT?',
      },
      back: {
        answer: 'Radiopaque on XR: calcium oxalate, calcium phosphate. Radiolucent on XR: uric acid, xanthine, matrix, struvite (pure), indinavir. Not seen on CT: indinavir stones only (matrix stones are also nearly invisible).',
        explanation: 'Calcium-containing stones (73% of all stones) are the most radiopaque. On CT, almost all stones are visible — the exception is indinavir stones (HIV antiretroviral therapy) which are not visible on CT. Pure matrix stones are also nearly radiolucent on CT. Uric acid stones are radiolucent on XR but visible on CT (lower HU <500). Dual-energy CT can differentiate stone composition: uric acid stones show minimal HU change between low and high kVp (ratio ~1.1), while calcium stones show the largest change (ratio >1.25).',
        keyFact: 'Only INDINAVIR stones are invisible on CT. Uric acid stones = radiolucent on XR but visible on CT (lower HU, minimal dual-energy change). Dual-energy CT: uric acid → similar HU at 80 and 140 kVp; calcium → higher HU at 80 kVp.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/urolithiasis',
        tags: ['CT', 'XR', 'kidney', 'urolithiasis', 'stones', 'dual-energy'],
      },
    },
    {
      id: 'gu-stones-002',
      front: {
        question: 'Where do ureteral stones most commonly lodge, and what is the soft tissue rim sign?',
      },
      back: {
        answer: 'Three common locations: ureteropelvic junction (UPJ), pelvic brim, ureterovesical junction (UVJ). Soft tissue rim sign: thin halo of soft tissue (edematous ureteral wall) around a calcification, favoring ureteral stone over phlebolith.',
        explanation: 'Secondary signs of ureteral obstruction include ipsilateral hydronephrosis and perinephric stranding. The soft tissue rim sign helps distinguish a ureteral stone from a pelvic phlebolith. A phlebolith often has a lucent center and no soft tissue rim. Ureteral jets on color Doppler are controversial — presence argues against complete obstruction but absence does not confirm it.',
        keyFact: 'Soft tissue rim sign = edematous ureteral wall surrounding a calcification → favors ureteral stone over phlebolith. Phleboliths: often have lucent center (target sign). UVJ is the most common site for stones to lodge (narrowest point of natural ureter).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/soft-tissue-rim-sign',
        tags: ['CT', 'kidney', 'ureter', 'stones', 'obstruction'],
      },
    },
    {
      id: 'gu-stones-003',
      front: {
        question: 'What is the resistive index (RI) in renal Doppler, how is it calculated, and what threshold suggests acute obstruction?',
      },
      back: {
        answer: 'RI = (PSV – EDV) / PSV. RI >0.7 on affected side, or >0.1 difference between kidneys, suggests acute obstruction. Normal RI <0.7.',
        explanation: 'The RI reflects vascular resistance. A swollen kidney compressed by its capsule increases resistance, preferentially impairing passive diastolic flow. RI is useful for acute obstruction but NOT chronic obstruction. Bilateral elevated RIs (>0.7) are nonspecific and can reflect any medical renal disease. With complete obstruction and no diastolic flow, RI = 1; reversal of diastolic flow produces an RI technically >1.',
        keyFact: 'RI >0.7 on affected side OR >0.1 asymmetry between kidneys = suggests acute obstruction. RI is NOT useful for chronic obstruction. Bilateral elevated RI = nonspecific (medical renal disease). RI formula: (PSV-EDV)/PSV.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-resistive-index',
        tags: ['ultrasound', 'Doppler', 'kidney', 'obstruction', 'resistive-index'],
      },
    },
    {
      id: 'gu-stones-004',
      front: {
        question: 'What is ureteropelvic junction (UPJ) obstruction and what is its key imaging finding?',
      },
      back: {
        answer: 'Obstruction at the UPJ causing hydronephrosis without hydroureter. Key finding: dilated renal pelvis with normal caliber ureter distal to the obstruction.',
        explanation: 'Primary UPJ obstruction may be caused by a congenital aperistaltic segment of ureter, high insertion of the ureter on the renal pelvis, or crossing vessels causing extrinsic compression. The key imaging distinction from more distal obstruction is the presence of a dilated renal pelvis with a normal-caliber ureter. Secondary UPJ obstruction is caused by stones, infection, or prior surgery. Renal scintigraphy (MAG-3 with furosemide) can assess functional significance.',
        keyFact: 'UPJ obstruction = dilated renal pelvis + NORMAL ureter = hydronephrosis without hydroureter. Most common cause in children = aperistaltic segment. Most common in adults = crossing vessel. Confirm with MAG-3 diuretic renogram.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ureteropelvic-junction-obstruction',
        tags: ['CT', 'ultrasound', 'ureter', 'UPJ', 'obstruction', 'hydronephrosis'],
      },
    },
    {
      id: 'gu-stones-005',
      front: {
        question: 'What is an ureterocele, what are the types, and what is the cobra head sign?',
      },
      back: {
        answer: 'Focal dilation of the distal ureter protruding into the bladder. Orthotopic (adult-type): normal insertion, usually asymptomatic. Ectopic: duplicated system, upper pole ureter, ectopic insertion (Weigert-Meyer). Cobra head sign = orthotopic ureterocele on IVP/CT urography.',
        explanation: 'An orthotopic ureterocele is seen in the setting of a normally inserting ureter and is most common in adults. Ectopic ureteroceles occur in the setting of a duplicated collecting system with ectopic upper pole ureteral insertion and are usually diagnosed in children. A pseudoureterocele represents intussusception of the distal ureter into the bladder due to tumor, radiation cystitis, or vesicoureteral junction stone.',
        keyFact: 'Orthotopic ureterocele = cobra head sign (radiolucent halo surrounding opacified distal ureter). Ectopic ureterocele = duplicated system + upper pole obstruction (Weigert-Meyer). Pseudoureterocele = mass causing intussusception — think TCC.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ureterocele',
        tags: ['CT', 'IVP', 'ureter', 'ureterocele', 'congenital', 'cobra-head'],
      },
    },
    {
      id: 'gu-stones-006',
      front: {
        question: 'What are transitional cell carcinoma (TCC) of the ureter and its key imaging features on CT urography?',
      },
      back: {
        answer: 'Most common ureteral malignancy. CT urography: short segment wall thickening, stricture, or filling defect on excretory phase; "goblet sign" or "champagne glass sign." 40% multifocal — always check bladder.',
        explanation: 'TCC (urothelial carcinoma) is by far the most common ureteral neoplasm. Ureteral TCC is rare — bladder TCC is 100x more common. Within the ureter, 75% of TCCs occur in the distal third. Given propensity for multifocal disease, synchronous bladder mass should always be sought. Risk factors: smoking, aromatic amines, cyclophosphamide, aristolochic acid (Balkan nephropathy), horseshoe kidney.',
        keyFact: 'Upper tract TCC → 40% chance of subsequent bladder TCC. Bladder TCC → only 4% chance of upper tract TCC. Filling defect in distal ureter = TCC until proven otherwise. Goblet sign = dilated ureter around filling defect on IVP/CTU.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/transitional-cell-carcinoma-of-the-ureter',
        tags: ['CT', 'ureter', 'TCC', 'urothelial-carcinoma', 'filling-defect'],
      },
    },
    {
      id: 'gu-stones-007',
      front: {
        question: 'What is retroperitoneal fibrosis and how does it deviate the ureters? Compare to lateral deviation causes.',
      },
      back: {
        answer: 'RPF: medial ureteral deviation and "waisting." Lateral deviation: retroperitoneal adenopathy, aortic aneurysm, psoas hypertrophy (proximal ureter), pelvic lipomatosis (distal ureter), retrocaval ureter (right side lateral → medial).',
        explanation: 'The pattern of ureteral deviation is a classic discriminator on CT and IVP. RPF causes medial deviation because the fibrosis encases and pulls the ureters centrally. Retroperitoneal lymphadenopathy causes lateral displacement because the enlarged nodes push the ureters outward. Pelvic lipomatosis causes superior displacement of the bladder with lateral deviation of the distal ureters.',
        keyFact: 'RPF = MEDIAL ureteral deviation. Adenopathy/aneurysm = LATERAL ureteral deviation. Pelvic lipomatosis = pear-shaped bladder + lateral ureteral deviation. These are classic "This vs That" board questions.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/retroperitoneal-fibrosis',
        tags: ['CT', 'ureter', 'deviation', 'retroperitoneal-fibrosis', 'IVP'],
      },
    },
    {
      id: 'gu-stones-008',
      front: {
        question: 'What is pyonephrosis and how is it distinguished from simple hydronephrosis on ultrasound?',
      },
      back: {
        answer: 'Pyonephrosis = infected obstructed collecting system ("pus under pressure"). US: nonshadowing echogenic debris or fluid-fluid level within a dilated collecting system (vs. anechoic fluid in simple hydronephrosis). CT cannot reliably distinguish.',
        explanation: 'Pyonephrosis requires emergent relief of obstruction (percutaneous nephrostomy or ureteral stent) before antibiotic treatment alone is effective. The clinical context (fever, flank pain, positive urine culture) combined with imaging findings is key. On ultrasound, the presence of low-level internal echoes, fluid-fluid levels, or debris within dilated calyces suggests pyonephrosis. CT cannot reliably differentiate pyonephrosis from simple hydronephrosis based on density alone.',
        keyFact: 'Pyonephrosis = echogenic dependent material in a dilated collecting system on US = surgical emergency (emergent decompression). CT CANNOT distinguish pyonephrosis from simple hydronephrosis reliably.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/pyonephrosis',
        tags: ['ultrasound', 'CT', 'kidney', 'pyonephrosis', 'infection', 'obstruction'],
      },
    },
    {
      id: 'gu-stones-009',
      front: {
        question: 'What is ureteritis cystica and how does it differ from ureteral pseudodiverticulosis?',
      },
      back: {
        answer: 'Ureteritis cystica: multiple tiny subepithelial cysts → filling defects in the lumen. Ureteral pseudodiverticulosis: multiple small outpouchings (not cysts). Both result from chronic inflammation. Ureteritis cystica: NOT premalignant. Pseudodiverticulosis: associated with malignancy.',
        explanation: 'Ureteritis cystica is a benign response to chronic urinary tract inflammation. It appears as multiple tiny filling defects (from the subepithelial cysts) in the proximal ureter and renal pelvis. It has no malignant potential. Pseudodiverticulosis affects the upper and middle ureter (75% bilateral) and is associated with urothelial malignancy. Both are seen in diabetics with recurrent UTIs.',
        keyFact: 'Ureteritis cystica = filling DEFECTS (cysts). Pseudodiverticulosis = multiple outPOUCHINGS. Ureteritis cystica = NOT premalignant. Pseudodiverticulosis = associated with malignancy (increased cancer risk). Both from chronic inflammation.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ureteritis-cystica',
        tags: ['CT', 'IVP', 'ureter', 'ureteritis-cystica', 'filling-defect', 'infection'],
      },
    },
  ]},

  { id: 'gu-bladder', label: 'Bladder & Urethra', cards: [
    {
      id: 'gu-bladder-001',
      front: {
        question: 'What is the most common bladder malignancy, and how is muscle invasion assessed on MRI?',
      },
      back: {
        answer: 'Transitional cell (urothelial) carcinoma (~90%). MRI: T2 signal invading through the hypointense muscularis propria = muscle-invasive (≥stage IIb). Non-muscle-invasive = 70%, typically resected endoscopically.',
        explanation: 'TCC presents with painless hematuria in older males with risk factors (smoking, aromatic amines). On MRI, the muscularis propria appears as a T2 hypointense band. Tumor extending through this band indicates muscle-invasive disease, which requires radical cystectomy. Restricted diffusion (low ADC) helps characterize the solid "cap" of tumor. Delayed CT urography is most sensitive for bladder tumors (white background of contrast highlights soft tissue).',
        keyFact: 'Bladder TCC: gross hematuria in older male = cystoscopy + CT urography. MRI T2 hypointense muscularis propria intact = non-invasive. Interrupted muscularis propria = muscle-invasive = radical cystectomy. Excretory/delayed CT phase = most sensitive for tumor detection.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/transitional-cell-carcinoma-of-the-bladder',
        tags: ['MRI', 'CT', 'bladder', 'TCC', 'urothelial-carcinoma', 'staging'],
      },
    },
    {
      id: 'gu-bladder-002',
      front: {
        question: 'What bladder cancer subtypes are associated with schistosomiasis, urachal remnant, and rhabdomyosarcoma (pediatric)?',
      },
      back: {
        answer: 'Schistosomiasis → squamous cell carcinoma (calcified bladder/distal ureters on plain film). Urachal remnant → adenocarcinoma (midline dome, calcification). Pediatric → rhabdomyosarcoma (sarcoma botryoides = grape-like masses).',
        explanation: 'Squamous cell carcinoma is the second most common bladder cancer and is strongly associated with Schistosoma hematobium (heavy calcification of bladder wall on XR). It favors the trigone and lateral walls. Urachal adenocarcinoma arises from urachal remnant (between bladder dome and umbilicus) and 70% have calcification. Rhabdomyosarcoma is the most common bladder cancer in children <10 years old; the botryoid variant produces grape-like polypoid masses.',
        keyFact: 'SCC + bladder = Schistosomiasis (both start with "S") or chronic suprapubic catheter. Adenocarcinoma + midline bladder dome = Urachal remnant. Pediatric grape-like bladder mass = RMS (sarcoma botryoides). Calcifications in urachal remnant = concerning for cancer.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/urachal-carcinoma',
        tags: ['CT', 'XR', 'bladder', 'squamous-cell', 'adenocarcinoma', 'urachal'],
      },
    },
    {
      id: 'gu-bladder-003',
      front: {
        question: 'How is bladder rupture classified, and what is the management of each type?',
      },
      back: {
        answer: 'Extraperitoneal (80–90%): usually with pelvic fracture, molar tooth sign on CT cystography, managed conservatively (Foley catheter). Intraperitoneal: contrast interdigitating between bowel loops, requires surgical repair.',
        explanation: 'CT cystography is the gold standard for bladder rupture evaluation. The bladder MUST be distended with at least 300 mL of dilute contrast instilled retrograde via Foley — routine excretory phase CT is not adequate. Extraperitoneal rupture is caused by direct laceration from a bone fragment. Intraperitoneal rupture occurs at the bladder dome (weakest point) from a blow to a full bladder. Combined injuries exist. If urethral injury is suspected (blood at meatus), RUG must be performed BEFORE Foley placement.',
        keyFact: 'CT cystography requires minimum 300 mL retrograde bladder distension — excretory phase CT is NOT adequate. Extraperitoneal = molar tooth sign in space of Retzius = Foley drainage. Intraperitoneal = contrast between bowel loops = surgery.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/bladder-rupture',
        tags: ['CT', 'bladder', 'trauma', 'rupture', 'cystography'],
      },
    },
    {
      id: 'gu-bladder-004',
      front: {
        question: 'What is the most common cause of a colovesical fistula, and how does the imaging location of fistula differ by etiology?',
      },
      back: {
        answer: 'Most common cause: diverticular disease. Colovesical = diverticulitis; ileovesical = Crohn\'s; rectovesical = neoplasm or trauma. Air in the bladder (pneumaturia) without instrumentation = pathognomonic for fistula.',
        explanation: 'Colovesical fistulas are more common in men; women are at higher risk after hysterectomy (uterus normally protects the bladder). Pneumaturia (air in the bladder without recent Foley or instrumentation) is pathognomonic for a fistula. CT is the best imaging modality, often showing a localized inflammatory process, thickening of adjacent bowel and bladder walls, and sometimes direct contrast/air communication.',
        keyFact: 'Air in bladder = colovesical fistula until proven otherwise. Colovesical = diverticulitis (#1). Ileovesical = Crohn\'s. Rectovesical = cancer/trauma. Women less affected by fistula because uterus protects bladder from colon.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/colovesical-fistula',
        tags: ['CT', 'bladder', 'fistula', 'diverticulitis', 'Crohn'],
      },
    },
    {
      id: 'gu-bladder-005',
      front: {
        question: 'What urethral injury type is most common in blunt pelvic trauma, and how is urethral injury diagnosed?',
      },
      back: {
        answer: 'Type III: disruption of urogenital diaphragm + bulbomembranous urethra rupture, contrast extravasation into pelvis AND perineum. Diagnosed with retrograde urethrogram (RUG) if blood at urethral meatus, painful urination, or inability to void.',
        explanation: 'The 5-type classification system divides urethral injuries by location and mechanism. Type I (stretched but intact), Type II (above UG diaphragm), Type III (most common — disruption of UG diaphragm, both above and below = perineal contrast), Type IV (extends to prostatic urethra/bladder base), Type V (bulbous urethra = straddle injury). If urethral injury is confirmed, a suprapubic catheter is placed instead of Foley.',
        keyFact: 'Blood at urethral meatus after trauma → RUG BEFORE Foley. Type III = most common posterior urethral injury from pelvic fracture (disruption of UG diaphragm). Type V straddle injury = bulbous urethra, short segment stricture (vs. gonococcal = long irregular).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/urethral-injury',
        tags: ['XR', 'CT', 'urethra', 'trauma', 'RUG', 'pelvis'],
      },
    },
    {
      id: 'gu-bladder-006',
      front: {
        question: 'Where does urethral stricture typically occur based on etiology: gonococcal infection, straddle injury, and iatrogenic (Foley catheter)?',
      },
      back: {
        answer: 'Gonococcal: long irregular stricture in distal BULBOUS urethra. Straddle injury: short stricture in BULBOUS urethra (at penoscrotal junction level). Iatrogenic (Foley): penile urethra at penoscrotal junction.',
        explanation: 'Neisseria gonorrhoeae causes a chronic urethritis that leads to periurethral fibrosis and long irregular strictures in the distal bulbar urethra. A complication is periurethral abscess potentially forming a urethroperineal fistula. Straddle injury compresses the bulbar urethra against the inferior pubic symphysis, causing a short focal stricture. The glands of Littre (penile urethral mucous glands) may opacify prominently on RUG in urethritis.',
        keyFact: 'All classic stricture types affect the BULBOUS urethra EXCEPT Foley catheter stricture (penile urethra at penoscrotal junction). Gonococcal = long irregular bulbar; Straddle = short focal bulbar; Foley = penile.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/urethral-stricture',
        tags: ['XR', 'urethra', 'RUG', 'stricture', 'gonococcal', 'trauma'],
      },
    },
    {
      id: 'gu-bladder-007',
      front: {
        question: 'What is a female urethral diverticulum and what is its classic imaging appearance on MRI?',
      },
      back: {
        answer: 'Periurethral cystic lesion with classic saddlebag/U-shaped morphology wrapping around the posterolateral urethra, best seen on sagittal and axial MRI. Associated with recurrent UTIs, dyspareunia, post-void dribbling.',
        explanation: 'Urethral diverticula arise from glandular dilation due to inflammation and chronic infection of the paraurethral glands of Skene. The majority are located in the middle third of the urethra involving the posterolateral wall. They frequently coexist with stress incontinence (60%). Stones can develop due to urinary stasis. The most important complication is malignant transformation — adenocarcinoma (60%) is the most common cancer in a urethral diverticulum.',
        keyFact: 'Female urethral diverticulum: saddlebag configuration on MRI (U-shaped cystic lesion wrapping around urethra). Cancer in diverticulum = nearly ALWAYS adenocarcinoma (not squamous cell). May coexist with stress incontinence.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/female-urethral-diverticulum',
        tags: ['MRI', 'urethra', 'diverticulum', 'female', 'saddlebag'],
      },
    },
    {
      id: 'gu-bladder-008',
      front: {
        question: 'What is a pear-shaped bladder and what are the two classic causes?',
      },
      back: {
        answer: 'Pear-shaped (inverted teardrop) bladder: pelvic lipomatosis and pelvic hematoma. Pelvic lipomatosis also causes superior/anterior bladder displacement.',
        explanation: 'A pear-shaped bladder is a sign, not a specific diagnosis. Pelvic lipomatosis is an overgrowth of benign fat in the pelvis (classically perirectal and perivesicular spaces) causing a pear-shaped bladder displaced anteriorly and superiorly. A large pelvic hematoma (from pelvic fracture or post-surgical) can also compress the bladder laterally producing a pear shape. Clinical history distinguishes the two.',
        keyFact: 'Pear-shaped bladder: pelvic lipomatosis vs. pelvic hematoma. Pelvic lipomatosis = "incomplete bladder emptying" in an obese patient + pear-shaped bladder on CT/IVP.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/pelvic-lipomatosis',
        tags: ['CT', 'bladder', 'pelvic-lipomatosis', 'hematoma', 'sign'],
      },
    },
    {
      id: 'gu-bladder-009',
      front: {
        question: 'What is emphysematous cystitis, in which patients does it occur, and what does it look like on imaging?',
      },
      back: {
        answer: 'Gas-forming bacterial infection of the bladder wall, most common in diabetic women. Imaging: gas within the bladder wall on plain film and CT; "dirty shadowing" on ultrasound.',
        explanation: 'Emphysematous cystitis is caused by gas-producing organisms (most commonly E. coli) colonizing the bladder wall. The clinical condition is usually not as severe as emphysematous pyelonephritis. On plain film and CT, gas is seen within the bladder wall itself (not just intraluminally). The differential of bladder wall gas includes fistula from bowel, recent instrumentation, and infection.',
        keyFact: 'Emphysematous cystitis = gas in BLADDER WALL (not just lumen). Associated with diabetes (>50%). Most common organism: E. coli. Dirty shadowing on US = gas in bladder wall.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/emphysematous-cystitis',
        tags: ['CT', 'XR', 'bladder', 'infection', 'gas', 'diabetes'],
      },
    },
  ]},

  { id: 'gu-prostate', label: 'Prostate', cards: [
    {
      id: 'gu-prostate-001',
      front: {
        question: 'What are the zones of the prostate, where do most cancers arise, and where does BPH develop?',
      },
      back: {
        answer: '70% of prostate cancers arise in the peripheral zone (PZ). BPH develops in the transition zone (TZ). The central zone (CZ) is rarely affected by cancer.',
        explanation: 'The prostate consists of the peripheral zone (PZ), central zone (CZ), transitional zone (TZ), and anterior fibromuscular stroma (AFM). In younger men, the central gland is predominantly CZ; with aging and BPH, TZ enlarges and becomes dominant. The verumontanum is a landmark in the prostatic urethra where the ejaculatory ducts open. The prostatic utricle (Müllerian remnant) is located at the verumontanum.',
        keyFact: '70% of prostate cancer = peripheral zone. BPH = transitional zone. Central zone = rarely cancer. On T2W MRI: PZ is hyperintense (easy to detect cancer as hypointense focus); TZ is heterogeneous (cancer harder to detect).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/prostate-anatomy',
        tags: ['MRI', 'prostate', 'anatomy', 'cancer', 'BPH'],
      },
    },
    {
      id: 'gu-prostate-002',
      front: {
        question: 'Describe the PI-RADS v2.1 scoring system: what MRI features are used, which sequences are dominant for PZ versus TZ lesions, and the clinical significance of each score?',
      },
      back: {
        answer: 'PZ dominant sequence: DWI/ADC (1–5 scale). TZ dominant sequence: T2WI. DCE used as tie-breaker for PZ-3 (upgrades to PI-RADS 4 if DCE positive). Scores: 1 = 0% significant cancer; 2 = 10%; 3 = 16–20%; 4 = 21–86%; 5 = 93%.',
        explanation: 'PI-RADS uses multiparametric MRI (T2WI, DWI/ADC, DCE). For PZ lesions, DWI/ADC is the primary determinant. For TZ lesions, T2WI is primary. Extraprostatic extension (EPE) automatically upgrades any lesion to PI-RADS 5. PI-RADS does not include PSA or clinical findings. It is designed to identify clinically significant cancer (Gleason ≥3+4=7), not low-grade (Gleason ≤6) disease.',
        keyFact: 'PI-RADS: PZ = DWI dominant. TZ = T2WI dominant. DCE positive upgrades PZ-3 → PZ-4. Any EPE = PI-RADS 5. PI-RADS correlates with Gleason ≥7 disease; Gleason ≤6 often undetectable on MRI.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/pi-rads-classification',
        tags: ['MRI', 'prostate', 'PI-RADS', 'cancer', 'DWI'],
      },
    },
    {
      id: 'gu-prostate-003',
      front: {
        question: 'What are the MRI features of prostate cancer, and what is the hemorrhage exclusion sign?',
      },
      back: {
        answer: 'Prostate cancer: T2 hypointense, restricted diffusion (low ADC), early enhancement. Hemorrhage exclusion sign: normal prostatic tissue bleeds after biopsy (T1 bright), but cancer does NOT bleed (T1 dark) due to depleted citrate.',
        explanation: 'Normal prostatic tissue is T2 hyperintense in the PZ, allowing detection of T2 hypointense cancer. Prostate cancer typically shows restricted diffusion (high signal on high b-value DWI, low ADC) and early enhancement relative to the surrounding peripheral zone. Post-biopsy hemorrhage in normal tissue is T1 bright due to citrate-mediated bleeding. Cancer tissue produces less citrate and bleeds less — creating the hemorrhage exclusion sign where cancer appears as a dark area surrounded by T1-bright hemorrhage.',
        keyFact: 'Prostate cancer: T2 dark + restricted diffusion (dark ADC) + early enhancement. Hemorrhage exclusion sign: post-biopsy, normal PZ = T1 bright (bleeds), cancer = T1 dark (doesn\'t bleed). Best to wait 6–8 weeks after biopsy before MRI to allow hemorrhage to clear.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/prostate-cancer',
        tags: ['MRI', 'prostate', 'cancer', 'DWI', 'ADC', 'hemorrhage-exclusion'],
      },
    },
    {
      id: 'gu-prostate-004',
      front: {
        question: 'What are the key MRI findings that determine T-stage in prostate cancer, and which stage is treated surgically vs. non-surgically?',
      },
      back: {
        answer: 'T2: tumor confined within gland (surgical). T3a: extracapsular extension. T3b: seminal vesicle invasion. T4: adjacent organ invasion. T2 disease = radical prostatectomy; T3–T4 = radiation + androgen deprivation.',
        explanation: 'The primary goal of MRI is to distinguish surgical (T2) from non-surgical (T3–T4) disease. Seminal vesicle invasion (T3b) is identified on MRI as T2 hypointense signal replacing the normally T2 bright seminal vesicles. The neurovascular bundles posterolateral to the PZ must be carefully evaluated. Metastatic workup: if PSA is high, bone scan evaluates for osteoblastic bone metastases.',
        keyFact: 'T2 = gland-confined = surgery (radical prostatectomy). T3b = seminal vesicle invasion = radiation + hormones (not surgery). "IIB or not IIB" applies to cervical cancer; for prostate the decision hinge is extracapsular extension.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/prostate-cancer-staging',
        tags: ['MRI', 'prostate', 'cancer', 'staging', 'T-stage'],
      },
    },
    {
      id: 'gu-prostate-005',
      front: {
        question: 'What is prostatitis on MRI, and how does it overlap with prostate cancer?',
      },
      back: {
        answer: 'Prostatitis: T2 hypointense, mild-moderate diffusion restriction, early enhancement — overlapping features with cancer. Chronic prostatitis shows LESS diffusion restriction than cancer. Usually involves peripheral zone.',
        explanation: 'Both prostatitis and prostate cancer show T2 hypointensity and diffusion restriction in the PZ, creating a significant diagnostic challenge. Chronic prostatitis shows less diffusion restriction than cancer, but ADC thresholds are not routinely used clinically. Fluctuating PSA levels or decreasing PSA with antibiotic therapy suggests prostatitis. Granulomatous prostatitis is usually idiopathic and self-limited, also can mimic cancer on MRI.',
        keyFact: 'Prostatitis vs. cancer: both T2 dark + restricts diffusion. Chronic prostatitis = LESS diffusion restriction. PSA decreasing with antibiotics = prostatitis. Post-biopsy change: wait 6–8 weeks for MRI — blood products mimic cancer on T2.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/prostatitis',
        tags: ['MRI', 'prostate', 'prostatitis', 'cancer', 'DWI', 'differential'],
      },
    },
    {
      id: 'gu-prostate-006',
      front: {
        question: 'What is a prostatic utricle cyst, and how does it differ from a Müllerian duct cyst?',
      },
      back: {
        answer: 'Utricle cyst: midline within prostate, communicates with urethra (→ post-void dribbling), associated with hypospadias, diagnosed at age 10–20. Müllerian duct cyst: midline cyst that can extend outside the prostate, occurs at ages 30–40, NO communication with urethra.',
        explanation: 'The prostatic utricle is a Müllerian duct derivative (male homologue of the uterus/vagina). Utricle cysts are located posterior to the prostatic urethra and communicate freely with the urethra. They are associated with hypospadias and perineal hypospadias. Müllerian duct cysts are midline and occur along the path of Müllerian duct regression from scrotum to utricle but do not communicate with the urethra. On MRI, both appear as T2 hyperintense midline structures.',
        keyFact: 'Utricle cyst: midline within prostate + communicates with urethra (post-void dribbling) + associated with hypospadias + age 10–20. Müllerian duct cyst: midline, no urethral communication, age 30–40.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/prostatic-utricle-cyst',
        tags: ['MRI', 'prostate', 'utricle', 'cyst', 'congenital', 'Müllerian'],
      },
    },
  ]},

  { id: 'gu-male', label: 'Male GU & Scrotum', cards: [
    {
      id: 'gu-male-001',
      front: {
        question: 'What is testicular torsion and what are the ultrasound findings based on the time elapsed since torsion?',
      },
      back: {
        answer: 'Twisting of testicular vascular pedicle → emergency detorsion. Hyperacute (<few hours): shadowing torsion knot, no flow. Acute (few hours–24h): enlarged heterogeneous testis, no flow. Missed (>24h): heterogeneous testis, scrotal skin thickening, complex hydrocele, paradoxically increased scrotal wall flow.',
        explanation: 'The bell-clapper deformity predisposes to torsion due to a small testicular bare area (attachment site). Detorsion within 6 hours has excellent prognosis; after 24 hours, poor prognosis for salvage. The main clinical differential is epididymitis — torsion shows DECREASED testicular flow, epididymitis shows INCREASED epididymal flow. Color and spectral Doppler are essential.',
        keyFact: 'Torsion = decreased/absent testicular Doppler flow. Epididymitis = increased epididymal flow with normal testicular flow. Whirlpool sign (twisted spermatic cord) = very specific for torsion. Detorsion <6 hours = salvageable.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/testicular-torsion',
        tags: ['ultrasound', 'Doppler', 'testis', 'torsion', 'emergency'],
      },
    },
    {
      id: 'gu-male-002',
      front: {
        question: 'What is seminoma and how does it differ from NSGCTs in demographics, tumor markers, and imaging?',
      },
      back: {
        answer: 'Seminoma: most common testicular GCT (~50%), middle-aged men (35–45), uniformly hypoechoic on US, hCG mildly elevated rarely. NSGCT: younger men (20s–30s), heterogeneous on US with cystic/solid components and calcification, AFP often elevated, more aggressive with visceral metastases.',
        explanation: 'Nonseminomatous GCTs (NSGCT) include embryonal carcinoma, teratoma, yolk sac tumor, choriocarcinoma, and mixed types. Mixed GCT is the most common NSGCT and second most common testicular malignancy overall. Choriocarcinoma is the most aggressive NSGCT with hemorrhagic metastases to brain and lung. Yolk sac tumor (infantile endodermal sinus tumor) is the most common testicular tumor of infancy with elevated AFP.',
        keyFact: 'Seminoma = 40s, homogeneous, rarely marker elevation. NSGCTs = 20s–30s, heterogeneous, AFP/hCG usually elevated, more aggressive. Choriocarcinoma = most aggressive, early hematogenous mets to brain/lung, always elevated hCG.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/testicular-germ-cell-tumour',
        tags: ['ultrasound', 'testis', 'germ-cell-tumor', 'seminoma', 'NSGCT', 'cancer'],
      },
    },
    {
      id: 'gu-male-003',
      front: {
        question: 'What is a burnt-out germ cell tumor, and what is its classic imaging finding?',
      },
      back: {
        answer: 'Primary testicular GCT that has regressed but metastatic disease (usually retroperitoneal) remains viable. Classic: focal testicular calcification with posterior shadowing (±small residual mass) + retroperitoneal adenopathy.',
        explanation: 'Burnt-out germ cell tumors occur when the primary testicular tumor undergoes spontaneous regression, but viable metastatic disease persists. This is why retroperitoneal adenopathy in a young male should always prompt testicular ultrasound — even if no testicular mass is apparent, focal calcification may be the only evidence. Treatment is orchiectomy plus systemic chemotherapy for the retroperitoneal disease.',
        keyFact: 'Young male + retroperitoneal adenopathy → always examine the testes! Focal testicular calcification with posterior shadowing = burnt-out GCT. Viable retroperitoneal disease can exist despite regressed primary tumor.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/burnout-testicular-germ-cell-tumour',
        tags: ['ultrasound', 'CT', 'testis', 'germ-cell-tumor', 'burnt-out'],
      },
    },
    {
      id: 'gu-male-004',
      front: {
        question: 'What is a varicocele, why are they predominantly left-sided, and when should a right-sided varicocele prompt further evaluation?',
      },
      back: {
        answer: 'Dilated pampiniform plexus (>2–3 mm). Left-sided (85%) because left testicular vein drains at right angle into left renal vein. Right-sided isolated varicocele → search for right-sided retroperitoneal mass (IVC obstruction).',
        explanation: 'Primary varicoceles are due to incompetent internal spermatic vein valves. The left testicular vein drains into the left renal vein at a right angle (increased resistance), while the right drains directly into the infrarenal IVC at an acute angle (lower resistance). Varicoceles cause 40–75% of male infertility cases. Secondary (reactive) varicoceles are caused by increased venous pressure from retroperitoneal mass obstruction.',
        keyFact: 'Left varicocele 85% (drains into renal vein at right angle = higher resistance). Isolated RIGHT-sided varicocele = red flag for retroperitoneal mass (IVC obstruction). Varicocele = most common treatable cause of male infertility.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/varicocele',
        tags: ['ultrasound', 'Doppler', 'testis', 'varicocele', 'infertility'],
      },
    },
    {
      id: 'gu-male-005',
      front: {
        question: 'What are the key features of epididymitis on ultrasound and how does it differ from torsion?',
      },
      back: {
        answer: 'Epididymitis: enlarged epididymis with markedly INCREASED color Doppler flow (vs. normal testicular flow). Torsion: ABSENT/decreased testicular flow. Epididymitis: fever, history of UTI, gradual onset. Torsion: sudden severe pain.',
        explanation: 'Epididymitis is almost always ascending infection from the urinary tract. The classic finding is an enlarged epididymis with increased color Doppler flow relative to the testicle. An associated reactive hydrocele with internal echoes may be present. Epididymo-orchitis = spread to the testicle (increased testicular flow as well). Orchitis from epididymitis can cause venous hypertension and focal testicular ischemia.',
        keyFact: 'Epididymitis = increased epididymal flow + normal testicular flow. Torsion = absent testicular flow. Always include torsion in the differential of acute scrotal pain — Doppler is the discriminating test.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/epididymitis',
        tags: ['ultrasound', 'Doppler', 'epididymis', 'epididymitis', 'infection'],
      },
    },
    {
      id: 'gu-male-006',
      front: {
        question: 'What is Fournier gangrene, and what is its key imaging finding?',
      },
      back: {
        answer: 'Necrotizing fasciitis of the scrotum and perineum; polymicrobial infection. Key imaging finding: subcutaneous gas on CT (dirty shadowing on ultrasound). Surgical emergency.',
        explanation: 'Fournier gangrene is a highly morbid, life-threatening polymicrobial necrotizing fasciitis of the male genitalia, perineum, and perianal region. CT is the optimal imaging modality and demonstrates subcutaneous gas tracking along fascial planes of the perineum and scrotum. Ultrasound shows multiple echogenic foci in the scrotal wall/subcutaneous tissues with dirty posterior shadowing.',
        keyFact: 'Fournier gangrene = subcutaneous GAS in scrotum/perineum = surgical emergency. CT best shows extent of gas spread. Polymicrobial (mixed aerobic + anaerobic) infection.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/fourniers-gangrene',
        tags: ['CT', 'ultrasound', 'scrotum', 'Fournier', 'necrotizing-fasciitis', 'emergency'],
      },
    },
    {
      id: 'gu-male-007',
      front: {
        question: 'What is testicular microlithiasis and what are the current guidelines for follow-up?',
      },
      back: {
        answer: 'Multiple punctate intratesticular calcifications (≥5 per image). Controversial association with testicular cancer. Current guidelines: do NOT recommend routine US screening or tumor markers; patient self-examination and clinical follow-up.',
        explanation: 'Testicular microlithiasis (TM) is defined as ≥5 calcifications per ultrasound image. If <5 calcifications, the term "limited microlithiasis" is used. The absolute risk of testicular cancer remains very small, though relative risk may be increased. In liver disease, hepatitis causes a "starry sky" pattern from increased portal triad echogenicity — distinct from the "starry sky" of TM.',
        keyFact: '≥5 calcifications per image = microlithiasis. <5 = limited microlithiasis. Clinical follow-up + self-exam recommended, NOT routine US. If risk factors for GCT present (cryptorchidism, prior GCT, family history), more active surveillance is reasonable.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/testicular-microlithiasis',
        tags: ['ultrasound', 'testis', 'microlithiasis', 'calcification'],
      },
    },
    {
      id: 'gu-male-008',
      front: {
        question: 'What is tubular ectasia of the rete testis, and how is it recognized on ultrasound?',
      },
      back: {
        answer: 'Cystic dilation of tubules at the mediastinum testis from epididymal obstruction. US: multiple tiny avascular cystic structures elongated along the mediastinum testis, often with adjacent epididymal cyst/spermatocele.',
        explanation: 'Tubular ectasia of the rete testis is a common incidental finding in older patients, often bilateral. It is caused by epididymal obstruction. The key imaging feature is cystic dilation localized to the mediastinum testis extending longitudinally. It is confirmed by showing elongation of the cystic structures along the mediastinum on sagittal imaging. It is benign and requires no treatment.',
        keyFact: 'Tubular ectasia of rete testis = avascular cystic dilation at mediastinum testis + elongated on sagittal scan = benign. Distinguishing feature from tumor: no internal Doppler flow + location at mediastinum + often with adjacent epididymal cyst.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/tubular-ectasia-of-the-rete-testis',
        tags: ['ultrasound', 'testis', 'tubular-ectasia', 'cystic', 'benign'],
      },
    },
    {
      id: 'gu-male-009',
      front: {
        question: 'What is Peyronie disease and what does ultrasound reveal?',
      },
      back: {
        answer: 'Acquired condition causing penile deformity from plaque formation in the tunica albuginea. US: echogenic thickening of tunica albuginea ± calcification, most commonly on dorsal surface (70%) or midshaft.',
        explanation: 'Peyronie disease has an acute phase (12–18 months) with pain and progressive deformity followed by a chronic phase with fixed deformity (most commonly dorsal curvature in 77%). Surgery is deferred until the chronic phase. Ultrasound is highly sensitive for plaques; MRI better characterizes plaque location and extent for surgical planning. On MRI, plaques are T1 and T2 hypointense, but calcifications are difficult to see.',
        keyFact: 'Peyronie = penile plaque in tunica albuginea → dorsal curvature (77%). US: echogenic thickening of tunica albuginea ± calcification. Surgery only in chronic phase (after 12–18 months). Most plaques are dorsal (70%).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/peyronie-disease',
        tags: ['ultrasound', 'MRI', 'penis', 'Peyronie', 'plaque'],
      },
    },
    {
      id: 'gu-male-010',
      front: {
        question: 'What are the sex cord-stromal tumors of the testis, and what are their unique associations?',
      },
      back: {
        answer: 'Leydig cell tumor: gynecomastia from estrogen secretion. Sertoli cell tumor: associated with Peutz-Jeghers and Klinefelter syndromes. Both are 90% benign but indistinguishable from malignancy on US → orchiectomy standard.',
        explanation: 'Sex cord-stromal tumors comprise ~5% of testicular neoplasms. Leydig cell tumors are the most common sex cord-stromal tumor and can produce estrogen, causing gynecomastia and precocious puberty in boys. Sertoli cell tumors are rarer; large cell calcifying Sertoli cell tumors are associated with Peutz-Jeghers syndrome and Carney complex. Despite 90% benign behavior, imaging cannot distinguish from malignant tumors, so orchiectomy is standard.',
        keyFact: 'Leydig cell tumor = gynecomastia (estrogen-producing). Sertoli cell tumor = Peutz-Jeghers + Klinefelter syndromes. Both appear as solid testicular masses on US — indistinguishable from GCT → orchiectomy standard regardless.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/sex-cord-stromal-tumour-testis',
        tags: ['ultrasound', 'testis', 'sex-cord-stromal', 'Leydig', 'Sertoli'],
      },
    },
  ]},

  { id: 'gu-female', label: 'Female Pelvis, Uterus & Ovaries', cards: [
    {
      id: 'gu-female-001',
      front: {
        question: 'What are the T2 MRI zonal anatomy layers of the uterus and what is the diagnostic significance of the junctional zone?',
      },
      back: {
        answer: 'Endometrium: T2 hyperintense. Junctional zone (inner myometrium): T2 hypointense (compact smooth muscle). Outer myometrium: intermediate T2. Junctional zone >12 mm = diagnostic of adenomyosis.',
        explanation: 'The junctional zone is the innermost layer of the myometrium (not the endometrium itself). Its T2 hypointense signal is due to extremely compact smooth muscle fibers with minimal extracellular water. A junctional zone of 8–12 mm is borderline. A junctional zone ≥12 mm, especially with internal T2 hyperintense foci, is diagnostic of adenomyosis. Loss of the junctional zone is a pitfall in postmenopausal patients.',
        keyFact: 'Junctional zone ≥12 mm = adenomyosis (with T2 bright foci). 8–12 mm = borderline, not diagnostic. Normal JZ: ≤12 mm. JZ T2 hypointensity = compact smooth muscle (NOT fibrous tissue — that is the inner cervical stroma).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/uterine-junctional-zone',
        tags: ['MRI', 'uterus', 'anatomy', 'junctional-zone', 'adenomyosis'],
      },
    },
    {
      id: 'gu-female-002',
      front: {
        question: 'What is adenomyosis and how is it distinguished from uterine leiomyoma on imaging?',
      },
      back: {
        answer: 'Adenomyosis: diffuse JZ thickening (>12 mm) with T2 bright foci, heterogeneous myometrium on US, no well-defined margins, posterior wall predominance. Leiomyoma: well-defined margins, T2 hypointense, mass effect (lobular external contour), no relationship to JZ.',
        explanation: 'Adenomyosis is ectopic endometrial glands and stroma within the myometrium. It is nonfunctioning (does not respond to cyclic hormones, distinguishing it from endometriosis). Classic symptoms: dysmenorrhea, menorrhagia, dyspareunia. On MRI, adenomyosis shows diffuse or focal JZ thickening with T2 bright cystic foci. Focal adenomyosis can mimic a leiomyoma but lacks well-defined margins and has a relationship to the JZ.',
        keyFact: 'Adenomyosis vs. fibroid: adenomyosis has ILL-DEFINED margins + relationship to JZ + heterogeneous myometrium. Fibroid = WELL-DEFINED, T2 dark, mass effect. MRI is the best modality — JZ ≥12 mm + T2 foci = adenomyosis.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/adenomyosis',
        tags: ['MRI', 'ultrasound', 'uterus', 'adenomyosis', 'JZ', 'fibroid'],
      },
    },
    {
      id: 'gu-female-003',
      front: {
        question: 'What is the endometrial thickness threshold for workup in postmenopausal women with and without bleeding?',
      },
      back: {
        answer: 'With postmenopausal bleeding: ≥5 mm requires further workup (biopsy/hysteroscopy); <5 mm = likely atrophy. Without bleeding: ≥8–11 mm requires workup. On HRT: ≥8 mm requires workup.',
        explanation: 'Endometrial carcinoma is the most common female gynecologic malignancy. Over 95% present with postmenopausal bleeding; average thickness is 21 mm at diagnosis. Endometrial thickness is measured transvaginally in the sagittal plane at the thickest point, excluding any endometrial fluid. Focal endometrial thickening requires workup regardless of thickness. ACOG uses 4 mm as the bleeding threshold.',
        keyFact: 'Postmenopausal bleeding + ET ≥5 mm = biopsy (some use 4 mm per ACOG). No bleeding + ET ≥8–11 mm = workup. Focal thickening = workup regardless of thickness. Most suggestive finding for endometrial Ca = ill-defined endometrial-myometrial margin.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/endometrial-carcinoma',
        tags: ['ultrasound', 'MRI', 'uterus', 'endometrium', 'postmenopausal', 'carcinoma'],
      },
    },
    {
      id: 'gu-female-004',
      front: {
        question: 'How is endometrial carcinoma staged and what MRI feature distinguishes Stage IA from IB and Stage I from Stage II?',
      },
      back: {
        answer: 'Stage IA: <50% myometrial invasion. Stage IB: >50% myometrial invasion. Stage II: cervical stromal invasion. Stage IIIA+: uterine serosal/adnexal spread. Postcontrast MRI: intact low-signal cervical stroma = NO cervical invasion.',
        explanation: 'Staging uses the FIGO system. MRI is used after histologic confirmation to determine extent. Depth of myometrial invasion is the most critical staging feature, as it strongly correlates with lymph node metastasis risk. On postcontrast MRI, endometrial carcinoma enhances less avidly than the surrounding myometrium (hypointense relative to myometrium). In postmenopausal patients, the JZ may not be visible, making assessment of early invasion difficult.',
        keyFact: 'Endometrial Ca staging: <50% myometrium = IA, >50% = IB. Cervical STROMAL invasion = Stage II (not just endocervical extension). On MRI: intact enhancing cervical mucosa = no stromal invasion. Depth of invasion best on 2–3 min post-contrast MRI.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/endometrial-carcinoma',
        tags: ['MRI', 'uterus', 'endometrial-carcinoma', 'staging', 'FIGO'],
      },
    },
    {
      id: 'gu-female-005',
      front: {
        question: 'What is cervical carcinoma staging on MRI, and what is the key finding that changes management from surgical to non-surgical?',
      },
      back: {
        answer: 'Stage IIA or below (no parametrial invasion) = surgery. Stage IIB (parametrial invasion) = chemoradiation. Key MRI finding: intact T2 hypointense cervical stroma = no parametrial invasion; interrupted dark ring + irregular parametrial signal = invasion.',
        explanation: 'Cervical carcinoma is most commonly squamous cell (90%) due to HPV. A cervical mass >1.5 cm requires MRI staging. The T2 hypointense inner cervical stroma is the key landmark — if it is disrupted, parametrial invasion (Stage IIB) is present and surgery is not the treatment. Bladder or rectal mucosal involvement = Stage IVA. The staging is based on the FIGO system.',
        keyFact: '"IIB or not IIB" — parametrial invasion changes management: IIA or lower = surgery; IIB+ = chemoradiation. Intact T2 dark cervical stroma ring = no parametrial invasion. Cervical mass >1.5 cm → MRI required.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/cervical-cancer',
        tags: ['MRI', 'cervix', 'carcinoma', 'staging', 'FIGO', 'parametrium'],
      },
    },
    {
      id: 'gu-female-006',
      front: {
        question: 'What are the Müllerian duct anomalies (uterine malformations) and how is septate distinguished from bicornuate uterus on MRI?',
      },
      back: {
        answer: 'Septate: TWO cavities + CONVEX external fundal contour (no fundal cleft); most common anomaly; treated hysteroscopically. Bicornuate: two cavities + CONCAVE fundal contour (cleft >15 mm); treated laparoscopically. Didelphys: two complete uteri + two cervices.',
        explanation: 'Uterine malformations result from failed fusion or resorption of Müllerian ducts. A septate uterus has the highest risk of pregnancy loss because the fibrous or muscular septum is relatively avascular. HSG cannot distinguish septate from bicornuate (both show two cavities) — MRI is required to assess the external fundal contour. Congenital uterine anomalies are associated with renal agenesis/ectopia.',
        keyFact: 'Septate vs. bicornuate: external fundal CONTOUR is key. Convex (flat/normal) = septate (most common, highest pregnancy loss risk). Concave cleft >15 mm = bicornuate. HSG cannot differentiate — needs MRI. Septate = hysteroscopic metroplasty.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/uterine-anomalies',
        tags: ['MRI', 'uterus', 'congenital', 'Müllerian', 'septate', 'bicornuate'],
      },
    },
    {
      id: 'gu-female-007',
      front: {
        question: 'What is the classic imaging appearance of an endometrioma on ultrasound and MRI?',
      },
      back: {
        answer: 'US: well-defined cystic mass with homogeneous low-level internal echoes + posterior acoustic enhancement, no internal Doppler flow. MRI: T1 hyperintense, does NOT suppress on fat-sat (no fat), T2 hypointense with "shading sign" (T2 shortening).',
        explanation: 'Endometriomas (chocolate cysts) contain blood products of varying ages from cyclical endometrial tissue implantation. They are often bilateral (30–50%). The MRI shading sign refers to progressive T2 hypointensity within a T1-bright lesion due to iron content from old hemorrhage. Unlike teratomas, endometriomas do NOT suppress on fat-saturated sequences. Malignant transformation (~1%) is more likely in women >45 years with cysts >6–9 cm.',
        keyFact: 'Endometrioma MRI: T1 bright (blood) + T2 dark (shading sign) + does NOT suppress on fat-sat. Teratoma: T1 bright (fat) + DOES suppress on fat-sat. Kissing ovaries sign = bilateral endometriomas adherent to each other.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/endometrioma',
        tags: ['MRI', 'ultrasound', 'ovary', 'endometrioma', 'endometriosis', 'T1', 'T2'],
      },
    },
    {
      id: 'gu-female-008',
      front: {
        question: 'What is ovarian torsion and what are its imaging features on ultrasound?',
      },
      back: {
        answer: 'Twisting of ovarian vascular pedicle. Most common US findings: enlarged ovary (>4 cm), peripheral follicles displaced to periphery, abnormal or absent Doppler flow, free pelvic fluid. Whirlpool sign (twisted pedicle) = most specific but uncommon. More common on right side.',
        explanation: 'Torsion most commonly occurs in reproductive-age women and during pregnancy. It is more common on the right because the sigmoid colon inhibits rotation of the left adnexa. Torsion may be intermittent, and flow can still be detectable on Doppler due to dual blood supply and periodic detorsion. Lead-point mass (especially dermoid >4 cm) predisposes to torsion. The clinical differential is appendicitis when right-sided.',
        keyFact: 'Absent Doppler flow = most specific but INSENSITIVE — flow can be preserved even with torsion (dual blood supply). Enlarged ovary >4 cm + peripherally displaced follicles + free fluid = most common constellation. Whirlpool sign = pathognomonic when present.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ovarian-torsion',
        tags: ['ultrasound', 'Doppler', 'ovary', 'torsion', 'emergency'],
      },
    },
    {
      id: 'gu-female-009',
      front: {
        question: 'What are the SRU 2019 guidelines for simple ovarian cyst follow-up in premenopausal and postmenopausal women?',
      },
      back: {
        answer: 'Premenopausal: ≤7 cm = no follow-up; >7 cm = follow-up in 2–6 or 6–12 months. Postmenopausal: ≤5 cm = no follow-up; >5 cm = follow-up in 3–6 or 6–12 months. Stable for 2 years = benign. Decreasing in size (>10-15%) = benign.',
        explanation: 'Simple ovarian cysts do not confer increased malignancy risk as long as they are completely visualized and reliably characterized as simple. On CT, a postmenopausal simple cyst >1 cm warrants US follow-up. For premenopausal women, cysts ≤5 cm with superior visualization and confidence may require no follow-up; otherwise, follow-up is needed. Hemorrhagic cysts >5 cm require 6–12 weeks follow-up regardless of menopausal status.',
        keyFact: 'Premenopausal simple cyst ≤7 cm = no follow-up. Postmenopausal simple cyst ≤5 cm = no follow-up. Hemorrhagic cyst >5 cm = short-term follow-up 6–12 weeks (to confirm resolution and exclude endometrioma if persistent).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ovarian-cyst',
        tags: ['ultrasound', 'ovary', 'cyst', 'follow-up', 'SRU', 'management'],
      },
    },
    {
      id: 'gu-female-010',
      front: {
        question: 'What is a dermoid cyst (mature cystic teratoma) and what are its classic imaging features?',
      },
      back: {
        answer: 'Most common ovarian neoplasm. Classic US: echogenic Rokitansky nodule + dot-dash pattern + tip of iceberg sign. CT/MRI: heterogeneous cyst with fat density/signal, calcification, sebaceous material. MRI: T1 bright + DOES suppress on fat-sat.',
        explanation: 'A dermoid cyst contains ectodermal, mesodermal, and endodermal elements. The Rokitansky nodule is a solid nodule projecting into the cyst cavity from which hair or teeth arise. The dot-dash pattern represents interrupted echogenic keratin fibers. The tip of the iceberg sign describes obscuration of the deeper contents by high-attenuation material. Malignant transformation is rare (1–2%) and occurs mainly in postmenopausal women.',
        keyFact: 'Dermoid: T1 bright fat + DOES suppress on fat-sat (vs. endometrioma which does NOT suppress). Rokitansky nodule = pathognomonic on US. Fat + calcification + heterogeneous cyst on CT = dermoid. Lead point for torsion if >4 cm.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mature-cystic-teratoma-of-the-ovary',
        tags: ['ultrasound', 'CT', 'MRI', 'ovary', 'dermoid', 'teratoma', 'Rokitansky'],
      },
    },
    {
      id: 'gu-female-011',
      front: {
        question: 'What are the US features suggesting a malignant ovarian mass, and what are the most common subtypes of epithelial ovarian cancer?',
      },
      back: {
        answer: 'Malignant features: mural nodule, thick irregular walls/septa, solid components, high Doppler flow, ascites, papillary projections. Most common epithelial subtypes: serous (bilateral, mixed solid-cystic), mucinous (large, unilateral, multilocular), endometrioid/clear cell (associated with endometriosis).',
        explanation: 'Ovarian cancer is the 5th leading cause of cancer death in women, typically presenting late. 90% of malignant ovarian tumors are epithelial, with serous cystadenocarcinoma being most common. Serous tumors are frequently bilateral. Mucinous cystadenocarcinomas are the largest ovarian tumors. Clear cell and endometrioid carcinomas are associated with endometriosis. Krukenberg tumor = ovarian metastasis from mucin-producing primary (usually gastric/colonic adenocarcinoma), typically bilateral.',
        keyFact: 'Ovarian Ca malignant features: SOLID enhancing component + papillary projections + ascites. Serous = bilateral, most common. Mucinous = large, unilateral, multilocular. Endometrioid/clear cell = endometriosis association. Krukenberg = bilateral ovarian mets from GI adenocarcinoma.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ovarian-carcinoma',
        tags: ['ultrasound', 'CT', 'MRI', 'ovary', 'cancer', 'epithelial', 'Krukenberg'],
      },
    },
    {
      id: 'gu-female-012',
      front: {
        question: 'What is the fibroma-Meigs syndrome association, and what do sex cord-stromal tumors (fibrothecoma) do hormonally?',
      },
      back: {
        answer: 'Meigs syndrome: triad of benign ovarian fibroma + ascites + right pleural effusion. Thecoma/fibrothecoma: produce estrogen → endometrial hyperplasia/carcinoma risk.',
        explanation: 'Fibroma is the most common sex cord-stromal tumor, arising from connective tissue. It appears as a solid, T2 hypointense mass (fibrous tissue) on MRI. When associated with ascites and pleural effusion (usually right), this is Meigs syndrome — a benign and reversible condition (effusions resolve after tumor resection). Thecal cell-containing tumors produce estrogen, which can cause endometrial hyperplasia or carcinoma from unopposed estrogenic stimulation.',
        keyFact: 'Meigs syndrome = ovarian fibroma (solid, T2 dark on MRI) + ascites + right pleural effusion = BENIGN (resolves after removal). Fibrothecoma produces estrogen → endometrial Ca risk. "Right" pleural effusion in Meigs is a classic board distinguishing point.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/meigs-syndrome',
        tags: ['MRI', 'ultrasound', 'ovary', 'fibroma', 'Meigs', 'sex-cord-stromal'],
      },
    },
    {
      id: 'gu-female-013',
      front: {
        question: 'What is polycystic ovarian syndrome (PCOS) and what are the ultrasound criteria?',
      },
      back: {
        answer: 'Clinical syndrome: obesity, insulin resistance, anovulation, hirsutism (excess androgens). US criteria: >12 small follicles (peripheral "string of pearls"), none >9 mm, ovarian volume >10 mL. Increased stromal vascularity on Doppler.',
        explanation: 'PCOS is the most common endocrinopathy in women of reproductive age. The ovarian volume is calculated as length × width × height × 0.52. The "string of pearls" configuration describes multiple small peripheral follicles arranged around a dense echogenic stroma. The differential includes normal ovaries under oral contraceptive influence (OCPs will NOT increase ovarian vascularity, unlike PCOS).',
        keyFact: 'PCOS US criteria: >12 follicles per ovary (<9 mm each, peripheral) + ovarian volume >10 mL. Ovarian stroma hypervasular on Doppler (OCPs will not increase vascularity — distinguishing feature). "String of pearls" = classic appearance.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/polycystic-ovarian-syndrome',
        tags: ['ultrasound', 'Doppler', 'ovary', 'PCOS', 'endocrine'],
      },
    },
    {
      id: 'gu-female-014',
      front: {
        question: 'What are the vaginal retention cysts (Skene, Bartholin, Gartner, Nabothian), and how are they distinguished by location?',
      },
      back: {
        answer: 'Skene duct cyst: anterior, midline, BELOW pubic symphysis. Gartner duct cyst: anterolateral vaginal wall, ABOVE pubic symphysis. Bartholin cyst: posterolateral, inferior third vagina (labia majora), BELOW pubic symphysis. Nabothian: at the cervix.',
        explanation: 'These cystic lesions are usually incidental on MRI and distinguishable by location. Skene duct cysts (paraurethral) arise from obstruction of the paraurethral glands. Gartner duct cysts are remnants of the Wolffian (mesonephric) duct. Bartholin cysts arise from obstruction of Bartholin duct. Nabothian cysts are cervical glandular retention cysts. All typically appear T2 hyperintense and simple on MRI.',
        keyFact: 'Location is the key: Skene = anterior midline below symphysis. Gartner = anterolateral ABOVE symphysis (Wolffian remnant). Bartholin = posterolateral BELOW symphysis (labia). Nabothian = at cervix. Gartner associated with renal anomalies.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/vaginal-cysts',
        tags: ['MRI', 'vagina', 'cyst', 'Bartholin', 'Gartner', 'Skene', 'Nabothian'],
      },
    },
    {
      id: 'gu-female-015',
      front: {
        question: 'What is a hysterosalpingogram (HSG) used for, and what does free intraperitoneal contrast spillage indicate?',
      },
      back: {
        answer: 'HSG evaluates uterine contour and fallopian tube patency in infertility workup. Free bilateral intraperitoneal contrast spillage = patent tubes. Absent spillage = occlusion (but consider tubal spasm — continue slow injection). Loculated peritoneal contrast = pelvic adhesions (PID).',
        explanation: 'HSG is performed by instilling contrast through a catheter placed in the uterine cervix under fluoroscopy. It evaluates the uterine cavity for congenital anomalies and acquired filling defects (polyps, cancer). Contrast entering the fallopian tubes and spilling freely confirms patency. Loculated peritoneal contrast that does not flow freely suggests pelvic adhesions from prior PID. Pregnancy must be excluded before the procedure.',
        keyFact: 'HSG: free intraperitoneal contrast spill = patent tube. Absent spill = possible occlusion (try slow continued injection for spasm). Loculated pelvic contrast = adhesions from PID. HSG cannot distinguish septate from bicornuate uterus — MRI needed.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/hysterosalpingography',
        tags: ['XR', 'fluoroscopy', 'uterus', 'HSG', 'fallopian-tube', 'infertility'],
      },
    },
    {
      id: 'gu-female-016',
      front: {
        question: 'What is a hydrosalpinx, and how does it appear on ultrasound and MRI?',
      },
      back: {
        answer: 'Fluid-filled dilated fallopian tube (lacking internal echoes). US: paraovarian tubular anechoic structure with incomplete septations (mucosal infoldings). MRI: tubular T2 hyperintense structure that does not enhance.',
        explanation: 'Hydrosalpinx results from tubal obstruction and fluid accumulation, usually from prior infection (PID), surgery, or endometriosis. The mucosal folds creating incomplete septations within the dilated tube are a distinguishing feature from other paraovarian cystic structures. Hematosalpinx (blood-filled) shows internal echoes from blood products. Pyosalpinx (pus-filled) also shows internal echoes and represents PID with tubo-ovarian complex.',
        keyFact: 'Hydrosalpinx = paraovarian tubular anechoic structure with INCOMPLETE septations (mucosal folds) on US. Hematosalpinx = internal echoes (blood). Pyosalpinx = internal echoes + hyperemia (pus). Tubo-ovarian abscess = most severe PID complication.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/hydrosalpinx',
        tags: ['ultrasound', 'MRI', 'fallopian-tube', 'hydrosalpinx', 'PID'],
      },
    },
    {
      id: 'gu-female-017',
      front: {
        question: 'What are the leiomyoma (fibroid) locations, and which has the most impact on fertility and which can be treated hysteroscopically?',
      },
      back: {
        answer: 'Intramural (most common), submucosal (most impact on fertility, can distort endometrial cavity), subserosal (exophytic, may simulate adnexal mass). Submucosal fibroids with >50% intraluminal component can be resected hysteroscopically.',
        explanation: 'Fibroids are the most common benign uterine tumor, seen in up to 50% of Black women and 25% of White women over age 30. On MRI, fibroids are T2 hypointense (compact smooth muscle). Up to 2/3 show degenerative changes. Red (carneous) degeneration (hemorrhagic infarction during pregnancy or OCP use) appears T1 hyperintense. Calcifications are common. MRI is performed before UAE to assess fibroid type; necrotic/hemorrhagic fibroids do not respond well to UAE.',
        keyFact: 'Submucosal fibroid = most impact on fertility (distorts cavity). >50% intraluminal = can do hysteroscopic resection. Red degeneration = T1 bright (hemorrhage). T2 dark + well-defined margin + no JZ relationship = fibroid (vs. T2 dark + ill-defined + JZ thickening = adenomyosis).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/uterine-leiomyoma',
        tags: ['MRI', 'ultrasound', 'uterus', 'fibroid', 'leiomyoma', 'submucosal'],
      },
    },
    {
      id: 'gu-female-018',
      front: {
        question: 'What is ovarian hyperstimulation syndrome (OHSS) and how is it diagnosed on imaging?',
      },
      back: {
        answer: 'Complication of fertility treatment (VEGF dysregulation → capillary leak). US criteria: bilateral enlarged ovaries (>5 cm) with multiple enlarged follicles (spoke-wheel) + ascites or hydrothorax. Associated risks: ovarian torsion and ectopic pregnancy.',
        explanation: 'OHSS occurs in ~5% of women undergoing fertility treatment. The spoke-wheel pattern describes the symmetric bilateral enlargement with multiple peripheral follicles radiating from a central stroma. At least one additional clinical/laboratory criterion must be met (hematocrit ≥45%, WBC >15,000, elevated LFTs, acute renal failure, dyspnea). Complications include coagulopathy and hypovolemic shock.',
        keyFact: 'OHSS diagnosis criteria: bilateral ovaries >5 cm with multiple follicles + ascites/hydrothorax + ≥1 lab/clinical criterion. Spoke-wheel ovarian enlargement = classic appearance. OHSS increases torsion risk (large ovaries) and ectopic pregnancy risk.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ovarian-hyperstimulation-syndrome',
        tags: ['ultrasound', 'ovary', 'OHSS', 'fertility', 'complication'],
      },
    },
    {
      id: 'gu-female-019',
      front: {
        question: 'What is a peritoneal inclusion cyst and how does it differ from a cystadenoma?',
      },
      back: {
        answer: 'Peritoneal inclusion cyst: septated fluid collection from post-surgical adhesions trapping ovarian secretions; ovary is trapped within or adjacent; NO mass effect. Cystadenoma: thick septations, exerts mass effect. DO NOT recommend surgery (creates more adhesions).',
        explanation: 'Peritoneal inclusion cysts form when ovarian secretions accumulate within loculated adhesions after surgery or PID. The ovary itself may appear as an internal cystic structure or be adherent to the periphery. Key distinguishing feature from cystadenoma: peritoneal inclusion cysts conform to the shape of adjacent structures (no mass effect), while cystadenomas are round/oval and exert mass effect. Surgery worsens peritoneal inclusion cysts by creating more adhesions.',
        keyFact: 'Peritoneal inclusion cyst = post-surgical adhesions + ovary trapped within = DO NOT operate. Cystadenoma = thick septations + mass effect = may need surgery. Classic history: prior pelvic surgery + complex adnexal lesion conforming to pelvic structures.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/peritoneal-inclusion-cyst',
        tags: ['ultrasound', 'MRI', 'ovary', 'peritoneal-inclusion-cyst', 'adhesions'],
      },
    },
    {
      id: 'gu-female-020',
      front: {
        question: 'What vaginal cancer types are most common by age group, and what are their associations?',
      },
      back: {
        answer: 'Adult (SCC, 85%): associated with HPV, postmenopausal. Pediatric (RMS/sarcoma botryoides): bimodal ages 2–6 and 14–18, anterior wall near cervix. Clear cell adenocarcinoma: prior DES exposure, T-shaped uterus. Primary melanoma: postmenopausal, aggressive.',
        explanation: 'Metastatic vaginal lesions are more common than primary vaginal cancers. Anterior upper third vaginal metastasis typically comes from upper genital tract; posterior lower third from GI tract. Vaginal rhabdomyosarcoma produces grape-like polypoid masses (sarcoma botryoides variant). DES-associated clear cell carcinoma is now rare as DES was discontinued in the 1970s. T-shaped uterus on HSG = hallmark of DES exposure.',
        keyFact: 'Vaginal SCC (adult) = HPV. Vaginal RMS = most common vaginal tumor in children, sarcoma botryoides = grape-like. DES exposure = clear cell carcinoma + T-shaped uterus. Metastasis anterior upper third = upper GI tract; posterior lower third = GI tract.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/vaginal-cancer',
        tags: ['MRI', 'vagina', 'cancer', 'SCC', 'rhabdomyosarcoma', 'DES'],
      },
    },
    {
      id: 'gu-female-021',
      front: {
        question: 'What is adenoma malignum (minimal deviation adenocarcinoma) of the cervix and with what syndrome is it associated?',
      },
      back: {
        answer: 'Rare well-differentiated mucinous adenocarcinoma of the cervix. Classic appearance: multicystic mass (cluster of cysts) with solid components extending from endocervical glands into deep cervical stroma. Associated with Peutz-Jeghers syndrome.',
        explanation: 'Adenoma malignum has an unfavorable prognosis due to peritoneal dissemination at an early stage and poor response to radiation and chemotherapy. On MRI, the multicystic cluster within the cervical stroma is characteristic, though the solid components help distinguish it from Nabothian cysts. Its association with Peutz-Jeghers syndrome and mucinous ovarian neoplasms makes it a testable combination.',
        keyFact: 'Adenoma malignum = multicystic cervical mass with solid components + deep stromal extension = Peutz-Jeghers syndrome. Despite "adenoma" in the name, it is a well-differentiated MALIGNANCY with poor prognosis.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/adenoma-malignum',
        tags: ['MRI', 'cervix', 'adenoma-malignum', 'Peutz-Jeghers', 'mucinous'],
      },
    },
  ]},

  { id: 'gu-adrenal-extra', label: 'Adrenal — Additional', cards: [
    {
      id: 'gu-adrenal-extra-001',
      front: {
        question: 'What is Conn syndrome, and why are adrenal adenomas responsible for it typically difficult to detect on CT?',
      },
      back: {
        answer: 'Primary hyperaldosteronism from an adrenal adenoma → hypertension + hypokalemia. Adenomas are typically small (<1 cm) and may be missed on CT; adrenal venous sampling is used to localize the side.',
        explanation: 'Conn syndrome is caused by autonomous aldosterone production, usually from a unilateral adrenal adenoma. These adenomas are often too small to detect on CT or may be indistinguishable from the adrenal limbs. Adrenal venous sampling (AVS) is the most accurate method to lateralize the source and is performed before adrenalectomy.',
        keyFact: 'Conn syndrome = small aldosterone-producing adenoma (often <1 cm on CT). Presentation: hypertension + hypokalemia. CT may miss it → adrenal venous sampling (AVS) is the gold standard for lateralization.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/primary-hyperaldosteronism',
        tags: ['CT', 'adrenal', 'Conn', 'adenoma', 'hyperaldosteronism'],
      },
    },
    {
      id: 'gu-adrenal-extra-002',
      front: {
        question: 'What are the causes of adrenal calcification, and what are the causes of adrenal insufficiency (Addison disease)?',
      },
      back: {
        answer: 'Calcification causes: prior hemorrhage, granulomatous disease (TB, histoplasmosis), Wolman disease. Addison disease causes: autoimmune destruction (most common worldwide), TB, metastases, adrenal hemorrhage.',
        explanation: 'Adrenal calcifications are not uncommon and rarely cause hypofunction unless bilateral and extensive. TB is the classic infectious cause of adrenal calcification. Waterhouse-Friderichsen syndrome = post-hemorrhagic adrenal failure from Neisseria meningitidis septicemia. Substantial bilateral destruction (>90% of adrenal cortex) is required to produce adrenal insufficiency.',
        keyFact: 'Adrenal calcification: TB (bilateral), prior hemorrhage, histoplasmosis. Addison disease = autoimmune (#1 in developed world). Small calcified bilateral adrenal glands in appropriate clinical context = granulomatous disease (TB or histoplasmosis).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/addison-disease',
        tags: ['CT', 'XR', 'adrenal', 'calcification', 'Addison', 'insufficiency'],
      },
    },
  ]},

  { id: 'gu-renal-extra', label: 'Renal — Vascular & Miscellaneous', cards: [
    {
      id: 'gu-renal-extra-001',
      front: {
        question: 'What is the cortical rim sign in renal infarction, and how does it differ from active bleeding on CT?',
      },
      back: {
        answer: 'Cortical rim sign: thin enhancing peripheral cortical rim despite absent central enhancement — indicates preserved subcapsular perfusion via capsular arteries. Appears 8 hours–days after infarct. Active bleeding = density increases on delayed phase.',
        explanation: 'Renal infarcts appear as wedge-shaped perfusion defects on CT. The cortical rim sign develops later due to residual capsular artery perfusion maintaining a thin rim of viable cortex. Flip-flop enhancement describes a region hypodense on early imaging that becomes relatively hyperdense on delayed imaging — seen in both infarction and some tumors. Traumatic renal artery thrombosis causes permanent renal dysfunction after ~2 hours of ischemia.',
        keyFact: 'Cortical rim sign = thin enhancing rim around non-enhancing kidney = renal infarct (appears hours to days later). Active bleeding = INCREASES in attenuation/size on delayed phase. Pseudoaneurysm/AVF = DECREASES in attenuation on delayed phase.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-infarction',
        tags: ['CT', 'kidney', 'infarction', 'cortical-rim-sign', 'vascular'],
      },
    },
    {
      id: 'gu-renal-extra-002',
      front: {
        question: 'What is renal vein thrombosis in adults, what is the most common predisposing condition, and what is the classic Doppler finding?',
      },
      back: {
        answer: 'Renal vein thrombosis in adults: most common cause = nephrotic syndrome. Imaging: enlarged kidney, persistent/delayed nephrogram on CT, reversed diastolic arterial flow on Doppler.',
        explanation: 'In adults, renal vein thrombosis is most commonly a complication of nephrotic syndrome (particularly membranous nephropathy). In neonates, it occurs from dehydration or indwelling umbilical venous catheters. The Doppler finding of reversed arterial diastolic flow is characteristic: venous obstruction dramatically increases renal vascular resistance, impeding diastolic arterial flow. On CT, the thrombosed vein may be visible as a filling defect.',
        keyFact: 'Adult renal vein thrombosis = nephrotic syndrome (#1 cause). Doppler: reversed diastolic arterial flow. CT: enlarged kidney + persistent nephrogram. Neonatal RVT: dehydration or umbilical venous catheter.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-vein-thrombosis',
        tags: ['ultrasound', 'CT', 'Doppler', 'kidney', 'renal-vein-thrombosis', 'vascular'],
      },
    },
    {
      id: 'gu-renal-extra-003',
      front: {
        question: 'What is HIV nephropathy on imaging and what pathological process does it represent?',
      },
      back: {
        answer: 'HIV directly infects kidney → focal segmental glomerulosclerosis (FSGS). Classic: bilateral ENLARGED and ECHOGENIC kidneys on US. Large echogenic kidneys in HIV+ patient with nephrotic syndrome (massive proteinuria).',
        explanation: 'HIV nephropathy is the most common cause of renal impairment in AIDS (CD4 <200) patients. The kidneys are characteristically echogenic and in ~20% of cases also enlarged. Some sources state that normal renal echotexture essentially excludes HIV nephropathy. Loss of the normal echogenic renal sinus fat (due to edema) may also be seen. Final diagnosis requires biopsy showing FSGS.',
        keyFact: 'HIV nephropathy = BIG + BRIGHT kidneys on US + nephrotic syndrome in HIV+ patient. Normal echogenicity essentially excludes HIV nephropathy (according to some sources). Biopsy: focal segmental glomerulosclerosis (FSGS).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/hiv-nephropathy',
        tags: ['ultrasound', 'kidney', 'HIV', 'nephropathy', 'echogenic'],
      },
    },
    {
      id: 'gu-renal-extra-004',
      front: {
        question: 'What is multilocular cystic nephroma (MLCN) and what is its bimodal demographic distribution?',
      },
      back: {
        answer: 'Benign cystic neoplasm with non-communicating fluid-filled locules in a thick fibrous capsule. Bimodal: boys aged ~4 years, and women aged ~40 years. Classic: protrudes into renal pelvis causing hydronephrosis.',
        explanation: 'Multilocular cystic nephroma is a benign neoplasm with no solid or necrotic components — if present, it is not MLCN. The characteristic propensity to herniate into the renal pelvis distinguishes it from other cystic masses. In children, MLCN is indistinguishable from cystic Wilms tumor. In adults, it is indistinguishable from cystic RCC. Both may be Bosniak III or IV on CT.',
        keyFact: 'MLCN = bimodal: 4-year-old boys + 40-year-old women. Herniates into renal pelvis = distinguishing feature. No solid components or necrosis by definition. Children: can\'t distinguish from cystic Wilms. Adults: can\'t distinguish from cystic RCC.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/multilocular-cystic-nephroma',
        tags: ['CT', 'ultrasound', 'kidney', 'multilocular-cystic-nephroma', 'cystic-mass', 'pediatric'],
      },
    },
    {
      id: 'gu-renal-extra-005',
      front: {
        question: 'What is the "lying-down adrenal sign" and when is it used?',
      },
      back: {
        answer: 'Elongated (horizontal) adrenal gland not normally molded by the adjacent kidney. Indicates CONGENITAL absence of the kidney (vs. surgically absent, where adrenal retains its normal inverted-Y shape due to prior remodeling).',
        explanation: 'The adrenal gland normally conforms its shape (inverted Y or V) around the adjacent kidney. When the kidney has been absent since birth (congenital agenesis), the adrenal lies flat in a more horizontal configuration called the "lying-down adrenal" or "pancake adrenal" sign. After surgical nephrectomy, the adrenal retains its normal shape because it was previously molded by the now-removed kidney.',
        keyFact: 'Lying-down (horizontal) adrenal = CONGENITAL renal agenesis. Normal-shaped adrenal = surgical nephrectomy (previously molded). Unilateral renal agenesis: in women, associated with Müllerian anomalies (unicornuate uterus); in men, associated with ipsilateral seminal vesicle cyst/absent vas deferens.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/lying-down-adrenal-sign',
        tags: ['CT', 'adrenal', 'kidney', 'agenesis', 'lying-down-sign', 'congenital'],
      },
    },
    {
      id: 'gu-renal-extra-006',
      front: {
        question: 'What renal anomalies are associated with unilateral renal agenesis in females versus males?',
      },
      back: {
        answer: 'Females (70%): Müllerian anomalies (Mayer-Rokitansky-Küster-Hauser syndrome — uterine agenesis/anomaly, most commonly unicornuate uterus). Males (20%): ipsilateral absent epididymis/vas deferens, ipsilateral seminal vesicle cyst.',
        explanation: 'Congenital unilateral renal agenesis results from failed ureteral bud development. The ipsilateral ureter, hemitrigone, and (in males) ipsilateral vas deferens and epididymis may be absent. In females, the Müllerian ducts and Wolffian (mesonephric) ducts develop in close proximity, so renal anomalies and Müllerian anomalies frequently co-occur. MRI of the female pelvis is important when unilateral renal agenesis is identified.',
        keyFact: 'Unilateral renal agenesis + female = look for unicornuate uterus (Müllerian anomaly). Unilateral renal agenesis + male = look for ipsilateral seminal vesicle cyst + absent vas deferens. The ipsilateral adrenal is usually present (from a different embryologic origin).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/unilateral-renal-agenesis',
        tags: ['CT', 'MRI', 'kidney', 'agenesis', 'Müllerian', 'congenital'],
      },
    },
  ]},

  { id: 'gu-bladder-extra', label: 'Bladder — Staging & Management', cards: [
    {
      id: 'gu-bladder-extra-001',
      front: {
        question: 'What is the psoas hitch procedure and what is its pathognomonic imaging appearance?',
      },
      back: {
        answer: 'Psoas hitch: ipsilateral bladder is mobilized and "hitched" to the psoas muscle to bridge the gap for a short residual ureter. Classic: asymmetric upward projection of the bladder toward the psoas on CT IVP or cystography.',
        explanation: 'The psoas hitch is performed when there is injury or pathology (stricture, cancer, trauma) involving a long segment of the distal ureter and the residual ureter is too short for direct reimplantation. By stretching and suturing the ipsilateral dome of the bladder to the psoas muscle, the bladder-ureteral gap is bridged.',
        keyFact: 'Psoas hitch = bladder hitched to psoas = asymmetric upward bladder projection on CT IVP. Done for long distal ureter loss. Aunt Minnie appearance: stretched bladder with one horn pointing upward toward the psoas.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/psoas-hitch',
        tags: ['CT', 'IVP', 'bladder', 'psoas-hitch', 'ureter', 'post-surgical'],
      },
    },
    {
      id: 'gu-bladder-extra-002',
      front: {
        question: 'What is a neurogenic bladder and what are the two main imaging patterns?',
      },
      back: {
        answer: 'Bladder dysfunction from neurologic disease. Two patterns: (1) small contracted spastic bladder (upper motor neuron), (2) large atonic bladder (lower motor neuron). Classic sign: pine cone bladder. Complications: UTI, bladder stones, bladder cancer.',
        explanation: 'The pine cone or Christmas tree appearance describes the irregular trabeculated bladder wall of an overactive (spastic) neurogenic bladder. An atonic lower motor neuron bladder is large, thin-walled, and incompletely empties. Urinary stasis from either type predisposes to bladder stones, infection, and urothelial malignancy. Bladder diverticula may develop from chronic outlet obstruction or may be congenital.',
        keyFact: 'Neurogenic bladder: pine cone/Christmas tree sign = spastic (UMN), small. Large atonic = LMN (flaccid). Both → urinary stasis → stones + infection + increased TCC/SCC risk.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/neurogenic-bladder',
        tags: ['CT', 'XR', 'bladder', 'neurogenic', 'pine-cone', 'complications'],
      },
    },
    {
      id: 'gu-bladder-extra-003',
      front: {
        question: 'What is schistosomiasis of the bladder, how does it appear on imaging, and what cancer does it cause?',
      },
      back: {
        answer: 'Schistosoma hematobium eggs deposited in bladder wall → chronic inflammation → bladder wall calcification → squamous cell carcinoma. Plain film/CT: densely calcified bladder ± distal ureters. Calcification may be thin "eggshell" linear pattern.',
        explanation: 'Schistosomiasis is the second most common parasitic disease worldwide after malaria and is endemic in Africa and the Middle East. The calcification pattern reflects calcified schistosome eggs in the bladder wall and distal ureters. It predisposes to squamous cell carcinoma, which tends to be aggressive. The trigone and lateral walls are preferentially involved.',
        keyFact: 'Schistosomiasis = calcified bladder + distal ureters on plain film = squamous cell carcinoma (both start with "S"). Heavy bladder wall calcification in patient from Africa/Middle East = Schistosoma hematobium.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/schistosomiasis',
        tags: ['CT', 'XR', 'bladder', 'schistosomiasis', 'calcification', 'SCC'],
      },
    },
  ]},

  { id: 'gu-renal-masses-extra', label: 'Renal Masses — Additional', cards: [
    {
      id: 'gu-renal-masses-extra-001',
      front: {
        question: 'What is the RCC staging system and what features on CT/MRI define each stage?',
      },
      back: {
        answer: 'Stage I: ≤7 cm, confined to kidney. Stage II: >7 cm, confined to kidney. Stage III: invades Gerota\'s fascia or perinephric tissue/renal vein/IVC (below diaphragm). Stage IV: beyond Gerota\'s fascia, ipsilateral adrenal, or distant mets.',
        explanation: 'The T-stage of RCC is based on tumor size and anatomic extent. Renal vein invasion (IVC below diaphragm = T3b; above diaphragm = T3c) is clinically important as it may still be resectable. Extension beyond Gerota\'s fascia (T4) is generally not resectable. The Robson staging system (older) is less commonly used. Stages I–III are generally resectable.',
        keyFact: 'RCC stage: ≤7 cm confined = Stage I (resect). >7 cm confined = Stage II (resect). Vein involvement or perinephric = Stage III (may still resect). Beyond Gerota\'s + adrenal/distant = Stage IV (resect if possible, systemic therapy).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-cell-carcinoma-staging',
        tags: ['CT', 'MRI', 'kidney', 'RCC', 'staging', 'Gerota'],
      },
    },
    {
      id: 'gu-renal-masses-extra-002',
      front: {
        question: 'What is the approach to an incidental solid enhancing renal mass <4 cm found in a patient with multiple comorbidities?',
      },
      back: {
        answer: 'Consider: (1) biopsy to characterize (20% of solid masses <4 cm are benign); (2) active surveillance; (3) ablation (RFA or cryoablation) as less invasive alternative to surgery.',
        explanation: 'Approximately 20% of solid enhancing renal masses (especially <4 cm) are benign, predominantly oncocytomas and fat-poor AMLs. The management of small renal masses has evolved toward less invasive approaches. Percutaneous biopsy is indicated when definitive tissue diagnosis would change management (prior malignancy, multiple comorbidities, unresectable disease). Ablation is performed with biopsy confirmation before treatment.',
        keyFact: '20% of solid renal masses <4 cm = benign. Small solid enhancing renal mass = RCC until proven otherwise, but biopsy/ablation is reasonable over surgery in poor surgical candidates. Largest series: even <1 cm solid masses 50% benign.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-cell-carcinoma',
        tags: ['CT', 'kidney', 'renal-mass', 'management', 'biopsy', 'ablation'],
      },
    },
    {
      id: 'gu-renal-masses-extra-003',
      front: {
        question: 'What causes uremic/acquired cystic kidney disease, and what is the key oncologic concern?',
      },
      back: {
        answer: 'Develops in ~40% of dialysis patients (90% after 5+ years on dialysis). Key concern: increased risk of RCC (3–6x compared to general population), predominantly papillary subtype. Cysts may regress after renal transplant.',
        explanation: 'Acquired cystic kidney disease occurs in the setting of end-stage renal disease and is superimposed on small, atrophic kidneys — distinguishing it from ADPKD (enlarged kidneys) and lithium nephropathy (normal-sized kidneys). The RCC risk is driven by dialysis duration. RCC in this setting tends to occur at younger ages, may be bilateral/multifocal, and is often papillary subtype.',
        keyFact: 'Acquired cystic disease (dialysis) = small atrophic kidneys with cysts (vs. ADPKD = large kidneys). RCC risk = 3–6x, usually papillary subtype. Cysts regress after transplant (transplant \'cures\' the cystic disease).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/acquired-renal-cystic-disease',
        tags: ['CT', 'ultrasound', 'kidney', 'uremic', 'cystic', 'dialysis', 'RCC'],
      },
    },
    {
      id: 'gu-renal-masses-extra-004',
      front: {
        question: 'How does the "T2 dark cyst" differential narrow the diagnosis of a renal mass?',
      },
      back: {
        answer: 'T2 hypointense solid renal mass differential: (1) Lipid-poor AML (also T1 bright on some sequences), (2) Papillary RCC (hypovascular, hypoenhancing), (3) Hemorrhagic cyst (T1 bright, no enhancement). Clear cell RCC = T2 HYPERINTENSE.',
        explanation: 'On T2-weighted MRI, the majority of cysts are T2 hyperintense. A T2 hypointense renal lesion narrows the differential significantly. Lipid-poor AML is T2 dark due to smooth muscle content. Papillary RCC is T2 dark due to dense cellularity and hemosiderin. Clear cell RCC is T2 hyperintense. This distinction helps guide biopsy decisions since lipid-poor AML and papillary RCC look similar on CT and MRI.',
        keyFact: 'T2 bright solid renal mass = clear cell RCC or oncocytoma. T2 dark solid renal mass = papillary RCC vs. lipid-poor AML vs. hemorrhagic cyst. T2 dark + T1 bright (blood) + no enhancement = hemorrhagic cyst (benign).',
        tags: ['MRI', 'kidney', 'renal-mass', 'T2', 'papillary-RCC', 'AML'],
      },
    },
  ]},

  { id: 'gu-female-extra', label: 'Female Pelvis — Additional', cards: [
    {
      id: 'gu-female-extra-001',
      front: {
        question: 'What is a uterine arteriovenous malformation (AVM), and how does it differ from gestational trophoblastic disease (GTD)?',
      },
      back: {
        answer: 'Uterine AVM: abnormal arterial-venous communication causing heterogeneous multicystic uterus on US + low-resistance high-velocity Doppler flow. BOTH may appear similar — distinguished by β-hCG: GTD positive, AVM negative.',
        explanation: 'Uterine AVMs may be congenital (rare) or acquired (post-D&C, infection, post-surgical). They present with life-threatening hemorrhage. The grayscale US appearance is similar to GTD (heterogeneous, multicystic). Color Doppler shows turbulent high-velocity low-resistance arterial flow. Negative β-hCG confirms AVM over GTD. Uterine artery embolization is the preferred treatment for acquired AVMs.',
        keyFact: 'Uterine AVM: multicystic uterus on US + abnormal high-velocity Doppler + NEGATIVE β-hCG. GTD: similar appearance + POSITIVE β-hCG. Key differentiator = β-hCG level.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/uterine-arteriovenous-malformation',
        tags: ['ultrasound', 'Doppler', 'uterus', 'AVM', 'GTD', 'hemorrhage'],
      },
    },
    {
      id: 'gu-female-extra-002',
      front: {
        question: 'What are the IUD types and their ultrasound appearances, and what complications can occur?',
      },
      back: {
        answer: 'Hormonal IUD (plastic, progesterone): shadowing structure in endometrial canal. Copper IUD: highly echogenic. Complications: malpositioning (most common), infection (actinomycosis with prolonged use), ectopic pregnancy risk, uterine perforation (rare).',
        explanation: 'IUD position is confirmed by identifying both arms in the endometrial cavity, the shaft in the cervical canal, and the tip within the fundus. Malpositioning is the most common complication. Prolonged IUD use (especially >5 years) increases the risk of pelvic actinomycosis. When pregnancy occurs with an IUD in place, risk of ectopic pregnancy is increased.',
        keyFact: 'Copper IUD = highly echogenic on US. Hormonal IUD = shadowing. Most common IUD complication = malposition. IUD + prolonged use = actinomycosis risk. Pregnancy with IUD = increased ectopic risk.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/intrauterine-contraceptive-device',
        tags: ['ultrasound', 'uterus', 'IUD', 'complication', 'malposition'],
      },
    },
    {
      id: 'gu-female-extra-003',
      front: {
        question: 'What is the O-RADS classification, and how does it differ from IOTA simple rules?',
      },
      back: {
        answer: 'O-RADS (Ovarian-Adnexal Reporting and Data System): 5-tier risk stratification (1 = normal → 5 = >50% risk malignancy on US, ~90% on MRI). Used for US and MRI. IOTA simple rules: classify as benign/malignant/indeterminate based on specific B-features (benign) and M-features (malignant).',
        explanation: 'O-RADS provides standardized reporting for ovarian and adnexal masses, similar to BI-RADS for the breast. Category 1 = normal ovary; Category 2 = almost certainly benign physiologic finding; Category 3 = low risk; Category 4 = intermediate risk; Category 5 = high risk. It incorporates both US and MRI criteria.',
        keyFact: 'O-RADS 1 = normal. O-RADS 2 = almost certainly benign (no follow-up). O-RADS 3 = low risk. O-RADS 4 = intermediate. O-RADS 5 = high risk (>50% on US). MRI O-RADS 5 ≈ 90% malignancy. Similar role to BI-RADS for ovarian masses.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/o-rads',
        tags: ['ultrasound', 'MRI', 'ovary', 'O-RADS', 'classification', 'malignancy'],
      },
    },
    {
      id: 'gu-female-extra-004',
      front: {
        question: 'What is a corpus luteum cyst and what are its typical Doppler features? How does it mimic an ectopic pregnancy?',
      },
      back: {
        answer: 'Corpus luteum cyst: functional ovarian cyst >3 cm, variable appearance (solid-appearing to cystic), "ring of fire" = intense peripheral blood flow on Doppler. Can mimic ectopic pregnancy; key: corpus luteum MOVES with ovary when transducer pressure applied; ectopic moves SEPARATELY from ovary.',
        explanation: 'The corpus luteum develops from the dominant follicle after ovulation and can grow up to 3 cm normally. When it fails to involute, a corpus luteum cyst forms (>3 cm). On color Doppler, the "ring of fire" pattern of intense peripheral vascularity is characteristic but also seen in ectopic gestational ring. The main differentiators: ectopic sac contains a yolk sac or embryo; ectopic moves separately from ovary; serum β-hCG is elevated in ectopic.',
        keyFact: '"Ring of fire" Doppler = corpus luteum OR ectopic gestational ring (both highly vascular). Key: push with transducer — corpus luteum moves with ovary; ectopic moves separately. Serum β-hCG is the clinical discriminator.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/corpus-luteum-cyst',
        tags: ['ultrasound', 'Doppler', 'ovary', 'corpus-luteum', 'ectopic-pregnancy', 'functional-cyst'],
      },
    },
    {
      id: 'gu-female-extra-005',
      front: {
        question: 'What is Turner syndrome and what imaging findings are characteristic?',
      },
      back: {
        answer: 'Turner syndrome (45,XO): streak (dysgenetic) ovaries on US, pre-pubertal uterus. Cardiovascular: aortic coarctation, bicuspid aortic valve. Renal: horseshoe kidney (most common renal anomaly).',
        explanation: 'Turner syndrome is a chromosomal abnormality (45,X or mosaic) causing primary hypogonadism in females. Streak gonads are fibrous tissue remnants with no functional follicles. On MRI/US, the uterus remains small and prepubertal in appearance without estrogen stimulation. Horseshoe kidney is the most common renal anomaly; other renal anomalies include renal ectopia and duplex collecting system.',
        keyFact: 'Turner syndrome (45,XO): streak ovaries + prepubertal uterus + horseshoe kidney + aortic coarctation/bicuspid AV. "45,XO = no O-vary" — ovaries are absent/streak.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/turner-syndrome',
        tags: ['ultrasound', 'MRI', 'ovary', 'Turner', 'congenital', 'uterus'],
      },
    },
    {
      id: 'gu-female-extra-006',
      front: {
        question: 'What are the imaging findings of pelvic inflammatory disease (PID) and its complications?',
      },
      back: {
        answer: 'PID spectrum: endometritis (US often normal, endometrial fluid/gas) → salpingitis (tubal wall thickening) → pyosalpinx (pus-filled tube with echogenic debris) → tubo-ovarian abscess (complex adnexal mass, no internal flow). Treatment: antibiotics; abscess: percutaneous drainage.',
        explanation: 'PID results from ascending infection, most commonly from Neisseria gonorrhoeae and Chlamydia trachomatis. On ultrasound, the spectrum progresses from subtle endometrial changes to complex adnexal pathology. Pyosalpinx appears as a tubular structure with internal echoes and wall thickening. Tubo-ovarian abscess (TOA) is a complex, thick-walled adnexal mass. On CT, hyperemic, thickened fallopian tube walls with surrounding fat stranding are characteristic.',
        keyFact: 'PID spectrum: endometritis → salpingitis → pyosalpinx → tubo-ovarian abscess. TOA = complex thick-walled adnexal mass on US. Loculated HSG contrast = PID adhesion sequela. Fitz-Hugh-Curtis syndrome = right upper quadrant perihepatitis from PID.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/pelvic-inflammatory-disease',
        tags: ['ultrasound', 'CT', 'fallopian-tube', 'PID', 'abscess', 'infection'],
      },
    },
    {
      id: 'gu-female-extra-007',
      front: {
        question: 'What is Mayer-Rokitansky-Küster-Hauser (MRKH) syndrome and what renal anomaly is it associated with?',
      },
      back: {
        answer: 'MRKH: congenital absence or atresia of the uterus (Müllerian agenesis) ± upper vaginal agenesis in a 46,XX female. Associated with unilateral renal agenesis in ~30% of cases.',
        explanation: 'MRKH syndrome is caused by complete or partial failure of Müllerian duct development. Patients have normal female external genitalia and gonads but absent or severely hypoplastic uterus and upper vagina. MRI confirms the diagnosis and characterizes the degree of Müllerian development. Renal and urinary tract anomalies occur in ~30%, most commonly unilateral renal agenesis.',
        keyFact: 'MRKH = absent uterus + absent upper vagina + normal female phenotype + 46,XX. 30% have unilateral renal agenesis. MRI is imaging of choice for characterization. Presents with primary amenorrhea despite normal secondary sexual characteristics.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mayer-rokitansky-kuster-hauser-syndrome',
        tags: ['MRI', 'uterus', 'MRKH', 'Müllerian', 'congenital', 'renal-agenesis'],
      },
    },
  ]},

  { id: 'gu-transplant', label: 'Renal Transplant', cards: [
    {
      id: 'gu-transplant-001',
      front: {
        question: 'Where is a transplant kidney placed and why is this surgically advantageous for imaging?',
      },
      back: {
        answer: 'Transplant kidney is placed in the extraperitoneal iliac fossa (right > left). Superficial location makes it ideal for ultrasound evaluation without requiring contrast or radiation.',
        explanation: 'The transplant kidney is anastomosed to the iliac vasculature (external iliac artery and vein) and the ureter is implanted into the bladder (ureteral neocystostomy). Living donors have the renal artery anastomosed end-to-side; cadaveric donors may have a segment of donor aorta used for end-to-side anastomosis to the recipient external iliac artery. The superficial position allows easy sonographic access.',
        keyFact: 'Transplant kidney = right iliac fossa (most common). Superficial = excellent US access. Mild hydronephrosis on transplant US is NORMAL (denervation, floppy ureter) — do not overcall obstruction unless labs are abnormal.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-transplant',
        tags: ['ultrasound', 'kidney', 'transplant', 'anatomy'],
      },
    },
    {
      id: 'gu-transplant-002',
      front: {
        question: 'What are the fluid collection complications after renal transplant and their typical time courses?',
      },
      back: {
        answer: 'Hematoma: immediate post-op to ~1 week. Urinoma: ~1–2 weeks (fluid Cr > serum Cr). Abscess: 3–4 weeks (peripheral enhancement, fever). Lymphocele: 2 weeks to 6 months (most common cause of transplant hydronephrosis; medial to graft; ipsilateral leg edema).',
        explanation: 'Post-transplant fluid collections require differentiation as management differs. Hematomas are complex and echogenic early, becoming more anechoic with time. Urinomas are anechoic and rapidly increasing in size; fluid creatinine > serum creatinine confirms urine leak. Abscess is complex with peripheral hyperemia. Lymphoceles are typically simple with few thin septations, medial to the transplant, and are the most common cause of transplant hydronephrosis.',
        keyFact: 'Lymphocele = MOST COMMON fluid collection to cause transplant hydronephrosis. Urinoma fluid Cr > Serum Cr (vs. lymphocele where Cr values match serum). Lymphocele = do NOT drain (recur) — treat with sclerosing agent or unroof.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-transplant-complications',
        tags: ['ultrasound', 'CT', 'kidney', 'transplant', 'complication', 'lymphocele'],
      },
    },
    {
      id: 'gu-transplant-003',
      front: {
        question: 'What is the most common vascular complication of renal transplant, what Doppler criteria suggest it, and how does renal vein thrombosis appear on Doppler?',
      },
      back: {
        answer: 'Most common vascular complication: renal artery stenosis (RAS). RAS Doppler criteria: PSV >200–300 cm/s, PSV ratio >1.8–2.5x, tardus parvus waveform (distal to stenosis). Renal vein thrombosis: reversed diastolic arterial flow ("reverse M sign").',
        explanation: 'RAS typically develops at the anastomosis within weeks to months. Clinical buzzword is "refractory hypertension." Post-transplant renal vein thrombosis occurs in the first week — the classic Doppler finding is paradoxical reversal of diastolic arterial flow in the renal artery (because venous obstruction increases renal vascular resistance). AVF and pseudoaneurysm occur post-biopsy (AVF = tissue vibration artifact + pulsatile venous flow; pseudoaneurysm = yin-yang sign).',
        keyFact: 'RAS = refractory hypertension + PSV >200–300 cm/s + tardus parvus. Renal vein thrombosis = reversed diastolic flow on ARTERIAL Doppler (not just absent venous flow). Most common vascular complication = RAS. AVF/pseudoaneurysm = post-biopsy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/transplant-renal-artery-stenosis',
        tags: ['ultrasound', 'Doppler', 'kidney', 'transplant', 'RAS', 'renal-vein-thrombosis'],
      },
    },
    {
      id: 'gu-transplant-004',
      front: {
        question: 'How do acute rejection, ATN, cyclosporin toxicity, and chronic rejection differ in timing and MAG-3 scintigraphy findings?',
      },
      back: {
        answer: 'Acute rejection: week 1–3, MAG-3 flow crap + delayed uptake/excretion. ATN: week 1, MAG-3 flow normal/mildly delayed + retained tracer (poor excretion). Cyclosporin toxicity: ~1 month, MAG-3 similar to ATN. Chronic rejection: months, MAG-3 crap throughout.',
        explanation: 'All causes of parenchymal dysfunction elevate the RI (>0.7) on ultrasound — RIs are not diagnostic of any specific etiology. Biopsy is the gold standard for differentiating rejection from ATN and other causes. The MAG-3 nuclear medicine exam helps narrow the differential: ATN shows preserved perfusion but poor function (tracer reaches kidney but isn\'t excreted). Cyclosporin toxicity mirrors ATN but occurs ~1 month later (not in the immediate post-op period).',
        keyFact: 'ATN: normal perfusion on MAG-3 + retained tracer (poor excretion) = "arrives but doesn\'t leave." Rejection: poor perfusion AND poor function. US RIs elevated in ALL causes — not specific. Biopsy is the gold standard for differentiation.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-transplant-rejection',
        tags: ['nuclear-medicine', 'ultrasound', 'kidney', 'transplant', 'rejection', 'ATN'],
      },
    },
    {
      id: 'gu-transplant-005',
      front: {
        question: 'What is post-transplant lymphoproliferative disorder (PTLD), and how does it appear on imaging?',
      },
      back: {
        answer: 'PTLD: B-cell lymphoma associated with EBV in immunosuppressed transplant recipients. Most common in first year post-transplant. Imaging: amorphous hypoechoic mass mimicking fluid on US (but has Doppler flow). Treatment: reduce immunosuppression.',
        explanation: 'PTLD is an uncommon but important complication of organ transplantation due to prolonged immunosuppression and EBV proliferation. It can arise anywhere in the body — any new mass in any organ in a transplant patient should raise concern for PTLD. EBV serology and rituximab use are associated with this diagnosis. On ultrasound, the hypoechoic mass can simulate a fluid collection — color Doppler flow distinguishes it from fluid.',
        keyFact: 'PTLD = amorphous hypoechoic renal transplant mass + Doppler FLOW (vs. fluid collection which has no flow). Any new mass in a transplant patient = PTLD until proven otherwise. Treatment = REDUCE immunosuppression (opposite of rejection).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/post-transplant-lymphoproliferative-disorder',
        tags: ['ultrasound', 'CT', 'kidney', 'transplant', 'PTLD', 'lymphoma', 'EBV'],
      },
    },
  ]},
]