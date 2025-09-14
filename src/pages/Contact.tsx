import { IoTimeOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "../components/ui/button";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
 
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <hr className="border-t border-black/60 w-full mx-auto mt-2" />
          <nav className="text-sm text-gray-500 mb-4 mt-4">
            <ol className="inline-flex items-center space-x-1">
              <li>
                <a href="/" className="hover:underline text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">›</span>
              </li>
              <li className="text-gray-700 font-medium">Contact Us</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column - Info */}
        <div>
          <h4 className="text-blue-600 uppercase mb-2 text-center md:text-left">
            Get In Touch
          </h4>
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Exceptional Service With a <br /> Personal Touch
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Whether you have a question, suggestion, or just want to say hello,
            please fill out the form and we'll respond as soon as possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* We're Open */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-blue-600 p-3 rounded-full text-white">
                <IoTimeOutline className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  We're Open
                </h4>
                <p className="text-sm text-gray-600">
                  Mon - Sat: 8:00 AM - 10:00 PM <br />
                  Sun: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            {/* Clinic Location */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-blue-600 p-3 rounded-full text-white">
                <IoLocationSharp className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Clinic Location
                </h4>
                <p className="text-sm text-gray-600">
                  Naalya heights along Naalya-Namugongo Road near Children's
                  clinic
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-blue-600 p-3 rounded-full text-white">
                <IoMdCall className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Call Us</h4>
                <p className="text-sm text-gray-600">
                  0772359837 | 0782569390 | 0764043489
                </p>
              </div>
            </div>

            {/* Text Us on WhatsApp */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-blue-600 p-3 rounded-full text-white">
                <BsWhatsapp className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Text Us on WhatsApp
                </h4>
                <p className="text-sm text-gray-600">0700298499</p>
              </div>
            </div>

            {/* Send a Message (Email) */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-blue-600 p-3 rounded-full text-white">
                <CiMail className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Send a Message
                </h4>
                <a
                  href="mailto:fixdentalc@gmail.com"
                  className="text-sm text-gray-600 hover:text-blue-600 underline"
                >
                  fixdentalc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h4>
          <form >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 mb-1 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name" // Use name attribute for EmailJS
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-1 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email" // Use name attribute for EmailJS
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 mb-1 font-medium"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="user_phone" // Use name attribute for EmailJS
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 mb-1 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full py-3 rounded transition duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Render the modal */}
    </div>
  );
};

export default Contact;
