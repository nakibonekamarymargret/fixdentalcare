import { motion } from "framer-motion";

const ContactGrid = () => {
  const cardData = [
    {
      title: "Call Us",
      icon: "📞",
      content: "0700298499 | 0782569390",
      color: "bg-indigo-600",
    },
    {
      title: "Opening Hours",
      icon: "⏰",
      content: "Mon-Sat: 8:00 AM - 10:00 PM\nSun: 9:00 AM - 7:00 PM",
      color: "bg-green-600",
    },
    {
      title: "Send a Message",
      icon: "📧",
      content: "fixdentalc@gmail.com",
      color: "bg-pink-600",
    },
    {
      title: "WhatsApp",
      icon: "💬",
      content: "0700298499",
      color: "bg-purple-600",
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
              className={`p-6 rounded-xl shadow-xl ${card.color} text-white`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">{card.title}</h4>
                  <p className="text-sm whitespace-pre-line">{card.content}</p>
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
