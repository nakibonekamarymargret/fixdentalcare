import { useState } from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaPlus } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

const Widgets = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-1/4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg hover:scale-110 transition-transform"
      >
        <FaPlus
          className={`transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>

      {/* Social Links (show only if open) */}
      {open && (
        <div className="flex flex-col gap-3 animate-fade-in-up">
          <a
            href="tel:+256700298499"
            className="widget bg-green-600"
            title="Call Us"
          >
            <FaPhoneAlt />
          </a>

          <a
            href="https://wa.me/256700298499"
            target="_blank"
            rel="noopener noreferrer"
            className="widget bg-[#25D366]"
            title="WhatsApp"
          >
            <BsWhatsapp />
          </a>

          <a
            href="mailto:fixdentalc@gmail.com"
            className="widget bg-orange-500"
            title="Send Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://maps.app.goo.gl/Cp6jydL3HoabYgNc9"
            target="_blank"
            rel="noopener noreferrer"
            className="widget bg-red-500"
            title="Find us on Maps"
          >
            <IoLocation className="text-2xl text-white" />
          </a>

          <a
            href="https://instagram.com/fix_dentalcare"
            target="_blank"
            rel="noopener noreferrer"
            className="widget bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
            title="Instagram"
          >
            <FaInstagram />
          </a>

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
      )}
    </div>
  );
};

export default Widgets;
