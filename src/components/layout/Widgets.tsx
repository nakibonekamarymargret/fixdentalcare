import React from "react";
import {
  FaInstagram,
  // FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

const Widgets = () => {
  return (
    <div className="fixed top-1/5 right-4 z-50 flex flex-col gap-4 p-3 ">
      {/* Call */}

      <a
        href="tel:+256700298499"
        className="widget bg-green-600"
        title="Call Us"
      >
        <FaPhoneAlt />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/256700298499"
        target="_blank"
        rel="noopener noreferrer"
        className="widget bg-[#25D366]"
        title="WhatsApp"
      >
        <BsWhatsapp />
      </a>

      {/* Email */}
      <a
        href="mailto:fixdentalc@gmail.com"
        className="widget bg-orange-500"
        title="Send Email"
      >
        <FaEnvelope />
      </a>

      {/* Location (Google Maps) */}
      <a
  href="https://www.google.com/maps/dir/?api=1&destination=Fix+Dental+Care,+Buganda+Road,+Kampala,+Uganda"
  target="_blank"
  rel="noopener noreferrer"
  className="widget bg-red-500"
  title="Find us on Maps"
>
  <IoLocation className="text-2xl text-white" />
</a>
      {/* Instagram */}
      <a
        href="https://instagram.com/fix_dentalcare"
        target="_blank"
        rel="noopener noreferrer"
        className="widget bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
        title="Instagram"
      >
        <FaInstagram />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/fixdentalcare_ug"
        target="_blank"
        rel="noopener noreferrer"
        className="widget bg-black"
        title="TikTok"
      >
        <AiFillTikTok />
      </a>
    </div>
  );
};

export default Widgets;
