import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const services = [
  { _id: "1", name: "General Dentistry", slug: "general-dentistry" },
  { _id: "2", name: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
  { _id: "3", name: "Orthodontics", slug: "orthodontics" },
];

const pages = ["about-us", "faq", "testimonials"];

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Effect to handle scroll for navbar background/text change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (type: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (type === "services") setServicesOpen(true);
    if (type === "pages") setPagesOpen(true);
  };

  const handleMouseLeave = (type: string) => {
    timeoutRef.current = window.setTimeout(() => {
      if (type === "services") setServicesOpen(false);
      if (type === "pages") setPagesOpen(false);
    }, 200);
  };
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setPagesOpen(false);
  };

  const bookAppointment = () => {
    navigate("/appointment");
    closeAllMenus(); // Close all menus on navigation
  };
  // Define dynamic classes based on home page and scroll state
  const navbarBgClass =
    isHomePage && !isScrolled
      ? "bg-transparent absolute top-0 inset-x-0" // Transparent on top of home hero
      : "bg-[#f2f5fa] shadow-md relative"; // Solid background on other pages or when scrolled

  const textColorClass =
    isHomePage && !isScrolled
      ? "text-white" // White text on top of home hero
      : "text-gray-700"; // Dark text on other pages or when scrolled

  const logoColorClass =
    isHomePage && !isScrolled ? "text-white" : "text-[#2e2976]";

  
  const hoverColorClass =
    isHomePage && !isScrolled
      ? "hover:text-blue-200" // Lighter hover for white text
      : "hover:text-[#2e2976]"; // Darker hover for dark text

  return (
    <nav
      className={`w-full fixed top-0 z-50 font-[Roboto] transition-all duration-300 ${navbarBgClass}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-2 font-extrabold text-2xl ${logoColorClass}`}
        >
          <img className="w-70" src="/logo.png" alt="" />
         
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <HiX className="text-3xl text-[#2e2976]" />
          ) : (
            <HiMenuAlt3 className="text-3xl text-[#2e2976]" />
          )}
        </button>

        {/* Desktop Nav */}
        <div
          className={`flex gap-8 text-lg font-semibold ${textColorClass} items-center`}
        >
          <Link to="/" className={`${textColorClass} ${hoverColorClass}`}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={() => handleMouseLeave("services")}
          >
            <button
              className={`${textColorClass} ${hoverColorClass} flex items-center gap-1 transition`}
            >
              Services <IoIosArrowDown />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border shadow-md rounded-md z-50">
                {services.map((s) => (
                  <Link
                    key={s._id}
                    to={`/services/${s.slug}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/dentists"
            className={`${textColorClass} ${hoverColorClass}`}
          >
            Dentists
          </Link>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={() => handleMouseLeave("pages")}
          >
            <button
              className={`${textColorClass} ${hoverColorClass} flex items-center gap-1 transition`}
            >
              Pages <IoIosArrowDown />
            </button>
            {pagesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-md rounded-md z-50">
                {pages.map((slug, idx) => (
                  <Link
                    key={idx}
                    to={`/${slug}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#2e2976] hover:text-white transition"
                    onClick={() => setPagesOpen(false)}
                  >
                    {slug
                      .replace("-", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* <Link to="/blog" className={`${textColorClass} ${hoverColorClass}`}>
            Blog
          </Link> */}
          <Link
            to="/contact"
            className={`${textColorClass} ${hoverColorClass}`}
          >
            Contact
          </Link>
          
          <Button
            className={`${textColorClass} ml-4 bg-blue-600 hover:bg-blue-700 text-white transition`}
            onClick={bookAppointment}
          >
            Book Appointment
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f2f5fa] px-6 pb-6 space-y-4 text-base text-[#2e2976] font-medium">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block"
          >
            Home
          </Link>

          <div>
            <p className="mb-1 font-semibold">Services</p>
            <div className="pl-4 space-y-1">
              {services.map((s) => (
                <Link
                  key={s._id}
                  to={`/services/${s.slug}`}
                  className="block hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/dentists" onClick={() => setMobileMenuOpen(false)}>
            Dentists
          </Link>

          <div>
            <p className="mb-1 font-semibold">Pages</p>
            <div className="pl-4 space-y-1">
              {pages.map((slug, idx) => (
                <Link
                  key={idx}
                  to={`/${slug}`}
                  className="block hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {slug
                    .replace("-", " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>

          <Button
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={bookAppointment}
          >
            Book Appointment
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
