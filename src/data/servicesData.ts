import { type Service } from "../types/Service";
import rootCanalImg from "../assets/images/rootcanal.jpeg";
import crowns from "../assets/images/crownfix.jpeg";
import rootCanalCause from "../assets/images/rootcanal2.jpeg";
import rootCanalPrevention from "../assets/images/rootcanal2.jpeg";
import consultationImg from "../assets/images/consult.jpg"; 
import toothextraction2 from "../assets/images/toothextraction2.png";
import teethwhitening from "../assets/images/teethwhitening.jpeg";
import orthodontic1 from "../assets/images/adultbrace.png";
import orthodontic2 from "../assets/images/1Orthodontist.jpg"
import orthodontic3 from "../assets/images/youngbrace.png";
import orthodontic4 from "../assets/images/adultordotist.jpg";
import orthodontic5 from "../assets/images/brace1.jpeg";
import orthodontic6 from "../assets/images/brace2.jpeg";
import orthodontic7 from "../assets/images/brace3.jpeg";
import aboutus1 from "../assets/images/aboutus1.jpeg";
import braceProcedure from "../assets/images/braceprocedure.jpeg";
import braces from "../assets/images/braces.jpeg";
import braces1 from "../assets/images/braces1.jpeg";
import braces2 from "../assets/images/braces2.jpeg";
import bracesDone from "../assets/images/bracesdone.jpeg";
import braceTypes from "../assets/images/bracetypes.png";
import bridge from "../assets/images/bridge.jpeg";
import bridgeFix from "../assets/images/bridgefix.jpeg";
import decay from "../assets/images/decay.jpeg";
import decayTooth from "../assets/images/decaytooth.jpeg";
import dentalFilling from "../assets/images/dental-filling.jpeg";
import dentalCrown from "../assets/images/dentalcrown.jpeg";
import dentalImplant from "../assets/images/dentalimplant.jpeg";
import dentalInstruments from "../assets/images/dentalinstruments.jpeg";
import dentalSealant from "../assets/images/dentalsealant.jpeg";
import dentures from "../assets/images/dentures.jpeg";
import examination from "../assets/images/examination.jpeg";
import examination3 from "../assets/images/examination3.jpeg";
import extraction from "../assets/images/extraction.jpeg";
import familySmile from "../assets/images/familysmile.jpeg";
import fixBraces from "../assets/images/fixbraces.jpeg";
import fixDentalAligners from "../assets/images/fixdentalaligners.jpeg";
import fixServices from "../assets/images/fixservices.jpeg";
import implant from "../assets/images/implant.jpeg";
import implant1 from "../assets/images/implant1.jpeg";
import implant2 from "../assets/images/implant2.jpeg";
import implant3 from "../assets/images/implant3.jpeg";
import implant4 from "../assets/images/implant4.jpeg";
import implants from "../assets/images/implants.jpeg";
import invisalign from "../assets/images/InvisalignOrthodontics.jpeg";
import metalBraces from "../assets/images/metalbraces.jpeg";
import orthoCategories from "../assets/images/orthodonticcategories.jpeg";
import restorativeFilling from "../assets/images/restorativefilling.jpeg";
import rush from "../assets/images/rush.jpeg";
import smile from "../assets/images/smile.jpeg";
import smile1 from "../assets/images/smile1.jpeg";
import smile2 from "../assets/images/smile2.jpeg";
import smile3 from "../assets/images/smile3.jpeg";
import teethCaution from "../assets/images/teethcaution.jpeg";
import teethCleaning from "../assets/images/teethcleaning.jpeg";
import teethCleaning1 from "../assets/images/teethcleaning1.jpeg";



