// ============================================================
// RadStack — Cardiac Radiology Deck
// ============================================================
// Naming convention: cardiac-[section]-[###]
// ============================================================

export const cardiacSubsections = [
  {
    id: 'cardiac-anatomy',
    label: 'Cardiac Anatomy & Physiology',
    cards: [
      {
        id: 'cardiac-anatomy-001',
        front: {
          question: 'Which cardiac chamber is defined anatomically by the moderator band?',
          hint: 'Think right-sided structure',
        },
        back: {
          answer: 'Right ventricle (RV)',
          explanation: 'The moderator band is a muscular trabeculation that crosses from the interventricular septum to the anterior papillary muscle of the RV. It is the key anatomic landmark distinguishing the RV from the LV on CT and MRI, especially when trying to identify ventricular morphology in congenital heart disease.',
          keyFact: 'Moderator band = right ventricle. Chordae tendinae inserting on the septum is also RV-specific; LV papillary muscles insert on the lateral/posterior walls.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/moderator-band',
          tags: ['MRI', 'CT', 'cardiac anatomy', 'right ventricle', 'congenital'],
        },
      },
      {
        id: 'cardiac-anatomy-002',
        front: {
          question: 'What is the crista terminalis and why is it clinically significant?',
        },
        back: {
          answer: 'Muscular ridge in the right atrium running from the SVC to IVC entrance — a normal structure, not a thrombus or tumor',
          explanation: 'The crista terminalis is a smooth muscle ridge on the posterior wall of the right atrium, separating the trabeculated appendage from the smooth-walled sinus venarum. It is clinically significant because it can be mistaken for a right atrial thrombus, mass, or vegetation on imaging, particularly on CT or echocardiography.',
          keyFact: 'Crista terminalis = normal RA structure. Classic exam trap: do not call it a clot. It runs from SVC to IVC.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/crista-terminalis',
          tags: ['CT', 'MRI', 'cardiac anatomy', 'right atrium', 'normal variant'],
        },
      },
      {
        id: 'cardiac-anatomy-003',
        front: {
          question: 'What is the Eustachian valve and what is the Chiari network?',
        },
        back: {
          answer: 'Eustachian valve: flap-like valve at the IVC–RA junction. Chiari network: more trabeculated, fenestrated variant of the same structure.',
          explanation: 'Both are remnants of the right valve of the sinus venosus. The Eustachian valve is a smooth flap seen at the IVC orifice in the right atrium, often visible on IVC-grams. When it appears more fenestrated or network-like, it is called the Chiari network. Both are benign normal variants that can mimic intracardiac pathology.',
          keyFact: 'Eustachian valve and Chiari network are normal RA structures at the IVC orifice — not thrombus, not pathology.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/eustachian-valve',
          tags: ['CT', 'cardiac anatomy', 'right atrium', 'normal variant', 'IVC'],
        },
      },
      {
        id: 'cardiac-anatomy-004',
        front: {
          question: 'What is the coronary sinus, where does it run, and where does it drain?',
        },
        back: {
          answer: 'Main draining vein of the myocardium; runs in the AV groove on the posterior heart surface; drains into the right atrium near the tricuspid valve',
          explanation: 'The coronary sinus receives venous drainage from most of the cardiac muscle via the great, middle, and small cardiac veins. It courses in the posterior atrioventricular groove and empties into the right atrium. It is visible on the 2-chamber cardiac MRI view and is the target vessel for left ventricular pacing leads in cardiac resynchronization therapy (CRT).',
          keyFact: 'Coronary sinus = main cardiac venous drainage → runs in posterior AV groove → empties into RA near tricuspid valve.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/coronary-sinus',
          tags: ['MRI', 'CT', 'cardiac anatomy', 'coronary veins', 'anatomy'],
        },
      },
      {
        id: 'cardiac-anatomy-005',
        front: {
          question: 'What are the radiographic signs of left atrial enlargement on CXR?',
        },
        back: {
          answer: 'Double density sign (direct); splaying of the carina >90°; walking man sign on lateral; posterior esophageal displacement',
          explanation: 'Left atrial enlargement produces several classic CXR findings. The double density sign is a direct sign — the right border of the enlarged LA is visible through the right atrium. Carina splaying >90° and posterior displacement of the left main stem bronchus (walking man sign on lateral, forming an upside-down V) are indirect signs. On a barium swallow, posterior esophageal displacement is also seen.',
          keyFact: 'LA enlargement on CXR: double density sign + carina splaying >90° + walking man sign on lateral. Most common cause: mitral valve disease.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/left-atrial-enlargement',
          tags: ['XR', 'cardiac anatomy', 'left atrium', 'mitral valve', 'CXR signs'],
        },
      },
      {
        id: 'cardiac-anatomy-006',
        front: {
          question: 'How does right ventricular enlargement differ from left ventricular enlargement in its radiographic appearance on CXR?',
        },
        back: {
          answer: 'RV enlargement: apex displaced leftward, fills retrosternal space on lateral. LV enlargement: apex displaced left AND inferiorly.',
          explanation: 'The RV is the most anterior cardiac chamber. RV enlargement pushes the apex leftward (not inferiorly) and opacifies the retrosternal clear space on lateral CXR. LV enlargement displaces the apex in a left-inferior direction and may cause the left heart border to become more convex and prominent.',
          keyFact: 'RV enlargement → leftward apex + retrosternal opacification. LV enlargement → left-inferior apex displacement.',
          tags: ['XR', 'cardiac anatomy', 'right ventricle', 'left ventricle', 'CXR signs'],
        },
      },
      {
        id: 'cardiac-anatomy-007',
        front: {
          question: 'What is lipomatous hypertrophy of the interatrial septum and how does it appear on imaging?',
        },
        back: {
          answer: 'Fat deposition in the interatrial septum with dumbbell/bilobed morphology that spares the fossa ovalis; T1 bright, drops out on fat-sat, can be PET hot',
          explanation: 'Lipomatous hypertrophy of the interatrial septum (LHIAS) is defined as fat deposition exceeding 2 cm in the atrial septum. The classic appearance is a dumbbell shape because the fat spares the fossa ovalis. It is associated with obesity and advanced age, and is usually asymptomatic but can rarely cause supraventricular arrhythmia. It is T1 bright, suppresses on fat-sat, and can be FDG-avid on PET (brown fat).',
          keyFact: 'LHIAS = dumbbell septum sparing fossa ovalis. >2 cm thick. PET hot (brown fat). Distinguish from lipoma which does NOT spare fossa ovalis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lipomatous-hypertrophy-of-the-interatrial-septum',
          tags: ['CT', 'MRI', 'PET', 'cardiac anatomy', 'interatrial septum', 'fat'],
        },
      },
      {
        id: 'cardiac-anatomy-008',
        front: {
          question: 'What determines coronary dominance and what is the most common pattern?',
        },
        back: {
          answer: 'Dominance is determined by which vessel gives rise to the posterior descending artery (PDA) and posterior LV branches. Right dominant is most common (~85%).',
          explanation: 'In right-dominant anatomy, the RCA gives rise to both the PDA and the posterior left ventricular branches. In left-dominant anatomy (~8%), the left circumflex supplies both. Co-dominance (~7%) occurs when the PDA arises from the RCA and the posterior LV branches arise from the LCx. Dominance affects the territory at risk during coronary occlusion.',
          keyFact: 'Coronary dominance = who gives the PDA. Right dominant = 85%. The RCA perfuses the SA node in 60% and the AV node in 90%.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/coronary-artery-dominance',
          tags: ['CT', 'cardiac anatomy', 'coronary arteries', 'anatomy'],
        },
      },
      {
        id: 'cardiac-anatomy-009',
        front: {
          question: 'What are the standard cardiac MRI views, and which view best assesses the LVOT?',
          hint: 'Think about naming by the chambers visible',
        },
        back: {
          answer: 'The 3-chamber (apical long axis) view best shows the LVOT and is ideal for aortic regurgitation/stenosis assessment.',
          explanation: 'The 2-chamber view shows the LV and LA (good for wall motion and mitral valve). The 3-chamber view (also called apical long axis) shows the LV, LA, aortic root, and LVOT — ideal for flow assessment at the aortic valve. The 4-chamber view shows all four chambers. The coronary sinus is identifiable on the 2-chamber view. Short axis is the standard for perfusion and viability.',
          keyFact: '3-chamber = best for LVOT and aortic valve. 2-chamber = best for mitral valve and coronary sinus identification.',
          tags: ['MRI', 'cardiac anatomy', 'cardiac MRI', 'LVOT', 'technique'],
        },
      },
      {
        id: 'cardiac-anatomy-010',
        front: {
          question: 'What is the cardiothoracic ratio, and above what value suggests cardiomegaly on PA CXR?',
        },
        back: {
          answer: 'CTR = cardiac width / thoracic inner diameter. CTR ≥ 0.55 on PA radiograph suggests cardiomegaly.',
          explanation: 'The cardiothoracic ratio is measured on a PA (not AP) chest radiograph. A CTR of 0.55 or greater indicates an enlarged cardiac silhouette. Common causes of enlarged silhouette include dilated cardiomyopathy, valvular regurgitation, pericardial effusion, and high-output states. Note that HCM does NOT typically enlarge the external cardiac contour.',
          keyFact: 'CTR ≥ 0.55 on PA CXR = cardiomegaly. Must be PA (not AP). HCM does not cause external contour enlargement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-size-assessment',
          tags: ['XR', 'cardiac anatomy', 'cardiomegaly', 'measurement', 'CXR'],
        },
      },
    ],
  },
  {
    id: 'cardiac-coronary',
    label: 'Coronary Artery Disease & CT Angiography',
    cards: [
      {
        id: 'cardiac-coronary-001',
        front: {
          question: 'What are the two ideal patient populations for coronary CT angiography (CCTA)?',
        },
        back: {
          answer: '(1) Low-risk or atypical chest pain patients (to exclude CAD and avoid stress test/cath); (2) suspected aberrant coronary anatomy',
          explanation: 'A negative CCTA has excellent negative predictive value for obstructive CAD, allowing safe discharge of low-risk chest pain patients. CCTA is also the gold standard for evaluating coronary anomalies (course, origin, termination). It is not ideal for patients with high heart rates, irregular rhythms, or severe calcification (which causes blooming artifact).',
          keyFact: 'CCTA ideal for: (1) low-risk chest pain + negative ECG/troponins, (2) coronary anomaly workup. Heart rate <60 bpm is preferred.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/coronary-ct-angiography',
          tags: ['CT', 'coronary arteries', 'CCTA', 'coronary CTA', 'technique'],
        },
      },
      {
        id: 'cardiac-coronary-002',
        front: {
          question: 'What is the difference between prospective and retrospective ECG gating for coronary CT, and when is each used?',
        },
        back: {
          answer: 'Prospective ("step and shoot"): triggered by R-wave, lower dose, no functional imaging, always axial. Retrospective: continuous acquisition, higher dose, allows functional imaging, helical.',
          explanation: 'Prospective gating acquires data only during a defined phase of the cardiac cycle, reducing radiation dose but precluding cine/functional analysis. Retrospective gating scans continuously throughout the entire cardiac cycle, with higher radiation dose (due to low pitch) but enabling ejection fraction and wall motion assessment. If beta-blockade fails and HR is too high, retrospective gating is the fallback.',
          keyFact: 'Prospective = lower dose, no function, axial. Retrospective = higher dose, enables EF assessment, helical. Beta-blocker contraindicated in 2nd/3rd degree heart block (not 1st degree).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-ct-gating',
          tags: ['CT', 'coronary arteries', 'CCTA', 'technique', 'radiation dose'],
        },
      },
      {
        id: 'cardiac-coronary-003',
        front: {
          question: 'What are the contraindications to nitroglycerin given before coronary CTA?',
        },
        back: {
          answer: 'Hypotension (SBP <100 mmHg), severe aortic stenosis, hypertrophic obstructive cardiomyopathy (HOCM), phosphodiesterase inhibitor use (sildenafil/tadalafil)',
          explanation: 'Nitroglycerin is given sublingually before CCTA to dilate the coronary arteries for better visualization. Contraindications relate to its vasodilatory effects: hypotension worsens with further vasodilation; severe AS or HOCM are at risk for hemodynamic collapse when afterload is reduced; PDE5 inhibitors cause synergistic hypotension through cGMP accumulation.',
          keyFact: 'NTG before CCTA: contraindicated with SBP <100, severe AS, HOCM, and Viagra/Cialis use. Beta-blocker (for HR reduction) contraindicated in 2nd/3rd degree block and acute cocaine use.',
          tags: ['CT', 'coronary arteries', 'CCTA', 'pharmacology', 'contraindications'],
        },
      },
      {
        id: 'cardiac-coronary-004',
        front: {
          question: 'What is the most common and most dangerous coronary artery anomaly?',
        },
        back: {
          answer: 'Anomalous origin of the left coronary artery (LCA) from the right coronary sinus, with an interarterial course between the aorta and pulmonary artery',
          explanation: 'This malignant coronary anomaly is the second most common cause of sudden cardiac death in young patients (after HCM). The vessel can be compressed during exercise when the aorta and pulmonary artery expand. Anomalous LCA from the right sinus always requires repair. Anomalous RCA from the left sinus requires repair only if symptomatic.',
          keyFact: 'Anomalous LCA from right sinus = always repair. Anomalous RCA from left sinus = repair if symptomatic. Interarterial course = malignant. 2nd most common cause of sudden cardiac death in young athletes (after HCM).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/anomalous-coronary-artery',
          tags: ['CT', 'coronary arteries', 'coronary anomaly', 'sudden death', 'congenital'],
        },
      },
      {
        id: 'cardiac-coronary-005',
        front: {
          question: 'What is ALCAPA and what is the "steal syndrome" associated with it?',
        },
        back: {
          answer: 'Anomalous Left Coronary Artery from the Pulmonary Artery. Steal: as pulmonary pressure drops postnatally, blood flows retrograde (backward) in the LCA into the low-pressure PA instead of antegrade to the myocardium.',
          explanation: 'ALCAPA has two presentations: infantile type (presents with CHF and dilated cardiomyopathy as pulmonary resistance falls and steal worsens) and adult type (survives via collaterals, still at risk of sudden death). The steal phenomenon occurs because blood flows from the high-pressure RCA collaterals retrograde through the LCA into the lower-pressure pulmonary artery.',
          keyFact: 'ALCAPA steal = retrograde LCA flow → blood diverted away from myocardium into PA. Classic boards question: "retrograde flow in LCA" = ALCAPA.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/anomalous-left-coronary-artery-from-the-pulmonary-artery',
          tags: ['CT', 'coronary arteries', 'coronary anomaly', 'ALCAPA', 'congenital'],
        },
      },
      {
        id: 'cardiac-coronary-006',
        front: {
          question: 'What is myocardial bridging and what is its significance?',
        },
        back: {
          answer: 'Intramyocardial course of a coronary artery (usually mid-LAD); may cause ischemia due to systolic compression and complicates CABG planning',
          explanation: 'Myocardial bridging occurs when a segment of a coronary artery (most commonly the LAD) runs within the myocardium rather than along the epicardial surface. During systole, the myocardial bridge compresses the vessel, potentially causing ischemia. It is detectable on CCTA as the coronary artery dipping below the myocardial surface.',
          keyFact: 'Myocardial bridging = intramyocardial LAD most common. Vessel narrows in systole. Can cause ischemia and affects CABG planning.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/myocardial-bridging',
          tags: ['CT', 'coronary arteries', 'myocardial bridging', 'LAD', 'ischemia'],
        },
      },
      {
        id: 'cardiac-coronary-007',
        front: {
          question: 'What defines a coronary artery aneurysm, and what is the most common cause in adults vs. children?',
        },
        back: {
          answer: 'Diameter >1.5× the normal adjacent lumen. Adults: atherosclerosis (most common). Children: Kawasaki disease (spontaneously resolves in ~50%).',
          explanation: 'Coronary artery aneurysms can be fusiform or saccular. In adults, atherosclerosis is the most common cause, followed by other vasculitides and iatrogenic causes (post-cath). In children, Kawasaki disease is the leading cause; the aneurysms may regress spontaneously in about half of cases. Giant aneurysms (>8 mm) are less likely to resolve.',
          keyFact: 'Coronary aneurysm = >1.5× normal diameter. Adults: atherosclerosis. Kids: Kawasaki (50% spontaneously resolve). Also seen with vasculitides and iatrogenic injury.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/coronary-artery-aneurysm',
          tags: ['CT', 'coronary arteries', 'aneurysm', 'Kawasaki', 'atherosclerosis'],
        },
      },
      {
        id: 'cardiac-coronary-008',
        front: {
          question: 'What is a coronary artery fistula, what is the typical anatomy, and what complication is it associated with?',
        },
        back: {
          answer: 'Abnormal connection between a coronary artery and a cardiac chamber or great vessel. Usually RCA → right-sided chambers. Associated with coronary artery aneurysm.',
          explanation: 'Coronary fistulae are usually congenital but can be iatrogenic (post-cardiac surgery or catheterization). The RCA is most commonly involved, with drainage into the right atrium or right ventricle. Large fistulae cause volume overload and may lead to massive coronary dilation. Coronary aneurysm formation is a key associated complication.',
          keyFact: 'Coronary fistula: RCA most common → drains into right heart. Associated with coronary aneurysm. Massive coronary dilation on CTA should raise this diagnosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/coronary-artery-fistula',
          tags: ['CT', 'coronary arteries', 'fistula', 'congenital', 'vascular'],
        },
      },
      {
        id: 'cardiac-coronary-009',
        front: {
          question: 'On CCTA, what are the 17 LV myocardial segments, and which three coronary arteries supply them?',
        },
        back: {
          answer: '17 segments across apical (4), mid (6), basal (6), and apex (1) levels. LAD: anterior wall + septum + apex. RCA: inferior wall. LCx: lateral wall.',
          explanation: 'The 17-segment model is used for standardized reporting of perfusion and viability. The short axis images are reconstructed from apex (1 segment) through apical (4 segments), mid (6 segments), and basal (6 segments). The LAD typically supplies the anterior wall, anterior septum, and apex. The RCA supplies the inferior wall and inferior septum. The LCx supplies the lateral wall. Overlap exists, especially at the apex.',
          keyFact: '17 LV segments: LAD = anterior + septum + apex; RCA = inferior; LCx = lateral. Apical cap is LAD territory. Used for perfusion defect localization.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/17-segment-model-of-the-left-ventricle',
          tags: ['CT', 'MRI', 'coronary arteries', 'anatomy', 'nuclear medicine', 'perfusion'],
        },
      },
      {
        id: 'cardiac-coronary-010',
        front: {
          question: 'What is the "bovine arch" variant, and what is its incidence?',
        },
        back: {
          answer: 'Most common aortic arch branching variant: brachiocephalic artery and left common carotid artery share a common origin (~20–25% of the population)',
          explanation: 'The normal aortic arch has three branches: brachiocephalic trunk, left common carotid, and left subclavian. In the bovine arch variant, the brachiocephalic artery and left common carotid arise from a common trunk, making it appear there are only two branches. It is the most common arch variant and is usually asymptomatic and incidentally discovered.',
          keyFact: 'Bovine arch = most common arch variant. Brachiocephalic + left CCA share common origin. Incidental finding, no clinical significance.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bovine-arch',
          tags: ['CT', 'coronary arteries', 'aortic arch', 'normal variant', 'anatomy'],
        },
      },
    ],
  },
  {
    id: 'cardiac-nuclear',
    label: 'Nuclear Cardiology',
    cards: [
      {
        id: 'cardiac-nuclear-001',
        front: {
          question: 'What radiotracers are used for myocardial perfusion SPECT, and which is most commonly used?',
        },
        back: {
          answer: 'Tc-99m sestamibi (Cardiolite) and Tc-99m tetrofosmin (Myoview) — most common. Also thallium-201. PET tracers: rubidium-82 and N-13 ammonia.',
          explanation: 'Tc-99m labeled agents are preferred due to generator availability, shorter half-life (6 hours), higher photon energy (140 keV), and superior image quality vs. thallium. Sestamibi binds mitochondrial membranes; tetrofosmin has faster hepatobiliary clearance allowing earlier imaging. Thallium-201 (t½ = 73 hours) is less commonly used but unique for redistribution/viability imaging.',
          keyFact: 'Tc-99m sestamibi/tetrofosmin = most common SPECT agents. Key distinction: Tc-99m does NOT redistribute. Thallium DOES redistribute.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/myocardial-perfusion-scintigraphy',
          tags: ['nuclear medicine', 'SPECT', 'myocardial perfusion', 'Tc-99m', 'thallium'],
        },
      },
      {
        id: 'cardiac-nuclear-002',
        front: {
          question: 'How does thallium-201 redistribution work, and what does it indicate?',
        },
        back: {
          answer: 'Thallium redistributes over 3–4 hours via simultaneous cellular washout and re-extraction from blood pool. Redistribution = viable ischemic myocardium. Fixed defect = scar.',
          explanation: 'Thallium behaves as a potassium analog (active transport via Na-K ATPase). During stress, ischemic zones show decreased uptake. Over 3–4 hours, viable (but ischemic) cells can still extract thallium from the blood pool, so the defect normalizes on redistribution images. An infarct has no viable cells and shows a persistent (fixed) defect on both stress and delayed images.',
          keyFact: 'Thallium redistribution: stress defect that normalizes → ischemia (viable). Stress defect that persists → infarct/scar. This is the basis for thallium viability imaging.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thallium-201-myocardial-perfusion-imaging',
          tags: ['nuclear medicine', 'SPECT', 'thallium', 'viability', 'ischemia'],
        },
      },
      {
        id: 'cardiac-nuclear-003',
        front: {
          question: 'What is the gold standard for evaluating myocardial viability, and how does it work?',
        },
        back: {
          answer: 'F-18 FDG PET. Viable myocardium uptakes FDG (glucose metabolism); scar does not.',
          explanation: 'F-18 FDG is a viability (not perfusion) agent. Ischemic but viable myocardium cannot metabolize fatty acids efficiently and instead relies on anaerobic glucose metabolism, leading to increased FDG uptake relative to normal myocardium. Myocardial scar has no viable cells and does not take up FDG. The classic viability pattern: perfusion defect with FDG uptake = hibernating myocardium (mismatch). Matched defect = scar.',
          keyFact: 'FDG PET = gold standard for viability. Mismatch (perfusion defect + FDG uptake) = hibernating myocardium. Match (both defects) = scar. Patient must be glucose-loaded before study.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fdg-pet-myocardial-viability',
          tags: ['PET', 'nuclear medicine', 'FDG', 'viability', 'hibernating myocardium'],
        },
      },
      {
        id: 'cardiac-nuclear-004',
        front: {
          question: 'Distinguish between stunned, hibernating, and infarcted myocardium on perfusion and FDG imaging.',
        },
        back: {
          answer: 'Stunned: normal perfusion, decreased contractility (post-acute injury). Hibernating: fixed perfusion defect + increased FDG (chronic ischemia, reversible). Infarct/Scar: fixed perfusion defect + no FDG, no redistribution.',
          explanation: 'Stunned myocardium occurs after acute ischemia/reperfusion — the cells are viable but temporarily dysfunctional; perfusion normalizes but wall motion is impaired. Hibernating myocardium is a chronic adaptive response to severe CAD with persistent hypoperfusion; it will improve with revascularization. Scar is dead myocardium that will not recover with any intervention.',
          keyFact: 'Stunned = acute, normal perfusion, recovers spontaneously. Hibernating = chronic, fixed perfusion + FDG mismatch, recovers with revascularization. Scar = fixed defect both on perfusion AND FDG, does not recover.',
          tags: ['nuclear medicine', 'PET', 'SPECT', 'viability', 'myocardial infarction'],
        },
      },
      {
        id: 'cardiac-nuclear-005',
        front: {
          question: 'What is transient ischemic dilation (TID) on myocardial perfusion imaging and what does it indicate?',
        },
        back: {
          answer: 'Apparent dilation of the LV cavity on stress images compared to rest — indicates severe multivessel CAD or left main disease, even without a focal perfusion defect',
          explanation: 'TID occurs because diffuse subendocardial ischemia during stress causes the LV walls to appear thinned, making the cavity seem larger. It is a marker of severe and extensive coronary artery disease affecting multiple territories and is associated with worse prognosis. It can be present even when no focal perfusion defect is visible.',
          keyFact: 'TID on stress MPI = LV appears larger on stress vs rest. Indicates severe multivessel or left main CAD. Bad prognostic sign even without a focal defect.',
          tags: ['nuclear medicine', 'SPECT', 'myocardial perfusion', 'ischemia', 'multivessel CAD'],
        },
      },
      {
        id: 'cardiac-nuclear-006',
        front: {
          question: 'What pharmacologic stress agents are used in cardiac nuclear imaging, and when is each preferred?',
        },
        back: {
          answer: 'Vasodilators (dipyridamole, adenosine, regadenoson): preferred for perfusion. Dobutamine (β1 agonist): used when vasodilator is contraindicated (severe asthma, COPD, recent caffeine).',
          explanation: 'Vasodilators work by increasing coronary blood flow 3–5x; stenosed vessels cannot dilate, creating relative perfusion defects. Dipyridamole inhibits adenosine deaminase (indirect). Adenosine acts directly (very short half-life, no reversal agent needed). Regadenoson is a selective A2A receptor agonist with a fixed dose and 2–3 min half-life — reversed by aminophylline. Dobutamine increases O2 demand and is used for wall motion assessment.',
          keyFact: 'Vasodilators (adenosine/dipyridamole/regadenoson) = perfusion stress. Dobutamine = wall motion stress. Aminophylline reverses vasodilators. Caffeine must be held ≥12 hours before vasodilator stress.',
          tags: ['nuclear medicine', 'pharmacology', 'stress testing', 'adenosine', 'dobutamine'],
        },
      },
      {
        id: 'cardiac-nuclear-007',
        front: {
          question: 'What is the target heart rate for exercise stress in nuclear cardiology, and what is a contraindication to exercise stress?',
        },
        back: {
          answer: 'Target HR = 85% of maximal HR (220 − age). Contraindications: acute MI within 48h, unstable angina, acute aortic dissection, acute PE, severe symptomatic AS, decompensated heart failure.',
          explanation: 'The Bruce or modified Bruce treadmill protocol is standard. The study is diagnostic only if 85% of maximal predicted HR is achieved. LBBB is a relative indication to use pharmacologic rather than exercise stress, because exercise can cause false-positive reversible septal perfusion defects in patients with LBBB.',
          keyFact: 'Target HR = 85% × (220 − age). LBBB → use pharmacologic stress (exercise causes false-positive septal defect). Caffeine and theophylline block dipyridamole/adenosine and must be held.',
          tags: ['nuclear medicine', 'stress testing', 'exercise', 'LBBB', 'technique'],
        },
      },
      {
        id: 'cardiac-nuclear-008',
        front: {
          question: 'What is a MUGA scan, and what does it measure?',
        },
        back: {
          answer: 'Multi-gated acquisition (equilibrium radionuclide angiography, E-RNA): Tc-99m labeled RBCs in equilibrium, ECG-gated planar imaging. Measures LVEF and wall motion.',
          explanation: 'MUGA (E-RNA) images the cardiac blood pool after Tc-99m RBCs equilibrate in the vasculature. ECG gating divides the cardiac cycle into frames, allowing calculation of LVEF = (EDC − ESC)/(EDC − background). It provides accurate, reproducible EF measurements and is used for monitoring cardiotoxicity from chemotherapy (e.g., doxorubicin). It has largely been replaced by echo and GSPECT but remains the gold standard for serial LVEF measurement.',
          keyFact: 'MUGA = gold standard for serial LVEF monitoring. Used to track cardiotoxicity during chemotherapy. Tc-99m labeled RBCs, ECG-gated. Cannot assess perfusion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/radionuclide-ventriculography',
          tags: ['nuclear medicine', 'MUGA', 'LVEF', 'Tc-99m', 'cardiac function'],
        },
      },
      {
        id: 'cardiac-nuclear-009',
        front: {
          question: 'How is Tc-99m pyrophosphate (bone scan tracer) used in cardiac imaging, and what does Grade 2 or 3 uptake indicate?',
        },
        back: {
          answer: 'Used to diagnose transthyretin (ATTR) cardiac amyloidosis. Grade 2 (myocardial = rib uptake) or Grade 3 (myocardial > rib uptake) is nearly 100% specific for ATTR amyloid if AL amyloid is excluded.',
          explanation: 'Tc-99m bisphosphonates (pyrophosphate, DPD, HMDP) selectively accumulate in transthyretin amyloid deposits in the myocardium. The mechanism is poorly understood. Grading: Grade 1 = less than rib, Grade 2 = equal to rib, Grade 3 = greater than rib. Grades 2–3 with negative serum/urine electrophoresis (excluding light-chain amyloid) are diagnostic for ATTR amyloidosis without biopsy.',
          keyFact: 'Tc-99m pyrophosphate: Grade 2–3 uptake (myocardial ≥ rib) + negative AL workup = ATTR cardiac amyloidosis (near 100% specific). Distinguishes ATTR from AL amyloid (AL has little uptake).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-amyloidosis',
          tags: ['nuclear medicine', 'amyloidosis', 'ATTR', 'Tc-99m', 'cardiomyopathy'],
        },
      },
      {
        id: 'cardiac-nuclear-010',
        front: {
          question: 'How is FDG PET used to diagnose cardiac sarcoidosis, and what patient preparation is required?',
        },
        back: {
          answer: 'High-fat, low-carbohydrate diet for 24 hours + ≥12-hour fast before FDG injection to suppress physiologic myocardial glucose uptake; focal FDG uptake in the myocardium indicates inflammation.',
          explanation: 'Normal myocardium preferentially metabolizes fatty acids; if glucose is available, normal myocardium will take up FDG (false positive). The fat-loading protocol suppresses physiologic myocardial FDG uptake so that only inflamed areas (which must use glucose) are FDG-avid. Cardiac sarcoidosis typically shows focal or patchy FDG uptake with or without corresponding perfusion defect.',
          keyFact: 'Cardiac sarcoidosis on FDG PET: must use fat-loading prep (24h high-fat low-carb diet) to suppress normal myocardial uptake. Focal FDG + perfusion defect = active fibrosis. Normal perfusion early in disease.',
          tags: ['PET', 'FDG', 'sarcoidosis', 'nuclear medicine', 'cardiomyopathy'],
        },
      },
      {
        id: 'cardiac-nuclear-011',
        front: {
          question: 'What is the role of FDG PET/CT in prosthetic valve endocarditis, and how does it compare to leukocyte scintigraphy?',
        },
        back: {
          answer: 'FDG PET/CT: accurate for prosthetic valve endocarditis and systemic complications; less reliable for native valve. Leukocyte SPECT: more specific but lower sensitivity due to weak signal.',
          explanation: 'FDG PET/CT shows focal valvular FDG uptake in prosthetic valve endocarditis and can identify systemic septic emboli. It can be combined with CT angiography for improved sensitivity. Leukocyte scintigraphy (radiolabeled WBCs with SPECT/CT) is more specific but limited by weak signal and lower resolution. FDG PET is preferred for complex cases such as post-surgical patients or device infections.',
          keyFact: 'FDG PET = good for PROSTHETIC valve endocarditis (less reliable for native valve). Focal valvular FDG = infection. Leukocyte SPECT = more specific, less sensitive.',
          tags: ['PET', 'FDG', 'endocarditis', 'nuclear medicine', 'prosthetic valve'],
        },
      },
    ],
  },
  {
    id: 'cardiac-mri',
    label: 'Cardiac MRI Technique & Sequences',
    cards: [
      {
        id: 'cardiac-mri-001',
        front: {
          question: 'What is late gadolinium enhancement (LGE) on cardiac MRI, and what is the critical distinction between ischemic and non-ischemic patterns?',
        },
        back: {
          answer: 'Ischemic: enhancement starts subendocardially and extends toward epicardium in a coronary territory distribution. Non-ischemic: midwall or epicardial enhancement, patchy/multifocal, NOT in a coronary distribution.',
          explanation: 'LGE uses an inversion recovery technique to null normal myocardium 10–15 minutes after gadolinium injection. Pathologic tissue (infarct, inflammation, fibrosis) washes out contrast more slowly and appears bright. Ischemic injury follows vascular territories (subendocardial-to-transmural). Non-ischemic causes (myocarditis, sarcoidosis, cardiomyopathies) show mid-wall or epicardial enhancement not confined to a coronary distribution.',
          keyFact: '"Bright is Dead" on LGE. Ischemic = subendocardial → coronary territory. Non-ischemic = midwall/epicardial → not coronary territory. This is the core branch point in cardiac MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/late-gadolinium-enhancement-cardiac',
          tags: ['MRI', 'LGE', 'cardiac MRI', 'ischemic heart disease', 'cardiomyopathy'],
        },
      },
      {
        id: 'cardiac-mri-002',
        front: {
          question: 'What is microvascular obstruction (MVO) on cardiac MRI and what is its significance?',
        },
        back: {
          answer: 'Islands of dark signal within a zone of LGE — represents capillary destruction preventing gadolinium delivery to infarcted zones. Indicates poor prognosis and lack of functional recovery.',
          explanation: 'MVO (also called "no-reflow") occurs in the setting of acute MI when microvascular injury prevents contrast from reaching the core of the infarct even after epicardial reperfusion. On LGE, it appears as a dark core within a bright (enhanced) infarct zone. MVO is best seen on first-pass perfusion imaging (~25 seconds) and is an acute/subacute finding — it resolves over time as scar forms. It is NOT seen in chronic infarcts.',
          keyFact: 'MVO = dark islands within bright LGE = acute/subacute MI only. NOT seen in chronic infarct. Independent predictor of death and adverse LV remodeling.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/microvascular-obstruction',
          tags: ['MRI', 'LGE', 'cardiac MRI', 'myocardial infarction', 'prognosis'],
        },
      },
      {
        id: 'cardiac-mri-003',
        front: {
          question: 'How does cardiac MRI distinguish acute from chronic myocardial infarction?',
        },
        back: {
          answer: 'Acute: LGE + T2 bright edema, normal wall thickness, possible MVO. Chronic: LGE + T2 dark scar, thinned myocardium (if transmural), no MVO.',
          explanation: 'In acute MI, edematous myocardium shows increased T2 signal. The area of T2 signal minus the area of LGE represents salvageable myocardium (myocardium at risk minus necrosis). Chronic infarcts develop fibrosis (T2 dark, no edema) and may show myocardial thinning if the infarct was transmural. MVO appears in acute/subacute phase only.',
          keyFact: 'Acute MI: T2 bright (edema) + LGE + possible MVO + normal thickness. Chronic MI: T2 dark (scar) + LGE + possible wall thinning + no MVO.',
          tags: ['MRI', 'LGE', 'cardiac MRI', 'myocardial infarction', 'edema'],
        },
      },
      {
        id: 'cardiac-mri-004',
        front: {
          question: 'What is myocardial viability grading on LGE cardiac MRI, and at what transmural extent is functional recovery unlikely?',
        },
        back: {
          answer: '<25% transmural = likely to improve with revascularization. 25–50% = uncertain. >50% transmural = unlikely to recover function.',
          explanation: 'LGE extent is assessed as percentage of transmural thickness involved in the infarct scar. This is the key metric used to decide whether revascularization will improve LV function. The greater the transmural extent, the less likely functional recovery. Segments with <25% LGE almost always improve after PCI or CABG. Segments with >50% transmural LGE are unlikely to benefit.',
          keyFact: 'Viability on LGE: <25% transmural = will improve. >50% transmural = will NOT improve. This guides PCI/CABG decision-making.',
          tags: ['MRI', 'LGE', 'cardiac MRI', 'viability', 'revascularization'],
        },
      },
      {
        id: 'cardiac-mri-005',
        front: {
          question: 'What is the timing of complications after acute myocardial infarction?',
        },
        back: {
          answer: 'Myocardial rupture: within 3–5 days (50% within 3 days). Pseudoaneurysm: 3–7 days. Papillary muscle rupture: 2–7 days. Dressler syndrome: 4–6 weeks. True aneurysm: months (requires remodeling).',
          explanation: 'These timing relationships are classic board facts. Free wall rupture occurs early when the infarcted wall is softest. A pseudoaneurysm forms when rupture is contained by pericardium/clot. Papillary muscle rupture causes acute mitral regurgitation and can be rapidly fatal. Dressler syndrome is an autoimmune pericarditis that develops weeks later.',
          keyFact: 'Post-MI timing: Rupture/pseudoaneurysm = within 1 week. Dressler = 4–6 weeks. True aneurysm = months. Papillary rupture = 2–7 days → acute MR.',
          tags: ['MRI', 'cardiac MRI', 'myocardial infarction', 'complications', 'timing'],
        },
      },
      {
        id: 'cardiac-mri-006',
        front: {
          question: 'What is the difference between a true ventricular aneurysm and a pseudoaneurysm after MI?',
        },
        back: {
          answer: 'True: wide mouth (>body), intact myocardium, usually anterior-lateral. Pseudo: narrow neck (<body), myocardium NOT intact (contained rupture by pericardium/adhesions), usually posterior-lateral, higher rupture risk.',
          explanation: 'True aneurysms are bulges of infarcted but intact myocardium with a wide orifice. They form over weeks-months as the thinning myocardium remodels. Pseudoaneurysms form acutely when the myocardium ruptures and the pericardium contains the hematoma. The narrow neck (smaller than the body) is the key distinguishing feature and reflects the rupture point.',
          keyFact: 'True aneurysm = wide mouth = anterior-lateral. Pseudoaneurysm = NARROW neck = posterior-lateral = high rupture risk. Narrow neck relative to body = pseudo.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/left-ventricular-aneurysm',
          tags: ['MRI', 'CT', 'cardiac MRI', 'myocardial infarction', 'aneurysm'],
        },
      },
      {
        id: 'cardiac-mri-007',
        front: {
          question: 'What is the classic LGE pattern of myocarditis and how does it differ from ischemic disease?',
        },
        back: {
          answer: 'Myocarditis: epicardial or midwall LGE, preferentially lateral free wall, non-coronary distribution. Ischemic: subendocardial, follows coronary territory.',
          explanation: 'Myocarditis (often viral, e.g., coxsackie B) causes inflammation that begins in the outer myocardium (epicardium/midwall) rather than the subendocardium. On cardiac MRI, LGE is located in the lateral free wall in an epicardial or midwall pattern. T2 signal is elevated in the affected area due to acute edema. The Lake Louise criteria use T2 ratio, early gadolinium enhancement ratio, and LGE to diagnose myocarditis.',
          keyFact: 'Myocarditis LGE = epicardial/midwall, lateral free wall, non-vascular pattern. Distinct from ischemic (subendocardial, coronary territory). Most common cause: viral (Coxsackievirus).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/myocarditis',
          tags: ['MRI', 'LGE', 'myocarditis', 'cardiomyopathy', 'non-ischemic'],
        },
      },
      {
        id: 'cardiac-mri-008',
        front: {
          question: 'What is velocity-encoded cine MRI (VENC/phase-contrast imaging) used for in cardiac imaging?',
        },
        back: {
          answer: 'Quantifies blood flow velocity and volume across cardiac valves and great vessels; used for grading aortic stenosis/regurgitation and shunt quantification (Qp:Qs).',
          explanation: 'Phase-contrast MRI encodes the velocity of moving protons as a phase shift in the MR signal. It can measure peak velocity through stenotic valves (for grading severity), regurgitant fraction, and calculate pulmonary-to-systemic flow ratios (Qp:Qs) in congenital heart disease. It is also called velocity mapping or VENC imaging.',
          keyFact: 'VENC/phase-contrast MRI = quantifies flow velocity. Used for: aortic stenosis grading (peak velocity), regurgitant fraction, shunt quantification (Qp:Qs).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/phase-contrast-mri',
          tags: ['MRI', 'cardiac MRI', 'valvular disease', 'technique', 'flow quantification'],
        },
      },
      {
        id: 'cardiac-mri-009',
        front: {
          question: 'What are the contraindications to cardiac MRI?',
        },
        back: {
          answer: 'ICDs, non-MRI-conditional pacemakers, cochlear implants, intracranial shrapnel/ferromagnetic foreign bodies. Cardiac stents are usually MRI-safe.',
          explanation: 'Active implantable electronic devices (ICDs, older pacemakers) are traditionally contraindicated due to programming interference, heating, and device movement. Modern MRI-conditional pacemakers may be acceptable with specific protocols. Cochlear implants contain magnets susceptible to repositioning. Intracranial ferromagnetic fragments risk movement near vital structures. Notably, most coronary and vascular stents are safe after a short waiting period.',
          keyFact: 'Cardiac MRI contraindicated: ICDs, non-conditional pacemakers, cochlear implants, intracranial metallic fragments. Cardiac stents = generally safe.',
          tags: ['MRI', 'cardiac MRI', 'contraindications', 'safety', 'pacemaker'],
        },
      },
    ],
  },
  {
    id: 'cardiac-ischemic',
    label: 'Ischemic Heart Disease',
    cards: [
      {
        id: 'cardiac-ischemic-001',
        front: {
          question: 'In what direction does the wave front of myocardial necrosis progress during an acute MI?',
        },
        back: {
          answer: 'From subendocardium toward subepicardium (inside-out progression)',
          explanation: 'The subendocardium is most vulnerable to ischemia because it is furthest from the epicardial coronary supply and has the highest wall stress. Coronary occlusion initiates necrosis at the subendocardium, which progresses outward (transmurally) over time. This is why early reperfusion can salvage epicardial myocardium and limit infarct size. The subepicardium is typically spared in early ischemia.',
          keyFact: 'MI wave front = subendocardium → subepicardium (inside-out). LGE follows same pattern. Early reperfusion limits transmural extension.',
          tags: ['MRI', 'ischemic heart disease', 'myocardial infarction', 'pathophysiology'],
        },
      },
      {
        id: 'cardiac-ischemic-002',
        front: {
          question: 'Why is stress imaging performed for CAD evaluation, and what is the key physiologic principle?',
        },
        back: {
          answer: 'Coronary autoregulation can maintain normal resting perfusion even with >85% stenosis. Stress (exercise or pharmacologic) unmasks the hemodynamic significance of stenosis by increasing demand.',
          explanation: 'A coronary artery with >85% stenosis can still perfuse the myocardium adequately at rest through autoregulatory vasodilation of distal arterioles. During stress, the normally perfused myocardium hyperemia-dilates but the stenotic territory cannot increase flow proportionally. This creates a relative perfusion defect. Even a 45% stenosis can become hemodynamically significant under maximal stress.',
          keyFact: 'Stenosis up to ~85% can be asymptomatic at rest due to autoregulation. Stress unmasks lesions. Inotropic stress (dobutamine) = wall motion. Vasodilator (adenosine) = perfusion.',
          tags: ['nuclear medicine', 'ischemic heart disease', 'CAD', 'stress testing', 'physiology'],
        },
      },
      {
        id: 'cardiac-ischemic-003',
        front: {
          question: 'What is isolated right upper lobe pulmonary edema, and what cardiac condition is it associated with?',
        },
        back: {
          answer: 'Mitral regurgitation (MR) — regurgitant jet directed toward the right upper pulmonary vein causes preferential edema in the right upper lobe',
          explanation: 'In acute mitral regurgitation, the regurgitant jet is often directed toward the right upper pulmonary vein, causing asymmetric (right upper lobe predominant) pulmonary edema. This is a classic board fact that distinguishes MR from other causes of pulmonary edema, which typically cause bilateral or dependent edema.',
          keyFact: 'Isolated right upper lobe pulmonary edema = classic for mitral regurgitation. Jet directed at right upper pulmonary vein.',
          tags: ['XR', 'ischemic heart disease', 'mitral regurgitation', 'pulmonary edema', 'CXR signs'],
        },
      },
    ],
  },
  {
    id: 'cardiac-cardiomyopathy',
    label: 'Non-Ischemic Cardiomyopathy',
    cards: [
      {
        id: 'cardiac-cardiomyopathy-001',
        front: {
          question: 'What defines dilated cardiomyopathy on cardiac MRI, and what LGE patterns differentiate ischemic from idiopathic causes?',
        },
        back: {
          answer: 'DCM: LV end-diastolic diameter >55 mm + reduced EF. Ischemic: subendocardial/transmural LGE in coronary territory. Idiopathic: no LGE OR midwall linear LGE (non-coronary).',
          explanation: 'Dilated cardiomyopathy is defined by LV dilation with reduced systolic function. The LGE pattern is critical: ischemic DCM shows subendocardial-to-transmural enhancement in a coronary distribution; idiopathic DCM typically shows either no enhancement or linear midwall enhancement not following any coronary territory. Causes of non-ischemic DCM include alcohol, doxorubicin, cyclosporine, Chagas disease, viral myocarditis, and idiopathic.',
          keyFact: 'DCM: EDD >55 mm + low EF. Ischemic = subendocardial LGE. Idiopathic = no LGE or midwall LGE. Often associated with secondary MR from annular dilation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/dilated-cardiomyopathy',
          tags: ['MRI', 'LGE', 'dilated cardiomyopathy', 'cardiomyopathy', 'non-ischemic'],
        },
      },
      {
        id: 'cardiac-cardiomyopathy-002',
        front: {
          question: 'What is the most common cause of restrictive cardiomyopathy, and what are the MRI findings of cardiac amyloidosis?',
        },
        back: {
          answer: 'Amyloidosis (most common). MRI: concentric LV thickening + biatrial enlargement + difficulty nulling myocardium (long TI needed, ~350 ms) + global subendocardial circumferential LGE.',
          explanation: 'Amyloid deposits in the myocardium cause stiff, non-compliant ventricles with abnormal diastolic function. On cardiac MRI, the hallmarks are concentric LV wall thickening, biatrial enlargement, and a characteristic LGE pattern with global subendocardial circumferential enhancement. A very long inversion time (TI) is needed to null the myocardium because amyloid alters gadolinium kinetics — sometimes the blood pool is darker than the myocardium. Poor prognosis.',
          keyFact: 'Cardiac amyloid on MRI: "difficult to suppress myocardium" (very long TI needed ~350 ms). Global subendocardial circumferential LGE. Most common cause of restrictive cardiomyopathy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-amyloidosis',
          tags: ['MRI', 'LGE', 'amyloidosis', 'restrictive cardiomyopathy', 'cardiomyopathy'],
        },
      },
      {
        id: 'cardiac-cardiomyopathy-003',
        front: {
          question: 'What is hypertrophic cardiomyopathy (HCM), and what is the most important complication?',
        },
        back: {
          answer: 'Abnormal myofibril disarray causing asymmetric septal hypertrophy with diastolic dysfunction. Most important complication: sudden cardiac death. HOCM subtype: LVOT obstruction with SAM of the anterior mitral leaflet.',
          explanation: 'HCM is the most common cause of sudden cardiac death in young athletes. The classic imaging finding is asymmetric hypertrophy of the interventricular septum. HOCM (obstructive subtype) involves dynamic LVOT obstruction; Venturi forces pull the anterior mitral leaflet into the LVOT during systole (SAM — systolic anterior motion). Patchy midwall LGE of the hypertrophied segments is an independent risk factor for sudden death. Note: HCM does NOT enlarge the external cardiac contour on CXR.',
          keyFact: 'HCM = #1 cause of sudden death in young athletes. Asymmetric septal hypertrophy. SAM (systolic anterior motion of MV) = HOCM. Midwall LGE = independent SCD risk factor.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hypertrophic-cardiomyopathy',
          tags: ['MRI', 'LGE', 'HCM', 'cardiomyopathy', 'sudden death'],
        },
      },
      {
        id: 'cardiac-cardiomyopathy-004',
        front: {
          question: 'What is arrhythmogenic right ventricular cardiomyopathy (ARVC) and what are the key imaging features?',
        },
        back: {
          answer: 'Fibrofatty replacement of RV myocardium causing arrhythmia and sudden death. MRI: dilated RV with reduced function + fibrofatty wall replacement (T1 bright, fat-sat suppression) + normal LV.',
          explanation: 'ARVC (also called ARVC/D) is a genetic cardiomyopathy characterized by progressive replacement of RV myocardium with fibrofatty tissue. Diagnosis uses major/minor criteria (Task Force). MRI shows RV dilation, reduced RV ejection fraction, wall motion abnormalities, and fat infiltration in the RV free wall (best seen with fat saturation sequences). LBBB morphology VT is the classic EKG finding. Sudden death can occur in young athletes.',
          keyFact: 'ARVC: dilated RV + fibrofatty wall (T1 bright, suppresses on fat-sat) + arrhythmia (LBBB-pattern VT) + normal LV. Fat-sat is essential to confirm fat in RV wall.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/arrhythmogenic-right-ventricular-cardiomyopathy',
          tags: ['MRI', 'ARVC', 'cardiomyopathy', 'right ventricle', 'sudden death'],
        },
      },
      {
        id: 'cardiac-cardiomyopathy-005',
        front: {
          question: 'What is Takotsubo cardiomyopathy and what are its key imaging features?',
        },
        back: {
          answer: 'Stress cardiomyopathy in post-menopausal women after emotional/physical stress. LV apical ballooning with preserved basal function. No coronary stenosis. NO LGE.',
          explanation: 'Takotsubo ("octopus trap") cardiomyopathy is a transient LV dysfunction that mimics ACS. It characteristically shows apical ballooning (dyskinesia) and preserved or hyperdynamic basal function, creating a distinctive LV shape on ventriculography. There is no obstructive coronary artery disease and NO late gadolinium enhancement (distinguishing from infarct). It is reversible, with LV function recovering in days to weeks.',
          keyFact: 'Takotsubo: apical ballooning without CAD, NO LGE, reversible. Triggered by emotional/physical stress. Post-menopausal women. Think "broken heart syndrome."',
          radiopaediaUrl: 'https://radiopaedia.org/articles/takotsubo-cardiomyopathy',
          tags: ['MRI', 'CT', 'takotsubo', 'cardiomyopathy', 'stress cardiomyopathy'],
        },
      },
      {
        id: 'cardiac-cardiomyopathy-006',
        front: {
          question: 'What is the LGE pattern of cardiac sarcoidosis, and how does it differ from HCM?',
        },
        back: {
          answer: 'Sarcoidosis: T2 bright + early and late Gd, middle/epicardial LGE in non-coronary distribution, often involves septum. HCM: patchy midwall LGE in hypertrophied segments, no T2 edema.',
          explanation: 'Cardiac sarcoidosis involves granulomatous infiltration of the myocardium, classically affecting the basal septum. LGE is seen in the mid and epicardial layers in a non-coronary distribution. T2 signal is increased in active inflammation. Focal wall thickening from granulomas can mimic HCM, but sarcoid shows LGE in non-hypertrophied regions too. The RV and papillary muscles are rarely affected. Associated systemic sarcoid (lung/nodes) is usually present.',
          keyFact: 'Sarcoidosis LGE: middle + epicardial, non-coronary, often basal septum. T2 bright (active). Can mimic HCM. RV involvement rare. Association with arrhythmia and sudden death.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-sarcoidosis',
          tags: ['MRI', 'LGE', 'sarcoidosis', 'cardiomyopathy', 'non-ischemic'],
        },
      },
      {
        id: 'cardiac-cardiomyopathy-007',
        front: {
          question: 'What is left ventricular non-compaction (LVNC) and how is it diagnosed on MRI?',
        },
        back: {
          answer: 'Congenital cardiomyopathy with excessive LV trabeculations and deep intertrabecular recesses. Diagnostic ratio: non-compacted:compacted myocardium >2.3:1 on end-diastole.',
          explanation: 'LVNC results from arrest of normal embryonic myocardial compaction, leaving the LV with a spongy, trabeculated appearance. The diagnostic criterion on MRI is a ratio of non-compacted (trabecular) to compacted (compact) myocardium >2.3:1 measured at end-diastole in the short-axis view. Patients develop heart failure, arrhythmias, and thromboembolic events. LGE may be present.',
          keyFact: 'LVNC: spongy LV + deep trabecular recesses. Non-compacted:compacted ratio >2.3:1 on end-diastolic MRI = diagnostic. Present in young patients with heart failure.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/left-ventricular-non-compaction',
          tags: ['MRI', 'LVNC', 'cardiomyopathy', 'congenital', 'non-compaction'],
        },
      },
      {
        id: 'cardiac-cardiomyopathy-008',
        front: {
          question: 'What is constrictive pericarditis, and how is it distinguished from restrictive cardiomyopathy on imaging?',
        },
        back: {
          answer: 'Constrictive: pericardial thickening >4 mm (calcification = diagnostic) + diastolic septal bounce (sigmoidization). Restrictive: myocardial process (amyloid, etc.) — pericardium normal.',
          explanation: 'Constrictive pericarditis is a pericardial disease causing impaired diastolic filling. Common causes: CABG/radiation (most common now), viral pericarditis. On CT: pericardium >4 mm; calcification over the AV groove is diagnostic. On SSFP MRI cine: the interventricular septum bounces toward the LV in early diastole (sigmoidization/"diastolic bounce"), most pronounced during inspiration (ventricular interdependence). Restrictive cardiomyopathy has a normal pericardium.',
          keyFact: 'Constrictive pericarditis: pericardium >4 mm, calcification (AV groove), septal bounce (diastolic) on MRI cine. Restrictive = myocardial process. Septal bounce = key distinguishing feature.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/constrictive-pericarditis',
          tags: ['CT', 'MRI', 'constrictive pericarditis', 'pericardial disease', 'cardiomyopathy'],
        },
      },
      {
        id: 'cardiac-cardiomyopathy-009',
        front: {
          question: 'What is Loeffler endocarditis (eosinophilic cardiomyopathy) and what is its classic imaging finding?',
        },
        back: {
          answer: 'Bilateral ventricular thrombus — classic buzzword/finding on cardiac MRI',
          explanation: 'Loeffler endocarditis is caused by eosinophilic infiltration of the myocardium, leading to endomyocardial fibrosis and thrombus formation. The bilateral ventricular thrombus is the pathognomonic imaging finding. On cardiac MRI, thrombus appears as a non-enhancing filling defect (important: thrombus does NOT enhance, distinguishing it from tumor). A long TI is needed to demonstrate the thrombus on LGE imaging.',
          keyFact: 'Loeffler endocarditis = eosinophilic cardiomyopathy = bilateral ventricular thrombus (classic). Thrombus does NOT enhance on MRI — key distinguisher from tumor.',
          tags: ['MRI', 'eosinophilic cardiomyopathy', 'Loeffler', 'thrombus', 'cardiomyopathy'],
        },
      },
      {
        id: 'cardiac-cardiomyopathy-010',
        front: {
          question: 'What are the LGE patterns associated with muscular dystrophies (Duchenne and Becker) on cardiac MRI?',
        },
        back: {
          answer: 'Midwall LGE in both ventricles, associated with dilated cardiomyopathy, biventricular myocardial replacement with connective tissue and fat',
          explanation: 'Duchenne (severe, presents ~5 yo) and Becker (milder) are X-linked neuromuscular conditions caused by dystrophin gene mutations. Cardiac involvement causes biventricular dilation with midwall fibrosis/LGE (not subendocardial). The posterolateral LV free wall is affected earliest. Dilated cardiomyopathy eventually develops in most patients. Cardiac MRI is used for monitoring.',
          keyFact: 'Duchenne/Becker muscular dystrophy: midwall LGE + dilated cardiomyopathy in young males. Posterolateral LV wall affected first. X-linked.',
          tags: ['MRI', 'LGE', 'muscular dystrophy', 'Duchenne', 'dilated cardiomyopathy'],
        },
      },
    ],
  },
  {
    id: 'cardiac-valves',
    label: 'Valvular Heart Disease',
    cards: [
      {
        id: 'cardiac-valves-001',
        front: {
          question: 'What are the three forms of aortic stenosis, which is most common, and which syndromes are associated with supravalvular and bicuspid types?',
        },
        back: {
          answer: 'Valvular (90% — most common), subvalvular, supravalvular. Supravalvular AS → Williams syndrome. Bicuspid AV → Turner syndrome + coarctation.',
          explanation: 'Aortic stenosis is classified by the level of obstruction. Valvular AS is most common, caused by bicuspid aortic valve (congenital), degenerative calcification (elderly), or rheumatic disease. Supravalvular AS is associated with Williams syndrome (elfin facies, intellectual disability, hypercalcemia). Bicuspid aortic valve is associated with Turner syndrome, coarctation of the aorta, and cystic medial necrosis. Aortic dilation above the stenosis is due to post-stenotic jet phenomenon.',
          keyFact: 'AS types: valvular (90%) > subvalvular > supravalvular. Supravalvular AS = Williams syndrome. Bicuspid AV = Turner + coarctation. Most common complication of bicuspid AV = stenosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aortic-stenosis',
          tags: ['CT', 'MRI', 'aortic stenosis', 'valvular disease', 'congenital'],
        },
      },
      {
        id: 'cardiac-valves-002',
        front: {
          question: 'What is the most common congenital heart defect in adults, and what are its imaging-relevant associations?',
        },
        back: {
          answer: 'Bicuspid aortic valve (~2% of population). Associations: aortic aneurysm (independent of stenosis severity), Turner syndrome, coarctation (most common associated defect), cystic medial necrosis, AD polycystic kidney disease.',
          explanation: 'Bicuspid aortic valve is the most common congenital heart anomaly when counted in the general population. Its imaging associations are high-yield: aortic aneurysm risk is independent of the degree of valve dysfunction (i.e., a non-stenotic bicuspid valve still increases aneurysm risk). Coarctation of the aorta is the most commonly associated cardiac defect (~80%). The aortic valve stenosing late in life creates the clinical impression it is "less common."',
          keyFact: 'Bicuspid AV: most common CHD in adults. Aneurysm risk independent of stenosis severity. Most common associated defect: coarctation (80%). Turner syndrome association.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bicuspid-aortic-valve',
          tags: ['CT', 'MRI', 'bicuspid aortic valve', 'valvular disease', 'aortic aneurysm'],
        },
      },
      {
        id: 'cardiac-valves-003',
        front: {
          question: 'What is the most common cause of mitral stenosis, and what are the CXR findings?',
        },
        back: {
          answer: 'Rheumatic heart disease (most common cause). CXR: left atrial enlargement (double density, splayed carina) with NORMAL cardiac silhouette size.',
          explanation: 'Mitral stenosis causes chronic left atrial hypertension and pulmonary venous hypertension. Because the stenosis limits LV inflow, the LV is small-normal; the global cardiac silhouette is not enlarged. Key imaging features are left atrial enlargement signs with preserved (or even reduced) cardiac contour. On barium swallow, the dilated LA displaces the esophagus posteriorly.',
          keyFact: 'Mitral stenosis: LA enlarged + NORMAL total cardiac size on CXR. Rheumatic = most common cause. Ortner syndrome = hoarseness from LA compression of left recurrent laryngeal nerve.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mitral-stenosis',
          tags: ['XR', 'CT', 'mitral stenosis', 'valvular disease', 'rheumatic heart disease'],
        },
      },
      {
        id: 'cardiac-valves-004',
        front: {
          question: 'What is Ortner syndrome (cardiovocal hoarseness)?',
        },
        back: {
          answer: 'Hoarseness caused by compression of the left recurrent laryngeal nerve by an enlarged left atrium (classically in mitral stenosis)',
          explanation: 'The left recurrent laryngeal nerve loops under the aortic arch and runs close to the left atrium. Massive left atrial enlargement can compress the nerve, causing hoarseness. While classically associated with mitral stenosis, it can occur with any cause of left atrial or pulmonary artery enlargement (pulmonary hypertension, cardiac tumors).',
          keyFact: 'Ortner syndrome = hoarseness from left recurrent laryngeal nerve compression by enlarged LA. Classic setting: mitral stenosis.',
          tags: ['XR', 'CT', 'valvular disease', 'mitral stenosis', 'hoarseness'],
        },
      },
      {
        id: 'cardiac-valves-005',
        front: {
          question: 'What is the most common cause of tricuspid regurgitation in adults, and what distinguishes it from other causes?',
        },
        back: {
          answer: 'Pulmonary arterial hypertension (most common in adults). Other causes: endocarditis (IV drug use), carcinoid syndrome. TR causes RV dilation — NOT RV hypertrophy.',
          explanation: 'The tricuspid annulus is relatively weak and susceptible to dilation from elevated RV pressure (e.g., PAH). In endocarditis from IV drug use, vegetations preferentially affect the tricuspid valve. In carcinoid syndrome, serotonin degrades both the tricuspid and pulmonic valves (right-sided valves, as vasoactive substances are inactivated in the lungs — left-sided disease implies primary bronchial carcinoid or right-to-left shunt).',
          keyFact: 'TR = RV dilation (not RV hypertrophy). Most common adult cause = PAH. IV drug use = endocarditis. Carcinoid = right-sided valves (TR + PR). Left-sided carcinoid disease = bronchial carcinoid or R→L shunt.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tricuspid-regurgitation',
          tags: ['CT', 'MRI', 'tricuspid regurgitation', 'valvular disease', 'carcinoid'],
        },
      },
      {
        id: 'cardiac-valves-006',
        front: {
          question: 'What is Ebstein anomaly and what is its classic CXR appearance?',
        },
        back: {
          answer: 'Apical displacement of the tricuspid valve (posterior leaflet) → enlarged RA, reduced/atrialized RV, TR. CXR: massive "box-shaped" heart.',
          explanation: 'Ebstein anomaly is a congenital malformation where the septal and posterior leaflets of the tricuspid valve are displaced downward into the RV, creating a large "atrialized" portion of the RV that functions as RA. This leads to massive RA enlargement, tricuspid regurgitation, and a "box-shaped" cardiac silhouette on CXR. Associated with maternal lithium use (though most cases are sporadic). ASD or PFO is usually present.',
          keyFact: 'Ebstein anomaly: displaced TV (posterior leaflet into RV) → massive RA + atrialized RV + TR. CXR: box-shaped heart. Maternal lithium exposure association.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ebstein-anomaly',
          tags: ['XR', 'CT', 'Ebstein anomaly', 'congenital', 'tricuspid valve'],
        },
      },
      {
        id: 'cardiac-valves-007',
        front: {
          question: 'Which valves are most commonly affected by rheumatic heart disease, and what is the underlying immunologic mechanism?',
        },
        back: {
          answer: 'Mitral (most common) and aortic valves. Immune-mediated response to Group A beta-hemolytic Streptococcus causing cross-reactive antibodies targeting valve tissue.',
          explanation: 'Rheumatic heart disease results from molecular mimicry between streptococcal antigens and cardiac proteins, triggering an autoimmune attack on valve tissue. Multivalvular disease should always raise the possibility of rheumatic fever. Stenosis (rather than pure regurgitation) is more typical of rheumatic involvement. The mitral valve is almost always involved; concurrent aortic and mitral disease strongly suggests rheumatic etiology.',
          keyFact: 'Rheumatic heart disease: mitral + aortic valves most common. Multivalvular disease = think rheumatic. Group A beta-hemolytic Strep → immune cross-reaction.',
          tags: ['CT', 'valvular disease', 'rheumatic heart disease', 'mitral valve', 'aortic valve'],
        },
      },
      {
        id: 'cardiac-valves-008',
        front: {
          question: 'On lateral CXR, how do you localize prosthetic heart valves?',
        },
        back: {
          answer: 'Aortic valve: centered on plane from sternal/diaphragmatic junction to carina. Mitral: most posterior. Tricuspid: anterior and right of mitral. Pulmonic: most superior and leftward.',
          explanation: 'Valve localization on CXR is a classic radiology skills question. The lateral view is the most useful. The aortic valve lies along a line drawn from the sternal/diaphragmatic junction to the carina. The mitral valve is the most posterior. The pulmonic valve is the most superior and leftward. Atrioventricular valves (mitral and tricuspid) are open in diastole.',
          keyFact: 'Lateral CXR valves: Aortic = sternal junction–carina line. Mitral = most posterior. Pulmonic = most superior/leftward. AV valves open in diastole.',
          tags: ['XR', 'valvular disease', 'prosthetic valve', 'cardiac anatomy', 'CXR technique'],
        },
      },
      {
        id: 'cardiac-valves-009',
        front: {
          question: 'What is pulmonary regurgitation in the context of repaired tetralogy of Fallot, and how is cardiac MRI used to guide management?',
        },
        back: {
          answer: 'Primary long-term complication of TOF repair. Cardiac MRI guides timing of pulmonary valve replacement: repair before RV end-diastolic volume reaches 150 mL for good outcomes.',
          explanation: 'TOF repair involves patch closure of the VSD and relief of the RV outflow obstruction. Disruption of the pulmonary valve during RVOT reconstruction leads to chronic pulmonary regurgitation, which causes progressive RV dilation. Cardiac MRI quantifies regurgitant fraction and RV volumes. If RV end-diastolic volume reaches ~150 mL before valve replacement, the RV often does not return to normal size post-repair.',
          keyFact: 'Post-TOF repair: pulmonary regurgitation = main long-term problem. Cardiac MRI guides pulmonary valve replacement timing. RV EDD >150 mL = poor recovery. Repair BEFORE this threshold.',
          tags: ['MRI', 'TOF', 'pulmonary regurgitation', 'congenital', 'post-surgical'],
        },
      },
      {
        id: 'cardiac-valves-010',
        front: {
          question: 'What is pulmonary stenosis associated with Noonan syndrome, and what is peripheral pulmonary stenosis associated with?',
        },
        back: {
          answer: 'Noonan syndrome: valvular pulmonic stenosis (male equivalent of Turner syndrome). Peripheral PS: Alagille syndrome (children with absent bile ducts). Williams syndrome: supravalvular AS and supravalvular PS.',
          explanation: 'Pulmonary stenosis comes in valvular (most common), subvalvular, and supravalvular forms. Noonan syndrome causes valvular PS. Alagille syndrome (bile duct paucity, cholestasis) is associated with peripheral (branch) pulmonary stenosis. Williams syndrome causes supravalvular aortic stenosis and may also cause pulmonary stenosis.',
          keyFact: 'Noonan = valvular PS. Alagille = peripheral PS (branch pulmonary). Williams = supravalvular AS (± PS). Noonan is the "male Turner syndrome."',
          tags: ['CT', 'valvular disease', 'pulmonary stenosis', 'Noonan', 'congenital'],
        },
      },
    ],
  },
  {
    id: 'cardiac-pericardium',
    label: 'Pericardial Disease',
    cards: [
      {
        id: 'cardiac-pericardium-001',
        front: {
          question: 'What is the normal pericardial fluid volume, and what are the CXR signs of pericardial effusion?',
        },
        back: {
          answer: 'Normal: ~50 mL between visceral and parietal layers. CXR: water bottle heart (large globular silhouette), oreo cookie sign on lateral.',
          explanation: 'A pericardial effusion is defined as >50 mL of pericardial fluid. On frontal CXR, a large effusion gives the classic "water bottle" appearance — a large, globular cardiac silhouette with a sharp outer border. On lateral CXR, the "oreo cookie sign" describes two radiolucent lines (epicardial and pericardial fat) sandwiching a central opaque stripe (fluid). The most common cause is uremia/renal failure. Lupus and Dressler syndrome are classic in exam scenarios.',
          keyFact: 'Pericardial effusion CXR: water bottle heart. Lateral: oreo cookie sign (fat-fluid-fat). Most common cause: uremia. Rate of accumulation determines hemodynamic impact more than total volume.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pericardial-effusion',
          tags: ['XR', 'CT', 'pericardial effusion', 'pericardial disease', 'CXR signs'],
        },
      },
      {
        id: 'cardiac-pericardium-002',
        front: {
          question: 'What is cardiac tamponade, and what are the imaging signs on CT and MRI?',
        },
        back: {
          answer: 'Elevated pericardial pressure impairing cardiac filling (atria first, then ventricles). CT/MRI: RV/RA compression, IVC/azygos dilation, reflux of contrast into IVC and azygos (on CT), septal flattening on inspiration.',
          explanation: 'Tamponade occurs when pericardial fluid accumulates faster than the pericardium can stretch, elevating intrapericardial pressure. The rate of accumulation is more important than total volume (as little as 100 mL can cause tamponade if acute). On cross-sectional imaging: RA and RV compression, dilated IVC (>2.1 cm), contrast reflux into the IVC and hepatic veins, and flattening of the intraventricular septum are key signs.',
          keyFact: 'Cardiac tamponade: rate of accumulation > volume is the key. CT signs: RA/RV collapse, IVC dilation, contrast reflux into IVC/azygos, septal flattening on inspiration. As little as 100 mL can cause tamponade.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-tamponade',
          tags: ['CT', 'MRI', 'cardiac tamponade', 'pericardial disease', 'emergency'],
        },
      },
      {
        id: 'cardiac-pericardium-003',
        front: {
          question: 'Where are pericardial cysts typically located, and what are their imaging characteristics?',
        },
        back: {
          answer: 'Most common: right cardiophrenic sulcus (~70%). Water attenuation (0–20 HU on CT), unilocular, non-enhancing, do not communicate with pericardium.',
          explanation: 'Pericardial cysts are benign congenital anomalies resulting from aberrant development of the coelomic cavity. They are most commonly found in the right cardiophrenic angle and appear as smoothly marginated, homogeneous water-density lesions on CT. They do not communicate with the pericardial space. Rarely, they can become infected or hemorrhagic. On MRI: T2 bright, T1 dark (simple fluid).',
          keyFact: 'Pericardial cyst: right cardiophrenic sulcus (most common). Water density on CT (0–20 HU). Do NOT communicate with pericardium. T2 bright on MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pericardial-cyst',
          tags: ['CT', 'MRI', 'pericardial cyst', 'pericardial disease', 'benign'],
        },
      },
      {
        id: 'cardiac-pericardium-004',
        front: {
          question: 'What is the most common cause of constrictive pericarditis today, and what finding on CT is diagnostic?',
        },
        back: {
          answer: 'Most common: iatrogenic (post-CABG or radiation therapy). Diagnostic CT finding: pericardial calcification, especially over the AV groove. Pericardium >4 mm is abnormal.',
          explanation: 'Historically, TB was the most common cause; now iatrogenic causes (CABG, radiation) predominate. Pericardial thickening >4 mm on CT suggests constriction. Calcification of the pericardium, especially concentrated over the AV groove, is diagnostic. On MRI cine (SSFP), the septal bounce (diastolic bounce/sigmoidization) is the hallmark functional finding, exaggerated during inspiration.',
          keyFact: 'Constrictive pericarditis: pericardial calcification over AV groove = diagnostic. Pericardium >4 mm = abnormal. Most common cause now = post-CABG or radiation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/constrictive-pericarditis',
          tags: ['CT', 'MRI', 'constrictive pericarditis', 'pericardial disease', 'calcification'],
        },
      },
      {
        id: 'cardiac-pericardium-005',
        front: {
          question: 'What is congenital absence of the pericardium, and what is the classic imaging presentation?',
        },
        back: {
          answer: 'Most common: partial left-sided absence over LA and adjacent PA. Heart shifts leftward, contacting left chest wall. Risk of cardiac herniation and volvulus if large defect.',
          explanation: 'Complete absence of the pericardium is rare and typically asymptomatic. Partial left-sided defects (over the left atrium and pulmonary artery) are more common and can be seen on CT or MRI as the heart contacting the left chest wall without the usual pericardial stripe. The left atrial appendage is most at risk for strangulation through a small defect. Cardiac herniation can occur after extrapleural pneumonectomy if the lung has also been removed.',
          keyFact: 'Pericardial absence: partial left-sided (over LA/PA) most common. Heart contacts left chest wall on CT/MRI. LAA most at risk for herniation/strangulation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/absence-of-pericardium',
          tags: ['CT', 'MRI', 'pericardial absence', 'pericardial disease', 'congenital'],
        },
      },
    ],
  },
  {
    id: 'cardiac-masses',
    label: 'Cardiac Masses & Tumors',
    cards: [
      {
        id: 'cardiac-masses-001',
        front: {
          question: 'What is the most common intracardiac "mass" overall, and what is the most common primary cardiac tumor in adults?',
        },
        back: {
          answer: 'Most common intracardiac mass overall: thrombus. Most common primary cardiac tumor in adults: myxoma.',
          explanation: 'Thrombus is far more common than any neoplasm and typically forms in the left atrial appendage (in atrial fibrillation) or LV apex (post-MI). Cardiac myxoma is the most common benign primary cardiac tumor in adults, usually arising from the interatrial septum. Metastatic disease to the heart is 30× more common than primary cardiac tumors.',
          keyFact: 'Most common intracardiac mass = thrombus. Most common primary cardiac tumor (adult) = myxoma. Mets to heart 30× more common than primary tumors.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-myxoma',
          tags: ['CT', 'MRI', 'cardiac mass', 'myxoma', 'thrombus'],
        },
      },
      {
        id: 'cardiac-masses-002',
        front: {
          question: 'What are the characteristic features of left atrial myxoma on imaging?',
        },
        back: {
          answer: 'Arises from interatrial septum, grows into left atrium ("ball on stalk"), may prolapse through mitral valve, may calcify, ENHANCES with gadolinium (distinguishes from thrombus), associated with Carney complex.',
          explanation: 'Cardiac myxoma most commonly originates from the fossa ovalis of the interatrial septum. It appears as a pedunculated mass with a stalk that may prolapse through the mitral valve in diastole (causing obstruction). Enhancement with gadolinium on MRI is the key distinguishing feature from thrombus (which does not enhance). About 25% have calcification. When myxomas occur in young patients with multiple tumors, blue nevi, and adrenal adenomas, consider Carney complex (MEN-associated).',
          keyFact: 'Myxoma: interatrial septum stalk → LA. Enhances on MRI (thrombus does NOT). May prolapse through MV. Calcification in ~25%. Multiple + young = Carney complex.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-myxoma',
          tags: ['CT', 'MRI', 'myxoma', 'cardiac mass', 'left atrium'],
        },
      },
      {
        id: 'cardiac-masses-003',
        front: {
          question: 'What is the most common primary malignant cardiac tumor in adults, and where does it typically arise?',
        },
        back: {
          answer: 'Angiosarcoma — most commonly in the right atrium, involves the pericardium, causes right heart failure/tamponade. "Sun-ray" enhancement pattern.',
          explanation: 'Cardiac angiosarcoma is the most common primary malignant cardiac tumor in adults. It preferentially arises in the right atrium and grows along the pericardium. It is typically large, heterogeneous, and causes pericardial effusion with hemopericardium. The "sun-ray" enhancement pattern refers to the diffuse subtype growing along pericoronary spaces. Prognosis is very poor.',
          keyFact: 'Angiosarcoma = most common primary malignant cardiac tumor. Right atrium + pericardium. "Sun-ray" enhancement. Causes right heart failure and hemopericardial tamponade.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-angiosarcoma',
          tags: ['CT', 'MRI', 'angiosarcoma', 'cardiac malignancy', 'right atrium'],
        },
      },
      {
        id: 'cardiac-masses-004',
        front: {
          question: 'What is the most common primary cardiac tumor in infants and children, and what syndrome is it associated with?',
        },
        back: {
          answer: 'Rhabdomyoma — most common fetal/infant cardiac tumor. Associated with tuberous sclerosis. Multiple tumors in LV. Most regress spontaneously.',
          explanation: 'Rhabdomyoma is a hamartoma (not a true neoplasm) that occurs predominantly in the ventricular myocardium, favoring the left ventricle. The vast majority of cases are associated with tuberous sclerosis. Multiple tumors are typical. Most will regress spontaneously, especially those not associated with tuberous sclerosis (though TS-associated ones also often regress). MRI: T2 bright (cf. fibroma which is T2 dark).',
          keyFact: 'Rhabdomyoma = most common cardiac tumor in infants. Associated with tuberous sclerosis. Multiple, LV, T2 bright. Most regress spontaneously.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-rhabdomyoma',
          tags: ['CT', 'MRI', 'rhabdomyoma', 'pediatric cardiac', 'tuberous sclerosis'],
        },
      },
      {
        id: 'cardiac-masses-005',
        front: {
          question: 'What is a cardiac fibroma, and how does it differ from rhabdomyoma on MRI?',
        },
        back: {
          answer: 'Fibroma: second most common pediatric cardiac tumor. IV septum location. T1 dark / T2 DARK. Enhances brightly on perfusion and LGE. Rhabdomyoma: T2 bright, multiple, LV.',
          explanation: 'Cardiac fibromas are solitary benign tumors that preferentially involve the interventricular septum. On MRI, they are dark on both T1 and T2 (fibrous tissue) but demonstrate intense enhancement on first-pass perfusion and late gadolinium images. This T2 dark / bright enhancement pattern is distinctive. Fibromas do not regress. Associated with Gorlin syndrome (basal cell nevi syndrome).',
          keyFact: 'Fibroma: T2 DARK + bright enhancement. IV septum. Second most common pediatric cardiac tumor. Fibroma vs Rhabdomyoma: Fibroma = T2 dark (fibrotic). Rhabdomyoma = T2 bright (cellular).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-fibroma',
          tags: ['MRI', 'fibroma', 'pediatric cardiac', 'cardiac mass', 'T2 dark'],
        },
      },
      {
        id: 'cardiac-masses-006',
        front: {
          question: 'What is a papillary fibroelastoma and what is its clinical significance?',
        },
        back: {
          answer: 'Most common neoplasm of cardiac valves (80% aortic or mitral). Small (<1 cm), highly mobile on SSFP cine. Risk: systemic emboli (stroke/TIA), especially from left-sided lesions.',
          explanation: 'Papillary fibroelastoma is a benign papillary endocardial tumor that most commonly involves the aortic valve (on the aortic side of the cusp). It is usually an incidental finding in adults aged 50–60 but can cause systemic emboli. Mobility on cine MRI is a key feature. A distinguishing point from vegetations: vegetations involve the free edges of valve leaflets, while fibroelastomas do not.',
          keyFact: 'Papillary fibroelastoma: most common cardiac valve tumor, aortic valve (aortic side). Mobile on cine MRI. Main risk = systemic emboli. NOT on free edges (unlike vegetations).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/papillary-fibroelastoma',
          tags: ['MRI', 'fibroelastoma', 'cardiac mass', 'valvular', 'emboli'],
        },
      },
      {
        id: 'cardiac-masses-007',
        front: {
          question: 'What is the most common cardiac metastasis, and what is the characteristic site of metastatic disease to the heart?',
        },
        back: {
          answer: 'Most common primary malignancy: lung cancer (most prevalent). Melanoma has highest percentage per tumor type. Pericardium is the most common site of involvement.',
          explanation: 'Cardiac metastases occur 30× more commonly than primary cardiac tumors. Lung cancer is the most common source (most prevalent cancer → most mets). Melanoma spreads to the heart with the highest percentage of any primary tumor, and can involve the myocardium directly. The pericardium is the most common cardiac structure affected, typically manifesting as pericardial effusion, pericardial thickening, or nodularity.',
          keyFact: 'Cardiac mets: pericardium most common site → pericardial effusion. Lung cancer = most common source. Melanoma = highest rate of cardiac spread per tumor type (can invade myocardium).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cardiac-metastases',
          tags: ['CT', 'MRI', 'cardiac metastasis', 'cardiac mass', 'pericardium'],
        },
      },
      {
        id: 'cardiac-masses-008',
        front: {
          question: 'How do you distinguish a cardiac tumor from a thrombus on cardiac MRI?',
        },
        back: {
          answer: 'Tumor ENHANCES with gadolinium. Thrombus does NOT enhance. This is the critical differentiating feature on cardiac MRI.',
          explanation: 'On late gadolinium enhancement cardiac MRI, tumors (myxoma, fibroelastoma, angiosarcoma, rhabdomyoma, metastases) all demonstrate gadolinium enhancement because they have a vascular supply. Thrombus is avascular and will appear as a non-enhancing filling defect. On first-pass perfusion, thrombus also does not enhance. This distinction is clinically critical because management (anticoagulation vs. surgery) differs completely.',
          keyFact: 'Cardiac MRI: TUMOR enhances. THROMBUS does NOT enhance. This single rule differentiates the two most important causes of intracardiac filling defect.',
          tags: ['MRI', 'LGE', 'cardiac mass', 'thrombus', 'tumor vs thrombus'],
        },
      },
      {
        id: 'cardiac-masses-009',
        front: {
          question: 'What is an echogenic focus in the left ventricle on prenatal ultrasound and what is its significance?',
        },
        back: {
          answer: 'Calcified papillary muscle — benign soft marker. Usually resolves by third trimester. Associated with increased risk of Down syndrome (trisomy 21) — prompts evaluation for other markers.',
          explanation: 'An echogenic intracardiac focus (EIF) in the fetal LV is a relatively common prenatal ultrasound finding (~3–5% of fetuses). It represents echogenicity of the papillary muscle (likely focal microcalcification). In isolation, it is usually benign. However, it is a soft marker for Down syndrome (trisomy 21). The presence of an EIF increases the risk ratio for Down syndrome by approximately 1.5–2× and should prompt a systematic search for other ultrasound markers of trisomy 21.',
          keyFact: 'Fetal echogenic focus in LV = calcified papillary muscle. Soft marker for Down syndrome (trisomy 21). Usually resolves by 3rd trimester. Not a structural cardiac defect.',
          tags: ['ultrasound', 'fetal cardiac', 'Down syndrome', 'prenatal', 'normal variant'],
        },
      },
    ],
  },
  {
    id: 'cardiac-congenital',
    label: 'Congenital Heart Disease',
    cards: [
      {
        id: 'cardiac-congenital-001',
        front: {
          question: 'What is the most common congenital heart defect and what is the most common subtype?',
          hint: 'Think left-to-right shunt',
        },
        back: {
          answer: 'VSD (ventricular septal defect) is most common CHD (excluding bicuspid AV). Most common subtype: membranous VSD (~70%), located just below the aortic valve.',
          explanation: 'VSDs are the most common symptomatic congenital heart defect. Membranous VSDs are most common (~70%) and are located in the perimembranous/subarterial region below the aortic valve. Muscular VSDs are the next most common; ~70% of small muscular VSDs close spontaneously. Outlet (infundibular) VSDs require repair as the right coronary cusp prolapses into the defect. CXR shows cardiomegaly with increased pulmonary vascularity.',
          keyFact: 'VSD = most common CHD (symptomatic). Membranous (perimembranous) = 70% of VSDs. Small VSDs close spontaneously in 70%. Outlet VSD → aortic cusp prolapse → must repair.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ventricular-septal-defect',
          tags: ['XR', 'CT', 'VSD', 'congenital heart disease', 'left-to-right shunt'],
        },
      },
      {
        id: 'cardiac-congenital-002',
        front: {
          question: 'What are the types of ASD and which can close spontaneously vs. which cannot?',
        },
        back: {
          answer: 'Secundum (50–70%): CAN close spontaneously. Primum, AV canal, sinus venosus: CANNOT close spontaneously, not amenable to device closure. Primum = endocardial cushion defect → associated with Down syndrome.',
          explanation: 'Secundum ASD is the most common type and involves the fossa ovalis; it may close spontaneously in small defects and is amenable to percutaneous device closure. Primum ASDs involve the lower atrial septum and are associated with AV valve abnormalities and Down syndrome. Sinus venosus ASDs (posterior, near SVC or IVC) are strongly associated with PAPVR. AV canal (complete endocardial cushion defect) is the most common CHD in Down syndrome.',
          keyFact: 'ASD: Secundum = most common, can close/device closure. Primum = Down syndrome, endocardial cushion, no device closure. Sinus venosus = PAPVR association. AV canal = most common CHD in Down syndrome.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/atrial-septal-defect',
          tags: ['XR', 'CT', 'ASD', 'congenital heart disease', 'left-to-right shunt'],
        },
      },
      {
        id: 'cardiac-congenital-003',
        front: {
          question: 'What are the associations with patent ductus arteriosus (PDA)?',
        },
        back: {
          answer: 'Three key associations: (1) Prematurity, (2) Maternal rubella, (3) Cyanotic heart disease. CXR: enlarged cardiac silhouette, increased pulmonary vascularity, large aortic arch ("ductus bump").',
          explanation: 'The ductus arteriosus normally closes functionally within 24 hours of birth and anatomically by 1 month. Persistent patency is associated with prematurity, congenital rubella infection, and it may be essential for survival in cyanotic congenital heart disease (e.g., transposition, tricuspid atresia). Pharmacologic closure uses indomethacin; prostaglandins keep it open.',
          keyFact: 'PDA associations: prematurity + maternal rubella + cyanotic CHD (can be life-saving). Indomethacin closes PDA; prostaglandins keep it open (critical in duct-dependent circulations).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/patent-ductus-arteriosus',
          tags: ['XR', 'CT', 'PDA', 'congenital heart disease', 'prematurity'],
        },
      },
      {
        id: 'cardiac-congenital-004',
        front: {
          question: 'What are the four components of tetralogy of Fallot (TOF) and what determines clinical severity?',
        },
        back: {
          answer: '(1) VSD, (2) RVOT obstruction (pulmonary stenosis), (3) Overriding aorta, (4) RV hypertrophy. Severity determined by degree of RVOT obstruction.',
          explanation: 'TOF is the most common cyanotic congenital heart disease. RV hypertrophy develops postnatally in response to the outflow obstruction. Mild RVOT obstruction may allow a "pink tet" (acyanotic) that presents in adulthood. A pentalogy of Fallot includes an ASD. Right aortic arch is present in ~25% of TOF. The classic CXR shows a "boot-shaped" heart (coeur en sabot) from elevated apex due to RV hypertrophy, with decreased pulmonary vascularity.',
          keyFact: 'TOF: VSD + RVOT obstruction + overriding aorta + RVH. Severity = RVOT degree. Boot-shaped heart + decreased vascularity. Right arch in 25%. Most common cyanotic CHD.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tetralogy-of-fallot',
          tags: ['XR', 'CT', 'MRI', 'TOF', 'congenital heart disease', 'cyanotic'],
        },
      },
      {
        id: 'cardiac-congenital-005',
        front: {
          question: 'What is total anomalous pulmonary venous return (TAPVR) and what is the most common type? What is the classic CXR appearance?',
        },
        back: {
          answer: 'All pulmonary veins drain to right heart. Survival requires PFO/ASD. Type I (supracardiac, most common): "snowman" CXR. Type III (infracardiac): pulmonary edema in newborn.',
          explanation: 'In TAPVR, all four pulmonary veins drain anomalously to the right side. A PFO or ASD is mandatory for survival to allow oxygenated blood to cross to the left heart. Type I (supracardiac, ~50%) drains to the left brachiocephalic vein via a vertical vein, creating the "snowman" or "figure of 8" silhouette. Type III (infracardiac) drains below the diaphragm via a descending vertical vein — obstruction at the diaphragm causes pulmonary edema in the newborn.',
          keyFact: 'TAPVR: all PVs → right heart. Needs PFO/ASD to survive. Supracardiac (Type I) = snowman CXR. Infracardiac (Type III) = newborn pulmonary edema. Asplenia → almost always TAPVR.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/total-anomalous-pulmonary-venous-return',
          tags: ['XR', 'CT', 'TAPVR', 'congenital heart disease', 'cyanotic'],
        },
      },
      {
        id: 'cardiac-congenital-006',
        front: {
          question: 'What is D-transposition of the great arteries and what is the classic CXR appearance?',
        },
        back: {
          answer: '"D-TGA": aorta arises from RV, pulmonary artery from LV (ventriculoarterial discordance). CXR: "egg on a string" (narrow mediastinum from parallel great vessels). Most common cause of cyanosis in first 24 hours.',
          explanation: 'D-TGA creates two parallel circulations that are incompatible with life without mixing (via VSD, ASD, or PDA). The aorta lies anterior and rightward to the PA, creating a narrow mediastinal shadow on CXR. The "egg on a string" silhouette reflects the narrow vascular pedicle. Surgical correction: Jatene arterial switch (gold standard) or Mustard/Senning atrial baffle procedures.',
          keyFact: 'D-TGA: aorta from RV, PA from LV. Egg on a string CXR. Cyanosis in first 24 hours (most common cause). VSD/ASD/PDA needed for survival until surgery. Most common in infants of diabetic mothers.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transposition-of-the-great-arteries',
          tags: ['XR', 'CT', 'transposition', 'congenital heart disease', 'cyanotic'],
        },
      },
      {
        id: 'cardiac-congenital-007',
        front: {
          question: 'What is truncus arteriosus and what genetic syndrome is it strongly associated with?',
        },
        back: {
          answer: 'Single arterial trunk supplying both pulmonary and systemic circulation (no separate aorta/PA). Always has a VSD. Associated with DiGeorge syndrome (CATCH-22 / chromosome 22q11 deletion). Right arch in 30–35%.',
          explanation: 'Truncus arteriosus results from failure of the embryonic truncus to divide into the aorta and pulmonary artery. A VSD is always present. DiGeorge syndrome (CATCH-22: Cardiac defects, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia) is the most important genetic association. It is the congenital defect most closely associated with a right aortic arch (though TOF is more common overall). Cyanosis with increased pulmonary vascularity is the presentation.',
          keyFact: 'Truncus arteriosus: single trunk + VSD + cyanosis + increased vascularity. Most closely associated with right arch. Most closely associated with DiGeorge (CATCH-22). TOF is more common with right arch overall.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/truncus-arteriosus',
          tags: ['XR', 'CT', 'truncus arteriosus', 'congenital heart disease', 'DiGeorge'],
        },
      },
      {
        id: 'cardiac-congenital-008',
        front: {
          question: 'What is the difference between infantile (pre-ductal) and adult (post-ductal) coarctation of the aorta?',
        },
        back: {
          answer: 'Pre-ductal: proximal to left subclavian, presents with heart failure in first week of life, hypoplastic aortic arch, duct-dependent. Post-ductal: distal to left subclavian, presents with leg claudication and BP differential, collateral formation, rib notching.',
          explanation: 'Coarctation is a narrowing of the aorta, most commonly at the isthmus (near ductus arteriosus). Pre-ductal (infantile) coarctation is more proximal and severe; PDA flow keeps the distal aorta perfused — closure of the duct causes cardiovascular collapse. Post-ductal (adult) coarctation is more distal; intercostal artery collaterals develop, causing rib notching (4th–8th ribs, NOT 1st/2nd). Strong association with Turner syndrome and bicuspid aortic valve.',
          keyFact: 'Coarctation: pre-ductal = heart failure at birth (duct-dependent). Post-ductal = BP differential (arm > leg) + rib notching (4th–8th). Turner syndrome + bicuspid AV association.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/coarctation-of-the-aorta',
          tags: ['XR', 'CT', 'coarctation', 'congenital heart disease', 'Turner syndrome'],
        },
      },
      {
        id: 'cardiac-congenital-009',
        front: {
          question: 'What are the radiographic signs of coarctation of the aorta on CXR?',
        },
        back: {
          answer: 'Figure-3 sign (notching of aortic contour at coarctation site). Rib notching (4th–8th ribs, bilateral or left-sided). Reverse-3 sign on barium swallow.',
          explanation: 'The figure-3 sign on CXR represents the dilated aorta above the coarctation and poststenotic dilation below, with the coarctation notch in between. The same configuration on barium esophagram appears as a reversed-3 (or "E" sign). Rib notching results from enlarged intercostal arteries serving as collateral vessels; it does not affect the 1st and 2nd ribs because they are supplied by the costocervical trunk (above the coarctation).',
          keyFact: 'Coarctation CXR: figure-3 sign. Rib notching: 4th–8th ribs (NOT 1st–2nd, fed by costocervical trunk). Reverse-3 sign on barium swallow.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/coarctation-of-the-aorta',
          tags: ['XR', 'coarctation', 'congenital heart disease', 'rib notching', 'CXR signs'],
        },
      },
      {
        id: 'cardiac-congenital-010',
        front: {
          question: 'What is PAPVR, and what specific association exists between right-sided PAPVR and sinus venosus ASD? What is Scimitar syndrome?',
        },
        back: {
          answer: 'PAPVR = one or more pulmonary veins drain to right heart. Right upper lobe PAPVR → SVC → sinus venosus ASD. Scimitar syndrome: right PAPVR + right pulmonary hypoplasia → anomalous vein to IVC (curved scimitar shape).',
          explanation: 'Partial anomalous pulmonary venous return (PAPVR) involves one to three (but not all four) pulmonary veins draining anomalously. Right-sided PAPVR, especially from the RUL draining to the SVC, is the classic association with sinus venosus ASD. Scimitar (venolobar) syndrome is a variant with right lung hypoplasia, anomalous right PV draining to IVC (creating a curved "scimitar sword" shadow on CXR), and systemic arterial supply to the lower right lung (sequestration component).',
          keyFact: 'Right PAPVR (RUL to SVC) = sinus venosus ASD. Scimitar syndrome: right PV to IVC + right lung hypoplasia + systemic supply = anomalous vein on CXR looks like a scimitar.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/scimitar-syndrome',
          tags: ['XR', 'CT', 'PAPVR', 'scimitar syndrome', 'congenital heart disease'],
        },
      },
      {
        id: 'cardiac-congenital-011',
        front: {
          question: 'What is a right aortic arch with mirror-image branching versus aberrant left subclavian, and what are their associations?',
        },
        back: {
          answer: 'Mirror image: brachiocephalic + left CCA arise first from left → 90% association with CHD (TOF most common; truncus most closely associated). Aberrant left subclavian: last branch from posterior arch → forms vascular ring with ligamentum arteriosum.',
          explanation: 'Right aortic arch terminology is based on which bronchus the arch crosses. Mirror-image branching (left brachiocephalic trunk first) is the "bad" one with strong CHD association. Aberrant left subclavian (last branch from posterior arch) is less concerning but forms a vascular ring with the ligamentum arteriosum encircling the trachea. Double aortic arch (right larger and higher) is the most common vascular ring overall.',
          keyFact: 'Right arch + mirror image = strong CHD (90% have CHD: TOF most common by prevalence; Truncus most closely linked). Right arch + aberrant left subclavian = vascular ring. Double arch = most common vascular ring.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/right-sided-aortic-arch',
          tags: ['CT', 'aortic arch', 'vascular ring', 'congenital heart disease', 'great vessels'],
        },
      },
      {
        id: 'cardiac-congenital-012',
        front: {
          question: 'What is hypoplastic left heart syndrome (HLHS) and what is its palliative surgical sequence?',
        },
        back: {
          answer: 'Hypoplastic LV + aorta. Requires ASD + large PDA for survival. Palliative surgery: (1) Norwood/Sano (birth), (2) Bidirectional Glenn (3–6 months), (3) Fontan (18 months–5 years).',
          explanation: 'HLHS is a severe defect where the left heart structures are underdeveloped. The right ventricle must supply systemic circulation. Staged palliation aims to protect the lungs and establish the single RV as the systemic ventricle. Norwood: creates unobstructed systemic outflow from RV via neoaorta + BT shunt or Sano (RV-PA conduit). Glenn: SVC→PA connection (eliminates BT/Sano shunt). Fontan: total cavopulmonary connection (IVC also directs to PAs, completing passive pulmonary flow).',
          keyFact: 'HLHS staged palliation: Norwood (birth) → Glenn (3–6 mo) → Fontan (2–5 y). Glenn = SVC to PA. Fontan = total cavopulmonary bypass. Plastic bronchitis is a complication of Fontan.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hypoplastic-left-heart-syndrome',
          tags: ['CT', 'MRI', 'hypoplastic left heart', 'congenital heart disease', 'surgical palliation'],
        },
      },
      {
        id: 'cardiac-congenital-013',
        front: {
          question: 'How do cyanotic and non-cyanotic congenital heart diseases differ in terms of pulmonary vascularity?',
        },
        back: {
          answer: 'Non-cyanotic L→R shunts (VSD, ASD, PDA): increased pulmonary vascularity. Cyanotic with R→L shunt (TOF, tricuspid atresia with PS): decreased vascularity. Cyanotic with mixing (TGA, TAPVR, truncus): increased vascularity.',
          explanation: 'This framework helps categorize CHD on CXR. Left-to-right shunts send extra blood to the lungs → increased vascularity. Right-to-left shunts bypass the lungs → decreased vascularity. Transposition, TAPVR, and truncus allow mixing of circulations and often show increased vascularity despite cyanosis. TOF has decreased vascularity from the RVOT obstruction.',
          keyFact: 'CHD vascularity: L→R shunt = increased. R→L shunt (TOF, tricuspid atresia + PS) = decreased. Mixing lesions (TGA, TAPVR, truncus) = increased despite cyanosis.',
          tags: ['XR', 'congenital heart disease', 'cyanotic', 'pulmonary vascularity', 'CXR signs'],
        },
      },
      {
        id: 'cardiac-congenital-014',
        front: {
          question: 'What is L-transposition (congenitally corrected transposition, L-TGA) and why is it physiologically "corrected"?',
        },
        back: {
          answer: 'Double discordance: atria and ventricles are discordant AND ventricles and great vessels are discordant → the errors cancel out → oxygenated blood still reaches the aorta, deoxygenated blood reaches the PA.',
          explanation: 'In L-TGA, the aorta arises from the morphologic LV (which receives deoxygenated blood from the RA) and the PA arises from the RV (which receives oxygenated blood from the LA). Both discordances cancel each other out, making the circulation functionally "corrected." Patients may be asymptomatic but face problems from associated defects (VSD, PS) and from having the RV serve as the systemic ventricle long-term.',
          keyFact: 'L-TGA = double discordance = congenitally corrected. Two wrongs make a right physiologically. RV acts as systemic ventricle long-term → eventual systemic RV failure.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/congenitally-corrected-transposition-of-the-great-arteries',
          tags: ['CT', 'MRI', 'L-transposition', 'congenital heart disease', 'great vessels'],
        },
      },
      {
        id: 'cardiac-congenital-015',
        front: {
          question: 'What is cor triatriatum sinistrum and what condition does it mimic clinically?',
        },
        back: {
          answer: 'Fibromuscular membrane subdividing the left atrium into two chambers. Clinically mimics mitral stenosis (causes pulmonary venous hypertension and pulmonary edema). Can cause unexplained pulmonary hypertension in children.',
          explanation: 'Cor triatriatum sinistrum ("three-atrium heart on the left") results from incomplete incorporation of the common pulmonary vein into the LA during fetal development, leaving a fibromuscular membrane that partitions the LA. The proximal chamber receives pulmonary veins; blood passes through a membrane opening to the distal chamber and then through the mitral valve. It mimics mitral stenosis and can be corrected surgically.',
          keyFact: 'Cor triatriatum sinistrum = membrane divides LA into two chambers. Mimics mitral stenosis. Cause of unexplained pulmonary HTN in children. Surgically correctable.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cor-triatriatum',
          tags: ['CT', 'MRI', 'cor triatriatum', 'congenital heart disease', 'left atrium'],
        },
      },
    ],
  },
  {
    id: 'cardiac-great-vessels',
    label: 'Great Vessels & Vascular Rings',
    cards: [
      {
        id: 'cardiac-great-vessels-001',
        front: {
          question: 'What is subclavian steal syndrome vs. phenomenon, and what is the most common cause?',
        },
        back: {
          answer: 'Phenomenon: stenosis/occlusion of proximal subclavian → retrograde vertebral artery flow. Syndrome: same + neurologic symptoms (dizziness, syncope). Most common cause: atherosclerosis (98%). In young patients: Takayasu arteritis.',
          explanation: 'Subclavian steal occurs when proximal subclavian stenosis creates a pressure differential that reverses flow in the ipsilateral vertebral artery, "stealing" from the posterior cerebral circulation. Symptoms depend on collateral intracranial flow (PCoA integrity). Rare causes include radiation injury, Blalock-Taussig shunt, preductal coarctation. Classic angiographic finding: reversed vertebral artery flow.',
          keyFact: 'Subclavian steal: proximal subclavian stenosis → retrograde vertebral flow. Phenomenon = retrograde flow only. Syndrome = retrograde flow + symptoms. Adults = atherosclerosis. Young = Takayasu.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/subclavian-steal-syndrome',
          tags: ['CT', 'MRI', 'subclavian steal', 'vascular', 'vertebral artery'],
        },
      },
      {
        id: 'cardiac-great-vessels-002',
        front: {
          question: 'What is the most common aortic arch anomaly overall, and what symptoms can it cause?',
        },
        back: {
          answer: 'Aberrant right subclavian artery (left arch with aberrant right subclavian). Usually asymptomatic; may cause dysphagia lusoria (from posterior esophageal compression).',
          explanation: 'Aberrant right subclavian artery (ARSA) arises as the last branch from a left-sided aortic arch, passing posterior to the esophagus. It is the most common arch variant (~0.5–2% of population). The origin may be dilated (Diverticulum of Kommerell). Although usually asymptomatic, some patients develop dysphagia from esophageal compression. It does not form a complete vascular ring (no ligamentum arteriosum on the right in this setting).',
          keyFact: 'ARSA = most common arch anomaly. Passes POSTERIOR to esophagus → may cause dysphagia lusoria. Dilated origin = Diverticulum of Kommerell. Not a complete vascular ring.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aberrant-right-subclavian-artery',
          tags: ['CT', 'aortic arch', 'vascular ring', 'subclavian artery', 'dysphagia'],
        },
      },
      {
        id: 'cardiac-great-vessels-003',
        front: {
          question: 'What is a double aortic arch and why is it the most common symptomatic vascular ring?',
        },
        back: {
          answer: 'Persistence of both aortic arches encircling the trachea and esophagus. Right arch is larger and higher, left is smaller and lower. Symptoms from birth: tracheal compression, dysphagia.',
          explanation: 'In double aortic arch, both the right and left arches persist and join posteriorly, forming a complete ring around both the trachea and esophagus. It is the most common symptomatic vascular ring (though not the most common arch anomaly overall). Symptoms include stridor and dysphagia starting at birth or infancy. CT angiography is the imaging modality of choice to characterize the arches and guide surgical repair.',
          keyFact: 'Double aortic arch = most common SYMPTOMATIC vascular ring. Right arch = larger/higher. Both encircle trachea AND esophagus. Symptoms from birth (stridor, dysphagia).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/double-aortic-arch',
          tags: ['CT', 'aortic arch', 'vascular ring', 'double aortic arch', 'pediatric'],
        },
      },
    ],
  },
  {
    id: 'cardiac-surgery',
    label: 'Cardiac Surgery & Post-operative Imaging',
    cards: [
      {
        id: 'cardiac-surgery-001',
        front: {
          question: 'What is the Blalock-Taussig (BT) shunt, and what is the difference between the classic and modified versions?',
        },
        back: {
          answer: 'Classic BT: subclavian artery to ipsilateral PA (end-to-end), contralateral to arch. Modified BT: Gore-Tex graft between subclavian and PA (same side as arch), technically easier.',
          explanation: 'The BT shunt was originally developed for TOF palliation. It is an artery-to-artery shunt that increases pulmonary blood flow. The classic version anastomoses the subclavian artery end-to-side to the PA on the side opposite the aortic arch, which is technically difficult and may distort PA anatomy. The modified BT shunt uses an interposition graft and is performed on the same side as the arch — it is the standard today.',
          keyFact: 'BT shunt = artery (subclavian) to artery (PA). Classic = contralateral to arch, technically difficult. Modified = ipsilateral to arch, Gore-Tex graft. Most testable complication: stenosis at pulmonary insertion site.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/blalock-taussig-shunt',
          tags: ['CT', 'MRI', 'Blalock-Taussig', 'cardiac surgery', 'congenital'],
        },
      },
      {
        id: 'cardiac-surgery-002',
        front: {
          question: 'What is the Glenn shunt and what are its variants?',
        },
        back: {
          answer: 'Glenn = vein-to-artery shunt (SVC to pulmonary artery). Classic Glenn: SVC to right PA (end-to-end), RPA proximal end closed (right lung only). Bidirectional Glenn: SVC to RPA (end-to-side), RPA open (both lungs).',
          explanation: 'The Glenn procedure is used as a step in staged palliation of single-ventricle anatomy (hypoplastic left heart, tricuspid atresia). It bypasses the right ventricle by directing systemic venous blood from the SVC directly to the pulmonary arteries. The bidirectional Glenn is the current standard, supplying both lungs. Complications include SVC syndrome and PA aneurysms.',
          keyFact: 'Glenn = SVC to PA (vein to artery). Classic = right lung only. Bidirectional = both lungs. Step 2 in HLHS palliation. Most testable complication: SVC syndrome.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bidirectional-glenn-shunt',
          tags: ['CT', 'MRI', 'Glenn shunt', 'cardiac surgery', 'congenital'],
        },
      },
      {
        id: 'cardiac-surgery-003',
        front: {
          question: 'What is the Fontan operation, and what are its main complications?',
        },
        back: {
          answer: 'Total cavopulmonary connection: IVC flow directed to PAs (completing passive pulmonary circulation). Complications: enlarged RA causing arrhythmia, plastic bronchitis.',
          explanation: 'The Fontan procedure completes staged palliation by directing IVC blood (via a lateral tunnel or extracardiac conduit) to the pulmonary arteries, so all systemic venous return flows passively to the lungs. The single ventricle then pumps only oxygenated blood to the body. Key complications: arrhythmias from enlarged right atrium (in older versions), protein-losing enteropathy, and plastic bronchitis (patients cough up bronchial casts — classic boards fact).',
          keyFact: 'Fontan = bypasses RV entirely, passive pulmonary flow. Complications: arrhythmia (enlarged RA), plastic bronchitis (casts of bronchi = pathognomonic), protein-losing enteropathy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fontan-procedure',
          tags: ['CT', 'MRI', 'Fontan', 'cardiac surgery', 'congenital'],
        },
      },
      {
        id: 'cardiac-surgery-004',
        front: {
          question: 'What is the Jatene (arterial switch) operation, and when does a "Lecompte maneuver" occur?',
        },
        back: {
          answer: 'Jatene = arterial switch for D-TGA: aorta and PA transected above valves and switched, coronaries reimplanted into neo-aorta. Lecompte maneuver: PA brought anterior to aorta during switch — creates characteristic post-op appearance.',
          explanation: 'The Jatene arterial switch is the gold standard surgical repair for D-TGA. It restores the LV as the systemic ventricle. The Lecompte maneuver repositions the pulmonary artery anterior to the aorta to avoid tension on the anastomosis. On post-operative CXR/CT, the PA draped over the aorta is characteristic. Advantage: no conduit to replace (unlike Rastelli).',
          keyFact: 'Jatene arterial switch = standard repair for D-TGA. LV becomes systemic ventricle. Lecompte maneuver = PA anterior to aorta. PA over aorta = classic post-Jatene imaging appearance.',
          tags: ['CT', 'cardiac surgery', 'transposition', 'Jatene', 'congenital'],
        },
      },
      {
        id: 'cardiac-surgery-005',
        front: {
          question: 'What is the Bentall procedure?',
        },
        back: {
          answer: 'Composite graft replacement of aortic valve + aortic root + ascending aorta with reimplantation of coronary arteries. Used for combined aortic valve + ascending aortic disease (e.g., Marfan syndrome).',
          explanation: 'The Bentall procedure addresses combined pathology of the aortic valve and ascending aorta in a single operation. A composite graft replaces the aortic valve and root, and the coronary arteries are reimplanted into the graft as "buttons." It is the standard for Marfan syndrome with aortic root aneurysm and combined valvular disease. Post-operative CT shows the composite graft and coronary reimplantation sites.',
          keyFact: 'Bentall = aortic valve + root + ascending aorta replacement + coronary reimplantation. Classic indication: Marfan syndrome with combined aortic root aneurysm and valvulopathy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bentall-procedure',
          tags: ['CT', 'cardiac surgery', 'Bentall', 'Marfan syndrome', 'aortic root'],
        },
      },
      {
        id: 'cardiac-surgery-006',
        front: {
          question: 'What are the Mustard and Senning procedures, and how do they differ from the Rastelli and Jatene operations for D-TGA?',
        },
        back: {
          answer: 'Mustard/Senning: ATRIAL baffle redirects blood flow (RV remains systemic ventricle — poor long-term). Rastelli: intracardiac baffle + RV-PA conduit (LV → systemic via VSD). Jatene: arterial switch (LV → systemic — gold standard).',
          explanation: 'Mustard (pericardial/synthetic baffle) and Senning (native atrial tissue baffle) create an intracardiac tunnel to redirect blood at the atrial level — oxygenated blood goes to the RA→RV→aorta. The RV remains the systemic ventricle, leading to long-term failure. The Rastelli diverts LV blood through the VSD to the aorta and uses an RV-PA conduit — LV is the systemic ventricle but requires conduit replacements. Jatene (arterial switch) is ideal but technically demanding.',
          keyFact: 'Mustard/Senning = atrial baffle, RV = systemic (problematic long-term). Rastelli = LV via VSD to aorta + RV-PA conduit (needs conduit replacements). Jatene = arterial switch = gold standard (LV systemic, no conduit).',
          tags: ['CT', 'cardiac surgery', 'transposition', 'Mustard', 'Rastelli'],
        },
      },
      {
        id: 'cardiac-surgery-007',
        front: {
          question: 'What is the Ross procedure and in what patient population is it used?',
        },
        back: {
          answer: 'Diseased aortic valve replaced with patient\'s own pulmonary valve (autograft); pulmonary valve replaced with cryopreserved homograft. Used in children with diseased aortic valves — autograft grows with the child.',
          explanation: 'The Ross procedure solves the problem of aortic valve replacement in children: mechanical valves require lifelong anticoagulation (risky in children), and bioprosthetic valves degenerate quickly in young patients. The pulmonary autograft is living tissue that grows proportionally with the child. The pulmonary position receives a homograft (lower-pressure circulation tolerates it better). Follow-up imaging shows the autograft enlarging over time.',
          keyFact: 'Ross procedure = pulmonary valve autograft to aortic position. Used in CHILDREN — autograft grows with child. No anticoagulation needed. Pulmonary position receives cryopreserved homograft.',
          tags: ['CT', 'cardiac surgery', 'Ross procedure', 'aortic valve', 'pediatric'],
        },
      },
      {
        id: 'cardiac-surgery-008',
        front: {
          question: 'What is the difference between orthotopic and heterotopic heart transplant?',
        },
        back: {
          answer: 'Orthotopic: native heart removed, donor heart implanted (standard). Heterotopic: native heart kept + donor heart added alongside (piggyback) — backup if rejection occurs, allows native heart recovery.',
          explanation: 'Standard heart transplantation is orthotopic — the diseased heart is explanted and the donor heart is sutured in its place, with only the posterior LA (with pulmonary vein orifices) retained from the native heart. Heterotopic ("piggyback") transplantation leaves the native heart in situ and places the donor heart alongside in the right pleural space. This gives advantages in acute rejection (native heart as backup) but creates anatomic complexity.',
          keyFact: 'Orthotopic = standard transplant (native heart removed). Heterotopic = piggyback transplant (both hearts present). Heterotopic allows native heart recovery and backup if donor rejected.',
          tags: ['CT', 'cardiac surgery', 'heart transplant', 'post-operative', 'orthotopic'],
        },
      },
    ],
  },
  {
    id: 'cardiac-devices',
    label: 'Cardiac Devices & Plain Film Recognition',
    cards: [
      {
        id: 'cardiac-devices-001',
        front: {
          question: 'On CXR, where do the leads of a dual-chamber pacemaker terminate?',
        },
        back: {
          answer: 'Atrial lead: right atrial appendage (J-shaped). Ventricular lead: right ventricular apex.',
          explanation: 'A dual-chamber pacemaker has two leads: one for the right atrium (typically in the right atrial appendage, producing a characteristic J-shaped curve on lateral CXR) and one for the right ventricle (terminating at the apex). Cardiac resynchronization therapy (CRT/biventricular) devices have a third lead in the coronary sinus/lateral cardiac vein for LV pacing.',
          keyFact: 'Dual-chamber pacemaker: RA lead (J-shape, appendage) + RV lead (apex). CRT adds 3rd lead in coronary sinus → lateral LV. ICD lead has shock coil (thicker, denser).',
          tags: ['XR', 'pacemaker', 'cardiac devices', 'CXR technique', 'lead position'],
        },
      },
      {
        id: 'cardiac-devices-002',
        front: {
          question: 'On CXR, how do you identify an ICD lead versus a standard pacing lead?',
        },
        back: {
          answer: 'ICD lead has a visible shock coil — appears as a thicker, more radiodense segment, usually in the mid to proximal lead, terminating in the RV apex.',
          explanation: 'ICD leads are distinguishable from standard pacing leads by the presence of a defibrillation coil — a thickened, densely metallic segment that delivers high-energy shocks. A dual-coil ICD has both an RV coil and a proximal SVC coil. CRT-D devices combine biventricular pacing with defibrillation capability and will show all three leads.',
          keyFact: 'ICD lead = thick shock coil visible on CXR. Standard pacing lead = thinner, no coil. CRT-D = biventricular pacing (3 leads) + ICD (shock coil).',
          tags: ['XR', 'ICD', 'cardiac devices', 'CXR technique', 'defibrillator'],
        },
      },
      {
        id: 'cardiac-devices-003',
        front: {
          question: 'What is an intra-aortic balloon pump (IABP) and where should its tip be positioned on CXR?',
        },
        back: {
          answer: 'Counterpulsation device that inflates in diastole and deflates in systole to improve coronary perfusion and reduce afterload. Tip should be at or just distal to the left subclavian artery (2–3 cm distal to the aortic arch).',
          explanation: 'The IABP is inserted via the femoral artery and positioned in the descending thoracic aorta. The metallic tip is seen on CXR, typically projected over the aortic arch. If too high, it can occlude the left subclavian or other arch vessels; if too low, it is less effective and may occlude the celiac axis. The correct position is just distal to the left subclavian artery origin.',
          keyFact: 'IABP tip position: 2–3 cm distal to the left subclavian artery (at the level of the aortic knob on CXR). Too high = subclavian/carotid occlusion risk.',
          tags: ['XR', 'IABP', 'cardiac devices', 'CXR technique', 'mechanical support'],
        },
      },
      {
        id: 'cardiac-devices-004',
        front: {
          question: 'What is a left ventricular assist device (LVAD) and how does it appear on CXR?',
        },
        back: {
          answer: 'Mechanical pump attached to LV apex, pumping blood to the ascending aorta. CXR: pump component (metallic housing at LV apex) + outflow graft to ascending aorta + power line exiting through abdominal wall + often concurrent ICD.',
          explanation: 'LVADs provide continuous-flow mechanical circulatory support for end-stage heart failure as a bridge to transplant or destination therapy. On CXR, the pump is a metallic device in the left hemithorax at the LV apex. The outflow cannula runs to the ascending aorta. A percutaneous power driveline exits through the abdominal wall.',
          keyFact: 'LVAD on CXR: pump at LV apex + outflow to ascending aorta + driveline through abdominal wall + usually ICD lead. Associated with risk of LVAD thrombosis, stroke, and aortic regurgitation.',
          tags: ['XR', 'LVAD', 'cardiac devices', 'CXR technique', 'mechanical support'],
        },
      },
    ],
  },
]