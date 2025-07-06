import React from "react";
import FaqSection from "../components/FaqSection";

const Faq = () => {
  return (
    <div>
      {/* Hero Section with Title and Breadcrumb */}
      <div className="bg-blue-200 py-16 px-6 md:px-20">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 leading-snug text-center">
          FAQ
        </h1>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex justify-center">
          <ol
            role="list"
            className="flex items-center space-x-2 text-sm text-gray-700"
          >
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <span className="mx-2">›</span>
            </li>
            <li className="text-gray-900">FAQ</li>
          </ol>
        </nav>
      </div>
    
      {/* FAQ Content Section */}
      <div className="container mx-auto px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="mb-6 text-gray-600">
              Here are some common questions we receive from our patients.
            </p>
            <FaqSection />
          </div>
          {/* You can add an image or another block in the second column if needed */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
