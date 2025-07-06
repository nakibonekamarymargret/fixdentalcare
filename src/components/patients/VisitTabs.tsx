import { useState } from "react";

const VisitTabs = () => {
  const [activeTab, setActiveTab] = useState<"future" | "past" | "planned">(
    "future"
  );

  const visits: Record<
    "future" | "past" | "planned",
    {
      date: string;
      time: string;
      service: string;
      doctor: string;
      status: string;
    }[]
  > = {
    future: [
      {
        date: "26 Sep 2023",
        time: "11:00 - 13:30",
        service: "Cleaning",
        doctor: "Dr. Marina",
        status: "Scheduled",
      },
      {
        date: "27 Jan 2023",
        time: "11:00 - 12:00",
        service: "Whitening",
        doctor: "Dr. Max",
        status: "Scheduled",
      },
    ],
    past: [],
    planned: [],
  };

  const currentVisits = visits[activeTab];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("future")}
          className={`py-2 px-4 rounded ${activeTab === "future" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Future Visits
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`py-2 px-4 rounded ${activeTab === "past" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Past Visits
        </button>
        <button
          onClick={() => setActiveTab("planned")}
          className={`py-2 px-4 rounded ${activeTab === "planned" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Planned Treatments
        </button>
      </div>

      {/* Conditional Content */}
      {currentVisits.length > 0 ? (
        <table className="w-full table-auto border border-gray-300 rounded-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Service</th>
              <th className="border px-4 py-2">Doctor</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentVisits.map((v, i) => (
              <tr key={i} className="text-sm text-gray-700">
                <td className="border px-4 py-2">{v.date}</td>
                <td className="border px-4 py-2">{v.time}</td>
                <td className="border px-4 py-2">{v.service}</td>
                <td className="border px-4 py-2">{v.doctor}</td>
                <td className="border px-4 py-2 text-center">
                  <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full inline-block">
                    {v.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-sm text-gray-500">No records found.</p>
      )}
    </div>
  );
};

export default VisitTabs;
