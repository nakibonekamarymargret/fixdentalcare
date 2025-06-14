import { IoTimeOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

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
            <div>
              <h5 className="font-semibold text-gray-800">We're Open</h5>
              <p className="text-gray-600 text-sm">
                <IoTimeOutline className="inline mr-2" />
                Monday - Friday 08:00 - 18:00
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">Clinic Location</h5>
              <p className="text-gray-600 text-sm">
                <IoLocationSharp className="inline mr-2" />
                100 S Main St, New York, NY
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">Call Us</h5>
              <p className="text-gray-600 text-sm">
                <IoMdCall className="inline mr-2" />
                +1 123 456 789
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">Email Us</h5>
              <p className="text-gray-600 text-sm">
                <CiMail className="inline mr-2" />
                contact@dentiacare.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h4>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
