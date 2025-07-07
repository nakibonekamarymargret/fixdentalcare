import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AnimatePresence, motion, type Transition } from "motion/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FaqSection from "@/components/FaqSection";
import { Button } from "../components/ui/button";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from "react";


export default function Home() {
const heroSlides = [
  {
    image: "/bg1.jpg",
    title: "Welcome to Fix Dental Care",
    subtitle: "Where beautiful smiles begin",
    enterFrom: "top",
  },
  {
    image: "/slider1.png",
    title: "Crystal teeth, Confident Smile",
    subtitle: "Breathe easy, smile freely",
    enterFrom: "bottom",
  },
  
  {
    image: "/rootcanal.jpeg",
    title: "Say Goodbye to Infections",
    subtitle: "Gentle, expert care for a healthy mouth",
    enterFrom: "left",
  },
  {
    image: "/bg2.jpg",
    title: "Smile confatably in any place at any time",
    subtitle: "Advanced treatment, soothing relief",
    enterFrom: "right",
  },
];
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, 6000); // every 6 seconds
  return () => clearInterval(interval);
}, []);
const getDirectionVariant = (direction: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const variants: any = {
    top: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    bottom: {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    left: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    right: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  };
  return variants[direction] || variants.top;
};
  
  // Transition on services ie reordering transition
 const initialOrder = [0, 1, 2, 3]; 
 const [order, setOrder] = useState(initialOrder);

 useEffect(() => {
   const timeout = setTimeout(() => setOrder(shuffle([...order])), 4000); // every 4s
   return () => clearTimeout(timeout);
 }, [order]);

 function shuffle(array: number[]) {
   return array.sort(() => Math.random() - 0.5);
 }
const spring: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const services = [
  {
    image: "/rootcanal.jpeg",
    title: "Root Canal",
    description: "Save your natural teeth with expert root canal treatment.",
    details: "Eliminate infection and relieve pain while preserving the tooth.",
  },
  {
    image: "/teethcleaning.jpeg",
    title: "Teeth Cleaning",
    description: "Maintain a bright, healthy smile with our cleaning service.",
    details: "Removes plaque and tartar for a healthier mouth.",
  },
  {
    image: "/teethwhitening.jpeg",
    title: "Teeth Whitening",
    description: " Bleach your teeth to make them lighter and brilliant white.",
    details:
      "Enhance your smile's appearance, and look younger.",
  },
  {
    image: "/braces.jpg",
    title: "Braces",
    description:
      "Straighten your teeth and improve your bite with custom-fit braces.",
    details:
      "Straighten your teeth and correct bite problems",
  },
];
  const TeamMembers = [
    {
      image: "/DrROse.jpeg",
      name: "Dr Rose",
      title: "Dentist",
    },
    {
      image: "/Mary.jpeg",
      name: "Mary",
      title: "Dental Assistant",
    },
    {
      image: "/NimrodWetaka.jpeg",
      name: "Dr Nimrod Wetaka",
      title: "Dentist",
    },

    {
      image: "/Sarah.jpeg",
      name: "Sarah",
      title: "Dentist Assistant",
    },
  ];
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative z-10 text-white px-6 w-full min-h-[700px] md:min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={heroSlides[currentIndex].image}
            initial={{
              ...getDirectionVariant(heroSlides[currentIndex].enterFrom)
                .initial,
            }}
            animate={{
              ...getDirectionVariant(heroSlides[currentIndex].enterFrom)
                .animate,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroSlides[currentIndex].image})`,
              backgroundBlendMode: "multiply",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2e2976]/90 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Text Content */}
        <div className="relative z-10 text-white px-6 md:px-12 max-w-4xl flex flex-col h-full justify-center">
          <motion.h1
            key={heroSlides[currentIndex].title}
            initial={{
              ...getDirectionVariant(heroSlides[currentIndex].enterFrom)
                .initial,
              opacity: 0,
            }}
            animate={{
              ...getDirectionVariant(heroSlides[currentIndex].enterFrom)
                .animate,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }} //
            className="text-4xl text-white sm:text-5xl md:text-6xl font-extrabold font-serif leading-tight mb-4"
          >
            {heroSlides[currentIndex].title}
          </motion.h1>

          <motion.p
            key={heroSlides[currentIndex].subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }} // ⬅️ subtitle appears after title
            className="text-lg/7 font-semibold tracking-wide text-black font-serif md:text-xl mb-6"
          >
            {heroSlides[currentIndex].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, rotate: -10 }}
          >
            <Link
              to="/book-appointment"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 ease-in-out text-lg w-fit"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Section 1 */}
            <div className="flex items-center gap-2">
              <IoCall className="text-xl" />
              <span>Need a dental service</span>
            </div>

            {/* Section 2 */}
            <div className="flex items-center gap-2 border-l border-white pl-4">
              <FaRegClock className="text-xl" />
              <span>Opening Hours</span>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 border-l border-white pl-4">
              <CiMail className="text-xl" />
              <div>
                <h4 className="text-2xl font-bold text-white">Email us</h4>
                <span className="text-lg">fixdentalcare@gmail.com</span>
              </div>
            </div>

            {/* Add more sections here if needed */}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="bg-white py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-[4rem] px-4 items-center">
            {/* Left side images */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top image scrolls down */}
              <motion.img
                src="/bg1.jpg"
                alt="Dentist treating patient"
                className="rounded-2xl shadow-md w-full object-cover h-[300px]"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              {/* Bottom image scrolls up */}
              <motion.img
                src="/bg2.jpg"
                alt="Happy patient with dentist"
                className="rounded-2xl shadow-md w-full object-cover h-[300px] mt-[3em]"
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
              <p className="text-blue-600 font-medium mb-2">About Us</p>
              <h2 className="text-4xl font-bold mb-4 text-gray-800 leading-snug ">
                Professionals and Personalized Dental Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                We offer high-quality dental care tailored for the whole family.
                From routine checkups to advanced treatments, our compassionate
                team ensures your smile stays healthy and confident.
              </p>
              <Link
                to="/about"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* services */}
      <div className="bg-blue-100 py-12">
        <div className="max-w-7xl mx-auto text-center px-4 mb-8">
          <h2 className="text-2xl font-semibold">Our Popular Services</h2>

          <h4 className="text-gray-600 text-lg mt-3">
            {" "}
            Complete Care for Every Smile{" "}
          </h4>
          <p className="text-gray-700 font-meduim text-lg mt-2">
            Our services are top notch. From routine cleanings to advanced
            restorations , <br /> we provide personalized dental solutions for
            patients of all ages.
          </p>
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4"
        >
          {order.map((index) => {
            const service = services[index]; // we'll define `services` below
            return (
              <motion.div key={index} layout transition={spring}>
                <Card>
                  <CardHeader className="flex flex-col items-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-20 h-20 object-cover rounded-full mb-4"
                    />
                    <CardTitle className="text-lg font-semibold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500 text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>{service.details}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <button className="text-blue-600 hover:text-blue-800">
                      <CiCirclePlus className="w-5 h-5" />
                    </button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Full-Width Rectangle Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Statistic Card 1 */}
            <div className="bg-white text-blue-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-2">10000+</h2>
              <p className="text-lg">Happy Patients</p>
            </div>

            {/* Statistic Card 2 */}
            <div className="bg-white text-blue-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-2">2500+</h2>
              <p className="text-lg">Teeth Whitened</p>
            </div>

            {/* Statistic Card 3 */}
            <div className="bg-white text-blue-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-2">800+</h2>
              <p className="text-lg">Dental Implants</p>
            </div>

            {/* Statistic Card 4 */}
            <div className="bg-white text-blue-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold mb-2">15+</h2>
              <p className="text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 items-center">
          {/* Text */}
          <div>
            <h4 className="text-blue-600 text-center uppercase mb-2">
              Why Choose Our Dental Care
            </h4>
            <h3 className="text-4xl font-semibold mb-4">
              Exceptional Service With a <br /> Personal Touch
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Choosing the right dental provider matters. We combine expert
              care, advanced technology, and a warm atmosphere to ensure every
              visit is comfortable and tailored to your unique needs.
            </p>
            <hr className="border-t border-black w-full" />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <h5 className="font-semibold text-gray-800">
                  Experienced Dental
                </h5>
                <p className="text-gray-600 text-sm">
                  Skilled care backed by years of trusted dental experience.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">
                  Advanced Technology
                </h5>
                <p className="text-gray-600 text-sm">
                  Modern tools ensure accurate and efficient treatments.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">
                  Personalized Treatment
                </h5>
                <p className="text-gray-600 text-sm">
                  Custom care plans made to fit your smile and lifestyle.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Family-Friendly</h5>
                <p className="text-gray-600 text-sm">
                  Welcoming space for kids, teens, adults, and seniors.
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left column (2 rows): bg1.jpg on top and bottom */}
            <div className="flex flex-col gap-4">
              <img
                src="/bg1.jpg"
                alt="Dental Clinic"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="/bg1.jpg"
                alt="Dental Clinic"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Right column (single tall image) */}
            <img
              src="/bg2.jpg"
              alt="Dental Clinic"
              className="w-full h-full object-cover rounded-lg shadow-md row-span-2"
            />
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="bg-blue-100 py-12">
        <div className="max-w-7xl mx-auto text-center px-4 mb-8">
          <h3 className="text-2xl font-semibold">Meet Our Dental Team</h3>
          <h4 className="text-gray-600 text-lg">Committed to Your Smile</h4>
          <p className="text-gray-700 text-lg mt-2">
            Our experienced dental team is here to make every visit positive and
            personalized. <br /> With gentle hands and caring hearts, <br /> we
            create a welcoming environment for all.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {TeamMembers.map((member, index) => (
            <div key={index} className="hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-100 h-90 object-cover rounded-full mb-4"
                />
                <div className="text-lg font-semibold">{member.name}</div>
                <div className="italic text-gray-700 font-semibold">
                  {member.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* FAQ Section */}
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side images */}
          <div className="space-y-4">
            <p className="text-blue-600 font-medium mb-2">
              Everything You Need to Know
            </p>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 leading-snug">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Right side FAQ content */}
          <div>
            <FaqSection />
          </div>
        </div>
      </div>
      {/* Testimonials */}

      <div className=" bg-blue-50 py-16 px-6 md:px-20">
        <div className="text-center px-4 mb-8 max-2-7xl mx-auto">
          <h4 className=" text-2xl font-semibold text-blue-600 mb-2 ">
            Testimonials
          </h4>
          <h5 className="text-gray-600 text-lg">Our Happy Customers</h5>
          <p className="text-gray-700 text-lg mt-2">
            Join thousands of happy patients who trust us for gentle, expert
            care and beautiful smiles. <br /> Your perfect dental experience
            starts here!
          </p>
        </div>

        <div className="services">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-white text-3xl mb-4 md:mb-0">
              Ready to book your dental care session?
            </h2>
            <Button
              variant="ghost"
              className="text-white text-lg p-4 border border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-800 transition-colors"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
