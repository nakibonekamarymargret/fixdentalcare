import React, { useState } from "react";

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 600000); // 10 minutes
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Book Appointment
          </h1>
          <p className="text-gray-600 mb-4">
            Schedule your dental visit in just a few clicks
          </p>
          <hr className="border-t border-black/60 w-1/2 mx-auto mb-4" />
          <nav className="text-sm text-gray-500">
            <ol className="inline-flex items-center space-x-1">
              <li>
                <a href="/" className="hover:underline text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">›</span>
              </li>
              <li className="text-gray-700 font-medium">Book Appointment</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Make Your Appointment Today
            </h2>
            <p className="text-gray-600 mb-6">
              Book your appointment today for expert dental care tailored to
              your needs. Healthy, beautiful smiles start here.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="service"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Select Service
                </label>
                <select
                  id="service"
                  className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                >
                  <option value="">Choose a service</option>
                  <option>Teeth Whitening</option>
                  <option>Oral Surgery</option>
                  <option>Teeth Extraction</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Any additional info..."
                  className="w-full p-2 border border-gray-300 rounded resize-none h-24 focus:ring focus:ring-blue-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition"
              >
                Submit Appointment
              </button>
            </form>
          </div>

          {/* Image & Opening Hours Section */}
          <div>
            <img
              src="/bg1.jpg"
              alt="Dentist examining patient"
              className="w-full h-[300px] object-cover mb-6 rounded-lg shadow-lg"
            />

            <div className="bg-green-100 p-5 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-700"
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
                <h4 className="text-lg font-semibold text-green-700">
                  Opening Hours
                </h4>
              </div>
              <p className="text-gray-600">
                Monday - Saturday: 08:00 AM - 08:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {isSubmitted && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-out">
          <div className="bg-white border border-yellow-400 shadow-xl rounded-lg px-6 py-6 w-[90vw] max-w-md relative">
            <button
              onClick={() => setIsSubmitted(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-700 mb-4">
              Your appointment has been received and is being processed.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
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
