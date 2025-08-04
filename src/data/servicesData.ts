import { type Service } from "../types/Service";
import rootCanalImg from "../assets/images/rootcanal.jpeg";
import crowns from "../assets/images/crownfix.jpeg";
import rootCanalCause from "../assets/images/rootcanal2.jpeg";
import rootCanalPrevention from "../assets/images/rootcanal2.jpeg";
import consultationImg from "../assets/images/consult.jpg"; // Assuming you have a consultation image

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
              { name: "General Dental Consultation", price: "30,000" },
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
              { name: "General Dental Consultation", price: "30,000" },
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
              { name: "Anterior Tooth", price: "200,000" },
              { name: "Premolar", price: "250,000" },
              { name: "Molar Tooth", price: "300,000" },
            ],
          },
          {
            category: "Packages",
            items: [{ name: "RCT with Crown Package", price: "1,000,000" }],
          },
        ],
      },
      child: {
        causes: [
          "Persistent tooth pain",
          "Discoloration of the tooth",
          "Swollen or tender gums",
          "Difficulty chewing",
          "Sensitivity to hot or cold temperatures.",
        ],
        process: [
          "          Preparation: A protective 'rubber dam' is used to isolate the tooth and keep it clean.",
          "Numbing: Local anesthesia is administered to prevent discomfort during the procedure. ",
          "Pulp removal: The decayed or inflamed pulp is removed from the crown of the tooth, often the only part of the pulp being treated. ",
          "Cleaning and filling: The remaining pulp is protected with a material, and the interior of the tooth is then filled. ",
          "Restoration: A crown is typically placed to protect the remaining tooth structure.   ",
        ],
        // Still using a single price string for children's RCT
        price: "UGX 150,000 – 250,000 (Pulpotomy/Pulpectomy)",
      },
    },
    howItIsDone:
      "The treatment is performed under local anesthesia. The dentist removes the infected pulp, disinfects the area, fills the canal, and then seals the tooth with a filling and a crown. The procedure is painless and is designed to save your natural tooth.",
    whyIsItNecessary:
      "A root canal is necessary to save a tooth that is badly infected or decayed. If left untreated, the infection can spread to other teeth and the jawbone, leading to severe pain and potential tooth loss. Saving the tooth prevents the need for an extraction and the subsequent costs and complications of a dental implant or bridge.",
    moreImages: [rootCanalCause, rootCanalPrevention],
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
            category: "Crowns & Bridges Prices",
            items: [
              { name: "Temporary Crown (Acrylic)", price: "300,000" },
              { name: "Full Ceramic (Zirconia) Crown", price: "500,000" },
              { name: "3-Unit Bridge (Metal-Ceramic)", price: "1,500,000" },
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
    howItIsDone: "Crowns are custom-made to fit over your existing tooth...",
    whyIsItNecessary:
      "Crowns are necessary to restore the function and appearance...",
    moreImages: [crowns],
    aftercareAndExpectations: [
      "Sensitivity: The child may experience temporary sensitivity to hot or cold items.",
      "Adjustment: It may take a few days or weeks for the child to get used to the feel of the crown.",
      "Chewing: Initially, the child may find it easier to eat softer foods",
      "Discomfort: Mild soreness may occur, which can be managed with over-the-counter pain relievers.",
      "Follow-up: The crown is intended to last until the baby tooth naturally falls out, holding the space for the adult tooth's eruption.",
    ],
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
        price: "UGX 50,000 – 100,000 per visit",
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
        price: "UGX 30,000 – 80,000 per visit",
      },
    },
    howItIsDone:
      "Preventive care involves regular dental visits, professional cleanings, and patient education on proper oral hygiene practices.",
    whyIsItNecessary:
      "Preventive care is essential to avoid costly and painful dental procedures in the future. It helps maintain good oral health and prevents issues like cavities and gum disease.",
    moreImages: [],
  },
};
