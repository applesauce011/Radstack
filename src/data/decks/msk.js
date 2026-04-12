// ============================================================
// src/data/decks/msk.js
// MSK Radiology — Royal College / ABR Board Exam Deck
// ============================================================

export const mskSubsections = [
  {
    id: 'msk-shoulder-anatomy',
    label: 'Shoulder Anatomy',
    cards: [ 

      {
        id: 'msk-shoulder-anat-001',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label A?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure A',
          },
          hint: 'Anterior compartment; two-headed muscle',
        },
        back: {
          answer: 'Biceps brachii — short head',
          explanation: 'The short head of the biceps brachii originates from the coracoid process alongside the coracobrachialis. On axial MRI it lies anteromedial to the long head at the level of the proximal humerus. It does not pass through the bicipital groove.',
          keyFact: 'Short head = coracoid origin (with coracobrachialis). Long head = supraglenoid tubercle, travels through bicipital groove.',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'biceps', 'muscle'],
        },
      },

      {
        id: 'msk-shoulder-anat-002',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label B?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure B',
          },
          hint: 'Anterior deltoid; clavicular origin',
        },
        back: {
          answer: 'Deltoid — clavicular part (anterior deltoid)',
          explanation: 'The deltoid has three parts: clavicular (anterior), acromial (middle), and spinal (posterior). The clavicular fibers originate from the anterior border of the lateral clavicle and are visible anterolaterally on axial shoulder MRI.',
          keyFact: 'Deltoid: C (clavicular/anterior) → A (acromial/middle) → S (spinal/posterior) from front to back.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/deltoid-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'deltoid', 'muscle'],
        },
      },

      {
        id: 'msk-shoulder-anat-003',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label C?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure C',
          },
          hint: 'Rotator cuff tendon; anterior insertion',
        },
        back: {
          answer: 'Subscapularis tendon',
          explanation: 'The subscapularis tendon inserts onto the lesser tuberosity of the humerus. It is the only rotator cuff tendon that lies anterior to the glenohumeral joint. On axial MRI it appears as a low-signal band anterior to the humeral head, superficial to the subscapularis muscle.',
          keyFact: 'Subscapularis = only ANTERIOR rotator cuff tendon; inserts lesser tuberosity; best evaluated on axial MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/subscapularis-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'rotator cuff', 'subscapularis', 'tendon'],
        },
      },

      {
        id: 'msk-shoulder-anat-004',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label D?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure D',
          },
          hint: 'Intra-articular tendon within the bicipital groove',
        },
        back: {
          answer: 'Long head of biceps tendon',
          explanation: 'The long head biceps tendon (LHBT) originates from the supraglenoid tubercle and superior labrum, courses intra-articularly over the humeral head, then exits through the bicipital groove between the lesser and greater tuberosities. It is held in the groove by the transverse humeral ligament.',
          keyFact: 'LHBT is intra-articular but extrasynovial; tenosynovitis appears as fluid around the tendon within the groove on axial MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/long-head-of-biceps-tendon',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'biceps', 'tendon', 'bicipital groove'],
        },
      },

      {
        id: 'msk-shoulder-anat-005',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label E?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure E',
          },
          hint: 'Holds the biceps tendon in its groove',
        },
        back: {
          answer: 'Transverse humeral ligament',
          explanation: 'The transverse humeral ligament is a fibrous band spanning the bicipital groove between the lesser and greater tuberosities. It acts as a retinaculum that keeps the LHBT within the groove. Disruption leads to medial subluxation or dislocation of the LHBT, commonly associated with subscapularis tears.',
          keyFact: 'Transverse humeral ligament tear → medial LHBT subluxation/dislocation; almost always associated with subscapularis tendon tear.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/transverse-humeral-ligament',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'bicipital groove', 'ligament', 'biceps'],
        },
      },

      {
        id: 'msk-shoulder-anat-006',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label F?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure F',
          },
          hint: 'Capsuloligamentous structure; seen on superior axial cuts',
        },
        back: {
          answer: 'Superior glenohumeral ligament (SGHL)',
          explanation: 'The SGHL runs from the superior labrum (near the biceps anchor) to the lesser tuberosity, forming the roof of the rotator interval. It is the primary restraint to inferior translation and external rotation with the arm adducted. It also stabilizes the LHBT within the groove.',
          keyFact: 'SGHL = roof of rotator interval; primary stabilizer of LHBT at groove entrance; injury seen with rotator interval tears.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/glenohumeral-ligaments',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'glenohumeral ligament', 'rotator interval', 'ligament'],
        },
      },

      {
        id: 'msk-shoulder-anat-007',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label G?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure G',
          },
          hint: 'Middle portion of a three-part muscle',
        },
        back: {
          answer: 'Deltoid — acromial part (middle deltoid)',
          explanation: 'The acromial part of the deltoid originates from the acromion and is the largest and most powerful of the three parts, responsible for the majority of shoulder abduction. It lies lateral on axial cuts between the clavicular and spinal parts.',
          keyFact: 'Middle/acromial deltoid = primary abductor; denervation (axillary nerve, C5–C6) causes atrophy seen as fatty infiltration on MRI.',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'deltoid', 'muscle'],
        },
      },

      {
        id: 'msk-shoulder-anat-008',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label H?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure H',
          },
          hint: 'Posterior rotator cuff tendon inserting on the greater tuberosity',
        },
        back: {
          answer: 'Infraspinatus tendon',
          explanation: 'The infraspinatus tendon inserts on the middle facet of the greater tuberosity. It is a primary external rotator of the shoulder. On axial MRI it is seen posterolaterally, superficial to the posterior joint capsule. Tears appear as signal abnormality or discontinuity at the footprint.',
          keyFact: 'Infraspinatus = external rotation; middle facet of greater tuberosity; best seen on axial and oblique sagittal MRI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/infraspinatus-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'rotator cuff', 'infraspinatus', 'tendon'],
        },
      },

      {
        id: 'msk-shoulder-anat-009',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label I?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure I',
          },
          hint: 'Posterior deltoid; scapular spine origin',
        },
        back: {
          answer: 'Deltoid — spinal part (posterior deltoid)',
          explanation: 'The spinal part of the deltoid originates from the scapular spine and is responsible for shoulder extension and external rotation. It is the most posterior of the three deltoid parts, seen posterolaterally on axial MRI.',
          keyFact: 'Posterior deltoid = scapular spine origin; extension + external rotation; all three parts innervated by axillary nerve (C5–C6).',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'deltoid', 'muscle'],
        },
      },

      {
        id: 'msk-shoulder-anat-010',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label J?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure J',
          },
          hint: 'Shares coracoid origin with short head biceps; anterior medial compartment',
        },
        back: {
          answer: 'Coracobrachialis (muscle of Casserio)',
          explanation: 'The coracobrachialis originates from the coracoid process alongside the short head of biceps, forming the medial boundary of the anterior compartment. It is a weak arm flexor and adductor. The musculocutaneous nerve penetrates it to reach the anterior compartment.',
          keyFact: 'Musculocutaneous nerve pierces coracobrachialis; coracoid origin shared with short head biceps — both avulse in coracoid fractures.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/coracobrachialis-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'coracobrachialis', 'muscle', 'coracoid'],
        },
      },

      {
        id: 'msk-shoulder-anat-011',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label K?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure K',
          },
          hint: 'Large anterior chest wall muscle; broad fan-shaped',
        },
        back: {
          answer: 'Pectoralis major',
          explanation: 'Pectoralis major has clavicular and sternocostal heads that converge to insert on the lateral lip of the bicipital groove. On axial MRI it is seen as the large anterior chest wall muscle. Tears occur at the musculotendinous junction or humeral insertion, typically during weight-lifting.',
          keyFact: 'Pec major tears: most common at musculotendinous junction; mechanism = eccentric bench press load; MRI shows gap or retraction of fibers.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pectoralis-major-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'pectoralis major', 'muscle', 'chest wall'],
        },
      },

      {
        id: 'msk-shoulder-anat-012',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label L?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure L',
          },
          hint: 'Small muscle directly inferior to clavicle; costoclavicular space',
        },
        back: {
          answer: 'Subclavius muscle',
          explanation: 'The subclavius originates from the first rib and costal cartilage and inserts on the inferior surface of the clavicle. It depresses and protracts the clavicle and provides minor protection to the subclavian vessels. On axial MRI it is seen as a small muscle directly inferior to the clavicle.',
          keyFact: 'Subclavius = 1st rib → undersurface of clavicle; enlargement or calcification can compress the costoclavicular space causing TOS.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/subclavius-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'subclavius', 'muscle', 'clavicle'],
        },
      },

      {
        id: 'msk-shoulder-anat-013',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label M?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure M',
          },
          hint: 'Deep to pectoralis major; medial chest wall; rib origin',
        },
        back: {
          answer: 'Pectoralis minor',
          explanation: 'Pectoralis minor originates from the anterior surfaces of ribs 3–5 and inserts on the coracoid process. It lies deep to pectoralis major and acts to protract and depress the scapula. It forms the anterior wall of the axilla and lies anterior to the brachial plexus and axillary vessels.',
          keyFact: 'Pec minor inserts on coracoid; forms anterior axillary wall; key landmark for brachial plexus and axillary vessel anatomy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pectoralis-minor-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'pectoralis minor', 'muscle', 'coracoid'],
        },
      },

      {
        id: 'msk-shoulder-anat-014',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label N?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure N',
          },
          hint: 'Anterior rotator cuff muscle belly; subscapular fossa',
        },
        back: {
          answer: 'Subscapularis muscle',
          explanation: 'The subscapularis muscle fills the subscapular fossa on the anterior surface of the scapula. It is the largest and strongest rotator cuff muscle and is the primary internal rotator of the shoulder. Its tendon inserts on the lesser tuberosity. Fatty infiltration is graded using the Goutallier classification.',
          keyFact: 'Subscapularis = largest rotator cuff muscle; primary internal rotator; Goutallier grade ≥3 (>50% fat) predicts poor surgical outcome.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/subscapularis-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'subscapularis', 'rotator cuff', 'muscle'],
        },
      },

      {
        id: 'msk-shoulder-anat-015',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label O?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure O',
          },
          hint: 'Lateral chest wall muscle; scapular stabilizer; "boxer\'s muscle"',
        },
        back: {
          answer: 'Serratus anterior',
          explanation: 'Serratus anterior originates from the lateral surfaces of ribs 1–8 and inserts on the medial border of the scapula. It is innervated by the long thoracic nerve (C5–C7). It is the primary protractor of the scapula and rotates it upward during arm elevation. Palsy causes winging of the scapula.',
          keyFact: 'Serratus anterior palsy (long thoracic nerve) = medial scapular winging; "Saturday night palsy" misnomer — more from radical neck dissection or backpack neuritis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/serratus-anterior-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'serratus anterior', 'muscle', 'scapular winging'],
        },
      },

      {
        id: 'msk-shoulder-anat-016',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label P?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure P',
          },
          hint: 'Superior rotator cuff muscle belly; supraspinous fossa',
        },
        back: {
          answer: 'Supraspinatus muscle',
          explanation: 'The supraspinatus muscle belly occupies the supraspinous fossa above the scapular spine. Its tendon passes under the coracoacromial arch to insert on the superior facet of the greater tuberosity. It is the most commonly torn rotator cuff tendon. The critical zone near the insertion is relatively avascular.',
          keyFact: 'Supraspinatus = most commonly torn rotator cuff tendon; critical zone 1 cm proximal to insertion is avascular — site of most full-thickness tears.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/supraspinatus-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'supraspinatus', 'rotator cuff', 'muscle'],
        },
      },

      {
        id: 'msk-shoulder-anat-017',
        front: {
          question: 'Axial shoulder MRI. What structure is indicated by label Q?',
          image: {
            src: '/src/data/decks/images_msk/shoulder01.png',
            alt: 'Axial shoulder MRI with labeled structures',
            caption: 'Identify structure Q',
          },
          hint: 'Posterior rotator cuff muscle belly; infraspinous fossa',
        },
        back: {
          answer: 'Infraspinatus muscle',
          explanation: 'The infraspinatus muscle fills the infraspinous fossa below the scapular spine. It is innervated by the suprascapular nerve (C5–C6) in the spinoglenoid notch. Its tendon inserts on the middle facet of the greater tuberosity. Isolated atrophy suggests suprascapular neuropathy at the spinoglenoid notch.',
          keyFact: 'Isolated infraspinatus atrophy (supraspinatus normal) = spinoglenoid notch compression of suprascapular nerve (e.g. paralabral cyst).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/infraspinatus-muscle',
          tags: ['MRI', 'shoulder', 'anatomy', 'MSK', 'infraspinatus', 'rotator cuff', 'suprascapular nerve'],
        },
      },
 ],
  },

    {
    id: 'msk-knee-anatomy',
    label: 'Knee Anatomy',
    cards: [ 
// ============================================================
// MSK Knee MRI Anatomy — Axial Cross-Section Cards
// Image: /src/data/decks/images_msk/knee01.png
// Labels A–M on axial knee MRI
// ============================================================

{
  id: 'msk-knee-anat-001',
  front: {
    question: 'Identify structure A on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Vastus lateralis',
    explanation: 'The vastus lateralis is the largest of the four quadriceps muscles, lying on the lateral aspect of the thigh. It originates from the greater trochanter and lateral lip of the linea aspera, inserting via the quadriceps tendon into the patella. On axial MRI it appears as a large muscle belly lateral to the femur in the suprapatellar region.',
    keyFact: 'Largest quadriceps muscle; lateral thigh; part of the extensor mechanism.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/vastus-lateralis',
    tags: ['MRI', 'knee', 'anatomy', 'muscle', 'msk', 'quadriceps'],
  },
},

{
  id: 'msk-knee-anat-002',
  front: {
    question: 'Identify structure B on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Iliotibial (IT) band',
    explanation: 'The iliotibial band is a thick longitudinal band of fascia lata running along the lateral thigh and knee, inserting on Gerdy\'s tubercle of the tibia. On axial MRI it appears as a low-signal linear structure at the lateral aspect of the knee. IT band syndrome causes lateral knee pain from repetitive friction over the lateral femoral epicondyle.',
    keyFact: 'IT band inserts on Gerdy\'s tubercle; IT band syndrome = lateral knee pain at 30° flexion.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/iliotibial-band',
    tags: ['MRI', 'knee', 'anatomy', 'fascia', 'msk', 'lateral'],
  },
},

{
  id: 'msk-knee-anat-003',
  front: {
    question: 'Identify structure C on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Biceps femoris (short and long heads)',
    explanation: 'The biceps femoris has two heads: the long head originates from the ischial tuberosity (common hamstring origin with semitendinosus), and the short head from the lateral lip of the linea aspera. Both insert on the fibular head. It is the lateral hamstring and a key landmark in the posterolateral corner of the knee.',
    keyFact: 'Only hamstring with dual heads; inserts on fibular head; lateral hamstring. Short head supplied by common peroneal nerve (not tibial).',
    radiopaediaUrl: 'https://radiopaedia.org/articles/biceps-femoris',
    tags: ['MRI', 'knee', 'anatomy', 'hamstring', 'muscle', 'msk', 'posterolateral'],
  },
},

{
  id: 'msk-knee-anat-004',
  front: {
    question: 'Identify structure D on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Common peroneal nerve',
    explanation: 'The common peroneal (fibular) nerve is a branch of the sciatic nerve, coursing lateral to the popliteal fossa along the medial border of the biceps femoris tendon, then wrapping around the fibular neck. It is the most commonly injured nerve at the knee due to its superficial position at the fibular neck. Injury causes foot drop and loss of dorsiflexion/eversion.',
    keyFact: 'Winds around fibular neck → vulnerable to injury → foot drop. Most commonly injured nerve at the knee.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/common-fibular-nerve',
    tags: ['MRI', 'knee', 'anatomy', 'nerve', 'msk', 'peroneal', 'popliteal fossa'],
  },
},

{
  id: 'msk-knee-anat-005',
  front: {
    question: 'Identify structure E on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Tibial nerve',
    explanation: 'The tibial nerve is the larger terminal branch of the sciatic nerve, running through the center of the popliteal fossa superficial to the popliteal vessels. It supplies the posterior compartment of the leg and plantar foot. On axial MRI it appears as a small round structure in the posterior popliteal fat, most superficial of the neurovascular structures.',
    keyFact: 'Tibial nerve is most superficial in popliteal fossa (superficial to artery and vein); supplies plantar flexors and foot intrinsics.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/tibial-nerve',
    tags: ['MRI', 'knee', 'anatomy', 'nerve', 'msk', 'popliteal fossa', 'tibial'],
  },
},

{
  id: 'msk-knee-anat-006',
  front: {
    question: 'Identify structure F on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Popliteal artery and vein',
    explanation: 'The popliteal artery and vein course through the popliteal fossa between the femoral condyles, deep to the tibial nerve and popliteal vein. The artery is the deepest structure in the fossa, directly posterior to the knee joint capsule, making it vulnerable in posterior knee dislocations. On MRI, the artery appears as a flow-void (dark) structure.',
    keyFact: 'Popliteal artery is deepest structure in fossa — at risk in posterior knee dislocation; always assess vascular status after knee dislocation.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/popliteal-artery',
    tags: ['MRI', 'knee', 'anatomy', 'vascular', 'msk', 'popliteal fossa', 'artery'],
  },
},

{
  id: 'msk-knee-anat-007',
  front: {
    question: 'Identify structure G on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Semitendinosus',
    explanation: 'The semitendinosus is a posteromedial hamstring muscle arising from the ischial tuberosity. It has a long tendon that inserts on the medial surface of the proximal tibia as part of the pes anserinus (with gracilis and sartorius). On axial MRI it appears as a round tendon-like structure in the posteromedial compartment, medial to semimembranosus.',
    keyFact: 'Semitendinosus = medial hamstring; pes anserinus = Sartorius + Gracilis + Semitendinosus (Say Grace before Supper); used as graft for ACL reconstruction.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/semitendinosus',
    tags: ['MRI', 'knee', 'anatomy', 'hamstring', 'muscle', 'msk', 'posteromedial', 'pes anserinus'],
  },
},

{
  id: 'msk-knee-anat-008',
  front: {
    question: 'Identify structure H on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Semimembranosus',
    explanation: 'The semimembranosus is the deeper and more anterior of the two posteromedial hamstrings, identifiable by its flat membranous proximal tendon (hence the name). It inserts primarily on the posterior medial tibial condyle with expansions forming the posteromedial capsule and oblique popliteal ligament. On axial MRI it lies deep to semitendinosus and anterolateral to it.',
    keyFact: 'Semimembranosus lies anterior/deep to semitendinosus on axial MRI; its bursa (between semimembranosus and medial gastrocnemius) is the most common cause of a popliteal (Baker\'s) cyst.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/semimembranosus',
    tags: ['MRI', 'knee', 'anatomy', 'hamstring', 'muscle', 'msk', 'posteromedial'],
  },
},

{
  id: 'msk-knee-anat-009',
  front: {
    question: 'Identify structure I on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Gracilis',
    explanation: 'The gracilis is a long slender muscle of the medial thigh, arising from the inferior pubic ramus and inserting on the medial tibial surface as part of the pes anserinus. It is an adductor of the hip and weak flexor of the knee. On axial MRI it appears as a small round structure on the medial aspect, medial to semitendinosus.',
    keyFact: 'Part of pes anserinus (Say Grace before Supper); gracilis tendon used as autograft for ACL reconstruction alongside semitendinosus.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/gracilis-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'muscle', 'msk', 'medial', 'pes anserinus'],
  },
},

{
  id: 'msk-knee-anat-010',
  front: {
    question: 'Identify structure J on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Sartorius',
    explanation: 'The sartorius is the longest muscle in the body, running obliquely from the ASIS across the anterior thigh to insert on the medial tibia as the most superficial component of the pes anserinus. On axial MRI at the knee level it appears as a small superficial oval structure on the anteromedial aspect. It flexes, abducts, and externally rotates the hip.',
    keyFact: 'Most superficial pes anserinus tendon; longest muscle in body (ASIS → medial tibia). Pes anserinus bursitis: pain/swelling over medial proximal tibia, common in obese patients with OA.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/sartorius-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'muscle', 'msk', 'medial', 'pes anserinus'],
  },
},

{
  id: 'msk-knee-anat-011',
  front: {
    question: 'Identify structure K on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Gastrocnemius medial head',
    explanation: 'The medial head of gastrocnemius originates from the posterior medial femoral condyle and is larger than the lateral head. It forms the posteromedial boundary of the popliteal fossa. The semimembranosus-gastrocnemius bursa lies between it and the semimembranosus tendon, and when distended communicates with the joint to form a Baker\'s cyst.',
    keyFact: 'Baker\'s cyst arises between medial gastrocnemius and semimembranosus tendons — best seen on axial/sagittal MRI in posteromedial popliteal fossa.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/gastrocnemius',
    tags: ['MRI', 'knee', 'anatomy', 'muscle', 'msk', 'posteromedial', 'gastrocnemius'],
  },
},

{
  id: 'msk-knee-anat-012',
  front: {
    question: 'Identify structure L on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures A–M',
    },
  },
  back: {
    answer: 'Vastus medialis',
    explanation: 'The vastus medialis is the most medial of the quadriceps muscles, with its distal fibers (vastus medialis oblique, VMO) running obliquely to insert on the superomedial patella. The VMO is critical for maintaining patellar tracking — weakness leads to lateral patellar maltracking and patellofemoral syndrome. On axial MRI it lies anteromedial to the femur.',
    keyFact: 'VMO (oblique fibers) maintains medial patellar stability; VMO atrophy → lateral patellar tilt/subluxation. Last to recover after knee injury/surgery.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/vastus-medialis',
    tags: ['MRI', 'knee', 'anatomy', 'muscle', 'msk', 'quadriceps', 'medial', 'patella'],
  },
},

{
  id: 'msk-knee-anat-013',
  front: {
    question: 'Identify structure M on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee01.png',
      alt: 'Axial knee MRI with labeled structures AM',
    },
  },
  back: {
    answer: 'Quadriceps femoris tendon',
    explanation: 'The quadriceps tendon is the combined tendon of all four quadriceps muscles (rectus femoris, vastus lateralis, vastus medialis, vastus intermedius), inserting on the superior pole of the patella. It has a trilaminar structure on MRI. Tears typically occur at the patellar insertion in patients >40 years old and are associated with systemic conditions (renal failure, hyperparathyroidism, fluoroquinolone use).',
    keyFact: 'Quadriceps tendon tears: >40 yo, at superior patellar pole, patella baja; vs patellar tendon tears: <40 yo, at inferior pole, patella alta.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/quadriceps-tendon',
    tags: ['MRI', 'knee', 'anatomy', 'tendon', 'msk', 'quadriceps', 'extensor mechanism'],
  },
},

{
  id: 'msk-knee-anat-014',
  front: {
    question: 'Identify structure A on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Soleus',
    explanation: 'The soleus arises from the posterior head and proximal shaft of the fibula and the soleal line of the tibia. It lies deep to the gastrocnemius and together they form the triceps surae. On axial MRI at the level of the proximal tibia/fibula, the soleus is the broad, flat muscle posterior to the tibiofibular interosseous membrane.',
    keyFact: 'Soleus is deep to gastrocnemius; soleal veins are a common site of DVT.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/soleus-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'posterior compartment', 'identification'],
  },
},

{
  id: 'msk-knee-anat-015',
  front: {
    question: 'Identify structure B on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Gastrocnemius — lateral head',
    explanation: 'The lateral head of gastrocnemius originates from the lateral femoral condyle. On axial MRI at the level of the knee joint or proximal leg, it is the posterolateral muscle belly. It is separated from the medial head by a fat plane through which the popliteal vessels and tibial nerve course.',
    keyFact: 'Lateral gastrocnemius origin (lateral femoral condyle) is a common site for the fabella and for periosteal ganglion cysts.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/gastrocnemius-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'posterior compartment', 'identification'],
  },
},

