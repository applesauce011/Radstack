// ============================================================
// RadStack — Pediatric Radiology Deck
// ============================================================
// Naming convention: peds-[section]-[###]
// ============================================================

export const pediatricSubsections = [
  {
    id: 'peds-chest',
    label: 'Pediatric Chest',
    cards: [
      {
        id: 'peds-chest-001',
        front: {
          question: 'What are the four classic causes of "medical" neonatal respiratory distress seen on chest radiograph (no cardiomegaly, no thoracic mass)?',
          hint: 'Think: gestational age and delivery history',
        },
        back: {
          answer: 'Surfactant deficiency disease (SDD/RDS), Transient tachypnea of the newborn (TTN), Meconium aspiration syndrome, Neonatal pneumonia',
          explanation: 'These four entities account for the vast majority of non-structural neonatal respiratory distress. SDD affects preterm infants <34 weeks; TTN affects term/post-term babies born via C-section; meconium aspiration affects post-term neonates; neonatal pneumonia can mimic the others but takes hours to days to develop.',
          keyFact: 'SDD = preterm + low volumes + granular opacities. TTN = term + C-section + perihilar streaky opacities + resolves by 48–72h. Meconium = post-term + asymmetric coarse opacities.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neonatal-respiratory-distress-syndrome',
          tags: ['XR', 'chest', 'neonatal', 'respiratory distress', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-002',
        front: {
          question: 'What are the classic chest radiograph findings of surfactant deficiency disease (RDS)?',
        },
        back: {
          answer: 'Low lung volumes, diffuse hazy granular opacities, air bronchograms — no pleural effusions',
          explanation: 'SDD results from insufficient surfactant in premature type II pneumocytes, causing decreased lung compliance. It affects >95% of preterm infants born before 34 weeks. Surfactant replacement therapy rapidly improves opacification. The absence of pleural effusions helps distinguish it from neonatal pneumonia (Group B Strep).',
          keyFact: 'Granular opacities + no pleural effusion = SDD. Add pleural effusion → think Group B Strep pneumonia.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neonatal-respiratory-distress-syndrome',
          tags: ['XR', 'chest', 'neonatal', 'preterm', 'surfactant'],
        },
      },
      {
        id: 'peds-chest-003',
        front: {
          question: 'What is pulmonary interstitial emphysema (PIE) and what are its radiographic findings?',
        },
        back: {
          answer: 'Barotrauma-related dissection of air into the pulmonary interstitium along lymphatic pathways, causing hyperinflated lungs with asymmetric bubbly and tubular lucencies',
          explanation: 'PIE occurs in the first week of life and is associated with SDD requiring mechanical ventilation. Air dissects through immature alveoli into the interstitium and tracks along lymphatics. It can progress to pneumomediastinum or pneumothorax. Treatment includes high-frequency oscillating ventilation and placing the patient with the affected side down.',
          keyFact: 'PIE = bubbly/tubular lucencies in a ventilated preterm infant with SDD. Can progress to pneumothorax.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-interstitial-emphysema',
          tags: ['XR', 'chest', 'neonatal', 'barotrauma', 'preterm'],
        },
      },
      {
        id: 'peds-chest-004',
        front: {
          question: 'What are the radiographic findings of transient tachypnea of the newborn (TTN), and what clinical features predict it?',
        },
        back: {
          answer: 'Perihilar streaky interstitial opacities, fluid in the minor fissure, small bilateral pleural effusions; resolves by 48–72 hours',
          explanation: 'TTN is the most common cause of respiratory distress in all neonates. It results from failure of normal prostaglandin-mediated clearance of fetal lung fluid, often after C-section delivery (lack of "vaginal squeeze"). Symptoms peak at 24 hours and resolve by 48–72 hours. Antibiotics are often given empirically as it is difficult to distinguish from neonatal pneumonia clinically.',
          keyFact: 'TTN = wet lungs that dry out. Most common in C-section term neonates. Resolves by day 2–3. Fluid in minor fissure is a classic clue.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transient-tachypnoea-of-the-newborn',
          tags: ['XR', 'chest', 'neonatal', 'TTN', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-005',
        front: {
          question: 'What is the most common cause of chronic respiratory failure in pediatric patients, and what are its radiographic features?',
        },
        back: {
          answer: 'Chronic lung disease (CLD) of prematurity / bronchopulmonary dysplasia (BPD) — mild hyperinflation with band-like coarse reticular opacities',
          explanation: 'CLD/BPD develops in premature infants who require prolonged ventilation for SDD. It is defined as oxygen dependency for >28 days with failed oxygen challenge at 36 weeks post-conception. Unlike SDD, CLD features mild hyperinflation rather than low volumes. It is the most common cause of chronic respiratory failure in children.',
          keyFact: 'BPD = SDD that doesn\'t clear. Hyperinflated + coarse reticular opacities after week 2–3 in a preterm baby = CLD/BPD.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bronchopulmonary-dysplasia',
          tags: ['XR', 'chest', 'neonatal', 'BPD', 'chronic lung disease'],
        },
      },
      {
        id: 'peds-chest-006',
        front: {
          question: 'What is congenital lobar hyperinflation (CLH), what lobes are most commonly affected, and why is it dangerous to place a chest tube?',
        },
        back: {
          answer: 'Lobar air trapping from intrinsic or extrinsic bronchial narrowing (most commonly bronchomalacia); affects upper and middle lobes; chest tube worsens respiratory distress',
          explanation: 'CLH (formerly congenital lobar emphysema) presents as a hyperlucent hyperexpanded lobe with mediastinal shift. Prenatally it is fluid-filled and appears echogenic. Postnatally, it must be distinguished from tension pneumothorax — misidentifying it as a pneumothorax and placing a chest tube is dangerous because it lacks pulmonary parenchyma destruction.',
          keyFact: 'CLH = hyperlucent expanding lobe with mediastinal shift. Do NOT tube — it is NOT a pneumothorax. Most common in upper and middle lobes.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/congenital-lobar-overinflation',
          tags: ['XR', 'CT', 'chest', 'congenital', 'airway', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-007',
        front: {
          question: 'What is the key imaging finding that distinguishes bronchopulmonary sequestration from CPAM, and what are the two types of sequestration?',
        },
        back: {
          answer: 'Sequestration has a systemic feeding artery (from the thoracic aorta); intralobar (75%) is inside the pleura with pulmonary venous drainage; extralobar (25%) is external to pleura with systemic venous drainage',
          explanation: 'Sequestration is aberrant lung tissue without bronchial connection. The definitive distinguishing feature from CPAM is its systemic blood supply, identifiable on Doppler ultrasound prenatally or CTA/MRA postnatally. Intralobar sequestration presents in adolescence with recurrent pneumonia or hemoptysis. Extralobar presents in infancy and is associated with other anomalies including CDH.',
          keyFact: 'Systemic feeding artery = sequestration (not CPAM). Most common location: left lower lobe. Extralobar may be subdiaphragmatic — mimics adrenal mass.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-sequestration',
          tags: ['CT', 'ultrasound', 'chest', 'congenital', 'vascular', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-008',
        front: {
          question: 'What are the CPAM (congenital pulmonary airway malformation) types and what is the clinical significance of Type IV?',
        },
        back: {
          answer: 'Type I: >2 cm cysts (most common); Type II: small cysts (associated with renal agenesis); Type III: solid-appearing (innumerable tiny <5 mm cysts); Type IV: single large cyst — may be indistinguishable from cystic pleuropulmonary blastoma',
          explanation: 'CPAM is a hamartomatous proliferation of terminal bronchioles that communicates with the bronchial tree and has pulmonary arterial supply (unlike sequestration). Surgery is recommended for all types because CPAM cannot be reliably distinguished from pleuropulmonary blastoma (PPB), which is the most common primary childhood lung tumor.',
          keyFact: 'Type IV CPAM mimics cystic pleuropulmonary blastoma (the most common primary pediatric lung tumor) — always resect.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/congenital-pulmonary-airway-malformation',
          tags: ['CT', 'chest', 'congenital', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-009',
        front: {
          question: 'What is the scimitar sign and what syndrome does it indicate?',
        },
        back: {
          answer: 'Curvilinear opacity on the right side of the chest from hilum to diaphragm; indicates scimitar syndrome (partial anomalous pulmonary venous return from right lower lobe into the IVC or right atrium)',
          explanation: 'Scimitar syndrome is a form of PAPVR where right lower lobe pulmonary veins drain anomalously into the right side of the heart. It can be associated with right lung hypoplasia. The anomalous vein resembles a scimitar (Turkish sword) on frontal radiograph. In contrast, TAPVR involves all four pulmonary veins returning to the right atrium.',
          keyFact: 'Curvilinear right-sided opacity from hilum toward diaphragm = scimitar sign = PAPVR. May have right lung hypoplasia.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/scimitar-syndrome',
          tags: ['XR', 'CT', 'chest', 'vascular', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-010',
        front: {
          question: 'What are the radiographic features of the normal pediatric thymus and how do you distinguish it from a pathologic anterior mediastinal mass?',
        },
        back: {
          answer: 'Thymic wave sign (undulating margins along anterior ribs), thymic sail sign (inferolateral extension into minor fissure), no tracheal deviation, visible pulmonary vascular markings through it',
          explanation: 'The normal thymus can be large until age 5 and is a common source of confusion. Key distinguishing features from pathologic masses: the normal thymus does not compress or deviate the trachea, has smooth undulating borders conforming to rib contours (wave sign), and extends into the minor fissure (sail sign). Thymic rebound after chemotherapy can be FDG-avid and should not be mistaken for lymphoma.',
          keyFact: 'Normal thymus: wave sign + sail sign + no tracheal deviation. Never displaces the trachea regardless of size.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thymic-wave-sign',
          tags: ['XR', 'chest', 'anatomy', 'mediastinum', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-011',
        front: {
          question: 'What is the most common vascular ring, and what imaging findings help distinguish it from a right aortic arch with aberrant left subclavian artery?',
          hint: 'Both can produce stridor and look similar on plain film',
        },
        back: {
          answer: 'Double aortic arch is the most common vascular ring; it cannot be reliably distinguished from right arch + aberrant left subclavian on radiograph/esophagram — CT or MRI is needed',
          explanation: 'Both double aortic arch and right arch with aberrant left subclavian cause posterior esophageal impression and anterior tracheal impression, and both can cause stridor. CT/MRI determines which arch is dominant (for surgical planning). In double arch, the right is usually superior and dominant. A right arch with mirror-image branching (not a ring) is strongly associated with intracardiac defects (TOF, truncus).',
          keyFact: 'Double aortic arch = most common ring. Right arch + aberrant left subclavian = second most common ring. Both have posterior esophageal AND anterior tracheal impressions. Only CT/MRI can differentiate.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/double-aortic-arch',
          tags: ['CT', 'MRI', 'chest', 'vascular', 'congenital', 'airway'],
        },
      },
      {
        id: 'peds-chest-012',
        front: {
          question: 'What is pulmonary artery sling and what makes it unique among vascular anomalies causing stridor?',
        },
        back: {
          answer: 'Anomalous origin of the left pulmonary artery from the right PA, coursing between the trachea and esophagus; the only congenital vascular cause of stridor with a LEFT aortic arch',
          explanation: 'In pulmonary artery sling, the aberrant left PA runs between the trachea and esophagus, causing posterior tracheal compression and anterior esophageal compression on esophagram (the only ring/sling with anterior esophageal impression). It is associated with tracheal anomalies including complete cartilaginous rings (ring-sling complex) and tracheomalacia.',
          keyFact: 'PA sling = ONLY vascular cause of stridor with left arch. Lateral esophagram: anterior esophageal impression + posterior tracheal impression.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pulmonary-artery-sling',
          tags: ['CT', 'MRI', 'chest', 'vascular', 'airway', 'congenital'],
        },
      },
      {
        id: 'peds-chest-013',
        front: {
          question: 'What is the spinnaker sail sign and what does it indicate?',
        },
        back: {
          answer: 'Bilateral elevation of thymic lobes off the mediastinum by ectopic air, seen in neonatal pneumomediastinum',
          explanation: 'In pneumomediastinum, air dissects under the thymus and elevates it, creating the spinnaker sail (or angel-wing) appearance. This should not be confused with the thymic sail sign, which is the normal rightward extension of the thymus into the minor fissure. Pneumomediastinum in neonates is commonly associated with barotrauma from ventilation.',
          keyFact: 'Spinnaker sail = thymus lifted off mediastinum by air = pneumomediastinum. Do NOT confuse with normal thymic sail sign.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/spinnaker-sail-sign',
          tags: ['XR', 'chest', 'neonatal', 'pneumomediastinum', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-014',
        front: {
          question: 'What is congenital diaphragmatic hernia (CDH) and what are its key associations?',
        },
        back: {
          answer: 'Herniation of abdominal contents into the thorax through a posterior defect (Bochdalek); most commonly left-sided; associated with pulmonary hypoplasia, bowel malrotation (95%), neural tube defects, CHD, Turner syndrome, Trisomy 21',
          explanation: 'CDH presents as a thoracic mass with mediastinal shift at birth. The herniated bowel is initially fluid-filled and appears solid, then fills with air postnatally. Right-sided CDH with liver herniation is rare and has a poor prognosis. The primary complication is pulmonary hypoplasia from mass effect in utero.',
          keyFact: 'Bochdalek = back = posterior left-sided CDH (most common). Bowel in left chest + mediastinal shift = CDH until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/congenital-diaphragmatic-hernia',
          tags: ['XR', 'chest', 'neonatal', 'congenital', 'abdomen'],
        },
      },
      {
        id: 'peds-chest-015',
        front: {
          question: 'What is Swyer-James-MacLeod syndrome and what triggers it?',
        },
        back: {
          answer: 'Acquired unilateral hyperlucent lung with volume loss, small hilum, and diminished vascularity; caused by post-infectious bronchiolitis obliterans syndrome (BOS), classically triggered by adenovirus or Mycoplasma pneumoniae',
          explanation: 'Swyer-James-MacLeod results from abnormal pulmonary development following BOS in childhood, leading to a hyperlucent, small-volume lung. Key radiographic feature: small ipsilateral hilum and diminished vascular markings on the hyperlucent side. This is NOT caused by RSV bronchiolitis — it requires BOS, typically from adenovirus or Mycoplasma.',
          keyFact: 'Swyer-James = unilateral hyperlucent small lung. Caused by post-BOS (adenovirus/Mycoplasma), NOT RSV. Small ipsilateral hilum distinguishes from pneumothorax.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/swyer-james-syndrome',
          tags: ['XR', 'CT', 'chest', 'infection', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-016',
        front: {
          question: 'What is round pneumonia and in what age group does it occur?',
        },
        back: {
          answer: 'Round pulmonary opacity with well-defined margins mimicking a mass; most commonly caused by Streptococcus pneumoniae; seen in children under 8 years old',
          explanation: 'Round pneumonia occurs in young children because the pores of Kohn (alveolar interalveolar connections) and canals of Lambert are underdeveloped, limiting the normal spread of infection, which then grows in an expansile spherical fashion. The round shape resolves with antibiotic treatment. Follow-up imaging is important to ensure resolution.',
          keyFact: 'Round mass in lung of child <8 years = round pneumonia (S. pneumoniae). Pores of Kohn undeveloped → spherical spread. Always follow to resolution.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/round-pneumonia',
          tags: ['XR', 'chest', 'infection', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-017',
        front: {
          question: 'What are the UVC and UAC tip positions on neonatal radiograph, and what complication arises from a UVC in the portal vein?',
        },
        back: {
          answer: 'UVC: suprahepatic IVC below right atrium. UAC: T6–T10 (high) or L3–L5 (low). UVC in portal vein → portal vein thrombosis and hepatic infarct',
          explanation: 'The UVC courses from the umbilical vein up through the left portal vein, ductus venosus, and hepatic vein to the IVC. The UAC initially descends into the internal iliac artery before ascending the aorta. High UAC avoids the celiac, SMA, and renal arteries. Low UAC sits below the renal arteries. A UVC inadvertently positioned in a portal vein branch risks hepatic injury.',
          keyFact: 'UVC goes UP (straight up on frontal view). UAC goes DOWN first then UP. Portal vein UVC = hepatic infarct risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/umbilical-catheters',
          tags: ['XR', 'chest', 'neonatal', 'lines', 'pediatric'],
        },
      },
      {
        id: 'peds-chest-018',
        front: {
          question: 'What is bronchiolitis, what is its most common cause, and what are its radiographic features?',
        },
        back: {
          answer: 'Infection of the lower respiratory tract most commonly caused by RSV; radiograph shows hyperinflated lungs with peribronchial cuffing, increased perihilar markings, and scattered atelectasis',
          explanation: 'Bronchiolitis is the leading cause of infant hospitalization in the US and primarily affects children under 5. It is a clinical diagnosis with variable radiographic findings. Key imaging task is to exclude bacterial superinfection (focal consolidation, pleural effusion). Bronchiolitis should not be confused with bronchiolitis obliterans syndrome, which is a completely different entity.',
          keyFact: 'RSV = most common cause of bronchiolitis. Hyperinflation + peribronchial cuffing. Exclude focal consolidation (bacterial pneumonia).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bronchiolitis',
          tags: ['XR', 'chest', 'infection', 'pediatric', 'airways'],
        },
      },
    ],
  },

  {
    id: 'peds-cardiac',
    label: 'Pediatric Cardiac',
    cards: [
      {
        id: 'peds-cardiac-001',
        front: {
          question: 'What are the three key questions to ask when evaluating congenital heart disease on a plain film?',
        },
        back: {
          answer: '(1) Cyanotic or acyanotic? (2) Is pulmonary vascularity increased or decreased? (3) Is the heart enlarged?',
          explanation: 'Increased pulmonary venous flow (indistinct peripheral vessels) = left heart obstruction. Increased pulmonary arterial flow / shunt vascularity (large distinct peripheral vessels) = left-to-right shunt. Decreased pulmonary vascularity = right ventricular outflow tract obstruction, always cyanotic. Cardiomegaly is present in most cyanotic lesions with normal or increased vascularity.',
          keyFact: 'Decreased pulmonary vascularity = always cyanotic. Increased vascularity can be venous (pulmonary edema pattern) or arterial (shunt/distinct peripheral vessels).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/congenital-heart-disease-an-approach',
          tags: ['XR', 'cardiac', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-cardiac-002',
        front: {
          question: 'What is tetralogy of Fallot (TOF) and what are its classic radiographic findings?',
        },
        back: {
          answer: 'VSD + overriding aorta + pulmonary stenosis/atresia + RV hypertrophy; chest radiograph shows boot-shaped heart (coeur en sabot) with decreased pulmonary vascularity',
          explanation: 'TOF is the most common cyanotic CHD after the first week of life. The boot shape results from RVH (upturned apex) and concavity at the main pulmonary artery (from pulmonary stenosis). A right-sided aortic arch is seen in 25%. Patients are cyanotic with decreased pulmonary blood flow. In infants with severe PS, a systemic-to-pulmonary shunt (Blalock-Taussig) maintains pulmonary flow.',
          keyFact: 'TOF = 4 defects. Boot-shaped heart + decreased vascularity + cyanosis. Right arch in 25%. The most common cyanotic CHD after the newborn period.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tetralogy-of-fallot',
          tags: ['XR', 'cardiac', 'congenital', 'cyanotic', 'pediatric'],
        },
      },
      {
        id: 'peds-cardiac-003',
        front: {
          question: 'What are the "T" lesions of cyanotic CHD with usually increased pulmonary vascularity?',
        },
        back: {
          answer: 'Transposition of the great arteries (D-TGA), Truncus arteriosus, Tricuspid atresia, Total anomalous pulmonary venous return (TAPVR), Single (Tingle) ventricle',
          explanation: 'These five "T" lesions are cyanotic with usually increased or variable pulmonary vascularity. D-TGA has an egg-on-a-string appearance from the narrow mediastinum. TAPVR below the diaphragm causes severe pulmonary venous obstruction (snowman sign is for supracardiac TAPVR). Tricuspid atresia has variable vascularity depending on associated VSD and pulmonary anatomy.',
          keyFact: 'Cyanotic + increased vascularity = the "T" lesions. D-TGA = egg-on-string. TAPVR supracardiac = snowman sign. All require urgent intervention.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transposition-of-the-great-arteries',
          tags: ['XR', 'cardiac', 'congenital', 'cyanotic', 'pediatric'],
        },
      },
      {
        id: 'peds-cardiac-004',
        front: {
          question: 'What is Ebstein anomaly, and what are its radiographic features?',
        },
        back: {
          answer: 'Downward displacement of the tricuspid valve into the RV with atrialization of the RV; chest radiograph shows massive cardiomegaly (box-shaped heart) with decreased pulmonary vascularity',
          explanation: 'Ebstein anomaly results from failure of normal delamination of the tricuspid leaflets. The right atrium becomes massively dilated as the functional RV is tiny, causing massive cardiomegaly. Pulmonary vascularity is decreased because inadequate right-sided output reduces pulmonary flow. Associated with maternal lithium use. ASD is commonly present.',
          keyFact: 'Ebstein = massive cardiomegaly + decreased vascularity + cyanosis. Box-shaped heart. Maternal lithium association.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ebstein-anomaly',
          tags: ['XR', 'cardiac', 'congenital', 'cyanotic', 'pediatric'],
        },
      },
      {
        id: 'peds-cardiac-005',
        front: {
          question: 'What left-to-right shunts cause increased pulmonary arterial vascularity, and which one has the strongest association with Down syndrome?',
        },
        back: {
          answer: 'ASD, VSD, PDA, and endocardial cushion defect (ECD/AV canal defect); ECD has the strongest association with Down syndrome',
          explanation: 'Left-to-right shunts cause shunt vascularity (large distinct peripheral pulmonary vessels) and typically present in childhood rather than infancy. ECD (also called AV septal defect or AV canal defect) involves defects in both the atrial and ventricular septa plus the AV valves, and is strongly associated with trisomy 21. ASD alone is the most common CHD in adults.',
          keyFact: 'AV canal defect (ECD) = Down syndrome. All L→R shunts cause shunt vascularity. VSDs are the most common CHD overall in children.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/atrioventricular-septal-defect',
          tags: ['XR', 'cardiac', 'congenital', 'acyanotic', 'pediatric'],
        },
      },
      {
        id: 'peds-cardiac-006',
        front: {
          question: 'What are the three-stage surgical repairs for hypoplastic left heart syndrome?',
        },
        back: {
          answer: 'Stage 1: Norwood procedure (neonatal); Stage 2: Glenn shunt (superior cavopulmonary anastomosis, 4–6 months); Stage 3: Fontan completion (18–36 months)',
          explanation: 'HLH involves underdevelopment of the entire left heart. Survival depends on a PDA allowing right-to-left shunting to supply the systemic circulation. The Norwood creates a neo-aorta from the pulmonary trunk and establishes systemic-to-pulmonary flow via a shunt. The Glenn diverts superior venous return directly to the pulmonary arteries. The Fontan diverts all systemic venous blood to the lungs passively.',
          keyFact: 'HLH surgical stages: Norwood → Glenn → Fontan. Post-Glenn patients can develop pulmonary AVMs due to lack of hepatic factor in pulmonary flow.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hypoplastic-left-heart-syndrome',
          tags: ['cardiac', 'congenital', 'surgery', 'pediatric'],
        },
      },
      {
        id: 'peds-cardiac-007',
        front: {
          question: 'What is D-transposition of the great arteries (D-TGA), and what is the classic radiographic appearance?',
        },
        back: {
          answer: 'Aorta arises from the morphologic RV and PA from the morphologic LV; "egg-on-a-string" appearance due to parallel great arteries creating a narrow superior mediastinum',
          explanation: 'D-TGA creates parallel, rather than crossed, great vessels, resulting in a narrow pedicle and the egg-on-a-string radiographic appearance. It causes cyanosis at birth because the pulmonary and systemic circulations are in parallel. An obligate mixing lesion (ASD, VSD, or PDA) is required for survival. Balloon atrial septostomy (Rashkind procedure) is performed urgently, followed by the arterial switch operation.',
          keyFact: 'D-TGA = parallel great vessels → narrow mediastinum → egg-on-string. Most common cyanotic CHD in the NEONATAL period. Needs urgent Rashkind septostomy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transposition-of-the-great-arteries',
          tags: ['XR', 'cardiac', 'congenital', 'cyanotic', 'pediatric'],
        },
      },
    ],
  },

  {
    id: 'peds-abdomen',
    label: 'Pediatric Abdomen',
    cards: [
      {
        id: 'peds-abdomen-001',
        front: {
          question: 'What is the classic presentation and imaging appearance of hypertrophic pyloric stenosis (HPS), and what are the diagnostic ultrasound criteria?',
        },
        back: {
          answer: 'Non-bilious projectile vomiting in a 2–8 week old male; ultrasound shows pyloric muscle thickness ≥4 mm and pyloric channel length ≥17 mm (cervix sign, target sign)',
          explanation: 'HPS is the most common cause of gastric outlet obstruction in infants. The thickened pyloric muscle produces a target (or donut) sign on transverse ultrasound and a cervix sign on longitudinal views. The "olive" is the palpable hypertrophied pylorus. Treatment is surgical pyloromyotomy (Ramstedt procedure). Metabolic consequence: hypochloremic, hypokalemic metabolic alkalosis from vomiting gastric HCl.',
          keyFact: 'HPS: non-bilious vomiting + 3–6 week old male. US: pyloric muscle ≥4 mm thick, channel ≥17 mm long. Metabolic alkalosis from HCl loss.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hypertrophic-pyloric-stenosis',
          tags: ['ultrasound', 'abdomen', 'neonatal', 'gastric', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-002',
        front: {
          question: 'What is midgut malrotation and what is the most feared acute complication?',
        },
        back: {
          answer: 'Failure of normal 270° counterclockwise rotation of the midgut around the SMA; most feared complication is midgut volvulus (SMA twisting causing ischemia and bowel necrosis)',
          explanation: 'Normal rotation places the ligament of Treitz to the left of midline at the level of the duodenojejunal junction, and the cecum in the RLQ. Malrotation leaves a narrow mesenteric root vulnerable to volvulus around the SMA. UGI series is the imaging study of choice; the corkscrew sign of a spiraling duodenum indicates volvulus. The whirlpool sign on Doppler ultrasound shows mesenteric vessels wrapping around the SMA.',
          keyFact: 'Malrotation + bilious vomiting in a neonate = volvulus until proven otherwise — surgical emergency. UGI: duodenum fails to cross midline or ligament of Treitz is displaced.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/intestinal-malrotation',
          tags: ['fluoroscopy', 'ultrasound', 'abdomen', 'neonatal', 'volvulus'],
        },
      },
      {
        id: 'peds-abdomen-003',
        front: {
          question: 'What are the classic imaging features of intussusception and what is the treatment?',
        },
        back: {
          answer: 'Target/crescent sign on ultrasound; soft tissue mass on plain film; ileocolic is most common; treatment is air or contrast enema reduction',
          explanation: 'Intussusception is the most common cause of bowel obstruction in children 6 months to 3 years old. The intussusceptum (inner telescoping bowel) within the intussuscipiens (outer bowel) produces the target sign on ultrasound and a crescent of fat trapped within the intussusception. Lead points (e.g., Meckel diverticulum, polyp, lymphoma) are found in >2 year olds and require surgery if present.',
          keyFact: 'Ileocolic intussusception: peak 6 months–3 years. Target sign on US. Air enema is diagnostic and therapeutic. Lead point in older child → surgery.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/intussusception-paediatric',
          tags: ['ultrasound', 'fluoroscopy', 'abdomen', 'obstruction', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-004',
        front: {
          question: 'What are the radiographic findings of meconium ileus, and what disease is it almost always associated with?',
        },
        back: {
          answer: 'Distal small bowel obstruction with absent or bubbly/ground-glass appearance of meconium in the RLQ (Neuhauser sign); almost universally associated with cystic fibrosis',
          explanation: 'Meconium ileus is the earliest presentation of CF and is caused by inspissated meconium obstructing the distal ileum. The bubbly RLQ pattern (Neuhauser sign) results from air mixed with meconium. It causes a microcolon on contrast enema. Unlike meconium plug syndrome, meconium ileus is always associated with CF and always causes a microcolon.',
          keyFact: 'Meconium ileus = CF + microcolon. Meconium plug (small left colon) = NOT CF, self-limited. Neuhauser sign = bubbly RLQ meconium.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meconium-ileus',
          tags: ['XR', 'abdomen', 'neonatal', 'cystic fibrosis', 'obstruction'],
        },
      },
      {
        id: 'peds-abdomen-005',
        front: {
          question: 'How do you differentiate meconium ileus from meconium plug syndrome (small left colon syndrome) on imaging?',
        },
        back: {
          answer: 'Meconium ileus: microcolon + dilated distal ileum + associated with CF. Meconium plug: normal caliber colon with transitional zone in the left colon/splenic flexure + NOT associated with CF + self-limited',
          explanation: 'Both cause neonatal bowel obstruction but have very different implications. Meconium ileus produces microcolon and is pathognomonic of CF. Meconium plug syndrome involves plugs of normal meconium in the left colon and is self-limited; treatment is a contrast enema which is both diagnostic and therapeutic. Unlike meconium ileus, there is no microcolon.',
          keyFact: 'Microcolon = meconium ileus = CF. Normal colon + left-sided obstruction = meconium plug = NOT CF. Contrast enema treats meconium plug.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meconium-plug-syndrome',
          tags: ['fluoroscopy', 'abdomen', 'neonatal', 'obstruction', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-006',
        front: {
          question: 'What is the Weigert-Meyer rule for duplicated collecting systems?',
        },
        back: {
          answer: 'Upper pole ureter inserts ectopically (inferomedially) → prone to obstruction (often from ureterocele). Lower pole ureter inserts orthotopically → prone to reflux',
          explanation: 'In a complete duplex system, the two ureters follow opposite fates. The upper pole ureter violates the Weigert-Meyer rule by inserting lower and more medially than expected, often with a ureterocele causing obstruction. The lower pole ureter has a shorter intramural course and thus a less competent anti-reflux mechanism. The drooping lily sign on VCUG is the compressed lower moiety collecting system displaced by an obstructed, non-opacified upper moiety.',
          keyFact: 'Weigert-Meyer: Upper = obstructs (ureterocele), Lower = refluxes. Drooping lily sign = VCUG finding of duplex system obstruction.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/weigert-meyer-rule',
          tags: ['ultrasound', 'fluoroscopy', 'genitourinary', 'anatomy', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-007',
        front: {
          question: 'What is the most common congenital anomaly of the GU tract and the most common cause of hydronephrosis in children?',
        },
        back: {
          answer: 'Ureteropelvic junction (UPJ) obstruction',
          explanation: 'UPJ obstruction causes dilation of the renal pelvis and calyces with a normal-caliber distal ureter. Causes include intrinsic ureteral narrowing, an aperistaltic segment, or an aberrant crossing vessel. It is the most common cystic abdominal finding in neonates. Imaging shows hydronephrosis without hydroureter; a diuretic renogram (MAG3) quantifies functional obstruction.',
          keyFact: 'UPJ obstruction = hydronephrosis + normal distal ureter. Most common GU anomaly in neonates. MAG3 diuretic renogram assesses functional significance.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ureteropelvic-junction-obstruction',
          tags: ['ultrasound', 'genitourinary', 'pediatric', 'obstruction'],
        },
      },
      {
        id: 'peds-abdomen-008',
        front: {
          question: 'What is the VUR grading system, and which grades are treated medically vs. surgically?',
        },
        back: {
          answer: 'Grade I: ureter only; Grade II: calyces, no dilation; Grade III: blunting of calyces; Grade IV: moderate ureteral dilation; Grade V: severe tortuous dilation. Grades I–III: medical (prophylactic antibiotics); higher grades: surgical',
          explanation: 'VUR is graded on VCUG. Grades I–II have 90% spontaneous resolution rate. DMSA scintigraphy is the gold standard for detecting cortical scarring (photopenia). RNC is the most sensitive nuclear study for VUR and is used for follow-up after anatomy is established by VCUG. VCUG is preferred initially as it shows anatomy and evaluates the urethra.',
          keyFact: 'VUR I–III = antibiotics (90% of I–II resolve spontaneously). VUR IV–V = surgery. DMSA = gold standard for cortical scarring. VCUG = initial anatomic evaluation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/vesicoureteric-reflux',
          tags: ['fluoroscopy', 'nuclear medicine', 'genitourinary', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-009',
        front: {
          question: 'What is posterior urethral valves (PUV), and what is the classic ultrasound appearance?',
        },
        back: {
          answer: 'Most common cause of congenital bladder outlet obstruction in boys; ultrasound shows dilated posterior (prostatic) urethra + dilated trabeculated bladder + bilateral hydronephrosis = "keyhole" sign',
          explanation: 'PUV is caused by an obstructing web in the posterior urethra at the verumontanum. The dilated posterior urethra and bladder together produce the keyhole appearance on ultrasound. It occurs exclusively in boys. The main imaging differential is prune belly syndrome, where the entire urethra (not just prostatic portion) is dilated. Calyceal rupture can occur, causing urinomas.',
          keyFact: 'PUV = boys only. Keyhole sign = dilated prostatic urethra + bladder. Entire dilated ureter = prune belly (not just prostatic dilation).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-urethral-valves',
          tags: ['ultrasound', 'genitourinary', 'pediatric', 'congenital'],
        },
      },
      {
        id: 'peds-abdomen-010',
        front: {
          question: 'What is multicystic dysplastic kidney (MCDK) and how is it distinguished from hydronephrosis on imaging?',
        },
        back: {
          answer: 'Multiple non-communicating cysts replacing renal parenchyma; cysts do NOT communicate (vs. hydronephrosis where cystic spaces are continuous); DMSA shows no cortical uptake',
          explanation: 'MCDK is the most common neonatal cystic renal mass. It results from abnormal induction of the metanephric blastema. The key distinguishing feature from hydronephrosis is that MCDK cysts do not connect to each other or to a central renal pelvis. DMSA scan shows no cortical function in MCDK versus faint uptake in hydronephrosis. MCDK gradually involutes and the risk of Wilms tumor is controversial but considered low.',
          keyFact: 'MCDK cysts = do NOT communicate. DMSA = zero uptake. Gradually involutes. Compare: hydronephrosis cysts = connect to each other + to pelvis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/multicystic-dysplastic-kidney',
          tags: ['ultrasound', 'nuclear medicine', 'genitourinary', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-011',
        front: {
          question: 'What is Hirschsprung disease, how is it diagnosed, and where is the transition zone most commonly located?',
        },
        back: {
          answer: 'Absence of ganglion cells (aganglionosis) in the bowel wall; barium enema shows transition zone (cone-shaped narrowing) between aganglionic segment and dilated proximal bowel; most commonly at the rectosigmoid junction',
          explanation: 'Hirschsprung disease causes functional obstruction due to absent Meissner and Auerbach plexuses. The aganglionic segment is narrow; the proximal normally-innervated bowel is dilated. Diagnosis requires rectal biopsy. The transition zone is at the rectosigmoid in 75% of cases but may be more proximal (long segment) or even involve the entire colon. A plain film finding of absent rectal gas in a neonate is suggestive.',
          keyFact: 'Hirschsprung: aganglionic narrow segment + dilated proximal bowel. Transition zone at rectosigmoid (75%). Contrast enema shows cone-shaped transition. Biopsy confirms.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hirschsprung-disease',
          tags: ['fluoroscopy', 'abdomen', 'neonatal', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-012',
        front: {
          question: 'What are the imaging findings of biliary atresia on ultrasound and hepatobiliary scintigraphy, and what is its treatment?',
        },
        back: {
          answer: 'US: triangular cord sign at porta hepatis, absent/atretic gallbladder, enlarged hepatic artery (HA:PV ratio >0.45). HIDA: normal hepatic uptake but NO bowel excretion at 24h. Treatment: Kasai portoenterostomy before 3 months',
          explanation: 'Biliary atresia is the most surgically important cause of neonatal conjugated jaundice (25% of cases). HIDA scan distinguishes biliary atresia from neonatal hepatitis: atresia shows no bowel excretion; hepatitis shows delayed but eventual bowel excretion. Biliary atresia is ruled OUT if any GI excretion is seen. Associated with polysplenia and trisomy 18. The Kasai procedure must be performed before 3 months for best outcome.',
          keyFact: 'Biliary atresia: HIDA shows NO bowel activity at 24h. Any bowel excretion = RULES OUT atresia. Kasai before 3 months = critical. Triangular cord sign on US.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/biliary-atresia',
          tags: ['ultrasound', 'nuclear medicine', 'abdomen', 'neonatal', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-013',
        front: {
          question: 'What is the most common primary liver tumor of early childhood (<5 years), and what tumor marker is characteristic?',
        },
        back: {
          answer: 'Hepatoblastoma; AFP is markedly elevated (often >1000 ng/mL)',
          explanation: 'Hepatoblastoma is the third most common childhood abdominal malignancy overall (after neuroblastoma and Wilms). It is associated with Beckwith-Wiedemann syndrome, FAP, fetal alcohol syndrome, and Wilms tumor. A classic radiographic finding is RUQ calcification. Cross-sectional imaging shows a large solid heterogeneous hepatic mass with propensity for portal vein and hepatic vein invasion.',
          keyFact: 'Hepatoblastoma = most common liver tumor <5 years. AFP markedly elevated. Associated with Beckwith-Wiedemann + FAP. RUQ calcification classic.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatoblastoma',
          tags: ['CT', 'ultrasound', 'abdomen', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-014',
        front: {
          question: 'What is the most common childhood renal malignancy, its peak age, classic imaging appearance, and staging system?',
        },
        back: {
          answer: 'Wilms tumor (nephroblastoma); peak 3–5 years; heterogeneous intrarenal mass with claw sign, ± calcification, ± venous extension; NWTS staging I–V (V = bilateral)',
          explanation: 'Wilms is the most common renal malignancy of childhood, arising from persistent metanephric blastema. Key imaging: claw sign indicates renal origin; venous extension in 5–10%. Bone metastases suggest clear cell sarcoma rather than Wilms. Associated syndromes: Beckwith-Wiedemann (q6 month screening US), WAGR syndrome (Wilms, aniridia, GU anomalies, intellectual disability), horseshoe kidney (2× risk), trisomy 18.',
          keyFact: 'Wilms peak 3–5 years. Claw sign = intrarenal. NWTS Stage V = bilateral (5–10%). Bone mets → think clear cell sarcoma instead. WAGR and Beckwith-Wiedemann are screening indications.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/wilms-tumour',
          tags: ['CT', 'ultrasound', 'abdomen', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-015',
        front: {
          question: 'How do you distinguish Wilms tumor from neuroblastoma on imaging?',
        },
        back: {
          answer: 'Wilms: intrarenal (claw sign), displaces vessels, rare calcification, confined to kidney early. Neuroblastoma: extrarenal (adrenal/paraspinal), ENCASES vessels, calcification in ~50%, crosses midline, MIBG positive',
          explanation: 'This is one of the most clinically important pediatric radiology distinctions. Neuroblastoma arises from neural crest cells (adrenal gland most common, then extra-adrenal retroperitoneum), whereas Wilms arises from the kidney itself. Vessel encasement vs. displacement is the key CT finding. Neuroblastoma can cross midline; Wilms typically does not.',
          keyFact: 'Wilms = DISPLACES vessels + intrarenal. Neuroblastoma = ENCASES vessels + extrarenal + calcification in 50% + MIBG positive + crosses midline.',
          differentials: [
            { dx: 'Wilms tumor — intrarenal, displaces vessels, claw sign' },
            { dx: 'Neuroblastoma — extrarenal/adrenal, encases vessels, calcification' },
            { dx: 'Mesoblastic nephroma — neonates <1 year, Wilms mimic' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/neuroblastoma',
          tags: ['CT', 'abdomen', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-016',
        front: {
          question: 'What is neuroblastoma, its most common site of origin, peak age, and classic nuclear medicine study used?',
        },
        back: {
          answer: 'Primitive neural crest cell malignancy; most common site is the adrenal gland (followed by extra-adrenal retroperitoneum and posterior mediastinum); mean age 2 years; I-123 MIBG scintigraphy',
          explanation: 'Neuroblastoma is the most common extracranial solid malignancy of childhood and the most common abdominal malignancy in neonates. It is a catecholamine-secreting tumor positive on MIBG. Metastases involve bone marrow (permeative lytic), and classic presentation is intracranial subdural mass from marrow. Opsoclonus-myoclonus (dancing eyes, dancing feet) is a paraneoplastic syndrome, more common with thoracic primaries.',
          keyFact: 'Neuroblastoma = most common extracranial solid malignancy of childhood. MIBG positive. Opsoclonus-myoclonus = paraneoplastic. Stage IVS (skin+liver+marrow in <18 months) = good prognosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neuroblastoma',
          tags: ['CT', 'MRI', 'nuclear medicine', 'abdomen', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-017',
        front: {
          question: 'What is nephroblastomatosis and why is it clinically important?',
        },
        back: {
          answer: 'Persistence of metanephric blastema (nephrogenic rests) beyond 36 weeks gestation; clinically important as a precursor to Wilms tumor — present in 30% of Wilms nephrectomies and ALL bilateral Wilms cases',
          explanation: 'Nephroblastomatosis appears as bilateral nephromegaly with homogeneous nonenhancing masses or a peripheral hypodense rind on CT. Worrisome features during screening indicating possible Wilms transformation: rapid growth, inhomogeneity, increased sphericity, and enhancement. The distinction between peripheral (most common) and central nephrogenic rests matters because central type more frequently progresses to Wilms.',
          keyFact: 'Nephroblastomatosis = Wilms precursor. Present in ALL bilateral Wilms. Screen with US every 3 months. Worrisome: rapid growth, enhancing, inhomogeneous.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/nephroblastomatosis',
          tags: ['CT', 'ultrasound', 'genitourinary', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-018',
        front: {
          question: 'What is the typical age distribution for pediatric liver masses (hepatic tumors)?',
        },
        back: {
          answer: '0–1 year: Infantile hemangioma, mesenchymal hamartoma. 0–5 years: Hepatoblastoma (AFP elevated). >5 years: HCC (AFP elevated), undifferentiated embryonal sarcoma (ages 6–10, AFP normal). Any age: metastases (Wilms, neuroblastoma)',
          explanation: 'Age stratification is the most useful initial approach to pediatric liver masses. Infantile hemangioma is the most common vascular hepatic tumor in children <1 year and can cause CHF; it is GLUT-1 positive and involutes spontaneously. Mesenchymal hamartoma presents as a multicystic mass with 80% diagnosed by age 2 — AFP not elevated. Undifferentiated embryonal sarcoma (ages 6–10) is aggressive with cystic and solid components.',
          keyFact: 'Age is everything: <1yr → hemangioma/hamartoma. <5yr → hepatoblastoma (AFP very high). 5–10yr → HCC or embryonal sarcoma (AFP normal in sarcoma).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hepatoblastoma',
          tags: ['CT', 'ultrasound', 'abdomen', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-019',
        front: {
          question: 'What is the rhabdoid tumor of the kidney, and what is its classic imaging finding?',
        },
        back: {
          answer: 'Rare aggressive renal malignancy in infants (<1 year); classic finding is subcapsular fluid crescent from renal hemorrhage; worst prognosis of all pediatric renal tumors; may be concurrent with CNS rhabdoid tumor',
          explanation: 'Rhabdoid tumor is associated with INI1/SMARCB1 gene mutations. The subcapsular crescent of fluid from hemorrhage is a distinguishing imaging feature. It can occur in the brain as an atypical teratoid/rhabdoid tumor (AT/RT) simultaneously with the renal lesion. It must be distinguished from neuroblastoma and Wilms, both of which have better prognoses.',
          keyFact: 'Rhabdoid tumor: <1 year, subcapsular hemorrhagic crescent, worst prognosis. Can have synchronous CNS rhabdoid tumor. Check the brain.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rhabdoid-tumour-of-the-kidney',
          tags: ['CT', 'ultrasound', 'genitourinary', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-020',
        front: {
          question: 'What is the spectrum of meconium conditions in neonatal imaging, and which ones are associated with cystic fibrosis?',
        },
        back: {
          answer: 'Meconium ileus: ALWAYS CF + microcolon. Meconium plug syndrome (small left colon): NOT CF + self-limited. DIOS (meconium ileus equivalent): adolescent/adult CF. Meconium peritonitis: in-utero perforation → peritoneal calcification',
          explanation: 'Meconium peritonitis results from in-utero bowel perforation and meconium spillage, causing peritonitis, calcification, and pseudocyst formation — visible on prenatal US and neonatal radiograph. It is not CF-specific but can occur with CF-associated atresia. Meconium aspiration causes respiratory distress in post-term neonates and is unrelated to CF.',
          keyFact: 'Meconium ileus = CF always. Plug syndrome = NOT CF. Peritonitis = in-utero perforation → peritoneal calcification on plain film.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meconium-peritonitis',
          tags: ['XR', 'abdomen', 'neonatal', 'cystic fibrosis', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-021',
        front: {
          question: 'What are the imaging findings and associated syndromes of sacrococcygeal teratoma?',
        },
        back: {
          answer: 'Heterogeneous mass with cystic, solid, and fatty components extending from the midline coccyx; usually apparent prenatally; associated with Currarino syndrome (triad: sacral defect, anorectal malformation, presacral mass)',
          explanation: 'Sacrococcygeal teratoma is the most common neonatal tumor and arises from pluripotent cells near the coccyx. It is usually apparent on prenatal imaging. The characteristic clinical appearance is a skin-covered mass at the midline buttocks. It must be completely resected including the coccyx. Currarino triad is the key associated syndrome.',
          keyFact: 'Sacrococcygeal teratoma: most common neonatal tumor. Heterogeneous mass (cystic + solid + fat). Must resect coccyx. Currarino triad = sacral defect + anorectal malformation + presacral mass.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sacrococcygeal-teratoma',
          tags: ['ultrasound', 'MRI', 'abdomen', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-022',
        front: {
          question: 'What is horseshoe kidney, what prevents its normal ascent, and what are its complications?',
        },
        back: {
          answer: 'Fusion of lower poles; ascent arrested by the inferior mesenteric artery; complications include stones, infection, hydronephrosis, and increased risk of Wilms tumor, TCC, and renal carcinoid; classic association with Turner syndrome',
          explanation: 'Horseshoe kidney is the most common renal fusion anomaly. The fused isthmus is typically located at the level of the L3–L5 vertebrae. The associated increased risk of Wilms tumor (approximately 2× the normal rate) makes horseshoe kidney one of the Wilms screening indications. Patients are also advised against certain contact sports due to risk of injury to the isthmus against the vertebral body.',
          keyFact: 'Horseshoe kidney: lower pole fusion + blocked by IMA. Turner syndrome association. 2× Wilms tumor risk (screen with US). Carcinoid tumors also increased.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/horseshoe-kidney',
          tags: ['CT', 'ultrasound', 'genitourinary', 'anatomy', 'pediatric'],
        },
      },
      {
        id: 'peds-abdomen-023',
        front: {
          question: 'What is Beckwith-Wiedemann syndrome and what imaging surveillance is recommended?',
        },
        back: {
          answer: 'Hemihypertrophy + macroglossia + omphalocele + neonatal hypoglycemia + increased childhood malignancy risk (Wilms, hepatoblastoma); ultrasound screening every 3 months until age 7–8',
          explanation: 'Beckwith-Wiedemann is an overgrowth syndrome caused by dysregulation of chromosome 11p15. The screening protocol with abdominal ultrasound every 3 months is critical to detect Wilms tumor and hepatoblastoma early, when treatment is most effective. AFP screening is also used to detect hepatoblastoma. The omphalocele (not gastroschisis) is a classic neonatal finding.',
          keyFact: 'Beckwith-Wiedemann = hemihypertrophy + macroglossia + omphalocele + hypoglycemia. Screen: abdominal US q3 months + AFP. Risks: Wilms + hepatoblastoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/beckwith-wiedemann-syndrome',
          tags: ['ultrasound', 'abdomen', 'syndrome', 'pediatric'],
        },
      },
    ],
  },

  {
    id: 'peds-msk',
    label: 'Pediatric MSK',
    cards: [
      {
        id: 'peds-msk-001',
        front: {
          question: 'What is the Salter-Harris classification system, which type is most common, and what is the mnemonic?',
        },
        back: {
          answer: 'Classifies physeal fractures by involvement of physis, epiphysis, and metaphysis. Type II (metaphysis) is most common (75%). Mnemonic: SALTR — Slip/Straight across, Above (metaphysis), Lower (epiphysis), Through (both), Ruined (crush)',
          explanation: 'The physis (growth plate) is the weakest part of the developing skeleton. Higher SH type = greater risk of growth disturbance. Type I: physis only — often occult. Type II: physis + metaphysis (most common, 75%). Type III: physis + epiphysis (intra-articular). Type IV: all three (needs surgery). Type V: crushed physis (worst prognosis, often missed acutely).',
          keyFact: 'SH II = most common (75%) = metaphysis fracture. SH V = crushed physis = worst prognosis, often missed acutely. Higher type = more growth arrest risk.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/salter-harris-classification',
          tags: ['XR', 'MSK', 'fracture', 'physis', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-002',
        front: {
          question: 'What is the CRITOE mnemonic for pediatric elbow ossification centers and their approximate ages of appearance?',
        },
        back: {
          answer: 'Capitellum (1 yr), Radial head (3 yr), Internal (medial) epicondyle (5 yr), Trochlea (7 yr), Olecranon (9 yr), External (lateral) epicondyle (11 yr)',
          explanation: 'The pediatric elbow has six ossification centers that appear sequentially. The CRITOE mnemonic is critical for detecting fractures: if an ossification center appears out of sequence, it is likely an avulsed fragment. The medial epicondyle is commonly avulsed and can be entrapped in the elbow joint. If you see a trochlear ossification without a visible medial epicondyle, it is likely entrapped.',
          keyFact: 'CRITOE: 1-3-5-7-9-11 years (odd numbers). Missing medial epicondyle when trochlea is visible = medial epicondyle avulsion entrapped in joint.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/critoe-mnemonic',
          tags: ['XR', 'MSK', 'anatomy', 'elbow', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-003',
        front: {
          question: 'What is the most common pediatric elbow fracture, and what radiographic lines are used to evaluate the elbow?',
        },
        back: {
          answer: 'Supracondylar humerus fracture is most common; evaluated with the anterior humeral line (should pass through middle third of capitellum) and radiocapitellar line (should pass through capitellum on all views)',
          explanation: 'Supracondylar fractures are the most common pediatric elbow fracture, followed by lateral condyle (second most common) and medial epicondyle avulsion (third). The anterior humeral line normally intersects the middle third of the capitellum on the lateral view; deviation suggests a supracondylar fracture. The radiocapitellar line evaluates for radial head dislocation or nursemaid\'s elbow.',
          keyFact: 'Most common peds elbow fx: Supracondylar → Lateral condyle → Medial epicondyle. Anterior humeral line abnormal = supracondylar. Radiocapitellar line abnormal = radial head dislocation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/supracondylar-fracture',
          tags: ['XR', 'MSK', 'fracture', 'elbow', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-004',
        front: {
          question: 'What is the posterior fat pad sign, and what does it indicate in a pediatric elbow?',
        },
        back: {
          answer: 'Visible posterior fat pad on lateral elbow radiograph indicates joint effusion; in a child with acute trauma, this is highly suggestive of an occult fracture (most commonly supracondylar)',
          explanation: 'The posterior fat pad is not normally visible on lateral radiograph; its visibility indicates intra-articular fluid (blood, in the acute trauma setting). The anterior fat pad can be normally visible as a thin lucency, but displacement into a "sail" configuration also suggests effusion. An occult elbow fracture in a child should be assumed when posterior fat pad is present, even if no fracture line is visible.',
          keyFact: 'Posterior fat pad = always abnormal = joint effusion. In a child post-trauma = occult fracture until proven otherwise. Treat as fracture.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/elbow-fat-pad-sign',
          tags: ['XR', 'MSK', 'fracture', 'elbow', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-005',
        front: {
          question: 'What is a toddler\'s fracture?',
        },
        back: {
          answer: 'Non-displaced oblique/spiral fracture of the distal tibial metadiaphysis from a rotational force, in a child learning to walk (9 months – 3 years); may be occult on initial radiograph',
          explanation: 'Toddler\'s fracture is a subtle hairline spiral lucency through the distal tibia. It may only be visible on oblique views or detected by periosteal reaction on repeat films at 7–10 days. Variant toddler\'s fractures can occur in the cuboid and calcaneus. The cuboid/calcaneal variants manifest as faint transverse radiodense bands from superimposition of trabeculae at the fracture site.',
          keyFact: 'Toddler\'s fracture: oblique views increase sensitivity. If clinically suspected but films negative → repeat at 7–10 days for periosteal reaction. Cuboid and calcaneus variants exist.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/toddler-fracture',
          tags: ['XR', 'MSK', 'fracture', 'tibia', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-006',
        front: {
          question: 'What fractures are highly specific for non-accidental trauma (child abuse), and which are the most common (but nonspecific)?',
        },
        back: {
          answer: 'Highly specific: classic metaphyseal lesion (bucket handle/corner fracture), posterior rib fractures, scapula, sternum, spinous process fractures. Most common (nonspecific): linear skull fracture, long bone fractures in ambulatory children',
          explanation: 'The classic metaphyseal lesion (CML) is a circumferential fracture through the peripheral spongiosa of the distal metaphysis (knee/ankle) from violent shaking. Posterior rib fractures result from squeezing injury. A full skeletal survey with bone technique is required in children <2 years with suspected abuse. CMLs heal quickly within 10 days without callus — urgent radiography is essential.',
          keyFact: 'Bucket handle/CML + posterior rib fractures = most specific for NAT. CMLs heal by 10 days (no callus) — image promptly. In children, posterior rib fractures from CPR are rare (unlike adults).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/non-accidental-injury-in-children',
          tags: ['XR', 'MSK', 'fracture', 'child abuse', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-007',
        front: {
          question: 'What is developmental dysplasia of the hip (DDH), and what are the imaging criteria for diagnosis on hip ultrasound?',
        },
        back: {
          answer: 'Incongruent femoral head–acetabular development; US criteria: alpha angle <60° (bony coverage of femoral head by acetabular roof) or <50% femoral head coverage by the bony acetabulum',
          explanation: 'DDH is more common in breech births, firstborn females, oligohydramnios, and those with a positive family history. Hip ultrasound is performed at ≥6 weeks of age (maternal hormones cause ligamentous laxity before this). The alpha angle (formed by bony ilium and acetabular roof) should be >60°. After femoral head ossification (~6 months), radiographs use Hilgenreiner, Perkins, and acetabular angle measurements.',
          keyFact: 'DDH US: alpha angle <60° or <50% femoral head coverage = abnormal. Screen all breech births. Perform US at ≥6 weeks (hormonal laxity before this). Alpha >60° = normal.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/developmental-dysplasia-of-the-hip',
          tags: ['ultrasound', 'MSK', 'hip', 'pediatric', 'congenital'],
        },
      },
      {
        id: 'peds-msk-008',
        front: {
          question: 'What is Legg-Calvé-Perthes (LCP) disease, what is its classic demographic, and what are the early and late imaging findings?',
        },
        back: {
          answer: 'AVN of the capital femoral epiphysis; small Caucasian boys aged 4–8; early: sclerosis of femoral head + decreased bone scan uptake; late: flattening and fragmentation of femoral head + increased bone scan uptake',
          explanation: 'LCP is idiopathic AVN of the capital femoral epiphysis. It is usually unilateral (80%); when bilateral, consider systemic causes (sickle cell, steroids). Early diagnosis is challenging — bone scan shows photopenia before radiographic changes. MRI is sensitive for marrow edema. Late LCP shows the classic crescent sign, head collapse, and secondary OA. Treatment is to maintain femoral head containment within the acetabulum.',
          keyFact: 'LCP: boys 4–8, unilateral (bilateral → think sickle cell or steroids). Early = photopenic on bone scan. Late = collapsed/fragmented femoral head. Klein\'s line abnormal only in SCFE.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/legg-calve-perthes-disease',
          tags: ['XR', 'MRI', 'nuclear medicine', 'MSK', 'hip', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-009',
        front: {
          question: 'What is slipped capital femoral epiphysis (SCFE), and what are the radiographic findings?',
        },
        back: {
          answer: 'Salter I fracture of the proximal femoral physis in obese adolescent boys (10–16 years); radiograph shows asymmetric physeal widening and Klein\'s line fails to intersect the femoral head; best seen on frog-leg lateral',
          explanation: 'SCFE involves the femoral metaphysis slipping superolaterally relative to the epiphysis (or epiphysis slipping posteromedially). Klein\'s line drawn along the lateral femoral neck should normally intersect the femoral head; failure to intersect indicates SCFE. The contralateral hip must always be evaluated as SCFE is frequently bilateral and often asymmetric. MRI identifies "preslip" SCFE (physeal edema without displacement). Treatment: in situ screw fixation.',
          keyFact: 'SCFE: obese adolescent boys. Klein\'s line fails to intersect femoral head on AP. Best seen on frog-leg lateral. Always check bilateral. AVN of femoral head = major complication.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/slipped-capital-femoral-epiphysis',
          tags: ['XR', 'MRI', 'MSK', 'hip', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-010',
        front: {
          question: 'What is the most common cause of acute non-traumatic hip pain in children aged 3–8, and how is it distinguished from septic arthritis?',
        },
        back: {
          answer: 'Transient synovitis (toxic synovitis) is most common; distinguished from septic arthritis by clinical parameters (Kocher criteria: fever, ESR >40, WBC >12, non-weight-bearing) — clinical and lab-based, not reliably by imaging',
          explanation: 'Both transient synovitis and septic arthritis appear identical on ultrasound (joint effusion). The Kocher criteria are used to risk-stratify septic arthritis. Any hip effusion with clinical concern for septic arthritis requires urgent joint aspiration. Septic arthritis is hematogenous from metaphyseal osteomyelitis (S. aureus most common); in infants, transphyseal vessels allow spread to cause epiphysitis.',
          keyFact: 'Transient synovitis vs. septic arthritis: imaging CANNOT reliably distinguish. Use Kocher criteria. All suspected septic joints require URGENT aspiration.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transient-synovitis-of-the-hip',
          tags: ['ultrasound', 'MSK', 'hip', 'infection', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-011',
        front: {
          question: 'Where do osteomyelitis, Ewing sarcoma, and osteosarcoma most commonly arise in the pediatric skeleton?',
        },
        back: {
          answer: 'Osteomyelitis: metaphysis (rich blood supply). Osteosarcoma: metaphysis around the knee (distal femur > proximal tibia). Ewing sarcoma: femoral diaphysis (and flat bones — pelvis)',
          explanation: 'Location is the most useful discriminator. Osteomyelitis seeds the metaphysis via hematogenous spread. Osteosarcoma is the most common primary pediatric bone tumor (peak 15–25 yrs) and favors the metaphysis around the knee with cloud-like osteoid matrix and sunburst/Codman triangle periosteal reaction. Ewing sarcoma (peak 5–20 yrs) favors the diaphysis with permeative pattern and lamellated (onion-skin) periosteal reaction.',
          keyFact: 'Osteosarcoma: metaphysis around knee, cloud-like matrix, sunburst/Codman. Ewing: diaphysis/flat bones, permeative, onion-skin periosteum. Both: can have large soft tissue mass.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteosarcoma',
          tags: ['XR', 'MRI', 'MSK', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-012',
        front: {
          question: 'What are the three clinical subtypes of Langerhans cell histiocytosis (LCH) and the classic bone findings?',
        },
        back: {
          answer: 'Eosinophilic granuloma (osseous, unifocal); Hand-Schüller-Christian (pituitary DI + exophthalmos + lytic skull lesions); Letterer-Siwe (multisystem, infants, worst prognosis). Skull: beveled-edge/punched-out lysis; spine: vertebra plana; long bone: permeative diaphyseal lesion',
          explanation: 'LCH can mimic osteomyelitis clinically and on imaging. In the skull, the beveled-edge appearance results from differential involvement of inner and outer tables. Vertebra plana (complete vertebral body collapse) in a child = LCH until proven otherwise (DDx: lymphoma, osteomyelitis, OI). In long bones, permeative diaphyseal lesions may show aggressive periosteal reaction. Birbeck granules on electron microscopy are pathognomonic.',
          keyFact: 'Vertebra plana in a child = LCH first. Hand-Schüller-Christian: DI + exophthalmos + skull lytic lesions. Birbeck granules on EM. Consider in any patient <30 with a lytic lesion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/langerhans-cell-histiocytosis',
          tags: ['XR', 'MSK', 'tumor', 'pediatric', 'systemic'],
        },
      },
      {
        id: 'peds-msk-013',
        front: {
          question: 'What is achondroplasia and what are its key radiographic findings?',
        },
        back: {
          answer: 'Most common skeletal dysplasia; autosomal dominant (50% spontaneous); rhizomelic dwarfism; key XR findings: narrowing of interpedicular distances in lower lumbar spine, tombstone iliac wings, flat acetabula, posterior vertebral scalloping',
          explanation: 'Achondroplasia results from a FGFR3 gain-of-function mutation. Advanced paternal age is a risk factor. Normal cognitive function and life expectancy. Lumbar stenosis from narrowing interpedicular distances causes characteristic lumbar lordosis. Other features: frontal bossing, midface hypoplasia, trident hands (long 3rd and 4th fingers). Foramen magnum stenosis can cause cervical cord compression.',
          keyFact: 'Achondroplasia: most common skeletal dysplasia, rhizomelic. Tombstone iliac wings + narrowing interpedicular L-spine + posterior scalloping. Normal intelligence.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/achondroplasia',
          tags: ['XR', 'MSK', 'skeletal dysplasia', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-014',
        front: {
          question: 'What is thanatophoric dysplasia and what are its distinguishing radiographic features?',
        },
        back: {
          answer: 'Most common lethal skeletal dysplasia; H-shaped vertebral bodies (platyspondyly), telephone receiver femurs (curved femur), cloverleaf skull, short ribs',
          explanation: 'Thanatophoric dysplasia is caused by FGFR3 mutations (gain-of-function, different from achondroplasia). It is lethal due to severe pulmonary hypoplasia from the short ribs and small thorax. The flattened H-shaped vertebral bodies and dramatically curved telephone receiver femurs are pathognomonic. The cloverleaf skull results from craniosynostosis.',
          keyFact: 'Thanatophoric = most common LETHAL skeletal dysplasia. Telephone receiver femurs + platyspondyly (H-shaped vertebrae) + cloverleaf skull. Contrast: achondroplasia is nonlethal.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/thanatophoric-dysplasia',
          tags: ['XR', 'MSK', 'skeletal dysplasia', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-015',
        front: {
          question: 'What are the radiographic findings of osteogenesis imperfecta (OI) and how is it distinguished from child abuse and rickets?',
        },
        back: {
          answer: 'Multiple fractures + bowed long bones + osteopenia + wormian bones + accordion ribs. OI is the only entity to cause antenatal fractures. Blue sclerae and hearing loss are clinical clues',
          explanation: 'OI results from abnormal type I collagen synthesis. Type II OI is lethal; type I is mildest. The antenatal fracture history distinguishes OI from child abuse and rickets — both rickets and abuse cause postnatal fractures only. Wormian bones (intrasuture ossification centers) are a classic skull finding, also seen in hypothyroidism, cleidocranial dysostosis, and Down syndrome.',
          keyFact: 'OI = only entity with antenatal fractures. Blue sclerae + wormian bones + accordion ribs. Child abuse: no osteopenia, no antenatal. Rickets: no antenatal, metaphyseal fraying.',
          differentials: [
            { dx: 'Osteogenesis imperfecta — antenatal fractures, osteopenia, wormian bones, blue sclerae' },
            { dx: 'Child abuse — no osteopenia, no antenatal, highly specific fracture patterns' },
            { dx: 'Rickets — metaphyseal fraying/cupping, no antenatal fractures' },
          ],
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteogenesis-imperfecta',
          tags: ['XR', 'MSK', 'metabolic', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-016',
        front: {
          question: 'What are the classic radiographic findings of rickets?',
        },
        back: {
          answer: 'Metaphyseal fraying, cupping, and widening; rachitic rosary (anterior cupping of rib costochondral junctions); osteopenia; bowing of long bones. Caused by inadequate vitamin D',
          explanation: 'Rickets affects the zone of provisional calcification (ZPC), causing abnormal physeal development. It does not affect newborns (maternal vitamin D still active). Metaphyseal fraying is earliest; cupping and widening follow. The rachitic rosary (expanded rib ends) is classic on chest radiograph. Oncogenic rickets is a paraneoplastic variant caused by tumor-induced phosphate wasting (hemangiopericytoma, nonossifying fibroma).',
          keyFact: 'Rickets: fraying + cupping + widening of metaphyses. Rachitic rosary on chest XR. Never in newborns (maternal vit D protective). Oncogenic rickets = nonossifying fibroma or hemangiopericytoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rickets',
          tags: ['XR', 'MSK', 'metabolic', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-017',
        front: {
          question: 'What is juvenile idiopathic arthritis (JIA), and what radiographic findings distinguish it from adult RA?',
        },
        back: {
          answer: 'Most common childhood chronic arthropathy; most common subtype: pauciarticular, affecting girls. Unlike adult RA, JIA causes accelerated skeletal maturation, premature physeal fusion, and ANKYLOSIS (especially at wrist CMC joints and cervical spine)',
          explanation: 'JIA is defined as arthritis for >6 weeks in a patient <16 years old, usually RF-negative. The earliest radiographic changes are effusion, soft tissue swelling, and periarticular demineralization. Chronic hyperemia causes accelerated bone growth and premature epiphyseal fusion. Cervical spine ankylosis in JIA mimics Klippel-Feil but lacks segmentation anomalies. Still disease is an acute systemic JIA subtype.',
          keyFact: 'JIA vs. adult RA: JIA gets ankylosis (adult RA doesn\'t). JIA causes accelerated skeletal maturation from synovitis/hyperemia. Cervical spine ankylosis mimics Klippel-Feil.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/juvenile-idiopathic-arthritis',
          tags: ['XR', 'MRI', 'MSK', 'arthritis', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-018',
        front: {
          question: 'What is Blount disease and what is the difference between the infantile and adolescent forms?',
        },
        back: {
          answer: 'Osteochondrosis of the proximal tibial metaphysis causing tibia vara; infantile form (<6 years, bilateral, associated with early walking and obesity); adolescent form (>6 years, unilateral)',
          explanation: 'Blount disease is caused by excessive stress on the medial tibial growth plate. Radiographically, the medial tibial metaphysis shows beaking, sloping, and fragmentation, with progressive varus. The infantile form must be distinguished from physiologic tibial bowing, which is symmetric, involves the entire tibia-fibula unit, and resolves spontaneously. The adolescent form is typically related to obesity.',
          keyFact: 'Blount disease = tibia vara from medial tibial physis failure. Infantile = bilateral + young + obese. Adolescent = unilateral. Distinguish from physiologic bowing (symmetric, self-limited).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/blount-disease',
          tags: ['XR', 'MSK', 'pediatric', 'osteochondrosis'],
        },
      },
      {
        id: 'peds-msk-019',
        front: {
          question: 'What are the pelvic apophyseal avulsion injury sites and their associated muscle attachments?',
        },
        back: {
          answer: 'ASIS = sartorius; AIIS = rectus femoris; Ischial tuberosity = hamstrings; Lesser trochanter = iliopsoas; Greater trochanter = gluteus medius/minimus; Iliac crest = abdominal muscles; Pubic ramus = adductors/gracilis',
          explanation: 'Pelvic apophyseal avulsions occur in athletic adolescents with strong muscles pulling on open apophyses. The apophysis is the weakest link of the myotendinous unit. Acute injuries show a displaced fragment; subacute avulsions can have an aggressive mixed lytic/sclerotic appearance mimicking a tumor. Key teaching point: a lesser trochanter avulsion in an adult (not athlete) is suspicious for pathologic fracture.',
          keyFact: 'AIIS = rectus femoris (kicker/sprinter). Ischial tuberosity = hamstrings (sprinter). Lesser trochanter avulsion in an adult = pathologic fracture (not athletic). Subacute avulsion can mimic tumor.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/avulsion-fractures-of-the-pelvis',
          tags: ['XR', 'MRI', 'MSK', 'pelvis', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-020',
        front: {
          question: 'What are the mucopolysaccharidoses, and what are their key radiographic findings?',
        },
        back: {
          answer: 'Lysosomal storage disorders (Hurler, Hunter, Morquio); key findings: oval vertebral bodies with anterior beaking, thickened ribs/clavicles, Madelung deformity wrists, J-shaped sella, tall flared iliac wings',
          explanation: 'MPS share dysostosis multiplex — the constellation of radiographic findings from enzyme deficiency. Hurler features inferior anterior beaking of vertebrae. Morquio (mnemonic: middle beaking) features beaking at the middle of the vertebral body, atlantoaxial instability, and odontoid hypoplasia — the most common cause of death is C2 cervical myelopathy. Hunter is X-linked (only MPS affecting boys exclusively) and milder than Hurler.',
          keyFact: 'MPS: dysostosis multiplex = anterior vertebral beaking + J-shaped sella + Madelung wrist + tall iliac wings. Morquio = middle vertebral beaking + C1–C2 instability (myelopathy = leading cause of death).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mucopolysaccharidoses',
          tags: ['XR', 'MSK', 'metabolic', 'pediatric', 'syndrome'],
        },
      },
      {
        id: 'peds-msk-021',
        front: {
          question: 'What is osteochondromatosis (multiple hereditary exostoses), and what is the risk of malignant transformation?',
        },
        back: {
          answer: 'Autosomal dominant disorder of multiple osteochondromas growing away from joints at metaphyses; 5–25% risk of malignant transformation to chondrosarcoma (typically low-grade)',
          explanation: 'Multiple hereditary exostoses causes bilateral, symmetric involvement of the distal femur, proximal femur, and proximal tibia. Each osteochondroma shows corticomedullary continuity with the parent bone and points away from the joint. Lesions stop growing at skeletal maturity. Malignant transformation is suggested by growth after skeletal maturity, new pain, or cartilage cap >2 cm on MRI.',
          keyFact: 'Multiple hereditary exostoses: AD, bilateral symmetric. Osteochondromas point away from joint. Malignant transformation 5–25% → chondrosarcoma. Cap >2 cm on MRI = worrisome.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/multiple-osteochondromas',
          tags: ['XR', 'MSK', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-022',
        front: {
          question: 'What is chronic recurrent multifocal osteomyelitis (CRMO) and what syndrome is it associated with?',
        },
        back: {
          answer: 'Non-pyogenic inflammatory disorder mimicking osteomyelitis with migratory multifocal lytic/sclerotic lesions; associated with SAPHO syndrome (Synovitis, Acne, Pustulosis, Hyperostosis, Osteitis)',
          explanation: 'CRMO is a diagnosis of exclusion — there is no abscess, sequestrum, or fistula (which would indicate true infection). It tends to affect lower extremity long bones and the clavicle. Unlike pyogenic osteomyelitis, it does not respond to antibiotics. MRI shows bone marrow edema similar to infection but without soft tissue abscess. Treatment: NSAIDs and bisphosphonates.',
          keyFact: 'CRMO: looks like osteomyelitis but no abscess/sequestrum/fistula. Migratory multifocal lytic+sclerotic lesions. SAPHO syndrome association. Diagnosis of exclusion — needs biopsy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chronic-recurrent-multifocal-osteomyelitis',
          tags: ['MRI', 'MSK', 'infection', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-023',
        front: {
          question: 'What is the Wimberger sign and what condition does it indicate?',
        },
        back: {
          answer: 'Destructive erosion of the medial aspect of the proximal tibial metaphysis; indicates congenital syphilitic osteomyelitis (Treponema pallidum)',
          explanation: 'Congenital syphilis causes a distinctive medial tibial metaphyseal erosion (Wimberger sign). It should be distinguished from the Wimberger ring sign of scurvy (increased periosteal density around ossification centers) — different location, different disease. Syphilis also causes symmetric periosteal reaction in infants. TORCH infections (toxoplasmosis, rubella, CMV, herpes) can also cause bone changes.',
          keyFact: 'Wimberger sign = medial proximal tibial erosion = congenital syphilis. NOT to be confused with Wimberger ring sign of scurvy (dense ring around epiphysis).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/congenital-syphilis-osteitis',
          tags: ['XR', 'MSK', 'infection', 'pediatric'],
        },
      },
      {
        id: 'peds-msk-024',
        front: {
          question: 'What is Maffucci syndrome versus Ollier disease, and what is their risk of malignant transformation?',
        },
        back: {
          answer: 'Ollier disease: multiple enchondromas without other anomalies. Maffucci syndrome: enchondromas + venous malformations (phleboliths on XR). Maffucci > Ollier for chondrosarcoma risk',
          explanation: 'Both are enchondromatoses with asymmetric distribution of intraosseous cartilaginous tumors. The key distinguishing feature is the presence of soft tissue venous malformations in Maffucci, which produce phleboliths visible on radiograph. Both carry increased risk of chondrosarcoma, with Maffucci having a substantially higher risk. Lesions show rings-and-arcs chondroid matrix on imaging.',
          keyFact: 'Maffucci = enchondromas + venous malformations (phleboliths). Ollier = enchondromas alone. Maffucci > Ollier for chondrosarcoma risk. Both asymmetric.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/maffucci-syndrome',
          tags: ['XR', 'MSK', 'tumor', 'syndrome', 'pediatric'],
        },
      },
    ],
  },

  {
    id: 'peds-neuro',
    label: 'Pediatric Neuro',
    cards: [
      {
        id: 'peds-neuro-001',
        front: {
          question: 'What is germinal matrix hemorrhage and what is the grading system?',
        },
        back: {
          answer: 'Hemorrhage in the subependymal germinal matrix in premature infants <32 weeks gestation. Grade I: confined to germinal matrix; Grade II: intraventricular without ventriculomegaly; Grade III: intraventricular with ventriculomegaly; Parenchymal hemorrhagic infarction: can coexist with any grade',
          explanation: 'The germinal matrix regresses after the first trimester and is nearly completely involuted by 32 weeks. It is fragile and susceptible to hemorrhage in premature infants. The previously called "Grade IV" (intraventricular + parenchymal) is now recognized as periventricular hemorrhagic infarction (venous obstruction), not extraventricular extension. Cranial ultrasound is the primary screening modality — performed at the caudothalamic groove.',
          keyFact: 'GMH: premature <32 weeks. Caudothalamic groove = location on US. Grade III (with ventriculomegaly) and parenchymal infarction = worst prognosis. No longer a "Grade IV."',
          radiopaediaUrl: 'https://radiopaedia.org/articles/germinal-matrix-haemorrhage',
          tags: ['ultrasound', 'neuro', 'neonatal', 'hemorrhage', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-002',
        front: {
          question: 'What structures are myelinated at birth, and on which MRI sequence is myelination most apparent?',
        },
        back: {
          answer: 'At birth: posterior limb of internal capsules, middle cerebellar peduncle, ventrolateral thalami, dorsal brainstem, perirolandic regions. Most apparent on T1 (myelin = T1 bright). Mature pattern by age 2 (frontal lobes through adolescence)',
          explanation: 'Myelination follows a predictable pattern: central to peripheral, caudal to cranial, posterior to anterior, and sensory before motor pathways. At birth, T1 is best for myelin (white matter appears bright). After 6 months, T2 becomes more useful as the adult pattern emerges (myelinated white matter becomes dark). Abnormal myelination is assessed by comparing the expected pattern for the patient\'s age.',
          keyFact: 'Myelination: at birth = T1 bright (posterior limb IC, perirolandic, brainstem). After 6 months = assess on T2. Mature by age 2 (except frontal lobes → adolescence).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/myelination-of-the-brain',
          tags: ['MRI', 'neuro', 'neonatal', 'anatomy', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-003',
        front: {
          question: 'What are the key imaging findings of lissencephaly, and what is the difference between Type I and Type II?',
        },
        back: {
          answer: 'Type I (classical): smooth cortex with hour-glass/figure-of-8 cerebral hemispheres, thickened 4-layer cortex. Type II (cobblestone/Walker-Warburg): finely undulating cortex with serrated gray-white junction; associated with cerebellar/ocular anomalies and muscular dystrophy',
          explanation: 'Lissencephaly is a neuronal migration disorder with absent or reduced convolutions. Classic lissencephaly has arrested neuronal migration creating only 4 cortical layers instead of 6. Associated genes include LIS1, DCX, and TUBA1A. Cobblestone lissencephaly (Type II) results from neuronal overmigration through gaps in the pial membrane and has completely different genetics and associations (Walker-Warburg = worst prognosis).',
          keyFact: 'Lissencephaly Type I = smooth cortex + hour-glass shape. Type II (cobblestone/Walker-Warburg) = serrated GM-WM junction + muscular dystrophy + cerebellar anomalies + worst prognosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lissencephaly',
          tags: ['MRI', 'neuro', 'cortical malformation', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-004',
        front: {
          question: 'What is schizencephaly, and what is its key distinguishing feature from porencephaly?',
        },
        back: {
          answer: 'Full-thickness cortical cleft lined by dysplastic gray matter (polymicrogyria), extending from the ependyma to the pia. Distinguished from porencephaly by gray matter lining the cleft; porencephaly is a smooth-walled cavity NOT lined by gray matter',
          explanation: 'Schizencephaly is a cortical malformation, not a destructive lesion. The gray matter lining is critical — it distinguishes schizencephaly from encephalomalacia and surgical cavities. Open-lip: cleft walls separated by CSF. Closed-lip: walls apposed. Associated with septo-optic dysplasia (absent septum pellucidum + optic nerve hypoplasia + pituitary anomalies).',
          keyFact: 'Schizencephaly = cortical cleft lined by gray matter. Gray matter lining = KEY distinguishing feature. Associated with septo-optic dysplasia. Open-lip > closed-lip for neurologic deficits.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/schizencephaly',
          tags: ['MRI', 'neuro', 'cortical malformation', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-005',
        front: {
          question: 'What is holoprosencephaly, what are its three subtypes, and what are the associated facial anomalies?',
        },
        back: {
          answer: 'Failure of forebrain division. Alobar (most severe): monoventricle + dorsal cyst, no interhemispheric fissure. Semilobar: partial posterior separation. Lobar (mildest): only rostral frontal fusion. Associated: hypotelorism, midline megaincisor, azygous ACA',
          explanation: 'The principle "the brain predicts the face" summarizes that the severity of facial midline anomalies correlates with the severity of holoprosencephaly. Alobar holoprosencephaly is the most severe with a single monoventricle communicating with a dorsal cyst. Trisomy 13 is the most common chromosomal association. A single azygous anterior cerebral artery is a vascular marker.',
          keyFact: 'Holoprosencephaly: alobar (worst) = monoventricle + dorsal cyst. "Brain predicts the face" — hypotelorism + megaincisor. Trisomy 13 most common association. Azygous ACA.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/holoprosencephaly',
          tags: ['MRI', 'neuro', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-006',
        front: {
          question: 'What is Chiari I malformation, what are the diagnostic criteria, and what is its main complication?',
        },
        back: {
          answer: 'Inferior displacement of cerebellar tonsils >5 mm (single tonsil) or >3 mm (both) below foramen magnum; most common complication = cervical syringomyelia; pointed tonsils + syrinx = confident diagnosis',
          explanation: 'Isolated tonsillar ectopia in an asymptomatic patient is termed "borderline tonsillar ectopia." A definitive Chiari I diagnosis requires the herniation threshold PLUS associated findings: pointed tonsil configuration, crowding of the posterior fossa, and/or complications (cervical syrinx, hydrocephalus). Syringomyelia in Chiari I does NOT communicate with the fourth ventricle. Treatment: posterior fossa decompression.',
          keyFact: 'Chiari I: tonsils >5mm (1 tonsil) or >3mm (both) below FM. Syrinx does NOT communicate with 4th ventricle. Pointed tonsils + syrinx = confident Chiari I. Decompression treats syrinx.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chiari-i-malformation',
          tags: ['MRI', 'neuro', 'posterior fossa', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-007',
        front: {
          question: 'What is Chiari II malformation and what is it always associated with?',
        },
        back: {
          answer: 'Herniation of cerebellar vermis, tonsils, and medulla through foramen magnum with tectal beaking; ALWAYS associated with lumbar myelomeningocele; 80–90% have hydrocephalus',
          explanation: 'Chiari II results from low craniospinal pressure difference due to CSF egress through the open spinal defect. Primary finding: inferior herniation of hindbrain through foramen magnum. Associated supratentorial anomalies include corpus callosal dysgenesis, heterotopias, and sulcation abnormalities. The tectal beaking is pathognomonic. The fourth ventricle is low, small, and elongated.',
          keyFact: 'Chiari II = ALWAYS has myelomeningocele (lumbar). Tectal beaking pathognomonic. 80–90% need VP shunt for hydrocephalus. Completely different from Chiari I.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chiari-ii-malformation',
          tags: ['MRI', 'neuro', 'posterior fossa', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-008',
        front: {
          question: 'What is the classic Dandy-Walker malformation and what are its imaging findings?',
        },
        back: {
          answer: 'Hypoplasia/absence of cerebellar vermis + hypoplastic cerebellar hemispheres + large cystic fourth ventricle in enlarged posterior fossa + torcular-lambdoid inversion (torcular above lambdoid suture)',
          explanation: 'Dandy-Walker results from fourth ventricular outflow obstruction in utero, causing cyst-like dilation of the fourth ventricle. The enlarged posterior fossa with high-riding tentorium pushes the torcular herophili (confluence of transverse + straight sinuses) above the lambdoid suture — torcular-lambdoid inversion. Most patients have hydrocephalus. The classic triad: vermian hypoplasia + enlarged 4th ventricle + enlarged posterior fossa.',
          keyFact: 'Dandy-Walker: absent/hypoplastic vermis + enlarged cystic 4th ventricle + high tentorium + torcular-lambdoid inversion. Most have hydrocephalus. Posterior fossa is enlarged.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/dandy-walker-malformation',
          tags: ['MRI', 'neuro', 'posterior fossa', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-009',
        front: {
          question: 'What are the imaging features of neurofibromatosis type 1 (NF1) and what chromosome is affected?',
        },
        back: {
          answer: 'Chromosome 17. CNS: T2 UBOs (unidentified bright objects, myelin vacuolization); optic nerve glioma; brainstem glioma; juvenile pilocytic astrocytoma. Bone: sphenoid wing dysplasia, posterior vertebral scalloping, tibial bowing. Peripheral: plexiform neurofibromas (target sign)',
          explanation: 'NF1 is the most common phakomatosis. UBOs are seen in >90% of children 4–12 years and fade in adults. The target sign (T2 hypointense center from fibrous core) is seen in both neurofibromas and schwannomas. Optic nerve glioma occurs in 15% of NF1 patients; 50% of optic gliomas are NF1-associated. Malignant PNST occurs in 5% of plexiform neurofibromas.',
          keyFact: 'NF1: chromosome 17, AD (50% sporadic). UBOs = T2 bright foci (myelin vacuolization) in children, fade in adults. Optic glioma most common intracranial tumor. Plexiform neurofibroma = target sign.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neurofibromatosis-type-1',
          tags: ['MRI', 'neuro', 'phakomatosis', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-010',
        front: {
          question: 'What is the MISME mnemonic for NF2 and what chromosome is involved?',
        },
        back: {
          answer: 'MISME: Multiple Inherited Schwannomas, Meningiomas, and Ependymomas; chromosome 22; bilateral vestibular schwannomas are pathognomonic of NF2',
          explanation: 'NF2 is completely unrelated to NF1 despite its name — neurofibromas are NOT a component. Bilateral vestibular schwannomas are diagnostic of NF2 and present with bilateral hearing loss. Unlike NF1, skin manifestations (café au lait spots) are minimal or absent. NF2 is about 10× less common than NF1.',
          keyFact: 'NF2 = bilateral vestibular schwannomas = pathognomonic. Chromosome 22. MISME (schwannomas, meningiomas, ependymomas). No neurofibromas. No UBOs.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neurofibromatosis-type-2',
          tags: ['MRI', 'neuro', 'phakomatosis', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-011',
        front: {
          question: 'What are the imaging findings of Sturge-Weber syndrome and what is the underlying pathophysiology?',
        },
        back: {
          answer: 'Failure of regression of embryonic cephalic venous plexus → leptomeningeal venous angiomatosis → cortical atrophy + subcortical calcification (CT) + pial enhancement + choroid plexus enlargement (MRI). Port-wine stain in V1 distribution',
          explanation: 'Sturge-Weber is sporadic (not hereditary) caused by a somatic GNAQ mutation. The port-wine stain involves the forehead/upper eyelid (V1). The vascular anomaly causes chronic cortical ischemia. CT is best for calcification (which develops with age). Post-contrast MRI shows pial enhancement in the affected hemisphere. Choroid plexus on the affected side is enlarged from compensatory hypertrophy.',
          keyFact: 'Sturge-Weber: port-wine stain (V1) + cortical calcification + pial enhancement + ipsilateral choroid plexus enlargement. CT best for Ca++. Sporadic mutation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sturge-weber-syndrome',
          tags: ['CT', 'MRI', 'neuro', 'phakomatosis', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-012',
        front: {
          question: 'What are the neuroimaging and extracranial manifestations of tuberous sclerosis?',
        },
        back: {
          answer: 'CNS: cortical/subcortical tubers (T2 hyperintense), subependymal nodules, subependymal giant cell astrocytoma (SEGA) at foramen of Monro. Extra-CNS: renal AMLs, cardiac rhabdomyoma, pulmonary LAM',
          explanation: 'Tuberous sclerosis is an autosomal dominant hamartomatous disorder. SEGA develops in 15% of patients and appears as an enlarging/newly enhancing subependymal nodule at the foramen of Monro. It can cause obstructive hydrocephalus. Cardiac rhabdomyoma is a common neonatal finding and typically involutes. The classic clinical triad (adenoma sebaceum, seizures, intellectual disability) is not always present.',
          keyFact: 'Tuberous sclerosis: tubers + subependymal nodules → SEGA at foramen of Monro (obstructive hydrocephalus). Cardiac rhabdomyoma (neonates). Renal AMLs. Pulmonary LAM (women).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tuberous-sclerosis',
          tags: ['MRI', 'neuro', 'phakomatosis', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-013',
        front: {
          question: 'What is agenesis of the corpus callosum and what secondary brain changes result from it?',
        },
        back: {
          answer: 'Colpocephaly (dilated occipital horns), parallel orientation of lateral ventricles, widely spaced ventricles, Probst bundles indenting medial ventricles, high-riding third ventricle, midline lipoma or interhemispheric cyst',
          explanation: 'The corpus callosum develops from anterior to posterior. The most common partial agenesis involves absence of the splenium. Probst bundles are axons that would have formed the corpus callosum but instead run parallel to the interhemispheric fissure, indenting the medial walls of the lateral ventricles. Colpocephaly results from decreased white matter volume posteriorly. Midline lipomas are T1-bright, susceptibility artifact on gradient echo.',
          keyFact: 'Corpus callosum agenesis: colpocephaly + parallel ventricles + Probst bundles + high 3rd ventricle. Forms anterior first → partial agenesis usually lacks splenium.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/agenesis-of-the-corpus-callosum',
          tags: ['MRI', 'neuro', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-014',
        front: {
          question: 'What is isolated discitis in children, and how does it differ from discitis/osteomyelitis in adults?',
        },
        back: {
          answer: 'In children, infection begins IN the disc (due to direct disc blood vessels); in adults, infection starts in the vertebral endplates and secondarily involves the disc. Typical: <4 year old with back pain after URI. Most common: lumbar spine',
          explanation: 'Pediatric discs have direct blood vessels (which involute in adulthood), allowing hematogenous seeding. Lumbar spine is most common in young children; thoracic in pre-teens. Radiographic findings (disc narrowing, endplate irregularity) may be subtle or absent early. MRI is the key modality: disc space narrowing + marrow edema of two adjacent vertebral bodies + possible epidural extension.',
          keyFact: 'Discitis in children: infection starts IN the disc (direct vascular supply). MRI: narrow disc + adjacent endplate edema + enhancement. Compare: adults → infection starts at endplates.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/discitis',
          tags: ['MRI', 'neuro', 'spine', 'infection', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-015',
        front: {
          question: 'What is the "molar tooth" sign and what syndrome does it indicate?',
        },
        back: {
          answer: 'Axial MRI configuration of the midbrain resembling a molar tooth, caused by deep cerebellar fissures and horizontal superior cerebellar peduncles; indicates Joubert syndrome and related disorders (JSRD)',
          explanation: 'Joubert syndrome features aplasia/hypoplasia of the cerebellar vermis with dysplastic cerebellar tissue, producing the molar tooth sign on axial MRI. Unlike Dandy-Walker, there is no large posterior fossa cyst and hydrocephalus is uncommon. Clinically: hypotonia, developmental delay, ataxia, abnormal eye movements, and potential renal/retinal anomalies.',
          keyFact: 'Molar tooth sign = Joubert syndrome. No large posterior fossa cyst (unlike Dandy-Walker). Hypotonia + ataxia + eye movement abnormalities. Vermian aplasia/hypoplasia.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/joubert-syndrome',
          tags: ['MRI', 'neuro', 'posterior fossa', 'pediatric'],
        },
      },
      {
        id: 'peds-neuro-016',
        front: {
          question: 'What pediatric brain tumors are associated with each location: posterior fossa vs. supratentorial, and which is most common overall?',
        },
        back: {
          answer: 'Posterior fossa (most common in children): pilocytic astrocytoma (most common overall), medulloblastoma, brainstem glioma, ependymoma. Supratentorial: craniopharyngioma (suprasellar), PNET, DNET, ganglioglioma. Overall most common pediatric brain tumor: pilocytic astrocytoma',
          explanation: 'In children, 60–70% of brain tumors arise in the posterior fossa (opposite of adults). The most common pediatric brain tumor overall is pilocytic astrocytoma (typically cerebellar, with cyst + enhancing mural nodule). Medulloblastoma is the most common malignant pediatric brain tumor and arises from the vermis (fourth ventricle obstruction → hydrocephalus). Craniopharyngioma is the most common suprasellar tumor in children.',
          keyFact: 'Kids: 60% posterior fossa tumors. Most common overall = pilocytic astrocytoma (cyst + mural nodule). Most common malignant = medulloblastoma (vermis → 4th ventricle). Most common suprasellar = craniopharyngioma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pilocytic-astrocytoma',
          tags: ['MRI', 'neuro', 'tumor', 'pediatric'],
        },
      },
    ],
  },

  {
    id: 'peds-congenital',
    label: 'Congenital & Syndromic',
    cards: [
      {
        id: 'peds-congenital-001',
        front: {
          question: 'What is VACTERL association and what are its components?',
        },
        back: {
          answer: 'Vertebral anomalies, Anorectal malformations, Cardiac defects, Tracheo-Esophageal fistula/Esophageal atresia, Renal anomalies, Limb defects (preaxial, radial ray)',
          explanation: 'VACTERL is a non-random association of congenital anomalies. The most common combination is TEF/EA (85% of cases have the most common Type C: proximal EA + distal TEF). Vertebral anomalies include hemivertebrae and butterfly vertebrae. Renal anomalies include unilateral renal agenesis. Limb defects typically affect the radial ray (radial aplasia, thumb anomalies). Cardiac defects are present in ~75% (VSD most common).',
          keyFact: 'VACTERL: non-random association. TEF Type C most common (proximal EA + distal TEF). Finding one component mandates searching for others. Radial ray limb defects.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/vacterl-association',
          tags: ['XR', 'congenital', 'syndrome', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-002',
        front: {
          question: 'What are the types of tracheoesophageal fistula (TEF), which is most common, and what is the classic radiographic finding?',
        },
        back: {
          answer: 'Type C (most common, 85%): proximal esophageal atresia + distal TEF. Classic radiograph: coiled nasogastric tube in the proximal esophageal pouch + air in the stomach (via distal TEF). "H-type" (Type E): fistula without atresia',
          explanation: 'In Type C TEF, the proximal esophagus ends blindly (dilated pouch) and there is a fistulous communication between the trachea and the distal esophagus. The coiled NG tube demonstrates the blind pouch. Presence of gastric air confirms a distal fistula. Absence of gastric air suggests pure EA (Type A) without a distal fistula. H-type (Type E) presents later in life with recurrent aspiration pneumonia.',
          keyFact: 'Type C TEF (85%): coiled NG tube in pouch + air in stomach. No gastric air = pure atresia (Type A). H-type = no atresia, presents with recurrent aspiration. Associated with VACTERL.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/oesophageal-atresia-and-tracheo-oesophageal-fistula',
          tags: ['XR', 'congenital', 'chest', 'neonatal'],
        },
      },
      {
        id: 'peds-congenital-003',
        front: {
          question: 'What is CHARGE syndrome and what does the acronym stand for?',
        },
        back: {
          answer: 'Coloboma (gap in iris/retina), Heart defects, Atresia of choanae, Retardation of development, Genitourinary anomalies, Ear anomalies',
          explanation: 'CHARGE is caused by CHD7 gene mutations. Choanal atresia is the most surgically urgent component — bilateral choanal atresia presents as respiratory distress in a neonate who only breathes comfortably when crying (obligate nasal breathers). CT of the nasopharynx confirms choanal atresia (osseous 30%, membranous <1%, mixed 70%). CHARGE accounts for the majority of choanal atresia cases.',
          keyFact: 'CHARGE: Coloboma-Heart-Atresia choanae-Retardation-GU-Ear. CHD7 mutation. Choanal atresia: mixed (70%) > osseous (30%) > membranous (<1%). Bilateral = respiratory emergency.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/charge-syndrome',
          tags: ['CT', 'congenital', 'syndrome', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-004',
        front: {
          question: 'What are the imaging findings of Down syndrome (Trisomy 21)?',
        },
        back: {
          answer: 'Cardiac: AV canal defect (ECD, most common). Airway: subglottic stenosis. Spine: atlantoaxial instability (C1–C2 instability). Abdomen: duodenal atresia (double bubble), Hirschsprung disease. Bone: 11 pairs of ribs, hypoplastic middle phalanx of 5th finger, wide iliac wings',
          explanation: 'Trisomy 21 has a broad range of imaging manifestations. The most important cardiac anomaly is the AV canal (endocardial cushion defect). Atlantoaxial instability requires screening before contact sports or surgery. Duodenal atresia is classically associated and produces the double bubble sign (dilated stomach + dilated proximal duodenum). Hirschsprung is present in ~5%.',
          keyFact: 'Down syndrome: AV canal (cardiac) + double bubble (duodenal atresia) + atlantoaxial instability. 11 pairs of ribs. Wide iliac wings with small acetabular angle.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/down-syndrome',
          tags: ['XR', 'congenital', 'syndrome', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-005',
        front: {
          question: 'What is the double bubble sign and what conditions cause it?',
        },
        back: {
          answer: 'Two gas bubbles on plain film — dilated stomach (left) + dilated duodenum (right) — indicates duodenal obstruction. Most common cause: duodenal atresia (associated with Down syndrome). Other causes: duodenal stenosis, annular pancreas, malrotation with Ladd bands',
          explanation: 'The double bubble sign is a classic neonatal finding indicating complete or near-complete duodenal obstruction. If gas is seen beyond the duodenum, the obstruction is incomplete. Duodenal atresia is strongly associated with trisomy 21 (30% of cases). Annular pancreas and Ladd bands can produce identical imaging. Malrotation/volvulus must always be considered in bilious vomiting and double bubble.',
          keyFact: 'Double bubble = duodenal atresia (Down syndrome in 30%). No gas distal = complete obstruction. Gas distal = incomplete (stenosis, annular pancreas, Ladd bands).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/duodenal-atresia',
          tags: ['XR', 'abdomen', 'neonatal', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-006',
        front: {
          question: 'What is cleidocranial dysostosis and what are its key radiographic findings?',
        },
        back: {
          answer: 'Complete or partial absence of clavicles + wormian bones + delayed skull ossification + widened pubic symphysis; normal intelligence, short stature',
          explanation: 'Cleidocranial dysostosis is an autosomal dominant disorder caused by RUNX2 mutations. The absent clavicles allow patients to approximate their shoulders anteriorly. Wormian bones (intrasuture ossification centers) are nearly universal but nonspecific — also seen in OI, hypothyroidism, rickets, and Down syndrome. Dental anomalies (supernumerary teeth, delayed eruption) are common.',
          keyFact: 'Cleidocranial dysostosis: absent/partial clavicles + wormian bones. Patient can bring shoulders together anteriorly. Wormian bones also in OI, hypothyroidism, Down, rickets.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cleidocranial-dysostosis',
          tags: ['XR', 'MSK', 'congenital', 'syndrome', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-007',
        front: {
          question: 'What is Jeune syndrome (asphyxiating thoracic dystrophy) and what are its key features?',
        },
        back: {
          answer: 'Autosomal recessive disorder with bell-shaped narrow thorax, short ribs with bulbous anterior ends, high-riding handlebar clavicles, trident acetabulum, small flared iliac wings; normal vertebral bodies (distinguishes from thanatophoric)',
          explanation: 'Jeune syndrome causes pulmonary hypoplasia and respiratory distress from the narrow chest. The trident acetabulum with small short flared iliac wings is a characteristic pelvic finding. Unlike thanatophoric dysplasia, vertebral bodies are normal — a key distinguishing feature. Renal cystic disease develops later in survivors.',
          keyFact: 'Jeune = bell chest + short bulbous ribs + normal vertebrae (compare: thanatophoric = flat H-shaped vertebrae). Trident acetabulum. Survivors → renal cystic disease.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/asphyxiating-thoracic-dystrophy',
          tags: ['XR', 'chest', 'congenital', 'syndrome', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-008',
        front: {
          question: 'What is sacral agenesis/caudal regression syndrome and what maternal condition is it associated with?',
        },
        back: {
          answer: 'Partial or complete absence of the sacrum (and sometimes lumbar vertebrae); strongly associated with maternal diabetes mellitus; characteristic "shield-shaped" or "scimitar sacrum" appearance',
          explanation: 'Sacral agenesis is the most common specific spinal cord anomaly in infants of diabetic mothers. The level of sacral absence determines functional impairment. MRI is essential for characterizing the cord terminus (blunt-ended conus is characteristic) and associated cord tethering. The Currarino triad (sacral defect + anorectal malformation + presacral mass) is a related syndrome.',
          keyFact: 'Sacral agenesis: maternal diabetes mellitus is the strongest association. "Scimitar sacrum" or complete absence. MRI shows blunt conus terminus. Screen infants of diabetic mothers.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/caudal-regression-syndrome',
          tags: ['MRI', 'spine', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-009',
        front: {
          question: 'What is imperforate anus and how does imaging determine management?',
        },
        back: {
          answer: 'High lesion (above puborectalis sling): associated with urogenital fistula + VACTERL, requires colostomy then definitive repair + MRI for tethered cord. Low lesion (below puborectalis sling): perineal fistula, single-stage perineal anoplasty',
          explanation: 'The puborectalis sling is the key anatomic landmark. High lesions are associated with GU fistulas (boys: rectourethral or rectovesical; girls: rectovaginal) and need complex repair. Clinical signs: meconium in urine (high in boys) or vagina (high in girls). Infracoccygeal ultrasound is the most accurate imaging method for determining high vs. low lesion. MRI is also used for tethered cord screening.',
          keyFact: 'Imperforate anus: meconium in urine (boys) or vagina (girls) = HIGH lesion = VACTERL association = colostomy first. Low = perineal fistula = single-stage repair.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/anorectal-malformations',
          tags: ['ultrasound', 'MRI', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-010',
        front: {
          question: 'What is Alagille syndrome and what are its hepatic and cardiac findings?',
        },
        back: {
          answer: 'Hereditary cholestasis from paucity of intrahepatic bile ducts (conjugated jaundice) + peripheral pulmonary stenosis (most common cardiac finding); also: butterfly vertebrae, posterior embryotoxon (eye), triangular face',
          explanation: 'Alagille syndrome is caused by JAG1 or NOTCH2 mutations. It enters the differential of neonatal conjugated jaundice alongside biliary atresia. Unlike biliary atresia, HIDA typically shows some bile excretion into the GI tract (reflecting reduced but present bile duct function). Peripheral pulmonary stenosis is the most common cardiac manifestation. The butterfly vertebrae (failure of vertebral fusion) are a classic radiographic finding.',
          keyFact: 'Alagille syndrome: intrahepatic cholestasis (not extrahepatic) + peripheral pulmonic stenosis + butterfly vertebrae. HIDA: reduced but present excretion (unlike biliary atresia).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/alagille-syndrome',
          tags: ['XR', 'nuclear medicine', 'congenital', 'syndrome', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-011',
        front: {
          question: 'What is the Mayer-Rokitansky-Küster-Hauser (MRKH) syndrome and what imaging finding is associated with unilateral renal agenesis?',
        },
        back: {
          answer: 'MRKH: Müllerian duct aplasia causing absent uterus and upper vagina in a genetic female (46,XX). The "lying down adrenal" sign on imaging indicates congenitally absent kidney (adrenal adopts a horizontal disc shape). Unilateral renal agenesis is associated with ipsilateral absent epididymis/vas deferens (males) and unicornuate uterus (females)',
          explanation: 'Renal agenesis and MRKH occur together because the ureteric bud and Müllerian duct development are closely linked. The lying down adrenal sign distinguishes congenital from surgical renal absence — in surgically absent kidneys, the adrenal maintains its normal shape. MRKH presents with primary amenorrhea and absence of the upper vagina and uterus on MRI.',
          keyFact: 'Lying down adrenal = congenital renal agenesis (no ureteric bud stimulus). Upright adrenal = postnephrectomy. Renal agenesis + MRKH (females) or absent vas/epididymis (males).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mayer-rokitansky-kuster-hauser-syndrome',
          tags: ['MRI', 'ultrasound', 'genitourinary', 'congenital', 'syndrome'],
        },
      },
      {
        id: 'peds-congenital-012',
        front: {
          question: 'What is von Hippel-Lindau (VHL) disease and what are its imaging manifestations?',
        },
        back: {
          answer: 'Chromosome 3p deletion (AD); hemangioblastomas (CNS, retinal), RCC (clear cell, up to 30% die from RCC), pheochromocytoma, pancreatic cysts and serous cystadenomas, endolymphatic sac tumors',
          explanation: 'VHL is a tumor suppressor gene syndrome. CNS hemangioblastomas typically occur in the cerebellum and spinal cord as cyst with enhancing mural nodule — mimicking pilocytic astrocytoma. RCC is the leading cause of death; bilateral and multifocal RCC is characteristic. Annual surveillance imaging is essential. Pheochromocytoma in VHL is often bilateral.',
          keyFact: 'VHL: hemangioblastoma (cerebellar cyst + mural nodule) + bilateral RCC (30% mortality) + pheochromocytoma + pancreatic cysts. Chromosome 3p deletion. Annual surveillance.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/von-hippel-lindau-disease',
          tags: ['MRI', 'CT', 'neuro', 'genitourinary', 'syndrome'],
        },
      },
      {
        id: 'peds-congenital-013',
        front: {
          question: 'What are the congenital vascular anomaly categories, and what distinguishes vascular neoplasms from vascular malformations?',
        },
        back: {
          answer: 'Neoplasms (infantile hemangioma, hemangioendothelioma): cell proliferation, GLUT-1 positive, involute. Malformations: disorganized vasculature without cell growth, do NOT involute. High-flow malformations: AVM/AVF. Low-flow: venous malformations, lymphatic malformations',
          explanation: 'The adult "hemangioma" (hepatic cavernous hemangioma) is actually a venous malformation. Infantile hemangioma is a TRUE neoplasm — it proliferates then involutes, is GLUT-1 positive, and responds to propranolol. Kasabach-Merritt syndrome (thrombocytopenia + coagulopathy from vascular tumor) is associated with hemangioendothelioma, not typical infantile hemangioma. Maffucci syndrome hemangiomas are actually venous malformations.',
          keyFact: 'Infantile hemangioma = neoplasm, GLUT-1+, involutes, propranolol works. Adult hepatic "hemangioma" = venous malformation (does NOT involute). Kasabach-Merritt = hemangioendothelioma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/vascular-anomalies',
          tags: ['ultrasound', 'MRI', 'vascular', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-014',
        front: {
          question: 'What is the Juvenile Tillaux fracture and what is the triplane fracture — and why are these unique to adolescents?',
        },
        back: {
          answer: 'The distal tibial physis closes in a specific order (central → anteromedial → anterolateral). Tillaux: Salter III fracture of the anterolateral epiphysis (still open). Triplane: three-plane fracture (sagittal epiphysis, axial physis, coronal metaphysis) = Salter IV equivalent. Both unique to adolescents in the window of physeal closure',
          explanation: 'These fractures exploit the asymmetric physeal closure pattern. In Tillaux, the anterolateral physis remains open while the rest is closed; an external rotation force avulses this open fragment. The triplane fracture has three components visible only on CT — sagittal epiphyseal fracture, axial physeal disruption, and a coronal metaphyseal fracture. Both require CT for characterization and surgical planning if displacement >2 mm.',
          keyFact: 'Tillaux = SH III of anterolateral distal tibial epiphysis (adolescent). Triplane = SH IV equivalent, three fracture planes, needs CT. Both unique to the physeal closure window.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/juvenile-tillaux-fracture',
          tags: ['XR', 'CT', 'MSK', 'fracture', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-015',
        front: {
          question: 'What is autosomal recessive polycystic kidney disease (ARPKD) and how does it differ from ADPKD on imaging?',
        },
        back: {
          answer: 'ARPKD: bilaterally enlarged echogenic kidneys with tiny cysts (too small to resolve) causing diffuse echogenicity on US; fetal presentation → oligohydramnios + pulmonary hypoplasia. Associated hepatic fibrosis (inversely related to renal severity). ADPKD: bilateral enlarged kidneys with VISIBLE macroscopic cysts of varying sizes',
          explanation: 'ARPKD cysts arise from generalized dilation of collecting tubules; these are too small to individually resolve on ultrasound, creating the classic echogenic kidneys. The earlier the presentation, the worse the prognosis. Hepatic fibrosis develops especially when ARPKD manifests later in childhood. ADPKD manifests in adulthood (50% develop some cysts in first decade) with macroscopic cysts + hepatic cysts.',
          keyFact: 'ARPKD: echogenic kidneys (cysts too small to see) + hepatic fibrosis. ADPKD: visible macroscopic cysts. Fetal ARPKD = oligohydramnios + pulmonary hypoplasia.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/autosomal-recessive-polycystic-kidney-disease',
          tags: ['ultrasound', 'genitourinary', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-016',
        front: {
          question: 'What is a ureterocele and how does it appear on imaging?',
        },
        back: {
          answer: 'Focal dilation of the distal ureter within the bladder wall; ultrasound and VCUG: cystic lesion within the bladder (cobra head sign on IVP or US); ectopic ureterocele (almost always with duplex system upper pole) vs. simple ureterocele (orthotopic, single system)',
          explanation: 'Ureteroceles result from failure of proper integration of the distal ureter into the bladder. Ectopic ureteroceles are nearly always associated with the ectopic upper pole ureter of a duplex system and insert inferomedially, often prolapsing into the urethra in girls. The cobra head sign represents the ureterocele as a rounded filling defect with a lucent halo (edematous wall). Treatment: endoscopic puncture or surgical repair.',
          keyFact: 'Ureterocele: cystic filling defect in bladder. Ectopic → always duplex (upper pole). Cobra head sign on IVP. Girls: can prolapse through urethra. Simple → single system.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ureterocele',
          tags: ['ultrasound', 'fluoroscopy', 'genitourinary', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-017',
        front: {
          question: 'What is rhabdomyosarcoma and where are the two most common primary sites in children?',
        },
        back: {
          answer: 'Most common sarcoma of childhood; head and neck (40%) and pelvis (40%, including bladder/vagina/cervix/uterus) together account for ~80% of cases; botryoid variant shows characteristic bunch-of-grapes (polypoid) appearance',
          explanation: 'Rhabdomyosarcoma is an embryonal skeletal muscle tumor. The botryoid variant (intracavitary) forms a polypoid grape-like mass within hollow organs (bladder, vagina). The paratesticular form is another important location. MRI is best for local staging. Metastases: lungs, bone marrow, bone. Treatment: surgery + chemo + radiation.',
          keyFact: 'Rhabdomyosarcoma: most common childhood sarcoma. Head/neck + pelvis = 80% of cases. Botryoid = bunch of grapes in hollow organ (bladder/vagina). MRI for local staging.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rhabdomyosarcoma',
          tags: ['MRI', 'CT', 'tumor', 'congenital', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-018',
        front: {
          question: 'What is the Kasabach-Merritt syndrome and what vascular tumor is it associated with?',
        },
        back: {
          answer: 'Vascular neoplasm (hemangioendothelioma or kaposiform hemangioendothelioma) associated with hemolytic anemia and consumptive thrombocytopenia/coagulopathy; NOT associated with typical infantile hemangioma',
          explanation: 'Kasabach-Merritt syndrome is a life-threatening coagulopathy caused by platelet trapping within a vascular tumor. The responsible tumor is hemangioendothelioma or kaposiform hemangioendothelioma — not ordinary infantile hemangioma. This distinction is clinically crucial because standard hemangioma management (watchful waiting or propranolol) is inadequate for Kasabach-Merritt. Infantile hepatic hemangioma can also cause high-output CHF (in up to 25% of cases).',
          keyFact: 'Kasabach-Merritt = hemangioendothelioma + thrombocytopenia + coagulopathy. NOT ordinary infantile hemangioma. Infantile hemangioma → CHF in 25%, but NOT Kasabach-Merritt.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/kasabach-merritt-syndrome',
          tags: ['ultrasound', 'vascular', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-019',
        front: {
          question: 'What is the Currarino triad and what three findings constitute it?',
        },
        back: {
          answer: 'Sacral defect (scimitar sacrum) + anorectal malformation + presacral mass (anterior meningocele, teratoma, or enteric cyst)',
          explanation: 'The Currarino triad is a familial syndrome caused by MNX1 gene mutations. The scimitar sacrum is a hemisacrum with a sickle-shaped defect. The presacral mass may be a mature teratoma (most common), anterior meningocele, or enteric duplication cyst. Recognition of one component should prompt investigation for the other two. MRI is the best imaging modality for characterizing the presacral mass and meningocele.',
          keyFact: 'Currarino triad: scimitar sacrum + anorectal malformation + presacral mass. MNX1 mutation. MRI to characterize presacral mass. Teratoma most common presacral component.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/currarino-syndrome',
          tags: ['MRI', 'spine', 'congenital', 'syndrome', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-020',
        front: {
          question: 'What are the key radiographic findings of leukemia in children, and what is the classic bone finding?',
        },
        back: {
          answer: 'Metaphyseal lucent bands (most distinctive); also generalized osteopenia, permeative lytic lesions; leukemia is the most common pediatric malignancy with bone changes in >50% of patients',
          explanation: 'The metaphyseal lucent bands in leukemia result from marrow replacement in rapidly growing bone. The differential for lucent metaphyseal bands includes leukemia/lymphoma, neuroblastoma metastases, severe illness, TORCH infections, and endocrinopathies (scurvy, rickets). Periosteal reaction may also occur. Bone scintigraphy can show increased tracer or cold defects from marrow infiltration.',
          keyFact: 'Leukemia: most common pediatric malignancy. Metaphyseal lucent bands = classic. DDx of lucent bands: neuroblastoma mets, TORCH, rickets, scurvy, severe illness.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acute-lymphoblastic-leukaemia',
          tags: ['XR', 'MSK', 'tumor', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-021',
        front: {
          question: 'What are the APGAR score components and their correlation with neonatal imaging needs?',
          hint: 'Not an imaging question per se, but understanding perinatal stress guides imaging workup',
        },
        back: {
          answer: 'Not directly an imaging classification — but severe perinatal asphyxia triggers MRI for hypoxic-ischemic encephalopathy (HIE). Diffusion MRI is most sensitive at 2–5 days; MRS (lactate peak) is early marker; basal ganglia and thalami injured in acute/severe HIE (deep gray matter pattern)',
          explanation: 'HIE from perinatal asphyxia causes two patterns: (1) Profound acute asphyxia: deep gray matter (basal ganglia/thalami) + perirolandic cortex injury — best seen on T1/T2 and DWI. (2) Partial prolonged asphyxia: watershed (parasagittal) cortex and subcortical white matter injury. MRI at 2–5 days is ideal for DWI. Therapeutic hypothermia (cooling) is the current standard treatment and may modify imaging appearance.',
          keyFact: 'HIE imaging: MRI at 2–5 days. Acute severe = basal ganglia/thalami. Partial prolonged = watershed cortex. Lactate on MRS = early marker. Cooling modifies DWI appearance.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hypoxic-ischaemic-encephalopathy',
          tags: ['MRI', 'neuro', 'neonatal', 'pediatric'],
        },
      },
      {
        id: 'peds-congenital-022',
        front: {
          question: 'What are the two most common tarsal coalitions and what is the classic presenting age?',
        },
        back: {
          answer: 'Talocalcaneal and calcaneonavicular (together = 90% of all tarsal coalitions); presents with foot pain in adolescence as the coalition begins to ossify (typically 12–16 years)',
          explanation: 'Tarsal coalitions are abnormal fibrous, cartilaginous, or osseous bridges between normally separate bones. They cause restricted subtalar motion and foot pain. The C-sign is seen on lateral radiograph with talocalcaneal coalition. Calcaneonavicular coalition is best seen on oblique radiograph (anteater nose sign — elongated anterior calcaneal process). CT is best for characterization. Lunotriquetral is the most common carpal coalition.',
          keyFact: 'Tarsal coalition: talocalcaneal + calcaneonavicular = 90%. Presents in adolescence as ossification completes. Anteater sign = calcaneonavicular. C-sign = talocalcaneal. CT for characterization.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tarsal-coalition',
          tags: ['XR', 'CT', 'MSK', 'foot', 'pediatric'],
        },
      },
    ],
  },
]