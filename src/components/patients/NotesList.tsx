const NotesList = () => {
  const notes = [
    { date: "31.08.23", text: "Patient experienced mild headache post-visit." },
    {
      date: "23.06.23",
      text: "Recommended to avoid cold beverages for 1 week.",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-md font-bold mb-4">Notes</h3>
      <ul className="space-y-3">
        {notes.map((note, index) => (
          <li
            key={index}
            className="bg-gray-50 hover:bg-gray-100 p-3 rounded text-sm text-gray-700"
          >
            <p className="font-semibold text-xs text-gray-500 mb-1">
              Note {note.date}
            </p>
            <p>{note.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
