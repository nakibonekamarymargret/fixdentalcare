// src/components/DentistDashboard.jsx

import React, { useState } from "react";
import {
  FaCalendarDay,
  FaUsers,
  FaNotesMedical,
  FaInbox,
  // FaChartBar,
  FaUserCog,
  FaTooth,
  // FaUserMd,
  FaBriefcaseMedical,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
// --- Dummy Data for Demonstration ---
const dummyDentistInfo = {
  name: "Dr. Jane Smith",
  specialty: "General Dentistry",
  email: "dr.smith@fixdentalcare.com",
  phone: "+256 7XX XXX XXX",
};

const dummyDentistSchedule = [
  {
    id: "app1",
    date: "2025-06-17",
    time: "09:00 AM",
    patientName: "Alice Johnson",
    service: "Routine Cleaning",
    status: "Confirmed",
  },
  {
    id: "app2",
    date: "2025-06-17",
    time: "10:00 AM",
    patientName: "Bob Williams",
    service: "Cosmetic Filling",
    status: "Confirmed",
  },
  {
    id: "app3",
    date: "2025-06-17",
    time: "11:30 AM",
    patientName: "Charlie Brown",
    service: "Dental Check-up",
    status: "Confirmed",
  },
  {
    id: "app4",
    date: "2025-06-18",
    time: "09:30 AM",
    patientName: "Diana Prince",
    service: "Tooth Extraction",
    status: "Scheduled",
  },
  {
    id: "app5",
    date: "2025-06-18",
    time: "01:00 PM",
    patientName: "Eve Adams",
    service: "Orthodontic Adjustment",
    status: "Scheduled",
  },
];

const dummyPatients = [
  {
    id: "p1",
    name: "Alice Johnson",
    dob: "1995-03-10",
    phone: "+256 711 222 333",
    email: "alice.j@example.com",
    lastVisit: "2025-06-17",
    status: "Active",
  },
  {
    id: "p2",
    name: "Bob Williams",
    dob: "1988-07-22",
    phone: "+256 722 333 444",
    email: "bob.w@example.com",
    lastVisit: "2025-06-17",
    status: "Active",
  },
  {
    id: "p3",
    name: "Charlie Brown",
    dob: "2001-01-01",
    phone: "+256 733 444 555",
    email: "charlie.b@example.com",
    lastVisit: "2025-06-17",
    status: "Active",
  },
  {
    id: "p4",
    name: "Diana Prince",
    dob: "1970-11-11",
    phone: "+256 744 555 666",
    email: "diana.p@example.com",
    lastVisit: "2025-04-20",
    status: "Active",
  },
  {
    id: "p5",
    name: "Eve Adams",
    dob: "1999-05-05",
    phone: "+256 755 666 777",
    email: "eve.a@example.com",
    lastVisit: "2025-02-10",
    status: "Active",
  },
  {
    id: "p6",
    name: "Frank White",
    dob: "1980-09-19",
    phone: "+256 766 777 888",
    email: "frank.w@example.com",
    lastVisit: "2024-11-30",
    status: "Active",
  },
];

const dummyMessages = [
  {
    id: "m1",
    sender: "Reception",
    subject: "New Patient Inquiry",
    date: "2025-06-17",
    content:
      "Patient wanting to book an emergency appointment. Can you review their case?",
    read: false,
  },
  {
    id: "m2",
    sender: "Dr. Emily",
    subject: "Regarding Patient Alice Johnson",
    date: "2025-06-16",
    content:
      "Just a quick question about Alice Johnson's previous fluoride treatment plan.",
    read: true,
  },
];

// --- Main DentistDashboard Component ---
const DentistDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null); // For viewing individual patient details

  // Filter today's appointments
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const todaysAppointments = dummyDentistSchedule.filter(
    (app) => app.date === today
  );
  const upcomingAppointments = dummyDentistSchedule.filter(
    (app) => app.date > today
  );

  // --- Sub-Components for Sections ---

  const OverviewSection = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-[#2e2976]">
          Welcome, {dummyDentistInfo.name}!
        </h3>
        <p className="text-gray-700 text-lg">
          You have{" "}
          <span className="font-bold text-blue-600">
            {todaysAppointments.length}
          </span>{" "}
          appointments scheduled for today.
        </p>
        {todaysAppointments.length > 0 && (
          <div className="mt-4 p-4 bg-blue-100 rounded-md border border-blue-200">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">
              Next up:
            </h4>
            <p className="text-lg text-gray-700">
              {todaysAppointments[0].time} - {todaysAppointments[0].patientName}{" "}
              ({todaysAppointments[0].service})
            </p>
            <Button
              className="mt-3 bg-blue-600 hover:bg-blue-700"
              onClick={() => setActiveSection("schedule")}
            >
              View Full Schedule
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          icon={<FaCalendarDay className="text-blue-600" />}
          title="Today's Schedule"
          description={`View and manage your ${todaysAppointments.length} appointments for today.`}
          onClick={() => setActiveSection("schedule")}
        />
        <DashboardCard
          icon={<FaUsers className="text-green-600" />}
          title="Patient List"
          description="Access patient records, medical history, and contact details."
          onClick={() => setActiveSection("patients")}
        />
        <DashboardCard
          icon={<FaNotesMedical className="text-purple-600" />}
          title="Clinical Notes"
          description="Add and review notes for patient visits."
          onClick={() => setActiveSection("clinical-notes")}
        />
        <DashboardCard
          icon={<FaInbox className="text-orange-600" />}
          title="Messages"
          description={`You have ${dummyMessages.filter((msg) => !msg.read).length} unread messages.`}
          onClick={() => setActiveSection("messages")}
        />
        <DashboardCard
          icon={<FaBriefcaseMedical className="text-red-600" />}
          title="Treatment Plans"
          description="Manage ongoing and past patient treatment plans."
          onClick={() => setActiveSection("treatment-plans")}
        />
        <DashboardCard
          icon={<FaUserCog className="text-gray-600" />}
          title="My Profile & Settings"
          description="Update your availability and personal information."
          onClick={() => setActiveSection("profile")}
        />
      </div>
    </div>
  );

  const ScheduleSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">My Schedule</h3>

      <h4 className="text-lg font-semibold mb-3 text-gray-800">
        Today's Appointments ({new Date().toDateString()})
      </h4>
      {todaysAppointments.length > 0 ? (
        <div className="space-y-4 mb-8">
          {todaysAppointments.map((app) => (
            <div
              key={app.id}
              className="border border-gray-200 p-4 rounded-md flex justify-between items-center bg-blue-50"
            >
              <div>
                <p className="text-lg font-bold text-blue-800">{app.time}</p>
                <p className="text-gray-700">
                  {app.patientName} - {app.service}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="text-sm">
                  View Patient
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white text-sm">
                  Mark Complete
                </Button>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm">
                  Add Notes
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mb-8">
          No appointments scheduled for today.
        </p>
      )}

      <h4 className="text-lg font-semibold mb-3 text-gray-800">
        Upcoming Appointments
      </h4>
      {upcomingAppointments.length > 0 ? (
        <div className="space-y-4">
          {upcomingAppointments.map((app) => (
            <div key={app.id} className="border border-gray-200 p-4 rounded-md">
              <p className="text-md font-bold text-gray-800">
                {new Date(app.date).toDateString()} at {app.time}
              </p>
              <p className="text-gray-700">
                {app.patientName} - {app.service}
              </p>
              <Button
                variant="ghost"
                className="mt-2 text-blue-600 hover:underline text-sm"
              >
                Reschedule
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No upcoming appointments found.</p>
      )}
    </div>
  );

  const PatientsSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">My Patients</h3>
      {selectedPatient ? (
        <PatientDetailView
          patient={selectedPatient}
          onBack={() => setSelectedPatient(null)}
        />
      ) : (
        <>
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <div className="space-y-4">
            {dummyPatients.map((patient) => (
              <div
                key={patient.id}
                className="border border-gray-200 p-4 rounded-md flex justify-between items-center bg-gray-50"
              >
                <div>
                  <p className="text-lg font-bold text-gray-800">
                    {patient.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Last Visit: {patient.lastVisit}
                  </p>
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
                  onClick={() => setSelectedPatient(patient)}
                >
                  View Record
                </Button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  interface Patient {
    id: string;
    name: string;
    dob: string;
    phone: string;
    email: string;
    lastVisit: string;
    status: string;
  }

  const PatientDetailView = ({ patient, onBack }: { patient: Patient; onBack: () => void }) => (
    <div className="space-y-4">
      <Button variant="outline" onClick={onBack} className="mb-4">
        ← Back to Patient List
      </Button>
      <h4 className="text-2xl font-bold text-blue-700">
        {patient.name}'s Record
      </h4>

      <div className="bg-gray-50 p-4 rounded-md shadow-sm">
        <h5 className="font-semibold text-lg mb-2">Personal Details</h5>
        <p>
          <strong>DOB:</strong> {patient.dob}
        </p>
        <p>
          <strong>Phone:</strong> {patient.phone}
        </p>
        <p>
          <strong>Email:</strong> {patient.email}
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-md shadow-sm">
        <h5 className="font-semibold text-lg mb-2">
          Medical History (Summary - In a real app, this would be detailed and
          secure)
        </h5>
        <p className="text-gray-700">
          No known allergies. Patient has a history of mild gum inflammation.
        </p>
        <Button
          variant="ghost"
          className="text-blue-600 hover:underline text-sm mt-2"
        >
          View Full Medical History
        </Button>
      </div>

      <div className="bg-gray-50 p-4 rounded-md shadow-sm">
        <h5 className="font-semibold text-lg mb-2">Recent Appointments</h5>
        {dummyDentistSchedule
          .filter((app) => app.patientName === patient.name)
          .map((app) => (
            <div
              key={app.id}
              className="border-b border-gray-200 py-2 last:border-b-0"
            >
              <p className="font-semibold">
                {new Date(app.date).toDateString()} - {app.service}
              </p>
              <p className="text-sm text-gray-600">Status: {app.status}</p>
            </div>
          ))}
        <Button
          variant="ghost"
          className="text-blue-600 hover:underline text-sm mt-2"
        >
          View All Appointments
        </Button>
      </div>

      <div className="flex gap-4 mt-6">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Add New Appointment
        </Button>
        <Button variant="outline">Add Clinical Note</Button>
        <Button variant="outline">Create Treatment Plan</Button>
      </div>
    </div>
  );

  const ClinicalNotesSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">
        Clinical Notes
      </h3>
      <p className="text-gray-600">
        This section would allow you to add, view, and manage detailed clinical
        notes for each patient visit.
      </p>
      <div className="mt-4">
        <Button className="bg-blue-600 hover:bg-blue-700">Add New Note</Button>
      </div>
      {/* Placeholder for a list of recent notes or search functionality */}
    </div>
  );

  const TreatmentPlansSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">
        Treatment Plans
      </h3>
      <p className="text-gray-600">
        Manage patient treatment plans here. View progress, update stages, and
        outline future procedures.
      </p>
      <div className="mt-4">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Create New Treatment Plan
        </Button>
      </div>
      {/* Placeholder for a list of active/completed treatment plans */}
    </div>
  );

  const MessagesSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">Messages</h3>
      {dummyMessages.length > 0 ? (
        <div className="space-y-4">
          {dummyMessages.map((msg) => (
            <div
              key={msg.id}
              className={`border border-gray-200 p-4 rounded-md cursor-pointer ${!msg.read ? "bg-blue-50" : "bg-gray-50"}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span
                  className={`font-semibold ${!msg.read ? "text-blue-800" : "text-gray-800"}`}
                >
                  From: {msg.sender}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(msg.date).toDateString()}
                </span>
              </div>
              <p
                className={`font-bold text-md ${!msg.read ? "text-blue-900" : "text-gray-800"}`}
              >
                {msg.subject}
              </p>
              <p className="text-gray-700 text-sm mt-1 line-clamp-2">
                {msg.content}
              </p>
              <Button
                variant="ghost"
                className="mt-2 text-blue-600 hover:underline text-sm"
              >
                Read Message
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No new messages.</p>
      )}
      <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
        Compose New Message
      </Button>
    </div>
  );

  const ProfileSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">
        My Profile & Settings
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="font-medium">Name:</p>
          <p>{dummyDentistInfo.name}</p>
        </div>
        <div>
          <p className="font-medium">Specialty:</p>
          <p>{dummyDentistInfo.specialty}</p>
        </div>
        <div>
          <p className="font-medium">Email:</p>
          <p>{dummyDentistInfo.email}</p>
        </div>
        <div>
          <p className="font-medium">Phone:</p>
          <p>{dummyDentistInfo.phone}</p>
        </div>
        {/* Add more fields like working hours, break times, etc. */}
      </div>
      <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
        Edit Profile
      </Button>
    </div>
  );

  interface DashboardCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
  }

  const DashboardCard = ({ icon, title, description, onClick }: DashboardCardProps) => (
    <div
      className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col items-start"
      onClick={onClick}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-[#2e2976]">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "schedule":
        return <ScheduleSection />;
      case "patients":
        return <PatientsSection />;
      case "clinical-notes":
        return <ClinicalNotesSection />;
      case "treatment-plans":
        return <TreatmentPlansSection />;
      case "messages":
        return <MessagesSection />;
      case "profile":
        return <ProfileSection />;
      default:
        return <p>Section not found.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-[Roboto] flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col border-r border-gray-200">
        <h2 className="text-2xl font-bold text-[#2e2976] mb-8">
          <FaTooth className="inline-block text-blue-600 mr-2" /> Dentist Portal
        </h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === "overview"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]"
                }`}
                onClick={() => setActiveSection("overview")}
              >
                <FaCalendarDay className="mr-3" /> Overview
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === "schedule"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]"
                }`}
                onClick={() => setActiveSection("schedule")}
              >
                <FaCalendarDay className="mr-3" /> My Schedule
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === "patients"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]"
                }`}
                onClick={() => setActiveSection("patients")}
              >
                <FaUsers className="mr-3" /> Patients
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === "clinical-notes"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]"
                }`}
                onClick={() => setActiveSection("clinical-notes")}
              >
                <FaNotesMedical className="mr-3" /> Clinical Notes
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === "treatment-plans"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]"
                }`}
                onClick={() => setActiveSection("treatment-plans")}
              >
                <FaBriefcaseMedical className="mr-3" /> Treatment Plans
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === "messages"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]"
                }`}
                onClick={() => setActiveSection("messages")}
              >
                <FaInbox className="mr-3" /> Messages
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === "profile"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]"
                }`}
                onClick={() => setActiveSection("profile")}
              >
                <FaUserCog className="mr-3" /> My Profile
              </button>
            </li>
          </ul>
        </nav>
        {/* Logout Button */}
        <div className="mt-auto pt-6 border-t border-gray-200">
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-[#2e2976] mb-8 capitalize">
          {activeSection.replace("-", " ")}
        </h1>
        {renderSection()}
      </main>
    </div>
  );
};

export default DentistDashboard;
