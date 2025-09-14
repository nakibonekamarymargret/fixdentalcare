import { TiTick } from "react-icons/ti";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { defaultSpring, fadeInUp } from "../lib/annimations";
import TypewriterText from "../lib/TypewriterText";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
  

const About = () => {
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
  // Reorder team members
    const initialTeamOrder = [0, 1, 2, 3];
    const [teamOrder, setTeamOrder] = useState(initialTeamOrder);
  
    useEffect(() => {
      const timeout = setTimeout(
        () => setTeamOrder(shuffleArray([...teamOrder])),
        4000
      ); // every 4s
      return () => clearTimeout(timeout);
    }, [teamOrder]);
  
    function shuffleArray<T>(array: T[]): T[] {
      return array.sort(() => Math.random() - 0.5);
    }
  // sevice images 
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
  ); // every 3 seconds for image reorder
  return () => clearTimeout(timeout);
}, [imageOrder]);

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <hr className="border-t border-black/60 w-full mx-auto mt-2" />
          <nav className="text-sm text-gray-500 mb-4 mt-4">
            <ol className="inline-flex items-center space-x-1">
              <li>
                <a href="/" className="hover:underline text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">›</span>
              </li>
              <li className="text-gray-700 font-medium">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
      <motion.div
        {...fadeInUp}
        layout
        className="bg-blue-50 py-16 px-6 md:px-20"
      >
        {" "}
        {/* Apply fadeInUp directly */}
        <div className="bg-white py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-[4rem] px-4 items-center">
            {/* Left side images */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top image scrolls down */}
              <motion.img
                src="/fixabout3.webp"
                alt="smilling person"
                className="rounded-2xl shadow-md w-full object-cover h-[300px] "
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Bottom image scrolls up */}
              <motion.img
                src="/fixabout1.webp"
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
              <h2 className=" mb-2">About Us</h2>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 leading-snug ">
                Professionals and Personalized Dental Excellence
              </h3>
              <p className="text-gray-600 mb-6">
                We offer high-quality dental care tailored for the whole family.
                From routine checkups to advanced treatments, our compassionate
                team ensures your smile stays healthy and confident.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Personalized Treatment Plans",
                  "Gentle Care for Kids and Adults",
                  "Flexible Appointment Scheduling",
                  "State-of-the-Art Technology",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <TiTick className="text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="hover:bg-[var(--color-primary)]  text-white px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
              ></Button>
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
            <h3 className="text-2xl font-semibold">
              <TypewriterText text=" Meet Our Dental Team" />
            </h3>
            <p className="text-gray-600 text-lg font-bold">
              <TypewriterText text=" Committed to Your Smile" />
            </p>
            <p className="text-gray-700 text-lg mt-2">
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

      {/* Why Choose Us Section */}
      <motion.div {...fadeInUp}>
        {" "}
        {/* Apply fadeInUp to this section */}
        <div className="bg-white py-12 mt-5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 items-center">
            {/* Text */}
            <div>
              <h2 className="  mb-5">
                <TypewriterText text="Why Choose Fix Dental Care" />
              </h2>
              <div className="px-4">
                <p className="text-gray-600  mt-4">
                  At Fix Dental Care, we prioritize your comfort and health. Our
                  experienced team provides personalized care using the latest
                  technology to ensure you receive the best treatment possible.
                </p>
                <h3 className="text-2xl font-bold mt-4 mb-2 text-gray-800 leading-snug ">
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
                  <h5 className="font-semibold text-gray-800">
                    Family-Friendly
                  </h5>
                  <p className="text-gray-600 text-sm">
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
                    index === 2 ? "row-span-2" : ""
                  }`}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  <motion.span
                    className="mt-2 text-center font-medium"
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
    </div>
  );
};

export default About;
