import { type Service } from "../types/Service";
// Import images
import rootCanalImg from "../assets/images/rootcanal.jpeg";
import crowns from "../assets/images/crownfix.jpeg";
import rootCanalCause from "../assets/images/rootcanal2.jpeg";
import rootCanalPrevention from "../assets/images/rootcanal2.jpeg";

export const servicesData: Record<string, Service> = {
  "root-canal": {
    title: "Root Canal Treatment",
    slug: "root-canal",
    image: rootCanalImg,
    introduction:
      "Root canal treatment is a dental procedure to treat an infected tooth...",
    definition:
      "A root canal is a treatment to repair and save a badly damaged or infected tooth...",
    description: {
      main: "Root canal treatment is essential for saving teeth affected by severe decay...",
      adult: {
        causes: [
          "Deep decay due to an untreated cavity",
          "A crack or chip in the tooth",
          "Injury to the tooth",
        ],
        process: [
          "Anesthesia is administered to numb the area.",
          "An opening is made in the crown of the tooth.",
          "The infected pulp is removed, and the area is cleaned and shaped.",
          "The canal is filled with a biocompatible material and sealed.",
          "A temporary filling is placed, followed by a permanent crown on a later visit.",
        ],
        price: "UGX 250,000 – 450,000",
      },
      child: {
        causes: [
          "Deep decay that has reached the pulp of a primary tooth.",
          "Trauma to the tooth.",
          "Infection in the tooth pulp.",
        ],
        process: [
          "The infected pulp is partially or fully removed (pulpotomy/pulpectomy).",
          "The inside of the tooth is disinfected.",
          "A medicated filling is placed.",
          "A stainless steel crown is placed to protect the tooth until it falls out naturally.",
        ],
        price: "UGX 150,000 – 250,000 (Pulpotomy/Pulpectomy)",
      },
    },
    howItIsDone:
      "The treatment is performed under local anesthesia. The dentist removes the infected pulp, disinfects the area, fills the canal, and then seals the tooth with a filling and a crown. The procedure is painless and is designed to save your natural tooth.",
    whyIsItNecessary:
      "A root canal is necessary to save a tooth that is badly infected or decayed. If left untreated, the infection can spread to other teeth and the jawbone, leading to severe pain and potential tooth loss. Saving the tooth prevents the need for an extraction and the subsequent costs and complications of a dental implant or bridge.",
    duration: "1–2 hours",
    cost: "UGX 250,000 – 450,000",
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
          "Cracked or broken teeth ",
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
        price: "UGX 300,000 – 600,000",
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
          "Preparation: The decayed part of the tooth is removed, and the tooth structure is minimally reduced to create space for the crown.",
          "Crowning: The chosen crown is fitted over the prepared tooth and cemented into place.",
          "Anesthesia: Local anesthetic is used to ensure the child feels no discomfort during the procedure.",
        ],
        aftercareAndExpectations: [
          "Sensitivity: The child may experience temporary sensitivity to hot or cold items.",
          "Adjustment: It may take a few days or weeks for the child to get used to the feel of the crown.",
          "Chewing: Initially, the child may find it easier to eat softer foods",
          "Discomfort: Mild soreness may occur, which can be managed with over-the-counter pain relievers.",
          "Follow-up: The crown is intended to last until the baby tooth naturally falls out, holding the space for the adult tooth's eruption.",
        ],
        price: "UGX 200,000 – 400,000",
      },
    },
    howItIsDone:
      "Crowns are custom-made to fit over your existing tooth. The dentist will prepare the tooth, take impressions, and place a temporary crown until the permanent one is ready. The final crown is then cemented in place.",
    whyIsItNecessary:
      "Crowns are necessary to restore the function and appearance of damaged teeth. They help protect weak teeth from further damage and can improve your smile.",
    duration: "1–2 hours",
    cost: "UGX 300,000 – 600,000",
    moreImages: [crowns],
  },
};
