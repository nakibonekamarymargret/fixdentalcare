import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactGrid = () => {
  const cardData = [
    {
      title: "Call Us",
      icon: <IoCall className="text-3xl text-white" />,
      content: (
        <>
          0700298499 | 0782569390 <br /> 0772359837 | 0764043489
        </>
      ),
      color: "from-blue-500/20 to-blue-800/30",
    },
    {
      title: "Opening Hours",
      icon: "⏰",
      content: "Mon-Sat: 8:00 AM - 10:00 PM\nSun: 9:00 AM - 7:00 PM",
      color: "from-emerald-400/20 to-emerald-700/30",
    },
    {
      title: "Send a Message",
      icon: <MdEmail className="text-3xl text-white" />,
      content: (
        <a href="mailto:fixdentalc@gmail.com" className="underline text-white">
          fixdentalc@gmail.com
        </a>
      ),
      color: "from-cyan-400/20 to-cyan-700/30",
    },
    {
      title: "WhatsApp",
      icon: <BsWhatsapp className="text-3xl text-white" />,
      content: "0700298499",
      color: "from-teal-400/20 to-teal-700/30",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: -40, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ y: -50, scale: 1.02 }}
      className="relative w-full"
    >
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`p-6 rounded-xl shadow-xl 
                          backdrop-blur-md bg-gradient-to-br ${card.color} 
                          border border-white/20 text-white`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-black">{card.title}</h4>
                  <p className=" whitespace-pre-line text-white">{card.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactGrid;
