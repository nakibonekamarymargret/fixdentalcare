import {
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-white py-12 px-4 md:px-20">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Brand Section */}
        <div className="md:w-1/4">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-4xl text-blue-400">🦷</div>
            <h2 className="text-2xl font-bold">Fix Dental Care</h2>
          </div>
          <p className="text-gray-300 mb-4">
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
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/fixdentalcare_ug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok />
            </a>
            <a
              href="https://wa.me/256700298499"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp />
            </a>
            <a
              href="mailto:fixdentalc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="md:w-1/4 md:pl-[80px]">
          <h3 className="font-semibold mb-4">Visit Our</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Our Services</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-4 pr-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Root Canal</li>
            <li>Teeth Whitening</li>
            <li>Pediatric Dentistry</li>
            <li>Crowns and Bridges</li>
            <li>Braces</li>
            <li>Implants</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-2">
              <FaLocationArrow className="mt-1 text-blue-400" />
              <div>
                <strong>Clinic Location</strong>
                <br />
                Naalya heights along Naalya-Namugongo Road near Children's
                clinic
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-blue-400" />
              <div>
                <strong>Call Us</strong>
                <br />
                0700298499 | 0782569390 | 0772359837 | 0764043489
              </div>
            </li>
            <li className="flex items-start gap-2">
              <BsWhatsapp className="mt-1 text-blue-400" />
              <div>
                <strong>Text us on</strong>
                <br />
                0700298499
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-blue-400" />
              <div>
                <strong>Send a Message</strong>
                <br />
                fixdentalc@gmail.com
              </div>
            </li>
          </ul>
        </div>

        <div>
        

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.7167208664754!2d32.64266298705322!3d0.3730159514832152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x20ad6352f96cab47%3A0xba38a5a2e3624f64!2sFix%20Dental%20Care!5e0!3m2!1sen!2sug!4v1755195734078!5m2!1sen!2sug"
            width="300"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© Copyright 2025 - Fix Dental Care by Designesia</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