{
  id: 'msk-knee-anat-016',
  front: {
    question: 'Identify structure C on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Popliteal artery and vein',
    explanation: 'The popliteal artery is the deepest (most anterior) neurovascular structure in the popliteal fossa, lying directly against the posterior joint capsule. The popliteal vein is posterior to the artery. This relationship is clinically important as posterior knee dislocations can injure the artery.',
    keyFact: 'Popliteal fossa from superficial to deep: Nerve → Vein → Artery (NVA). Artery is most anterior and most vulnerable in knee dislocation.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/popliteal-artery',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'vascular', 'popliteal fossa', 'identification'],
  },
},

{
  id: 'msk-knee-anat-017',
  front: {
    question: 'Identify structure D on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Tibial nerve',
    explanation: 'The tibial nerve is the most superficial (posterior) neurovascular structure in the popliteal fossa. It runs superficial and lateral to the popliteal vessels before passing deep to the soleus. It supplies all muscles of the posterior leg and plantar foot.',
    keyFact: 'Popliteal fossa from superficial to deep: Nerve → Vein → Artery. The tibial nerve is the larger terminal branch of the sciatic nerve (vs. common peroneal).',
    radiopaediaUrl: 'https://radiopaedia.org/articles/tibial-nerve',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'nerve', 'popliteal fossa', 'identification'],
  },
},

{
  id: 'msk-knee-anat-018',
  front: {
    question: 'Identify structure E on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Plantaris',
    explanation: 'The plantaris is a small, inconstant muscle with a long thin tendon originating from the lateral supracondylar line of the femur. It runs obliquely between the gastrocnemius and soleus before inserting on the calcaneus. On axial MRI it appears as a small oval structure between the lateral gastrocnemius and soleus.',
    keyFact: 'Plantaris tendon rupture ("tennis leg") mimics DVT clinically. Absent in ~7% of people; its tendon is a common autograft source for ligament reconstruction.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/plantaris-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'posterior compartment', 'identification'],
  },
},

{
  id: 'msk-knee-anat-019',
  front: {
    question: 'Identify structure F on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Popliteus',
    explanation: 'The popliteus originates from the lateral femoral condyle and inserts on the posterior tibia above the soleal line. It forms the floor of the popliteal fossa. Its tendon passes through the popliteal hiatus, a gap in the lateral meniscus attachment that should not be mistaken for a meniscal tear.',
    keyFact: 'Popliteus injury is a key marker of posterolateral corner injury. The popliteal hiatus (where the tendon passes) is a normal gap in the lateral meniscus — do not overcall as a tear.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/popliteus-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'posterolateral corner', 'identification'],
  },
},

{
  id: 'msk-knee-anat-020',
  front: {
    question: 'Identify structure G on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Gastrocnemius — medial head',
    explanation: 'The medial head of gastrocnemius originates from the medial femoral condyle and is larger than the lateral head. A bursa between its tendon and the semimembranosus tendon, when distended, forms a Baker\'s (popliteal) cyst.',
    keyFact: 'Baker\'s cyst forms between the medial gastrocnemius tendon and the semimembranosus tendon — posteromedial location is the key to identifying it on MRI.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/gastrocnemius-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'posterior compartment', "baker's cyst", 'identification'],
  },
},

{
  id: 'msk-knee-anat-021',
  front: {
    question: 'Identify structure H on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Semitendinosus tendon',
    explanation: 'The semitendinosus tendon is long and slender, inserting on the medial surface of the proximal tibia as part of the pes anserinus. On axial MRI it appears as a small round low-signal structure in the posteromedial soft tissues, posterior to gracilis and sartorius.',
    keyFact: 'Pes anserinus from anterior to posterior: Sartorius → Gracilis → Semitendinosus ("Say Grace before Tea"). Semitendinosus is commonly harvested for ACL reconstruction.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/semitendinosus-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'hamstring', 'pes anserinus', 'identification'],
  },
},

{
  id: 'msk-knee-anat-022',
  front: {
    question: 'Identify structure I on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Sartorius tendon',
    explanation: 'The sartorius is the longest muscle in the body, originating from the ASIS and inserting via a broad aponeurosis on the medial proximal tibia. It is the most anterior of the pes anserinus tendons, curving anteromedially as a thin low-signal structure on axial MRI.',
    keyFact: 'Pes anserinus order anterior to posterior: Sartorius → Gracilis → Semitendinosus. Pes anserine bursitis causes medial knee pain below the joint line, classically in obese patients with OA.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/sartorius-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'pes anserinus', 'medial knee', 'identification'],
  },
},

{
  id: 'msk-knee-anat-023',
  front: {
    question: 'Identify structure J on this axial knee MRI.',
    image: {
      src: '/src/data/decks/images_msk/knee02.png',
      alt: 'Axial knee MRI with structures labeled A through J',
    },
  },
  back: {
    answer: 'Gracilis tendon',
    explanation: 'The gracilis is a thin strap muscle of the medial thigh (adductor group) inserting on the medial proximal tibia between the sartorius and semitendinosus as part of the pes anserinus. Its tendon is slender and lies between sartorius anteriorly and semitendinosus posteriorly on axial MRI.',
    keyFact: 'Gracilis is the middle pes anserinus tendon (Sartorius → Gracilis → Semitendinosus). Co-harvested with semitendinosus for hamstring-graft ACL reconstruction.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/gracilis-muscle',
    tags: ['MRI', 'knee', 'anatomy', 'msk', 'pes anserinus', 'medial knee', 'identification'],
  },
},

    ]
  },

      {
    id: 'msk-ankle-anatomy',
    label: 'Ankle Anatomy',
    cards: [ 
// ============================================================
// MSK — Ankle MRI Anatomy: Image-Based Identification Cards
// ankle01.png — Axial MRI ankle, structures A–G
// IDs: msk-ankle-anat-001 to msk-ankle-anat-007
// ============================================================

{
  id: 'msk-ankle-anat-001',
  front: {
    question: 'Ankle MRI axial image — identify structure A.',
    image: {
      src: '/src/data/decks/images_msk/ankle01.png',
      alt: 'Axial ankle MRI with labeled structures A–G',
    },
  },
  back: {
    answer: 'Tibialis posterior tendon',
    explanation: 'The tibialis posterior tendon is the most medial and largest of the three medial ankle tendons. It runs posterior to the medial malleolus and inserts primarily onto the navicular tuberosity. It is the most commonly torn tendon in the ankle, causing adult-acquired flatfoot deformity.',
    keyFact: 'Tom, Dick, And Nervous Harry: Tibialis posterior → Flexor Digitorum Longus → Artery/Vein → Nerve → Flexor Hallucis Longus, from anterior to posterior behind the medial malleolus.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/tibialis-posterior-tendon',
    tags: ['MRI', 'ankle', 'anatomy', 'tendon', 'medial', 'msk'],
  },
},

{
  id: 'msk-ankle-anat-002',
  front: {
    question: 'Ankle MRI axial image — identify structure B.',
    image: {
      src: '/src/data/decks/images_msk/ankle01.png',
      alt: 'Axial ankle MRI with labeled structures A–G',
    },
  },
  back: {
    answer: 'Flexor digitorum longus tendon',
    explanation: 'The flexor digitorum longus (FDL) tendon is the middle of the three medial compartment tendons. It lies between tibialis posterior anteriorly and the neurovascular bundle posteriorly. Isolated FDL tears are uncommon and often associated with tibialis posterior pathology.',
    keyFact: 'FDL is the "D" in Tom, Dick, And Nervous Harry — second from anterior in the medial retromalleolar groove.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/flexor-digitorum-longus-tendon-of-foot',
    tags: ['MRI', 'ankle', 'anatomy', 'tendon', 'medial', 'msk'],
  },
},

{
  id: 'msk-ankle-anat-003',
  front: {
    question: 'Ankle MRI axial image — identify structure C.',
    image: {
      src: '/src/data/decks/images_msk/ankle01.png',
      alt: 'Axial ankle MRI with labeled structures A–G',
    },
  },
  back: {
    answer: 'Flexor hallucis longus tendon',
    explanation: 'The flexor hallucis longus (FHL) tendon is the most posterior and lateral of the medial compartment tendons. It runs in a fibro-osseous tunnel between the medial and lateral talar tubercles. FHL tenosynovitis is common in ballet dancers ("dancer\'s tendinitis") and presents with posteromedial ankle pain.',
    keyFact: 'FHL is the most posterior medial tendon ("Harry" in the mnemonic) — runs between the talar tubercles. Stenosing tenosynovitis = classic ballet dancer injury.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/flexor-hallucis-longus-tendon',
    tags: ['MRI', 'ankle', 'anatomy', 'tendon', 'medial', 'msk'],
  },
},

{
  id: 'msk-ankle-anat-004',
  front: {
    question: 'Ankle MRI axial image — identify structure D.',
    image: {
      src: '/src/data/decks/images_msk/ankle01.png',
      alt: 'Axial ankle MRI with labeled structures A–G',
    },
  },
  back: {
    answer: 'Peroneus longus tendon',
    explanation: 'The peroneus longus tendon lies posterior to peroneus brevis at the level of the lateral malleolus, then crosses the plantar foot to insert on the medial cuneiform and base of the first metatarsal. On axial MRI, peroneus longus is typically posterolateral to peroneus brevis in the retromalleolar groove.',
    keyFact: 'Peroneus longus is posterior/lateral to brevis at the fibular groove. Longitudinal split tears of peroneus longus often occur at the peroneal tubercle of the calcaneus.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/peroneus-longus-muscle',
    tags: ['MRI', 'ankle', 'anatomy', 'tendon', 'lateral', 'peroneal', 'msk'],
  },
},

{
  id: 'msk-ankle-anat-005',
  front: {
    question: 'Ankle MRI axial image — identify structure E.',
    image: {
      src: '/src/data/decks/images_msk/ankle01.png',
      alt: 'Axial ankle MRI with labeled structures A–G',
    },
  },
  back: {
    answer: 'Peroneus brevis tendon',
    explanation: 'The peroneus brevis tendon is anteromedial to peroneus longus in the retromalleolar groove and inserts on the base of the 5th metatarsal. It is more commonly torn than peroneus longus, typically showing a C-shaped or split morphology wrapping around the fibula. Peroneus brevis tears are strongly associated with superior peroneal retinaculum tears.',
    keyFact: 'Brevis is anterior/medial to longus at the fibula — inserts on base of 5th MT. C-shaped or split tendon on axial MRI = longitudinal split tear of peroneus brevis.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/peroneus-brevis-muscle',
    tags: ['MRI', 'ankle', 'anatomy', 'tendon', 'lateral', 'peroneal', 'msk'],
  },
},

{
  id: 'msk-ankle-anat-006',
  front: {
    question: 'Ankle MRI axial image — identify structure F.',
    image: {
      src: '/src/data/decks/images_msk/ankle01.png',
      alt: 'Axial ankle MRI with labeled structures A–G',
    },
  },
  back: {
    answer: 'Posterior tibial artery and vein',
    explanation: 'The posterior tibial neurovascular bundle (artery, paired veins, and tibial nerve) runs between the FDL and FHL tendons in the medial compartment. The artery is the "A" in "Tom, Dick, And Nervous Harry." It provides the dominant blood supply to the plantar foot and heel.',
    keyFact: '"And" in Tom, Dick, And Nervous Harry = Artery (posterior tibial) + paired veins, between FDL and FHL. Tarsal tunnel syndrome compresses the tibial nerve here.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-tibial-artery',
    tags: ['MRI', 'ankle', 'anatomy', 'vascular', 'medial', 'msk'],
  },
},

{
  id: 'msk-ankle-anat-007',
  front: {
    question: 'Ankle MRI axial image — identify structure G.',
    image: {
      src: '/src/data/decks/images_msk/ankle01.png',
      alt: 'Axial ankle MRI with labeled structures A–G',
    },
  },
  back: {
    answer: 'Posterior tibial vein',
    explanation: 'The posterior tibial veins (typically paired) accompany the posterior tibial artery in the medial compartment tarsal tunnel. They are identified as low-signal tubular structures flanking the artery on MRI. Deep vein thrombosis of the posterior tibial veins is a recognized cause of medial ankle pain and tarsal tunnel syndrome.',
    keyFact: 'Paired posterior tibial veins bracket the artery in the medial compartment — DVT here can mimic or cause tarsal tunnel syndrome.',
    tags: ['MRI', 'ankle', 'anatomy', 'vascular', 'medial', 'msk'],
  },
},

{
  id: 'msk-ankle-anat-008',
  front: {
    question: 'Name the structure labeled A on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Tibialis posterior tendon',
    explanation: 'The tibialis posterior is the largest and most medial tendon in the posteromedial compartment, immediately posterior to the medial malleolus. It is the most commonly injured ankle tendon. On MRI it should be round and 2× the size of the adjacent FDL. Rupture causes adult-acquired flatfoot deformity.',
    keyFact: 'TP tendon is the most common tendon to rupture at the ankle; look for it medial to FDL — mnemonic "Tom, Dick, AND Very Nervous Harry" (TP, FDL, posterior tibial artery/vein, nerve, FHL).',
    radiopaediaUrl: 'https://radiopaedia.org/articles/tibialis-posterior-tendon',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk'],
  },
},
{
  id: 'msk-ankle-anat-009',
  front: {
    question: 'Name the structure labeled B on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Flexor digitorum longus (FDL) tendon',
    explanation: 'FDL lies in the posteromedial compartment, between tibialis posterior and the neurovascular bundle. It passes behind the medial malleolus and divides to insert into the distal phalanges of digits 2–5. It is the thinnest of the three posteromedial tendons.',
    keyFact: 'Mnemonic for posteromedial order (medial → lateral): "Tom, Dick, AND Very Nervous Harry" — Tibialis posterior, Digitorum longus, posterior tibial Artery, Vein, Nerve, Hallucis longus.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/flexor-digitorum-longus',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk'],
  },
},
{
  id: 'msk-ankle-anat-010',
  front: {
    question: 'Name the structure labeled C on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Flexor hallucis longus (FHL) tendon',
    explanation: 'FHL is the most lateral of the posteromedial tendons, running in a groove on the posterior talus and sustentaculum tali before inserting on the distal phalanx of the great toe. It is the largest posteromedial tendon. FHL tenosynovitis is common in ballet dancers ("dancer\'s tendinitis").',
    keyFact: 'FHL runs in a fibro-osseous tunnel between the medial and lateral talar tubercles; a os trigonum can compress it posteriorly — key association with posterior ankle impingement.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/flexor-hallucis-longus',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk'],
  },
},
{
  id: 'msk-ankle-anat-011',
  front: {
    question: 'Name the structure labeled D on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Plantaris tendon',
    explanation: 'The plantaris is a small, vestigial muscle with a long thin tendon that runs medial to the Achilles between the gastrocnemius and soleus. On MRI it appears as a tiny round low-signal focus anteromedial to the Achilles. It is absent in ~10% of individuals and is commonly harvested for tendon grafts.',
    keyFact: 'Plantaris rupture can mimic a partial Achilles tear clinically — on MRI, look for fluid/hematoma between the Achilles and soleus with an intact Achilles; the plantaris is the culprit.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/plantaris',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk'],
  },
},
{
  id: 'msk-ankle-anat-012',
  front: {
    question: 'Name the structure labeled E on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Achilles tendon',
    explanation: 'The Achilles is the largest and strongest tendon in the body, formed by the gastrocnemius and soleus. It lacks a true synovial sheath (surrounded instead by a paratenon). Normal MRI appearance: uniform low T2 signal, flat or concave anterior margin. The critical zone of relative avascularity is 2–6 cm proximal to insertion.',
    keyFact: 'Achilles tendon rupture most often occurs 2–6 cm proximal to the calcaneal insertion (watershed zone); MRI shows discontinuity, T2 hyperintensity, and tendon thickening or gap.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/achilles-tendon',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk'],
  },
},
{
  id: 'msk-ankle-anat-013',
  front: {
    question: 'Name the structure labeled F on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Peroneus brevis tendon',
    explanation: 'Peroneus brevis lies anterior to peroneus longus in the retromalleolar groove posterior to the lateral malleolus, and inserts on the base of the 5th metatarsal. It is the more medial/anterior of the two peroneal tendons at the level of the lateral malleolus. Brevis tears are more common than longus tears.',
    keyFact: 'Peroneus brevis tears classically appear as a C-shaped or split tendon ("boomerang" sign) wrapping around the peroneus longus on axial MRI — most common site is at the lateral malleolus.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/peroneus-brevis',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk', 'lateral'],
  },
},
{
  id: 'msk-ankle-anat-014',
  front: {
    question: 'Name the structure labeled G on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Peroneus longus tendon',
    explanation: 'Peroneus longus lies posterior to peroneus brevis in the retromalleolar groove at the level of the lateral malleolus, then passes inferior to the peroneal trochlea and under the cuboid to insert on the base of the 1st metatarsal and medial cuneiform. It everts and plantarflexes the foot.',
    keyFact: 'Peroneus longus is the posterior/lateral peroneal tendon at the fibula; it passes under the cuboid — a "os peroneum" (sesamoid in the tendon) that fractures is a clue to a peroneus longus tear.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/peroneus-longus',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk', 'lateral'],
  },
},
{
  id: 'msk-ankle-anat-015',
  front: {
    question: 'Name the structure labeled H on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Extensor digitorum longus (EDL) tendon',
    explanation: 'EDL is in the anterior compartment, lateral to extensor hallucis longus. It passes under the superior and inferior extensor retinacula and inserts via four slips into the dorsal aspects of digits 2–5. On axial MRI it appears as multiple small oval tendons lateral to EHL.',
    keyFact: 'Anterior compartment order (medial → lateral): Tibialis anterior, EHL, EDL, peroneus tertius — anterior tendons rarely tear in isolation; injury usually follows severe ankle trauma or forced plantarflexion.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/extensor-digitorum-longus',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk', 'anterior'],
  },
},
{
  id: 'msk-ankle-anat-016',
  front: {
    question: 'Name the structure labeled I on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Extensor hallucis longus (EHL) tendon',
    explanation: 'EHL lies in the anterior compartment between tibialis anterior (medially) and EDL (laterally). It passes under the extensor retinacula and inserts on the dorsal base of the distal phalanx of the great toe. EHL tenosynovitis is associated with tight footwear and overuse.',
    keyFact: 'EHL is the middle anterior tendon — between tibialis anterior and EDL. Isolated EHL rupture is rare but can occur from lacerations or direct trauma to the dorsum of the foot.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/extensor-hallucis-longus',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk', 'anterior'],
  },
},
{
  id: 'msk-ankle-anat-017',
  front: {
    question: 'Name the structure labeled J on this ankle MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/ankle02.png',
      alt: 'Axial ankle MRI with labeled tendons A-J',
    },
  },
  back: {
    answer: 'Tibialis anterior tendon',
    explanation: 'Tibialis anterior is the largest and most medial anterior compartment tendon. It passes under the superior and inferior extensor retinacula and inserts on the medial cuneiform and base of the 1st metatarsal. It is the primary dorsiflexor of the foot. Rupture causes foot drop and a palpable gap at the ankle.',
    keyFact: 'Tibialis anterior is the most commonly ruptured anterior ankle tendon — spontaneous rupture occurs in older patients (>60) with minimal trauma; presents with foot drop and visible bulge from tendon retraction.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/tibialis-anterior',
    tags: ['MRI', 'ankle', 'tendon', 'anatomy', 'msk', 'anterior'],
  },
},
    ]
  },


      {
    id: 'msk-wrist-anatomy',
    label: 'Wrist Anatomy',
    cards: [
       // ============================================================
// MSK — Wrist MRI Anatomy: Extensor Compartments
// Cards: msk-wrist-anat-001 to msk-wrist-anat-006
// ============================================================

{
  id: 'msk-wrist-anat-001',
  front: {
    question: 'Name the structure(s) labeled I on this wrist MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/wrist01.png',
      alt: 'Axial wrist MRI with extensor compartments labeled I–VI',
      caption: 'Identify label I',
    },
    hint: 'First extensor compartment — radial side',
  },
  back: {
    answer: 'Extensor Pollicis Brevis (EPB) & Abductor Pollicis Longus (APL)',
    explanation: 'The 1st extensor compartment lies over the radial styloid and contains APL and EPB. These tendons travel through a shared fibro-osseous tunnel and are the structures involved in de Quervain tenosynovitis. On axial MRI they appear as two small oval low-signal tendons at the radial margin of the wrist.',
    keyFact: '1st compartment = APL + EPB → de Quervain tenosynovitis. APL is the more volar/radial of the two.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/de-quervain-tenosynovitis',
    tags: ['MRI', 'wrist', 'anatomy', 'extensor tendons', 'MSK'],
  },
},

{
  id: 'msk-wrist-anat-002',
  front: {
    question: 'Name the structure(s) labeled II on this wrist MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/wrist01.png',
      alt: 'Axial wrist MRI with extensor compartments labeled I–VI',
      caption: 'Identify label II',
    },
    hint: 'Second extensor compartment — just ulnar to the radial styloid',
  },
  back: {
    answer: 'Extensor Carpi Radialis Longus (ECRL) & Extensor Carpi Radialis Brevis (ECRB)',
    explanation: 'The 2nd extensor compartment contains ECRL and ECRB, which insert on the bases of the 2nd and 3rd metacarpals respectively. They run dorsal to the radial styloid in the groove between the radial styloid and Lister\'s tubercle. ECRB is the more ulnar and slightly more volar tendon.',
    keyFact: '2nd compartment = ECRL + ECRB. ECRL → 2nd MC base; ECRB → 3rd MC base.',
    tags: ['MRI', 'wrist', 'anatomy', 'extensor tendons', 'MSK'],
  },
},

{
  id: 'msk-wrist-anat-003',
  front: {
    question: 'Name the structure labeled III on this wrist MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/wrist01.png',
      alt: 'Axial wrist MRI with extensor compartments labeled I–VI',
      caption: 'Identify label III',
    },
    hint: 'Passes around Lister\'s tubercle',
  },
  back: {
    answer: 'Extensor Pollicis Longus (EPL)',
    explanation: 'The 3rd extensor compartment contains only EPL. It uses Lister\'s tubercle as a pulley to change direction radially toward the thumb. EPL rupture is a classic complication of non-displaced distal radius fractures and long-term corticosteroid use, due to ischemia at the tubercle.',
    keyFact: 'EPL wraps around Lister\'s tubercle → rupture after distal radius fracture (even non-displaced). Sole occupant of 3rd compartment.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/extensor-pollicis-longus',
    tags: ['MRI', 'wrist', 'anatomy', 'extensor tendons', 'MSK', 'EPL rupture'],
  },
},

{
  id: 'msk-wrist-anat-004',
  front: {
    question: 'Name the structure(s) labeled IV on this wrist MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/wrist01.png',
      alt: 'Axial wrist MRI with extensor compartments labeled I–VI',
      caption: 'Identify label IV',
    },
    hint: 'Largest extensor compartment — central dorsum',
  },
  back: {
    answer: 'Extensor Digitorum (ED) & Extensor Indicis (EI)',
    explanation: 'The 4th extensor compartment is the largest and most central, lying just ulnar to Lister\'s tubercle. It contains the four slips of extensor digitorum communis and the extensor indicis, which lies ulnar and deep to ED. EI allows independent index finger extension.',
    keyFact: '4th compartment = ED (×4 slips) + EI. EI is ulnar and deep to ED; enables independent index extension.',
    tags: ['MRI', 'wrist', 'anatomy', 'extensor tendons', 'MSK'],
  },
},

