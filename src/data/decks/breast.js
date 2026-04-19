// ============================================================
// RadStack — Breast Radiology Deck
// ============================================================
// Naming convention: breast-[section]-[###]
// ============================================================

export const breastSubsections = [
  { id: 'breast-anatomy',        label: 'Anatomy & Technique',      cards: [
    {
      id: 'breast-anatomy-001',
      front: {
        question: 'What are the three anatomical zones of the breast on ultrasound, and what does each contain?',
      },
      back: {
        answer: 'Subcutaneous (premammary) zone, mammary zone, retromammary zone',
        explanation: 'The subcutaneous zone contains skin, dermis, subcutaneous fat, and superficial Cooper\'s ligaments. The mammary zone is the main functional compartment containing ducts, TDLUs, fat, fibrous tissue, and Cooper\'s ligaments — this is where most pathology arises. The retromammary zone lies just superficial to the pectoralis muscle and contains mostly fat.',
        keyFact: 'Most breast pathology arises in the mammary zone (TDLUs and ducts). Parenchymal fat is uniquely hypoechoic on ultrasound, unlike fat elsewhere in the body.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-anatomy',
        tags: ['ultrasound', 'anatomy', 'breast', 'TDLU'],
      },
    },
    {
      id: 'breast-anatomy-002',
      front: {
        question: 'What is the terminal ductal lobular unit (TDLU) and why is it clinically important?',
      },
      back: {
        answer: 'The TDLU is the functional unit of the breast comprising the terminal duct and its associated lobule; most breast cancers originate here',
        explanation: 'The TDLU consists of a terminal ductule and the surrounding lobule of acini where milk is produced. Because most breast malignancies (both ductal and lobular carcinoma) originate in the TDLU, understanding its anatomy underpins breast pathology. The TDLUs are most concentrated in the upper outer quadrant, which is why most breast cancers arise there.',
        keyFact: 'Most breast cancers arise in the TDLU. The upper outer quadrant has the highest density of TDLUs — the most common location for breast cancer.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/terminal-ductal-lobular-unit',
        tags: ['anatomy', 'breast', 'TDLU', 'cancer'],
      },
    },
    {
      id: 'breast-anatomy-003',
      front: {
        question: 'What is the "posterior nipple line" and how is it used to assess mammographic adequacy?',
      },
      back: {
        answer: 'A line drawn from the nipple to the pectoralis muscle on the MLO (or to the film edge on the CC); the two views must be within 1 cm of each other',
        explanation: 'On the MLO, the posterior nipple line extends from the nipple perpendicular to the pectoralis muscle. On the CC, it extends from the nipple to the posterior film edge. An adequate study requires these measurements to be within 1 cm of each other, ensuring comparable posterior tissue is included in both views.',
        keyFact: 'Posterior nipple lines on CC and MLO must be within 1 cm for a technically adequate mammogram. On the MLO, the pectoralis muscle must be visible at least to the level of the nipple and should be convex anteriorly (relaxed).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mammographic-positioning',
        tags: ['mammography', 'technique', 'breast', 'quality'],
      },
    },
    {
      id: 'breast-anatomy-004',
      front: {
        question: 'What standard views are obtained on a screening mammogram, and which contains the most breast tissue?',
      },
      back: {
        answer: 'Craniocaudal (CC) and mediolateral oblique (MLO); the MLO contains the most breast tissue',
        explanation: 'The CC is a transaxial projection and the MLO is angled 45–60° paralleling the pectoralis muscle. The MLO is the single view capturing the most breast tissue including the axillary tail; however, the superior-medial breast may be excluded on the MLO. The CC complements by imaging the medial breast.',
        keyFact: 'MLO contains the most breast tissue of all views. The superior-medial breast and inferior posterior breast are the two "danger zones" most commonly missed — the medial breast can be excluded on the MLO, and the inferior posterior breast on the CC.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mammography-views',
        tags: ['mammography', 'technique', 'breast', 'screening'],
      },
    },
    {
      id: 'breast-anatomy-005',
      front: {
        question: 'When is a lateral mammographic view (LM vs ML) preferred, and what is the "muffins rise, lead sinks" rule?',
      },
      back: {
        answer: 'True lateral is used to triangulate a one-view finding on the MLO; "muffins rise" means medial lesions rise on true lateral, "lead sinks" means lateral lesions fall',
        explanation: 'If a lesion is seen only on the MLO and not the CC, a true lateral (ML) view is obtained. The lesion\'s movement relative to the MLO position indicates its location: medial lesions are superior on the CC and rise on the true lateral; lateral lesions are inferior and fall (sink). For a one-view CC finding, rolled CC views are used.',
        keyFact: 'Lesion seen on MLO only → get a true lateral (ML). If it rises → medial (muffins rise). If it falls → lateral (lead sinks). The ML is preferred over LM because 70% of breast cancers are lateral, so the lesion is usually already closer to the lateral detector.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mammographic-localization',
        tags: ['mammography', 'technique', 'breast', 'localization'],
      },
    },
    {
      id: 'breast-anatomy-006',
      front: {
        question: 'What special mammographic view is used to confirm suspected dermal calcifications, and how does it work?',
      },
      back: {
        answer: 'Tangential view — a BB is placed over the calcifications and the image is obtained with the BB in profile; dermal calcifications will be seen within the dermis',
        explanation: 'Dermal calcifications project over the breast on standard views and can mimic parenchymal grouped calcifications. A tangential view places the lesion at the skin surface in profile, confirming its dermal location. Tomosynthesis can also identify dermal calcifications by demonstrating their superficial location.',
        keyFact: 'Dermal calcifications = "tattoo sign" — they maintain the same position on both CC and MLO views. To confirm: tangential view. Dermal calcifications favor skin folds, axilla, and cleavage (high sweat gland density).',
        tags: ['mammography', 'technique', 'breast', 'calcifications'],
      },
    },
    {
      id: 'breast-anatomy-007',
      front: {
        question: 'What is a "rolled CC view" and for what purpose is it performed?',
      },
      back: {
        answer: 'A CC view obtained with the breast rolled medially or laterally to localize a lesion seen only on the CC view to the superior vs inferior breast',
        explanation: 'When a finding is seen on the CC but not the MLO, rolled views help determine if the lesion is in the superior or inferior breast by observing how the lesion moves. If the breast is rolled medially: a superior lesion moves medially, and an inferior lesion moves laterally. Superior tumors move in the direction you roll; inferior tumors move opposite.',
        keyFact: 'Roll the breast medially (RCCM): superior lesion moves medial, inferior lesion moves lateral. The top of the breast is your reference point. Superior tumors move in the direction of roll; inferior tumors move opposite.',
        tags: ['mammography', 'technique', 'breast', 'localization'],
      },
    },
    {
      id: 'breast-anatomy-008',
      front: {
        question: 'What mammographic view is used when magnification views are obtained for calcifications, and why is no grid used?',
      },
      back: {
        answer: 'CC and ML (true lateral) views; no grid is used on magnification views because the air-gap technique achieves scatter reduction',
        explanation: 'Magnification mammography uses a small focal spot (0.1 mm) and air-gap technique which replaces the grid for scatter reduction. The true lateral (ML) is used instead of the MLO because the 90° view is needed to detect milk of calcium layering. Standard mammograms always use a grid; magnification views do not.',
        keyFact: 'Magnification views: CC + ML (not MLO). No grid — air-gap technique does the work. Key reason for true lateral: milk of calcium layers to a "tea-cup" crescent shape only on the 90° lateral.',
        tags: ['mammography', 'technique', 'breast', 'calcifications'],
      },
    },
    {
      id: 'breast-anatomy-009',
      front: {
        question: 'What is digital breast tomosynthesis (DBT) and what are its key advantages over standard 2D mammography?',
      },
      back: {
        answer: 'DBT acquires multiple low-dose images at different angles reconstructed into quasi-3D slices, reducing overlapping tissue; it decreases recall rate and increases cancer detection rate',
        explanation: 'Tomosynthesis reduces the problem of overlapping dense fibroglandular tissue that can obscure or mimic lesions on standard 2D mammography. It is particularly beneficial for detecting masses and architectural distortion and may reduce the need for additional spot compression views. DBT is becoming the standard of care for breast screening.',
        keyFact: 'DBT vs 2D mammography: ↓ recall rate + ↑ cancer detection rate. Architectural distortion can actually be LESS apparent on spot compression magnification views — tomosynthesis is better for detecting AD.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/digital-breast-tomosynthesis',
        tags: ['mammography', 'breast', 'tomosynthesis', 'technique'],
      },
    },
    {
      id: 'breast-anatomy-010',
      front: {
        question: 'What is the axillary node level classification and where do Rotter nodes fall?',
      },
      back: {
        answer: 'Level I: lateral to pectoralis minor; Level II: deep (posterior) to pectoralis minor; Level III: medial/above pectoralis minor; Rotter nodes: between pectoralis major and minor = Level II',
        explanation: 'Axillary nodal levels are defined by their relationship to the pectoralis minor muscle. Lymphatic drainage typically progresses stepwise from Level I → II → III → thorax. For staging purposes, Levels I and II are treated similarly; Level III and supraclavicular nodes are treated similarly.',
        keyFact: 'Rotter nodes (interpectoral) = Level II. For staging: Level I and II = same treatment; Level III and supraclavicular = same treatment. Axillary node status is the single most important prognostic factor in breast cancer.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/axillary-lymph-node-levels',
        tags: ['anatomy', 'breast', 'lymph nodes', 'staging'],
      },
    },
    {
      id: 'breast-anatomy-011',
      front: {
        question: 'What percentage of breast lymphatic drainage goes to the axilla versus the internal mammary nodes?',
      },
      back: {
        answer: 'Approximately 97% drains to the axilla; ~3% to the internal mammary nodes',
        explanation: 'The overwhelming majority of breast lymphatic drainage flows to the axillary nodes, making axillary dissection and sentinel node biopsy the primary staging method. Internal mammary node metastases are uncommon and tend to occur with medially located tumors. Isolated internal mammary node metastases without axillary involvement are rare (~3%).',
        keyFact: '97% of breast lymph → axilla. Internal mammary mets are rare and typically associated with medial tumors. If you can see them on ultrasound, they are abnormal.',
        tags: ['anatomy', 'breast', 'lymph nodes', 'staging'],
      },
    },
    {
      id: 'breast-anatomy-012',
      front: {
        question: 'What are the standard breast MRI sequences, and what is the optimal timing for breast MRI in premenopausal women?',
      },
      back: {
        answer: 'T2-weighted, pre- and post-contrast fat-saturated T1 dynamic sequences; optimal timing is days 7–14 of the menstrual cycle (follicular phase)',
        explanation: 'The primary sequence is dynamic fat-saturated post-contrast T1, enabling kinetic analysis. T2 helps identify benign features (cysts, fibroadenoma). Fat saturation is critical because the breast is predominantly fat. Background parenchymal enhancement is highest in the luteal phase (days 14–28), so scanning in the follicular phase (days 7–14) minimizes background noise. Tamoxifen decreases background parenchymal enhancement.',
        keyFact: 'Breast MRI: scan days 7–14 (follicular phase) to minimize BPE. BPE peaks in the luteal phase (posterior upper outer quadrant). Patient lies prone with dedicated breast coil. Tamoxifen ↓ BPE.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-mri-technique',
        tags: ['MRI', 'breast', 'technique', 'screening'],
      },
    },
  ]},

  { id: 'breast-birads',         label: 'BI-RADS & Reporting',      cards: [
    {
      id: 'breast-birads-001',
      front: {
        question: 'What are the BI-RADS assessment categories 0–6 and their associated malignancy risk?',
      },
      back: {
        answer: '0: Incomplete; 1: Negative; 2: Benign (0%); 3: Probably benign (<2%); 4: Suspicious (2–95%); 5: Highly suggestive of malignancy (>95%); 6: Known biopsy-proven malignancy',
        explanation: 'BI-RADS 0 is for screening mammography requiring additional workup — it is never appropriate as a final assessment for diagnostic mammography. BI-RADS 3 mandates short-interval follow-up (6 months), not biopsy. BI-RADS 4 and 5 require tissue sampling. BI-RADS 5 means a benign biopsy result would be "discordant" and prompt surgical excision.',
        keyFact: 'BI-RADS 0: screening only. BI-RADS 3: <2% malignancy → 6-month follow-up. BI-RADS 5: >95% → if biopsy returns benign, result is discordant and surgical excision is required. You can NEVER give BI-RADS 4 or 5 on a screening exam.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/bi-rads',
        tags: ['breast', 'BI-RADS', 'mammography', 'classification'],
      },
    },
    {
      id: 'breast-birads-002',
      front: {
        question: 'What are the three specific mammographic findings that support a BI-RADS 3 (probably benign) designation after complete diagnostic workup?',
      },
      back: {
        answer: '1. Circumscribed solid mass with benign features; 2. Focal asymmetry (no ultrasound correlate); 3. Grouped punctate round calcifications on a baseline exam',
        explanation: 'All three must be assessed on a diagnostic (not screening) study. For a solid mass to be BI-RADS 3, it must be oval, circumscribed, and meet ultrasound criteria (wider-than-tall, circumscribed, not highly hypoechoic, no malignant features). For calcifications, they must be clearly punctate/round in a grouped distribution. BI-RADS 3 is generally reserved for baseline exams.',
        keyFact: 'Three things you can BI-RADS 3: (1) mass with fibroadenoma features, (2) focal asymmetry with no US correlate on baseline, (3) grouped punctate round calcs on baseline. You cannot BI-RADS 3 a developing asymmetry or any architectural distortion — ever.',
        tags: ['breast', 'BI-RADS', 'mammography', 'classification'],
      },
    },
    {
      id: 'breast-birads-003',
      front: {
        question: 'Using the BI-RADS mammographic lexicon, what terms are used to describe mass shape, margin, and density?',
      },
      back: {
        answer: 'Shape: Round, Oval, Irregular; Margin: Circumscribed, Obscured, Microlobulated, Indistinct, Spiculated; Density: Fat-containing, Low, Equal, High',
        explanation: 'Margin is the most important feature for distinguishing benign from malignant masses. A circumscribed margin (≥75% of margin sharply defined) is reassuring. Spiculated margins are malignant until proven otherwise. Fat-containing circumscribed masses are always benign (BI-RADS 2). Most breast cancers are equal or high density. The mnemonic for margins is COMIS: Circumscribed, Obscured, Microlobulated, Indistinct, Spiculated.',
        keyFact: 'COMIS mnemonic for mammographic margins. Key rule: fat-containing circumscribed mass = BI-RADS 2 (always benign). Spiculated mass = malignant until proven otherwise. Of all descriptors, MARGIN is the most reliable predictor of benign vs malignant.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/bi-rads-mammographic-lexicon',
        tags: ['breast', 'BI-RADS', 'mammography', 'lexicon'],
      },
    },
    {
      id: 'breast-birads-004',
      front: {
        question: 'What terms does the BI-RADS ultrasound lexicon use to describe a mass that are unique compared to the mammographic lexicon?',
      },
      back: {
        answer: 'Orientation (parallel vs not-parallel), echo pattern (anechoic, hypo-, iso-, hyperechoic, complex), posterior features (enhancement, shadowing, none)',
        explanation: 'The ultrasound lexicon adds orientation (parallel = wider than tall, a benign feature; not-parallel = taller than wide, suspicious) and posterior acoustic features. Echo patterns range from anechoic (cyst) to hyperechoic (lipoma, fat necrosis). Posterior enhancement is associated with fluid-containing or high cellular density lesions. Ultrasound margin terms include: circumscribed, indistinct, angular, microlobulated, spiculated.',
        keyFact: 'Unique to ultrasound BI-RADS: ORIENTATION (parallel = benign; not-parallel/taller-than-wide = suspicious) and POSTERIOR FEATURES (enhancement vs shadowing). "Anti-parallel" with posterior shadowing and echogenic halo is the classic appearance of IDC on ultrasound.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/bi-rads-ultrasound-lexicon',
        tags: ['breast', 'BI-RADS', 'ultrasound', 'lexicon'],
      },
    },
    {
      id: 'breast-birads-005',
      front: {
        question: 'How are the four fibroglandular density categories described in a mammographic report, and why does density matter?',
      },
      back: {
        answer: 'A: Almost entirely fatty; B: Scattered fibroglandular densities; C: Heterogeneously dense (may obscure masses); D: Extremely dense (lowers sensitivity); extremely dense breasts carry 5x relative risk of breast cancer',
        explanation: 'Fibroglandular density must be reported in every mammography report. Dense tissue both masks cancers (↓ sensitivity) and is an independent risk factor for breast cancer. Women with extremely dense breasts have 5x the relative risk compared to fatty breasts. Bilateral interval increase in density is usually benign; a unilateral increase raises concern for lymphatic obstruction (possibly malignant).',
        keyFact: 'Density categories A–D. Extremely dense = 5× relative risk of breast cancer. Unilateral ↑ density = red flag for lymphatic obstruction (consider malignancy). Bilateral ↑ density = usually benign (hormonal effect, edema, pregnancy/lactation).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-composition',
        tags: ['breast', 'BI-RADS', 'mammography', 'density'],
      },
    },
    {
      id: 'breast-birads-006',
      front: {
        question: 'What are the BI-RADS MRI lexicon terms for mass margins, and which margin type is most predictive of malignancy?',
      },
      back: {
        answer: 'Circumscribed, Irregular, Spiculated; spiculated margins are most predictive of malignancy (~84–91% malignancy rate)',
        explanation: 'Unlike the mammographic lexicon which uses "irregular" only for shape, the MRI lexicon uses "irregular" for both shape and margin. Evaluation of mass margins is the MRI feature most predictive of malignancy. A spiculated mass on MRI is malignant 84–91% of the time. Note that "smooth" and "lobulated" are no longer MRI lexicon terms — they are distractors.',
        keyFact: 'MRI lexicon margins: Circumscribed, Irregular, Spiculated only. "Smooth" and "lobulated" are removed — expect them as distractors. Spiculated margin = 84–91% malignancy on MRI — the single most predictive MRI feature.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/bi-rads-mri-lexicon',
        tags: ['breast', 'BI-RADS', 'MRI', 'lexicon'],
      },
    },
    {
      id: 'breast-birads-007',
      front: {
        question: 'What are the MRI enhancement kinetic curve types, and which is most suspicious for malignancy?',
      },
      back: {
        answer: 'Type I: persistent (progressive ↑); Type II: plateau (levels off within 10%); Type III: washout (>10% decrease in delayed phase); Type III is most suspicious',
        explanation: 'Enhancement kinetics are assessed in early (first 2 min: slow/medium/rapid) and delayed phases. Type I is associated with benign lesions (83% benign) but 9% of malignancies show Type I. Type II has PPV 64–77% for malignancy. Type III has PPV 87–92%. However, morphology always overrides kinetics — a spiculated mass with Type I kinetics is still suspicious and requires biopsy.',
        keyFact: 'Kinetics: Type I (persistent) = usually benign; Type III (washout) = most suspicious (PPV 87–92%). Critical rule: MORPHOLOGY TRUMPS KINETICS. A benign kinetic curve does not exempt suspicious morphology from biopsy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-mri-kinetics',
        tags: ['breast', 'BI-RADS', 'MRI', 'kinetics'],
      },
    },
    {
      id: 'breast-birads-008',
      front: {
        question: 'What is non-mass enhancement (NME) on breast MRI, and which distribution patterns are most suspicious for DCIS?',
      },
      back: {
        answer: 'NME is enhancement that is neither a mass nor a focus; segmental and linear distributions with clumped internal enhancement are most suspicious for DCIS',
        explanation: 'NME distributions from most to least suspicious: segmental (triangular, pointing toward nipple) > linear > regional > multiple regions > focal > diffuse. Clumped internal enhancement (cobblestone pattern) is the internal morphology most associated with DCIS (51% of DCIS cases). Clustered ring enhancement is also highly suspicious. Segmental distribution is the most common NME distribution seen in DCIS (42% of cases).',
        keyFact: 'DCIS on MRI: segmental NME + clumped enhancement = classic appearance. Segmental = most common DCIS distribution (42%); clumped = most suggestive internal pattern (51% of DCIS). "Reticular" and "dendritic" are removed from lexicon — they are distractors.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/non-mass-enhancement-breast-mri',
        tags: ['breast', 'BI-RADS', 'MRI', 'DCIS', 'NME'],
      },
    },
    {
      id: 'breast-birads-009',
      front: {
        question: 'What does background parenchymal enhancement (BPE) mean on breast MRI, and how is it classified?',
      },
      back: {
        answer: 'BPE is normal enhancement of breast parenchyma on contrast-enhanced MRI; classified as none, minimal, mild, moderate, or marked; assessed on the first postcontrast sequence',
        explanation: 'BPE is an expected finding reflecting normal glandular tissue enhancement and is most prominent in the posterior upper outer quadrant during the luteal phase (days 14–28). High BPE can mimic or obscure pathological enhancement. BPE is minimized by scanning in the follicular phase and is reduced by tamoxifen therapy.',
        keyFact: 'BPE categories: none, minimal, mild, moderate, marked — assessed on the FIRST post-contrast sequence. BPE is highest in the luteal phase (day 14–28) in the posterior upper outer breast. Scan day 7–14 to minimize BPE. Tamoxifen ↓ BPE (then causes rebound).',
        tags: ['breast', 'BI-RADS', 'MRI', 'BPE'],
      },
    },
    {
      id: 'breast-birads-010',
      front: {
        question: 'What is the definition and classification of a BI-RADS MRI "focus," and when can one be classified as BI-RADS 3?',
      },
      back: {
        answer: 'A focus is a dot of enhancement <5 mm without mass effect or pre-contrast correlate; a solitary focus with persistent kinetics on a baseline exam can be BI-RADS 3',
        explanation: 'A focus is too small to characterize margins or internal enhancement. Multiple bilateral foci are generally considered benign background parenchymal enhancement (BI-RADS 2). A single conspicuous or isolated focus may be BI-RADS 3 if it shows persistent kinetics on a baseline study. If a focus has any suspicious features, it should be described as a mass even if <5 mm.',
        keyFact: 'Focus: <5 mm, no mass effect. Multiple bilateral foci = BI-RADS 2 (BPE). Single focus + persistent kinetics + baseline = BI-RADS 3 acceptable. Suspicious features → call it a mass and biopsy.',
        tags: ['breast', 'BI-RADS', 'MRI', 'classification'],
      },
    },
    {
      id: 'breast-birads-011',
      front: {
        question: 'What is a "developing asymmetry" and what is its risk of malignancy at screening vs. diagnostic mammography?',
      },
      back: {
        answer: 'A focal asymmetry that is new or increasing in size; malignant in ~12.8% at screening mammography and ~26.7% at diagnostic mammography',
        explanation: 'A developing asymmetry is a suspicious finding. Workup involves spot compression views to confirm it is a true lesion (not summation artifact), followed by targeted ultrasound. If confirmed and no sonographic correlate, stereotactic biopsy is required even without a US finding, because the risk exceeds 2%. MRI does not replace biopsy for a developing asymmetry.',
        keyFact: 'Developing asymmetry = suspicious (never BI-RADS 3). Risk of CA: 12.8% on screening, 26.7% on diagnostic. A developing asymmetry with no US correlate still requires stereotactic biopsy — MRI does not replace tissue sampling here.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/asymmetry-breast',
        tags: ['breast', 'mammography', 'asymmetry', 'malignancy'],
      },
    },
    {
      id: 'breast-birads-012',
      front: {
        question: 'What are the four types of mammographic asymmetry recognized in the BI-RADS lexicon and how do they differ?',
      },
      back: {
        answer: 'Asymmetry (one view only); Global asymmetry (>1 quadrant, two views); Focal asymmetry (<1 quadrant, two views, concave borders); Developing asymmetry (new or growing focal asymmetry)',
        explanation: 'An asymmetry is seen in one projection only and often represents overlapping tissue. A global asymmetry involves more than one quadrant in two views and is usually a normal variant. A focal asymmetry is seen in two views but lacks the convex borders of a mass. A developing asymmetry is the most concerning subtype and requires full workup regardless of appearance.',
        keyFact: 'Key distinction: asymmetry (1 view) vs focal asymmetry (2 views, concave borders, no mass). Focal asymmetry without US correlate → BI-RADS 3 on baseline. Developing asymmetry → always BI-RADS 4 minimum, requires biopsy if true lesion confirmed.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-asymmetry',
        tags: ['breast', 'BI-RADS', 'mammography', 'asymmetry'],
      },
    },
    {
      id: 'breast-birads-013',
      front: {
        question: 'Under what conditions can a biopsy result be considered "concordant" vs "discordant," and what action follows a discordant result?',
      },
      back: {
        answer: 'Concordant: pathology result makes sense with the imaging findings and BI-RADS category; Discordant: benign biopsy result in a BI-RADS 5 lesion or pathology that does not explain the imaging → surgical excision',
        explanation: 'Radiologic-pathologic concordance is assessed after every image-guided biopsy. A BI-RADS 4 lesion with fibrocystic change on biopsy is concordant (benign result is acceptable). A BI-RADS 5 lesion with a benign biopsy result is discordant and mandates surgical excision, since the imaging strongly suggested malignancy and the biopsy may have missed it.',
        keyFact: 'BI-RADS 5 + benign biopsy = DISCORDANT → surgical excision required. BI-RADS 4 + benign biopsy = concordant if the benign result explains the imaging. MQSA requires annual audit correlating biopsy results with BI-RADS assessments.',
        tags: ['breast', 'BI-RADS', 'biopsy', 'concordance'],
      },
    },
  ]},

  { id: 'breast-benign',         label: 'Benign Masses',            cards: [
    {
      id: 'breast-benign-001',
      front: {
        question: 'What are the classic imaging features of a simple cyst on ultrasound, and what is the appropriate BI-RADS assessment?',
      },
      back: {
        answer: 'Anechoic, round or oval, imperceptibly thin wall, posterior acoustic enhancement, circumscribed margins; BI-RADS 2 (benign)',
        explanation: 'A simple cyst is completely benign when all criteria are met. Simple cysts are common, especially in perimenopausal women, and are associated with fibrocystic change. Aspiration is indicated only for pain or patient anxiety, not size. Cysts recur approximately 70% of the time after aspiration (reduced to 15% if air is injected after aspiration).',
        keyFact: 'Simple cyst criteria (all must be present): anechoic, circumscribed, thin wall, posterior enhancement → BI-RADS 2. Aspiration for pain/anxiety only. Non-bloody aspirate → discard (no cytology needed). Bloody aspirate or residual mass → send for cytology + clip placement.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/simple-breast-cyst',
        tags: ['breast', 'ultrasound', 'cyst', 'benign'],
      },
    },
    {
      id: 'breast-benign-002',
      front: {
        question: 'What is a complicated breast cyst and how does its management differ from a simple cyst?',
      },
      back: {
        answer: 'A cyst with low-level internal echoes or layering debris but otherwise meeting cyst criteria; solitary → BI-RADS 3 (follow-up); multiple bilateral → BI-RADS 2',
        explanation: 'Complicated cysts have a <2% risk of malignancy. They may contain proteinaceous material, hemorrhage, or debris. A solitary complicated cyst on a baseline exam can be placed in BI-RADS 3. Multiple bilateral complicated cysts are treated as benign (BI-RADS 2). If a complicated cyst cannot be reliably differentiated from a solid mass, aspiration or core biopsy is performed.',
        keyFact: 'Complicated cyst = low-level echoes or debris, <2% malignancy. Solitary → BI-RADS 3. Multiple bilateral → BI-RADS 2. Cannot distinguish from solid mass → aspirate first. If it disappears on aspiration + non-bloody → benign, no cytology needed.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/complicated-breast-cyst',
        tags: ['breast', 'ultrasound', 'cyst', 'benign'],
      },
    },
    {
      id: 'breast-benign-003',
      front: {
        question: 'What is a complex cystic and solid breast mass on ultrasound, and what is its risk of malignancy?',
      },
      back: {
        answer: 'A cyst with any solid feature (thick walls/septations, solid nodule, or internal mass); BI-RADS 4 — approximately 36% are malignant on biopsy',
        explanation: 'Complex cystic and solid masses are suspicious and require biopsy targeting the solid component. Malignancies include DCIS, encapsulated papillary carcinoma, high-grade phyllodes, and invasive carcinoma with central necrosis (common in triple-negative). Benign causes include papilloma, hematoma, abscess, fat necrosis, galactocele, and cyst with debris.',
        keyFact: 'Complex cystic + solid mass = BI-RADS 4, biopsy required (36% malignant). Target the solid component. Triple-negative breast cancer classically presents as a circumscribed complex cystic and solid mass — do not be falsely reassured by circumscribed margins.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/complex-cystic-and-solid-breast-mass',
        tags: ['breast', 'ultrasound', 'cyst', 'malignancy'],
      },
    },
    {
      id: 'breast-benign-004',
      front: {
        question: 'What are the classic imaging features of a fibroadenoma on ultrasound and mammography, and what MRI feature is highly specific for fibroadenoma?',
      },
      back: {
        answer: 'US: oval, parallel, circumscribed, homogeneously hypoechoic; Mammo: oval, circumscribed, equal density; MRI: T2 bright with dark internal septations (>95% PPV for fibroadenoma)',
        explanation: 'Fibroadenoma is the most common palpable breast mass in women under 35. It presents as a firm, mobile mass. On MRI, myxoid fibroadenomas are T2 hyperintense with progressive (Type I) enhancement. Hyalinizing fibroadenomas in older women show "popcorn" calcifications on mammography and may not enhance on MRI. A hyalinizing fibroadenoma with popcorn calcifications is definitively benign (BI-RADS 2).',
        keyFact: 'MRI: dark internal septations + T2 bright + Type I kinetics = fibroadenoma (>95% PPV). Popcorn calcifications on mammography = hyalinizing fibroadenoma → BI-RADS 2, no further workup needed. Exception: mucinous carcinoma is also T2 bright — don\'t confuse.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/fibroadenoma-of-the-breast',
        tags: ['breast', 'ultrasound', 'MRI', 'fibroadenoma', 'benign'],
      },
    },
    {
      id: 'breast-benign-005',
      front: {
        question: 'How do you differentiate a phyllodes tumor from a fibroadenoma on imaging?',
      },
      back: {
        answer: 'Both are circumscribed oval masses, but phyllodes tends to be larger, in older women (40s–50s), rapidly growing, with heterogeneous echotexture; imaging cannot reliably distinguish them',
        explanation: 'Phyllodes tumors occur in women about 10 years older than fibroadenoma patients (40s–50s vs 20s–30s). The key clinical feature is rapid growth. On imaging, both appear as circumscribed oval masses. Phyllodes is typically larger (>3 cm) with heterogeneous internal echotexture and possible cystic spaces on ultrasound. About 25% of phyllodes are malignant and metastasize hematogenously (lung, bone). Sentinel node biopsy is NOT performed for phyllodes (lymphatic mets are rare).',
        keyFact: 'Phyllodes = rapid growth + older woman (40s–50s) = fibroadenoma mimic. Metastasis is hematogenous (lung, bone), NOT lymphatic. Wide margin excision required (>2 cm). Cannot distinguish benign from malignant phyllodes on imaging — all require excision.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/phyllodes-tumour-of-the-breast',
        tags: ['breast', 'ultrasound', 'phyllodes', 'fibroadenoma'],
      },
    },
    {
      id: 'breast-benign-006',
      front: {
        question: 'What is the classic mammographic appearance of a hamartoma (fibroadenolipoma), and why is it called "breast within a breast"?',
      },
      back: {
        answer: 'Oval mass with mixed fat and soft-tissue density (fibroglandular elements) surrounded by a thin pseudocapsule; "breast within a breast" because it contains the same elements as normal breast tissue',
        explanation: 'A hamartoma contains fat, glandular tissue, and fibrous elements in a focal area demarcated by a pseudocapsule — essentially a localized version of normal breast tissue. The pseudocapsule appears as a thin radiopaque line separating internal fat from adjacent breast fat. It is BI-RADS 2. On ultrasound it appears as a heterogeneous oval mass with a thin echogenic pseudocapsule.',
        keyFact: 'Hamartoma buzzword: "breast within a breast." Mammographic Aunt Minnie: mixed fat + glandular tissue + thin pseudocapsule = BI-RADS 2. Difficult to see on ultrasound (blends into background). Breast cancer can rarely arise within a hamartoma — workup any suspicious mass or calcifications within it.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-hamartoma',
        tags: ['breast', 'mammography', 'hamartoma', 'benign', 'fat-containing'],
      },
    },
    {
      id: 'breast-benign-007',
      front: {
        question: 'What is a galactocele, what is its pathognomonic mammographic feature, and in what clinical setting does it occur?',
      },
      back: {
        answer: 'A cystic collection of inspissated milk in a lactating or recently post-lactation woman; pathognomonic feature is a fat-fluid level on mammography (subaerolar location)',
        explanation: 'A galactocele forms when milk becomes trapped and inspissated, usually at cessation of lactation. Location is classically subareolar. On mammography, a fat-fluid level is diagnostic and BI-RADS 2. Without a fat-fluid level, the appearance is variable (mixed density or fat density). On ultrasound, appearance is variable depending on fat content. If fat density is confirmed on mammography, no further workup is needed even if palpable.',
        keyFact: 'Galactocele: lactating/post-lactating woman + fat-fluid level on mammography = diagnostic (BI-RADS 2). If US shows complex mass without mammographic fat confirmation → aspirate or biopsy. Aspirated fluid would be milky if galactocele.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/galactocele',
        tags: ['breast', 'mammography', 'galactocele', 'benign', 'fat-containing'],
      },
    },
    {
      id: 'breast-benign-008',
      front: {
        question: 'What are the five classic fat-containing breast masses, and which two are considered "pure fat" (radiolucent without soft tissue)?',
      },
      back: {
        answer: 'Oil cyst/fat necrosis, hamartoma, galactocele, intramammary lymph node, lipoma; oil cyst and lipoma are the two pure fat-density masses',
        explanation: 'All five fat-containing circumscribed masses are benign (BI-RADS 2). Oil cysts are lucent with possible peripheral "eggshell" calcification. Lipomas are radiolucent without calcification (an enlarging lipoma warrants biopsy). Hamartomas contain mixed fat and soft tissue. Galactoceles contain milk. Lymph nodes have a fatty hilum. Pure fat-density on mammography is always benign.',
        keyFact: 'All 5 fat-containing masses = BI-RADS 2. "Pure fat" = oil cyst + lipoma. Lipoma: no calcification (vs oil cyst which can have eggshell calcification). Enlarging lipoma = biopsy indication. Fat-containing = always benign on mammography.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/fat-necrosis-of-the-breast',
        tags: ['breast', 'mammography', 'fat-containing', 'benign'],
      },
    },
    {
      id: 'breast-benign-009',
      front: {
        question: 'What is the mammographic and ultrasound appearance of an intramammary lymph node, and where are they most commonly located?',
      },
      back: {
        answer: 'Mammography: reniform mass with central fatty hilum (lucent notch); Ultrasound: hypoechoic cortex with central echogenic hilum and hilar vascularity; most common in the upper outer quadrant',
        explanation: 'Intramammary lymph nodes are normal structures found predominantly in the upper outer quadrant. The fatty hilum is the key diagnostic feature. On color Doppler, vessels course into the hilum. If the hilum is not visible, a full workup including spot compression and ultrasound is warranted. In contrast to axillary nodes, intramammary nodes are not typically found within the fibroglandular tissue itself.',
        keyFact: 'Intramammary lymph node: upper outer quadrant, reniform shape, fatty hilum = BI-RADS 2. If NO visible hilum → full workup required. MRI: reniform + adjacent vessel + Type III kinetics = benign intramammary lymph node (do NOT biopsy despite washout kinetics).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/intramammary-lymph-node',
        tags: ['breast', 'mammography', 'ultrasound', 'lymph node', 'benign'],
      },
    },
    {
      id: 'breast-benign-010',
      front: {
        question: 'What is pseudoangiomatous stromal hyperplasia (PASH), what are its imaging features, and how is it managed?',
      },
      back: {
        answer: 'Benign myofibroblastic proliferation; oval or round mass with circumscribed or indistinct margins, 4–6 cm; hormone-related; management: annual follow-up imaging',
        explanation: 'PASH is benign with no malignant potential but can be large (4–6 cm) and is most common between ages 18–50. On imaging it appears as a round/oval non-calcified mass. MRI shows high T2 slit-like spaces and Type I enhancement — the T2 slit-like spaces favor PASH over cancer. Growth and recurrence after excision are not uncommon. It responds to hormonal changes.',
        keyFact: 'PASH: benign + scary name. Age 18–50, large (4–6 cm), oval circumscribed mass. MRI: T2 slit-like spaces + Type I kinetics. Annual follow-up (12 months). Recurrence is common after excision but remains benign.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/pseudoangiomatous-stromal-hyperplasia',
        tags: ['breast', 'PASH', 'benign', 'MRI', 'ultrasound'],
      },
    },
    {
      id: 'breast-benign-011',
      front: {
        question: 'What is a solitary intraductal papilloma, what is its classic presentation, and what is its mammographic appearance?',
      },
      back: {
        answer: 'Benign intraductal tumor in the subareolar region (within 1 cm of nipple); classic presentation is bloody or serosanguineous nipple discharge from a single duct; mammogram often normal',
        explanation: 'Solitary papillomas are the most common cause of pathologic (bloody/serous/serosanguineous) nipple discharge and the most common intraductal mass lesion. They occur in women aged 30–50 in the large retroareolar ducts. On ultrasound, a papilloma appears as a hypoechoic mass within a dilated duct. Galactography shows a solitary filling defect. Management after biopsy is excision (due to ~5% malignant risk and upgrade rate).',
        keyFact: 'Papilloma: most common cause of bloody nipple discharge. Most common intraductal mass. Location: within 1 cm of nipple (subareolar). 5 classic high-risk lesions requiring excision after biopsy: Radial scar, ADH, ALH, LCIS, Papilloma.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/intraductal-papilloma-of-the-breast',
        tags: ['breast', 'ultrasound', 'papilloma', 'nipple discharge'],
      },
    },
    {
      id: 'breast-benign-012',
      front: {
        question: 'What is the difference between solitary and multiple intraductal papillomas in terms of location, presentation, and malignant risk?',
      },
      back: {
        answer: 'Solitary: central/subareolar, commonly causes bloody discharge, moderate malignant risk; Multiple: peripheral, bilateral, rarely cause discharge, higher malignant risk and more often associated with cancer',
        explanation: 'Multiple papillomas tend to occur in younger patients and are distributed peripherally in the terminal duct system. Unlike solitary papillomas, they rarely cause nipple discharge. Multiple papillomas confer a slightly higher risk of subsequent breast cancer than solitary papillomas. Both require excision after core biopsy.',
        keyFact: 'Solitary papilloma: central, subareolar, bloody discharge → most common cause of bloody discharge. Multiple papillomas: peripheral, no discharge, bilateral, higher cancer risk. Do NOT confuse "papillomatosis" (microscopic intraductal hyperplasia — pathology diagnosis only) with multiple papillomas.',
        tags: ['breast', 'papilloma', 'nipple discharge', 'benign'],
      },
    },
    {
      id: 'breast-benign-013',
      front: {
        question: 'What are clustered microcysts on breast ultrasound, and how should they be classified?',
      },
      back: {
        answer: 'Cluster of several adjacent 2–5 mm cystic spaces with thin (<0.5 mm) septae and no solid component or internal vascularity; BI-RADS 3',
        explanation: 'Clustered microcysts result from apocrine metaplasia or fibrocystic change. They can be BI-RADS 3 if well seen with no solid component and no associated internal vascularity. They may evolve into simple cysts over time. If any solid component or vascularity is present, BI-RADS 4 is appropriate.',
        keyFact: 'Clustered microcysts: 2–5 mm cysts, thin (<0.5 mm) septae, no solid component, no vascularity = BI-RADS 3. Solid component or vascularity → BI-RADS 4. May evolve into simple cysts.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/clustered-breast-microcysts',
        tags: ['breast', 'ultrasound', 'cyst', 'BI-RADS'],
      },
    },
    {
      id: 'breast-benign-014',
      front: {
        question: 'When can multiple bilateral circumscribed breast masses be safely classified as BI-RADS 2 on screening mammography?',
      },
      back: {
        answer: 'At least 3 circumscribed masses with at least one in each breast, none with suspicious features, none disproportionate in size/density/margins, none showing interval growth',
        explanation: 'Multiple bilateral circumscribed masses most commonly represent cysts or fibroadenomas. The interval cancer rate in this scenario is 0–0.14%, supporting a BI-RADS 2 assignment. However, if any mass has suspicious features (spiculated/indistinct margins), disproportionate size, or interval growth, further workup is required. The standard recommendation is not to ultrasound these unless one is palpable.',
        keyFact: 'Multiple bilateral circumscribed masses ≥3 (at least 1 per breast) + no suspicious features = BI-RADS 2. Unilateral multiple masses do NOT qualify for this rule. One suspicious/different mass among multiple bilateral masses → that mass gets worked up separately.',
        tags: ['breast', 'BI-RADS', 'mammography', 'benign'],
      },
    },
    {
      id: 'breast-benign-015',
      front: {
        question: 'What is Mondor disease of the breast and how is it managed?',
      },
      back: {
        answer: 'Thrombosis of a superficial chest wall vein presenting as a tender palpable cord; treated with NSAIDs and warm compresses (not anticoagulation)',
        explanation: 'Mondor disease is a superficial thrombophlebitis affecting the thoracoepigastric or lateral thoracic veins. It presents clinically as a linear palpable cord with tenderness. On ultrasound, a non-compressible thrombosed superficial vein is seen. It is benign and self-limiting. Anticoagulation is not indicated (unlike DVT).',
        keyFact: 'Mondor disease: thrombosed superficial breast vein → tender palpable cord. Treatment: NSAIDs + warm compresses. NO anticoagulation. On US: non-compressible thrombosed superficial vein.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mondors-disease',
        tags: ['breast', 'ultrasound', 'benign', 'Mondor'],
      },
    },
    {
      id: 'breast-benign-016',
      front: {
        question: 'What is a lactating adenoma, in what clinical setting does it occur, and does it require excision?',
      },
      back: {
        answer: 'A benign tumor of the pregnant or lactating breast presenting as a mobile, possibly tender mass; regresses after cessation of lactation — no excision required after biopsy',
        explanation: 'Lactating adenomas occur in the second/third trimester or postpartum period. On imaging, they appear as large circumscribed oval hypoechoic masses. They represent the most common breast mass in pregnancy. After core biopsy confirming lactating adenoma, the patient can be managed conservatively as these reliably regress after lactation ends.',
        keyFact: 'Lactating adenoma: pregnant/lactating woman, circumscribed oval mass, benign. No excision needed — regresses after lactation. Most common breast mass in pregnancy. Fibroadenoma can enlarge during pregnancy but does not regress.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/lactating-adenoma',
        tags: ['breast', 'ultrasound', 'benign', 'pregnancy', 'lactation'],
      },
    },
    {
      id: 'breast-benign-017',
      front: {
        question: 'What are the ACR Appropriateness Criteria for breast pain, and when is imaging indicated?',
      },
      back: {
        answer: 'Cyclical bilateral or unilateral pain at any age → no imaging appropriate. Non-cyclical pain in women <40 → ultrasound (score 5, "may be appropriate"). Women >40 with focal non-cyclical pain → mammography or US (score ~5–7)',
        explanation: 'Cyclical breast pain is almost always benign and is not an indication for imaging in any age group. Focal, non-cyclical pain may warrant evaluation, particularly in women over 40. The negative predictive value of combined mammography and ultrasound for focal breast pain is approximately 100% — when cancer is found, it is usually elsewhere in the breast (incidental).',
        keyFact: 'Cyclical pain = no imaging, regardless of age. Focal non-cyclical pain in women <40 = US may be appropriate. Cancer associated with breast pain is almost always found elsewhere (not at the site of pain). NPV of combined mammo + US for focal pain ≈ 100%.',
        tags: ['breast', 'ACR', 'appropriateness', 'pain'],
      },
    },
  ]},

  { id: 'breast-malignant',      label: 'Malignancy',               cards: [
    {
      id: 'breast-malignant-001',
      front: {
        question: 'What is the most common type of invasive breast cancer and what are its classic imaging features on mammography and ultrasound?',
      },
      back: {
        answer: 'Invasive ductal carcinoma NOS (70–80% of invasive breast cancers); mammography: irregular, high-density mass with spiculated margins ± pleomorphic calcifications; ultrasound: irregular, anti-parallel (taller-than-wide), hypoechoic mass with posterior shadowing and echogenic halo',
        explanation: 'IDC NOS presents as a hard, non-mobile, painless mass clinically. On imaging, the classic appearance is a high-density spiculated mass. The echogenic halo on ultrasound represents desmoplastic reaction. IDC can also present as calcifications alone, architectural distortion, or asymmetry. The combination of anti-parallel orientation, posterior shadowing, and echogenic halo on US is classic.',
        keyFact: 'IDC NOS: most common invasive breast CA (70–80%). Classic US: anti-parallel + posterior shadowing + echogenic halo. Classic mammo: high-density spiculated mass + pleomorphic calcs. IDC can present with virtually any imaging pattern — be suspicious of any new mass.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/invasive-ductal-carcinoma-of-the-breast',
        tags: ['breast', 'IDC', 'malignancy', 'mammography', 'ultrasound'],
      },
    },
    {
      id: 'breast-malignant-002',
      front: {
        question: 'What is invasive lobular carcinoma (ILC) and why is it difficult to diagnose? What are its characteristic imaging findings?',
      },
      back: {
        answer: 'ILC (5–10% of breast CA) spreads as single-file cells without desmoplastic reaction; mammography: "dark star" (architectural distortion without central mass), "shrinking breast"; ultrasound: ill-defined shadowing area without a discrete mass',
        explanation: 'ILC cells lack E-cadherin, causing them to infiltrate rather than coalesce into a mass. Without desmoplastic reaction, ILC causes minimal distortion and can be missed on multiple mammograms. The "shrinking breast" sign reflects decreased compressibility on MLO. ILC has a higher false-negative mammography rate (~21%) than IDC and is more often multifocal and bilateral (up to 1/3 bilateral). MRI is the most sensitive modality for ILC.',
        keyFact: 'ILC buzzwords: "dark star" (AD without central mass), "shrinking breast." Loss of E-cadherin = single-file infiltration = no desmoplastic reaction = missed on mammography (FN rate 21%). ILC: less common axillary mets, metastasizes to unusual sites (peritoneal surfaces, GI tract). MRI is superior for extent of disease.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/invasive-lobular-carcinoma-of-the-breast',
        tags: ['breast', 'ILC', 'malignancy', 'mammography', 'ultrasound'],
      },
    },
    {
      id: 'breast-malignant-003',
      front: {
        question: 'What is ductal carcinoma in situ (DCIS), how does it typically present on imaging, and what percentage of DCIS will have an invasive component on surgical excision?',
      },
      back: {
        answer: 'DCIS is carcinoma confined within the duct (Stage 0); presents as suspicious calcifications (most common), less often as NME on MRI, asymmetry, or mass; 25% of DCIS diagnosed on core biopsy has invasive component on surgical excision',
        explanation: 'DCIS accounts for ~20% of new breast cancer diagnoses and is most often detected as microcalcifications. Fine pleomorphic or fine linear branching calcifications in a segmental or linear distribution are the classic mammographic presentation. MRI typically shows segmental NME with clumped enhancement. Approximately 8% of DCIS presents as a mass without calcifications. Grade matters: high-grade DCIS (comedo type) is more aggressive.',
        keyFact: '10% of DCIS on imaging has invasive component at biopsy; 25% on core biopsy has invasion at surgical excision. 8% presents as mass (no calcs). MRI classic: segmental NME + clumped enhancement. Most common US appearance: microlobulated mildly hypoechoic mass with ductal extension.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ductal-carcinoma-in-situ',
        tags: ['breast', 'DCIS', 'malignancy', 'mammography', 'calcifications'],
      },
    },
    {
      id: 'breast-malignant-004',
      front: {
        question: 'What is tubular carcinoma, what is its key imaging feature, and with what other entity is it associated?',
      },
      back: {
        answer: 'Low-grade IDC subtype; small spiculated mass (often <1 cm), may be stable on multiple prior mammograms; associated with radial scar and tubular carcinoma in the contralateral breast (10–15%)',
        explanation: 'Tubular carcinoma accounts for <2% of invasive breast cancers and has a favorable prognosis. It often presents as a tiny spiculated mass that can remain stable for years, emphasizing that a malignant-appearing finding must be fully evaluated regardless of stability. Association with radial scar is important — both appear as architectural distortion or spiculated mass.',
        keyFact: 'Tubular carcinoma: small spiculated mass, slow growing (can be stable for years), favorable prognosis. Associated with radial scar. Contralateral breast cancer in 10–15%. KEY: stability does NOT exclude malignancy — a spiculated mass must be biopsied even if unchanged.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/tubular-carcinoma-of-the-breast',
        tags: ['breast', 'tubular carcinoma', 'malignancy', 'mammography'],
      },
    },
    {
      id: 'breast-malignant-005',
      front: {
        question: 'What are the imaging features of mucinous (colloid) carcinoma, and why can it mimic a benign lesion?',
      },
      back: {
        answer: 'Circumscribed round/oval mass; T2 hyperintense on MRI (due to mucin content); posterior acoustic enhancement on US; may mimic a fibroadenoma or cyst',
        explanation: 'Mucinous carcinoma accounts for ~2% of breast cancers and is more common in older women. The abundant extracellular mucin causes T2 hyperintensity and posterior acoustic enhancement — features usually associated with benign entities. This is the important exception to the rule that "T2 bright = benign" on MRI. Clinical context (age, new circumscribed mass in older woman) should raise suspicion.',
        keyFact: 'Mucinous carcinoma: T2 bright (mucin) + circumscribed = benign mimic! This is the key exception to "T2 bright = benign" on MRI (colloid/mucinous cancer and medullary-type can also be T2 bright). Posterior acoustic enhancement on US mimics a cyst. Most common in older women.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mucinous-carcinoma-of-the-breast',
        tags: ['breast', 'mucinous carcinoma', 'MRI', 'malignancy'],
      },
    },
    {
      id: 'breast-malignant-006',
      front: {
        question: 'What is medullary carcinoma of the breast, and what is its association with BRCA1?',
      },
      back: {
        answer: 'IDC subtype with well-circumscribed margins and triple-negative receptor status; approximately 25% are associated with BRCA1 mutations; more common in younger women and has favorable prognosis despite high grade',
        explanation: 'Medullary carcinoma presents as a circumscribed round or oval mass — another circumscribed mass that is malignant. Despite being triple-negative and high-grade, it has better prognosis than IDC NOS. Axillary nodes can be large even without metastases due to a reactive lymph node response. It is associated with the basal-like phenotype and BRCA1.',
        keyFact: 'Medullary carcinoma: circumscribed + triple-negative + young woman + BRCA1 association (~25%). Better prognosis than IDC NOS despite high grade. Axillary nodes can be bulky without containing tumor. Another "circumscribed mass = malignancy" trap on imaging.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/medullary-carcinoma-of-the-breast',
        tags: ['breast', 'medullary carcinoma', 'BRCA1', 'malignancy'],
      },
    },
    {
      id: 'breast-malignant-007',
      front: {
        question: 'What is inflammatory breast cancer (IBC), what is its clinical and imaging presentation, and what is the required workup to confirm the diagnosis?',
      },
      back: {
        answer: 'Rapid-onset (1–3 months) red, swollen, hot breast with peau d\'orange skin changes due to dermal lymphatic tumor emboli; mammography shows diffuse skin and trabecular thickening; diagnosis requires BOTH tissue biopsy AND clinical evidence of inflammatory disease',
        explanation: 'IBC is Stage T4d (not Stage 4) and is clinically staged based on skin/lymphatic involvement. It is often painless despite its dramatic appearance. IBC does not have a focal palpable mass in the classic presentation. Treatment is neoadjuvant chemotherapy first, then surgery (pre-op RT is used for local control). Approximately 30% have distant metastases at presentation. IDC is the most common underlying subtype.',
        keyFact: 'IBC diagnosis requires: (1) tissue biopsy + (2) clinical inflammatory signs. IBC does NOT resolve completely with antibiotics (may partially improve). IBC is T4 (not Stage IV unless mets present). Treatment: chemo FIRST, then surgery. "Peau d\'orange" + rapidly developing = think IBC before mastitis.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/inflammatory-breast-carcinoma',
        tags: ['breast', 'IBC', 'malignancy', 'mammography', 'staging'],
      },
    },
    {
      id: 'breast-malignant-008',
      front: {
        question: 'What is Paget disease of the nipple, and how does it differ from other causes of nipple skin changes?',
      },
      back: {
        answer: 'Intraepidermal carcinoma (DCIS) of the nipple epidermis, presenting with eczematoid nipple changes (erythema, scaling, ulceration); associated with underlying high-grade DCIS in ~96% of cases; Paget disease is NOT classified as T4',
        explanation: 'Paget disease presents with nipple-areolar complex changes that do not respond to topical therapy. It is associated with underlying high-grade DCIS and in 50% of cases a palpable mass is present. Wedge skin biopsy is needed for any nipple-areolar skin change that does not resolve with topical treatment. Normal nipple enhancement on contrast-enhanced MRI should NOT be mistaken for Paget disease.',
        keyFact: 'Paget disease: DCIS of nipple epidermis → eczematoid nipple changes. Associated with high-grade DCIS (96%). Paget is NOT T4 — skin involvement at the nipple-areola complex does NOT upstage to T4. Normal nipple enhancement on MRI ≠ Paget.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/paget-disease-of-the-breast',
        tags: ['breast', 'Paget disease', 'DCIS', 'malignancy', 'nipple'],
      },
    },
    {
      id: 'breast-malignant-009',
      front: {
        question: 'What are the T-stage criteria for breast cancer and what clinical scenarios define T4?',
      },
      back: {
        answer: 'T1: ≤2 cm; T2: 2–5 cm; T3: >5 cm; T4: any size with chest wall fixation, skin involvement, or inflammatory breast cancer (T4d)',
        explanation: 'Breast cancer staging is based on tumor size (T1–T3) and invasion for T4. T4 includes chest wall invasion (T4a), skin ulceration or satellite nodules (T4b), both (T4c), and inflammatory breast cancer (T4d). Paget disease of the nipple is specifically excluded from T4 classification. Axillary nodal status remains the most important predictor of overall survival.',
        keyFact: 'Breast cancer T-staging: T1 ≤2 cm, T2 2–5 cm, T3 >5 cm, T4 = chest wall/skin/IBC. Paget disease ≠ T4. Axillary node status = most important prognostic factor in breast cancer. Melanoma = most common tumor to metastasize to the breast.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-cancer-staging',
        tags: ['breast', 'staging', 'malignancy', 'T-stage'],
      },
    },
    {
      id: 'breast-malignant-010',
      front: {
        question: 'What are the contraindications to breast-conserving therapy (lumpectomy + radiation)?',
      },
      back: {
        answer: 'Inflammatory cancer, multicentric disease (multiple quadrants), large tumor-to-breast size ratio, prior ipsilateral breast radiation, and contraindication to radiation (e.g., collagen vascular disease)',
        explanation: 'Breast-conserving therapy (BCT) combines lumpectomy with radiation. Multicentric disease (tumors in different quadrants) is an absolute contraindication because adequate margins cannot be achieved. Multifocal disease (same quadrant, <4–5 cm apart) is a relative contraindication depending on tumor-to-breast size ratio. Positive margins after re-excision also lead to mastectomy.',
        keyFact: 'Contraindications for BCT: IMLPC — Inflammatory CA, Multicentric disease, Large CA relative to breast, Prior ipsilateral radiation, Collagen vascular disease (contraindication to radiation). Multifocal (same quadrant) may still qualify; multicentric (different quadrants) does not.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-conserving-surgery',
        tags: ['breast', 'staging', 'malignancy', 'surgery'],
      },
    },
    {
      id: 'breast-malignant-011',
      front: {
        question: 'What is the difference between multifocal and multicentric breast cancer, and why does it matter for surgical management?',
      },
      back: {
        answer: 'Multifocal: multiple primaries in the same quadrant (<4–5 cm apart); Multicentric: multiple primaries in different quadrants; multicentric is a contraindication to breast conservation',
        explanation: 'Multifocal cancers likely arise from the same duct system and may be amenable to lumpectomy depending on breast size. Multicentric cancers involve multiple separate duct systems and generally require mastectomy. Synchronous bilateral breast cancer occurs in 2–3% of women on mammography and up to 6% with MRI, with higher rates in ILC and multicentric disease.',
        keyFact: 'Multifocal = same quadrant (same duct system); Multicentric = different quadrants. Multicentric = contraindication to BCT. ILC is more often multifocal and bilateral than IDC. Synchronous bilateral BC: 2–3% on mammography, 3–6% by MRI.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/multifocal-and-multicentric-breast-cancer',
        tags: ['breast', 'malignancy', 'staging', 'surgery'],
      },
    },
    {
      id: 'breast-malignant-012',
      front: {
        question: 'What is triple-negative breast cancer, and what are its key imaging features that can be misleading?',
      },
      back: {
        answer: 'ER, PR, and HER2/neu negative breast cancer; may appear as a circumscribed, oval, or round mass on mammography and a complex cystic and solid mass on ultrasound — mimicking a benign lesion despite aggressive biology',
        explanation: 'Triple-negative breast cancers are biologically aggressive (poor prognosis) but can have deceptively "benign" imaging features: circumscribed margins, round or oval shape, and posterior acoustic enhancement. They account for the majority of breast cancers in BRCA1 mutation carriers. Despite favorable response to neoadjuvant chemotherapy, overall prognosis remains poor.',
        keyFact: 'Triple-negative BC: circumscribed, round/oval, complex cystic = benign mimic despite aggressive biology. BRCA1 mutation carriers predominantly develop triple-negative BC. Paradox: may respond well to neoadjuvant chemo but still poor prognosis. Associated with medullary and basal-like histotypes.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/triple-negative-breast-cancer',
        tags: ['breast', 'triple-negative', 'BRCA1', 'malignancy'],
      },
    },
    {
      id: 'breast-malignant-013',
      front: {
        question: 'What are the sonographic features suspicious for axillary lymph node metastasis, and what threshold cortical thickness suggests biopsy?',
      },
      back: {
        answer: 'Round shape, thickened cortex >3 mm (some say >2.3 mm), eccentric cortical thickening, focal cortical bulge, hilar indentation/obliteration; these features indicate biopsy',
        explanation: 'Axillary node status is the most important prognostic factor in breast cancer. Loss of the central fatty hilum is the most specific sonographic sign of metastasis. FNA is acceptable if known breast cancer is present; core biopsy is preferred for unknown primaries. Bilateral axillary adenopathy suggests systemic disease (lymphoma, leukemia, metastatic disease, collagen vascular disease).',
        keyFact: 'Malignant axillary node: cortex >3 mm, loss of fatty hilum (most specific), eccentric or focal cortical bulge. Unilateral = suspect ipsilateral breast CA. Bilateral = systemic disease (lymphoma, collagen vascular disease). FNA = OK if known breast CA; core biopsy = preferred for unknown primary.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/lymph-node-metastases-in-breast-cancer',
        tags: ['breast', 'lymph nodes', 'ultrasound', 'staging'],
      },
    },
    {
      id: 'breast-malignant-014',
      front: {
        question: 'What are the high-risk breast lesions that require surgical excision after core needle biopsy, and why?',
      },
      back: {
        answer: 'ADH, ALH, LCIS, radial scar, and papilloma; excision is required because of significant upstage rates (finding invasive cancer or DCIS at surgical excision)',
        explanation: 'These five "high-risk" lesions are managed with surgical excision due to their upgrade rates. ADH upstages to DCIS or IDC in up to 20% of cases. Papilloma has a 5% malignant risk. Radial scar is associated with DCIS or IDC in 10–30% of cases. LCIS and ALH increase lifetime breast cancer risk (LCIS: 11× general population; ALH: 4–6×). All require excision after core biopsy.',
        keyFact: 'Five high-risk lesions (all require excision): Radial Scar, ADH, ALH, LCIS, Papilloma. ADH: highest upgrade rate (~20%), considered "DCIS-lite" (same pathology, just <2 ducts involved). LCIS: 11× lifetime risk. ALH: 4–6× lifetime risk. Radial scar: associated with tubular carcinoma.',
        tags: ['breast', 'high-risk lesions', 'ADH', 'LCIS', 'biopsy'],
      },
    },
    {
      id: 'breast-malignant-015',
      front: {
        question: 'What is a radial scar (complex sclerosing lesion) and how can it be differentiated from malignancy on imaging?',
      },
      back: {
        answer: 'Benign proliferative lesion with stellate architecture mimicking cancer; on mammography may show architectural distortion or spiculated mass, often with central lucency; biopsy is always required — imaging cannot reliably differentiate it from IDC',
        explanation: 'Despite the name, a radial scar has nothing to do with a post-surgical or post-traumatic scar. It represents central fibroelastosis with radiating ducts and lobules. The classic appearance of central lucency surrounded by radiating lines is not reliable enough to diagnose radial scar without biopsy. Radial scars are associated with DCIS, IDC, and tubular carcinoma in 10–30% of cases.',
        keyFact: 'Radial scar: benign but MUST biopsy — looks identical to IDC on imaging (spiculated mass or AD). Associated with DCIS/IDC in 10–30% and tubular carcinoma. Central lucency is the classic but unreliable sign. AD without known surgical scar history → always biopsy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/radial-scar-of-the-breast',
        tags: ['breast', 'radial scar', 'mammography', 'high-risk', 'architectural distortion'],
      },
    },
    {
      id: 'breast-malignant-016',
      front: {
        question: 'What is the role of MRI in the workup of a patient with newly diagnosed breast cancer?',
      },
      back: {
        answer: 'Extent of disease evaluation (contralateral breast screening), detection of additional ipsilateral foci/multifocality, evaluation of axillary nodes, detection of occult primary with known axillary metastases, and assessment of implants',
        explanation: 'Breast MRI detects additional ipsilateral foci in 10–16% of patients and finds contralateral cancer in 3–5% not seen on mammography (vs 0.1–2% by mammography). It is essential when the extent of disease is uncertain, when MRI-guided biopsy is needed, or for evaluating neoadjuvant treatment response. The absence of MRI enhancement does not replace biopsy if a mammographic finding warrants it.',
        keyFact: 'MRI for newly diagnosed breast CA: finds additional ipsilateral foci in ~10–16%, contralateral CA in 3–5%. MRI also used for: unknown primary with axillary mets (best modality), neoadjuvant chemo response, suspected silicone implant rupture, and high-risk screening (>20% lifetime risk).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-mri',
        tags: ['breast', 'MRI', 'staging', 'extent of disease'],
      },
    },
    {
      id: 'breast-malignant-017',
      front: {
        question: 'What is the classic mammographic appearance of architectural distortion (AD), how is it differentiated from summation artifact, and what diagnoses must be considered?',
      },
      back: {
        answer: 'Radiating lines converging to a central point without a visible mass; summation artifact has lines that do not radiate to a central point; DDx: ILC, IDC, radial scar, post-surgical scar',
        explanation: 'Architectural distortion is suspicious for malignancy until proven otherwise — it must never be assigned BI-RADS 3. The key differentiating feature from summation is that AD lines all radiate toward a focal point, while summation lines pass through each other. AD + calcifications = IDC + DCIS. AD without calcifications = most likely ILC. Surgical scars should become less dense over time; any increasing density needs workup.',
        keyFact: 'AD = radiating lines to a central point (vs summation = lines continue past each other). AD rules: (1) Never BI-RADS 3; (2) Always biopsy even without US/MRI correlate; (3) AD + calcs = IDC+DCIS; (4) AD without calcs = think ILC; (5) Surgical scars should DECREASE in density over time.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/architectural-distortion-of-the-breast',
        tags: ['breast', 'mammography', 'architectural distortion', 'ILC'],
      },
    },
    {
      id: 'breast-malignant-018',
      front: {
        question: 'What is secondary angiosarcoma of the breast, what is its typical clinical presentation, and when does it occur?',
      },
      back: {
        answer: 'Rare vascular malignancy developing approximately 6 years after breast conservation therapy + radiation; presents as red skin plaques or nodules — confused with post-radiation skin thickening',
        explanation: 'Secondary angiosarcoma is a late complication of breast irradiation and is distinguished from primary angiosarcoma (which is extremely rare). The challenge is that post-radiation skin thickening is expected and common — angiosarcoma presents as skin reddening or nodules superimposed on this background. Increasing skin thickening or new skin lesions at the radiation site years later should prompt biopsy.',
        keyFact: 'Secondary angiosarcoma: ~6 years post-radiation for breast CA. Classic presentation: red skin plaques/nodules at radiation site. Confusion with post-RT skin thickening is the diagnostic trap. New/increasing skin thickening post-RT → consider angiosarcoma and biopsy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-angiosarcoma',
        tags: ['breast', 'angiosarcoma', 'malignancy', 'post-radiation'],
      },
    },
    {
      id: 'breast-malignant-019',
      front: {
        question: 'What is the most common tumor to metastasize to the breast, and what is the typical imaging appearance of breast metastases?',
      },
      back: {
        answer: 'Melanoma is the most common extramammary tumor to metastasize to the breast; also renal cell carcinoma; metastases typically appear as circumscribed round masses (hematogenous)',
        explanation: 'Breast metastases from extramammary primaries are rare. They typically present as circumscribed round or oval masses, often multiple, without associated calcifications. The circumscribed appearance can be misleading. A solitary metastasis is more common than multiple. Melanoma and RCC are the most common primaries. Lymphoma can also secondarily involve the breast.',
        keyFact: 'Most common met to breast: melanoma. Others: RCC, lymphoma. Appearance: circumscribed round mass = benign mimic (hematogenous mets don\'t cause desmoplastic reaction). Multiple masses in a non-ductal distribution in a patient with known cancer → think mets.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-metastasis',
        tags: ['breast', 'metastasis', 'melanoma', 'malignancy'],
      },
    },
    {
      id: 'breast-malignant-020',
      front: {
        question: 'What is primary breast lymphoma and what are its key imaging features?',
      },
      back: {
        answer: 'Rare; almost always Non-Hodgkin lymphoma (diffuse large B-cell); solitary hyperdense mass on mammography, cystic on ultrasound; IHC staining required for confirmation',
        explanation: 'Primary breast lymphoma is less common than secondary lymphoma (which more often presents as inflammatory thickening without a mass). Primary lymphoma tends to be a solitary, larger, palpable mass and appears cystic on ultrasound despite being lymphomatous tissue. Secondary lymphoma from systemic disease is the most common secondary malignancy or metastasis involving the breast.',
        keyFact: 'Primary breast lymphoma: rare, NHL (diffuse large B-cell), hyperdense solitary mass on mammo, cystic on US. Secondary lymphoma: more common, presents as inflammatory thickening without discrete mass. IHC staining confirms lymphoma. Axillary nodes alone do NOT = lymphoma (anything can cause adenopathy).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/primary-breast-lymphoma',
        tags: ['breast', 'lymphoma', 'malignancy', 'mammography'],
      },
    },
  ]},

  { id: 'breast-calcifications', label: 'Calcifications',           cards: [
    {
      id: 'breast-calcs-001',
      front: {
        question: 'What are the BI-RADS typically benign calcification morphologies?',
      },
      back: {
        answer: 'Skin, vascular, coarse/popcorn-like, large rod-like (secretory), round, punctate, rim (eggshell), dystrophic, milk of calcium, suture calcifications',
        explanation: 'These morphologies are BI-RADS 2 when clearly identified. Skin calcifications may require a tangential view for confirmation. Vascular calcifications are parallel linear "tram-track" deposits. Popcorn calcifications represent hyalinizing fibroadenoma. Large rod-like (secretory) calcifications follow ducts toward the nipple in postmenopausal women. Milk of calcium requires a true lateral view to confirm layering.',
        keyFact: 'Benign calc morphologies: SVCP-RRDMs — Skin, Vascular, Coarse/Popcorn, Punctate/Round, Rod-like (secretory), Rim/eggshell, Dystrophic, Milk of calcium, Suture. Any of these in a suspicious distribution (segmental, linear) may still require workup based on distribution.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-calcifications',
        tags: ['breast', 'calcifications', 'BI-RADS', 'mammography'],
      },
    },
    {
      id: 'breast-calcs-002',
      front: {
        question: 'What are the three suspicious calcification morphologies in the BI-RADS lexicon and which has the highest likelihood of malignancy?',
      },
      back: {
        answer: 'Amorphous (PPV ~20%), coarse heterogeneous (intermediate suspicion), fine pleomorphic (high suspicion), fine linear/fine linear branching (highest suspicion)',
        explanation: 'Fine linear branching calcifications mimic ductal proliferation of DCIS and have the highest likelihood of malignancy. Fine pleomorphic calcifications are highly suspicious (vary in shape and size — "dot-dash" appearance). Coarse heterogeneous calcifications are countable with dull tips (>0.5 mm). Amorphous calcifications appear like powdered sugar. All suspicious morphologies require tissue biopsy.',
        keyFact: 'Highest to lowest malignancy risk: fine linear branching > fine pleomorphic > coarse heterogeneous > amorphous. If answer choices include "fine linear branching," choose it. If not, choose "fine pleomorphic" over other types. DDx for amorphous calcs: fibrocystic change, sclerosing adenosis, DCIS (low grade).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-microcalcifications',
        tags: ['breast', 'calcifications', 'BI-RADS', 'DCIS', 'mammography'],
      },
    },
    {
      id: 'breast-calcs-003',
      front: {
        question: 'What is milk of calcium and what is its pathognomonic mammographic appearance?',
      },
      back: {
        answer: 'Free-floating calcium sediment in benign cysts; on CC view appears as fuzzy/amorphous powdery deposits; on true lateral view it layers into a tea-cup (crescent) shape — this change in morphology between views is pathognomonic',
        explanation: 'Milk of calcium forms when calcium precipitates in the dependent portion of small benign cysts (fibrocystic change). The CC view shows indistinct, round, or amorphous deposits. The true lateral (ML) view is essential — calcium settles and creates a curvilinear crescent or "tea-cup" appearance at the bottom of cysts. If biopsied, milk of calcium requires polarized light for visualization.',
        keyFact: 'Milk of calcium: amorphous on CC → tea-cup crescent on true lateral (ML). This change in appearance between views is diagnostic. Cause: fluid-fluid level in a lobule (fibrocystic change). Biopsy trick: needs polarized light to see — "no calcifications on the biopsy" is a known pitfall.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/milk-of-calcium-breast',
        tags: ['breast', 'calcifications', 'milk of calcium', 'mammography', 'benign'],
      },
    },
    {
      id: 'breast-calcs-004',
      front: {
        question: 'What is the significance of calcification distribution in assessing malignancy risk, and which distributions are most suspicious?',
      },
      back: {
        answer: 'Linear and segmental distributions are most suspicious (suggest ductal involvement); grouped/clustered is intermediate; regional and diffuse are usually benign',
        explanation: 'Distribution modifies the suspicion implied by calcification morphology. Since most breast cancers originate in a single duct system, linear and segmental distributions suggest calcium within the ducts. Grouped calcifications (≥5 calcifications within 1 cm) increase suspicion compared to scattered deposits. Even typically benign morphologies (round) in a linear/segmental distribution warrant further evaluation.',
        keyFact: 'Most to least suspicious distribution: segmental > linear > grouped > regional > diffuse. Key rule: even benign morphology (e.g., round calcs) in a segmental distribution may be suspicious. Even suspicious morphology (fine pleomorphic) in a diffuse bilateral distribution may be BI-RADS 3 on baseline.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/calcification-distribution-breast',
        tags: ['breast', 'calcifications', 'distribution', 'mammography', 'BI-RADS'],
      },
    },
    {
      id: 'breast-calcs-005',
      front: {
        question: 'What are secretory (large rod-like) calcifications, in what clinical setting are they seen, and why should they not be confused with suspicious calcifications?',
      },
      back: {
        answer: 'Large, rod-like (>0.5 mm), often bilateral, duct-oriented calcifications pointing toward the nipple due to plasma cell mastitis/secretory disease; seen in postmenopausal women (10–20 years post-menopause); benign (BI-RADS 2)',
        explanation: 'Large rod-like (secretory) calcifications are caused by benign inflammatory secretory disease and occur as involuted ducts calcify. Classic description: "cigar-shaped with a lucent center," "dashes but no dots." They follow ducts toward the nipple (like DCIS) but are much larger and bilateral. They are BI-RADS 2. Do not call these in premenopausal women.',
        keyFact: 'Secretory calcs buzzwords: "cigar-shaped with lucent center," "dashes but no dots," bilateral, pointing toward nipple, postmenopausal (10–20 years after). They follow ductal distribution like DCIS but are much larger. KEY: do NOT confuse with fine linear branching calcifications of DCIS.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/secretory-calcifications-breast',
        tags: ['breast', 'calcifications', 'secretory', 'mammography', 'benign'],
      },
    },
    {
      id: 'breast-calcs-006',
      front: {
        question: 'When should ultrasound be used in the evaluation of breast calcifications?',
      },
      back: {
        answer: 'Ultrasound is NOT typically used to evaluate pure calcification findings; exceptions: (1) mass associated with calcifications, (2) palpable finding in the area of calcifications',
        explanation: 'Ultrasound cannot reliably characterize microcalcifications — they are too small and below the resolution of most ultrasound equipment. The standard workup for suspicious calcifications is spot-compression magnification mammography followed by stereotactic biopsy if warranted. Ultrasound is added when there is an associated palpable mass or if a mass is seen on mammography, as it may help determine the extent of disease.',
        keyFact: 'Calcs-only finding → NO ultrasound (does not add value for pure calcs). Exception: (1) calcifications associated with a mass → US for extent of disease; (2) palpable finding in the area → all palpable females need US. Biopsy method for calcs: stereotactic (NOT ultrasound-guided, since calcs usually not visible on US).',
        tags: ['breast', 'calcifications', 'ultrasound', 'technique'],
      },
    },
    {
      id: 'breast-calcs-007',
      front: {
        question: 'What is the mammographic appearance of dermal calcifications and how are they confirmed?',
      },
      back: {
        answer: 'Lucent-centered punctate calcifications in skin folds, axillae, or cleavage; "tattoo sign" — stay in same position on CC and MLO; confirmed by tangential view placing BB over the lesion',
        explanation: 'Dermal calcifications are associated with sweat glands and concentrate in areas of apocrine gland density: skin folds, axilla, and the medial inferior breast. They can mimic grouped parenchymal calcifications. The key feature is that they maintain the same position relative to the skin on both CC and MLO views. A tangential view with a BB over the suspected area will show the calcifications within the dermis.',
        keyFact: 'Dermal calcs: "tattoo sign" = same position on CC and MLO. Lucent-centered. Locations: folds, axilla, cleavage (= high sweat gland density). Confirmation: tangential view. Grouped pattern may mimic parenchymal calcs — tangential view is the next best step to confirm dermal origin.',
        tags: ['breast', 'calcifications', 'skin', 'mammography', 'benign'],
      },
    },
    {
      id: 'breast-calcs-008',
      front: {
        question: 'What mammographic technique is used to biopsy calcifications, and what are the technical limitations of stereotactic biopsy?',
      },
      back: {
        answer: 'Stereotactic (mammographic) biopsy using vacuum-assisted device; limitation: breast must compress to ≥2–3 cm (some say ≥28 mm) — if <20 mm, perform wire localization for surgical excision',
        explanation: 'Stereotactic biopsy uses X-ray triangulation to target calcifications in three-dimensional space. Vacuum-assisted devices (10–11 gauge = 12 samples; 7–9 gauge = 4 samples) are used. The breast is imaged in compression. A biopsy marker clip should be placed after sampling. Specimen radiograph confirms calcification retrieval. Negative stroke margin (breast compresses too thin) prevents safe biopsy.',
        keyFact: 'Stereotactic biopsy: minimum breast thickness in compression ≥2–3 cm (28 mm). If breast compresses <20 mm → wire localization + surgical excision. ALWAYS specimen radiograph after stereotactic biopsy to confirm calcification retrieval. QC localization test must be performed DAILY before patient exams.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/stereotactic-breast-biopsy',
        tags: ['breast', 'intervention', 'stereotactic biopsy', 'calcifications'],
      },
    },
    {
      id: 'breast-calcs-009',
      front: {
        question: 'What is the differential diagnosis for amorphous calcifications and coarse heterogeneous calcifications?',
      },
      back: {
        answer: 'Amorphous: fibrocystic change (most common), sclerosing adenosis, columnar cell change, low-grade DCIS. Coarse heterogeneous: fibroadenoma, papilloma, fibrocystic change, low-intermediate grade DCIS',
        explanation: 'Amorphous calcifications have a PPV of approximately 20% for malignancy and require biopsy in grouped, linear, or segmental distributions. Coarse heterogeneous calcifications may represent evolving dystrophic calcifications (in fibroadenoma or fat necrosis) or early calcifications of DCIS. Distribution and comparison to prior studies are key for both morphologies.',
        keyFact: 'Amorphous calcs DDx: fibrocystic (most common) > sclerosing adenosis > DCIS low-grade. PPV ~20%. Coarse heterogeneous DDx: fibroadenoma, papilloma, fibrocystic change, DCIS low-intermediate grade. Both = BI-RADS 4, biopsy required in suspicious distribution.',
        tags: ['breast', 'calcifications', 'DDx', 'mammography', 'DCIS'],
      },
    },
    {
      id: 'breast-calcs-010',
      front: {
        question: 'What is flat epithelial atypia (FEA) and what does it typically present as on imaging?',
      },
      back: {
        answer: 'Low-grade atypia of breast acini representing an early step in the ductal carcinogenesis pathway; presents as grouped amorphous or punctate calcifications; found in 3–5% of core needle biopsies',
        explanation: 'FEA represents the earliest recognizable atypical change in the columnar cells lining the TDLUs. It sits between normal epithelium and ADH in the progression to DCIS and IDC. On imaging, it most commonly presents as amorphous or punctate calcifications. FEA increases breast cancer risk approximately 3× the general population. Management after biopsy varies by institution (excision vs surveillance).',
        keyFact: 'FEA: lowest step in ductal carcinogenesis (Normal → FEA → ADH → DCIS → IDC). Found in 3–5% of core biopsies. Presents as amorphous or punctate calcs. Risk: ~3× general population (less than ADH at 4–5×). Found in 3–5% of biopsies.',
        tags: ['breast', 'FEA', 'calcifications', 'high-risk', 'mammography'],
      },
    },
  ]},

  { id: 'breast-intervention',   label: 'Intervention & Staging',   cards: [
    {
      id: 'breast-int-001',
      front: {
        question: 'What are the indications for breast MRI screening, and what lifetime risk threshold qualifies for annual MRI?',
      },
      back: {
        answer: 'Annual MRI screening for lifetime risk >20–25%, BRCA1/BRCA2 mutation carriers, untested first-degree relatives of BRCA carriers, prior mantle/chest radiation with ≥20 Gy at age ≤30',
        explanation: 'Breast MRI is complementary to (not a replacement for) mammography in high-risk screening. MRI screening should begin at age 25–30 or 10 years before the age of the earliest affected first-degree relative. For prior chest radiation, screening begins 8 years after radiation but not before age 25. Average-risk women (lifetime risk <15%) should NOT have breast MRI screening.',
        keyFact: 'MRI screening threshold: lifetime risk >20–25%. Start at age 25–30 or 10 years before youngest affected relative (whichever is earlier). Prior chest radiation ≥20 Gy: start MRI at age 25 or 8 years post-radiation (whichever is LATER). Average risk (<15%): MRI is NOT appropriate (ACR score 3).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-mri-screening',
        tags: ['breast', 'MRI', 'screening', 'high-risk'],
      },
    },
    {
      id: 'breast-int-002',
      front: {
        question: 'Which risk model should be used to calculate lifetime breast cancer risk for determining MRI screening eligibility, and which model should NOT be used?',
      },
      back: {
        answer: 'Use family-history-based models (Tyrer-Cuzick is most comprehensive; Claus, BOADICEA, BRCApro also acceptable); do NOT use the Gail model — it does not include family history beyond first-degree relatives',
        explanation: 'MRI screening eligibility is based on lifetime risk >20–25% calculated by validated models that include family history. The Gail model, while the oldest validated model, uses only limited family history and does not include genetics — it is inappropriate for determining MRI screening eligibility. Tyrer-Cuzick is considered the most comprehensive model but notably does not include breast density.',
        keyFact: 'For MRI screening eligibility: use ANY model that incorporates FAMILY HISTORY. Do NOT use Gail model (too old, no genetics, limited family history). Tyrer-Cuzick = most comprehensive. Gail model = only validated in African Americans for its original purpose. All current models underestimate lifetime risk.',
        tags: ['breast', 'risk assessment', 'MRI', 'screening'],
      },
    },
    {
      id: 'breast-int-003',
      front: {
        question: 'What is the BRCA1 vs BRCA2 distinction for breast cancer risk, and which chromosome does each map to?',
      },
      back: {
        answer: 'BRCA1: chromosome 17, more common in women, associated with triple-negative/basal-like breast CA and ovarian CA; BRCA2: chromosome 13, higher breast cancer risk in male carriers than BRCA1, associated with ER+ cancers',
        explanation: 'BRCA1 is more common than BRCA2 in women and carries up to 72% lifetime risk of breast cancer and 44% for ovarian cancer. BRCA2 carries ~69% lifetime risk for breast cancer and 17% for ovarian cancer. Importantly, BRCA2 male carriers have a higher breast cancer risk than BRCA1 male carriers. Both genes also increase risk of GI cancers, fallopian tube cancer, and pancreatic cancer.',
        keyFact: 'BRCA1: chromosome 17, more common in women, triple-negative BC, 72% lifetime breast CA risk, 44% ovarian CA. BRCA2: chromosome 13, higher male breast CA risk than BRCA1, 69% lifetime breast CA risk. Men with BRCA2 = higher breast CA risk than men with BRCA1.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/brca1-and-brca2',
        tags: ['breast', 'BRCA', 'genetics', 'risk', 'screening'],
      },
    },
    {
      id: 'breast-int-004',
      front: {
        question: 'What are the breast cancer risk associations for Cowden syndrome, Li-Fraumeni syndrome, and hereditary diffuse gastric cancer syndrome?',
      },
      back: {
        answer: 'Cowden (PTEN): breast CA + follicular thyroid CA + endometrial CA + Lhermitte-Duclos disease (cerebellar hamartoma). Li-Fraumeni (TP53): breast CA in 30s–40s + multiple malignancies (no specific type). Hereditary diffuse gastric cancer (CDH1): lobular breast CA (~40%) + diffuse gastric CA (~70%)',
        explanation: 'These hereditary syndromes are high-yield for exams. Cowden syndrome causes hamartomas in multiple organs with hallmark Lhermitte-Duclos (dysplastic gangliocytoma of cerebellum) and facial mucocutaneous lesions. Li-Fraumeni (defective p53) causes cancers across many organ systems. CDH1 mutations (E-cadherin gene) explain the lobular subtype association in hereditary diffuse gastric cancer.',
        keyFact: 'Cowden syndrome: PTEN mutation → Breast + Thyroid (follicular) + Endometrial + Lhermitte-Duclos. Li-Fraumeni: TP53 → cancers everywhere, early onset. CDH1: E-cadherin → lobular breast CA + diffuse gastric CA → prophylactic gastrectomy recommended.',
        tags: ['breast', 'genetics', 'Cowden syndrome', 'Li-Fraumeni', 'risk'],
      },
    },
    {
      id: 'breast-int-005',
      front: {
        question: 'What is the ACR Appropriateness Criteria workup for a symptomatic palpable breast mass in women of different age groups?',
      },
      back: {
        answer: 'Women <30: ultrasound first (score 9); Women 30–39: both US and mammography (score 8 each); Women ≥40: mammography first (score 9), then ultrasound if mammo suspicious or negative (score 9)',
        explanation: 'In women under 30, mammography is avoided as first-line due to dense breast tissue and radiation concerns. For women 30–39, either modality is appropriate. For women 40 and older, diagnostic mammography is the first-line modality. All palpable findings should eventually have ultrasound evaluation (per the rule that no female with a palpable finding leaves without ultrasound), but the initial modality varies by age.',
        keyFact: 'Palpable mass: <30 years = US first (score 9). 30–39 = US and mammo (both score 8). ≥40 = mammo first (score 9), then US. Rule: ALL palpable findings in females require ultrasound eventually, but the FIRST test is age-dependent. Exception: fat-containing lesion = definitively BI-RADS 2 on mammo → no US needed.',
        tags: ['breast', 'ACR', 'appropriateness', 'palpable', 'ultrasound'],
      },
    },
    {
      id: 'breast-int-006',
      front: {
        question: 'What is the technique for ultrasound-guided breast core biopsy, and what is the recommended needle gauge?',
      },
      back: {
        answer: '14-gauge spring-loaded device for masses; needle parallel to chest wall; place lesion on far side of US screen; biopsy deeper portion first; 4–5 passes typically performed',
        explanation: 'The needle must be kept parallel to the chest wall to avoid pneumothorax. Anesthetic should be placed up to but not into the lesion (especially for small lesions). For multiple lesions, biopsy the smaller one first. For mixed cystic and solid lesions, target the solid component. The lesion should be on the far side of the screen to maximize visualization of the needle length.',
        keyFact: 'US-guided biopsy: 14-gauge, needle PARALLEL to chest wall (pneumothorax prevention). Lesion on FAR side of screen. Biopsy deeper portion FIRST. Two lesions: biopsy smaller one first (bleeding from larger may obscure smaller). Air injection → can\'t see lesion → reschedule, never biopsy blind.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/ultrasound-guided-breast-biopsy',
        tags: ['breast', 'intervention', 'biopsy', 'ultrasound'],
      },
    },
    {
      id: 'breast-int-007',
      front: {
        question: 'What are the steps in cyst aspiration for a suspicious hypoechoic mass, and what action follows based on the aspirate?',
      },
      back: {
        answer: 'Aspirate → (1) Non-bloody fluid + lesion disappears → discard, no cytology; (2) Bloody fluid + lesion disappears → cytology + clip; (3) Purulent fluid → culture and sensitivity; (4) Lesion does NOT disappear → core biopsy of residual solid mass',
        explanation: 'Cyst aspiration is indicated for anxiety, pain, or diagnostic uncertainty — NOT size alone. Cysts recur ~70% of the time (15% if air is injected post-aspiration). Non-bloody fluid that resolves the lesion is benign and no cytology is needed. Bloody fluid or a non-resolving lesion requires further investigation. Purulent fluid is sent for microbiology, not cytology.',
        keyFact: 'Cyst aspiration decision tree: non-bloody + disappears = discard. Bloody + disappears = cytology + clip. Pus = microbiology. Lesion remains = core biopsy solid component. Size is NOT an indication for cyst aspiration. Indications: pain, anxiety, diagnostic uncertainty.',
        tags: ['breast', 'intervention', 'cyst aspiration', 'ultrasound'],
      },
    },
    {
      id: 'breast-int-008',
      front: {
        question: 'What is galactography (ductography) and what are its indications, contraindications, and findings for benign vs malignant causes of nipple discharge?',
      },
      back: {
        answer: 'Contrast injection into the discharging duct via 27–30 gauge blunt needle; indication: spontaneous serous/bloody discharge from single duct; papilloma → solitary filling defect + duct dilation; DCIS → multiple intraductal filling defects; contraindications: active infection, inability to express discharge, contrast allergy, prior nipple-areola surgery',
        explanation: 'Galactography is performed when the source duct can be cannulated. A solitary filling defect with duct dilation is classic for papilloma. Multiple filling defects in a dilated duct system raise concern for DCIS or multiple papillomas. Ductal ectasia shows smooth dilation without filling defects. MRI or contrast-enhanced MRI is an alternative when galactography cannot be performed.',
        keyFact: 'Galactography: 27–30 gauge blunt needle, 0.2–0.3 cc contrast, then magnification CC and ML views. Solitary filling defect = papilloma. Multiple filling defects = DCIS or multiple papillomas. Contraindication: active infection. Discharge amount: just enough to see the opening.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/galactography',
        tags: ['breast', 'intervention', 'galactography', 'nipple discharge'],
      },
    },
    {
      id: 'breast-int-009',
      front: {
        question: 'What are the causes of nipple discharge, and what features make it most suspicious for malignancy?',
      },
      back: {
        answer: 'Most suspicious: spontaneous + bloody or serous + from a SINGLE duct. Benign: multi-duct, bilateral, milky, green/yellow. Malignant causes: papilloma (90%) and DCIS (10%)',
        explanation: 'Pathologic discharge is unilateral, spontaneous, from a single duct, and bloody, serous, or serosanguineous. The risk of malignancy increases directly with age (uncommon <40, more common >60). Milky (galactorrhea) discharge is not suspicious for cancer and may indicate a prolactinoma, thyroid disorder, or dopamine-antagonist medications. Ductal ectasia is the most common benign cause of discharge in postmenopausal women.',
        keyFact: 'Suspicious discharge: SINGLE duct + SPONTANEOUS + BLOODY/serous. Most common malignant cause: intraductal papilloma (90%), DCIS (10%). Milky discharge = prolactinoma, thyroid disease, dopamine antagonists (not cancer). Post-menopausal single-duct discharge: ductal ectasia (benign) vs DCIS.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/nipple-discharge',
        tags: ['breast', 'nipple discharge', 'papilloma', 'DCIS'],
      },
    },
    {
      id: 'breast-int-010',
      front: {
        question: 'What post-treatment imaging findings are expected after breast-conserving therapy (lumpectomy + radiation), and when should progressive changes raise concern for recurrence?',
      },
      back: {
        answer: 'Expected: skin and trabecular thickening (peaks on first post-RT mammogram), fat necrosis/oil cysts, scar (should decrease in density over time); Concern: any new/increasing density or mass in the scar, new calcifications appearing ~4 years post-treatment (vs benign calcs at ~2 years)',
        explanation: 'The first post-operative mammogram (6–12 months post-surgery) shows maximal scarring and distortion — subsequent studies should show progressive improvement. Residual calcifications near the lumpectomy bed correlate with 60% local recurrence rate. Local recurrence occurs in 6–8% of patients after BCT. Recurrence peaks at 4 years (1–7 year range); early (<3 years) recurrence is in the original tumor bed, later recurrence may be in a different location.',
        keyFact: 'Post-BCT rule: distortion/scar should DECREASE over time. New/increasing density = recurrence until proven otherwise. Benign post-RT calcs appear ~2 years; cancer calcs ~4 years. Local recurrence rate: 6–8% with radiation; 35% without radiation. Residual calcs at lumpectomy bed = 60% recurrence rate.',
        tags: ['breast', 'post-treatment', 'lumpectomy', 'radiation', 'recurrence'],
      },
    },
    {
      id: 'breast-int-011',
      front: {
        question: 'What are the ACR screening mammography guidelines by age and risk category, and when do major organizations recommend starting?',
      },
      back: {
        answer: 'ACR/SBI: annual from age 40. ACS: annual ages 45–54 (option to start at 40), biennial from 55. USPSTF: biennial ages 50–74. High-risk: start at 25–30 (mammo + MRI)',
        explanation: 'There is ongoing controversy over optimal screening age. For exam purposes, the ACR/SBI recommendation (annual from age 40) is most commonly tested. The USPSTF updated their guidelines in 2024 to recommend starting at age 40, aligning more closely with ACR. Screening mammography detects 2–8 cancers per 1000 women screened. Tomosynthesis (DBT) is now the standard of care.',
        keyFact: 'ACR/SBI = annual from age 40 (exam standard). MQSA recall rate should be <10%. PPV1 (anything other than BI-RADS 1 or 2 on screener) should be 4–9%. MQSA requires 3 months mammography training during residency. Facilities must provide lay reports to patients.',
        tags: ['breast', 'screening', 'mammography', 'guidelines'],
      },
    },
    {
      id: 'breast-int-012',
      front: {
        question: 'What is sentinel lymph node biopsy (SLNB) in breast cancer, what is its sensitivity, and when is it NOT routinely performed?',
      },
      back: {
        answer: 'SLNB identifies the first draining axillary node using radioisotope ± blue dye; sensitivity 93%; NOT routinely performed for DCIS (unless with necrosis or microinvasion)',
        explanation: 'SLNB is the standard staging procedure for invasive breast cancer, replacing axillary dissection in node-negative patients. If the sentinel node is positive or cannot be identified, full axillary lymph node dissection (ALND) is performed (sensitivity 99%). SLNB fails in approximately 5% of cases. For DCIS, SLNB is not routinely performed because DCIS is non-invasive, but is considered when necrosis or microinvasion suggests possible invasion.',
        keyFact: 'SLNB sensitivity: 93%. ALND sensitivity: 99%. SLNB failure rate: ~5%. SLNB for DCIS: NOT routine — only if necrosis or microinvasion present (risk of finding occult invasive disease). SLNB is NOT performed for phyllodes tumors (lymphatic mets are exceedingly rare).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/sentinel-lymph-node-biopsy-breast',
        tags: ['breast', 'SLNB', 'staging', 'intervention'],
      },
    },
    {
      id: 'breast-int-013',
      front: {
        question: 'What is the MQSA (Mammography Quality Standards Act) and what performance metrics does it require?',
      },
      back: {
        answer: 'US FDA-mandated annual medical audit; requires recall rate <10%, cancer detection rate 2–8/1000, PPV1 (positive screens) ~4–9%; requires 3 months mammography training in residency; written lay reports must be provided to patients',
        explanation: 'The MQSA was established to ensure quality mammography. Annual audits must track positive predictive values, recall rates, and cancer detection rates. A recall rate >10% indicates over-calling, while a recall rate <5% may indicate under-calling. PPV1 means 4–9% of all recalled women should have cancer. Facilities must correlate biopsy results with imaging findings (concordance/discordance).',
        keyFact: 'MQSA requirements: recall rate <10%, PPV1 ~4–9%, 3 months mammography training during residency, written lay report to every patient. Annual audit required. You cannot accept benign result with a BI-RADS 5 = discordant management.',
        tags: ['breast', 'MQSA', 'quality', 'mammography', 'guidelines'],
      },
    },
    {
      id: 'breast-int-014',
      front: {
        question: 'What are the staging workup imaging recommendations for newly diagnosed Stage I breast cancer?',
      },
      back: {
        answer: 'No distant staging imaging (CT, MRI, PET, bone scan) for Stage I disease — imaging for mets is NOT appropriate for asymptomatic Stage I patients',
        explanation: 'Current guidelines (ACR Appropriateness Criteria) state that systemic staging imaging is not indicated for Stage I (T1, N0) breast cancer in the absence of symptoms. The yield of metastatic disease in Stage I is too low to justify the cost and radiation. Local staging with diagnostic mammography and axillary ultrasound is appropriate. Bone scans, CT, and PET are not appropriate for Stage I as initial workup.',
        keyFact: 'Stage I breast CA: no staging CT, PET, or MRI for mets (not indicated). Local surveillance: diagnostic mammography or tomosynthesis is appropriate (score 9). Staging imaging (CT chest/abdomen/pelvis, bone scan, PET) only indicated for Stage III/IV or symptomatic patients.',
        tags: ['breast', 'staging', 'ACR', 'breast cancer', 'guidelines'],
      },
    },
    {
      id: 'breast-int-015',
      front: {
        question: 'What is the imaging workup for male breast: when is mammography vs ultrasound the first-line study?',
      },
      back: {
        answer: 'Clinical gynecomastia/pseudogynecomastia (any age) → no imaging. Indeterminate palpable <25 years → ultrasound (score 8). Indeterminate palpable ≥25 years → mammography (score 8), then US if indeterminate/suspicious. Highly suspicious physical exam → mammo (9) + US (8)',
        explanation: 'Male breast imaging differs from female imaging due to the rarity of breast cancer in men and the much higher prevalence of gynecomastia. Classic gynecomastia does not require imaging. Indeterminate palpable findings in younger males are best evaluated with ultrasound first. In males ≥25, mammography is preferred as the primary study.',
        keyFact: 'Male breast: gynecomastia → no imaging. <25 with indeterminate palpable → US first. ≥25 with indeterminate palpable → mammo first. Features favoring cancer over gynecomastia: eccentric to nipple, unilateral, calcifications, abnormal lymph nodes. Male breast CA: average age 70, usually IDC-NOS, BRCA2 more common than BRCA1.',
        tags: ['breast', 'male breast', 'gynecomastia', 'ACR', 'appropriateness'],
      },
    },
    {
      id: 'breast-int-016',
      front: {
        question: 'What are the estrogen-related risk factors for breast cancer?',
      },
      back: {
        answer: 'Early menarche, late menopause, late first pregnancy or nulliparity, obesity (adipocyte aromatase), alcohol use (impaired estrogen breakdown), hormone replacement therapy with estrogen',
        explanation: 'Prolonged estrogen exposure is a major risk factor for breast cancer. Conversely, early first pregnancy and early menopause are protective. Obesity increases estrogen exposure via aromatase activity in adipocytes. Alcohol impairs hepatic estrogen metabolism. Combined estrogen-progestogen HRT carries higher risk than estrogen-only HRT.',
        keyFact: 'Estrogen exposure = breast CA risk. Protective: early first pregnancy, early menopause, breastfeeding, exercise, SERMs (tamoxifen/raloxifene reduce ER+ cancer incidence). Risk-reducing: early menarche is a risk factor. Dense breast = independent risk factor (denser = more risk, dose-dependent).',
        tags: ['breast', 'risk factors', 'estrogen', 'prevention'],
      },
    },
    {
      id: 'breast-int-017',
      front: {
        question: 'What are the screening mammography recommendations for transgender individuals?',
      },
      back: {
        answer: 'Transgender women: annual mammogram if >50 years old AND prior/current estrogen + progestogen therapy ≥5 years, or BMI >35. Transgender men: annual mammogram if breast tissue remains (even after reduction mammoplasty)',
        explanation: 'Transgender women using estrogen develop breast tissue and face elevated breast cancer risk with prolonged hormonal therapy. The risk approaches that of cisgender women after 5+ years of estrogen + progestogen. Transgender men who have had mastectomy have minimal residual breast tissue and very low risk, but those with remaining breast tissue require continued surveillance.',
        keyFact: 'Trans women screening: >50 years old + hormones (E+P) ≥5 years OR BMI >35 → annual mammogram. Trans men: breast tissue remaining (even after reduction) → annual mammogram. Transgender individuals on estrogen alone for gender reassignment do NOT automatically qualify for screening.',
        tags: ['breast', 'screening', 'transgender', 'guidelines'],
      },
    },
    {
      id: 'breast-int-018',
      front: {
        question: 'What is a specimen radiograph in breast surgery and what findings mandate intraoperative communication with the surgeon?',
      },
      back: {
        answer: 'Radiograph of excised breast specimen to confirm removal of the target lesion/calcifications; if the mass or calcifications are at the specimen edge → ~80% positive margin rate → call surgeon immediately in the OR',
        explanation: 'Specimen radiography is performed intraoperatively to confirm complete excision of the targeted lesion. Two findings must be verified: (1) presence of the mass/calcifications in the specimen, and (2) adequate distance from the specimen margins. If the target lesion is at the margin, incomplete excision is likely (~80% positive margin rate) and the surgeon can take additional tissue while still in the OR.',
        keyFact: 'Specimen radiograph: confirm (1) target lesion is present, (2) lesion is not at the margin. Lesion at margin → ~80% positive margin rate → CALL SURGEON INTRAOPERATIVELY. Residual calcifications near lumpectomy bed post-op correlate with 60% local recurrence rate.',
        tags: ['breast', 'intervention', 'specimen radiograph', 'surgery'],
      },
    },
  ]},

  { id: 'breast-imaging-special', label: 'Implants & Male Breast',   cards: [
    {
      id: 'breast-special-001',
      front: {
        question: 'What are the two types of breast implants, and what is the key difference in terms of rupture evaluation?',
      },
      back: {
        answer: 'Saline and silicone. Saline rupture: obvious on mammography (collapsed implant); silicone rupture requires MRI for intracapsular rupture (mammography detects extracapsular only). MRI is the most accurate modality for implant evaluation overall',
        explanation: 'Saline implants collapse visibly on deflation and the body simply absorbs the saline — it is mostly a cosmetic concern. Silicone implants form a fibrous capsule that allows intracapsular rupture (silicone inside capsule) or extracapsular rupture (silicone outside capsule). Intracapsular rupture cannot be detected on mammography and is identified on MRI with the "linguine sign." Implants are NOT a contraindication to core needle biopsy and do NOT increase cancer risk.',
        keyFact: 'Saline rupture: mammography sufficient (collapsed shell = "wadded wrapper"). Silicone: extracapsular on mammo (dense silicone outside capsule); intracapsular → needs MRI (linguine sign). You CANNOT have isolated extracapsular rupture — extracapsular always implies intracapsular. MRI = gold standard for silicone implants.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-implant-rupture',
        tags: ['breast', 'implants', 'MRI', 'mammography', 'rupture'],
      },
    },
    {
      id: 'breast-special-002',
      front: {
        question: 'What is the "linguine sign" on breast MRI and what does it indicate?',
      },
      back: {
        answer: 'Wavy curvilinear lines within a silicone implant on MRI (T2-weighted), representing the collapsed implant shell floating in extruded silicone within the fibrous capsule; indicates intracapsular silicone implant rupture',
        explanation: 'In intracapsular rupture, the silicone shell collapses but remains contained within the fibrous capsule. The collapsed shell creates wavy lines resembling linguine pasta. The key differentiator from radial folds is that linguine sign lines do NOT connect to the periphery of the implant, while radial folds always attach to the implant shell. Breast MRI for implants is performed with T2-weighted sequences (specifically STIR or fat-sat T2).',
        keyFact: 'Linguine sign = intracapsular rupture. Lines do NOT touch the implant shell periphery. Radial folds = normal in-foldings, ALWAYS connect to the shell periphery. MRI for implants: T2 fat-sat (the "PS T2"). Silicone in lymph node alone (without linguine sign) may represent gel bleed (not rupture).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/linguine-sign',
        tags: ['breast', 'implants', 'MRI', 'rupture', 'linguine sign'],
      },
    },
    {
      id: 'breast-special-003',
      front: {
        question: 'What is the "snowstorm" appearance on ultrasound and what does it indicate in the context of breast implants?',
      },
      back: {
        answer: 'Highly echogenic noise-like pattern with no posterior shadowing, seen in the breast or axillary lymph nodes when free silicone is present; indicates extracapsular silicone rupture or gel bleed into lymph nodes',
        explanation: 'Free silicone creates a characteristic "snowstorm" on ultrasound due to reverberant echoes between silicone droplets. This can be seen in breast tissue (extracapsular rupture) or in axillary lymph nodes (silicone infiltration from rupture or gel bleed). The presence of silicone in a lymph node alone does not confirm rupture — gel bleed (silicone permeating through the intact shell) can also cause nodal silicone without rupture.',
        keyFact: 'Snowstorm sign on US = free silicone (extracapsular rupture or gel bleed). High echogenicity + NO posterior shadowing. Silicone in lymph node = could be gel bleed (NOT necessarily rupture). If silicone in lymph node found → MRI recommended to evaluate for intracapsular rupture.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/snowstorm-sign-breast',
        tags: ['breast', 'implants', 'ultrasound', 'silicone', 'rupture'],
      },
    },
    {
      id: 'breast-special-004',
      front: {
        question: 'What is the most common complication of breast implants and what are the risk factors?',
      },
      back: {
        answer: 'Capsular contracture (fibrosis and contraction of the implant capsule); most common in subglandular silicone implants. The most common risk factor for implant rupture is age of the implant',
        explanation: 'The fibrous capsule that forms around all implants can contract, distorting the implant and causing pain. It is more common with subglandular (retromammary) placement than subpectoral (retropectoral) placement, and more common with silicone than saline. On mammography, capsular contracture appears as abnormal rounding or distortion of the implant contour compared to prior studies. Rupture risk factor: age of implant (not trauma — compression mammography rarely causes rupture).',
        keyFact: 'Most common implant complication: capsular contracture (fibrous capsule contracts). Highest risk: subglandular silicone. Most common risk factor for RUPTURE: age of the implant (not compression/trauma). Saline: body forms NO fibrous capsule → no intracapsular rupture possible.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/capsular-contracture-breast-implant',
        tags: ['breast', 'implants', 'complication', 'capsular contracture'],
      },
    },
    {
      id: 'breast-special-005',
      front: {
        question: 'What mammographic views are used when imaging breasts with implants?',
      },
      back: {
        answer: '"Eklund views" or implant-displaced (ID) views: the implant is pushed posteriorly while the breast parenchyma is pulled forward for better visualization; standard + implant-displaced views are obtained (CCID and MLOID)',
        explanation: 'Routine mammography of augmented breasts includes standard CC and MLO plus implant-displaced (Eklund) CC and MLO views. The implant is manually pushed toward the chest wall while the breast parenchyma is pulled forward and compressed. This allows better evaluation of the overlying parenchyma. Some parenchyma, especially posterior to the implant, may still be difficult to image.',
        keyFact: 'Breast implants → standard views + Eklund/implant-displaced views (CCID + MLOID). Implant displaced posteriorly; breast parenchyma pulled forward. Limitations: posterior tissue still incompletely evaluated. Implants are NOT a contraindication to mammography or biopsy.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-implant-displaced-views',
        tags: ['breast', 'implants', 'mammography', 'Eklund', 'technique'],
      },
    },
    {
      id: 'breast-special-006',
      front: {
        question: 'What is gynecomastia and what are the three mammographic patterns?',
      },
      back: {
        answer: 'Non-neoplastic enlargement of male breast epithelium and stroma; patterns: (1) Nodular (most common): flame-shaped, posterior to nipple, tender, <1 year; (2) Dendritic: branching tree, chronic fibrotic; (3) Diffuse glandular: entire breast dense (estrogen therapy)',
        explanation: 'Gynecomastia is physiologic in adolescent boys (~50%) and men >65. Between these ages it is pathologic, associated with spironolactone, psych medications, marijuana, alcoholic cirrhosis, testicular cancer, and hormonal therapy. The nodular pattern is most common and typically tender. Dendritic is chronic and non-tender. Features raising concern for cancer: eccentric to nipple, unilateral, calcifications, palpable mass without gynecomastia features.',
        keyFact: 'Gynecomastia: flame-shaped, behind nipple, bilateral (asymmetric), classic physiologic at age 13–16 and >65. Three patterns: nodular (most common, acute), dendritic (chronic), diffuse (estrogen therapy). Eccentric, unilateral, calcifications, or abnormal nodes → think cancer, not gynecomastia.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/gynaecomastia',
        tags: ['breast', 'male breast', 'gynecomastia', 'mammography'],
      },
    },
    {
      id: 'breast-special-007',
      front: {
        question: 'What is male breast cancer, who is at highest risk, and how does it typically present on imaging?',
      },
      back: {
        answer: 'Rare, average age 70; BRCA2 mutation is most common genetic risk (higher than BRCA1 in males); presents as eccentric subareolar mass, often IDC-NOS; mammographic appearance similar to female breast cancer (would be BI-RADS 5)',
        explanation: 'Male breast cancer occurs in ~1% of all breast cancers. Risk factors include BRCA2 (1 in 4 males with breast cancer has a BRCA mutation, most commonly BRCA2), Klinefelter syndrome, cirrhosis, chronic alcoholism, and exogenous estrogen. It virtually never presents as lobular carcinoma or fibroadenoma (males lack lobules). Calcifications are present in ~25% of cases but are typically fewer, coarser, and associated with a mass.',
        keyFact: 'Male breast CA: average age 70, almost always IDC-NOS. BRCA2 > BRCA1 risk in males. Risk factors: BRCA2, Klinefelter, cirrhosis, alcoholism. Cancer features: eccentric to nipple, unilateral, calcifications, abnormal nodes. Men do NOT get lobular CA or fibroadenoma (no lobules). Klinefelter = only condition approaching screening mammogram risk threshold.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/male-breast-cancer',
        tags: ['breast', 'male breast', 'cancer', 'BRCA2', 'mammography'],
      },
    },
    {
      id: 'breast-special-008',
      front: {
        question: 'What post-surgical changes are expected on mammography and ultrasound after breast reduction (reduction mammoplasty) and mastopexy?',
      },
      back: {
        answer: 'Swirled appearance of inferior breast (from keyhole incision), fat necrosis/oil cysts, isolated islands of breast tissue; the keyhole incision creates a characteristic swirled inferior breast parenchyma on MLO',
        explanation: 'Reduction mammoplasty removes breast tissue, while mastopexy is a breast lift (skin removal only). Both use the keyhole incision technique, which produces a swirled appearance of the inferior breast parenchyma on the MLO view. Fat necrosis and oil cysts are common post-surgical findings. These benign changes should not be mistaken for recurrence.',
        keyFact: 'Reduction mammoplasty/mastopexy: "swirled appearance" of inferior breast on MLO (keyhole incision). Fat necrosis = expected post-surgical finding. The swirled inferior breast appearance on MLO is an Aunt Minnie for prior reduction/mastopexy.',
        tags: ['breast', 'post-surgical', 'mammoplasty', 'fat necrosis'],
      },
    },
    {
      id: 'breast-special-009',
      front: {
        question: 'What is the "stepladder sign" on breast ultrasound and what does it indicate?',
      },
      back: {
        answer: 'Horizontal echogenic lines (segments of the collapsed implant shell floating within intracapsular silicone) arranged like steps; indicates intracapsular silicone implant rupture',
        explanation: 'In intracapsular silicone rupture, the elastomer implant shell fragments and collapses within the fibrous capsule. On ultrasound, these shell fragments appear as echogenic horizontal lines at different depths, resembling a stepladder. The MRI equivalent is the linguine sign. The stepladder sign is analogous to the linguine sign but is less sensitive than MRI for detection.',
        keyFact: 'Stepladder sign on US = intracapsular silicone rupture (US equivalent of the MRI linguine sign). Echogenic shell fragments float at different depths inside silicone lake. MRI is more sensitive and specific for intracapsular rupture than US.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/stepladder-sign-breast-implant',
        tags: ['breast', 'implants', 'ultrasound', 'rupture'],
      },
    },
    {
      id: 'breast-special-010',
      front: {
        question: 'What is breast implant-associated anaplastic large cell lymphoma (BIA-ALCL), and what is its classic presentation?',
      },
      back: {
        answer: 'Rare T-cell lymphoma associated primarily with textured breast implants; classic presentation is a peri-implant seroma or effusion occurring >12 months after implantation; may also present as a residual fibrous capsule mass',
        explanation: 'BIA-ALCL is a distinct entity from systemic ALCL and is associated with textured surface implants (much more rarely smooth implants). Any new peri-implant effusion developing more than 12 months after placement should raise concern. It is usually indolent with good prognosis if diagnosed early (capsule intact). Treatment is total capsulectomy and implant removal.',
        keyFact: 'BIA-ALCL: textured implants + peri-implant effusion >12 months post-insertion → consider BIA-ALCL. Test the seroma fluid with CD30 immunostaining. Treatment: total en-bloc capsulectomy + implant removal. Usually indolent if disease confined to capsule.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-implant-associated-anaplastic-large-cell-lymphoma',
        tags: ['breast', 'implants', 'lymphoma', 'BIA-ALCL'],
      },
    },
    {
      id: 'breast-special-011',
      front: {
        question: 'What is the sternalis muscle, how does it appear on mammography, and why is it clinically important?',
      },
      back: {
        answer: 'Accessory parasternal muscle present in ~5% of patients; seen ONLY on the CC view as a round or triangular posterior medial asymmetry; never seen on the MLO — this is the key to diagnosis',
        explanation: 'The sternalis muscle lies anterior to the pectoralis and is typically unilateral. On mammography, it creates a posterior medial asymmetry that can mimic a mass, but it is exclusively visible on the CC view and never appears on the MLO. Correlation with prior studies showing the same asymmetry or with CT/MRI confirming an accessory muscle makes the diagnosis. No biopsy is required.',
        keyFact: 'Sternalis muscle: CC view ONLY (never MLO), posterior medial asymmetry, ~5% of patients, usually unilateral. Aunt Minnie appearance: triangular/round medial asymmetry on CC that disappears completely on MLO. CT or MRI confirms if uncertain.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/sternalis-muscle',
        tags: ['breast', 'mammography', 'normal variant', 'anatomy'],
      },
    },
    {
      id: 'breast-special-012',
      front: {
        question: 'What are the imaging features of fat necrosis in the breast and how can it mimic malignancy?',
      },
      back: {
        answer: 'Fat necrosis has a spectrum of appearances: oil cyst (lucent, eggshell calcification), dystrophic calcifications, spiculated mass or architectural distortion (mimics IDC), rim-enhancing mass on MRI; classic trigger is surgery or trauma',
        explanation: 'Fat necrosis occurs after trauma, surgery, radiation, or spontaneously. Early fat necrosis presents as an irregular mass or architectural distortion and can be indistinguishable from cancer. Over time, it evolves into oil cysts with peripheral calcification. On MRI, fat necrosis may show rim enhancement (mimicking malignancy) but demonstrates internal fat signal (T1 bright, drops out on fat saturation) — a key distinguishing feature.',
        keyFact: 'Fat necrosis MRI: T1 bright + T2 bright + fat sat drops it out = diagnosis. Rim enhancement is expected (does NOT mean malignancy if internal fat signal present). Evolution: irregular mass → oil cyst → eggshell calcification. Post-surgery + spiculated mass → consider fat necrosis before cancer.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/fat-necrosis-of-the-breast',
        tags: ['breast', 'fat necrosis', 'MRI', 'mammography'],
      },
    },
  ]},

  { id: 'breast-inflammatory',   label: 'Inflammatory & Infectious', cards: [
    {
      id: 'breast-inflam-001',
      front: {
        question: 'What is mastitis, what organism most commonly causes it, and in what clinical setting is it most commonly seen?',
      },
      back: {
        answer: 'Infection of the breast, most commonly by Staphylococcus aureus; most common in nursing/lactating mothers (lactational/puerperal mastitis); also seen in diabetic or immunocompromised patients and smokers',
        explanation: 'Mastitis presents with breast pain, erythema, warmth, and induration. Treatment is antibiotics. Imaging is not typically performed unless symptoms persist after antibiotics or if abscess is suspected. The primary imaging differential is inflammatory carcinoma. Mammography and US show focal or diffuse skin and trabecular thickening with breast edema.',
        keyFact: 'Mastitis: Staph aureus, nursing mother, painful + red breast. Treatment: antibiotics. No imaging unless persistent or abscess suspected. Key differential: inflammatory breast cancer (painless, no response to antibiotics → skin biopsy). Mastitis without lactational history in a non-breastfeeding woman → treat antibiotics, but if no response in 1–2 weeks → biopsy to exclude IBC.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mastitis',
        tags: ['breast', 'mastitis', 'infection', 'ultrasound'],
      },
    },
    {
      id: 'breast-inflam-002',
      front: {
        question: 'What are the sonographic features of a breast abscess and how is it managed?',
      },
      back: {
        answer: 'Oval/irregular heterogeneous complex mass with thick echogenic walls, indistinct margins, echogenic halo, hypervascular rim, and internal debris; management: ultrasound-guided aspiration + antibiotics + culture',
        explanation: 'Breast abscesses are most commonly subareolar in location and result from inadequately treated mastitis (usually Staph aureus). The fluid collection shows internal echoes and debris on ultrasound. Management involves aspiration under ultrasound guidance combined with antibiotics (send aspirate for culture and sensitivity). Surgical drainage is occasionally required for complex multiloculated abscesses.',
        keyFact: 'Breast abscess: complex hypoechoic collection, hypervascular rim, internal debris. Subareolar is classic location. Treatment: US-guided aspiration + antibiotics. If aspirate doesn\'t disappear or recurs → may need surgical drainage. Purulent aspirate → culture and sensitivity (NOT cytology).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-abscess',
        tags: ['breast', 'abscess', 'infection', 'ultrasound', 'intervention'],
      },
    },
    {
      id: 'breast-inflam-003',
      front: {
        question: 'What is idiopathic granulomatous mastitis and how does it present on imaging?',
      },
      back: {
        answer: 'Rare chronic inflammatory condition in young reproductive-age women with prior lactation; mammography: focal asymmetry or irregular mass; ultrasound: irregular confluent hypoechoic masses with parallel orientation; MRI: segmental NME — mimics breast cancer',
        explanation: 'Idiopathic granulomatous mastitis is thought to be autoimmune or related to Corynebacterium infection. Imaging mimics breast cancer, making biopsy essential. Pathology shows non-caseating granulomas. Treatment is complex (steroids, methotrexate, antibiotics) and course is prolonged with frequent relapses. The subtype associated with Corynebacterium tends to form fistulas.',
        keyFact: 'Granulomatous mastitis: young reproductive-age woman + prior lactation + painful mass + irregular imaging → biopsy required. MRI shows segmental NME mimicking DCIS or IBC. Non-caseating granulomas on histology. Treatment: steroids ± immunosuppressants. Prolonged, relapsing course.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/granulomatous-mastitis',
        tags: ['breast', 'granulomatous mastitis', 'inflammation', 'MRI'],
      },
    },
    {
      id: 'breast-inflam-004',
      front: {
        question: 'What is diabetic mastopathy and what are its characteristic imaging findings?',
      },
      back: {
        answer: 'Autoimmune stromal fibrosis in patients with long-standing insulin-dependent diabetes; mammography: ill-defined asymmetric density without calcifications; ultrasound: hypoechoic mass with posterior shadowing — mimics scirrhous carcinoma; biopsy required',
        explanation: 'Diabetic mastopathy results from an autoimmune reaction to matrix proteins altered by chronic hyperglycemia. It presents as a firm, sometimes painful palpable mass, often bilateral and subareolar. The posterior acoustic shadowing on ultrasound is due to dense stromal fibrosis and creates a convincing mimic of invasive ductal carcinoma. Core biopsy shows dense keloid-like fibrosis with lymphocytic infiltrate.',
        keyFact: 'Diabetic mastopathy: type 1 (insulin-dependent) diabetes + bilateral subareolar firm palpable mass + posterior shadowing on US without discrete mass → mimics scirrhous IDC. Core biopsy required to exclude cancer. Fibrous stroma is the hallmark pathologically.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/diabetic-mastopathy',
        tags: ['breast', 'diabetic mastopathy', 'ultrasound', 'benign'],
      },
    },
    {
      id: 'breast-inflam-005',
      front: {
        question: 'What is periductal mastitis (plasma cell mastitis) and what are its mammographic findings?',
      },
      back: {
        answer: 'Benign inflammatory condition caused by irritating intraductal lipids; produces large, rod-like (secretory) calcifications on mammography pointing toward the nipple; seen in postmenopausal women',
        explanation: 'Periductal (plasma cell) mastitis is caused by dilated ducts filled with fatty secretions that elicit a periductal inflammatory reaction. The calcifications that result are the large rod-like (secretory) calcifications — bilateral, following ducts toward the nipple, with a lucent center ("cigar-shaped with lucent center"). These are BI-RADS 2 and should not be confused with the fine linear calcifications of DCIS.',
        keyFact: 'Periductal/plasma cell mastitis = secretory calcifications. These are the large rod-like calcifications, bilateral, pointing toward nipple, postmenopausal (10–20 years post). BI-RADS 2. Do NOT confuse with fine linear branching calcs of DCIS — secretory calcs are much larger and bilateral.',
        tags: ['breast', 'mastitis', 'calcifications', 'mammography', 'benign'],
      },
    },
    {
      id: 'breast-inflam-006',
      front: {
        question: 'How do you differentiate inflammatory breast cancer (IBC) from locally advanced breast cancer (LABC) clinically and radiologically?',
      },
      back: {
        answer: 'IBC: rapid onset (<3 months), younger (mid 50s), 30% mets at presentation, T4d staging, often no discrete mass; LABC: prolonged onset, older (mid 60s), ~10% mets at presentation, has a palpable mass',
        explanation: 'Both IBC and LABC present with locally advanced disease and may appear similar on mammography (skin thickening, dense breast). The critical distinction is the rapidity of onset and the mechanism — IBC is defined by dermal lymphatic invasion causing rapid inflammatory changes, while LABC represents direct tumor growth without dermal lymphatic involvement. Skin biopsy confirming dermal lymphatic tumor emboli is the hallmark of IBC.',
        keyFact: 'IBC vs LABC: IBC = rapid (<3 months), mid 50s, 30% mets, T4d. LABC = slow, mid 60s, 10% mets. Both: mastectomy after neoadjuvant. IBC-defining criterion: dermal lymphatic tumor emboli on skin biopsy + clinical inflammatory signs. No discrete palpable mass is the classic IBC presentation.',
        tags: ['breast', 'IBC', 'LABC', 'malignancy', 'staging'],
      },
    },
    {
      id: 'breast-inflam-007',
      front: {
        question: 'What is ductal ectasia and in what clinical setting does it occur?',
      },
      back: {
        answer: 'Benign dilation of subareolar ducts in postmenopausal women; the most common benign cause of nipple discharge in a postmenopausal woman; galactography shows dilated ducts near the subareola with progressive attenuation',
        explanation: 'Ductal ectasia represents involuted and ectatic major ducts, a normal aging change. It can produce a green/yellow or occasionally bloody nipple discharge. On mammography, it appears as tubular densities in the subareolar region. Ultrasound shows dilated anechoic or hypoechoic ductal structures. Large rod-like (secretory) calcifications are a related finding. No malignant risk.',
        keyFact: 'Ductal ectasia: most common benign cause of nipple discharge in postmenopausal women. Discharge: green, brown, or occasionally bloody. Galactography: dilated subareolar ducts tapering progressively. No malignant potential. Related to periductal mastitis (both involve ectatic ducts).',
        radiopaediaUrl: 'https://radiopaedia.org/articles/mammary-duct-ectasia',
        tags: ['breast', 'ductal ectasia', 'nipple discharge', 'benign'],
      },
    },
  ]},

  { id: 'breast-special2',       label: 'Normal Variants & Special Topics', cards: [
    {
      id: 'breast-sv-001',
      front: {
        question: 'What is Poland syndrome and how does it affect breast imaging?',
      },
      back: {
        answer: 'Congenital unilateral absence of the pectoralis major muscle with associated ipsilateral breast hypoplasia/aplasia, rib anomalies, and often hand/finger anomalies (syndactyly); the absent pectoralis creates a characteristic asymmetry on mammography',
        explanation: 'Poland syndrome is a rare congenital condition affecting chest wall and upper extremity development. In women, the absent or hypoplastic breast is the most obvious finding. On mammography, the lack of pectoralis shadow and sparse fibroglandular tissue on the affected side is characteristic. Reconstructive surgery is typically offered.',
        keyFact: 'Poland syndrome: unilateral absent pectoralis major + absent/hypoplastic ipsilateral breast + syndactyly. Mammography: absent pectoralis shadow + sparse/absent fibroglandular tissue unilaterally. Associated with hand anomalies. No increased malignancy risk.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/poland-syndrome',
        tags: ['breast', 'Poland syndrome', 'congenital', 'anatomy', 'mammography'],
      },
    },
    {
      id: 'breast-sv-002',
      front: {
        question: 'Where does accessory breast tissue most commonly occur and how does it appear on mammography?',
      },
      back: {
        answer: 'Most common: axilla (along the embryologic milk streak/mammary ridge); second most common: inframammary fold; on mammography appears as fibroglandular density projecting into the axilla on the MLO view',
        explanation: 'Accessory breast tissue (polymastia) occurs along the embryologic mammary ridge (milk streak) extending from axilla to groin. Axillary accessory breast tissue is a common incidental finding and can mimic axillary lymphadenopathy on clinical exam. It undergoes the same physiological changes as normal breast tissue (enlargement during pregnancy, lactation). Accessory nipples (polythelia) occur in ~2% of neonates.',
        keyFact: 'Accessory breast tissue: most common in AXILLA (milk streak). On MLO: fibroglandular density projecting into axilla. Increases in size during pregnancy/lactation. Can develop any breast pathology including cancer. Accessory nipple (polythelia): 2% of neonates, usually along milk streak.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/accessory-breast-tissue',
        tags: ['breast', 'accessory breast', 'normal variant', 'mammography'],
      },
    },
    {
      id: 'breast-sv-003',
      front: {
        question: 'What are the expected mammographic changes throughout the menstrual cycle and how does this affect interpretation?',
      },
      back: {
        answer: 'Follicular phase (days 7–14): lowest density, best image quality; luteal phase (days 14–28): increased density, BPE peaks at day 27–30; perimenopausal: increased pain and cyst formation due to shortening of follicular phase',
        explanation: 'Estrogen dominates the follicular phase, causing duct elongation. Progesterone in the luteal phase causes lobular proliferation and increased density. Mammography and MRI should ideally be performed in the follicular phase for optimal sensitivity. HRT causes increased density (especially estrogen-progestogen combinations) and may cause fibroadenomas to grow.',
        keyFact: 'Best time for mammogram and MRI: days 7–14 (follicular phase, estrogen dominates). Breast tenderness peaks: days 27–30 (late luteal). HRT (especially E+P): increases density and can enlarge fibroadenomas. Perimenopausal: shortening follicular phase → more progesterone → peak time for breast pain and cyst formation.',
        tags: ['breast', 'physiology', 'menstrual cycle', 'MRI', 'mammography'],
      },
    },
    {
      id: 'breast-sv-004',
      front: {
        question: 'What imaging approach is recommended for a breast mass in a pregnant or lactating patient?',
      },
      back: {
        answer: 'Ultrasound is the first-line modality; mammography can be performed if clinically indicated (radiation dose is low with abdominal shielding); MRI without gadolinium can be used; biopsy is safe but carries a risk of milk fistula',
        explanation: 'Pregnancy and lactation cause significant breast density increase (especially in the 3rd trimester), making mammography less sensitive. Ultrasound is preferred for initial evaluation. Mammography has very low fetal radiation exposure with abdominal shielding. Gadolinium crosses the placenta and is generally avoided in pregnancy. Core needle biopsy is safe but if biopsy is performed during active lactation, ceasing breastfeeding before and after the procedure reduces milk fistula risk.',
        keyFact: 'Pregnant/lactating breast mass: US first. Mammography can be done (very low fetal dose). Gadolinium: avoid in pregnancy. Biopsy is safe but risk of milk fistula — patient may need to stop breastfeeding. Breast density is greatest in 3rd trimester — US has higher sensitivity than mammography in lactating patients.',
        tags: ['breast', 'pregnancy', 'lactation', 'ultrasound', 'technique'],
      },
    },
    {
      id: 'breast-sv-005',
      front: {
        question: 'What is sclerosing adenosis, what does it look like on mammography, and why is it important?',
      },
      back: {
        answer: 'Benign lobular hyperplasia with associated fibrosis distorting glandular elements; can present as microcalcifications (amorphous or punctate) or a mass/architectural distortion; important as a mimic of DCIS and as a histologic finding associated with ADH upgrade',
        explanation: 'Sclerosing adenosis is a proliferative lesion that does not in itself carry significant malignant risk, but can be a background in which ADH or carcinoma arises. Calcifications can have amorphous morphology resembling DCIS. On histology, the distorted lobular architecture can be confused with IDC. It may be associated with radial scars.',
        keyFact: 'Sclerosing adenosis: benign lobular hyperplasia + fibrosis. Mammographic DDx for amorphous calcs includes sclerosing adenosis and fibrocystic change. No significant intrinsic cancer risk but important as a DCIS mimic and because it can co-exist with ADH/LCIS at biopsy. Management: 6-month follow-up if core biopsy alone shows sclerosing adenosis with no atypia.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/sclerosing-adenosis',
        tags: ['breast', 'sclerosing adenosis', 'calcifications', 'benign'],
      },
    },
    {
      id: 'breast-sv-006',
      front: {
        question: 'What is fibrocystic change, what are its imaging manifestations, and is it a risk factor for breast cancer?',
      },
      back: {
        answer: 'Essentially a normal variation of breast physiology in premenopausal women; imaging findings are non-specific (cysts, calcifications, density); fibrocystic change itself is NOT a risk factor — only its associated atypical forms (ADH, ALH) increase cancer risk',
        explanation: 'Fibrocystic change is an umbrella term for a collection of benign histologic findings including cysts, apocrine metaplasia, and mild stromal proliferation. It presents clinically as cyclical breast pain, often with palpable lumpiness. Imaging findings vary: cysts (simple or complicated), punctate or amorphous calcifications, and increased density. The diagnosis is never made on imaging alone. Non-proliferative fibrocystic change carries no increased breast cancer risk.',
        keyFact: 'Fibrocystic change: normal physiology variant in premenopausal women. Cyclical bilateral pain + benign calcs/cysts on imaging. NOT a cancer risk factor by itself. Associated ADH, ALH → those ARE risk factors. Imaging diagnosis should NOT be made — histology required to exclude atypia.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/fibrocystic-change-of-the-breast',
        tags: ['breast', 'fibrocystic change', 'benign', 'mammography'],
      },
    },
    {
      id: 'breast-sv-007',
      front: {
        question: 'What are the key ultrasound features that differentiate a benign from a malignant solid breast mass, and what is the most specific US feature of malignancy?',
      },
      back: {
        answer: 'Most specific malignant feature: spiculated margins. Second most specific: non-parallel (taller-than-wide) orientation. Benign features: circumscribed margins, parallel orientation, oval shape, hyperechogenicity',
        explanation: 'Ultrasound uses a combination of features to stratify solid masses. A single malignant feature makes a lesion at minimum BI-RADS 4. Spiculated margins and taller-than-wide orientation are the strongest ultrasound predictors of malignancy. The ratio of width-to-height >1.4 suggests a benign lesion. Posterior acoustic features (enhancement vs shadowing) are considered indeterminate features and are less reliable individually.',
        keyFact: 'US malignancy hierarchy: spiculated margins (most specific) > non-parallel/taller-than-wide > angular/microlobulated > posterior shadowing > markedly hypoechoic. One malignant feature = minimum BI-RADS 4. Posterior enhancement and lesion size are INDETERMINATE features — do not use them alone for benign vs malignant differentiation.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/breast-ultrasound',
        tags: ['breast', 'ultrasound', 'BI-RADS', 'malignancy'],
      },
    },
    {
      id: 'breast-sv-008',
      front: {
        question: 'What is the subcapsular line sign and keyhole/teardrop sign on breast MRI in the context of silicone implants?',
      },
      back: {
        answer: 'Subcapsular line sign: thin layer of silicone between the implant shell and fibrous capsule; Keyhole/teardrop sign: focal outpouching of silicone through the shell into the space between shell and capsule; both indicate intracapsular silicone rupture (less classic than linguine sign)',
        explanation: 'These are subtler MRI signs of intracapsular rupture compared to the classic linguine sign. The subcapsular line represents early silicone leakage interposed between the implant wall and fibrous capsule. The keyhole sign (also called teardrop sign) appears as a rounded silicone outpouching through a focal shell tear, resembling a keyhole or teardrop shape. Radial folds (normal infoldings that always contact the periphery) must be distinguished.',
        keyFact: 'Intracapsular rupture MRI signs (least to most classic): subcapsular line → keyhole/teardrop → linguine. All represent silicone inside fibrous capsule but outside elastomer shell. KEY differentiator: radial folds ALWAYS touch the periphery; linguine/keyhole do NOT.',
        tags: ['breast', 'implants', 'MRI', 'rupture'],
      },
    },
    {
      id: 'breast-sv-009',
      front: {
        question: 'What is the classic appearance of neurofibromatosis type 1 (NF1) on breast mammography?',
      },
      back: {
        answer: 'Multiple bilateral cutaneous masses outlined by air on mammography, representing cutaneous neurofibromas; NF1 also confers a moderate increased risk of breast cancer',
        explanation: 'NF1 (autosomal dominant) features neurofibromas, café au lait spots, and Lisch nodules. Cutaneous neurofibromas over the breast appear as multiple skin masses on mammography with air outlining them from adjacent skin folds. NF1 is classified as a "moderate risk" syndrome for breast cancer. Annual mammography (± MRI) is recommended.',
        keyFact: 'NF1 on mammography: multiple bilateral cutaneous masses outlined by air = cutaneous neurofibromas. NF1 = moderate breast cancer risk → earlier or additional surveillance may be warranted. Distinguish from steatocystoma multiplex: innumerable fat-density bilateral subcutaneous masses.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/neurofibromatosis-type-1',
        tags: ['breast', 'NF1', 'mammography', 'skin', 'normal variant'],
      },
    },
    {
      id: 'breast-sv-010',
      front: {
        question: 'What is steatocystoma multiplex and how does it appear on breast mammography?',
      },
      back: {
        answer: 'Rare autosomal dominant condition of multiple intradermal cysts containing sebum; on mammography: innumerable fat-density subcutaneous masses bilaterally',
        explanation: 'Steatocystoma multiplex involves the sebaceous glands and can affect any skin surface. When the breast is involved, mammography shows multiple small fat-density subcutaneous masses — an Aunt Minnie appearance. These are entirely benign. The key finding is fat density (lucent) of the masses, distinguishing them from the soft-tissue density neurofibromas in NF1.',
        keyFact: 'Steatocystoma multiplex: innumerable bilateral fat-density subcutaneous masses on mammography (Aunt Minnie). Contrast with NF1 (neurofibromas): soft-tissue density, outlined by air. Associated with hamartomas in some cases.',
        tags: ['breast', 'steatocystoma', 'mammography', 'normal variant', 'benign'],
      },
    },
    {
      id: 'breast-sv-011',
      front: {
        question: 'What is a "second-look ultrasound" in the context of breast MRI and how often does it find a correlating lesion?',
      },
      back: {
        answer: 'Targeted ultrasound performed to find an MRI correlate for a lesion seen only on MRI, allowing ultrasound-guided biopsy instead of the more complex MRI-guided biopsy; a correlating lesion is found in approximately 56–57% of MRI-detected lesions',
        explanation: 'Second-look (targeted) ultrasound is performed by the radiologist with direct knowledge of the MRI findings (location, depth, quadrant). Masses and larger lesions are more likely to have a sonographic correlate than NME or small lesions. If an ultrasound correlate is found, biopsy can proceed under ultrasound guidance, which is faster, cheaper, and more comfortable than MRI-guided biopsy.',
        keyFact: 'Second-look US after MRI: finds correlate in ~56–57% of cases. Masses and larger NME more likely to have US correlate. If US correlate found → US-guided biopsy (preferred). If NO US correlate → MRI-guided biopsy. Clinical upside: avoids costly, time-sensitive MRI-guided procedure in >50% of cases.',
        tags: ['breast', 'MRI', 'ultrasound', 'second-look', 'biopsy'],
      },
    },
    {
      id: 'breast-sv-012',
      front: {
        question: 'What is pre-operative lesion localization and what are the options, including the advantages of radioactive seed localization over wire localization?',
      },
      back: {
        answer: 'Methods: wire localization, radioactive seed (I-125), magnetic seed, radar localization. Radioactive seed advantages: can be placed up to 5 days before surgery, more flexibility for radiologist approach and surgeon incision planning, no external wire (better cosmesis, no migration risk)',
        explanation: 'Pre-operative localization marks a non-palpable lesion for surgical excision. Traditional wire localization is placed the morning of surgery and requires a specific surgical incision path. Radioactive seed localization (I-125) allows more flexible scheduling and planning, reduces anxiety, and eliminates wire dislodgement. Limitations: cannot be placed under MRI guidance (metal/radioactivity incompatible). Bracketing uses multiple wires/seeds for large lesions.',
        keyFact: 'Wire localization: same-day only. Radioactive seed (I-125): up to 5 days before surgery, more flexibility, no external wire. Seed cannot be placed under MRI guidance. Bracketing = 2+ wires/seeds to mark extent of large lesion. Specimen radiograph always required to confirm retrieval.',
        radiopaediaUrl: 'https://radiopaedia.org/articles/radioactive-seed-localisation',
        tags: ['breast', 'intervention', 'localization', 'wire', 'radioactive seed'],
      },
    },
    {
      id: 'breast-sv-013',
      front: {
        question: 'What are MRI indications specific to breast implant evaluation and what sequences are used?',
      },
      back: {
        answer: 'Indications: suspected implant rupture (especially intracapsular silicone), prior inconclusive mammography/ultrasound, evaluation of peri-implant fluid collections. Sequences: T2-weighted fat-saturated (silicone-sensitive), silicone-only, and silicone-suppression sequences; no gadolinium for implant evaluation',
        explanation: 'Breast MRI for implants uses specialized sequences without contrast. The T2-weighted fat-saturated (STIR) sequence maximizes silicone signal while suppressing fat. Silicone-only sequences can selectively highlight silicone to confirm extracapsular silicone in lymph nodes or parenchyma. If cancer screening is needed in a patient with implants, a standard contrast-enhanced breast MRI protocol is performed additionally.',
        keyFact: 'Implant MRI: NO gadolinium (purely morphologic evaluation). Sequences: T2 fat-sat/STIR + silicone-only. MRI has highest sensitivity/specificity for intracapsular rupture. Sensitivity: MRI > US > mammography for intracapsular rupture. Saline implants: physical exam + mammography + US (MRI rarely needed).',
        tags: ['breast', 'implants', 'MRI', 'technique'],
      },
    },
    {
      id: 'breast-sv-014',
      front: {
        question: 'What is the "accordion effect" in the context of biopsy marker clips, and what mammographic view is obtained after clip placement?',
      },
      back: {
        answer: 'Clip migration away from the biopsy site (accordion effect) occurs because clip deployment happens in compressed breast but the breast expands post-compression; an orthogonal view mammogram must be obtained post-placement to assess for clip migration',
        explanation: 'Marker clips are placed in the biopsy cavity to mark the sampled site for future wire or seed localization. After the biopsy needle is removed and breast decompresses, the clip can migrate from its original position. An orthogonal mammogram (the perpendicular view not used for the biopsy) confirms the clip position relative to the lesion. Clip migration (accordion effect) is most problematic with stereotactic biopsy.',
        keyFact: 'Accordion effect = clip migrates from biopsy site after breast decompresses. Prevention/assessment: always obtain a post-biopsy mammogram in the orthogonal view to confirm clip position. Critical for subsequent wire/seed localization — a migrated clip must be accounted for at surgery.',
        tags: ['breast', 'intervention', 'biopsy', 'clip', 'mammography'],
      },
    },
    {
      id: 'breast-sv-015',
      front: {
        question: 'What is the radiation dose in a standard two-view bilateral screening mammogram and what is the MQSA phantom dose limit?',
      },
      back: {
        answer: 'Typical screening mammogram: ~2 mGy per view, ~8 mGy for bilateral two-view study; MQSA phantom dose limit: <3 mGy per image (for a standard 50% glandularity, 4.2 cm thick phantom)',
        explanation: 'The MQSA phantom is 4.2 cm thick with 50% glandularity. The dose limit is for the phantom, not for patients — there are no patient dose limits in MQSA. Dense breasts require more radiation and may exceed 3 mGy per view for patients. Digital mammography uses higher beam quality (kVp) which reduces dose compared to screen-film. DBT may deliver slightly higher dose than 2D digital mammography per examination but provides superior information.',
        keyFact: 'MQSA phantom: 4.2 cm, 50% glandularity, dose <3 mGy/view. Patient dose: ~2 mGy/view, ~8 mGy for bilateral screening (4 views). NO patient dose limits in MQSA — only phantom limits. Dense breasts CAN exceed 3 mGy/view in patients (and that\'s acceptable). Digital mammography: lower dose than screen-film due to higher beam quality.',
        tags: ['breast', 'mammography', 'radiation dose', 'MQSA', 'physics'],
      },
    },
    {
      id: 'breast-sv-016',
      front: {
        question: 'What is harmonic imaging in breast ultrasound and what are the advantages and limitations compared to conventional B-mode?',
      },
      back: {
        answer: 'Harmonic imaging uses the second harmonic frequency (2× the transmitted frequency) to generate images; advantages: less artifact, better lesion conspicuity, simpler cysts appear cleaner; limitation: compound imaging can obscure posterior acoustic features (e.g., ILC shadowing)',
        explanation: 'Tissue harmonic imaging reduces noise and surface reverberation artifacts, making cysts appear more anechoic and lesions more conspicuous. However, compound imaging (a related technique) can suppress posterior acoustic shadowing, making it harder to detect the subtle shadowing characteristic of ILC. This is an important limitation when evaluating for lobular carcinoma.',
        keyFact: 'Harmonic imaging: reduces artifact, cleaner cysts, better lesion conspicuity. KEY limitation: compound imaging can suppress posterior acoustic features — may hide the shadowing of ILC, making it even harder to detect. Always be aware of post-processing settings when evaluating for shadowing lesions.',
        tags: ['breast', 'ultrasound', 'technique', 'harmonic imaging'],
      },
    },
  ]},

  { id: 'breast-pathways',       label: 'Pathways & Next Steps',    cards: [
    {
      id: 'breast-path-001',
      front: {
        question: 'A screening mammogram shows a new round, circumscribed, isodense mass. What is the appropriate next step?',
      },
      back: {
        answer: 'Assign BI-RADS 0 (never BI-RADS 4 or 5 on a screener); recall for diagnostic workup including spot compression views and targeted ultrasound',
        explanation: 'All new or suspicious findings on a screening mammogram receive BI-RADS 0, regardless of how suspicious they appear — you cannot give BI-RADS 4 or 5 on a screening study. The patient is recalled for a diagnostic workup. If ultrasound shows a simple cyst, the mass can be downgraded to BI-RADS 2. If a mass with benign features is confirmed, it may receive BI-RADS 3.',
        keyFact: 'Screening exam: ONLY BI-RADS 0, 1, or 2 are valid final assessments. Any finding requiring more workup = BI-RADS 0. Never BI-RADS 3, 4, or 5 on a screening study. Key exam trap: "what would you give this finding on a screener?" — answer is always BI-RADS 0 if further workup needed.',
        tags: ['breast', 'BI-RADS', 'screening', 'mammography', 'pathway'],
      },
    },
    {
      id: 'breast-path-002',
      front: {
        question: 'A 45-year-old woman on her first mammogram has a focal asymmetry that persists on spot compression. Ultrasound shows no correlate. What is the appropriate management?',
      },
      back: {
        answer: 'BI-RADS 3 (probably benign) on a baseline exam with no ultrasound correlate; short-interval follow-up at 6 months',
        explanation: 'A nonpalpable focal asymmetry after complete diagnostic workup (spot compression + targeted ultrasound) that has no ultrasound correlate on a baseline exam has <1% risk of malignancy and can be placed in BI-RADS 3. If it is stable at 6-month and 12-month follow-up, the interval can be extended to annual. Two to three years of stability allows reclassification as BI-RADS 2.',
        keyFact: 'Focal asymmetry + no US correlate + baseline exam = BI-RADS 3 → 6-month follow-up. Key rules: (1) Only on BASELINE exam. (2) Must have completed full diagnostic workup. (3) If PALPABLE → generally NOT BI-RADS 3. (4) Developing asymmetry = NEVER BI-RADS 3.',
        tags: ['breast', 'BI-RADS', 'asymmetry', 'pathway', 'mammography'],
      },
    },
    {
      id: 'breast-path-003',
      front: {
        question: 'A 32-year-old woman presents with a palpable breast lump. Ultrasound shows an oval, parallel, circumscribed, homogeneously hypoechoic mass. What is the management?',
      },
      back: {
        answer: 'BI-RADS 3 (probably benign, consistent with fibroadenoma); short-interval follow-up at 6 months (some advocate core biopsy); mammography is not required in women under 30 but should be considered in this age group (30–39)',
        explanation: 'The described features are classic for a fibroadenoma. A mass meeting strict BI-RADS 3 ultrasound criteria (oval, parallel, circumscribed, not highly hypoechoic, with an echogenic capsule) has a false-negative rate of 0.5%. However, palpability in this age group raises the question of biopsy in some practices. For a definitive diagnosis and patient reassurance, core biopsy is often performed.',
        keyFact: 'Classic fibroadenoma US (oval, parallel, circumscribed, not highly hypoechoic) → BI-RADS 3. False-negative rate: 0.5% with all criteria met. Palpable finding with classic features: some assign BI-RADS 3 (controversial), others biopsy (BI-RADS 4A). Age 30–39 with palpable: consider both mammo and US.',
        tags: ['breast', 'fibroadenoma', 'ultrasound', 'BI-RADS', 'pathway'],
      },
    },
    {
      id: 'breast-path-004',
      front: {
        question: 'A 55-year-old woman has a spiculated mass on mammography. Core biopsy returns fibrocystic change. What is the next step?',
      },
      back: {
        answer: 'Discordant result — fibrocystic change does not explain a spiculated mass (which has >95% probability of malignancy at BI-RADS 5); recommend surgical excision',
        explanation: 'Radiologic-pathologic concordance requires that the biopsy result explains the imaging finding. A spiculated mass is a BI-RADS 5 finding with >95% probability of malignancy. A benign result like fibrocystic change cannot explain a spiculated mass and is therefore discordant. Surgical excision (excisional biopsy) is mandatory. If the original biopsy had targeted the correct lesion, the discordant result mandates re-excision.',
        keyFact: 'Discordance = biopsy result does not explain the imaging finding. BI-RADS 5 + benign biopsy → ALWAYS discordant → surgical excision. BI-RADS 4 + benign biopsy → may be concordant (benign result is acceptable if it could explain the finding). If ever in doubt: the more suspicious the imaging, the more you push for re-biopsy or excision.',
        tags: ['breast', 'concordance', 'biopsy', 'pathway', 'BI-RADS'],
      },
    },
    {
      id: 'breast-path-005',
      front: {
        question: 'What is the appropriate next imaging step for a woman with known breast cancer and negative axillary ultrasound who is considering breast-conserving therapy?',
      },
      back: {
        answer: 'Breast MRI for extent of disease evaluation — to detect multifocal/multicentric disease and assess the contralateral breast; contralateral cancer found in 3–5% by MRI vs 0.1–2% by mammography',
        explanation: 'Breast MRI changes surgical management in approximately 10–16% of patients by detecting additional ipsilateral foci and in ~3–5% by finding contralateral cancer. It can also assess pectoralis invasion, tumor size (most accurate modality), and axillary nodes. However, MRI has false positives and a negative MRI does not replace biopsy for a suspicious mammographic finding.',
        keyFact: 'Extent of disease MRI: changes surgical management in ~10–16%. Finds contralateral CA in 3–5% (vs 0.1–2% by mammography). Accurately measures tumor size (better than mammo or US). Limitation: MRI has false positives — additional MRI-detected lesions require biopsy before mastectomy is performed.',
        tags: ['breast', 'MRI', 'staging', 'pathway', 'extent of disease'],
      },
    },
    {
      id: 'breast-path-006',
      front: {
        question: 'A 50-year-old woman presents with bloody nipple discharge. Mammogram and ultrasound are negative. What is the next step?',
      },
      back: {
        answer: 'MRI (or galactography) for further evaluation of pathologic nipple discharge when mammography and ultrasound are negative',
        explanation: 'When initial imaging (mammogram + ultrasound) is negative for pathologic nipple discharge, further evaluation is warranted given the risk of papilloma or DCIS. MRI is increasingly preferred over galactography as it is non-invasive, shows the entire ductal system, and can identify enhancing intraductal masses. Galactography remains an option when MRI is unavailable. If a lesion is identified, biopsy/surgical excision is recommended.',
        keyFact: 'Bloody nipple discharge + negative mammo + negative US → MRI (preferred) or galactography. MRI for discharge: preferred over galactography when both are available. MRI is NEVER first-line for nipple discharge — always start with mammo + US per age. MRI also NOT indicated for physiologic (milky/bilateral) discharge.',
        tags: ['breast', 'nipple discharge', 'MRI', 'galactography', 'pathway'],
      },
    },
    {
      id: 'breast-path-007',
      front: {
        question: 'What is the appropriate initial imaging workup for a woman under age 30 with a new breast lump?',
      },
      back: {
        answer: 'Ultrasound first (score 9); mammography only if ultrasound is suspicious for cancer or if the clinical finding is striking with negative ultrasound; MRI is not appropriate for initial evaluation',
        explanation: 'In women under 30, dense breast tissue reduces mammographic sensitivity and radiation concerns are greater. Ultrasound is the most sensitive modality for this age group. If ultrasound is negative and the clinical finding is not alarming, clinical follow-up is appropriate. If ultrasound is suspicious, biopsy should be performed and mammography added for further workup. Fibroadenoma is the most common palpable mass in this demographic.',
        keyFact: 'Age <30 with palpable: US first (score 9). US negative + non-alarming clinical exam → clinical follow-up. US suspicious → biopsy + add mammography. US negative + alarming clinical exam → add mammography. MRI is NEVER first-line for a palpable mass in any age group.',
        tags: ['breast', 'ACR', 'appropriateness', 'palpable', 'ultrasound', 'pathway'],
      },
    },
    {
      id: 'breast-path-008',
      front: {
        question: 'What is the appropriate management of a biopsy-proven fibroadenoma with atypia (ADH found within or adjacent to a fibroadenoma) on core biopsy?',
        hint: 'Think about upgrade rates',
      },
      back: {
        answer: 'Surgical excision is recommended due to the significant upstage rate of ADH on core biopsy (~20% upgrade to DCIS or IDC at surgical excision)',
        explanation: 'ADH is a high-risk lesion with an upstage rate of approximately 20% to DCIS or IDC when excised surgically. When ADH is found within or adjacent to a fibroadenoma on core biopsy, the concern is that a higher-grade lesion may have been sampled incompletely. The combination of ADH + fibroadenoma warrants excision, as does ADH in any context on core biopsy.',
        keyFact: 'ADH on core biopsy → always surgical excision (upstage rate ~20%). ADH = DCIS-lite (same histology, just <2 ducts involved). Any of the 5 high-risk lesions (ADH, ALH, LCIS, radial scar, papilloma) found on core biopsy → excision. ADH upstage rate (~20%) is the highest of all high-risk lesions.',
        tags: ['breast', 'ADH', 'biopsy', 'high-risk', 'pathway'],
      },
    },
    {
      id: 'breast-path-009',
      front: {
        question: 'A 62-year-old postmenopausal woman is found to have a solitary axillary lymph node mass with no palpable or mammographic breast primary. What is the next best step?',
      },
      back: {
        answer: 'Breast MRI — it is the best modality to detect an occult breast primary in a patient with axillary metastases and no identifiable primary on mammography/ultrasound',
        explanation: 'Axillary metastases from an occult breast primary occur when the primary tumor is too small to detect by conventional imaging. MRI detects the primary in approximately 70% of such cases, enabling breast-conserving therapy. Without MRI, mastectomy is typically required. Biopsy of the axillary node is needed to confirm metastatic carcinoma and establish estrogen receptor status.',
        keyFact: 'Axillary adenopathy + no breast primary on mammography/US → MRI (detects primary in ~70%). This is a specific MRI indication. Biopsy the axillary node: confirms carcinoma and provides receptor status. If MRI also negative → mastectomy vs axillary dissection + whole-breast irradiation.',
        tags: ['breast', 'MRI', 'occult primary', 'staging', 'pathway'],
      },
    },
    {
      id: 'breast-path-010',
      front: {
        question: 'What is the workup when a skin thickening is identified on mammography in the absence of a focal mass?',
      },
      back: {
        answer: 'Bilateral skin thickening → usually benign/systemic (CHF, renal failure, liver failure); Unilateral skin thickening → more concerning; requires clinical correlation and consider inflammatory breast cancer, prior radiation, mastitis, lymphatic obstruction',
        explanation: 'Bilateral skin thickening suggests a systemic cause (fluid overload from CHF, renal failure, hepatic disease causing hypoalbuminemia). Radiation therapy usually produces unilateral skin thickening that peaks on the first post-RT mammogram and then regresses. Unilateral skin thickening in a non-irradiated breast should raise concern for IBC, locally advanced carcinoma, or lymphatic obstruction from axillary adenopathy.',
        keyFact: 'Bilateral skin thickening = systemic (CHF, renal failure, liver failure). Unilateral skin thickening = local cause: radiation (improves over time), mastitis, IBC (does NOT fully resolve with antibiotics), lymphatic obstruction. Post-RT: peaks on first post-RT mammogram, then should improve — worsening = recurrence/IBC.',
        tags: ['breast', 'skin thickening', 'mammography', 'IBC', 'pathway'],
      },
    },
    {
      id: 'breast-path-011',
      front: {
        question: 'What is the appropriate surveillance imaging after breast-conserving therapy (lumpectomy + radiation)?',
      },
      back: {
        answer: 'Diagnostic mammography at 6–12 months post-surgery (first post-operative mammogram), then annual diagnostic mammography of the treated breast and annual screening mammography of the contralateral breast',
        explanation: 'The first post-operative mammogram establishes the baseline appearance of the treated breast at maximum distortion. All subsequent mammograms are compared to this baseline. Local recurrence occurs in 6–8% of patients; recurrence peaks at approximately 4 years post-treatment. MRI may be appropriate as an adjunct if the mammogram is limited by dense tissue or implants.',
        keyFact: 'Post-BCT surveillance: diagnostic mammo at 6–12 months (maximum distortion = new baseline), then annual. Local recurrence: 6–8% with radiation (vs 35% without). Peak recurrence: 4 years. Early recurrence (<3 years): at original tumor bed. Late recurrence (>4–5 years): may be in different location (new primary).',
        tags: ['breast', 'post-treatment', 'surveillance', 'lumpectomy', 'pathway'],
      },
    },
    {
      id: 'breast-path-012',
      front: {
        question: 'What is the "camel nose" sign on mammography and what does it represent?',
      },
      back: {
        answer: 'A technical positioning artifact on the MLO view where the breast has not been adequately pulled "up and out" by the technologist, creating a double-hump appearance at the inferior breast; indicates inadequate positioning requiring a repeat view (BI-RADS 0)',
        explanation: 'The camel nose sign occurs when the inferior breast folds on itself during MLO positioning, usually because the technologist has not used the proper "sweep up and out" technique. This creates an artificial double-contour or fold artifact at the inferior breast. It reduces the amount of inferior breast tissue included and may obscure pathology. A repeat MLO is required.',
        keyFact: 'Camel nose = inferior breast folding artifact on MLO from poor "sweep up and out" positioning. Indicates inadequate MLO. Repeat view required → BI-RADS 0 for technical repeat. The sweep up and out technique by techs reduces this artifact. Blur is another technical artifact requiring repeat (from motion or inadequate compression).',
        tags: ['breast', 'mammography', 'technique', 'artifact', 'BI-RADS'],
      },
    },
    {
      id: 'breast-path-013',
      front: {
        question: 'When is MRI-guided biopsy required vs. when can ultrasound-guided biopsy be used for an MRI-detected lesion?',
      },
      back: {
        answer: 'Second-look ultrasound first: if US correlate found → US-guided biopsy (preferred). If no US correlate after careful second-look US → MRI-guided biopsy required. MRI-guided biopsy requires gadolinium and is time-sensitive',
        explanation: 'MRI-guided biopsy is the gold standard for MRI-only lesions but is expensive and technically demanding. A thorough second-look targeted ultrasound finds a correlate in 56–57% of cases, allowing the simpler US-guided approach. For MRI-guided biopsy, contrast is administered and the lesion must be targeted before washout obscures it. A lateral approach to the breast is preferred to maximize access to posterior tissue.',
        keyFact: 'MRI-detected lesion workflow: (1) Second-look US → US correlate? YES → US biopsy. NO → (2) MRI-guided biopsy (requires gadolinium, time-sensitive, 9–11 gauge vacuum-assisted, always place marker clip post-biopsy). Lateral approach preferred. Post-biopsy clip confirms sampling.',
        tags: ['breast', 'MRI', 'biopsy', 'intervention', 'pathway'],
      },
    },
    {
      id: 'breast-path-014',
      front: {
        question: 'What is the recommended surveillance protocol for a patient with LCIS found on core needle biopsy?',
      },
      back: {
        answer: 'LCIS is typically managed with increased surveillance (clinical breast exam every 6 months + annual mammography ± annual breast MRI if lifetime risk >20%); surgical excision may be considered for pleomorphic LCIS or when clinical/imaging concern remains',
        explanation: 'LCIS is classically occult on imaging and is usually found incidentally at biopsy. It confers an 11× increased lifetime risk of breast cancer compared to the general population but is not itself an obligate cancer precursor. Classic LCIS is generally managed with surveillance and chemoprevention (tamoxifen/raloxifene). Pleomorphic LCIS behaves more aggressively and may warrant excision, similar to DCIS.',
        keyFact: 'LCIS: 11× lifetime breast CA risk. Mammographically occult (incidental biopsy finding). Classic LCIS: enhanced surveillance + chemoprevention (tamoxifen/raloxifene). Pleomorphic LCIS: more aggressive, similar to DCIS → excision warranted. Key: LCIS can progress to ILC or IDC (not obligated, risk is 1–2% per year).',
        tags: ['breast', 'LCIS', 'high-risk', 'pathway', 'surveillance'],
      },
    },
    {
      id: 'breast-path-015',
      front: {
        question: 'What is the imaging approach to a patient presenting with a hot, swollen, red breast that partially responds to antibiotics over 2 weeks?',
      },
      back: {
        answer: 'Partial response to antibiotics does NOT exclude IBC — IBC can partially improve with antibiotics but does not resolve; skin punch biopsy is required to confirm or exclude IBC; breast MRI may assist in identifying the primary lesion',
        explanation: 'Inflammatory breast cancer is the most important diagnosis to exclude in a red, swollen breast. The classic teaching is that IBC does not respond to antibiotics at all, but in practice it can show partial improvement, creating diagnostic confusion with mastitis. The key distinction: mastitis fully resolves with appropriate antibiotic therapy; IBC does not fully resolve. Any breast infection that incompletely resolves after 1–2 weeks of antibiotics warrants skin punch biopsy.',
        keyFact: 'Rule: "does not FULLY resolve with antibiotics" = IBC until proven otherwise. IBC can show partial improvement with antibiotics (trap). Skin punch biopsy confirms dermal lymphatic tumor emboli. Remember IBC is T4d regardless of tumor size. MRI: best for identifying primary lesion in IBC.',
        tags: ['breast', 'IBC', 'mastitis', 'pathway', 'biopsy'],
      },
    },
  ]},
]