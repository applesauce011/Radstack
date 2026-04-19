// ============================================================
// RadStack — Imaging Physics Deck
// ============================================================
// Naming convention: physics-[section]-[###]
// ============================================================

export const physicsSubsections = [
  // ──────────────────────────────────────────────────────────
  // CONTRAST MEDIA
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-contrast',
    label: 'Contrast Media',
    cards: [
      {
        id: 'physics-contrast-001',
        front: {
          question: 'A patient with a prior moderate allergic-type contrast reaction requires an urgent CT with IV contrast. What premedication regimen is appropriate, and what is the minimum time required for it to be effective?',
          hint: 'IV steroids have a specific minimum lead time.',
        },
        back: {
          answer: 'Emergent premedication: hydrocortisone 200 mg IV at 5 hours and 1 hour before contrast, plus diphenhydramine 50 mg IV 1 hour prior. Minimum effective lead time: 4 hours.',
          explanation: 'IV steroids require at least 4 hours before contrast administration to be effective — giving them sooner than this has not been shown to reduce reaction risk. For elective cases, oral prednisone 50 mg at 13, 7, and 1 hour pre-procedure is used. Premedication reduces but does not eliminate reaction risk; prior severe allergic-type reactions are a relative contraindication to re-exposure.',
          keyFact: 'IV steroids must be given at least 4 hours before contrast to work. A repeat reaction is most likely to mirror the prior reaction in severity — but may be worse or milder.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/contrast-medium-reaction',
          tags: ['contrast', 'allergy', 'premedication', 'safety', 'iodinated'],
        },
      },
      {
        id: 'physics-contrast-002',
        front: {
          question: 'What are the three severity classifications of acute contrast reactions, and which category requires immediate medical management?',
        },
        back: {
          answer: 'Mild (self-limited, no treatment), Moderate (not immediately life-threatening, may require treatment), Severe (life-threatening, requires immediate treatment).',
          explanation: 'Mild reactions include transient flushing, nausea, urticaria, and rhinorrhea — these are self-limited and require observation only. Moderate reactions include bronchospasm, severe urticaria, facial/tongue swelling without dyspnea, and vasovagal reactions requiring treatment. Severe reactions include anaphylaxis, laryngeal edema with stridor, severe bronchospasm with hypoxia, and cardiovascular collapse.',
          keyFact: 'Mild physiologic reactions (warmth, flushing, mild nausea) require no treatment. Urticaria = mild/moderate allergic. Bronchospasm + hypoxia = severe → epinephrine.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/contrast-medium-reaction',
          tags: ['contrast', 'allergy', 'anaphylaxis', 'safety', 'iodinated'],
        },
      },
      {
        id: 'physics-contrast-003',
        front: {
          question: 'A patient in the scanner develops hypotension and bradycardia after IV contrast injection. What is the diagnosis and first-line treatment?',
        },
        back: {
          answer: 'Vasovagal reaction. Treatment: legs elevated/Trendelenburg, IV fluids, atropine 0.5 mg IV if poorly responsive (up to 3 mg total).',
          explanation: 'Vasovagal reactions are non-allergic (physiochemotoxic) and characterized by bradycardia + hypotension — distinguishing them from anaphylaxis, which causes tachycardia + hypotension. Mild vasovagal reactions are self-limited. Atropine is used for bradycardia that does not respond to positioning and fluids.',
          keyFact: 'Bradycardia + hypotension = vasovagal (non-allergic). Tachycardia + hypotension = anaphylaxis (allergic). Treat vasovagal with Trendelenburg + fluids + atropine; treat anaphylaxis with epinephrine.',
          tags: ['contrast', 'vasovagal', 'anaphylaxis', 'safety', 'treatment'],
        },
      },
      {
        id: 'physics-contrast-004',
        front: {
          question: 'What is the treatment for severe allergic-type contrast reaction with anaphylaxis?',
        },
        back: {
          answer: 'Epinephrine IM 1:1,000 — 0.3 ml (0.3 mg); or IV 1:10,000 — 1 ml (0.1 mg). Plus oxygen, IV fluids, Trendelenburg. May repeat up to 1 mg total.',
          explanation: 'Anaphylaxis presents with hypotension and tachycardia (distinguishing it from vasovagal which has bradycardia), along with diffuse erythema, urticaria, bronchospasm, or angioedema. Epinephrine is the cornerstone of treatment and should be given promptly. IM epinephrine (1:1,000) is preferred in most settings; IV epinephrine (1:10,000) is used for IV access.',
          keyFact: 'Epinephrine for anaphylaxis: IM 1:1,000 = 0.3 mg; IV 1:10,000 = 0.1 mg. Max 1 mg total. IV epi concentration is 10x more dilute than IM — do not confuse.',
          tags: ['contrast', 'anaphylaxis', 'epinephrine', 'treatment', 'emergency'],
        },
      },
      {
        id: 'physics-contrast-005',
        front: {
          question: 'A patient with a shellfish allergy is referred for contrast-enhanced CT. Does this increase their risk of an iodinated contrast reaction compared to other allergies?',
        },
        back: {
          answer: 'No. Shellfish or seafood allergy does not confer greater risk of contrast reaction than any other allergy.',
          explanation: 'The historical concern about shellfish allergy and iodine sensitivity is a myth. Shellfish allergy is caused by proteins (tropomyosin), not iodine. Having any allergy (food, drug, or environmental) is a mild risk factor for contrast reactions, but shellfish allergy is not a specific risk factor beyond this baseline. Asthma is a more significant specific risk factor for allergic-type contrast reactions.',
          keyFact: 'Shellfish allergy ≠ increased iodine contrast risk (beyond baseline allergy risk). Asthma IS a specific risk factor. The iodine/shellfish link is a debunked myth.',
          tags: ['contrast', 'allergy', 'iodinated', 'safety', 'risk'],
        },
      },
      {
        id: 'physics-contrast-006',
        front: {
          question: 'What eGFR threshold is most commonly used to stratify risk for contrast-induced nephropathy (CIN) with IV iodinated contrast?',
        },
        back: {
          answer: 'eGFR < 30 mL/min/1.73m² is the most commonly used threshold for high CIN risk.',
          explanation: 'At eGFR ≥ 45, IV iodinated contrast is not an independent risk factor for AKI. At eGFR 30–44, CIN is exceptionally rare. At eGFR < 30, careful risk-benefit assessment is required. Patients with end-stage renal disease on chronic dialysis can generally receive standard contrast doses (attention to volume status), as they are already dialysis-dependent. Gadolinium-based contrast agents are not known to cause CIN.',
          keyFact: 'eGFR ≥ 45 = contrast safe. eGFR 30–44 = very low risk. eGFR < 30 = assess risk/benefit. ESRD on dialysis = can give contrast (watch volume). Gad does NOT cause CIN.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/contrast-induced-nephropathy',
          tags: ['contrast', 'nephropathy', 'CIN', 'iodinated', 'renal'],
        },
      },
      {
        id: 'physics-contrast-007',
        front: {
          question: 'A diabetic patient on metformin requires IV contrast for an urgent CT. When should metformin be withheld, and for how long after contrast?',
        },
        back: {
          answer: 'In patients with normal renal function: no need to withhold. In patients with multiple comorbidities: withhold at time of contrast and for 48 hours after.',
          explanation: 'Metformin itself is not nephrotoxic, but if contrast causes AKI (PC-AKI), metformin can accumulate and rarely cause lactic acidosis. In patients with normal renal function, the risk is negligible and metformin need not be stopped. Withholding applies to patients with multiple comorbidities (not just abnormal renal function). Notably, metformin does NOT need to be withheld before gadolinium-based contrast.',
          keyFact: 'Normal renal function → no metformin hold needed. Multiple comorbidities → hold at time of contrast, resume after 48 hrs. Gadolinium contrast: no metformin concern at all.',
          tags: ['contrast', 'metformin', 'iodinated', 'renal', 'safety'],
        },
      },
      {
        id: 'physics-contrast-008',
        front: {
          question: 'What is the effect of iodinated contrast on radioactive iodine (I-131) thyroid therapy, and what timing is recommended?',
        },
        back: {
          answer: 'Iodinated contrast reduces thyroid I-131 uptake by ~50% for up to one week. Iodinated contrast should be avoided for one month prior to planned I-131 therapy.',
          explanation: 'Iodinated contrast media saturates the iodine pool and competes with radioiodine uptake by the thyroid. The effect persists for weeks because the iodine load is substantial relative to normal dietary intake. One month of avoidance is the standard recommendation to allow iodine washout before I-131 administration.',
          keyFact: 'Iodinated contrast → 50% reduced thyroid I-131 uptake for ~1 week → avoid contrast for 1 month before planned I-131 therapy.',
          tags: ['contrast', 'thyroid', 'iodinated', 'nuclear medicine', 'I-131'],
        },
      },
      {
        id: 'physics-contrast-009',
        front: {
          question: 'Is iodinated contrast safe to administer during pregnancy? What about gadolinium?',
        },
        back: {
          answer: 'Iodinated contrast: acceptable if medically necessary (no confirmed teratogenicity; placental crossing occurs). Gadolinium: should NOT be given in pregnancy (accumulates in amniotic fluid indefinitely with risk of free gadolinium ion dissociation).',
          explanation: 'Iodinated contrast crosses the placenta but no mutagenic or teratogenic effects have been confirmed. Informed consent is recommended. Gadolinium chelates cross the placenta, accumulate in amniotic fluid, and may remain there indefinitely. Free gadolinium ion dissociation is a concern, making gadolinium contraindicated throughout pregnancy unless the benefit clearly outweighs the risk.',
          keyFact: 'Iodinated contrast in pregnancy = acceptable if needed (get consent). Gadolinium in pregnancy = contraindicated (amniotic fluid accumulation, free Gd risk).',
          tags: ['contrast', 'pregnancy', 'gadolinium', 'iodinated', 'safety'],
        },
      },
      {
        id: 'physics-contrast-010',
        front: {
          question: 'A breastfeeding mother receives gadolinium contrast. What counseling should she receive about breastfeeding after the examination?',
        },
        back: {
          answer: 'Breastfeeding can safely continue without interruption. Less than 0.04% of the maternal dose enters breast milk; of that, only 1% is absorbed by the infant GI tract — total infant dose is ~0.0004% of maternal dose.',
          explanation: 'The plasma half-life of gadolinium contrast is ~2 hours. The minimal amount excreted in breast milk is further reduced by poor GI absorption in the infant, making the total fetal dose negligible. The ACR and major bodies support continued breastfeeding without a mandatory pump-and-dump period, though mothers who are concerned may choose to abstain for 24 hours.',
          keyFact: 'Gadolinium and breastfeeding: continue breastfeeding — infant absorbed dose is ~0.0004% of maternal dose. No mandatory interruption needed (same applies to iodinated contrast: <0.01% absorbed by infant).',
          tags: ['contrast', 'gadolinium', 'breastfeeding', 'safety', 'MRI'],
        },
      },
      {
        id: 'physics-contrast-011',
        front: {
          question: 'What is nephrogenic systemic fibrosis (NSF), and which patients are at highest risk?',
        },
        back: {
          answer: 'NSF is diffuse fibrosis of skin, subcutaneous tissue, and visceral organs caused by gadolinium exposure in patients with severely reduced renal function. Highest risk: eGFR < 30 mL/min/1.73m² or acute kidney injury.',
          explanation: 'NSF risk ranges from 1–7% after a single gadolinium exposure in patients with ESRD. Free gadolinium ion dissociation from the chelate (in the setting of slow renal clearance) is believed to trigger the fibrotic reaction. Group I agents (gadodiamide, gadopentetate dimeglumine, gadoversetamide) carry the highest risk. Only one confirmed case of NSF has been reported with eGFR > 30.',
          keyFact: 'NSF: gadolinium + eGFR < 30 or AKI = 1–7% risk. Group I agents (gadodiamide, gadopentetate, gadoversetamide) have highest unconfounded NSF cases. One confirmed case with eGFR > 30.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nephrogenic-systemic-fibrosis',
          tags: ['gadolinium', 'NSF', 'renal', 'MRI', 'contrast'],
        },
      },
      {
        id: 'physics-contrast-012',
        front: {
          question: 'What is the most serious complication of IV contrast extravasation, and when should surgical consultation be obtained?',
        },
        back: {
          answer: 'Most serious complication: compartment syndrome. Surgical consultation for: progressive swelling/pain, altered tissue perfusion, change in sensation or strength, skin ulceration, or blistering.',
          explanation: 'Iodinated contrast is toxic to soft tissue and skin. While serious adverse events after extravasation are rare, large volumes can cause compartment syndrome. The use of automatic injectors increases risk of large volume extravasation. Elevation of the extremity is recommended (though without strong evidence). There is no evidence favoring warm vs. cold compresses — both are commonly used.',
          keyFact: 'Extravasation serious complication = compartment syndrome. Surgical consult for: progressive swelling, pain, altered perfusion, sensory/motor change, ulceration, blistering.',
          tags: ['contrast', 'extravasation', 'iodinated', 'complication', 'safety'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // X-RAY & FLUOROSCOPY PHYSICS
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-xray',
    label: 'X-Ray & Fluoroscopy',
    cards: [
      {
        id: 'physics-xray-001',
        front: {
          question: 'What two mechanisms generate X-rays in a standard radiographic tube, and what is the approximate proportion of each?',
        },
        back: {
          answer: 'Bremsstrahlung (braking radiation): ~90%. Characteristic radiation: ~10%.',
          explanation: 'Bremsstrahlung is produced when high-energy electrons are deflected by the nuclear field of tungsten anode atoms, releasing energy as photons across a spectrum. Characteristic radiation occurs when an incident electron ejects a K-shell electron; the vacancy is filled by an outer shell electron, emitting a photon of fixed energy. Tungsten\'s K-edge is 70 keV, so characteristic X-rays are produced only when kV exceeds 70 kVp.',
          keyFact: '90% bremsstrahlung (spectrum), 10% characteristic (fixed energy). Tungsten K-edge = 70 keV → no characteristic radiation below 70 kVp. 99% of electron energy → heat; only 1% → X-rays.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/x-ray-tube',
          tags: ['XR', 'physics', 'x-ray generation', 'bremsstrahlung', 'characteristic radiation'],
        },
      },
      {
        id: 'physics-xray-002',
        front: {
          question: 'What is the effect of increasing kVp by 15% on X-ray photon output and patient dose (when using automatic exposure control)?',
        },
        back: {
          answer: 'Increasing kVp by 15% doubles photon output (↑ 100%). With AEC, this allows the mAs to be halved, decreasing patient dose and decreasing image contrast.',
          explanation: 'X-ray production is proportional to (kV)². A 15% increase in kV approximately doubles output. In practice, AEC will reduce mAs to maintain receptor dose, so the net effect is: same image density, lower patient dose, lower contrast (more Compton scatter at higher energies). This is the basis of the "15% rule" in radiographic technique.',
          keyFact: '↑ kVp 15% → ↑ photons 100% (double). With AEC: ↓ mAs by half → same density + ↓ dose + ↓ contrast. kV² ∝ X-ray output.',
          tags: ['XR', 'kVp', 'mAs', 'dose', 'contrast', 'physics'],
        },
      },
      {
        id: 'physics-xray-003',
        front: {
          question: 'What are the three types of X-ray interactions with matter, and which dominates in soft tissue at diagnostic radiography energies?',
        },
        back: {
          answer: 'Coherent scatter (<5%, no dose contribution), Compton scatter (dominates at >25 keV in soft tissue), Photoelectric effect (dominates at <25 keV in soft tissue).',
          explanation: 'Coherent (Rayleigh) scatter changes direction without energy transfer — negligible in diagnostic imaging. Compton scatter ejects an outer shell electron and produces a lower-energy scattered photon in all directions; it is proportional to electron density / energy and is the main source of image noise/fog. Photoelectric effect is proportional to Z³/E³ — it absorbs the photon completely and produces contrast between tissues of different atomic number.',
          keyFact: 'Compton ∝ electron density/E → dominates >25 keV soft tissue (diagnostic XR range). Photoelectric ∝ Z³/E³ → dominates <25 keV or in bone/contrast agents. PE = all photon energy absorbed = more dose.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/photoelectric-effect',
          tags: ['XR', 'physics', 'Compton', 'photoelectric', 'attenuation'],
        },
      },
      {
        id: 'physics-xray-004',
        front: {
          question: 'What is the half-value layer (HVL), and what are the typical HVL values for mammography, standard radiography, and CT?',
        },
        back: {
          answer: 'HVL = thickness of material that attenuates 50% of the incident beam. Mammography: 0.3 mm Al. Standard radiography: 3 mm Al. CT: 8–9 mm Al.',
          explanation: 'HVL is a measure of beam quality (penetrating power). A higher HVL means a more penetrating (harder) beam with more high-energy photons. Aluminum is the standard reference material. State regulations require radiographic beam quality of HVL > 2.5 mm Al at 80 kVp. Mammography uses a much softer beam (lower kV, Mo target) hence the very low HVL.',
          keyFact: 'HVL = 50% attenuation thickness. Mammo: 0.3 mm Al. Radiography: 3 mm Al. CT: 8–9 mm Al. HVL ↑ with ↑ photon energy (harder beam). Regulatory minimum: >2.5 mm Al at 80 kVp.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/half-value-layer',
          tags: ['XR', 'HVL', 'beam quality', 'mammography', 'CT', 'physics'],
        },
      },
      {
        id: 'physics-xray-005',
        front: {
          question: 'What is the heel effect, what causes it, and how is it used advantageously in mammography?',
        },
        back: {
          answer: 'The heel effect is reduced X-ray intensity at the anode side due to self-attenuation within the anode. Main determinant: anode angle (~15°). In mammography: cathode directed toward chest wall (thicker tissue) to improve uniformity.',
          explanation: 'X-rays produced deeper in the anode must travel through more anode material, especially at the anode side, leading to progressive attenuation. The smaller the anode angle, the more pronounced the heel effect. In mammography, the breast is thickest at the chest wall — placing the cathode (high-intensity) side toward the chest wall and the anode toward the nipple compensates for the thickness gradient.',
          keyFact: 'Heel effect: ↓ intensity at anode side. ↓ anode angle → ↑ heel effect. Mammography: cathode toward chest wall (thick) to compensate. Mnemonic: AC = Anode toward nipple, Cathode toward chest wall.',
          tags: ['XR', 'heel effect', 'mammography', 'anode', 'physics'],
        },
      },
      {
        id: 'physics-xray-006',
        front: {
          question: 'What is the Bucky factor, and what is its typical value in radiography?',
        },
        back: {
          answer: 'The Bucky factor is the ratio of incident radiation to transmitted radiation through the grid — it represents the relative increase in dose required when using a grid. Typical value: 5–10 (e.g., mAs increases from 40 to 200).',
          explanation: 'Grids reduce scatter reaching the detector, improving contrast, but they also absorb some primary radiation (~30%) and all scatter. To maintain adequate image density, mAs must be increased proportionally. A grid ratio of 8–12:1 is typical in radiography. Grids are not used for extremity radiography because bone has high Z (less scatter) and the part is not very thick.',
          keyFact: 'Bucky factor 5–10 = dose multiplier when using a grid. Grid ratio = height/width (8–12:1 typical). Grids ↑ contrast by ↓ scatter. NOT used for extremities (high-Z bone + thin part = less scatter).',
          tags: ['XR', 'grid', 'Bucky factor', 'scatter', 'dose', 'physics'],
        },
      },
      {
        id: 'physics-xray-007',
        front: {
          question: 'What are the three types of digital X-ray detectors, and what material is used in each?',
        },
        back: {
          answer: 'Photostimulable phosphor (CR): barium fluorohalide (BaFBr). Scintillator (indirect flat panel, DR): cesium iodide (CsI). Photoconductor (direct flat panel, DR): selenium (Se).',
          explanation: 'CR plates store X-ray energy as a latent image in BaFBr crystals, read out by red laser (emitting blue light). Indirect DR uses CsI to convert X-rays to light, then a photodiode converts light to charge — light spreading limits resolution. Direct DR uses selenium to directly convert X-rays to charge without a light intermediate, giving better resolution but poorer X-ray absorption (K-edge 13 keV). CsI has a K-edge of ~35 keV, making it a good absorber at diagnostic energies.',
          keyFact: 'CR = BaFBr (read by red laser → blue light). Indirect DR = CsI (X-ray→light→charge; light spreads→blur). Direct DR = Se (X-ray→charge directly; sharpest but Se K-edge only 13 keV). Selenium used in digital mammo.',
          tags: ['XR', 'digital detector', 'CR', 'DR', 'physics'],
        },
      },
      {
        id: 'physics-xray-008',
        front: {
          question: 'What three factors cause image blur (reduced resolution) in radiography, and which does NOT affect image contrast?',
        },
        back: {
          answer: 'Three blur factors: (1) focal spot blur, (2) motion blur (related to exposure time), (3) receptor blur (intensifying screen thickness). None of these three affect image contrast — blur and contrast are independent parameters.',
          explanation: 'Focal spot blur increases with larger focal spot size and shorter source-to-object or longer object-to-detector distance. Motion blur is reduced by shorter exposure times. Screen blur increases with thicker screens (faster screens blur more). Contrast is determined by subject contrast (kV, tissue differences, scatter) and detector contrast — not by resolution factors.',
          keyFact: 'Blur ≠ contrast. Only 3 blur sources: focal spot, motion, receptor. Faster screens → more blur. kV and scatter affect contrast, NOT blur. Collimation: unique in that it ↑ quality AND ↓ dose.',
          tags: ['XR', 'resolution', 'blur', 'image quality', 'physics'],
        },
      },
      {
        id: 'physics-xray-009',
        front: {
          question: 'In fluoroscopy, what is the federal regulatory dose rate limit, and what happens when high-dose mode is activated?',
        },
        back: {
          answer: 'Standard limit: 100 mGy/min entrance air kerma. High-dose mode (with audible/visual alarm): 200 mGy/min. Skin dose rate during continuous fluoroscopy: 10–30 mGy/min.',
          explanation: 'Fluoroscopy operates at 1–5 mA (typically 3 mA), producing ~0.01 µGy/frame — 500x less than a single chest X-ray per frame. The low dose per frame is offset by the long acquisition times possible in complex procedures. High-dose mode raises the limit to 200 mGy/min and requires an alarm. At 200 mGy/min in high-dose mode, 2 Gy can be delivered in 10 minutes, which approaches skin injury thresholds.',
          keyFact: 'Fluoro dose limit: 100 mGy/min standard, 200 mGy/min high-dose (with alarm). Skin injury risk at >2 Gy. Dose per fluoro frame = ~0.01 µGy vs chest XR = 5 µGy (500x less per frame).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fluoroscopy',
          tags: ['fluoroscopy', 'dose', 'radiation safety', 'physics', 'XR'],
        },
      },
      {
        id: 'physics-xray-010',
        front: {
          question: 'How does electronic magnification in fluoroscopy affect patient dose, and by how much?',
        },
        back: {
          answer: 'Halving the field of view (e.g., 10 cm → 5 cm) increases patient entrance air kerma by a factor of 4, as the AEC compensates for the dimmer image on the output phosphor.',
          explanation: 'When FOV is reduced by half, the image is projected onto the same output phosphor but from a smaller input area — the image intensifier output becomes 4x dimmer. The AEC responds by increasing the X-ray output 4-fold to restore brightness. Similarly, reducing FOV from 10 cm to 7 cm (a factor of ~1.4 reduction) doubles patient entrance kerma. This is a key concept: magnification = more dose.',
          keyFact: 'Electronic magnification: halve FOV → 4x patient dose (AEC compensates). Magnification mammography: increases dose similarly. Dose-spreading technique reduces maximum skin dose in fluoroscopy.',
          tags: ['fluoroscopy', 'magnification', 'dose', 'physics', 'AEC'],
        },
      },
      {
        id: 'physics-xray-011',
        front: {
          question: 'What is the linear attenuation coefficient (µ), and what does the equation N = N₀ × e^(−µt) describe?',
        },
        back: {
          answer: 'µ (cm⁻¹) is the fraction of photons removed per unit thickness of material. The equation describes exponential attenuation: N = transmitted photons, N₀ = incident photons, t = thickness. For µ < 0.1/cm, µ ≈ fraction of photons that interact.',
          explanation: 'X-ray attenuation follows an exponential law because each layer of material removes a constant fraction of remaining photons. The mass attenuation coefficient (µ/ρ) is independent of density, allowing comparison between materials. HVL = 0.693/µ. This exponential relationship is why doubling material thickness does not halve transmission twice — each successive layer removes fewer photons.',
          keyFact: 'N = N₀ e^(−µt). HVL = 0.693/µ. Mass attenuation coefficient µ/ρ is density-independent. Example: µ = 0.5/cm → e^(−0.5×1) = 61% transmitted.',
          tags: ['XR', 'attenuation', 'physics', 'HVL', 'beam'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // MAMMOGRAPHY PHYSICS
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-mammo',
    label: 'Mammography Physics',
    cards: [
      {
        id: 'physics-mammo-001',
        front: {
          question: 'What target/filter combination is standard in mammography, and what characteristic X-ray energies does it produce?',
        },
        back: {
          answer: 'Molybdenum (Mo) target with Mo filter. Characteristic X-rays at 17 keV and 19 keV. Average energy: ~17 keV.',
          explanation: 'Mo has a K-edge of 20 keV. The Mo filter transmits characteristic X-rays at 17 and 19 keV while attenuating lower energy (non-imaging) and higher energy (contrast-reducing) photons. For thicker/denser breasts, a rhodium (Rh) filter shifts the spectrum to higher energies. An Rh target/Rh filter is used for the thickest breasts. The average mammographic energy (~17 keV) is much lower than conventional radiography, maximizing photoelectric contrast between tissues.',
          keyFact: 'Mo/Mo: characteristic X-rays at 17 and 19 keV. Mo filter lets characteristic X-rays through, blocks lower and higher energies. Rh filter → higher energies for dense/thick breasts. Average mammo energy: ~17 keV.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mammography-physics',
          tags: ['mammography', 'physics', 'molybdenum', 'target', 'X-ray'],
        },
      },
      {
        id: 'physics-mammo-002',
        front: {
          question: 'What is the federal regulatory limit for average glandular dose (AGD) in mammography, and what is typical?',
        },
        back: {
          answer: 'Federal regulatory limit (MQSA): AGD < 3 mGy per view per breast. Typical AGD: ~1.5–1.8 mGy per view (digital slightly lower). MQSA phantom test: AGD < 3 mGy with grid, < 1 mGy without.',
          explanation: 'AGD is the standard dose metric for mammography because glandular tissue is the radiosensitive component. The MQSA requires interpreting physicians to read 240 mammograms in the prior 24 months during a 6-month training period. Quality control includes weekly phantom testing. AGD < 3 mGy per view is the only federal dose limit other than the fluoroscopy 100/200 mGy/min limits.',
          keyFact: 'MQSA AGD limit: <3 mGy/view. Typical: ~1.5–1.8 mGy/view. MQSA and fluoroscopy limits are the ONLY two federal dose regulations. Weekly phantom testing with AGD <3 mGy (grid) or <1 mGy (no grid).',
          tags: ['mammography', 'dose', 'MQSA', 'AGD', 'radiation safety'],
        },
      },
      {
        id: 'physics-mammo-003',
        front: {
          question: 'What are the key technical parameters that distinguish mammography from standard radiography?',
        },
        back: {
          answer: 'Lower kV (25 kV vs ~70–120 kV), smaller focal spot (0.3 mm contact, 0.1 mm magnification), longer exposure time (1 s vs 50 ms), higher mAs (~100 mAs), lower grid ratio (5:1), higher receptor dose (200 µGy vs 5 µGy), single-emulsion film.',
          explanation: 'Mammography uses low kV to maximize photoelectric interactions, enhancing contrast between soft tissue structures of similar density. The trade-off is much higher dose per image and longer exposure times. Breast compression is essential: it reduces scatter, dose, motion blur, tissue overlap, and improves uniformity. Heel effect is exploited (cathode toward chest wall).',
          keyFact: 'Mammo: 25 kV, 0.3 mm focal spot, ~100 mAs, 200 µGy receptor dose (vs 5 µGy standard). Grid ratio 5:1. Film gradient 3 (vs 2). Cathode toward chest wall. Compression = ↓ scatter + dose + blur + overlap.',
          tags: ['mammography', 'physics', 'technique', 'dose', 'kV'],
        },
      },
      {
        id: 'physics-mammo-004',
        front: {
          question: 'In magnification mammography, what is the magnification factor given SID = 65 cm and SOD = 35 cm, and what are the key technique changes vs. contact mammography?',
        },
        back: {
          answer: 'Magnification = SID/SOD = 65/35 = 1.85×. Key changes: 0.1 mm focal spot, no grid (air gap), 25 mA current, 3 sec exposure, ~70 mAs total.',
          explanation: 'Magnification mammography improves visualization of microcalcifications and lesion margins. No grid is needed because the air gap between the breast and receptor acts as a scatter-reduction mechanism. The 0.1 mm magnification focal spot is critical to prevent excessive focal spot blur at this magnification. Dose is higher than contact mammography due to the magnification geometry and longer exposure.',
          keyFact: 'Mag mammo = SID/SOD. Typical: 65/35 = 1.85×. Key: 0.1 mm focal spot (mandatory), no grid (air gap). ↑ dose vs contact mammo. Too far → exposure too long; too close → focal spot blur.',
          tags: ['mammography', 'magnification', 'physics', 'focal spot', 'technique'],
        },
      },
      {
        id: 'physics-mammo-005',
        front: {
          question: 'What is the smallest visible microcalcification in digital mammography, and what monitor resolution is required?',
        },
        back: {
          answer: 'Smallest visible microcalcification: ~150 µm. Digital mammo pixel size: ~80 µm. Monitor requirement: 5 megapixel (resolution: ~3,000 × 4,000 pixels = 24 MB at 2 bytes/pixel).',
          explanation: 'Digital mammography achieves very high spatial resolution with ~80 µm pixels. The smallest microcalcifications detectable are ~150 µm (larger than pixel size due to system MTF and noise). Dedicated high-resolution 5-megapixel monitors are required by MQSA for interpretation. Standard 2-megapixel monitors used for other imaging are insufficient for mammography interpretation.',
          keyFact: 'Digital mammo: 80 µm pixels, smallest visible calc ~150 µm, 5 megapixel monitors required for reading (not standard 2MP diagnostic monitors).',
          tags: ['mammography', 'digital', 'resolution', 'physics', 'MQSA'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // CT PHYSICS
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-ct',
    label: 'CT Physics',
    cards: [
      {
        id: 'physics-ct-001',
        front: {
          question: 'What is a Hounsfield unit (HU), and what are the HU values for air, water, fat, soft tissue, and bone?',
        },
        back: {
          answer: 'HU = 1000 × (µ_tissue − µ_water) / µ_water. Air: −1000 HU. Fat: −50 to −100 HU. Water: 0 HU. Soft tissue: ~30–60 HU. Bone: 400–1000 HU.',
          explanation: 'HU is a normalized measure of linear attenuation relative to water. 10 HU = 1% difference in contrast from water. Gray and white matter differ by only 0.5% (5 HU), making unenhanced brain CT contrast highly dependent on technique. A material with twice the attenuation of water measures 1000 HU. HU values are scanner-dependent to some degree, but the anchors (air = −1000, water = 0) are fixed.',
          keyFact: 'HU formula: 1000 × (µ_x − µ_water)/µ_water. Air = −1000, Water = 0, Fat = −50 to −100, Soft tissue = 30–60, Bone = 400–1000. 10 HU = 1% contrast. Gray-white differ by only ~5 HU.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hounsfield-unit',
          tags: ['CT', 'Hounsfield', 'physics', 'attenuation', 'density'],
        },
      },
      {
        id: 'physics-ct-002',
        front: {
          question: 'What is the CTDI (CT Dose Index), and how is CTDIvol calculated from CTDIw and pitch?',
        },
        back: {
          answer: 'CTDI = average phantom dose for one axial rotation. CTDIw = 2/3 CTDIp + 1/3 CTDIc. CTDIvol = CTDIw / pitch.',
          explanation: 'CTDI is measured using 16 cm (head) and 32 cm (body) phantoms — the 16 cm phantom always shows higher dose. Pitch < 1 (overlapping slices) causes CTDIvol to increase; pitch > 1 decreases CTDIvol. CTDIvol reference values: adult head 75 mGy (16 cm phantom), adult abdomen 25 mGy (32 cm phantom), pediatric abdomen 20 mGy (16 cm phantom). CTDIvol is independent of scan length.',
          keyFact: 'CTDIvol = CTDIw/pitch. Pitch <1 → ↑ dose. CTDIvol same regardless of scan length. Reference limits: adult head 75 mGy, adult abdomen 25 mGy (32 cm phantom), peds abdomen 20 mGy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ct-dose-index',
          tags: ['CT', 'CTDI', 'dose', 'physics', 'dosimetry'],
        },
      },
      {
        id: 'physics-ct-003',
        front: {
          question: 'What is the Dose Length Product (DLP), and how is it used to estimate effective dose?',
        },
        back: {
          answer: 'DLP = CTDIvol × scan length (mGy·cm). Effective dose (mSv) = DLP × body-part conversion factor. Chest: 0.019 mSv/mGy·cm. Abdomen: 0.017. Head: 0.0023.',
          explanation: 'DLP accounts for scan length, making it more useful than CTDIvol alone for estimating total radiation risk. Conversion factors vary by body region due to different radiosensitive organ densities. Example: abdominal CT with DLP 900 mGy·cm → effective dose = 900 × 0.017 = 15.3 mSv. Chest has a higher conversion factor than abdomen due to the radiosensitive breast and lung tissue.',
          keyFact: 'DLP = CTDIvol × length = best CT risk estimator. Effective dose = DLP × k-factor. Head k = 0.0023; Neck 0.0054; Chest 0.019; Abd/Pelvis 0.017. Chest > abdomen due to breast + lung radiosensitivity.',
          tags: ['CT', 'DLP', 'effective dose', 'dosimetry', 'physics'],
        },
      },
      {
        id: 'physics-ct-004',
        front: {
          question: 'What are typical effective radiation doses for common CT examinations, and how do they compare to background radiation?',
        },
        back: {
          answer: 'Head CT: ~2 mSv. Chest CT: ~7 mSv. Abdomen CT: ~8 mSv. Pelvis CT: ~6 mSv. Background: ~3 mSv/year.',
          explanation: 'A chest CT delivers roughly 70 times the dose of a PA chest radiograph (0.1 mSv). A head CT is ~2 years of background radiation. These figures are estimates — actual doses depend on patient size, protocol, and scanner. CT accounts for ~50% of medical radiation exposure despite being only ~15% of imaging studies. For comparison: mammography ~0.4 mSv, lumbar spine XR ~1.5 mSv.',
          keyFact: 'CT doses: head 2 mSv, chest 7 mSv, abdomen 8 mSv. Background ~3 mSv/year. Chest CT ≈ 70× chest XR. CT = ~50% medical radiation exposure. Mammo ~0.4 mSv, barium enema ~8 mSv.',
          tags: ['CT', 'dose', 'effective dose', 'radiation safety', 'dosimetry'],
        },
      },
      {
        id: 'physics-ct-005',
        front: {
          question: 'How does pitch affect image quality and radiation dose in helical CT?',
        },
        back: {
          answer: 'Pitch < 1: overlapping acquisition → ↑ dose, ↑ data per location, ↑ image quality. Pitch > 1: gaps in acquisition → ↓ dose, ↓ SNR, possible artifacts. Pitch = table movement per rotation / beam collimation.',
          explanation: 'At pitch = 1, the table moves exactly one beam width per rotation — no overlap or gap. Higher pitch is used to reduce dose or scan a large area quickly (e.g., trauma). Lower pitch improves volumetric sampling. Because CTDIvol = CTDIw/pitch, a pitch of 2 halves the dose; pitch of 0.5 doubles it.',
          keyFact: 'Pitch = table travel/rotation ÷ beam width. CTDIvol = CTDIw/pitch. ↑ pitch → ↓ dose (and ↓ quality). ↓ pitch → ↑ dose (and ↑ quality). Pitch <1 = overscan (overlapping); pitch >1 = underscan (gaps).',
          tags: ['CT', 'pitch', 'dose', 'helical', 'physics'],
        },
      },
      {
        id: 'physics-ct-006',
        front: {
          question: 'What are the main CT artifacts and their causes?',
          hint: 'Think about metal, motion, beam hardening, and reconstruction geometry.',
        },
        back: {
          answer: 'Beam hardening: dark bands between dense structures (e.g., posterior fossa streaks). Ring artifact: detector malfunction. Metal artifact: streaks from high-density implants. Partial volume: averaging of adjacent tissues. Motion: blurring or misregistration. Helical: interpolation artifacts.',
          explanation: 'Beam hardening occurs because lower-energy photons are preferentially absorbed, leaving a "harder" beam — this causes the center of objects to appear darker than expected. Metal artifact results from photon starvation and beam hardening around high-Z implants. Partial volume artifact occurs when structures smaller than the slice thickness are averaged with adjacent tissue, reducing apparent attenuation.',
          keyFact: 'Beam hardening → dark bands (posterior fossa, between shoulders). Metal → streaks. Partial volume → falsely low attenuation for small dense structures. Ring artifact → faulty detector. MARS = metal artifact reduction software.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ct-artifacts',
          tags: ['CT', 'artifacts', 'beam hardening', 'metal', 'physics'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // RADIATION DOSIMETRY & SAFETY
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-dosimetry',
    label: 'Radiation Dosimetry & Safety',
    cards: [
      {
        id: 'physics-dosimetry-001',
        front: {
          question: 'Define exposure, absorbed dose, equivalent dose, and effective dose — and give the SI unit for each.',
        },
        back: {
          answer: 'Exposure (Coulombs/kg): charge liberated per mass of air. Absorbed dose (Gray, Gy = J/kg): energy deposited per unit mass. Equivalent dose (Sievert, Sv): absorbed dose × radiation weighting factor (Wr). Effective dose (Sv): equivalent dose × tissue weighting factor (Wt) summed over all organs.',
          explanation: 'For diagnostic X-rays, Wr = 1, so Gray = Sievert. Effective dose accounts for differential radiosensitivity of organs (Wt = 0.12 for radiosensitive organs like marrow, colon, lung, breast; Wt = 0.01 for bone, brain, skin). Effective dose enables comparison of risk across different exposure scenarios and is the quantity used for population risk estimates.',
          keyFact: 'X-rays: Wr = 1 → Gy = Sv. High-LET (alpha): Wr = 20. Wt varies: marrow/colon/lung/breast = 0.12 (high), bone/brain/skin = 0.01 (low). 1 Gy = 100 rad; 1 Sv = 100 rem; 1 Bq = 1 dis/sec; 1 Ci = 3.7×10¹⁰ Bq.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/radiation-dose',
          tags: ['dosimetry', 'effective dose', 'Sievert', 'Gray', 'radiation safety'],
        },
      },
      {
        id: 'physics-dosimetry-002',
        front: {
          question: 'What are the occupational dose limits for radiation workers, and how do they compare to limits for the general public and pregnant workers?',
        },
        back: {
          answer: 'Radiation worker: 50 mSv/year effective dose. Eyes: 150 mSv/year. All other organs: 500 mSv/year. General public: 1 mSv/year. Pregnant worker fetus: 0.5 mSv/month (~5 mSv/pregnancy).',
          explanation: 'The occupational limit of 50 mSv/year is based on the principle of ALARA (as low as reasonably achievable). The lower public limit (1 mSv/year) reflects the lack of occupational benefit. Interestingly, the fetal dose limit (5 mSv/pregnancy) is actually higher than the 1 mSv/year public limit, reflecting different risk assumptions. A lead apron attenuates measured dose by a factor of 20.',
          keyFact: 'Worker limit: 50 mSv/year. Eyes: 150 mSv/year. Public: 1 mSv/year. Pregnant worker fetus: 0.5 mSv/month (5 mSv total). Lead apron: 20× attenuation of scatter dose.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/radiation-dose-limits',
          tags: ['dosimetry', 'dose limits', 'radiation safety', 'occupational', 'pregnancy'],
        },
      },
      {
        id: 'physics-dosimetry-003',
        front: {
          question: 'What is the average annual background radiation dose in the United States, and what is the largest contributor?',
        },
        back: {
          answer: 'Average background: ~3 mSv/year (excluding medical). Largest contributor: radon (~55% of background). Radon is an alpha emitter with a 3-day half-life; its parent radionuclide is radium (half-life 1,600 years).',
          explanation: 'Background radiation sources include radon (55%), cosmic rays, terrestrial radiation, and internal radioactivity. Radon is a decay product of uranium/radium in soil and accumulates in poorly ventilated buildings. Despite its short physical half-life, its biological impact is significant because it decays by alpha emission directly in lung tissue. Radon causes ~20,000 deaths per year in the US from lung cancer.',
          keyFact: 'Background ~3 mSv/year. Radon = 55% of background. Radon: alpha emitter, T½ = 3 days, parent = radium (T½ 1600 yr). Radon → ~20,000 lung cancer deaths/year. Wr(alpha) = 20.',
          tags: ['dosimetry', 'background radiation', 'radon', 'radiation safety', 'nuclear medicine'],
        },
      },
      {
        id: 'physics-dosimetry-004',
        front: {
          question: 'What is the inverse square law, and how does it apply to radiation protection in fluoroscopy?',
        },
        back: {
          answer: 'Intensity ∝ 1/distance². Doubling distance reduces intensity to 1/4. In fluoroscopy: increasing source-to-skin distance decreases patient entrance dose; operator stands as far as practical to minimize scatter exposure.',
          explanation: 'The inverse square law applies to point sources in air. Increasing SSD (source-to-skin distance) in fluoroscopy reduces patient skin dose by reducing entrance air kerma. For operators, scatter dose falls off rapidly with distance — at 1 m from the patient, scatter is <0.1% of the patient dose. This is the basis of time-distance-shielding principles in radiation protection.',
          keyFact: 'Dose ∝ 1/d². Double distance = 1/4 dose. Fluoroscopy: ↑ SSD → ↓ patient skin dose. Operator at 1 m: scatter <0.1% of patient dose. Magnification: ↓ SSD (tube closer) → ↑ patient skin dose.',
          tags: ['dosimetry', 'inverse square law', 'fluoroscopy', 'radiation protection', 'physics'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // RADIATION BIOLOGY
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-radiobiology',
    label: 'Radiation Biology',
    cards: [
      {
        id: 'physics-radiobiology-001',
        front: {
          question: 'What is the difference between deterministic and stochastic radiation effects? Give an example of each.',
        },
        back: {
          answer: 'Deterministic: threshold-dependent, severity increases with dose above threshold (e.g., cataract, skin erythema, sterility). Stochastic: no threshold, probability increases with dose (e.g., radiation-induced cancer, heritable mutations).',
          explanation: 'Deterministic effects occur only above a threshold dose — below the threshold, the probability is zero; above it, severity increases. Stochastic effects have no safe threshold under the linear-no-threshold (LNT) model — any dose carries some (small) probability of cancer induction. The LNT model is most accurate for solid tumors (latency up to 25 years); the linear-quadratic model better fits leukemia risk (latency 5–7 years).',
          keyFact: 'Deterministic: threshold exists, severity ↑ with dose (cataracts, erythema, sterility, epilation). Stochastic: no threshold, probability ↑ with dose (cancer, heritable). LNT model = best for solid tumor risk. L-Q model = leukemia.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/radiation-biology',
          tags: ['radiation biology', 'deterministic', 'stochastic', 'physics', 'safety'],
        },
      },
      {
        id: 'physics-radiobiology-002',
        front: {
          question: 'What are the threshold doses and timescales for the major deterministic skin effects from radiation exposure?',
        },
        back: {
          answer: 'Transient early erythema: 2 Gy (days 1–2). Robust erythema: 6 Gy (10–14 days). Temporary epilation: 3 Gy (~3 weeks). Permanent epilation: 7 Gy. Moist desquamation: 15 Gy (~4 weeks). Vascular damage: >20 Gy. Ulceration/necrosis: late.',
          explanation: 'These thresholds are clinically important for IR procedures with long fluoroscopy times. Skin erythema may appear within 1–2 days (transient) or be delayed 10–14 days (main erythema). Epilation follows at ~3 weeks. The posterior pole of the lens (cataracts) is most sensitive; cataract formation occurs with as little as 2 Gy. High-LET radiation (neutrons, alpha particles) is much more effective at inducing cataracts.',
          keyFact: 'Key thresholds: Erythema 2 Gy (early) / 6 Gy (main). Temp epilation 3 Gy / Perm 7 Gy. Moist desquamation 15 Gy. Cataract 2 Gy (posterior lens). Lymphocyte decrease: 0.5 Gy (earliest biomarker).',
          tags: ['radiation biology', 'skin dose', 'deterministic', 'fluoroscopy', 'safety'],
        },
      },
      {
        id: 'physics-radiobiology-003',
        front: {
          question: 'What are the LD 50/60, LD 50/5, and LD 50/2 doses in whole-body radiation exposure, and what organ system failure causes each?',
        },
        back: {
          answer: 'LD 50/60 = 3–4 Gy: hematopoietic failure (bone marrow). LD 50/5 = 10 Gy: GI syndrome (bowel mucosal denudation; small bowel most sensitive). LD 50/2 = 100 Gy: cerebrovascular syndrome.',
          explanation: 'LD 50/X means the dose lethal to 50% of the population within X days. The hematopoietic syndrome is the most clinically relevant at diagnostic imaging exposures (accidental high-dose). Bone marrow is most radiosensitive of the three systems. The GI syndrome results from stripping of intestinal mucosa. Cerebrovascular syndrome from massive doses causes rapid death from brain edema and vascular collapse.',
          keyFact: 'LD 50/60 = 3–4 Gy (bone marrow). LD 50/5 = 10 Gy (small bowel). LD 50/2 = 100 Gy (cerebrovascular). Most radiosensitive tissue: lymphocytes/marrow > GI > CNS.',
          tags: ['radiation biology', 'LD50', 'whole body radiation', 'hematopoietic', 'physics'],
        },
      },
      {
        id: 'physics-radiobiology-004',
        front: {
          question: 'What is the estimated cancer risk from acute radiation exposure, and what is the risk of leukemia specifically?',
        },
        back: {
          answer: 'Acute exposure cancer risk: ~8%/Gy (from atomic bomb survivor data). Chronic exposure (radiation workers): ~4%/Gy. Leukemia risk: ~1%/Sv for acute dose. Latency: leukemia 5–7 years; solid tumors up to 25 years.',
          explanation: 'Risk estimates are derived largely from Japanese atomic bomb survivor data. Chronic exposures carry half the risk of acute doses of the same magnitude because of time for repair. Leukemia has a shorter latency and follows a linear-quadratic dose-response. The most radiosensitive tissue in the body is the thyroid gland — Marshall Islanders exposed to nuclear weapon fallout developed thyroid tumors. Dial painters licking radium brushes developed bone sarcomas.',
          keyFact: 'Cancer risk: 8%/Gy acute, 4%/Gy chronic. Leukemia: 1%/Sv (latency 5–7 yr). Solid tumors: latency up to 25 yr. Most radiosensitive organ: thyroid. Doubling dose for heritable mutation: ~1 Gy.',
          tags: ['radiation biology', 'cancer risk', 'stochastic', 'leukemia', 'physics'],
        },
      },
      {
        id: 'physics-radiobiology-005',
        front: {
          question: 'What are the radiation effects on the fetus at different gestational ages, and what dose limit applies to pregnant radiation workers?',
        },
        back: {
          answer: 'Weeks 0–2: all-or-nothing (abortion or no effect). Weeks 2–6: congenital malformations. Weeks 8–15: mental retardation (40%/Sv), childhood cancer, reduced head diameter. Weeks 15–25: mental retardation (10%/Sv). Fetal dose limit: 0.5 mSv/month (5 mSv/pregnancy).',
          explanation: 'The most radiosensitive period is the embryonic period (weeks 2–8) when organogenesis occurs. The most sensitive CNS period is weeks 8–15 (neuronal proliferation and migration). Effects described are for significant exposures (~2 Gy) — diagnostic imaging doses are far below these thresholds. A lead apron reduces externally measured scatter by factor of 20.',
          keyFact: 'Most sensitive: weeks 8–15 (40%/Sv mental retardation risk). Weeks 0–2 = all-or-nothing. Fetal limit: 5 mSv/pregnancy (0.5 mSv/month). Lead apron: 20× dose reduction for fetus.',
          tags: ['radiation biology', 'fetal dose', 'pregnancy', 'radiation safety', 'physics'],
        },
      },
      {
        id: 'physics-radiobiology-006',
        front: {
          question: 'What are Ataxia Telangiectasia and Xeroderma Pigmentosum, and how do they relate to radiation sensitivity?',
        },
        back: {
          answer: 'Ataxia Telangiectasia: autosomal recessive ATM gene mutation → increased sensitivity to X-rays (impaired DNA double-strand break repair). Xeroderma Pigmentosum: impaired DNA nucleotide excision repair → increased sensitivity to UV light (not X-rays).',
          explanation: 'Both are DNA repair deficiency syndromes but with different sensitivities. AT patients have defective ATM kinase, which is critical for recognizing and repairing ionizing radiation-induced double-strand breaks. XP patients cannot repair UV-induced pyrimidine dimers but have normal ionizing radiation repair. AT is associated with cerebellar ataxia, telangiectasias, immunodeficiency, and markedly increased lymphoma/leukemia risk.',
          keyFact: 'AT = ↑ X-ray sensitivity (ATM mutation, impaired DSB repair). XP = ↑ UV sensitivity (NER defect). Key distinction: AT → radiosensitive; XP → photosensitive. Free radicals mediate majority of radiation DNA damage.',
          tags: ['radiation biology', 'DNA repair', 'ataxia telangiectasia', 'radiosensitivity', 'physics'],
        },
      },
      {
        id: 'physics-radiobiology-007',
        front: {
          question: 'What is the linear no-threshold (LNT) model, and what dose-response model is used for leukemia risk?',
        },
        back: {
          answer: 'LNT model: cancer risk increases linearly with dose, with no safe threshold. Used for solid tumor risk estimation. Leukemia follows a linear-quadratic (L-Q) dose-response model (risk ↑ steeply at intermediate doses). Leukemia latency: 5–7 years.',
          explanation: 'The LNT model underpins all radiation protection regulations and individual dose risk counseling. It assumes that even single-photon interactions may initiate carcinogenesis. The L-Q model for leukemia reflects the different biology — leukemia may require multiple cellular events, making the risk rise faster-than-linearly at intermediate doses. The LNT is considered conservative (may overestimate low-dose risk).',
          keyFact: 'LNT = no safe threshold, linear dose-cancer risk → solid tumors. L-Q model → leukemia (latency 5–7 yr). LNT is the basis for all radiation protection standards. Risk of heritable effect: 0.2%/Sv.',
          tags: ['radiation biology', 'LNT', 'risk model', 'stochastic', 'cancer'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // MRI PHYSICS
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-mri',
    label: 'MRI Physics',
    cards: [
      {
        id: 'physics-mri-001',
        front: {
          question: 'What pulse sequence parameters determine T1 weighting versus T2 weighting on MRI?',
        },
        back: {
          answer: 'T1-weighted: short TR, short TE. T2-weighted: long TR, long TE. Proton density: long TR, short TE (highest SNR, lowest contrast).',
          explanation: 'T1 contrast depends on TR: short TR means tissues with short T1 (fat, subacute blood) have more longitudinal recovery between pulses → higher signal. T2 contrast depends on TE: long TE means only tissues with long T2 (water, CSF, edema) retain signal → higher signal. Fat appears bright on T1; water appears bright on T2. Gray-white matter differ by only 0.5% at 1.5T — T1 contrast exploits their different relaxation times.',
          keyFact: 'T1: short TR + short TE → fat bright, water dark. T2: long TR + long TE → water bright, fat intermediate. PD: long TR + short TE → highest SNR. Mnemonic: WaterBright-T2; FatBright-T1.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mri-pulse-sequences',
          tags: ['MRI', 'T1', 'T2', 'TR', 'TE', 'physics'],
        },
      },
      {
        id: 'physics-mri-002',
        front: {
          question: 'What is T1 relaxation (longitudinal relaxation) and T2 relaxation (transverse relaxation)?',
        },
        back: {
          answer: 'T1: time for longitudinal magnetization to recover to 63% of equilibrium after an RF pulse (spin-lattice relaxation). T2: time for transverse magnetization to decay to 37% of initial value (spin-spin relaxation, loss of phase coherence). T2* is shorter than T2 due to field inhomogeneities.',
          explanation: 'After an RF pulse flips spins into the transverse plane, two processes occur simultaneously: longitudinal recovery (T1) as spins exchange energy with the lattice, and transverse decay (T2) as spins lose phase coherence through spin-spin interactions. T2* includes both T2 decay and dephasing from magnetic field inhomogeneities — gradient echo sequences are T2*-sensitive, while spin echo refocuses T2* with a 180° pulse, yielding true T2.',
          keyFact: 'T1 = spin-lattice (longitudinal, recovery). T2 = spin-spin (transverse, decay). T2* < T2 (field inhomogeneities). GRE sequences = T2*. Spin echo = refocuses T2*, gives true T2. Water: long T1 + long T2.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/t1-relaxation',
          tags: ['MRI', 'T1', 'T2', 'relaxation', 'physics'],
        },
      },
      {
        id: 'physics-mri-003',
        front: {
          question: 'What factors affect signal-to-noise ratio (SNR) in MRI?',
        },
        back: {
          answer: 'SNR ∝ I × voxel volume × √NEX / √BW × B (field strength). Increasing voxel size, NEX, or field strength improves SNR. Wider receiver bandwidth reduces SNR but speeds acquisition and reduces chemical shift artifact.',
          explanation: 'Voxel volume = FOV²/matrix × slice thickness — smaller voxels improve resolution but reduce SNR. NEX (number of excitations) improves SNR by √NEX but linearly increases scan time. Higher field strength (B) improves SNR roughly linearly. Receiver bandwidth: wider BW allows faster readout (less motion artifact, less chemical shift) but reduces SNR because more noise frequencies are collected.',
          keyFact: 'SNR ∝ voxel size × √NEX × B / √BW. Double NEX → √2 SNR but 2× scan time. ↑ BW → ↑ speed + ↓ chemical shift artifact but ↓ SNR. ↑ field strength → ↑ SNR (roughly linear).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/signal-to-noise-ratio-mri',
          tags: ['MRI', 'SNR', 'physics', 'field strength', 'voxel'],
        },
      },
      {
        id: 'physics-mri-004',
        front: {
          question: 'What MRI safety hazard is caused by quenching, and what is the fringe field limit?',
        },
        back: {
          answer: 'Quenching: superconducting coils lose superconductivity → rapid helium release → displaces O₂ → asphyxiation risk → must evacuate immediately. Fringe field limit: 5 Gauss (0.5 mT) — boundary of controlled access area.',
          explanation: 'Quenching can be triggered by liquid helium failure, mechanical shock, or deliberate emergency magnet shutdown. The rapid boil-off of helium gas can asphyxiate anyone in the magnet room. The 5 Gauss line is where pacemakers may malfunction and ferromagnetic objects become dangerous. FDA regulates static fields >4T, time-varying fields causing severe discomfort, RF deposition causing >1°C core temperature rise, and acoustic noise >140 dB.',
          keyFact: 'Quench = helium boil-off → O₂ displacement → evacuate immediately. Fringe field: 5 Gauss = controlled access limit. FDA regulates: >4T static field, >1°C core temp rise from RF (SAR), >140 dB acoustic noise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mri-safety',
          tags: ['MRI', 'safety', 'quenching', 'fringe field', 'physics'],
        },
      },
      {
        id: 'physics-mri-005',
        front: {
          question: 'What is SAR (specific absorption rate) in MRI, and what factors increase it?',
        },
        back: {
          answer: 'SAR = RF power absorbed per unit mass (W/kg). SAR increases with: more images/unit time, higher flip angles, shorter TR, higher field strength, larger patient, certain RF waveforms and coil types.',
          explanation: 'SAR is the key safety parameter for RF heating. The FDA limit triggers regulatory oversight above the point causing a >1°C core body temperature rise. Conductive loops (crossed patient arms, ECG leads, unconnected surface coils) concentrate RF energy and cause focal burns. Metal implants can also heat significantly. SAR is reduced by decreasing flip angle, increasing TR, or using parallel imaging (fewer RF pulses).',
          keyFact: 'SAR ∝ images/time × flip angle² × B². Conductive loops → focal burn risk. Metallic objects → RF heating. Reduce SAR: lower flip angle, longer TR, parallel imaging. FDA trigger: >1°C core temp rise.',
          tags: ['MRI', 'SAR', 'RF heating', 'safety', 'physics'],
        },
      },
      {
        id: 'physics-mri-006',
        front: {
          question: 'What causes MRI acoustic noise, and what parameter governs the FDA oversight threshold?',
        },
        back: {
          answer: 'Acoustic noise is caused by vibration of gradient coils from rapidly applied gradient magnetic fields (Lorentz force). FDA oversight threshold: >140 dB. Gradient coils are responsible for spatial encoding.',
          explanation: 'MRI noise can exceed 130 dB — equivalent to a jet engine — due to rapid switching of gradient currents in the static magnetic field. Hearing protection is required. In addition to acoustic noise, rapidly switching gradients can cause peripheral nerve stimulation through induced electric fields in body tissue. The FDA also regulates time-varying fields sufficient to produce severe discomfort.',
          keyFact: 'MRI noise source = vibrating gradient coils (Lorentz force). >140 dB = FDA oversight. Hearing protection required. Rapidly switching gradients → peripheral nerve stimulation (also FDA regulated). Not from the RF system.',
          tags: ['MRI', 'acoustic noise', 'gradient', 'safety', 'physics'],
        },
      },
      {
        id: 'physics-mri-007',
        front: {
          question: 'At what gestational age is MRI considered safe, and is gadolinium contraindicated in pregnancy?',
        },
        back: {
          answer: 'MRI can be performed at any stage of pregnancy (no controlled studies showing harm). Gadolinium contrast is contraindicated throughout pregnancy.',
          explanation: 'Although no harmful fetal effects from MRI have been demonstrated, the theoretical risks from RF heating and acoustic noise lead to careful risk-benefit consideration, particularly in the first trimester. Gadolinium contrast is specifically contraindicated because it crosses the placenta, accumulates in amniotic fluid, and the free gadolinium ion may remain there indefinitely with unknown consequences.',
          keyFact: 'MRI: safe at any gestational age (no confirmed harm; use clinical judgment in T1). Gadolinium: contraindicated throughout pregnancy (amniotic fluid accumulation). MRI = no ionizing radiation → preferred over CT in pregnancy when possible.',
          tags: ['MRI', 'pregnancy', 'gadolinium', 'safety', 'physics'],
        },
      },
      {
        id: 'physics-mri-008',
        front: {
          question: 'What common MRI artifacts arise from chemical shift, susceptibility, and motion, and how is each mitigated?',
        },
        back: {
          answer: 'Chemical shift (fat/water frequency difference): dark band at fat-water interfaces in frequency direction → use fat suppression or wider BW. Susceptibility: signal void around metal/air → use spin echo (not GRE), MARS. Motion: ghosting in phase direction → breath-hold, cardiac gating, saturation bands.',
          explanation: 'Chemical shift artifact occurs because fat resonates ~3.5 ppm lower than water — at 1.5T this is ~220 Hz, causing apparent spatial misregistration. Wider receiver bandwidth reduces the pixel shift. GRE sequences are highly susceptibility-sensitive (no 180° refocusing), making them ideal for detecting hemorrhage (blooming) but problematic near metal. Phase-encode ghosting is from periodic motion (breathing, cardiac pulsation).',
          keyFact: 'Chemical shift: fat-water ~3.5 ppm offset → dark band in freq-encode direction; ↑ BW or fat sat to mitigate. Susceptibility (blooming): GRE > SE; metal → use SE/TSE. Motion ghost: phase-encode direction → breath-hold/gating.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mri-artifacts',
          tags: ['MRI', 'artifacts', 'chemical shift', 'susceptibility', 'physics'],
        },
      },
      {
        id: 'physics-mri-009',
        front: {
          question: 'What is k-space in MRI, and how does the center vs. periphery of k-space relate to image contrast and resolution?',
        },
        back: {
          answer: 'K-space is the raw data matrix in spatial frequency domain (Fourier space). Center: low spatial frequencies → determines image contrast and overall brightness. Periphery: high spatial frequencies → determines image detail and edges (resolution).',
          explanation: 'Each point in k-space contains global image information — it is NOT a direct pixel-for-pixel map of the image. Fourier transform converts k-space to image space. In fast spin echo (TSE/FSE), different k-space lines are filled at different echo times — the echo time at which the center of k-space is filled (effective TE) determines image contrast. Parallel imaging (GRAPPA, SENSE) undersamples k-space to speed acquisition.',
          keyFact: 'K-space center = contrast/brightness (low frequencies). K-space periphery = resolution/edges (high frequencies). Effective TE in TSE = echo time when k-space center is filled. Corrupted k-space center → severe contrast loss.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/k-space',
          tags: ['MRI', 'k-space', 'Fourier', 'physics', 'resolution'],
        },
      },
      {
        id: 'physics-mri-010',
        front: {
          question: 'What are the common MRI pulse sequences and their key clinical applications?',
          hint: 'Think SE, GRE, FSE/TSE, STIR, FLAIR, EPI, GRE.',
        },
        back: {
          answer: 'SE/FSE: standard T1/T2 workhorse. GRE (T2*): hemorrhage detection, liver iron, BOLD fMRI. STIR: fat suppression (fluid bright, fat dark; insensitive to B1 inhomogeneity). FLAIR: CSF suppressed T2 (periventricular lesions, SAH). DWI (EPI): acute stroke, abscess, cellularity. SSFP (balanced GRE): cardiac cine, bright blood.',
          explanation: 'STIR suppresses fat by nulling it at its T1 null point using an inversion recovery pulse — this works at any field strength. FLAIR uses long TI to null CSF T1 signal, leaving edematous brain tissue bright while suppressing CSF. DWI detects restriction of water motion (cytotoxic edema in acute stroke appears bright DWI/dark ADC within minutes). SSFP provides high SNR and contrast for cardiac imaging.',
          keyFact: 'STIR = fat suppressed (any field strength, no B1 issue). FLAIR = CSF null → best for periventricular MS, SAH. GRE = T2* sensitive (blood, iron, calcification). DWI bright + ADC dark = restricted diffusion (stroke <6h, abscess).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mri-pulse-sequences',
          tags: ['MRI', 'pulse sequences', 'STIR', 'FLAIR', 'DWI', 'physics'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // ULTRASOUND PHYSICS
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-ultrasound',
    label: 'Ultrasound Physics',
    cards: [
      {
        id: 'physics-us-001',
        front: {
          question: 'What is the speed of sound in soft tissue, and how do frequency, wavelength, and velocity relate?',
        },
        back: {
          answer: 'Speed of sound in soft tissue: ~1540 m/s (assumed constant). v = f × λ. Higher frequency → shorter wavelength → better resolution but less penetration.',
          explanation: 'Ultrasound machines assume a constant speed of 1540 m/s to calculate distances. Speed varies by tissue (bone ~4000 m/s, air ~330 m/s) — speed mismatches cause refraction artifacts. Unlike electromagnetic radiation, sound requires a medium and travels faster in denser materials. For a 5 MHz transducer: λ = 1540/5,000,000 = 0.31 mm.',
          keyFact: 'Sound in tissue: 1540 m/s (assumed). v = fλ. ↑ frequency → ↑ resolution + ↓ penetration. Shallow structures: high freq (10–15 MHz). Deep structures: low freq (2–5 MHz). Speed in bone > tissue > air.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ultrasound-physics',
          tags: ['ultrasound', 'frequency', 'wavelength', 'physics', 'resolution'],
        },
      },
      {
        id: 'physics-us-002',
        front: {
          question: 'What is axial resolution in ultrasound, how is it calculated, and how does it compare to lateral resolution?',
        },
        back: {
          answer: 'Axial resolution = SPL/2 (spatial pulse length/2). SPL ≈ 2λ. So axial resolution ≈ λ. Lateral resolution ≈ 4× worse than axial and worsens with depth.',
          explanation: 'Axial resolution is the ability to resolve two objects along the beam axis. It is determined by pulse duration — shorter pulses (achieved by damping the transducer) improve axial resolution. Axial resolution does NOT change with depth. Lateral resolution (ability to distinguish two adjacent objects perpendicular to the beam) is governed by beam width and improves with focusing but degrades in the far field. At 4 MHz: axial res ~0.5 mm; at 8 MHz: ~0.25 mm.',
          keyFact: 'Axial res = SPL/2 ≈ λ. Does NOT vary with depth. Lateral res: worse, varies with depth, improves with focusing. Lateral ≈ 4× worse than axial. Higher frequency → better axial and lateral resolution.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ultrasound-resolution',
          tags: ['ultrasound', 'resolution', 'axial', 'lateral', 'physics'],
        },
      },
      {
        id: 'physics-us-003',
        front: {
          question: 'What is tissue attenuation in ultrasound, and how is it calculated for a 4 MHz transducer imaging at 10 cm depth?',
        },
        back: {
          answer: 'Tissue attenuation: ~0.5 dB/cm/MHz. Example: 4 MHz × 10 cm = 40 dB total (20 dB down, 20 dB back) — actually 0.5 × 4 × 10 = 20 dB one-way; round-trip = 40 dB.',
          explanation: 'Attenuation is frequency-dependent: higher frequency transducers attenuate more rapidly. This is why high-frequency transducers (7–15 MHz) are used for superficial structures and lower frequencies (2–5 MHz) for deeper organs. TGC (time-gain compensation) electronically amplifies returning echoes from deeper structures to compensate for differential attenuation.',
          keyFact: 'Attenuation = 0.5 dB/cm/MHz. 4 MHz, 10 cm depth: 0.5 × 4 × 10 = 20 dB (one-way), 40 dB round-trip. TGC compensates for depth-dependent attenuation (post-processing only — does NOT affect acoustic output/MI or TI).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sound-attenuation',
          tags: ['ultrasound', 'attenuation', 'frequency', 'TGC', 'physics'],
        },
      },
      {
        id: 'physics-us-004',
        front: {
          question: 'What is the Thermal Index (TI) and Mechanical Index (MI) in ultrasound, and at what thresholds does risk-benefit analysis apply?',
        },
        back: {
          answer: 'TI = maximum temperature rise in tissue from US energy. Risk-benefit at TI > 1.0. MI = likelihood of cavitation (peak rarefactional pressure / √frequency). Risk-benefit at MI > 0.5.',
          explanation: 'TI and MI are displayed on ultrasound machines and help operators assess bioeffects risk. Cavitation (bubble formation) is more likely at high pressure (high MI) and low frequency. Stable cavitation = persistent microbubble oscillation; transient cavitation = violent collapse (more damaging). No biological effects have been observed below 1 W/cm² spatial peak temporal average intensity. TGC and grayscale mapping do NOT affect TI or MI (they are post-processing).',
          keyFact: 'TI > 1.0 → assess risk/benefit (thermal). MI > 0.5 → assess risk/benefit (cavitation). Cavitation: ↑ pressure + ↓ frequency → more likely. TGC and grayscale mapping: do NOT change TI or MI (output unchanged). Safe threshold: < 1 W/cm² SPTA.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ultrasound-safety',
          tags: ['ultrasound', 'TI', 'MI', 'safety', 'cavitation', 'physics'],
        },
      },
      {
        id: 'physics-us-005',
        front: {
          question: 'What factors affect the acoustic output index (TI and MI) in ultrasound, and which do NOT?',
        },
        back: {
          answer: 'Factors that AFFECT TI/MI (and output): frame rate, transmit power, frequency. Factors that do NOT affect TI/MI: time-gain compensation (TGC), grayscale mapping (these are post-processing techniques).',
          explanation: 'TI and MI are measures of acoustic energy delivered to the patient. Increasing frame rate requires more pulses per second, increasing average power output. Transmit power directly scales acoustic intensity. Frequency affects MI directly (denominator is √frequency). TGC amplifies received signals electronically without changing the transmitted pulse — it does not affect patient dose.',
          keyFact: 'TI/MI affected by: frame rate, transmit power, frequency. NOT affected by: TGC, grayscale mapping (post-processing). To reduce fetal US dose: ↓ transmit power, ↓ frame rate (dwell time), use PW sparingly.',
          tags: ['ultrasound', 'TI', 'MI', 'acoustic output', 'physics', 'safety'],
        },
      },
      {
        id: 'physics-us-006',
        front: {
          question: 'What is pulse repetition frequency (PRF) in ultrasound, and how does it limit maximum imaging depth?',
        },
        back: {
          answer: 'PRF = number of pulses emitted per second. Max depth = 1540/(2 × PRF). Typical PRF: ~4 kHz → max depth ~19 cm. High PRF → less time to listen → cannot image deep structures.',
          explanation: 'Between pulses, the transducer listens for returning echoes. Increasing PRF shortens the listening window, limiting the maximum depth that can be imaged before the next pulse is emitted. PRF = frame rate × lines per frame. Color Doppler uses high PRF and requires a tradeoff between depth, frame rate, and aliasing (Nyquist limit).',
          keyFact: 'Max depth = 1540/(2×PRF). Typical PRF 4 kHz → ~19 cm max depth. ↑ PRF → ↑ frame rate but ↓ max depth. Color Doppler: high PRF → aliasing when velocity exceeds Nyquist limit (PRF/2).',
          tags: ['ultrasound', 'PRF', 'depth', 'Doppler', 'physics'],
        },
      },
      {
        id: 'physics-us-007',
        front: {
          question: 'What are the main ultrasound artifacts and their mechanisms?',
          hint: 'Think reverberation, shadowing, enhancement, side lobe, mirror image, refraction.',
        },
        back: {
          answer: 'Posterior acoustic shadowing: dense object (stone, bone) attenuates beam. Enhancement: fluid-filled structure (cyst, bladder) attenuates less → bright posterior. Reverberation: multiple reflections between parallel interfaces (ring-down, comet tail). Mirror image: reflective curved surface duplicates structure. Side lobe: off-axis energy. Refraction: speed difference bends beam.',
          explanation: 'Posterior acoustic shadowing is a key sign of calcification/stones. Enhancement (posterior acoustic enhancement) confirms a cystic structure. Reverberation artifacts from air/metal create linear echoes (ring-down from pleural air, comet tail from metal/air). Mirror image artifacts are commonly seen at the diaphragm — structures below the diaphragm appear to be above it. Side lobe artifacts create apparent echoes in anechoic structures (pseudosludge in gallbladder).',
          keyFact: 'Shadow = attenuating object (stone, bone, calcium). Enhancement = cystic (less attenuation). Reverberation = parallel surfaces (ring-down from air). Mirror = curved reflector (diaphragm). Side lobe = pseudosludge in GB. Refraction = speed mismatch → Snell\'s law.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ultrasound-artifacts',
          tags: ['ultrasound', 'artifacts', 'shadowing', 'enhancement', 'reverberation', 'physics'],
        },
      },
      {
        id: 'physics-us-008',
        front: {
          question: 'What is the Doppler effect in ultrasound, and what is the Doppler equation?',
        },
        back: {
          answer: 'Doppler effect: frequency shift when sound source and reflector are in relative motion. Doppler shift (Δf) = 2f₀ × v × cos θ / c. Where f₀ = transmitted frequency, v = velocity, θ = angle between beam and flow, c = speed of sound (1540 m/s).',
          explanation: 'The cosine term means Doppler is angle-dependent: at 0° (beam parallel to flow) cos θ = 1 → maximum sensitivity. At 90° (beam perpendicular to flow) cos θ = 0 → no Doppler signal. Optimal angle: 30–60°. Aliasing occurs when the Doppler shift exceeds the Nyquist limit (PRF/2). CW Doppler has no aliasing but no range resolution; PW Doppler has range resolution but can alias.',
          keyFact: 'Doppler: Δf = 2f₀v cosθ/c. Angle 0° = max signal; 90° = no signal; use 30–60°. Aliasing = velocity exceeds Nyquist (PRF/2). CW: no aliasing, no range gate. PW: range gate, aliases. Color Doppler = mean velocity map.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/doppler-ultrasound',
          tags: ['ultrasound', 'Doppler', 'velocity', 'aliasing', 'physics'],
        },
      },
      {
        id: 'physics-us-009',
        front: {
          question: 'What is the near field (Fresnel zone) vs. far field (Fraunhofer zone) in ultrasound, and what determines near field length?',
        },
        back: {
          answer: 'Near field (Fresnel zone) = organized beam with good imaging. Far field (Fraunhofer zone) = beam diverges, imaging degrades. Near field length = r²/λ = r² × f / c.',
          explanation: 'The near field length increases with transducer radius (quadratically) and frequency (linearly). Imaging is possible in the near field. In the far field, beam divergence limits resolution and sensitivity. Focusing concentrates the beam at a specific depth within the near field, improving lateral resolution at that depth at the expense of resolution at other depths. Most clinical imaging occurs in the near field.',
          keyFact: 'Near field = r²/λ. ↑ transducer radius (r) → ↑ near field (by r²). ↑ frequency (↓ λ) → ↑ near field. Fresnel = good imaging zone. Fraunhofer = beam diverges = poor imaging. Focusing only works within near field.',
          tags: ['ultrasound', 'near field', 'Fresnel', 'Fraunhofer', 'physics'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // NUCLEAR MEDICINE PHYSICS
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-nucs',
    label: 'Nuclear Medicine Physics',
    cards: [
      {
        id: 'physics-nucs-001',
        front: {
          question: 'Define isobar, isotope, and isotone, and give an example of each.',
        },
        back: {
          answer: 'Isobars: same atomic mass (A), different Z. Example: ¹³¹I and ¹³¹Xe. Isotopes: same atomic number (Z), different mass (same element). Isotones: same number of neutrons (N).',
          explanation: 'Atomic notation: A/Z X_N, where A = atomic mass (Z + N), Z = protons (atomic number), N = neutrons. Radioactive decay changes the neutron-to-proton ratio to achieve stability. Isotopes of the same element have identical chemical properties but different radioactive behavior. Isobars become each other through beta decay (Z changes, A unchanged).',
          keyFact: 'Isobar = same A (mass). Isotope = same Z (element, same protons). Isotone = same N (neutrons). Mnemonic: IsotoPes = same Protons; IsotoNes = same Neutrons; Isobars = same mass (A).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nuclear-medicine-physics',
          tags: ['nuclear medicine', 'physics', 'isotope', 'isobar', 'radioactivity'],
        },
      },
      {
        id: 'physics-nucs-002',
        front: {
          question: 'What type of radioactive decay occurs with neutron excess vs. proton excess, and what happens to atomic number (Z) in each?',
        },
        back: {
          answer: 'Neutron excess → β⁻ decay: neutron converts to proton → Z increases by 1, mass unchanged. Proton excess → β⁺ decay or electron capture: proton converts to neutron → Z decreases by 1, mass unchanged.',
          explanation: 'Beta-minus decay: n → p + e⁻ + antineutrino. Z increases, N decreases. Reactor-produced isotopes are neutron-rich (β⁻). Beta-plus decay: p → n + e⁺ + neutrino. The positron annihilates with an electron producing two 511 keV gamma rays — this is the basis of PET imaging. Electron capture produces same result as β⁺ but emits a characteristic X-ray or Auger electron instead of a positron.',
          keyFact: 'β⁻: neutron excess (reactor products) → Z+1. β⁺: proton excess (cyclotron products) → Z−1. Both β⁺ and e-capture: Z−1, N+1, mass unchanged. PET uses β⁺ emitters (annihilation → 2 × 511 keV gammas).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/beta-decay',
          tags: ['nuclear medicine', 'radioactive decay', 'beta decay', 'PET', 'physics'],
        },
      },
      {
        id: 'physics-nucs-003',
        front: {
          question: 'Which radionuclides decay by electron capture, and what is a useful mnemonic?',
        },
        back: {
          answer: 'Ga-67, In-111, I-123, Tl-201 all decay by electron capture. Mnemonic: "GIIT over here" (Gallium, Indium, Iodine, Thallium).',
          explanation: 'Electron capture competes with β⁺ decay in proton-rich nuclei. An inner-shell (usually K-shell) electron is captured by the nucleus, converting a proton to a neutron. The resulting K-shell vacancy is filled by an outer electron, emitting a characteristic X-ray or Auger electron. Net effect is identical to β⁺ decay: Z decreases by 1, N increases by 1, mass unchanged. All four are cyclotron-produced.',
          keyFact: 'Electron capture: Ga-67, In-111, I-123, Tl-201 ("GIIT"). All cyclotron-produced. All: Z−1, N+1, A unchanged. Competing process with β⁺ but no positron emitted (characteristic X-ray instead).',
          tags: ['nuclear medicine', 'electron capture', 'Ga-67', 'Tl-201', 'physics'],
        },
      },
      {
        id: 'physics-nucs-004',
        front: {
          question: 'What is alpha decay, and what are the changes in atomic mass, proton number, and neutron number?',
        },
        back: {
          answer: 'Alpha particle = helium nucleus (2p + 2n). Alpha decay: A decreases by 4, Z decreases by 2, N decreases by 2. Resulting daughter: (A−4)/(Z−2)X(N−2).',
          explanation: 'Alpha particles are large, highly charged, and have high LET — they cause dense ionization over a short path length and are very effective at causing biological damage. Alpha particles are stopped by a sheet of paper or a few centimeters of air. They are hazardous when internalized (alpha emitters in radionuclide therapy). Ra-223 (Xofigo) is a therapeutic alpha emitter for prostate cancer bone metastases.',
          keyFact: 'Alpha = ⁴He (2p+2n). Decay: A−4, Z−2, N−2. High LET, short range, highest biological damage/unit dose. Wr = 20. Alpha emitter therapy: Ra-223 (Xofigo) for prostate Ca bone mets.',
          tags: ['nuclear medicine', 'alpha decay', 'radioactive decay', 'physics', 'LET'],
        },
      },
      {
        id: 'physics-nucs-005',
        front: {
          question: 'What is the effective half-life of a radionuclide in a tissue, and how is it calculated from physical and biological half-lives?',
        },
        back: {
          answer: '1/T_eff = 1/T_phys + 1/T_biol. Therefore T_eff = (T_phys × T_biol) / (T_phys + T_biol). Effective half-life is always shorter than either component.',
          explanation: 'The effective half-life accounts for both radioactive decay and biological clearance. This is the clinically relevant measure for internal dosimetry in nuclear medicine therapy. Example: if T_phys = 8 days (I-131) and T_biol = 80 days, T_eff = (8 × 80)/(8 + 80) = 640/88 = 7.3 days. Cumulative activity = 1.44 × f × A₀ × T_eff.',
          keyFact: '1/T_eff = 1/T_phys + 1/T_biol. T_eff always < T_phys and T_biol. Cumulative activity = 1.44 × f × A₀ × T_eff. The shorter half-life dominates (pulls T_eff closer to the shorter one).',
          tags: ['nuclear medicine', 'effective half-life', 'dosimetry', 'physics', 'I-131'],
        },
      },
      {
        id: 'physics-nucs-006',
        front: {
          question: 'What does the quality control of a nuclear medicine dose calibrator involve, and what radionuclides are used for each QC test?',
        },
        back: {
          answer: 'Constancy: daily, using Cs-137 (30-year half-life). Linearity: quarterly, using Tc-99m decay. Accuracy: annually, using a calibrated reference source.',
          explanation: "The dose calibrator measures radioactivity before patient injection. Constancy verifies the calibrator reads consistently over time (Cs-137 is stable enough for this). Linearity tests whether the calibrator is accurate across a wide range of activities (Tc-99m's short half-life allows measurement across a 5-log range as it decays). Accuracy tests against a National Institute of Standards and Technology (NIST)-traceable source. The imaging system (gamma camera) has separate QC: uniformity tested daily with Co-57.",
          keyFact: 'Dose calibrator QC: Constancy = daily (Cs-137). Linearity = quarterly (Tc-99m decay). Accuracy = annually (calibrated source). Imaging system uniformity = daily (Co-57). Mnemonic: CLA = Constant/Linear/Accurate.',
          tags: ['nuclear medicine', 'quality control', 'dose calibrator', 'Tc-99m', 'physics'],
        },
      },
      {
        id: 'physics-nucs-007',
        front: {
          question: 'What is the system resolution formula for a gamma camera, and what is the difference between intrinsic and collimator resolution?',
        },
        back: {
          answer: 'System resolution R = √(Ri² + Rc²). Intrinsic resolution (Ri): resolution of the camera without the collimator. Collimator resolution (Rc): resolution of the collimator alone. System resolution is always worse than either component.',
          explanation: 'Intrinsic resolution (~3–4 mm) reflects the crystal and electronics. Collimator resolution depends on collimator design — parallel-hole collimators used for most imaging; pinhole collimators for small organs (thyroid). The collimator is the biggest determinant of gamma camera sensitivity vs. resolution tradeoff. LEHR (low energy high resolution) and LEAP (low energy all-purpose) collimators are common.',
          keyFact: 'System resolution = √(Ri² + Rc²). Always worse than either Ri or Rc alone. Collimator dominates system resolution (Rc >> Ri). LEHR = best resolution, ↓ sensitivity. Pinhole = magnification for small organs (thyroid, parathyroid).',
          tags: ['nuclear medicine', 'gamma camera', 'resolution', 'collimator', 'physics'],
        },
      },
      {
        id: 'physics-nucs-008',
        front: {
          question: 'A nuclear medicine patient is administered Tc-99m labeled agent. How does Tc-99m decay, and what is its photon energy and half-life?',
        },
        back: {
          answer: 'Tc-99m decays by isomeric transition: emits a 140 keV gamma photon. Physical half-life: 6 hours.',
          explanation: 'Tc-99m (metastable technetium-99) is the ideal nuclear medicine imaging radionuclide: 140 keV gamma energy is near-ideal for gamma camera detection, its 6-hour half-life allows useful imaging while limiting dose, and it has no beta emission. It is produced from Mo-99 (half-life 67 hours) via a generator. Mo-99 decays to Tc-99m by beta-minus decay. Generator is "milked" every 24 hours.',
          keyFact: 'Tc-99m: 140 keV gamma (ideal for gamma camera), T½ = 6 hrs, no beta emission. Produced from Mo-99 generator (Mo-99 T½ = 67 hrs, β⁻ → Tc-99m). Generator milked every 24 hours. Isomeric transition decay mode.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/technetium-99m',
          tags: ['nuclear medicine', 'Tc-99m', 'gamma camera', 'physics', 'generator'],
        },
      },
      {
        id: 'physics-nucs-009',
        front: {
          question: 'What is the key difference between SPECT and PET imaging in terms of physics and image acquisition?',
        },
        back: {
          answer: 'SPECT: single gamma emitters detected by rotating gamma camera + collimator. PET: β⁺ emitters produce two 511 keV annihilation photons in coincidence (no collimator needed) → higher sensitivity and resolution.',
          explanation: 'PET detects coincident 511 keV photons emitted 180° apart within a timing window (~6–12 ns). Electronic collimation replaces mechanical collimation, dramatically improving sensitivity (~100× over SPECT). PET requires cyclotron-produced short-lived β⁺ emitters: F-18 (110 min), C-11 (20 min), N-13 (10 min), O-15 (2 min). SPECT uses longer-lived tracers (Tc-99m 6 hr, Tl-201, Ga-67) — no coincidence detection.',
          keyFact: 'PET: β⁺ → two 511 keV gammas at 180° → electronic coincidence detection (no collimator). ~100× more sensitive than SPECT. PET tracers: F-18 (T½ 110 min), C-11 (20 min). SPECT: single gamma + mechanical collimator. FDG-PET uses glucose metabolism.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/positron-emission-tomography',
          tags: ['nuclear medicine', 'PET', 'SPECT', 'physics', 'coincidence'],
        },
      },
      {
        id: 'physics-nucs-010',
        front: {
          question: 'What is radioactive decay kinetics? If a sample starts at 1000 MBq of Tc-99m, how much remains after 18 hours?',
        },
        back: {
          answer: 'Activity at time t: A_t = A₀ × e^(−λt), where λ = 0.693/T½. After 18 hours (3 half-lives of Tc-99m with T½ = 6 hrs): A = 1000 × (1/2)³ = 125 MBq.',
          explanation: 'Each half-life reduces activity by 50%. After 1 half-life: 500 MBq; after 2: 250 MBq; after 3: 125 MBq. The decay constant λ = 0.693/T½. The Becquerel (Bq) = 1 disintegration/second; 1 Curie = 3.7 × 10¹⁰ Bq = 37 GBq. Activity calibration for patient doses must account for elapsed time since calibration.',
          keyFact: 'A_t = A₀ × (1/2)^(t/T½). 3 half-lives = 1/8 remaining. λ = 0.693/T½. 1 Ci = 3.7×10¹⁰ Bq = 37 GBq. 1 Bq = 1 dis/sec. Tc-99m 18 hrs = 3 T½ → 125 MBq remains from 1000 MBq.',
          tags: ['nuclear medicine', 'decay', 'half-life', 'Tc-99m', 'physics'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // IMAGE QUALITY & STATISTICS
  // ──────────────────────────────────────────────────────────
  {
    id: 'physics-stats',
    label: 'Image Quality & Statistics',
    cards: [
      {
        id: 'physics-stats-001',
        front: {
          question: 'Define sensitivity and specificity, and give the formulas for each.',
        },
        back: {
          answer: 'Sensitivity = TP/(TP + FN) — the ability to correctly identify disease (true positive rate). Specificity = TN/(TN + FP) — the ability to correctly identify absence of disease (true negative rate).',
          explanation: 'Sensitivity: of all patients who have the disease, what fraction did the test correctly identify as positive? Specificity: of all patients who do NOT have the disease, what fraction did the test correctly identify as negative? A sensitive test rarely misses disease (few false negatives) — good for screening. A specific test rarely over-calls disease (few false positives) — good for confirmation.',
          keyFact: 'Sensitivity = TP/(TP+FN) = true positive rate. Specificity = TN/(TN+FP) = true negative rate. Mnemonic: SnNout (Sensitive test, Negative = rules Out). SpPin (Specific test, Positive = rules In).',
          tags: ['statistics', 'sensitivity', 'specificity', 'image quality', 'physics'],
        },
      },
      {
        id: 'physics-stats-002',
        front: {
          question: 'What is a ROC curve, and what does the area under the ROC curve (AUC) represent?',
        },
        back: {
          answer: 'ROC (receiver operator characteristic) curve plots true positive rate (sensitivity) vs. false positive rate (1-specificity) across all decision thresholds. AUC = overall diagnostic accuracy: AUC = 1.0 (perfect), AUC = 0.5 (no better than chance).',
          explanation: 'Each point on the ROC curve represents a different decision threshold. Moving the threshold toward more "positive" calls: sensitivity increases (more true positives) but specificity falls (more false positives). The optimal operating point balances the clinical costs of false positives vs. false negatives. AUC is the most commonly used single measure to compare the performance of different imaging tests.',
          keyFact: 'ROC = sensitivity vs (1-specificity) at all thresholds. AUC: 1.0 = perfect test; 0.5 = worthless. Lowering threshold → ↑ sensitivity + ↓ specificity (moves right on ROC). AUC best single metric for test comparison.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/receiver-operating-characteristic-curve',
          tags: ['statistics', 'ROC', 'AUC', 'sensitivity', 'specificity'],
        },
      },
      {
        id: 'physics-stats-003',
        front: {
          question: 'What are positive predictive value (PPV) and negative predictive value (NPV), and how does disease prevalence affect them?',
        },
        back: {
          answer: 'PPV = TP/(TP+FP): probability that a positive test truly has disease. NPV = TN/(TN+FN): probability that a negative test truly does not have disease. Both depend heavily on disease prevalence.',
          explanation: 'Unlike sensitivity and specificity (which are intrinsic test properties), PPV and NPV depend on pre-test probability (prevalence). In a low-prevalence population, even a very specific test will have low PPV (many false positives relative to true positives). In a high-prevalence population, even a moderately sensitive test will have high PPV. Bayes\' theorem formally links these relationships.',
          keyFact: 'PPV = TP/(TP+FP). NPV = TN/(TN+FN). Unlike sens/spec: PPV/NPV depend on prevalence. ↑ prevalence → ↑ PPV, ↓ NPV. ↓ prevalence → ↓ PPV (screening dilemma), ↑ NPV. Sens/spec: population-independent.',
          tags: ['statistics', 'PPV', 'NPV', 'prevalence', 'Bayesian'],
        },
      },
      {
        id: 'physics-stats-004',
        front: {
          question: 'What are the four components of image quality in radiology, and which imaging parameter is unique in both improving image quality AND reducing dose simultaneously?',
        },
        back: {
          answer: 'Image quality components: contrast, resolution (spatial), noise (SNR), and artifacts. Collimation is unique: it simultaneously ↑ contrast (↓ scatter) and ↓ dose (reduces irradiated volume) — the only imaging parameter that improves both.',
          explanation: 'In general, improving image quality (e.g., higher mAs for SNR, smaller voxels for resolution) increases dose. Collimation is the rare exception. Increasing kV decreases contrast (more Compton scatter) but also decreases dose when using AEC. Grids improve contrast but increase dose (Bucky factor). Faster screens reduce dose but increase blur. Understanding these tradeoffs is fundamental to dose optimization (ALARA).',
          keyFact: 'Collimation: ONLY parameter that both ↑ image quality (↓ scatter → ↑ contrast) AND ↓ dose. ↑ kV → ↓ contrast + ↓ dose (with AEC). Grid → ↑ contrast + ↑ dose. SNR vs dose tradeoff: everything else is a compromise.',
          tags: ['image quality', 'contrast', 'resolution', 'dose', 'physics'],
        },
      },
    ],
  },
]