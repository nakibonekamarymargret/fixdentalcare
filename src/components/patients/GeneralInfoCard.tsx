const GeneralInfoCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-md font-bold mb-2">General Information</h3>
      <ul className="text-sm text-gray-700 space-y-1">
        <li>
          <strong>DOB:</strong> 23 Oct 1994
        </li>
        <li>
          <strong>Address:</strong> Lviv, Chornovola street
        </li>
        <li>
          <strong>Reg. Date:</strong> Thursday, May 25
        </li>
      </ul>
    </div>
  );
};

export default GeneralInfoCard;
