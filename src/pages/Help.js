// components/HelpPage.js
import React from "react";

const faqs = [
  {
    question: "How do I create an account?",
    answer: "Creating an account is easy! Just follow these steps...",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, PayPal, and other secure payment methods...",
  },
  {
    question: "Can I change my subscription plan?",
    answer: "Yes, you can change your subscription plan at any time...",
  },
  // Add more FAQs
];

const HelpPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        [...Array(6)].map((item, index)=>(
          <div key={index} className="h-[300px] w-full shadow-sm border rounded bg-gray-300 flex items-center justify-center">{index + 1}</div>
        ))
      }
    </div>
  );
};

export default HelpPage;
