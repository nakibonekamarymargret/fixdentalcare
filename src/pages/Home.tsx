import { Link } from "react-router-dom";
import FaqSection from "@/components/FaqSection";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  defaultSpring,
  fadeInUp,
  getDirectionVariant,
  StatCounter,
} from "@/lib/annimations";
import TypewriterText from "../lib/TypewriterText";
import { testimonials, type Testimonial } from "../data/testimonials";
import TestimonialCard from "../components/TestimonialCard";
import ContactGrid from "../components/layout/ContactGrid";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's 'md' breakpoint
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroSlides: {
    image: string;
    title: string;
    subtitle: string;
  }[] = [
    {
      image: "/fix2.webp",
      title: "Welcome to Fix Dental Care",
      subtitle: "Where beautiful smiles begin",
    },
    {
      image: "/bg1.jpg",
      title: "The only dental care you can trust",
      subtitle:
        "From routine checkups to advanced treatments, we’re here for you.”Excellence in Every Checkup",
    },
    {
      image: "/slider1.png",
      title: "Crystal teeth, Confident Smile",
      subtitle: "Breathe easy, smile freely",
    },
    {
      image: "/rootcanal.jpeg",
      title: "Say Goodbye to Infections",
      subtitle: "Gentle, expert care for a healthy mouth",
    },
    {
      image: "/bg2.jpg",
      title: "Smile comfortably in any place at any time",
      subtitle: "Advanced treatment, soothing relief",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const initialServiceOrder = [0, 1, 2, 3];
  const [serviceOrder, setServiceOrder] = useState(initialServiceOrder);

  useEffect(() => {
    const timeout = setTimeout(
      () => setServiceOrder(shuffleArray([...serviceOrder])),
      4000
    );
    return () => clearTimeout(timeout);
  }, [serviceOrder]);

  const initialTeamOrder = [0, 1, 2, 3];
  const [teamOrder, setTeamOrder] = useState(initialTeamOrder);

  useEffect(() => {
    const timeout = setTimeout(
      () => setTeamOrder(shuffleArray([...teamOrder])),
      4000
    );
    return () => clearTimeout(timeout);
  }, [teamOrder]);

  const initialImageOrder = [
    { src: "/crownfix.jpeg", alt: "Dental Crowns" },
    {
      src: "/teethwhitening.jpeg",
      alt: "Tooh Whitening (Cosmetic Dentistry) ",
    },
    { src: "/implant.jpeg", alt: "Implants and Surgery " },
    { src: "/rootcanal2.jpeg", alt: "Root Canal Treatment" },
  ];
  const [imageOrder, setImageOrder] = useState(initialImageOrder);

  useEffect(() => {
    const timeout = setTimeout(
      () => setImageOrder(shuffleArray([...imageOrder])),
      3000
    );
    return () => clearTimeout(timeout);
  }, [imageOrder]);

  function shuffleArray<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
  }

  const services = [
    {
      image: "/rootcanal.jpeg",
      title: "Root Canal",
      description: "Save your natural teeth with expert root canal treatment.",
      details:
        "Eliminate infection and relieve pain while preserving the tooth.",
    },
    {
      image: "/teethcleaning.jpeg",
      title: "Teeth Cleaning",
      description:
        "Maintain a bright, healthy smile with our cleaning service.",
      details: "Removes plaque and tartar for a healthier mouth.",
    },
    {
      image: "/teethwhitening.jpeg",
      title: "Teeth Whitening",
      description:
        " Bleach your teeth to make them lighter and brilliant white.",
      details: "Enhance your smile's appearance, and look younger.",
    },
    {
      image: "/braces.jpg",
      title: "Braces",
      description:
        "Straighten your teeth and improve your bite with custom-fit braces.",
      details: "Straighten your teeth and correct bite problems",
    },
  ];
  const TeamMembers = [
    {
      image: "/DrROse.jpeg",
      name: "Dr Rose",
      title: "Dental Surgeon",
    },
    {
      image: "/Mary.jpeg",
      name: "Mary",
      title: "Dental Assistant",
    },
    {
      image: "/NimrodWetaka.jpeg",
      name: "Dr Nimrod Wetaka",
      title: "Dental Surgeon",
    },

    {
      image: "/Sarah.jpeg",
      name: "Sarah",
      title: "Dentist Assistant",
    },
  ];
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden ">
      {" "}
      {/* Hero Section */}
      <div className="relative w-full min-h-[700px] md:min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={heroSlides[currentIndex].image}
            initial={
              isMobile
                ? { opacity: 0, y: 20 }
                : getDirectionVariant("right").initial
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={
              isMobile
                ? { opacity: 1, y: 0 }
                : getDirectionVariant("right").animate
            }
            exit={{ opacity: 0 }}
            // Change the transition here
            transition={{ duration: 1.5, delay: 0.5 }} // A shorter duration is much smoother
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
            style={{
              backgroundImage: `url(${heroSlides[currentIndex].image})`,
              backgroundBlendMode: "multiply",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#f0f0f0]/90  to-transparent "></div> */}
            <div className="absolute inset-0 z-10 bg-radial-[at_center] from-black/80 to-transparent"></div>
            {/* <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2e2976]/90 to-transparent"></div> */}
          </motion.div>
        </AnimatePresence>
        {/* Text Content */}
        <div className="relative z-10 text-white px-6 md:px-12 max-w-4xl flex flex-col h-full justify-center">
          <motion.h1
            key={heroSlides[currentIndex].title}
            initial={{ opacity: 0 }} // Start completely transparent
            animate={{ opacity: 1 }} // Fade to fully visible
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }} // Keep a smooth, short duration
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold   leading-tight mb-4 text-white"
          >
            {heroSlides[currentIndex].title}
          </motion.h1>

          <motion.p
            key={heroSlides[currentIndex].subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-gray-900 md:text-xl mb-6 font-semibold text-white"
          >
            {heroSlides[currentIndex].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, rotate: -10 }}
          ></motion.div>
          <Button
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)] text-white
      px-6 py-3 rounded-lg shadow-xl transition duration-300 ease-in-out font-bold text-lg w-fit"
          >
            <Link to="/appointment" className="text-white">
              Book Appointment
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full relative -mt-16 sm:-mt-24 lg:-mt-32 z-20">
        <ContactGrid />
      </div>
      {/* About Us Section */}
      <motion.div
        {...fadeInUp}
        layout
        className="bg-blue-50 py-16 md:py-24 px-6 md:px-20"
      >
        {" "}
        {/* Apply fadeInUp directly */}
        <div className="bg-white py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-[4rem] px-4 items-center">
            {/* Left side images */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top image scrolls down */}
              <motion.img
                src="/smile.jpeg"
                alt="smilling person"
                className="rounded-2xl shadow-md w-full object-cover aspect-square scale-x-[-1]"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              {/* Bottom image scrolls up */}
              <motion.img
                src="/teethcleaning2.jpeg"
                alt="Happy patient with dentist"
                className="rounded-2xl shadow-md w-full object-cover aspect-square  md:mt-[3em] "
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Right side text content slides in from the right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">
                About Us
              </h2>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 leading-snug ">
                Professionals and Personalized Dental Excellence
              </h3>
              <p className="text-gray-600 mb-6">
                We offer high-quality dental care tailored for the whole family.
                From routine checkups to advanced treatments, our compassionate
                team ensures your smile stays healthy and confident.
              </p>
              <Button
                asChild
                className="hover:bg-[var(--color-primary)]  text-white px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <Link to="/about-us">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Services Section */}
      <motion.div
        {...fadeInUp}
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4"
      >
        {serviceOrder.map((index) => {
          const service = services[index];
          return (
            <motion.div
              key={service.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger
            >
              {/* Card Content */}
            </motion.div>
          );
        })}
      </motion.div>
      {/* Full-Width Rectangle Section (Statistics) */}
      <motion.div
        {...fadeInUp}
        onViewportEnter={() => setIsStatsVisible(true)}
        className="bg-[var(--color-primary)]  text-white py-16"
      >
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Statistic Card 1 */}
            <div className="bg-white text-blue-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-2">
                <StatCounter end={1000} duration={3} start={isStatsVisible} />+
              </h2>
              <p className="text-lg">Happy Patients</p>
            </div>

            {/* Statistic Card 2 */}
            <div className="bg-white text-blue-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-2">
                <StatCounter end={250} duration={3} start={isStatsVisible} />+
              </h2>
              <p className="text-lg">Teeth Whitened</p>
            </div>

            {/* Statistic Card 3 */}
            <div className="bg-white text-blue-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-2">
                <StatCounter end={800} duration={3} start={isStatsVisible} />+
              </h2>
              <p className="text-lg">Dental Implants</p>
            </div>

            {/* Statistic Card 4 */}
            <div className="bg-white text-blue-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-2">
                <StatCounter end={10} duration={3} start={isStatsVisible} />+
              </h2>
              <p className="text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Why Choose Us Section */}
      <motion.div {...fadeInUp}>
        {" "}
        {/* Apply fadeInUp to this section */}
        <div className="bg-white py-12 mt-5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 items-center">
            {/* Text */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">
                <TypewriterText text="Why Choose Fix Dental Care" />
              </h2>
              <div className="px-4">
                <p className="sm:text-[15px]  text-gray-600  mb-4">
                  At Fix Dental Care, we prioritize your comfort and health. Our
                  experienced team provides personalized care using the latest
                  technology to ensure you receive the best treatment possible.
                </p>
                <h3 className="text-xl md:text-3xl lg:text-4xl mb-2">
                  Exceptional Service With a <br /> Personal Touch
                </h3>
                <p className="text-gray-700 text-normal mb-4">
                  Choosing the right dental provider matters. We combine expert
                  care, advanced technology, and a warm atmosphere to ensure
                  every visit is comfortable and tailored to your unique needs.
                </p>
              </div>

              <hr className="border-t border-black w-full" />
              <div className="grid grid-cols-2 gap-4 mt-4 px-4">
                <div>
                  <h5 className="font-semibold text-gray-800">
                    Experienced Dental Service
                  </h5>
                  <p className="text-gray-600 text-normal">
                    Skilled care backed by years of trusted dental experience.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">
                    Advanced Technology
                  </h5>
                  <p className="text-gray-600 text-normal">
                    Modern tools ensure accurate and efficient treatments.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">
                    Personalized Treatment
                  </h5>
                  <p className="text-gray-600 text-normal">
                    Custom care plans made to fit your smile and lifestyle.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">
                    Family-Friendly
                  </h5>
                  <p className="text-gray-600 text-normal">
                    Welcoming space for kids, teens, adults, and seniors.
                  </p>
                </div>
              </div>
            </div>

            {/* Images with reorder animation */}
            <motion.div layout className="grid grid-cols-2 gap-4">
              {imageOrder.map((image, index) => (
                <motion.div
                  key={image.src + index}
                  layout
                  transition={defaultSpring}
                  className={`flex flex-col items-center ${
                    index === 2 ? "md:row-span-2" : ""
                  }`}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover aspect-square rounded-lg shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  <motion.span
                    className="mt-2 text-center font-medium sm:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {image.alt}
                  </motion.span>
                </motion.div>
              ))}

              {/* Button inside the grid, spanning both columns */}
              <div className="col-span-2 flex justify-center mt-4">
                <Button>
                  <Link to="/services" className="text-white">
                    View All Services
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Team Section */}
      <motion.div {...fadeInUp}>
        {" "}
        {/* Apply fadeInUp to this section */}
        <div className="bg-blue-100 py-12">
          <div className="max-w-7xl mx-auto text-center px-4 mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-2 font-semibold">
              <TypewriterText text=" Meet Our Dental Team" />
            </h3>
            <p className="text-gray-600 text-lg font-bold">
              <TypewriterText text=" Committed to Your Smile" />
            </p>
            <p className="text-gray-700 text-lg md:text-xl mt-2">
              Our experienced dental team is here to make every visit positive
              and personalized. <br /> With gentle hands and caring hearts,{" "}
              <br /> we create a welcoming environment for all.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {teamOrder.map((index) => {
              const member = TeamMembers[index];
              return (
                <motion.div
                  key={member.name}
                  className="hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                >
                  <motion.div layout className="flex flex-col items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain object-center rounded-full mb-4"
                    />

                    <div className="text-lg font-semibold">{member.name}</div>
                    <div className="italic text-gray-700 font-semibold">
                      {member.title}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
      {/* Testimonials */}
      <motion.div {...fadeInUp}>
        <div className="bg-blue-50 py-16 px-6 md:px-20">
          {/* Header Section */}
          <div className="text-center px-4 mb-8 max-w-4xl mx-auto sm:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              What our happy clients are saying
            </h2>
            <p className="text-gray-700 text-xl mt-4">
              Join thousands of happy patients who trust us for gentle, expert
              care and beautiful smiles. Your perfect dental experience starts
              here!
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* You should map over your testimonial data here, showing a limited number of cards */}
              {testimonials.slice(0, 3).map((testimonial: Testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* "View All" Button */}
          <div className="flex justify-end max-w-7xl mx-auto mt-8 px-4">
            <Button className="hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors duration-200">
              <Link to="/testimonials" className="text-white">
                Read All Testimonials
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
      {/* FAQ Section */}
      <motion.div {...fadeInUp}>
        {" "}
        {/* Apply fadeInUp to this section */}
        <div className="bg-blue-100 py-16 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side images */}
            <div className="space-y-4">
              <p className="text-blue-900 mb-2">
                Everything You Need to Know
              </p>
              <h2 className="text-4xl font-bold mb-4 text-gray-800 leading-snug">
                <TypewriterText text="Frequently Asked Questions" />
              </h2>
            </div>

            {/* Right side FAQ content */}
            <div>
              <FaqSection />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
