import React, { useState } from "react";


function FaqSection() {
   const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How often should I visit the dentist?",
      answer:
        "It’s recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise.",
    },
    {
      id: 2,
      question: "What should I do in a dental emergency?",
      answer:
        "In case of a dental emergency, contact our office immediately. If it's after hours, follow the instructions provided on our emergency care page.",
    },
    {
      id: 3,
      question: "Do you offer services for kids?",
      answer:
        "Yes, we provide comprehensive dental care for children, including preventive treatments, orthodontics, and pediatric dentistry.",
    },
    {
      id: 4,
      question: "What are my options for replacing missing teeth?",
      answer:
        "You have several options for replacing missing teeth, including dental implants, bridges, and dentures. We can help you choose the best option based on your needs.",
    },
  ];

  return (
    <div>
      {faqs.map((faq) => (
        <div key={faq.id} className="mb-4">
          <button
            type="button"
            className="flex justify-between w-full p-4 border-b border-gray-200 bg-white rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none"
            onClick={() => setActiveQuestion(faq.id)}
          >
            <span className="text-lg font-semibold">{faq.question}</span>
            <span className="text-xl">
              {activeQuestion === faq.id ? "▲" : "▼"}
            </span>
          </button>
          {activeQuestion === faq.id && (
            <div className="p-4 bg-gray-100 border-l-4 border-blue-500 rounded-lg">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    )
}

export default FaqSection
