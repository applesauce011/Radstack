// ============================================================
// RadStack — Abdominal Radiology Deck
// Sources: Prometheus Lionhart GI/Abdominal ADH_2020,
//          Core GI reference PDF, Radiopaedia knowledge base
// ============================================================

export const abdominalSubsections = [

  // ============================================================
  // GI TRACT — Esophagus
  // ============================================================
  {
    id: 'abd-gi-esophagus',
    label: 'Esophagus',
    cards: [
      {
        id: 'abd-gi-001',
        front: {
          question: 'What is the B-ring of the esophagus, and when is it called a Schatzki ring?',
          hint: 'Think GE junction, mucosal ring',
        },
        back: {
          answer: 'The B-ring is the mucosal ring at the gastroesophageal junction (below the vestibule). When it narrows to < 13 mm and causes symptomatic dysphagia, it is called a Schatzki ring.',
          explanation: 'The A-ring is the muscular ring above the vestibule; the B-ring is the thin mucosal constriction at the GE junction. The Z-line (squamocolumnar junction) does not necessarily correspond to the B-ring. On barium swallow, a Schatzki ring appears as a thin symmetric narrowing at the GE junction, typically in association with a hiatal hernia.',
          keyFact: 'Mnemonic: "Shatz-B-Ring" — Schatzki = B-ring + Symptomatic (< 13 mm). The A-ring is above, the B-ring is below the vestibule.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/schatzki-ring',
          tags: ['barium', 'esophagus', 'dysphagia', 'ge-junction', 'fluoroscopy'],
        },
      },
      {
        id: 'abd-gi-002',
        front: {
          question: 'What is the classic barium finding of Barrett\'s esophagus, and what is the key buzzword?',
        },
        back: {
          answer: 'High esophageal stricture with an associated hiatal hernia. Buzzword: reticular mucosal pattern.',
          explanation: 'Barrett\'s esophagus develops secondary to chronic gastroesophageal reflux, resulting in columnar metaplasia of the distal esophageal mucosa. It is a precursor to adenocarcinoma. On barium swallow, the classic appearance is a high stricture (mid-esophagus) combined with an associated hiatal hernia, reflecting the long-standing reflux environment.',
          keyFact: 'Barrett\'s = High Stricture + Hiatal Hernia on barium. Buzzword = reticular mucosal pattern. Leads to adenocarcinoma (lower esophagus).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/barretts-oesophagus',
          tags: ['barium', 'esophagus', 'barrett', 'adenocarcinoma', 'ge-junction'],
        },
      },
      {
        id: 'abd-gi-003',
        front: {
          question: 'Compare esophageal squamous cell carcinoma vs. adenocarcinoma: location, risk factors, and critical CT staging distinction.',
        },
        back: {
          answer: 'Squamous: mid-esophagus, risk factors = smoking, alcohol, lye ingestion. Adenocarcinoma: lower esophagus, risk factors = chronic reflux, Barrett\'s esophagus. Critical CT staging: T3 (adventitia) vs. T4 (invasion into adjacent structures).',
          explanation: 'On barium, both present with irregular contour and abrupt shouldered edges. CT is required to distinguish T3 from T4 disease — T4 invasion into adjacent structures (aorta, trachea) renders the tumor unresectable. Earlier T-staging is done endoscopically. Adenocarcinoma arises from Barrett\'s metaplasia; squamous typically arises in the mid-esophagus from squamous mucosa.',
          keyFact: 'T3 vs T4 is the radiologist\'s job on CT. Squamous = mid, Adeno = lower/GE junction. T4 = adjacent structure invasion = unresectable.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/oesophageal-carcinoma',
          tags: ['ct', 'barium', 'esophagus', 'cancer', 'staging'],
        },
      },
      {
        id: 'abd-gi-004',
        front: {
          question: 'What is achalasia on barium swallow, and what are two important associated complications?',
        },
        back: {
          answer: 'Dilated esophagus above a smooth tapered stricture at the GE junction — the "bird\'s beak" sign. Complications: increased risk of squamous cell carcinoma and Candida esophagitis.',
          explanation: 'Achalasia is a motility disorder caused by failure of the lower esophageal sphincter (LES) to relax and loss of normal peristalsis in the smooth-muscle distal two-thirds of the esophagus. On barium, the esophagus is massively dilated with retained food debris, narrowing to a smooth beak-like taper at the GE junction. Vigorous achalasia is an early form with repetitive simultaneous contractions.',
          keyFact: 'Bird\'s beak = smooth GE junction taper in a dilated esophagus. LES fails to relax (but will slowly relax — distinguishing it from pseudoachalasia). Risks: Candida + squamous CA.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/achalasia',
          tags: ['barium', 'esophagus', 'motility', 'achalasia', 'fluoroscopy'],
        },
      },
      {
        id: 'abd-gi-005',
        front: {
          question: 'How do you differentiate achalasia from pseudoachalasia (secondary achalasia) on imaging?',
        },
        back: {
          answer: 'Real achalasia: LES eventually relaxes; no mass at GE junction. Pseudoachalasia: fixed obstruction that does NOT relax; caused by cancer at the GE junction — you must show the mass.',
          explanation: 'Pseudoachalasia mimics achalasia on barium but is due to a malignancy (usually adenocarcinoma) infiltrating the GE junction. The key differentiating feature is that the GE junction in pseudoachalasia will not relax on fluoroscopy, whereas true achalasia gradually relaxes. Cancer risk factors (smoking, chronic reflux) in the history should raise suspicion. Next step: CT or upper GI endoscopy.',
          keyFact: 'Fixed non-relaxing GE junction = pseudoachalasia until proven otherwise. True achalasia relaxes; pseudo does not. Always look for an underlying mass.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pseudoachalasia',
          tags: ['barium', 'esophagus', 'achalasia', 'cancer', 'fluoroscopy'],
        },
      },
      {
        id: 'abd-gi-006',
        front: {
          question: 'What is the classic barium appearance of Candida esophagitis, and in what clinical settings does it occur?',
        },
        back: {
          answer: 'Discrete plaque-like filling defects, longitudinally oriented, separated by normal mucosa. Severe disease: "shaggy" irregular luminal surface. Occurs in immunocompromised patients (HIV, transplant) and motility disorders (achalasia, scleroderma).',
          explanation: 'Candida is the most common infectious esophagitis. Milder forms show nodularity, granularity, and fold thickening from mucosal inflammation. The shaggy appearance in severe cases reflects extensive mucosal ulceration and pseudomembrane formation. Glycogenic acanthosis mimics Candida but occurs in asymptomatic elderly patients without mucosal inflammation.',
          keyFact: 'Candida = shaggy esophagus (severe) or discrete plaques (mild), in an immunocompromised patient. Glycogenic acanthosis = same look, asymptomatic elderly patient.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/oesophageal-candidiasis',
          tags: ['barium', 'esophagus', 'infection', 'candida', 'immunocompromised'],
        },
      },
      {
        id: 'abd-gi-007',
        front: {
          question: 'Differentiate herpes vs. CMV/HIV esophageal ulcers on barium.',
        },
        back: {
          answer: 'Herpes: small, multiple ulcers with a halo of edema ("Herpes has a Halo"). CMV and HIV: large, flat ulcers (they look the same as each other).',
          explanation: 'Herpetic esophagitis causes small discrete superficial ulcers, typically in the mid-esophagus, surrounded by a radiolucent halo of edema on barium. CMV and HIV-related esophagitis produce large flat (geographic) ulcers, often in the distal esophagus. These distinctions are testable because the morphology and location differ despite both being viral etiologies.',
          keyFact: 'Herpes = small + multiple + halo of edema. CMV/HIV = large + flat. Mnemonic: "Herpes Has a Halo."',
          radiopaediaUrl: 'https://radiopaedia.org/articles/herpes-simplex-oesophagitis',
          tags: ['barium', 'esophagus', 'infection', 'ulcer', 'immunocompromised'],
        },
      },
      {
        id: 'abd-gi-008',
        front: {
          question: 'What is the difference between uphill and downhill esophageal varices on barium?',
        },
        back: {
          answer: 'Uphill varices: caused by portal hypertension, confined to the LOWER half of the esophagus. Downhill varices: caused by SVC obstruction (catheter or tumor), confined to the UPPER half of the esophagus.',
          explanation: 'Esophageal varices appear as linear serpentine filling defects causing a scalloped contour on barium. They must be distended (large bolus) to differentiate from varicoid carcinoma — varices flatten with a large barium bolus, while varicoid carcinoma does not. Both SVC obstruction and portal hypertension cause varices but in different locations.',
          keyFact: 'Uphill (portal HTN) = lower esophagus. Downhill (SVC obstruction) = upper esophagus. Varices flatten with bolus; varicoid CA does not.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/oesophageal-varices',
          tags: ['barium', 'esophagus', 'varices', 'portal-hypertension', 'svc'],
        },
      },
      {
        id: 'abd-gi-009',
        front: {
          question: 'Compare Zenker, Killian-Jamieson, and traction esophageal diverticula.',
        },
        back: {
          answer: 'Zenker: posterior, hypopharynx (NOT cervical esophagus), weakness at Killian\'s dehiscence. Killian-Jamieson: anterior/lateral, cervical esophagus, below cricopharyngeus. Traction: mid-esophagus, triangular, from granulomatous scarring (TB), will empty.',
          explanation: 'Zenker and Killian-Jamieson are both pulsion diverticula (round, will NOT empty spontaneously). Traction diverticula are triangular and will empty because they contain muscle in their walls. Zenker arises from the hypopharynx — not the cervical esophagus — a key testable distinction. Epiphrenic diverticula are just above the diaphragm, usually on the right, and are also pulsion-type.',
          keyFact: 'Zenker = back (posterior), hypopharynx, Killian\'s dehiscence. Killian-Jamieson = anterior/lateral, cervical esophagus. Traction = mid, triangular, empties.',
          differentials: [
            { dx: 'Zenker diverticulum' },
            { dx: 'Killian-Jamieson diverticulum' },
            { dx: 'Traction diverticulum (TB/granulomatous)' },
            { dx: 'Epiphrenic diverticulum' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/pharyngeal-pouch',
          tags: ['barium', 'esophagus', 'diverticulum', 'zenker', 'fluoroscopy'],
        },
      },
      {
        id: 'abd-gi-010',
        front: {
          question: 'What is eosinophilic esophagitis, and what is its classic barium appearance?',
        },
        back: {
          answer: 'Eosinophilic esophagitis (EoE) occurs in young men with dysphagia, atopy, and peripheral eosinophilia. Barium shows concentric rings — "ringed esophagus." Fails PPIs but responds to steroids.',
          explanation: 'EoE is an immune-mediated inflammatory condition driven by eosinophil infiltration of the esophageal mucosa. The concentric rings (also called "trachealization" or "feline esophagus" pattern) are characteristic on barium. Unlike GERD-related strictures, EoE involves the entire esophageal length and does not respond to PPIs. Biopsy showing >15 eosinophils per high-power field is diagnostic.',
          keyFact: 'Young atopic male + dysphagia + concentric rings on barium = EoE. Buzzword: ringed esophagus. Responds to steroids, NOT PPIs.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/eosinophilic-oesophagitis',
          tags: ['barium', 'esophagus', 'eosinophilic', 'dysphagia', 'allergy'],
        },
      },
      {
        id: 'abd-gi-011',
        front: {
          question: 'What is dysphagia lusoria and what causes it?',
        },
        back: {
          answer: 'Dysphagia caused by compression of the esophagus from an aberrant right subclavian artery (arteria lusoria). Most patients with an aberrant right subclavian are asymptomatic.',
          explanation: 'An aberrant right subclavian artery arises as the last branch of the aortic arch (rather than the first), passing posterior to the esophagus to reach the right arm. This posterior impression on the esophagus is visible on barium swallow as a posterior oblique filling defect at the level of the aortic arch. Only a minority of patients with this variant develop significant dysphagia.',
          keyFact: 'Dysphagia Lusoria = aberrant right subclavian compressing esophagus posteriorly. Most patients with aberrant right subclavian are asymptomatic. High yield for boards.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/dysphagia-lusoria',
          tags: ['barium', 'esophagus', 'vascular', 'dysphagia', 'congenital'],
        },
      },
      {
        id: 'abd-gi-012',
        front: {
          question: 'What are the Nissen fundoplication complications to know, and how do you detect a slipped wrap?',
        },
        back: {
          answer: 'Early: esophageal obstruction from tight wrap or edema (peak 2 weeks). Late failure: "slipped Nissen" — GE junction telescopes through wrap, most commonly from a short esophagus. A slipped wrap shows > 2 cm of narrowed esophagus above the wrap.',
          explanation: 'Fundoplication wraps the gastric fundus 360° (Nissen) around the LES. Barium shows the wrap as a smooth extrinsic impression on the distal esophagus. The narrowed segment within the wrap should be < 2 cm — anything more suggests slippage. A "short esophagus" is defined as a fixed non-reducible hiatal hernia > 5 cm; treatment is Collis gastroplasty plus fundoplication.',
          keyFact: 'Slipped Nissen cause = short esophagus. Wrap length > 2 cm = slipped. Cannot vomit after fundoplication. Recurrent hernia (GE junction above diaphragm) is never normal post-op.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nissen-fundoplication',
          tags: ['barium', 'esophagus', 'post-surgical', 'fundoplication', 'fluoroscopy'],
        },
      },
      {
        id: 'abd-gi-013',
        front: {
          question: 'What is scleroderma\'s effect on the esophagus, and what are the associated lung findings?',
        },
        back: {
          answer: 'Scleroderma involves the esophagus in 80% of cases. The incompetent LES causes chronic reflux, leading to strictures, Barrett\'s, and adenocarcinoma. The classic lung pattern is NSIP (ground glass with subpleural sparing). Small bowel shows "hidebound" pattern.',
          explanation: 'Scleroderma causes smooth muscle atrophy in the distal two-thirds of the esophagus, resulting in aperistalsis and an incompetent LES. This looks similar to achalasia, but the distinction is the incompetent LES (reflux occurs freely) rather than failure to relax. The accompanying NSIP pattern on chest imaging is a key clue in board exam questions.',
          keyFact: 'Scleroderma: LES incompetent (reflux) vs. achalasia: LES fails to relax (no reflux). NSIP on CT + barium esophageal findings = scleroderma. Small bowel hidebound pattern co-occurs.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/oesophageal-scleroderma',
          tags: ['barium', 'esophagus', 'scleroderma', 'motility', 'nsip'],
        },
      },
      {
        id: 'abd-gi-014',
        front: {
          question: 'What is esophageal pseudodiverticulosis, and what is it usually associated with?',
        },
        back: {
          answer: 'Multiple tiny flask-shaped outpouchings from dilated submucosal excretory gland ducts. Usually associated with chronic reflux esophagitis; esophageal stricture is seen in 90% of cases.',
          explanation: 'Esophageal pseudodiverticulosis (intramural pseudodiverticulosis) is an Aunt Minnie diagnosis on barium — the tiny collar-stud outpouchings parallel the esophageal lumen and are best seen on single-contrast barium studies. There is a debated association with Candida (may be cultured but not causative). The key association is with esophageal stricture in 90% of cases.',
          keyFact: 'Pseudodiverticulosis = dilated submucosal gland ducts on barium (not true diverticula). 90% have associated esophageal stricture. Usually due to chronic reflux esophagitis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/oesophageal-intramural-pseudodiverticulosis',
          tags: ['barium', 'esophagus', 'diverticulum', 'reflux', 'fluoroscopy'],
        },
      },
      {
        id: 'abd-gi-015',
        front: {
          question: 'What is Plummer-Vinson syndrome, and what is the key imaging finding?',
        },
        back: {
          answer: 'Iron deficiency anemia + dysphagia + esophageal/hypopharyngeal web + thyroid issues + spoon-shaped nails (koilonychia). Imaging: cervical esophageal web (circumferential, anterior and posterior) in the lower cervical region.',
          explanation: 'Esophageal webs are thin mucosal membranes most commonly located at the cervical esophagus near the cricopharyngeus. They differ from rings in that you never see a posterior-only web. Plummer-Vinson syndrome is a risk factor for development of esophageal and hypopharyngeal carcinoma. On barium, the web appears as an anterior shelf-like projection.',
          keyFact: 'Plummer-Vinson = iron deficiency + dysphagia + cervical esophageal web + koilonychia. Web is a risk factor for esophageal/hypopharyngeal carcinoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/plummer-vinson-syndrome',
          tags: ['barium', 'esophagus', 'web', 'plummer-vinson', 'iron-deficiency'],
        },
      },
      {
        id: 'abd-gi-016',
        front: {
          question: 'What is the feline esophagus, and what is its clinical significance?',
        },
        back: {
          answer: 'Transient, fine transverse folds in the mid and lower two-thirds of the esophagus. Can be normal, but has a high association with reflux esophagitis. Folds disappear with swallowing.',
          explanation: 'Feline esophagus (also called transverse folds or "ring-like" transient contractions) mimics the normal feline esophageal pattern. The key features are that the folds are transient (disappear with swallowing or relaxation) and confined to the lower two-thirds. When persistent or associated with other findings of esophagitis, clinical correlation is required.',
          keyFact: 'Feline esophagus = transient transverse folds in lower 2/3. Can be normal but correlate clinically for reflux. Folds disappear with swallowing — key to distinguish from rings.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/feline-oesophagus',
          tags: ['barium', 'esophagus', 'reflux', 'normal-variant', 'fluoroscopy'],
        },
      },
    ],
  },

  // ============================================================
  // GI TRACT — Stomach
  // ============================================================
  {
    id: 'abd-gi-stomach',
    label: 'Stomach',
    cards: [
      {
        id: 'abd-gi-017',
        front: {
          question: 'What features on barium distinguish a benign from a malignant gastric ulcer?',
        },
        back: {
          answer: 'Benign: depth > width, projects beyond expected lumen, sharp contour, folds radiate to ulcer, Hampton\'s line, mostly lesser curvature. Malignant: width > depth, within lumen, nodular/irregular edges, folds adjacent to ulcer, Carmen meniscus sign, anywhere.',
          explanation: 'Hampton\'s line is a thin radiolucent line across the neck of a benign ulcer, representing the undermined mucosa. The Carmen meniscus sign is a crescent-shaped collection of barium within a large malignant ulcer that does not project beyond the gastric wall. Gastric ulcers have a 5% chance of being malignant; duodenal ulcers are never malignant on multiple choice.',
          keyFact: 'Benign = Hampton\'s line, projects beyond lumen, lesser curvature. Malignant = Carmen meniscus, within lumen, anywhere. Gastric ulcers: 5% malignant. Duodenal ulcers: never malignant.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gastric-ulcer',
          tags: ['barium', 'stomach', 'ulcer', 'cancer', 'fluoroscopy'],
        },
      },
      {
        id: 'abd-gi-018',
        front: {
          question: 'What is the most common primary malignancy of the stomach, and what are the key imaging features on CT?',
        },
        back: {
          answer: 'Gastric adenocarcinoma (95% of primary gastric malignancies). CT: large ulcerated heterogeneous mass, usually distal stomach. Key associations: H. pylori (most tested risk factor), Virchow\'s node (left supraclavicular), Krukenberg tumor (ovarian mets).',
          explanation: 'Gastric adenocarcinoma has a peak incidence at age 70. Two-thirds arise from the distal stomach and are more likely to cause gastric outlet obstruction. On CT, the tumor extends beyond the serosa (T3 stage) and obliterates adjacent fat planes. Metastases to the ovary (Krukenberg tumor) and to the left supraclavicular node (Virchow\'s node) are classic associations.',
          keyFact: 'Gastric adeno: H. pylori #1 risk factor. Virchow node = left supraclavicular. Krukenberg = ovarian met. GC > lymphoma for: gastric outlet obstruction, distal location, focal mass.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gastric-adenocarcinoma',
          tags: ['ct', 'stomach', 'cancer', 'adenocarcinoma', 'staging'],
        },
      },
      {
        id: 'abd-gi-019',
        front: {
          question: 'What is GIST, where is it most common in the GI tract, and what are the key imaging features?',
        },
        back: {
          answer: 'Gastrointestinal stromal tumor — most common mesenchymal tumor of the GI tract. 70% in stomach (duodenum #2, colon least common). CT: smoothly marginated exophytic mass without lymph node enlargement. Malignant if > 10 cm with ulceration.',
          explanation: 'GISTs arise from the interstitial cells of Cajal. They are rare before age 40 and metastasize preferentially to the liver (NOT lymph nodes). Malignant potential correlates with size (> 5 cm) and mitotic rate. Associated syndromes: Carney\'s triad (GIST + pulmonary chondroma + extra-adrenal pheochromocytoma) and NF-1.',
          keyFact: 'GIST: smoothly marginated + exophytic, NO lymph node enlargement. Mets go to liver. Carney\'s Eat Garbage: Chondroma (pulmonary) + Extra-adrenal pheo + GIST. Also associated with NF-1.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gastrointestinal-stromal-tumour',
          tags: ['ct', 'stomach', 'gist', 'mesenchymal', 'mass'],
        },
      },
      {
        id: 'abd-gi-020',
        front: {
          question: 'What is gastric lymphoma, and how does it differ from gastric adenocarcinoma on imaging?',
        },
        back: {
          answer: 'Gastric lymphoma (usually non-Hodgkin) is the most common extranodal site for NHL. Key feature: RARELY causes gastric outlet obstruction even with massive involvement. Classically "crosses the pylorus." Can rupture with chemotherapy.',
          explanation: 'The stomach is the most common extranodal site for non-Hodgkin lymphoma. It can appear as MALT lymphoma (primary) or secondary to systemic lymphoma. Unlike adenocarcinoma, lymphoma is a "soft" tumor that distorts but rarely obstructs the pylorus. It has multiple appearances: infiltrative, polypoid, nodular, ulcerative, or linitis plastica-like.',
          keyFact: 'Lymphoma vs. adenocarcinoma: lymphoma rarely obstructs, crosses pylorus, soft tumor. Adenocarcinoma: causes obstruction, distal stomach, focal mass. Can rupture with chemo — testable.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gastric-lymphoma',
          tags: ['ct', 'barium', 'stomach', 'lymphoma', 'nhl'],
        },
      },
      {
        id: 'abd-gi-021',
        front: {
          question: 'What is Ménétrier\'s disease, and what are the key imaging features?',
        },
        back: {
          answer: 'Idiopathic gastropathy with massive rugal fold thickening classically involving the fundus and sparing the antrum. Leads to hypoproteinemia from protein loss into the gastric lumen. Bimodal: childhood form (CMV-related) and adult form.',
          explanation: 'Ménétrier\'s disease (hypertrophic gastropathy) shows giant gastric folds predominantly in the fundus on barium or CT. The antral sparing is the key distinguishing feature from lymphoma or carcinoma. Patients develop low serum albumin from protein-losing gastropathy. There is a slightly increased risk of gastric adenocarcinoma.',
          keyFact: 'Ménétrier\'s = massive rugal thickening in FUNDUS, spares ANTRUM, hypoalbuminemia. French-sounding name = high yield for boards. CMV-related in children.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/menetrier-disease',
          tags: ['barium', 'ct', 'stomach', 'rugal-thickening', 'menetrier'],
        },
      },
      {
        id: 'abd-gi-022',
        front: {
          question: 'What is linitis plastica, and what are the classic causes?',
        },
        back: {
          answer: 'Diffuse infiltration and desmoplastic thickening of the stomach wall producing a contracted, non-distensible "leather bottle" appearance. Classic causes: scirrhous gastric adenocarcinoma (most common), breast mets, lymphoma.',
          explanation: 'Linitis plastica (leather bottle stomach) results from diffuse submucosal malignant infiltration causing desmoplastic fibrosis. On barium, the stomach fails to distend and has a tubular, rigid appearance with loss of normal folds. Breast metastases (lobular carcinoma) and lung metastases can produce this appearance, as can lymphoma.',
          keyFact: 'Linitis plastica = scirrhous carcinoma OR breast/lung mets OR lymphoma. Leather bottle = non-distensible stomach on barium. Breast met (lobular type) = classic secondary cause.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/linitis-plastica',
          tags: ['barium', 'ct', 'stomach', 'cancer', 'mets'],
        },
      },
      {
        id: 'abd-gi-023',
        front: {
          question: 'Describe the two types of gastric volvulus and their clinical associations.',
        },
        back: {
          answer: 'Organoaxial: greater curvature flips over the lesser curvature; seen in older women with paraesophageal hernias; more common. Mesenteroaxial: twists over the mesentery; causes ischemia and obstruction; more common in children.',
          explanation: 'Gastric volvulus is a twist of the stomach that can lead to ischemia. Organoaxial rotation (the stomach rotates around its long axis) is most common and usually associated with paraesophageal hernias in older patients. Mesenteroaxial rotation (perpendicular to the long axis) is more likely to cause acute obstruction and requires urgent surgical correction.',
          keyFact: 'Organoaxial = most common, old woman, paraesophageal hernia, greater over lesser curvature. Mesenteroaxial = children, causes ischemia + obstruction, surgical emergency.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gastric-volvulus',
          tags: ['ct', 'barium', 'stomach', 'volvulus', 'emergency'],
        },
      },
      {
        id: 'abd-gi-024',
        front: {
          question: 'What are the location-based associations for gastric pathology?',
        },
        back: {
          answer: 'H. pylori gastritis = antrum. Zollinger-Ellison = antrum/body (jejunal ulcer is buzzword). Crohn\'s = antrum (rare in stomach). Ménétrier\'s = fundus (spares antrum). Lymphoma = crosses the pylorus. Gastric diverticulum = posterior fundus.',
          explanation: 'Location-based associations are frequently tested. H. pylori preferentially infects the antrum. Zollinger-Ellison causes ulcers in the duodenum/stomach/jejunum from excess gastrin. Ménétrier\'s specifically spares the antrum. A posterior fundal mass mimicking an adrenal mass on CT should prompt consideration of gastric diverticulum — find the normal adrenal.',
          keyFact: 'Antrum: H. pylori, ZE, Crohn\'s. Fundus: Ménétrier\'s. Gastric diverticulum: posterior fundus (mimics adrenal mass). Lymphoma crosses pylorus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/zollinger-ellison-syndrome',
          tags: ['ct', 'barium', 'stomach', 'location', 'gastritis'],
        },
      },
      {
        id: 'abd-gi-025',
        front: {
          question: 'What are the complications of Billroth II surgery?',
        },
        back: {
          answer: 'Dumping syndrome, afferent loop syndrome, increased risk of gastric adenocarcinoma (3–6× increased risk 10–20 years after surgery), bile reflux gastritis.',
          explanation: 'Billroth II (partial gastrectomy with gastrojejunostomy) removes the pylorus, leading to rapid gastric emptying (dumping). Afferent loop syndrome occurs when the afferent (duodenal) limb obstructs, causing biliary and pancreatic secretion backup, gallbladder dilation, and pancreatitis. Long-term risk of adenocarcinoma in the gastric remnant is 3–6× baseline, typically 15 years after surgery.',
          keyFact: 'Billroth II complications: dumping syndrome, afferent loop syndrome, gastric CA (3–6× at 15 years). Afferent loop obstruction = dilated afferent limb + pancreatitis + distended gallbladder.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/billroth-ii-procedure',
          tags: ['ct', 'stomach', 'post-surgical', 'billroth', 'complication'],
        },
      },
      {
        id: 'abd-gi-026',
        front: {
          question: 'What is splenic vein thrombosis, how does it present, and what causes it?',
          hint: 'Think isolated gastric varices',
        },
        back: {
          answer: 'Splenic vein thrombosis causes isolated gastric varices (without esophageal varices), because the short gastric veins become the collateral pathway. Most common causes: pancreatitis, pancreatic cancer, peripancreatic inflammation.',
          explanation: 'When the splenic vein thromboses, blood returning from the spleen is redirected through the short gastric veins, causing isolated fundal gastric varices. This is a "left-sided portal hypertension." Esophageal varices do NOT develop because the portal vein remains patent. Treatment is splenectomy.',
          keyFact: 'Splenic vein thrombosis = isolated GASTRIC varices (no esophageal). Caused by pancreatitis or pancreatic CA. Boards love: pancreatitis → splenic vein thrombus → gastric varices.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/splenic-vein-thrombosis',
          tags: ['ct', 'stomach', 'varices', 'pancreas', 'portal-hypertension'],
        },
      },
    ],
  },

  // ============================================================
  // GI TRACT — Small Bowel
  // ============================================================
  {
    id: 'abd-gi-smallbowel',
    label: 'Small Bowel',
    cards: [
      {
        id: 'abd-gi-027',
        front: {
          question: 'Describe the 3-step approach to evaluating small bowel folds on barium/fluoroscopy.',
        },
        back: {
          answer: 'Step 1: Fold thickness (thin < 3 mm vs. thick > 3 mm, straight vs. nodular, segmental vs. diffuse). Step 2: Loop separation (with/without tethering). Step 3: Trademark features (moulage sign, hidebound, fold reversal, cobblestoning).',
          explanation: 'Thin straight folds with dilation = obstruction/paralytic ileus/scleroderma/sprue. Thick straight segmental folds = ischemia/radiation/hemorrhage/adjacent inflammation. Thick straight diffuse folds = low protein/venous congestion/cirrhosis. Thick nodular segmental = Crohn\'s/infection/lymphoma. Thick nodular diffuse = Whipple\'s/lymphoma/lymphangiectasia.',
          keyFact: 'Loop separation WITHOUT tethering = ascites/wall thickening/adenopathy. WITH tethering = carcinoid (desmoplastic). Tethering looks like loops being pulled toward a mesenteric mass.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/small-bowel-follow-through',
          tags: ['barium', 'small-bowel', 'fluoroscopy', 'fold-pattern', 'approach'],
        },
      },
      {
        id: 'abd-gi-028',
        front: {
          question: 'What are the classic barium findings of celiac disease?',
        },
        back: {
          answer: 'Fold reversal (jejunum looks like ileum, ileum looks like jejunum in RLQ). Moulage sign (dilated jejunum with effaced folds, like "wax poured into a tube"). Splenic atrophy. Cavitary lymph nodes (low density).',
          explanation: 'Celiac disease (sprue) causes malabsorption from gluten-induced villous atrophy primarily in the duodenum and proximal jejunum. The jejunal folds normally have more folds than the ileum; celiac reverses this pattern. The moulage sign represents jejunal loops that are featureless and dilated. Complications include increased risk of T-cell lymphoma and small bowel adenocarcinoma.',
          keyFact: 'Celiac = FOLD REVERSAL (jejunum → ileum, ileum → jejunum). Moulage sign = tube of wax = no folds in dilated jejunum. Associated with T-cell lymphoma and Lane-Hamilton syndrome (pulmonary hemosiderosis).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/coeliac-disease',
          tags: ['barium', 'small-bowel', 'celiac', 'malabsorption', 'fluoroscopy'],
        },
      },
      {
        id: 'abd-gi-029',
        front: {
          question: 'What is Whipple\'s disease on imaging, and how do you differentiate it from pseudo-Whipple\'s?',
        },
        back: {
          answer: 'Whipple\'s (Tropheryma whipplei): "sand-like nodules" — diffuse micronodules in the jejunum, thickened folds, low-density (near fat) retroperitoneal lymph nodes. Pseudo-Whipple\'s (MAI): identical imaging in AIDS patient with CD4 < 100; distinguished by acid-fast stain (MAI positive).',
          explanation: 'Whipple\'s disease affects middle-aged white men (classically) with malabsorption, arthritis, and weight loss. The imaging shows thickened jejunal folds and characteristic mesenteric/retroperitoneal lymph nodes with near-fat attenuation (due to lipid-laden macrophages). MAI (Mycobacterium avium-intracellulare) infection in AIDS produces an identical appearance — differentiated by biopsy, not imaging.',
          keyFact: 'Whipple\'s = sand-like nodules (diffuse micronodules in jejunum) + low-density retroperitoneal nodes (fat density). Pseudo-Whipple\'s = same + AIDS + CD4 < 100. Acid-fast stain distinguishes (MAI positive).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/whipples-disease',
          tags: ['barium', 'ct', 'small-bowel', 'infection', 'whipple'],
        },
      },
      {
        id: 'abd-gi-030',
        front: {
          question: 'What are the "Rule of 2s" for Meckel\'s diverticulum, and what is the nuclear medicine test used to detect it?',
        },
        back: {
          answer: '2% of population, 2 types of heterotopic mucosa (gastric and pancreatic), 2 feet from ileocecal valve, 2 inches long, 2 cm diameter, symptoms before age 2. Nuclear medicine: Tc-99m pertechnetate scan (Meckel\'s scan) — detects gastric mucosa.',
          explanation: 'Meckel\'s is the most common congenital GI anomaly, a persistent remnant of the omphalomesenteric duct. Complications include GI bleeding (from ectopic gastric mucosa — 30% of symptomatic cases), diverticulitis (mimics appendicitis), intussusception lead point, and obstruction. It appears on CT as a blind-ending diverticulum from the antimesenteric border of the distal ileum.',
          keyFact: 'Rule of 2s for Meckel\'s. Tc-99m pertechnetate concentrates in gastric mucosa — positive Meckel scan = ectopic gastric mucosa (the ones that bleed). Located on antimesenteric border of distal ileum.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meckel-diverticulum',
          tags: ['nuclear-medicine', 'small-bowel', 'meckel', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'abd-gi-031',
        front: {
          question: 'What is Rigler\'s triad, and what is the classic board exam trick question associated with it?',
        },
        back: {
          answer: 'Rigler\'s triad for gallstone ileus: pneumobilia + mechanical small bowel obstruction + ectopic gallstone. Trick: Rigler\'s SIGN (free air sign on abdominal X-ray) is NOT part of Rigler\'s TRIAD.',
          explanation: 'Gallstone ileus is a mechanical small bowel obstruction caused by a large gallstone that has eroded through the gallbladder wall into the duodenum. The stone most commonly impacts at the terminal ileum (narrowest segment). Only elderly or debilitated patients develop the cholecystoduodenal fistula allowing stone passage. Rigler\'s sign (both sides of bowel wall visible = free air) is a separate radiographic sign.',
          keyFact: 'Rigler\'s TRIAD = pneumobilia + SBO + ectopic stone. Rigler\'s SIGN = free air on XR (both walls of bowel visible). These are DIFFERENT — a classic test trick.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gallstone-ileus',
          tags: ['xray', 'small-bowel', 'gallstone-ileus', 'obstruction', 'rigler'],
        },
      },
      {
        id: 'abd-gi-032',
        front: {
          question: 'What is carcinoid tumor of the small bowel, and what is its classic CT appearance?',
        },
        back: {
          answer: 'Carcinoid is the most common primary small bowel malignancy. Classic CT: mesenteric mass with "starburst" or sunburst calcifications from desmoplastic reaction; primary tumor often occult. Liver mets are hypervascular.',
          explanation: 'Carcinoid tumors arise from neuroendocrine (enterochromaffin) cells, most commonly in the distal ileum. The mesenteric desmoplastic reaction causes loop tethering and separation on barium. Carcinoid syndrome (flushing, diarrhea, right-sided heart valvulopathy — tricuspid regurgitation) occurs ONLY after liver metastases develop. MIBG and octreotide scans are used for staging.',
          keyFact: 'Carcinoid = starburst mesenteric mass + tethered bowel loops. Primary often not seen. Carcinoid syndrome only after liver mets (serotonin degraded before liver). Right heart valves (tricuspid regurgitation).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/small-bowel-carcinoid',
          tags: ['ct', 'small-bowel', 'carcinoid', 'neuroendocrine', 'mets'],
        },
      },
      {
        id: 'abd-gi-033',
        front: {
          question: 'What are the imaging features that distinguish small bowel adenocarcinoma from lymphoma?',
        },
        back: {
          answer: 'Adenocarcinoma: more likely to OBSTRUCT, located in proximal small bowel (duodenum most common), focal circumferential wall thickening. Lymphoma: usually does NOT obstruct (soft tumor), favors ileum, can be massive yet non-obstructing, associated with celiac/Crohn\'s/AIDS.',
          explanation: 'Small bowel adenocarcinoma is associated with celiac disease and Crohn\'s disease. It appears as a focal annular constricting lesion in the proximal small bowel. Lymphoma (usually non-Hodgkin) is a "soft tumor" that expands the bowel lumen without obstruction due to destruction of the autonomic plexus. Melanoma is the most common source of SB metastases, classically producing multiple target lesions.',
          keyFact: 'Adenocarcinoma obstructs; lymphoma does NOT (soft tumor). Adeno = proximal (duodenum). Lymphoma = ileum. Melanoma mets = multiple target lesions in SB.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/small-bowel-adenocarcinoma',
          tags: ['ct', 'small-bowel', 'cancer', 'lymphoma', 'adenocarcinoma'],
        },
      },
      {
        id: 'abd-gi-034',
        front: {
          question: 'What is graft-versus-host disease in the GI tract, and what is the buzzword?',
        },
        back: {
          answer: 'GVH occurs after bone marrow transplant affecting skin, liver, and GI tract. Barium buzzword: "ribbon bowel" — featureless, atrophic bowel with fold thickening. Small bowel is most severely affected.',
          explanation: 'GVH disease involves T-cells from the donor attacking host tissues. GI involvement causes diffuse mucosal inflammation and sloughing, resulting in the ribbon bowel appearance on barium. The bowel appears featureless and atrophic with thickened folds. On CT, the small bowel shows diffuse wall thickening and mucosal hyperenhancement. Less common with modern anti-rejection drugs.',
          keyFact: 'GVH = ribbon bowel on barium (featureless + atrophic + thickened folds). Post bone marrow transplant. Small bowel > large bowel involvement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/graft-versus-host-disease-gastrointestinal',
          tags: ['barium', 'ct', 'small-bowel', 'gvh', 'transplant'],
        },
      },
      {
        id: 'abd-gi-035',
        front: {
          question: 'What is SMA syndrome and who gets it?',
        },
        back: {
          answer: 'SMA syndrome is obstruction of the third portion of the duodenum by the SMA compressing it against the spine. Seen in patients who have recently lost significant weight (loss of the mesenteric fat pad that normally maintains the aortomesenteric angle).',
          explanation: 'The third (horizontal) portion of the duodenum passes between the aorta and SMA. With significant weight loss, the fat pad in this angle is reduced, allowing the SMA to compress the duodenum. CT shows abrupt cutoff of the duodenum at the level of the SMA with proximal dilation. The aortomesenteric angle is typically < 25° (normal 38–65°). Treatment may include nutritional rehabilitation or surgical bypass.',
          keyFact: 'SMA syndrome = duodenal obstruction at level of SMA in a cachectic patient. Look for: dilated proximal duodenum + abrupt cutoff at SMA crossing + recent weight loss.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/superior-mesenteric-artery-syndrome',
          tags: ['ct', 'small-bowel', 'duodenum', 'sma', 'obstruction'],
        },
      },
      {
        id: 'abd-gi-036',
        front: {
          question: 'What is shock bowel (hypovolemic shock complex) and how does it differ from bowel trauma on CT?',
        },
        back: {
          answer: 'Shock bowel: DIFFUSE wall thickening with near-water attenuation edema, intense mucosal enhancement, collapsed IVC, hypoenhancement of liver/spleen, hyperenhancement of adrenals. Bowel trauma: FOCAL wall thickening, high-attenuation blood in submucosa, normal or decreased mucosal enhancement, secondary signs of injury.',
          explanation: 'Hypovolemic shock complex results from severe hypotension causing diffuse bowel ischemia and massive fluid shifts. The CT appearance reflects widespread mesenteric arterial vasospasm with reactive bowel hyperemia once resuscitation begins. Collapsed IVC and bilateral delayed nephrograms (persistence nephrograms) are associated findings. Bowel trauma is focal with adjacent hematoma/free fluid.',
          keyFact: 'Shock bowel = DIFFUSE + intense mucosal enhancement + flat IVC + bright adrenals. Bowel trauma = FOCAL + submucosa blood (high attenuation) + normal or low mucosal enhancement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/shock-bowel',
          tags: ['ct', 'small-bowel', 'trauma', 'shock', 'emergency'],
        },
      },
    ],
  },

  // ============================================================
  // GI TRACT — Large Bowel and Rectum
  // ============================================================
  {
    id: 'abd-gi',
    label: 'GI Tract',
    cards: [
      {
        id: 'abd-gi-037',
        front: {
          question: 'Compare Crohn\'s disease vs. ulcerative colitis on imaging: 8 key distinguishing features.',
        },
        back: {
          answer: 'Crohn\'s: discontinuous (skip lesions), terminal ileum (string sign), ileocecal valve stenosed, mesenteric fat increased ("creeping fat"), lymph nodes enlarged, makes fistulae, right-sided colon, may spare rectum. UC: continuous, rectum always (95%), ICV open (backwash ileitis), lead pipe colon, no lymphadenopathy, no fistulae.',
          explanation: 'Crohn\'s is transmural and can affect any part of the GI tract (mouth to anus) in a discontinuous pattern. UC is a mucosal disease affecting the rectum and extending proximally in a continuous fashion. Complications of Crohn\'s include fistulae, abscesses, gallstones, fatty liver, sacroiliitis, and primary sclerosing cholangitis (more common in UC). Toxic megacolon occurs in both but more commonly in UC.',
          keyFact: 'PSC = UC (80%). Gallstones, hepatic abscess, pancreatitis = Crohn\'s. String sign = Crohn\'s TI. Lead pipe = UC. IBD = increased melanoma risk. String sign at IC valve is classic Crohn\'s board image.',
          differentials: [
            { dx: 'Crohn\'s disease' },
            { dx: 'Ulcerative colitis' },
            { dx: 'Ischemic colitis' },
            { dx: 'Infectious colitis' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/crohns-disease',
          tags: ['ct', 'barium', 'large-bowel', 'crohn', 'colitis'],
        },
      },
      {
        id: 'abd-gi-038',
        front: {
          question: 'What is Crohn\'s disease cobblestoning, and what other buzzwords are associated with Crohn\'s?',
        },
        back: {
          answer: 'Cobblestoning: raised islands of mucosa separated by linear ulcers running perpendicular to the bowel lumen. Other buzzwords: skip lesions, squaring of folds (early, obstructive lymphedema), proud loops (fat proliferation), string sign (terminal ileum narrowing), pseudodiverticula (anti-mesenteric side), filiform polyps.',
          explanation: 'Cobblestoning is pathognomonic of Crohn\'s disease and represents the combination of deep longitudinal and transverse ulcers with intervening edematous mucosal islands. It is best demonstrated on barium but also visible on CT. Pseudodiverticula in Crohn\'s form on the anti-mesenteric side where the wall bulges opposite the scarred, diseased mesenteric wall.',
          keyFact: 'Cobblestoning = longitudinal + transverse ulcers + edematous islands = Crohn\'s. Pseudodiverticula on anti-mesenteric side = Crohn\'s. String sign = severely narrowed TI from edema/spasm/fibrosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/crohns-disease-of-the-small-bowel',
          tags: ['barium', 'ct', 'large-bowel', 'crohn', 'small-bowel'],
        },
      },
      {
        id: 'abd-gi-039',
        front: {
          question: 'What is toxic megacolon: causes, key CT findings, and a critical management point?',
        },
        back: {
          answer: 'Causes: UC (primary), Crohn\'s, C. difficile. CT: gaseous colonic dilation > 6 cm (transverse colon on upright), loss of haustra, pseudopolyps. Do NOT perform barium enema (perforation risk). Peritonitis can occur without perforation.',
          explanation: 'Toxic megacolon is a life-threatening complication of severe colitis where transmural inflammation paralyzes the colonic muscularis, causing massive dilation. The transverse colon dilates most prominently on upright films because gas rises. CT shows colonic dilation with wall thickening and loss of haustra. Some sources state normal haustra excludes the diagnosis.',
          keyFact: 'Toxic megacolon: NO barium enema. UC > Crohn\'s > C. diff. Transverse colon dilates on upright (gas rises). Peritonitis WITHOUT perforation is possible — testable.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/toxic-megacolon',
          tags: ['ct', 'xray', 'large-bowel', 'colitis', 'emergency'],
        },
      },
      {
        id: 'abd-gi-040',
        front: {
          question: 'What is sigmoid volvulus vs. cecal volvulus: demographics, imaging appearance, and classic buzzwords?',
        },
        back: {
          answer: 'Sigmoid: elderly/nursing home patients, chronic constipation. Coffee bean sign (inverted 3 sign). Points to RUQ. Cecal: younger patients (20–40), long mesentery. Points to LUQ. Recurrence of sigmoid after decompression = 50%.',
          explanation: 'Sigmoid volvulus is the most common adult colonic volvulus. On abdominal X-ray, the massively dilated sigmoid colon assumes a coffee bean shape pointing to the right upper quadrant. On barium, the "bird beak" or inverted 3 sign (Frimann-Dahl\'s sign) shows 3 dense lines converging at the obstruction site. Cecal volvulus (less common) points to the left upper quadrant and requires surgery.',
          keyFact: 'Sigmoid = grandma, coffee bean sign, points RUQ, 50% recurrence. Cecal = young person, points LUQ. Para-esophageal hernia (Type 2) is usually on the LEFT; epiphrenic diverticulum on the RIGHT.',
          differentials: [
            { dx: 'Sigmoid volvulus' },
            { dx: 'Cecal volvulus' },
            { dx: 'Ogilvie syndrome (pseudo-obstruction)' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/sigmoid-volvulus',
          tags: ['xray', 'ct', 'large-bowel', 'volvulus', 'emergency'],
        },
      },
      {
        id: 'abd-gi-041',
        front: {
          question: 'What is colon cancer\'s classic barium appearance, and how do right-sided vs. left-sided colon cancers differ clinically?',
        },
        back: {
          answer: 'Classic barium: "apple core" lesion — annular constricting lesion with overhanging edges. Right-sided: bleeds (present with anemia/bloody stools). Left-sided: obstructs (present with obstruction). Large bowel intussusception in adult = malignancy until proven otherwise.',
          explanation: 'Colorectal adenocarcinoma is the #2 cause of cancer death overall. On CT, colon mets to liver are classically T1 dark, T2 mildly bright ("evil grey"), with heterogeneous non-progressive enhancement, sometimes with target sign. Colorectal cancer is the most common primary tumor to metastasize to the liver.',
          keyFact: 'Apple core = colon CA on barium. Right = bleed. Left = obstruct. Adult intussusception = malignancy. Colon mets to liver: T1 dark, T2 "evil grey," heterogeneous enhancement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/colorectal-carcinoma',
          tags: ['ct', 'barium', 'large-bowel', 'cancer', 'adenocarcinoma'],
        },
      },
      {
        id: 'abd-gi-042',
        front: {
          question: 'How is rectal cancer staged with MRI, and what is the critical T-stage that changes management?',
        },
        back: {
          answer: 'MRI (T2W only — contrast does not change staging) is used for rectal staging. Critical stage: T3 = tumor breaks through muscularis propria into perirectal fat → patient gets neoadjuvant chemoradiation before surgery. Nodes > 5 mm in perirectal fat are abnormal.',
          explanation: 'Rectal cancer staging by MRI defines surgical approach: tumors ≤ 5 cm from the anorectal angle = low rectal cancer → abdominoperineal resection (colostomy). Tumors > 5 cm = high rectal cancer → low anterior resection (continence preserved). Both require total mesorectal excision (TME). MRI is preferred for local staging; CT is preferred for distant metastases.',
          keyFact: 'Rectal MRI: T2W only. T3 = perirectal fat invasion = chemorad before surgery. Low (< 5 cm from anorectal angle) = APR = colostomy. High (> 5 cm) = LAR = continence preserved.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rectal-carcinoma',
          tags: ['mri', 'rectum', 'cancer', 'staging', 't2'],
        },
      },
      {
        id: 'abd-gi-043',
        front: {
          question: 'What are the imaging findings of C. difficile colitis?',
        },
        back: {
          answer: 'CT: "accordion sign" — alternating bands of high and low attenuation in the colon representing contrast trapped between thickened folds. Barium: thumbprinting, ulceration, irregularity. Classically after antibiotic therapy. Associated with very high WBC count.',
          explanation: 'C. difficile produces toxins that cause pseudomembranous colitis. The CT accordion sign represents thickened haustra trapping contrast (or oral contrast agent) between the mucosal folds. The colitis is often pancolonic. Severe cases can progress to toxic megacolon. The combination of colitis plus markedly elevated WBC (> 20,000) should prompt consideration of C. diff.',
          keyFact: 'C. diff = accordion sign on CT (contrast trapped in thickened folds). After antibiotics + very high WBC. Can cause toxic megacolon. Barium: thumbprinting + ulceration.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pseudomembranous-colitis',
          tags: ['ct', 'large-bowel', 'infection', 'cdiff', 'colitis'],
        },
      },
      {
        id: 'abd-gi-044',
        front: {
          question: 'What is the classic imaging of appendicitis on CT, and what is the threshold diameter?',
        },
        back: {
          answer: 'Appendiceal diameter > 6 mm (originally from US compression, applied to CT), periappendiceal fat stranding, wall thickening, possible fecalith. In pregnancy: MRI without contrast is the imaging test of choice.',
          explanation: 'On ultrasound, the inflamed appendix is a non-compressible blind-ending tubular structure > 6 mm in diameter. On CT, secondary signs (fat stranding, free fluid, phlegmon/abscess) are often more reliable than diameter alone. A fecalith (calcified appendicolith) in the right lower quadrant in the appropriate clinical setting is highly suggestive.',
          keyFact: 'Appendix > 6 mm + fat stranding = appendicitis. Secondary CT signs are more reliable than diameter alone. Pregnancy = MRI without contrast (no radiation).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acute-appendicitis',
          tags: ['ct', 'us', 'appendix', 'appendicitis', 'emergency'],
        },
      },
      {
        id: 'abd-gi-045',
        front: {
          question: 'Describe the polyposis syndromes: FAP, Gardner, Turcot, Lynch (HNPCC), Peutz-Jeghers, and Cowden.',
        },
        back: {
          answer: 'FAP: 100s of polyps, 100% colon CA before 40, hyperplastic gastric + adenomatous bowel polyps, desmoid tumors. Gardner = FAP + desmoids + osteomas + papillary thyroid CA. Turcot = FAP + gliomas/medulloblastomas. Lynch/HNPCC: DNA mismatch repair, solitary right-sided colon CA, endometrial CA. Peutz-Jeghers: hamartomas + mucocutaneous pigmentation + GI/pancreatic/GYN CA. Cowden: hamartomas + breast + thyroid CA + Lhermitte-Duclos.',
          explanation: 'These syndromes are high yield for identifying associated findings on imaging. Desmoid tumors in Gardner syndrome arise at surgical sites post-colectomy and kill 10% of patients — they are locally invasive but not metastatic. Lynch syndrome cancers are typically solitary, right-sided, and have a better prognosis than sporadic colon CA.',
          keyFact: 'FAP = 100% colon CA. Gardner = FAP + desmoids + osteomas. Turcot = FAP + brain tumors. Lynch = right-sided colon CA + endometrial CA #2. Peutz-Jeghers = lip pigmentation + hamartomas.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/familial-adenomatous-polyposis',
          tags: ['ct', 'large-bowel', 'genetics', 'polyposis', 'syndrome'],
        },
      },
      {
        id: 'abd-gi-046',
        front: {
          question: 'Differentiate epiploic appendagitis from omental infarction on CT.',
        },
        back: {
          answer: 'Epiploic appendagitis: fat-containing oval lesion adjacent to the colon (usually sigmoid/descending), with central high-density dot (thrombosed vessel), surrounding inflammation, NO significant bowel wall thickening. Omental infarction: larger, more oval, right-sided (ROI = right omental infarct), may be more diffuse. Both are self-limiting.',
          explanation: 'Epiploic appendages are fat-filled peritoneal outpouchings along the serosal surface of the colon. Torsion or thrombosis causes focal fat necrosis. The central high-attenuation dot represents the thrombosed feeding vessel. The absence of significant bowel wall thickening distinguishes this from diverticulitis. Omental infarction tends to be larger and more diffuse with a "whirling" appearance.',
          keyFact: 'Epiploic appendagitis: fat + central dot + no bowel thickening = self-limiting. Left-sided predominance. Omental infarct: larger, right-sided. Both treated conservatively.',
          differentials: [
            { dx: 'Epiploic appendagitis' },
            { dx: 'Omental infarction' },
            { dx: 'Diverticulitis' },
            { dx: 'Appendicitis' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/epiploic-appendagitis',
          tags: ['ct', 'large-bowel', 'fat-necrosis', 'epiploic', 'peritoneum'],
        },
      },
      {
        id: 'abd-gi-047',
        front: {
          question: 'What is neutropenic colitis (typhlitis), who gets it, and what does it look like on CT?',
        },
        back: {
          answer: 'Typhlitis is infection/inflammation limited to the cecum occurring in severe neutropenia (chemotherapy, transplant patients). CT: cecal wall thickening with pericolonic inflammation, often with pneumatosis. Medical emergency with risk of perforation.',
          explanation: 'Typhlitis (Greek: typhlon = cecum) occurs when severely neutropenic patients cannot mount an immune response against bacteria that normally colonize the cecum. The cecum is preferentially involved because of its large surface area and relative stasis. CT findings include cecal wall thickening (> 3 mm), mucosal hyperenhancement, and pericolonic fat stranding. Pneumatosis intestinalis indicates transmural ischemia.',
          keyFact: 'Typhlitis = cecal inflammation in neutropenic patient. CT: cecal wall thickening + fat stranding. Pneumatosis = bad prognosis. Context: post-chemotherapy or bone marrow transplant.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neutropenic-colitis',
          tags: ['ct', 'large-bowel', 'infection', 'neutropenia', 'oncology'],
        },
      },
      {
        id: 'abd-gi-048',
        front: {
          question: 'What is pseudomyxoma peritonei: cause, CT appearance, and classic buzzword?',
        },
        back: {
          answer: 'Pseudomyxoma peritonei is gelatinous ascites from mucinous tumor implants. Most common cause: ruptured appendiceal mucocele (mucinous cystadenoma). CT buzzword: scalloped appearance of the liver (from external compression by mucinous deposits).',
          explanation: 'Mucinous neoplasms of the appendix, ovary, colon, and pancreas can rupture or metastasize to produce gelatinous mucin throughout the peritoneal cavity. The mucinous material fills the peritoneal recesses and scallops the liver surface, displacing bowel centrally. Recurrent bowel obstruction is a common complication. Most common primary: appendix (least common: pancreas).',
          keyFact: 'Pseudomyxoma peritonei = gelatinous ascites + scalloped liver. Most common cause = appendiceal mucocele. Recurrent SBO is a complication. Appendix > colon > ovary > pancreas (least common).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pseudomyxoma-peritonei',
          tags: ['ct', 'peritoneum', 'appendix', 'mucinous', 'ascites'],
        },
      },
      {
        id: 'abd-gi-049',
        front: {
          question: 'What infections preferentially involve the duodenum/proximal small bowel vs. the terminal ileum?',
        },
        back: {
          answer: 'Duodenum/proximal SB: Giardia, Strongyloides. Terminal ileum: TB (also causes "coned cecum"), Yersinia. Amebiasis (Entamoeba histolytica): cecum/ascending colon, SPARES terminal ileum.',
          explanation: 'These infection-location associations are frequently tested. Giardia infects the proximal small bowel causing fold thickening and spasm on barium. TB (Mycobacterium tuberculosis) characteristically affects the ileocecal region, causing the "coned cecum" appearance (narrowed cecum resembling a cone). Yersinia causes terminal ileitis mimicking Crohn\'s. Amebiasis involves the cecum/ascending colon and distinctly spares the terminal ileum.',
          keyFact: 'Duodenum: Giardia + Strongyloides. Terminal ileum: TB + Yersinia. Amebiasis: cecum/ascending colon, SPARES TI — this TI sparing distinguishes it from Crohn\'s.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gastrointestinal-tuberculosis',
          tags: ['barium', 'small-bowel', 'infection', 'tb', 'giardia'],
        },
      },
    ],
  },

  // ============================================================
  // LIVER
  // ============================================================
  {
    id: 'abd-liver',
    label: 'Liver',
    cards: [
      {
        id: 'abd-liver-001',
        front: {
          question: 'What is the Couinaud liver segmentation system, and which hepatic vein divides which segments?',
        },
        back: {
          answer: 'Right hepatic vein divides segments 7/8 and 6/5. Middle hepatic vein (Cantlie\'s line) divides 4a/8 and 4b/5. Left hepatic vein/falciform divides 4a/2 and 4b/3. Portal vein divides liver into upper and lower segments. Caudate lobe (segment 1) drains directly to IVC.',
          explanation: 'The Couinaud system is a functional division where each segment has its own arterial inflow, portal venous inflow, biliary drainage, and hepatic venous outflow — allowing independent resection. Cantlie\'s line runs from the IVC to the middle of the gallbladder fossa and divides the liver into functional left and right lobes. The caudate lobe is unique in receiving branches from both right and left portal veins and draining directly to the IVC.',
          keyFact: 'Caudate lobe = segment 1 = drains directly to IVC (spared in Budd-Chiari). Cantlie\'s line = IVC to gallbladder fossa = functional left/right division. Right hepatic vein: 7/8 and 6/5.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatic-segments',
          tags: ['anatomy', 'liver', 'couinaud', 'segments', 'hepatic-vein'],
        },
      },
      {
        id: 'abd-liver-002',
        front: {
          question: 'What is the most common benign liver neoplasm, and what are its characteristic imaging features?',
        },
        back: {
          answer: 'Hepatic hemangioma. US: hyperechoic (65%), no internal Doppler flow. CT/MRI: peripheral nodular discontinuous enhancement filling in by 15 minutes, matching blood pool signal. No Doppler flow inside the lesion. Rare in cirrhotic livers.',
          explanation: 'Hemangiomas are composed of blood-filled vascular channels and favor women 5:1. They may enlarge during pregnancy. The characteristic CT enhancement pattern (peripheral nodular enhancement → progressive centripetal fill-in by 15 min) mirrors the aortic blood pool. On MRI, they are markedly T2 bright ("light bulb" sign). Atypical hemangiomas can show a "reverse target sign" (hyperechoic periphery, hypoechoic center on US).',
          keyFact: 'Hemangioma: peripheral nodular fill-in by 15 min = blood pool. T2 bright = light bulb sign. NO Doppler flow inside lesion. FNA gets only blood — need core biopsy. Extremely rare to calcify.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatic-haemangioma',
          tags: ['us', 'ct', 'mri', 'liver', 'hemangioma', 'benign'],
        },
      },
      {
        id: 'abd-liver-003',
        front: {
          question: 'What are the classic MRI features of focal nodular hyperplasia (FNH)?',
        },
        back: {
          answer: 'FNH: T1 and T2 isointense ("stealth lesion"). Arterial phase: homogeneous enhancement. Central scar: T2 bright, enhances on delayed images. Spoke-wheel pattern on Doppler US. Bright on hepatobiliary phase (Eovist/Primovist) — retained contrast.',
          explanation: 'FNH is the second most common benign liver lesion, believed to be an AVM-related hamartomatous response. It contains normal hepatocytes (hence OATP uptake and Eovist enhancement on delayed phase), abnormally arranged bile ducts, and Kupffer cells (hence sulfur colloid uptake, though only 30–40% of cases). NOT related to OCP use (hepatic adenoma is). Central scar = key distinguishing feature from adenoma.',
          keyFact: 'FNH = stealth lesion (T1/T2 isointense) + central scar (T2 bright, enhances on delay) + bright on Eovist delayed phase. NOT OCP-related. Spoke-wheel Doppler. Scar in FNH enhances; scar in FL-HCC does NOT.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/focal-nodular-hyperplasia',
          tags: ['mri', 'ct', 'liver', 'fnh', 'benign'],
        },
      },
      {
        id: 'abd-liver-004',
        front: {
          question: 'What are the distinguishing features of hepatic adenoma, and what determines its management?',
        },
        back: {
          answer: 'Solitary lesion in a woman on OCPs or man on anabolic steroids. Multiple = glycogen storage disease (von Gierke) or adenomatosis. OCP cessation → regression. < 5 cm: watch. > 5 cm: resect (bleeding risk and rare malignant degeneration). Contains fat on in/out-phase MRI.',
          explanation: 'Hepatic adenomas are benign hepatocellular tumors with a propensity to bleed (they lack a true capsule). Signal dropout on out-of-phase MRI (fat content) helps distinguish from HCC. No imaging method reliably differentiates adenoma from HCC. Most common location: right lobe (75%). Subtypes exist (HNF1A-mutated, beta-catenin-mutated [malignant potential], inflammatory).',
          keyFact: 'Adenoma: OCP woman or anabolic steroid man. Fat on in/out phase MRI. > 5 cm → resect. Multiple adenomas + glycogen storage disease. Regress with OCP cessation. No reliable imaging to exclude HCC.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatocellular-adenoma',
          tags: ['mri', 'ct', 'liver', 'adenoma', 'benign'],
        },
      },
      {
        id: 'abd-liver-005',
        front: {
          question: 'What are the LI-RADS categories and what are the major features of HCC on CT/MRI?',
        },
        back: {
          answer: 'HCC major features: arterial phase hyperenhancement (APHE) + washout appearance on portal venous/delayed phase + capsule appearance + threshold growth (> 50% in 6 months). LI-RADS 5 = definitely HCC. In cirrhotic liver, a nodule with all major features = HCC without biopsy.',
          explanation: 'HCC develops from regenerative → dysplastic → HCC nodules, progressively relying on arterial supply. On MRI, the progression is T2 dark (regenerative) → T2 bright (HCC). Eovist delayed phase: HCC is dark (lost OATP) except well-differentiated HCC (retains OATP = bright). HCC invades portal vein (specific finding = hepatic vein invasion). AFP elevated in 80–95%.',
          keyFact: 'HCC = APHE + washout + capsule on CT/MRI. In cirrhosis: LI-RADS 5 = HCC without biopsy. T2 bright = HCC. T2 dark = regenerative nodule. Invades portal vein; CC encases portal vein.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatocellular-carcinoma',
          tags: ['ct', 'mri', 'liver', 'hcc', 'li-rads', 'cirrhosis'],
        },
      },
      {
        id: 'abd-liver-006',
        front: {
          question: 'Differentiate classic HCC from fibrolamellar HCC.',
        },
        back: {
          answer: 'Classic HCC: cirrhosis, older (50s–60s), elevated AFP, rarely calcifies, portal vein invasion. Fibrolamellar HCC: NO cirrhosis, young (< 35), normal AFP, central scar (T2 dark, does NOT enhance), calcifies, Gallium avid, better prognosis.',
          explanation: 'Fibrolamellar HCC is a distinct variant with characteristic histology (lamellar fibrous bands) and a central scar. The scar is T2 dark and does NOT enhance on delayed imaging — distinguishing it from the T2-bright enhancing scar of FNH. It occurs in a non-cirrhotic liver in young patients, making it an incidental or palpable mass finding. The central scar can calcify.',
          keyFact: 'FL-HCC vs. FNH: Both have central scar. FNH scar = T2 bright, enhances on delay. FL-HCC scar = T2 dark, does NOT enhance. FL-HCC = young patient, NO cirrhosis, normal AFP, Gallium avid.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fibrolamellar-hepatocellular-carcinoma',
          tags: ['ct', 'mri', 'liver', 'hcc', 'fibrolamellar'],
        },
      },
      {
        id: 'abd-liver-007',
        front: {
          question: 'What are the classic imaging features of cholangiocarcinoma?',
        },
        back: {
          answer: 'Delayed enhancement (scar-like tumor). Peripheral biliary duct dilation. Liver capsular retraction. NO tumor capsule. Klatskin tumor: at bifurcation of right/left hepatic ducts. HCC invades portal vein; cholangiocarcinoma ENCASES the portal vein.',
          explanation: 'Cholangiocarcinoma is a cancer of the bile duct epithelium with abundant fibrous stroma. Its delayed enhancement pattern mirrors cardiac scar. The desmoplastic tumor causes capsular retraction (a key distinguishing feature from HCC) and peripheral biliary dilation. Risk factors: PSC (West), recurrent pyogenic cholangitis (East), Caroli disease, clonorchis, Thorotrast. Associated with UC → PSC → cholangiocarcinoma.',
          keyFact: 'Cholangiocarcinoma: delayed enhancement + capsular retraction + peripheral biliary dilation. Klatskin = bifurcation. Encases (not invades) portal vein. Buzzword: painless jaundice (same as pancreatic head CA).',
          differentials: [
            { dx: 'Intrahepatic cholangiocarcinoma' },
            { dx: 'HCC' },
            { dx: 'Hepatic mets' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/cholangiocarcinoma',
          tags: ['ct', 'mri', 'liver', 'cholangiocarcinoma', 'biliary'],
        },
      },
      {
        id: 'abd-liver-008',
        front: {
          question: 'What are the CT and MRI features of hepatic metastases, and which primary tumors are hypervascular vs. hypovascular on US?',
        },
        back: {
          answer: 'Colon = most common primary causing liver mets. Calcified mets = mucinous tumors (colon, ovary, pancreas). US: hyperechoic (hypervascular) = renal, melanoma, carcinoid, choriocarcinoma, thyroid, islet cell. Hypoechoic = colon, lung, pancreas. CT: T1 dark, T2 "evil grey," target sign sometimes.',
          explanation: 'Liver metastases appear as hypoattenuating lesions on portal venous phase CT. Hypervascular mets (renal cell, carcinoid, islet cell, melanoma) enhance in the arterial phase. Colon mets are the most common liver mets overall and are typically hypovascular. The "target sign" (central necrosis with peripheral enhancement) is classically described for colon mets but can occur with any hypoechoic met.',
          keyFact: 'Colon mets: most common to liver. Hypervascular mets: CRAM-TIM (Carcinoid/Renal/Adrenal/Melanoma/Thyroid/Islet cell/Melanoma). Calcified mets = mucinous primary. Too small to characterize: 90–95% benign even in cancer patients.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatic-metastases',
          tags: ['ct', 'us', 'liver', 'mets', 'cancer'],
        },
      },
      {
        id: 'abd-liver-009',
        front: {
          question: 'What are the morphologic changes of cirrhosis on CT/MRI?',
        },
        back: {
          answer: 'Right lobe and medial left lobe (segment 4) atrophy. Caudate lobe (segment 1) and lateral left segments (2, 3) hypertrophy. Wide hepatic fissures. Large gallbladder fossa. Caudate/right lobe ratio > 0.75 is 99% specific for cirrhosis. Portal hypertension, varices, splenomegaly, ascites.',
          explanation: 'Fibrosis preferentially compresses the right portal vein (longer intrahepatic course), causing right lobe atrophy and compensatory caudate/lateral left lobe hypertrophy. The posterior hepatic notch and wide perihilar region are characteristic morphologic changes. In advanced cirrhosis, benign lesions (cysts, hemangiomas) are "squeezed out" and any remaining lesion should be treated with more suspicion for HCC.',
          keyFact: 'Cirrhosis: right lobe + segment 4 SHRINK. Caudate + segments 2/3 GROW. Caudate/right lobe ratio > 0.75 = 99% specific. Benign lesions are squeezed out → any lesion in a cirrhotic liver = higher HCC suspicion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatic-cirrhosis',
          tags: ['ct', 'mri', 'liver', 'cirrhosis', 'morphology'],
        },
      },
      {
        id: 'abd-liver-010',
        front: {
          question: 'What is Budd-Chiari syndrome, and what are the classic CT/MRI findings?',
        },
        back: {
          answer: 'Hepatic vein thrombosis causing outflow obstruction. Findings: caudate lobe hypertrophy (spared, drains to IVC), "flip-flop" pattern on portal phase (low central, high peripheral attenuation), nutmeg liver pattern, ascites. Most common cause: idiopathic/hypercoagulable.',
          explanation: 'Budd-Chiari results in centrilobular congestion and necrosis. The caudate lobe is massively enlarged because its own hepatic veins drain directly to the IVC (independent of the obstructed main hepatic veins). Regenerative nodules in Budd-Chiari are T1 bright, T2 dark — distinguishing them from HCC (T2 bright). Large (> 10 cm) and small (< 4 cm) nodules coexisting in Budd-Chiari = likely benign.',
          keyFact: 'Budd-Chiari = massive caudate hypertrophy + flip-flop enhancement + nutmeg liver + ascites. Regenerative nodules: T1 bright, T2 dark (NOT like HCC). Hypercoagulable state → consider in pregnant woman.',
          differentials: [
            { dx: 'Budd-Chiari syndrome' },
            { dx: 'Hepatic veno-occlusive disease' },
            { dx: 'Right heart failure' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/budd-chiari-syndrome',
          tags: ['ct', 'mri', 'us', 'liver', 'budd-chiari', 'vascular'],
        },
      },
      {
        id: 'abd-liver-011',
        front: {
          question: 'How do you differentiate portal venous gas from pneumobilia on CT?',
        },
        back: {
          answer: 'Portal venous gas (PVG): PERIPHERAL, within 2 cm of liver capsule. Pneumobilia: CENTRAL, near porta hepatis. Air flows with blood — portal blood flows into liver (periphery); bile flows out of liver (toward porta hepatis = central).',
          explanation: 'PVG is ominous and most classically associated with bowel necrosis (look for pneumatosis intestinalis). It can also occur with benign causes (COPD, colitis). Pneumobilia is usually benign, resulting from prior intervention (biliary sphincterotomy, choledochoduodenostomy, fistula). The 2-cm threshold from the liver capsule differentiates the two.',
          keyFact: 'PVG = peripheral (< 2 cm from capsule), often with bowel necrosis. Pneumobilia = central (porta hepatis), usually from prior procedure. Air follows blood flow direction: portal blood in → periphery; bile out → center.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/portal-venous-gas',
          tags: ['ct', 'liver', 'air', 'portal-venous-gas', 'pneumobilia'],
        },
      },
      {
        id: 'abd-liver-012',
        front: {
          question: 'What are the MRI characteristics of primary vs. secondary hemochromatosis?',
        },
        back: {
          answer: 'Primary hemochromatosis: genetic (increased GI absorption), pancreas involved, spleen SPARED, liver dark on T1/T2. Secondary hemochromatosis: acquired (chronic transfusions/inflammation), liver + SPLEEN dark, pancreas spared.',
          explanation: 'Iron causes T1 and T2 shortening, making affected organs appear dark on MRI. In primary hemochromatosis, excess dietary iron is absorbed and deposits in liver, pancreas, heart, thyroid, and pituitary. In secondary hemochromatosis, iron is deposited by the reticuloendothelial system (macrophages), which is concentrated in liver and spleen — but NOT pancreas. Gradient echo is the most sensitive sequence for iron detection.',
          keyFact: 'Primary = pancreas + liver (spleen spared). Secondary = liver + spleen (pancreas spared). Iron drops signal on IN-phase (T.E. 4.4 ms at 1.5T) — OPPOSITE of fat drop out.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/haemochromatosis',
          tags: ['mri', 'liver', 'iron', 'hemochromatosis', 'metabolic'],
        },
      },
      {
        id: 'abd-liver-013',
        front: {
          question: 'How is hepatic steatosis diagnosed on CT and MRI?',
        },
        back: {
          answer: 'CT (non-contrast): liver < 40 HU (slam dunk). CT (contrast): liver > 25 HU less than spleen on portal venous phase. US: liver brighter than right kidney. MRI: signal dropout on out-of-phase images (fat drops out on TE 2.2 ms at 1.5T). Maximum signal loss at 50% fat infiltration.',
          explanation: 'Hepatic steatosis is very common in Western countries (obesity, DM, alcohol, chemotherapy, steroids, CF). Focal fatty sparing/infiltration occurs adjacent to the gallbladder fossa or ligamentum teres. On MRI, in-phase/out-of-phase imaging exploits the chemical shift of fat and water protons — fat drops out on the out-of-phase (India ink = TE 2.2 ms at 1.5T) images.',
          keyFact: 'Fat drops out on OUT-of-phase (TE 2.2 ms). Iron drops out on IN-phase (TE 4.4 ms). If fat > 50%, signal loss DECREASES (paradoxical). Focal steatosis/sparing: adjacent to GB fossa or ligamentum teres.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatic-steatosis',
          tags: ['ct', 'mri', 'us', 'liver', 'steatosis', 'fatty-liver'],
        },
      },
      {
        id: 'abd-liver-014',
        front: {
          question: 'What is the "nutmeg liver" and what are the four conditions that cause it?',
        },
        back: {
          answer: 'Nutmeg liver = inhomogeneous mottled liver parenchyma from central congestion. Causes: Budd-Chiari syndrome, hepatic veno-occlusive disease, right heart failure/passive congestion, constrictive pericarditis.',
          explanation: 'The nutmeg pattern reflects centrilobular congestion and necrosis with relative sparing of the periportal areas. On CT, there is heterogeneous enhancement with a reticular or mottled pattern. Passive hepatic congestion from right heart failure causes reflux of contrast into the hepatic veins and IVC on CT — a key finding.',
          keyFact: 'Nutmeg liver: Budd-Chiari + veno-occlusive disease + right heart failure + constrictive pericarditis. Passive congestion: reflux of contrast into hepatic veins = elevated CVP. Massive caudate hypertrophy: Budd-Chiari + PSC + PBC.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nutmeg-liver',
          tags: ['ct', 'liver', 'vascular', 'congestion', 'budd-chiari'],
        },
      },
      {
        id: 'abd-liver-015',
        front: {
          question: 'What are the infection buzzwords for hepatic abscesses on CT and US?',
        },
        back: {
          answer: 'Pyogenic: double target sign (central low density + rim enhancement + surrounding hypodensity) on CT. Single abscess = Klebsiella; multiple = E. coli. Gas = highly suggestive of pyogenic. Amebic: extra-hepatic extension. Candida: bull\'s eye on US. Hydatid: water lily sign (CT), sand storm (CT). Schistosomiasis: tortoise shell.',
          explanation: 'Pyogenic abscesses predominantly involve the right hepatic lobe (longer right portal vein course for hematogenous spread). Gas within a hepatic collection is highly specific for pyogenic abscess. Amebic abscesses in the left lobe should be emergently drained (risk of pericardial rupture). Hydatid cysts show the mother cyst with daughter cysts and may have the water lily sign (floating membranes).',
          keyFact: 'Pyogenic = double target CT. Gas = pyogenic. Single abscess = Klebsiella; multiple = E. coli. Amebic left lobe = emergent drain (pericardium risk). Candida = bull\'s eye US. Hydatid = water lily / sandstorm.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pyogenic-hepatic-abscess',
          tags: ['ct', 'us', 'liver', 'abscess', 'infection'],
        },
      },
      {
        id: 'abd-liver-016',
        front: {
          question: 'What is the OATP transporter system and why does it matter for Eovist (Gd-EOB-DTPA) MRI?',
        },
        back: {
          answer: 'OATP (organic anion transporting polypeptide) uptakes hepatobiliary contrast into normal hepatocytes. Normal liver = bright on 20-min Eovist delayed phase. HCC = dark (lost OATP). FNH = bright (retained OATP). Exception: well-differentiated HCC = bright (retains OATP).',
          explanation: 'Eovist/Primovist (Gd-EOB-DTPA) has a dual mechanism: extracellular early phase (like standard Gd) and hepatocyte-specific delayed phase (20 min). Approximately 55% is excreted into bile. Lesions without functioning hepatocytes (mets, most HCCs, cysts) appear dark against the bright background. FNH appears bright because it contains normal (though disorganized) hepatocytes with intact OATP.',
          keyFact: 'Eovist delayed phase: Normal liver = bright. FNH = bright (normal hepatocytes). HCC = dark. Well-differentiated HCC = bright (exception). Eovist is ideal for: FNH characterization, bile leak detection, detecting new mets.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gadoxetic-acid',
          tags: ['mri', 'liver', 'contrast', 'eovist', 'hepatobiliary'],
        },
      },
      {
        id: 'abd-liver-017',
        front: {
          question: 'What is portal hypertension, what are the threshold pressures, and what are the causes classified by location?',
        },
        back: {
          answer: 'Portal hypertension when hepatic venous pressure gradient > 6–8 mmHg. Varices and ascites develop at > 12 mmHg. Pre-hepatic: portal vein thrombosis. Hepatic: cirrhosis (EtOH = US #1, schistosomiasis = worldwide #1). Post-hepatic: Budd-Chiari, right heart failure.',
          explanation: 'Portal hypertension leads to portosystemic collateral formation: esophageal varices, gastric varices, caput medusae (periumbilical), splenorenal shunts. In pre-hepatic portal hypertension, collaterals form above the obstruction (hepatogastric ligament, above the diaphragm). Portal vein velocity < 15 cm/s (normal 20–40 cm/s) indicates slow flow from portal hypertension.',
          keyFact: 'Portal HTN thresholds: > 6–8 mmHg = portal HTN. > 12 mmHg = varices + ascites. Hepatic = most common (cirrhosis). Schistosomiasis = most common worldwide. EtOH = most common in US.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/portal-hypertension',
          tags: ['us', 'ct', 'liver', 'portal-hypertension', 'cirrhosis'],
        },
      },
      {
        id: 'abd-liver-018',
        front: {
          question: 'What are the key features of liver transplant complications on Doppler ultrasound?',
        },
        back: {
          answer: 'Normal: rapid systolic upstroke, diastole → systole < 80 ms, RI 0.5–0.7, peak hepatic artery velocity < 200 cm/sec. Hepatic artery thrombosis: most feared complication (bile duct necrosis). Syndrome of impending thrombosis: normal → no diastolic flow → tardus parvus → loss of waveform. Tardus parvus = RI < 0.5, stenosis more likely than thrombosis.',
          explanation: 'In the transplanted liver, the hepatic artery (not portal vein) is the primary blood supply to the bile ducts. Hepatic artery thrombosis causes bile duct ischemia and necrosis. Early thrombosis (< 15 days) is more severe; late thrombosis (years) = chronic rejection/sepsis. The portal vein provides most parenchymal blood flow in native livers; in the transplant, the hepatic artery is king.',
          keyFact: 'Transplant: hepatic artery is king for bile ducts. Tardus parvus (RI < 0.5) = stenosis (more likely than thrombosis). Sequence of impending thrombosis: normal → no diastole → tardus parvus → absent.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/liver-transplant-complications',
          tags: ['us', 'liver', 'transplant', 'doppler', 'vascular'],
        },
      },
    ],
  },

  // ============================================================
  // BILIARY SYSTEM
  // ============================================================
  {
    id: 'abd-biliary',
    label: 'Biliary System',
    cards: [
      {
        id: 'abd-biliary-001',
        front: {
          question: 'What are the Todani types of choledochal cysts, and which is most common?',
        },
        back: {
          answer: 'Type 1: focal dilation of the CBD (most common by far). Type 2: diverticulum of bile duct. Type 3: choledochocele. Type 4: intra and extrahepatic. Type 5 = Caroli\'s disease: intrahepatic only. Complications of all types: cholangiocarcinoma, cirrhosis, cholangitis, intraductal stones.',
          explanation: 'Choledochal cysts are congenital dilatations of the bile ducts. Type 1 is the clinical workhorse — a focal CBD dilatation presenting with the classic triad of jaundice, right upper quadrant pain, and palpable mass. All types carry an increased risk of cholangiocarcinoma. Caroli\'s disease (Type 5) is an autosomal recessive condition associated with polycystic kidney disease and medullary sponge kidney.',
          keyFact: 'Todani Type 1 = most common (CBD dilation). Type 5 = Caroli\'s (intrahepatic, AR, associated with polycystic kidney disease). All types → risk of cholangiocarcinoma. History of recurrent cholangitis → think choledochal cyst.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/choledochal-cyst',
          tags: ['mrcp', 'biliary', 'choledochal', 'congenital', 'cholangiocarcinoma'],
        },
      },
      {
        id: 'abd-biliary-002',
        front: {
          question: 'What is Caroli\'s disease, and what is the central dot sign?',
        },
        back: {
          answer: 'Caroli\'s disease (Todani Type 5) = intrahepatic saccular biliary duct dilatation communicating with the biliary tree. Central dot sign: portal vein radicle surrounded by dilated bile duct on CT/MR/US. Associated with polycystic kidney disease and medullary sponge kidney.',
          explanation: 'Caroli\'s presents with recurrent cholangitis, intraductal stones, and eventually cirrhosis. The central dot sign represents the small portal vein branch that runs through the center of each dilated duct. Complications include cholangiocarcinoma. It is often distinguishable from other causes of intrahepatic duct dilation by its saccular (not fusiform) morphology and communication with the biliary system.',
          keyFact: 'Caroli\'s = saccular intrahepatic bile duct dilation + central dot sign (portal vein in duct center). AR inheritance. Associated with ARPKD and medullary sponge kidney. Recurrent cholangitis → stones → cholangiocarcinoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/caroli-disease',
          tags: ['ct', 'mrcp', 'biliary', 'caroli', 'congenital'],
        },
      },
      {
        id: 'abd-biliary-003',
        front: {
          question: 'What is primary sclerosing cholangitis (PSC), and what are the MRCP buzzwords?',
        },
        back: {
          answer: 'PSC: progressive inflammation causing multifocal strictures of intra- and extrahepatic bile ducts. Strongly associated with UC (80%) and cholangiocarcinoma. MRCP: "withered tree" (abrupt narrowing of branches), "beaded appearance" (strictures + focal dilations). Dilated intrahepatic ducts in cirrhosis is rare EXCEPT in PSC.',
          explanation: 'PSC is an autoimmune condition that leads to cholestatic cirrhosis and portal hypertension. The classic patient is a 40-year-old male with ulcerative colitis and elevated alkaline phosphatase. Treatment: liver transplantation (20% recurrence post-transplant). PSC is the only form of cirrhosis that regularly causes dilated intrahepatic bile ducts. Cholangiocarcinoma develops in 5–15% of PSC patients.',
          keyFact: 'PSC = 40yo male + UC + beaded biliary ducts + cholangiocarcinoma risk. Withered tree on MRCP. Only cirrhosis type with dilated intrahepatic ducts. Associated with massive caudate hypertrophy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/primary-sclerosing-cholangitis',
          tags: ['mrcp', 'biliary', 'psc', 'uc', 'cholangiocarcinoma'],
        },
      },
      {
        id: 'abd-biliary-004',
        front: {
          question: 'What is primary biliary cholangitis/cirrhosis (PBC), and how does it differ from PSC?',
        },
        back: {
          answer: 'PBC: autoimmune destruction of small/medium intrahepatic bile ducts. Middle-aged women, often asymptomatic. Early disease: normal bile ducts (unlike PSC). Late: irregular intrahepatic dilation, normal extrahepatic ducts. Anti-mitochondrial antibodies (AMA) present in 95%. Treatment: ursodeoxycholic acid.',
          explanation: 'PBC is distinguished from PSC by: (1) demographic (middle-aged woman vs. younger man), (2) duct involvement (small intrahepatic only, NOT extrahepatic), (3) lab (AMA positive in 95%), (4) association (no IBD association unlike PSC). Both cause increased risk of HCC and may cause massive caudate hypertrophy in late disease.',
          keyFact: 'PBC = middle-aged woman + AMA (95%) + small intrahepatic ducts only + normal extrahepatic ducts. PSC = young man + UC + multi-level beading + extrahepatic involvement. Both → cholangiocarcinoma + HCC risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/primary-biliary-cirrhosis',
          tags: ['mrcp', 'biliary', 'pbc', 'autoimmune', 'cirrhosis'],
        },
      },
      {
        id: 'abd-biliary-005',
        front: {
          question: 'What are the three diseases causing a "coned cecum" appearance, and how do they differ?',
        },
        back: {
          answer: 'Entamoeba histolytica: cecum + ascending colon, SPARES terminal ileum, flask-shaped ulcers. TB: ileocecal region + terminal ileum, Fleischner sign (enlarged gaping IC valve), Stierlin sign (narrowing of TI). Both cause "coned cecum" = loss of normal bulbous cecal appearance.',
          explanation: 'The coned cecum represents fibrosis and contraction of the cecum. Amebiasis is distinctive in that it affects the cecum but SPARES the terminal ileum, unlike TB and Crohn\'s. TB of the ileocecal region causes both ulcers and narrowing; the Fleischner sign (gaping, patulous IC valve) and Stierlin sign (TI narrowing) are specific to TB.',
          keyFact: 'Coned cecum: amebic + TB. Amebiasis spares TI (unlike Crohn\'s/TB). TB: Fleischner sign (gaping IC valve) + Stierlin sign (TI narrowing). TB ileocecal = risk of cholangiocarcinoma in east (Oriental cholangiohepatitis).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/caecal-tuberculosis',
          tags: ['barium', 'large-bowel', 'infection', 'tb', 'ameba'],
        },
      },
      {
        id: 'abd-biliary-006',
        front: {
          question: 'What is Mirizzi syndrome?',
        },
        back: {
          answer: 'Mirizzi syndrome = extrinsic obstruction of the common hepatic duct (CHD) by an impacted stone in the cystic duct (or infundibulum). Five times increased risk of gallbladder cancer. Stone can erode into CHD or GI tract. Associated with low cystic duct insertion (parallel course to CHD).',
          explanation: 'Mirizzi syndrome occurs when a large gallstone impacted in the cystic duct compresses the adjacent CHD, causing obstructive jaundice that mimics cholangiocarcinoma or CBD stone. The impacted stone can create a cholecystocholedochal fistula by erosion. Important pre-operative consideration because it changes surgical management. Classified by extent of erosion into the CHD (types I–IV).',
          keyFact: 'Mirizzi = cystic duct stone obstructing common hepatic duct. 5× increased gallbladder CA risk. Low cystic duct insertion → more parallel course → more likely Mirizzi.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mirizzi-syndrome',
          tags: ['mrcp', 'us', 'biliary', 'gallbladder', 'mirizzi'],
        },
      },
      {
        id: 'abd-biliary-007',
        front: {
          question: 'What are the imaging features of gallbladder adenomyomatosis?',
        },
        back: {
          answer: 'Hyperplasia of wall with intramural mucosal diverticula (Rokitansky-Aschoff sinuses) filled with cholesterol crystals. Classic US finding: comet-tail artifact (V-shaped reverberation artifact) from cholesterol crystals. Three types: generalized (diffuse), segmental (annular), fundal (adenomyoma — cannot exclude GB cancer).',
          explanation: 'Adenomyomatosis is one of the most commonly tested gallbladder conditions. The comet-tail artifact (twinkle artifact) on US is highly specific for cholesterol crystals in Rokitansky-Aschoff sinuses. The fundal form (adenomyoma) may be indistinguishable from gallbladder cancer. It is distinguished from cholesterolosis: adenomyomatosis has cholesterol IN the sinuses; cholesterolosis has cholesterol in the lamina propria.',
          keyFact: 'Adenomyomatosis = comet-tail artifact on US (highly specific). Rokitansky-Aschoff sinuses = intramural diverticula. Fundal form cannot exclude GB cancer. Cholesterolosis = cholesterol in LAMINA PROPRIA (not sinuses).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/adenomyomatosis-of-the-gallbladder',
          tags: ['us', 'biliary', 'gallbladder', 'adenomyomatosis', 'benign'],
        },
      },
      {
        id: 'abd-biliary-008',
        front: {
          question: 'What is the management algorithm for gallbladder polyps?',
        },
        back: {
          answer: '< 5 mm: nearly always cholesterol polyps (benign). 5–10 mm: follow for growth. > 10 mm: resect (high malignant potential). Malignant features: sessile, solitary, > 1 cm, Doppler flow, enhancement on CT/MRI greater than adjacent GB wall.',
          explanation: 'Cholesterol polyps are the most common polyps and are always benign — they represent enlarged papillary fronds filled with lipid-laden macrophages. True adenomas are less common, usually solitary, and larger. Once a polyp reaches 1 cm, cholecystectomy is generally recommended. On ultrasound, polyps are non-mobile, non-shadowing, and attached to the wall.',
          keyFact: 'GB polyp > 1 cm → cholecystectomy. Benign features: < 5 mm, pedunculated, multiple, comet tail. Malignant features: > 1 cm, sessile, solitary, Doppler flow. Cholesterol polyps = most common, always benign.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gallbladder-polyp',
          tags: ['us', 'biliary', 'gallbladder', 'polyp', 'management'],
        },
      },
      {
        id: 'abd-biliary-009',
        front: {
          question: 'What are the risk factors and classic CT/US appearance of gallbladder cancer?',
        },
        back: {
          answer: 'Risk factors: gallstones (85%), porcelain gallbladder, Mirizzi syndrome (5× risk), PSC, large polyps (> 1 cm), chronic cholecystitis. CT: soft tissue mass replacing GB, direct invasion of liver. Porcelain GB: associated with cancer → cholecystectomy.',
          explanation: 'Gallbladder adenocarcinoma is the most common malignancy of the biliary tract. It presents late (direct liver invasion in 80% at diagnosis) with poor outcomes. The most important risk factor is gallstones. Porcelain gallbladder (calcified GB wall) was historically associated with GB cancer, though the actual risk depends on the pattern of calcification (selective mucosal calcification = higher risk).',
          keyFact: 'GB cancer: 85% have gallstones. Porcelain GB → resect. Mirizzi syndrome → 5× cancer risk. Most tumors are in the fundus. T3 = liver invasion. Cancer vs. cholecystitis: cancer fills/replaces GB lumen.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/carcinoma-of-the-gallbladder',
          tags: ['ct', 'us', 'biliary', 'gallbladder', 'cancer'],
        },
      },
      {
        id: 'abd-biliary-010',
        front: {
          question: 'What are the ductal high-yield differentials for causing cholangiocarcinoma risk?',
        },
        back: {
          answer: 'All major ductal pathologies carry cholangiocarcinoma risk: PSC (West), Oriental cholangiohepatitis/recurrent pyogenic cholangitis (East), Caroli\'s disease, AIDS cholangiopathy. Rule: if ductal pathology and you can\'t remember the association, always guess cholangiocarcinoma.',
          explanation: 'Oriental cholangiohepatitis (recurrent pyogenic cholangitis) is endemic in Southeast Asia, associated with Clonorchis and Ascaris, and shows dilated ducts with pigmented stones. Buzzword: straight rigid intrahepatic ducts. It favors the left ductal system (anatomically longer, flatter). AIDS cholangiopathy (from Cryptosporidium) mimics PSC but with papillary stenosis in 60% of cases.',
          keyFact: 'All ductal diseases → cholangiocarcinoma risk. Oriental cholangiohepatitis: left-dominant, straight rigid ducts, pigmented stones. AIDS cholangiopathy: mimics PSC + papillary stenosis (60%). Cholangiocarcinoma stricture: long with shouldering vs. benign = short, abrupt.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/recurrent-pyogenic-cholangitis',
          tags: ['mrcp', 'biliary', 'cholangitis', 'cholangiocarcinoma', 'infection'],
        },
      },
    ],
  },

  // ============================================================
  // PANCREAS
  // ============================================================
  {
    id: 'abd-pancreas',
    label: 'Pancreas',
    cards: [
      {
        id: 'abd-pancreas-001',
        front: {
          question: 'What is pancreatic ductal adenocarcinoma\'s classic presentation, staging keys, and why is the GDA irrelevant?',
        },
        back: {
          answer: 'Classic: painless jaundice + enlarged gallbladder (Courvoisier sign) + migratory thrombophlebitis (Trousseau\'s). Two-thirds arise from pancreatic head. Unresectable if SMA or celiac axis involved. GDA involvement is OK — it comes out with the Whipple. Optimal CT timing: pancreatic phase (40 seconds).',
          explanation: 'Pancreatic ductal adenocarcinoma (PDAC) appears as a hypo-enhancing mass on CT (poor vascularity) best seen on the pancreatic phase. The "double duct sign" on US/CT/MRCP (dilated CBD + dilated pancreatic duct) indicates obstruction at the pancreatic head. Tumor marker: CA 19-9. Hereditary associations: HNPCC, BRCA, Peutz-Jeghers, ataxia-telangiectasia. Key risk factor: smoking.',
          keyFact: 'PDAC: hypo-enhancing, best seen at 40 sec (pancreatic phase). Double duct sign = pancreatic head mass. SMA/celiac involvement = unresectable. GDA involvement = resectable (goes with Whipple). CA 19-9 tumor marker.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pancreatic-ductal-adenocarcinoma',
          tags: ['ct', 'pancreas', 'cancer', 'adenocarcinoma', 'staging'],
        },
      },
      {
        id: 'abd-pancreas-002',
        front: {
          question: 'Compare the four cystic pancreatic lesions: serous cystadenoma, mucinous cystic neoplasm, IPMN, and solid pseudopapillary tumor.',
        },
        back: {
          answer: 'Serous (Grandma): benign, elderly woman, head, microcystic with central scar/calcification, no duct communication. Mucinous (Mother): pre-malignant, middle-aged woman, body/tail, unilocular, no duct communication. Side-branch IPMN: communicates with duct, usually benign < 3 cm. Main duct IPMN: malignant, resect if duct > 10 mm. Solid Pseudopapillary (Daughter): young Asian/Black woman, tail, large, thick capsule.',
          explanation: 'The memory aids (Grandma/Mother/Daughter) help with demographics. Serous cystadenoma is associated with VHL. Mucinous cystic neoplasm is "always" found in women and is uniformly pre-malignant → resect all. Side-branch IPMNs communicate with the pancreatic duct (the "pulmonary nodule of the pancreas" — usually benign and followed). Main duct IPMNs are all considered malignant.',
          keyFact: 'Grandma = Serous (benign, head, central calcification, VHL). Mother = Mucinous (pre-malignant, body/tail, ALL need resection). Daughter = Solid pseudopapillary (young woman, tail, capsule). IPMN side branch < 3 cm = follow. Main duct > 10 mm = resect.',
          differentials: [
            { dx: 'Pancreatic pseudocyst' },
            { dx: 'Serous cystadenoma' },
            { dx: 'Mucinous cystic neoplasm' },
            { dx: 'IPMN (side branch or main duct)' },
            { dx: 'Solid pseudopapillary tumor' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/pancreatic-cystic-lesions',
          tags: ['ct', 'mri', 'pancreas', 'cystic', 'mass'],
        },
      },
      {
        id: 'abd-pancreas-003',
        front: {
          question: 'What is the revised Atlanta classification of acute pancreatitis fluid collections?',
        },
        back: {
          answer: 'NO necrosis: < 4 weeks = acute peripancreatic fluid collection; > 4 weeks = pseudocyst. WITH necrosis: < 4 weeks = acute necrotic collection; > 4 weeks = walled-off necrosis. Outcomes correlate with degree of pancreatic necrosis. Infected necrosis = mortality 50–70%.',
          explanation: 'The revised Atlanta classification standardized terminology for pancreatitis complications. The four-week threshold reflects the time needed for a fibrous wall to develop (walled-off). Pseudocysts are liquified collections with a mature wall (no internal solid debris). Walled-off necrosis contains solid necrotic material. The key management decision is sterility — infected necrosis requires drainage.',
          keyFact: 'NO necrosis: < 4 wk = acute peripancreatic fluid; > 4 wk = pseudocyst. NECROSIS: < 4 wk = acute necrotic collection; > 4 wk = walled-off necrosis. Infected necrosis = 50–70% mortality.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acute-pancreatitis-revised-atlanta-classification',
          tags: ['ct', 'pancreas', 'pancreatitis', 'atlanta-classification', 'complications'],
        },
      },
      {
        id: 'abd-pancreas-004',
        front: {
          question: 'What are the imaging features of autoimmune pancreatitis (AIP)?',
        },
        back: {
          answer: 'AIP (IgG4-related): sausage-shaped pancreas with capsule-like delayed rim enhancement (halo). No ductal dilation. No calcifications. Responds to steroids. Absence of acute symptoms (pain). IgG4 elevation.',
          explanation: 'Autoimmune pancreatitis is a steroid-responsive condition that may mimic pancreatic cancer — both present with painless jaundice and a pancreatic head mass. Key distinguishing features: the "sausage pancreas" (diffuse enlargement), the delayed peripheral rim enhancement, absence of pancreatic duct dilation, and dramatic steroid response. IgG4 disease also causes retroperitoneal fibrosis, sclerosing cholangitis, Riedel\'s thyroiditis, and inflammatory pseudotumor.',
          keyFact: 'AIP = sausage pancreas + delayed rim enhancement + no ductal dilation + no calcifications + responds to steroids. IgG4 elevated. IgG4 also causes: retroperitoneal fibrosis, sclerosing cholangitis, Riedel\'s thyroiditis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/autoimmune-pancreatitis',
          tags: ['ct', 'mri', 'pancreas', 'autoimmune', 'igg4'],
        },
      },
      {
        id: 'abd-pancreas-005',
        front: {
          question: 'Compare insulinoma vs. gastrinoma (the two most common pancreatic neuroendocrine tumors).',
        },
        back: {
          answer: 'Insulinoma: most common PanNET (75%), almost always benign (90%), small (< 2 cm), solitary. Gastrinoma: second most common, most common type associated with MEN-1, malignant 30–60%, causes Zollinger-Ellison syndrome (jejunal ulcer = buzzword), arises in gastrinoma triangle.',
          explanation: 'Both are hypervascular (enhance in arterial/pancreatic phase). Insulinoma causes hypoglycemia; treatment is surgical resection (the small size makes localization challenging — endoscopic US is often used). Gastrinoma causes excessive gastric acid → peptic ulcer disease throughout the stomach, duodenum, and jejunum. The gastrinoma triangle is bounded by the cystic duct junction, third portion of duodenum, and neck of the pancreas.',
          keyFact: 'Insulinoma = most common, benign 90%, small < 2 cm. Gastrinoma = second most common, MEN-1 association, malignant 30–60%, jejunal ulcer = ZE syndrome. Gastrinoma triangle contains 90% of gastrinomas.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/insulinoma',
          tags: ['ct', 'mri', 'pancreas', 'neuroendocrine', 'insulinoma'],
        },
      },
      {
        id: 'abd-pancreas-006',
        front: {
          question: 'What is pancreatic divisum, and what is its clinical significance?',
        },
        back: {
          answer: 'Pancreatic divisum (~15% of population): failure of the dorsal (Santorini) and ventral (Wirsung) pancreatic ducts to fuse. The main portion of the pancreas drains through the minor papilla instead of the major papilla → increased risk of pancreatitis.',
          explanation: 'In normal anatomy, the major duct (Wirsung) drains through the major (inferior) papilla. The minor duct (Santorini) is rudimentary. Mnemonic: "Santorini is Small and drains Superior." In pancreatic divisum, the bulk of pancreatic exocrine secretion must pass through the narrower minor papilla, predisposing to relative outflow obstruction and recurrent pancreatitis. Seen on MRCP or ERCP.',
          keyFact: 'Pancreatic divisum = most common pancreatic anatomic variant (15%). Dorsal duct → minor papilla → relative obstruction → pancreatitis. Santorini is Small and Superior. Diagnosed on MRCP.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pancreatic-divisum',
          tags: ['mrcp', 'pancreas', 'congenital', 'pancreatitis', 'variant'],
        },
      },
      {
        id: 'abd-pancreas-007',
        front: {
          question: 'What are the CT findings that distinguish chronic pancreatitis duct dilation from malignant duct dilation?',
        },
        back: {
          answer: 'Chronic pancreatitis: irregular/beaded duct dilation, duct < 50% of gland AP diameter, calcifications, pseudocysts (30%). Malignant: smooth/uniform dilation, duct > 50% of gland AP diameter (obstructive atrophy), no calcifications, associated mass.',
          explanation: 'The Wirsung duct is normally < 3 mm in the body and < 4 mm in the head. In chronic pancreatitis, irregular dilation with calcifications and pseudocysts distinguishes it from malignancy. The "duct to gland ratio" > 50% suggests obstructive atrophy from a malignant cause. The most characteristic finding of chronic pancreatitis is ductal calcifications with beading.',
          keyFact: 'CP duct: irregular + calcifications + < 50% AP gland diameter. Cancer duct: smooth + > 50% AP gland diameter (obstructive atrophy). Dilated duct + calcifications = chronic pancreatitis until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chronic-pancreatitis',
          tags: ['ct', 'mrcp', 'pancreas', 'pancreatitis', 'cancer'],
        },
      },
      {
        id: 'abd-pancreas-008',
        front: {
          question: 'What is annular pancreas, and how does it present differently in children vs. adults?',
        },
        back: {
          answer: 'Annular pancreas: failure of ventral bud to rotate with the duodenum → ring of pancreatic tissue encircling the descending duodenum. Children: duodenal obstruction. Adults: pancreatitis (associated with recurrent episodes). Associated with Down syndrome.',
          explanation: 'The annular duct encircles the descending duodenum on MRCP. In children, it presents as extrinsic duodenal obstruction (double bubble sign on plain radiograph in neonates). In adults, it usually presents with pancreatitis because the annular duct obstructs normal secretion flow. On CT, a ring of pancreatic tissue is seen surrounding the second portion of the duodenum.',
          keyFact: 'Annular pancreas: kids = obstruct, adults = pancreatitis. Look for annular duct encircling duodenum on MRCP. Associated with Down syndrome and other GI anomalies.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/annular-pancreas',
          tags: ['ct', 'mrcp', 'pancreas', 'congenital', 'annular'],
        },
      },
      {
        id: 'abd-pancreas-009',
        front: {
          question: 'What are the vascular complications of pancreatitis?',
        },
        back: {
          answer: 'Splenic vein thrombosis (→ isolated gastric varices). Portal vein thrombosis. Pseudo-aneurysm of the gastroduodenal artery (GDA) and splenic artery — these can rupture into a pseudocyst or the peritoneum. Gas in a pancreatic fluid collection = infected (only 20% of cases).',
          explanation: 'Pseudoaneurysms develop when pancreatic enzymes erode through the wall of adjacent arteries. They appear as enhancing foci within pseudocysts or peripancreatic collections. Rupture causes massive hemorrhage. On CT, active bleeding appears as high-attenuation material. Splenic vein thrombosis from pancreatitis causes left-sided portal hypertension with isolated gastric varices.',
          keyFact: 'Pancreatitis vascular complications: splenic vein thrombus → isolated gastric varices; pseudoaneurysm of GDA or splenic artery → massive hemorrhage. Gas in fluid collection = infected in only 20% — don\'t exclude infection by absence of gas.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pancreatitis-complications',
          tags: ['ct', 'pancreas', 'pancreatitis', 'vascular', 'pseudoaneurysm'],
        },
      },
      {
        id: 'abd-pancreas-010',
        front: {
          question: 'What is groove pancreatitis, and how does it differ from pancreatic head cancer?',
        },
        back: {
          answer: 'Groove pancreatitis: soft tissue mass in the pancreaticoduodenal groove (between pancreatic head, duodenum, and CBD), LESS likely to cause obstructive jaundice than pancreatic CA. May cause duodenal stenosis and CBD strictures in 50%. Mimics pancreatic head cancer.',
          explanation: 'Groove pancreatitis (paraduodenal pancreatitis) results from inflammation in the pancreaticoduodenal groove. Unlike pancreatic adenocarcinoma, it tends to produce less biliary obstruction despite its similar location. CT shows a sheet-like area of soft tissue with delayed enhancement in the groove, with cystic changes in the duodenal wall. The duodenum may be thickened and stenosed.',
          keyFact: 'Groove pancreatitis = soft tissue in pancreaticoduodenal groove + less biliary obstruction than CA + duodenal stenosis. Mimics pancreatic head CA but LESS jaundice. Look for cystic duodenal wall changes.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/paraduodenal-pancreatitis',
          tags: ['ct', 'mri', 'pancreas', 'pancreatitis', 'groove'],
        },
      },
    ],
  },

  // ============================================================
  // SPLEEN
  // ============================================================
  {
    id: 'abd-spleen',
    label: 'Spleen',
    cards: [
      {
        id: 'abd-spleen-001',
        front: {
          question: 'What is the MRI signal of the normal spleen, and what is the normal spleen appearance on arterial phase CT?',
        },
        back: {
          answer: 'MRI: T1 dark, T2 bright (relative to liver), restricts diffusion (like a lymph node). CT arterial phase: "tiger striped" appearance from the red and white pulp mixing. Always image trauma in portal venous phase (70 sec) to distinguish laceration from normal tiger striping.',
          explanation: 'The spleen is essentially a large watery lymph node. The serpentine enhancement of the red and white pulp on arterial phase imaging creates the characteristic tiger striping. This can mimic a laceration if the trauma scan is inadvertently performed in arterial phase. Normal spleen is ~20 HU less dense than liver and slightly more echogenic than liver on US.',
          keyFact: 'Spleen MRI: T1 dark, T2 bright, restricts diffusion. CT arterial: tiger striped = NORMAL. Trauma CT: always portal venous phase (70 sec) to avoid confusing tiger stripes with laceration. Spleen = most common solid organ injured in trauma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spleen',
          tags: ['ct', 'mri', 'us', 'spleen', 'normal'],
        },
      },
      {
        id: 'abd-spleen-002',
        front: {
          question: 'What is splenosis and how is it differentiated from other peritoneal implants?',
        },
        back: {
          answer: 'Splenosis: post-traumatic implantation of splenic tissue into the peritoneal cavity, forming multiple spherical vascular nodules. Occurs in 40–60% of traumatic splenic injury. Nuclear medicine tests: Tc-99m sulfur colloid or heat-treated RBCs — both confirm splenic tissue.',
          explanation: 'Splenosis nodules follow splenic signal on all MRI sequences (T1 dark, T2 bright, restricted diffusion) and enhance like the spleen (tiger striping on arterial phase). The key clinical importance is distinguishing splenosis from malignant implants (especially ovarian or peritoneal metastases) in a patient with a history of trauma. Tc-99m sulfur colloid or heat-treated RBCs are taken up by splenic tissue.',
          keyFact: 'Splenosis = splenic tissue implants post-trauma, follow spleen on all imaging sequences. Tc-99m sulfur colloid (or heat-treated RBCs) confirms spleen tissue. History of trauma = key diagnostic clue.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/splenosis',
          tags: ['ct', 'mri', 'nuclear-medicine', 'spleen', 'trauma'],
        },
      },
      {
        id: 'abd-spleen-003',
        front: {
          question: 'What are Gamna-Gandy bodies, what do they represent, and which MRI sequence is most sensitive?',
        },
        back: {
          answer: 'Gamna-Gandy bodies (siderotic nodules) = small foci of hemosiderin/iron deposition from prior hemorrhage in the spleen. Associated with portal hypertension. T2 dark (or T2* dark). Gradient echo is the most sensitive sequence for detection.',
          explanation: 'These are foci of organized hemorrhage containing hemosiderin, calcium, and fibrous tissue. They appear as numerous tiny dark foci scattered throughout the splenic parenchyma on MRI. The gradient echo sequence is most sensitive because it maximizes susceptibility effects from hemosiderin. They are benign and a radiographic marker of portal hypertension (from conditions like cirrhosis or splenic vein thrombosis).',
          keyFact: 'Gamna-Gandy bodies = tiny T2 dark (iron) foci in spleen from prior hemorrhage. Most sensitive sequence: gradient echo (susceptibility). Association: portal hypertension.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gamna-gandy-bodies',
          tags: ['mri', 'spleen', 'portal-hypertension', 'iron', 'siderotic'],
        },
      },
      {
        id: 'abd-spleen-004',
        front: {
          question: 'What are the most common causes of massive splenomegaly?',
        },
        back: {
          answer: 'Passive congestion (heart failure, portal HTN, splenic vein thrombosis), lymphoma, leukemia, Gaucher\'s disease. Small spleen causes: sickle cell (autosplenectomy), post-radiation, post-thorotrast, malabsorption syndromes (UC > Crohn\'s).',
          explanation: 'Gaucher\'s disease (glucocerebrosidase deficiency) causes massive hepatosplenomegaly from glucocerebroside accumulation in macrophages. Felty\'s syndrome (rheumatoid arthritis + splenomegaly + neutropenia) is a classic board favorite. The most common mass in the spleen overall is a hemangioma. The most common malignant mass is lymphoma.',
          keyFact: 'Massive splenomegaly: lymphoma, leukemia, Gaucher\'s, portal HTN. Felty\'s triad: splenomegaly + RA + neutropenia. Small spleen: sickle cell (autosplenectomy), post-radiation. Most common splenic mass = hemangioma (benign). Most common malignant = lymphoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/splenomegaly',
          tags: ['ct', 'us', 'spleen', 'splenomegaly', 'differential'],
        },
      },
      {
        id: 'abd-spleen-005',
        front: {
          question: 'What is splenic artery aneurysm, who is at highest risk, and when is it treated?',
        },
        back: {
          answer: 'Splenic artery aneurysm = most common visceral arterial aneurysm. Higher incidence in women of childbearing age with > 2 pregnancies (4× more likely; 3× more likely to rupture). Usually saccular, mid-to-distal splenic artery. Treat when ≥ 2–3 cm.',
          explanation: 'Splenic artery aneurysms are found in 0.8% of the general population. They are associated with portal hypertension (increased splenic artery flow), pregnancy, fibromuscular dysplasia, and pancreatitis (causing pseudoaneurysms). Do NOT biopsy a hypervascular pancreatic/splenic region mass without first excluding a splenic artery aneurysm.',
          keyFact: 'Splenic artery aneurysm = most common visceral artery aneurysm. Women with multiple pregnancies = highest risk group. Treat at 2–3 cm. Pancreatitis causes pseudoaneurysm of GDA or splenic artery.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/splenic-artery-aneurysm',
          tags: ['ct', 'us', 'spleen', 'aneurysm', 'vascular'],
        },
      },
      {
        id: 'abd-spleen-006',
        front: {
          question: 'What is the most common radiologically detected splenic infection, and what is the classic appearance?',
        },
        back: {
          answer: 'Histoplasmosis: multiple tiny round calcifications throughout the spleen. Splenic TB can look similar (multiple calcified granulomas). Brucellosis: usually solitary, large (≥ 2 cm), may have low-density center with peripheral calcification (bull\'s eye). Splenic abscess in immunocompromised: multiple micro-abscesses, Candida = bull\'s eye on US.',
          explanation: 'Histoplasma capsulatum is endemic in the Mississippi and Ohio River valleys. Healed granulomas calcify in the spleen (and liver). The appearance of multiple small round calcifications throughout the spleen is classic. In immunocompromised patients, fungal infections (Candida, Aspergillus) produce micro-abscesses that appear as tiny hypoechoic foci (bull\'s eye = target lesion) on US.',
          keyFact: 'Most common splenic calcification: histoplasmosis (multiple tiny round calcified granulomas). Immunocompromised + splenic micro-abscesses = fungal (Candida = bull\'s eye on US). Salmonella = classic cause of abscess in immunocompetent sickle cell patients.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/splenic-histoplasmosis',
          tags: ['ct', 'us', 'spleen', 'infection', 'calcification'],
        },
      },
    ],
  },

  // ============================================================
  // PERITONEUM AND MESENTERY
  // ============================================================
  {
    id: 'abd-peritoneum',
    label: 'Peritoneum & Mesentery',
    cards: [
      {
        id: 'abd-peritoneum-001',
        front: {
          question: 'What is peritoneal carcinomatosis, and where do implants preferentially occur?',
        },
        back: {
          answer: 'Peritoneal carcinomatosis is intraperitoneal spread of malignancy along serosal surfaces. Most dependent/common location: rectovesical (or rectouterine) space — the most dependent part of the peritoneal cavity, where ascitic flow naturally pools. Omental caking = posterior displacement of bowel from anterior abdominal wall.',
          explanation: 'Peritoneal implants follow the natural flow of ascitic fluid within the peritoneal cavity. The subphrenic spaces, paracolic gutters, and pelvic cul-de-sacs are preferentially affected. On CT, implants appear as soft tissue nodules or plaques along peritoneal surfaces. The greater omentum can be replaced by tumor ("omental cake") displacing small bowel centrally and posteriorly.',
          keyFact: 'Peritoneal carcinomatosis: most common location = retrovesical space (most dependent). Omental caking = bowel displaced posteriorly. Primary tumors: ovary, colon, stomach, pancreas.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/peritoneal-carcinomatosis',
          tags: ['ct', 'peritoneum', 'carcinomatosis', 'ascites', 'mets'],
        },
      },
      {
        id: 'abd-peritoneum-002',
        front: {
          question: 'What is the "sandwich sign," and what diagnosis does it suggest?',
        },
        back: {
          answer: 'Sandwich sign: lobulated confluent mesenteric soft tissue mass encasing the mesenteric vessels ("sandwiching" them) between two lobes of tumor. Diagnosis: mesenteric lymphoma (usually non-Hodgkin lymphoma, which involves the mesentery ~50% of the time).',
          explanation: 'Mesenteric involvement is common in non-Hodgkin lymphoma. The sandwich sign refers to the appearance of mesenteric vessels trapped within confluent soft tissue tumor on CT. It can also be seen in metastatic disease and occasionally in desmoid tumors, but mesenteric NHL is the classic association. Retroperitoneal adenopathy often coexists.',
          keyFact: 'Sandwich sign = mesenteric vessels engulfed by soft tissue mass = mesenteric lymphoma (NHL). NHL involves mesentery in 50%. Also produces retroperitoneal adenopathy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mesenteric-lymphoma',
          tags: ['ct', 'peritoneum', 'mesentery', 'lymphoma', 'nhl'],
        },
      },
      {
        id: 'abd-peritoneum-003',
        front: {
          question: 'Compare the named hernias: Spigelian, Littre, Amyand, and Richter.',
        },
        back: {
          answer: 'Spigelian: herniates through semilunar line at transversus abdominis aponeurosis near arcuate line. Littre: contains Meckel\'s diverticulum. Amyand: contains appendix. Richter: only ONE wall of bowel herniates → does NOT obstruct but HIGH risk of strangulation.',
          explanation: 'These eponymic hernias are board favorites. Spigelian hernias occur at a specific location between the semilunar line and the lateral edge of the rectus abdominis. They may be interparietal (hidden). Richter hernia is particularly dangerous because partial bowel wall herniation can strangulate without producing classic obstruction signs — the bowel lumen remains in continuity.',
          keyFact: 'Richter = one wall → no obstruction but HIGH strangulation risk. Littre = Meckel\'s in hernia sac. Amyand = appendix in hernia. Spigelian = semilunar line (S for S) near arcuate line.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spigelian-hernia',
          tags: ['ct', 'peritoneum', 'hernia', 'bowel', 'abdominal-wall'],
        },
      },
      {
        id: 'abd-peritoneum-004',
        front: {
          question: 'What are the three sites of internal hernia after Roux-en-Y gastric bypass, and which is most testable?',
        },
        back: {
          answer: '1) At transverse mesocolon defect (retrocolic position). 2) At mesenteric defect at enteroenterostomy. 3) Petersen\'s space (behind Roux limb mesentery — retrocolic or antecolic Petersen type). Petersen\'s is most testable because it has an eponym.',
          explanation: 'Internal hernias are a known complication of laparoscopic Roux-en-Y gastric bypass. The laparoscopic approach creates fewer adhesions (more mobility), increasing hernia risk. Significant weight loss also reduces protective mesenteric fat. Most manifest as closed loop obstruction with strangulation. CT shows abnormally located bowel loops, mesenteric swirling, and signs of ischemia.',
          keyFact: 'Post-RYGB internal hernia: 3 sites — mesocolic defect, enteroenterostomy, and Petersen\'s space (most testable = has eponym). Laparoscopic > open surgery for hernia risk. More weight loss = more risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/petersens-hernia',
          tags: ['ct', 'peritoneum', 'hernia', 'post-surgical', 'bypass'],
        },
      },
      {
        id: 'abd-peritoneum-005',
        front: {
          question: 'What is the paraduodenal hernia, and which side is more common?',
        },
        back: {
          answer: 'Paraduodenal hernia: most common internal hernia. 75% are LEFT-sided (fossa of Landzert, at duodenojejunal junction). Small bowel trapped between the pancreas and stomach, left of the ligament of Treitz. Left-sided sac characteristically contains the IMV and left colic artery.',
          explanation: 'Right-sided paraduodenal hernias (less common) occur at the fossa of Waldeyer, just behind the SMA and below the transverse duodenum, typically in the setting of non-rotation of the small bowel with normal large bowel rotation. CT shows a cluster of small bowel loops in an abnormal location with an encapsulated appearance, often with mesenteric vessel swirling and closed loop signs.',
          keyFact: 'Paraduodenal hernia = most common internal hernia. 75% LEFT-sided (fossa of Landzert). Left sac contains IMV + left colic artery. Right-sided = fossa of Waldeyer, behind SMA, with non-rotated small bowel.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/paraduodenal-hernia',
          tags: ['ct', 'peritoneum', 'hernia', 'mesentery', 'internal-hernia'],
        },
      },
      {
        id: 'abd-peritoneum-006',
        front: {
          question: 'Compare direct vs. indirect inguinal hernias and femoral hernia.',
        },
        back: {
          answer: 'Direct: less common, medial to inferior epigastric artery, defect in Hesselbach\'s triangle, NOT covered by internal spermatic fascia. Indirect: more common, lateral to inferior epigastric artery, failure of processus vaginalis to close, covered by internal spermatic fascia. Femoral: medial to femoral vein, posterior to inguinal ligament, commonly in older women, high rate of obstruction.',
          explanation: 'Inguinal hernias (M:F = 7:1) are the most common abdominal wall hernias overall. Femoral hernias are more common in women and have a higher rate of incarceration/strangulation than inguinal hernias, despite being less common. Obturator hernias (another "old lady hernia") pass through the obturator foramen and can present with the Howship-Romberg sign (medial thigh pain).',
          keyFact: 'Indirect inguinal = most common hernia (all types). Direct = through Hesselbach\'s triangle. Femoral = medial to femoral vein, old women, high obstruction rate. Inguinal M:F = 7:1.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/inguinal-hernia',
          tags: ['ct', 'peritoneum', 'hernia', 'inguinal', 'abdominal-wall'],
        },
      },
      {
        id: 'abd-peritoneum-007',
        front: {
          question: 'What is primary peritoneal mesothelioma, and how does it differ from cystic peritoneal mesothelioma?',
        },
        back: {
          answer: 'Primary peritoneal mesothelioma: rare, ASSOCIATED with asbestos exposure, occurs 30–40 years after exposure, involves peritoneal surface, malignant. Cystic peritoneal mesothelioma: benign, NOT associated with asbestos, young to middle-aged women (30s), usually peritoneal cysts.',
          explanation: 'Malignant mesothelioma involves the pleura 75% of the time and the peritoneum 25%. The long latency period (30–40 years) after asbestos exposure is a classic testable fact. Peritoneal mesothelioma presents with ascites and peritoneal thickening/nodularity on CT. Cystic peritoneal mesothelioma (benign multicystic mesothelioma) is a separate entity without the asbestos association, typically involving the pelvic peritoneum in women.',
          keyFact: 'Peritoneal mesothelioma: 25% of mesothelioma, asbestos 30–40 years prior. Cystic peritoneal mesothelioma: benign, NO asbestos, young women. Both are rare zebras — testable on boards.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/peritoneal-mesothelioma',
          tags: ['ct', 'peritoneum', 'mesothelioma', 'asbestos', 'rare'],
        },
      },
    ],
  },

  // ============================================================
  // ADRENAL GLANDS
  // ============================================================
  {
    id: 'abd-adrenal',
    label: 'Adrenal Glands',
    cards: [
      {
        id: 'abd-adrenal-001',
        front: {
          question: 'What are the CT criteria for characterizing an adrenal incidentaloma as a lipid-rich adenoma?',
        },
        back: {
          answer: '< 10 HU on unenhanced CT = lipid-rich adenoma (highly specific). Chemical shift MRI: signal dropout on out-of-phase images (intracellular lipid). > 10 HU on non-contrast CT → proceed to washout calculation.',
          explanation: 'Adrenal adenomas contain intracytoplasmic lipid that lowers their attenuation on unenhanced CT. A threshold of 10 HU correctly classifies ~70% of adenomas. For indeterminate lesions (10–40 HU), the adrenal washout protocol is used: enhanced CT at 1 and 15 min. Absolute percentage washout ≥ 60% or relative ≥ 40% = adenoma.',
          keyFact: '< 10 HU on unenhanced CT = lipid-rich adenoma. Out-of-phase MRI dropout = fat = adenoma. Washout protocol: absolute ≥ 60% or relative ≥ 40% = adenoma. > 4 cm without classic features → resect.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/adrenal-adenoma',
          tags: ['ct', 'mri', 'adrenal', 'adenoma', 'incidentaloma'],
        },
      },
      {
        id: 'abd-adrenal-002',
        front: {
          question: 'What are the imaging features of pheochromocytoma?',
        },
        back: {
          answer: 'Pheochromocytoma: typically large, heterogeneous, markedly T2 bright ("light bulb" on T2). Avid contrast enhancement. 10% rules: 10% bilateral, 10% malignant, 10% extra-adrenal (paraganglioma), 10% in children, 10% familial. Associated with MEN-2, NF-1, VHL, SDH mutations.',
          explanation: 'Pheochromocytomas arise from chromaffin cells of the adrenal medulla and produce catecholamines. On CT, they are hypervascular and may be large with cystic/necrotic components. Marked T2 hyperintensity is characteristic. MIBG scintigraphy and 68Ga-DOTATATE PET are used for functional and metastatic evaluation. DO NOT biopsy without alpha-blockade.',
          keyFact: 'Pheo: T2 bright ("light bulb"), avid enhancement, large. 10% rules: bilateral, malignant, extra-adrenal, pediatric, familial. Associations: MEN-2, NF-1, VHL, SDH. Carney\'s triad: GIST + pulmonary chondroma + extra-adrenal pheo.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/phaeochromocytoma',
          tags: ['ct', 'mri', 'adrenal', 'pheochromocytoma', 'hypervascular'],
        },
      },
      {
        id: 'abd-adrenal-003',
        front: {
          question: 'What is the ACR incidentaloma workup algorithm for adrenal lesions?',
        },
        back: {
          answer: '< 10 HU on NECT: lipid-rich adenoma, no further workup needed. 10–40 HU: washout CT (absolute ≥ 60% or relative ≥ 40% = adenoma). > 4 cm: resect regardless. Indeterminate: follow with imaging at 6–12 months ×2. Rule out malignancy (prior cancer, biochemical activity) first.',
          explanation: 'Adrenal incidentalomas are found in ~4% of CT scans. The priority is to exclude functioning tumors (pheo → alpha-block first, then evaluate) and malignancy. Lesions that are growing, metabolically active, > 4 cm, or indeterminate on washout require resection. PET/CT is useful in known malignancy to characterize adrenal lesions.',
          keyFact: 'Adrenal incidentaloma: < 10 HU = adenoma (done). 10–40 HU = washout CT. > 4 cm = resect. Growing lesion or indeterminate = resect. Always exclude biochemical activity (pheo, aldosteronoma, Cushing) before any intervention.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/adrenal-incidentaloma',
          tags: ['ct', 'adrenal', 'incidentaloma', 'management', 'washout'],
        },
      },
      {
        id: 'abd-adrenal-004',
        front: {
          question: 'Which primary tumors most commonly metastasize to the adrenal glands, and how are adrenal mets characterized?',
        },
        back: {
          answer: 'Most common primary tumors: lung (most common), breast, melanoma, renal cell, colon. Adrenal mets: typically > 10 HU on NECT, delayed washout (< 60% absolute, < 40% relative), may be bilateral. Bilateral adrenal mets can cause adrenal insufficiency.',
          explanation: 'Adrenal metastases are among the most common adrenal masses in patients with known malignancy. They cannot be distinguished from adenomas solely based on size or morphology — HU and washout characteristics are required. In patients with known primary malignancy and bilateral adrenal masses, mets must be excluded. FDG-PET shows avid uptake in mets but not adenomas.',
          keyFact: 'Adrenal mets: lung #1 primary. > 10 HU NECT + poor washout = met. Bilateral adrenal masses = consider mets + adrenal insufficiency. FDG-PET: mets = hot, adenomas = cold (relatively).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/adrenal-metastases',
          tags: ['ct', 'adrenal', 'mets', 'malignancy', 'washout'],
        },
      },
      {
        id: 'abd-adrenal-005',
        front: {
          question: 'What is adrenocortical carcinoma (ACC), and what are its imaging features?',
        },
        back: {
          answer: 'ACC is rare but aggressive. Imaging: large (> 4 cm), heterogeneous mass, often with necrosis, calcifications, and local invasion. Frequently functional (excess cortisol, androgens). May invade IVC/renal vein (like RCC). Calcifications in 30%. High FDG uptake.',
          explanation: 'ACC accounts for < 2% of adrenal tumors but has a poor prognosis. On CT, it appears as a large heterogeneous mass that may invade adjacent structures or extend into the IVC as tumor thrombus. Unlike adenomas, ACCs do not have intracellular lipid and will have high HU values and poor washout. Mitotane is the primary medical therapy.',
          keyFact: 'ACC: > 4 cm, large, heterogeneous, calcifications (30%), may invade IVC. Any large adrenal mass (> 4 cm) with indeterminate features → consider ACC → resect. Calcification helps (adenomas rarely calcify).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/adrenocortical-carcinoma',
          tags: ['ct', 'adrenal', 'carcinoma', 'malignancy', 'large'],
        },
      },
    ],
  },

  // ============================================================
  // KIDNEYS AND URETERS
  // ============================================================
  {
    id: 'abd-renal',
    label: 'Kidneys & Ureters',
    cards: [
      {
        id: 'abd-renal-001',
        front: {
          question: 'What is the Bosniak classification of renal cysts, and which categories require surgical management?',
        },
        back: {
          answer: 'Bosniak I: simple cyst (0% malignancy) → no follow-up. II: minimally complex (< 3% malignancy) → no follow-up or 1-year CT. IIF: more complex, follows-up. III: indeterminate (~50% malignancy) → surgery or close follow-up. IV: clearly malignant (> 80% malignancy) → surgery.',
          explanation: 'The Bosniak classification uses CT enhancement (attenuation increase > 15 HU = enhancement), wall thickness, calcification, and septations. Category I: thin wall, water density (< 20 HU), no enhancement. Category II: few thin septa, fine calcification, high-density cyst (< 3 cm). Category IIF: multiple thin septa or thicker calcification, hyperdense (> 3 cm). Category III: thick/irregular wall or septa with enhancement. Category IV: solid enhancing components.',
          keyFact: 'Bosniak III → surgery or surveillance. IV → surgery. I and II → benign, no follow-up. IIF → follow. Enhancement = HU increase > 15 HU. Critical distinction: III vs. IV determines resection vs. surveillance.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bosniak-classification-of-renal-cysts',
          tags: ['ct', 'mri', 'kidney', 'bosniak', 'cyst'],
        },
      },
      {
        id: 'abd-renal-002',
        front: {
          question: 'What are the classic imaging features of renal cell carcinoma (RCC) by subtype?',
        },
        back: {
          answer: 'Clear cell RCC (most common, 80%): hypervascular, enhancing heterogeneous mass, may contain macroscopic fat. Papillary RCC: hypovascular, T2 dark, homogeneous. Chromophobe RCC: spoke-wheel enhancement, large central scar (mimics FNH). All: venous invasion (IVC involvement is classic for RCC). AML: macroscopic fat = diagnostic.',
          explanation: 'RCC arises from renal tubular cells. Clear cell is the most common and most aggressive subtype, associated with VHL syndrome. Papillary type is associated with hereditary papillary renal carcinoma syndrome. Clear cell RCC classically invades the renal vein and IVC (tumor thrombus — testable). Angiomyolipoma (AML) contains macroscopic fat (< -10 HU on CT) — the only renal mass with this feature.',
          keyFact: 'Clear cell = hypervascular + IVC invasion. Papillary = hypovascular + T2 dark. Chromophobe = spoke-wheel. AML = macroscopic fat (< -10 HU) = pathognomonic. VHL → bilateral RCC + hemangioblastomas + pheochromocytoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/renal-cell-carcinoma',
          tags: ['ct', 'mri', 'kidney', 'rcc', 'mass'],
        },
      },
      {
        id: 'abd-renal-003',
        front: {
          question: 'What is angiomyolipoma (AML), and when must you treat it?',
        },
        back: {
          answer: 'AML = benign renal hamartoma containing fat (< -10 HU on CT), smooth muscle, and blood vessels. Associated with tuberous sclerosis (bilateral, multiple AMLs). Treat when ≥ 4 cm (risk of spontaneous hemorrhage — Wunderlich syndrome). 50% of AMLs in TS lack macroscopic fat (fat-poor AMLs — harder to diagnose).',
          explanation: 'Classic AML diagnosis requires macroscopic fat on CT (< -10 HU). Fat-poor AMLs are challenging — they can mimic papillary RCC (both T2 dark, homogeneous, hypovascular). DWI and chemical shift MRI may help. Tuberous sclerosis complex (TSC) causes multiple bilateral AMLs (and SEGA, cardiac rhabdomyomas, pulmonary LAM). Sporadic AMLs are common in middle-aged women.',
          keyFact: 'AML: macroscopic fat on CT = diagnostic. Treat ≥ 4 cm (hemorrhage risk). Tuberous sclerosis = bilateral multiple AMLs + LAM + SEGA. 50% of TS-AMLs are fat-poor. Wunderlich syndrome = spontaneous retroperitoneal hemorrhage from AML.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/angiomyolipoma-of-the-kidney',
          tags: ['ct', 'mri', 'kidney', 'aml', 'fat'],
        },
      },
      {
        id: 'abd-renal-004',
        front: {
          question: 'What is the classic imaging of renal vascular disease — renal artery stenosis and renal vein thrombosis?',
        },
        back: {
          answer: 'Renal artery stenosis: small kidney, delayed nephrogram, post-stenotic dilation, decreased perfusion. Fibromuscular dysplasia: "string of beads" appearance, young women. Renal vein thrombosis: enlarged swollen kidney, perinephric stranding, thrombus in renal vein extending to IVC.',
          explanation: 'Renal artery stenosis (RAS) from atherosclerosis (proximal, ostial) or fibromuscular dysplasia (FMD, distal "string of beads") can cause renovascular hypertension. On CT angiography, FMD shows alternating stenoses and dilations ("string of beads") in the mid-to-distal renal artery. Renal vein thrombosis classically occurs in nephrotic syndrome, hypercoagulable states, or as extension of RCC tumor thrombus.',
          keyFact: 'FMD = string of beads in mid-to-distal renal artery, young woman. Atherosclerotic RAS = proximal/ostial, older man. Renal vein thrombosis = enlarged kidney + perinephric edema + thrombus. RCC: IVC tumor thrombus = classic finding.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/renal-artery-stenosis',
          tags: ['ct', 'us', 'kidney', 'vascular', 'renal-artery-stenosis'],
        },
      },
      {
        id: 'abd-renal-005',
        front: {
          question: 'What are the hereditary renal tumor syndromes and their associated findings?',
        },
        back: {
          answer: 'VHL (Von Hippel-Lindau): bilateral clear cell RCC + hemangioblastomas (cerebellum/spinal cord) + pheochromocytoma + pancreatic cysts/NETs + retinal angiomas. Tuberous sclerosis: bilateral AMLs + LAM + SEGA + cardiac rhabdomyomas. HNPCC/Lynch: also associated with urothelial carcinoma. Hereditary papillary RCC: bilateral multifocal papillary RCC.',
          explanation: 'These syndromes require bilateral, multifocal surveillance in younger patients. VHL is autosomal dominant with loss of function of the VHL tumor suppressor gene. In VHL, renal cysts and RCCs may coexist. The pancreatic manifestations of VHL range from simple cysts to serous cystadenoma to neuroendocrine tumors.',
          keyFact: 'VHL = bilateral clear cell RCC + hemangioblastomas (cerebellum) + pheo + pancreatic cysts. TS = bilateral AMLs + LAM + SEGA. Both autosomal dominant. VHL: replace VHL gene → clear cell RCC development.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/von-hippel-lindau-disease',
          tags: ['ct', 'kidney', 'genetics', 'vhl', 'syndrome'],
        },
      },
      {
        id: 'abd-renal-006',
        front: {
          question: 'What is hydronephrosis, and how do you distinguish obstructive from non-obstructive causes on imaging?',
        },
        back: {
          answer: 'Hydronephrosis = dilated collecting system. Obstructive: urothelial thickening, delayed nephrogram, stranding around ureter, transition point visible. Non-obstructive (reflux, pregnancy, post-obstructive): dilated system without a transition point, perinephric stranding minimal, cortex enhances normally.',
          explanation: 'The key imaging task is identifying the level and cause of obstruction. CT urography with delayed excretory phase images best shows the transition point. Common causes: urolithiasis (most common), UPJ obstruction, urothelial carcinoma, retroperitoneal fibrosis, pelvic malignancy. Nuclear medicine diuretic renography (MAG3 or DTPA) quantifies obstruction severity and differential renal function.',
          keyFact: 'Obstructive hydronephrosis: find the transition point (CT urography delayed phase). Delayed nephrogram + stranding + transition point = obstruction. Diuretic renography: MAG3/DTPA + furosemide to quantify. Retroperitoneal fibrosis can cause medial deviation of ureters + obstruction.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hydronephrosis',
          tags: ['ct', 'us', 'kidney', 'hydronephrosis', 'obstruction'],
        },
      },
    ],
  },

  // ============================================================
  // ABDOMINAL VASCULATURE
  // ============================================================
  {
    id: 'abd-vasculature',
    label: 'Abdominal Vasculature',
    cards: [
      {
        id: 'abd-vasculature-001',
        front: {
          question: 'What are the CT angiographic criteria for abdominal aortic aneurysm (AAA) repair, and what are the classic complications?',
        },
        back: {
          answer: 'Repair threshold: ≥ 5.5 cm (men) or ≥ 5 cm (women), or growth > 1 cm/year, or symptomatic. Classic complications: rupture (retroperitoneal hematoma → displaced aortic calcification on X-ray), aortoenteric fistula, inflammatory AAA (periaortic soft tissue cuffing).',
          explanation: 'AAA is defined as aortic diameter > 3 cm (normal < 2 cm). The infrarenal aorta is most commonly involved. CT angiography measures the aneurysm neck length and diameter for EVAR (endovascular aortic repair) planning. Ruptured AAA on CT: retroperitoneal hematoma with high-attenuation blood, loss of periaortic fat, and active extravasation.',
          keyFact: 'AAA repair: ≥ 5.5 cm in men, ≥ 5 cm in women, or growing > 1 cm/yr, or symptomatic. Ruptured AAA: retroperitoneal hematoma. Aortoenteric fistula = cause of GI bleed after aortic graft surgery.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/abdominal-aortic-aneurysm',
          tags: ['ct', 'vasculature', 'aorta', 'aneurysm', 'management'],
        },
      },
      {
        id: 'abd-vasculature-002',
        front: {
          question: 'What is mesenteric ischemia: acute vs. chronic, and how does CT differentiate arterial from venous causes?',
        },
        back: {
          answer: 'Acute arterial (SMA): abrupt onset, usually embolic (from heart) or thrombotic. CT: absent SMA flow, pneumatosis, portal venous gas, bowel wall thinning then thickening. Chronic (mesenteric angina): post-prandial pain, weight loss. Venous (SMV thrombosis): thickened edematous bowel, mesenteric stranding, thrombus in SMV.',
          explanation: 'Bowel ischemia from SMA occlusion (embolic from cardiac source or thrombotic in atherosclerosis) causes rapid full-thickness infarction. CT in acute mesenteric ischemia shows bowel wall thinning initially, then thickening, pneumatosis (air in bowel wall), and portal venous gas (late/severe). Venous mesenteric ischemia has a more subacute course with marked bowel wall thickening and ascites.',
          keyFact: 'Acute mesenteric ischemia (SMA): pneumatosis + portal venous gas = bad sign. Arterial: absent SMA flow, thin wall. Venous: thick wall + mesenteric stranding + SMV thrombus + ascites. Mesenteric angina: three vessel disease, post-prandial.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acute-mesenteric-ischaemia',
          tags: ['ct', 'vasculature', 'ischemia', 'mesenteric', 'emergency'],
        },
      },
      {
        id: 'abd-vasculature-003',
        front: {
          question: 'What is retroperitoneal fibrosis (RPF), and what are the classic imaging features?',
        },
        back: {
          answer: 'RPF = fibrous tissue encasing the retroperitoneal structures, classically the distal aorta and IVC. Causes medial deviation and encasement (not obstruction) of the ureters. CT: periaortic soft tissue mass. Enhancement on delayed phase. Most cases are idiopathic; 1/3 associated with IgG4 disease.',
          explanation: 'In RPF, the ureters are pulled medially (unlike lymphoma and lymphadenopathy which displace ureters laterally). The fibrotic mass typically extends from the renal arteries to the pelvic brim. Contrast enhancement decreases with disease maturation. IgG4-related RPF responds to steroids. Malignant RPF (secondary to breast, prostate, lymphoma) must be excluded.',
          keyFact: 'RPF: periaortic fibrous tissue + MEDIAL ureteric deviation (ureters are pulled toward aorta, NOT displaced laterally). IgG4-related = steroid-responsive. Medial deviation vs. lymphoma: lateral deviation. Bilateral hydronephrosis in middle-aged man = think RPF.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/retroperitoneal-fibrosis',
          tags: ['ct', 'vasculature', 'retroperitoneum', 'rpf', 'igg4'],
        },
      },
      {
        id: 'abd-vasculature-004',
        front: {
          question: 'What is the hepatic arterial buffer response and transient hepatic attenuation differences (THADs)?',
        },
        back: {
          answer: 'THAD = focal arterial hyperenhancement seen on arterial/early portal phase (NOT delayed phase) due to compensatory arterial increase when local portal flow is reduced. Causes: cirrhosis (subcapsular THADs), portal vein branch clot (wedge-shaped), adjacent mass (direct compression), abscess/infection.',
          explanation: 'The liver receives 70% blood from portal vein and 30% from hepatic artery. When local portal flow decreases (for any reason), the hepatic artery increases flow — the hepatic arterial buffer response (HABR). THADs are transient (seen only in arterial/portal phase, not on equilibrium phase). Subcapsular THADs in cirrhosis are from fibrosis compressing tiny portal veins and are a benign finding.',
          keyFact: 'THAD = focal arterial enhancement only on early phases (NOT equilibrium). Cirrhosis THADs = subcapsular. Wedge-shaped THAD = portal vein branch clot. Disappears on delayed phase = THAD (not HCC, which has washout).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transient-hepatic-attenuation-difference',
          tags: ['ct', 'liver', 'vasculature', 'enhancement', 'thad'],
        },
      },
    ],
  },

  // ============================================================
  // HEPATIC DOPPLER
  // ============================================================
  {
    id: 'abd-hepatic-doppler',
    label: 'Hepatic Doppler',
    cards: [
      {
        id: 'abd-doppler-001',
        front: {
          question: 'What is the resistive index (RI), what is its formula, and what does it indicate?',
        },
        back: {
          answer: 'RI = (Peak Systolic Velocity − End Diastolic Velocity) / Peak Systolic Velocity. Normal hepatic artery RI: 0.5–0.7. Low RI (< 0.5) = low resistance, organ demanding blood (liver transplant early thrombosis/stenosis). High RI (> 0.7) = high resistance (transplant rejection, intrinsic renal disease).',
          explanation: 'The RI reflects downstream vascular resistance. In the hepatic transplant setting, an RI < 0.5 with a tardus-parvus waveform suggests proximal stenosis (indirect sign) — the liver is "starved" for blood. An RI > 0.7 in a transplant suggests rejection or hepatic vein outflow obstruction increasing back pressure. Optimal Doppler angle for velocity measurements: < 60°.',
          keyFact: 'RI = (PSV − EDV)/PSV. Normal hepatic artery RI: 0.5–0.7. Tardus parvus (RI < 0.5) = stenosis upstream. Doppler angle must be < 60° (strength follows cosine — Cos 90° = 0).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/resistive-index',
          tags: ['us', 'doppler', 'liver', 'transplant', 'vascular'],
        },
      },
      {
        id: 'abd-doppler-002',
        front: {
          question: 'What are the three portal vein Doppler waveform patterns and their causes?',
        },
        back: {
          answer: 'Normal: gentle undulation above baseline (antegrade, 20–40 cm/s). Pulsatile: right-sided CHF, tricuspid regurgitation, cirrhosis with AP shunting. Reversed (hepatofugal): portal hypertension (any cause). Slow flow (< 15 cm/s): portal HTN, portal vein thrombosis, cirrhosis.',
          explanation: 'Portal flow is normally antegrade (toward the liver) with gentle respiratory variation. Pulsatile flow reflects right heart pressure changes transmitted through hepatic veins into the portal system. Reversed (hepatofugal) portal flow indicates severe portal hypertension with decompression through portosystemic collaterals. Absence of flow = thrombus, tumor invasion, or profound portal HTN.',
          keyFact: 'Portal vein normal: 20–40 cm/s, antegrade, gentle. Reversed = portal HTN. Pulsatile = right heart failure/TR. Slow (< 15 cm/s) = portal HTN #1 cause. Absent = thrombosis or tumor invasion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/portal-vein-doppler',
          tags: ['us', 'doppler', 'liver', 'portal-vein', 'portal-hypertension'],
        },
      },
      {
        id: 'abd-doppler-003',
        front: {
          question: 'What causes abnormal hepatic vein waveforms, and what does absent pulsatility indicate?',
        },
        back: {
          answer: 'More pulsatile: tricuspid regurgitation (D deeper than S). Less pulsatile: right-sided CHF (S deeper than D), cirrhosis (fibrosis compresses hepatic veins). Absent pulsatility: Budd-Chiari syndrome (any cause of hepatic venous outflow obstruction).',
          explanation: 'Normal hepatic vein flow is triphasic with antegrade S (systolic) and D (diastolic) waves and a retrograde A wave from atrial contraction. Increased right atrial pressure (TR) amplifies the S/D waves and particularly the retrograde A wave. In cirrhosis, fibrous compression of hepatic venules dampens pulsatility. Complete loss of pulsatility (monophasic flat waveform) = Budd-Chiari or severe outflow obstruction.',
          keyFact: 'Hepatic vein absent pulsatility = Budd-Chiari. TR: D deeper than S. Right heart failure: S deeper than D. Cirrhosis: decreased pulsatility (fibrous compression of veins). Normal flow: toward heart (antegrade).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatic-vein-doppler',
          tags: ['us', 'doppler', 'liver', 'hepatic-vein', 'budd-chiari'],
        },
      },
    ],
  },

  // ============================================================
  // ABDOMINAL WALL & MISC
  // ============================================================
  {
    id: 'abd-abdominal-wall',
    label: 'Abdominal Wall & Misc',
    cards: [
      {
        id: 'abd-misc-001',
        front: {
          question: 'What is diverticulosis vs. diverticulitis, and what are the imaging findings of each?',
        },
        back: {
          answer: 'Diverticulosis: outpouchings of mucosa/submucosa through weaknesses in colonic wall (false diverticula). Bleeds more than diverticulitis. Diverticulitis: perforation/inflammation of a diverticulum. CT: fat stranding, wall thickening, possibly pericolic abscess. Fistula formation is most common complication (colovesical most common with diverticulitis).',
          explanation: 'Right-sided diverticulosis is less common but more prevalent in young Asian patients. Diverticular bleeding (from right-sided diverticula typically) is the most common cause of lower GI bleeding. Diverticulitis is complicated by abscess, fistula, obstruction, or peritonitis. Colovesical fistula presents with pneumaturia and fecaluria on imaging (air in bladder in absence of recent catheterization).',
          keyFact: 'Diverticulosis: bleeds more than diverticulitis. Diverticulitis: fat stranding + wall thickening on CT. Most common fistula = colovesical (bladder). Right-sided diverticulosis = young Asians.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acute-diverticulitis',
          tags: ['ct', 'large-bowel', 'diverticulitis', 'diverticulosis', 'complication'],
        },
      },
      {
        id: 'abd-misc-002',
        front: {
          question: 'What is a gossypiboma and why is it radiologically important?',
        },
        back: {
          answer: 'Gossypiboma (textiloma) = retained surgical sponge or cotton material in the body after surgery. CT: heterogeneous mass with internal air, spongiform appearance, reactive inflammatory response. Mimics an abscess. Rx: surgical removal.',
          explanation: 'Retained surgical sponges are an important medicolegal complication. On CT, they appear as a heterogeneous mass with a spongiform or whorled internal texture and often surrounded by an inflammatory pseudocapsule. The contained air gives it a complex appearance mimicking abscess. Plain radiographs may show a radiopaque marker sewn into modern surgical sponges.',
          keyFact: 'Gossypiboma = retained surgical sponge. CT: heterogeneous spongiform mass with air + inflammatory pseudocapsule. Mimics abscess. Radiopaque marker on X-ray = key. Medico-legal importance.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gossypiboma',
          tags: ['ct', 'peritoneum', 'gossypiboma', 'post-surgical', 'foreign-body'],
        },
      },
      {
        id: 'abd-misc-003',
        front: {
          question: 'What is the Mickey Mouse sign on abdominal ultrasound, and what does each "ear" represent?',
        },
        back: {
          answer: 'Mickey Mouse sign at the porta hepatis: the portal vein is the large central circle (Mickey\'s head), the common bile duct is the right ear (positioned anterolateral), and the hepatic artery is the left ear (positioned anteromedial between PV and CBD).',
          explanation: 'The portal triad (portal vein, hepatic artery, bile duct) is identified in the porta hepatis and within the hepatoduodenal ligament. On transverse US, the portal vein is the largest structure (~1 cm); the CBD and hepatic artery are the two smaller round structures positioned anterior to it. The CBD is lateral, the hepatic artery is medial. Normal CBD < 6 mm (add 1 mm per decade after 60, or up to 8 mm after cholecystectomy).',
          keyFact: 'Mickey Mouse sign: PV (head) + CBD (right ear, lateral) + hepatic artery (left ear, medial). Normal CBD < 6 mm. Post-cholecystectomy CBD up to 8–10 mm may be normal.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mickey-mouse-sign-portal-triad',
          tags: ['us', 'anatomy', 'biliary', 'portal-vein', 'hepatic-artery'],
        },
      },
    ],
  },

];