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
  {
    id: "item-4",
    question: "How often should I visit the dentist?",
    answer:
      "It’s recommended to visit the dentist every six months for regular checkups and cleanings to maintain optimal oral health.",
  },
  {
    id: "item-5",
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional teeth whitening performed at Fix Dental Care is safe and effective. Our dentists use approved methods that protect your teeth and gums.",
  },
  {
    id: "item-6",
    question: "Do you treat children?",
    answer:
      "Absolutely! We provide gentle and friendly dental care for children of all ages, helping them feel comfortable during their visits.",
  },
];

export default function FaqSection() {
  // Set the initial state to the value of the first FAQ item.
  const [openItem, setOpenItem] = useState("item-1");

  return (
    <Accordion
      type="single"
      collapsible
      value={openItem}
      onValueChange={setOpenItem}
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
