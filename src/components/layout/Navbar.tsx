import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const services = [
  { _id: "1", name: "Root Canal Treatment", slug: "root-canal" },
  {
    _id: "2",
    name: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
  },
  { _id: "3", name: "Dental Crowns", slug: "crowns" },
  { _id: "4", name: "All Services", slug: "" },
];

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // New state to manage the mobile services accordion
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Effect to handle scroll for navbar background/text change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false); // Close mobile services menu too
  };

  const bookAppointment = () => {
    navigate("/appointment");
    closeAllMenus();
  };

  const navbarBgClass =
    isHomePage && !isScrolled
      ? "bg-transparent absolute top-0 inset-x-0"
      : "bg-[#f2f5fa]  relative";
  const textColorClass =
    isHomePage && !isScrolled ? "text-white" : "text-gray-700";
  const logoColorClass =
    isHomePage && !isScrolled ? "text-white" : "text-[#2e2976]";

  const getNavLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    const isSpecialCase =
      location.pathname.startsWith("/services") && path === "/services";

    const baseClass =
      isHomePage && !isScrolled
        ? "text-white hover:text-blue-200"
        : "text-gray-700 hover:text-[#2e2976]";

    const activeClass =
      isHomePage && !isScrolled
        ? "text-blue-200 font-bold"
        : "text-[#2e2976] font-bold";

    if (isActive || isSpecialCase) {
      return `${baseClass} ${activeClass}`;
    }
    return baseClass;
  };

  const mobileIconColorClass =
    isHomePage && !isScrolled ? "text-white" : "text-black";

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  return (
    <nav
      className={`w-full fixed top-0 z-50 font-[Roboto] transition-all duration-300 ${navbarBgClass}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center">
          <Link
            to="/"
            className={`flex items-center gap-2 font-extrabold md:text-3xl text-2xl ${logoColorClass}`}
          >
            <img
              className="w-70 drop-shadow-lg"
              src="/logo.png"
              alt="Fix Dental Care Logo"
            />{" "}
          </Link>

          {/* Desktop Nav - Hidden on small screens */}
          <div
            className={`hidden lg:flex gap-8 text-lg sm:text-xl md:text-2xl lg:text-lg font-semibold   ${textColorClass} items-center ml-10`}
          >
            <Link to="/" className={getNavLinkClass("/")}>
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`${getNavLinkClass("/services")} flex items-center gap-1 transition text-lg sm:text-xl md:text-2xl lg:text-lg font-semibold items-center ml-10`}
              >
                Services <ArrowIcon />
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
            <Link to="/about-us" className={getNavLinkClass("/about-us")}>
              About Us
            </Link>
            <Link to="/gallery" className={getNavLinkClass("/gallery")}>
              Gallery
            </Link>
            <Link to="/contact" className={getNavLinkClass("/contact")}>
              Contact
            </Link>
          </div>
        </div>

        {/* Desktop Book Appointment Button */}
        <div className="hidden lg:block lg:ml-4">
          <Button
            className="hover:bg-blue-900 text-white transition"
            onClick={bookAppointment}
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Nav - Visible on small screens */}
        <div className="flex items-center lg:hidden gap-2">
          <button
            className="focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <IoClose size={30} className={mobileIconColorClass} />
            ) : (
              <IoMdMenu size={24} className={mobileIconColorClass} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f2f5fa] px-6 pb-6 space-y-4 text-base text-[#2e2976] font-medium transition-all duration-300">
          <Link
            to="/"
            onClick={() => closeAllMenus()}
            className="block py-2 hover:underline"
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              className="flex justify-between items-center w-full py-2"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <p className="font-semibold text-sky-700 ">
                Services
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link
                    key={s._id}
                    to={`/services/${s.slug}`}
                    className="block hover:underline py-1"
                    onClick={() => closeAllMenus()}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about-us"
            onClick={() => closeAllMenus()}
            className="block py-2 hover:underline"
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            onClick={() => closeAllMenus()}
            className="block py-2 hover:underline"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => closeAllMenus()}
            className="block py-2 hover:underline"
          >
            Contact
          </Link>

          <Button
            className="w-full mt-4 hover:bg-blue-900 text-white transition"
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
