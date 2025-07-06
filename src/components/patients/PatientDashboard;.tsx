// import PatientInfoCard from "./PatientInfoCard";
// import GeneralInfoCard from "./GeneralInfoCard";
// import AnamnesisCard from "./AnamnesisCard";
// import VisitTabs from "./VisitTabs";
// import Sidebar from "../layout/Sidebar";
// import FileList from "./FileList";
// import NotesList from "./NotesList";
// const PatientDashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar userType="patient" />

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">My Profile</h1>
//           <div className="space-x-2">
//             <button className="btn btn-outline">Print</button>
//             <button className="btn btn-primary">Edit</button>
//           </div>
//         </div>

//         {/* Top Info Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//           <PatientInfoCard />
//           <GeneralInfoCard />
//           <AnamnesisCard />
//         </div>

//         {/* Appointments Tabs */}
//         <VisitTabs />

//         {/* Files and Notes */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <FileList />
//           <NotesList />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PatientDashboard;
// src/components/PatientDashboard.jsx

import React, { useState } from 'react';
import { FaCalendarAlt, FaUserEdit, FaDollarSign, FaEnvelope, FaInfoCircle,  FaTooth, FaBriefcaseMedical } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you have react-router-dom set up
import { Button } from '../ui/button'; // Assuming you have a Button component in your UI library
import { useNavigate } from 'react-router-dom'; // For navigation purposes
// Dummy Data for demonstration
const dummyAppointments = [
  { id: '1', type: 'Upcoming', date: '2025-07-20', time: '10:00 AM', service: 'Routine Cleaning', dentist: 'Dr. Smith', status: 'Confirmed' },
  { id: '2', type: 'Upcoming', date: '2025-08-05', time: '02:30 PM', service: 'Cosmetic Filling', dentist: 'Dr. Jones', status: 'Confirmed' },
  { id: '3', type: 'Past', date: '2025-05-15', time: '11:00 AM', service: 'Dental Check-up', dentist: 'Dr. Smith', notes: 'No major issues, recommended fluoride treatment.' },
  { id: '4', type: 'Past', date: '2025-03-01', time: '09:00 AM', service: 'Tooth Extraction', dentist: 'Dr. Brown', notes: 'Successfully extracted wisdom tooth.' },
];

const dummyTreatments = [
  { id: 't1', name: 'Orthodontic Treatment', status: 'In Progress', startDate: '2024-10-01', nextVisit: '2025-07-25', notes: 'Adjustment phase.' },
  { id: 't2', name: 'Crown Placement', status: 'Completed', completionDate: '2025-04-10', notes: 'Upper-left molar crown placed successfully.' },
];

const dummyBilling = [
  { id: 'b1', date: '2025-07-01', description: 'Routine Cleaning (Due)', amount: 120.00, status: 'Outstanding' },
  { id: 'b2', date: '2025-05-15', description: 'Dental Check-up', amount: 80.00, status: 'Paid' },
  { id: 'b3', date: '2025-03-01', description: 'Tooth Extraction', amount: 350.00, status: 'Paid' },
];

const dummyMessages = [
  { id: 'm1', sender: 'Clinic', subject: 'Appointment Reminder', date: '2025-07-19', content: 'Your routine cleaning is scheduled for tomorrow at 10 AM.', read: false },
  { id: 'm2', sender: 'Dr. Smith', subject: 'Post-Op Check-in', date: '2025-05-16', content: 'Hope your recovery is going well after the check-up. Let us know if you have any concerns.', read: true },
];

const PatientDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview'); // State for active dashboard section

  // Get current date to highlight upcoming appointment
  // const today = new Date();
  const nextAppointment = dummyAppointments
    .filter(app => app.type === 'Upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    // eslint-disable-next-line no-unexpected-multiline
    [0]; // Get the earliest upcoming appointment
    const navigate = useNavigate();

  const PatientInfoSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="font-medium">Full Name:</p>
          <p>John Doe</p>
        </div>
        <div>
          <p className="font-medium">Date of Birth:</p>
          <p>1990-01-15</p>
        </div>
        <div>
          <p className="font-medium">Email:</p>
          <p>john.doe@example.com</p>
        </div>
        <div>
          <p className="font-medium">Phone:</p>
          <p>+256 7XX XXX XXX</p>
        </div>
        <div>
          <p className="font-medium">Address:</p>
          <p>123 Dental Lane, Kampala</p>
        </div>
        <div>
          <p className="font-medium">Emergency Contact:</p>
          <p>Jane Doe (+256 7YY YYY YYY)</p>
        </div>
        <div>
          <p className="font-medium">Insurance Provider:</p>
          <p>HealthFirst Insurance</p>
        </div>
        <div>
          <p className="font-medium">Policy Number:</p>
          <p>HF123456789</p>
        </div>
      </div>
      <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Edit Profile</Button>
    </div>
  );

  const AppointmentsSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">My Appointments</h3>

      {/* Upcoming Appointments */}
      <h4 className="text-lg font-semibold mb-3 text-gray-800">Upcoming Appointments</h4>
      {dummyAppointments.filter(app => app.type === 'Upcoming').length > 0 ? (
        <div className="space-y-4 mb-8">
          {dummyAppointments.filter(app => app.type === 'Upcoming').map(app => (
            <div key={app.id} className="border border-gray-200 p-4 rounded-md flex justify-between items-center bg-blue-50">
              <div>
                <p className="text-lg font-bold text-blue-800">{new Date(app.date).toDateString()} at {app.time}</p>
                <p className="text-gray-700">{app.service} with {app.dentist}</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="text-sm">View Details</Button>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm">Reschedule</Button>
                <Button className="bg-red-500 hover:bg-red-600 text-white text-sm">Cancel</Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mb-8">No upcoming appointments. <Link to="/book-appointment" className="text-blue-600 hover:underline">Book one now!</Link></p>
      )}

      {/* Past Appointments */}
      <h4 className="text-lg font-semibold mb-3 text-gray-800">Past Appointments</h4>
      {dummyAppointments.filter(app => app.type === 'Past').length > 0 ? (
        <div className="space-y-4">
          {dummyAppointments.filter(app => app.type === 'Past').map(app => (
            <div key={app.id} className="border border-gray-200 p-4 rounded-md">
              <p className="text-md font-bold text-gray-800">{new Date(app.date).toDateString()} at {app.time}</p>
              <p className="text-gray-700">{app.service} with {app.dentist}</p>
              {app.notes && <p className="text-gray-600 text-sm mt-1 italic">Notes: {app.notes}</p>}
              <Button variant="ghost" className="mt-2 text-blue-600 hover:underline text-sm">View Summary</Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No past appointments recorded.</p>
      )}

      <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Book New Appointment</Button>
    </div>
  );

  const TreatmentPlansSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">My Treatment Plans</h3>
      {dummyTreatments.length > 0 ? (
        <div className="space-y-4">
          {dummyTreatments.map(t => (
            <div key={t.id} className="border border-gray-200 p-4 rounded-md">
              <p className="text-lg font-bold text-gray-800">{t.name}</p>
              <p className="text-md text-gray-700">Status: <span className={`font-semibold ${t.status === 'In Progress' ? 'text-orange-600' : 'text-green-600'}`}>{t.status}</span></p>
              {t.startDate && <p className="text-gray-600 text-sm">Started: {new Date(t.startDate).toDateString()}</p>}
              {t.nextVisit && <p className="text-gray-600 text-sm">Next Visit: {new Date(t.nextVisit).toDateString()}</p>}
              {t.notes && <p className="text-gray-600 text-sm mt-1 italic">Notes: {t.notes}</p>}
              <Button variant="ghost" className="mt-2 text-blue-600 hover:underline text-sm">View Details</Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No active or past treatment plans found.</p>
      )}
    </div>
  );

  const BillingSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">Billing & Payments</h3>

      <h4 className="text-lg font-semibold mb-3 text-gray-800">Outstanding Balance</h4>
      {dummyBilling.filter(b => b.status === 'Outstanding').length > 0 ? (
        <div className="space-y-4 mb-8">
          {dummyBilling.filter(b => b.status === 'Outstanding').map(b => (
            <div key={b.id} className="border border-red-200 p-4 rounded-md flex justify-between items-center bg-red-50">
              <div>
                <p className="text-lg font-bold text-red-800">{b.description}</p>
                <p className="text-gray-700">Due Date: {new Date(b.date).toDateString()}</p>
              </div>
              <div>
                <p className="text-xl font-bold text-red-800">UGX {b.amount.toFixed(2)}</p>
                <Button className="bg-green-600 hover:bg-green-700 text-white text-sm mt-2">Make Payment</Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mb-8">No outstanding balance at this time.</p>
      )}

      <h4 className="text-lg font-semibold mb-3 text-gray-800">Payment History</h4>
      {dummyBilling.filter(b => b.status === 'Paid').length > 0 ? (
        <div className="space-y-4">
          {dummyBilling.filter(b => b.status === 'Paid').map(b => (
            <div key={b.id} className="border border-gray-200 p-4 rounded-md flex justify-between items-center">
              <div>
                <p className="text-md font-bold text-gray-800">{b.description}</p>
                <p className="text-gray-700">Paid on: {new Date(b.date).toDateString()}</p>
              </div>
              <p className="text-lg font-bold text-green-700">UGX {b.amount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No payment history available.</p>
      )}
    </div>
  );

  const MessagesSection = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-[#2e2976]">My Messages</h3>
      {dummyMessages.length > 0 ? (
        <div className="space-y-4">
          {dummyMessages.map(msg => (
            <div key={msg.id} className={`border border-gray-200 p-4 rounded-md cursor-pointer ${!msg.read ? 'bg-blue-50' : 'bg-gray-50'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className={`font-semibold ${!msg.read ? 'text-blue-800' : 'text-gray-800'}`}>From: {msg.sender}</span>
                <span className="text-sm text-gray-500">{new Date(msg.date).toDateString()}</span>
              </div>
              <p className={`font-bold text-md ${!msg.read ? 'text-blue-900' : 'text-gray-800'}`}>{msg.subject}</p>
              <p className="text-gray-700 text-sm mt-1 line-clamp-2">{msg.content}</p>
              <Button variant="ghost" className="mt-2 text-blue-600 hover:underline text-sm">Read More</Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No new messages.</p>
      )}
      <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Compose New Message</Button>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#2e2976]">Hello, John Doe!</h3>
              {nextAppointment ? (
                <div className="p-4 bg-blue-100 rounded-md border border-blue-200 flex items-center justify-between flex-wrap">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-blue-600 text-3xl mr-4" />
                    <div>
                      <p className="text-xl font-semibold text-blue-800">Your Next Appointment:</p>
                      <p className="text-lg text-gray-700">{new Date(nextAppointment.date).toDateString()} at {nextAppointment.time}</p>
                      <p className="text-md text-gray-600">{nextAppointment.service} with {nextAppointment.dentist}</p>
                    </div>
                  </div>
                  <Button className="mt-3 md:mt-0 bg-blue-600 hover:bg-blue-700">View Details</Button>
                </div>
              ) : (
                <p className="text-gray-700 text-lg">You don't have any upcoming appointments. <Link to="/book-appointment" className="text-blue-600 hover:underline">Book one now!</Link></p>
              )}
            </div>
            {/* Quick links to other sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DashboardCard
                icon={<FaCalendarAlt className="text-blue-600" />}
                title="Manage Appointments"
                description="View, reschedule, or cancel your appointments."
                onClick={() => setActiveSection('appointments')}
              />
              <DashboardCard
                icon={<FaUserEdit className="text-green-600" />}
                title="Update Profile"
                description="Keep your personal and insurance info up to date."
                onClick={() => setActiveSection('profile')}
              />
              <DashboardCard
                icon={<FaDollarSign className="text-purple-600" />}
                title="View Billing"
                description="Check your statements and make payments."
                onClick={() => setActiveSection('billing')}
              />
              <DashboardCard
                icon={<FaEnvelope className="text-orange-600" />}
                title="My Messages"
                description="Secure communication with the clinic."
                onClick={() => setActiveSection('messages')}
              />
              <DashboardCard
                icon={<FaBriefcaseMedical className="text-red-600" />}
                title="My Treatment Plans"
                description="Track your ongoing and past treatments."
                onClick={() => setActiveSection('treatment-plans')}
              />
              <DashboardCard
                icon={<FaInfoCircle className="text-gray-600" />}
                title="Clinic Info & FAQ"
                description="Find contact details and answers to common questions."
                onClick={() => navigate('/contact')} // Assuming /contact is your clinic info page
              />
            </div>
          </div>
        );
      case 'profile':
        return <PatientInfoSection />;
      case 'appointments':
        return <AppointmentsSection />;
      case 'treatment-plans':
        return <TreatmentPlansSection />;
      case 'billing':
        return <BillingSection />;
      case 'messages':
        return <MessagesSection />;
      default:
        return <p>Section not found.</p>;
    }
  };

  const DashboardCard = ({ icon, title, description, onClick }: { icon: React.ReactNode; title: string; description: string; onClick: () => void }) => (
    <div
      className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col items-start"
      onClick={onClick}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-[#2e2976]">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-[Roboto] flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col border-r border-gray-200">
        <h2 className="text-2xl font-bold text-[#2e2976] mb-8">
          <FaTooth className="inline-block text-blue-600 mr-2" /> Dashboard
        </h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === 'overview'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]'
                }`}
                onClick={() => setActiveSection('overview')}
              >
                <FaInfoCircle className="mr-3" /> Overview
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === 'appointments'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]'
                }`}
                onClick={() => setActiveSection('appointments')}
              >
                <FaCalendarAlt className="mr-3" /> Appointments
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === 'profile'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]'
                }`}
                onClick={() => setActiveSection('profile')}
              >
                <FaUserEdit className="mr-3" /> My Profile
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === 'treatment-plans'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]'
                }`}
                onClick={() => setActiveSection('treatment-plans')}
              >
                <FaBriefcaseMedical className="mr-3" /> Treatment Plans
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === 'billing'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]'
                }`}
                onClick={() => setActiveSection('billing')}
              >
                <FaDollarSign className="mr-3" /> Billing
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === 'messages'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]'
                }`}
                onClick={() => setActiveSection('messages')}
              >
                <FaEnvelope className="mr-3" /> Messages
              </button>
            </li>
            {/* Example of linking to external or non-dashboard pages */}
            <li>
              <Link
                to="/book-appointment" // This link would navigate to your booking page
                className="flex items-center w-full px-4 py-2 rounded-md transition-colors duration-200 text-gray-700 hover:bg-gray-100 hover:text-[#2e2976]"
              >
                <FaCalendarAlt className="mr-3" /> Book New Appointment
              </Link>
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
          {activeSection.replace('-', ' ')}
        </h1>
        {renderSection()}
      </main>
    </div>
  );
};

export default PatientDashboard;