// ============================================================
// RadStack — Interventional Radiology Deck
// ============================================================
// Naming convention: ir-[section]-[###]
// ============================================================

export const irSubsections = [
  {
    id: 'ir-vasc-anatomy',
    label: 'Vascular Anatomy',
    cards: [
      {
        id: 'ir-vasc-anatomy-001',
        front: {
          question: 'What are the three main branches of the celiac artery, and in what percentage of patients is this normal anatomy seen?',
          hint: 'Think left, common, and splenic.',
        },
        back: {
          answer: 'Left gastric artery, common hepatic artery, and splenic artery — seen in approximately 75% of patients.',
          explanation: 'The celiac trunk arises from the aorta at the level of T12. The left gastric artery may be the source of bleeding in Mallory-Weiss tears. The anatomy of the celiac axis is highly variable, making knowledge of common variants essential before hepatic or splenic interventions.',
          keyFact: 'Celiac = Left Gastric + Common Hepatic + Splenic (75% of patients). Arises at T12.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/celiac-trunk',
          tags: ['anatomy', 'vascular', 'celiac', 'angiography', 'abdominal'],
        },
      },
      {
        id: 'ir-vasc-anatomy-002',
        front: {
          question: 'What is a replaced right hepatic artery (RRHA), what is its prevalence, and why is it clinically important?',
        },
        back: {
          answer: 'The right hepatic artery arises from the SMA instead of the proper hepatic artery. Present in 10–18% of patients.',
          explanation: 'A RRHA is the most common hepatic arterial variant. It is clinically significant during laparoscopic cholecystectomy (risk of inadvertent arterial injury), hepatic transplantation (the RRHA is longer and larger, facilitating donor anastomosis), and during hepatic embolization procedures. SMA stenosis can potentially threaten right lobe perfusion in this setting.',
          keyFact: 'RRHA (10–18%): right hepatic arises from SMA. Must be identified before cholecystectomy and TACE. Contrast: replaced LEFT hepatic arises from the left gastric (11–12%).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/replaced-right-hepatic-artery',
          tags: ['anatomy', 'hepatic artery', 'variant', 'angiography', 'abdominal'],
        },
      },
      {
        id: 'ir-vasc-anatomy-003',
        front: {
          question: 'What is a replaced left hepatic artery (RLHA), what is its prevalence, and from where does it arise?',
        },
        back: {
          answer: 'The left hepatic artery arises from the left gastric artery rather than the proper hepatic artery. Present in 11–12% of patients.',
          explanation: 'The RLHA is clinically significant during gastrectomy — resection of the left gastric artery (as is done in partial gastrectomy) may inadvertently sacrifice the RLHA, risking left lobe ischemia. During TACE, embolization via the left gastric artery may be required to treat left lobe tumours.',
          keyFact: 'Replaced LEFT hepatic = arises from LEFT gastric. Danger during gastrectomy. Replaced RIGHT hepatic = arises from SMA.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/replaced-left-hepatic-artery',
          tags: ['anatomy', 'hepatic artery', 'variant', 'angiography', 'abdominal'],
        },
      },
      {
        id: 'ir-vasc-anatomy-004',
        front: {
          question: 'At what vertebral levels do the celiac artery, SMA, renal arteries, and IMA arise from the aorta?',
        },
        back: {
          answer: 'Celiac: T12 | SMA: T12–L1 disc | Renal arteries: L1–L2 disc | IMA: L3 (left of midline)',
          explanation: 'These osseous landmarks are essential for interpreting abdominal aortograms and planning catheter positioning. The IMA arises to the left of midline at L3 and is often the last major visceral branch before the aortic bifurcation. The inferior pancreaticoduodenal artery is the first branch of the SMA.',
          keyFact: 'Mnemonic by level: Celiac = T12, SMA = T12-L1, Renals = L1-L2, IMA = L3. "Can Selectively Remember It."',
          radiopaediaUrl: 'https://radiopaedia.org/articles/abdominal-aorta',
          tags: ['anatomy', 'aorta', 'vascular', 'angiography', 'abdominal'],
        },
      },
      {
        id: 'ir-vasc-anatomy-005',
        front: {
          question: 'What is the femoral triangle mnemonic for structures from lateral to medial, and where is the ideal puncture site for femoral arterial access?',
        },
        back: {
          answer: 'NAVL: Nerve – Artery – Vein – Lymphatics (lateral to medial). Ideal puncture site: inferomedial margin of the femoral head.',
          explanation: 'The common femoral artery (CFA) begins inferior to the inguinal ligament. The femoral head provides a firm surface for adequate manual compression. Puncture at the femoral head also ensures the artery and nerve are side-by-side (not the vein overlying the artery distally). A puncture too low risks AVF formation as the vein passes deep to the artery distally.',
          keyFact: 'NAVL lateral to medial. Puncture at inferomedial femoral head — too high → retroperitoneal hematoma; too low → AVF risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/femoral-artery',
          tags: ['anatomy', 'femoral artery', 'vascular access', 'angiography', 'IR technique'],
        },
      },
      {
        id: 'ir-vasc-anatomy-006',
        front: {
          question: 'What are the branches of the anterior versus posterior divisions of the internal iliac artery?',
        },
        back: {
          answer: 'Anterior division: inferior gluteal, obturator, internal pudendal, uterine/prostatic, vesicle, inferior/middle rectal arteries. Posterior division: superior gluteal, iliolumbar, lateral sacral arteries.',
          explanation: 'The anterior division supplies most pelvic viscera and is the primary division embolized for pelvic trauma or uterine fibroid embolization. The posterior division supplies the gluteal musculature. The corona mortis is a variant where the obturator artery arises from the external iliac artery — important in pelvic trauma.',
          keyFact: 'Anterior = viscera (uterine, bladder, rectal). Posterior = muscles (superior gluteal, iliolumbar). Corona mortis: obturator from external iliac — surgical danger in pelvic trauma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/internal-iliac-artery',
          tags: ['anatomy', 'internal iliac', 'pelvic vessels', 'angiography', 'vascular'],
        },
      },
      {
        id: 'ir-vasc-anatomy-007',
        front: {
          question: 'What are the major SMA–IMA anastomotic pathways in the colon, and what is the Cannon-Böhm point?',
        },
        back: {
          answer: 'Marginal artery of Drummond (lateral, major pathway) and arc of Riolan (medial, inconstant). Cannon-Böhm point: the watershed zone at the splenic flexure between SMA and IMA territories.',
          explanation: 'The marginal artery of Drummond runs along the mesenteric border of the entire colon and is the major SMA–IMA collateral. The arc of Riolan is more medial through the colonic mesentery. The splenic flexure (Cannon-Böhm point) is a watershed zone susceptible to ischemia in low-flow states. At least two of three mesenteric vessels must be diseased for chronic mesenteric ischemia to be symptomatic.',
          keyFact: 'Splenic flexure = Cannon-Böhm point = watershed = most ischemia-prone. Marginal artery of Drummond = major SMA–IMA collateral.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/marginal-artery-of-drummond',
          tags: ['anatomy', 'mesenteric vessels', 'SMA', 'IMA', 'vascular', 'ischemia'],
        },
      },
      {
        id: 'ir-vasc-anatomy-008',
        front: {
          question: 'What is the arc of Buhler and how does it differ from the marginal artery of Drummond?',
        },
        back: {
          answer: 'The arc of Buhler is a short, direct embryologic remnant connecting the celiac artery to the SMA. The marginal artery of Drummond is the major SMA–IMA anastomosis running in the peripheral mesentery of the colon.',
          explanation: 'The arc of Buhler is not a collateral pathway — it is a persistent embryologic connection and is uncommon. In contrast, the marginal artery of Drummond and the arc of Riolan are true anastomotic collateral pathways between the SMA and IMA that become prominent with mesenteric artery disease.',
          keyFact: 'Arc of Buhler = embryologic remnant, celiac–SMA, not a collateral. Arc of Riolan = medial SMA–IMA collateral. Marginal artery of Drummond = lateral SMA–IMA, the main one.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/arc-of-buhler',
          tags: ['anatomy', 'vascular', 'mesenteric', 'collateral', 'abdominal'],
        },
      },
      {
        id: 'ir-vasc-anatomy-009',
        front: {
          question: 'What is the normal aortic arch branching pattern and what percentage of the population has it? What is the most common variant?',
        },
        back: {
          answer: 'Normal (66%): brachiocephalic trunk, left common carotid, left subclavian — three branches. Most common variant (13%): common origin of the brachiocephalic trunk and left common carotid ("bovine arch" misnomer).',
          explanation: 'The term "bovine arch" is a misnomer; a true bovine arch features a single great vessel from the aorta. The most common anatomic variant in humans is the shared origin of the brachiocephalic and left common carotid arteries, seen more commonly in Black patients. This variant is generally incidental but relevant for endovascular arch repair.',
          keyFact: 'Normal arch = 3 branches (66%). "Bovine" = brachiocephalic + LCCA share origin (13%) — this is the MISNOMER. True bovine has ONE branch.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aortic-arch-variants',
          tags: ['anatomy', 'aortic arch', 'variant', 'CT', 'vascular'],
        },
      },
      {
        id: 'ir-vasc-anatomy-010',
        front: {
          question: 'What is an aberrant right subclavian artery, what structure is commonly present at its origin, and what symptom can it cause?',
        },
        back: {
          answer: 'The right subclavian arises directly from the aortic arch distal to the left subclavian, passing posterior to the esophagus. A diverticulum of Kommerell is a focal dilation at its origin. It can cause dysphagia lusoria (esophageal compression).',
          explanation: 'An aberrant right subclavian artery is seen in approximately 1% of patients. Symptoms are rare. On barium swallow, there is a posterior esophageal indentation. When present, the recurrent laryngeal nerve takes an aberrant course (non-recurrent), making thyroid surgery higher risk. Diverticulum of Kommerell may rarely require treatment if large.',
          keyFact: 'Aberrant RSA (1%): passes behind esophagus → dysphagia lusoria + posterior esophageal indentation. Diverticulum of Kommerell = bulge at origin. Non-recurrent laryngeal nerve = thyroid surgery risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aberrant-right-subclavian-artery',
          tags: ['anatomy', 'aortic arch', 'variant', 'CT', 'vascular'],
        },
      },
      {
        id: 'ir-vasc-anatomy-011',
        front: {
          question: 'What is the pathway of venous drainage from the lower extremity, distinguishing the superficial and deep systems?',
        },
        back: {
          answer: 'Superficial: great saphenous vein → common femoral vein; small saphenous vein → popliteal vein. Deep: anterior tibial, peroneal, posterior tibial → popliteal → femoral → common femoral → external iliac.',
          explanation: 'The great saphenous vein (GSV) runs medially and joins the common femoral vein at the saphenofemoral junction. Thrombus near the saphenofemoral junction requires anticoagulation. The small saphenous vein drains into the popliteal vein; clots here are typically not treated. The term "superficial femoral vein" is deprecated as it is part of the deep system.',
          keyFact: 'Great saphenous → CFV (treat if near saphenofemoral junction). Small saphenous → popliteal (don\'t treat isolated clot here). The "superficial femoral vein" is part of the DEEP system.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/great-saphenous-vein',
          tags: ['anatomy', 'venous', 'lower extremity', 'DVT', 'ultrasound'],
        },
      },
      {
        id: 'ir-vasc-anatomy-012',
        front: {
          question: 'What are the three portions of the subclavian artery and their key branches?',
        },
        back: {
          answer: 'Portion 1 (medial to anterior scalene): vertebral artery, internal thoracic artery, thyrocervical trunk. Portion 2 (behind anterior scalene): costocervical trunk. Portion 3 (lateral to anterior scalene): dorsal scapular artery.',
          explanation: 'The right subclavian artery arises from the brachiocephalic trunk; the left arises directly from the aortic arch. The vertebral artery is the first and most critical branch of portion 1. Knowing the branches is essential for subclavian intervention, dialysis access planning, and thoracic outlet syndrome assessment.',
          keyFact: 'Subclavian portion 1 = Vertebral + Internal Thoracic + Thyrocervical. Portion 2 = Costocervical. Portion 3 = Dorsal Scapular. "1-2-3 branches decreasing."',
          radiopaediaUrl: 'https://radiopaedia.org/articles/subclavian-artery',
          tags: ['anatomy', 'subclavian artery', 'upper extremity', 'vascular', 'thoracic outlet'],
        },
      },
      {
        id: 'ir-vasc-anatomy-013',
        front: {
          question: 'From medial to lateral, what are the three infrapopliteal arteries, and which gives rise to the dorsalis pedis?',
        },
        back: {
          answer: 'From medial to lateral: posterior tibial (most medial), peroneal (middle, from the tibioperoneal trunk), anterior tibial (most lateral). The anterior tibial artery continues as the dorsalis pedis.',
          explanation: 'The popliteal artery bifurcates into the tibioperoneal trunk (giving peroneal + posterior tibial) and the anterior tibial artery. The anterior tibial is the only anterior artery of the lower leg and is the most lateral because the anterior tibialis muscle bulk is on the lateral side. In PAD, tibial disease is common in diabetics.',
          keyFact: 'Medial to lateral below knee: Posterior tibial – Peroneal – Anterior tibial. Anterior tibial = most lateral; becomes dorsalis pedis. "Please Pour Alcohol" (Post-Pero-Ant) medial → lateral.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/popliteal-artery',
          tags: ['anatomy', 'lower extremity', 'tibial arteries', 'vascular', 'PAD'],
        },
      },
      {
        id: 'ir-vasc-anatomy-014',
        front: {
          question: 'What is the path of Winslow (rectal arcade) and what vessels does it connect?',
        },
        back: {
          answer: 'IMA → superior rectal artery → middle/inferior rectal arteries (from internal iliac anterior division) — creating a collateral between the IMA and the internal iliac artery.',
          explanation: 'The path of Winslow is a key collateral pathway that allows blood to bypass an occluded IMA. It connects the IMA (via the superior rectal artery) to the internal iliac artery (via middle and inferior rectal arteries). This is relevant in pelvic trauma, aortic occlusion (Leriche syndrome), and pre-surgical ligation planning.',
          keyFact: 'Path of Winslow = IMA ↔ internal iliac via the rectal arcade. Essential collateral in Leriche syndrome and pelvic trauma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/inferior-mesenteric-artery',
          tags: ['anatomy', 'IMA', 'collateral', 'vascular', 'pelvic vessels'],
        },
      },
      {
        id: 'ir-vasc-anatomy-015',
        front: {
          question: 'Where does the cystic artery typically arise, and why does its origin matter for hepatic artery embolization?',
        },
        back: {
          answer: 'The cystic artery typically arises from the right hepatic artery. Embolization proximal to the cystic artery origin risks ischemic cholecystitis (up to 10% of cases).',
          explanation: 'During hepatic artery embolization (e.g., for hepatic artery aneurysm or TACE), the position of the cystic artery determines safe embolization territory. Ideally, embolization is performed distal to the cystic artery takeoff to preserve gallbladder perfusion. Ischemic cholecystitis can be a serious complication requiring cholecystectomy.',
          keyFact: 'Cystic artery = from right hepatic artery. Embolize DISTAL to cystic artery to avoid ischemic cholecystitis (10% risk if embolized proximal).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cystic-artery',
          tags: ['anatomy', 'hepatic artery', 'embolization', 'cholecystitis', 'IR technique'],
        },
      },
    ],
  },

  {
    id: 'ir-vascular',
    label: 'Vascular Intervention',
    cards: [
      {
        id: 'ir-vascular-001',
        front: {
          question: 'What are the five endoleak types after EVAR, and which is most common?',
        },
        back: {
          answer: 'Type I: inadequate seal at graft ends (IA proximal, IB distal). Type II: collateral flow (IMA or lumbar arteries) — most common. Type III: device failure/graft defect. Type IV: porous graft (rare, transient). Type V (endotension): sac enlargement without identifiable leak.',
          explanation: 'Type II endoleaks are the most common and usually benign, but require surveillance. Type I and III are high-pressure leaks requiring intervention. Type V is a diagnosis of exclusion. Types IV and V cannot be seen on imaging. Endoleak classification drives management decisions: I and III require urgent treatment, II are watched unless sac enlarges.',
          keyFact: 'Type I & III = high pressure, require intervention. Type II (IMA/lumbar) = most common, usually benign but watch sac size. Type V = endotension, imaging-invisible.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/endoleak',
          tags: ['endoleak', 'EVAR', 'aorta', 'CT', 'vascular intervention'],
        },
      },
      {
        id: 'ir-vascular-002',
        front: {
          question: 'What are the AAA size thresholds for ultrasound surveillance versus surgical repair?',
        },
        back: {
          answer: '<4 cm: 6-month follow-up, then annual. 4–4.5 cm: 6-month follow-up, then 6-monthly. 5–5.5 cm: consider surgery. >5.5 cm: surgery recommended. Repair also for growth >5 mm/year or symptomatic aneurysm.',
          explanation: 'An AAA is defined as aortic diameter ≥3 cm. US screening is recommended for men aged 65–79 who have ever smoked. EVAR is preferred over open repair when anatomically feasible, with equivalent long-term outcomes but more frequent reinterventions. Ruptured AAA carries ≥50% mortality.',
          keyFact: '>5.5 cm = repair. Also repair if growth >5 mm/year or symptomatic. EVAR preferred for anatomically suitable patients. Rupture mortality ≥50%.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/abdominal-aortic-aneurysm',
          tags: ['AAA', 'aorta', 'ultrasound', 'CT', 'EVAR', 'vascular intervention'],
        },
      },
      {
        id: 'ir-vascular-003',
        front: {
          question: 'What is the Stanford classification of aortic dissection and how does it guide management?',
        },
        back: {
          answer: 'Stanford A: involves the ascending aorta (±descending) → surgical treatment. Stanford B: non-ascending aorta only → medical management (blood pressure control).',
          explanation: 'The Stanford classification is the primary system for guiding treatment. Type A is a surgical emergency due to risk of pericardial tamponade, aortic regurgitation, and coronary ostia involvement. Type B is managed medically unless complicated (malperfusion, rupture, rapid expansion). Complicated type B may be treated with TEVAR (thoracic endovascular aortic repair).',
          keyFact: 'Stanford A = ascending involved = Surgery. Stanford B = descending only = Medical (β-blockers for BP control). Complicated type B → TEVAR.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/stanford-classification-of-aortic-dissection',
          tags: ['aortic dissection', 'Stanford classification', 'CT', 'vascular', 'aorta'],
        },
      },
      {
        id: 'ir-vascular-004',
        front: {
          question: 'How do you distinguish the true lumen from the false lumen in aortic dissection on CTA?',
        },
        back: {
          answer: 'True lumen: smaller, outer wall calcifications, brighter contrast enhancement on arterial phase. False lumen: larger, slower contrast opacification, beak sign, cobweb sign, may become thrombosed.',
          explanation: 'The true lumen is compressed by high-pressure false lumen flow. Outer wall calcifications (intimal calcifications displaced inward) mark the true lumen boundary. The false lumen has slower flow, leading to thrombosis. The beak sign refers to the acute angle where the false lumen dissects the media. Cobwebs represent incompletely disrupted medial fibers in the false lumen.',
          keyFact: 'True lumen = SMALLER + outer calcifications + brighter early enhancement. False lumen = LARGER + beak sign + cobweb sign + thrombosis-prone.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aortic-dissection',
          tags: ['aortic dissection', 'CT', 'CTA', 'vascular', 'aorta'],
        },
      },
      {
        id: 'ir-vascular-005',
        front: {
          question: 'What distinguishes intramural hematoma (IMH) from aortic dissection, and what is the key imaging finding of IMH?',
        },
        back: {
          answer: 'IMH has no intimal flap and no communication between the hematoma and the aortic lumen. Key finding: peripheral hyperattenuating (60–70 HU) crescent on non-contrast CT with displaced intimal calcifications.',
          explanation: 'IMH is caused by rupture of the vasa vasorum, causing hemorrhage into the aortic media without an intimal tear. It is best seen on non-contrast CT. Ulcer-like projections (focal contrast extension into IMH with visible neck >3 mm) indicate poor prognosis. Treatment follows the same algorithm as dissection: ascending = surgery, descending = medical.',
          keyFact: 'IMH = NO intimal flap. Best seen on NON-CONTRAST CT as a 60–70 HU crescent. Displaced intimal calcifications are a key ancillary sign. Same treatment rules as dissection.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/intramural-haematoma-of-the-aorta',
          tags: ['IMH', 'aorta', 'CT', 'acute aortic syndrome', 'vascular'],
        },
      },
      {
        id: 'ir-vascular-006',
        front: {
          question: 'What is a penetrating atherosclerotic ulcer (PAU), how does it differ from IMH, and what does it look like on CT?',
        },
        back: {
          answer: 'PAU: atherosclerotic plaque ulcerates through the intima into the media, extending BEYOND the expected aortic contour as a contrast-filled outpouching. Unlike IMH, PAU is caused by atherosclerosis rather than hypertension and is not caused by vasa vasorum rupture.',
          explanation: 'PAU is distinguished from an ulcerated atherosclerotic plaque (which does not extend beyond the aortic contour) and from an ulcer-like projection (which arises in the setting of IMH). PAU may lead to saccular aneurysm formation. Multiple PAUs may be present. Imaging of the full aorta is recommended if a PAU is found.',
          keyFact: 'PAU = contrast outpouching BEYOND aortic wall contour. Caused by atherosclerosis (not hypertension). Can cause saccular aneurysm. Ulcerated plaque = does NOT breach wall.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/penetrating-aortic-ulcer',
          tags: ['PAU', 'aorta', 'CT', 'acute aortic syndrome', 'vascular'],
        },
      },
      {
        id: 'ir-vascular-007',
        front: {
          question: 'What is the most common site for traumatic aortic injury, and what are the direct CT signs?',
        },
        back: {
          answer: 'Most common site: aortic isthmus (just distal to the left subclavian artery). Direct CT signs: intimal irregularity, dissection flap, pseudoaneurysm, intramural hematoma.',
          explanation: 'There are three relatively fixed aortic levels vulnerable to deceleration injury: the aortic root, the isthmus (most common), and the diaphragmatic hiatus. CTA is the gold standard. Mediastinal hemorrhage separated from an intact aorta by a fat plane suggests venous origin and can be managed conservatively. Hemorrhage contacting the aortic wall suggests aortic injury and requires surgical/TEVAR treatment.',
          keyFact: 'Aortic isthmus = most common trauma site. Hemorrhage in contact with aortic wall = aortic injury. Fat plane separation from aorta = likely venous (conservative management).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/traumatic-aortic-injury',
          tags: ['aortic trauma', 'CT', 'CTA', 'vascular', 'trauma'],
        },
      },
      {
        id: 'ir-vascular-008',
        front: {
          question: 'What are the surgical thresholds for thoracic aortic aneurysm (TAA) repair, and when is a lower threshold applied?',
        },
        back: {
          answer: 'Standard: ascending TAA >5.5 cm; descending TAA >6 cm. Lower threshold of 4.5 cm for patients with connective tissue disorders (Marfan, Ehlers-Danlos) or bicuspid aortic valve aortopathy meeting criteria for valve repair.',
          explanation: 'TAA is defined as ascending aorta >4 cm or descending aorta >3.5 cm. Annual growth rate >1 cm/year (or >5 mm/6 months) is also an indication for repair regardless of size. Double-oblique true short-axis reformats perpendicular to the aortic lumen should be used for accurate diameter measurement.',
          keyFact: 'Ascending TAA surgery: >5.5 cm (or 4.5 cm with connective tissue disease). Descending TAA surgery: >6 cm. Growth >1 cm/year also triggers repair.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thoracic-aortic-aneurysm',
          tags: ['TAA', 'aorta', 'CT', 'vascular intervention', 'aneurysm'],
        },
      },
      {
        id: 'ir-vascular-009',
        front: {
          question: 'What is fibromuscular dysplasia (FMD), which vessels does it preferentially affect, and what is its characteristic imaging appearance?',
        },
        back: {
          answer: 'FMD is a non-inflammatory, non-atherosclerotic vascular disease predominantly affecting young/middle-aged women. Preferentially affects mid/distal renal and carotid arteries. Classic appearance: string of beads/pearls on angiography from alternating stenoses and aneurysmal dilations. Bilateral in 2/3 of cases.',
          explanation: 'The most common subtype is medial fibroplasia (80%), producing the string-of-beads appearance. Intimal fibroplasia is less common and produces a smooth stenosis without beading (more common in children). FMD responds well to angioplasty alone (97% improvement in BP, 42% cure). Stenting is NOT recommended in FMD as it complicates retreatment and risks in-stent stenosis.',
          keyFact: 'FMD = string of beads on angiography = young woman + mid/distal renal/carotid arteries. Treat with angioplasty ALONE — no stenting. Bilateral in 2/3.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fibromuscular-dysplasia',
          tags: ['FMD', 'renal artery', 'angioplasty', 'CTA', 'vascular'],
        },
      },
      {
        id: 'ir-vascular-010',
        front: {
          question: 'What is Leriche syndrome and what is the classic clinical triad?',
        },
        back: {
          answer: 'Leriche syndrome: atherosclerotic occlusion of the distal abdominal aorta (at or near the bifurcation). Classic quartet: impotence, buttock claudication, absent femoral pulses, and cold lower extremities.',
          explanation: 'Leriche syndrome typically occurs in men from aortoiliac atherosclerosis. Extensive collaterals develop via three pathways: anterior (internal thoracic → epigastric → external iliac), middle (SMA → IMA → rectal → internal iliac), and posterior (intercostal/lumbar → iliolumbar → external iliac). CTA is used to assess extent of occlusion and plan revascularization.',
          keyFact: 'Leriche = impotence + buttock claudication + absent femoral pulses + cold legs. Distal aortic occlusion in men with atherosclerosis. Collaterals develop via 3 pathways.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/leriche-syndrome',
          tags: ['Leriche syndrome', 'aorta', 'PAD', 'CTA', 'vascular'],
        },
      },
      {
        id: 'ir-vascular-011',
        front: {
          question: 'What is the ankle-brachial index (ABI), what values indicate claudication vs. rest pain, and what does an elevated ABI suggest?',
        },
        back: {
          answer: 'ABI = ankle SBP / brachial SBP. Normal: ≥0.9. ABI 0.5–0.9: intermittent claudication. ABI <0.4: ischemic rest pain. ABI >1.3: arterial calcification (non-compressible vessels, falsely elevated — common in diabetics).',
          explanation: 'The ABI is the first-line hemodynamic test for peripheral arterial disease. A decreased ABI confirms a hemodynamically significant stenosis between the great vessels and the ankle. In diabetics and dialysis patients, calcified non-compressible vessels produce artificially high ABI; toe-brachial index (TBI) is more useful in these patients.',
          keyFact: 'ABI normal ≥0.9. Claudication = 0.5–0.9. Rest pain = <0.4. ABI >1.3 = calcified vessels (diabetics) → use toe-brachial index instead.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ankle-brachial-index',
          tags: ['ABI', 'PAD', 'ultrasound', 'vascular', 'lower extremity'],
        },
      },
      {
        id: 'ir-vascular-012',
        front: {
          question: 'What is May-Thurner syndrome, what causes it, and how is it treated?',
        },
        back: {
          answer: 'Compression of the left common iliac vein by the right common iliac artery against the lumbar vertebra, predisposing to left-sided DVT. Treatment: catheter-directed thrombolysis followed by venous stenting.',
          explanation: 'Chronic arterial pulsation against the vein creates a fibrous adhesion (intraluminal web or spur) that promotes thrombosis. This explains the higher prevalence of left-sided DVT in young women. Diagnosed with CT venography or MR venography. Stenting is effective for May-Thurner, unlike Paget-Schroetter syndrome where stents should be avoided.',
          keyFact: 'May-Thurner = LEFT common iliac VEIN compressed by RIGHT common iliac ARTERY. Left-sided DVT in young women. Treatment = thrombolysis + venous stent.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/may-thurner-syndrome',
          tags: ['May-Thurner', 'DVT', 'venous', 'CT', 'vascular intervention'],
        },
      },
      {
        id: 'ir-vascular-013',
        front: {
          question: 'What is Paget-Schroetter syndrome, and how does management differ from May-Thurner syndrome?',
        },
        back: {
          answer: 'Paget-Schroetter: effort thrombosis of the subclavian vein in young muscular men due to thoracic outlet compression. Treatment: thrombolysis followed by SURGICAL thoracic outlet decompression. Stents should NOT be placed due to high risk of device failure.',
          explanation: 'Unlike May-Thurner (where stenting is the definitive treatment), Paget-Schroetter requires surgical decompression after thrombolysis to address the underlying mechanical compression. Placing a stent across a thoracic outlet compression without correcting the compression leads to stent fracture and failure. Both subclavian veins are often compressed even if only one is symptomatic.',
          keyFact: 'Paget-Schroetter = subclavian vein thrombosis from TOS in young muscular men. Thrombolysis → SURGICAL decompression. NO stents — they fracture.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/paget-schroetter-syndrome',
          tags: ['Paget-Schroetter', 'subclavian vein', 'thoracic outlet', 'DVT', 'vascular intervention'],
        },
      },
      {
        id: 'ir-vascular-014',
        front: {
          question: 'What is the most common visceral artery aneurysm, who is at risk, and when is treatment indicated?',
        },
        back: {
          answer: 'Splenic artery aneurysm is the most common visceral aneurysm. Risk: multiparous women and portal hypertension. Treat if symptomatic, >2 cm, or prior to planned pregnancy. Preferred treatment: coil embolization (distal then proximal to the aneurysm neck).',
          explanation: 'Splenic artery aneurysms have an increased risk of rupture during pregnancy (due to increased blood volume and hormonal effects on the vessel wall). Hepatic artery aneurysm is the second most common. For coil embolization, the "front door/back door" technique ensures exclusion of retrograde collateral filling from the distal side.',
          keyFact: 'Splenic artery aneurysm = most common visceral aneurysm. Treat if >2 cm or pre-pregnancy. Coil distal THEN proximal ("back door/front door"). Hepatic = 2nd most common.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/splenic-artery-aneurysm',
          tags: ['splenic artery', 'aneurysm', 'embolization', 'vascular intervention', 'angiography'],
        },
      },
      {
        id: 'ir-vascular-015',
        front: {
          question: 'What is Takayasu arteritis, how does it differ from giant cell arteritis, and what are the imaging findings?',
        },
        back: {
          answer: 'Takayasu: idiopathic large-vessel vasculitis affecting young women, involving the aorta and its branches. GCA: older patients (>50 y), primarily upper extremity medium vessels, rarely involves the aorta. Both show long smooth circumferential arterial wall thickening, but Takayasu more commonly causes occlusions and aortic involvement.',
          explanation: 'The two phases of Takayasu: (1) pre-pulseless phase with constitutional symptoms; (2) pulseless phase with limb ischemia or renovascular hypertension. Treatment during active phase is steroids. Endovascular intervention only after inflammation resolves (ESR normalizes). FDG-PET/CT shows moderate-to-intense FDG uptake in involved vessels.',
          keyFact: 'Takayasu = young women + aorta + occlusions. GCA = elderly (>50) + subclavian/axillary + smooth stenoses. Age is the key differentiator on imaging. Treat Takayasu only when ESR normalized.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/takayasu-arteritis',
          tags: ['Takayasu', 'vasculitis', 'aorta', 'MRA', 'CTA'],
        },
      },
      {
        id: 'ir-vascular-016',
        front: {
          question: 'What is subclavian steal syndrome, what causes it, and what is the imaging finding on angiography?',
        },
        back: {
          answer: 'Proximal subclavian stenosis/occlusion causes retrograde flow from the ipsilateral vertebral artery into the subclavian artery distal to the lesion. Clinical: vertebrobasilar insufficiency triggered by arm exercise. Angiography: early phase shows proximal stenosis; late phase shows retrograde vertebral flow.',
          explanation: 'Subclavian steal most commonly involves the left subclavian artery (due to its higher atherosclerotic burden). Symptoms include dizziness, syncope with arm exercise, and occasionally signs of arm ischemia. CTA or MRA can demonstrate the stenosis. Treatment is angioplasty of the flow-limiting lesion or surgical bypass.',
          keyFact: 'Subclavian steal = proximal subclavian stenosis → retrograde vertebral flow → vertebrobasilar symptoms with arm exercise. Late-phase angiography shows retrograde vertebral filling.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/subclavian-steal-syndrome',
          tags: ['subclavian steal', 'vertebral artery', 'CTA', 'angiography', 'vascular'],
        },
      },
      {
        id: 'ir-vascular-017',
        front: {
          question: 'What is Buerger disease (thromboangiitis obliterans), who is affected, and what are the characteristic imaging findings?',
        },
        back: {
          answer: 'Inflammatory, thrombotic arteritis of small/medium vessels in adult male smokers. Characteristic angiographic findings: segmental occlusions of small/medium arteries with corkscrew collaterals from vasa vasorum. Larger arteries (CFA, SFA, popliteal) are typically spared.',
          explanation: 'Buerger disease affects both upper and lower extremities. The corkscrew collaterals are a pathognomonic angiographic pattern. Definitive treatment is smoking cessation. Unlike atherosclerosis, which affects large vessels proximally, Buerger disease affects distal small and medium vessels with preserved proximal vessels.',
          keyFact: 'Buerger = adult male smoker + distal small vessel disease + corkscrew collaterals. Large vessels (CFA, SFA, popliteal) SPARED. Only treatment = smoking cessation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thromboangiitis-obliterans',
          tags: ['Buerger disease', 'angiography', 'small vessel', 'vascular', 'lower extremity'],
        },
      },
      {
        id: 'ir-vascular-018',
        front: {
          question: 'What is the ultrasound appearance of a femoral artery pseudoaneurysm, and what is the treatment of choice?',
        },
        back: {
          answer: 'On color Doppler: yin-yang sign (swirling flow within the sac) with high-velocity flow at the neck communicating with the femoral artery. Treatment of choice: ultrasound-guided thrombin injection for pseudoaneurysms >1 cm. Watchful waiting for <1 cm.',
          explanation: 'Femoral artery pseudoaneurysm occurs in approximately 1% of arterial punctures. Ultrasound-guided thrombin injection is highly effective (>95% success) and has largely replaced compression therapy. Compression of the neck can also be performed but is painful and less reliable. Pseudoaneurysms >2 cm rarely resolve spontaneously.',
          keyFact: 'Pseudoaneurysm US = yin-yang swirling flow + high-velocity neck communication. Treat with thrombin injection if >1 cm. <1 cm = watchful waiting.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/femoral-artery-pseudoaneurysm',
          tags: ['pseudoaneurysm', 'ultrasound', 'femoral artery', 'vascular access', 'IR technique'],
        },
      },
      {
        id: 'ir-vascular-019',
        front: {
          question: 'What are the carotid artery Doppler criteria for >50% and >70% ICA stenosis?',
        },
        back: {
          answer: '>50% stenosis: ICA PSV >125 cm/sec. >70% stenosis: ICA PSV >230 cm/sec OR ICA end-diastolic velocity >100 cm/sec. ICA:CCA PSV ratio >2 suggests >50%; >4 suggests >70%.',
          explanation: 'These are the Society of Radiologists in Ultrasound (SRU) 2003 criteria. Normal PSV in large arteries is 60–100 cm/sec. Spectral broadening and aliasing occur at sites of turbulence. The parvus et tardus waveform distal to a significant stenosis reflects the low-resistance, delayed systolic upstroke pattern from upstream obstruction.',
          keyFact: 'ICA PSV >125 = >50% stenosis. ICA PSV >230 = >70% stenosis. ICA:CCA ratio >2 = >50%; ratio >4 = >70%. EDV >100 = >70%.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/carotid-artery-ultrasound',
          tags: ['carotid artery', 'ultrasound', 'Doppler', 'PSV', 'stenosis'],
        },
      },
      {
        id: 'ir-vascular-020',
        front: {
          question: 'What is nutcracker syndrome, what compresses the vein, and what is the posterior variant?',
        },
        back: {
          answer: 'Nutcracker syndrome: compression of the left renal vein between the aorta and the SMA. Posterior variant: compression of a retroaortic or circumaortic left renal vein between the aorta and the vertebral body. Clinical: hematuria, pain, varicocele, pelvic congestion.',
          explanation: 'If asymptomatic, this is called nutcracker phenomenon. The majority of cases of hematuria resolve within two years of observation. If treatment is desired, angioplasty and stenting of the left renal vein can be performed. The left gonadal vein is an important collateral pathway. Varicocele in males may be a clue to underlying left renal vein compression.',
          keyFact: 'Nutcracker = left renal vein between aorta + SMA. Posterior nutcracker = retroaortic renal vein between aorta + vertebral body. Varicocele/hematuria are clues.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nutcracker-syndrome',
          tags: ['nutcracker syndrome', 'renal vein', 'CTA', 'venous', 'ultrasound'],
        },
      },
      {
        id: 'ir-vascular-021',
        front: {
          question: 'What is aortic coarctation, what cardiovascular anomalies are associated, and what are the classic radiographic findings?',
        },
        back: {
          answer: 'Congenital focal narrowing of the proximal descending aorta (usually juxtaductal). Associated with: bicuspid aortic valve (75–80%), VSD, parachute mitral valve, PDA, Shone syndrome. Radiograph: "3 sign" on the left upper cardiac border, rib notching from enlarged intercostal collaterals.',
          explanation: 'The "3 sign" represents the aortic narrowing and post-stenotic dilation creating a double bulge. Adult coarctation causes upper extremity hypertension with absent/reduced lower extremity pulses. Phase-contrast MRI can quantify the hemodynamic gradient across the coarctation. Shone syndrome includes four left-sided obstructive lesions: supravalvular mitral membrane, parachute mitral valve, subaortic stenosis, and coarctation.',
          keyFact: '"3 sign" + rib notching on CXR = coarctation. Associated with bicuspid aortic valve (75–80%). Shone syndrome = 4 left-sided obstructions including coarctation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aortic-coarctation',
          tags: ['coarctation', 'aorta', 'XR', 'MRI', 'congenital'],
        },
      },
      {
        id: 'ir-vascular-022',
        front: {
          question: 'What are the GI bleeding detection thresholds for Tc-99m RBC scintigraphy, CTA, and DSA?',
        },
        back: {
          answer: 'Tc-99m RBC scintigraphy: <0.1 mL/min (most sensitive). CTA: 0.3–0.5 mL/min. DSA: 0.5–1.0 mL/min.',
          explanation: 'Despite being the most sensitive, Tc-99m RBC scintigraphy has limited anatomic localization compared to CTA. CTA and scintigraphy have comparable overall sensitivity but CTA has superior localization. Intermittent bleeding is the most common cause of false-negative CTA. CTA should be performed within 4 hours of the last bleeding episode for best yield. Standard CT protocol: non-contrast, arterial, delayed.',
          keyFact: 'Sensitivity threshold: Tc-99m (<0.1) > CTA (0.3–0.5) > DSA (0.5–1.0) mL/min. CTA better localizes bleeding; nuclear medicine more sensitive but poor anatomy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gastrointestinal-bleeding',
          tags: ['GI bleed', 'CTA', 'nuclear medicine', 'angiography', 'embolization'],
        },
      },
      {
        id: 'ir-vascular-023',
        front: {
          question: 'What is polyarteritis nodosa (PAN) and what is its classic angiographic appearance?',
        },
        back: {
          answer: 'Systemic necrotizing vasculitis of small/medium arteries causing multiple small visceral aneurysms, typically involving renal, hepatic, and mesenteric end-arterioles. Angiography: multiple small peripheral aneurysms. P-ANCA usually elevated. Treatment: steroids.',
          explanation: 'PAN is associated with CLASH conditions: Cryoglobulinemia, Leukemia, rheumatoid Arthritis, Sjögren syndrome, and Hepatitis B. The ideal imaging is invasive angiography; modern CTA can also visualize these microaneurysms. The differential for multiple renal artery aneurysms includes septic emboli, speed kidney (methamphetamine abuse), and Ehlers-Danlos.',
          keyFact: 'PAN = multiple small visceral microaneurysms on angiography. CLASH associations (hepatitis B is key). P-ANCA elevated. Treatment = steroids, NOT embolization.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/polyarteritis-nodosa',
          tags: ['PAN', 'vasculitis', 'angiography', 'mesenteric', 'renal artery'],
        },
      },
      {
        id: 'ir-vascular-024',
        front: {
          question: 'What is the DVT ultrasound examination protocol, and what are signs of acute versus chronic DVT?',
        },
        back: {
          answer: 'Protocol: greyscale compression (every 2–3 cm), color Doppler, spectral Doppler with augmentation and respiratory variation. Acute DVT: non-compressible vein, homogeneous hypoechoic thrombus. Chronic DVT: only partial compressibility, echogenic thickened walls, clot retraction, collateral veins.',
          explanation: 'The hallmark of DVT is non-compressibility. Color Doppler helps localize veins but is not required for diagnosis. Lack of augmentation (calf squeeze) suggests distal obstruction; lack of respiratory variation suggests proximal obstruction. Distinguishing acute from chronic clot can be difficult; wall echogenicity is not reliable.',
          keyFact: 'DVT hallmark = non-compressible vein. Lack of augmentation = distal obstruction. Lack of respiratory variation = proximal obstruction. Wall echogenicity is NOT reliable for acuity.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/deep-vein-thrombosis-of-the-lower-limb',
          tags: ['DVT', 'ultrasound', 'venous', 'lower extremity', 'Doppler'],
        },
      },
      {
        id: 'ir-vascular-025',
        front: {
          question: 'What is popliteal artery entrapment syndrome, who is typically affected, and how is it diagnosed and treated?',
        },
        back: {
          answer: 'Compression of the popliteal artery by an aberrant or hypertrophied medial gastrocnemius head. Affects young athletes. Diagnosed with MRA during dynamic plantar/dorsiflexion — popliteal artery occludes with plantar flexion. Treatment: surgical release of the offending muscle.',
          explanation: 'Six types exist based on the anatomic deviation. Types I and II (medial head of gastrocnemius variants) are most common. Bilateral involvement is common. MRA with dynamic imaging is the preferred modality. Angiography is for diagnosis only — not therapy. Must be distinguished from cystic adventitial disease, which is treated with surgical cyst resection.',
          keyFact: 'Popliteal entrapment = young athlete + popliteal occlusion on plantar flexion on MRA. Treated surgically. Angiography = diagnostic only.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/popliteal-artery-entrapment-syndrome',
          tags: ['popliteal entrapment', 'MRA', 'lower extremity', 'vascular', 'IR technique'],
        },
      },
    ],
  },

  {
    id: 'ir-techniques',
    label: 'IR Techniques & Tools',
    cards: [
      {
        id: 'ir-techniques-001',
        front: {
          question: 'What is the Seldinger technique and what is the difference between a sheath and a catheter with regard to French sizing?',
        },
        back: {
          answer: 'Seldinger technique: needle puncture → guidewire through needle → needle removed → catheter/sheath advanced over wire. Catheter French size = OUTER diameter (1 Fr = 0.33 mm). Sheath French size = INNER diameter (luminal), so a 6 Fr sheath can accommodate a 6 Fr catheter but is 7–8 Fr in outer diameter.',
          explanation: 'The key clinical implication is that the sheath placed in a vessel is larger than the stated French size. A 6 Fr sheath has an inner lumen of 6 Fr (2 mm) but occupies a 7–8 Fr (2.3–2.6 mm) space in the vessel. This matters for selecting access needle and planning hemostasis.',
          keyFact: 'Catheter Fr = OUTER diameter. Sheath Fr = INNER diameter. A 6 Fr sheath fits a 6 Fr catheter but has an OUTER diameter of 7–8 Fr.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/seldinger-technique',
          tags: ['IR technique', 'Seldinger', 'vascular access', 'catheter', 'angiography'],
        },
      },
      {
        id: 'ir-techniques-002',
        front: {
          question: 'What is the difference between balloon-expandable and self-expandable stents, and when is each preferred?',
        },
        back: {
          answer: 'Balloon-expandable: higher radial force on deployment, but will deform if crushed — avoid in sites prone to external compression (joints, adductor canal). Self-expandable: more flexible, trackable through tortuous vessels, preferred when anatomy is tortuous or prone to external compression. Stent oversizing: 10% for arteries, 20% for veins.',
          explanation: 'Balloon-expandable stents are preferred for precise placement in rigid structures (e.g., renal artery ostia, biliary strictures, TIPS). Self-expandable stents are preferred for longer lesions in the iliac, femoral, or subclavian arteries where compression risk exists. Drug-eluting stents deliver antiproliferative agents to reduce in-stent restenosis.',
          keyFact: 'Balloon-expandable = precision + high radial force, NOT for joint/compression zones. Self-expandable = flexible, for tortuous/compressible sites. Oversize arteries 10%, veins 20%.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/endovascular-stent',
          tags: ['stent', 'angioplasty', 'IR technique', 'vascular intervention', 'balloon'],
        },
      },
      {
        id: 'ir-techniques-003',
        front: {
          question: 'What are the two categories of embolic materials, and what is the most commonly used temporary embolic agent?',
        },
        back: {
          answer: 'Permanent: coils, plugs, particles (polyvinyl alcohol/trisacryl gelatin), liquid agents (cyanoacrylate glue, ethylene vinyl alcohol), sclerosants. Temporary: absorbable gelatin sponge (Gelfoam) — most common temporary agent, lasts 2–6 weeks.',
          explanation: 'Gelfoam is commonly used for emergent traumatic bleeding. Post-Gelfoam CT shows gas locules in embolized organs (can mimic abscess). Coils induce thrombosis via stasis and cannot be re-accessed once placed. Particles are sized in microns and used for tumor embolization (TACE) or organ-specific procedures. The coil embolization rule: coil distal then proximal to the lesion.',
          keyFact: 'Gelfoam = most common TEMPORARY embolic agent (2–6 weeks). Post-embolization gas on CT = expected finding (not abscess). Coil: distal THEN proximal to target.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gelatin-sponge-gelfoam',
          tags: ['embolization', 'Gelfoam', 'coils', 'IR technique', 'embolic agents'],
        },
      },
      {
        id: 'ir-techniques-004',
        front: {
          question: 'What is post-embolization syndrome and how is it treated?',
        },
        back: {
          answer: 'Post-embolization syndrome: pain, fever, nausea/vomiting occurring within the first 24 hours after embolization, from release of inflammatory mediators by infarcted tissue. Treatment: NSAIDs, opioids as needed, IV fluids.',
          explanation: 'Post-embolization syndrome is an expected consequence of embolization, not an indication of infection or complication. It is most common after large-volume embolizations (e.g., uterine fibroid embolization, hepatic chemoembolization). It should be distinguished from sepsis or non-target embolization, which are true complications.',
          keyFact: 'Post-embolization syndrome = pain + fever + nausea within 24 hrs = expected inflammatory response, NOT infection. Treat with NSAIDs and supportive care.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/post-embolization-syndrome',
          tags: ['embolization', 'complications', 'IR technique', 'post-procedure', 'vascular intervention'],
        },
      },
      {
        id: 'ir-techniques-005',
        front: {
          question: 'What are the SIR bleeding risk categories for IR procedures, and what INR/platelet thresholds apply to each?',
        },
        back: {
          answer: 'Low bleeding risk (e.g., angiography, IVC filter, venous access, thoracentesis/paracentesis, dialysis): INR >2.0–3.0, platelets >20×10⁹/L. High bleeding risk (e.g., ablations, TIPS, nephrostomy, cholecystostomy, catheter-directed thrombolysis): INR >1.5–1.8, platelets >50×10⁹/L.',
          explanation: 'The SIR 2019 guidelines classify procedures based on bleeding risk. High bleeding risk procedures traversing solid organs or creating new tracts require better coagulation parameters. For vitamin K antagonist reversal, options include IV vitamin K (6–12 hrs) + FFP or prothrombin complex concentrates. Andexanet alfa reverses apixaban and rivaroxaban.',
          keyFact: 'Low-risk IR: INR threshold >2–3, platelets >20. High-risk IR: INR threshold >1.5–1.8, platelets >50. TIPS and ablation = HIGH risk. Angiography and IVC filter = LOW risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/interventional-radiology',
          tags: ['bleeding risk', 'INR', 'platelets', 'IR technique', 'pre-procedure'],
        },
      },
      {
        id: 'ir-techniques-006',
        front: {
          question: 'What is the Barbeau test, when is it used, and what result contraindicates transradial catheterization?',
        },
        back: {
          answer: 'Barbeau test: assesses collateral hand circulation before radial artery access. Pulse oximeter on the thumb; evaluate plethysmography waveform before and after manual radial occlusion. Type D waveform (absent, non-recruitable flow) contraindicates transradial catheterization.',
          explanation: 'The Barbeau test is an alternative to the Allen\'s test. Types A and B (normal or mildly dampened with recovery) permit radial access. Type C shows dampening with recovery >2 minutes. Type D (absent or non-recruitable) = no collateral ulnar flow = contraindication. The reverse Barbeau test uses the 5th finger oximeter to assess ulnar artery access.',
          keyFact: 'Barbeau type D (no flow, non-recruitable) = contraindication to transradial access. Types A/B = safe. Used instead of Allen\'s test for radial artery pre-procedure assessment.',
          tags: ['transradial access', 'Barbeau test', 'radial artery', 'IR technique', 'vascular access'],
        },
      },
      {
        id: 'ir-techniques-007',
        front: {
          question: 'What is the correct position to place a patient suspected of air embolism during a vascular procedure, and why?',
        },
        back: {
          answer: 'Left lateral decubitus (left side down) position. This keeps the air bubble antidependent in the right heart, preventing it from entering the pulmonary artery. Administer 100% oxygen. Consider catheter aspiration for large air bubbles.',
          explanation: 'Air embolism is a rare but life-threatening complication of venous access, particularly during insertion of a catheter into a peel-away sheath. Air enters the low-pressure venous system. Placing the patient left-side-down causes the air to float away from the right ventricular outflow tract, reducing the risk of pulmonary air lock.',
          keyFact: 'Air embolism → LEFT lateral decubitus (left side DOWN) + 100% O₂. Air floats away from pulmonary outflow in right heart. Most dangerous step = catheter insertion into peel-away sheath.',
          tags: ['air embolism', 'IR complication', 'vascular access', 'IR technique', 'emergency'],
        },
      },
      {
        id: 'ir-techniques-008',
        front: {
          question: 'What catheter shapes are used for basic visceral selection versus difficult bronchial, intercostal, and lumbar artery selection?',
        },
        back: {
          answer: 'Basic visceral selection: C2 and SOS (reverse curved-tip catheters). Difficult selections (bronchial, intercostal, lumbar): Mickelson catheter (must be reformed in a large vessel). Stable difficult selections: Simmons catheter (also requires reforming).',
          explanation: 'High-flow (flush) catheters (pigtail, OmniFlush) have multiple sideholes and are used for large vessel angiography (aorta, IVC). Selective catheters have a single end-hole and are used for vessel-specific injection. Angled-tip catheters (Berenstein, Kumpe, MPA) are simpler and used for straightforward selections.',
          keyFact: 'Pigtail = flush catheter for aorta/IVC. C2/SOS = basic visceral selection. Mickelson/Simmons = difficult visceral selections (bronchial, intercostal). Simmons requires reforming.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/interventional-radiology-catheters',
          tags: ['catheter', 'angiography', 'IR technique', 'vascular access', 'selective catheterization'],
        },
      },
    ],
  },

  {
    id: 'ir-oncology',
    label: 'Oncologic Intervention',
    cards: [
      {
        id: 'ir-oncology-001',
        front: {
          question: 'What is transarterial chemoembolization (TACE) and what are its indications?',
          hint: 'Think hepatocellular carcinoma and dual blood supply.',
        },
        back: {
          answer: 'TACE delivers chemotherapy (doxorubicin, cisplatin, mitomycin C) mixed with Lipiodol and embolic particles directly to a tumor via its feeding artery, followed by embolization. Primary indication: unresectable hepatocellular carcinoma (HCC), especially Barcelona Clinic Liver Cancer (BCLC) intermediate stage (B).',
          explanation: 'HCC is uniquely suited to TACE because it is supplied predominantly by the hepatic artery (normal liver is 75% portal, 25% arterial). TACE causes both direct chemotoxicity and ischemia. Conventional TACE (cTACE) uses Lipiodol + chemotherapy. Drug-eluting bead TACE (DEB-TACE) uses microspheres loaded with doxorubicin. Contraindications include Child-Pugh C cirrhosis, biliary obstruction, portal vein occlusion.',
          keyFact: 'TACE for HCC: hepatic artery = tumor supply (vs. portal vein for normal liver). BCLC intermediate stage (B). Contraindicated with Child-Pugh C or portal vein occlusion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transarterial-chemoembolisation',
          tags: ['TACE', 'HCC', 'embolization', 'oncology', 'hepatic artery'],
        },
      },
      {
        id: 'ir-oncology-002',
        front: {
          question: 'What is the difference between radiofrequency ablation (RFA) and microwave ablation (MWA), and what are the advantages of MWA?',
        },
        back: {
          answer: 'RFA uses alternating current (electrical energy) to generate ionic friction and heat. MWA uses electromagnetic energy to agitate water molecules and generate heat. MWA advantages: faster ablation, larger ablation zones, less susceptible to heat sink effect from large adjacent vessels, not impeded by charred/desiccated tissue.',
          explanation: 'Heat sink effect occurs when blood flow in a large vessel carries heat away from the ablation zone, resulting in incomplete ablation of tumor adjacent to large vessels. MWA is less affected by this because it generates heat actively rather than relying on ionic heating. Both are used for HCC, renal cell carcinoma, lung tumors, and liver metastases.',
          keyFact: 'MWA > RFA for heat sink effect (near large vessels). MWA = larger, faster ablation. RFA limited by charred tissue and heat sink. Both used for HCC, RCC, lung mets.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/microwave-ablation',
          tags: ['ablation', 'RFA', 'MWA', 'HCC', 'oncology'],
        },
      },
      {
        id: 'ir-oncology-003',
        front: {
          question: 'What is cryoablation and what are its specific advantages over thermal ablation modalities?',
        },
        back: {
          answer: 'Cryoablation uses compressed argon gas to freeze tissue, creating an ice ball that destroys cells by ice crystal formation and osmotic injury. Key advantage: the ablation zone (ice ball) is directly visible on CT/MRI and ultrasound, enabling real-time monitoring. Also less painful during procedure, and better preserves adjacent structures like bile ducts and nerves.',
          explanation: 'Cryoablation is particularly useful for renal tumors (RCC), lung lesions adjacent to sensitive structures, and musculoskeletal tumors. The main complication is cryoshock (systemic inflammatory response after large ablations). Helium gas is used for rewarming in the freeze-thaw-freeze cycle.',
          keyFact: 'Cryoablation = ice ball directly visible on CT/MRI/US (the key advantage). Used for RCC, MSK tumors, structures needing preservation (bile duct, nerve). Risk: cryoshock with large ablations.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cryoablation',
          tags: ['cryoablation', 'ablation', 'RCC', 'oncology', 'IR technique'],
        },
      },
      {
        id: 'ir-oncology-004',
        front: {
          question: 'What is radioembolization (TARE/SIRT), which isotope is used, and how does it differ from TACE?',
        },
        back: {
          answer: 'Radioembolization (TARE/SIRT): intraarterial delivery of yttrium-90 (Y-90) microspheres to deliver internal radiation to liver tumors. Unlike TACE, minimal embolization effect — primarily radiation therapy. Used for both HCC and liver metastases (especially colorectal). Can be used in portal vein thrombosis (unlike TACE).',
          explanation: 'Y-90 is a beta emitter with a half-life of ~64 hours and penetration depth of ~2.5 mm. Pre-treatment mapping with Tc-99m MAA (macroaggregated albumin) is required to assess hepatopulmonary shunting and ensure acceptable lung dosimetry (<30 Gy). Pulmonary fibrosis from shunting is the major dose-limiting toxicity.',
          keyFact: 'Y-90 TARE: beta radiation to liver tumors. Can use with portal vein thrombosis (unlike TACE). Pre-treatment Tc-99m MAA lung shunt fraction study mandatory. Lung dose limit = 30 Gy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/selective-internal-radiation-therapy',
          tags: ['Y-90', 'radioembolization', 'SIRT', 'HCC', 'oncology', 'nuclear medicine'],
        },
      },
      {
        id: 'ir-oncology-005',
        front: {
          question: 'What is the modified Response Evaluation Criteria in Solid Tumors (mRECIST) and why is it used for HCC assessment after locoregional therapy?',
        },
        back: {
          answer: 'mRECIST measures only the enhancing (viable) component of a tumor rather than the total tumor diameter. Used for HCC post-TACE/ablation because Lipiodol deposition and necrosis increase tumor size on imaging despite treatment response. Complete response = no arterial enhancement. Partial response = ≥30% decrease in sum of viable tumor diameters.',
          explanation: 'Standard RECIST criteria assess total tumor size and are unreliable for HCC treated with TACE because the Lipiodol in the tumor and tumor necrosis can falsely appear as "increase in size." mRECIST avoids this by tracking only the enhancing (viable) component using multiphase CT or MRI.',
          keyFact: 'mRECIST = only enhancing (viable) tumor is measured, not total tumor size. Used post-TACE/ablation for HCC. Complete response = NO arterial enhancement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/modified-recist-criteria-for-hcc',
          tags: ['mRECIST', 'HCC', 'TACE', 'response assessment', 'oncology'],
        },
      },
      {
        id: 'ir-oncology-006',
        front: {
          question: 'What is the safety margin required around a tumor during image-guided ablation, and what CT/MRI finding confirms adequate ablation?',
        },
        back: {
          answer: 'A 5–10 mm ablation margin beyond the tumor margin is required to ensure complete tumor destruction including microscopic extension. Adequate ablation on CT/MRI: ablation zone completely encompasses the tumor with a circumferential non-enhancing margin ≥5 mm. Residual/recurrent enhancement at the periphery = incomplete ablation.',
          explanation: 'The "ablation zone" typically appears as an area of low attenuation on CT or T1 hyperintensity on MRI immediately post-procedure due to coagulative necrosis and hemorrhage. Peripheral rim enhancement at 24–48 hours is expected (hyperemic reaction) but should not be confused with tumor enhancement (which has arterial-phase nodular enhancement). Follow-up imaging at 1 month assesses technical success.',
          keyFact: '5–10 mm ablation margin = technical success threshold. Peripheral rim enhancement immediately post-ablation = expected hyperemia (not residual tumor). Nodular arterial-phase enhancement = recurrence.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatic-ablation',
          tags: ['ablation', 'HCC', 'RCC', 'oncology', 'CT'],
        },
      },
      {
        id: 'ir-oncology-007',
        front: {
          question: 'What is bronchial artery embolization (BAE) and what are its major risks?',
        },
        back: {
          answer: 'BAE is catheter-directed embolization of bronchial arteries for life-threatening hemoptysis (>150–200 mL/24 hrs or hemodynamically significant). Most common cause in adults: TB, bronchiectasis, aspergilloma, lung cancer. Major risks: non-target embolization to the anterior spinal artery of Adamkiewicz → spinal cord ischemia/paralysis.',
          explanation: 'The bronchial arteries typically arise from the descending thoracic aorta at the T5–T6 level. In approximately 5% of patients, the anterior spinal artery (artery of Adamkiewicz) arises from a common trunk with a bronchial artery. Identification and avoidance of the spinal artery is paramount. Gelfoam or PVA particles are used — coils should be avoided as they prevent re-access.',
          keyFact: 'BAE for massive hemoptysis. Biggest risk: anterior spinal artery injury (arises from T9–L2, sometimes shares origin with bronchial artery) → paraplegia. Use particles, not coils (to allow re-access).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bronchial-artery-embolisation',
          tags: ['bronchial artery', 'embolization', 'hemoptysis', 'oncology', 'IR technique'],
        },
      },
      {
        id: 'ir-oncology-008',
        front: {
          question: 'What is uterine fibroid embolization (UFE), what arteries are embolized, and what are the key complications to know?',
        },
        back: {
          answer: 'UFE: bilateral uterine artery embolization with microspheres/particles to infarct fibroids. Complications: post-embolization syndrome (expected), premature menopause (1–2%), fibroid expulsion (submucosal fibroids), non-target embolization to ovaries, uterine infection/necrosis.',
          explanation: 'UFE is a uterine-sparing alternative to myomectomy or hysterectomy. The uterine arteries arise from the anterior division of the internal iliac artery. Bilateral embolization is required as fibroids have bilateral supply. Submucosal fibroids are at risk of expulsion vaginally after UFE, which is a unique complication requiring management.',
          keyFact: 'UFE = bilateral uterine artery embolization (anterior division internal iliac). Premature menopause 1–2%. Submucosal fibroid expulsion = unique complication. Non-target ovarian embolization risks infertility.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/uterine-artery-embolisation',
          tags: ['UFE', 'uterine artery', 'embolization', 'fibroid', 'oncology'],
        },
      },
    ],
  },

  {
    id: 'ir-biliary',
    label: 'Biliary & GI Intervention',
    cards: [
      {
        id: 'ir-biliary-001',
        front: {
          question: 'What is a TIPS (transjugular intrahepatic portosystemic shunt), what are its primary indications, and what serious complication must be monitored?',
        },
        back: {
          answer: 'TIPS: percutaneous creation of an intrahepatic channel (usually PTFE-covered stent) between the hepatic vein and portal vein to decompress portal hypertension. Indications: variceal bleeding refractory to endoscopic therapy, refractory ascites. Serious complication: hepatic encephalopathy (worsens with too low a portal pressure gradient).',
          explanation: 'TIPS reduces the portal pressure gradient to <12 mmHg to reduce variceal bleeding risk. The target portosystemic gradient is 8–12 mmHg. Hepatic encephalopathy occurs in 20–30% because ammonia bypasses the liver. TIPS is contraindicated with severe hepatic failure (Child-Pugh C, MELD >18), right heart failure, polycystic liver disease, and pulmonary hypertension.',
          keyFact: 'TIPS target portosystemic gradient: 8–12 mmHg. Hepatic encephalopathy = major complication (20–30%). Contraindicated: severe liver failure (Child-Pugh C, MELD >18), right heart failure.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transjugular-intrahepatic-portosystemic-shunt-tips',
          tags: ['TIPS', 'portal hypertension', 'venous intervention', 'biliary', 'IR technique'],
        },
      },
      {
        id: 'ir-biliary-002',
        front: {
          question: 'What is percutaneous transhepatic cholangiography (PTC) and what are the indications and major risks?',
        },
        back: {
          answer: 'PTC: fluoroscopy-guided needle puncture of intrahepatic bile ducts to opacify the biliary tree and allow drainage or stenting. Indications: biliary obstruction not amenable to ERCP (failed ERCP, surgically altered anatomy, hilar obstruction). Major risks: biliary sepsis (cholangitis), bile leak, bleeding, pneumothorax.',
          explanation: 'PTC allows access to the biliary tree from the right or left lobe for internal-external drainage or metal stent placement. Right-sided access is more common. Prophylactic antibiotics are mandatory (dirty procedure). If the biliary system is decompressed before the procedure (e.g., external drain already in place), risk of cholangitis is reduced.',
          keyFact: 'PTC = image-guided transhepatic biliary access. Mandatory pre-procedural antibiotics (dirty procedure). Risk of biliary sepsis/cholangitis is highest complication. Hilar obstruction typically requires bilateral access.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/percutaneous-transhepatic-cholangiography',
          tags: ['PTC', 'biliary', 'cholangitis', 'IR technique', 'fluoroscopy'],
        },
      },
      {
        id: 'ir-biliary-003',
        front: {
          question: 'What is a biliary drain and how do internal-external drains differ from external-only drains?',
        },
        back: {
          answer: 'External-only drain: catheter tip above the biliary obstruction — bile drains only externally. Internal-external drain: catheter crosses the obstruction into the bowel, allowing bile to drain both internally (into the bowel) and externally through the catheter. Internal drainage is preferred as it restores normal bile flow and reduces electrolyte loss.',
          explanation: 'External drains are placed when the obstruction cannot be crossed initially (e.g., complete obstruction or failed initial crossing). After a few days of decompression, a second attempt to cross the stricture is often successful. Bile production is ~1 L/day; external-only drainage can cause significant fluid and electrolyte imbalance.',
          keyFact: 'Internal-external drain = crosses obstruction into bowel = physiologic bile flow + reduced electrolyte loss. External-only = initial step when obstruction cannot be crossed.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/percutaneous-biliary-drainage',
          tags: ['biliary drainage', 'PTC', 'biliary', 'IR technique', 'fluoroscopy'],
        },
      },
      {
        id: 'ir-biliary-004',
        front: {
          question: 'What is the most common cause of lower GI bleeding in older adults, and what is the interventional approach?',
        },
        back: {
          answer: 'Diverticulosis is the most common cause of lower GI bleeding in older adults. Most patients respond to conservative management. For refractory bleeding: angiography with superselective embolization (coils preferred) or vasopressin infusion.',
          explanation: 'Diverticular bleeding is arterial, resulting from erosion of the vasa recta at the dome of the diverticulum. It can be massive and sudden but often stops spontaneously. CTA with active extravasation identifies the bleeding site, guiding superselective embolization. Vasopressin is less durable and associated with ischemic side effects.',
          keyFact: 'Diverticulosis = most common lower GI bleed in elderly. Arterial (vasa recta). Superselective coil embolization is preferred over vasopressin. Most resolve spontaneously.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/diverticular-disease',
          tags: ['GI bleed', 'diverticulosis', 'embolization', 'angiography', 'colon'],
        },
      },
      {
        id: 'ir-biliary-005',
        front: {
          question: 'What is median arcuate ligament syndrome (MALS), who is typically affected, and why is angioplasty ineffective?',
        },
        back: {
          answer: 'MALS: compression of the celiac artery by the median arcuate ligament (diaphragmatic crus), worsening with expiration. Affects young, thin women. CTA/MRA: hook-shaped proximal celiac stenosis with post-stenotic dilation. Angioplasty fails because the mechanical extrinsic compression recurs — definitive treatment is surgical release of the ligament.',
          explanation: 'MALS is often asymptomatic. When symptomatic, patients present with crampy postprandial pain. Stents are also controversial due to high fracture rates from repeated respiratory compression. Dynamic expiratory imaging confirms the diagnosis by showing worsening stenosis. Collaterals develop from the GDA to the SMA.',
          keyFact: 'MALS = celiac artery hook sign on CTA, worsens with expiration. Young thin women. Angioplasty/stents FAIL (external compression). Surgical release = definitive treatment.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/median-arcuate-ligament-syndrome',
          tags: ['MALS', 'celiac artery', 'CTA', 'vascular', 'abdominal'],
        },
      },
      {
        id: 'ir-biliary-006',
        front: {
          question: 'What is acute mesenteric ischemia, what is the most common cause, and what CT findings distinguish arterial from venous causes?',
        },
        back: {
          answer: 'Acute mesenteric ischemia: inadequate bowel blood supply causing ischemia/infarction. Most common cause: arterial SMA embolism (often from cardiac source/AFib). CT findings of arterial ischemia: SMA filling defect, bowel wall thinning, pneumatosis, portal venous gas. Venous ischemia: SMV/portal vein thrombosis, bowel wall thickening, mesenteric edema.',
          explanation: 'Pneumatosis intestinalis and portal venous gas are late findings indicating transmural infarction. Nonocclusive mesenteric ischemia (NOMI) shows diffusely attenuated/small mesenteric arteries on CTA (vasospasm) with patent arterial tree — mortality 70–100%. A SMA embolism distal to the middle colic artery is especially dangerous as distal collaterals are limited.',
          keyFact: 'Most common acute mesenteric ischemia cause = SMA embolism (AFib). Pneumatosis + portal venous gas = transmural infarction (late, dire). NOMI = patent vessels + diffuse vasospasm = 70–100% mortality.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acute-mesenteric-ischaemia',
          tags: ['mesenteric ischemia', 'SMA', 'CT', 'CTA', 'abdominal'],
        },
      },
    ],
  },

  {
    id: 'ir-gu',
    label: 'Genitourinary IR',
    cards: [
      {
        id: 'ir-gu-001',
        front: {
          question: 'What are the indications for percutaneous nephrostomy (PCN) and what is the principal risk?',
        },
        back: {
          answer: 'PCN indications: obstructive uropathy (urosepsis, acute renal failure, stone, tumor, ureteral injury). Also for: antegrade ureteral stent placement, access for nephroscopy, renal access for stone treatment. Principal risk: urosepsis — PCN is a dirty procedure requiring pre-procedure antibiotics.',
          explanation: 'PCN provides emergency renal decompression. Access is typically through a posterior or posterolateral approach under ultrasound guidance, targeting the posterior calyx in the lower pole. The collecting system is punctured in the Brödel avascular zone to minimize bleeding. For an infected obstructed kidney, PCN is urgent even with coagulopathy, as sepsis is immediately life-threatening.',
          keyFact: 'PCN = dirty procedure → mandatory antibiotics. Urosepsis is the key risk. Target: posterior lower pole calyx via Brödel avascular zone. Infected obstructed kidney = urgency overrides coagulopathy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/percutaneous-nephrostomy',
          tags: ['nephrostomy', 'GU', 'urosepsis', 'IR technique', 'fluoroscopy'],
        },
      },
      {
        id: 'ir-gu-002',
        front: {
          question: 'What is a varicocele, why are most left-sided, and what warrants urgent workup for a right-sided varicocele?',
        },
        back: {
          answer: 'Varicocele: dilation of the pampiniform venous plexus (>2 mm) from incompetent gonadal vein valves. Left-sided predominance because the left gonadal vein drains into the left renal vein at a 90° angle (vs. right gonadal vein draining directly into the IVC at an acute angle). Isolated right varicocele → workup for retroperitoneal obstructing mass.',
          explanation: 'Varicocele is a common and treatable cause of male infertility. Treatment is with coil embolization of the gonadal vein or surgical ligation — outcomes are equivalent. Ultrasound: dilated pampiniform plexus with a bag-of-worms appearance, worsening with Valsalva. Secondary varicocele (from obstruction) is a different entity requiring investigation.',
          keyFact: 'Varicocele mostly left-sided (left gonadal vein → left renal vein at right angle). Right-sided isolated varicocele = exclude retroperitoneal mass. Treat: coil embolization or surgical ligation (equivalent outcomes).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/varicocele',
          tags: ['varicocele', 'GU', 'embolization', 'ultrasound', 'vascular'],
        },
      },
      {
        id: 'ir-gu-003',
        front: {
          question: 'What is pelvic congestion syndrome, how is it diagnosed, and how is it treated?',
        },
        back: {
          answer: 'Pelvic congestion syndrome: chronic pelvic pain from dilated pelvic and ovarian veins due to incompetent ovarian vein valves or venous obstruction. Diagnosed with pelvic ultrasound (dilated veins >5 mm with reversed flow on Valsalva), CT, MRI, or venography. Treatment: ovarian vein embolization with coils or sclerosants.',
          explanation: 'Pelvic congestion is an underrecognized cause of chronic pelvic pain in multiparous women. The ovarian veins are the primary target for embolization. Bilateral ovarian vein embolization is often required. May be associated with May-Thurner syndrome as a secondary cause (venous obstruction leads to reflux).',
          keyFact: 'Pelvic congestion = dilated ovarian/pelvic veins + chronic pelvic pain in multiparous women. Venography shows reversed flow. Treat with bilateral ovarian vein embolization.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pelvic-congestion-syndrome',
          tags: ['pelvic congestion', 'ovarian vein', 'embolization', 'GU', 'venous'],
        },
      },
      {
        id: 'ir-gu-004',
        front: {
          question: 'What are the AAST OIS grades for renal trauma and how do they guide management?',
        },
        back: {
          answer: 'Grade I–II: minor contusion/laceration, no collecting system involvement → conservative management. Grade III: laceration <1 cm depth, no collecting system involvement → conservative. Grade IV: deep laceration to collecting system OR renal vascular injury with contained hemorrhage → often IR embolization. Grade V: shattered kidney or renal hilum avulsion → surgery.',
          explanation: 'Grade IV is the key grade where IR intervention (superselective coil embolization for vascular injuries) plays a major role. CT finding of grade IV: extravasation of opacified urine on delayed phase (collecting system injury) or contained vascular extravasation. Indications for IR embolization: active extravasation, dissection, or pseudoaneurysm.',
          keyFact: 'Renal trauma: Grade IV = collecting system injury (urine extravasation on delayed CT) OR contained vascular injury → IR embolization. Grade V (shattered kidney) = surgery. Hematuria present regardless of grade.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aast-organ-injury-scale',
          tags: ['renal trauma', 'GU', 'AAST', 'embolization', 'CT'],
        },
      },
      {
        id: 'ir-gu-005',
        front: {
          question: 'What is a duplicated IVC and how does it affect IVC filter placement?',
        },
        back: {
          answer: 'Duplicated IVC: persistence of both left and right supracardinal veins. Clue on cavography: absence of iliac vein inflow from the contralateral side. Management for filter placement: either a single filter placed above the IVC confluence OR a filter in each IVC limb.',
          explanation: 'If a single filter is placed below the IVC confluence in a duplicated IVC, a clot from the left iliac system can circumnavigate the filter by draining into the left IVC, bypassing the filter. Duplicated IVC is associated with congenital heart disease. If pre-procedural CT is available, the duplication is identified before cavography.',
          keyFact: 'Duplicated IVC: place filter ABOVE the confluence OR one filter in each limb. Cavography clue: absent contralateral iliac inflow. Associated with congenital heart disease.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/inferior-vena-cava-duplication',
          tags: ['IVC filter', 'duplicated IVC', 'vascular anatomy', 'venous intervention', 'GU'],
        },
      },
    ],
  },

  {
    id: 'ir-venous',
    label: 'Venous & Lymphatic Intervention',
    cards: [
      {
        id: 'ir-venous-001',
        front: {
          question: 'What are the indications for IVC filter placement, and what are the filter-related complications?',
        },
        back: {
          answer: 'Absolute indications: DVT or PE with contraindication to anticoagulation, or failure of anticoagulation. Relative: massive PE with poor cardiopulmonary reserve, free-floating proximal DVT. Complications: filter migration, perforation of IVC, IVC thrombosis, filter fracture, retrieval failure.',
          explanation: 'Retrievable filters should be removed when the indication for placement has resolved and anticoagulation can be resumed. The longer a filter remains, the higher the risk of endothelialization and retrieval failure. IVC filter placement itself is a low bleeding risk procedure (low INR/platelet thresholds). Duplicated or left-sided IVC requires modified filter strategy.',
          keyFact: 'IVC filter = DVT/PE + anticoagulation contraindication OR failure. Remove retrievable filters when anticoagulation can be resumed. Complications: migration, IVC thrombosis, perforation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/inferior-vena-cava-filter',
          tags: ['IVC filter', 'DVT', 'PE', 'venous intervention', 'IR technique'],
        },
      },
      {
        id: 'ir-venous-002',
        front: {
          question: 'What is SVC syndrome, what causes it, and what is the classic cross-sectional imaging finding in the abdomen?',
        },
        back: {
          answer: 'SVC syndrome: acute obstruction of the SVC causing facial and upper extremity edema with cyanosis. Most common causes: thoracic malignancy compression, catheter-associated thrombosis, mediastinal fibrosis (post-histoplasmosis). Classic abdominal CT finding: increased enhancement of hepatic segment IVa from collateral opacification via the vein of Sappey.',
          explanation: 'The vein of Sappey drains the liver near the falciform ligament and communicates with the internal thoracic veins, which become collateral pathways in SVC obstruction. This produces the characteristic blush/enhancement of segment IVa of the liver. Chronic SVC syndrome may be asymptomatic. Treatment includes stenting for malignant SVC obstruction.',
          keyFact: 'SVC syndrome → hepatic segment IVa hyperenhancement (vein of Sappey collateral). Most common cause: malignancy. Chronic SVC obstruction → facial edema improving with standing.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/superior-vena-cava-syndrome',
          tags: ['SVC syndrome', 'venous', 'CT', 'collateral', 'intervention'],
        },
      },
      {
        id: 'ir-venous-003',
        front: {
          question: 'What is a left-sided (persistent left) SVC, how common is it, and where does it drain?',
        },
        back: {
          answer: 'Left-sided SVC: persistence of the left anterior cardinal vein (normally regresses). Most common congenital venous anomaly in the chest (0.5% of general population, 4% of congenital heart disease). Usually drains into the right atrium via the coronary sinus. Rarely drains directly into the left atrium (right-to-left shunt).',
          explanation: 'A left-sided SVC is most often an incidental finding. On imaging, it appears as a vascular structure to the left of the aortic arch that drains into the coronary sinus. Clinically significant when: it drains into the left atrium (causes cyanosis), or when a central venous catheter is inserted (catheter courses left of midline into coronary sinus).',
          keyFact: 'Left-sided SVC = most common congenital chest venous anomaly. Drains via coronary sinus → right atrium (usually benign). Drains to left atrium = right-to-left shunt (rare, causes cyanosis). 4% with CHD.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/persistent-left-superior-vena-cava',
          tags: ['left SVC', 'congenital', 'CT', 'venous', 'cardiac'],
        },
      },
      {
        id: 'ir-venous-004',
        front: {
          question: 'What are the sclerosant agents used in IR and what conditions are they used to treat?',
        },
        back: {
          answer: 'Sclerosants: sodium tetradecyl sulfate (STS), polidocanol, ethanol. Mechanism: damage endothelial cells → vessel sclerosis and shrinkage over weeks. Used for: varicose veins, venous/lymphatic malformations, varicoceles, and smaller varicose veins.',
          explanation: 'Foam sclerotherapy (sclerosant mixed with air/CO2 to create foam) is widely used for varicose veins — the foam displaces blood, increasing contact time with the endothelium. Ethanol is the most potent sclerosant, reserved for AVMs and lymphatic malformations but with higher complication risk (necrosis, hemolysis). Sclerosants are the treatment of choice for venous malformations.',
          keyFact: 'Sclerosants (STS, polidocanol, ethanol) = endothelial destruction → vessel shrinkage. Ethanol = most potent, highest complication risk. Foam sclerotherapy for varicose veins displaces blood for longer contact.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sclerotherapy',
          tags: ['sclerotherapy', 'venous malformation', 'varicose veins', 'IR technique', 'embolization'],
        },
      },
      {
        id: 'ir-venous-005',
        front: {
          question: 'What is catheter-directed thrombolysis (CDT) and what are its risks compared to systemic thrombolysis?',
        },
        back: {
          answer: 'CDT: direct infusion of thrombolytic agent (tPA) through a catheter placed within the thrombus. Advantages over systemic thrombolysis: lower dose requirement, higher local concentration, lower systemic bleeding risk. Major risks: bleeding (including cerebral hemorrhage), distal embolization, reperfusion syndrome.',
          explanation: 'CDT is used for DVT (especially ilio-femoral to prevent post-thrombotic syndrome), pulmonary embolism, and arterial thromboembolic occlusion. The catheter tip is positioned within the clot using a multi-sidehole infusion catheter. Thrombolysis is a high-bleeding-risk IR procedure requiring more stringent coagulation parameters. Absolute contraindications include active intracranial pathology or recent CNS surgery.',
          keyFact: 'CDT = catheter within clot → local tPA → lower systemic dose vs IV thrombolysis. Highest risk: cerebral hemorrhage. High-risk IR procedure requiring INR <1.5–1.8 and platelets >50.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/catheter-directed-thrombolysis',
          tags: ['thrombolysis', 'CDT', 'DVT', 'venous intervention', 'IR technique'],
        },
      },
    ],
  },

  {
    id: 'ir-msk',
    label: 'MSK & Spine IR',
    cards: [
      {
        id: 'ir-msk-001',
        front: {
          question: 'What is vertebroplasty versus kyphoplasty, and what are the indications and contraindications?',
        },
        back: {
          answer: 'Vertebroplasty: injection of bone cement (PMMA) into a vertebral body under fluoroscopy. Kyphoplasty: balloon inflation in the vertebral body first (creates cavity, restores height) then cement injection. Indication: painful osteoporotic or pathologic vertebral compression fracture refractory to conservative management. Contraindication: posterior wall disruption with retropulsion of fragments into the canal, active infection, coagulopathy.',
          explanation: 'Both procedures aim to stabilize fractured vertebrae and reduce pain. Kyphoplasty may partially restore vertebral height and has lower cement extravasation risk due to lower injection pressure. Cement extravasation (into the canal or foramina) is the major complication. Newer evidence has questioned efficacy of vertebroplasty vs. sham procedures for osteoporotic fractures, but it remains in practice for select patients.',
          keyFact: 'Vertebroplasty = cement into vertebral body (higher extravasation risk). Kyphoplasty = balloon first → lower pressure → lower extravasation risk. Contraindicated if posterior wall disruption (spinal canal retropulsion).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/vertebroplasty',
          tags: ['vertebroplasty', 'kyphoplasty', 'spine', 'MSK', 'fluoroscopy'],
        },
      },
      {
        id: 'ir-msk-002',
        front: {
          question: 'What is image-guided tumor ablation in bone (osteoid osteoma), and what modality is used for planning and guidance?',
        },
        back: {
          answer: 'CT-guided radiofrequency ablation (RFA) is the treatment of choice for osteoid osteoma. CT provides precise identification of the nidus and real-time guidance for probe placement within the nidus. Success rate >90%. Less invasive than surgical curettage with equivalent outcomes.',
          explanation: 'Osteoid osteoma is a painful benign cortical bone lesion with a central nidus (<2 cm). It classically causes nocturnal pain relieved by aspirin/NSAIDs. RFA destroys the nidus by heat. On CT, the nidus appears as a small lucency surrounded by reactive cortical thickening. Ablation must target the nidus precisely to achieve cure.',
          keyFact: 'Osteoid osteoma = CT-guided RFA of the nidus = treatment of choice. >90% success. Nidus on CT = small lucency in cortical bone with surrounding sclerosis. Classic: nocturnal pain relieved by aspirin.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteoid-osteoma',
          tags: ['osteoid osteoma', 'RFA', 'CT', 'MSK', 'ablation'],
        },
      },
      {
        id: 'ir-msk-003',
        front: {
          question: 'What is hypothenar hammer syndrome and what are the classic history and imaging findings?',
        },
        back: {
          answer: 'Repetitive trauma to the ulnar artery over the hamate bone → intimal injury, thrombosis, aneurysm, or pseudoaneurysm. Classic history: jackhammer operator with ischemia of the 4th and 5th digits. CTA/MRA: corkscrew/tortuous distal ulnar artery at the hook of the hamate with aneurysmal dilation and distal embolic occlusions.',
          explanation: 'The distal ulnar artery is uniquely vulnerable as it crosses the hamate with minimal soft tissue protection (Guyon\'s canal). Distal emboli cause digital ischemia. Ultrasound is the initial modality; CTA or MRA with 3D reconstruction for treatment planning. Treatment is typically surgical, as there is often vessel wall injury not apparent on imaging.',
          keyFact: 'Hypothenar hammer = ulnar artery over hamate → corkscrew appearance on CTA. 4th/5th digit ischemia. Jackhammer operators at risk. Treatment: surgical (not endovascular).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hypothenar-hammer-syndrome',
          tags: ['hypothenar hammer', 'ulnar artery', 'CTA', 'upper extremity', 'vascular'],
        },
      },
    ],
  },

  {
    id: 'ir-neuro',
    label: 'Neuro IR & Access Devices',
    cards: [
      {
        id: 'ir-neuro-001',
        front: {
          question: 'What is the artery of Adamkiewicz, where does it typically arise, and why is it critical in aortic and bronchial interventions?',
        },
        back: {
          answer: 'The artery of Adamkiewicz (great radicular artery) is the dominant blood supply to the anterior spinal cord. It typically arises from a left posterior intercostal or lumbar artery between T9 and L2 (most commonly T10–T12). Critical because inadvertent embolization (during bronchial artery embolization or thoracic aortic repair) can cause anterior spinal cord ischemia and paraplegia.',
          explanation: 'This artery supplies the anterior spinal cord via the anterior spinal artery. It shares a common origin with a bronchial artery in approximately 5% of cases, creating a spinal cord ischemia risk during bronchial artery embolization. In thoracic EVAR, coverage of its origin by the graft is a risk for spinal cord ischemia — managed with CSF drainage.',
          keyFact: 'Artery of Adamkiewicz = dominant anterior spinal cord supply, arises T9–L2 (usually left side, T10-T12). Sacrifice → paraplegia. TEVAR risk managed with CSF drainage. Shares origin with bronchial artery in 5%.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/artery-of-adamkiewicz',
          tags: ['artery of Adamkiewicz', 'spinal cord', 'bronchial artery', 'TEVAR', 'anatomy'],
        },
      },
      {
        id: 'ir-neuro-002',
        front: {
          question: 'What are the types of central venous access devices, and how do PICCs, ports, and tunneled catheters differ in terms of indication and longevity?',
        },
        back: {
          answer: 'PICC (peripherally inserted central catheter): inserted in antecubital/upper arm vein, tip in SVC/CAJ — for weeks to months of IV therapy. Tunneled catheter (e.g., Hickman, Broviac): surgically tunneled subcutaneous tract, cuffed — for months to years (chemotherapy, long-term IV access). Implanted port: subcutaneous reservoir with catheter — years of intermittent access (requires Huber needle).',
          explanation: 'The catheter tip should be positioned at the cavoatrial junction (CAJ) or lower SVC on CXR — identified at the right-sided tracheobronchial angle. A tip too distal (right atrium) risks arrhythmia; too proximal (subclavian) risks thrombosis. Ports are preferred for intermittent access (e.g., chemotherapy cycles); tunneled catheters are better for daily access (hemodialysis, TPN).',
          keyFact: 'Central catheter tip = cavoatrial junction on CXR (right tracheobronchial angle). Port = best for intermittent long-term access. Tunneled catheter = best for daily long-term access. PICC = weeks to months.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/central-venous-catheter',
          tags: ['central venous access', 'PICC', 'port', 'tunneled catheter', 'IR technique'],
        },
      },
      {
        id: 'ir-neuro-003',
        front: {
          question: 'What is a gastrostomy tube (G-tube) and what is the difference between a PEG and an IR-placed gastrostomy?',
        },
        back: {
          answer: 'Gastrostomy: feeding tube placed into the stomach through the anterior abdominal wall. PEG (percutaneous endoscopic gastrostomy): placed by endoscopy using a pull-through technique. IR-placed gastrostomy (fluoroscopic): placed without endoscopy using gastropexy anchors under fluoroscopy — preferred when endoscopy is not possible (head/neck tumors, esophageal obstruction).',
          explanation: 'Complications of gastrostomy placement include tube malposition (in the peritoneum or colon — a "dirty" IR procedure), bowel damage, and infection. IR gastrostomy requires the stomach to be adequately distended (via NG tube or air). Gastropexy sutures anchor the stomach to the anterior abdominal wall. If tube position is in doubt, contrast injection confirms intragastric positioning.',
          keyFact: 'IR gastrostomy = fluoroscopic, no endoscopy needed. Advantage over PEG: suitable for esophageal obstruction or head/neck tumors. Tube malposition into peritoneum or colon is the key complication.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/percutaneous-gastrostomy',
          tags: ['gastrostomy', 'G-tube', 'fluoroscopy', 'IR technique', 'nutrition'],
        },
      },
      {
        id: 'ir-neuro-004',
        front: {
          question: 'What is thoracic outlet syndrome (TOS), what are the three types, and how is dynamic imaging performed?',
        },
        back: {
          answer: 'TOS: compression of brachial plexus, subclavian artery, or subclavian vein at the thoracic outlet. Three types: neurogenic (most common, brachial plexus compression), arterial (subclavian artery), venous (subclavian vein — Paget-Schroetter). Dynamic CTA/MRA: acquired with arms up (hyperabduction) and arms down (neutral) with two contrast injections to assess both arterial and venous compression.',
          explanation: 'Three compression sites: interscalene triangle (brachial plexus + subclavian artery), costoclavicular space (subclavian vein), and subpectoral space (subclavian artery). Over 70% of patients with arterial TOS have a cervical rib. Adson\'s maneuver tests for arterial TOS (radial pulse diminishes with contralateral head rotation and inhalation).',
          keyFact: 'TOS types: Neurogenic (most common) > Venous > Arterial. Dynamic CTA/MRA with arms up AND down (2 injections). Cervical rib in >70% of arterial TOS. Adson\'s test for arterial TOS.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thoracic-outlet-syndrome',
          tags: ['thoracic outlet', 'TOS', 'CTA', 'MRA', 'subclavian artery'],
        },
      },
    ],
  },
]