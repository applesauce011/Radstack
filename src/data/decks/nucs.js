// ============================================================
// RadStack — Nuclear Medicine Deck
// ============================================================
// Naming convention: nucs-[section]-[###]
// ============================================================

export const nucsSubsections = [
  { id: 'nucs-physics',   label: 'Radiopharmacy & Physics',   cards: [
    {
      id: 'nucs-physics-001',
      front: {
        question: 'What is the mechanism by which F-18 FDG is trapped intracellularly, and why does this enable PET imaging of tumors?',
      },
      back: {
        answer: 'FDG is phosphorylated by hexokinase to FDG-6-phosphate, which cannot undergo glycolysis and remains trapped in the cell.',
        explanation: 'FDG enters cells via GLUT1 and GLUT3 transporters, competing with glucose. Once phosphorylated by hexokinase, the FDG-6-phosphate cannot proceed through the glycolytic pathway and accumulates. Tumors overexpress GLUT transporters and hexokinase due to the Warburg effect, leading to preferential FDG accumulation relative to normal tissue.',
        keyFact: 'FDG is trapped after phosphorylation by hexokinase — glucose can escape because it has glucose-6-phosphatase; most tumors do not.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/fluorodeoxyglucose',
        tags: ['PET', 'nuclear medicine', 'physics', 'FDG', 'tumor'],
      },
    },
    {
      id: 'nucs-physics-002',
      front: {
        question: 'What are the physical properties of F-18 (half-life, production method, photon energy) relevant to PET/CT?',
      },
      back: {
        answer: 'F-18: half-life 110 minutes, cyclotron-produced, positron emitter producing two 511 keV annihilation photons.',
        explanation: 'F-18 decays by positron emission. The emitted positron travels a short distance, annihilates with an electron, and produces two 511 keV photons at 180° — these are detected in coincidence by the PET ring detector. The 110-minute half-life is short enough to minimize patient dose but long enough to allow transport from cyclotron to imaging center.',
        keyFact: 'F-18 half-life = 110 minutes; cyclotron-produced; annihilation produces two 511 keV photons at 180° detected in coincidence.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/fluorine-18',
        tags: ['PET', 'nuclear medicine', 'physics', 'F-18', 'radiopharmacy'],
      },
    },
    {
      id: 'nucs-physics-003',
      front: {
        question: 'What is the standardized uptake value (SUV), and what is the traditional threshold for malignancy on FDG PET?',
        hint: 'Consider the formula and its limitations.',
      },
      back: {
        answer: 'SUV = (ROI activity × body weight) / administered activity; traditional malignancy threshold is SUV > 2.5.',
        explanation: 'SUV normalizes regional FDG activity to the injected dose and body weight, allowing semi-quantitative comparison across patients and studies. An SUV > 2.5 has traditionally suggested malignancy, but it is never sufficient alone to diagnose or exclude cancer. Multiple factors affect SUV: blood glucose level, time after injection, equipment, and tracer extravasation.',
        keyFact: 'SUV > 2.5 = traditional malignancy threshold, but SUV alone cannot diagnose or exclude cancer. High glucose → low SUV (competition). Obese patients → artificially high SUV.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/standardised-uptake-value',
        tags: ['PET', 'nuclear medicine', 'SUV', 'FDG', 'oncology'],
      },
    },
    {
      id: 'nucs-physics-004',
      front: {
        question: 'What is the minimum lesion size detectable by FDG PET, and why does partial volume averaging affect small lesions?',
      },
      back: {
        answer: 'PET detects lesions ≥ 6 mm; smaller lesions have falsely low average SUV due to partial volume averaging — use SUVmax instead.',
        explanation: 'PET resolution is limited by the positron range before annihilation and detector geometry. For lesions smaller than twice the system resolution (approximately 6 mm), the measured activity is averaged with surrounding lower-activity tissue, artificially lowering the measured SUV. SUVmax uses the single hottest voxel and is more reliable for small lesions.',
        keyFact: '6 mm = PET detection threshold. For small lesions, SUVmax (single hottest voxel) is more accurate than average SUV due to partial volume effect.',
        tags: ['PET', 'nuclear medicine', 'physics', 'SUV', 'partial volume'],
      },
    },
    {
      id: 'nucs-physics-005',
      front: {
        question: 'Why does a metallic pacemaker appear artifactually hot on attenuation-corrected PET images, and what is the solution?',
      },
      back: {
        answer: 'The CT overcorrects for attenuation at the dense metal, making that region appear falsely increased on corrected PET. Review uncorrected (source) images.',
        explanation: 'PET/CT uses CT data for attenuation correction of the PET emission data. Dense metallic objects cause beam hardening on CT, which the correction algorithm interprets as requiring high attenuation correction — creating artifactual increased activity on the corrected images. The uncorrected (source) images do not show this artifact.',
        keyFact: 'Metal artifact on attenuation-corrected PET = overcorrection → false hot. Classic example: pacemaker. Solution: always review uncorrected source images.',
        tags: ['PET', 'nuclear medicine', 'artifact', 'attenuation correction', 'physics'],
      },
    },
    {
      id: 'nucs-physics-006',
      front: {
        question: 'What are the properties of Tc-99m that make it ideal for nuclear medicine imaging?',
      },
      back: {
        answer: 'Generator-produced (from Mo-99), 140 keV gamma photon, 6-hour half-life, pure gamma emitter (no beta particles), cheap and readily available.',
        explanation: 'Tc-99m is the workhorse of nuclear medicine. It is eluted daily from a Mo-99/Tc-99m generator, making it independent of cyclotron access. The 140 keV photon energy is ideal for gamma camera detection — high enough to exit the body but low enough for effective collimation. The 6-hour half-life is practical for imaging while minimizing patient radiation dose.',
        keyFact: 'Tc-99m: 140 keV, T½ = 6 hours, generator-produced from Mo-99. The ideal imaging radionuclide.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/technetium-99m',
        tags: ['nuclear medicine', 'Tc-99m', 'radiopharmacy', 'physics', 'SPECT'],
      },
    },
    {
      id: 'nucs-physics-007',
      front: {
        question: 'What are the properties of Thallium-201 (Tl-201), and why has it largely been replaced by Tc-99m agents for myocardial perfusion?',
      },
      back: {
        answer: 'Tl-201: cyclotron-produced, 73-hour half-life, 69–81 keV characteristic X-rays. Replaced by Tc-99m due to long half-life, high radiation dose, low photon energy causing more attenuation artifact, and poor image quality.',
        explanation: 'Tl-201 acts as a potassium analog, entering cells via the Na/K-ATPase pump — uptake is proportional to myocardial perfusion. Its major advantage is redistribution, allowing viability assessment. However, the 73-hour half-life limits the dose that can be administered, resulting in low count density and longer acquisition times. Higher energy Tc-99m sestamibi provides superior image quality.',
        keyFact: 'Tl-201 T½ = 73 hours (long → high dose, low counts). Acts as K+ analog via Na/K-ATPase. Still used for viability at centers without PET.',
        tags: ['nuclear medicine', 'thallium', 'cardiac', 'radiopharmacy', 'SPECT'],
      },
    },
    {
      id: 'nucs-physics-008',
      front: {
        question: 'What is "brown fat" uptake on FDG PET, where does it occur, and how can it be minimized?',
      },
      back: {
        answer: 'Brown fat (BAT) takes up FDG due to high metabolic activity. It appears around the neck, supraclavicular regions, mediastinum, and paraspinal regions. Minimize with warm room temperature, benzodiazepines, or beta-blockers before imaging.',
        explanation: 'Brown adipose tissue (BAT) is thermogenic and highly metabolically active, using glucose for heat generation. It is FDG-avid and can mimic pathologic lymphadenopathy if not recognized. Its characteristic distribution (bilateral, symmetric, neck/supraclavicular/paraspinal) and CT correlation (fat density) allow recognition.',
        keyFact: 'Brown fat = bilateral symmetric FDG in neck/supraclavicular/mediastinum. Minimize with: warm room, benzodiazepines, beta-blockers before scan.',
        tags: ['PET', 'FDG', 'artifact', 'brown fat', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-physics-009',
      front: {
        question: 'What is the effect of high blood glucose and insulin administration on FDG PET, and why?',
      },
      back: {
        answer: 'High glucose (>150–200 mg/dL) causes falsely low SUV (glucose competes with FDG). Insulin administration drives FDG into muscle → diffuse muscle uptake, non-diagnostic scan.',
        explanation: 'FDG and glucose compete for the same GLUT transporters and hexokinase. When blood glucose is elevated, less FDG is taken up by tissues relative to glucose, lowering measured SUV values. Exogenous insulin drives both glucose and FDG into skeletal muscle via GLUT4, creating the classic pattern of diffuse muscle uptake that obscures pathology.',
        keyFact: 'High glucose → low FDG uptake (competition). Insulin injection → diffuse muscle uptake → non-diagnostic. Never give insulin before PET.',
        tags: ['PET', 'FDG', 'artifact', 'glucose', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-physics-010',
      front: {
        question: 'What is the SI unit for radioactivity, and how does it relate to the older Curie unit used in nuclear medicine?',
      },
      back: {
        answer: 'Becquerel (Bq) = 1 disintegration/second. 1 Curie = 3.7 × 10¹⁰ Bq. Curie is still commonly used in nuclear medicine for dosing (mCi range).',
        explanation: 'The Becquerel is the SI unit of radioactivity but is too small for clinical use (a typical nuclear medicine dose is hundreds of millions of Becquerels). The Curie (Ci) remains commonly used in clinical nuclear medicine, with typical doses in the millicurie (mCi) range. Absorbed dose is measured in Gray (Gy), while effective dose uses Sievert (Sv).',
        keyFact: '1 Curie = 3.7 × 10¹⁰ Bq = 37,000 MBq. Clinical NM doses are in mCi. 1 Gy = 100 rad; 1 Sv = 100 rem.',
        tags: ['nuclear medicine', 'physics', 'radiation units', 'radiopharmacy'],
      },
    },
  ]},

  { id: 'nucs-pet',       label: 'Oncology PET/CT',           cards: [
    {
      id: 'nucs-pet-001',
      front: {
        question: 'What is the normal biodistribution of FDG on PET/CT, and which structures should always demonstrate uptake?',
      },
      back: {
        answer: 'Brain (highest), myocardium (variable), liver, spleen, GI tract, salivary glands, blood pool, testes, renal collecting system/bladder (excretion).',
        explanation: 'The brain has obligate glucose metabolism and shows consistently high FDG uptake. Cardiac myocardium uptake is variable depending on the fasting state — high in the fed state, suppressed with prolonged fasting or a high-fat/low-carb diet. Renal excretion is prominent in the collecting system and bladder. Uptake in ovaries is physiologic during ovulation and menstruation.',
        keyFact: 'Brain is always hot. Myocardium is variable (suppressed by fasting). Bladder is the critical excretion organ. Physiologic ovarian uptake in premenopausal women — absent in postmenopausal.',
        tags: ['PET', 'FDG', 'biodistribution', 'nuclear medicine', 'oncology'],
      },
    },
    {
      id: 'nucs-pet-002',
      front: {
        question: 'List the tumors that are typically PET-cold (FDG non-avid) and those that are FDG-avid despite being benign.',
      },
      back: {
        answer: 'PET-cold tumors: BAC/adenocarcinoma in situ, carcinoid, RCC, mucinous tumors, prostate cancer, peritoneal implants. FDG-avid benign: infection, inflammation, ovaries (follicular), muscles, brown fat.',
        explanation: 'Low-grade and well-differentiated tumors often lack sufficient hexokinase and glucose transporter upregulation to accumulate FDG. Mucinous tumors have low cellularity. Conversely, infectious and inflammatory processes have activated macrophages and neutrophils that are highly glycolytic, causing FDG uptake comparable to or exceeding malignancy.',
        keyFact: 'PET-cold cancers: carcinoid, BAC, mucinous, prostate, RCC. PET-hot non-cancers: infection, inflammation, brown fat, ovaries (premenopausal), activated muscle.',
        tags: ['PET', 'FDG', 'oncology', 'false negative', 'false positive'],
      },
    },
    {
      id: 'nucs-pet-003',
      front: {
        question: 'What is the role of PET/CT in initial staging of lung cancer, and why must PET-positive mediastinal nodes be confirmed histologically?',
      },
      back: {
        answer: 'PET/CT detects distant metastases in ~10% of patients with otherwise negative CT workup. PET-positive mediastinal nodes require mediastinoscopy confirmation because PET is sensitive but not specific — granulomatous disease causes false positives.',
        explanation: 'PET/CT evaluates both local tumor extent and distant metastatic disease in a single examination. For mediastinal staging, PET is very sensitive for detecting metabolically active nodes but cannot distinguish malignant from inflammatory/granulomatous involvement. Denying potentially curative surgery based on PET alone risks missing a surgical candidate.',
        keyFact: 'PET upstages 10% of lung cancer patients with negative CT. PET+ mediastinal nodes must have mediastinoscopy before denying surgery — specificity is too low to act on PET alone.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/pet-ct-in-lung-cancer',
        tags: ['PET', 'lung cancer', 'staging', 'mediastinum', 'oncology'],
      },
    },
    {
      id: 'nucs-pet-004',
      front: {
        question: 'What size threshold applies to solitary pulmonary nodule evaluation by PET, and what does FDG non-avidity in an SPN suggest?',
      },
      back: {
        answer: 'PET reliable for SPNs ≥ 5–8 mm. FDG non-avid SPN → short-term CT follow-up reasonable. FDG-avid SPN → biopsy or resection preferred.',
        explanation: 'Below 5–8 mm, partial volume averaging makes PET unreliable for nodule characterization. A non-avid nodule is likely benign, though low-grade malignancies (adenocarcinoma, carcinoid) can be falsely negative. An avid nodule raises concern for malignancy, but active granulomatous disease (TB, histoplasmosis) can also be FDG-avid. Diagnosis cannot be made by SUV alone.',
        keyFact: 'SPN < 5–8 mm → PET unreliable. Non-avid SPN → follow-up. Avid SPN → tissue diagnosis. Active granulomas = classic false positive (TB, histoplasmosis).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/solitary-pulmonary-nodule',
        tags: ['PET', 'SPN', 'lung', 'oncology', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-pet-005',
      front: {
        question: 'What is the primary role of PET/CT in esophageal cancer, and how is treatment response assessed?',
      },
      back: {
        answer: 'Primary role: identify stage IV disease (distant mets) to exclude surgical candidates. Response: ≥30% decrease in FDG avidity after neoadjuvant therapy suggests favorable prognosis.',
        explanation: 'PET/CT is less useful for local esophageal tumor staging, which is better assessed by endoscopic ultrasound. Its main value is whole-body staging to detect unsuspected distant metastases that preclude curative resection. A ≥30% SUV reduction after neoadjuvant chemotherapy identifies responders who may benefit from surgery; non-responders may be spared ineffective regimens.',
        keyFact: 'Esophageal cancer: PET for M-staging (finds occult mets → avoids futile surgery). EUS for T-staging. Treatment response: ≥30% SUV drop = favorable.',
        tags: ['PET', 'esophageal cancer', 'staging', 'oncology', 'treatment response'],
      },
    },
    {
      id: 'nucs-pet-006',
      front: {
        question: 'Why does hepatocellular carcinoma (HCC) have limited FDG avidity on PET, and what are the PET limitations for RCC and bladder cancer?',
      },
      back: {
        answer: 'HCC: relatively high glucose-6-phosphatase dephosphorylates FDG → escape from cells (only ~50% detected). RCC: only ~50% FDG-avid. Bladder cancer: high urinary FDG excretion obscures bladder/ureter lesions.',
        explanation: 'Most cancers lack glucose-6-phosphatase, so phosphorylated FDG stays trapped. HCC retains some enzymatic function (including glucose-6-phosphatase), allowing FDG to escape. RCC has variable glucose metabolism. For bladder/ureteral lesions, the normally high urinary FDG concentration creates a background that masks lesions.',
        keyFact: 'HCC, RCC, prostate, mucinous, carcinoid = commonly PET-cold cancers. Bladder/ureter lesions obscured by urinary FDG excretion.',
        tags: ['PET', 'HCC', 'RCC', 'FDG', 'false negative'],
      },
    },
    {
      id: 'nucs-pet-007',
      front: {
        question: 'What is the optimal timing of PET/CT after chemotherapy and after radiation therapy, and why?',
      },
      back: {
        answer: 'After chemotherapy: wait 2–3 weeks. After radiation: wait 8–12 weeks. Avoids false negatives from tumor stunning and false positives from treatment-related inflammation.',
        explanation: 'Chemotherapy can temporarily suppress tumor metabolism without cell death (stunning), causing false negative results if imaging occurs too soon. Radiation causes a prolonged inflammatory response with FDG-avid macrophage infiltration, which can persist for months and mimic residual tumor. Adequate delay allows inflammation to resolve while residual viable tumor maintains its FDG avidity.',
        keyFact: 'Post-chemo PET: wait 2–3 weeks. Post-radiation PET: wait 8–12 weeks. Too early = false negative (stunning) or false positive (inflammation).',
        tags: ['PET', 'treatment response', 'oncology', 'timing', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-pet-008',
      front: {
        question: 'What are the physiologic causes of FDG uptake in the female pelvis, and how do you differentiate physiologic from pathologic endometrial/ovarian uptake?',
      },
      back: {
        answer: 'Physiologic: endometrial uptake during menstruation (days 1–4) and ovarian uptake at ovulation (~day 14). Physiologic endometrial uptake is diffuse; pathologic is focal. Any FDG in ovary/endometrium of postmenopausal woman is suspicious → ultrasound.',
        explanation: 'Cyclic FDG uptake in the female pelvis is a common cause of false positives. Ovarian uptake at ovulation may appear as an ovoid focus or rim of activity with photopenic center. Diffuse vs focal is the key distinguishing feature for endometrial uptake. The absence of these physiologic changes in postmenopausal women makes any pelvic uptake more concerning.',
        keyFact: 'Premenopausal: diffuse endometrial FDG (menses) and ovarian FDG (ovulation) = physiologic. Postmenopausal focal pelvic FDG = suspicious → next step: ultrasound.',
        tags: ['PET', 'gynecology', 'false positive', 'FDG', 'pelvis'],
      },
    },
    {
      id: 'nucs-pet-009',
      front: {
        question: 'What is the flare phenomenon on bone scan and FDG PET after cancer treatment, and how do you distinguish it from true disease progression?',
      },
      back: {
        answer: 'Flare: increased radiotracer uptake in treated metastases due to healing bone turnover, occurring 2 weeks to 3 months after chemotherapy. On plain film, lesions become more sclerotic (not lytic). Activity regresses by 6 months.',
        explanation: 'When bone metastases respond to chemotherapy, reparative bone remodeling produces increased osteoblastic activity that is picked up by Tc-99m MDP bone scan. Simultaneously, FDG PET may show increased activity in responding lesions due to inflammatory infiltration. The key: radiographs show increasing sclerosis (healing), and uptake normalizes by 6 months.',
        keyFact: 'Flare phenomenon: treated mets → more uptake on bone scan at 2 weeks–3 months = healing, NOT progression. Plain films show sclerosis. Regresses by 6 months.',
        tags: ['bone scan', 'flare phenomenon', 'oncology', 'treatment response', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-pet-010',
      front: {
        question: 'For which cancers does FDG PET play a limited role, and which alternative PET tracers are available for prostate cancer staging?',
      },
      back: {
        answer: 'Limited FDG role: prostate, RCC, HCC, mucinous tumors, carcinoid, well-differentiated tumors. Prostate alternatives: F-18 PSMA-PET (most sensitive for recurrence/staging), C-11 choline.',
        explanation: 'Most prostate cancers rely on fatty acid rather than glucose metabolism, making FDG-PET insensitive. FDG-PET is reserved for aggressive castration-resistant prostate cancer with bone metastases. PSMA (prostate-specific membrane antigen)-targeted PET tracers have high sensitivity for biochemical recurrence and are increasingly the preferred imaging for recurrent/metastatic prostate cancer.',
        keyFact: 'Prostate cancer = FDG-cold (uses lipid metabolism). PSMA-PET is now preferred for staging/recurrence detection in prostate cancer.',
        tags: ['PET', 'prostate cancer', 'PSMA', 'FDG', 'oncology'],
      },
    },
  ]},

  { id: 'nucs-thyroid',   label: 'Thyroid & Parathyroid',     cards: [
    {
      id: 'nucs-thyroid-001',
      front: {
        question: 'Compare I-123 and I-131 for thyroid imaging: half-life, photon energy, production method, and clinical indications.',
      },
      back: {
        answer: 'I-123: T½ 13h, 159 keV, cyclotron-produced, preferred for imaging/uptake. I-131: T½ 8 days, 364 keV + beta particles, fission-produced, used for therapy (thyroid cancer, Graves, goiter).',
        explanation: 'I-123 is ideal for imaging because its photon energy is appropriate for gamma camera detection, its short half-life limits radiation dose, and it is organified by the thyroid allowing uptake quantification. I-131 is therapeutic because its beta particles deliver cytotoxic radiation to the thyroid; gamma photons allow simultaneous imaging post-therapy.',
        keyFact: 'I-123 = imaging (13h, 159 keV, cyclotron, expensive). I-131 = therapy (8 days, beta particles, reactor, cheap). I-131 is contraindicated in pregnancy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/radioiodine-i-131-therapy',
        tags: ['thyroid', 'nuclear medicine', 'iodine', 'therapy', 'SPECT'],
      },
    },
    {
      id: 'nucs-thyroid-002',
      front: {
        question: 'How does Tc-99m pertechnetate differ from iodine in thyroid imaging, and when is it preferred over I-123?',
      },
      back: {
        answer: 'Pertechnetate is trapped but NOT organified by the thyroid (unlike iodine). Preferred when: recent IV iodinated contrast given, IV administration needed, or quick study required.',
        explanation: 'Both iodine and pertechnetate are trapped by thyroid follicular cells via the sodium-iodide symporter, but only iodine is subsequently organified into thyroid hormone. Pertechnetate washes out quickly, so uptake cannot be quantified as reliably. Its advantages: generator-produced (cheap, available), IV route, and not affected by prior oral iodine loading from food. Salivary glands are prominently seen with pertechnetate but not I-123.',
        keyFact: 'Pertechnetate = trapped but NOT organified → cannot reliably quantify uptake. Key difference: salivary glands visible with Tc-99m, not with I-123.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/thyroid-scintigraphy',
        tags: ['thyroid', 'nuclear medicine', 'pertechnetate', 'Tc-99m', 'SPECT'],
      },
    },
    {
      id: 'nucs-thyroid-003',
      front: {
        question: 'What is a discordant thyroid nodule, and why is biopsy recommended?',
      },
      back: {
        answer: 'A discordant nodule is hot on Tc-99m pertechnetate but cold on I-123. It can trap but cannot organify iodine, suggesting loss of thyroid differentiation — biopsy recommended as it may be malignant.',
        explanation: 'Normal thyroid tissue both traps and organifies iodine. A nodule that traps pertechnetate (appearing warm/hot) but cannot organify iodine (appearing cold on I-123) has disrupted organification — a feature that can be seen in thyroid carcinoma. This discordance pattern requires tissue diagnosis.',
        keyFact: 'Discordant nodule = hot on Tc-99m, cold on I-123 → cannot organify iodine → possible malignancy → biopsy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/thyroid-nodule',
        tags: ['thyroid', 'nuclear medicine', 'discordant nodule', 'malignancy', 'SPECT'],
      },
    },
    {
      id: 'nucs-thyroid-004',
      front: {
        question: 'What is the classic scintigraphic appearance of Graves disease, and what are the normal iodine uptake values at 6 and 24 hours?',
      },
      back: {
        answer: 'Graves: diffusely enlarged thyroid with homogeneously increased uptake bilaterally; often prominent pyramidal lobe. Both 6h and 24h uptake elevated. Normal: 6h = 6–18%, 24h = 10–30%.',
        explanation: 'In Graves disease, TSH-receptor stimulating antibodies cause diffuse thyroid hyperfunction. The entire gland enlarges and takes up iodine avidly. The pyramidal lobe (embryological thyroglossal duct remnant) becomes visible due to stimulation. Both early and delayed uptake are supranormal. In very high uptake Graves, salivary glands may not be seen with Tc-99m (normally distinguishing), making I-123 and Tc-99m scans look similar.',
        keyFact: 'Graves = diffuse homogeneous uptake + pyramidal lobe + elevated 6h and 24h uptake. Normal 24h uptake = 10–30%; Graves typically > 35–50%.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/graves-disease',
        tags: ['thyroid', 'Graves disease', 'nuclear medicine', 'hyperthyroidism', 'I-123'],
      },
    },
    {
      id: 'nucs-thyroid-005',
      front: {
        question: 'What is the classic appearance of subacute thyroiditis on thyroid scan, and how does it differ from Graves disease clinically and on imaging?',
      },
      back: {
        answer: 'Subacute thyroiditis: diffusely low/absent thyroid uptake with very low 24h uptake (<5%). Graves: diffusely HIGH uptake. Clinically: subacute thyroiditis has painful thyroid; Graves is painless with autoimmune etiology.',
        explanation: 'In subacute (de Quervain) thyroiditis, the follicular cells are destroyed by inflammation, releasing preformed thyroid hormone (causing transient hyperthyroidism) but preventing new iodine uptake. The scan shows markedly reduced or absent uptake. This contrasts with Graves where overproduction drives elevated uptake. Distinguishing them prevents inappropriate I-131 therapy in thyroiditis.',
        keyFact: 'Low thyroid uptake + hyperthyroidism + painful gland = subacute thyroiditis. High uptake + painless + diffuse = Graves. Low uptake = do NOT treat with I-131.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/subacute-thyroiditis',
        tags: ['thyroid', 'thyroiditis', 'nuclear medicine', 'hyperthyroidism', 'SPECT'],
      },
    },
    {
      id: 'nucs-thyroid-006',
      front: {
        question: 'What patient preparation is required before I-123 or I-131 thyroid imaging, and why must iodinated contrast be avoided?',
      },
      back: {
        answer: 'Need non-suppressed TSH: stop thyroid hormone 4 weeks, or give 2 IM injections of recombinant TSH (rTSH). Iodinated contrast blocks thyroid iodine uptake — wait 1 month after IV contrast before radioiodine imaging.',
        explanation: 'Radioiodine is taken up via the sodium-iodide symporter, which is TSH-dependent. Suppressed TSH (from exogenous thyroid hormone) markedly reduces iodine uptake, making imaging non-diagnostic. Non-iodine-based contrast media do not interfere. rTSH (Thyrogen) avoids the hypothyroid symptoms of stopping thyroid hormone, making it preferred for patients on thyroid replacement.',
        keyFact: 'Goal TSH > 30 mIU/mL for I-131 therapy. Wait 1 month after IV iodinated contrast before thyroid iodine scan. rTSH = alternative to stopping levothyroxine.',
        tags: ['thyroid', 'nuclear medicine', 'iodine', 'preparation', 'I-131'],
      },
    },
    {
      id: 'nucs-thyroid-007',
      front: {
        question: 'What are the I-131 dosing guidelines for post-thyroidectomy thyroid cancer ablation based on risk stratification?',
      },
      back: {
        answer: 'Low-risk (tumor <1.5 cm, no capsule invasion): ≤30 mCi. High-risk: 100–200 mCi. Functioning lung/skeletal metastases: >200 mCi. Limit whole-body retention to 80 mCi at 48h to avoid pulmonary fibrosis.',
        explanation: 'After thyroidectomy, residual thyroid tissue and metastases are ablated with I-131. Higher doses are required for more aggressive disease. The dose-limiting toxicities are pulmonary fibrosis (from functioning lung mets) and bone marrow suppression. Goal TSH 30–50 mIU/mL maximizes uptake of therapeutic I-131 in residual/metastatic tissue.',
        keyFact: 'Low-risk thyroid CA: ≤30 mCi I-131. High-risk: 100–200 mCi. Pulmonary mets: >200 mCi but limit whole-body retention to 80 mCi at 48h → prevents pulmonary fibrosis.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/radioiodine-i-131-therapy',
        tags: ['thyroid cancer', 'I-131', 'therapy', 'nuclear medicine', 'dosing'],
      },
    },
    {
      id: 'nucs-thyroid-008',
      front: {
        question: 'What are the breastfeeding restrictions after I-131, I-123, and Tc-99m administration?',
      },
      back: {
        answer: 'I-131 ablative dose: stop breastfeeding permanently for current child. I-123: resume 2–3 days after. Tc-99m: resume 12–24 hours after.',
        explanation: 'Radioactive iodine is secreted in breast milk and concentrated in the neonatal thyroid (functional from 12 weeks gestation). An ablative I-131 dose would deliver a significant radiation dose to the infant\'s thyroid. For diagnostic agents with shorter half-lives (I-123, Tc-99m), temporary cessation with pumping and discarding milk allows decay to safe levels.',
        keyFact: 'I-131 therapy → permanently stop breastfeeding current child. I-123 → resume after 2–3 days. Tc-99m → resume after 12–24 hours.',
        tags: ['thyroid', 'I-131', 'breastfeeding', 'nuclear medicine', 'radiation safety'],
      },
    },
    {
      id: 'nucs-thyroid-009',
      front: {
        question: 'What is the mechanism of Tc-99m sestamibi localization in parathyroid adenomas, and what is the dual-phase technique?',
      },
      back: {
        answer: 'Sestamibi localizes to mitochondria — parathyroid adenomas have high mitochondrial density and blood flow → avid early uptake that persists on delayed images (3 hours) after normal thyroid washes out.',
        explanation: 'Both normal thyroid tissue and parathyroid adenomas take up sestamibi early, but thyroid activity washes out on delayed images while the adenoma retains tracer due to its high mitochondrial content and relatively slower washout. SPECT/CT improves precise localization for presurgical planning.',
        keyFact: 'Sestamibi parathyroid: depends on mitochondrial density + blood flow. Dual-phase: early (both thyroid + PTH hot) → delayed (thyroid washes out, adenoma persists). SPECT/CT for localization.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/parathyroid-scintigraphy',
        tags: ['parathyroid', 'sestamibi', 'nuclear medicine', 'adenoma', 'SPECT'],
      },
    },
    {
      id: 'nucs-thyroid-010',
      front: {
        question: 'What is the dual-tracer parathyroid technique, and what are the false positives and false negatives for parathyroid sestamibi scanning?',
      },
      back: {
        answer: 'Dual-tracer: Tc-99m sestamibi (or Tl-201) for both thyroid + parathyroid, MINUS I-123 or pertechnetate (thyroid only) → residual activity = parathyroid. False positives: thyroid nodules, head/neck cancers, lymphadenopathy. False negatives: small adenomas, 4-gland hyperplasia.',
        explanation: 'Subtraction imaging removes thyroid signal from the combined image, leaving only parathyroid uptake. Motion artifact is a major limitation. Sestamibi also concentrates in malignancies (breast, lung) and thyroid nodules, causing false positives. Multigland hyperplasia, common in MEN1, may appear as asymmetric uptake or be missed entirely.',
        keyFact: 'Dual-tracer: subtract thyroid tracer (I-123/pertechnetate) from MIBI → parathyroid. If MIBI shows lymph nodes → suspicious for cancer. FN: small adenoma, 4-gland hyperplasia.',
        tags: ['parathyroid', 'sestamibi', 'subtraction', 'nuclear medicine', 'hyperparathyroidism'],
      },
    },
    {
      id: 'nucs-thyroid-011',
      front: {
        question: 'What is the approximate malignancy risk of a cold thyroid nodule on nuclear scan, and what is the most common cause of a cold nodule?',
      },
      back: {
        answer: 'Cold nodule: ~20% malignancy risk. Most common cause (~70–75%) of a cold nodule is a benign colloid cyst. A warm nodule requires oblique views or biopsy if indeterminate.',
        explanation: 'Cold nodules show reduced or absent tracer uptake relative to surrounding thyroid. While malignancy must be excluded (thyroid cancer is almost always cold), most cold nodules are benign — colloid cysts, follicular adenomas, or degenerative nodules. Hot/hyperfunctioning nodules are almost always benign autonomous adenomas. Nuclear imaging is typically only performed for cytologically indeterminate nodules.',
        keyFact: 'Cold nodule: 20% malignancy risk. Most common cold nodule = benign colloid cyst (70–75%). Hot nodule = almost always benign autonomous adenoma.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/thyroid-nodule',
        tags: ['thyroid', 'cold nodule', 'nuclear medicine', 'malignancy', 'SPECT'],
      },
    },
  ]},

  { id: 'nucs-bone',      label: 'Bone Scintigraphy',         cards: [
    {
      id: 'nucs-bone-001',
      front: {
        question: 'What is the mechanism of Tc-99m MDP localization in bone, what is the critical organ, and what dose is typically administered?',
      },
      back: {
        answer: 'MDP deposits by chemisorption in the mineral (hydroxyapatite) phase of bone, proportional to osteoblastic activity and blood flow. Critical organ: bladder. Typical dose: 20 mCi, imaging at 2–4 hours.',
        explanation: 'Tc-99m MDP (methylene diphosphonate) and HDP bind to hydroxyapatite crystals in newly formed bone matrix via chemisorption. Areas of increased osteoblastic activity (healing fractures, metastases, infection, arthritis) accumulate more tracer. Because MDP is rapidly excreted by the kidneys, the bladder receives the highest radiation dose — patients should void before imaging to remove bladder activity that can obscure pelvic lesions.',
        keyFact: 'MDP = chemisorption to hydroxyapatite → proportional to osteoblastic activity. Critical organ = bladder. Void before imaging. 20 mCi, delayed images at 2–4 hours.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/bone-scintigraphy',
        tags: ['bone scan', 'Tc-99m', 'MDP', 'nuclear medicine', 'SPECT'],
      },
    },
    {
      id: 'nucs-bone-002',
      front: {
        question: 'What are the three phases of a bone scan, and what does each phase evaluate? When is each phase specifically useful?',
      },
      back: {
        answer: 'Phase 1 (flow/angiogram): blood flow, first seconds. Phase 2 (blood pool): extracellular distribution at 5 min. Phase 3 (delayed/skeletal): osteoblastic activity at 2–4 hours. Three-phase hot = osteomyelitis, fracture, tumor. Cellulitis = hot on phases 1–2 only, cold delayed.',
        explanation: 'The three-phase bone scan provides both perfusion and metabolic information. The flow and blood pool phases reflect vascular perfusion and soft tissue inflammation. The delayed phase reflects osteoblastic bone turnover. Distinguishing cellulitis (soft tissue inflammation without bone involvement) from osteomyelitis (bone involvement) requires comparison of phases — osteomyelitis is positive on all three, while cellulitis has a negative delayed phase.',
        keyFact: 'Osteomyelitis = 3-phase hot. Cellulitis = phases 1–2 hot, delayed COLD. Septic arthritis = 3-phase hot on BOTH sides of joint. Shin splints = delayed hot only (linear).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/three-phase-bone-scan',
        tags: ['bone scan', 'three phase', 'osteomyelitis', 'nuclear medicine', 'SPECT'],
      },
    },
    {
      id: 'nucs-bone-003',
      front: {
        question: 'What is a superscan, what are its causes, and how do you distinguish a metastatic superscan from a metabolic superscan?',
      },
      back: {
        answer: 'Superscan = diffusely increased skeletal uptake with absent renal visualization. Metastatic: primarily axial skeleton + proximal humeri/femora (breast, prostate). Metabolic: entire long bones + hot skull (hyperparathyroidism, renal osteodystrophy). Metabolic superscan is the more common MCQ answer.',
        explanation: 'A superscan occurs when so much radiotracer is absorbed by bone that renal excretion is markedly reduced — the kidneys are "absent" because the bone:background ratio is so high. Metastatic disease predominantly affects the axial skeleton where red marrow resides. Metabolic bone disease (hyperparathyroid, renal osteodystrophy) causes diffuse cortical involvement of all bones including the long bones.',
        keyFact: 'Superscan: no kidneys visible = all tracer in bone. Metastatic (prostate/breast) = axial. Metabolic (hyperPTH/renal OD) = long bones + hot skull. MCQ answer for metabolic = hyperPTH.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/superscan',
        tags: ['bone scan', 'superscan', 'metastases', 'nuclear medicine', 'hyperparathyroidism'],
      },
    },
    {
      id: 'nucs-bone-004',
      front: {
        question: 'Which cancers commonly produce false-negative bone scans, and why?',
      },
      back: {
        answer: 'False-negative bone scans: multiple myeloma, RCC, thyroid carcinoma, aggressive anaplastic tumors, neuroblastoma, lymphoma. Reason: purely lytic/marrow-replacing lesions with minimal osteoblastic response.',
        explanation: 'Bone scan detects osteoblastic (bone-forming) response to metastatic disease. Purely lytic lesions that replace marrow without stimulating surrounding osteoblasts will be photopenic or invisible on bone scan. Multiple myeloma is the classic example — entirely lytic lesions without osteoblastic response. F-18 FDG PET/CT is superior for detecting marrow-replacing disease.',
        keyFact: 'False-negative bone scan: myeloma (purely lytic), RCC, thyroid CA, neuroblastoma, lymphoma. FDG PET/CT is better for lytic/marrow lesions. Single photopenic lesion + known malignancy = 80% malignant.',
        tags: ['bone scan', 'false negative', 'metastases', 'myeloma', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-bone-005',
      front: {
        question: 'What is the Honda sign on bone scan, and what does it represent?',
      },
      back: {
        answer: 'Honda sign: H-shaped uptake in the sacrum on bone scan, representing bilateral sacral insufficiency fractures in a patient with osteoporosis (or after pelvic radiation).',
        explanation: 'Insufficiency fractures occur when normal stresses are applied to weakened bone. In the sacrum, the typical pattern involves vertical fractures through the sacral alae bilaterally, with a horizontal fracture connecting them — creating the H or Honda logo shape. This is most common in elderly osteoporotic women or patients who have received pelvic radiation.',
        keyFact: 'Honda sign = H-shaped sacral uptake = bilateral sacral insufficiency fractures. Classic in elderly osteoporotic women or post-pelvic radiation.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/sacral-insufficiency-fracture',
        tags: ['bone scan', 'sacral insufficiency fracture', 'Honda sign', 'nuclear medicine', 'osteoporosis'],
      },
    },
    {
      id: 'nucs-bone-006',
      front: {
        question: 'What is the double density sign on bone scan, and what is its differential diagnosis?',
      },
      back: {
        answer: 'Double density sign: focal intense uptake (nidus) within a larger area of moderately increased uptake (hyperemia). Most commonly osteoid osteoma. Differential: Brodie abscess, stress fracture (less likely).',
        explanation: 'Osteoid osteoma has a highly vascular central nidus that demonstrates intense tracer uptake. Surrounding reactive bone and periosteal reaction generate a broader zone of mildly increased uptake due to hyperemia. The double density sign (intense central focus within larger zone) is characteristic. A normal bone scan effectively excludes osteoid osteoma.',
        keyFact: 'Double density sign = intense central nidus + surrounding hyperemia = osteoid osteoma until proven otherwise. Normal bone scan EXCLUDES osteoid osteoma.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/osteoid-osteoma',
        tags: ['bone scan', 'osteoid osteoma', 'double density sign', 'nuclear medicine', 'SPECT'],
      },
    },
    {
      id: 'nucs-bone-007',
      front: {
        question: 'What bone scan patterns in a cancer patient suggest HIGH probability of bone metastases?',
      },
      back: {
        answer: 'High probability: solitary sternal lesion in breast cancer (~80%), multifocal nonadjacent rib uptake, single photopenic lesion in neuroblastoma/RCC/thyroid CA (~80%), randomly distributed multifocal lesions.',
        explanation: 'The interpretation of bone scan findings in oncology depends heavily on the distribution and morphology of lesions. A single rib lesion is only ~10% likely to be malignant (trauma is more common). Adjacent rib lesions are almost always traumatic. A solitary sternal lesion in breast cancer is highly suspicious. Photopenic (cold) lesions in aggressive malignancies (neuroblastoma, RCC) represent replacement of bone without osteoblastic response.',
        keyFact: 'Solitary sternal lesion + breast CA = 80% malignant. Single rib = 10% malignant. Adjacent rib lesions = trauma. Single photopenic lesion in neuroblastoma/RCC/thyroid = 80% malignant.',
        tags: ['bone scan', 'metastases', 'oncology', 'nuclear medicine', 'breast cancer'],
      },
    },
    {
      id: 'nucs-bone-008',
      front: {
        question: 'What is the bone scan appearance of Paget disease, and what complication should be suspected if a focal cold lesion develops within pagetoid bone?',
      },
      back: {
        answer: 'Paget: markedly increased uptake in enlarged bone (skull, femur, pelvis, vertebral body). Focal cold lesion within pagetoid bone = concern for malignant degeneration to osteosarcoma.',
        explanation: 'Paget disease shows intensely increased uptake due to the massive increase in bone turnover (both osteoclastic and osteoblastic activity). The affected bone is typically enlarged — a key differentiating feature from other causes of increased uptake. The sclerotic (burned-out) phase may show subsiding bone scan activity. The most feared complication is secondary osteosarcoma, manifesting as a focal photopenic defect within previously hot pagetoid bone.',
        keyFact: 'Paget: hot + enlarged bone (classic: whole enlarged femur, skull, vertebral body + posterior elements). New focal cold spot in Paget = sarcomatous degeneration.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/pagets-disease-of-bone',
        tags: ['bone scan', 'Paget disease', 'nuclear medicine', 'osteosarcoma', 'SPECT'],
      },
    },
    {
      id: 'nucs-bone-009',
      front: {
        question: 'How does complex regional pain syndrome (CRPS/RSD) appear on three-phase bone scan, and how does it differ in children vs. adults?',
      },
      back: {
        answer: 'Adults: increased uptake on all three phases + diffuse periarticular (juxta-articular) uptake on delayed images, often involving an entire extremity. Children: decreased uptake (opposite pattern).',
        explanation: 'CRPS (formerly reflex sympathetic dystrophy) causes vasomotor dysregulation leading to hyperemia and abnormal bone metabolism. In adults, the hyperperfusion produces increased activity on flow and blood pool phases, with periarticular tracer concentration on delayed images. The pattern involves multiple small joints of the affected extremity. Paradoxically, children may show decreased uptake, possibly from vasoconstriction.',
        keyFact: 'CRPS (RSD): periarticular uptake on delayed phase, often entire extremity. Adults = increased all phases. Children = may be decreased (opposite). ~1/3 of adult CRPS: normal bone scan.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/complex-regional-pain-syndrome',
        tags: ['bone scan', 'CRPS', 'reflex sympathetic dystrophy', 'nuclear medicine', 'three phase'],
      },
    },
    {
      id: 'nucs-bone-010',
      front: {
        question: 'How is the bone scan used to evaluate a painful hip or knee prosthesis, and what patterns suggest loosening vs. infection?',
      },
      back: {
        answer: 'Normal activity surrounds prosthesis for up to 12 months (cemented) or 24 months (cementless). Loosening: focal activity at lesser trochanter + distal tip after expected normalization period. Infection: diffuse generalized activity surrounding prosthesis. Combined WBC + sulfur colloid scan differentiates infection from aseptic loosening.',
        explanation: 'Bone remodeling around a prosthesis produces physiologic increased uptake for up to 2 years, making plain bone scan non-specific. The distribution of uptake helps: loosening tends to be focal at mechanical stress points (lesser trochanter, prosthetic tip), while infection produces more diffuse activity. When the diagnosis remains uncertain, combined In-111 WBC + Tc-99m sulfur colloid scan is performed — discordant focal WBC uptake without corresponding colloid activity indicates osteomyelitis.',
        keyFact: 'Prosthesis normal activity: 12 months (cemented), 24 months (cementless). After that: focal tip/trochanter = loosening; diffuse = infection. Use WBC + sulfur colloid for definitive differentiation.',
        tags: ['bone scan', 'prosthesis', 'osteomyelitis', 'loosening', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-bone-011',
      front: {
        question: 'What is the bone scan appearance of avascular necrosis (AVN) in early vs. late disease?',
      },
      back: {
        answer: 'Early AVN: cold (photopenic) lesion due to absent perfusion. Late (hyperemic/reparative phase): increased uptake surrounding the necrotic area. SPECT often shows rim of increased uptake with central photopenia.',
        explanation: 'In early AVN, interruption of blood supply produces a cold photopenic area on bone scan before radiographic changes develop. As revascularization proceeds from the periphery inward, reactive hyperemia creates increased uptake around the central necrotic zone — best appreciated on SPECT. MRI is more sensitive and specific than bone scan for early AVN.',
        keyFact: 'Early AVN = cold (photopenic). Late AVN = rim of hot with cold center (revascularization from outside in). SPECT best for hips. MRI is more sensitive overall.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/avascular-necrosis',
        tags: ['bone scan', 'AVN', 'avascular necrosis', 'nuclear medicine', 'SPECT'],
      },
    },
    {
      id: 'nucs-bone-012',
      front: {
        question: 'What bone scan finding is characteristic of hypertrophic pulmonary osteoarthropathy (HPO), and what is its most common cause?',
      },
      back: {
        answer: 'HPO: parallel "tramline" increased uptake along the cortex of long bones (diaphyseal periosteal reaction). Most common cause: lung cancer (also seen with lung metastases, mesothelioma, bronchiectasis).',
        explanation: 'Hypertrophic pulmonary osteoarthropathy is a paraneoplastic phenomenon characterized by periosteal new bone formation along the diaphyses of long bones. Bone scan shows the characteristic linear cortical pattern ("parallel tracks" or tramlines) bilaterally. The clinical triad is periosteal reaction, arthritis/arthralgia, and digital clubbing. Lung cancer (especially squamous cell) is by far the most common etiology.',
        keyFact: 'HPO on bone scan = parallel tramline cortical uptake along long bone diaphyses. Most common cause = lung cancer. Associated with clubbing + arthropathy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/hypertrophic-pulmonary-osteoarthropathy',
        tags: ['bone scan', 'HPO', 'lung cancer', 'periosteal', 'nuclear medicine'],
      },
    },
  ]},

  { id: 'nucs-cardiac',   label: 'Cardiac Nuclear',           cards: [
    {
      id: 'nucs-cardiac-001',
      front: {
        question: 'What radiotracers are used for myocardial perfusion SPECT, and what are the key differences between Tc-99m sestamibi/tetrofosmin and thallium-201?',
      },
      back: {
        answer: 'Tc-99m sestamibi/tetrofosmin: no redistribution, passive diffusion, fixed in mitochondria, superior image quality. Tl-201: potassium analog (Na/K-ATPase), undergoes redistribution, used for viability without PET. Tc-99m preferred due to better image quality and lower dose.',
        explanation: 'Thallium\'s redistribution allows a single injection to assess both perfusion (early images) and viability (delayed redistribution). Sestamibi requires two injections (stress and rest) because it does not redistribute. However, Tc-99m\'s higher photon energy (140 keV vs 70–80 keV for Tl-201) reduces attenuation artifact from breast and diaphragm, and its shorter half-life allows higher administered dose.',
        keyFact: 'Sestamibi: NO redistribution, fixed in mitochondria, 2 injections needed. Thallium: redistributes (K+ analog), 1 injection possible, less image quality. Tetrofosmin = faster hepatic clearance than sestamibi (earlier imaging).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/myocardial-perfusion-scintigraphy',
        tags: ['cardiac', 'nuclear medicine', 'SPECT', 'sestamibi', 'thallium'],
      },
    },
    {
      id: 'nucs-cardiac-002',
      front: {
        question: 'What is a reversible perfusion defect on myocardial SPECT, and how do you distinguish ischemia, scar, and hibernating myocardium?',
      },
      back: {
        answer: 'Ischemia: reversible defect (abnormal stress, normal rest). Scar: fixed defect + abnormal wall motion on gated SPECT + no FDG uptake. Hibernating: fixed defect + reduced wall motion + increased FDG (mismatch) = viable.',
        explanation: 'A reversible defect normalizes on rest images, indicating stress-induced ischemia with preserved viability. A fixed defect present on both stress and rest can represent either scar (non-viable) or hibernating myocardium (chronically ischemic but viable). Gated SPECT provides wall motion data: normal motion in a fixed defect suggests attenuation artifact. FDG PET (gold standard for viability) shows mismatch (increased FDG in area of perfusion defect) for hibernating myocardium.',
        keyFact: 'Reversible defect = ischemia. Fixed defect + abnormal wall motion: if FDG mismatch = hibernating (viable, revascularize); if FDG matched = scar (not viable, don\'t revascularize). Stunned = normal perfusion at rest, reduced function post-ischemia.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/myocardial-perfusion-scintigraphy',
        tags: ['cardiac', 'nuclear medicine', 'SPECT', 'ischemia', 'hibernation'],
      },
    },
    {
      id: 'nucs-cardiac-003',
      front: {
        question: 'What is the gold standard for assessing myocardial viability, and how does the FDG PET mismatch pattern guide clinical decisions?',
      },
      back: {
        answer: 'F-18 FDG PET is the gold standard for myocardial viability. Mismatch (perfusion defect + FDG uptake) = hibernating viable myocardium → revascularize. Match (perfusion defect + no FDG) = scar → revascularization will not improve function.',
        explanation: 'Ischemic myocardium shifts from fatty acid to glucose metabolism. FDG marks this metabolic switch — viable but ischemic cells upregulate glucose uptake. Before PET imaging, patients are given oral/IV glucose to stimulate insulin release and suppress fatty acid metabolism (ensuring normal myocardium also takes up FDG). This distinguishes scar from hibernating myocardium on a metabolic basis.',
        keyFact: 'FDG PET for viability: perfusion defect + FDG uptake = mismatch = hibernating = revascularize. Perfusion defect + no FDG = match = scar = revascularization won\'t help. Patient prep: high-fat diet 24h + 12h fast to suppress normal myocardial FDG uptake for sarcoid imaging.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/myocardial-viability-assessment',
        tags: ['cardiac', 'nuclear medicine', 'PET', 'viability', 'hibernating myocardium'],
      },
    },
    {
      id: 'nucs-cardiac-004',
      front: {
        question: 'What are the pharmacologic stress agents used in nuclear cardiology, and when is each indicated?',
      },
      back: {
        answer: 'Vasodilators (adenosine, dipyridamole, regadenoson): preferred — cause coronary hyperemia, unmasking relative perfusion deficits. Dobutamine (adrenergic): used when vasodilators contraindicated (reactive airway disease, adenosine-sensitive arrhythmias). Regadenoson = adenosine A2A receptor agonist, fewer side effects.',
        explanation: 'Vasodilatory agents work by maximally dilating normal coronary arteries, creating a "steal" from territories supplied by stenotic vessels that cannot dilate further. Dipyridamole inhibits adenosine reuptake, causing endogenous adenosine accumulation. Adenosine acts directly on A2A receptors. Regadenoson is selective for A2A with fewer bronchospasm side effects. Dobutamine increases myocardial oxygen demand by increasing heart rate and contractility.',
        keyFact: 'Regadenoson = preferred vasodilatory agent (A2A selective, fewer bronchospasm). Dobutamine = adrenergic, used in asthma/COPD. Rubidium-82 PET: always pharmacologic stress (half-life 76 sec too short for exercise).',
        tags: ['cardiac', 'nuclear medicine', 'pharmacologic stress', 'SPECT', 'regadenoson'],
      },
    },
    {
      id: 'nucs-cardiac-005',
      front: {
        question: 'What is transient ischemic dilation (TID) of the left ventricle on nuclear stress imaging, and what does it indicate?',
      },
      back: {
        answer: 'TID: apparent LV dilation on stress images compared to rest, without a focal defect. Indicates diffuse subendocardial ischemia from left main or multi-vessel coronary artery disease — high-risk finding.',
        explanation: 'The LV appears larger on stress images due to subendocardial perfusion reduction that reduces tracer uptake in the inner myocardial layers, making the cavity appear larger. This diffuse balanced ischemia may paradoxically produce no obvious focal defect (the scan appears "normal" except for cavity dilation). TID is associated with significantly increased cardiac event risk and warrants further evaluation.',
        keyFact: 'TID = stress LV larger than rest LV = diffuse subendocardial ischemia = left main or multivessel disease. High-risk finding even without obvious focal perfusion defect.',
        tags: ['cardiac', 'nuclear medicine', 'SPECT', 'TID', 'ischemia'],
      },
    },
    {
      id: 'nucs-cardiac-006',
      front: {
        question: 'How is breast attenuation artifact differentiated from a true anterior wall perfusion defect on myocardial SPECT?',
      },
      back: {
        answer: 'Attenuation artifact: fixed anterior defect + normal wall motion on gated SPECT + defect normalizes on PET (rubidium-82). True scar: fixed defect + abnormal (reduced) wall motion.',
        explanation: 'Breast tissue attenuates the relatively low-energy photons from Tc-99m sestamibi, creating an apparent fixed anterior wall perfusion defect in women. Gated SPECT provides wall motion data — attenuation artifact will show normal wall thickening and motion in the area of the apparent defect, while a true fixed defect from infarction will be hypokinetic or akinetic. PET rubidium-82 (higher energy, less attenuation) confirms normal perfusion if it is an artifact.',
        keyFact: 'Breast attenuation = fixed anterior defect + NORMAL wall motion on gated SPECT = artifact. Fixed + abnormal wall motion = true scar. PET (rubidium-82) has less attenuation → resolves ambiguity.',
        tags: ['cardiac', 'nuclear medicine', 'SPECT', 'attenuation artifact', 'breast'],
      },
    },
    {
      id: 'nucs-cardiac-007',
      front: {
        question: 'What are the properties of Rubidium-82 for cardiac PET perfusion, and why must pharmacologic stress always be used?',
      },
      back: {
        answer: 'Rb-82: generator-produced (from Sr-82), T½ = 76 seconds, K+ analog. Pharmacologic stress mandatory due to too-short half-life for exercise protocol. Allows quantitative myocardial blood flow measurement.',
        explanation: 'Rubidium-82\'s 76-second half-life allows very high activities to be administered (minimizing patient radiation dose), but the radiotracer decays almost completely within minutes of injection. This precludes exercise stress testing, where the patient would need to walk for several minutes. The very short half-life means repeat imaging can be performed rapidly (rest then stress on same day). PET provides superior spatial resolution and quantitative blood flow vs SPECT.',
        keyFact: 'Rubidium-82: T½ = 76 seconds, generator-produced (Sr-82). Always pharmacologic stress. Superior sensitivity/specificity vs SPECT. Can quantify absolute myocardial blood flow (ml/min/g).',
        tags: ['cardiac', 'nuclear medicine', 'PET', 'rubidium-82', 'stress imaging'],
      },
    },
    {
      id: 'nucs-cardiac-008',
      front: {
        question: 'How is FDG PET used in the diagnosis of cardiac sarcoidosis, and what dietary preparation is required?',
      },
      back: {
        answer: 'Patient prep: high-fat, low-carbohydrate diet 24 hours prior + 12-hour fast → suppresses physiologic myocardial glucose uptake. Cardiac sarcoidosis: focal or patchy FDG uptake in myocardium (lateral LV or elsewhere). Mismatch: perfusion defect + FDG uptake = active inflammation/sarcoid.',
        explanation: 'Normal myocardium preferentially uses fatty acids during fasting and glucose in the fed state. The specialized diet shifts myocardial metabolism to fatty acids, suppressing FDG uptake in normal myocardium. Active sarcoid granulomas continue to take up glucose despite the diet, creating focal "hot spots." Combined perfusion + FDG PET: perfusion defect with FDG mismatch = active sarcoid inflammation vs matched defect = scar.',
        keyFact: 'Cardiac sarcoid PET prep: high-fat/low-carb diet 24h + 12h fast = suppresses physiologic myocardial FDG uptake. Sarcoid = focal patchy FDG despite suppression. Diffuse uptake = incomplete suppression artifact.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-sarcoidosis',
        tags: ['cardiac', 'nuclear medicine', 'PET', 'sarcoidosis', 'FDG'],
      },
    },
    {
      id: 'nucs-cardiac-009',
      front: {
        question: 'What is the increased lung uptake sign on thallium or sestamibi myocardial perfusion scan, and what does it indicate?',
      },
      back: {
        answer: 'Abnormally increased lung uptake on exercise stress images = elevated pulmonary capillary wedge pressure from stress-induced LV dysfunction. Suggests left main or multivessel coronary artery disease. Associated with worse prognosis.',
        explanation: 'During exercise stress in patients with significant left ventricular dysfunction, pulmonary capillary pressure rises as the LV fails to adequately empty. The increased pulmonary capillary permeability and blood volume cause thallium or sestamibi to distribute into the lung parenchyma. A lung-to-heart activity ratio > 0.45 for thallium on exercise is considered abnormal.',
        keyFact: 'Lung uptake on stress SPECT = stress-induced LV dysfunction = left main or multivessel disease. High-risk finding. Lung:heart ratio > 0.45 (thallium) = abnormal.',
        tags: ['cardiac', 'nuclear medicine', 'SPECT', 'lung uptake', 'ischemia'],
      },
    },
    {
      id: 'nucs-cardiac-010',
      front: {
        question: 'What are the SPECT findings in stunned myocardium, and how does it differ from hibernating myocardium?',
      },
      back: {
        answer: 'Stunned: normal or near-normal perfusion at rest + abnormal wall motion (after acute ischemia/reperfusion). Hibernating: reduced perfusion at rest + abnormal wall motion + FDG uptake (viable). Stunning = acute/temporary; hibernation = chronic ischemia.',
        explanation: 'Stunned myocardium results from temporary ischemia followed by reperfusion — the cells are viable but contractility is transiently impaired. Normal perfusion (normal tracer uptake) with reduced wall motion on gated SPECT defines stunning. This improves spontaneously over days to weeks. Hibernation is chronic adaptation to reduced blood flow — cells remain viable but downregulate function to match reduced oxygen supply.',
        keyFact: 'Stunned: normal perfusion + low function (post-reperfusion). Hibernating: low perfusion + low function + FDG mismatch (viable). Both improve with revascularization. Stunned resolves spontaneously. Hibernating needs intervention.',
        tags: ['cardiac', 'nuclear medicine', 'SPECT', 'stunned myocardium', 'hibernation'],
      },
    },
  ]},

  { id: 'nucs-pulm',      label: 'Pulmonary Scintigraphy',    cards: [
    {
      id: 'nucs-pulm-001',
      front: {
        question: 'What are the ventilation and perfusion radiotracers used for V/Q scanning, and what is the mechanism of Tc-99m MAA in lung perfusion?',
      },
      back: {
        answer: 'Perfusion: Tc-99m MAA (macroaggregated albumin) — IV injection, particles embolize in pulmonary capillaries proportional to blood flow. Ventilation: Xenon-133 gas or Tc-99m DTPA aerosol. Normal: 500,000 particles; critical organ = lung.',
        explanation: 'Tc-99m MAA particles (10–100 μm) are administered IV and lodge in pulmonary capillaries proportional to regional blood flow — a form of controlled embolization. Approximately 0.1% of pulmonary capillaries are temporarily blocked, which is well-tolerated. The biologic half-life is ~4 hours as particles fragment and are cleared by the reticuloendothelial system.',
        keyFact: 'MAA = controlled microembolism in pulmonary capillaries proportional to blood flow. Critical organ = lung. Reduce particles in: pulmonary HTN, known right-to-left shunt, neonates (10,000–50,000), pregnancy (half dose).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ventilation-perfusion-vq-scan',
        tags: ['pulmonary', 'V/Q scan', 'nuclear medicine', 'PE', 'Tc-99m MAA'],
      },
    },
    {
      id: 'nucs-pulm-002',
      front: {
        question: 'According to PIOPED II criteria, what V/Q patterns represent high, intermediate, and low/very low probability for PE?',
      },
      back: {
        answer: 'High: ≥2 large segmental mismatched perfusion defects with normal chest X-ray (specificity 97%). Intermediate: 1 large mismatched defect OR triple matched lower lobe defect. Low: single large/moderate matched defect OR >3 small segmental defects. Very low: nonsegmental defects, stripe sign.',
        explanation: 'A mismatched defect shows absent perfusion with preserved ventilation — classic for PE. Two or more large segmental mismatches without radiographic correlate is strongly predictive of PE. Triple matched defect (V+Q+CXR abnormal) in lower lobes is more concerning than upper lobes. The stripe sign (thin rim of MAA uptake at pleural surface of a defect) indicates that some blood flow persists and reduces PE probability.',
        keyFact: 'High probability V/Q: ≥2 large segmental mismatches (no CXR abnormality). Stripe sign = very low probability. Triple match lower lobe = intermediate. Normal perfusion scan = NO PE (vent study not needed).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/pioped-ii-criteria',
        tags: ['pulmonary', 'V/Q scan', 'PE', 'PIOPED', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-pulm-003',
      front: {
        question: 'When should V/Q scan be preferred over CTPA for PE diagnosis in pregnancy, and what are the comparative radiation doses?',
      },
      back: {
        answer: 'V/Q preferred in pregnancy: lower breast radiation (V/Q <1.5 mGy vs CTPA 10–70 mGy). Fetal dose similar or slightly higher with V/Q (0.5–1.1 mGy vs 0.01–0.66 mGy). V/Q preferred if: normal CXR, no asthma/COPD, negative lower extremity ultrasound.',
        explanation: 'The developing breast tissue of pregnant women is sensitive to radiation, increasing lifetime breast cancer risk. CTPA delivers much higher breast doses than V/Q. However, CTPA delivers less fetal dose and can identify alternative diagnoses. Low-dose perfusion-only scan (half-dose MAA, no ventilation) is a good option: further reduces maternal and fetal dose while maintaining diagnostic accuracy for PE.',
        keyFact: 'Pregnancy PE workup: CXR first → if normal → V/Q (lower breast dose). V/Q breast dose: <1.5 mGy. CTPA breast dose: 10–70 mGy. Fetal doses are comparable. Both well below 100 mSv teratogenic threshold.',
        tags: ['pulmonary', 'V/Q scan', 'PE', 'pregnancy', 'radiation dose'],
      },
    },
    {
      id: 'nucs-pulm-004',
      front: {
        question: 'What does it mean to see tracer in the thyroid, stomach, or brain on a V/Q perfusion scan?',
      },
      back: {
        answer: 'Thyroid/stomach uptake: free Tc-99m pertechnetate (labeling impurity) OR right-to-left intracardiac shunt. Brain uptake: required to call a right-to-left shunt. Management: reduce MAA particles to 100,000 when shunt is known/suspected.',
        explanation: 'Free pertechnetate in the MAA preparation preferentially concentrates in thyroid and gastric mucosa — a quality control issue. However, if the MAA particles are passing through a right-to-left shunt, they will distribute systemically including to the brain, thyroid, and kidneys. Brain uptake specifically is required to diagnose a right-to-left shunt. In patients with known shunts, the particle count is markedly reduced to avoid functional pulmonary embolism from large particle load.',
        keyFact: 'Thyroid/stomach on V/Q = free Tc OR R→L shunt. Brain uptake = required to call R→L shunt. Known R→L shunt: reduce particles to 100K (not dose reduction — keeps dose same).',
        tags: ['V/Q scan', 'right-to-left shunt', 'nuclear medicine', 'pulmonary', 'artifact'],
      },
    },
    {
      id: 'nucs-pulm-005',
      front: {
        question: 'Compare Xenon-133 and Tc-99m DTPA aerosol for ventilation imaging: advantages, disadvantages, and imaging sequence.',
      },
      back: {
        answer: 'Xenon-133: single view (posterior), gas, wash-in/washout possible (air trapping), must image before perfusion (lower energy 81 keV). Tc-99m DTPA: multiple views, aerosol, no wash-in/washout, must also image before perfusion, swallowed activity in GI tract.',
        explanation: 'Xenon-133 is imaged posteriorly because its 81 keV photons are easily attenuated, limiting views. It must be administered in a negative pressure room due to exhaust requirements. The wash-in/washout phases can demonstrate air trapping in COPD. Tc-99m DTPA aerosol is more practical, allowing multiple projections, but does not allow dynamic functional imaging. Both must be performed before the perfusion scan to avoid "shine-through" from the higher-activity perfusion study.',
        keyFact: 'Both ventilation tracers: image BEFORE perfusion scan. Xenon-133: single posterior view, wash-in/washout for air trapping, negative pressure room required. Xenon soluble in fat → liver uptake in fatty liver.',
        tags: ['pulmonary', 'V/Q scan', 'ventilation', 'xenon', 'nuclear medicine'],
      },
    },
  ]},

  { id: 'nucs-gi',        label: 'GI & Hepatobiliary',        cards: [
    {
      id: 'nucs-gi-001',
      front: {
        question: 'What is a HIDA scan, what are the Tc-99m IDA tracers used, and how does elevated bilirubin affect tracer choice?',
      },
      back: {
        answer: 'HIDA (hepatobiliary iminodiacetic acid) scan evaluates biliary function. Disofenin: works up to bilirubin 20 mg/dL (90% hepatic uptake). Mebrofenin: works up to bilirubin 30 mg/dL (98% hepatic uptake). High bilirubin → use mebrofenin; elevated renal activity on HIDA suggests high bilirubin.',
        explanation: 'IDA analogs are actively transported into hepatocytes and excreted into bile without conjugation, mirroring bilirubin handling. As hepatic function worsens or bilirubin competes for hepatocyte uptake, more tracer is renally excreted, appearing in the kidneys — a clue to elevated bilirubin. Mebrofenin has higher hepatic extraction efficiency and is preferred in jaundiced patients. Critical organ = gallbladder wall.',
        keyFact: 'HIDA critical organ = gallbladder wall. High renal activity on HIDA = elevated bilirubin. Use mebrofenin (works to 30 mg/dL) over disofenin (20 mg/dL) in jaundiced patients.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/hepatobiliary-iminodiacetic-acid-scan',
        tags: ['hepatobiliary', 'HIDA', 'nuclear medicine', 'bilirubin', 'gallbladder'],
      },
    },
    {
      id: 'nucs-gi-002',
      front: {
        question: 'What is the HIDA pattern for acute cholecystitis, and how does morphine augmentation help?',
      },
      back: {
        answer: 'Acute cholecystitis: no gallbladder visualization at 4 hours (or 1 hour after morphine) with normal bile duct and bowel activity. Morphine constricts sphincter of Oddi → increases biliary pressure → forces bile into gallbladder if cystic duct patent.',
        explanation: 'In acute cholecystitis, cystic duct obstruction prevents radiotracer from entering the gallbladder despite normal liver function and bile duct patency. If the gallbladder is not seen at 4 hours, morphine augmentation (0.04 mg/kg IV) is administered. Morphine constricts the sphincter of Oddi, increasing common bile duct pressure. If the cystic duct is patent, this pressure forces tracer into the gallbladder. Persistent non-visualization after morphine = positive for acute cholecystitis.',
        keyFact: 'No GB at 4h (or 1h post-morphine) + bowel activity present = acute cholecystitis (cystic duct obstruction). GB ejection fraction <30–35% = chronic cholecystitis (biliary dyskinesia).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/hepatobiliary-scintigraphy-in-acute-cholecystitis',
        tags: ['hepatobiliary', 'HIDA', 'cholecystitis', 'nuclear medicine', 'morphine'],
      },
    },
    {
      id: 'nucs-gi-003',
      front: {
        question: 'What is the HIDA scan interpretation for hepatocyte dysfunction vs. common bile duct obstruction?',
      },
      back: {
        answer: 'Hepatocyte dysfunction (hepatitis): no bowel activity + persistent blood pool activity (tracer not extracted by hepatocytes). CBD obstruction: no bowel activity + blood pool clears normally (liver extracts tracer but cannot excrete into obstructed duct).',
        explanation: 'In hepatitis or liver failure, hepatocytes cannot extract the IDA analog from blood, so tracer remains in the blood pool for prolonged periods and kidneys become prominent. In biliary obstruction, the hepatocytes remain functional and extract the tracer normally (blood pool clears), but cannot excrete it into the blocked duct — tracer accumulates in hepatocytes and intrahepatic biliary system. These patterns guide differential diagnosis in jaundice.',
        keyFact: 'HIDA rapid path: No bowel + persistent blood pool = hepatocyte dysfunction (hepatitis). No bowel + normal blood pool clearance = CBD obstruction. Normal GB visualization + no bowel = CBD obstruction (sphincter of Oddi dysfunction).',
        tags: ['hepatobiliary', 'HIDA', 'obstruction', 'hepatitis', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-gi-004',
      front: {
        question: 'What is the patient preparation for a HIDA scan, and what is the role of CCK (cholecystokinin)?',
      },
      back: {
        answer: 'NPO 6 hours, but must have eaten within 24 hours. If NPO > 24 hours: give CCK first (0.02 μg/kg slow infusion) to empty the gallbladder before tracer — prevents false positive for cholecystitis from a full, non-contracting gallbladder. Never give CCK and morphine within 30 minutes of each other.',
        explanation: 'Prolonged fasting causes the gallbladder to fill with concentrated bile and become maximally distended, preventing tracer entry even with a patent cystic duct — causing a false positive for acute cholecystitis. CCK stimulates gallbladder contraction and empties it before the study, allowing fresh radiotracer-containing bile to enter. Gallbladder ejection fraction (GBEF) < 30–35% after CCK indicates chronic cholecystitis/biliary dyskinesia.',
        keyFact: 'NPO > 24h before HIDA → give CCK first to empty GB (prevents false positive cholecystitis). GBEF < 35% = chronic cholecystitis/biliary dyskinesia. Never CCK + morphine within 30 min.',
        tags: ['hepatobiliary', 'HIDA', 'CCK', 'preparation', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-gi-005',
      front: {
        question: 'What radiotracer is used for Meckel scan, and what medications can improve sensitivity?',
      },
      back: {
        answer: 'Tracer: Tc-99m pertechnetate (concentrates in gastric mucosa). Sensitivity enhancers: pentagastrin (↑ uptake), H2 blockers/cimetidine (↓ washout by blocking secretion), glucagon (↓ peristalsis → ↓ washout). Perform when NOT actively bleeding.',
        explanation: 'Tc-99m pertechnetate is taken up by gastric mucosal cells, both in the stomach and in ectopic gastric mucosa within a Meckel diverticulum. Only Meckel diverticula containing ectopic gastric mucosa (approximately 10–60%) will be seen on scan — and these are the ones most likely to bleed. A positive Meckel scan shows focal activity in the right lower quadrant appearing simultaneously with gastric activity.',
        keyFact: 'Meckel scan tracer = Tc-99m pertechnetate (goes to gastric mucosa). Positive = RLQ activity appearing same time as stomach. Cimetidine = most used sensitizer (blocks washout). Do NOT perform during active bleeding (do tagged RBC instead).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/meckel-scan',
        tags: ['GI', 'Meckel diverticulum', 'nuclear medicine', 'pertechnetate', 'Tc-99m'],
      },
    },
    {
      id: 'nucs-gi-006',
      front: {
        question: 'What tracer is used for GI bleeding scintigraphy, what bleeding rate can it detect, and how does interpretation work?',
      },
      back: {
        answer: 'Tc-99m labeled RBCs (in vitro labeling, 95% efficiency). Detects bleeding as low as 0.05–0.1 mL/min (vs angiography 1 mL/min, CTA 0.35 mL/min). Positive: focal activity that moves or changes shape over time due to bowel peristalsis.',
        explanation: 'The labeled RBCs circulate and extravasate at the site of active bleeding, accumulating in the bowel lumen. Serial images over 60–90 minutes allow detection of intermittent bleeding. The key interpretive finding is that a positive focus must change shape or location on sequential images — confirming intraluminal blood rather than a fixed vascular structure. In vitro labeling (mixing blood with stannous chloride then Tc-99m) provides 95% labeling efficiency, far superior to in vivo methods.',
        keyFact: 'Tagged RBC scan: detects 0.05–0.1 mL/min. Positive = activity that MOVES/changes shape (peristalsis). Fixed activity = not active bleed. Sulfur colloid: faster (no prep) but vascular T½ = 2–3 min (intermittent bleed → false negative).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/gastrointestinal-bleeding-scintigraphy',
        tags: ['GI', 'GI bleeding', 'tagged RBC', 'nuclear medicine', 'Tc-99m'],
      },
    },
    {
      id: 'nucs-gi-007',
      front: {
        question: 'What is the gastric emptying scan protocol, and what constitutes abnormal (delayed) gastric emptying?',
      },
      back: {
        answer: 'Tc-99m sulfur colloid in scrambled egg whites + toast + jam + water. Images at 0, 1, 2, 4 hours. Normal: <10% residual activity at 4 hours. Delayed emptying (gastroparesis): >10% at 4 hours. Must fast 6 hours before.',
        explanation: 'The standardized meal (low-fat egg white) labeled with sulfur colloid provides a physiologic solid meal. The sulfur colloid binds to the food matrix rather than staying in free solution. Normal gastric emptying follows a linear or exponential decay over 4 hours. Gastroparesis (>10% retention at 4h) is seen in diabetes, post-vagotomy, and systemic diseases. Liquid gastric emptying uses Tc-99m DTPA in water with a shorter time course.',
        keyFact: 'Gastric emptying: >10% retention at 4 hours = delayed (gastroparesis). Standard meal = Tc-99m sulfur colloid in egg whites. Must fast 6 hours, eat within 10 minutes.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/gastric-emptying-study',
        tags: ['GI', 'gastric emptying', 'nuclear medicine', 'gastroparesis', 'Tc-99m'],
      },
    },
    {
      id: 'nucs-gi-008',
      front: {
        question: 'What is the sulfur colloid liver-spleen scan, what does "colloid shift" indicate, and what is its association with Budd-Chiari?',
      },
      back: {
        answer: 'Sulfur colloid: taken up by reticuloendothelial cells (Kupffer cells in liver, RES in spleen and bone marrow). Colloid shift = increased spleen + bone marrow uptake relative to liver = liver dysfunction/cirrhosis. Budd-Chiari = increased caudate lobe uptake (direct hepatic venous drainage).',
        explanation: 'Normally 80–90% of sulfur colloid is taken up by liver Kupffer cells, with the remainder in spleen and minimal bone marrow. In cirrhosis, Kupffer cell loss redistributes tracer to spleen and bone marrow — the "colloid shift." Focal increased uptake in a cirrhotic liver raises concern for regenerating nodule or HCC. In Budd-Chiari syndrome, the caudate lobe (with its separate hepatic vein draining directly to the IVC) is spared from venous obstruction and shows relative increased uptake.',
        keyFact: 'Colloid shift = spleen > liver on sulfur colloid = cirrhosis. Budd-Chiari = increased caudate lobe uptake (spared venous drainage). Focal nodular hyperplasia (FNH) = only hepatic lesion that hyperconcentrates sulfur colloid.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/liver-spleen-scintigraphy',
        tags: ['liver', 'sulfur colloid', 'nuclear medicine', 'cirrhosis', 'Budd-Chiari'],
      },
    },
  ]},

  { id: 'nucs-renal',     label: 'Renal Scintigraphy',        cards: [
    {
      id: 'nucs-renal-001',
      front: {
        question: 'Compare Tc-99m MAG3 and Tc-99m DTPA as renal tracers: mechanism, what they measure, and clinical preference.',
      },
      back: {
        answer: 'DTPA: glomerular filtration → measures GFR (identical extraction fraction to inulin: ~20%). MAG3: tubular secretion by proximal tubules → estimates effective renal plasma flow (ERPF), >50% extraction. MAG3 preferred in renal insufficiency (better images).',
        explanation: 'DTPA is filtered at the glomerulus (similar to inulin) and provides accurate GFR measurement. However, in poor renal function with low GFR, DTPA images are suboptimal. MAG3 is predominantly secreted by proximal tubules with high extraction fraction, providing much better image quality in dysfunctional kidneys. Both are excreted into urine; critical organ = bladder for both.',
        keyFact: 'DTPA = GFR tracer (filtered). MAG3 = ERPF tracer (secreted, higher extraction). Use MAG3 for obstructed or poorly functioning kidneys. Both: critical organ = bladder. Transplant kidney → image anteriorly (not posteriorly).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/radionuclide-renography',
        tags: ['renal', 'nuclear medicine', 'MAG3', 'DTPA', 'renogram'],
      },
    },
    {
      id: 'nucs-renal-002',
      front: {
        question: 'Describe the three phases of a normal renogram and the key timing parameters.',
      },
      back: {
        answer: 'Phase 1 (flow): sharp upslope, kidneys seen 2–5 sec after aorta (~1 min). Phase 2 (cortical): peaks 3–5 min (time to peak = Tmax). Phase 3 (clearance): rapid excretion, half-time normally 8–12 min. Normal split function: 45–55% per kidney.',
        explanation: 'The renogram curve plots renal radiotracer activity over time. The flow phase reflects renal perfusion. The cortical phase rises as tracer is extracted by glomeruli/tubules, peaking at 3–5 minutes. The clearance phase reflects urine production and collecting system drainage. Delayed Tmax or cortical retention suggests dysfunction; delayed clearance suggests obstruction.',
        keyFact: 'Normal renogram: kidneys seen 2–5 sec after aorta, Tmax 3–5 min, T½ clearance 8–12 min. Normal split function: 45–55% each. 20-min/peak ratio < 0.3 = normal cortical transit.',
        tags: ['renal', 'nuclear medicine', 'renogram', 'MAG3', 'split function'],
      },
    },
    {
      id: 'nucs-renal-003',
      front: {
        question: 'How does the Lasix renogram differentiate obstruction from nonobstructive hydronephrosis, and what are the clearance thresholds?',
      },
      back: {
        answer: 'After 20 min, give Lasix (40 mg IV). Non-obstructed: T½ clearance < 10 min post-Lasix. Indeterminate: 10–20 min (reservoir effect from dilated pelvis). Obstructed: T½ > 20 min post-Lasix.',
        explanation: 'A dilated collecting system without mechanical obstruction (dilated but non-obstructed system) will drain rapidly when given furosemide — the pressure of increased urine flow opens up the dilated system. True mechanical obstruction prevents drainage despite the increased pressure. False positives (appearing obstructed when not) occur with dehydration, poor renal function (reduced diuretic response), or a very distended bladder (foley catheter resolves this).',
        keyFact: 'Lasix renogram T½: <10 min = no obstruction. 10–20 min = indeterminate (reservoir effect). >20 min = obstruction. False positive: dehydration, poor renal function, full bladder (insert Foley).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/diuretic-renography',
        tags: ['renal', 'nuclear medicine', 'Lasix renogram', 'obstruction', 'hydronephrosis'],
      },
    },
    {
      id: 'nucs-renal-004',
      front: {
        question: 'How does the ACE inhibitor renogram diagnose renovascular hypertension, and how does the pattern differ with MAG3 vs. DTPA?',
      },
      back: {
        answer: 'Post-captopril: kidney with RAS loses ACE-mediated efferent arteriole constriction → GFR falls. DTPA: decreased uptake and flow (GFR drops). MAG3: marked tracer retention with delayed washout (secretion preserved but reduced urine flow). Positive = one kidney worsens post-captopril (bilateral worsening = not RAS).',
        explanation: 'In renal artery stenosis, the renin-angiotensin system compensates by constricting the efferent arteriole (via angiotensin II) to maintain GFR. ACE inhibition blocks this compensation: efferent arterioles relax, GFR falls in the affected kidney. DTPA (GFR marker) shows reduced uptake. MAG3 (secretion marker) is still secreted but produces less urine, causing tracer retention in the collecting system. A normal ACE renogram rules out hemodynamically significant RAS.',
        keyFact: 'Captopril renogram: DTPA = decreased uptake + flow in RAS kidney (GFR drops). MAG3 = marked tracer retention (secretion preserved, less urine). Bilateral worsening = NOT RAS (think dehydration). Stop ACE inhibitors 48h–1 week before test.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/captopril-renography',
        tags: ['renal', 'nuclear medicine', 'ACE inhibitor', 'renovascular hypertension', 'MAG3'],
      },
    },
    {
      id: 'nucs-renal-005',
      front: {
        question: 'What is Tc-99m DMSA used for, and what patterns indicate acute pyelonephritis vs. renal scarring?',
      },
      back: {
        answer: 'DMSA = cortical imaging agent, used in children to detect pyelonephritis or scarring. Binds to proximal tubules → anatomic cortical imaging (SPECT). Normal DMSA = excludes pyelonephritis. Positive: focal defect, multifocal defects, or diffusely decreased uptake.',
        explanation: 'DMSA is unique among renal tracers in that it is retained in proximal tubular cells rather than excreted, allowing static anatomic imaging of the renal cortex. It is the most sensitive test for acute pyelonephritis in children and for cortical scarring from recurrent infections. A normal DMSA effectively excludes acute pyelonephritis. SPECT provides 3D cortical mapping.',
        keyFact: 'DMSA = only renal tracer where SPECT is performed. Stays in tubules = cortical imaging. Used in children for pyelonephritis (most sensitive) and scarring. Normal DMSA = NO pyelonephritis.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/dmsa-renal-scintigraphy',
        tags: ['renal', 'nuclear medicine', 'DMSA', 'pyelonephritis', 'pediatric'],
      },
    },
    {
      id: 'nucs-renal-006',
      front: {
        question: 'What are the renogram findings that distinguish acute tubular necrosis (ATN) from acute rejection in a renal transplant?',
      },
      back: {
        answer: 'ATN (days 1–4 post-transplant): normal perfusion + poor function/cortical retention + decreased urine excretion. Acute rejection (weeks to 3 months): decreased perfusion + marked cortical retention. Hyperacute rejection: absent perfusion (vascular thrombosis).',
        explanation: 'ATN results from perioperative ischemia and primarily affects tubular function while perfusion remains relatively preserved — normal flow phase with abnormal cortical function. Acute rejection involves immune-mediated vascular injury, reducing both perfusion and function. Cyclosporin nephrotoxicity mimics ATN but occurs later (after ATN should have resolved). Urine leak appears as progressive activity outside the urinary tract.',
        keyFact: 'Transplant MAG3: ATN = normal flow + poor function (days 1–4). Acute rejection = reduced flow + poor function (weeks). Hyperacute rejection = no flow. Cyclosporin toxicity = looks like ATN but occurs later. Urine leak = activity outside urinary tract.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/renal-transplant-scintigraphy',
        tags: ['renal', 'nuclear medicine', 'transplant', 'ATN', 'rejection'],
      },
    },
  ]},

  { id: 'nucs-neuro',     label: 'Neuro SPECT/PET',           cards: [
    {
      id: 'nucs-neuro-001',
      front: {
        question: 'Compare Tc-99m HMPAO and Tc-99m ECD for brain SPECT: similarities, key differences, and preferred indication for each.',
      },
      back: {
        answer: 'Both: lipophilic, cross blood-brain barrier, distribute proportional to cerebral blood flow (CBF), accumulate in gray matter. HMPAO: faster washout, luxury perfusion can cause false uptake in subacute infarct. ECD: slower blood pool clearance, only living cells (enzymatic modification required), preferred for infarct characterization. DTPA: does NOT cross BBB → only angiographic use (brain death planar).',
        explanation: 'HMPAO is a perfusion marker — it is trapped in any perfused tissue including areas with luxury perfusion (increased blood flow despite dead cells in subacute infarct). ECD is enzymatically converted to a form that only viable cells retain. This makes ECD more specific for viable brain tissue. For ictal SPECT, HMPAO is preferred because it can be prepared and injected rapidly.',
        keyFact: 'HMPAO = perfusion marker (fast washout, may show luxury perfusion). ECD = metabolic marker (only living cells, better background clearance). Both SPECT-capable. DTPA = NOT for parenchymal imaging (no BBB crossing).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/brain-spect',
        tags: ['neuro', 'SPECT', 'HMPAO', 'ECD', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-neuro-002',
      front: {
        question: 'What is the FDG PET pattern of Alzheimer disease, and how does it differ from Lewy body dementia, Pick disease, and Huntington disease?',
      },
      back: {
        answer: 'Alzheimer: posterior temporal, parietal, posterior cingulate hypometabolism (bilateral), sparing of sensorimotor cortex, occipital, deep nuclei. Lewy body: similar to Alzheimer + occipital involvement. Pick (FTD): frontal + anterior temporal. Huntington: basal ganglia decreased uptake.',
        explanation: 'Neurodegeneration causes region-specific hypometabolism reflecting the distribution of pathologic protein accumulation. Alzheimer\'s disease (amyloid/tau) begins in the default mode network regions (posterior cingulate, parietal). Lewy body disease (alpha-synuclein) additionally involves occipital processing regions, explaining visual hallucinations. Frontotemporal dementia (tau/TDP-43) manifests anteriorly.',
        keyFact: 'FDG PET dementia patterns: Alzheimer = posterior temporal-parietal hypometabolism. Lewy body = adds occipital. Pick (FTD) = frontal. Huntington = basal ganglia. Multi-infarct = multiple asymmetric foci.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/fdg-pet-in-dementia',
        tags: ['neuro', 'PET', 'dementia', 'Alzheimer', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-neuro-003',
      front: {
        question: 'What is DaTscan (I-123 ioflupane), what does it detect, and how does it distinguish Parkinson disease from essential tremor?',
      },
      back: {
        answer: 'DaTscan = I-123 FP-CIT, a cocaine analog that binds to presynaptic dopamine transporters (DaT) in the striatum. Normal: comma-shaped uptake in caudate + putamen bilaterally. Parkinson: asymmetric reduced uptake, loss of comma shape (putamen affected early). Essential tremor: normal DaTscan.',
        explanation: 'In Parkinson disease and other Parkinsonian syndromes (MSA, PSP, DLB), presynaptic dopamine neurons in the substantia nigra degenerate, reducing dopamine transporter density in the striatum. I-123 ioflupane binds to these transporters, showing their reduction. Essential tremor does not involve dopaminergic neurons — the DaTscan is normal, allowing differentiation. DaTscan cannot distinguish Parkinson from other Parkinsonian syndromes.',
        keyFact: 'DaTscan = I-123 ioflupane (cocaine analog) → binds presynaptic DaT. Normal = comma shape. Parkinson/Parkinsonism = reduced/absent putamen uptake (comma → period). Essential tremor = NORMAL DaTscan.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/dopamine-transporter-scan',
        tags: ['neuro', 'SPECT', 'DaTscan', 'Parkinson', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-neuro-004',
      front: {
        question: 'How is nuclear medicine used in seizure localization, and what is the difference between ictal and interictal imaging?',
      },
      back: {
        answer: 'Ictal: SPECT (HMPAO/ECD) injected during/within 30 sec of seizure → seizure focus appears HOT (increased perfusion). Interictal: FDG PET → seizure focus appears COLD (hypometabolism between seizures). Temporal lobe most common location for complex partial seizures.',
        explanation: 'Seizure activity produces massive local neuronal firing → increased metabolic demand → increased blood flow → ictal perfusion SPECT shows focus as hot. Between seizures, the epileptogenic zone is metabolically depressed on FDG PET → cold on interictal PET. Ictal SPECT is technically challenging (tracer must be available and injected immediately during seizure). For extratemporal seizures, ictal SPECT is most sensitive.',
        keyFact: 'Ictal SPECT: inject during/30 sec after seizure → HOT. Interictal FDG PET: → COLD (hypometabolism). Temporal lobe = most common (complex partial). Extratemporal = ictal SPECT most sensitive. Ictal PET NOT possible (slow FDG uptake).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/seizure-localisation-with-spect',
        tags: ['neuro', 'SPECT', 'seizure', 'epilepsy', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-neuro-005',
      front: {
        question: 'What is the "empty light bulb sign" on brain perfusion SPECT and the "hot nose sign," and what do they indicate?',
      },
      back: {
        answer: 'Empty light bulb sign: absent intracranial tracer uptake with visible scalp/extracranial activity = brain death (increased ICP prevents tracer entry). Hot nose sign: increased collateral flow through external carotid to maxillary branches = secondary sign seen in brain death (NOT sufficient alone to call brain death).',
        explanation: 'In brain death, markedly elevated intracranial pressure prevents intravenous radiotracer from entering the cranial vault. The scalp and extracranial structures remain perfused, creating the "light bulb" appearance with an empty center. The hot nose sign occurs because blood is diverted through the external carotid collaterals to the nasal/maxillary region. Common carotid activity must be identified to confirm adequate tracer delivery (study validity).',
        keyFact: 'Brain death SPECT: empty light bulb = no intracranial flow. Hot nose = secondary sign (NOT sufficient alone). Must see common carotid activity to call the study valid. DTPA/pertechnetate for planar; HMPAO/ECD for SPECT.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/brain-death-scintigraphy',
        tags: ['neuro', 'brain death', 'SPECT', 'nuclear medicine', 'ICP'],
      },
    },
    {
      id: 'nucs-neuro-006',
      front: {
        question: 'What is crossed cerebellar diaschisis, and in what clinical settings is it encountered?',
      },
      back: {
        answer: 'Crossed cerebellar diaschisis: decreased metabolism/perfusion in the cerebellar hemisphere contralateral to a supratentorial lesion, due to interruption of corticopontine-cerebellar pathways. Seen with tumors, stroke, and trauma.',
        explanation: 'The corticospinal tract sends fibers from the cerebral cortex down through the pons, crossing to synapse in the contralateral cerebellum. When the ipsilateral cortex is damaged, transneuronal degeneration or functional depression affects the contralateral cerebellar hemisphere. This appears as asymmetric cerebellar hypometabolism on FDG PET contralateral to the cortical lesion.',
        keyFact: 'Crossed cerebellar diaschisis: right cortical lesion → left cerebellar hypometabolism (contralateral). Due to corticospinal-cerebellar pathway interruption. Seen in tumors, stroke, trauma. Do not mistake for a cerebellar lesion.',
        tags: ['neuro', 'PET', 'diaschisis', 'cerebellum', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-neuro-007',
      front: {
        question: 'How is Tl-201 SPECT used to differentiate CNS lymphoma from toxoplasmosis, and what are the gallium-67 findings for each?',
      },
      back: {
        answer: 'CNS lymphoma: Tl-201 HOT (viable tumor), Ga-67 hot. Toxoplasmosis: Tl-201 COLD (no viable tumor cells), Ga-67 hot. Therefore, Tl-201 is the differentiating tracer (lymphoma = hot, toxo = cold).',
        explanation: 'In immunocompromised patients (HIV/AIDS), ring-enhancing brain lesions from CNS lymphoma and toxoplasmosis are radiographically indistinguishable. Tl-201 (potassium analog, taken up by viable tumor cells) concentrates in lymphoma but not in the necrotic/inflammatory center of toxoplasmosis abscesses. Both are gallium-avid, so gallium alone does not distinguish them.',
        keyFact: 'CNS lymphoma vs Toxo: both Ga-67 hot. Tl-201 hot = lymphoma. Tl-201 cold = toxo. Key mnemonic: KaT = Kaposi = Thallium-hot, Gallium-negative. TuG = Tuberculosis = Gallium-hot, Thallium-cold. Lymphoma = both hot.',
        tags: ['neuro', 'SPECT', 'lymphoma', 'toxoplasmosis', 'thallium'],
      },
    },
  ]},

  { id: 'nucs-infection',  label: 'Infection & Inflammation', cards: [
    {
      id: 'nucs-infection-001',
      front: {
        question: 'What are the properties of Gallium-67, its normal distribution, and what is the panda sign?',
      },
      back: {
        answer: 'Ga-67: cyclotron-produced, T½ = 78h, decays by electron capture, 4 photopeaks (93, 184, 296, 388 keV), binds transferrin. Normal: nasopharynx, lacrimal/salivary glands, liver (most), colon, bone marrow. Panda sign: uptake in lacrimal + parotid + nasopharynx = classic sarcoidosis (+ lambda sign = bilateral hilar adenopathy).',
        explanation: 'Gallium-67 behaves like iron (Fe3+), binding to transferrin in blood and to lactoferrin at infection/inflammation sites. It concentrates in rapidly dividing cells and areas of inflammation. Persistent renal uptake > 24 hours is always abnormal. Diffuse pulmonary uptake indicates PCP, sarcoidosis, fibrosis, or lymphangitic spread.',
        keyFact: 'Ga-67 panda sign + lambda sign (hilar nodes) = sarcoidosis. Persistent renal Ga-67 after 24h = always abnormal (obstruction or renal disease). Replaced by FDG PET for most oncology; still first-line for spinal osteomyelitis/discitis.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/gallium-67-scan',
        tags: ['infection', 'gallium', 'nuclear medicine', 'sarcoidosis', 'SPECT'],
      },
    },
    {
      id: 'nucs-infection-002',
      front: {
        question: 'Compare In-111 WBC and Tc-99m HMPAO WBC for infection imaging: advantages, disadvantages, and preferred clinical scenarios.',
      },
      back: {
        answer: 'In-111 WBC: T½ 67h, allows delayed 24h imaging, no bowel/renal background (best for abdominal infection), preferred for spinal vs gallium NOT preferred. Tc-99m HMPAO WBC: lower dose (preferred in children), earlier imaging, BUT bowel/renal activity limits abdominal evaluation. Both: spleen > liver > bone marrow distribution.',
        explanation: 'In-111 oxine labels the WBC cytoplasm and does not redistribute, allowing accurate delayed imaging. The absence of physiologic bowel activity is critical for detecting abdominal/pelvic infections. Tc-99m provides better image quality and lower dose in children (shorter half-life = less radiation per decay). However, free Tc-99m HMPAO complexes produce GI and renal activity. In-111 WBC is LESS accurate than gallium for spinal osteomyelitis (bone marrow uptake obscures the signal).',
        keyFact: 'In-111 WBC: normal distribution spleen > liver > marrow. Best for abdominal infection (no bowel activity). AVOID for spinal infection (marrow obscures signal → use gallium). Tc-99m HMPAO WBC: preferred for children and small joints.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/indium-111-labelled-white-cell-scan',
        tags: ['infection', 'WBC scan', 'indium', 'nuclear medicine', 'osteomyelitis'],
      },
    },
    {
      id: 'nucs-infection-003',
      front: {
        question: 'How does the combined WBC + Tc-99m sulfur colloid marrow scan evaluate osteomyelitis in the setting of a prosthesis or prior fracture?',
      },
      back: {
        answer: 'Discordant WBC + colloid scan = osteomyelitis. Pattern: focal WBC uptake in area WITHOUT corresponding sulfur colloid marrow uptake = marrow replaced by WBCs = infection. Concordant (both hot or both cold) = normal marrow or aseptic process.',
        explanation: 'In a normal site, bone marrow contains both normal hematopoietic cells (take up sulfur colloid) and WBCs (take up In-111). Both tracers show uptake. In osteomyelitis, the marrow is replaced by infected neutrophils — increased WBC uptake but absent colloid uptake (no normal hematopoietic marrow). Aseptic loosening shows proportional uptake in both tracers at mechanical stress points.',
        keyFact: 'Discordant = WBC hot + colloid COLD = osteomyelitis (marrow replaced by infected WBCs). Concordant = both up or both down = not infection. Essential for prosthesis evaluation where bone scan alone is non-specific.',
        tags: ['infection', 'osteomyelitis', 'WBC scan', 'sulfur colloid', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-infection-004',
      front: {
        question: 'What is I-123 MIBG, what tumors does it image, and what thyroid protection is required?',
      },
      back: {
        answer: 'MIBG = meta-iodobenzylguanidine, norepinephrine analog. Taken up by sympathetic adrenergic chromaffin cells. Primary indications: pheochromocytoma (adults), neuroblastoma (children). I-131 MIBG used therapeutically for neuroblastoma. Thyroid must be blocked with Lugol\'s solution (potassium iodide) to prevent thyroid uptake.',
        explanation: 'MIBG is structurally similar to norepinephrine and is taken up by the norepinephrine reuptake mechanism in sympathetic neurons and chromaffin cells. Normal distribution includes salivary glands, heart (cardiac sympathetic innervation), liver, kidneys, and bladder. Other neuroendocrine tumors (carcinoid, medullary thyroid carcinoma, paraganglioma) also concentrate MIBG to a lesser extent. Thyroid blocking prevents radiation thyroiditis from any free radioiodine.',
        keyFact: 'MIBG = norepinephrine analog → sympathetic tissue. Pheochromocytoma (adults) + neuroblastoma (children). I-123 MIBG = imaging. I-131 MIBG = therapy (neuroblastoma). Always block thyroid with Lugol\'s solution before MIBG.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mibg-scan',
        tags: ['neuroendocrine', 'MIBG', 'pheochromocytoma', 'nuclear medicine', 'neuroblastoma'],
      },
    },
    {
      id: 'nucs-infection-005',
      front: {
        question: 'What is In-111 pentetreotide (Octreoscan), what tumors does it detect, and which neuroendocrine tumor has LOW sensitivity?',
      },
      back: {
        answer: 'Octreoscan = In-111 labeled octreotide (somatostatin analog) → binds somatostatin receptors on APUD/neuroendocrine tumors. Best for carcinoid and gastrinoma. LOW sensitivity for insulinoma (often lack somatostatin receptors). Normal: intense renal and splenic uptake.',
        explanation: 'Most neuroendocrine tumors overexpress somatostatin receptors (sstr2), making them visible on Octreoscan. Carcinoid is the classic indication. However, insulinomas characteristically have lower receptor expression and are often missed by Octreoscan. Paragangliomas are better detected by MIBG than Octreoscan, though there is overlap. Ga-68 DOTATATE PET has largely replaced Octreoscan due to superior sensitivity and resolution.',
        keyFact: 'Octreoscan (In-111 pentetreotide) = somatostatin receptor scintigraphy. Best: carcinoid, gastrinoma, VIPoma. WORST: insulinoma (low receptor expression). Normal: kidney + spleen most intense. Superseded by Ga-68 DOTATATE PET.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/indium-111-pentetreotide',
        tags: ['neuroendocrine', 'Octreoscan', 'carcinoid', 'nuclear medicine', 'SPECT'],
      },
    },
    {
      id: 'nucs-infection-006',
      front: {
        question: 'What is the Ga-67/Tl-201 combination used for in immunocompromised patients, and what are the classic patterns for Kaposi sarcoma, TB, and lymphoma?',
      },
      back: {
        answer: 'Kaposi sarcoma (KaT): Tl-201 HOT, Ga-67 NEGATIVE. Tuberculosis (TuG): Ga-67 HOT, Tl-201 NEGATIVE. Lymphoma: BOTH Ga-67 and Tl-201 HOT.',
        explanation: 'In AIDS patients with pulmonary or CNS lesions, this combination helps narrow the differential. Kaposi sarcoma lacks the inflammatory infiltrate that would take up gallium, but viable tumor cells concentrate thallium. Mycobacterial infections generate intense inflammatory response (gallium positive) without viable tumor for thallium. Lymphoma is both metabolically active (thallium) and inflammatory (gallium).',
        keyFact: 'Mnemonics: KaT = Kaposi = Thallium-positive, Ga-negative. TuG = TB = Gallium-positive, Tl-negative. Lymphoma = both hot. These patterns apply in immunocompromised patients.',
        tags: ['infection', 'gallium', 'thallium', 'AIDS', 'nuclear medicine'],
      },
    },
  ]},

  { id: 'nucs-other',     label: 'Other Studies & Physics',   cards: [
    {
      id: 'nucs-other-001',
      front: {
        question: 'What is radionuclide cystography (RNC), how does it compare to VCUG, and how is vesicoureteral reflux graded?',
      },
      back: {
        answer: 'RNC = most sensitive test for VUR in children; less radiation than VCUG. Tracer instilled retrograde into catheterized bladder. Grade I: reflux to ureter only. Grade II: reflux to pelvicalyceal system. Grade III: severe reflux with tortuous ureter and/or dilated intrarenal system.',
        explanation: 'RNC provides continuous radiation detection (unlike fluoroscopy which is pulsed), making it more sensitive for intermittent reflux during filling and voiding. Radiation dose to gonads is significantly less than VCUG. Any of the pertechnetate-labeled agents can be used. The three-tier grading is simpler than the five-tier VCUG grading but adequate for clinical management decisions.',
        keyFact: 'RNC: more sensitive than VCUG, less radiation. Best for follow-up after initial VCUG diagnosis. Grade I = ureter only. Grade II = collecting system. Grade III = tortuous + dilated system.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/radionuclide-cystography',
        tags: ['renal', 'pediatric', 'VUR', 'nuclear medicine', 'cystography'],
      },
    },
    {
      id: 'nucs-other-002',
      front: {
        question: 'What is the role of quantitative lung perfusion before pneumonectomy, and how is it used to predict post-operative lung function?',
      },
      back: {
        answer: 'Quantitative perfusion scan calculates the percentage of perfusion from each lung. Predicted post-op FEV1 = current FEV1 × (fraction of perfusion from remaining lung). Post-op predicted FEV1 > 800 mL or > 40% predicted = generally acceptable for surgery.',
        explanation: 'Before resection of an entire lung or lobe, it is critical to ensure adequate residual pulmonary function. If spirometry suggests marginal function, a quantitative perfusion scan determines which lung contributes how much to overall perfusion (and therefore function). This allows more accurate prediction of postoperative pulmonary function than anatomy alone. Quantitative V/Q cannot be performed with Tc-99m DTPA aerosol (flow-dependent distribution).',
        keyFact: 'Pre-pneumonectomy quantitative perfusion: split% × current FEV1 = predicted post-op FEV1. Target > 800 mL or > 40% predicted. Cannot do quantitative V/Q with Tc-99m DTPA aerosol (use Xe-133 or MAA perfusion only).',
        tags: ['pulmonary', 'nuclear medicine', 'lung function', 'pneumonectomy', 'quantitative'],
      },
    },
    {
      id: 'nucs-other-003',
      front: {
        question: 'What is the reappearing liver sign on HIDA scan, and what is a bile leak pattern?',
      },
      back: {
        answer: 'Bile leak: activity accumulates outside biliary tract in delayed images (right paracolic gutter, pelvis). Reappearing liver sign: bile tracks superiorly to perihepaticspace and coats liver surface → apparent "re-increase" in liver activity after initial clearance into bowel.',
        explanation: 'After surgery or trauma, bile may extravasate from a bile duct injury and collect in the peritoneal cavity. HIDA scan is sensitive for detecting bile leaks — activity appears outside the expected biliary and bowel distribution and increases over time. The reappearing liver sign is a specific pattern where perihepatic bile accumulation mimics increasing hepatic activity, potentially causing confusion with hepatocyte dysfunction.',
        keyFact: 'Bile leak on HIDA: progressive activity outside biliary tract on delayed images. Reappearing liver sign = bile coats liver surface → looks like increasing liver uptake. Check right paracolic gutter and pelvis on delayed HIDA images.',
        tags: ['hepatobiliary', 'HIDA', 'bile leak', 'nuclear medicine', 'post-surgical'],
      },
    },
    {
      id: 'nucs-other-004',
      front: {
        question: 'What are the key differences between I-123 and I-131 MIBG, and when is I-131 MIBG used therapeutically?',
      },
      back: {
        answer: 'I-123 MIBG: 13h half-life, 159 keV, cyclotron, used for diagnostic imaging (better image quality, lower dose). I-131 MIBG: 8-day half-life, beta emitter, fission-produced, used therapeutically for neuroblastoma. I-131 MIBG may also be used therapeutically for metastatic pheochromocytoma.',
        explanation: 'Diagnostic MIBG imaging uses I-123 because its photon energy is appropriate for gamma camera detection and the shorter half-life limits patient dose. I-131 MIBG therapy delivers cytotoxic beta radiation to MIBG-avid tumors. Neuroblastoma in children is highly MIBG-avid, making this an effective systemic therapy for metastatic disease. The same thyroid blocking protocols apply.',
        keyFact: 'I-123 MIBG = diagnostic (13h, 159 keV). I-131 MIBG = therapy (neuroblastoma, metastatic pheochromocytoma). Always block thyroid before either. Lugol\'s solution/KI given 24–48h before and continued 10–14 days after I-131 MIBG.',
        tags: ['neuroendocrine', 'MIBG', 'therapy', 'neuroblastoma', 'nuclear medicine'],
      },
    },
    {
      id: 'nucs-other-005',
      front: {
        question: 'What is the sentinel lymph node biopsy (SLNB) nuclear medicine technique, and what radiotracer is used?',
      },
      back: {
        answer: 'Tc-99m sulfur colloid (or Tc-99m albumin colloid) injected peritumorally. Lymphoscintigraphy identifies the first-draining (sentinel) lymph node basin. Intraoperatively, a gamma probe identifies hot nodes. Reduces need for complete axillary dissection in breast cancer and melanoma staging.',
        explanation: 'The sentinel node concept is based on the principle that lymphatic drainage from a tumor goes to one or a few first-echelon nodes before spreading further. By injecting radiotracer around the tumor and identifying the first draining node(s) with lymphoscintigraphy and an intraoperative gamma probe, surgeons can sample only the highest-yield nodes. A negative sentinel node reliably predicts negative regional basin.',
        keyFact: 'SLNB tracer: Tc-99m sulfur colloid (peritumoral injection). Lymphoscintigraphy maps drainage basin. Gamma probe intraoperatively. Used for breast cancer and melanoma staging. Negative SLN = no further axillary dissection needed.',
        tags: ['nuclear medicine', 'sentinel node', 'breast cancer', 'lymphoscintigraphy', 'SLNB'],
      },
    },
    {
      id: 'nucs-other-006',
      front: {
        question: 'What are the common causes of diffuse pulmonary uptake on Ga-67 scan, and what are causes of diffuse pulmonary uptake on Tc-99m sulfur colloid scan?',
      },
      back: {
        answer: 'Ga-67 diffuse lung: PCP, sarcoidosis, IPF, lymphangitic carcinomatosis, miliary TB, fungal infection. Sulfur colloid diffuse lung (colloid lung): cirrhosis, COPD with superinfection, Langerhans cell histiocytosis, high serum aluminum.',
        explanation: 'Diffuse pulmonary uptake on Ga-67 is always abnormal in adults and indicates active pulmonary inflammatory/infiltrative disease. The differential is broad but weighted toward infection in immunocompromised patients (PCP) and interstitial disease in immunocompetent patients. Sulfur colloid diffuse lung uptake (normally absent) occurs when reticuloendothelial system dysfunction or lung damage allows particles to lodge in pulmonary capillaries.',
        keyFact: 'Ga-67 diffuse lung = always abnormal (PCP in AIDS, sarcoid, IPF). Sulfur colloid lung uptake: cirrhosis (most common), COPD + infection, LCH, high aluminum. Both are nonspecific.',
        tags: ['nuclear medicine', 'gallium', 'sulfur colloid', 'pulmonary', 'sarcoidosis'],
      },
    },
    {
      id: 'nucs-other-007',
      front: {
        question: 'What are the key properties and clinical indications for Ga-68 DOTATATE PET/CT?',
      },
      back: {
        answer: 'Ga-68 DOTATATE PET/CT: PET-based somatostatin receptor imaging, far superior to In-111 Octreoscan for neuroendocrine tumors. Indications: staging/restaging of well-differentiated NETs (carcinoid, pancreatic NET, paraganglioma, pheochromocytoma). Higher sensitivity and spatial resolution than Octreoscan.',
        explanation: 'Ga-68 DOTATATE is a somatostatin analog (targeting sstr2) labeled with Ga-68 for PET detection. The superior sensitivity of PET over SPECT, combined with better spatial resolution and shorter exam time, has made Ga-68 DOTATATE PET/CT the preferred imaging modality for somatostatin receptor-positive NETs worldwide. It is now the gold standard for NET staging and assessment of eligibility for PRRT (peptide receptor radionuclide therapy with Lu-177 DOTATATE).',
        keyFact: 'Ga-68 DOTATATE PET = gold standard for somatostatin receptor-positive NETs. Supersedes Octreoscan. Also identifies patients eligible for Lu-177 DOTATATE (PRRT) therapy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/gallium-68-dotatate-pet',
        tags: ['PET', 'neuroendocrine', 'DOTATATE', 'nuclear medicine', 'carcinoid'],
      },
    },
    {
      id: 'nucs-other-008',
      front: {
        question: 'What is thyroid stunning, and how does it affect I-131 therapy planning for thyroid cancer?',
      },
      back: {
        answer: 'Thyroid stunning: diagnostic I-131 (or I-123) dose temporarily reduces uptake in remaining thyroid tissue and metastases, causing lower subsequent therapeutic I-131 uptake. To minimize: use I-123 (lower stunning effect) for diagnostic scan, or proceed directly to therapy without pre-therapy scan in low-risk patients.',
        explanation: 'Even small diagnostic doses of I-131 deliver significant radiation to thyroid tissue, which transiently reduces iodine uptake (stunning effect) that can last several weeks. Using I-123 for the pre-therapy scan avoids stunning because its photon emission without significant beta particles delivers much lower tissue dose. Alternatively, empiric therapy based on risk stratification without pre-therapy scanning avoids the stunning issue entirely.',
        keyFact: 'Thyroid stunning: diagnostic I-131 → reduced uptake of subsequent therapeutic I-131. Avoid by: using I-123 for pre-therapy scan, or empiric therapy without scanning. Goal TSH > 30 mIU/mL maximizes therapeutic uptake.',
        tags: ['thyroid', 'nuclear medicine', 'I-131', 'therapy', 'stunning'],
      },
    },
  ]},
]