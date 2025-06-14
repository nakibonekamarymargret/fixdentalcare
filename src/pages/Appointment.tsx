import React, { useState } from "react";

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
 const handleSubmit = (e: { preventDefault: () => void; }) => {
   e.preventDefault(); // prevent page refresh
   setIsSubmitted(true); // show the thank you message

   // Hide the message after 10 minutes (600000 milliseconds)
   setTimeout(() => {
     setIsSubmitted(false);
   }, 600000); // 10 minutes
 };


  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-200 py-16 px-6 md:px-20">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 leading-snug text-center">
          Book Appointment
        </h1>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2 px-6 md:px-20">
            <li>
              <div className="flex items-center">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path d="M10 17v1a1 1 0 001 1h6a1 1 0 001-1v-1" />
                  <path d="M17 10l-6 6m0-6L4 4m6 6H1v-6h6z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Book Appointment
                </a>
              </div>
            </li>
          </ol>
        </nav>{" "}
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Book Appointment</h2>
            <p className="">
              Book your appointment today for expert dental care tailored to
              your needs. Healthy, beautiful smiles start with a simple step,
              schedule now!{" "}
            </p>
            <form>
              <div className="mb-4 pt-2">
                <select
                  name="service"
                  id="service"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select service</option>

                  <option value="">Teeth Whitening</option>
                  <option value="">Oral Surgery</option>
                  <option value="">Teeth extraction</option>
                </select>
              </div>
              <div className="grid grid-cols-12 gap-3">
                {/* Date Field - Half width */}
                <div className="col-span-6">
                  <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>

                {/* Time Field - Half width */}
                <div className="col-span-6">
                  <div className="mb-4">
                    <label htmlFor="time" className="block text-gray-700">
                      Time
                    </label>
                    <input
                      type="time"
                      name=""
                      id="time"
                      className="w-full  p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4">
                  {" "}
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                      Names
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="mail"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  className="w-full p-2 border rounded resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Submit Appointment
              </button>
            </form>
          </div>

          {/* Image & Opening Hours Section */}
          <div>
            <div className="flex flex-col justify-between h-full">
              {/* Image */}
              <img
                src="/bg1.jpg"
                alt="Dentist examining patient"
                className="w-full h-[300px] object-cover mb-4 rounded-lg shadow-md"
              />

              {/* Opening Hours */}
              <div className="bg-green-100 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg font-medium">Opening Hours</span>
                </div>
                <p className="text-gray-600">Mon to Sat: 08:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSubmitted && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown transition-all duration-300 ease-out">
          <div className="bg-white border border-yellow-400 shadow-xl rounded-lg px-6 py-4 w-[90vw] max-w-md relative">
            {/* Close icon */}
            <button
              onClick={() => setIsSubmitted(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Content */}
            <h3 className="text-xl font-semibold text-yellow-700 mb-1">
              Thank You!
            </h3>
            <p className="text-gray-700 mb-4">
              Your appointment request has been received and is being processed.
            </p>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              onClick={() => setIsSubmitted(false)}
            >
              Re-book Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
