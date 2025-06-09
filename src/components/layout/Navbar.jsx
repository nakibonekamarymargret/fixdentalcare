import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaTooth } from "react-icons/fa6";
import { Button } from "../ui/button";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (type) => {
    clearTimeout(timeoutRef.current);
    if (type === "services") setServicesOpen(true);
    if (type === "pages") setPagesOpen(true);
  };

  const handleMouseLeave = (type) => {
    timeoutRef.current = setTimeout(() => {
      if (type === "services") setServicesOpen(false);
      if (type === "pages") setPagesOpen(false);
    }, 200);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-[#2e2976]"
        >
          FixDentalCare
          <span className="bg-[#2e2976] rounded-full p-1 text-white flex items-center justify-center">
            <FaTooth className="w-5 h-5" />
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-8 text-lg font-semibold text-gray-700 items-center">
          <Link to="/" className="hover:text-[#2e2976] transition">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={() => handleMouseLeave("services")}
          >
            <button className="hover:text-[#2e2976] transition flex items-center gap-1">
              Services ▼
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <Link
                  to="/services/oral-surgery"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2e2976] hover:text-white transition"
                >
                  Oral Surgery
                </Link>
                <Link
                  to="/services/general-dentistry"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2e2976] hover:text-white transition"
                >
                  General Dentistry
                </Link>
                <Link
                  to="/services/orthodontics"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2e2976] hover:text-white transition"
                >
                  Orthodontics
                </Link>
                <Link
                  to="/services/teeth-whitening"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2e2976] hover:text-white transition"
                >
                  Teeth Whitening
                </Link>
                <Link
                  to="/services/all-services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2e2976] hover:text-white transition"
                >
                  All Services
                </Link>
              </div>
            )}
          </div>

          <Link to="/dentists" className="hover:text-[#2e2976] transition">
            Dentists
          </Link>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={() => handleMouseLeave("pages")}
          >
            <button className="hover:text-[#2e2976] transition flex items-center gap-1">
              Pages ▼
            </button>
            {pagesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <Link
                  to="/about-us"
                  onClick={() => setPagesOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2e2976] hover:text-white transition"
                >
                  About Us
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setPagesOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2e2976] hover:text-white transition"
                >
                  FAQ
                </Link>
                <Link
                  to="/testimonials"
                  onClick={() => setPagesOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2e2976] hover:text-white transition"
                >
                  Testimonials
                </Link>
              </div>
            )}
          </div>

          <Link to="/blog" className="hover:text-[#2e2976] transition">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-[#2e2976] transition">
            Contact
          </Link>
        </div>

        <div className="px-7">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
