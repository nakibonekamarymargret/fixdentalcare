import React from "react";
import {
  FaInstagram,

  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
  import { AiFillTikTok } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-white py-12 px-4 md:px-20">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
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
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Our Services</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>General Dentistry</li>
            <li>Cosmetic Dentistry</li>
            <li>Pediatric Dentistry</li>
            <li>Restorative Dentistry</li>
            <li>Preventive Dentistry</li>
            <li>Orthodontics</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-2">
              <FaLocationArrow className="mt-1 text-blue-400" />
              <div>
                <strong>Clinic Location</strong>
                <br />
                Ntinda
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-blue-400" />
              <div>
                <strong>Call Us</strong>
                <br />
                +1 123 456 789
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
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; Copyright 2025 - Fix Dental Care by Designesia</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
