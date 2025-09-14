import {
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-white py-10 px-4 md:px-20 font-sans">
      {/* Main Footer */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="md:w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.png"
              alt="Fix Dental Care"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            At Fix Dental Care, we’re dedicated to providing high-quality,
            personalized dental care for patients of all ages. Our skilled team
            uses the latest technology to ensure comfortable, efficient
            treatments and beautiful, healthy smiles for life.
          </p>
          <div className="flex gap-4 text-xl text-gray-400">
            <a
              href="https://instagram.com/fix_dentalcare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@fixdentalcare_ug"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-blue-400 transition-colors"
            >
              <AiFillTikTok />
            </a>
            <a
              href="https://wa.me/256700298499"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-blue-400 transition-colors"
            >
              <BsWhatsapp />
            </a>
            <a
              href="mailto:fixdentalc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="hover:text-blue-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Links + Services + Contact + Map */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {/* Visit Us */}
          <div>
            <h3 className="tracking-wide mb-4 text-white uppercase text-sm font-semibold">
              Visit Us
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-blue-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="tracking-wide mb-4 text-white uppercase text-sm font-semibold">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/services/root-canal" className="hover:text-blue-400">
                  Root Canal
                </Link>
              </li>
              <li>
                <Link
                  to="/services/preventive-care"
                  className="hover:text-blue-400"
                >
                  Preventive Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services/implants-surgery"
                  className="hover:text-blue-400"
                >
                  Dental Implants & Surgery
                </Link>
              </li>
              <li>
                <Link to="/services/crowns" className="hover:text-blue-400">
                  Dental Crowns
                </Link>
              </li>
              <li>
                <Link to="/services/dentures" className="hover:text-blue-400">
                  Dentures
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  View more
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="tracking-wide mb-4 text-white uppercase text-sm font-semibold">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <FaLocationArrow className="mt-1 text-blue-400" />
                <span>
                  <strong>Clinic Location</strong>
                  <br />
                  Naalya heights along Naalya-Namugongo Road near Children's
                  clinic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-blue-400" />
                <span>
                  <strong>Call Us</strong>
                  <br />
                  <a href="tel:0700298499" className="hover:text-white">
                    0700298499
                  </a>{" "}
                  |{" "}
                  <a href="tel:0782569390" className="hover:text-white">
                    0782569390
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BsWhatsapp className="mt-1 text-blue-400" />
                <span>
                  <strong>Text us on</strong>
                  <br />
                  <a
                    href="https://wa.me/256700298499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    0700298499
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-blue-400" />
                <span>
                  <strong>Send a Message</strong>
                  <br />
                  <a
                    href="mailto:fixdentalc@gmail.com"
                    className="hover:text-white"
                  >
                    fixdentalc@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="tracking-wide mb-4 text-white uppercase text-sm font-semibold">
              Find Us
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
              width="100%"
              height="140"
              style={{ border: 0, borderRadius: "6px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400 max-w-7xl mx-auto">
        <p>© Copyright 2025 - Fix Dental Care</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