export const servicesData: Record<string, Service> = {
  consultation: {
    title: "Consultation & Exams",
    slug: "consultation",
    image: consultationImg,
    introduction:
      "A dental consultation and exam is a process where a dentist assesses your overall oral health by examining your teeth, gums, and mouth, often including X-rays, to identify issues like cavities or gum disease.",
    definition:
      "For many, visiting the dentist can feel daunting, particularly if it's your first time or you haven't been in a while. At Fix Dental Care, we aim to make your experience as comfortable and welcoming as possible. With modern technology, a skilled team and a tailored approach, our private practice at Fix Dental Care ensures each visit builds a foundation for your oral health.",
    description: {
      main: "We offer various types of consultations to meet your specific needs.",
      adult: {
        causes: [
          "Regular check-up",
          "Specific dental problem",
          "Emergency pain",
        ],
        process: [
          "Patient history and discussion",
          "Full oral examination",
          "Diagnosis and treatment plan",
        ],
        categoricalPrice: [
          {
            category: "Consultation & Exams",
            items: [
              { name: "General Dental Consultation", price: "20,000" },
              { name: "Emergency Consultation", price: "60,000" },
              { name: "Full Oral Examination + Report", price: "90,000" },
            ],
          },
        ],
      },
      child: {
        causes: [
          "Regular check-up",
          "Specific dental problem",
          "Emergency pain",
        ],
        process: [
          "Patient history and discussion",
          "Full oral examination",
          "Diagnosis and treatment plan",
        ],
        categoricalPrice: [
          {
            category: "Consultation & Exams",
            items: [
              { name: "General Dental Consultation", price: "20,000" },
              { name: "Emergency Consultation", price: "60,000" },
              { name: "Full Oral Examination + Report", price: "90,000" },
            ],
          },
        ],
      },
    },
    howItIsDone:
      "During a consultation, the dentist will review your medical history, perform a thorough examination of your teeth and gums, and may take X-rays to assess your oral health. Based on the findings, they will discuss any necessary treatments or preventive measures.",

    moreImages: [],
  },
  "preventive-care": {
    title: "Preventive Care",
    slug: "preventive-care",
    image: crowns, // Placeholder image, replace with actual preventive care image
    introduction:
      "Preventive dentistry is dental care that helps maintain good oral health. It’s a combination of regular dental check-ups along with developing good habits like brushing and flossing. Taking care of your teeth starts early in childhood and extends throughout the course of your life.",
    definition:
      "Preventive care includes regular check-ups, cleanings, and patient education to maintain optimal oral health.",
    description: {
      main: "Regular dental visits help prevent cavities, gum disease, and other oral health issues.",
      adult: {
        causes: ["Poor oral hygiene", "Diet high in sugar", "Tobacco use"],
        process: [
          "Regular check-ups every six months",
          "Professional cleanings to remove plaque and tartar",
          "Fluoride treatments to strengthen teeth",
        ],
        categoricalPrice: [
          {
            category: "Preventive Care",
            items: [
              { name: "Scaling and Polishing", price: "100,000" },

              { name: "Oral Hygiene Instruction", price: "30,000" },
            ],
          },
        ],
      },
      child: {
        causes: [
          "Poor oral hygiene",
          "Diet high in sugar",
          "Lack of fluoride exposure",
        ],
        process: [
          "Regular check-ups every six months",
          "Professional cleanings to remove plaque and tartar",
          "Fluoride treatments to strengthen teeth",
        ],
        categoricalPrice: [
          {
            category: "Preventive Care",
            items: [
              { name: "Scaling and Polishing", price: "60,000" },
              { name: "Fluoride Application", price: "50,000" },
              { name: "Dental Sealants (per tooth)", price: "40,000" },
              { name: "Oral Hygiene Instruction", price: "30,000" },
            ],
          },
        ],
      },
    },
    howItIsDone:
      "Preventive care involves regular dental visits, professional cleanings, and patient education on proper oral hygiene practices.",
    whyIsItNecessary:
      "Preventive care is essential to avoid costly and painful dental procedures in the future. It helps maintain good oral health and prevents issues like cavities and gum disease.",
    moreImages: [],
  },

  "restorative-extractions": {
    title: "Restorative & Extractions",
    slug: "restorative-extractions",
    image: toothextraction2,
    introduction:
      "Restorative dentistry focuses on repairing and restoring damaged teeth, while extractions involve the removal of teeth that cannot be saved.",
    definition:
      "Restorative dentistry and extractions are two key areas of dental care focused on maintaining or restoring oral health...",
    description: {
      main: "Restorative procedures help restore the function and aesthetics of teeth, while extractions are necessary when a tooth is beyond repair.",

      adult: {
        causes: [
          "Severe decay",
          "Cracked or broken teeth",
          "Wear and tear",
          "Discoloration or malformation",
          "Post-root canal treatment",
        ],

        categoricalProcess: [
          {
            category: "Common Procedures",
            items: [
              {
                title: "Fillings",
                procedure:
                  "Tooth-colored fillings are used to repair cavities and restore the tooth's structure and function.",
              },
              {
                title: "Crowns",
                procedure:
                  "Caps that cover and protect damaged or weakened teeth",
              },

              {
                title: "Root canals",
                procedure:
                  "            Treatment for infected tooth pulp, saving the tooth from extraction.",
              },
              {
                title: "Bridges",
                procedure:
                  "Used to replace missing teeth by anchoring a prosthetic tooth to adjacent healthy teeth.",
              },
              {
                title: "Implants",
                procedure:
                  "A more permanent solution for missing teeth, involving surgically placing a titanium post into the jawbone.",
              },
            ],
          },
        ],
        categoricalPrice: [
          {
            category: "Restorative Dentistry",
            items: [
              {
                name: "Composite Filling (Small)",
                price: "120,000",
              },
              {
                name: "Composite Filling (Medium)",
                price: "150,000",
              },
              {
                name: "Composite Filling (Large)",
                price: "180,000",
              },
              { name: "Temporary Filling", price: "40,000" },
              { name: "Amalgam Filling (Posterior)", price: "100,000" },
              { name: "Extraction of Primary Tooth", price: "50,000" },
            ],
          },
          {
            category: "Extractions",
            items: [
              { name: "Simple Extraction (1 tooth)", price: "50,000" },
              { name: "Difficult Extraction", price: "130,000" },
              { name: "Surgical Extraction (Impacted)", price: "300,000" },
            ],
          },
        ],
        aftercareAndExpectations: [
          "Avoid chewing or biting on the treated tooth until the final crown is placed.",
          "Mild discomfort or sensitivity is normal for a few days.",
          "Take prescribed painkillers or antibiotics if recommended by the dentist.",
          "Maintain good oral hygiene with regular brushing and flossing.",
          "Attend follow-up appointments to ensure healing and crown placement.",
          "Contact your dentist if swelling, severe pain, or fever occurs.",
        ],
      }, // Closing bracket for 'adult'
      child: {
        causes: [
          "Severe decay in primary teeth",
          "Trauma to the tooth",
          "Broken or chipped teeth",
          "Weakened teeth due to large fillings",
        ],
        categoricalProcess: [
          {
            category: "Restorative Procedures",
            items: [
              {
                title: "Fillings",
                procedure:
                  "Tooth-colored fillings are used to repair cavities and restore the tooth's structure and function.",
              },
              {
                title: "Crowns",
                procedure:
                  "Crowns are used to protect and strengthen teeth that are severely damaged or decayed.",
              },
              {
                title: "Pulp Therapy",
                procedure:
                  "Treatment for deep decay or infection affecting the tooth's pulp, saving the tooth.",
              },
              {
                title: "Space Maintainers",
                procedure:
                  "Used to hold space if a child loses a tooth early, allowing permanent teeth to erupt properly.",
              },
            ],
          },
          {
            category: "Extraction Procedures",
            items: [
              {
                title: "Tooth Extractions",
                procedure:
                  "Performed when a tooth is too damaged or decayed to be restored, or interfering with orthodontics.",
              },
              {
                title: "Preparation",
                procedure:
                  "Area is numbed with local anesthetic before extraction.",
              },
              {
                title: "Post-Extraction Care",
                procedure:
                  "Dentist may recommend a space maintainer or other restorative options after removal.",
              },
            ],
          },
          {
            category: "Considerations",
            items: [
              {
                title: "Preserving Baby Teeth",
                procedure:
                  "Primary teeth are kept until natural exfoliation to aid jaw development and guide permanent teeth.",
              },
              {
                title: "Early Intervention",
                procedure:
                  "Addressing issues early prevents complex problems and reduces treatment needs.",
              },
              {
                title: "Child's Comfort",
                procedure:
                  "Sedation or distraction methods are used to ensure a stress-free experience.",
              },
            ],
          },
        ],
        categoricalPrice: [
          {
            category: "Restorative Dentistry",
            items: [
              { name: "Composite Filling (Small)", price: "120,000" },
              { name: "Temporary Filling", price: "40,000" },
            ],
          },
          {
            category: "Extractions",
            items: [
              { name: "Pulpotomy / Pulpectomy", price: "150,000" },
              { name: "Extraction of Primary Tooth", price: "50,000" },
            ],
          },
        ],
      },
    },
    howItIsDone:
      "Procedures are performed under local anesthesia. Pediatric dentists prioritize comfort, using sedation or distraction when needed.",
    whyIsItNecessary:
      "Preserves or restores dental health and ensures proper jaw development.",
    moreImages: [],
  },
  orthodontics: {
    title: "Orthodontics",
    slug: "orthodontics",
    image: orthodontic1,
    introduction:
      "Orthodontics is a branch of dentistry that focuses on diagnosing, preventing, and treating dental and facial irregularities. It involves the use of braces, aligners, and other appliances to straighten teeth and correct bite issues.",
    definition:
      "Orthodontics is a specialized field of dentistry that deals with the correction of misaligned teeth and jaws.",

    description: {
      main: "Orthodontic treatment is essential for correcting misaligned teeth and jaws, improving both function and aesthetics.",
      adult: {
        causes: [
          "Crowded or spaced teeth",
          "Overbite or underbite",
          "Crossbite",
          "Jaw alignment issues",
          "Aesthetic concerns",
        ],

        categoricalPrice: [
          {
            category: "Orthodontics",
            items: [
              {
                name: "Ceramic Braces (Both Jaws)",
                price: "4000,000",
              },
              {
                name: "Invisalign (Full Treatment)",
                price: "9000,000 - 12,000,000",
              },
              {
                name: "Simple Metal Braces (Both Jaws)",
                price: "2,000,000",
              },
              {
                name: "Complex Metal Braces (Both Jaws))",
                price: "3,000,000- 5,000,000",
              },

              { name: "Retainers (per arch)", price: " 250,000" },
            ],
          },
        ],
      }, // Closing bracket for 'adult'
      child: {
        causes: [
          "Early or Late Loss of Baby Teeth",
          "Difficulty Chewing or Biting",
          "Mouth Breathing",
          "Jaws Shifting or Clicking",
          "Cheek Biting",
          "Facial Imbalance",
        ],

        categoricalPrice: [
          {
            category: "Orthodontics",
            items: [
              { name: "Ceramic Braces (Both Jaws)", price: "4,000,000" },
              { name: "Monthly Adjustment Visit", price: "100,000" },
              { name: "Retainers (per arch)", price: "250,000" },
              { name: "Simple Metal Braces (Both Jaws))", price: "2,000,000" },
              {
                name: "Complex Metal Braces (Both Jaws))",
                price: "3,000,000- 5,000,000",
              },
            ],
          },
        ],
      },
    },
    howItIsDone:
      "Orthodontic treatment involves the use of braces, aligners, or other appliances to gradually move teeth into their correct positions. The process typically includes an initial consultation, diagnostic records, treatment planning, and regular adjustments throughout the treatment period.",
    whyIsItNecessary:
      "Orthodontic treatment is necessary to correct misaligned teeth and jaws, which can lead to functional issues, aesthetic concerns, and long-term oral health problems. Proper alignment improves bite function, reduces wear on teeth, and enhances overall oral health.",
    moreImages: [
      orthodontic2,
      orthodontic5,
      orthodontic3,
      orthodontic4,
      orthodontic6,
      orthodontic7,
    ],
  },
  "diagnostic-radiology": {
    title: "Diagnostic & Radiology",
    slug: "diagnostic-radiology",
    image: toothextraction2,
    introduction:
      "Diagnostic and radiology services in dentistry involve the use of advanced imaging techniques to assess oral health, diagnose conditions, and plan treatments effectively.",
    definition:
      "Diagnostic and radiology services include X-rays, CT scans, and other imaging techniques to evaluate dental health.",

    description: {
      main: "Orthodontic treatment is essential for correcting misaligned teeth and jaws, improving both function and aesthetics.",
      adult: {
        causes: [
          "Tooth Decay",
          "Bone loss",

          "Infections",
          "Tooth development",
          "Impacted teeth",
          "Injuries",
          "Cysts and tumors",
        ],

        categoricalPrice: [
          {
            category: "Diagnostic & Radiology ",
            items: [{ name: "Intraoral X-Ray (Periapical)", price: "25000" }],
          },
        ],
      }, // Closing bracket for 'adult'
      child: {
        causes: [
          "Cavity Detection",
          "Bone loss",
          "Hidden Infections",
          "Tooth development",
          "Orthodontic Planning",
          "Injuries",
          "Trauma Evaluation",
        ],

        categoricalPrice: [
          {
            category: "Diagnostic ",
            items: [{ name: "Intraoral X-Ray (Periapical)", price: "25000" }],
          },
        ],
      },
    },
    howItIsDone:
      "Diagnostic and radiology services involve taking X-rays or other imaging scans to visualize the teeth, bones, and surrounding structures. This helps in diagnosing conditions, planning treatments, and monitoring progress.",
    whyIsItNecessary:
      "Early detection of dental problems: Radiographs allow dentists to identify issues like cavities, gum disease, and impacted teeth in their early stages, before they cause significant pain or damage. ",
    moreImages: [],
  },
  "implants-surgery": {
    title: "Implants & Surgery",
    slug: "implants-surgery",
    image: toothextraction2,
    introduction:
      "Implants and surgery in dentistry involve the placement of dental implants to replace missing teeth and surgical procedures to correct various oral health issues.",
    definition:
      "Implants are artificial tooth roots placed in the jawbone, while surgery may include extractions, bone grafts, or corrective jaw surgery.",

    description: {
      main: "Implants provide a permanent solution for missing teeth, while surgery addresses complex dental issues.",
      adult: {
        causes: [
          "Tooth loss due to decay or injury",
          "Jawbone loss",
          "Misaligned jaws",
          "Complex dental conditions",
        ],

        categoricalPrice: [
          {
            category: "Implants & Surgery",
            items: [
              {
                name: " Dental Implant (1 tooth)",
                price: "5,000,000 - 10,000,000",
              },

              {
                name: "Bone Grafting",
                price: "1,500,000 ",
              },
              { name: "Sinus Lift", price: "1,200,000" },
            ],
          },
        ],
      }, // Closing bracket for 'adult'
      child: {
        causes: [
          "Tooth loss due to decay or injury",
          "Jawbone loss",
          "Misaligned jaws",
          "Complex dental conditions",
        ],

        categoricalPrice: [
          {
            category: "Implants & Surgery",
            items: [
              {
                name: "Dental Implant (1 tooth)",
                price: "5,000,000 - 10,0000,000 ",
              },
            ],
          },
        ],
      },
    },
    howItIsDone:
      "Implants are surgically placed into the jawbone, where they fuse with the bone over time. Surgery may involve extractions, bone grafts, or corrective procedures to improve oral health and function.",
    whyIsItNecessary:
      "Implants and surgery are necessary to restore function and aesthetics in cases of tooth loss or complex dental issues. They provide a long-term solution for missing teeth and can improve overall oral health.",
    moreImages: [],
  },

  "root-canal": {
    title: "Root Canal Treatment",
    slug: "root-canal",
    image: rootCanalImg,
    introduction:
      "Root canal treatment is a dental procedure to save a damaged or infected tooth by removing the pulp, cleaning and disinfecting the inside, and then filling and sealing it.It's a common procedure, often needed when a cavity is too large for a regular filling or when the tooth's pulp becomes infected or inflamed. ",
    definition:
      "Root canal treatment, also known as endodontic treatment or Pulpotomy (Children), focuses on the inside (pulp) of the tooth, which contains nerves and blood vessels. ",
    description: {
      main: "Root canal treatment is essential for saving teeth affected by severe decay or infection. It involves removing the infected pulp, cleaning the inside of the tooth, and sealing it to prevent further infection.",
      adult: {
        causes: [
          "Severe decay",
          "Cracked or broken teeth ",
          "Wear and tear",
          "Discoloration or malformation",
          "Post-root canal treatment",
        ],
        process: [
          "  Diagnosis and Preparation: An X-ray is taken to assess the damage, and local anesthetic is administered for comfort. ",
          "Accessing the Pulp: A small opening is created in the top of the tooth to access the pulp chamber.",
          "Removing the Pulp: The infected or damaged pulp is carefully removed using specialized instruments.",
          "Cleaning and Shaping: The inside of the tooth is cleaned, shaped, and disinfected to remove any remaining bacteria.",
          "Filling the Canal: A biocompatible material is used to fill the cleaned canal, sealing it to prevent future infection.",
          "Sealing the Tooth: A temporary filling is placed, and a permanent crown is usually fitted in a follow-up appointment.",
          "Restoration: An access hole is closed, and the tooth is often restored with a filling or a protective dental crown to prevent fracture and ensure long-term protection. ",
        ],
        // Using the new categoricalPrice structure
        categoricalPrice: [
          {
            category: "Root Canal Treatment (RCT)",
            items: [
              { name: "Anterior Tooth", price: "300,000" },
              { name: "Premolar", price: "350,000" },
              { name: "Molar Tooth", price: "400,000" },
            ],
          },
          {
            category: "Packages",
            items: [{ name: "RCT with Crown Package", price: "1,000,000" }],
          },
        ],
      },
    },
    howItIsDone:
      "The treatment is performed under local anesthesia. The dentist removes the infected pulp, disinfects the area, fills the canal, and then seals the tooth with a filling and a crown. The procedure is painless and is designed to save your natural tooth.",
    whyIsItNecessary:
      "A root canal is necessary to save a tooth that is badly infected or decayed. If left untreated, the infection can spread to other teeth and the jawbone, leading to severe pain and potential tooth loss. Saving the tooth prevents the need for an extraction and the subsequent costs and complications of a dental implant or bridge.",
    moreImages: [rootCanalImg, rootCanalPrevention, rootCanalCause],
  },

  crowns: {
    title: "Dental Crowns",
    slug: "crowns",
    image: crowns,
    introduction:
      "Dental crowns are custom-made caps placed over damaged teeth ensuring a natural-looking result. ",
    definition:
      "A dental crown is a tooth-shaped cap that is placed over a tooth to restore its shape, size, strength, and appearance.",
    description: {
      main: "Crowns are used to protect weak teeth, restore broken teeth, or cover discolored teeth.",
      adult: {
        causes: [
          "Severe decay",
          "Cracked or broken teeth",
          "Wear and tear",
          "Discoloration or malformation",
          "Post-root canal treatment",
        ],
        process: [
          "Preparation: A dentist reshapes the tooth and takes an impression to create a custom crown.",
          "Temporary crown: A temporary crown is fitted to protect the tooth until the permanent one is ready.",
          "Manufacturing: The impression is sent to a lab where the permanent crown is custom-made. ",
          "Placement: The permanent crown is cemented onto the prepared tooth after its color and fit have been checked and confirmed. ",
        ],
        categoricalPrice: [
          {
            category: "Crowns & Bridges ",
            items: [
              { name: "Temporary Crown (Acrylic)", price: "300,000" },
              { name: "PFM (Metal-Ceramic)", price: "500,000" },

              { name: "Full Ceramic (Zirconia) Crown", price: "800,000" },

              { name: "3-Unit Bridge (Metal-Ceramic)", price: "1,500,000" },
              { name: "3-Unit Bridge (Zirconia)", price: "2,400,000" },
            ],
          },
        ],
        aftercareAndExpectations: [
          "Avoid chewing or biting on the treated tooth until the final crown is placed.",
          "Mild discomfort or sensitivity is normal for a few days.",
          "Take prescribed painkillers or antibiotics if recommended by the dentist.",
          "Maintain good oral hygiene with regular brushing and flossing.",
          "Attend follow-up appointments to ensure healing and crown placement.",
          "Contact your dentist if swelling, severe pain, or fever occurs.",
        ],
      },
      child: {
        causes: [
          "Severe decay in primary teeth",
          "Trauma to the tooth",
          "Broken or chipped teeth",
          "Weakened teeth due to large fillings",
          "Discolored or misshapen teeth",
          "Post-root canal treatment in primary teeth",
          "Infections",
        ],
        process: [
          "Preparation: The decayed part of the tooth is removed...",
          "Crowning: The chosen crown is fitted over the prepared tooth...",
          "Anesthesia: Local anesthetic is used...",
        ],
        categoricalPrice: [
          {
            category: "Crowns ",
            items: [{ name: "Temporary Crown (Acrylic)", price: "300,000" }],
          },
        ],
        aftercareAndExpectations: [
          "Sensitivity: The child may experience temporary sensitivity to hot or cold items.",
          "Adjustment: It may take a few days or weeks for the child to get used to the feel of the crown.",
          "Chewing: Initially, the child may find it easier to eat softer foods",
          "Discomfort: Mild soreness may occur, which can be managed with over-the-counter pain relievers.",
          "Follow-up: The crown is intended to last until the baby tooth naturally falls out, holding the space for the adult tooth's eruption.",
        ],
      },
    },
    howItIsDone:
      "Dental crowns are custom-made caps that cover the entire tooth, restoring its shape, size, strength, and appearance. The process involves reshaping the tooth, taking impressions, and fitting a temporary crown until the permanent one is ready.",
    whyIsItNecessary:
      "Crowns are necessary to protect weak or damaged teeth, restore their function, and improve aesthetics. They can also be used to cover discolored teeth or to hold dental bridges in place.",
    moreImages: [crowns],
    // images of crowns and advantange
    aftercareAndExpectations: [
      "Sensitivity: The child may experience temporary sensitivity to hot or cold items.",
      "Adjustment: It may take a few days or weeks for the child to get used to the feel of the crown.",
      "Chewing: Initially, the child may find it easier to eat softer foods",
      "Discomfort: Mild soreness may occur, which can be managed with over-the-counter pain relievers.",
      "Follow-up: The crown is intended to last until the baby tooth naturally falls out, holding the space for the adult tooth's eruption.",
    ],
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    image: teethwhitening,
    introduction:
      " Cosmetic dentistry focuses on improving the appearance of teeth, gums, and smiles. It includes procedures like teeth whitening, veneers, and bonding to enhance the aesthetics of your smile.",
    definition:
      "Cosmetic dentistry is a branch of dentistry that focuses on improving the appearance of teeth, gums, and smiles.",
    description: {
      main: "Cosmetic dentistry enhances the aesthetics of your smile through various procedures.",
      adult: {
        causes: [
          "Discolored or stained teeth",
          "Chipped or cracked teeth",
          "Misaligned or uneven teeth",
          "Gaps between teeth",
          "Worn down teeth",
        ],
        process: [
          "Consultation: Discuss your goals and concerns with the dentist.",
          "Treatment plan: The dentist creates a personalized treatment plan based on your needs.",
          "Procedure: Depending on the treatment, it may involve whitening, bonding, veneers, or orthodontics.",
          "Follow-up: Regular check-ups to maintain results and oral health.",
        ],
        categoricalPrice: [
          {
            category: "Cosmetic Dentistry",
            items: [
              { name: "Tooth Whitening (In-Office)", price: "500,000" },
              { name: "Composite Veneers (per tooth)", price: "300,000" },
              { name: "Porcelain Veneers (per tooth)", price: "700,000" },
              { name: "Diastema Closure (Gap Filling)", price: "120,000" },
            ],
          },
        ],
      },
    },
    howItIsDone:
      "Cosmetic dentistry procedures are performed by qualified dentists using advanced techniques and materials to ensure optimal results.",
    whyIsItNecessary:
      "Cosmetic dentistry is not just about aesthetics; it can also improve oral health, function, and self-esteem. A beautiful smile can boost confidence and encourage better oral hygiene practices.",
    moreImages: [teethwhitening],
  },

  dentures: {
    title: "Dentures",
    slug: "dentures",
    image: toothextraction2,
    introduction:
      "Dentures are removable replacements for missing teeth and surrounding tissues. They can be complete (replacing all teeth) or partial (replacing some teeth).",
    definition:
      "Dentures are prosthetic devices designed to replace missing teeth and restore function and aesthetics.",
    description: {
      main: "Dentures are used to restore the function and appearance of missing teeth.",
      adult: {
        causes: [
          "Tooth loss due to decay, gum disease, or injury",
          "Aging",
          "Genetic factors",
        ],
        process: [
          "Consultation: Discuss your needs and preferences with the dentist.",
          "Impressions: The dentist takes impressions of your mouth to create custom dentures.",
          "Fitting: Temporary dentures may be provided while the final ones are made.",
          "Final fitting: The final dentures are adjusted for comfort and fit before being secured.",
        ],
        categoricalPrice: [
          {
            category: "Dentures",
            items: [
              {
                name: " Partial Acrylic Denture (1-4 teeth)",
                price: "400,000",
              },

              { name: "Complete Denture (One Jaw)", price: "700,000" },

              { name: "Flexible Denture (Valplast)", price: "1,000 ,000" },
            ],
          },
        ],
      },
    },
    howItIsDone:
      "Procedures are performed under local anesthesia. Pediatric dentists prioritize comfort, using sedation or distraction when needed.",
    whyIsItNecessary:
      "Preserves or restores dental health and ensures proper jaw development.",
    moreImages: [],
  },
  "pediatric-specialties": {
    title: "Pediatric Specialties",
    slug: "pediatric-specialties",
    image: toothextraction2,
    introduction:
      "Pediatric dentistry focuses on the oral health of children from infancy through adolescence. It includes preventive care, treatment of dental issues, and education for parents and children.",
    definition:
      "Pediatric specialties in dentistry address the unique dental needs of children, ensuring healthy development and preventing future issues.",
    description: {
      main: "Pediatric dentistry provides specialized care for children's dental health, focusing on prevention and early intervention.",
      child: {
        causes: [
          "Early childhood cavities",
          "Thumb sucking or pacifier use",
          "Misaligned teeth or jaws",
          "Trauma to primary teeth",
        ],
        process: [
          "Initial consultation to assess oral health",
          "Preventive care including cleanings and fluoride treatments",
          "Treatment of cavities and other dental issues",
          "Education for parents on oral hygiene practices",
        ],
        categoricalPrice: [
          {
            category: "Pediatric Dentistry",
            items: [{ name: "  Space Maintainers", price: "200,000" }],
          },
        ],
      }, // Closing bracket for 'child'
    },
    howItIsDone:
      "Pediatric dentists use child-friendly techniques and equipment to ensure a comfortable experience. They focus on preventive care and education to promote lifelong oral health habits.",
    whyIsItNecessary:
      "Pediatric dentistry is essential for ensuring healthy dental development in children, preventing issues that can affect their overall health and well-being.",
    moreImages: [],
  },
};
export default servicesData;
