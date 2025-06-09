// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaRegClock, FaRegEnvelope } from "react-icons/fa6"; // Import icons

export default function Home() {
  return (
    <div className="w-full">
      {/* ======================= Hero Section ======================= */}
      <div className="relative w-full min-h-[700px] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/dental-bg.jpg')", // Adjust path to your image
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Semi-transparent overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e2976]/90 to-transparent"></div>
        </div>

        {/* Content Section (Text, Button, Reviews) */}
        <div className="relative z-10 text-white p-6 md:p-12 max-w-4xl mx-auto text-left flex flex-col items-start justify-center h-full">
          <p className="text-lg md:text-xl font-semibold mb-2">
            Family Dental Care
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Elevating Smiles with Expert Care and a Gentle Touch
          </h1>

          <Link
            to="/book-appointment"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 ease-in-out text-lg mb-8"
          >
            Book Appointment
          </Link>

          {/* Google Rating Section - Re-added as it was present in your previous snippet */}
          <div className="flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg">
            <span className="font-semibold text-lg">Google Rating</span>
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="text-lg">5.0</span>
            <span className="text-gray-200">Based on 23k Reviews</span>
          </div>
        </div>
      </div>

      {/* ======================= Info Bar Section ======================= */}
      <div className="bg-[#2e2976] text-white py-8 px-6 md:px-12 flex flex-col md:flex-row justify-around items-center gap-8">
        {/* Dental Services */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-xs">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4 text-white text-3xl">
            <FaPhoneAlt />
          </div>
          <h3 className="text-xl font-semibold mb-2">Need Dental Services?</h3>
          <p className="text-lg">+1 123 456 789</p>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-xs">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4 text-white text-3xl">
            <FaRegClock />
          </div>
          <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
          <p className="text-lg">Mon to Sat 08:00 - 20:00</p>
        </div>

        {/* Email Us */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-xs">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4 text-white text-3xl">
            <FaRegEnvelope />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-lg">contact@fixdentalcare.com</p>
        </div>
      </div>

      {/* ======================= About Us Section ======================= */}
      <div className="bg-white py-12 md:py-20 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 max-w-6xl mx-auto">
        {/* Left Section: Images */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="relative">
            {/* Image 1 (Larger, more prominent) */}
            <img
              src="/images/dentist-smiling.jpg" // Path to your first image
              alt="Dentist smiling"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            {/* Optional: Add a smaller image floating over it */}
            <img
              src="/images/patient-smile.jpg" // Path to your second image
              alt="Patient smiling"
              className="absolute -bottom-8 -left-8 w-48 h-auto object-cover rounded-lg shadow-xl border-4 border-white transform rotate-3 hidden sm:block"
            />
          </div>
          {/* Image 2 (If you want another prominent one, or remove this if only 1 large + 1 small) */}
          {/* <div className="hidden md:block"> {/* Hide on smaller screens if you only want 1 large + 1 small */}
          {/* <img
              src="/images/second-dentist.jpg" // Path to another image
              alt="Another dentist"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div> */}
        </div>

        {/* Right Section: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left">
          <h3 className="text-blue-600 text-lg font-semibold uppercase mb-2">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-var(--color-white) leading-tight mb-6">
            Professionals and Personalized Dental Excellence
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            We offer high-quality dental care tailored for the whole family.
            From routine check-ups and cleanings to advanced cosmetic and
            restorative procedures, our dedicated team ensures your comfort and
            delivers exceptional results.
          </p>
          <ul className="text-gray-700 text-lg space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span> Compassionate
              and experienced team.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span> State-of-the-art
              technology.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span> Personalized
              treatment plans.
            </li>
          </ul>
          <Link
            to="/about"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
