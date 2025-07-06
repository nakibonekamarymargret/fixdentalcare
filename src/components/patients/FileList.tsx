const FileList = () => {
  const files = [
    { name: "Check Up Result.pdf", size: "123kb" },
    { name: "Medical Prescription.pdf", size: "98kb" },
    { name: "Blood Test.pdf", size: "110kb" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-md font-bold mb-4">Files</h3>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-2 rounded"
          >
            <div>
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-gray-500">{file.size}</p>
            </div>
            <button className="text-blue-500 hover:underline text-sm">
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
