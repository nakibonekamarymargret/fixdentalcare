import { motion } from "framer-motion";
import { IoCall } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactGrid = () => {
  const items = [
    {
      id: 1,
      icon: <IoCall className="text-4xl text-white" />,
      title: "Call Us",
      content: (
        <>
          0700298499 | 0782569390 <br /> 0772359837 | 0764043489
        </>
      ),
      bg: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      id: 2,
      icon: <FaRegClock className="text-3xl text-white" />,
      title: "Opening Hours",
      content: (
        <>
          Mon - Sat: 8:00 AM - 10:00 PM <br /> Sun: 9:00 AM - 7:00 PM
        </>
      ),
      bg: "bg-gradient-to-r from-green-500 to-green-700",
    },
    {
      id: 3,
      icon: <BsWhatsapp className="text-3xl text-white" />,
      title: "WhatsApp",
      content: "0700298499",
      bg: "bg-gradient-to-r from-emerald-500 to-emerald-700",
    },
    {
      id: 4,
      icon: <MdEmail className="text-3xl text-white" />,
      title: "Send a Message",
      content: (
        <a href="mailto:fixdentalc@gmail.com">fixdentalc@gmail.com</a>
      ),
      bg: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="bg-[var(--color-primary)] py-16">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 1, duration: 0.8 }}
              className={`${item.bg} rounded-2xl p-6 shadow-lg flex items-start gap-4 text-white`}
            >
              {item.icon}
              <div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-base leading-snug mt-2">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactGrid;
