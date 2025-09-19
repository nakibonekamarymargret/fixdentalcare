"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define your FAQ data
const faqs = [
  {
    id: "item-1",
    question: "Why should I choose Fix Dental Care?",
    answer:
      "At Fix Dental Care, we prioritize your comfort and health. Our team provides personalized care using the latest technology to ensure you receive the best treatment.",
  },
  {
    id: "item-2",
    question: "What types of services do you offer?",
    answer:
      "We offer a wide range of services, including routine checkups, teeth whitening, root canal therapy, braces, and dental implants.",
  },
  {
    id: "item-3",
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we work with most major dental insurance providers. Please contact our office with your insurance details to verify coverage.",
  },
];

export default function FaqSection() {
  // Set the initial state to the value of the first FAQ item.
  // This will make the first accordion open by default.
  const [openItem, setOpenItem] = useState("item-1");

  return (
    <Accordion
      type="single"
      collapsible // This prop allows the accordion to be closed.
      value={openItem}
      onValueChange={setOpenItem} // This function updates the state when a user clicks.
    >
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
