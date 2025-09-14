// src/components/TestimonialCard.tsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import type { Testimonial } from "../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
      {/* Star Rating */}
      <div className="flex text-yellow-400 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="w-5 h-5" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-lg italic mb-6 flex-grow">
        "{testimonial.quote}"
      </p>

      {/* Client Info */}
      <div className="flex items-center mt-auto gap-3">
        {" "}
        {/* mt-auto pushes to bottom */}
        {testimonial.avatarSrc ? (
          <img
            src={testimonial.avatarSrc}
            alt={testimonial.clientName}
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
        ) : (
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 mb-4">
            <FaUserAlt className="text-gray-500 text-3xl" />
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-800">
            {testimonial.clientName}
          </p>
          <p className="text-sm text-gray-500">{testimonial.clientTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
