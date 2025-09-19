import { CiMail } from "react-icons/ci";
import { Button } from "../components/ui/button";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill in Name, Email, and Message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b9530659-9dda-4e42-aaea-6d270a973319", // your Web3Forms key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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
            please fill out the form and we'll get back to you soon.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-[var(--color-primary)] p-3 rounded-full text-white">
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

            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-[var(--color-primary)] p-3 rounded-full text-white">
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

            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-[var(--color-primary)] p-3 rounded-full text-white">
                <IoMdCall className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Call Us</h4>
                <p className="text-sm text-gray-600">
                  0772359837 | 0782569390 | 0764043489
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-[var(--color-primary)] p-3 rounded-full text-white">
                <BsWhatsapp className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Text Us on WhatsApp
                </h4>
                <p className="text-sm text-gray-600">0700298499</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="bg-[var(--color-primary)] p-3 rounded-full text-white">
                <CiMail className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Email</h4>
                <p className="text-sm text-gray-600">fixdentalc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h4>
          <form onSubmit={handleSubmit}>
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number (Optional)"
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
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full py-3 rounded transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
