const PatientInfoCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
      <img
        src="/bg1.jpg"
        alt="Patient"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-lg font-semibold">Kate Prokopchuk</h2>
      <p className="text-sm text-gray-600">+123 456 7890</p>
      <p className="text-sm text-gray-600">kate@email.com</p>
    </div>
  );
};

export default PatientInfoCard;
