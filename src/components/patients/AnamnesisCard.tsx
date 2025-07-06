const AnamnesisCard = () => {
  const anamnesis = {
    hasToothPain: true,
    hasBleedingGums: false,
    smokes: true,
    hasDentalAllergy: false,
    takingMedications: true,
    brushingFrequency: "Twice a day",
    lastDentalVisit: "2023-11-05",
    notes:
      "Patient complains of sensitivity to cold drinks. No history of surgeries.",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-md font-bold mb-4">Dental Anamnesis</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          <span className="font-medium">Tooth Pain:</span>{" "}
          {anamnesis.hasToothPain ? "Yes" : "No"}
        </li>
        <li>
          <span className="font-medium">Bleeding Gums:</span>{" "}
          {anamnesis.hasBleedingGums ? "Yes" : "No"}
        </li>
        <li>
          <span className="font-medium">Smoker:</span>{" "}
          {anamnesis.smokes ? "Yes" : "No"}
        </li>
        <li>
          <span className="font-medium">Dental Allergies:</span>{" "}
          {anamnesis.hasDentalAllergy ? "Yes" : "No"}
        </li>
        <li>
          <span className="font-medium">On Medication:</span>{" "}
          {anamnesis.takingMedications ? "Yes" : "No"}
        </li>
        <li>
          <span className="font-medium">Brushing Frequency:</span>{" "}
          {anamnesis.brushingFrequency}
        </li>
        <li>
          <span className="font-medium">Last Dental Visit:</span>{" "}
          {anamnesis.lastDentalVisit}
        </li>
        <li className="mt-2">
          <span className="font-medium">Notes:</span> {anamnesis.notes}
        </li>
      </ul>
    </div>
  );
};

export default AnamnesisCard;