{
  id: 'msk-wrist-anat-005',
  front: {
    question: 'Name the structure labeled V on this wrist MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/wrist01.png',
      alt: 'Axial wrist MRI with extensor compartments labeled I–VI',
      caption: 'Identify label V',
    },
    hint: 'Overlies the distal radioulnar joint',
  },
  back: {
    answer: 'Extensor Digiti Minimi (EDM)',
    explanation: 'The 5th extensor compartment contains the extensor digiti minimi, which runs over the distal radioulnar joint (DRUJ). Its position directly over the DRUJ makes it a landmark on axial wrist MRI. EDM tenosynovitis or tears are associated with rheumatoid arthritis.',
    keyFact: '5th compartment = EDM, overlies the DRUJ. Landmark for DRUJ on axial wrist MRI; affected early in RA.',
    tags: ['MRI', 'wrist', 'anatomy', 'extensor tendons', 'MSK', 'DRUJ'],
  },
},

{
  id: 'msk-wrist-anat-006',
  front: {
    question: 'Name the structure labeled VI on this wrist MRI axial image.',
    image: {
      src: '/src/data/decks/images_msk/wrist01.png',
      alt: 'Axial wrist MRI with extensor compartments labeled I–VI',
      caption: 'Identify label VI',
    },
    hint: 'Most ulnar extensor compartment — groove on the ulnar head',
  },
  back: {
    answer: 'Extensor Carpi Ulnaris (ECU)',
    explanation: 'The 6th extensor compartment contains only the ECU, held in a groove on the dorsum of the ulnar head by the ECU subsheath. ECU instability or subsheath tears cause painful snapping on forearm rotation and are common in racquet sport athletes. The tendon inserts at the base of the 5th metacarpal.',
    keyFact: '6th compartment = ECU. Held by ECU subsheath in ulnar groove. Subsheath tear → ECU instability (snapping, ulnar-sided wrist pain in athletes).',
    radiopaediaUrl: 'https://radiopaedia.org/articles/extensor-carpi-ulnaris',
    tags: ['MRI', 'wrist', 'anatomy', 'extensor tendons', 'MSK', 'ECU instability'],
  },
},
// ============================================================
// MSK Wrist Anatomy — Hand XR Carpal Bones (hand01.jpg)
// Cards: msk-wrist-anat-007 through msk-wrist-anat-013
// ============================================================

