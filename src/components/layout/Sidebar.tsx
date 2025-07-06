// src/components/ui/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  userType: "patient" | "dentist";
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const patientLinks = [
    { label: "Dashboard", path: "/patient/dashboard", icon: "🏠" },
    { label: "My Appointments", path: "/patient/appointments", icon: "📅" },
    { label: "Treatments", path: "/patient/treatments", icon: "🦷" },
    { label: "Files & Reports", path: "/patient/files", icon: "📄" },
    { label: "Notes", path: "/patient/notes", icon: "📝" },
    { label: "Profile Settings", path: "/patient/settings", icon: "👤" },
  ];

  const dentistLinks = [
    { label: "Dashboard", path: "/dentist/dashboard", icon: "🏠" },
    { label: "Patients", path: "/dentist/patients", icon: "👥" },
    { label: "Appointments", path: "/dentist/appointments", icon: "📅" },
    { label: "Reports", path: "/dentist/reports", icon: "📊" },
    { label: "Settings", path: "/dentist/settings", icon: "⚙️" },
  ];

  const links = userType === "patient" ? patientLinks : dentistLinks;

  return (
    <aside className="w-64 bg-blue-800 text-white min-h-screen p-6 space-y-6">
      <div className="text-2xl font-bold mb-8">Fix Dental Care</div>
      <nav className="space-y-4">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="block hover:bg-blue-700 p-2 rounded transition"
          >
            {link.icon} {link.label}
          </Link>
        ))}
      </nav>

      
    </aside>
  );
};

export default Sidebar;
