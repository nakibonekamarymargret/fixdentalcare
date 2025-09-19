import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";

// Function to shuffle an array (re-used from your Home.jsx)
function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const ContactGrid = () => {
  // 1. Move cardData to state
  const initialCardData = [
    {
      title: "Call Us",
      icon: <IoCall className="text-3xl text-white" />,
      content: (
        <>
          0700298499 | 0782569390 <br /> 0772359837 | 0764043489
        </>
      ),
      cardBg: "bg-blue-900",
    },
    {
      title: "Opening Hours",
      icon: "⏰",
      content: "Mon-Sat: 8:00 AM - 10:00 PM\nSun: 9:00 AM - 7:00 PM",
      cardBg: "bg-emerald-700",
    },
    {
      title: "Send a Message",
      icon: <MdEmail className="text-3xl text-white" />,
      content: (
        <a
          href="mailto:fixdentalc@gmail.com"
          className="underline font-normal text-white"
        >
          fixdentalc@gmail.com
        </a>
      ),
      cardBg: "bg-cyan-700",
    },
    {
      title: "WhatsApp",
      icon: <BsWhatsapp className="text-3xl text-white" />,
      content: "0700298499",
      cardBg: "bg-teal-700",
    },
  ];

  const [cardData, setCardData] = useState(initialCardData);

  // 2. Add a useEffect hook to shuffle the array periodically
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCardData(shuffleArray([...cardData]));
    }, 5000); // Shuffles every 5 seconds
    return () => clearTimeout(timeout);
  }, [cardData]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: -40, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ y: -50, scale: 1.02 }}
      className="relative w-full"
    >
      <div className="container mx-auto px-6 md:px-20">
        {/* 3. Apply layout prop to the grid container */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cardData.map((card, index) => (
            <motion.div
              // Use the item's title as a unique, stable key for the transition
              key={card.title}
              layout // Apply layout to the card itself
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`p-6 rounded-xl shadow-xl border border-white/20 text-white ${card.cardBg}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-black">
                    {card.title}
                  </h4>
                  <p className="text-sm whitespace-pre-line text-white">
                    {card.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactGrid;