{
  id: 'msk-wrist-anat-007',
  front: {
    question: 'Name the carpal bone labeled #1 on this hand XR.',
  image: {
      src: '/src/data/decks/images_msk/wrist02.png',
    },  
  },
  back: {
    answer: 'Scaphoid',
    explanation: 'The scaphoid is the largest bone of the proximal carpal row and the most commonly fractured carpal bone. It articulates with the radius proximally and bridges both carpal rows, making it biomechanically vulnerable. Its blood supply enters distally, so waist/proximal pole fractures risk avascular necrosis.',
    keyFact: 'Most commonly fractured carpal bone; proximal pole AVN risk due to retrograde blood supply.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/scaphoid',
    tags: ['XR', 'wrist', 'anatomy', 'carpals', 'msk'],
  },
},
{
  id: 'msk-wrist-anat-008',
  front: {
    question: 'Name the carpal bone labeled #2 on this hand XR.',
    image: {
      src: '/src/data/decks/images_msk/wrist02.png',
    },  
  },
  back: {
    answer: 'Lunate',
    explanation: 'The lunate is the central bone of the proximal carpal row and is the most commonly dislocated carpal bone. On lateral XR, it has a crescent (moon-like) shape. Perilunate and lunate dislocations are high-yield trauma findings; in lunate dislocation the lunate tilts volarly and loses its articulation with the capitate.',
    keyFact: 'Most commonly dislocated carpal bone; "spilled teacup" sign on lateral XR indicates lunate dislocation.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/lunate',
    tags: ['XR', 'wrist', 'anatomy', 'carpals', 'msk'],
  },
},
{
  id: 'msk-wrist-anat-009',
  front: {
    question: 'Name the carpal bone(s) labeled #3 on this hand XR.',
    image: {
      src: '/src/data/decks/images_msk/wrist02.png',
    },  
  },
  back: {
    answer: 'Triquetrum (+ Pisiform)',
    explanation: 'The triquetrum is the most ulnar bone of the proximal carpal row, best seen on oblique views. The pisiform is a sesamoid bone embedded in the flexor carpi ulnaris tendon and overlies the triquetrum on PA views. Triquetral chip fractures (dorsal cortical avulsions) are the second most common carpal fracture.',
    keyFact: 'Triquetral dorsal chip fracture = 2nd most common carpal fracture; best seen on lateral XR.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/triquetrum',
    tags: ['XR', 'wrist', 'anatomy', 'carpals', 'msk'],
  },
},
{
  id: 'msk-wrist-anat-010',
  front: {
    question: 'Name the carpal bone labeled #4 on this hand XR.',
    image: {
      src: '/src/data/decks/images_msk/wrist02.png',
    },  
  },
  back: {
    answer: 'Trapezium',
    explanation: 'The trapezium is the most radial bone of the distal carpal row, articulating with the first metacarpal at the carpometacarpal (CMC) joint — the most mobile CMC joint. This joint is the classic site of basal joint osteoarthritis (Bennett/Rolando fractures occur here). The trapezium also forms the lateral wall of the carpal tunnel.',
    keyFact: 'Trapezium = thumb CMC joint; site of Bennett fracture-dislocation and basal joint OA.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/trapezium-bone',
    tags: ['XR', 'wrist', 'anatomy', 'carpals', 'msk'],
  },
},
{
  id: 'msk-wrist-anat-011',
  front: {
    question: 'Name the carpal bone labeled #5 on this hand XR.',
    image: {
      src: '/src/data/decks/images_msk/wrist02.png',
    },  
  },
  back: {
    answer: 'Trapezoid',
    explanation: 'The trapezoid is the smallest distal carpal bone, wedge-shaped and tightly articulating with the second metacarpal. It is the least commonly fractured carpal bone due to its protected position. It lies between the trapezium radially and the capitate ulnarly.',
    keyFact: 'Trapezoid = least commonly fractured carpal bone; articulates with 2nd metacarpal.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/trapezoid-bone',
    tags: ['XR', 'wrist', 'anatomy', 'carpals', 'msk'],
  },
},
{
  id: 'msk-wrist-anat-012',
  front: {
    question: 'Name the carpal bone labeled #6 on this hand XR.',
    image: {
      src: '/src/data/decks/images_msk/wrist02.png',
    },  
  },
  back: {
    answer: 'Capitate',
    explanation: 'The capitate is the largest carpal bone and the keystone of the wrist, located centrally in the distal row. It articulates with the lunate proximally and the third metacarpal distally. In perilunate dislocations, the capitate dislocates relative to the lunate. The capitate is also a site of avascular necrosis (though rarer than the scaphoid).',
    keyFact: 'Largest carpal bone; central keystone of the wrist; involved in perilunate dislocation.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/capitate',
    tags: ['XR', 'wrist', 'anatomy', 'carpals', 'msk'],
  },
},
{
  id: 'msk-wrist-anat-013',
  front: {
    question: 'Name the carpal bone labeled #7 on this hand XR.',
    image: {
      src: '/src/data/decks/images_msk/wrist02.png',
    },  
  },
  back: {
    answer: 'Hamate',
    explanation: 'The hamate is the most ulnar bone of the distal carpal row, identifiable by its hook (hamulus) projecting volarly. Hook of hamate fractures occur in racket/club sports (golf, tennis, baseball) and are occult on PA XR — best seen on carpal tunnel view or CT. The ulnar nerve and artery pass through Guyon\'s canal immediately adjacent to the hook.',
    keyFact: 'Hook of hamate fracture = racket/club sports; occult on PA XR, use CT or carpal tunnel view.',
    radiopaediaUrl: 'https://radiopaedia.org/articles/hamate',
    tags: ['XR', 'wrist', 'anatomy', 'carpals', 'msk'],
  },
},

    ]
  },

  // ──────────────────────────────────────────────────────────
  // FRACTURES & TRAUMA
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-trauma',
    label: 'Fractures & Trauma',
    cards: [ /* existing sample cards — DO NOT MODIFY */ ],
  },

  {
    id: 'msk-trauma-named',
    label: 'Named Fractures & Eponyms',
    cards: [
      {
        id: 'msk-trauma-named-001',
        front: {
          question: 'What is a Colles fracture and what is the typical mechanism?',
          hint: 'Most common distal forearm injury',
        },
        back: {
          answer: 'Distal radius fracture with dorsal angulation, typically intra-articular, caused by fall on outstretched hand (FOOSH).',
          explanation: 'Colles fracture is the most common injury to the distal forearm, usually occurring in older patients after low-energy falls. An associated ulnar styloid fracture is common. Volar tilt of the distal radius is lost, which is important to correct surgically. Normal volar tilt is approximately 11°.',
          keyFact: 'Colles = dorsal angulation (\"Collie Dogs like it Outside\"). Smith = volar angulation (reverse Colles). Barton = oblique intra-articular rim fracture with radiocarpal dislocation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/colles-fracture',
          tags: ['trauma', 'wrist', 'distal-radius', 'eponym'],
        },
      },
      {
        id: 'msk-trauma-named-002',
        front: {
          question: 'What is a Monteggia fracture-dislocation and what is its hallmark?',
        },
        back: {
          answer: 'Proximal ulnar fracture combined with radial head dislocation at the elbow.',
          explanation: 'Monteggia fracture is a classic forearm ring/pretzel injury: the forearm breaks in two places. The direction of radial head dislocation follows the direction of ulnar fracture angulation. It is most commonly seen with anterior radial head dislocation. The radiograph of the elbow must always be included when a forearm fracture is seen.',
          keyFact: 'Mnemonic MUGR: Monteggia = Ulna fracture + radial head dislocation. Galeazzi = distal Radius fracture + DRUJ dislocation.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/monteggia-fracture-dislocation',
          tags: ['trauma', 'forearm', 'eponym', 'elbow'],
        },
      },
      {
        id: 'msk-trauma-named-003',
        front: {
          question: 'What is a Galeazzi fracture-dislocation?',
        },
        back: {
          answer: 'Fracture of the distal third of the radial shaft with dislocation of the distal radioulnar joint (DRUJ).',
          explanation: 'The Galeazzi injury is the counterpart to Monteggia. It involves the radial shaft (typically the junction of the middle and distal thirds) plus disruption of the DRUJ. The distal ulna dislocates, usually anteriorly. It requires operative fixation given the high rate of mal-union with conservative treatment.',
          keyFact: 'MUGR mnemonic: Galeazzi = Radius fracture + DRUJ dislocation. Essex-Lopresti = radial head fracture + DRUJ dislocation + interosseous membrane tear.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/galeazzi-fracture-dislocation',
          tags: ['trauma', 'forearm', 'eponym', 'wrist'],
        },
      },
      {
        id: 'msk-trauma-named-004',
        front: {
          question: 'What is a Jones fracture and why does it carry a worse prognosis than a metatarsal base avulsion?',
        },
        back: {
          answer: 'Jones fracture is a fracture at the metaphyseal-diaphyseal junction of the fifth metatarsal (zone 2).',
          explanation: 'The proximal fifth metatarsal is divided into three zones. Zone 1 (avulsion at the most proximal base) is caused by the peroneus brevis/plantar aponeurosis and heals well with conservative treatment. Zone 2 (Jones) occurs at the metaphyseal-diaphyseal junction and has reduced blood supply, leading to a higher risk of non-union and often requires operative fixation. Zone 3 is the diaphysis and is typically a stress fracture.',
          keyFact: 'Jones fracture = zone 2 = metaphyseal-diaphyseal junction = poor blood supply = high non-union risk. Zone 1 avulsion = conservative. Zone 3 stress fracture = common in athletes.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/jones-fracture',
          tags: ['trauma', 'foot', 'metatarsal', 'eponym'],
        },
      },
      {
        id: 'msk-trauma-named-005',
        front: {
          question: 'What is a Lisfranc fracture-dislocation and what is the key radiographic alignment sign?',
        },
        back: {
          answer: 'A fracture-dislocation of the tarsometatarsal (Lisfranc) joint, stabilized primarily by the Lisfranc ligament (medial cuneiform to 2nd metatarsal base).',
          explanation: 'Lisfranc injuries range from subtle ligamentous tears to frank dislocations. On the frontal view, the medial border of the 2nd metatarsal must align with the medial border of the 2nd cuneiform. On the oblique view, the medial border of the 4th metatarsal must align with the medial border of the cuboid. A "fleck sign" (small avulsion at the 2nd metatarsal base) is pathognomonic. Weight-bearing views are most sensitive.',
          keyFact: 'If the gap between the 1st and 2nd metatarsal bases is >2 mm on weight-bearing, suspect Lisfranc injury. Missed Lisfranc = debilitating osteoarthritis. Always surgical.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lisfranc-fracture-dislocation',
          tags: ['trauma', 'foot', 'midfoot', 'eponym'],
        },
      },
      {
        id: 'msk-trauma-named-006',
        front: {
          question: 'What is a Maisonneuve fracture and why can it be missed on ankle radiographs?',
        },
        back: {
          answer: 'High proximal fibular fracture associated with interosseous membrane tear and medial malleolar fracture or deltoid ligament disruption.',
          explanation: 'The Maisonneuve fracture results from an external rotation force on the talus. The energy travels up the fibula, causing a proximal fibular fracture (at or above the fibular neck). Ankle radiographs show only widening of the medial clear space or a medial malleolar fracture. If the ankle mortise is widened without a visible fibular fracture, full-length tibia-fibula radiographs are mandatory.',
          keyFact: 'Always image the full fibula if the medial clear space is widened but no distal fibular fracture is seen. The fibular fracture may be at the fibular neck, far from the ankle.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/maisonneuve-fracture',
          tags: ['trauma', 'ankle', 'fibula', 'eponym'],
        },
      },
      {
        id: 'msk-trauma-named-007',
        front: {
          question: 'What is a Bennett fracture and what tendon causes the characteristic deformity?',
        },
        back: {
          answer: 'Intra-articular fracture of the base of the first metacarpal with dorsolateral dislocation of the metacarpal.',
          explanation: 'The Bennett fracture has a small volar-ulnar fragment that remains attached to the trapezium by the volar oblique ligament, while the thumb metacarpal subluxes dorsally and radially. The deforming force is the abductor pollicis longus (APL) tendon, which pulls the metacarpal shaft dorsally. Rolando fracture is the comminuted (3-part or T-shaped) variant and carries a worse prognosis.',
          keyFact: 'Bennett = intra-articular thumb base fracture + APL subluxation. Rolando = comminuted Bennett. Both require surgical fixation due to intra-articular involvement.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bennett-fracture',
          tags: ['trauma', 'hand', 'thumb', 'eponym'],
        },
      },
      {
        id: 'msk-trauma-named-008',
        front: {
          question: 'What is a Tillaux fracture and in what age group does it occur?',
        },
        back: {
          answer: 'Salter-Harris type III fracture of the anterolateral distal tibial epiphysis, occurring in adolescents (typically 12–15 years).',
          explanation: 'The distal tibial physis closes in a specific order: central, then medial, then lateral (over 18 months). In adolescents, when only the anterolateral physis remains open, an external rotation force avulses this fragment via the anterior tibiofibular ligament. It is an SH III fracture through the open lateral physis, which closes last. CT is required for fracture characterization and surgical planning.',
          keyFact: 'Tillaux = SH III of the lateral distal tibia in an adolescent (12–15 y). Triplane fracture = SH IV equivalent with 3 fracture planes (sagittal epiphysis, horizontal physis, oblique metaphysis).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tillaux-fracture',
          tags: ['trauma', 'ankle', 'pediatric', 'eponym'],
        },
      },
      {
        id: 'msk-trauma-named-009',
        front: {
          question: 'What is a Segond fracture and what is its critical association?',
        },
        back: {
          answer: 'Avulsion fracture of the lateral tibial plateau, associated with ACL tear and iliotibial band injury.',
          explanation: 'The Segond fracture is a small elliptical or curvilinear bone fragment avulsed from the lateral tibial plateau, just distal to the Gerdy tubercle. It represents avulsion of the lateral capsular ligament/ALL (anterolateral ligament) under internal rotation and varus stress. It is pathognomonic for ACL disruption — ACL tear is present in >90% of Segond fractures. MRI must be obtained to evaluate the full extent of injury.',
          keyFact: 'Segond fracture on knee radiograph = ACL tear until proven otherwise. Reverse Segond (medial tibial plateau avulsion) is associated with PCL and posteromedial capsule injury.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/segond-fracture',
          tags: ['trauma', 'knee', 'acl', 'eponym'],
        },
      },
      {
        id: 'msk-trauma-named-010',
        front: {
          question: 'What is a Pilon fracture and what is the mechanism?',
        },
        back: {
          answer: 'Comminuted fracture of the distal tibia involving the tibial plafond (articular surface), caused by axial loading.',
          explanation: 'Pilon (from the French for "pestle") fractures result from high-energy axial compression, typically from falls from height or motor vehicle collisions. The talus is driven upward into the tibial plafond, causing variable degrees of comminution. The Rüedi-Allgöwer and AO classifications are used. Associated calcaneal fractures, lumbar spine injuries, and pelvic injuries must be excluded. Surgical fixation is usually required.',
          keyFact: 'Pilon fracture = axial loading + tibial plafond disruption. Always look for associated calcaneal fracture (lover\'s fracture pattern) and lumbar spine fracture when axial loading mechanism is identified.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pilon-fracture',
          tags: ['trauma', 'ankle', 'tibia', 'axial-loading'],
        },
      },
      {
        id: 'msk-trauma-named-011',
        front: {
          question: 'What are the radiographic features of a Boxer\'s fracture?',
        },
        back: {
          answer: 'Fracture of the metacarpal neck, most commonly the fifth, with volar angulation of the metacarpal head.',
          explanation: 'Boxer\'s fractures result from a direct blow to the clenched fist. The fifth metacarpal neck is the most common site. The distal fragment (metacarpal head) angulates volarly. Up to 40° of angulation may be acceptable in the ring and small fingers; less is tolerated in the index and middle fingers due to functional requirements. Most are treated conservatively but significant angulation or rotational deformity may require fixation.',
          keyFact: 'Boxer\'s fracture = 5th metacarpal neck fracture with volar angulation. Up to 40° acceptable in the 5th finger. Assess for rotational deformity clinically.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/boxers-fracture',
          tags: ['trauma', 'hand', 'metacarpal', 'eponym'],
        },
      },
      {
        id: 'msk-trauma-named-012',
        front: {
          question: 'What is a mallet finger and what is a boutonnière deformity?',
        },
        back: {
          answer:
            'Mallet finger: disruption of the extensor tendon at the distal phalanx → DIP flexion with inability to extend DIP.\nBoutonnière deformity: disruption of the central slip of the extensor tendon at the middle phalanx → PIP flexion + DIP hyperextension.',
          explanation: 'Mallet finger results from direct impact on the fingertip (e.g., catching a ball). An avulsion fragment of the dorsal distal phalanx may be seen. Boutonnière deformity occurs when the central extensor slip tears, causing the PIP to herniate through the lateral slips — these retract and produce paradoxical DIP extension. Most common cause of boutonnière deformity is rheumatoid arthritis; trauma is less common.',
          keyFact: 'Mallet = DIP won\'t extend (extensor tendon avulsed distally). Boutonnière = PIP flexion + DIP extension (central slip tear). Jersey finger = DIP won\'t flex (FDP avulsion from volar phalanx).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/mallet-finger',
          tags: ['trauma', 'hand', 'finger', 'tendon'],
        },
      },
      {
        id: 'msk-trauma-named-013',
        front: {
          question: 'What is a Gamekeeper\'s (Skier\'s) thumb, and what is a Stener lesion?',
        },
        back: {
          answer: 'Gamekeeper\'s thumb: ulnar collateral ligament (UCL) injury at the 1st MCP joint from forced thumb abduction. Stener lesion: complete UCL tear with the adductor aponeurosis interposed, preventing healing.',
          explanation: 'The UCL stabilizes the thumb MCP against radial stress. Complete tears require surgery; incomplete tears can be treated conservatively. The Stener lesion occurs when the torn UCL retracts proximally and the adductor aponeurosis becomes interposed between the ligament ends, preventing healing. MRI shows the "yo-yo on a string" sign — the balled-up UCL (yo-yo) above the aponeurosis (string). Stress radiographs are contraindicated as they can convert a partial tear to a Stener lesion.',
          keyFact: 'If a Stener lesion is present, surgery is mandatory. MRI (not stress views) is the correct next step when Gamekeeper\'s thumb is suspected. Stener = surgical; no Stener = conservative.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gamekeepers-thumb',
          tags: ['trauma', 'hand', 'thumb', 'ligament'],
        },
      },
      {
        id: 'msk-trauma-named-014',
        front: {
          question: 'What is the Boehler angle, what is the normal range, and what does a decreased angle signify?',
        },
        back: {
          answer: 'The Boehler angle is formed between two lines on the lateral calcaneal radiograph: (1) from the superior aspect of the posterior tuberosity to the superior aspect of the posterior subtalar facet, and (2) from the superior aspect of the anterior calcaneal process to the same point. Normal: 20–40°. Less than 20° is diagnostic of a calcaneal fracture.',
          explanation: 'The Boehler angle is the most important radiographic measurement in calcaneal fracture assessment. When the subtalar joint is depressed by the talus (in a high-energy axial load), the posterior facet collapses and the angle decreases. A normal Boehler angle does not exclude fracture — CT is required for complete evaluation. The Sanders classification (based on CT coronal images) guides surgical planning.',
          keyFact: 'Boehler angle <20° = calcaneal fracture. Normal angle does NOT exclude fracture. Sanders CT classification determines operative planning. Calcaneal fractures associated with lumbar spine and contralateral calcaneal injuries.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bohler-angle',
          tags: ['trauma', 'calcaneus', 'foot', 'measurement'],
        },
      },
      {
        id: 'msk-trauma-named-015',
        front: {
          question: 'What are the Hawkins classification stages of talar neck fractures, and what is the significance of the Hawkins sign?',
        },
        back: {
          answer:
            'Hawkins classification:\n  Type I: Non-displaced — AVN risk ~0–10%\n  Type II: Displaced + subtalar dislocation — AVN risk ~20–50%\n  Type III: Displaced + subtalar + tibiotalar dislocation — AVN risk ~50–100%\n  Type IV: All above + talonavicular dislocation — AVN risk ~100%\nHawkins sign: subchondral lucent band in the talar dome at 6–8 weeks = intact blood supply = good prognosis.',
          explanation: 'The blood supply to the talus is tenuous — it enters primarily from the sinus tarsi and the deltoid ligament. Displaced talar neck fractures can disrupt these vessels, causing AVN. The Hawkins sign (subchondral osteoporosis on frontal radiograph at 6–8 weeks post-immobilization) reflects active hyperemia, indicating the talar dome vascularity is intact. Its absence does not confirm AVN but warrants MRI evaluation.',
          keyFact: 'Hawkins sign present = viable talar dome (good news). Higher Hawkins type = greater displacement = higher AVN risk. Type III/IV: nearly universal AVN.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hawkins-classification-of-talar-neck-fractures',
          tags: ['trauma', 'talus', 'foot', 'avn', 'classification'],
        },
      },
      {
        id: 'msk-trauma-named-016',
        front: {
          question: 'Describe the Danis-Weber (Weber) classification of ankle fractures.',
        },
        back: {
          answer:
            'Weber A: Fibular fracture below the syndesmosis → syndesmosis intact → usually conservative.\nWeber B: Fibular fracture at the level of the syndesmosis → syndesmosis status indeterminate → stability-dependent treatment.\nWeber C: Fibular fracture above the syndesmosis → functional syndesmotic disruption → usually surgical.',
          explanation: 'The Weber classification is based solely on the level of the fibular fracture relative to the syndesmosis. It is the simplest ankle fracture classification and helps predict stability and treatment. Weber B is the most common but least useful clinically because syndesmotic stability is uncertain. The Lauge-Hansen system adds etiological information (foot position + force direction) and ~90% of ankle fractures are the supination-external rotation (SER) pattern.',
          keyFact: 'Weber C = syndesmotic disruption = surgical. Weber A = below syndesmosis = usually stable. Widening of the medial clear space (>4 mm) or tibiofibular overlap loss implies syndesmotic injury regardless of Weber type.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/weber-classification-of-ankle-fractures',
          tags: ['trauma', 'ankle', 'fibula', 'classification'],
        },
      },
      {
        id: 'msk-trauma-named-017',
        front: {
          question: 'What is the Lauge-Hansen classification and which pattern accounts for ~90% of ankle fractures?',
        },
        back: {
          answer: 'Supination-external rotation (SER) accounts for approximately 90% of ankle fractures. The Lauge-Hansen system classifies ankle fractures based on foot position at injury (supination vs. pronation) and the deforming force (external rotation vs. abduction/adduction).',
          explanation: 'SER progresses in 4 stages: Stage I: anterior tibiofibular (syndesmotic) ligament tear → Stage II: oblique fibular fracture at joint level → Stage III: posterior tibiofibular ligament tear or posterior malleolus fracture → Stage IV: deltoid ligament tear or medial malleolar fracture. Knowing SER staging predicts co-existing ligamentous injuries. A stage IV SER injury (widened medial clear space) implies anterior AND posterior syndesmotic ligament disruption.',
          keyFact: 'SER Stage IV = medial clear space widening = both syndesmotic ligaments disrupted. You can predict posterior malleolus fracture presence whenever deltoid/medial malleolus is injured (Stage IV).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lauge-hansen-classification-of-ankle-fractures',
          tags: ['trauma', 'ankle', 'classification', 'syndesmosis'],
        },
      },
      {
        id: 'msk-trauma-named-018',
        front: {
          question: 'What is the Schatzker classification of tibial plateau fractures, and which type is most common?',
        },
        back: {
          answer:
            'Schatzker I: Lateral plateau split (no depression) — younger patients, high energy.\nSchatzker II: Lateral split + depression — most common overall.\nSchatzker III: Lateral plateau depression only.\nSchatzker IV: Medial plateau fracture — highest association with neurovascular injury.\nSchatzker V: Bicondylar fracture.\nSchatzker VI: Bicondylar + diaphyseal dissociation.',
          explanation: 'Lateral tibial plateau fractures (Schatzker I–III) are more common and generally more stable than medial plateau fractures. Schatzker IV (medial) is the most dangerous because the medial femoral condyle can drive into the medial plateau, causing neurovascular injury. Schatzker V and VI are high-energy injuries with the highest complication rates. CT is essential for characterization and operative planning.',
          keyFact: 'Schatzker IV (medial) = highest risk of popliteal artery and peroneal nerve injury. Lateral plateau (I–III) = more stable, better prognosis. CT is mandatory for all tibial plateau fractures.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/schatzker-classification-of-tibial-plateau-fractures',
          tags: ['trauma', 'knee', 'tibia', 'classification'],
        },
      },
      {
        id: 'msk-trauma-named-019',
        front: {
          question: 'What is the Salter-Harris classification and which type has the highest risk of growth arrest?',
        },
        back: {
          answer:
            'SH I: Through the physis only.\nSH II: Through the physis + metaphysis (most common, ~75%).\nSH III: Through the physis + epiphysis (intra-articular).\nSH IV: Through the metaphysis, physis, AND epiphysis.\nSH V: Compression/crush of the physis.\nHighest growth arrest risk: SH V (crush) and SH IV (crossing all zones).',
          explanation: 'Salter-Harris fractures involve the physis (growth plate) in skeletally immature patients. SH II is the most common type and generally has a good prognosis. SH III and IV are intra-articular and require anatomic reduction. SH V is often diagnosed retrospectively after growth arrest occurs, as it may be radiographically occult acutely. Any fracture involving the germinal (reserve) zone of the physis risks premature physeal closure.',
          keyFact: 'Mnemonic: SALTR — Straight through (I), Above (metaphysis II), Lower (epiphysis III), Through (all IV), Rammed/crushed (V). Higher number generally = worse prognosis. SH V most likely to cause growth arrest.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/salter-harris-classification',
          tags: ['trauma', 'pediatric', 'physis', 'classification'],
        },
      },
      {
        id: 'msk-trauma-named-020',
        front: {
          question: 'What is the Garden classification of femoral neck fractures and what determines treatment?',
        },
        back: {
          answer:
            'Garden I: Incomplete/valgus impacted — non-displaced.\nGarden II: Complete, non-displaced.\nGarden III: Complete, partially displaced.\nGarden IV: Complete, fully displaced.\nTreatment: Non-displaced (I/II) → ORIF. Displaced (III/IV) → arthroplasty in elderly, ORIF in young.',
          explanation: 'Femoral neck fractures are intracapsular and risk disrupting the medial femoral circumflex artery, leading to AVN of the femoral head. Displacement (varus angulation) is the key prognostic factor. Practically, nondisplaced = valgus impacted, and displaced = varus angulated. Displaced fractures in the elderly are treated with hemiarthroplasty or total hip arthroplasty. In young patients, ORIF is preferred to preserve the joint.',
          keyFact: 'Displaced femoral neck fracture (varus) in elderly = arthroplasty. In young patient = urgent ORIF (joint preservation). Garden I/II = nondisplaced = ORIF regardless of age. AVN is the feared complication of displaced intracapsular fractures.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/garden-classification-of-femoral-neck-fractures',
          tags: ['trauma', 'hip', 'femoral-neck', 'classification'],
        },
      },
      {
        id: 'msk-trauma-named-021',
        front: {
          question: 'What are the defining features of an atypical femoral fracture, and what medication class is implicated?',
        },
        back: {
          answer: 'Atypical femoral fractures occur in the lateral subtrochanteric cortex and require 4 of 5 criteria: (1) minimal trauma, (2) substantially transverse orientation, (3) lateral cortex involvement, (4) no/minimal comminution, (5) endosteal or periosteal lateral cortical thickening. Bisphosphonates are the primary implicated agents.',
          explanation: 'Bisphosphonates inhibit osteoclast-mediated bone remodeling. Paradoxically, with prolonged use the lateral femoral cortex (under tensile stress) accumulates microfractures that cannot be remodeled. The "dreaded black line" is the earliest radiographic sign — a focal cortical lucency in the lateral femoral diaphysis. Bilateral films must always be obtained, as these fractures are bilateral in up to 28% of cases.',
          keyFact: 'Lateral cortical thickening (or "dreaded black line") of the proximal femur in a bisphosphonate user = atypical femoral fracture until proven otherwise. Always image the contralateral femur.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/atypical-femoral-fracture',
          tags: ['trauma', 'femur', 'bisphosphonate', 'insufficiency'],
        },
      },
      {
        id: 'msk-trauma-named-022',
        front: {
          question: 'What is a "terrible triad" of the elbow?',
        },
        back: {
          answer: 'Posterior elbow dislocation + radial head fracture + coronoid process fracture.',
          explanation: 'The terrible triad represents a highly unstable elbow injury pattern. Posterior dislocation is by far the most common elbow dislocation (>90%). The associated fractures of the radial head and coronoid create a situation of extreme instability, often requiring surgical reconstruction of all three components. If even a tiny coronoid fracture is present with a radial head fracture in the setting of instability, CT should be performed.',
          keyFact: 'Terrible triad = posterior dislocation + radial head fracture + coronoid fracture = surgical emergency. Lateral UCL is first structure torn in posterior elbow dislocation (LUCL → LCL → capsule → MCL).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/terrible-triad-of-the-elbow',
          tags: ['trauma', 'elbow', 'dislocation', 'eponym'],
        },
      },
      {
        id: 'msk-trauma-named-023',
        front: {
          question: 'What is the Neer classification of proximal humerus fractures?',
        },
        back: {
          answer: 'Based on the number of displaced segments (>1 cm or >45° angulation): 1-part (undisplaced), 2-part, 3-part, 4-part. Segments are: humeral head, greater tuberosity, lesser tuberosity, and shaft.',
          explanation: 'Most proximal humerus fractures (approximately 80%) are minimally displaced (1-part) and can be treated conservatively. Two-part fractures involve one displaced fragment. Three- and four-part fractures carry higher risk of humeral head AVN, particularly 4-part fractures where the head is deprived of all soft-tissue attachments. Four-part fractures in elderly patients typically require arthroplasty.',
          keyFact: 'Neer 4-part fracture = highest AVN risk = usually arthroplasty in elderly. 1-part = conservative. Greater tuberosity fracture associated with anterior shoulder dislocation in patients >40 years (10–15% incidence).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/neer-classification-system-for-proximal-humerus-fractures',
          tags: ['trauma', 'shoulder', 'humerus', 'classification'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // ARTHRITIS & CRYSTAL DISEASE
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-arthritis',
    label: 'Arthritis & Crystal Disease',
    cards: [
      {
        id: 'msk-arthritis-001',
        front: {
          question: 'What are the four radiographic hallmarks of osteoarthritis, and which finding determines OA severity vs. presence?',
        },
        back: {
          answer: 'Hallmarks: joint space narrowing, subchondral sclerosis, osteophytes, subchondral cysts. Osteophytes determine OA presence; degree of joint space narrowing determines severity.',
          explanation: 'Osteoarthritis results from cartilage breakdown due to altered local mechanical factors. Unlike inflammatory arthritis, periarticular osteopenia and erosions are absent. OA of the knee preferentially affects the medial tibiofemoral compartment. Standing weight-bearing views are required to accurately assess tibiofemoral narrowing, as supine films underestimate the degree of cartilage loss.',
          keyFact: 'The 4 OA signs: Sclerosis, Osteophytes, Narrowing, Cysts (SONC). No erosions, no periarticular osteopenia. Osteophytes = OA present. Joint space narrowing = OA severity.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteoarthritis',
          tags: ['arthritis', 'oa', 'radiograph', 'knee'],
        },
      },
      {
        id: 'msk-arthritis-002',
        front: {
          question: 'What is the classic distribution of OA in the hand, and what are Heberden and Bouchard nodes?',
        },
        back: {
          answer: 'OA in the hand affects (in order of frequency): DIP joints > first CMC joint > PIP joints. MCPs are relatively spared. Heberden nodes = soft-tissue swelling (osteophytes) at the DIP. Bouchard nodes = soft-tissue swelling at the PIP.',
          explanation: 'This distribution contrasts sharply with rheumatoid arthritis, which favors MCPs, PIPs, and carpals while sparing DIPs. Erosive OA (inflammatory OA) affects the same distribution as conventional OA but has a distinctive gull-wing appearance of the DIP from central erosion flanked by marginal osteophytes.',
          keyFact: 'OA hand: DIP > 1st CMC > PIP (DIPs are involved — opposite of RA). Erosive OA = gull-wing deformity at DIP. Heberden = DIP, Bouchard = PIP.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hand-osteoarthritis',
          tags: ['arthritis', 'oa', 'hand', 'distribution'],
        },
      },
      {
        id: 'msk-arthritis-003',
        front: {
          question: 'How does hip OA differ from hip RA in terms of femoral head migration pattern?',
        },
        back: {
          answer: 'OA: superolateral femoral head migration (most common). RA: axial (concentric) migration, which may progress to protrusio acetabuli.',
          explanation: 'In hip OA, cartilage loss is greatest at the weight-bearing superolateral surface, causing superior-lateral head migration. RA causes concentric cartilage loss, leading to axial migration. However, axial migration with osteophytes still suggests OA (since OA is far more common than RA). Axial migration without osteophytes is more suspicious for RA. Protrusio is defined as >3 mm medial deviation of the femoral head beyond the ilioischial line in males and >6 mm in females.',
          keyFact: 'OA hip = superolateral migration. RA hip = axial/concentric migration → protrusio. Osteophytes with axial migration = probably OA. No osteophytes + axial migration = think RA.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hip-osteoarthritis',
          tags: ['arthritis', 'hip', 'oa', 'ra'],
        },
      },
      {
        id: 'msk-arthritis-004',
        front: {
          question: 'What are the imaging hallmarks of rheumatoid arthritis (RA) on radiography?',
        },
        back: {
          answer: 'Marginal erosions, periarticular osteopenia, symmetric joint space narrowing, and soft-tissue swelling. No osteophytes.',
          explanation: 'RA is an autoimmune synovitis that starts at the "bare area" — exposed bone just inside the joint capsule not covered by cartilage. First radiographic changes are periarticular osteopenia and soft-tissue swelling from synovitis and hyperemia. Erosions follow at the radial aspects of the 2nd and 3rd metacarpal heads and ulnar styloid. Absence of bone production (osteophytes) differentiates RA from OA.',
          keyFact: 'RA radiograph mnemonic: LOSS — Loss of joint space (symmetric), Osteopenia (periarticular), Soft-tissue swelling, erosionS. No osteophytes = RA (not OA).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rheumatoid-arthritis',
          tags: ['arthritis', 'ra', 'radiograph', 'hand'],
        },
      },
      {
        id: 'msk-arthritis-005',
        front: {
          question: 'What is the classic distribution of RA in the hand, and what deformities can occur?',
        },
        back: {
          answer: 'RA involves MCPs, PIPs, and carpals. DIPs are spared. Deformities include: boutonnière (PIP flexion + DIP extension), swan neck (PIP hyperextension + DIP flexion), ulnar drift at MCPs, and late carpal ankylosis.',
          explanation: 'Earliest erosions occur at the radial aspects of the 2nd and 3rd MCP heads and the ulnar styloid. Ulnar subluxation of the fingers at the MCPs is characteristic of advanced RA. Swan neck deformity is the most common deformity in lupus arthropathy, but both are reducible in early lupus (non-erosive) vs. fixed in RA. Ankylosis (fibro-osseous joint fusion) is more common in juvenile idiopathic arthritis than adult RA.',
          keyFact: 'RA spares the DIP (RA = "Rest At" the DIP). OA = DIP involved. Earliest RA erosions: radial aspects of 2nd/3rd MCP heads and ulnar styloid.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rheumatoid-arthritis-of-the-hand',
          tags: ['arthritis', 'ra', 'hand', 'deformity'],
        },
      },
      {
        id: 'msk-arthritis-006',
        front: {
          question: 'What is the characteristic finding of RA in the cervical spine, and what measurement defines atlantoaxial subluxation?',
        },
        back: {
          answer: 'Anterior atlantoaxial (C1–C2) subluxation caused by transverse ligament laxity. The atlanto-dental interval (ADI) >2.5 mm in adults (>5 mm in children) indicates subluxation.',
          explanation: 'RA affects the cervical spine in up to 70% of patients with severe disease. Erosion of the transverse ligament allows the C1 arch to slide anteriorly on C2. Vertical subluxation (atlantoaxial impaction) results from erosion of the C1–C2 facets, driving the odontoid toward the foramen magnum. This may compress the brainstem. Flexion views may be needed to unmask anterior subluxation not evident on neutral radiographs.',
          keyFact: 'ADI >2.5 mm in adults = atlantoaxial instability from RA. Vertical subluxation: C1 anterior arch drops below C2 body level. Always perform flexion views in RA patients with neck pain before any procedures requiring neck positioning.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rheumatoid-arthritis-of-the-spine',
          tags: ['arthritis', 'ra', 'spine', 'cervical'],
        },
      },
      {
        id: 'msk-arthritis-007',
        front: {
          question: 'What are the 4 seronegative spondyloarthropathies and how does sacroiliitis symmetry differentiate them?',
        },
        back: {
          answer:
            'The 4: Ankylosing spondylitis (AS), Psoriatic arthritis, Reactive arthritis (Reiter\'s), Inflammatory bowel disease (IBD) arthropathy.\nSymmetric sacroiliitis: AS and IBD (both start with vowels).\nAsymmetric sacroiliitis: Psoriatic and Reactive (both start with consonants).',
          explanation: 'All four are HLA-B27 positive (in varying degrees) and rheumatoid factor negative. Sacroiliitis is a hallmark — only the inferior synovial portion of the SI joint is affected. Erosions first occur on the iliac (not sacral) side. Symmetric involvement strongly suggests AS or IBD. Asymmetric suggests psoriatic or reactive. Unilateral sacroiliitis in an immunocompromised or IV drug user should raise concern for septic arthritis.',
          keyFact: 'Vowel = Symmetric SI (AS, IBD). Consonant = Asymmetric SI (Psoriatic, Reactive). Unilateral sacroiliitis = septic arthritis until proven otherwise in the right clinical context.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/seronegative-spondyloarthropathy',
          tags: ['arthritis', 'spondyloarthropathy', 'sacroiliac', 'hla-b27'],
        },
      },
      {
        id: 'msk-arthritis-008',
        front: {
          question: 'What are the characteristic radiographic signs of ankylosing spondylitis in the spine?',
        },
        back: {
          answer:
            'Sequential spinal changes (ascend L→C spine):\n1. Romanus lesions: erosions at anterior vertebral body corners.\n2. Shiny corner sign: sclerosis of prior Romanus lesions.\n3. Vertebral squaring.\n4. Syndesmophytes → bamboo spine.\n5. Dagger sign: fused spinous processes.',
          explanation: 'Ankylosing spondylitis causes enthesitis at the annulus fibrosus–vertebral body junction, producing Romanus lesions at the anterior corners. Squaring of vertebral bodies results from erosion of the normal concave anterior profile. Fine delicate syndesmophytes (arising from vertebral margins) create the bamboo spine. The fully ankylosed spine is at extremely high fracture risk with even minor trauma; CT is essential for any suspected injury.',
          keyFact: 'AS: Romanus (corner erosion) → Shiny corner (sclerosis) → Squaring → Syndesmophytes → Bamboo spine. An ankylosed spine + minimal trauma = assume fracture until CT proves otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ankylosing-spondylitis',
          tags: ['arthritis', 'ankylosing-spondylitis', 'spine', 'sacroiliac'],
        },
      },
      {
        id: 'msk-arthritis-009',
        front: {
          question: 'What is the classic radiographic appearance of psoriatic arthritis in the hands, and what is the "pencil-in-cup" deformity?',
        },
        back: {
          answer: 'Psoriatic arthritis: sausage digit (diffuse soft-tissue swelling of a whole digit), pencil-in-cup erosion at DIPs, fluffy periostitis, preserved mineralization. Pencil-in-cup: whittled "pencil" of the distal bone tip pointing into a cup-shaped erosion of the proximal bone.',
          explanation: 'Psoriatic arthritis primarily affects the hands, causing asymmetric DIP involvement (unlike RA which spares DIPs). The ivory phalanx (osteosclerosis of a single phalanx) is relatively specific for psoriatic arthritis. The arthritis mutilans variant causes telescoping digits (main-en-lorgnette or opera-glass hand). Mineralization is preserved, unlike RA which shows periarticular osteopenia.',
          keyFact: 'Psoriatic arthritis: DIPs involved (opposite of RA) + sausage digit + pencil-in-cup erosion + preserved bone density. Asymmetric sacroiliitis (consonant rule). Ivory phalanx = specific for PSA.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/psoriatic-arthritis',
          tags: ['arthritis', 'psoriatic', 'hand', 'dip'],
        },
      },
      {
        id: 'msk-arthritis-010',
        front: {
          question: 'What are the radiographic hallmarks of gout, and how is tophaceous gout distinguished from other erosive arthropathies?',
        },
        back: {
          answer: 'Gout: sharply marginated erosions with overhanging edges ("rat bite" erosions), preserved joint spaces until late disease, preserved bone density, and periarticular soft-tissue tophi (high-attenuation on CT). Great toe first MTP is the most common site.',
          explanation: 'Gout results from monosodium urate crystal deposition (negatively birefringent needle-shaped crystals). Unlike RA, gout erosions are typically not periarticular — they can be some distance from the joint margin. The overhanging margin (also called the "rat bite" appearance) is characteristic. Bone density is preserved until late disease. Dual-energy CT can color-code urate crystals (typically green on gout algorithm).',
          keyFact: 'Gout = overhanging edge erosions + preserved joint space + preserved density + tophi. Crystals are needle-shaped, negatively birefringent. Dual-energy CT is highly specific. CPPD crystals = positively birefringent rhomboid crystals.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gout',
          tags: ['arthritis', 'gout', 'crystal', 'urate'],
        },
      },
      {
        id: 'msk-arthritis-011',
        front: {
          question: 'What is chondrocalcinosis, which modality best detects it, and what joints are examined?',
        },
        back: {
          answer: 'Chondrocalcinosis is calcification of hyaline or fibrocartilage from calcium pyrophosphate (CPPD) crystal deposition. Radiography of knees, wrists, and pubic symphysis are nearly 100% sensitive. On radiograph: thin linear calcification of articular cartilage (parallel to subchondral bone) or thick shaggy calcification of fibrocartilage (menisci, TFCC, labra).',
          explanation: 'CPPD crystals are positively birefringent rhomboid-shaped and deposit preferentially in fibrocartilage. Classic associations include hemochromatosis, hyperparathyroidism, and hypophosphatasia. Idiopathic CPPD is by far the most common. Chondrocalcinosis at the TFCC of the wrist is classic. In the knee, isolated severe patellofemoral OA with chondrocalcinosis in an older patient should suggest CPPD arthritis.',
          keyFact: 'CPPD = chondrocalcinosis + hook-like osteophytes of the 2nd/3rd MCPs (can mimic hemochromatosis). Think CPPD with any atypical arthritis pattern, especially patellofemoral predominance or isolated SLAC wrist.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/calcium-pyrophosphate-dihydrate-deposition-disease',
          tags: ['arthritis', 'cppd', 'crystal', 'chondrocalcinosis'],
        },
      },
      {
        id: 'msk-arthritis-012',
        front: {
          question: 'What is neuropathic (Charcot) arthropathy, what are its 5 Ds, and what causes it in different anatomic sites?',
        },
        back: {
          answer:
            'The 5 Ds: Destruction, Dislocation, Debris, Disorganization, and no Demineralization.\nCauses by location:\n  Foot/ankle: diabetes (most common)\n  Shoulder/upper extremity: syringomyelia\n  Lower extremity (rare): syphilis (tabes dorsalis)',
          explanation: 'Neuropathic arthropathy results from loss of protective sensation leading to chronic, repetitive joint injury. The hypertrophic variant (more common) features dramatic bony destruction, fragmentation, subluxation, and sclerosis without osteopenia — "anarchy in a joint." The atrophic variant (most common in the shoulder) shows smooth, surgical-like bone resorption with sharp margins. In diabetic patients, Charcot typically affects the midfoot (tarsometatarsal joints), while osteomyelitis favors the forefoot.',
          keyFact: 'Charcot = 5 Ds: Destruction, Dislocation, Debris, Disorganization, no Demineralization. Diabetic Charcot = midfoot. Diabetic osteomyelitis = forefoot (at ulcer sites). Syringomyelia = upper extremity Charcot.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/charcot-joint',
          tags: ['arthritis', 'neuropathic', 'charcot', 'diabetes'],
        },
      },
      {
        id: 'msk-arthritis-013',
        front: {
          question: 'What is the classic radiographic appearance of calcium hydroxyapatite deposition (calcific tendinopathy), and where is it most common?',
        },
        back: {
          answer: 'Amorphous, globular, cloud-like calcification within a tendon, without internal trabeculation or cortication. Most common in the supraspinatus tendon at the shoulder.',
          explanation: 'Calcium hydroxyapatite deposits appear as amorphous, featureless calcification — any cortication or internal trabeculation suggests an alternative diagnosis (intra-articular body, enthesophyte, osteochondromatosis). Ultrasound shows hyperechoic shadowing foci; MRI shows low signal on all sequences. Barbotage (percutaneous needling) is an effective treatment. Milwaukee shoulder is the rare destructive intra-articular variant.',
          keyFact: 'Hydroxyapatite = amorphous calcification, NO cortication, NO trabeculation. Supraspinatus most common (critical zone, 1–2 cm from footprint). Longus colli calcification can mimic prevertebral abscess.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/calcific-tendinopathy',
          tags: ['arthritis', 'crystal', 'hydroxyapatite', 'shoulder'],
        },
      },
      {
        id: 'msk-arthritis-014',
        front: {
          question: 'What is the classic radiographic presentation of systemic lupus erythematosus (SLE) arthropathy?',
        },
        back: {
          answer: 'Reducible subluxations of the MCPs and PIPs without erosions. Periarticular osteopenia may be present. The Norgaard (ballcatcher\'s oblique) view best demonstrates the subluxations.',
          explanation: 'SLE arthropathy is non-erosive — this is the critical distinguishing feature from RA. The underlying pathophysiology is ligamentous laxity, not synovitis with cartilage destruction. Swan neck deformities are the most common deformity. With time, subluxations may become permanent with secondary bony remodeling, which should not be mistaken for erosions. Jaccoud arthropathy (from rheumatic fever or SLE) has the same imaging appearance.',
          keyFact: 'SLE arthropathy = reducible subluxations WITHOUT erosions (unlike RA). Swan neck deformity is most common. Ballcatcher view unmasks the subluxations. Non-erosive = key differentiator from RA.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/lupus-arthropathy',
          tags: ['arthritis', 'lupus', 'sle', 'hand'],
        },
      },
      {
        id: 'msk-arthritis-015',
        front: {
          question: 'What are the radiographic features of scleroderma in the hand?',
        },
        back: {
          answer: 'Acro-osteolysis (resorption of the distal phalangeal tufts), soft-tissue and periarticular calcifications, and skin/soft-tissue atrophy of the fingertips.',
          explanation: 'Scleroderma (systemic sclerosis) causes collagen deposition in skin and soft tissues. Acro-osteolysis of the distal phalanges is characteristic but not specific — the differential includes other collagen vascular diseases, neuropathy, hyperparathyroidism, frostbite, polyvinyl chloride exposure, and psoriasis. In frostbite, the thumb is typically spared. Dystrophic soft-tissue calcifications are common and can be extensive along the forearm.',
          keyFact: 'Scleroderma hand = acro-osteolysis (tuft resorption) + soft-tissue calcifications. Differential of acro-osteolysis: Scleroderma, Hyperparathyroidism, Injury (thermal), Neuropathy, Polyvinyl chloride (SHINP mnemonic).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/scleroderma-musculoskeletal-manifestations',
          tags: ['arthritis', 'scleroderma', 'hand', 'acro-osteolysis'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // BONE & SOFT TISSUE TUMORS
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-tumors',
    label: 'Bone & Soft Tissue Tumors',
    cards: [
      {
        id: 'msk-tumors-001',
        front: {
          question: 'What are the aggressive radiographic features of a bone lesion that should prompt concern for malignancy?',
        },
        back: {
          answer:
            'Aggressive features:\n• Indistinct margins / wide zone of transition\n• Permeative or moth-eaten pattern\n• Aggressive periosteal reaction (lamellated, sunburst, Codman triangle)\n• Soft-tissue mass\n• Endosteal scalloping\n• Cortical destruction',
          explanation: 'A wide zone of transition implies rapid growth. Periosteal reaction morphology reflects rate of growth: solid (slow growing) → lamellated/onion-skin → sunburst → Codman triangle (fastest). Any single aggressive feature may be enough to be alarming. In patients >40 years, aggressive lytic bone lesion = metastasis or myeloma until proven otherwise. In patients <20 years: eosinophilic granuloma, infection, or Ewing sarcoma.',
          keyFact: 'Age rule: >40 with aggressive bone lesion = mets/myeloma. <20 with aggressive lytic lesion = Ewing/EG/infection. Codman triangle = most aggressive periosteal reaction = malignancy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/aggressive-bone-lesion',
          tags: ['tumor', 'bone', 'malignant', 'radiograph'],
        },
      },
      {
        id: 'msk-tumors-002',
        front: {
          question: 'What is the matrix type and what does it imply for chondroid vs. osteoid vs. fibrous lesions?',
        },
        back: {
          answer:
            'Chondroid matrix: ring-and-arc or popcorn calcifications → chondroid tumor (enchondroma, chondrosarcoma).\nOsteoid matrix: fluffy, cloud-like, amorphous density → osteoblastic tumor (osteosarcoma).\nFibrous/ground-glass matrix: smudged trabeculae without discrete calcification → fibrous dysplasia.',
          explanation: 'Matrix type is one of the most testable features of bone tumors. Ring-and-arc calcifications in a medullary lesion = chondroid matrix = enchondroma or chondrosarcoma. Fluffy cloud-like bone formation = osteoid matrix = osteosarcoma. Ground-glass matrix (where normal trabeculae are replaced by hazy, blurred pattern) is pathognomonic of fibrous dysplasia. Identifying matrix type allows a targeted differential diagnosis.',
          keyFact: 'Ring-and-arc = chondroid. Fluffy cloud = osteoid (osteosarcoma). Ground glass = fibrous dysplasia. No matrix = fibrous cortical defect/NOF, GCT, simple bone cyst.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bone-tumour-matrix',
          tags: ['tumor', 'bone', 'matrix', 'classification'],
        },
      },
      {
        id: 'msk-tumors-003',
        front: {
          question: 'What is the classic presentation and radiographic appearance of osteoid osteoma?',
        },
        back: {
          answer: 'Night pain relieved by aspirin in a teenager or young adult. Radiograph/CT: lucent nidus (<1.5 cm) surrounded by reactive bone sclerosis, often with central calcification. Located in the diaphysis of the femur or tibia (~20% in posterior spinal elements).',
          explanation: 'Osteoid osteoma is a benign osteoid-producing lesion whose prostaglandin production causes pain. Aspirin (an inhibitor of prostaglandin synthesis) is classically effective. The double density sign on bone scan = intense uptake in the nidus surrounded by less intense reactive uptake. CT is the best modality to identify the nidus (often occult on MRI due to surrounding reactive marrow edema). Spinal osteoid osteoma is an important cause of painful scoliosis.',
          keyFact: 'Night pain + aspirin relief + lucent nidus + surrounding sclerosis = osteoid osteoma. Bone scan: double density sign. CT best for nidus. Treatment: radiofrequency ablation (first line).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteoid-osteoma',
          tags: ['tumor', 'bone', 'benign', 'osteoblastic'],
        },
      },
      {
        id: 'msk-tumors-004',
        front: {
          question: 'What differentiates osteoblastoma from osteoid osteoma?',
        },
        back: {
          answer: 'Osteoblastoma is histologically identical to osteoid osteoma but is >2 cm in size. Pain is NOT relieved by aspirin. Most common location: posterior spinal elements. Can be locally aggressive without metastatic potential.',
          explanation: 'The 2 cm threshold distinguishes them clinically and radiographically. Osteoblastoma is more commonly lytic with variable mineralization. Secondary aneurysmal bone cyst can develop within osteoblastoma, especially in spinal locations. The lack of aspirin response is an important clinical clue. A lytic posterior spinal element lesion in a young person = osteoblastoma or aneurysmal bone cyst; if mineralization is present, favor osteoblastoma.',
          keyFact: 'Osteoblastoma = osteoid osteoma >2 cm. No aspirin relief. Posterior spinal elements most common. If mineralization seen in a posterior element lesion → favor osteoblastoma over ABC.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteoblastoma',
          tags: ['tumor', 'bone', 'benign', 'spine'],
        },
      },
      {
        id: 'msk-tumors-005',
        front: {
          question: 'What are the four most important subtypes of osteosarcoma and their distinguishing features?',
        },
        back: {
          answer:
            '1. Conventional (75%): adolescents, distal femoral/proximal tibial metaphysis, osteoid matrix + aggressive periosteal reaction + soft-tissue mass.\n2. Telangiectatic: purely lytic, fluid-fluid levels on MRI (mimics ABC), NO matrix; solid nodular enhancement differentiates from ABC.\n3. Parosteal: arises from outer periosteum, posterior distal femur, cauliflower morphology, lucent line from cortex; least malignant (~90% 5-yr survival).\n4. Periosteal: inner periosteum, diaphysis, chondroid differentiation, <20 y.',
          explanation: 'All subtypes can metastasize to lung (calcified or non-calcified pulmonary nodules). Secondary osteosarcoma can arise in Paget disease or post-radiation. The parosteal subtype is the least malignant. Telangiectatic osteosarcoma mimics aneurysmal bone cyst but can be differentiated by the presence of solid nodular components with contrast enhancement.',
          keyFact: 'Conventional OS: adolescent + distal femur/proximal tibia metaphysis + cloud-like matrix + sunburst/Codman periosteal reaction. Parosteal: posterior distal femur + cauliflower shape. Telangiectatic: lytic + fluid levels + nodular enhancement (unlike ABC).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteosarcoma',
          tags: ['tumor', 'bone', 'malignant', 'osteosarcoma'],
        },
      },
      {
        id: 'msk-tumors-006',
        front: {
          question: 'What is an enchondroma and what features would raise concern for malignant transformation to chondrosarcoma?',
        },
        back: {
          answer: 'Enchondroma is a benign medullary hyaline cartilage tumor. Concerning features for malignant transformation: new pain without fracture, progressive endosteal scalloping, cortical destruction, soft-tissue mass, or progressive decrease in ring-and-arc mineralization.',
          explanation: 'Enchondromas are common incidental findings in the small bones of the hands (where they lack visible chondroid matrix) and long bones (where they show ring-and-arc calcification). MRI shows lobulated T2 hyperintense masses. Progressive increase in mineralization suggests maturation (benign). Ollier disease (multiple enchondromas) and Maffucci syndrome (enchondromas + venous malformations/phleboliths) carry increased malignant transformation risk, higher in Maffucci.',
          keyFact: 'New pain in a known enchondroma (without fracture) = malignant transformation until proven otherwise. Maffucci > Ollier in malignant transformation risk. In pelvic bones/shoulder girdle, enchondromas more likely to transform.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/enchondroma',
          tags: ['tumor', 'bone', 'benign', 'chondroid'],
        },
      },
      {
        id: 'msk-tumors-007',
        front: {
          question: 'What is the most common benign bone lesion, and what are its key radiographic features?',
        },
        back: {
          answer: 'Osteochondroma (exostosis) — the most common benign bone lesion. Key features: continuity of the host bone cortex and medullary cavity with the lesion; arises from the metaphysis; grows away from the epiphysis.',
          explanation: 'Osteochondromas are cartilage-capped bony outgrowths, typically pedunculated or sessile. The cartilage cap is what creates growth potential. A cap thickness >2 cm on MRI raises concern for malignant transformation to chondrosarcoma (as does new pain in the absence of fracture, or a new soft-tissue mass). Multiple hereditary exostoses (MHE) is an autosomal dominant condition with higher malignant transformation risk.',
          keyFact: 'Osteochondroma: cortical and medullary continuity with host bone. Cartilage cap >2 cm on MRI = suspect chondrosarcoma. Points away from epiphysis. MHE = familial, autosomal dominant.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteochondroma',
          tags: ['tumor', 'bone', 'benign', 'chondroid'],
        },
      },
      {
        id: 'msk-tumors-008',
        front: {
          question: 'Where does chondroblastoma occur and what is its unique MRI characteristic?',
        },
        back: {
          answer: 'Chondroblastoma is eccentric in the epiphysis of a long bone in a skeletally immature patient (most common: around the knee or proximal humerus). Unique MRI characteristic: T2 hypointense signal (most chondroid lesions are T2 bright).',
          explanation: 'The epiphyseal location in a skeletally immature patient and T2 low signal on MRI are the two most distinctive features of chondroblastoma. Calcified chondroid matrix is seen on CT in nearly all cases but on radiography only ~50% of the time. Treatment is curettage ± cryosurgery. The mnemonic GEIChA helps recall lucent epiphyseal lesions: Giant cell tumor, Eosinophilic granuloma, Infection, Chondroblastoma, Aneurysmal bone cyst (in the appropriate age/skeletally mature/immature context).',
          keyFact: 'Chondroblastoma = epiphysis of a skeletally IMMATURE patient + T2 DARK on MRI (opposite of other chondroid lesions). Classic sites: distal femur, proximal tibia, proximal humerus.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chondroblastoma',
          tags: ['tumor', 'bone', 'benign', 'epiphysis'],
        },
      },
      {
        id: 'msk-tumors-009',
        front: {
          question: 'What are the key features of giant cell tumor (GCT), and what conditions can produce multifocal GCTs?',
        },
        back: {
          answer: 'GCT: eccentric epiphyseal lucent lesion in skeletally MATURE patient (20–40 years), extending to the articular surface. Usually benign but locally aggressive (~5% malignant). Multifocal GCT associations: Paget disease and hyperparathyroidism (brown tumors).',
          explanation: 'GCT arises from the metaphysis but crosses the fused physis to involve the epiphysis. Skeletally mature = epiphysis CLOSED — this distinguishes GCT from chondroblastoma (immature). The lesion extends to the articular surface (subarticular). Secondary aneurysmal bone cyst can occur within GCT. Brown tumors of hyperparathyroidism are histologically indistinguishable from GCT. Treatment is curettage or resection.',
          keyFact: 'GCT mnemonic: "Gigantic, Eccentric, Articular, Mature" (GEAM). 20–40 y, skeletally mature, eccentric, subarticular. Multifocal GCT = hyperparathyroidism or Paget. Brown tumor = identical histology to GCT.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/giant-cell-tumour-of-bone',
          tags: ['tumor', 'bone', 'benign', 'epiphysis'],
        },
      },
      {
        id: 'msk-tumors-010',
        front: {
          question: 'What is Ewing sarcoma and how does it differ from osteomyelitis on imaging?',
        },
        back: {
          answer: 'Ewing sarcoma: malignant small round cell tumor in children/adolescents. Permeative bone destruction + lamellated periosteal reaction + large soft-tissue mass. Can mimic osteomyelitis (both cause systemic symptoms, fever, elevated ESR). Key differentiator: Ewing has a proportionally large soft-tissue mass relative to bone destruction.',
          explanation: 'Ewing sarcoma is the second most common pediatric primary bone tumor after osteosarcoma. It typically involves the diaphysis (or metadiaphysis) of long bones and flat bones (pelvis is common). The lamellated "onion-skin" periosteal reaction is classic but not specific. Systemic symptoms (fever, elevated ESR) and the permeative appearance create the differential with osteomyelitis and eosinophilic granuloma. Bone biopsy is essential.',
          keyFact: 'Ewing: child/adolescent + diaphysis + permeative + onion-skin periosteal reaction + LARGE soft-tissue mass. Aggressive pediatric lesion DDx: Ewing, Osteomyelitis, Eosinophilic granuloma, Neuroblastoma mets.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ewing-sarcoma',
          tags: ['tumor', 'bone', 'malignant', 'pediatric'],
        },
      },
      {
        id: 'msk-tumors-011',
        front: {
          question: 'What are the classic radiographic features of multiple myeloma, and how does it differ from metastatic disease on bone scan?',
        },
        back: {
          answer: 'Multiple myeloma: most common primary malignant bone tumor in adults >40. Presents as multiple lytic "punched-out" lesions or diffuse myelomatosis. Key difference from mets: myeloma may be NEGATIVE (cold) on Tc-99m MDP bone scan.',
          explanation: 'Myeloma originates from red marrow and therefore involves areas of active hematopoiesis (axial skeleton, proximal long bones). Pedicles are often spared (in contrast to metastases which can involve pedicles). The "punched-out" skull lesions are classic. Bone scan is unreliable for myeloma because it measures osteoblastic activity (absent in purely lytic lesions). Whole-body PET/CT and MRI are preferred for staging.',
          keyFact: 'Myeloma vs. mets: Myeloma spares pedicles, may be bone scan negative (cold). Mets often involve pedicles, usually bone scan positive (hot). Myeloma = most common primary malignant bone tumor >40 years.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/multiple-myeloma',
          tags: ['tumor', 'bone', 'malignant', 'myeloma'],
        },
      },
      {
        id: 'msk-tumors-012',
        front: {
          question: 'What are the major sources of lytic vs. sclerotic osseous metastases?',
        },
        back: {
          answer:
            'Purely lytic mets: lung (most common purely lytic), kidney, thyroid, GI (colon, stomach).\nSclerotic mets: prostate, carcinoid, medullary thyroid, mucinous tumors.\nBoth lytic and sclerotic: breast, bladder (transitional cell).',
          explanation: 'Bone metastases are 10× more common than primary bone tumors. They preferentially occur in the red marrow distribution (vertebrae, pelvis, ribs, skull, proximal long bones). Vertebral pedicle involvement on a frontal radiograph (the "winking owl" sign — one pedicle absent) suggests metastatic disease. Breast cancer mets are the most common cause of blastic mets in women; prostate is the most common cause in men.',
          keyFact: 'Lytic mets: Lung, Kidney, Thyroid, GI = "Look Killer, This Gives" (or BLT + Kidney + Thyroid). Sclerotic: Prostate (and Breast) are most common. Absent pedicle on frontal radiograph (winking owl) = met until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/skeletal-metastases',
          tags: ['tumor', 'bone', 'metastasis', 'lytic', 'sclerotic'],
        },
      },
      {
        id: 'msk-tumors-013',
        front: {
          question: 'What is a nonossifying fibroma (NOF), and what is the classic radiographic appearance?',
        },
        back: {
          answer: 'NOF is a common, benign, asymptomatic radiolucent lesion in the cortex of long bones in children/adolescents. Radiograph: eccentric, cortical-based, lucent lesion with a sclerotic margin and narrow zone of transition; no matrix. Most commonly at the distal femur or tibia.',
          explanation: 'NOF (also called fibrous cortical defect when smaller; <2 cm) is so characteristic radiographically that biopsy is rarely needed. It arises from the periosteum and replaces the cortex with fibrous tissue. It undergoes spontaneous sclerotic involution as the patient reaches adulthood. Pathologic fracture is rare but can occur with large lesions. The radiographic appearance is diagnostic and biopsy should be avoided.',
          keyFact: 'NOF = eccentric, metaphyseal, cortical-based, lucent, sclerotic rim, NO matrix, adolescents. Most common sites: distal femur, distal tibia. "Do not touch" lesion — biopsy not needed.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/non-ossifying-fibroma',
          tags: ['tumor', 'bone', 'benign', 'fibrous'],
        },
      },
      {
        id: 'msk-tumors-014',
        front: {
          question: 'What is fibrous dysplasia and what are its characteristic locations and imaging features?',
        },
        back: {
          answer: 'Fibrous dysplasia: benign, central, metadiaphyseal lesion with ground-glass matrix. Long bones may develop shepherd\'s crook deformity (femoral neck bowing). Monostotic (most common) or polyostotic. Polyostotic + precocious puberty + café-au-lait spots = McCune-Albright syndrome.',
          explanation: 'Fibrous dysplasia results from replacement of normal medullary bone by fibrous stroma with woven bone. The ground-glass matrix is the radiographic hallmark. In the skull base, it is expansile and can appear bizarre on MRI. The shepherd\'s crook deformity is varus bowing of the proximal femur from the weight of the body on weakened bone. Mazabraud syndrome = fibrous dysplasia + intramuscular myxomas.',
          keyFact: 'Fibrous dysplasia = ground-glass matrix + central metadiaphyseal location. Shepherd\'s crook = femoral neck bowing. McCune-Albright: polyostotic FD + precocious puberty + café-au-lait spots (coast of Maine border). Mazabraud: FD + myxomas.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fibrous-dysplasia',
          tags: ['tumor', 'bone', 'benign', 'fibrous'],
        },
      },
      {
        id: 'msk-tumors-015',
        front: {
          question: 'What are the imaging features of a simple bone cyst (SBC/UBC), and what is the fallen fragment sign?',
        },
        back: {
          answer: 'SBC: central, lucent, proximal diaphyseal lesion of humerus or femur in children. No periosteal reaction. Fallen fragment sign: cortical fracture fragment sinks to the dependent portion of the cyst, pathognomonic for SBC in the appropriate setting.',
          explanation: 'SBCs are always centrally located within bone — eccentricity would suggest an alternative diagnosis (e.g., ABC). They lack periosteal reaction unless fractured. MRI shows fluid-fluid levels (nonspecific). The fallen fragment sign is pathognomonic because only a truly fluid-filled cavity allows the fragment to sink. Up to 66% are complicated by pathologic fracture. Treatment: intra-lesional steroid injection or surgery.',
          keyFact: 'Fallen fragment sign = pathognomonic for SBC (fluid-filled cyst). SBC: central + proximal diaphysis of humerus or femur + children + no periosteal reaction. ABC is different: eccentric, can be posterior spine, has periosteal reaction ("buttressing").',
          radiopaediaUrl: 'https://radiopaedia.org/articles/simple-bone-cyst',
          tags: ['tumor', 'bone', 'benign', 'pediatric'],
        },
      },
      {
        id: 'msk-tumors-016',
        front: {
          question: 'What is chordoma, where does it arise, and what are its MRI characteristics?',
        },
        back: {
          answer: 'Chordoma is a malignant midline axial tumor arising from notochordal remnants. Classic locations: sacrococcygeal (most common) > clivus/spheno-occipital > C2 vertebral body. MRI: lobulated, T2 hyperintense, heterogeneously enhancing, destructive lytic mass.',
          explanation: 'Chordomas arise at either end of the notochord: spheno-occipital (35%) and sacrococcygeal (50%). They are locally aggressive with a high recurrence rate after surgery. Calcifications within the tumor represent necrosis, not bone formation. The lobulated T2 hyperintensity is characteristic. Sacral chordomas can become very large before detection.',
          keyFact: 'Chordoma = MIDLINE axial skeleton + notochordal remnant + T2 hyperintense lobulated mass. Locations: sacrum > clivus > C2. Calcifications = necrosis (not bone formation). High local recurrence.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/chordoma',
          tags: ['tumor', 'bone', 'malignant', 'notochord'],
        },
      },
      {
        id: 'msk-tumors-017',
        front: {
          question: 'What MRI features distinguish a benign lipoma from a well-differentiated liposarcoma (ALT)?',
        },
        back: {
          answer: 'Lipoma: nearly entirely fat signal (T1 bright, saturates on fat-sat), thin wispy septations only, no nodular enhancement. Well-differentiated liposarcoma/ALT: thickened or irregular septae, nodular enhancing foci, increased T2 signal on fluid-sensitive sequences.',
          explanation: 'Lipoma is the most common soft-tissue tumor and most common palpable mass. It is the most common explanation for any fatty mass. Well-differentiated liposarcoma (ALT) is locally aggressive but rarely metastasizes. Key MRI features that should prompt biopsy: thickened septae (>2 mm), nodular enhancement, or high T2 signal elements. Size alone cannot distinguish lipoma from ALT.',
          keyFact: 'Lipoma = pure fat + wispy septations only. ALT = fat + thick septae + nodular enhancement + elevated T2 elements. Any "lipoma" with these features → biopsy. Size alone is insufficient.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/well-differentiated-liposarcoma',
          tags: ['tumor', 'soft-tissue', 'lipoma', 'liposarcoma'],
        },
      },
      {
        id: 'msk-tumors-018',
        front: {
          question: 'What is pigmented villonodular synovitis (PVNS), what joint is most commonly affected, and what are the characteristic MRI findings?',
        },
        back: {
          answer: 'PVNS is a benign but locally aggressive synovial proliferative disorder. Knee is most common. MRI hallmark: diffuse low signal on T1 and T2 (with blooming on gradient echo) from hemosiderin deposition. Dense, brown joint effusion is classic.',
          explanation: 'Recurrent intra-articular hemorrhage deposits hemosiderin in the synovium, which is paramagnetic and causes T2 shortening ("blooming" artifact on gradient-echo sequences). Dense knee effusion on radiography is characteristic. Radiographs may show smooth extrinsic pressure erosions on bone. The same process extra-articularly is called giant cell tumor of the tendon sheath. Treatment is synovectomy; recurrence is common.',
          keyFact: 'PVNS = knee + dark on T1 AND T2 + blooming on GRE = hemosiderin. Dense brown effusion. DDx for multiple low-signal intra-articular foci: PVNS vs. synovial osteochondromatosis (osteochondromatosis shows calcified round bodies on radiograph).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pigmented-villonodular-synovitis',
          tags: ['tumor', 'soft-tissue', 'synovium', 'knee'],
        },
      },
      {
        id: 'msk-tumors-019',
        front: {
          question: 'What is myositis ossificans, how does it evolve radiographically, and what is the key differentiating feature from parosteal osteosarcoma?',
        },
        back: {
          answer: 'Myositis ossificans (MO): heterotopic bone formation in muscle post-trauma. Radiographic evolution: soft-tissue mass (wks 1–2) → amorphous calcification (wks 3–4) → peripheral ossification (wks 5–8). Key differentiator: MO ossifies PERIPHERALLY; parosteal osteosarcoma ossifies CENTRALLY.',
          explanation: 'In MO, the peripheral zone matures first into compact bone, while the center remains immature. In parosteal osteosarcoma, the densest bone is central with a lucent cleavage plane from the cortex. Biopsy of early MO should be avoided as histology can resemble sarcoma and lead to unnecessary surgery. Most common sites: elbow and thigh.',
          keyFact: 'MO: peripheral ossification (eggshell pattern). Parosteal OS: central ossification + cauliflower shape + posterior distal femur. Do NOT biopsy suspected MO early — histology mimics sarcoma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/myositis-ossificans',
          tags: ['tumor', 'soft-tissue', 'benign', 'ossification'],
        },
      },
      {
        id: 'msk-tumors-020',
        front: {
          question: 'What are the MRI features of synovial sarcoma and why is its name misleading?',
        },
        back: {
          answer: 'Synovial sarcoma is a high-grade mesenchymal tumor of adolescents/young adults. It has nothing to do with synovial tissue or joints despite its name. MRI: relatively homogeneous T2 hyperintensity near fluid signal intensity in proximity to (but not arising from) a joint. Triple signal on MRI: hemorrhage + cysts + solid components.',
          explanation: 'Synovial sarcoma is one of the few soft-tissue tumors that can calcify (in ~30% of cases). It most commonly occurs around the knee and foot. The T2 near-fluid signal can mimic a benign cystic lesion, but contrast shows solid enhancement. The "triple sign" on MRI describes heterogeneous internal architecture. A T2 bright, enhancing mass near a joint in a young person should prompt biopsy.',
          keyFact: 'Synovial sarcoma: adolescent/young adult + near a joint + T2 bright near-fluid signal but ENHANCES. Triple signal: solid + cystic + hemorrhagic. May calcify (~30%). NOT from synovium — the name is misleading.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/synovial-sarcoma',
          tags: ['tumor', 'soft-tissue', 'malignant', 'knee'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // INFECTION & OSTEOMYELITIS
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-infection',
    label: 'Infection & Osteomyelitis',
    cards: [
      {
        id: 'msk-infection-001',
        front: {
          question: 'What are the three main routes of osteomyelitis, and how does age affect the pattern of hematogenous osteomyelitis?',
        },
        back: {
          answer:
            'Routes: hematogenous spread, contiguous focus, direct inoculation.\nAge pattern (hematogenous):\n  Infants (<12 mo): physis-crossing vessels → metaphysis + epiphysis + joint all at risk.\n  Children: metaphysis only (physeal barrier).\n  Adults: metaphysis uncommon; spine most common site.',
          explanation: 'In children, the highly vascularized metaphyseal venules have sluggish flow facilitating bacterial invasion. In infants, bridging vessels across the physis allow infection to involve the epiphysis and joint. In adults, the physis is closed and hematogenous osteomyelitis is uncommon in long bones but common in the vertebral bodies (via arterial or Batson\'s venous plexus spread).',
          keyFact: 'Infant: metaphysis + epiphysis + joint at risk (bridging vessels). Child: metaphysis only. Adult hematogenous osteomyelitis → spine. Adult contiguous osteomyelitis → diabetic foot (forefoot ulcers).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteomyelitis',
          tags: ['infection', 'osteomyelitis', 'hematogenous', 'pediatric'],
        },
      },
      {
        id: 'msk-infection-002',
        front: {
          question: 'What are the MRI findings of osteomyelitis and which T1 pattern is most specific?',
        },
        back: {
          answer: 'Hallmark: replacement of normal fatty marrow signal. Confluent intramedullary T1 signal loss is most strongly associated with osteomyelitis. T2/STIR: high signal (edema/exudates). Gadolinium: helpful to identify non-enhancing necrotic bone (sequestrum) and delineate fluid collections.',
          explanation: 'MRI becomes positive within 3–5 days of infection onset (vs. 10–14 days for radiographs). Three T1 patterns are recognized: (1) confluent intramedullary — strongly associated with osteomyelitis; (2) hazy reticular — not reliably diagnostic; (3) subcortical — not associated with osteomyelitis. MRI has very high negative predictive value: a normal MRI essentially excludes osteomyelitis.',
          keyFact: 'MRI for osteomyelitis: Confluent intramedullary T1 signal loss = most specific. Hazy reticular and subcortical T1 patterns are NOT specific for osteomyelitis. Negative MRI = essentially excludes osteomyelitis (high NPV).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteomyelitis',
          tags: ['infection', 'osteomyelitis', 'mri', 'diagnosis'],
        },
      },
      {
        id: 'msk-infection-003',
        front: {
          question: 'What is a Brodie abscess and how does it differ from osteoid osteoma radiographically?',
        },
        back: {
          answer: 'Brodie abscess: subacute osteomyelitis presenting as a walled-off intra-osseous abscess — central lucency surrounded by sclerotic bone. Differs from osteoid osteoma: Brodie abscess is larger, may have a serpentine lucent tract, and clinical features of infection are usually present.',
          explanation: 'Brodie abscess is a form of subacute osteomyelitis where the host forms a fibrous and sclerotic wall around a walled-off infection, most common in the distal tibial metaphysis. The serpentine channel extending toward the physis is a classic feature of Brodie abscess that distinguishes it from the nidus of osteoid osteoma. Clinically, both can present with pain in young patients but Brodie abscess lacks the aspirin-responsive night pain.',
          keyFact: 'Brodie abscess = subacute osteomyelitis = central lucency + surrounding sclerosis (looks like osteoid osteoma). Differentiating feature: serpentine channel toward physis + clinical infection signs. Osteoid osteoma: <1.5 cm nidus + aspirin-responsive pain.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/brodie-abscess',
          tags: ['infection', 'osteomyelitis', 'subacute', 'eponym'],
        },
      },
      {
        id: 'msk-infection-004',
        front: {
          question: 'What organisms are classically associated with osteomyelitis in specific clinical scenarios?',
        },
        back: {
          answer:
            'Staphylococcus aureus: most common overall (hematogenous osteomyelitis).\nSalmonella: sickle cell disease (diaphysis).\nPseudomonas aeruginosa: puncture wound through a sneaker (foot).\nMycobacterium tuberculosis: spine (Pott disease).\nStreptococcus: neonatal.\nPolymicrobial: diabetic foot (contiguous spread).',
          explanation: 'Knowing organism-scenario associations is high-yield for boards. Sickle cell patients have ~100× increased risk of osteomyelitis and Salmonella is disproportionately represented. Pseudomonas is the classic organism for "puncture wound through rubber sole" because it colonizes the inner foam of sneakers. TB spine (Pott disease) features disc space narrowing, vertebral body destruction, and paraspinal abscess formation.',
          keyFact: 'Sickle cell osteomyelitis = Salmonella. Sneaker puncture wound = Pseudomonas. Hematogenous pediatric = Staph aureus. Spine = TB (Pott disease) until proven otherwise in endemic areas.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteomyelitis',
          tags: ['infection', 'osteomyelitis', 'organism', 'clinical'],
        },
      },
      {
        id: 'msk-infection-005',
        front: {
          question: 'How do you differentiate diabetic foot osteomyelitis from Charcot neuropathic arthropathy on MRI?',
        },
        back: {
          answer:
            'Osteomyelitis: associated with cutaneous ulcer + sinus tract to bone + confluent T1 marrow signal loss + cortical disruption. Usually forefoot (under pressure points).\nCharcot arthropathy: midfoot + polyarticular + intact cortex + no ulcer/sinus tract.',
          explanation: 'Both can show abnormal marrow signal on fluid-sensitive MRI sequences. The key differentiators are location (forefoot osteomyelitis vs. midfoot Charcot), cortical integrity (disrupted in osteomyelitis), presence of cutaneous ulcer/sinus tract (osteomyelitis), and polyarticular distribution (Charcot). Confluent intramedullary T1 loss is the most specific MRI sign for osteomyelitis in this context.',
          keyFact: 'Diabetic foot: Osteomyelitis = forefoot + ulcer + sinus tract. Charcot = midfoot + no ulcer + polyarticular + cortex intact. T1 confluent signal loss at bone adjacent to an ulcer = osteomyelitis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/diabetic-foot',
          tags: ['infection', 'diabetic-foot', 'charcot', 'mri'],
        },
      },
      {
        id: 'msk-infection-006',
        front: {
          question: 'What are the scintigraphic (nuclear medicine) approaches for diagnosing osteomyelitis and when is each preferred?',
        },
        back: {
          answer:
            'Tc-99m MDP bone scan: positive in all 3 phases (flow, blood pool, delayed) in osteomyelitis. Positive within 24–48 hours. Cellulitis: positive on flow + blood pool only (negative delayed).\nWBC scan (In-111 or Tc-99m HMPAO): more specific than bone scan. Combined WBC + sulfur colloid scan: highest specificity (discordant activity in infected marrow).\nLimitation: WBC scan is NOT sensitive for spinal osteomyelitis.',
          explanation: 'Three-phase bone scan is highly sensitive but not specific. Combining WBC scan with sulfur colloid scan improves specificity: in infected marrow, WBC scan shows increased activity while sulfur colloid shows decreased activity (discordant = osteomyelitis). WBC scans are not reliable for spinal osteomyelitis because leukocytes cannot migrate efficiently into encapsulated spinal infections.',
          keyFact: 'Three-phase bone scan: all 3 phases positive = osteomyelitis. Flow + blood pool only = cellulitis. WBC scan: not sensitive for spinal osteomyelitis. Combined WBC + sulfur colloid = most specific scintigraphic method.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/osteomyelitis',
          tags: ['infection', 'osteomyelitis', 'nuclear-medicine', 'scintigraphy'],
        },
      },
      {
        id: 'msk-infection-007',
        front: {
          question: 'What is necrotizing fasciitis and what is the key CT finding?',
        },
        back: {
          answer: 'Necrotizing fasciitis is a rapidly progressive, life-threatening soft-tissue infection (usually Group A Streptococcus or Clostridium). Key CT finding: gas bubbles within the fascial planes (subcutaneous or deep soft-tissue gas).',
          explanation: 'Necrotizing fasciitis is a surgical emergency requiring immediate debridement. Gas-forming organisms produce characteristic soft-tissue gas. CT is the imaging modality of choice for rapid diagnosis. The presence of fascial plane gas (not just soft-tissue emphysema) is the diagnostic finding. MRI is more sensitive but too time-consuming in an emergency setting. Early clinical diagnosis is essential as mortality is very high with delayed treatment.',
          keyFact: 'Necrotizing fasciitis = gas in soft-tissue fascial planes on CT = surgical emergency. Do not delay surgery for imaging if clinical suspicion is high. Gas = key CT finding.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/necrotising-fasciitis',
          tags: ['infection', 'soft-tissue', 'necrotizing-fasciitis', 'ct'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SPORTS & TENDONS
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-sports',
    label: 'Sports & Tendons',
    cards: [
      {
        id: 'msk-sports-001',
        front: {
          question: 'What is the most commonly torn rotator cuff tendon, where does it tear, and what is a "massive" rotator cuff tear?',
        },
        back: {
          answer: 'Supraspinatus is most commonly torn, at the "critical zone" approximately 1 cm proximal to the footprint (insertion on the greater tuberosity). A massive rotator cuff tear involves ≥2 of the 4 rotator cuff muscles/tendons.',
          explanation: 'The critical zone is relatively hypovascular and prone to degeneration. Partial tears are more common than full-thickness tears, and articular surface (undersurface) partial tears are ~3× more common than bursal surface partial tears. A complete rotator cuff tear allows communication between the glenohumeral joint and the subacromial-subdeltoid bursa — if gadolinium injected into the joint appears in the bursa, a full-thickness tear is confirmed.',
          keyFact: 'Supraspinatus tears most common at critical zone (1 cm from footprint). Full-thickness tear: GH joint and subacromial bursa communicate. Articular surface partial tears are 3× more common than bursal. Infraspinatus: 2nd most torn (rarely isolated — if isolated, think posterior instability).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rotator-cuff-tear',
          tags: ['sports', 'shoulder', 'rotator-cuff', 'mri'],
        },
      },
      {
        id: 'msk-sports-002',
        front: {
          question: 'What are the secondary MRI findings of ACL tear?',
        },
        back: {
          answer:
            'Secondary ACL tear findings:\n• Bone contusions: lateral femoral condyle + posterolateral tibial plateau (kissing contusions)\n• PCL buckling (anterior tibial translation)\n• Segond fracture (lateral tibial plateau avulsion)\n• Anterior tibial translation on MRI',
          explanation: 'ACL injury is typically caused by a pivot-shift or direct blow. At the time of injury, the lateral femoral condyle impacts the posterolateral tibial plateau, causing the characteristic bone marrow edema pattern. This pattern is so specific that it alone should prompt careful ACL evaluation. Associated injuries include medial meniscal tears, MCL tears (O\'Donoghue\'s triad: ACL + MCL + medial meniscus), and posterolateral corner injuries.',
          keyFact: 'ACL tear hallmark bone contusion: lateral femoral condyle + posterolateral tibial plateau. O\'Donoghue triad: ACL + MCL + medial meniscus. Segond fracture on radiograph = ACL injury until proven otherwise.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/anterior-cruciate-ligament-tear',
          tags: ['sports', 'knee', 'acl', 'mri'],
        },
      },
      {
        id: 'msk-sports-003',
        front: {
          question: 'Describe the types of meniscal tears and which is most common.',
        },
        back: {
          answer:
            'Types:\n• Oblique/horizontal: most common; posterior horn medial meniscus; associated with parameniscal cysts.\n• Vertical/longitudinal: follows meniscal contour; bucket-handle = displaced variant.\n• Radial/transverse: perpendicular to meniscal arc; associated with extrusion; ghost meniscus sign.\n• Complex: combination.',
          explanation: 'A meniscal tear is diagnosed on MRI when abnormal T2 signal extends to an articular surface. Myxoid degeneration (globular signal not reaching the surface) is NOT a tear. The bucket-handle tear is a longitudinal vertical tear with the free inner edge displaced — the double PCL sign (medial meniscus) and double delta sign (lateral meniscus) are specific findings. Radial tears are associated with meniscal extrusion and rapid OA progression.',
          keyFact: 'Most common meniscal tear: oblique/horizontal cleavage of the posterior horn medial meniscus. Bucket handle = double PCL sign (medial) or double delta sign (lateral). Radial tear = ghost meniscus sign + meniscal extrusion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/meniscal-tears',
          tags: ['sports', 'knee', 'meniscus', 'mri'],
        },
      },
      {
        id: 'msk-sports-004',
        front: {
          question: 'What are the types and MRI features of SLAP tears, and which type changes surgical management?',
        },
        back: {
          answer:
            'SLAP = Superior Labrum Anterior-to-Posterior tear.\n  Type I: Fraying of superior labrum only; biceps intact.\n  Type II: Most common; labral stripping from glenoid + biceps anchor involved.\n  Type III: Bucket-handle tear of superior labrum; biceps intact.\n  Type IV: Bucket-handle + tear extending into biceps tendon → changes management (biceps tenodesis required).',
          explanation: 'SLAP tears are diagnosed when contrast or fluid extends into the superior labrum on MRI arthrography. Type II is the most common and most clinically significant. In patients >40 years, SLAP tears are often associated with rotator cuff tears. SLAP tears are typically seen with overhead athletes (throwers, swimmers). MR arthrography in the ABER position (abduction-external rotation) is most sensitive for detection.',
          keyFact: 'Type II SLAP = most common + most surgically relevant. Type IV = biceps tendon involved = adds biceps tenodesis to surgery. ABER position MR arthrography = most sensitive for SLAP. SLAP does NOT typically cause instability (unlike Bankart).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/slap-lesion',
          tags: ['sports', 'shoulder', 'labrum', 'slap'],
        },
      },
      {
        id: 'msk-sports-005',
        front: {
          question: 'What instability lesions are associated with anterior glenohumeral dislocation?',
        },
        back: {
          answer:
            'Hill-Sachs: posterolateral humeral head impaction fracture.\nBankart (soft tissue): anteroinferior labral detachment with periosteal stripping.\nBony Bankart: Bankart + anterior glenoid rim fracture.\nALPSA: Bankart variant with intact periosteum (labrum rolled inferomedially).\nPerthes: avulsion with labrum in anatomic position (hardest to detect).\nHAGL: humeral avulsion of IGHL (humeral side).',
          explanation: 'Anterior dislocation (>95% of all dislocations) causes the posterolateral humeral head to impact the anteroinferior glenoid. The Hill-Sachs lesion is an impaction fracture of the posterolateral humeral head, best seen on internal rotation views or above the level of the coracoid on axial MRI. A bony Bankart increases risk of recurrence and often requires surgical glenoid reconstruction. HAGL is associated with subscapularis tendon tears.',
          keyFact: 'Anterior dislocation injuries: Hill-Sachs (humerus) + Bankart (glenoid). HAGL = humeral side IGHL avulsion (associated with subscapularis tear). ALPSA = Bankart with intact periosteum (labrum rolled medially, not superiorly like GLOM sign).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/bankart-lesion',
          tags: ['sports', 'shoulder', 'instability', 'labrum'],
        },
      },
      {
        id: 'msk-sports-006',
        front: {
          question: 'What is posterior glenohumeral dislocation, and what are its classic radiographic signs?',
        },
        back: {
          answer:
            'Posterior dislocation: 2–3% of all shoulder dislocations; caused by seizure, electrocution, or direct blow. Signs:\n• Lightbulb sign: fixed internal rotation gives the humeral head a round appearance.\n• Rim sign: loss of overlap between the humeral head and glenoid on the AP/Grashey view.\n• Trough sign (reverse Hill-Sachs): anteromedial humeral head impaction fracture.',
          explanation: 'Posterior dislocation is commonly missed because the standard frontal radiograph may appear near-normal. The Grashey view normally shows clear joint space; overlap implies posterior displacement. The axillary or transscapular Y view is most definitive for confirming posterior dislocation. The reverse Bankart (posterior glenoid fracture) is the counterpart to the Bankart lesion.',
          keyFact: 'Posterior dislocation = seizure or electrocution. Lightbulb sign on AP = fixed internal rotation. Rim sign on Grashey = overlap of head and glenoid. Trough sign = reverse Hill-Sachs (anteromedial humeral head impaction).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-glenohumeral-dislocation',
          tags: ['sports', 'shoulder', 'dislocation', 'posterior'],
        },
      },
      {
        id: 'msk-sports-007',
        front: {
          question: 'What is the ACJ (acromioclavicular joint) classification for injuries, and which grades require surgery?',
        },
        back: {
          answer:
            'Rockwood (modified Tossy) classification:\n  Grade I: AC ligament sprain; radiograph normal.\n  Grade II: AC ligament disruption; CC ligaments intact.\n  Grade III: AC and CC ligament disruption; CC space widened 25–100%.\n  Grades IV–VI: Progressive displacement (posterior/superior/inferior); usually surgical.\nSurgery: Grades IV, V, VI. Grade III controversial.',
          explanation: 'AC joint injuries are most common in young athletes from lateral shoulder blows. The CC distance (normally <11–13 mm) reflects CC ligament integrity; asymmetry >50% is abnormal. Grade V is essentially a severe Grade III (>100% CC widening). Grade VI is inferior clavicular dislocation (rare). Stress views (patient holds weights) can unmask subtle displacement.',
          keyFact: 'AC joint: Normal CC distance <11–13 mm. >50% asymmetry = abnormal. Grade IV/V/VI = surgical. Grade III = controversial. Assess CC distance for CC ligament integrity and AC step-off for AC ligament.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acromioclavicular-joint-separation',
          tags: ['sports', 'shoulder', 'ac-joint', 'classification'],
        },
      },
      {
        id: 'msk-sports-008',
        front: {
          question: 'What is femoroacetabular impingement (FAI), what are the two types, and what is the alpha angle?',
        },
        back: {
          answer:
            'FAI: abnormal abutment of femur and acetabulum at extremes of motion → labral tears and early OA.\n  Cam type: osseous convexity of femoral head-neck junction; most common in young males; alpha angle >55° on oblique axial MRI/CT.\n  Pincer type: acetabular overcoverage; middle-aged females; crossover sign on frontal radiograph.',
          explanation: 'The alpha angle measures the severity of the femoral head-neck asphericity: a line through the femoral neck axis is intersected by a line from the femoral head center to the most proximal abnormal contour. Cam impingement causes anterosuperior acetabular labral tears and chondrolabral junction injury. Pincer impingement causes posterior labral injury from contrecoup effect. Most cases are mixed type.',
          keyFact: 'Alpha angle >55° = cam FAI. Crossover sign (anterior acetabular wall crosses posterior on frontal film) = pincer FAI. Cam = young male athlete. Pincer = middle-aged female. Anterosuperior labrum torn in cam FAI.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/femoroacetabular-impingement',
          tags: ['sports', 'hip', 'fai', 'labrum'],
        },
      },
      {
        id: 'msk-sports-009',
        front: {
          question: 'What is the "magic angle" artifact in tendon MRI and how is it identified?',
        },
        back: {
          answer: 'Magic angle artifact: artifactual increased signal in a tendon when its fibers are oriented at 55° to the main magnetic field, on short TE sequences (T1, PD). The signal disappears on long TE sequences (T2). Tendon morphology remains normal.',
          explanation: 'A normal tendon is dark (low signal) on all MRI sequences. When a curved tendon (such as the rotator cuff or Achilles at the ankle) is at 55° to the B0 field, signal increases artifactually on T1 and PD sequences — this is the magic angle effect. This is commonly seen in the peroneal tendons at the lateral ankle and in the supraspinatus. It can mimic tendinopathy. Long TE sequences (T2 or T2 fat-sat) eliminate the artifact.',
          keyFact: 'Magic angle = increased signal in normal tendon at 55° to magnet, only on SHORT TE (T1, PD). Absent on long TE (T2). Tendon morphology must be normal. Common: peroneals at ankle, supraspinatus. Not pathologic.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/magic-angle-effect',
          tags: ['sports', 'mri', 'artifact', 'tendon'],
        },
      },
      {
        id: 'msk-sports-010',
        front: {
          question: 'What is posterior tibial tendon dysfunction, and what secondary findings are seen on MRI?',
        },
        back: {
          answer: 'PTT dysfunction: chronic degeneration of the posterior tibial tendon → acquired adult flatfoot. On MRI: tenosynovitis, tendinopathy (intrasubstance signal), or complete tear. Secondary: spring ligament injury, pes planus, medial malleolus periosteal reaction.',
          explanation: 'The PTT is the primary dynamic supporter of the longitudinal arch; the spring (calcaneonavicular) ligament is the primary static supporter. Dysfunction typically begins with tenosynovitis and progresses to partial then complete tear. Most common in overweight, diabetic, or middle-aged women. The "too many toes" sign on physical exam (visible toes lateral to the heel on posterior view) and single heel raise test are clinical correlates.',
          keyFact: 'PTT tear = most common cause of acquired adult flatfoot. Spring ligament injury always accompanies significant PTT dysfunction. PTT courses posterior to medial malleolus in the tarsal tunnel.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/posterior-tibial-tendon-dysfunction',
          tags: ['sports', 'ankle', 'tendon', 'flatfoot'],
        },
      },
      {
        id: 'msk-sports-011',
        front: {
          question: 'What is the tarsal tunnel and what structures pass through it in order?',
        },
        back: {
          answer: 'Tarsal tunnel: fibro-osseous tunnel posterior to the medial malleolus, deep to the flexor retinaculum. Contents (anterior to posterior): Tom (Tibialis posterior tendon), Dick (Digitorum longus tendon), And (posterior tibial Artery + nerve), Harry (Hallucis longus tendon). Mnemonic: Tom, Dick, ANd Harry.',
          explanation: 'The tarsal tunnel is the medial ankle equivalent of the carpal tunnel. It is bounded by the medial malleolus anteriorly, the calcaneus laterally, and the flexor retinaculum superficially. Tarsal tunnel syndrome results from compression of the posterior tibial nerve and presents with plantar burning/tingling. Causes include ganglion cysts, lipomas, or accessory muscles.',
          keyFact: 'Tarsal tunnel contents (anterior to posterior): Tom, Dick, ANd Harry = Tibialis posterior, Digitorum longus, tibial Artery + Nerve, Hallucis longus. FCR is NOT in the carpal tunnel (analogous to how FCU is not in the tarsal tunnel).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tarsal-tunnel',
          tags: ['sports', 'ankle', 'anatomy', 'mnemonic'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // METABOLIC BONE DISEASE
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-metabolic',
    label: 'Metabolic Bone Disease',
    cards: [
      {
        id: 'msk-metabolic-001',
        front: {
          question: 'What are the T-score thresholds for osteopenia and osteoporosis on DEXA, and when is the Z-score used?',
        },
        back: {
          answer:
            'T-score (vs. young sex-matched adults):\n  Normal: T-score ≥ −1.0\n  Osteopenia: T-score −1.0 to −2.5\n  Osteoporosis: T-score ≤ −2.5\nZ-score used for pre-menopausal females and males <50 years. Z ≤ −2.0 = "below expected range for age."',
          explanation: 'DEXA measures bone mineral density at the lumbar spine (L1–L4) and hip. The T-score compares to healthy young adults; the Z-score compares to age- and sex-matched peers. Z-score is used in younger patients because their expected bone density differs from the young-adult reference population. The forearm can be imaged as a third site if hip or spine is not assessable.',
          keyFact: 'T-score: Osteoporosis ≤ −2.5. Osteopenia: −1.0 to −2.5. T-score used in postmenopausal women and men ≥50. Z-score for younger patients (pre-menopausal women, men <50). DEXA sites: lumbar spine + hip (+ forearm if needed).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/dual-energy-x-ray-absorptiometry',
          tags: ['metabolic', 'osteoporosis', 'dexa', 'measurement'],
        },
      },
      {
        id: 'msk-metabolic-002',
        front: {
          question: 'What is a Looser zone and in what conditions does it occur?',
        },
        back: {
          answer: 'A Looser zone (pseudofracture) is an incomplete stress fracture filled with poorly mineralized osteoid, appearing as a radiolucent cortical line perpendicular to the bone cortex. It occurs in osteomalacia (vitamin D deficiency). Classic locations: medial proximal femur, pubic rami, distal scapulae.',
          explanation: 'Osteomalacia (adults) and rickets (children) are caused by impaired bone matrix mineralization, usually from vitamin D deficiency. Looser zones represent abnormal "fractures" that heal with unmineralized osteoid rather than calcium. They are highly specific for osteomalacia when bilateral and symmetric. Insufficiency fractures complicate severe osteomalacia.',
          keyFact: 'Looser zone = radiolucent band perpendicular to cortex = osteomalacia (pseudofracture). Classic sites: medial femoral neck, pubic ramus, lateral scapular border. Looser zone is NOT seen in osteoporosis or renal osteodystrophy (latter has rugger jersey spine instead).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/looser-zones',
          tags: ['metabolic', 'osteomalacia', 'vitamin-d', 'fracture'],
        },
      },
      {
        id: 'msk-metabolic-003',
        front: {
          question: 'What are the radiographic hallmarks of hyperparathyroidism and where does subperiosteal resorption occur?',
        },
        back: {
          answer:
            'Subperiosteal resorption: most specific at radial aspect of the 2nd and 3rd middle phalanges (also acromial ends of clavicles, medial proximal tibial metaphysis).\nOther findings: salt-and-pepper skull, brown tumors, diffuse osteopenia, soft-tissue calcifications.\nChondrocalcinosis: more common in primary hyperparathyroidism.',
          explanation: 'Primary hyperparathyroidism (parathyroid adenoma) = hypercalcemia + hypophosphatemia + elevated PTH. Secondary = renal failure + normal/low calcium + elevated PTH. Subperiosteal resorption of the radial (thumb-side) surfaces of the middle phalanges is the most specific radiographic sign. Brown tumors (osteoclast-mediated lytic lesions) are histologically identical to GCT. The salt-and-pepper skull reflects trabecular resorption.',
          keyFact: 'Hyperparathyroidism hallmark: subperiosteal resorption of radial aspects of 2nd/3rd middle phalanges (most specific sign). Brown tumor = hyperparathyroidism (looks like GCT). Salt-and-pepper skull.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/hyperparathyroidism',
          tags: ['metabolic', 'hyperparathyroidism', 'resorption', 'radiograph'],
        },
      },
      {
        id: 'msk-metabolic-004',
        front: {
          question: 'What is the rugger jersey spine and in what condition is it seen?',
        },
        back: {
          answer: 'Rugger jersey spine: alternating horizontal bands of sclerosis at the vertebral endplates (superior and inferior), giving a striated appearance. Seen in renal osteodystrophy (secondary hyperparathyroidism from renal failure).',
          explanation: 'Renal osteodystrophy is caused by the combined effects of osteomalacia (from abnormal vitamin D metabolism) and secondary hyperparathyroidism from chronic renal failure. The endplate sclerosis mimics a rugby jersey\'s horizontal stripes. Paget disease produces a "picture frame" vertebral body (entire periphery sclerotic) which is different from rugger jersey (only endplates). Osteopetrosis can produce a similar "sandwich" vertebra but is diffusely sclerotic throughout.',
          keyFact: 'Rugger jersey = endplate sclerosis only = renal osteodystrophy. Picture frame = entire cortical periphery sclerotic = Paget disease. Sandwich/rugger in the context of diffuse sclerosis = osteopetrosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/renal-osteodystrophy',
          tags: ['metabolic', 'renal-osteodystrophy', 'spine', 'sclerosis'],
        },
      },
      {
        id: 'msk-metabolic-005',
        front: {
          question: 'What are the three sequential phases of Paget disease and what is the classic long bone sign in the lytic phase?',
        },
        back: {
          answer:
            'Phases:\n  Phase I (lytic): osteoclastic resorption; "blade of grass" or "flame-shaped" margin in long bones; osteoporosis circumscripta in skull.\n  Phase II (mixed): lytic + sclerotic; "cotton wool skull" in skull; "picture frame" or "ivory" vertebra in spine.\n  Phase III (sclerotic): dense bone, coarsened trabeculae, cortical thickening; bone enlargement.',
          explanation: 'Paget disease affects the skull, pelvis, and spine most commonly, followed by the proximal femur, tibia, and humerus. The blade of grass sign describes the sharply marginated advancing lytic front of Paget disease in a long bone, which helps distinguish it from neoplasm (which has an ill-defined leading edge). The fully Pagetoid bone is at risk for fracture ("chalk stick" fracture), malignant degeneration (osteosarcoma), and secondary OA.',
          keyFact: 'Paget phases: Lytic (blade of grass, osteoporosis circumscripta) → Mixed (cotton wool skull, picture frame vertebra) → Sclerotic (dense, enlarged bone). Feared complication: osteosarcoma (most common secondary malignancy in Paget). High output cardiac failure: from increased vascularity.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pagets-disease-of-bone',
          tags: ['metabolic', 'paget', 'bone', 'phases'],
        },
      },
      {
        id: 'msk-metabolic-006',
        front: {
          question: 'What is avascular necrosis (AVN), what are its causes, and what is the double line sign on MRI?',
        },
        back: {
          answer: 'AVN = focal ischemic necrosis of epiphyseal bone. Causes: trauma (femoral neck fractures, hip dislocation), steroids, alcohol, sickle cell, Gaucher disease, radiation, caisson disease. Double line sign: on T2 MRI, a peripheral low-signal rim with an inner high-signal band = pathognomonic for AVN.',
          explanation: 'The femoral head is the most common site for AVN due to its precarious blood supply (medial femoral circumflex artery via posterosuperior epiphyseal branches). The typical MRI appearance is a geographic subchondral lesion with serpentine T1 low-signal rim. The double line sign on T2 (inner reactive hyperemia adjacent to necrosis) is considered pathognomonic. Bilateral AVN suggests a systemic cause. Bone marrow edema in 50% and correlates with pain.',
          keyFact: 'AVN double line sign on T2 = pathognomonic. Anterosuperior femoral head (10 o\'clock and 2 o\'clock positions on coronal MRI) = most common location. Bilateral AVN = systemic cause (steroids, sickle cell, Gaucher). Early AVN: core decompression. Late AVN (subchondral collapse): arthroplasty.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/avascular-necrosis',
          tags: ['metabolic', 'avn', 'hip', 'mri'],
        },
      },
      {
        id: 'msk-metabolic-007',
        front: {
          question: 'What are the characteristic skeletal findings of sickle cell disease?',
        },
        back: {
          answer:
            'Three main osseous manifestations:\n1. Bone infarcts: H-shaped/Lincoln-log vertebrae (endplate AVN), diaphyseal infarcts, femoral head AVN.\n2. Increased osteomyelitis risk (~100×; Salmonella most common organism).\n3. Marrow expansion: hair-on-end skull, widened medullary spaces, osteopenia.',
          explanation: 'H-shaped vertebrae result from central endplate depression from AVN, sparing the lateral margins. A small calcified spleen (from repeated splenic infarctions = autosplenectomy) in the presence of AVN strongly suggests sickle cell disease. Dactylitis (hand-foot syndrome) occurs in young children with persistent hematopoietic marrow in the digits. Distinguishing diaphyseal bone infarct from Salmonella osteomyelitis is a common diagnostic challenge.',
          keyFact: 'Sickle cell: H-shaped vertebrae (endplate AVN) + small calcified spleen (autosplenectomy) + osteomyelitis (Salmonella). Differentiating infarct from osteomyelitis: clinical + combined WBC/sulfur colloid scan. Dactylitis in young children.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/sickle-cell-disease-musculoskeletal',
          tags: ['metabolic', 'sickle-cell', 'hematologic', 'bone'],
        },
      },
      {
        id: 'msk-metabolic-008',
        front: {
          question: 'What is Gaucher disease, and what are the classic skeletal findings?',
        },
        back: {
          answer: 'Gaucher disease: autosomal recessive glucocerebrosidase deficiency → Gaucher cell accumulation in marrow. Skeletal findings: Erlenmeyer flask deformity (failure of metaphyseal remodeling), H-shaped vertebrae, bone infarcts, AVN, and splenomegaly.',
          explanation: 'Gaucher disease is the most common lysosomal storage disease. Gaucher cells expand the marrow cavity and interfere with normal bone remodeling. The Erlenmeyer flask deformity (widening and failure of tubulation of the distal femur) results from abnormal modeling. H-shaped vertebrae are also seen in sickle cell; the spleen size differentiates them: Gaucher = splenomegaly; sickle cell = small calcified spleen (autosplenectomy).',
          keyFact: 'Gaucher = Erlenmeyer flask deformity (distal femur) + H-shaped vertebrae + AVN + splenomegaly. Sickle cell also has H-shaped vertebrae but has a SMALL calcified spleen. Spleen size differentiates the two.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/gaucher-disease',
          tags: ['metabolic', 'gaucher', 'marrow', 'storage-disease'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // AVN & BONE MARROW
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-avn-marrow',
    label: 'AVN & Bone Marrow',
    cards: [
      {
        id: 'msk-avn-marrow-001',
        front: {
          question: 'What are the named AVN conditions by anatomic site?',
        },
        back: {
          answer:
            'Named AVN conditions:\n• Femoral head (adults): Legg-Calvé-Perthes (children)\n• Navicular (foot): Kohler disease (children), Müeller-Weiss disease (adults)\n• Lunate (wrist): Kienbock disease\n• Scaphoid (proximal pole): post-fracture\n• Second metatarsal head: Freiberg infraction\n• Capitellum: Panner disease (children)\n• Vertebral body endplate: Kümmell disease (post-traumatic)',
          explanation: 'Each named AVN condition involves epiphyseal or subarticular bone with tenuous blood supply. Kienbock disease is associated with negative ulnar variance (shorter ulna increases load on the lunate). Freiberg infraction occurs in young women from repetitive stress (high-heel shoes). Legg-Calvé-Perthes disease affects boys 4–10 years and must be distinguished from transient synovitis (which is the most common cause of acute hip pain in children).',
          keyFact: 'Kienbock = lunate AVN + negative ulnar variance. Freiberg = 2nd metatarsal head AVN (young women). Köhler = navicular AVN (children, self-limited). Müeller-Weiss = navicular AVN (adult women, progressive). Kümmell = AVN of compression fracture (gas in vertebral body).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/avascular-necrosis',
          tags: ['avn', 'bone-marrow', 'eponymous', 'named'],
        },
      },
      {
        id: 'msk-avn-marrow-002',
        front: {
          question: 'What is Kümmell disease and how is it identified on imaging?',
        },
        back: {
          answer: 'Kümmell disease: osteonecrosis within a vertebral body compression fracture — gas (vacuum phenomenon) within the vertebral body fracture. CT or radiograph shows gas within the fracture cleft (intravertebral vacuum sign), indicating osteonecrosis rather than healing bone.',
          explanation: 'Kümmell disease must be distinguished from vacuum phenomenon in a degenerative intervertebral disc. Gas in the disc is common and benign; gas within the vertebral body fracture cleft indicates osteonecrosis and impending collapse. The intravertebral vacuum sign predicts a higher risk of subsequent vertebral collapse and neurological compromise. Treatment may include vertebroplasty or kyphoplasty.',
          keyFact: 'Gas in intervertebral DISC = vacuum phenomenon = degenerative (benign). Gas in VERTEBRAL BODY compression fracture = Kümmell disease = osteonecrosis (serious). Key distinction tested on boards.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/kummell-disease',
          tags: ['avn', 'vertebra', 'spine', 'fracture'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // JOINT-SPECIFIC HIGH-YIELD
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-joints',
    label: 'Joint-Specific High-Yield',
    cards: [
      {
        id: 'msk-joints-001',
        front: {
          question: 'What are the contents of the carpal tunnel and what does NOT pass through it?',
        },
        back: {
          answer:
            'Contents (10 structures): 4 FDP tendons + 4 FDS tendons + FPL + median nerve.\nDoes NOT pass through: FCR (in its own tunnel), FCU, palmaris longus, ulnar nerve and artery (pass through Guyon\'s canal), FPB (intrinsic).',
          explanation: 'The carpal tunnel is bounded by the carpal bones dorsally and the transverse carpal ligament (flexor retinaculum) volarly. The four bony prominences are the pisiform, scaphoid tubercle, hook of hamate, and trapezium tubercle. Carpal tunnel syndrome (median nerve compression) presents with thenar wasting and paresthesias in the thumb/index/middle/radial ring finger. Association with dialysis, pregnancy, DM, hypothyroidism.',
          keyFact: 'Carpal tunnel: 4 FDP + 4 FDS + FPL + median nerve = 10 structures. FCR is NOT in the tunnel (in its own groove). Ulnar nerve/artery = Guyon\'s canal (pisiform + hamate). Hypothyroidism (NOT hyperthyroid) is associated with CTS.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/carpal-tunnel-syndrome',
          tags: ['anatomy', 'wrist', 'carpal-tunnel', 'nerve'],
        },
      },
      {
        id: 'msk-joints-002',
        front: {
          question: 'What is scapholunate dissociation and what is the Terry Thomas sign?',
        },
        back: {
          answer: 'Scapholunate dissociation: disruption of the scapholunate ligament → widening of the scapholunate interval >3 mm on clenched fist view. Terry Thomas sign: the widened scapholunate gap resembles the gap between British comedian Terry Thomas\'s front teeth. Chronic dissociation → SLAC wrist.',
          explanation: 'The scapholunate ligament has three components; the dorsal band is the most important for stability. Rupture allows the scaphoid to flex (volar) and the lunate to extend (dorsal) → DISI deformity (Dorsal Intercalated Segmental Instability). SLAC wrist (Scapholunate Advanced Collapse) is the end-stage arthritic sequel. Clenched fist view widens the gap and is the most sensitive radiographic view.',
          keyFact: 'SL gap >3 mm = scapholunate dissociation = Terry Thomas sign. DISI deformity follows (lunate tilts dorsal, SL angle >60°). SLAC wrist = chronic sequel. Dorsal SL band = most important for stability.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/scapholunate-dissociation',
          tags: ['wrist', 'ligament', 'instability', 'eponym'],
        },
      },
      {
        id: 'msk-joints-003',
        front: {
          question: 'What is a perilunate dislocation and how does it differ from a lunate dislocation?',
        },
        back: {
          answer:
            'Perilunate dislocation: lunate stays in alignment with radius; capitate and remaining carpals dislocate dorsally AROUND the lunate. Lunate dislocation: lunate itself dislocates volarly; capitate maintains near-normal relationship with radius.\nSeverity: lunate dislocation > perilunate dislocation.',
          explanation: 'Perilunate and lunate dislocations represent a spectrum of progressive wrist instability from high-energy hyperextension injuries. The greater arc injuries include fractures (trans-scaphoid perilunate dislocation is most common fracture-dislocation). On lateral radiography, the capitate should sit in the concavity of the lunate; if not, dislocation is present. "Spilled teacup sign" = volarly tilted lunate on lateral view = lunate dislocation.',
          keyFact: 'Perilunate: lunate stays put, everything else dislocates. Lunate: lunate itself dislocates volar (spilled teacup sign on lateral). 60% of perilunate dislocations are associated with scaphoid fracture.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/perilunate-dislocation',
          tags: ['wrist', 'dislocation', 'trauma', 'carpal'],
        },
      },
      {
        id: 'msk-joints-004',
        front: {
          question: 'What are the three zones of the proximal fifth metatarsal and what is the clinical significance of each?',
        },
        back: {
          answer:
            'Zone 1 (tuberosity avulsion): most proximal base; peroneus brevis + plantar aponeurosis; heal well conservatively (boot).\nZone 2 (Jones fracture): metaphyseal-diaphyseal junction; poor blood supply; risk of non-union; variable treatment (cast vs. ORIF).\nZone 3 (diaphysis): stress fracture in athletes; highest non-union risk; often requires surgical fixation.',
          explanation: 'The proximal fifth metatarsal is an area of watershed blood supply. Zone 1 avulsions are the most common and best-tolerated. Zone 2 Jones fractures are controversial but the poorer vascular environment at the metaphyseal-diaphyseal junction compromises healing. Zone 3 diaphyseal stress fractures in high-level athletes typically require intramedullary screw fixation to allow a return to sport.',
          keyFact: 'Zone 1 (avulsion) = conservative. Zone 2 (Jones) = variable, possible surgery. Zone 3 (stress) = highest non-union risk, often surgical. The Jones fracture starts at the MEDIAL cortex, distinguishing it from zone 1 avulsions that do not cross the medial cortex.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fifth-metatarsal-base-fractures',
          tags: ['trauma', 'foot', '5th-metatarsal', 'zones'],
        },
      },
      {
        id: 'msk-joints-005',
        front: {
          question: 'What is the elbow fat pad sign, and what is the difference between the sail sign and a positive posterior fat pad?',
        },
        back: {
          answer: 'Fat pad sign: elevation of the fat pads from a joint effusion, seen on lateral elbow radiograph. Posterior fat pad elevation = nearly diagnostic for occult fracture (most commonly radial head in adults). Sail sign = anterior fat pad elevation only = less specific for fracture.',
          explanation: 'The elbow posterior fat pad is normally not visible on a lateral view because it sits in the olecranon fossa. Any effusion lifts the fat pads out of their fossae. An elevated posterior fat pad is highly specific for hemarthrosis from an occult fracture (Caveat: False positive if the lateral radiograph is NOT at true 90° flexion — the posterior fat pad can appear falsely elevated in extension). In children, supracondylar fracture is the most common cause; in adults, radial head fracture.',
          keyFact: 'Posterior fat pad elevation = nearly diagnostic for occult fracture (most commonly radial head in adults, supracondylar in children). False positive: non-90° lateral view. Always get additional radial head views if fat pad sign present without visible fracture.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/fat-pad-sign-elbow',
          tags: ['trauma', 'elbow', 'radiograph', 'fat-pad'],
        },
      },
      {
        id: 'msk-joints-006',
        front: {
          question: 'What is the center-edge (CE) angle of Wiberg and what does an abnormal value indicate?',
        },
        back: {
          answer: 'CE angle: angle between a vertical line through the femoral head center and a line from the femoral head center to the lateral acetabular rim. Normal: >25°. <20° = acetabular dysplasia (undercoverage). >40° = overcoverage (pincer FAI).',
          explanation: 'The lateral CE angle quantifies the degree of femoral head coverage by the acetabulum on the AP pelvis radiograph. Insufficient coverage (<20°) predisposes to hip instability and early OA. Excessive coverage (>40°) creates a pincer FAI morphology. The measurement is performed on a properly positioned AP pelvis radiograph with the coccyx pointing toward the pubic symphysis.',
          keyFact: 'CE angle <20° = acetabular dysplasia = undercoverage. 20–40° = normal. >40° = overcoverage = pincer FAI. CE angle is measured on the AP pelvis with the coccyx pointing toward the pubic symphysis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/centre-edge-angle',
          tags: ['hip', 'measurement', 'dysplasia', 'fai'],
        },
      },
      {
        id: 'msk-joints-007',
        front: {
          question: 'What is PVNS vs. synovial osteochondromatosis? How do you differentiate them?',
        },
        back: {
          answer:
            'PVNS: hemosiderin-laden synovial proliferation; dark on T1 AND T2, blooming on GRE; no visible calcifications on radiograph; dense brown effusion.\nSynovial osteochondromatosis: multiple calcified/ossified intra-articular bodies of similar size on radiograph; low-signal on MRI (when ossified).\nKey differentiator: radiograph — osteochondromatosis shows round calcified bodies; PVNS does not.',
          explanation: 'Both present with knee pain and swelling. PVNS is the commonest presentation of a locally aggressive synovial tumor. Synovial osteochondromatosis is metaplastic formation of cartilaginous nodules within the synovium. On MRI alone, both can produce multiple intra-articular low-signal foci, but a plain radiograph will clearly show the round calcified bodies in osteochondromatosis, distinguishing them.',
          keyFact: 'PVNS vs. osteochondromatosis: Get a radiograph. Osteochondromatosis = round calcified bodies visible on film. PVNS = NO calcifications on radiograph, dark T1/T2/GRE from hemosiderin. PVNS: knee most common, brown effusion.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/synovial-chondromatosis',
          tags: ['synovium', 'knee', 'pvns', 'osteochondromatosis'],
        },
      },
      {
        id: 'msk-joints-008',
        front: {
          question: 'What is adhesive capsulitis ("frozen shoulder") and what are its MRI findings?',
        },
        back: {
          answer: 'Adhesive capsulitis: inflammatory thickening and contraction of the glenohumeral capsule causing global loss of motion. MRI findings: thickening of the inferior glenohumeral ligament (>4 mm), effacement of fat in the rotator interval, enhancement of the capsule/rotator interval, and thickening of the coracohumeral ligament.',
          explanation: 'Adhesive capsulitis is primarily a clinical diagnosis. It most commonly affects middle-aged women. Primary type is idiopathic; secondary occurs after trauma or surgery. Decreased glenohumeral joint volume on arthrography (injection capacity <10 mL) is a classic finding. MRI is performed to exclude structural causes of restricted motion (e.g., full-thickness rotator cuff tear, OA). The rotator interval findings are the most reliable MRI indicators.',
          keyFact: 'Frozen shoulder MRI: rotator interval fat effacement + IGHL thickening >4 mm + capsular enhancement = adhesive capsulitis. Decreased glenohumeral volume on injection. Do NOT confuse with multidirectional instability (which has INCREASED volume).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/adhesive-capsulitis',
          tags: ['shoulder', 'capsulitis', 'mri', 'diagnosis'],
        },
      },
      {
        id: 'msk-joints-009',
        front: {
          question: 'What are the suprascapular and spinoglenoid notch entrapment neuropathies and what muscle groups do they affect?',
        },
        back: {
          answer:
            'Suprascapular notch compression: affects the suprascapular nerve proximal to its branch point → denervation of BOTH supraspinatus AND infraspinatus.\nSpinoglenoid notch compression: affects the distal branch only → denervation of infraspinatus ONLY.\nCommon cause: paralabral cyst from a labral tear.',
          explanation: 'The suprascapular nerve arises from C5-C6 and provides motor innervation to supraspinatus (at the suprascapular notch level) and infraspinatus (continuing to the spinoglenoid notch). A paralabral cyst from a superior labral tear can compress the nerve at the spinoglenoid notch, causing isolated infraspinatus atrophy. A suprascapular notch cyst causes both supraspinatus and infraspinatus involvement.',
          keyFact: 'Suprascapular notch = supraspinatus + infraspinatus atrophy. Spinoglenoid notch = infraspinatus atrophy ONLY. Cause: paralabral cyst from labral tear. Quadrilateral space syndrome: axillary nerve → teres minor (± deltoid) atrophy.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/suprascapular-nerve-entrapment',
          tags: ['shoulder', 'nerve', 'entrapment', 'atrophy'],
        },
      },
      {
        id: 'msk-joints-010',
        front: {
          question: 'What are the Outerbridge grades of cartilage injury?',
        },
        back: {
          answer:
            'Outerbridge classification:\n  Grade 0: Normal\n  Grade 1: Heterogeneous signal, intact surface (softening on arthroscopy)\n  Grade 2: Superficial fissure or defect <50% depth\n  Grade 3: Deep fissure or defect >50% depth\n  Grade 4: Full-thickness cartilage loss (bone exposed)',
          explanation: 'The Outerbridge system was originally arthroscopic but is applied to MRI. Grade 4 = full-thickness defect with subchondral bone exposed. Descriptive reporting (e.g., "superficial fissuring" vs. "full-thickness loss") is preferred over assigning a numerical grade. Delamination refers to horizontal splitting at the cartilage-bone interface and is a form of unstable cartilage injury.',
          keyFact: 'Outerbridge: 1=signal only, 2=<50% depth, 3=>50% depth, 4=full-thickness. Grade 4 = subchondral bone exposed. Describe location, size, depth, and any delamination. Full-thickness = surgical consideration.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/outerbridge-classification',
          tags: ['knee', 'cartilage', 'classification', 'mri'],
        },
      },
      {
        id: 'msk-joints-011',
        front: {
          question: 'What is DIFFUSE IDIOPATHIC SKELETAL HYPEROSTOSIS (DISH) and how is it distinguished from ankylosing spondylitis?',
        },
        back: {
          answer:
            'DISH: flowing anterior osteophytes spanning ≥4 vertebral levels + preserved disc spaces + normal sacroiliac joints. Usually asymptomatic. Seen in elderly patients.\nAS: delicate syndesmophytes (arising from vertebral margins) + sacroiliitis + disc changes. Younger patients. HLA-B27 positive.',
          explanation: 'DISH is caused by ossification of the anterior longitudinal ligament and other entheses. The osteophytes in DISH are "flowing" and "drooping" — they arise from the middle of the vertebral body and cascade down, unlike AS syndesmophytes which are thin and marginal. DISH is associated with metabolic syndrome and diabetes. OPLL (ossification of the posterior longitudinal ligament) is associated with DISH and can cause spinal stenosis.',
          keyFact: 'DISH: ≥4 levels flowing anterior ossification + NORMAL discs + NORMAL SI joints. AS: marginal syndesmophytes + sacroiliitis + disc involvement. DISH is in elderly, metabolic syndrome. AS in young males, HLA-B27.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/diffuse-idiopathic-skeletal-hyperostosis',
          tags: ['spine', 'arthritis', 'dish', 'ankylosing-spondylitis'],
        },
      },
      {
        id: 'msk-joints-012',
        front: {
          question: 'What is the Pellegrini-Stieda lesion and what does it indicate?',
        },
        back: {
          answer: 'Pellegrini-Stieda lesion: post-traumatic calcification/ossification medial to the medial femoral condyle, representing chronic MCL avulsion injury or remote trauma to the MCL origin.',
          explanation: 'This finding is an incidental radiographic finding in patients with remote medial knee injuries. It appears as a curvilinear or irregular calcification along the superior medial femoral condyle. It does not require treatment unless causing symptoms. When seen on a knee radiograph, it should prompt assessment of MCL integrity with MRI if there is active knee pain.',
          keyFact: 'Pellegrini-Stieda = calcification medial to medial femoral condyle = remote MCL injury. Usually incidental. If symptomatic, assess MCL with MRI. Not to be confused with osteophyte or enchondroma.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pellegrini-stieda-lesion',
          tags: ['knee', 'mcl', 'calcification', 'eponym'],
        },
      },
      {
        id: 'msk-joints-013',
        front: {
          question: 'What is the Goutallier classification of rotator cuff muscle fatty infiltration?',
        },
        back: {
          answer:
            'Goutallier classification (assessed on sagittal MRI):\n  Grade 0: No fat\n  Grade 1: Few fatty streaks\n  Grade 2: More muscle than fat\n  Grade 3: Equal muscle and fat\n  Grade 4: More fat than muscle\nGrade ≥3 is associated with poor surgical repair outcomes.',
          explanation: 'Fatty infiltration of the rotator cuff muscles occurs rapidly after a rotator cuff tear (within 4 weeks) and is generally irreversible. The degree of fatty infiltration is the most important predictor of surgical repair outcome. Grades 0–2 generally have good outcomes after repair. Grades 3–4 are considered advanced degeneration and may not benefit from repair (may require reverse total shoulder arthroplasty).',
          keyFact: 'Goutallier grade ≥3 = more fat than or equal to muscle = poor repair prognosis. Assess on sagittal MRI. Fatty infiltration begins within 4 weeks of tear and is IRREVERSIBLE.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/goutallier-classification-of-rotator-cuff-atrophy',
          tags: ['shoulder', 'rotator-cuff', 'classification', 'mri'],
        },
      },
      {
        id: 'msk-joints-014',
        front: {
          question: 'What is the Hawkins impingement test finding on radiograph, and what is the significance of os acromiale?',
        },
        back: {
          answer: 'Os acromiale: persistent unfused accessory ossification center of the acromion, seen in up to 15% of patients. Best evaluated on axial MRI images. It may cause subacromial impingement from instability of the mobile os fragment. Marrow edema within the os indicates it may be symptomatic. Treatment: resection or fusion.',
          explanation: 'The acromion normally ossifies from multiple centers that fuse by age 25. Failure of fusion creates a mobile os acromiale that can depress with deltoid contraction, narrowing the subacromial space and causing impingement on the supraspinatus. It is easily overlooked on coronal MRI. The axial images are essential for identification.',
          keyFact: 'Os acromiale: seen in ~15% of patients; best on AXIAL MRI. Mobile fragment can impinge supraspinatus. Marrow edema within os = symptomatic. Do NOT mistake for AC joint or acromial fracture.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/os-acromiale',
          tags: ['shoulder', 'acromion', 'impingement', 'variant'],
        },
      },
      {
        id: 'msk-joints-015',
        front: {
          question: 'What is the Cobb angle and how is it measured?',
        },
        back: {
          answer: 'Cobb angle: measurement of spinal curvature (scoliosis) on frontal radiograph. Measured between lines parallel to the end plates of the most tilted superior and inferior vertebrae of a scoliotic curve. Normal: <10°. Mild scoliosis: 10–25°. Moderate: 25–50°. Severe: >50° (surgical threshold).',
          explanation: 'The Cobb angle is the standard measurement for scoliosis severity and progression. Standing posteroanterior radiographs are obtained to minimize radiation to breast tissue. A Cobb angle >40–50° in a skeletally immature patient is typically an indication for surgical correction. The angle is measured between the most tilted end vertebrae of the curve, not the apical vertebra.',
          keyFact: 'Cobb angle: measured between end-plate lines of most tilted superior and inferior vertebrae. >10° = scoliosis. Surgical threshold ~40–50° in growing patient. PA projection (not AP) used to minimize breast dose.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/cobb-angle',
          tags: ['spine', 'scoliosis', 'measurement', 'cobb'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // CONGENITAL & DEVELOPMENTAL
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-developmental',
    label: 'Congenital & Developmental MSK',
    cards: [
      {
        id: 'msk-developmental-001',
        front: {
          question: 'What is tarsal coalition, which two types are most common, and what are their classic radiographic signs?',
        },
        back: {
          answer:
            'Tarsal coalition: abnormal bony/fibrous/cartilaginous fusion of two tarsal bones.\nMost common:\n  1. Talocalcaneal (at middle subtalar facet): C sign + talar beak sign on lateral radiograph.\n  2. Calcaneonavicular: anteater sign on lateral radiograph (elongated anterior calcaneal process).\nCoalitions present in adolescence as hindfoot pain when the coalition begins to ossify.',
          explanation: 'Tarsal coalitions are caused by failure of normal segmentation of the tarsal bones during development. They restrict subtalar motion and cause a rigid flatfoot. Fibrous and cartilaginous coalitions are not visible on radiographs (CT or MRI needed). Osseous coalitions are visible. The C sign represents the fused medial talus and sustentaculum tali appearing as a continuous C-shaped contour. CT is gold standard for characterization.',
          keyFact: 'Talocalcaneal = C sign + talar beak on lateral. Calcaneonavicular = anteater sign on lateral. Both present in adolescence. CT is gold standard. Coalition causes rigid flatfoot (peroneal spasm flat foot).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/tarsal-coalition',
          tags: ['developmental', 'foot', 'coalition', 'pediatric'],
        },
      },
      {
        id: 'msk-developmental-002',
        front: {
          question: 'What is juvenile idiopathic arthritis (JIA) and what are its characteristic radiographic features in the knee and elbow?',
        },
        back: {
          answer:
            'JIA: chronic inflammatory arthropathy in children <16 years. Hyperemia causes growth disturbance.\nKnee: widened intercondylar notch + metaphyseal flaring + uniform joint space narrowing.\nElbow: enlarged radial head + widened trochlear notch.\nAnkylosis of the wrist and cervical spine facets more common than in adult RA.',
          explanation: 'The imaging hallmark of JIA is epiphyseal overgrowth and premature physeal fusion from chronic hyperemia in a skeletally immature patient. These findings can mimic hemophilia. The hand may show brachydactyly (short fingers) from premature growth plate fusion. JIA has a higher propensity for carpal ankylosis than adult RA. The differential for cervical spine ankylosis in a child is Klippel-Feil syndrome.',
          keyFact: 'JIA = hyperemia → epiphyseal overgrowth + premature fusion. Knee: widened intercondylar notch (also seen in hemophilia). Elbow: enlarged radial head. JIA > adult RA for ankylosis. Klippel-Feil: cervical fusion from failure of segmentation (not JIA-related).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/juvenile-idiopathic-arthritis',
          tags: ['developmental', 'arthritis', 'jia', 'pediatric'],
        },
      },
      {
        id: 'msk-developmental-003',
        front: {
          question: 'What is Langerhans cell histiocytosis (LCH/eosinophilic granuloma) and what are its skeletal manifestations?',
        },
        back: {
          answer:
            'LCH: abnormal histiocyte proliferation in children 5–10 years.\nSkeletal manifestations:\n  Skull: lytic lesion with beveled edge (outer table > inner table).\n  Mandible/maxilla: "floating tooth" (resorption of alveolar bone).\n  Spine: vertebra plana (complete vertebral body collapse).\n  Long bones: aggressive-appearing lytic lesion with lamellated periostitis.',
          explanation: 'LCH in bone (eosinophilic granuloma) is the most common and least aggressive form. The beveled edge of skull lesions reflects different rates of destruction of the inner and outer tables. Vertebra plana in a child is highly characteristic of LCH and should be the first diagnosis considered. The long bone appearance can mimic Ewing sarcoma and osteomyelitis — all three are in the differential of an aggressive lytic diaphyseal lesion in a child.',
          keyFact: 'LCH (EG) skull = beveled edge lytic lesion. Spine = vertebra plana in a CHILD (most likely LCH — not multiple myeloma, which is an adult diagnosis). Long bone = can mimic Ewing/osteomyelitis. 5–10 year old age group.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/langerhans-cell-histiocytosis',
          tags: ['developmental', 'pediatric', 'lch', 'bone'],
        },
      },
      {
        id: 'msk-developmental-004',
        front: {
          question: 'What is Legg-Calvé-Perthes (LCP) disease and how does it differ from toxic synovitis on imaging?',
        },
        back: {
          answer:
            'LCP: idiopathic AVN of the femoral head in children aged 4–10 years (boys > girls, 4:1). Imaging shows subchondral fracture, fragmentation, flattening, and eventual sclerosis of the femoral head.\nTransient (toxic) synovitis: most common cause of hip pain in children; no bony changes; joint effusion only; normal radiograph.\nKey differentiator: plain radiograph — LCP shows bony changes; toxic synovitis does not.',
          explanation: 'LCP is thought to result from repeated episodes of interrupted blood supply to the femoral head. Prognosis depends on age of onset (younger = better) and extent of head involvement. The "crescent sign" (subchondral fracture line) on radiograph is an early finding. MRI is most sensitive for early detection. Toxic synovitis is self-limiting and treated conservatively; LCP requires activity modification and sometimes bracing or surgery.',
          keyFact: 'LCP = AVN femoral head + 4–10 years + boys. Crescent sign = early. Toxic synovitis = effusion only + normal radiograph + resolves spontaneously. Septic arthritis = effusion + fever + elevated WBC → emergent hip aspiration.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/legg-calve-perthes-disease',
          tags: ['developmental', 'hip', 'pediatric', 'avn'],
        },
      },
      {
        id: 'msk-developmental-005',
        front: {
          question: 'What is pseudohypoparathyroidism and what is the classic radiographic finding?',
        },
        back: {
          answer: 'Pseudohypoparathyroidism (PHP): defect in PTH receptor (end-organ resistance). Clinical phenotype: short stature, round facies, obesity, brachydactyly. Classic radiographic finding: short 4th (or 5th) metacarpal.',
          explanation: 'PHP patients have elevated PTH (because PTH secretion is normal but the receptor doesn\'t respond) and low calcium. Pseudo-pseudohypoparathyroidism (PPHP) has the same phenotype but normal PTH and calcium. Both are tested clinically and radiographically by the short 4th metacarpal. The differential for short 4th metacarpal includes PHP, PPHP, and Turner syndrome.',
          keyFact: 'Short 4th metacarpal = PHP / PPHP / Turner syndrome. PHP = PTH receptor defect = elevated PTH + LOW calcium. PPHP = same phenotype but normal labs. Positive "knuckle knuckle dimple knuckle" sign = short 4th metacarpal.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/pseudohypoparathyroidism',
          tags: ['developmental', 'metabolic', 'endocrine', 'hand'],
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SYSTEMIC DISEASE MANIFESTATIONS
  // ──────────────────────────────────────────────────────────
  {
    id: 'msk-systemic',
    label: 'MSK Manifestations of Systemic Disease',
    cards: [
      {
        id: 'msk-systemic-001',
        front: {
          question: 'What are the MSK manifestations of hemochromatosis in the hand?',
        },
        back: {
          answer: 'Hemochromatosis arthropathy: OA-like changes at the 2nd and 3rd MCP joints with hook-like osteophytes from the radial aspect of the metacarpal heads + chondrocalcinosis (CPPD crystal deposition). May extend to all MCPs (unlike CPPD which typically involves only 2nd/3rd MCPs).',
          explanation: 'Hemochromatosis (autosomal recessive iron overload) deposits iron and CPPD crystals in joints. The classic clinical pentad: bronze skin, diabetes, cirrhosis, CHF, and arthropathy. The hook-like or "beak-like" osteophytes at the metacarpal heads are characteristic. Isolated 2nd/3rd MCP involvement can be indistinguishable from CPPD alone; involvement of all MCPs (especially the 4th/5th) is more suggestive of hemochromatosis.',
          keyFact: 'Hemochromatosis hand: hook-like osteophytes at 2nd/3rd MCPs (like CPPD) but may involve ALL MCPs. Clinical clue: bronze skin + diabetes + cirrhosis. CPPD involvement of all MCPs → think hemochromatosis.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/haemochromatosis-arthropathy',
          tags: ['systemic', 'hemochromatosis', 'hand', 'arthropathy'],
        },
      },
      {
        id: 'msk-systemic-002',
        front: {
          question: 'What MSK findings are associated with acromegaly?',
        },
        back: {
          answer:
            'Acromegaly (excess GH post-physis closure) MSK findings:\n• Widened joint spaces (cartilage hypertrophy) — UNIQUE: wider than normal in early disease.\n• Spade-like overgrowth of distal phalangeal tufts.\n• Beak-like osteophytes of the metacarpal heads.\n• Increased heel pad thickness (>21 mm in females, >23 mm in males).\n• Secondary OA in later disease.',
          explanation: 'In acromegaly, excess GH causes cartilage hypertrophy → initially widened joint spaces (opposite of all other arthropathies). Eventually the cartilage degenerates and secondary OA supervenes with joint space narrowing. The heel pad is the simplest indirect measurement of excess GH. In the skull: enlarged frontal sinuses, jaw prognathism, cranial vault thickening.',
          keyFact: 'Acromegaly is the ONLY arthropathy with initially WIDENED joint spaces (cartilage hypertrophy). Spade-like distal tufts + beak-like MCP osteophytes + increased heel pad thickness = classic triad. Later → secondary OA (narrowed spaces).',
          radiopaediaUrl: 'https://radiopaedia.org/articles/acromegaly',
          tags: ['systemic', 'acromegaly', 'endocrine', 'arthropathy'],
        },
      },
      {
        id: 'msk-systemic-003',
        front: {
          question: 'What is ochronosis (alkaptonuria) and what is its pathognomonic spinal finding?',
        },
        back: {
          answer: 'Ochronosis: alkaptonuria defect in homogentisic acid oxidase → homogentisic acid accumulation. Pathognomonic finding: intervertebral disc calcification at EVERY spinal level, with disc space narrowing.',
          explanation: 'Alkaptonuria is an autosomal recessive enzyme deficiency. Homogentisic acid polymerizes in connective tissues (discs, joints, tendons). The urine turns black when exposed to air (classic clinical clue). Disc calcification affects the entire spine, which is distinctive from CPPD (which can also calcify discs but not uniformly at all levels). OA-like changes in large joints can also occur.',
          keyFact: 'Ochronosis = disc calcification at EVERY level = pathognomonic. Urine turns black in air = diagnostic clue. Alkaptonuria: autosomal recessive, deficient homogentisic acid oxidase. Distinguish from CPPD: CPPD is not at every level.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/ochronosis',
          tags: ['systemic', 'ochronosis', 'spine', 'metabolic'],
        },
      },
      {
        id: 'msk-systemic-004',
        front: {
          question: 'What are the radiographic features of hemophilic arthropathy and how does it resemble JIA?',
        },
        back: {
          answer:
            'Hemophilia (factor VIII or IX deficiency) arthropathy:\n• Knee: widened intercondylar notch, squaring of the patella.\n• Elbow: enlarged radial head, widened trochlear notch.\n• Increased soft-tissue density around joints (hemosiderin in synovium).\n• Secondary OA from recurrent hemarthrosis.\nSimilarity to JIA: widened intercondylar notch + enlarged radial head (both from articular hyperemia).',
          explanation: 'Hemophilic arthropathy results from recurrent hemarthrosis. Iron deposition in the synovium causes increased soft-tissue density on radiography. Epiphyseal hyperemia causes overgrowth similar to JIA. Pseudotumor of hemophilia (intraosseous/subperiosteal bleeding) can cause well-circumscribed sclerotic lesions that may mimic neoplasm. MRI is ideal for assessing the joint and showing hemosiderin (T2 dark, GRE blooming).',
          keyFact: 'Hemophilia: widened intercondylar notch (knee) + enlarged radial head (elbow) = same as JIA. Differentiator: hemophilia has dense soft tissues from hemosiderin; clinical history of bleeding disorder. Pseudotumor = well-circumscribed bony scalloping from recurrent hemorrhage.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/haemophilic-arthropathy',
          tags: ['systemic', 'hemophilia', 'arthropathy', 'hematologic'],
        },
      },
      {
        id: 'msk-systemic-005',
        front: {
          question: 'What is the "rugger jersey spine" and how does it differ from the "picture frame" vertebra of Paget disease?',
        },
        back: {
          answer:
            'Rugger jersey spine: sclerosis of the SUPERIOR and INFERIOR vertebral endplates only, leaving the central vertebral body relatively lucent → seen in RENAL OSTEODYSTROPHY.\nPicture frame vertebra: sclerosis of the ENTIRE PERIPHERAL CORTEX of the vertebral body → seen in Paget disease.\nKey: Rugger jersey = endplates only. Picture frame = all four borders.',
          explanation: 'Renal osteodystrophy causes paradoxical endplate sclerosis (from secondary hyperparathyroidism) overlying central lucency (from osteomalacia). This produces the rugby jersey stripes. Paget disease has cortical thickening of the entire vertebral body periphery (all four margins), producing a box or picture frame. Ivory vertebra (diffusely sclerotic entire body) = Paget in the right clinical context, but also lymphoma and blastic metastasis.',
          keyFact: 'Rugger jersey = endplates only = renal osteodystrophy (secondary hyperPTH). Picture frame = entire vertebral body periphery = Paget disease. Ivory vertebra = Paget, lymphoma, or blastic mets.',
          radiopaediaUrl: 'https://radiopaedia.org/articles/rugger-jersey-spine',
          tags: ['systemic', 'spine', 'renal-osteodystrophy', 'paget'],
        },
      },
    ],
  },
]