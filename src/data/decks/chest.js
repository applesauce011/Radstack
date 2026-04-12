// ============================================================
// RadStack — Chest Radiology Deck
// ============================================================
// Edit ONLY this file when adding/updating chest cards.
// Card IDs must be unique across ALL deck files.
// Naming convention: chest-[section]-[###]
// ============================================================

export const chestSubsections = [
  {
    id: 'chest-anatomy',
    label: 'Chest Anatomy',
    cards: [
      {
        id: 'chest-anatomy-001',
        front: {
          question: 'How many bronchopulmonary segments are in the right lung versus the left lung?',
        },
        back: {
          answer: 'Right: 10 segments (3 upper, 2 middle, 5 lower). Left: 8–10 segments (4 upper/lingula, 4–5 lower, with the medial basal often combined).',
          explanation: 'The right upper lobe has apical, posterior, and anterior segments. The right middle lobe has lateral and medial. The right lower lobe has superior, medial basal, anterior basal, lateral basal, and posterior basal. On the left, the apical and posterior upper lobe segments are typically fused (apicoposterior), and the anteromedial basal segments may be fused.',
          keyFact: 'Right lung = 10 segments; Left lung = 8 (due to fusion of apicoposterior and anteromedial basal segments).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bronchopulmonary-segments',
          tags: ['anatomy', 'XR', 'CT', 'chest', 'airways'],
        },
      },
      {
        id: 'chest-anatomy-002',
        front: {
          question: 'On a lateral chest radiograph, how do you distinguish the right ribs from the left ribs?',
        },
        back: {
          answer: 'The right ribs are larger (more magnified) and project more posteriorly. By convention, laterals are taken in the left lateral position, so the left ribs are closer to the detector and less magnified.',
          explanation: 'Standard lateral CXRs are taken with the left side against the cassette (left lateral decubitus position). The right ribs, being farther from the detector, are more magnified and project more posteriorly. Another approach is to follow the diaphragm contour over the stomach bubble, which is typically left-sided.',
          keyFact: 'Right ribs = larger and more posterior on lateral CXR. Follow the stomach bubble to confirm left-sided structures.',
          tags: ['anatomy', 'XR', 'chest', 'lateral'],
        },
      },
      {
        id: 'chest-anatomy-003',
        front: {
          question: 'What are the three fissures of the right lung, and which lobes does each separate?',
          hint: 'One horizontal, two oblique.',
        },
        back: {
          answer: 'Minor (horizontal) fissure: RUL from RML. Major (oblique) fissure: RUL and RML from RLL.',
          explanation: 'The minor fissure is seen on both frontal and lateral views as a horizontal line at the level of the anterior end of the 4th rib. The major (oblique) fissure is best seen on the lateral view and runs obliquely from T4 posteriorly to the anterior diaphragm. On the left, only a single oblique fissure is present, separating LUL from LLL.',
          keyFact: 'Minor fissure = horizontal, frontal + lateral view. Major fissures = lateral view only (unless fluid-filled, then visible on frontal as concave curvilinear opacities).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-fissures',
          tags: ['anatomy', 'XR', 'chest', 'fissures'],
        },
      },
      {
        id: 'chest-anatomy-004',
        front: {
          question: 'What is the azygos fissure and what is its significance?',
        },
        back: {
          answer: 'An accessory fissure in the right upper lobe created when the azygos vein is displaced laterally during development, encasing a portion of the RUL apical segment in 4 layers of pleura. Present in <1% of patients.',
          explanation: 'The azygos lobe is not a true accessory lobe but a variant of the RUL. The fissure consists of 4 pleural layers (2 parietal, 2 visceral). Clinically insignificant in itself, but the 4-layer pleural anatomy is a classic exam question. The azygos vein is displaced to its tip at the medial edge of the fissure.',
          keyFact: 'Azygos fissure = 4 layers of pleura. <1% prevalence. Not a true extra lobe.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/azygos-lobe',
          tags: ['anatomy', 'XR', 'chest', 'variant'],
        },
      },
      {
        id: 'chest-anatomy-005',
        front: {
          question: 'What structures make up the secondary pulmonary lobule (SPL), and what is its clinical relevance?',
        },
        back: {
          answer: 'Central: centrilobular artery and bronchus. Peripheral: pulmonary veins and lymphatics in interlobular septa. Surrounded by connective tissue septa. Size: 1–2.5 cm.',
          explanation: 'The SPL is the elemental unit of lung function and the key anatomic framework for interpreting CT patterns of lung disease. The centrilobular artery appears as a faint dot on CT; the centrilobular bronchus is not normally visible. Each SPL contains approximately 12 acini. The interlobular septa become visible when thickened by disease (e.g., edema, lymphangitic carcinomatosis).',
          keyFact: 'Center of SPL = artery + bronchus. Periphery = veins + lymphatics. Thickened septa = edema (smooth) or lymphangitic carcinomatosis (nodular/irregular).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/secondary-pulmonary-lobule',
          tags: ['anatomy', 'CT', 'chest', 'ILD'],
        },
      },
      {
        id: 'chest-anatomy-006',
        front: {
          question: 'On a frontal chest radiograph, what is the normal relationship between the left and right hilar points?',
        },
        back: {
          answer: 'The left hilar point is normally approximately 1 cm higher than the right.',
          explanation: 'The left pulmonary artery arches over the left mainstem bronchus, positioning the left hilum higher. Displacement of the hilar points (e.g., left hilum depressed below the right) suggests lower lobe atelectasis or other volume loss. Bilateral symmetric hilar enlargement suggests lymphadenopathy (e.g., sarcoidosis).',
          keyFact: 'Left hilum is normally ~1 cm higher than right. Remember: L for "Left is Loftier."',
          tags: ['anatomy', 'XR', 'chest', 'hilum'],
        },
      },
      {
        id: 'chest-anatomy-007',
        front: {
          question: 'What is the Raider (retrotracheal) triangle, and what is its classic radiographic significance?',
        },
        back: {
          answer: 'The retrotracheal triangle is bounded anteriorly by the posterior tracheal wall and posteriorly by the upper thoracic vertebral bodies, sitting on the aortic arch. An opacity here on a frontal CXR is classically caused by an aberrant right subclavian artery.',
          explanation: 'The aberrant right subclavian artery arises as the last branch of the aortic arch and courses posterior to the esophagus and trachea to reach the right arm. It may cause dysphagia lusoria. On CXR it produces a posterior mediastinal opacity in the Raider triangle. On CT it is clearly seen posterior to the esophagus.',
          keyFact: 'Opacity in the retrotracheal (Raider) triangle on CXR = aberrant right subclavian artery until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aberrant-right-subclavian-artery',
          tags: ['anatomy', 'XR', 'chest', 'mediastinum', 'vascular'],
        },
      },
      {
        id: 'chest-anatomy-008',
        front: {
          question: 'On a lateral CXR, what is the "dark hole" and what structures border it?',
        },
        back: {
          answer: 'The dark hole is the left upper lobe bronchus in cross-section. In front of it is the right pulmonary artery; above it is the left pulmonary artery. The posterior wall of the bronchus intermedius runs through it and can be thickened by edema.',
          explanation: 'This anatomic landmark on the lateral view helps identify hilar structures without CT. The right PA is anterior to the dark hole and the left PA is superior. Recognizing the posterior wall of the bronchus intermedius is important as thickening (>2–3 mm) can indicate peribronchial cuffing from edema.',
          keyFact: 'Dark hole on lateral = left upper lobe bronchus. Anterior = right PA; Superior = left PA. Posterior wall of bronchus intermedius runs through it.',
          tags: ['anatomy', 'XR', 'chest', 'lateral', 'hilum'],
        },
      },
      {
        id: 'chest-anatomy-009',
        front: {
          question: 'What is the aortopulmonary (AP) window, what structures normally reside there, and what does abnormal convexity suggest?',
        },
        back: {
          answer: 'The AP window is a mediastinal space between the aortic arch (superiorly) and the pulmonary artery (inferiorly). It contains lymph nodes, the left phrenic nerve, recurrent laryngeal nerve, left vagus nerve, ligamentum arteriosum, and left bronchial arteries. Abnormal convexity = most commonly lymphadenopathy.',
          explanation: 'On a normal frontal radiograph, the AP window appears as a shallow concavity below the aortic knob. Bulging of this contour is most often from adenopathy (e.g., lymphoma, metastases, sarcoidosis, TB) but can also indicate aortic aneurysm. New hoarseness with AP window mass raises concern for recurrent laryngeal nerve involvement.',
          keyFact: 'AP window convexity on CXR = lymphadenopathy #1. Also consider aortic aneurysm. New hoarseness → check for recurrent laryngeal nerve involvement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aortopulmonary-window',
          tags: ['anatomy', 'XR', 'chest', 'mediastinum'],
        },
      },
      {
        id: 'chest-anatomy-010',
        front: {
          question: 'What is the azygoesophageal recess, where does it extend, and what abnormalities can distort it?',
        },
        back: {
          answer: 'Interface formed by the posteromedial right lower lobe contacting the retrocardiac mediastinum, extending from the subcarinal region to the diaphragm. Distorted by: esophageal mass, hiatal hernia, left atrial enlargement, subcarinal adenopathy, and bronchogenic cyst.',
          explanation: 'On a frontal radiograph, the azygoesophageal recess appears as a slightly concave or straight interface to the right of the spine. Any convexity or obliteration of this interface should prompt investigation. Bronchogenic cysts in the subcarinal location classically obliterate this line.',
          keyFact: 'Azygoesophageal recess obliteration on CXR = think subcarinal mass (adenopathy, bronchogenic cyst, esophageal lesion, or enlarged left atrium).',
          tags: ['anatomy', 'XR', 'chest', 'mediastinum'],
        },
      },
      {
        id: 'chest-anatomy-011',
        front: {
          question: 'Where should the four heart valves be located on a frontal and lateral CXR?',
        },
        back: {
          answer: 'Pulmonic: most superior. Aortic: anterior to mitral on lateral. Tricuspid: most anterior on lateral. Mitral: posterior and inferior on lateral.',
          explanation: 'On the frontal view, valves project on or near the midline. On the lateral view, the aortic valve is anterior to the mitral, and the tricuspid is the most anteriorly positioned. The pulmonic valve is the most superiorly positioned. A mechanical valve lead passing through a valve identifies it as the tricuspid (leads go to the RV through the tricuspid).',
          keyFact: 'Lateral view: Pulmonic = most superior. Aortic = in front of Mitral. Tricuspid = most anterior. A pacemaker lead crossing a valve = tricuspid.',
          tags: ['anatomy', 'XR', 'chest', 'cardiac'],
        },
      },
      {
        id: 'chest-anatomy-012',
        front: {
          question: 'What is the hilum overlay sign, and what does it indicate about the location of a mediastinal mass?',
        },
        back: {
          answer: 'The hilum overlay sign is present when hilar vessels are visible through a mediastinal mass on a frontal radiograph. It indicates the mass cannot be in the visceral (middle) mediastinum — it must be anterior or posterior.',
          explanation: 'If the pulmonary vessels are seen through the mass, the mass and the hilum occupy different AP planes and the mass is therefore not hilar. Combined with the lateral view showing location in the retrosternal clear space (anterior) or posterior to the trachea (posterior), one can precisely localize the mass. Air bronchograms within a mass indicate pulmonary origin.',
          keyFact: 'Hilum overlay sign = vessels visible through the mass → mass is NOT in the middle mediastinum. Check lateral for anterior vs posterior location.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hilum-overlay-sign',
          tags: ['anatomy', 'XR', 'chest', 'mediastinum'],
        },
      },
      {
        id: 'chest-anatomy-013',
        front: {
          question: 'What is the cervicothoracic sign and how is it used to localize a mediastinal mass?',
        },
        back: {
          answer: 'A mass whose superior margin is visible above the clavicles must be in the posterior mediastinum, because the anterior mediastinum does not extend above the clavicles. If the superior border is lost at or below the clavicle level, the mass is anterior.',
          explanation: 'The posterior junction line (and posterior mediastinum) extends above the clavicles on a frontal radiograph because the posterior lung apices extend higher than the anterior. Thus, a posterior mediastinal mass can be seen above the clavicles, while anterior masses cannot. This is a quick radiograph localizer before CT.',
          keyFact: 'Mass visible above the clavicles on CXR = posterior mediastinum. Anterior masses never rise above the clavicle level.',
          tags: ['anatomy', 'XR', 'chest', 'mediastinum'],
        },
      },
    ],
  },
  {
    id: 'chest-atelectasis',
    label: 'Atelectasis & Lobar Collapse',
    cards: [
      {
        id: 'chest-atelectasis-001',
        front: {
          question: 'What are the direct versus indirect signs of lobar atelectasis on chest radiograph?',
        },
        back: {
          answer: 'Direct (from volume loss): fissure displacement, plate-like/triangular opacity, vascular crowding. Indirect (effect on adjacent structures): hemidiaphragm elevation, rib crowding, mediastinal shift, contralateral overinflation, hilar displacement.',
          explanation: 'Direct signs reflect the collapsed lobe itself. Indirect signs occur because volume is lost and adjacent structures are pulled toward the atelectasis. In contrast, space-occupying lesions (pneumonia, mass, effusion) push structures away. Air bronchograms are NOT seen in obstructive atelectasis from central bronchial obstruction, but can be seen in compressive/relaxation atelectasis.',
          keyFact: 'Atelectasis PULLS; mass/effusion PUSHES. No air bronchograms with central obstructive atelectasis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/atelectasis',
          tags: ['atelectasis', 'XR', 'chest'],
        },
      },
      {
        id: 'chest-atelectasis-002',
        front: {
          question: 'What are the four mechanisms of atelectasis and their classic causes?',
        },
        back: {
          answer: 'Obstructive (absorptive): central bronchial obstruction (mucus plug, tumor, foreign body). Compressive (relaxation/passive): pleural effusion, pneumothorax, large mass. Adhesive: surfactant deficiency (neonatal RDS, ARDS). Cicatricial (fibrotic): scarring from TB, radiation, fibrosis.',
          explanation: 'Obstructive atelectasis occurs faster in patients breathing supplemental oxygen since O₂ is absorbed more rapidly than nitrogen. In children with foreign body aspiration, the affected side hyperexpands (ball-valve effect) rather than collapsing. Relaxation atelectasis is most classically adjacent to a pleural effusion.',
          keyFact: 'Kids with foreign body aspiration = hyperexpansion (ball-valve). Adults = collapse. Adhesive = surfactant deficiency (RDS, ARDS).',
          tags: ['atelectasis', 'XR', 'chest'],
        },
      },
      {
        id: 'chest-atelectasis-003',
        front: {
          question: 'Describe the characteristic radiographic appearance of left upper lobe (LUL) atelectasis and its classic associated sign.',
        },
        back: {
          answer: 'Veil-like opacity with obscured left cardiac margin on frontal view; anterior displacement of major fissure and anterior collapsed lobe on lateral. The luftsichel (air-sickle) sign is a crescent of air lateral to the aortic arch, representing hyperexpanded superior segment of the LLL.',
          explanation: 'LUL collapse is more subtle than RUL because it does not produce a dense wedge — it collapses anteriorly like a curtain. The aortic knob may be non-visualized. The luftsichel sign, when present, is created by the interface between the aorta and the overinflated apical segment of the LLL pinned between the collapsed LUL and the aortic arch.',
          keyFact: 'LUL collapse: veil-like opacity + luftsichel sign (crescent air adjacent to aortic arch). Unlike RUL, LUL does NOT form a dense triangular wedge.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/left-upper-lobe-collapse',
          tags: ['atelectasis', 'XR', 'chest', 'LUL'],
        },
      },
      {
        id: 'chest-atelectasis-004',
        front: {
          question: 'What is the Golden S sign (Reverse S sign of Golden), in what lobe collapse is it seen, and what does it imply?',
        },
        back: {
          answer: 'Seen in right upper lobe (RUL) collapse caused by a central obstructing mass. The reverse-S shape is formed by the concave inferior margin of the elevated minor fissure and the convex margin of the obstructing central mass.',
          explanation: 'In RUL collapse without a central mass, the minor fissure is displaced superiorly in a smooth arc. When a central mass obstructs the upper lobe bronchus, the fissure forms a reversed-S or S-shape, with the central convexity from the mass. This sign in an adult raises high concern for lung cancer (typically squamous cell or small cell).',
          keyFact: 'Golden S sign = RUL collapse with a central obstructing mass. Upper lobe collapse in an adult = rule out malignancy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/s-sign-of-golden',
          tags: ['atelectasis', 'XR', 'chest', 'RUL', 'tumor'],
        },
      },
      {
        id: 'chest-atelectasis-005',
        front: {
          question: 'What is the key radiographic distinction between right lower lobe (RLL) and right middle lobe (RML) atelectasis on a frontal radiograph?',
        },
        back: {
          answer: 'RML atelectasis silhouettes the right heart border (obscures it); RLL atelectasis obscures the right hemidiaphragm but PRESERVES the right heart border (which is actually made more visible by compensatory RML overinflation).',
          explanation: 'The right heart border is silhouetted by the medial segment of the RML, because they are in the same AP plane. The RLL abuts the right hemidiaphragm. Thus, RML collapse → loss of right heart border; RLL collapse → loss of right hemidiaphragm but right heart border is well-seen. Combined RML + RLL collapse (from bronchus intermedius obstruction) obliterates both borders.',
          keyFact: 'RML collapse → right heart border lost. RLL collapse → right hemidiaphragm lost but right heart border preserved. Combined collapse = loss of both.',
          tags: ['atelectasis', 'XR', 'chest', 'RML', 'RLL'],
        },
      },
      {
        id: 'chest-atelectasis-006',
        front: {
          question: 'What are the features of round atelectasis, and what five criteria must all be present to diagnose it?',
        },
        back: {
          answer: '1) Adjacent pleura must be abnormal. 2) Opacity peripheral and in contact with pleura. 3) Round or elliptical morphology. 4) Volume loss in the affected lobe. 5) Comet tail sign — curved vessels and bronchi sweeping into the opacity.',
          explanation: 'Round atelectasis is focal atelectasis with a round morphology always associated with adjacent pleural disease (most commonly pleural thickening or effusion from prior asbestos exposure — it is sometimes called "asbestos pseudotumor"). It occurs most commonly in the posterior lower lobes. All five criteria must be present; if any is absent, biopsy may be needed.',
          keyFact: 'Round atelectasis = ALL 5 criteria required. Comet tail sign is the key CT feature. Classic association: asbestos-related pleural disease.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rounded-atelectasis',
          tags: ['atelectasis', 'CT', 'chest', 'pleura', 'asbestos'],
        },
      },
      {
        id: 'chest-atelectasis-007',
        front: {
          question: 'What is the juxtaphrenic peak sign, in which types of atelectasis is it seen, and what causes it?',
        },
        back: {
          answer: 'A triangular peridiaphragmatic opacity seen in upper lobe volume loss from any cause, created by traction on the inferior accessory fissure or inferior pulmonary ligament by the retracting upper lobe.',
          explanation: 'The juxtaphrenic peak appears at the medial third of the diaphragm and is due to upward traction on a diaphragmatic attachment point. It can be seen with RUL or LUL atelectasis. It is a secondary sign of upper lobe volume loss and should prompt search for the underlying cause (mucus plug vs. central mass).',
          keyFact: 'Juxtaphrenic peak = tenting of the diaphragm from upward traction, associated with any cause of upper lobe volume loss.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/juxtaphrenic-peak-sign',
          tags: ['atelectasis', 'XR', 'chest', 'diaphragm'],
        },
      },
    ],
  },
  {
    id: 'chest-airways',
    label: 'Airways & COPD',
    cards: [
      {
        id: 'chest-airways-001',
        front: {
          question: 'What are the three subtypes of emphysema, their distribution within the secondary pulmonary lobule, and their primary associations?',
        },
        back: {
          answer: 'Centrilobular: centers of SPL, upper lobe predominant — smoking. Panacinar (panlobular): entire acinus, lower lobe predominant — alpha-1-antitrypsin deficiency. Paraseptal: subpleural periphery of SPL — smoking-related, associated with spontaneous pneumothorax.',
          explanation: 'Centrilobular emphysema is by far the most common type and the primary smoking-related form. The central dot sign (preserved centrilobular vessel in the center of the lucency) is a buzzword for centrilobular emphysema. Panacinar emphysema from alpha-1-antitrypsin should be suspected when emphysema is lower lobe predominant, especially in a young patient or non-smoker. Paraseptal emphysema predisposes to primary spontaneous pneumothorax via bleb/bulla rupture.',
          keyFact: 'Lower lobe emphysema in a young patient = alpha-1-antitrypsin deficiency. Centrilobular = smoker, upper lobes. Paraseptal = spontaneous PTX risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/emphysema',
          tags: ['emphysema', 'CT', 'XR', 'chest', 'COPD'],
        },
      },
      {
        id: 'chest-airways-002',
        front: {
          question: 'What is the saber-sheath trachea, and what condition is it pathognomonic for?',
        },
        back: {
          answer: 'Diffuse coronal (side-to-side) narrowing of the intrathoracic trachea with a coronal-to-sagittal diameter ratio <0.67, sparing the extrathoracic trachea. Pathognomonic for COPD.',
          explanation: 'The saber-sheath deformity results from increased intrathoracic pressure over years of obstructive lung disease. Only the intrathoracic trachea is affected; the extrathoracic trachea is normal. On a frontal CXR or CT it appears as a narrowed trachea. The main bronchi are normal in size, distinguishing it from Mounier-Kuhn.',
          keyFact: 'Saber-sheath trachea = COPD. Coronal narrowing of intrathoracic trachea only. Main bronchi are normal.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/saber-sheath-trachea',
          tags: ['COPD', 'CT', 'XR', 'chest', 'airways', 'trachea'],
        },
      },
      {
        id: 'chest-airways-003',
        front: {
          question: 'What are the morphologic subtypes of bronchiectasis, and what is the signet ring sign on CT?',
        },
        back: {
          answer: 'Cylindrical (mildest): mild dilation. Varicose (moderate): beaded, irregular bronchi. Cystic (most severe): marked ballooning. Signet ring sign: dilated bronchus adjacent to a normal-sized pulmonary artery, resembling a ring with a signet stone.',
          explanation: 'Normally the bronchus and adjacent pulmonary artery are approximately equal in size. When the bronchus is dilated (bronchial-to-artery ratio >1.0–1.1), the signet ring sign appears. Other CT features include lack of bronchial tapering, bronchial wall thickening, mucus plugging, and associated tree-in-bud nodules. Tram tracks (parallel thickened bronchial walls) are the plain film correlate.',
          keyFact: 'Signet ring sign = dilated bronchus > adjacent artery on CT. Tram tracks on CXR. Lack of tapering is a key CT feature.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bronchiectasis',
          tags: ['bronchiectasis', 'CT', 'XR', 'chest', 'airways'],
        },
      },
      {
        id: 'chest-airways-004',
        front: {
          question: 'What conditions are associated with upper lobe, mid lung, lower lung, and central bronchiectasis?',
        },
        back: {
          answer: 'Upper lobe: cystic fibrosis, ABPA. Mid lung: atypical mycobacteria (MAC — right middle lobe and lingula). Lower lobe: chronic aspiration (#1 overall), post-infectious, immotile cilia, immunodeficiency. Central: ABPA, Mounier-Kuhn (tracheobronchomegaly).',
          explanation: 'Chronic aspiration is the most common overall cause of bronchiectasis. CF causes upper lobe predominant bronchiectasis that progresses from cylindrical to cystic. MAC (Lady Windermere syndrome) classically involves the right middle lobe and lingula in elderly women. ABPA causes central saccular bronchiectasis with mucoid impaction (finger-in-glove sign).',
          keyFact: 'CF = upper lobe. MAC = RML + lingula. Aspiration = lower lobes. ABPA = central. Mounier-Kuhn = massive central bronchiectasis + dilated trachea.',
          tags: ['bronchiectasis', 'CT', 'chest', 'airways'],
        },
      },
      {
        id: 'chest-airways-005',
        front: {
          question: 'What is cystic fibrosis and what are its key imaging features on CT?',
        },
        back: {
          answer: 'CFTR mutation causing abnormal mucus and poor clearance. CT features: upper lobe predominant bronchiectasis (cylindrical → cystic), hyperinflation, mucus plugging (finger-in-glove), pulmonary arterial hypertension in advanced disease.',
          explanation: 'CF has an upper lobe predominance (in contrast to primary ciliary dyskinesia which is lower lobe). Recurrent infections, especially Pseudomonas, drive progressive bronchiectasis. Mucus plugging creates the finger-in-glove sign. Right heart failure (cor pulmonale) is a late complication of chronic hypoxia and pulmonary hypertension.',
          keyFact: 'CF = upper lobe bronchiectasis + mucus plugging. Contrast with PCD = lower lobe bronchiectasis. Pseudomonas is the major chronic pathogen.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cystic-fibrosis',
          tags: ['CF', 'CT', 'XR', 'chest', 'airways'],
        },
      },
      {
        id: 'chest-airways-006',
        front: {
          question: 'How do cystic fibrosis (CF) and primary ciliary dyskinesia (PCD)/Kartagener syndrome differ in their airway and fertility manifestations?',
        },
        back: {
          answer: 'CF: abnormal mucus, normal cilia; upper lobe bronchiectasis; absent vas deferens (normal sperm). PCD/Kartagener: normal mucus, non-functional cilia; lower lobe bronchiectasis; abnormal sperm (cannot swim), normal vas deferens. Situs inversus in 50% of PCD = Kartagener syndrome.',
          explanation: 'In CF, the defect is in mucus (CFTR mutation), so cilia work but cannot move thick secretions; men have congenital bilateral absence of vas deferens (CBAVD) but sperm are normal. In PCD, mucus is normal but cilia cannot beat, causing lower lobe bronchiectasis (less dependent), chronic sinusitis, recurrent otitis media, and male infertility (non-motile sperm). Only 50% of PCD patients have situs inversus (Kartagener).',
          keyFact: 'CF = abnormal mucus, upper lobe, absent vas deferens. PCD = absent cilia, lower lobe, non-motile sperm. Kartagener = PCD + situs inversus (50% of PCD).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/primary-ciliary-dyskinesia',
          tags: ['CF', 'PCD', 'CT', 'chest', 'airways'],
        },
      },
      {
        id: 'chest-airways-007',
        front: {
          question: 'What is Mounier-Kuhn syndrome and what are its defining CT features?',
        },
        back: {
          answer: 'Tracheobronchomegaly — congenital connective tissue disorder causing massive dilatation of the trachea (>3 cm transverse diameter) and central bronchi, leading to recurrent pneumonia.',
          explanation: 'Mounier-Kuhn results from atrophy of the elastic fibers and smooth muscle of the trachea and bronchi. The trachea must measure >3 cm in transverse diameter (or use the rule of thumb: trachea wider than the adjacent vertebral body). Patients develop severe cystic bronchiectasis and recurrent pulmonary infections. Williams-Campbell syndrome is a different entity involving cartilage deficiency of 4th–6th order bronchi.',
          keyFact: 'Mounier-Kuhn = trachea >3 cm = tracheobronchomegaly. Severe cystic bronchiectasis. Contrast with Williams-Campbell = 4th–6th order bronchi cartilage deficiency.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mounier-kuhn-syndrome',
          tags: ['bronchiectasis', 'CT', 'chest', 'airways', 'congenital'],
        },
      },
      {
        id: 'chest-airways-008',
        front: {
          question: 'What are the tracheal conditions that spare the posterior membranous trachea versus those that do not?',
        },
        back: {
          answer: 'Spare posterior membrane: relapsing polychondritis, tracheobronchopathia osteochondroplastica (TPO). Do NOT spare posterior membrane: amyloidosis, GPA (Wegener\'s), sarcoidosis, TB, post-intubation stenosis.',
          explanation: 'The posterior membranous trachea has no cartilage, so conditions affecting cartilage (relapsing polychondritis, TPO) spare it. Relapsing polychondritis also affects ears, nose, and joints; middle-aged women. TPO features submucosal calcified osseous nodules, typically in men >50. Saber-sheath trachea, which affects mainly the coronal diameter, is an entirely different entity from wall thickening.',
          keyFact: 'Spare posterior membrane: relapsing polychondritis + TPO. "TPo and Relapsing spare the Back." All others (amyloid, GPA, sarcoid, TB) involve the posterior wall.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/relapsing-polychondritis',
          tags: ['trachea', 'CT', 'chest', 'airways'],
        },
      },
      {
        id: 'chest-airways-009',
        front: {
          question: 'What are the two most common primary malignant tumors of the trachea in adults, and how do they differ?',
        },
        back: {
          answer: 'Squamous cell carcinoma (SCC): most common, associated with smoking, polypoid intraluminal mass, favors lower trachea/carina. Adenoid cystic carcinoma (ACC): second most common, NOT smoking-related, submucosal spread, perineural invasion, involves upper trachea, affects patients ~10–20 years younger than SCC patients.',
          explanation: 'SCC of the trachea is strongly associated with cigarette smoking and often presents as an irregular or polypoid mucosal mass. ACC spreads submucosally and along nerves, making clean resection difficult. ACC prefers the upper trachea and posterolateral wall. Neither should be confused with endobronchial carcinoid, which occurs distal to the carina.',
          keyFact: 'Tracheal malignancy: SCC = smoking, lower trachea, polypoid. ACC = no smoking, upper trachea, submucosal spread. Carcinoid = always distal to carina, no smoking.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/adenoid-cystic-carcinoma-of-the-trachea',
          tags: ['trachea', 'CT', 'chest', 'tumor', 'airways'],
        },
      },
      {
        id: 'chest-airways-010',
        front: {
          question: 'What is DIPNECH and what are its CT features?',
        },
        back: {
          answer: 'Diffuse idiopathic pulmonary neuroendocrine cell hyperplasia — multiple foci of neuroendocrine hyperplasia/tumorlets (<5 mm carcinoid foci) with obliterative bronchiolitis. CT: multiple pulmonary nodules plus mosaic attenuation from air trapping.',
          explanation: 'DIPNECH represents the pre-invasive end of the pulmonary neuroendocrine tumor spectrum. The airflow obstruction from bronchiolitis obliterans creates mosaic attenuation on CT. Multiple small neuroendocrine tumorlets (<5 mm) and typical carcinoids (>5 mm) may coexist. Constrictive bronchiolitis is the cause of the air trapping.',
          keyFact: 'DIPNECH = multiple carcinoid tumorlets + mosaic attenuation (constrictive bronchiolitis). Neuroendocrine spectrum pre-invasive lesion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/diffuse-idiopathic-pulmonary-neuroendocrine-cell-hyperplasia',
          tags: ['DIPNECH', 'CT', 'chest', 'neuroendocrine', 'airways'],
        },
      },
      {
        id: 'chest-airways-011',
        front: {
          question: 'What is allergic bronchopulmonary aspergillosis (ABPA) and what are its key diagnostic imaging features?',
        },
        back: {
          answer: 'Hypersensitivity reaction to Aspergillus in patients with longstanding asthma (or CF). CT: central bronchiectasis with mucoid impaction (finger-in-glove sign); high-attenuation mucus is specific. Diagnosis requires elevated serum IgE or positive skin test to Aspergillus, plus total IgE >1000.',
          explanation: 'ABPA is not a true infection but an immune-mediated reaction to Aspergillus colonizing the airways of asthmatics. Central (proximal) bronchiectasis is the hallmark, distinguishing it from most other causes of bronchiectasis. High-attenuation mucus (>70 HU) on CT is highly specific for ABPA. The finger-in-glove sign (branching tubular opacities of mucus-filled bronchiectatic airways) is the classic appearance but is not specific to ABPA.',
          keyFact: 'ABPA = asthma + central bronchiectasis + mucoid impaction. High-attenuation mucus is specific for ABPA. Total IgE >1000 supports diagnosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/allergic-bronchopulmonary-aspergillosis',
          tags: ['ABPA', 'CT', 'chest', 'airways', 'fungal', 'asthma'],
        },
      },
      {
        id: 'chest-airways-012',
        front: {
          question: 'What is Swyer-James syndrome and how does it differ from congenital lobar emphysema?',
        },
        back: {
          answer: 'Swyer-James: unilateral lucent lung from post-infectious obliterative bronchiolitis (usually after childhood viral pneumonia); the affected lobe is SMALLER than normal (not hyperexpanded). Congenital lobar emphysema: hyperexpanded lobe from air trapping, larger than normal.',
          explanation: 'Swyer-James occurs when viral bronchiolitis in childhood causes obliterative bronchiolitis, impairing airway development. The lung is smaller but hyperlucent because of air trapping and reduced vascularity. The critical distinction: Swyer-James = small lobe; congenital lobar emphysema = large lobe. On expiratory CXR, Swyer-James shows air trapping (the lucent lung does not change).',
          keyFact: 'Swyer-James = unilateral lucent SMALL lung. Post-infectious bronchiolitis obliterans. Air trapping on expiration. Do not confuse with congenital lobar emphysema (hyperexpanded = large lobe).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/swyer-james-macleod-syndrome',
          tags: ['Swyer-James', 'CT', 'XR', 'chest', 'airways', 'congenital'],
        },
      },
    ],
  },
  {
    id: 'chest-ild',
    label: 'Interstitial Lung Disease',
    cards: [
      {
        id: 'chest-ild-001',
        front: {
          question: 'What are the CT features of usual interstitial pneumonia (UIP) that are required for a "definite UIP" pattern, and what is the clinical correlate?',
        },
        back: {
          answer: 'Honeycombing (required), +/– traction bronchiectasis, reticular abnormalities, subpleural basal predominant distribution. Absence of features against UIP: no upper lobe predominance, no ground glass exceeding reticulation, no air trapping in ≥3 lobes. Clinical: idiopathic pulmonary fibrosis (IPF) when idiopathic.',
          explanation: 'The 2018 ATS UIP guidelines define definite UIP as the pattern that allows biopsy avoidance. Honeycombing must be present — subpleural, basal, 2–3 rows of clustered cysts with thick walls. IPF (idiopathic UIP) typically affects males >50, often smokers, with a prognosis similar to lung cancer. Other causes of UIP: RA, asbestosis, scleroderma, drug toxicity.',
          keyFact: 'Definite UIP = honeycombing (must be present) + basal subpleural reticulation + traction bronchiectasis. Honeycombing = UIP until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/usual-interstitial-pneumonia',
          tags: ['UIP', 'IPF', 'ILD', 'CT', 'chest', 'fibrosis'],
        },
      },
      {
        id: 'chest-ild-002',
        front: {
          question: 'What imaging features of NSIP distinguish it from UIP/IPF, and with what systemic diseases is NSIP most closely associated?',
        },
        back: {
          answer: 'NSIP: ground glass predominance with peribronchial/peribronchovascular distribution, subpleural sparing (up to 50%), traction bronchiectasis, lower lobe predominant, homogeneous histology. Associated with: scleroderma (#1), dermatomyositis, mixed CTD, SLE, drug reactions. Responds to steroids (UIP does not).',
          explanation: 'The key CT distinction of NSIP from UIP is subpleural sparing — the immediate subpleural lung is relatively preserved in NSIP, whereas UIP is subpleural predominant. Ground glass is the NSIP equivalent of honeycombing. NSIP is the most common ILD in scleroderma; a dilated fluid-filled esophagus on CT is a clue to scleroderma. NSIP has better prognosis than UIP.',
          keyFact: 'NSIP = ground glass + subpleural SPARING. Scleroderma = #1 association. Responds to steroids. Esophageal dilation on CT = clue to scleroderma/NSIP.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/non-specific-interstitial-pneumonia',
          tags: ['NSIP', 'ILD', 'CT', 'chest', 'fibrosis', 'scleroderma'],
        },
      },
      {
        id: 'chest-ild-003',
        front: {
          question: 'What is cryptogenic organizing pneumonia (COP), what is its classic CT appearance, and what is the reverse halo (atoll) sign?',
        },
        back: {
          answer: 'COP (idiopathic OP) = idiopathic organizing pneumonia. CT: peripheral and peribronchovascular consolidation or ground glass, often irregular in shape. Reverse halo (atoll) sign: central ground glass lucency surrounded by a peripheral rim of consolidation — seen in ~30% of COP.',
          explanation: 'COP (formerly BOOP) represents granulation tissue polyps filling distal airways as a nonspecific reaction to injury — it is not an active infection. It responds well to steroids but recurs when steroids are discontinued. The reverse halo sign, while not pathognomonic, is highly suggestive of OP in the right context. Distinguishing from chronic eosinophilic pneumonia: both present as peripheral consolidations, but CEP has upper lobe predominance and blood eosinophilia.',
          keyFact: 'COP = peripheral ± peribronchovascular consolidation, responds to steroids. Reverse halo/atoll sign is classic (~30%). "Persistent pneumonia" after antibiotics → think COP.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/organising-pneumonia',
          tags: ['COP', 'OP', 'ILD', 'CT', 'chest'],
        },
      },
      {
        id: 'chest-ild-004',
        front: {
          question: 'What are the two smoking-related ILDs (excluding emphysema), their imaging features, and how are they related?',
        },
        back: {
          answer: 'RB-ILD: upper lobe centrilobular ground glass nodules in a symptomatic smoker. DIP: bilateral lower lobe diffuse ground glass opacification with scattered cysts. RB, RB-ILD, and DIP represent a spectrum of smoking-related macrophage accumulation in airways and alveoli.',
          explanation: 'RB (respiratory bronchiolitis) is common and usually asymptomatic in smokers; when symptomatic it is called RB-ILD. DIP represents extension of the macrophage accumulation into the alveoli, producing more diffuse GGO. Both respond to smoking cessation and steroids. PLCH is a separate smoking-related entity with upper lobe cysts and nodules.',
          keyFact: 'RB-ILD = upper lobe centrilobular GGO nodules. DIP = lower lobe diffuse GGO + cysts. Both smoking-related; both may respond to smoking cessation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/desquamative-interstitial-pneumonia',
          tags: ['RB-ILD', 'DIP', 'ILD', 'CT', 'chest', 'smoking'],
        },
      },
      {
        id: 'chest-ild-005',
        front: {
          question: 'What is hypersensitivity pneumonitis (HP) and how does the subacute form differ from chronic HP on CT?',
        },
        back: {
          answer: 'HP is a type III/IV hypersensitivity to inhaled organic antigens. Subacute: centrilobular GGO nodules + ground glass ± mosaic attenuation (air trapping), no fibrosis. Chronic: fibrosis (peribronchovascular) ± findings of subacute HP superimposed; upper-to-mid lobe predominant; "head-cheese" sign (mix of GGO, consolidation, and air trapping). HP spares the costophrenic angles.',
          explanation: 'HP is one of the more common causes of ILD. The most common antigens are bird proteins (bird fancier\'s lung) and thermophilic actinomycetes (farmer\'s lung). Mosaic attenuation is caused by small airway involvement with geographic air trapping. Features favoring chronic HP over UIP: air trapping in ≥3 lobes and upper-to-mid lobe fibrosis rather than basal predominance.',
          keyFact: 'HP spares costophrenic angles (also LCH). Subacute HP = centrilobular nodules + GGO + mosaic. Chronic HP = fibrosis + upper lobe predominant + head-cheese sign.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hypersensitivity-pneumonitis',
          tags: ['HP', 'ILD', 'CT', 'chest', 'fibrosis'],
        },
      },
      {
        id: 'chest-ild-006',
        front: {
          question: 'What ILD is associated with each of the following collagen vascular diseases: RA, scleroderma, SLE, Sjögren syndrome, and ankylosing spondylitis?',
        },
        back: {
          answer: 'RA: UIP or COP (lower lobe reticulations, honeycombing, or peripheral consolidations); Caplan syndrome (RA + upper lobe nodules in pneumoconiosis). Scleroderma: NSIP (#1). SLE: pleural effusions most common; shrinking lung syndrome (diaphragm dysfunction); fibrosis uncommon. Sjögren: LIP (cysts and GGO). Ankylosing spondylitis: upper lobe fibrobullous disease.',
          explanation: 'Knowing which ILD pattern is most associated with each CTD is highly testable. SLE is unique in that pleural disease dominates and fibrosis is uncommon; the "shrinking lung" syndrome reflects diaphragmatic dysfunction with progressive bilateral lung volume loss. Caplan syndrome = RA + coal workers\' pneumoconiosis or silicosis + necrobiotic nodules.',
          keyFact: 'RA = UIP/COP. Scleroderma = NSIP. SLE = pleural effusions + shrinking lung. Sjögren = LIP. AS = upper lobe fibrobullous. Caplan = RA + pneumoconiosis + nodules.',
          tags: ['ILD', 'CT', 'chest', 'fibrosis', 'collagen vascular disease'],
        },
      },
      {
        id: 'chest-ild-007',
        front: {
          question: 'What is lymphoid interstitial pneumonia (LIP), what are its CT features, and with what diseases is it associated?',
        },
        back: {
          answer: 'LIP: diffuse lymphocytic infiltration of the interstitium. CT: scattered thin-walled perivascular cysts + ground glass opacification ± nodules; lower lobe predominant. Associations: Sjögren syndrome (#1 — concomitant in 25% of LIP), HIV (especially in children), CVID.',
          explanation: 'LIP is rare as an isolated idiopathic disease. The cysts in LIP are thought to result from air trapping from lymphocytic compression of small airways. LIP can progress to lymphoma. In HIV-infected children, LIP is more common; in HIV-infected adults, it is rare. Amyloidosis can look similar to LIP.',
          keyFact: 'LIP = Sjögren + HIV. Cysts + GGO, lower lobe. LIP in a child = think HIV. In adults = think Sjögren. Can progress to lymphoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lymphoid-interstitial-pneumonia',
          tags: ['LIP', 'ILD', 'CT', 'chest', 'Sjogren'],
        },
      },
      {
        id: 'chest-ild-008',
        front: {
          question: 'What is acute interstitial pneumonia (AIP) and how does it relate to ARDS?',
        },
        back: {
          answer: 'AIP is idiopathic diffuse alveolar damage (DAD) — the pathologic substrate of ARDS. It is the only IIP with acute onset and has the worst prognosis of all IIPs. Imaging: early phase (exudative) — diffuse GGO; late phase (organizing) — consolidation, traction bronchiectasis, may resolve partially or leave fibrosis.',
          explanation: 'AIP clinically presents as rapidly progressive respiratory failure in a previously healthy individual with no identifiable cause. The exudative phase (days 1–7) shows diffuse GGO from hyaline membrane formation and alveolar damage. By week 2, organizing phase changes include consolidation and distortion. AIP has a reported mortality of 50–70%.',
          keyFact: 'AIP = idiopathic ARDS. Worst prognosis of all IIPs. Diffuse GGO in exudative phase → consolidation + traction bronchiectasis in organizing phase.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acute-interstitial-pneumonia',
          tags: ['AIP', 'ILD', 'CT', 'chest', 'ARDS'],
        },
      },
      {
        id: 'chest-ild-009',
        front: {
          question: 'What are the four patterns of micronodule distribution on CT (centrilobular, tree-in-bud, perilymphatic, random), and what are the key diagnoses for each?',
        },
        back: {
          answer: 'Centrilobular (no pleural nodules): viral pneumonia, HP, RB-ILD, aspiration. Tree-in-bud (centrilobular subtype): mycobacteria (TB, MAC), bacterial pneumonia, aspiration, viral. Perilymphatic (subpleural + peribronchovascular + septal): sarcoidosis, silicosis, lymphangitic carcinomatosis. Random (includes pleural surface): hematogenous mets, miliary TB, disseminated fungal.',
          explanation: 'The key to distinguishing centrilobular from perilymphatic: centrilobular nodules are NEVER subpleural, while perilymphatic nodules ARE subpleural. Random nodules have no predilection for any location. Tree-in-bud is a specific subtype of centrilobular (mucus-impacted bronchioles branching like a tree in spring) and almost always indicates small airways infection.',
          keyFact: 'Centrilobular = no pleural nodules. Perilymphatic = subpleural + peribronchovascular (sarcoid, silicosis, lymphangitic). Random = hematogenous (mets, miliary). Tree-in-bud = infection.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/approach-to-pulmonary-nodules',
          tags: ['ILD', 'CT', 'chest', 'nodules'],
        },
      },
      {
        id: 'chest-ild-010',
        front: {
          question: 'What is crazy paving on CT, what entity was it first described in, and what is the differential?',
        },
        back: {
          answer: 'Crazy paving = interlobular septal thickening superimposed on ground glass opacification, resembling a stone path. First described in pulmonary alveolar proteinosis (PAP). Differential: pulmonary edema (#1 in real life), PAP (classic exam answer), hemorrhage, ARDS, PCP, adenocarcinoma, lipoid pneumonia.',
          explanation: 'In PAP, alveoli fill with proteinaceous material and lymphatics take up the same material causing septal thickening. PAP presents with a perihilar distribution resembling pulmonary edema, but with normal cardiac size and no pleural effusions. Treatment is whole lung bronchoalveolar lavage. PAP patients are susceptible to Nocardia superinfection.',
          keyFact: 'Crazy paving = GGO + septal thickening. For boards: PAP is the classic answer. Real life: pulmonary edema is #1. PAP = crazy paving + normal heart size + no effusions.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/crazy-paving-sign',
          tags: ['ILD', 'CT', 'chest', 'PAP', 'crazy paving'],
        },
      },
      {
        id: 'chest-ild-011',
        front: {
          question: 'What is sarcoidosis staging on chest radiograph, and what are the classic CT findings?',
        },
        back: {
          answer: 'Stage 0: normal. Stage 1: bilateral hilar ± right paratracheal adenopathy only (1-2-3 sign). Stage 2: adenopathy + parenchymal disease. Stage 3: parenchymal only. Stage 4: end-stage fibrosis (upper lobe). CT: upper lobe perilymphatic nodules, possible galaxy sign; eggshell nodal calcifications; bilateral symmetric hilar adenopathy.',
          explanation: 'The 1-2-3 sign (right paratracheal "1", right hilar "2", left hilar "3") produces the classic "pawn shop" or lambda appearance on plain film. On CT, perilymphatic nodules along bronchovascular bundles, fissures, and pleural surfaces are the hallmark. The galaxy sign is confluent nodules with surrounding satellite nodules, resembling a galaxy. Aspergillomas can colonize cavities in stage 4 sarcoidosis.',
          keyFact: 'Sarcoidosis: 1-2-3 sign = right paratracheal + bilateral hilar adenopathy. Upper lobe perilymphatic nodules. Stage 4 = upper lobe fibrosis (opposite of IPF).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sarcoidosis-pulmonary-manifestations',
          tags: ['sarcoidosis', 'ILD', 'CT', 'XR', 'chest'],
        },
      },
      {
        id: 'chest-ild-012',
        front: {
          question: 'What are the imaging features of silicosis, coal workers\' pneumoconiosis (CWP), and how do they differ from asbestosis?',
        },
        back: {
          answer: 'Silicosis/CWP: upper lobe perilymphatic nodules, eggshell hilar/mediastinal calcifications, progressive massive fibrosis (PMF) — large upper lobe conglomerate masses. Asbestosis: lower lobe predominant UIP pattern + pleural plaques/thickening (key distinguishing feature). Increased TB risk with silicosis/CWP.',
          explanation: 'Silicosis and CWP are radiographically indistinguishable. PMF (also called complicated silicosis/CWP) produces conglomerate masses that can cavitate — in that setting, TB must be excluded (silicotuberculosis). Asbestosis is unique among pneumoconioses in affecting the lower lobes because asbestos fibers are too large to be cleared by the macrophage/lymphatic system. Pleural plaques are a hallmark of asbestos exposure but are not asbestosis itself.',
          keyFact: 'Silicosis/CWP = upper lobe + eggshell nodes. Asbestosis = lower lobe UIP + pleural plaques. Eggshell calcification = silicosis > CWP > sarcoidosis. Cavitation in silicosis → rule out TB.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/silicosis',
          tags: ['silicosis', 'asbestosis', 'pneumoconiosis', 'CT', 'chest'],
        },
      },
      {
        id: 'chest-ild-013',
        front: {
          question: 'What is chronic eosinophilic pneumonia (CEP) and how does its imaging pattern differ from COP?',
        },
        back: {
          answer: 'CEP: bilateral peripheral and upper lobe consolidation ("reverse bat-wing" pattern); peripheral blood eosinophilia; rapid response to steroids but frequent relapse. COP: similar peripheral consolidation but less upper lobe predominant; no blood eosinophilia; CEP consolidation can cross fissures while COP rarely does.',
          explanation: 'Both CEP and COP present as peripheral consolidations that can mimic each other. CEP has an upper lobe predilection (reverse of pulmonary edema\'s lower lobe predominance) and blood eosinophilia is almost always present. COP has no eosinophilia. Both respond to steroids, but CEP relapses on steroid withdrawal much more reliably.',
          keyFact: 'CEP = peripheral upper lobe consolidation + blood eosinophilia + rapid steroid response + frequent relapse. COP = no eosinophilia + reverse halo sign more common.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chronic-eosinophilic-pneumonia',
          tags: ['CEP', 'ILD', 'CT', 'chest'],
        },
      },
      {
        id: 'chest-ild-014',
        front: {
          question: 'What are the lung transplant complications classified by time, and what is the most common late complication?',
        },
        back: {
          answer: 'Immediate (<24h): hyperacute rejection, donor-recipient size mismatch. Early (24h–1wk): reperfusion injury (peaks day 4), air leak. Intermediate (8d–2mo): acute rejection (GGO + septal thickening), anastomotic complications. Late (>4mo): CMV (most common opportunistic infection), bronchiolitis obliterans (chronic rejection — most common late complication, affects 50% at 5 years).',
          explanation: 'Bronchiolitis obliterans syndrome (chronic rejection) is characterized by CT findings of bronchiectasis, bronchial wall thickening, and air trapping — particularly on expiratory imaging. Air trapping in a lung transplant patient at or after 6 months = chronic rejection until proven otherwise. PTLD typically occurs within the first year and is EBV-related (90%).',
          keyFact: 'Lung transplant: air trapping at ≥6 months = chronic rejection/bronchiolitis obliterans (50% at 5 years). Acute rejection = GGO + septal thickening, responds to steroids.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lung-transplant-complications',
          tags: ['transplant', 'ILD', 'CT', 'chest'],
        },
      },
    ],
  },
  {
    id: 'chest-cystic',
    label: 'Cystic Lung Disease',
    cards: [
      {
        id: 'chest-cystic-001',
        front: {
          question: 'What are the four main cystic lung diseases, and how do their cyst morphology, distribution, and associated features differ?',
        },
        back: {
          answer: 'LAM: round thin-walled cysts, diffuse, women/tuberous sclerosis, chylous effusion. PLCH: bizarre-shaped (merged) cysts + nodules, upper/mid lung sparing costophrenic angles, smokers. LIP: thin-walled perivascular cysts, lower lobe, Sjögren/HIV. BHD: oval thin-walled subpleural cysts, lower lobe, renal tumors + fibrofolliculomas.',
          explanation: 'The shape and distribution of cysts are key distinguishing features. LAM cysts are round and uniformly distributed; PLCH cysts are bizarre/irregular from cyst fusion. LAM is estrogen-dependent (treated with mTOR inhibitors) and can be sporadic or tuberous-sclerosis-related. PLCH nearly exclusively affects smokers; smoking cessation can cause spontaneous remission.',
          keyFact: 'LAM = round diffuse cysts + chylous effusion + women. PLCH = bizarre shaped upper lung + nodules + smoker. BHD = oval lower lobe + renal oncocytoma/chromophobe RCC.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lymphangioleiomyomatosis',
          tags: ['LAM', 'PLCH', 'LIP', 'BHD', 'CT', 'chest', 'cyst'],
        },
      },
      {
        id: 'chest-cystic-002',
        front: {
          question: 'What is pulmonary Langerhans cell histiocytosis (PLCH), and what is the natural history of its CT appearance?',
        },
        back: {
          answer: 'Nearly 100% of adults with PLCH are smokers. Natural progression: centrilobular nodules → cavitary nodules → thin-walled cysts → bizarre-shaped cysts (from cyst fusion). Spares costophrenic angles and costophrenic sulci. Upper to mid lung distribution.',
          explanation: 'PLCH is a smoking-related ILD where Langerhans cells accumulate around bronchioles. At any given time, a patient may have nodules only, cysts only, or mixed. The cheerio sign (nodule with central lucency on CT) represents early cavitation. PLCH can present as spontaneous pneumothorax. In adults, disease is usually isolated to lungs; LCH in children has systemic manifestations.',
          keyFact: 'PLCH: nodules → cysts (upper lung, spares costophrenic angles). Bizarre cyst shape from fusion is classic. Smoking cessation may cause spontaneous remission.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-langerhans-cell-histiocytosis',
          tags: ['PLCH', 'CT', 'chest', 'cyst', 'smoking'],
        },
      },
      {
        id: 'chest-cystic-003',
        front: {
          question: 'What is Birt-Hogg-Dubé syndrome (BHD), and what are its systemic manifestations?',
        },
        back: {
          answer: 'Autosomal dominant FLCN gene mutation (chromosome 17p). Pulmonary: lower lobe subpleural/perivascular oval thin-walled cysts → spontaneous pneumothorax. Renal: chromophobe RCC and renal oncocytoma (bilateral). Skin: fibrofolliculomas (noncancerous skin lesions).',
          explanation: 'BHD is a rare hereditary disorder. The pulmonary cysts are morphologically distinct from other cystic lung diseases — they are oval or "floppy" shaped and predominantly subpleural or perivascular in the lower lobes. Pneumothorax is a well-recognized complication. The renal tumors are the most life-threatening manifestation. Awareness is important for genetic counseling.',
          keyFact: 'BHD = FLCN gene. Oval subpleural lower lobe cysts + chromophobe RCC/oncocytoma + fibrofolliculomas + spontaneous pneumothorax.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/birt-hogg-dube-syndrome',
          tags: ['BHD', 'CT', 'chest', 'cyst', 'renal'],
        },
      },
    ],
  },
  {
    id: 'chest-infection',
    label: 'Infection & Consolidation',
    cards: [
      {
        id: 'chest-infection-001',
        front: {
          question: 'What are the classic radiographic patterns of bacterial pneumonia and their causes?',
        },
        back: {
          answer: 'Lobar pneumonia (single lobe consolidation + air bronchograms): S. pneumoniae (#1 CAP). Bronchopneumonia (patchy peribronchial consolidations, multifocal): Staph aureus, gram-negatives, aspiration. Round pneumonia (mass-like opacity, children): S. pneumoniae. Bulging fissure sign: Klebsiella (exuberant inflammatory exudate).',
          explanation: 'S. pneumoniae is the most common cause of lobar pneumonia and of CAP overall. Klebsiella classically infects alcoholics and nursing home patients, causing voluminous exudates that expand the lobe, bowing the fissure outward ("bulging fissure sign"). Staphylococcus aureus causes bronchopneumonia with a propensity for abscess and pneumatocele formation.',
          keyFact: 'Lobar pneumonia = S. pneumoniae. Bulging fissure = Klebsiella. Abscess + pneumatocele = Staph aureus. Legionella = elderly smoker + severe disease.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lobar-pneumonia',
          tags: ['pneumonia', 'CT', 'XR', 'chest', 'infection'],
        },
      },
      {
        id: 'chest-infection-002',
        front: {
          question: 'What are the imaging features distinguishing a pulmonary abscess from an empyema on CT?',
        },
        back: {
          answer: 'Abscess: spherical, equal dimensions on frontal and lateral, thick irregular wall, lung parenchymal origin, acute angle with pleura. Empyema: lentiform (lens-shaped), longer air-fluid level on lateral view, split pleura sign (enhancing visceral and parietal pleura), conforming to pleural space, obtuse angle with pleura.',
          explanation: 'The split pleura sign — thickening and enhancement of both visceral and parietal pleural layers separating the collection — is the CT hallmark of empyema. A pulmonary abscess has equal AP and lateral dimensions because it is spherical within lung parenchyma. Air-fluid levels are longer on lateral in empyemas due to the elongated pleural space shape.',
          keyFact: 'Empyema = split pleura sign + lentiform shape + obtuse angle. Abscess = spherical + thick wall + acute angle. Treatment differs: empyema → chest tube; abscess → NOT chest tube (risk of BPF).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/empyema-thoracis',
          tags: ['empyema', 'abscess', 'CT', 'chest', 'infection', 'pleura'],
        },
      },
      {
        id: 'chest-infection-003',
        front: {
          question: 'What is the typical aspiration location for supine versus upright patients, and which bacteria are most commonly involved?',
        },
        back: {
          answer: 'Supine aspiration: posterior segments of upper lobes and superior segments of lower lobes (dependent in the supine position). Upright aspiration: basal lower lobe segments (right > left). Organisms: anaerobes from mouth flora; can lead to abscess and empyema.',
          explanation: 'The right lower lobe is most commonly affected overall because of the more vertical right mainstem bronchus (same reason right mainstem intubation is more common). Aspiration of gastric acid causes chemical pneumonitis (Mendelson syndrome) with a fleeting opacity. Aspiration of bacteria causes true pneumonia with risk of empyema. Aspiration of mineral oil causes lipoid pneumonia (fat density on CT).',
          keyFact: 'Supine aspiration → posterior upper lobe + superior lower lobe. Upright → basilar lower lobes (right > left). Lipoid pneumonia = fat-density consolidation from mineral oil aspiration.',
          tags: ['aspiration', 'CT', 'XR', 'chest', 'infection'],
        },
      },
      {
        id: 'chest-infection-004',
        front: {
          question: 'What is primary tuberculosis, what are its typical imaging features, and how does it differ from reactivation (post-primary) TB?',
        },
        back: {
          answer: 'Primary TB: any lobe consolidation ± lymphadenopathy (central low attenuation + peripheral enhancement — classic in children) ± pleural effusion. Ghon focus = parenchymal granuloma; Ranke complex = Ghon focus + calcified hilar node. Cavitation is RARE in primary TB. Reactivation TB: upper lobe apical/posterior + superior lower lobe; cavitation is COMMON; tree-in-bud nodules (endobronchial spread).',
          explanation: 'Primary TB occurs in first exposure and most commonly affects children or immunocompromised. Bulky hilar/mediastinal adenopathy (with necrotic low-attenuation centers) is more common in children. Pleural effusion in primary TB = hypersensitivity at 3–6 months, often culture-negative (biopsy increases yield). Reactivation occurs in 5% of latent infections; preferred sites are high O₂, low lymphatic drainage areas (upper lobe apical/posterior).',
          keyFact: 'Primary TB: adenopathy + consolidation + no cavity. Reactivation TB: upper lobe + cavitation + tree-in-bud. Rasmussen aneurysm = PA pseudoaneurysm adjacent to a TB cavity.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tuberculosis',
          tags: ['TB', 'infection', 'CT', 'XR', 'chest'],
        },
      },
      {
        id: 'chest-infection-005',
        front: {
          question: 'What are the four subtypes of atypical mycobacteria (MAC) infection, and what is Lady Windermere syndrome?',
        },
        back: {
          answer: 'Classic/cavitary: old white man with COPD, simulates reactivation TB (upper lobe cavitary + nodules). Bronchiectatic/non-classic (Lady Windermere): elderly woman who refrains from coughing, RML + lingula bronchiectasis + tree-in-bud. HIV-related: CD4 <100, mediastinal lymphadenopathy. Hot-tub lung: hypersensitivity pneumonitis from MAC, centrilobular GGO nodules.',
          explanation: 'Lady Windermere syndrome is named after Oscar Wilde\'s character — an elderly, refined woman too proper to cough vigorously, leading to pooling of secretions and MAC infection in the RML and lingula. MAC is the most common organism (M. avium-intracellulare). Hot-tub lung is NOT an infection but a hypersensitivity reaction to aerosolized MAC in hot tubs.',
          keyFact: 'Lady Windermere = elderly woman + RML/lingula bronchiectasis + tree-in-bud = MAC. Hot-tub lung = hypersensitivity (not infection) = centrilobular GGO nodules.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mycobacterium-avium-intracellulare-infection',
          tags: ['NTM', 'MAC', 'infection', 'CT', 'chest'],
        },
      },
      {
        id: 'chest-infection-006',
        front: {
          question: 'Describe the spectrum of pulmonary Aspergillus disease and the imaging findings for each form.',
        },
        back: {
          answer: 'ABPA (hyperimmune): central bronchiectasis + finger-in-glove sign; in asthmatics/CF. Aspergilloma (saprophytic, normal immune): mobile fungus ball (Monod sign = crescentic air outlining mycetoma) in pre-existing cavity. Semi-invasive: chronic consolidation/cavitation in COPD/DM. Airway-invasive: centrilobular + tree-in-bud in immunocompromised. Angioinvasive (neutropenic): halo sign (consolidation with GGO halo of hemorrhage) → air crescent sign (healing, recovery of neutrophils).',
          explanation: 'Each form requires a different immune state. The Monod sign (air crescent around the mycetoma in a pre-existing cavity) should NOT be confused with the air crescent sign of angioinvasive disease (air crescent signifying recovery/necrosis retraction in a new pulmonary infarct). The halo sign is most classic for angioinvasive aspergillus but is not specific (also GPA, viral, hemorrhagic mets).',
          keyFact: 'Angioinvasive Aspergillus: halo sign (acute) → air crescent sign (recovery, neutropenia resolving). Air crescent = GOOD prognostic sign. Monod sign ≠ air crescent sign.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-aspergillosis',
          tags: ['aspergillus', 'infection', 'CT', 'chest', 'fungal'],
        },
      },
      {
        id: 'chest-infection-007',
        front: {
          question: 'What are the geographic distributions of the endemic fungi, and what are their classic pulmonary manifestations?',
        },
        back: {
          answer: 'Histoplasma capsulatum: Ohio/Mississippi River valleys (bat/bird guano). Acute: nodules + adenopathy. Chronic: calcified granulomas or histoplasmoma (mimics neoplasm). Rare: fibrosing mediastinitis with calcified nodes. Coccidioides immitis: US southwest. Multifocal consolidation, multiple nodules, miliary. Blastomyces dermatitidis: central/southeastern US. Asymptomatic or flu-like illness → multifocal consolidation/ARDS.',
          explanation: 'Calcified granulomas anywhere in the body in a patient from the Ohio/Mississippi River valleys should suggest prior histoplasmosis. Fibrosing mediastinitis, a rare but devastating complication of histoplasma, causes pulmonary vein obstruction, bronchial stenosis, and pulmonary artery stenosis — resulting in pulmonary hypertension. Affected lymph nodes typically calcify.',
          keyFact: 'Histoplasma = Ohio/Mississippi valleys + calcified granulomas. Fibrosing mediastinitis = Histoplasma complication → calcified mediastinal nodes + pulmonary vein obstruction.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/histoplasmosis',
          tags: ['fungi', 'infection', 'CT', 'chest', 'histoplasma'],
        },
      },
      {
        id: 'chest-infection-008',
        front: {
          question: 'What are the classic chest CT/CXR findings of Pneumocystis jiroveci pneumonia (PCP) in AIDS, and when should it be suspected?',
        },
        back: {
          answer: 'CD4 <200. Classic CXR: bilateral perihilar airspace opacities with peripheral sparing. CT: bilateral GGO (central/perihilar predominant). Thin-walled upper lobe cysts/pneumatoceles in 30% (especially with aerosolized prophylaxis). Gallium scan: diffuse uptake (Thallium negative).',
          explanation: 'A normal CT rules out PCP, but a normal CXR does not (CXR can be negative early in PCP). PCP is the most common opportunistic infection in AIDS. Cysts form from ball-valve bronchiolar obstruction and predispose to pneumothorax. Pneumothorax in an HIV patient is a sentinel event raising concern for PCP. PCP in an AIDS patient who was on prophylaxis tends to have more upper lobe cysts.',
          keyFact: 'PCP: CD4 <200, bilateral perihilar GGO with peripheral sparing. Pneumatoceles in 30% → pneumothorax risk. Normal CT = rules out PCP.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pneumocystis-jiroveci-pneumonia',
          tags: ['PCP', 'AIDS', 'infection', 'CT', 'XR', 'chest'],
        },
      },
      {
        id: 'chest-infection-009',
        front: {
          question: 'What is COVID-19 pneumonia\'s typical CT pattern, and what features are atypical or should prompt an alternative diagnosis?',
        },
        back: {
          answer: 'Classic: bilateral, lower lobe predominant, peripheral (subpleural) GGO or consolidation, often with a dependent component. Atypical features (suggest alternative): pleural effusion, centrilobular nodules, tree-in-bud (suggest superimposed bacterial infection).',
          explanation: 'COVID-19 (SARS-CoV-2) imaging is nonspecific but the bilateral peripheral lower lobe GGO pattern is classic. The CT-CORADS reporting system categorizes COVID-19 likelihood. Pleural effusions and lymphadenopathy are uncommon in isolated COVID-19 and should raise concern for an alternative or co-existing diagnosis. Crazy paving can be seen as disease progresses.',
          keyFact: 'COVID-19 CT = bilateral peripheral lower lobe GGO/consolidation. Pleural effusion + tree-in-bud = atypical for COVID, consider superimposed infection or alternative diagnosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/covid-19-pneumonia',
          tags: ['COVID', 'infection', 'CT', 'XR', 'chest'],
        },
      },
      {
        id: 'chest-infection-010',
        front: {
          question: 'What are septic emboli, what is their CT appearance, and what are their classic sources?',
        },
        back: {
          answer: 'Septic emboli: infectious material embolizing to pulmonary arteries. CT: multiple peripheral lower lobe nodules, often cavitating, ± wedge-shaped infarcts; feeding vessel sign. Sources: infected tricuspid valve (IV drug use), infected venous catheters, dental infections (Lemierre syndrome).',
          explanation: 'Septic emboli are peripheral and lower lobe predominant due to greater blood flow. The feeding vessel sign (a pulmonary artery leading directly into a nodule) is shared with hematogenous metastases. Lemierre syndrome is septic emboli classically following oropharyngeal infection with Fusobacterium necrophorum causing internal jugular vein thrombosis. Empyema and pneumothorax are known complications.',
          keyFact: 'Septic emboli = multiple peripheral lower lobe cavitating nodules + feeding vessel sign. IV drug use → infected tricuspid. Lemierre = Fusobacterium + jugular vein thrombosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/septic-pulmonary-embolism',
          tags: ['septic emboli', 'CT', 'chest', 'infection', 'vascular'],
        },
      },
      {
        id: 'chest-infection-011',
        front: {
          question: 'What pulmonary infections are associated with the following AIDS CD4 counts: >200, <200, <100?',
        },
        back: {
          answer: 'CD4 >200: bacterial infections (S. pneumoniae #1), TB. CD4 <200: PCP, atypical mycobacteria. CD4 <100: CMV, disseminated fungal (Cryptococcus, Histoplasma), Mycobacterium avium complex (disseminated).',
          explanation: 'Streptococcus pneumoniae remains the most common cause of focal airspace opacity in AIDS patients at any CD4 count. The CD4-based approach helps narrow the differential when CT shows multifocal opacities. Kaposi sarcoma (flame-shaped perihilar opacities) and AIDS-related lymphoma (nodules, adenopathy, effusion) are neoplasms seen in AIDS patients with low CD4 counts (<200).',
          keyFact: 'AIDS and pulmonary disease: CD4 >200 = bacteria/TB. CD4 <200 = PCP. CD4 <100 = CMV + disseminated fungal/MAC. GGO on CT in AIDS = PCP until proven otherwise.',
          tags: ['AIDS', 'infection', 'CT', 'XR', 'chest'],
        },
      },
    ],
  },
  {
    id: 'chest-nodules-patterns',
    label: 'Pulmonary Nodules & Patterns',
    cards: [
      {
        id: 'chest-nodules-001',
        front: {
          question: 'What are the four benign calcification patterns in pulmonary nodules, and what is the one calcification pattern associated with malignancy?',
        },
        back: {
          answer: 'Benign: central (bull\'s eye), diffuse/solid, laminated (concentric rings), popcorn (chondroid — hamartoma). Malignant: amorphous (eccentric, irregular) calcification — associated with mucinous tumors. Solid calcification can also be malignant in osteosarcoma metastases.',
          explanation: 'Popcorn calcification is pathognomonic for pulmonary hamartoma — the most common benign lung tumor, composed of cartilage, fat, connective tissue. Fat density (-40 to -120 HU) within a nodule also suggests hamartoma. Eccentric/amorphous calcification is the most suspicious pattern and often seen in primary mucinous adenocarcinomas or GI mucinous metastases.',
          keyFact: 'Benign calcification patterns: Central, Diffuse, Laminated, Popcorn = "CDLP." Popcorn = hamartoma. Amorphous/eccentric = suspicious. Fat in nodule = hamartoma (benign).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-hamartoma',
          tags: ['SPN', 'nodule', 'CT', 'chest', 'tumor'],
        },
      },
      {
        id: 'chest-nodules-002',
        front: {
          question: 'What are the 2017 Fleischner Society follow-up recommendations for solid pulmonary nodules in low-risk versus high-risk patients?',
        },
        back: {
          answer: '<6 mm: no follow-up for low-risk; optional 12-month CT for high-risk single nodule. 6–8 mm: 6–12 month CT (single), 3–6 months (multiple), regardless of risk. >8 mm: PET/CT or tissue sampling; 3-month CT for lower suspicion. Ground glass and part-solid nodules have longer follow-up (5 years) due to slower growth of adenocarcinoma spectrum.',
          explanation: 'The Fleischner guidelines apply to incidental nodules in patients >35 years old without known or suspected malignancy or immunocompromise. Risk factors for malignancy include upper lobe location, spiculated margins, smoking history, emphysema, pulmonary fibrosis. A 26% increase in diameter = volume doubling. Perifissural nodules likely represent intrapulmonary lymph nodes and do not require follow-up even if >6 mm.',
          keyFact: 'Fleischner: <6 mm = no follow-up (low risk). 6–8 mm = 6–12 months. >8 mm = PET or biopsy. Perifissural nodules = benign, no follow-up. GGN/part-solid = 5-year follow-up.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fleischner-society-guidelines-for-solid-pulmonary-nodules',
          tags: ['SPN', 'nodule', 'CT', 'chest', 'Fleischner'],
        },
      },
      {
        id: 'chest-nodules-003',
        front: {
          question: 'What is Lung-RADS, for whom does it apply, and how does it differ from Fleischner guidelines?',
        },
        back: {
          answer: 'Lung-RADS applies to low-dose CT lung cancer screening in eligible patients (age 50–80 per USPSTF, 30 pack-year history, current/former smoker within 15 years). Fleischner applies to incidental nodules in non-screening patients >35 without known malignancy. Lung-RADS "growth" threshold is 1.5 mm/year.',
          explanation: 'Lung-RADS categories: 0 (incomplete), 1 (negative, <1% risk), 2 (benign, <1%), 3 (probably benign 1–2%, 6 months), 4A (suspicious 5–15%, 3 months or PET), 4B (>15%, PET or tissue), 4X (>15%, worsening of 3/4 nodule). Endobronchial lesions are treated as 4A. Screening dose should be <3 mGy CTDIvol.',
          keyFact: 'Lung-RADS = screening program (must meet eligibility). Fleischner = incidental nodules. Key Lung-RADS: 4B = >15 mm baseline → PET or biopsy. Do NOT use Fleischner for screening CTs.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lung-rads',
          tags: ['Lung-RADS', 'nodule', 'CT', 'chest', 'screening'],
        },
      },
      {
        id: 'chest-nodules-004',
        front: {
          question: 'What is a perifissural nodule (PFN)/intrapulmonary lymph node, and how should it be managed?',
        },
        back: {
          answer: 'PFNs are well-circumscribed, smoothly marginated, triangular, oval, or polygonal nodules within 15–20 mm of a fissure or pleural surface. They are almost certainly benign (likely intrapulmonary lymph nodes). No follow-up required per Fleischner, even if >6 mm. Lung-RADS v1.1: <10 mm = category 2 (benign).',
          explanation: 'PFNs are clinically important because they can be confused with malignant nodules. The key morphological features distinguishing them are their triangular/polygonal shape, smooth margins, and proximity to a fissure. Spiculated or round nodules do NOT qualify as PFNs and should be managed as standard nodules. Interval growth does not necessarily indicate malignancy, as lymph nodes fluctuate in size.',
          keyFact: 'PFN = smooth, triangular/polygonal, near fissure/pleura = benign lymph node. No follow-up needed per Fleischner. Spiculated or round = NOT PFN, manage normally.',
          tags: ['SPN', 'nodule', 'CT', 'chest', 'lymph node'],
        },
      },
      {
        id: 'chest-nodules-005',
        front: {
          question: 'What is the adenocarcinoma in situ (AIS) spectrum, and how does the CT density of a subsolid nodule correlate with invasiveness?',
        },
        back: {
          answer: 'Spectrum (least to most invasive): AAH (<5 mm, pure GGN) → AIS (<3 cm, pure GGN or predominantly GGN) → MIA (<3 cm, <5 mm stromal invasion) → Lepidic-predominant invasive adenocarcinoma. Greater solid component = more invasive = worse prognosis.',
          explanation: 'This spectrum replaced the term bronchioloalveolar carcinoma (BAC) in 2011. These tumors grow by lepidic spread — using alveolar walls as scaffolding rather than destroying lung parenchyma. Part-solid nodules with a growing solid component are the most concerning subtype. These tumors tend to be cold on PET (FDG uptake is low), and follow-up extends to 5 years because of slow growth.',
          keyFact: 'Adenocarcinoma spectrum: GGN (pure) = least invasive → solid component growing = increasingly invasive. Part-solid nodule with solid component = most suspicious morphology. Often cold on PET.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/adenocarcinoma-in-situ-of-lung',
          tags: ['adenocarcinoma', 'AIS', 'nodule', 'CT', 'chest', 'tumor'],
        },
      },
    ],
  },
  {
    id: 'chest-tumors',
    label: 'Thoracic Tumors',
    cards: [
      {
        id: 'chest-tumors-001',
        front: {
          question: 'What are the four major subtypes of bronchogenic carcinoma and their key features regarding location, smoking association, and classic presentations?',
        },
        back: {
          answer: 'Adenocarcinoma: most common overall (35%), peripheral, upper lobe; in non-smokers. Squamous cell: central/hilar, strongly associated with smoking, cavitates most often; parathyroid-related hypercalcemia. Small cell: central/mediastinal/hilar mass, near-universally from smoking; Lambert-Eaton, SIADH, ACTH; worst prognosis. Large cell: peripheral, >4 cm, rapid growth; Andy Kaufman.',
          explanation: 'Adenocarcinoma is now the most common subtype, partly because filtered cigarettes changed the carcinogen delivery pattern. SCC is the type most likely to cavitate (thick irregular walls >15 mm = malignant). Small cell rarely presents as an SPN; it is almost always a central/hilar mass. "LA is on the coast" = Large cell and Adenocarcinoma = peripheral (coastal/peripheral).',
          keyFact: 'Most common = adenocarcinoma. Cavity = SCC. Central mass + SVC syndrome + paraneoplastic = small cell. Memory: "LA Coast" = Large cell + Adenocarcinoma are peripheral.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lung-cancer',
          tags: ['lung cancer', 'CT', 'XR', 'chest', 'tumor'],
        },
      },
      {
        id: 'chest-tumors-002',
        front: {
          question: 'What is the TNM staging of lung cancer (8th edition) — specifically T3 vs T4 and N2 vs N3?',
        },
        back: {
          answer: 'T3: >5–7 cm OR chest wall/pericardium/phrenic nerve invasion OR same-lobe satellite nodule. T4: >7 cm OR mediastinal fat/great vessels/diaphragm/carina/heart invasion OR different-lobe ipsilateral satellite nodule. N2: ipsilateral mediastinal nodes. N3: contralateral mediastinal/hilar nodes OR supraclavicular nodes either side (= unresectable Stage IIIB).',
          explanation: 'Stage IIIB (N3 or T4/N2) is typically surgically unresectable. N2 disease may be resectable with negative mediastinoscopy. The boundary between N2 and N3 paratracheal nodes is the left lateral border of the trachea. M1a includes malignant pleural effusion, contralateral lung nodule. M1b = single extrathoracic metastasis. M1c = multiple extrathoracic metastases.',
          keyFact: 'N3 (contralateral or supraclavicular) = Stage IIIB = unresectable. Malignant pleural effusion = M1a. T3 = same lobe satellite; T4 = different lobe ipsilateral satellite.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tnm-staging-of-lung-cancer-8th-edition',
          tags: ['lung cancer', 'staging', 'CT', 'chest', 'tumor'],
        },
      },
      {
        id: 'chest-tumors-003',
        front: {
          question: 'What is a Pancoast (superior sulcus) tumor, what is the associated syndrome, and what imaging is preferred for staging?',
        },
        back: {
          answer: 'Superior sulcus tumor = apical lung cancer. Pancoast syndrome = superior sulcus tumor + involvement of sympathetic ganglia → ipsilateral Horner syndrome (ptosis, miosis, anhidrosis) + C8-T2 radiculopathy + shoulder pain. MRI is preferred for staging (evaluate brachial plexus, spinal canal, vertebral body involvement).',
          explanation: 'T3 staging if invasion limited to chest wall structures. T4 if involving mediastinum, vertebral body >50%, or spinal canal. Contraindications to surgical resection include: vertebral body invasion >50%, spinal canal involvement, C8 or higher brachial plexus involvement, diaphragm paralysis (phrenic nerve), or distant metastases. Histology is almost always NSCLC.',
          keyFact: 'Pancoast = apical tumor + Horner syndrome + shoulder pain + C8-T2 radiculopathy. MRI for staging. C8 or higher involvement = contraindication to surgery.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pancoast-tumour',
          tags: ['Pancoast', 'lung cancer', 'MRI', 'CT', 'chest', 'tumor'],
        },
      },
      {
        id: 'chest-tumors-004',
        front: {
          question: 'What is carcinoid tumor of the lung, and how do typical and atypical carcinoids differ?',
        },
        back: {
          answer: 'Typical carcinoid (low-grade): central endobronchial, <3 cm, calcifies in 30%, avidly enhancing, <2 mitoses/2 mm², 92% 5-year survival. Atypical carcinoid (intermediate): more often peripheral, >3 cm, age ~60s, smoking association, higher metastatic rate. Neither has strong smoking association. Octreotide scan useful; may be cold on PET (~25%).',
          explanation: 'Carcinoid tumors arise from bronchial neuroendocrine cells and almost always occur distal to the carina. The typical form has a larger extrinsic than endobronchial component ("iceberg" lesion). Pulmonary carcinoid syndrome (flushing, etc.) is rare but when it occurs, cardiac involvement is on the LEFT side (mitral/aortic valves) — opposite of GI carcinoid. DIPNECH represents the pre-invasive carcinoid spectrum.',
          keyFact: 'Carcinoid = distal to carina + avid enhancement + no smoking (typical). Carcinoid syndrome → LEFT-sided valvular disease (vs GI carcinoid → right-sided). Cold on PET in 25%.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-carcinoid-tumour',
          tags: ['carcinoid', 'lung tumor', 'CT', 'chest', 'neuroendocrine'],
        },
      },
      {
        id: 'chest-tumors-005',
        front: {
          question: 'What is lymphangitic carcinomatosis, what are its CT features, and which primary tumors are most commonly responsible?',
        },
        back: {
          answer: 'Lymphangitic carcinomatosis = tumor spread through pulmonary lymphatics. CT: nodular or smooth interlobular septal thickening (preserving normal lobular architecture, unlike fibrosis), often asymmetric; may have pleural effusion. Primary tumors: lung (most common unilateral), breast, stomach, pancreas, prostate (most common extrathoracic).',
          explanation: 'Unlike pulmonary interstitial fibrosis, lymphangitic carcinomatosis does NOT distort the normal architecture of the secondary pulmonary lobule — it just thickens the septa with tumor cells. Asymmetric distribution is characteristic and helps distinguish from pulmonary edema (symmetric). The beaded septal thickening (nodular) pattern is most characteristic.',
          keyFact: 'Lymphangitic carcinomatosis = nodular septal thickening WITHOUT architectural distortion. Asymmetric = key feature. Most common extrathoracic primaries: breast, stomach, pancreas, prostate.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lymphangitis-carcinomatosa',
          tags: ['lymphangitic carcinomatosis', 'CT', 'chest', 'metastases'],
        },
      },
      {
        id: 'chest-tumors-006',
        front: {
          question: 'What is Kaposi sarcoma in AIDS, and what are its classic imaging features?',
        },
        back: {
          answer: 'Most common lung tumor in AIDS (CD4 <200); lymphoma is second. CT/CXR: bilateral "flame-shaped" perihilar and bronchovascular opacities; bloody pleural effusion in 50%. Nuclear medicine: Thallium-201 positive, Gallium-67 negative (contrast with lymphoma = both positive).',
          explanation: 'Kaposi sarcoma of the lung involves the tracheobronchial mucosa and peribronchial/perivascular lung. The "flame-shaped" perihilar opacities reflect the peribronchial distribution. Patients often appear disproportionately well clinically relative to the extensive lung involvement on imaging. Kaposi is also the most common hepatic neoplasm in AIDS.',
          keyFact: 'Kaposi = AIDS lung tumor #1. Flame-shaped perihilar opacities. Bloody effusion. Thallium+ Gallium- (contrast with lymphoma: both Thallium+ and Gallium+).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/kaposi-sarcoma',
          tags: ['Kaposi', 'AIDS', 'tumor', 'CT', 'chest'],
        },
      },
      {
        id: 'chest-tumors-007',
        front: {
          question: 'What are the common cavitary lung lesion causes and how do wall thickness and clinical features help differentiate them?',
          hint: 'Use the CAVITY mnemonic.',
        },
        back: {
          answer: 'CAVITY: Cancer (SCC most common), Autoimmune (GPA, RA/Caplan), Vascular (septic emboli, bland emboli), Infection (TB, fungal, abscess), Trauma (pneumatocele), Young/congenital (CCAM, sequestration). Wall thickness: ≤4 mm = usually benign; >15 mm = usually malignant.',
          explanation: 'Among primary lung cancers, squamous cell carcinoma cavitates most often. Small cell carcinoma essentially never cavitates. Septic emboli are peripheral, multiple, and lower lobe predominant. GPA (Wegener\'s) produces multiple randomly distributed cavitating nodules (C-ANCA positive). A thick irregular wall >15 mm strongly suggests malignancy; a smooth thin wall ≤4 mm is likely benign.',
          keyFact: 'Cavity: CAVITY mnemonic. Wall <4 mm = benign, >15 mm = malignant. SCC cavitates most among primary lung cancers. Small cell NEVER cavitates.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-cavity',
          tags: ['cavity', 'CT', 'chest', 'tumor', 'infection'],
        },
      },
      {
        id: 'chest-tumors-008',
        front: {
          question: 'What is post-transplant lymphoproliferative disorder (PTLD) and what are its CT features?',
        },
        back: {
          answer: 'B-cell lymphoma related to EBV (90%) occurring after solid organ or stem cell transplant, typically within first year (late presentations >1 year have more aggressive course). CT: well-defined pulmonary nodules/masses, patchy consolidation, halo sign, interlobular septal thickening; lymphadenopathy common.',
          explanation: 'PTLD results from uncontrolled B-cell proliferation driven by EBV in the setting of immunosuppression. Earlier detection with the use of PET or EBV PCR can allow reduction of immunosuppression as initial treatment. PTLD can involve both nodal and extranodal sites (CNS, GI tract, liver, lung). Lung nodules in a transplant patient are PTLD until proven otherwise.',
          keyFact: 'PTLD = EBV-driven B-cell lymphoma post-transplant. CT: nodules + consolidation. Timing: usually <1 year post-transplant. EBV in 90%. New lung nodule in transplant patient → PTLD.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/post-transplant-lymphoproliferative-disorder',
          tags: ['PTLD', 'lymphoma', 'CT', 'chest', 'transplant'],
        },
      },
    ],
  },
  {
    id: 'chest-pulm-vascular',
    label: 'Pulmonary Vascular',
    cards: [
      {
        id: 'chest-pulm-vascular-001',
        front: {
          question: 'What are the classic plain film signs of pulmonary embolism on CXR?',
        },
        back: {
          answer: 'Fleischner sign: enlarged central pulmonary artery from distension by clot. Hampton\'s hump: peripheral wedge-shaped consolidation from pulmonary infarct. Westermark sign: regional oligemia (lucency) distal to obstructed artery. Pleural effusion (~30%, nonspecific).',
          explanation: 'Plain film findings in PE are nonspecific and insensitive, and a normal CXR does not exclude PE. These signs are important to recognize in case PE is not clinically suspected. CT pulmonary angiogram is the current standard for diagnosis, showing central intraluminal filling defects, typically at vessel bifurcations. D-dimer has high negative predictive value but many false positives.',
          keyFact: 'PE CXR signs: Fleischner (big PA), Hampton\'s hump (wedge infarct), Westermark (oligemia). Normal CXR does NOT exclude PE. CTPA = gold standard.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-embolism',
          tags: ['PE', 'XR', 'CT', 'chest', 'vascular'],
        },
      },
      {
        id: 'chest-pulm-vascular-002',
        front: {
          question: 'What CT findings indicate right heart strain in acute pulmonary embolism, and how do they affect clinical classification?',
        },
        back: {
          answer: 'RV/LV ratio ≥1 (RV larger than LV) and bowing of the interventricular septum to the left. Contrast reflux into hepatic veins (less reliable). Clinical: Submassive PE = stable BP + RV dysfunction or elevated troponin. Massive PE = systolic BP <90 mmHg.',
          explanation: 'Right heart strain findings on CTPA are important because they guide treatment intensity. Submassive PE can be escalated to thrombolysis or catheter-directed therapy if there is more severe RV strain or clinical deterioration. Massive PE (hypotension) warrants immediate intervention. ECHO remains the gold standard for RV function assessment.',
          keyFact: 'RV>LV + leftward septal bowing = right heart strain on CT. Submassive = stable BP + RV dysfunction. Massive = BP <90. RV>LV is the best CT sign of right heart strain.',
          tags: ['PE', 'CT', 'chest', 'vascular', 'right heart'],
        },
      },
      {
        id: 'chest-pulm-vascular-003',
        front: {
          question: 'How do acute versus chronic pulmonary emboli differ on CT?',
        },
        back: {
          answer: 'Acute PE: central intraluminal filling defect, vessel distension, perivenous edema, pleural effusion common. Chronic PE: eccentric filling defect (organized clot), peripheral location, calcification within thrombus, shrunken vessels with collaterals, mosaic attenuation/air trapping from chronic obstruction.',
          explanation: 'Chronic PE is a well-recognized cause of pulmonary arterial hypertension (CTEPH). In chronic disease, the clot organizes and becomes incorporated into the vessel wall, appearing eccentric and peripheral rather than central. The VQ scan is actually superior to CTPA for detecting chronic PE, as organized peripheral clots may not create filling defects on CT.',
          keyFact: 'Acute PE = central filling defect, vessel expanded. Chronic PE = eccentric peripheral clot ± calcification + mosaic attenuation + vessel shrinkage. VQ > CTPA for chronic PE detection.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chronic-pulmonary-embolism',
          tags: ['PE', 'CT', 'chest', 'vascular', 'chronic'],
        },
      },
      {
        id: 'chest-pulm-vascular-004',
        front: {
          question: 'What are the CT findings of pulmonary arterial hypertension (PAH), and what are common causes?',
        },
        back: {
          answer: 'CT findings: main PA >29 mm (or >aorta, which is more reliable); segmental artery-to-bronchus ratio >1:1; RV dilation/hypertrophy; leftward septal bowing; mosaic attenuation; central PA calcifications (Eisenmenger). Causes: chronic PE, left heart failure, lung parenchymal disease (COPD, fibrosis), idiopathic PAH (young women).',
          explanation: 'Main PA diameter >29 mm is a common threshold; comparing to the adjacent aorta is more reliable (PA should not be wider than aorta). The "banana and egg" sign: visualization of the main PA ("egg") at the level of the aortic arch ("banana") indicates significant PA enlargement. COPD patients with PA larger than the aorta have increased mortality.',
          keyFact: 'PAH: Main PA >29 mm or PA > aorta. Banana + egg sign. COPD + PA > aorta = worse prognosis. Idiopathic PAH = young women.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-arterial-hypertension',
          tags: ['PAH', 'CT', 'chest', 'vascular', 'pulmonary hypertension'],
        },
      },
      {
        id: 'chest-pulm-vascular-005',
        front: {
          question: 'What is pulmonary veno-occlusive disease (PVOD) and how is it distinguished from other causes of pulmonary hypertension?',
        },
        back: {
          answer: 'PVOD: uncommon variant of PAH affecting post-capillary pulmonary vasculature. Key distinguishing feature: pulmonary arterial hypertension + NORMAL pulmonary capillary wedge pressure (PCWP) on right heart catheterization. Other causes of elevated PCWP (post-capillary): mitral stenosis, left atrial myxoma, pulmonary vein stenosis.',
          explanation: 'A normal wedge pressure in the context of PAH findings should immediately raise concern for PVOD (or pulmonary capillary hemangiomatosis). CT shows CT findings of both pre-capillary PAH (enlarged central PA) and post-capillary congestion (septal thickening, GGO, lymphadenopathy). PVOD has a poor prognosis and may require lung transplantation.',
          keyFact: 'PVOD = PAH + NORMAL wedge pressure. If wedge is elevated → think mitral stenosis, left atrial myxoma, pulmonary vein stenosis instead.',
          tags: ['PVOD', 'PAH', 'CT', 'chest', 'vascular'],
        },
      },
      {
        id: 'chest-pulm-vascular-006',
        front: {
          question: 'What is a pulmonary arteriovenous malformation (AVM), with what syndrome is it most strongly associated, and what is the treatment threshold?',
        },
        back: {
          answer: 'Pulmonary AVMs are abnormal vascular communications between pulmonary artery and vein, most commonly lower lobe (greater blood flow). Most strongly associated with hereditary hemorrhagic telangiectasia (HHT/Osler-Weber-Rendu). They cause right-to-left shunt → paradoxical embolism → stroke and brain abscess. Treatment threshold: afferent vessel ≥3 mm.',
          explanation: 'Pulmonary AVMs can occur sporadically but ~70% are associated with HHT. The right-to-left shunt bypasses normal pulmonary filtration, allowing emboli, bacteria, and air to reach the systemic circulation. Brain abscess in a young patient without an obvious source should prompt evaluation for pulmonary AVM. Tc-99m MAA scan can demonstrate extrapulmonary tracer in the brain confirming the shunt.',
          keyFact: 'Pulmonary AVM = HHT association. Right-to-left shunt → stroke + brain abscess. Treatment when afferent vessel ≥3 mm. Lower lobe predominant.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-arteriovenous-malformation',
          tags: ['AVM', 'HHT', 'CT', 'chest', 'vascular'],
        },
      },
    ],
  },
  {
    id: 'chest-pleura',
    label: 'Pleura & Mediastinum',
    cards: [
      {
        id: 'chest-pleura-001',
        front: {
          question: 'What are the CT features of mesothelioma and how does it differ from other causes of pleural thickening?',
        },
        back: {
          answer: 'Malignant mesothelioma: circumferential ("pleural rind") nodular thickening including the medial pleural surface (near heart) — thickness >1 cm; extension into fissures is highly suggestive. Risk: asbestos exposure (80%, NOT dose-dependent), 30–40 year latency. Thick lateral pleura = trauma/old hemothorax; thick medial pleura = mesothelioma.',
          explanation: 'The medial (pericardiophrenic) pleural thickening distinguishes mesothelioma from other causes. MRI with contrast is preferred for evaluating local invasion (chest wall, diaphragm, pericardium). PET/CT is useful for staging and treatment response assessment. Epithelial subtype has better prognosis than sarcomatoid.',
          keyFact: 'Mesothelioma: asbestos, 30–40y latency, NOT dose-dependent. "Pleural rind" = circumferential thick pleura including medial surface. Medial pleural thickening = mesothelioma until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/malignant-pleural-mesothelioma',
          tags: ['mesothelioma', 'pleura', 'CT', 'chest', 'asbestos'],
        },
      },
      {
        id: 'chest-pleura-002',
        front: {
          question: 'What is a solitary fibrous tumor of the pleura (SFTP) and what are its clinical associations?',
        },
        back: {
          answer: 'SFTP (fibrous tumor of the pleura): focal pleural mass NOT related to asbestos or smoking, arising from visceral pleura. May be pedunculated (changes position with patient repositioning). ~20–30% are malignant. Associated with: Doege-Potter syndrome (hypoglycemia from IGF-II secretion, 5%) and hypertrophic pulmonary osteoarthropathy (~30%). Low FDG uptake on PET.',
          explanation: 'SFTP is mesenchymal in origin (NOT mesothelial like mesothelioma). The key distinguishing feature from mesothelioma is its focal rather than diffuse nature, and lack of asbestos association. A pleural-based mass that changes position between imaging studies is characteristic of pedunculated SFTP. All SFTPs are excised regardless of imaging appearance because malignancy is determined at pathology by mitotic count.',
          keyFact: 'SFTP: no asbestos, focal pleural mass, mobile. Doege-Potter = hypoglycemia (5%). Hypertrophic osteoarthropathy (30%). PET cold. All are excised.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/solitary-fibrous-tumour-of-the-pleura',
          tags: ['SFTP', 'pleura', 'CT', 'chest', 'tumor'],
        },
      },
      {
        id: 'chest-pleura-003',
        front: {
          question: 'What are the mediastinal compartments per the ITMIG classification and the characteristic mass in each?',
        },
        back: {
          answer: 'Prevascular (anterior): thymus (thymoma in middle-aged adults), germ cell tumors (young adults), lymphoma, thyroid goiter. Visceral (middle): adenopathy, bronchogenic cyst (subcarinal), pericardial cyst (right cardiophrenic angle), aortic aneurysm, esophageal lesions. Paravertebral (posterior): neurogenic tumors (#1), extramedullary hematopoiesis.',
          explanation: 'The ITMIG classification (prevascular/visceral/paravertebral) is now standard. The classic "4 T\'s" of anterior mediastinal masses: Thymoma, Teratoma, Thyroid, Terrible lymphoma. Pericardial cysts are classically at the right anterior cardiophrenic angle and change shape. Neurogenic tumors (schwannoma most common in adults) are the most common paravertebral masses.',
          keyFact: 'Anterior = 4 T\'s (Thymoma, Teratoma, Thyroid, lymphoma). Middle = adenopathy, bronchogenic cyst, pericardial cyst. Posterior = neurogenic tumors. Pericardial cyst = right cardiophrenic angle.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mediastinal-mass',
          tags: ['mediastinum', 'CT', 'XR', 'chest', 'tumor'],
        },
      },
      {
        id: 'chest-pleura-004',
        front: {
          question: 'What is thymoma, with what conditions is it associated, and what is the significance of invasiveness?',
        },
        back: {
          answer: 'Most common primary anterior mediastinal tumor. Occurs in middle-aged adults (35–60). Associations: myasthenia gravis (33% of thymoma patients; 10% of MG patients have thymoma), red cell aplasia, hypogammaglobulinemia. Non-invasive = capsule intact. Invasive (30%) = capsule breached; may invade adjacent structures; pleural/pericardial "drop metastases." Elevated hemidiaphragm = phrenic nerve invasion.',
          explanation: 'Thymoma is a "well-behaved" tumor — it tends to grow locally rather than hematogeneously. Even invasive thymoma often has prolonged course. Thymic carcinoma, in contrast, is histologically malignant and metastasizes hematogenously (liver, lung, bone). Distinguishing invasive thymoma from thymic carcinoma requires histopathology.',
          keyFact: 'Thymoma = MG association (33% of thymomas have MG; 10% of MG have thymoma). Invasive = drop pleural mets. Elevated hemidiaphragm = phrenic nerve invasion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thymoma',
          tags: ['thymoma', 'mediastinum', 'CT', 'chest', 'tumor'],
        },
      },
      {
        id: 'chest-pleura-005',
        front: {
          question: 'What is fibrosing mediastinitis and what are the most common causes?',
        },
        back: {
          answer: 'Fibrosing mediastinitis (FM) = progressive fibrous tissue proliferation in the mediastinum encasing structures. Granulomatous type (most common): Histoplasma capsulatum (#1), TB, sarcoidosis — soft tissue mass with calcified nodes. Non-granulomatous (idiopathic/autoimmune): associated with SLE, RA, Behçet, methysergide use, retroperitoneal fibrosis — more infiltrative, enhances, no calcifications.',
          explanation: 'Histoplasma is the classic cause. Fibrous encasement of pulmonary veins causes venous obstruction. Pulmonary artery encasement causes pre-capillary pulmonary hypertension. Bronchial stenosis may also occur. Both subtypes can cause SVC syndrome. The calcified mediastinal soft tissue is characteristic of the granulomatous type.',
          keyFact: 'Fibrosing mediastinitis = Histoplasma #1. Calcified mediastinal mass = granulomatous type. Non-granulomatous = methysergide, autoimmune, retroperitoneal fibrosis association.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fibrosing-mediastinitis',
          tags: ['fibrosing mediastinitis', 'mediastinum', 'CT', 'chest'],
        },
      },
      {
        id: 'chest-pleura-006',
        front: {
          question: 'What is a bronchogenic cyst and where does it most commonly occur?',
        },
        back: {
          answer: 'Congenital foregut duplication cyst lined by respiratory epithelium. Most commonly in the subcarinal region (visceral mediastinum), causing obliteration of the azygoesophageal recess on CXR. Can also be intraparenchymal (within lung). CT: thin-walled fluid-attenuation cyst ±proteinaceous/hemorrhagic contents; no enhancement. MRI confirms cystic nature if CT uncertain.',
          explanation: 'Bronchogenic cysts result from abnormal budding of the primitive foregut. They do not communicate with the airway. If complicated by hemorrhage or infection, the contents become higher density (proteinaceous). The key distinction from lymphadenopathy is the thin wall and fluid attenuation. Esophageal duplication cysts occur adjacent to the esophagus; neurenteric cysts are posterior and associated with vertebral anomalies.',
          keyFact: 'Bronchogenic cyst = subcarinal #1 → obliterates azygoesophageal recess on CXR. Fluid attenuation on CT. No enhancement. MRI = T2 bright confirms cystic nature.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bronchogenic-cyst',
          tags: ['bronchogenic cyst', 'mediastinum', 'CT', 'chest'],
        },
      },
      {
        id: 'chest-pleura-007',
        front: {
          question: 'What are the three stages of pulmonary edema on CXR and the corresponding pulmonary capillary wedge pressures?',
        },
        back: {
          answer: 'Stage 1 (13–18 mmHg): vascular redistribution/cephalization, enlarged cardiac silhouette, widened vascular pedicle. Stage 2 (18–25 mmHg): interstitial edema — Kerley B lines (peripheral septal thickening), peribronchial cuffing, indistinct pulmonary vessels. Stage 3 (>25 mmHg): alveolar edema — fluffy perihilar consolidation (bat-wing), pleural effusions.',
          explanation: 'Pulmonary edema is the most common cause of bilateral perihilar consolidation. It is typically symmetric and dependent. A classic cause of asymmetric (right upper lobe) pulmonary edema is acute mitral regurgitation from papillary muscle rupture in MI. Reexpansion pulmonary edema occurs after aggressive thoracentesis of a lung collapsed for >3 days.',
          keyFact: 'Pulmonary edema stages: Stage 1 = cephalization. Stage 2 = Kerley B lines. Stage 3 = alveolar bat-wing pattern. Asymmetric right upper lobe edema = acute MR (papillary muscle rupture).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-oedema',
          tags: ['pulmonary edema', 'XR', 'chest', 'CHF'],
        },
      },
      {
        id: 'chest-pleura-008',
        front: {
          question: 'What are the neurogenic tumors of the posterior mediastinum, and how do adults differ from children?',
        },
        back: {
          answer: 'Adults: peripheral nerve sheath tumors predominate — schwannoma (most common), neurofibroma, malignant peripheral nerve sheath tumor (MPNST). Children: sympathetic ganglionic tumors — neuroblastoma (malignant, young children), ganglioneuroblastoma (intermediate, older children), ganglioneuroma (benign, young adults). All = most common paravertebral masses.',
          explanation: 'Neurogenic tumors typically appear as smooth round paravertebral masses. Benign pressure erosion of adjacent ribs, vertebrae, and enlargement of neural foramina may occur — without implying malignancy. "Dumbbell" extension through the neural foramen is more common with schwannomas/neurofibromas. Internal heterogeneity and rapid growth raise concern for MPNST.',
          keyFact: 'Adult paravertebral = schwannoma (most common peripheral nerve sheath). Child paravertebral = neuroblastoma (most common in young children). Dumbbell = foraminal extension.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-mediastinal-tumours',
          tags: ['neurogenic tumor', 'mediastinum', 'CT', 'chest', 'pediatric'],
        },
      },
      {
        id: 'chest-pleura-009',
        front: {
          question: 'What is a chylothorax and what are its common causes?',
        },
        back: {
          answer: 'Chylothorax = pleural effusion containing intestinal lymph (chyle). Most common cause: iatrogenic thoracic duct injury (surgery, central line placement). Other causes: neoplastic obstruction (lymphoma #1 malignant cause), LAM. The thoracic duct originates at the cisterna chyli, ascends through the chest, and drains into the left brachiocephalic/subclavian vein.',
          explanation: 'Chyle is triglyceride-rich and milky in appearance. On CT, chylothorax has low Hounsfield units (similar to simple fluid). Lymphoma is the most common malignant cause of chylothorax. LAM is notable because chylous effusion is a classic association. Treatment includes dietary modification (medium-chain triglycerides) and thoracic duct ligation in refractory cases.',
          keyFact: 'Chylothorax = iatrogenic #1, lymphoma = #1 malignant cause, LAM = cystic lung disease with chylous effusion. Thoracic duct drains to left subclavian/brachiocephalic vein.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chylothorax',
          tags: ['chylothorax', 'pleura', 'CT', 'chest', 'LAM'],
        },
      },
      {
        id: 'chest-pleura-010',
        front: {
          question: 'How are diaphragmatic hernias classified by type, and what are the imaging clues for Morgagni versus Bochdalek hernias?',
        },
        back: {
          answer: 'Bochdalek: posterior diaphragmatic hernia (congenital), most common on the left (liver buffers right). Morgagni: anterior (paracardiac), right-sided, containing omentum/bowel; anterior mediastinal mass containing fat + bowel gas is diagnostic; look for omental vessels traceable to abdomen on CT. Hiatal hernia: through esophageal hiatus, air/fluid level above diaphragm.',
          explanation: 'Bochdalek hernias are congenital and typically present at birth with respiratory distress. Small Bochdalek hernias containing fat may be incidental in adults. Morgagni hernias are anterior and right-sided (paracardiac) because the left foramen of Morgagni is typically obliterated by the pericardium. Traumatic diaphragmatic rupture is 3x more common on the left, occurs at the posterolateral dome, and the "collar sign" (waist in herniated organ) is diagnostic.',
          keyFact: 'Bochdalek = posterior, left. Morgagni = anterior, right (paracardiac), contains fat+bowel. Traumatic rupture = left 3:1, collar sign. Hiatal hernia = air/fluid above diaphragm.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/morgagni-hernia',
          tags: ['hernia', 'diaphragm', 'CT', 'XR', 'chest'],
        },
      },
      {
        id: 'chest-pleura-011',
        front: {
          question: 'What is a vasculitis causing cavitary pulmonary nodules (GPA), and what is the clinical triad and imaging?',
        },
        back: {
          answer: 'Granulomatosis with polyangiitis (GPA, formerly Wegener\'s): C-ANCA positive. Clinical triad: sinusitis, lung disease, renal insufficiency. Lung CT: multiple randomly distributed nodules (±GGO halo in acute phase) that cavitate; subglottic tracheal stenosis is most common airway finding. Lung involvement in 95% of GPA.',
          explanation: 'GPA is a small-vessel vasculitis with granulomatous inflammation. The classic triad is present in <50% of patients. Tracheal/airway involvement (subglottic stenosis) is seen in ~20%. Pulmonary hemorrhage can occur (diffuse GGO). Microscopic polyangiitis is the most common cause of pulmonary-renal syndrome with alveolar hemorrhage — P-ANCA positive.',
          keyFact: 'GPA (Wegener\'s) = C-ANCA + multiple cavitating nodules + subglottic stenosis. Microscopic polyangiitis = P-ANCA + alveolar hemorrhage + renal failure.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/granulomatosis-with-polyangiitis',
          tags: ['GPA', 'vasculitis', 'CT', 'chest'],
        },
      },
    ],
  },
  {
    id: 'chest-lines-devices',
    label: 'Lines, Devices & Trauma',
    cards: [
      {
        id: 'chest-lines-001',
        front: {
          question: 'What is the correct positioning of an endotracheal tube (ETT), and what is the most common malposition?',
        },
        back: {
          answer: 'ETT tip should be 4–6 cm above the carina (approximately halfway between the clavicles and carina) in neutral neck position. Tip moves down with chin flexion, up with chin extension ("hose goes where the nose goes"). Most common malposition: right mainstem bronchus intubation (more vertical angle) → left lung collapse.',
          explanation: 'Right mainstem intubation is an emergent finding requiring immediate correction. A tip too high risks inadvertent extubation. In ARDS patients with low pulmonary compliance, the tip is intentionally positioned slightly lower (closer to the carina) to reduce barotrauma risk. Identifying the carina on CXR is key; the carina typically overlies T5–T6.',
          keyFact: 'ETT: 4–6 cm above carina, neutral neck. Right mainstem intubation (#1 malposition) = emergent → left lung collapse. "Hose goes where the nose goes."',
          radiopaediaUrl: 'https://radiopaedia.org/articles/endotracheal-tube',
          tags: ['ETT', 'lines', 'devices', 'XR', 'chest'],
        },
      },
      {
        id: 'chest-lines-002',
        front: {
          question: 'Where should the tip of a central venous catheter (CVC) and PICC be positioned, and what is the most common PICC malposition?',
        },
        back: {
          answer: 'CVC/PICC tip: lower SVC or cavoatrial junction. Dialysis catheter: right atrium. Most common PICC malposition: azygous vein (~1% of bedside PICCs); seen on frontal CXR as the catheter coursing medially at the SVC–brachiocephalic junction, then on lateral curving anteriorly then posteriorly into the azygous vein. Requires repositioning due to risk of venous perforation and thrombosis.',
          explanation: 'A PICC tip in the azygous vein is a subtle malposition that can be missed. On the frontal view it appears to take an unexpected medial turn. On the lateral view it curves anteriorly then posteriorly (unusual). Right-sided left cardiac border catheter course = suspect persistent left SVC (draining to coronary sinus) or arterial malposition.',
          keyFact: 'CVC/PICC tip = lower SVC or cavoatrial junction. Dialysis catheter = RA. Azygous malposition (~1% PICCs) = repositioning required. Lateral view shows anterior-then-posterior hook.',
          tags: ['CVC', 'PICC', 'lines', 'XR', 'chest'],
        },
      },
      {
        id: 'chest-lines-003',
        front: {
          question: 'What is the correct position for a Swan-Ganz pulmonary artery catheter and what complication occurs if it is too distal?',
        },
        back: {
          answer: 'Tip should be in the main, right, or left pulmonary artery (no further than the proximal interlobar PA). If tip is distal to the proximal interlobar PA → risk of pulmonary artery rupture or pseudoaneurysm. Other complications: intracardiac knot, arrhythmia.',
          explanation: 'A Swan-Ganz (pulmonary artery) catheter is used to measure pulmonary capillary wedge pressure (an indirect measure of left atrial pressure). The course passes through the SVC, RA, tricuspid valve, RV, pulmonic valve, and into the PA. It should not be wedged in a distal PA because this causes ischemia and risk of rupture, which can be life-threatening.',
          keyFact: 'Swan-Ganz: tip in main/right/left PA. Distal to proximal interlobar PA = rupture/pseudoaneurysm risk. Route: SVC → RA → RV → PA.',
          tags: ['Swan-Ganz', 'lines', 'XR', 'chest', 'devices'],
        },
      },
      {
        id: 'chest-lines-004',
        front: {
          question: 'What is the Macklin effect, and when should it be suspected?',
        },
        back: {
          answer: 'Macklin effect = alveolar rupture from blunt thoracic trauma, with air dissecting along bronchovascular sheaths into the mediastinum (pneumomediastinum), without pneumothorax necessarily. Most common cause of pneumomediastinum in blunt trauma patients.',
          explanation: 'In the Macklin effect, barotrauma or blunt trauma causes alveolar rupture; the air follows the path of least resistance along bronchovascular sheaths into the mediastinum. Tracheal injury from trauma typically occurs within 2 cm of the carina; injury near the carina produces pneumomediastinum, while more peripheral injury produces pneumothorax.',
          keyFact: 'Macklin effect = pneumomediastinum from alveolar rupture → air tracks along bronchovascular sheaths. Most common cause of pneumomediastinum in blunt chest trauma.',
          tags: ['trauma', 'pneumomediastinum', 'CT', 'chest'],
        },
      },
      {
        id: 'chest-lines-005',
        front: {
          question: 'What is the correct position for an intra-aortic balloon pump (IABP) and what complications arise from malpositioning?',
        },
        back: {
          answer: 'IABP balloon tip: proximal descending aorta, just distal to the origin of the left subclavian artery (just above the splanchnic vessels). Malpositioning too high → obstruction of the left subclavian artery. Function: increases myocardial perfusion (diastolic augmentation) and decreases LV afterload.',
          explanation: 'The IABP inflates in diastole to augment coronary perfusion pressure and deflates in systole to reduce LV afterload. It is used in cardiogenic shock and high-risk PCI. The balloon is seen as a radiopaque sausage-shaped structure in the descending aorta. On CXR, the tip should project at the level of the aortic knob (left subclavian artery takeoff).',
          keyFact: 'IABP: just below left subclavian artery. Too high = left subclavian obstruction. Inflates in diastole (coronary perfusion), deflates in systole (↓afterload).',
          tags: ['IABP', 'devices', 'XR', 'chest', 'vascular'],
        },
      },
      {
        id: 'chest-lines-006',
        front: {
          question: 'What is the most common site of traumatic aortic injury, and what are the key CT signs?',
        },
        back: {
          answer: 'Most common site: aortic isthmus (junction of the aortic arch and descending aorta, at the ligamentum arteriosum) — ~90% of cases. CT: intimal flap, pseudoaneurysm, periaortic hematoma, mediastinal hematoma. Important mimic: ductus bump (normal variant); distinguish by presence of mediastinal hematoma and other trauma signs.',
          explanation: 'The aortic isthmus is the point of relative fixation between the relatively mobile arch and the fixed descending aorta; deceleration forces cause shearing at this point. The second most common site is the aortic root (most fatal, rarely survive to imaging), and the third is at the diaphragm. Multidetector CTPA (aortography) is the standard diagnostic tool.',
          keyFact: 'Traumatic aortic injury: isthmus (ligamentum arteriosum) = 90%. Ductus bump = normal variant mimic; look for mediastinal hematoma to distinguish. CTA is standard.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/traumatic-aortic-injury',
          tags: ['trauma', 'aorta', 'CT', 'chest', 'vascular'],
        },
      },
    ],
  },
  {
    id: 'chest-radiation-iatrogenic',
    label: 'Radiation & Iatrogenic Lung Disease',
    cards: [
      {
        id: 'chest-rad-001',
        front: {
          question: 'What are the two phases of radiation lung injury and their typical timing and imaging features?',
        },
        back: {
          answer: 'Radiation pneumonitis (early): occurs within 1 month, most severe at 3–4 months post-RT; GGO or consolidation within/around the radiation port, non-anatomic linear margins that may cross fissures. Radiation fibrosis (late): apparent at 6–12 months; traction bronchiectasis and volume loss within the radiation port (extends outside port in ~20%).',
          explanation: 'The non-anatomic (straight, geometric) borders of radiation-related changes — not conforming to lobar boundaries and often crossing fissures — are the key radiologic clue identifying radiation as the cause. Recurrence of tumor should be suspected if a round opacity is growing within the radiation bed, as radiation scars are typically not round.',
          keyFact: 'Radiation pneumonitis = 1–4 months, GGO with non-anatomic borders. Radiation fibrosis = 6–12 months, traction bronchiectasis. Round growing mass in radiation bed = suspect recurrence.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/radiation-pneumonitis',
          tags: ['radiation', 'iatrogenic', 'CT', 'chest', 'ILD'],
        },
      },
      {
        id: 'chest-rad-002',
        front: {
          question: 'What are the main patterns of drug-induced lung disease, and which drug class is most commonly implicated?',
        },
        back: {
          answer: 'Patterns: pulmonary edema (increased capillary permeability), ARDS, organizing pneumonia, eosinophilic pneumonia, bronchiolitis obliterans, pulmonary hemorrhage, NSIP, UIP. Most commonly implicated: cytotoxic chemotherapy agents (e.g., bleomycin, methotrexate, amiodarone, nitrofurantoin).',
          explanation: 'Pulmonary drug toxicity is diagnosed by exclusion — there must be no other explanation. Amiodarone toxicity classically produces a NSIP or OP pattern but is notable for producing high-density pulmonary infiltrates on CT (from iodine content). Bleomycin causes a basilar NSIP-like or UIP-like pattern. The lung responds to drugs with a finite repertoire of injury patterns.',
          keyFact: 'Drug toxicity: any ILD pattern possible. Amiodarone = high-density infiltrates (iodine). Bleomycin = NSIP/UIP-like. Diagnosis by exclusion. Always consider drug history in ILD workup.',
          tags: ['drug toxicity', 'ILD', 'CT', 'chest', 'iatrogenic'],
        },
      },
    ],
  },
]