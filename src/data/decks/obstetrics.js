// ============================================================
// RadStack — Imaging Obstetrics Deck
// ============================================================
// Naming convention: ob-[section]-[###]
// ============================================================

export const obstetricsSubsections = [
  {
    id: 'ob-early-pregnancy',
    label: 'Early Pregnancy & Viability',
    cards: [
      {
        id: 'ob-early-001',
        front: {
          question: 'At what β-hCG level should a gestational sac be visible on transvaginal ultrasound, and what is the earliest gestational age it can be seen?',
          hint: 'Think discriminatory zone',
        },
        back: {
          answer: 'β-hCG >2000 mIU/mL; visible at ~5 weeks GA',
          explanation: 'The gestational sac is the first structure seen on TVUS, appearing as a small round or oval fluid collection at approximately 5 weeks gestational age. The β-hCG discriminatory zone of ~2000 mIU/mL is a threshold above which a sac should be visible if the pregnancy is intrauterine, though exceptions exist (e.g., multiple gestations). Gestational age is calculated from the last menstrual period, not conception.',
          keyFact: 'β-hCG >2000 = GS should be visible; if no IUP above this level → strongly suspect ectopic.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gestational-sac',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'ectopic'],
        },
      },
      {
        id: 'ob-early-002',
        front: {
          question: 'What are the diagnostic criteria for failed pregnancy on TVUS using mean sac diameter (MSD)?',
        },
        back: {
          answer: 'MSD ≥25 mm with no embryo = diagnostic of failed pregnancy',
          explanation: 'The MSD is the average of three orthogonal planes of the gestational sac. If MSD is ≥8 mm and no yolk sac is seen, pregnancy is unlikely to succeed. If MSD is 16–24 mm with no embryo, this is suspicious but not diagnostic of failure. MSD ≥25 mm with no embryo is definitively diagnostic of a failed pregnancy (anembryonic pregnancy).',
          keyFact: 'MSD ≥25 mm + no embryo = failed pregnancy (diagnostic). MSD 16–24 mm + no embryo = suspicious but not diagnostic.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/anembryonic-pregnancy',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'pregnancy-failure'],
        },
      },
      {
        id: 'ob-early-003',
        front: {
          question: 'What crown-rump length (CRL) threshold is diagnostic of failed pregnancy when no heartbeat is detected?',
        },
        back: {
          answer: 'CRL ≥7 mm with no heartbeat = diagnostic of failed pregnancy',
          explanation: 'The embryo is first visible at ~6 weeks, adjacent to the yolk sac. CRL <7 mm with no heartbeat is suspicious for, but not diagnostic of, failure. Once CRL reaches ≥7 mm, a heartbeat must be present; its absence is diagnostic of embryonic demise. CRL is used for gestational age estimation from 6–12 weeks.',
          keyFact: 'CRL ≥7 mm + no heartbeat = failed pregnancy (diagnostic). CRL <7 mm + no heartbeat = suspicious only.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/embryonic-demise',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'pregnancy-failure'],
        },
      },
      {
        id: 'ob-early-004',
        front: {
          question: 'What fetal heart rate thresholds are used to define bradycardia in early pregnancy, and what is its significance?',
        },
        back: {
          answer: 'CRL ≤4 mm: ≤90 bpm = slow; CRL ≥5 mm: ≤110 bpm = slow. Bradycardia <90 bpm = very poor prognosis.',
          explanation: 'Embryonic heart rate is measured with M-mode ultrasound. Normal rates are ≥100 bpm for CRL ≤4 mm and ≥120 bpm for CRL ≥5 mm. A heart rate <90 bpm at any stage carries a very poor prognosis for pregnancy continuation. There is no such thing as "too fast" — faster heart rates are associated with better outcomes.',
          keyFact: 'HR <90 bpm in early embryo = very poor prognosis. Faster HR = better outcome. No upper limit of normal.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/embryonic-bradycardia',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'embryo'],
        },
      },
      {
        id: 'ob-early-005',
        front: {
          question: 'What is the significance of a yolk sac >5 mm on TVUS in early pregnancy?',
        },
        back: {
          answer: 'Abnormally large yolk sac (>5 mm) increases risk of failed pregnancy',
          explanation: 'The yolk sac is normally visible by 5.5 weeks and should measure ≤5 mm. It should be round or oval and fluid-filled. An enlarged yolk sac (>5 mm), a small yolk sac (<3 mm), or one that is solid or calcified are all worrisome findings. The yolk sac should always be visible when MSD is ≥8 mm.',
          keyFact: 'Normal yolk sac: round, fluid-filled, 3–5 mm. Yolk sac >5 mm or <3 mm = increased risk of pregnancy failure.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/yolk-sac',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'pregnancy-failure'],
        },
      },
      {
        id: 'ob-early-006',
        front: {
          question: 'What are the other sonographic findings suspicious for (but not diagnostic of) failed pregnancy, beyond CRL and MSD criteria?',
        },
        back: {
          answer: 'Bradycardia <90 bpm; enlarged yolk sac >5 mm; subchorionic hematoma surrounding >50% of GS circumference; small GS relative to embryo (MSD–CRL <5 mm); irregular heartbeat; lagging embryo size; sliding gestational sac',
          explanation: 'These findings increase the risk of spontaneous loss even in the presence of cardiac activity. They are not individually diagnostic but warrant close follow-up. The extent of subchorionic hematoma surrounding the sac (>50% circumference) is more predictive of pregnancy loss than the hematoma volume alone.',
          keyFact: 'Subchorionic hematoma >50% GS circumference = doubled risk of abortion. MSD–CRL <5 mm = small sac sign, also worrisome.',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'pregnancy-failure'],
        },
      },
      {
        id: 'ob-early-007',
        front: {
          question: 'When is gestational age assigned by appearance alone (without CRL), and what are the cutoffs?',
        },
        back: {
          answer: 'Between 5–6 weeks: GS only = 5.0 weeks; GS + yolk sac, no embryo = 5.5 weeks; GS + embryo <3 mm + heartbeat = 6.0 weeks',
          explanation: 'For embryos ≥3 mm, the crown-rump length is used with established reference tables. CRL can reliably date pregnancy up to 12 weeks, after which composite measurements (BPD, HC, AC, FL) are used. IVF patients have 2 weeks added to the embryo transfer date to align with LMP-based dating.',
          keyFact: 'GS only = 5w; GS + YS = 5.5w; GS + tiny embryo + HB = 6w. CRL accurate to ±0.5 weeks in first trimester.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gestational-age-estimation',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'dating'],
        },
      },
      {
        id: 'ob-early-008',
        front: {
          question: 'What are the two early sonographic signs of intrauterine pregnancy before the yolk sac is visible?',
        },
        back: {
          answer: 'Intradecidual sign and double decidual sac sign',
          explanation: 'The intradecidual sign represents the early gestational sac covered by echogenic decidua, visible at ~4.5 weeks. The double decidual sac sign shows two concentric echogenic rings (decidua vera and decidua capsularis) around the gestational sac. Both confirm IUP before the yolk sac appears and help distinguish early IUP from a pseudogestational sac.',
          keyFact: 'Pseudogestational sac (seen in ectopic) = blood in uterine cavity without decidual layers. True GS = surrounded by echogenic decidua (intradecidual sign).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/double-decidual-sac-sign',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'ectopic'],
        },
      },
    ],
  },
  {
    id: 'ob-ectopic',
    label: 'Ectopic Pregnancy',
    cards: [
      {
        id: 'ob-ectopic-001',
        front: {
          question: 'What is the most common location for an ectopic pregnancy, and which location carries the highest risk of catastrophic hemorrhage?',
        },
        back: {
          answer: 'Most common: ampulla of the fallopian tube (~70%). Highest risk of catastrophic hemorrhage: interstitial (cornual) ectopic.',
          explanation: 'Approximately 95% of ectopic pregnancies are tubal. Within the tube: ampulla 70%, isthmus 12%, fimbria 11%, and interstitial 2–3%. Interstitial ectopics are especially dangerous because they are surrounded by the highly vascular myometrium, grow larger before rupturing, and when they do rupture, can cause massive hemorrhage from proximity to the uterine and ovarian vessels.',
          keyFact: 'Interstitial ectopic = absent myometrium lateral to ectopic + interstitial line sign (echogenic line from endometrium to center of mass).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ectopic-pregnancy',
          tags: ['ultrasound', 'obstetrics', 'ectopic', 'first-trimester'],
        },
      },
      {
        id: 'ob-ectopic-002',
        front: {
          question: 'What ultrasound finding is 100% diagnostic of ectopic pregnancy, and what is the positive predictive value of an adnexal ring without an IUP?',
        },
        back: {
          answer: '100% diagnostic: extrauterine gestational sac containing yolk sac or embryo (±heartbeat). Adnexal ring without IUP: ~95% PPV for ectopic.',
          explanation: 'Most ectopics cannot be definitively diagnosed except when an extrauterine gestational sac with yolk sac or embryo is identified. An adnexal ring (tubal ring) separate from the ovary in the absence of an IUP has ~95% PPV. An inhomogeneous adnexal mass without IUP carries ~75–85% PPV. Pelvic free fluid alone in a rule-out ectopic patient has ~70% PPV and increases to 97% when combined with an adnexal mass.',
          keyFact: 'Extrauterine GS + YS or embryo = 100% ectopic. Adnexal ring + no IUP = 95% PPV. Distinguish from corpus luteum: corpus luteum moves WITH the ovary; ectopic moves separately.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tubal-ectopic-pregnancy',
          tags: ['ultrasound', 'obstetrics', 'ectopic', 'first-trimester'],
        },
      },
      {
        id: 'ob-ectopic-003',
        front: {
          question: 'How does β-hCG pattern differentiate intrauterine pregnancy, ectopic pregnancy, and spontaneous abortion?',
        },
        back: {
          answer: 'IUP: exponential rise (~doubles every 48h). Ectopic: plateaus or rises abnormally slowly. Spontaneous abortion: falls.',
          explanation: 'Serial β-hCG measurement is a key adjunct in the rule-out ectopic workup. A normal IUP β-hCG doubles approximately every 48 hours. An ectopic typically shows a subnormal rise (plateau). A spontaneous abortion shows a decline. At β-hCG ~1500–2000 mIU/mL, a GS should be visible on TVUS; at ~5000, a yolk sac should be visible.',
          keyFact: 'β-hCG doubles every 48h = likely viable IUP. Plateau = ectopic. Falling = SAB. No IUP on US + β-hCG >2000 = suspect ectopic.',
          tags: ['ultrasound', 'obstetrics', 'ectopic', 'first-trimester'],
        },
      },
      {
        id: 'ob-ectopic-004',
        front: {
          question: 'What is a heterotopic pregnancy, who is at increased risk, and what management principle follows?',
        },
        back: {
          answer: 'Simultaneous IUP + ectopic pregnancy. Risk increased with ART (assisted reproductive techniques). The adnexa must be carefully evaluated even when an IUP is confirmed.',
          explanation: 'Heterotopic pregnancy is rare in the general population (~1:30,000 spontaneous) but occurs in 1% of ART pregnancies due to multiple embryo transfer. The presence of an IUP does not exclude a simultaneous ectopic. In ART patients, careful adnexal evaluation is mandatory regardless of IUP identification.',
          keyFact: 'IUP + ectopic = heterotopic pregnancy. Never assume adnexa is normal just because an IUP is seen — especially in ART patients.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/heterotopic-pregnancy',
          tags: ['ultrasound', 'obstetrics', 'ectopic', 'first-trimester'],
        },
      },
      {
        id: 'ob-ectopic-005',
        front: {
          question: 'A patient with a positive pregnancy test has no IUP on TVUS but the adnexa appear normal. What is the correct management?',
        },
        back: {
          answer: 'Pregnancy of unknown location (PUL): serial β-hCG + repeat TVUS if hemodynamically stable',
          explanation: 'In a hemodynamically stable patient with no IUP and no definitive ectopic, the diagnosis is "pregnancy of unknown location." This could represent a very early IUP (too small to see), an ectopic, or a complete miscarriage. Serial β-hCG every 48 hours and repeat TVUS in 48–72 hours is the standard management.',
          keyFact: 'No IUP + normal adnexa + positive β-hCG = PUL. Follow with serial β-hCG. If unstable → emergent surgical exploration.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pregnancy-of-unknown-location',
          tags: ['ultrasound', 'obstetrics', 'ectopic', 'first-trimester'],
        },
      },
      {
        id: 'ob-ectopic-006',
        front: {
          question: 'What is a Caesarean section scar implantation, and why is it clinically significant?',
        },
        back: {
          answer: 'Embryo implants at the C-section scar in the anterior lower uterine segment. High risk for placenta accreta and uterine rupture.',
          explanation: 'C-section scar implantation is not technically an ectopic (remains intracavitary) but is life-threatening. The deficient endometrium at the scar results in trophoblastic invasion of the myometrium, leading to placenta accreta spectrum and potential catastrophic hemorrhage. On US, a gestational sac is seen in the anterior lower uterine segment at the prior scar site.',
          keyFact: 'C-section scar implantation = not ectopic but equally dangerous. Leads to accreta/uterine rupture. GS at anterior lower segment = key finding.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cesarean-scar-ectopic-pregnancy',
          tags: ['ultrasound', 'obstetrics', 'ectopic', 'first-trimester'],
        },
      },
    ],
  },
  {
    id: 'ob-gtt',
    label: 'Gestational Trophoblastic Disease',
    cards: [
      {
        id: 'ob-gtt-001',
        front: {
          question: 'What is the classic clinical presentation and ultrasound appearance of a complete hydatidiform mole?',
        },
        back: {
          answer: 'Clinical: hyperemesis, markedly elevated β-hCG, painless vaginal bleeding, enlarged uterus. US: heterogeneous multicystic "bunch of grapes" uterine mass (second trimester); "snowstorm" appearance in first trimester.',
          explanation: 'A complete mole results from fertilization of an enucleate egg, producing a diploid karyotype (46,XX most commonly). No fetal parts are present. The first-trimester appearance is a highly vascular echogenic mass filling the uterus ("snowstorm"). By the second trimester, individual vesicles enlarge to produce the classic bunch-of-grapes appearance. Treatment is suction curettage with 6-month β-hCG surveillance.',
          keyFact: 'Complete mole: no fetus, 46XX, snowstorm/bunch-of-grapes, markedly elevated β-hCG. Associated with bilateral theca-lutein cysts.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hydatidiform-mole',
          tags: ['ultrasound', 'obstetrics', 'gestational-trophoblastic', 'first-trimester'],
        },
      },
      {
        id: 'ob-gtt-002',
        front: {
          question: 'How does a partial (incomplete) hydatidiform mole differ from a complete mole in terms of karyotype, fetal parts, and malignant potential?',
        },
        back: {
          answer: 'Partial mole: triploid (69,XXY most common), fetal parts present (but severely anomalous), lower risk of choriocarcinoma than complete mole.',
          explanation: 'Partial mole results from fertilization of a normal ovum by two sperm (dispermy). The triploid fetus is always severely anomalous and non-viable. The placenta is enlarged with diffuse anechoic lesions. Unlike complete mole, partial moles have a much lower risk of progression to choriocarcinoma. Both types may be associated with theca-lutein cysts.',
          keyFact: 'Partial mole = 69,XXY, fetal parts present, less malignant potential. Complete mole = 46,XX, no fetal parts, higher malignant potential.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/partial-hydatidiform-mole',
          tags: ['ultrasound', 'obstetrics', 'gestational-trophoblastic', 'first-trimester'],
        },
      },
      {
        id: 'ob-gtt-003',
        front: {
          question: 'What are theca-lutein cysts, and with what conditions are they associated?',
        },
        back: {
          answer: 'Bilateral multilocular ovarian cysts with spoke-wheel appearance, arising from overstimulation by β-hCG. Associated with: complete molar pregnancy, multifetal pregnancy, and ovarian hyperstimulation syndrome (OHSS).',
          explanation: 'Theca-lutein cysts develop in response to markedly elevated β-hCG, causing ovarian enlargement with multiple 2–3 cm cysts in a spoke-wheel pattern. They are most classically seen with gestational trophoblastic disease but can also occur with multifetal pregnancies and in the setting of fertility treatment. They are bilateral and typically resolve after the source of elevated β-hCG is treated.',
          keyFact: 'Theca-lutein cysts = bilateral spoke-wheel ovarian cysts from β-hCG overstimulation. Classic triad: GTD + theca-lutein cysts + markedly elevated β-hCG.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/theca-lutein-cysts',
          tags: ['ultrasound', 'obstetrics', 'gestational-trophoblastic', 'ovary'],
        },
      },
      {
        id: 'ob-gtt-004',
        front: {
          question: 'What is choriocarcinoma, how does it spread, and what is the treatment?',
        },
        back: {
          answer: 'Highly malignant trophoblastic tumor. Spreads hematogenously (lungs most common). Treatment: methotrexate.',
          explanation: 'Choriocarcinoma consists only of trophoblasts with no villous structure, and can arise after a molar pregnancy, normal pregnancy, ectopic, or spontaneous abortion. It is highly vascular and bleeds readily. The classic scenario is rising β-hCG 8–10 weeks after molar evacuation. Hematogenous spread occurs to lungs, brain, liver, and kidneys. Unlike most other trophoblastic tumors, it is highly chemosensitive.',
          keyFact: 'Choriocarcinoma = highly vascular echogenic mass, hematogenous spread, rising β-hCG post-mole evacuation. Treat with methotrexate.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/choriocarcinoma-of-the-uterus',
          tags: ['ultrasound', 'obstetrics', 'gestational-trophoblastic', 'malignancy'],
        },
      },
    ],
  },
  {
    id: 'ob-second-third',
    label: 'Second & Third Trimester Measurements',
    cards: [
      {
        id: 'ob-second-001',
        front: {
          question: 'At what level is the biparietal diameter (BPD) measured, and what is the key technical distinction from head circumference (HC)?',
        },
        back: {
          answer: 'BPD: at the level of the thalami and cavum septum pellucidum; measured outer-to-inner edge of skull. HC: same plane, measured along the outer perimeter of the skull (not including skin).',
          explanation: 'The BPD is measured from the outer table of the near skull to the inner table of the far skull. The HC is measured at the same level but traces the perimeter of the ossified skull without including scalp. HC is less affected by skull shape (brachycephaly causes falsely large BPD; dolichocephaly causes falsely small BPD). The corrected BPD incorporates the occipital frontal diameter.',
          keyFact: 'BPD = outer-to-inner at thalami/CSP level. HC less affected by head shape than BPD. Always use composite GA in 2nd/3rd trimester.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/biparietal-diameter',
          tags: ['ultrasound', 'obstetrics', 'biometry', 'second-trimester'],
        },
      },
      {
        id: 'ob-second-002',
        front: {
          question: 'At what anatomical level is abdominal circumference (AC) measured, and what structures must be visible in that plane?',
        },
        back: {
          answer: 'Level of the junction of the umbilical vein and left portal vein ("hockey-stick" portal confluence); fetal stomach must also be visible.',
          explanation: 'The AC is measured as outer skin-to-skin in the transverse plane at the level where the intrahepatic umbilical vein joins the left portal vein (the portal-umbilical vein junction). The stomach bubble should be visible. The AC is the most sensitive biometric parameter for detecting intrauterine growth restriction, as liver glycogen stores are the first to be depleted under nutritional stress.',
          keyFact: 'AC measured at umbilical vein–portal vein junction. Stomach must be visible. AC is the most sensitive measurement for IUGR detection.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/abdominal-circumference',
          tags: ['ultrasound', 'obstetrics', 'biometry', 'second-trimester'],
        },
      },
      {
        id: 'ob-second-003',
        front: {
          question: 'What is the nuchal fold, how is it measured, and what threshold is considered a major marker for trisomy 21?',
        },
        back: {
          answer: 'Nuchal fold: posterior soft tissue thickness measured at the level of the posterior fossa in axial plane; measured at 16–20 weeks. ≥6 mm = major marker for trisomy 21.',
          explanation: 'The nuchal fold is distinct from nuchal translucency (first trimester). It is measured at 16–20 weeks only, in the axial plane through the posterior fossa. Normal is <5 mm; borderline is 5–5.9 mm; ≥6 mm is a major marker for trisomy 21 and is the single most sensitive and specific second-trimester ultrasound marker for Down syndrome. A very thick nuchal fold may represent cystic hygroma, associated with Turner syndrome.',
          keyFact: 'Nuchal fold: 16–20 weeks, posterior fossa plane. ≥6 mm = major Down syndrome marker (most sensitive/specific US finding for T21 in 2nd trimester).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nuchal-fold',
          tags: ['ultrasound', 'obstetrics', 'aneuploidy', 'second-trimester'],
        },
      },
      {
        id: 'ob-second-004',
        front: {
          question: 'What is the nuchal translucency, when is it measured, and what threshold independently warrants further diagnostic workup?',
        },
        back: {
          answer: 'Fluid-filled space at the posterior fetal neck. Measured at 11–14 weeks (CRL 45–85 mm). NT ≥3 mm = 6-fold increased risk of aneuploidy regardless of gestational age correction.',
          explanation: 'Nuchal translucency (NT) must be measured with the neck in neutral position, amnion visible, high-contrast nuchal setting, and the fetal head filling most of the screen — measured inner-to-inner at the widest point. With a 5% false positive rate, NT alone detects ~2/3 of trisomy 21 cases. NT is combined with maternal serum free β-hCG and PAPP-A for risk calculation. An abnormally thick NT in a euploid fetus may indicate congenital heart disease.',
          keyFact: 'NT ≥3 mm = 6x increased aneuploidy risk, warrants further workup. Measured 11–14 weeks. Abnormal NT in euploid fetus = think CHD.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nuchal-translucency',
          tags: ['ultrasound', 'obstetrics', 'aneuploidy', 'first-trimester'],
        },
      },
      {
        id: 'ob-second-005',
        front: {
          question: 'How accurate is ultrasound dating at different gestational ages, and what is the most accurate measurement in each trimester?',
        },
        back: {
          answer: 'First trimester (CRL): accurate to ±0.5 weeks. Second trimester composite (BPD, HC, AC, FL): ±1.2 weeks (12–18 wks). Third trimester: ±3.1 weeks (36–42 wks).',
          explanation: 'Ultrasound dating accuracy decreases with advancing gestational age due to increasing biological variation in fetal size. First-trimester CRL is the most accurate dating tool. After 12 weeks, a composite GA using multiple measurements is used. Once a reliable early dating has been established, it should not be changed based on later measurements — the biologic variability of later measurements is too high.',
          keyFact: 'Earlier US = more accurate dating. CRL in T1 = gold standard (±0.5 wks). Never change established dates based on late-trimester measurements.',
          tags: ['ultrasound', 'obstetrics', 'biometry', 'dating'],
        },
      },
    ],
  },
  {
    id: 'ob-cervix',
    label: 'Cervix, Cord & Amniotic Fluid',
    cards: [
      {
        id: 'ob-cervix-001',
        front: {
          question: 'What cervical length is considered abnormal and a risk factor for preterm delivery, and what mnemonic describes the progression of cervical funneling?',
        },
        back: {
          answer: 'Cervical length <3 cm (some use <2.5 cm) is abnormal. Funneling mnemonic: "Trust Your Vaginal Ultrasound" = T → Y → V → U shapes (normal → progressive funneling).',
          explanation: 'Transvaginal ultrasound is the gold standard for cervical length measurement. False elongation can occur from a full bladder or uterine contractions. The cervix should be measured in the sagittal plane with the bladder empty. Funneling describes the internal os opening: T-shaped is normal; Y, V, and U represent progressive degrees of funneling. Prior to viability (<24 weeks), cerclage may be offered; after 24 weeks, conservative management is preferred.',
          keyFact: 'Cervical length <3 cm = preterm risk. T→Y→V→U progression = increasing funneling severity. TVUS is standard; empty bladder prevents false elongation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cervical-length',
          tags: ['ultrasound', 'obstetrics', 'cervix', 'second-trimester'],
        },
      },
      {
        id: 'ob-cervix-002',
        front: {
          question: 'What is the normal umbilical cord composition, and what is the significance of a single umbilical artery?',
        },
        back: {
          answer: 'Normal cord: 2 umbilical arteries + 1 umbilical vein (3 vessels). Single umbilical artery (2-vessel cord): associated with increased fetal anomalies, growth restriction, and trisomies 13 and 18.',
          explanation: 'The umbilical arteries carry deoxygenated blood from the fetus to the placenta; the umbilical vein carries oxygenated blood to the fetus. A single umbilical artery (usually absent left artery) occurs in ~1% of pregnancies. It is associated with chromosomal abnormalities and structural defects, though in isolation it may be a normal variant. A thorough fetal anatomy survey is always indicated.',
          keyFact: '2-vessel cord = single umbilical artery (absent left). Associated with trisomies 13/18, IUGR, and structural anomalies. Look hard for other findings.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/single-umbilical-artery',
          tags: ['ultrasound', 'obstetrics', 'umbilical-cord', 'second-trimester'],
        },
      },
      {
        id: 'ob-cervix-003',
        front: {
          question: 'What is vasa previa, what are its two types, and why is it clinically dangerous?',
        },
        back: {
          answer: 'Fetal vessels traversing the internal cervical os. Type 1: velamentous cord insertion to main placenta. Type 2: vessels connecting a succenturiate lobe or bilobed placenta. Dangerous: vessels can rupture during membrane rupture or delivery → fetal exsanguination.',
          explanation: 'Vasa previa occurs when unprotected fetal vessels (not covered by Wharton\'s jelly) overlie the internal cervical os. If membranes rupture and these vessels are torn, fetal exsanguination can occur rapidly (fetal blood volume is small). Color Doppler at the internal os is used to identify fetal vessels. Prenatal diagnosis allows for planned C-section before labor onset. Associated with velamentous cord insertion and accessory placental lobes.',
          keyFact: 'Vasa previa = fetal vessels at internal os. Color Doppler essential for diagnosis. Rupture = fetal exsanguination. Planned C-section is lifesaving.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/vasa-praevia',
          tags: ['ultrasound', 'obstetrics', 'umbilical-cord', 'placenta'],
        },
      },
      {
        id: 'ob-cervix-004',
        front: {
          question: 'What are the definitions of oligohydramnios and polyhydramnios by amniotic fluid index (AFI)?',
        },
        back: {
          answer: 'Oligohydramnios: AFI ≤5 cm (or deepest vertical pocket <2 cm). Polyhydramnios: AFI ≥20 cm (or single vertical pocket >8 cm). Normal AFI: 5–20 cm.',
          explanation: 'AFI is calculated by summing the deepest vertical pocket in each of four uterine quadrants (used between 16–42 weeks). Amniotic fluid is produced by fetal urine (after 16 weeks) and absorbed by fetal swallowing. Oligohydramnios = kidneys not making enough urine (renal pathology, IUGR). Polyhydramnios = swallowing impaired (GI obstruction, CNS anomaly) or overproduction (maternal diabetes).',
          keyFact: 'Oligo: AFI ≤5 = think renal/IUGR. Poly: AFI ≥20 = think GI obstruction or diabetes. After 16 weeks, AF = fetal urine.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/amniotic-fluid-index',
          tags: ['ultrasound', 'obstetrics', 'amniotic-fluid', 'second-trimester'],
        },
      },
      {
        id: 'ob-cervix-005',
        front: {
          question: 'What are the key causes of oligohydramnios and polyhydramnios?',
          hint: 'Think production vs. reabsorption',
        },
        back: {
          answer: 'Oligohydramnios: IUGR, bilateral renal agenesis, obstructive uropathy (PUV), ARPKD, bilateral MCDK. Polyhydramnios: GI obstruction (esophageal/duodenal atresia), CDH, CNS anomalies (impaired swallowing), maternal diabetes, anencephaly, twin-twin transfusion (recipient twin), chorioangioma.',
          explanation: 'Amniotic fluid balance depends on fetal urine production and swallowing. Oligohydramnios results from decreased urine production (renal pathology, uteroplacental insufficiency) or post-renal obstruction. Polyhydramnios results from impaired swallowing (upper GI obstruction, CNS dysfunction) or overproduction. More than half of polyhydramnios cases are idiopathic with a normal fetus.',
          keyFact: 'Oligo = not peeing (renal, IUGR). Poly = not drinking (GI/CNS) + maternal DM. "Proximal" GI lesions (above duodenum) → poly; distal lesions → normal fluid.',
          tags: ['ultrasound', 'obstetrics', 'amniotic-fluid', 'second-trimester'],
        },
      },
      {
        id: 'ob-cervix-006',
        front: {
          question: 'What is velamentous cord insertion and what complication is it associated with?',
        },
        back: {
          answer: 'Cord inserts into fetal membranes outside the placental margin; vessels travel unprotected through membranes to the placenta. Associated with: vasa previa, IUGR, fetal growth discordance in twins.',
          explanation: 'In velamentous insertion, the umbilical vessels lose Wharton\'s jelly protection as they traverse the free membranes before reaching the placenta. This creates vulnerability to vessel compression and rupture. Marginal cord insertion (within 2 cm of the placental edge, or "battledore placenta") is a milder variant. Both are more common in twin pregnancies.',
          keyFact: 'Velamentous insertion = unprotected fetal vessels in membranes = risk of vasa previa. More common in twins and low-lying placentas.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/velamentous-cord-insertion',
          tags: ['ultrasound', 'obstetrics', 'umbilical-cord', 'placenta'],
        },
      },
    ],
  },
  {
    id: 'ob-placenta',
    label: 'Placenta',
    cards: [
      {
        id: 'ob-placenta-001',
        front: {
          question: 'What is the difference between a low-lying placenta and placenta previa, and what is the normal distance from the internal os?',
        },
        back: {
          answer: 'Normal: placenta >2 cm from the internal os. Low-lying: ≤2 cm from the os (does not cover it). Placenta previa: covers the internal cervical os.',
          explanation: 'Placental position must be assessed in all pregnancies. Transvaginal ultrasound is used when transabdominal imaging is uncertain. Most low-lying placentas migrate away from the os as the lower uterine segment develops in the second and third trimesters. Classic presentation of previa is painless vaginal bleeding. A common pitfall is over-diagnosis from an overfilled bladder or uterine contraction compressing the lower segment.',
          keyFact: 'Previa = placenta covers internal os = painless bleeding. Low-lying = ≤2 cm. Full bladder = false positive. TVUS preferred for evaluation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/placenta-praevia',
          tags: ['ultrasound', 'obstetrics', 'placenta', 'second-trimester'],
        },
      },
      {
        id: 'ob-placenta-002',
        front: {
          question: 'What are the three degrees of placenta accreta spectrum, and what are the characteristic ultrasound findings?',
        },
        back: {
          answer: 'Accreta (villi attach to myometrium), increta (invade into myometrium), percreta (penetrate through serosa ± adjacent organs). US: placental lacunae ("moth-eaten/Swiss cheese"), thinning/absence of retroplacental myometrium (<1 mm), turbulent Doppler flow, bladder wall irregularity in percreta.',
          explanation: 'Placenta accreta spectrum results from deficient decidua basalis, usually from prior uterine scarring (C-section, D&C, endometritis). The most important risk factors are prior C-section with anterior placenta previa. The presence of irregular vascular lacunar spaces with turbulent Doppler flow near the bladder is highly specific for accreta. MRI may be used for surgical planning when US is equivocal.',
          keyFact: 'Swiss-cheese placental lacunae + absent retroplacental myometrium = accreta spectrum. Prior C-section + anterior previa = highest risk combination.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/placenta-accreta',
          tags: ['ultrasound', 'MRI', 'obstetrics', 'placenta'],
        },
      },
      {
        id: 'ob-placenta-003',
        front: {
          question: 'What are the characteristic ultrasound findings of placental abruption, and why can a negative ultrasound not exclude the diagnosis?',
        },
        back: {
          answer: 'US findings: retroplacental, subchorionic, or preplacental hematoma — may be isoechoic (acute), heterogeneous, or hypoechoic (chronic). Negative US cannot exclude abruption as it can appear entirely normal.',
          explanation: 'Placental abruption is premature placental separation, classically presenting with painful vaginal bleeding. Acute abruption is especially difficult to detect because fresh blood is isoechoic to placenta. Real-time scanning or cine loops may help. Risk factors include hypertension, cocaine use, trauma, and rapid uterine decompression. Key distinction from abruption vs contraction/fibroid: abruption disrupts the retroplacental complex; fibroids/contractions displace it.',
          keyFact: 'Abruption = painful bleeding. Acute hematoma = isoechoic to placenta (easily missed!). Negative US cannot exclude abruption. Disrupts retroplacental complex.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/placental-abruption',
          tags: ['ultrasound', 'obstetrics', 'placenta', 'hemorrhage'],
        },
      },
      {
        id: 'ob-placenta-004',
        front: {
          question: 'What is a succenturiate placental lobe, and what complications is it associated with?',
        },
        back: {
          answer: 'An island of placental tissue separated from the main placenta, connected by blood vessels. Associated with: velamentous cord insertion, type 2 vasa previa, postpartum hemorrhage from retained placental tissue.',
          explanation: 'A succenturiate lobe is an accessory placental lobe connected to the main placenta by blood vessels running through the membranes. These bridging vessels can overlie the internal cervical os (type 2 vasa previa), creating risk of fetal hemorrhage if ruptured. Retained succenturiate lobe postpartum can cause hemorrhage and endometritis.',
          keyFact: 'Succenturiate lobe = accessory placental lobe → risk of type 2 vasa previa + postpartum RPOC. Always look for bridging vessels with color Doppler.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/succenturiate-lobe',
          tags: ['ultrasound', 'obstetrics', 'placenta', 'vasa-previa'],
        },
      },
      {
        id: 'ob-placenta-005',
        front: {
          question: 'What is a placental chorioangioma, and when does it become clinically significant?',
        },
        back: {
          answer: 'Hamartoma of the placenta — most common benign placental tumor. Clinically significant when >4 cm or multiple (choriangiomatosis): can cause hydrops, IUGR, hemolytic anemia, polyhydramnios, thrombocytopenia.',
          explanation: 'Chorioangioma appears as a well-circumscribed hypoechoic mass near the cord insertion, with internal vascular flow pulsating at the fetal heart rate (perfused by fetal circulation). This flow pattern distinguishes it from a placental hematoma, which has no flow. Small lesions are clinically insignificant. Large lesions act as arteriovenous shunts, causing high-output cardiac failure and fetal hydrops.',
          keyFact: 'Chorioangioma: pulsating Doppler flow (fetal heart rate) = diagnostic. Hematoma = no flow. Size >4 cm → risk of hydrops.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/placental-chorioangioma',
          tags: ['ultrasound', 'obstetrics', 'placenta', 'tumor'],
        },
      },
      {
        id: 'ob-placenta-006',
        front: {
          question: 'What are the variant placental morphologies and their associated risks?',
        },
        back: {
          answer: 'Bilobed placenta: 2 near-equal lobes → vasa previa risk, RPOC. Succenturiate lobe: accessory lobe → type 2 vasa previa, RPOC. Circumvallate placenta: rolled placental edges, smaller chorionic plate → placental abruption and IUGR risk.',
          explanation: 'Circumvallate placenta shows a ring-shaped membrane attachment at the placental margin, with the chorionic plate smaller than the basal plate and rolled-up edges. It is associated with abruption, preterm labor, and IUGR. All variant morphologies increase the risk of postpartum hemorrhage from retained tissue and require careful placental examination at delivery.',
          keyFact: 'Circumvallate placenta = rolled edges, smaller chorionic plate → abruption + IUGR. All variants: check for vasa previa with color Doppler.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/circumvallate-placenta',
          tags: ['ultrasound', 'obstetrics', 'placenta', 'variant'],
        },
      },
    ],
  },
  {
    id: 'ob-twins',
    label: 'Multiple Gestations & Twin Complications',
    cards: [
      {
        id: 'ob-twins-001',
        front: {
          question: 'How does the timing of monozygotic twin splitting determine chorionicity and amnionicity?',
        },
        back: {
          answer: '0–4 days: Di/Di (33%). 4–8 days: Mono/Di (66%). >8 days: Mono/Mono (1%). >13 days: conjoined twins.',
          explanation: 'Dizygotic twins are always dichorionic/diamniotic. Monozygotic twins can be any type depending on when the blastocyst splits. Early splitting before the chorion forms = separate placentas (Di/Di). Splitting after chorion but before amnion forms = shared placenta, separate sacs (Mono/Di). Splitting after both form = single sac (Mono/Mono). Later splitting = conjoined twins.',
          keyFact: 'Earlier split = safer (more separate). Later split = more shared = more complications. Di/Di safest; Mono/Mono highest risk. Conjoined = always Mono/Mono.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/twin-pregnancy',
          tags: ['ultrasound', 'obstetrics', 'twins', 'placentation'],
        },
      },
      {
        id: 'ob-twins-002',
        front: {
          question: 'What are the ultrasound signs that distinguish dichorionic/diamniotic (Di/Di) from monochorionic/diamniotic (Mono/Di) twins?',
        },
        back: {
          answer: 'Di/Di: twin peak sign (lambda sign) — triangular placental tissue infolding at membrane-placenta interface; thick inter-twin membrane (4 layers). Mono/Di: T-sign — thin membrane (2 layers) meets placenta at 90° T-shape; single placenta.',
          explanation: 'The twin peak (lambda) sign is most useful when two placentas cannot be clearly separated. It represents a wedge of placental tissue growing into the inter-twin membrane. The T-sign in monochorionic twins reflects the lack of this placental ingrowth — just two amnion layers meeting in a T. Different fetal sexes = dizygotic = always Di/Di. Membrane thickness assessment is subjective and less reliable in the third trimester.',
          keyFact: 'Lambda/twin-peak = Di/Di. T-sign = Mono/Di. Different sexes = always Di/Di. First trimester chorionicity assessment is most reliable.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/twin-peak-sign',
          tags: ['ultrasound', 'obstetrics', 'twins', 'placentation'],
        },
      },
      {
        id: 'ob-twins-003',
        front: {
          question: 'What are the three criteria to diagnose twin-twin transfusion syndrome (TTTS) on ultrasound?',
        },
        back: {
          answer: '1) Monochorionic placentation. 2) Discordant fetal sizes (≥25% weight difference). 3) Discordant amniotic fluid: oligohydramnios (donor) + polyhydramnios (recipient).',
          explanation: 'TTTS results from unbalanced vascular communications in a shared monochorionic placenta. The donor twin is small with oligohydramnios ("stuck twin" with amnion wrapped like shrink-wrap). The recipient is large with polyhydramnios and at risk for hydrops from volume overload. Treatment options include laser ablation of placental vascular communications, therapeutic amniocentesis, or selective fetal cord coagulation.',
          keyFact: 'TTTS = monochorionic + discordant fluid. Donor = small/stuck/oligohydramnios. Recipient = large/poly/hydrops risk. Treat with laser ablation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/twin-to-twin-transfusion-syndrome',
          tags: ['ultrasound', 'obstetrics', 'twins', 'complication'],
        },
      },
      {
        id: 'ob-twins-004',
        front: {
          question: 'What is twin reversed arterial perfusion (TRAP) sequence, and what is the classic Doppler finding?',
        },
        back: {
          answer: 'Arterial-arterial communication causes reversed flow in acardiac twin\'s umbilical artery (blood flows INTO the acardiac twin, not out). Doppler: umbilical arteries show flow TOWARD acardiac twin; umbilical vein shows flow AWAY from acardiac twin.',
          explanation: 'In TRAP (acardiac twinning), the pump twin\'s heart perfuses both itself and the acardiac twin via a reverse arterial connection. The acardiac twin has rudimentary or absent cardiac and upper body development. Normally, umbilical arteries carry blood away from the fetus; in the acardiac twin, they carry deoxygenated blood INTO it. The treatment is coagulation of the acardiac twin\'s cord.',
          keyFact: 'TRAP = acardiac twin + reversed umbilical artery flow (toward acardiac). Only occurs in monochorionic twins. If acardiac twin >70% pump twin weight → pump twin at risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/twin-reversed-arterial-perfusion-sequence',
          tags: ['ultrasound', 'obstetrics', 'twins', 'complication'],
        },
      },
      {
        id: 'ob-twins-005',
        front: {
          question: 'When one monochorionic twin dies in utero, what complication can occur in the surviving twin, and why does prognosis differ from dichorionic twin demise?',
        },
        back: {
          answer: 'Twin embolization syndrome: necrotic emboli from dead fetus → surviving twin → CNS, GI, renal infarcts. Monochorionic: very poor prognosis. Dichorionic: generally good prognosis (no vascular communication).',
          explanation: 'In monochorionic twins, shared vascular connections allow passage of thrombogenic material from the dead fetus to the living twin, causing multi-organ infarction. In dichorionic twins, the placentas are separate; there is no vascular communication, so the surviving twin is not at risk for embolization and generally does well. This distinction is critical for counseling after single intrauterine fetal demise.',
          keyFact: 'Monochorionic dead co-twin = twin embolization risk for survivor (CNS/renal/GI infarcts). Dichorionic = surviving twin usually fine (separate circulations).',
          tags: ['ultrasound', 'obstetrics', 'twins', 'complication'],
        },
      },
    ],
  },
  {
    id: 'ob-iugr',
    label: 'Fetal Growth & Doppler',
    cards: [
      {
        id: 'ob-iugr-001',
        front: {
          question: 'What is the difference between symmetric and asymmetric IUGR, and what causes each type?',
        },
        back: {
          answer: 'Asymmetric (more common): head normal, abdomen small ("head-sparing"). Causes: maternal hypertension, severe malnutrition, Ehlers-Danlos — extrinsic, 3rd trimester. Symmetric: both head and body small. Causes: TORCH infection, fetal alcohol syndrome, chromosomal abnormalities — intrinsic, seen throughout pregnancy.',
          explanation: 'Asymmetric IUGR results from uteroplacental insufficiency causing redistribution of blood flow to protect the brain at the expense of the liver (hence the small AC). Symmetric IUGR reflects global growth suppression from early insults affecting the fetus intrinsically. Symmetric IUGR has a worse prognosis as the brain does not develop normally. EFW below the 10th percentile defines IUGR; below the 3rd percentile is severe.',
          keyFact: 'Asymmetric = head spared, small AC, late 3rd trimester → BP/placenta. Symmetric = all small, throughout pregnancy → TORCH/chromosomal. Symmetric = worse prognosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/intrauterine-growth-restriction',
          tags: ['ultrasound', 'obstetrics', 'IUGR', 'Doppler'],
        },
      },
      {
        id: 'ob-iugr-002',
        front: {
          question: 'What do absent or reversed diastolic flow in the umbilical artery indicate, and what is the normal S/D ratio at 34 weeks?',
        },
        back: {
          answer: 'Absent or reversed diastolic flow = severe uteroplacental insufficiency, very poor prognosis. Normal S/D ratio ≤3 at 34 weeks (should progressively decrease with gestation).',
          explanation: 'Umbilical artery resistance normally decreases as gestation advances (S/D ratio falls as the placental bed matures). An elevated S/D ratio indicates increased downstream resistance. Absent end-diastolic flow (AEDF) indicates critical compromise; reversed end-diastolic flow (REDF) means imminent fetal death. S/D ratio >4 at any gestational age is suggestive of IUGR. Combined with oligohydramnios (AFI <5), REDF portends an extremely poor outcome.',
          keyFact: 'S/D ratio should fall with GA. Absent diastolic flow = critical. Reversed diastolic flow = imminent demise. Normal S/D ≤3 at 34 weeks.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/umbilical-artery-doppler',
          tags: ['ultrasound', 'obstetrics', 'Doppler', 'IUGR'],
        },
      },
      {
        id: 'ob-iugr-003',
        front: {
          question: 'What are the five components of the biophysical profile (BPP), and what score is considered normal?',
        },
        back: {
          answer: 'Components: (1) Amniotic fluid (AFI, 1 pocket >2 cm), (2) Fetal movement (≥3 discrete), (3) Fetal tone (1 extension-flexion episode), (4) Fetal breathing (1 episode ≥30 sec), (5) Non-stress test (≥2 HR accelerations ≥15 bpm for ≥30 sec). Score 8–10 = normal (2 points each).',
          explanation: 'The BPP assesses both acute (movement, tone, breathing, NST) and chronic (amniotic fluid) markers of fetal hypoxia. Amniotic fluid is the chronic marker because oligohydramnios develops over days; the acute markers reflect acute CNS suppression from hypoxia. A score of 6 may warrant delivery or further evaluation; ≤4 is associated with perinatal mortality.',
          keyFact: 'BPP: 5 components × 2 points = 10 total. 8–10 = normal. AF assesses chronic hypoxia; movement/tone/breathing/NST assess acute. Observe for 30 minutes before calling abnormal.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/biophysical-profile',
          tags: ['ultrasound', 'obstetrics', 'Doppler', 'IUGR'],
        },
      },
      {
        id: 'ob-iugr-004',
        front: {
          question: 'What fetal condition is the most common cause of oligohydramnios in the third trimester, and how does macrosomia develop?',
        },
        back: {
          answer: 'Third trimester oligohydramnios: most commonly fetal growth restriction from placental insufficiency. Macrosomia (>90th percentile): most common cause is maternal diabetes (gestational > type 2). Type 1 diabetics can have IUGR from microvascular placental disease.',
          explanation: 'Placental insufficiency leads to decreased renal perfusion, reduced fetal urine output, and oligohydramnios. In macrosomia, fetal hyperglycemia from maternal diabetes causes fetal hyperinsulinemia and increased adipose deposition. Macrosomia risks include shoulder dystocia, brachial plexus injury (Erb\'s palsy C5-C6), and neonatal hypoglycemia. Type 1 diabetics can paradoxically have small babies from microvascular disease.',
          keyFact: 'Oligo in T3 = IUGR/placental insufficiency most often. Macrosomia = maternal DM. Type 1 DM can → IUGR (microvascular). Shoulder dystocia → Erb\'s palsy (C5-C6).',
          tags: ['ultrasound', 'obstetrics', 'IUGR', 'macrosomia'],
        },
      },
    ],
  },
  {
    id: 'ob-hydrops',
    label: 'Fetal Hydrops & Retained Products',
    cards: [
      {
        id: 'ob-hydrops-001',
        front: {
          question: 'What is the definition of fetal hydrops, and how is immune distinguished from non-immune hydrops?',
        },
        back: {
          answer: 'Hydrops: ≥2 of: ascites, pleural effusion, pericardial effusion, skin thickening (edema), polyhydramnios, placental enlargement. Immune: Rh sensitization → fetal hemolytic anemia. Non-immune: diverse causes, generally poor prognosis.',
          explanation: 'Immune hydrops results from maternal antibodies (most commonly anti-D) crossing the placenta and destroying fetal red blood cells. This causes anemia, high-output heart failure, and fluid overload. Non-immune hydrops has many causes: cardiac arrhythmias, arteriovenous shunts (vein of Galen, sacrococcygeal teratoma, TTTS), Parvovirus B19 (aplastic anemia), TORCH infections, Turner syndrome, and alpha-thalassemia.',
          keyFact: 'Hydrops = ≥2 fluid compartments. Immune = anti-D → hemolytic anemia. Parvovirus B19 = non-immune hydrops via aplastic anemia → elevated MCA Doppler velocity.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hydrops-fetalis',
          tags: ['ultrasound', 'obstetrics', 'hydrops', 'second-trimester'],
        },
      },
      {
        id: 'ob-hydrops-002',
        front: {
          question: 'What is the most reliable sonographic finding for diagnosing fetal anemia (including in Parvovirus B19 infection), and what is the threshold for treatment?',
        },
        back: {
          answer: 'Middle cerebral artery (MCA) peak systolic velocity (PSV) >1.5 MoM (multiples of the median) = severe fetal anemia. Treated with intrauterine blood transfusion.',
          explanation: 'Fetal anemia causes high-output circulation with increased MCA flow velocity due to decreased blood viscosity. MCA PSV >1.5 MoM for gestational age is the threshold for intrauterine transfusion. Parvovirus B19 infects erythroid precursors, causing aplastic crisis and hydrops. This method has largely replaced amniocentesis for fetal anemia assessment.',
          keyFact: 'MCA PSV >1.5 MoM = severe fetal anemia → intrauterine transfusion. Parvovirus B19 = aplastic anemia → non-immune hydrops. MCA Doppler is the key test.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/middle-cerebral-artery-doppler',
          tags: ['ultrasound', 'obstetrics', 'hydrops', 'Doppler'],
        },
      },
      {
        id: 'ob-hydrops-003',
        front: {
          question: 'What is retained products of conception (RPOC), and how is it distinguished from an endometrial blood clot on ultrasound?',
        },
        back: {
          answer: 'RPOC: echogenic endometrial mass ± vascularity after delivery/miscarriage/termination. A linear endometrium without Doppler flow has high NPV for RPOC. Blood clot can mimic RPOC but typically lacks internal Doppler flow (though RPOC may also lack flow).',
          explanation: 'RPOC is placental or fetal tissue remaining in the uterus after delivery, miscarriage, or termination. Clinical presentation is persistent vaginal bleeding. An endometrial thickness >10 mm with internal echogenicity after delivery is suggestive. Endometrial vascularity on color Doppler is highly suggestive of RPOC. A linear echogenic endometrium without flow has a high negative predictive value for RPOC.',
          keyFact: 'RPOC: echogenic mass in endometrial cavity post-delivery. Flow within mass = RPOC (high specificity). Linear endometrium + no flow = very unlikely RPOC.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/retained-products-of-conception',
          tags: ['ultrasound', 'obstetrics', 'RPOC', 'postpartum'],
        },
      },
    ],
  },
  {
    id: 'ob-brain',
    label: 'Fetal Brain & Neural Tube',
    cards: [
      {
        id: 'ob-brain-001',
        front: {
          question: 'What is the normal upper limit for fetal lateral ventricle width (atrial diameter), and what are the degrees of ventriculomegaly?',
        },
        back: {
          answer: 'Normal: <10 mm at the atrium (throughout gestation). Mild: 10–12 mm. Moderate: 12–15 mm. Marked/severe: >15 mm.',
          explanation: 'The lateral ventricle is measured at the atrium (confluence of body, occipital horn, and temporal horn) — the widest and most reproducible location. The normal choroid plexus fills the ventricle; the "dangling choroid sign" (drooping of choroid from ventricle wall by >3 mm) indicates enlarged ventricle. Ventriculomegaly is a sign of underlying pathology: structural (aqueductal stenosis, Chiari II, Dandy-Walker, holoprosencephaly, ACC), genetic (trisomies), or destructive (infection, hemorrhage, infarct).',
          keyFact: 'Ventricle >10 mm at atrium = ventriculomegaly (all gestational ages). Dangling choroid (>3 mm from wall) = another sign. Ventriculomegaly = always look for cause.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fetal-ventriculomegaly',
          tags: ['ultrasound', 'obstetrics', 'fetal-brain', 'second-trimester'],
        },
      },
      {
        id: 'ob-brain-002',
        front: {
          question: 'What are the banana sign and lemon sign in Chiari II malformation, and which is more specific?',
        },
        back: {
          answer: 'Banana sign: flattened cerebellar hemispheres in a small posterior fossa (caudal cerebellar herniation). Lemon sign: flattening of frontal bones giving lemon shape on axial view. Banana sign is more specific. Lemon sign is seen only in 2nd trimester.',
          explanation: 'Chiari II is characterized by a small posterior fossa with caudal herniation of the hindbrain (due to low CSF pressure from the open neural tube defect). The banana sign reflects the distorted, flattened cerebellum. The lemon sign (scalloping of frontal bones) is a result of abnormal skull development from reduced intracranial pressure, but is non-specific and disappears in the 3rd trimester as the brain grows. Both signs should prompt careful evaluation of the entire spine for myelomeningocele.',
          keyFact: 'Chiari II = myelomeningocele + small posterior fossa. Banana sign = specific, present in both 2nd and 3rd trimester. Lemon sign = 2nd trimester only, non-specific.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chiari-ii-malformation',
          tags: ['ultrasound', 'obstetrics', 'fetal-brain', 'neural-tube'],
        },
      },
      {
        id: 'ob-brain-003',
        front: {
          question: 'What is the Dandy-Walker malformation, with what is it associated, and how does it differ from mega cisterna magna and Blake\'s pouch cyst?',
        },
        back: {
          answer: 'Dandy-Walker: hypogenesis of cerebellar vermis + fourth ventricular dilation. Associated with agenesis of the corpus callosum. Mega cisterna magna and Blake\'s pouch cyst: isolated findings, good prognosis; Dandy-Walker: poor prognosis.',
          explanation: 'Dandy-Walker is a spectrum of vermian hypoplasia with cystic dilation of the posterior fossa. Blake\'s pouch cyst is an embryological structure (contiguous with the 4th ventricle) that fails to regress; mega cisterna magna is delayed fenestration of Blake\'s pouch. Both are risk factors for associated anomalies when not isolated, but isolated cases have excellent prognosis — unlike Dandy-Walker. Cisterna magna should measure 2–11 mm normally.',
          keyFact: 'Dandy-Walker = vermian hypoplasia + large posterior fossa cyst + ACC association. Isolated mega cisterna magna = good prognosis. Cisterna magna >11 mm = abnormal.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/dandy-walker-malformation',
          tags: ['ultrasound', 'obstetrics', 'fetal-brain', 'second-trimester'],
        },
      },
      {
        id: 'ob-brain-004',
        front: {
          question: 'What are the secondary sonographic features that suggest agenesis of the corpus callosum (ACC) on fetal ultrasound?',
        },
        back: {
          answer: 'Colpocephaly (teardrop-shaped lateral ventricles with dilated occipital horns), absence of cavum septum pellucidum, widely separated frontal horns (steer-horn/Viking-helmet configuration), parallel orientation of lateral ventricles, midline interhemispheric cyst.',
          explanation: 'The normal corpus callosum forms by 20 weeks from body to splenium (rostrum last). Direct visualization of the corpus callosum on US is unreliable; indirect signs are more important. The absence of the cavum septum pellucidum (CSP) is an important clue — CSP and CC form simultaneously. Absent CSP with normal CC raises concern for septo-optic dysplasia, warranting fetal MRI.',
          keyFact: 'ACC = absent CSP + colpocephaly + parallel ventricles + steer-horn. No CSP on US → think ACC first. Normal CC forms by 20 weeks.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/agenesis-of-the-corpus-callosum',
          tags: ['ultrasound', 'obstetrics', 'fetal-brain', 'second-trimester'],
        },
      },
      {
        id: 'ob-brain-005',
        front: {
          question: 'What is holoprosencephaly and with which trisomy and facial anomalies is it associated?',
        },
        back: {
          answer: 'Failure of midline cleavage of prosencephalon. Alobar (most severe): fused thalami, single monoventricle, large dorsal cyst. Associated with trisomy 13 and midline facial anomalies: hypotelorism, cyclopia, cleft lip/palate, absent nose, proboscis.',
          explanation: 'Holoprosencephaly exists on a spectrum: alobar (no interhemispheric fissure), semilobar (partial division), and lobar (near complete separation). The alobar form shows fused thalami, a single horseshoe-shaped monoventricle, and absent falx. The brain tissue wraps around the monoventricle in a characteristic boomerang shape. Associated facial anomalies correlate with severity — cyclopia is the most extreme.',
          keyFact: 'Holoprosencephaly + midline face anomalies = think trisomy 13. Alobar: fused thalami + monoventricle + absent falx. "Face predicts the brain."',
          radiopaediaUrl: 'https://radiopaedia.org/articles/holoprosencephaly',
          tags: ['ultrasound', 'obstetrics', 'fetal-brain', 'trisomy'],
        },
      },
      {
        id: 'ob-brain-006',
        front: {
          question: 'What is anencephaly, what is the earliest it can be diagnosed, and what is the differential diagnosis?',
        },
        back: {
          answer: 'Lethal anomaly: absent calvarium and cerebral cortex above orbits due to open neural tube. Diagnosed from ~11 weeks. AFP elevated. Differential: amniotic band syndrome (asymmetric), acrania (early anencephaly with brain intact).',
          explanation: 'Anencephaly results from failure of neural tube closure at the cephalic end. By 8 weeks, the prosencephalon and rhombencephalon are normally distinguishable; their absence is the earliest sonographic clue. After exposure to amniotic fluid, the neural tissue is destroyed. Angiomatous stroma (residual neural tissue) above the head can mimic an encephalocele. Anencephaly may cause polyhydramnios due to impaired swallowing. AFP is elevated due to direct neural tissue exposure.',
          keyFact: 'Anencephaly = no calvarium/brain above orbits. Lethal. AFP elevated. Angiomatous stroma can mimic encephalocele. ABS differential = asymmetric defects.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/anencephaly',
          tags: ['ultrasound', 'obstetrics', 'fetal-brain', 'neural-tube'],
        },
      },
      {
        id: 'ob-brain-007',
        front: {
          question: 'What is a cephalocele, and what is the most common differential for a posterior fetal head mass?',
        },
        back: {
          answer: 'Cephalocele: midline neural tube defect with protrusion of intracranial structures through a skull defect. Most common location: occipital. Meningocele = meninges only; encephalocele = meninges + neural tissue. Main differential: cystic hygroma (lymphatic malformation, most common fetal neck mass).',
          explanation: 'Encephaloceles contain neural tissue within the herniated sac, while meningoceles contain only CSF-filled meninges. The key imaging distinction is whether neural tissue can be traced into the sac. Cystic hygroma appears as a complex cystic posterior neck mass (often multiloculated) and is classically associated with Turner syndrome (45,X), Down syndrome, and other aneuploidies.',
          keyFact: 'Posterior fetal head mass: encephalocele (neural tissue in sac) vs. cystic hygroma (posterior neck, multiloculated, associated with Turner syndrome).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cephalocele',
          tags: ['ultrasound', 'obstetrics', 'fetal-brain', 'second-trimester'],
        },
      },
      {
        id: 'ob-brain-008',
        front: {
          question: 'What is the significance of a choroid plexus cyst (CPC) on fetal ultrasound?',
        },
        back: {
          answer: 'CPCs are a hallmark of trisomy 18 but occur in ~1% of normal fetuses and can be seen in trisomy 21, Turner, and Klinefelter. Isolated CPC with normal maternal serum screen = incidental finding.',
          explanation: 'Choroid plexus cysts appear as discrete round hypoechoic/anechoic lesions ≥3 mm within the choroid plexus, visible in two planes. They usually resolve on follow-up. In the presence of other anomalies, CPCs significantly increase concern for trisomy 18. As an isolated finding with a normal serum screen and no other US markers, they can be observed without further intervention. A heterogeneous "spongy" choroid is a normal variant and not a CPC.',
          keyFact: 'CPC = trisomy 18 hallmark. Isolated CPC with normal serum screen = likely incidental. Always search for other T18 features (clenched hands, rocker bottom feet, micrognathia).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/choroid-plexus-cyst',
          tags: ['ultrasound', 'obstetrics', 'fetal-brain', 'aneuploidy'],
        },
      },
    ],
  },
  {
    id: 'ob-spine',
    label: 'Fetal Spine & Musculoskeletal',
    cards: [
      {
        id: 'ob-spine-001',
        front: {
          question: 'What is a myelomeningocele and how does it differ from meningocele on imaging?',
        },
        back: {
          answer: 'Myelomeningocele: posterior defect with herniation of meninges + neural tissue (more common). Meningocele: herniation of meninges only (CSF, no neural tissue). Both show splayed posterior vertebral elements and dorsal skin defect on US.',
          explanation: 'Spinal dysraphism from incomplete neural tube closure. Myelomeningocele is most common in the lumbar spine, followed by cervical. It is virtually always associated with Chiari II brain changes (banana and lemon signs). The spinal level should be determined by counting down from the skull, as this correlates with functional outcome. Skin covering implies better prognosis.',
          keyFact: 'Myelomeningocele = neural tissue + meninges herniated. Virtually always → Chiari II. Abnormal brain (banana sign) = assume spinal NTD. Normal brain + spinal mass = think sacrococcygeal teratoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/myelomeningocele',
          tags: ['ultrasound', 'obstetrics', 'fetal-spine', 'neural-tube'],
        },
      },
      {
        id: 'ob-spine-002',
        front: {
          question: 'What is sacrococcygeal teratoma, and how is it distinguished from myelomeningocele?',
        },
        back: {
          answer: 'SCT: germ cell tumor of sacrum, most common fetal/neonatal tumor. Mixed solid and cystic mass arising from sacrococcyx with intact overlying skin and normal brain. Myelomeningocele: dorsal defect with abnormal brain (Chiari II).',
          explanation: 'Sacrococcygeal teratoma (SCT) is classified by extent: external only (47%), internal only (9%), or dumbbell (34%). The normal spine tapers and skin is intact — key distinguishing features from myelomeningocele. SCT can cause high-output cardiac failure (large AV shunting), hydrops, polyhydramnios, and preterm labor. Most are benign, but malignant potential increases in lesions presenting later in life (>2 months).',
          keyFact: 'SCT: intact skin + normal brain = NOT myelomeningocele. Look for high-output cardiac failure/hydrops. Location = external sacrum (most common). 80% benign.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sacrococcygeal-teratoma',
          tags: ['ultrasound', 'obstetrics', 'fetal-spine', 'tumor'],
        },
      },
      {
        id: 'ob-spine-003',
        front: {
          question: 'What is thanatophoric dysplasia, and what are its classic imaging features?',
        },
        back: {
          answer: 'Lethal skeletal dysplasia. Classic features: telephone receiver–shaped femurs, severe rhizomelic limb shortening and bowing, platyspondyly (flattened vertebrae), small chest, cloverleaf skull (from premature craniosynostosis). Normal bone mineralization.',
          explanation: 'Thanatophoric dysplasia is the most common lethal skeletal dysplasia. The severe chest hypoplasia leads to pulmonary hypoplasia and perinatal death. Unlike osteogenesis imperfecta, bone mineralization is normal. The cloverleaf skull results from premature fusion of the coronal and lambdoid sutures, causing the temporal and frontal lobes to bulge. Type 2 is associated with the cloverleaf skull; Type 1 has curved "telephone receiver" femurs without cloverleaf.',
          keyFact: 'Thanatophoric = telephone-receiver femurs + platyspondyly + cloverleaf skull + normal mineralization + lethal. Contrast with OI: decreased mineralization + fractures.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thanatophoric-dysplasia',
          tags: ['ultrasound', 'obstetrics', 'skeletal-dysplasia', 'second-trimester'],
        },
      },
      {
        id: 'ob-spine-004',
        front: {
          question: 'How is osteogenesis imperfecta (OI) distinguished from thanatophoric dysplasia, and which OI type is lethal?',
        },
        back: {
          answer: 'OI: decreased bone mineralization (skull unusually translucent), wrinkled/angulated long bones from multiple fractures. Small chest from rib fractures. Type 2 is lethal (diagnosed 2nd trimester). Thanatophoric: normal mineralization, telephone-receiver femurs, no fractures.',
          explanation: 'OI results from abnormal type I collagen causing bones that fracture with minimal trauma. The decreased calvarial mineralization is the key differentiating feature: the nearfield brain (normally obscured by acoustic shadowing from the skull) becomes unusually visible due to poor skull ossification. Type 2 OI is the most severe and lethal form. Types 1, 3, and 4 are milder and usually diagnosed in the third trimester or postnatally.',
          keyFact: 'OI Type 2 = lethal. Key sign: decreased calvarium mineralization (brain too visible in nearfield). Wrinkled long bones = multiple in utero fractures. Thanatophoric: normal mineralization.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteogenesis-imperfecta',
          tags: ['ultrasound', 'obstetrics', 'skeletal-dysplasia', 'second-trimester'],
        },
      },
      {
        id: 'ob-spine-005',
        front: {
          question: 'What is clubfoot (talipes equinovarus), and how is it identified on fetal ultrasound?',
        },
        back: {
          answer: 'Plantar surface of foot visible in the same plane as tibia and fibula (foot fixed in plantar flexion, adducted forefoot, inverted heel). May be isolated or associated with underlying genetic disorder.',
          explanation: 'The ankle-foot relationship should be assessed in every fetal survey. In clubfoot, the normal 90° relationship between the foot and lower leg is lost — the plantar surface of the foot appears in the same imaging plane as the leg, indicating fixed plantar flexion. Isolated clubfoot has an excellent prognosis. When associated with other structural anomalies, workup for chromosomal abnormalities is indicated.',
          keyFact: 'Clubfoot: plantar foot seen in same plane as lower leg bones. If isolated = good prognosis. If other anomalies present → karyotype.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/clubfoot',
          tags: ['ultrasound', 'obstetrics', 'fetal-musculoskeletal', 'second-trimester'],
        },
      },
    ],
  },
  {
    id: 'ob-thorax',
    label: 'Fetal Thorax & Cardiac',
    cards: [
      {
        id: 'ob-thorax-001',
        front: {
          question: 'What is congenital diaphragmatic hernia (CDH), what is the most common location, and what is its most common serious complication?',
        },
        back: {
          answer: 'Herniation of abdominal organs through a diaphragmatic defect. Most common: left posterior Bochdalek hernia (85%). Most serious complication: pulmonary hypoplasia.',
          explanation: 'CDH is the most common cause of a fetal intrathoracic mass. Left-sided Bochdalek hernias (mnemonic: "back to the left") most commonly contain bowel ± stomach. Classic prenatal US: cystic intrathoracic mass + absent subdiaphragmatic stomach + rightward cardiac displacement. Pulmonary hypoplasia from compression of developing lungs is the primary cause of mortality. Right-sided hernias are Morgagni (anterior), most commonly containing liver.',
          keyFact: 'CDH: left Bochdalek (85%) = stomach in chest + heart displaced right + pulmonary hypoplasia. Morgagni = right anterior = liver most commonly herniated.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/congenital-diaphragmatic-hernia',
          tags: ['ultrasound', 'obstetrics', 'fetal-thorax', 'second-trimester'],
        },
      },
      {
        id: 'ob-thorax-002',
        front: {
          question: 'What is congenital pulmonary airway malformation (CPAM) and how does it differ from pulmonary sequestration?',
        },
        back: {
          answer: 'CPAM: hamartomatous proliferation of airways communicating with bronchial tree; pulmonary (not systemic) blood supply. Sequestration: non-communicating aberrant lung tissue with systemic blood supply (usually from aorta), most often left lower lobe.',
          explanation: 'Both are bronchopulmonary foregut malformations, and hybrid lesions are common. CPAM (formerly CCAM) may appear as cystic or solid echogenic mass depending on cyst size. Many CPAMs decrease in size during pregnancy and may be invisible on postnatal US but visible on CT/MRI. Sequestration\'s key feature is a systemic feeding vessel identified by color Doppler — essential for diagnosis. An echogenic mass at the left lung base that has a systemic feeding vessel = sequestration.',
          keyFact: 'CPAM = pulmonary blood supply, communicates with bronchi. Sequestration = systemic aortic blood supply, no bronchial communication. Color Doppler identifies feeding vessel.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/congenital-pulmonary-airway-malformation',
          tags: ['ultrasound', 'obstetrics', 'fetal-thorax', 'second-trimester'],
        },
      },
      {
        id: 'ob-thorax-003',
        front: {
          question: 'What four sonographic views of the fetal heart are required in a standard second-trimester survey?',
        },
        back: {
          answer: '(1) Four-chamber view. (2) Left ventricular outflow tract (LVOT). (3) Right ventricular outflow tract (RVOT). (4) Three-vessel view (main PA, ductus arteriosus, aortic arch, SVC).',
          explanation: 'The four-chamber view identifies cardiac situs, chamber size symmetry, and the crux of the heart. LVOT shows the aorta arising from the left ventricle with the anterior mitral leaflet. RVOT shows the pulmonary artery from the right ventricle crossing the aorta. The three-vessel view assesses the relative sizes of PA, aorta, and SVC. CHD detection when found prenatally always warrants fetal karyotype due to high aneuploidy association.',
          keyFact: 'RV identified by: moderator band + tricuspid valve inserts more apically than mitral. 4-chamber view misses most conotruncal anomalies — need outflow views.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fetal-echocardiography',
          tags: ['ultrasound', 'obstetrics', 'fetal-cardiac', 'second-trimester'],
        },
      },
      {
        id: 'ob-thorax-004',
        front: {
          question: 'What is the most common congenital heart defect, and which CHD is most strongly associated with Down syndrome?',
        },
        back: {
          answer: 'Most common CHD: ventricular septal defect (VSD). Most strongly associated with Down syndrome: atrioventricular (AV) septal defect (endocardial cushion defect/AV canal defect).',
          explanation: 'VSD is the most common CHD overall and appears as a defect in the interventricular septum on four-chamber view with bidirectional color Doppler flow. AV septal defect (AVSD/endocardial cushion defect) shows a central "hole" in the heart on four-chamber view — absence of the AV septum with a single common AV valve leaflet. AVSD has the strongest CHD association with trisomy 21, occurring in ~40% of Down syndrome fetuses with CHD.',
          keyFact: 'VSD = most common CHD. AV septal defect (central hole on 4CH view) = strongest Down syndrome association. Also seen in trisomy 21: TOF, echogenic intracardiac focus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/atrioventricular-septal-defect',
          tags: ['ultrasound', 'obstetrics', 'fetal-cardiac', 'aneuploidy'],
        },
      },
      {
        id: 'ob-thorax-005',
        front: {
          question: 'What are the classic fetal echocardiographic features of tetralogy of Fallot (TOF) and transposition of the great arteries (TGA)?',
        },
        back: {
          answer: 'TOF: overriding dilated aorta + subaortic VSD + hypoplastic RVOT (small PA). 4CH view can be normal. TGA: parallel (not crossing) orientation of PA and aorta on outflow views; 3-vessel view shows only 2 vessels (no PA). 4CH view may appear normal.',
          explanation: 'In normal development, the aorta and pulmonary artery cross each other at ~90°. In TGA, they run parallel — the aorta arises anteriorly from the right ventricle and the PA posteriorly from the left ventricle. In TOF, the aorta is large, overrides the ventricular septum, and the PA is small. A normal 4-chamber view does not exclude conotruncal anomalies — outflow tract views are essential.',
          keyFact: 'TOF: large overriding Ao + small PA + subaortic VSD. TGA: parallel great vessels + only 2 vessels on 3-vessel view. Normal 4CH view does NOT exclude these diagnoses.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tetralogy-of-fallot',
          tags: ['ultrasound', 'obstetrics', 'fetal-cardiac', 'second-trimester'],
        },
      },
    ],
  },
  {
    id: 'ob-abdomen',
    label: 'Fetal Abdomen & GI',
    cards: [
      {
        id: 'ob-abdomen-001',
        front: {
          question: 'What are the classic sonographic features of duodenal atresia, and what aneuploidy must be excluded?',
        },
        back: {
          answer: '"Double bubble sign": dilated stomach + dilated proximal duodenum (connected). Polyhydramnios. Associated with trisomy 21 (~30%) — thorough cardiac and anatomic survey mandatory.',
          explanation: 'Duodenal atresia results from failure of recanalization of the duodenal lumen and is the most common cause of fetal duodenal obstruction. The two dilated structures (stomach and proximal duodenum) communicate, distinguishing it from two separate cysts. Because the obstruction is proximal to most GI absorption, polyhydramnios develops. The differential includes duodenal web, stenosis, and annular pancreas.',
          keyFact: 'Double bubble = duodenal atresia = strong T21 association (~30%). Always perform cardiac survey + check nuchal fold if 16–20 weeks. Polyhydramnios expected.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/duodenal-atresia',
          tags: ['ultrasound', 'obstetrics', 'fetal-abdomen', 'trisomy'],
        },
      },
      {
        id: 'ob-abdomen-002',
        front: {
          question: 'How do omphalocele and gastroschisis differ in terms of location, covering, cord insertion, and associated anomalies?',
        },
        back: {
          answer: 'Omphalocele: midline, covered by peritoneal membrane, cord inserts into sac, associated anomalies in 50–75% (CHD, trisomies, Beckwith-Wiedemann). Gastroschisis: right paraumbilical, no covering, cord inserts normally to left of defect, usually isolated.',
          explanation: 'Both defects cause herniation of bowel through the anterior abdominal wall, but they differ fundamentally. Omphalocele is a midline defect with the cord at the apex of the sac — a persistence of the physiologic herniation process. Liver in the sac correlates paradoxically with better prognosis and fewer chromosomal anomalies. Gastroschisis results from a vascular insult right of the umbilicus; bowel floats freely in amniotic fluid, causing chemical peritonitis and bowel injury.',
          keyFact: 'Omphalocele: midline, peritoneal cover, cord into sac, 50–75% other anomalies. Gastroschisis: right-sided, no cover, normal cord insertion, usually isolated.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/omphalocele',
          tags: ['ultrasound', 'obstetrics', 'fetal-abdomen', 'second-trimester'],
        },
      },
      {
        id: 'ob-abdomen-003',
        front: {
          question: 'What is the difference between physiologic midgut herniation and a pathologic ventral wall defect, and when should a true defect be diagnosed?',
        },
        back: {
          answer: 'Physiologic midgut herniation occurs normally at 9–12 weeks (midgut rotates 270° around SMA into cord). Returns by 12–13 weeks. A pathologic defect (omphalocele, gastroschisis) should not be diagnosed before 13 weeks. Mass ≥7 mm at cord base before 13 weeks warrants follow-up.',
          explanation: 'During the first trimester, the rapidly growing midgut temporarily herniates into the umbilical cord and rotates 270° counterclockwise around the SMA. This is a normal embryological event and must not be confused with omphalocele. The herniation returns to the abdominal cavity by 12–13 weeks. A large cord-base fullness (≥7 mm) before 13 weeks warrants repeat imaging at 13 weeks to assess for persistence.',
          keyFact: 'Physiologic herniation = normal at 9–12 weeks (270° rotation). Do NOT diagnose omphalocele before 13 weeks. Mass ≥7 mm at cord base = follow up at 13 weeks.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/physiological-midgut-herniation',
          tags: ['ultrasound', 'obstetrics', 'fetal-abdomen', 'first-trimester'],
        },
      },
      {
        id: 'ob-abdomen-004',
        front: {
          question: 'What are the causes and imaging appearances of hyperechoic fetal bowel?',
        },
        back: {
          answer: 'Causes: trisomy 21, TORCH infection, cystic fibrosis, swallowed blood (subchorionic hemorrhage), IUGR, bowel atresia. Significant when echogenicity equals or exceeds iliac crest bone. Mildly hyperechoic (less than bone) with no mass effect may be normal variant.',
          explanation: 'Echogenic bowel is a non-specific finding. The threshold matters: bowel echogenicity equal to bone is abnormal. When associated with other Down syndrome markers, the risk is elevated. In cystic fibrosis, meconium becomes inspissated. TORCH infections cause bowel inflammation and calcification. The finding should prompt a thorough search for other anomalies and consideration of amniocentesis.',
          keyFact: 'Echogenic bowel = significant only when as bright as bone. DDx: T21, CF, TORCH, blood swallowing. Always look for other anomalies.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/echogenic-fetal-bowel',
          tags: ['ultrasound', 'obstetrics', 'fetal-abdomen', 'aneuploidy'],
        },
      },
      {
        id: 'ob-abdomen-005',
        front: {
          question: 'What are meconium peritonitis and meconium pseudocyst, and what do they indicate?',
        },
        back: {
          answer: 'Meconium peritonitis: chemical peritonitis from in utero bowel perforation → ascites, adhesions, dystrophic calcifications. Meconium pseudocyst: walled-off perforation with peripheral calcification. Causes: bowel atresia, cystic fibrosis.',
          explanation: 'When bowel perforates in utero, meconium spills into the peritoneal cavity. The resulting sterile chemical peritonitis leads to intense inflammation, adhesion formation, and eventually dystrophic calcifications (seen as echogenic peritoneal foci on US). A pseudocyst forms when meconium is walled off by adhesions, creating a calcified-rim cystic structure. Meconium ileus (bowel obstruction from inspissated meconium) is nearly pathognomonic for cystic fibrosis.',
          keyFact: 'Meconium peritonitis = bowel perforation → peritoneal calcifications + ascites. Pseudocyst = walled-off perforation, calcified rim. Meconium ileus = CF (nearly always).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meconium-peritonitis',
          tags: ['ultrasound', 'obstetrics', 'fetal-abdomen', 'second-trimester'],
        },
      },
    ],
  },
  {
    id: 'ob-gu',
    label: 'Fetal Genitourinary',
    cards: [
      {
        id: 'ob-gu-001',
        front: {
          question: 'What is the 2014 UTD classification system for fetal hydronephrosis, and what anterior-posterior renal pelvis diameter (APRPD) thresholds are used?',
        },
        back: {
          answer: 'Normal: APRPD <4 mm (<28 wks); <7 mm (≥28 wks). Possibly abnormal: 4–<7 mm (<28 wks); 7–<10 mm (≥28 wks). Abnormal: ≥7 mm (<28 wks); ≥10 mm (≥28 wks). Also abnormal: calyceal dilation, abnormal parenchyma, dilated ureter, abnormal bladder, oligohydramnios from urinary cause.',
          explanation: 'The UTD (urinary tract dilation) classification replaced older pelvicaliectasis terminology. APRPD <4 mm is always normal regardless of gestational age. Additional features that upgrade severity include peripheral calyceal dilation, cortical thinning/echogenicity, hydroureter, abnormal bladder morphology, and oligohydramnios. Fetal kidneys grow ~1 mm/week.',
          keyFact: 'APRPD <4 mm = always normal. At ≥28 weeks: ≥10 mm = abnormal. Calyceal dilation or parenchymal changes independently define abnormal (regardless of APRPD).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fetal-hydronephrosis',
          tags: ['ultrasound', 'obstetrics', 'fetal-genitourinary', 'second-trimester'],
        },
      },
      {
        id: 'ob-gu-002',
        front: {
          question: 'What is the "keyhole sign" in fetal ultrasound, what does it represent, and what is the underlying diagnosis?',
        },
        back: {
          answer: 'Keyhole sign: dilated posterior urethra + distended bladder forming a "keyhole" shape = posterior urethral valves (PUV) in male fetuses.',
          explanation: 'PUV are the most common cause of bladder outlet obstruction in male fetuses. The membranous flap in the posterior urethra blocks urinary outflow, causing progressive dilation of the posterior urethra (the "key"), the bladder (the "hole"), and retrograde dilation of the ureters and kidneys. Severe oligohydramnios results from inability to excrete urine normally, leading to pulmonary hypoplasia and Potter sequence if untreated.',
          keyFact: 'Keyhole sign = PUV (males only). Dilated posterior urethra + thick-walled bladder + bilateral hydroureteronephrosis + oligohydramnios = classic PUV presentation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-urethral-valves',
          tags: ['ultrasound', 'obstetrics', 'fetal-genitourinary', 'second-trimester'],
        },
      },
      {
        id: 'ob-gu-003',
        front: {
          question: 'What are the characteristic ultrasound findings of ARPKD in utero, and what is the prognosis?',
        },
        back: {
          answer: 'Massively enlarged, hyperechoic (bright) bilateral kidneys with innumerable tiny cysts too small to resolve individually; severe oligohydramnios. Poor prognosis: pulmonary hypoplasia + Potter sequence in utero; hepatic fibrosis in survivors.',
          explanation: 'Autosomal recessive polycystic kidney disease (ARPKD) involves diffuse collecting tubule dilation. The cysts are microscopic, so the kidneys appear echogenic rather than showing discrete cysts. The markedly reduced renal function causes severe oligohydramnios. Survivors (if lungs adequate) develop progressive hepatic fibrosis. Distinguish from ADPKD (seen in older children/adults with discrete macroscopic cysts).',
          keyFact: 'ARPKD: massively enlarged echogenic kidneys + no discrete cysts (too small) + severe oligohydramnios. Bilateral = fatal without supportive care. Associated with hepatic fibrosis in survivors.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/autosomal-recessive-polycystic-kidney-disease',
          tags: ['ultrasound', 'obstetrics', 'fetal-genitourinary', 'cystic-renal'],
        },
      },
      {
        id: 'ob-gu-004',
        front: {
          question: 'What is multicystic dysplastic kidney (MCDK), how does it differ from hydronephrosis, and what is the clinical implication of bilateral involvement?',
        },
        back: {
          answer: 'MCDK: multiple non-communicating cysts interspersed with dysplastic parenchyma (end-result of severe obstructive uropathy). Hydronephrosis: dilated interconnected collecting system (cysts communicate). Bilateral MCDK = fatal.',
          explanation: 'In MCDK, the cysts do not communicate with each other or the collecting system — the key distinction from hydronephrosis/UPJ obstruction. If unilateral with no other anomalies, prognosis is excellent with spontaneous involution common. MCDK may affect only the upper pole of a duplicated system. Bilateral MCDK results in absent renal function → severe oligohydramnios → pulmonary hypoplasia and Potter sequence.',
          keyFact: 'MCDK: non-communicating cysts + dysplastic parenchyma. Bilateral = fatal. Unilateral = excellent prognosis (involutes). Non-communicating = key difference from hydronephrosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/multicystic-dysplastic-kidney',
          tags: ['ultrasound', 'obstetrics', 'fetal-genitourinary', 'cystic-renal'],
        },
      },
    ],
  },
  {
    id: 'ob-trisomies',
    label: 'Trisomies & Syndromes',
    cards: [
      {
        id: 'ob-trisomies-001',
        front: {
          question: 'A fetus is found to have holoprosencephaly, midline facial anomalies (hypotelorism, cleft lip), omphalocele, polydactyly, and horseshoe kidney. What is the most likely diagnosis?',
        },
        back: {
          answer: 'Trisomy 13 (Patau syndrome)',
          explanation: 'Trisomy 13 has a classic head-to-toe pattern: IUGR, holoprosencephaly, midline facial defects (cyclopia, cleft lip/palate, proboscis, hypotelorism), encephalocele, congenital heart disease, omphalocele, horseshoe kidney, polycystic kidneys, and polydactyly. Holoprosencephaly + midline facial anomalies are the hallmark combination — "the face predicts the brain."',
          keyFact: 'Trisomy 13 = holoprosencephaly + midline face defects (cyclopia/cleft) + polydactyly + omphalocele + horseshoe kidney. Lethal.',
          differentials: [
            { dx: 'Trisomy 13 (Patau syndrome)' },
            { dx: 'Trisomy 18 (Edwards syndrome)' },
            { dx: 'Meckel-Gruber syndrome' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/trisomy-13',
          tags: ['ultrasound', 'obstetrics', 'aneuploidy', 'trisomy'],
        },
      },
      {
        id: 'ob-trisomies-002',
        front: {
          question: 'A fetus at 22 weeks has IUGR, strawberry-shaped calvarium, choroid plexus cysts, micrognathia, clenched hands with overlapping fingers, rocker bottom feet, and omphalocele. What is the diagnosis?',
        },
        back: {
          answer: 'Trisomy 18 (Edwards syndrome)',
          explanation: 'Trisomy 18 shows a pathognomonic combination of IUGR + polyhydramnios + strawberry skull (inward bowing of frontal bones on axial view), choroid plexus cysts, micrognathia, clenched hands (that never open) with overlapping fingers, cardiac anomalies, omphalocele, CDH, horseshoe kidney, hydronephrosis, and rocker bottom feet. The clenched/overlapping hand and strawberry skull are the most characteristic features.',
          keyFact: 'Trisomy 18 = IUGR + strawberry skull + clenched overlapping fingers + CPC + rocker bottom feet. Single umbilical artery also associated. Nearly universally lethal.',
          differentials: [
            { dx: 'Trisomy 18 (Edwards syndrome)' },
            { dx: 'Trisomy 13 (Patau syndrome)' },
            { dx: 'Trisomy 21 (Down syndrome)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/trisomy-18',
          tags: ['ultrasound', 'obstetrics', 'aneuploidy', 'trisomy'],
        },
      },
      {
        id: 'ob-trisomies-003',
        front: {
          question: 'What are the most important sonographic markers for Down syndrome (trisomy 21), listed from most specific to less specific?',
        },
        back: {
          answer: 'Most specific: thickened nuchal fold ≥6 mm (16–20 weeks). Others: absent/hypoplastic nasal bone, duodenal atresia (double bubble), AV septal defect, echogenic intracardiac focus (EIF), echogenic bowel, short femur/humerus, clinodactyly, pyelectasis, sandal-gap toes, cystic hygroma.',
          explanation: 'The thickened nuchal fold (≥6 mm at 16–20 weeks) is the single most sensitive and specific second-trimester US marker for T21. Nuchal translucency (first trimester) is less specific. AV septal defect is the CHD with the strongest association. An echogenic intracardiac focus (calcified papillary muscle) occurs in 5% of normal fetuses but 12% of T21 fetuses. Absent nasal bone is the most useful isolated marker in fetuses at risk.',
          keyFact: 'NF ≥6 mm at 16–20 weeks = best T21 marker. T21 CHD: AV canal > VSD. Double bubble = duodenal atresia (most common T21 intra-abdominal finding). EIF: 4x increased risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/trisomy-21',
          tags: ['ultrasound', 'obstetrics', 'aneuploidy', 'trisomy'],
        },
      },
      {
        id: 'ob-trisomies-004',
        front: {
          question: 'What is the VACTERL association, and what are its components?',
        },
        back: {
          answer: 'Non-random association: Vertebral anomalies, Anal atresia, Cardiac (most commonly VSD), Tracheoesophageal fistula, Esophageal atresia, Renal anomalies, Limb defects (radial ray malformation).',
          explanation: 'VACTERL is a non-random association of structural anomalies — not a syndrome (no single unifying cause). At least 3 components must be present for the diagnosis. Radial ray anomalies (absent or hypoplastic radius/thumb) are the classic limb defect. Esophageal atresia with TEF (usually Type C with fistula) causes polyhydramnios and absent stomach bubble. Recognition prompts a thorough search for all other components.',
          keyFact: 'VACTERL: Vertebral + Anal atresia + Cardiac (VSD) + TE fistula + Esophageal atresia + Renal + Limb (radial ray). Not chromosomal — no single gene cause.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/vacterl',
          tags: ['ultrasound', 'obstetrics', 'syndrome', 'second-trimester'],
        },
      },
      {
        id: 'ob-trisomies-005',
        front: {
          question: 'What is Beckwith-Wiedemann syndrome (BWS), what are its imaging features, and what cancer screening does it require?',
        },
        back: {
          answer: 'Overgrowth syndrome: omphalocele, macroglossia, hemihypertrophy/asymmetric organomegaly, visceromegaly. Cancer risk: Wilms tumor (most common), hepatoblastoma. Screen with abdominal US every 3 months until age 8.',
          explanation: 'BWS is a genomic imprinting disorder with variable expression. Prenatal features include omphalocele, large tongue, and organomegaly. Perinatal hypoglycemia from beta-cell hyperplasia is characteristic. Hemihypertrophy (asymmetric limb/body enlargement) is a strong cancer risk factor. When omphalocele contains liver and lacks other chromosomal markers, BWS must be considered.',
          keyFact: 'BWS = omphalocele + macroglossia + hemihypertrophy. Screen for Wilms tumor with abdominal US every 3 months until age 8. Omphalocele containing liver = think BWS.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/beckwith-wiedemann-syndrome',
          tags: ['ultrasound', 'obstetrics', 'syndrome', 'second-trimester'],
        },
      },
      {
        id: 'ob-trisomies-006',
        front: {
          question: 'What is Meckel-Gruber syndrome and what is its classic triad?',
        },
        back: {
          answer: 'Autosomal recessive lethal syndrome. Triad: (1) Occipital encephalocele, (2) Polydactyly, (3) Renal dysplasia (echogenic kidneys from tiny cysts). Severe oligohydramnios (which may hide the other findings).',
          explanation: 'Meckel-Gruber is caused by mutations in ciliary genes (ciliopathy). The renal changes mimic ARPKD (massively echogenic kidneys from microcystic dysplasia). Severe oligohydramnios from the renal involvement can obscure visualization of the encephalocele and polydactyly. It is always lethal. The encephalocele is most commonly occipital. When the kidneys appear identical to ARPKD with oligohydramnios, always check for associated CNS and limb anomalies to exclude Meckel-Gruber.',
          keyFact: 'Meckel-Gruber = encephalocele + polydactyly + echogenic kidneys (like ARPKD). Autosomal recessive, always lethal. Oligohydramnios may mask other features.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meckel-gruber-syndrome',
          tags: ['ultrasound', 'obstetrics', 'syndrome', 'second-trimester'],
        },
      },
      {
        id: 'ob-trisomies-007',
        front: {
          question: 'What is amniotic band syndrome and how does it present on imaging?',
        },
        back: {
          answer: 'Disruption of amnion before 10 weeks → fibrous bands trap fetal parts → asymmetric amputations, craniofacial defects, body wall defects. US: fibrous bands + limb/digit amputations or facial clefts (asymmetric, not midline).',
          explanation: 'Amniotic band syndrome (ABS) occurs when the amnion ruptures early, allowing the fetus to enter the chorionic space and become entangled in fibrous bands. The presentation is highly variable but characteristically asymmetric. It can mimic anencephaly (asymmetric cranial defect), or be confused with limb reduction defects of other etiologies. Bands themselves may be visible on US.',
          keyFact: 'ABS: asymmetric amputations/facial clefts from fibrous bands. Distinguish from anencephaly (ABS = asymmetric; anencephaly = symmetric calvarium absence). Can occur in 1/1300–2000 births.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/amniotic-band-syndrome',
          tags: ['ultrasound', 'obstetrics', 'syndrome', 'first-trimester'],
        },
      },
    ],
  },
  {
    id: 'ob-maternal',
    label: 'Maternal Disorders & Postpartum',
    cards: [
      {
        id: 'ob-maternal-001',
        front: {
          question: 'A 32-year-old woman at 34 weeks presents with severe hypertension, RUQ pain, and elevated liver enzymes. She is found to have a subcapsular hepatic hematoma on ultrasound. What is the diagnosis?',
        },
        back: {
          answer: 'HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) — most severe form of pre-eclampsia.',
          explanation: 'HELLP syndrome typically occurs in young primigravid women in the third trimester. DIC develops in 20–40% of cases. The subcapsular hepatic hematoma is the classic imaging finding — a crescent-shaped fluid collection beneath the liver capsule on CT or US. In severe cases, hepatic rupture can occur. Management often requires urgent delivery. HELLP can also occur postpartum.',
          keyFact: 'HELLP = subcapsular liver hematoma in pregnant/postpartum female. DIC risk 20–40%. Most severe pre-eclampsia variant. Think HELLP for hepatic hematoma in pregnancy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hellp-syndrome',
          tags: ['ultrasound', 'obstetrics', 'maternal-complication', 'third-trimester'],
        },
      },
      {
        id: 'ob-maternal-002',
        front: {
          question: 'What is Sheehan syndrome and what is the classic MRI appearance?',
        },
        back: {
          answer: 'Postpartum pituitary infarct/apoplexy from acute hypotension (massive hemorrhage). Pituitary enlarges during pregnancy → vulnerable to ischemia. Acute: T1-bright hemorrhage. Late: empty sella with ring enhancement.',
          explanation: 'During pregnancy, the pituitary gland enlarges due to lactotroph hyperplasia. Severe postpartum hemorrhage causing acute hypotension leads to pituitary ischemia. Clinically presents with failure of lactation (first symptom), amenorrhea, and hypopituitarism. MRI shows acute T1 hyperintense pituitary (hemorrhagic infarct); chronically the gland atrophies leaving an empty sella with rim enhancement.',
          keyFact: 'Sheehan = postpartum pituitary infarct after massive hemorrhage. First symptom = failure to lactate. MRI: acute = T1 bright; late = empty sella.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sheehan-syndrome',
          tags: ['MRI', 'obstetrics', 'maternal-complication', 'postpartum'],
        },
      },
      {
        id: 'ob-maternal-003',
        front: {
          question: 'What is ovarian vein thrombophlebitis, and what are its characteristic imaging features?',
        },
        back: {
          answer: 'Ovarian vein thrombosis in postpartum women (more common after C-section). Right-sided in 80%. CT: tubular structure with enhancing wall and low-attenuation thrombus in location of ovarian vein. Complication: pulmonary embolism.',
          explanation: 'Ovarian vein thrombophlebitis typically presents as postpartum fever unresponsive to antibiotics. The right ovarian vein is more commonly affected because it drains directly into the IVC (the left drains into the left renal vein). Risk factors include C-section, endometritis, and prolonged labor. The tubular thrombosed vein can be seen on CT or US extending from the adnexa superiorly toward the IVC.',
          keyFact: 'OVT: postpartum fever + right-sided tubular adnexal mass with thrombosed vein on CT. Right 80% (drains directly to IVC). Risk: PE. Treat with anticoagulation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ovarian-vein-thrombosis',
          tags: ['CT', 'ultrasound', 'obstetrics', 'postpartum'],
        },
      },
      {
        id: 'ob-maternal-004',
        front: {
          question: 'What is peripartum cardiomyopathy and what are its cardiac MRI features?',
        },
        back: {
          answer: 'Dilated cardiomyopathy occurring in the last month of pregnancy to 5 months postpartum. MRI: globally depressed function + non-vascular territory subepicardial late gadolinium enhancement (LGE) corresponding to lymphocytic myocarditis.',
          explanation: 'Peripartum cardiomyopathy (PPCM) is a diagnosis of exclusion in a previously healthy woman. The subepicardial LGE in a non-coronary distribution distinguishes it from ischemic cardiomyopathy. Inflammatory lymphocytic infiltration causes the myocarditis pattern. Recovery of cardiac function occurs in ~50% within 6 months. Recurrence risk in subsequent pregnancies is significant.',
          keyFact: 'Peripartum CMP: dilated CMP + subepicardial LGE (non-vascular territory) on cardiac MRI. Last month pregnancy to 5 months postpartum. Non-ischemic pattern distinguishes from MI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/peripartum-cardiomyopathy',
          tags: ['MRI', 'obstetrics', 'maternal-complication', 'postpartum'],
        },
      },
      {
        id: 'ob-maternal-005',
        front: {
          question: 'What conditions cause splenic artery aneurysm growth during pregnancy, and what other vascular/lesion types are known to enlarge with pregnancy?',
        },
        back: {
          answer: 'Splenic artery aneurysms enlarge during pregnancy (risk of rupture highest in third trimester — 70% of pregnancy-related ruptures). Also grow: renal angiomyolipomas (AML), uterine fibroids. Fibroids: grow early (elevated estrogen), may undergo red (carneous) degeneration from venous thrombosis.',
          explanation: 'Splenic artery aneurysms are the most common visceral aneurysm and have a strong predilection for pregnancy-related rupture. AMLs (in tuberous sclerosis or sporadic) enlarge during pregnancy due to hormonal stimulation — significant bleeding risk if >4 cm. Fibroids initially grow under estrogen stimulation but later stabilize under progesterone influence; degeneration (especially red degeneration) causes acute pain.',
          keyFact: 'Pregnancy grows: splenic artery aneurysms + AMLs + fibroids. Splenic artery aneurysm rupture = highest risk in 3rd trimester. Red degeneration of fibroid = acute pain in pregnancy.',
          tags: ['ultrasound', 'obstetrics', 'maternal-complication', 'vascular'],
        },
      },
    ],
  },
  {
    id: 'ob-fetal-face',
    label: 'Fetal Face & Soft Markers',
    cards: [
      {
        id: 'ob-face-001',
        front: {
          question: 'What is the significance of an absent or hypoplastic nasal bone on fetal ultrasound, and at what gestational ages is it assessed?',
        },
        back: {
          answer: 'First trimester: associated with trisomy 21 specifically (strong marker). Second/third trimester: associated with general aneuploidy when seen with other markers. Should be assessed at 11–14 weeks (first trimester survey) and on standard second trimester anatomy scan.',
          explanation: 'The nasal bone is evaluated in the sagittal profile view. It appears as two echogenic lines (skin and bone). An absent or significantly hypoplastic nasal bone in the first trimester has a high likelihood ratio for trisomy 21. In the second trimester, absence alone in a high-risk fetus warrants amniocentesis consideration. The nasal bone should be clearly distinct from the nasal skin — a common pitfall is mistaking the skin-reflected echoes for bone.',
          keyFact: 'Absent nasal bone T1 = strong T21 marker. T2/T3 = general aneuploidy with other markers. Profile view: 2 echogenic lines (skin + bone). Only skin visible = absent nasal bone.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/absent-fetal-nasal-bone',
          tags: ['ultrasound', 'obstetrics', 'fetal-face', 'aneuploidy'],
        },
      },
      {
        id: 'ob-face-002',
        front: {
          question: 'What is an echogenic intracardiac focus (EIF), where is it located, and what is its clinical significance?',
        },
        back: {
          answer: 'Calcification of papillary muscle, most commonly in the left ventricle. Present in ~5% of normal fetuses; ~12% of trisomy 21. Isolated EIF = 4x increased T21 risk but low absolute risk. Perform thorough search for other T21 markers.',
          explanation: 'EIF appears as a discrete echogenic focus in the cardiac ventricle (left > right), equal in echogenicity to bone. It represents calcification of a papillary muscle (not a structural cardiac defect). While it has a 4-fold association with trisomy 21, the background risk is low (occurs in 5% of all pregnancies). As an isolated finding with normal serum screen and anatomy, many guidelines consider it a soft marker requiring no intervention. It is not associated with structural cardiac disease.',
          keyFact: 'EIF: calcified papillary muscle, LV most common. In normal population: 5%. In T21: 12%. Isolated EIF + normal screen = low absolute risk. Always look for other markers.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/echogenic-intracardiac-focus',
          tags: ['ultrasound', 'obstetrics', 'fetal-cardiac', 'aneuploidy'],
        },
      },
      {
        id: 'ob-face-003',
        front: {
          question: 'A second-trimester fetus has a complex cystic posterior neck mass with multiple septations. What is the most likely diagnosis, and what chromosomal abnormalities are associated?',
        },
        back: {
          answer: 'Cystic hygroma (congenital lymphatic malformation). Associated with: Turner syndrome (45,X) most commonly, also trisomy 21, trisomy 18, Noonan syndrome.',
          explanation: 'Cystic hygroma results from failure of lymphatic drainage into the jugular venous system. It appears as a large, posterior nuchal complex cystic mass with internal septations. When very large with a nuchal translucency appearance, it may represent a massive NT in a first-trimester fetus. In the second trimester, it is classically a posterior neck mass. Turner syndrome is the most common association. Cystic hygroma can be associated with hydrops (pleural effusions, ascites).',
          keyFact: 'Cystic hygroma: posterior neck, multiloculated cystic. Most common association: Turner syndrome (45,X). Also with T21, T18, Noonan. Can → hydrops.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cystic-hygroma',
          tags: ['ultrasound', 'obstetrics', 'fetal-face', 'aneuploidy'],
        },
      },
      {
        id: 'ob-face-004',
        front: {
          question: 'What are the normal and abnormal measurements for the cisterna magna?',
        },
        back: {
          answer: 'Normal: 2–11 mm. Too small (<2 mm): Chiari II malformation. Too large (>11 mm): Dandy-Walker spectrum (with absent or small vermis). Isolated prominence without vermian pathology = mega cisterna magna.',
          explanation: 'The cisterna magna is measured in the axial plane of the posterior fossa at the same level used for nuchal fold measurement. It lies posterior to the cerebellum and vermis. Small cisterna magna obliterated by the downward-herniated cerebellum is the classic Chiari II finding. An enlarged cisterna magna with a normal or small vermis suggests Dandy-Walker malformation. Mega cisterna magna with a normal vermis is a benign variant.',
          keyFact: 'Cisterna magna: normal 2–11 mm. <2 mm = Chiari II. >11 mm + absent vermis = Dandy-Walker. Normal vermis + big CM = mega cisterna magna (benign).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cisterna-magna',
          tags: ['ultrasound', 'obstetrics', 'fetal-brain', 'second-trimester'],
        },
      },
    ],
  },
  {
    id: 'ob-first-trimester-anatomy',
    label: 'First Trimester Embryo Anatomy',
    cards: [
      {
        id: 'ob-fta-001',
        front: {
          question: 'What structures should be evaluated on a 11–14 week fetal survey?',
        },
        back: {
          answer: 'Falx cerebri, stomach bubble, bladder, ventral abdominal wall (cord base), presence of four extremities, nuchal translucency. Assess placentation, cervix, and adnexa.',
          explanation: 'The 11–14 week scan ("dating and NT scan") combines gestational age determination, NT measurement, and early anatomy assessment. The falx cerebri identifies appropriate intracranial development. Absence of the stomach bubble suggests esophageal atresia or swallowing impairment. Bladder visibility confirms normal renal function at this stage. Assessment of the abdominal wall helps exclude major ventral defects (after 13 weeks). The NT is the major soft marker measured at this scan.',
          keyFact: 'First trimester anatomy: falx + stomach + bladder + abdominal wall + 4 limbs + NT. Omphalocele/gastroschisis cannot be diagnosed before 13 weeks (physiologic herniation normal <13 wks).',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'anatomy'],
        },
      },
      {
        id: 'ob-fta-002',
        front: {
          question: 'What is the double bleb sign and what does it represent?',
        },
        back: {
          answer: 'Two adjacent fluid-filled sacs (amniotic and yolk sac) with the embryonic disc between them — the earliest visualization of the embryo at ~5–6 weeks.',
          explanation: 'The double bleb sign represents the embryo at its earliest visible stage, when only the amniotic and yolk sacs are distinguishable with a thin flat disc of embryonic tissue between them. The amniotic sac remains separated from the chorionic space until 14–16 weeks, at which point normal fusion occurs. Early amnion disruption (before 10 weeks) allows the fetus to cross into the chorionic space where it can become entangled in fibrous septa (amniotic band syndrome).',
          keyFact: 'Double bleb: amniotic sac + yolk sac + embryo disc = earliest embryo at 5–6 weeks. Amnion fuses with chorion at 14–16 weeks. Early rupture → amniotic band syndrome.',
          tags: ['ultrasound', 'obstetrics', 'first-trimester', 'embryo'],
        },
      },
    ],
  },
]