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
    <footer className="bg-[#0a1f44] text-gray-300 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20 pb-12">
          {/* Brand and Social Section (Left Side) */}
          <div className="flex-1 max-w-sm md:max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Fix Dental Care"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-none">
              At Fix Dental Care, we’re dedicated to providing high-quality,
              personalized dental care for patients of all ages. Our skilled
              team uses the latest technology to ensure comfortable, efficient
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

          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
            {/* Visit Us Links */}
            <div>
              <h3 className="tracking-wide mb-4 text-white uppercase text-sm md:text-base font-semibold">
                Visit Us
              </h3>
              <ul className="space-y-2 text-sm md:text-base ">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="tracking-wide mb-4 text-white uppercase text-sm md:text-base font-semibold">
                Our Services
              </h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link
                    to="/services/root-canal"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Root Canal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/preventive-care"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Preventive Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/implants-surgery"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Dental Implants & Surgery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/crowns"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Dental Crowns
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/dentures"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Dentures
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    View More
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="tracking-wide mb-4 text-white uppercase text-sm md:text-base font-semibold">
                Contact Us
              </h3>
              <ul className="space-y-3 text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <FaLocationArrow className="mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white text-[17px]">
                      Clinic Location
                    </strong>
                    <br />
                    <span className="text-gray-250 text-[16px]">
                      {" "}
                      Naalya heights along Naalya-Namugongo Road near Children's
                      clinic
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FaPhoneAlt className="mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white text-[17px]">Call Us</strong>
                    <br />
                    <a
                      href="tel:0700298499"
                      className="hover:text-white transition-colors font-mono text-[16px]"
                    >
                      0700298499
                    </a>{" "}
                    |{" "}
                    <a
                      href="tel:0782569390"
                      className="hover:text-white transition-colors font-mono text-[16px]"
                    >
                      0782569390
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BsWhatsapp className="mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white text-[17px]">
                      Text us on
                    </strong>
                    <br />
                    <a
                      href="https://wa.me/256700298499"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors font-mono text-[16px]"
                    >
                      0700298499
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FaEnvelope className="mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white  text-[17px]">
                      Send a Message
                    </strong>
                    <br />
                    <a
                      href="mailto:fixdentalc@gmail.com"
                      className="hover:text-white transition-colors  text-[16px] italic"
                    >
                      fixdentalc@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            {/* Your Map Section */}
            <div>
              <h3 className="tracking-wide mb-4 text-white uppercase text-sm md:text-base font-semibold">
                Find Us on Map
              </h3>
              {/* The parent container needs to handle the sizing */}
              <div className="w-full overflow-hidden">
               
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.733864850227!2d32.63976827466915!3d0.37279989962354465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x20ad6352f96cab47%3A0xba38a5a2e3624f64!2zRklYIERFTlRBTCBDQVJFIPCfh7rwn4es!5e0!3m2!1sen!2sug!4v1757886504036!5m2!1sen!2sug"
                  width="100%"
                  height="160"
                  style={{ border: 0, borderRadius: "6px" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p className="text-center md:text-left">
            © Copyright 2025 - Fix Dental Care
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
