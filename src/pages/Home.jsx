import React from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import FaqSection from "@/components/FaqSection"; // Ensure this path is correct
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[700px] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg2.jpg')", // Ensure this image exists in public/
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Optional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e2976]/90 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-white p-6 md:p-12 max-w-4xl mx-auto text-left flex flex-col items-start justify-center h-full">
          <p className="text-lg md:text-xl font-semibold mb-2">
            Fix Dental Care
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Elevating Smiles with Expert Care and a Gentle Touch
          </h1>
          <Link
            to="/book-appointment"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 ease-in-out text-lg mb-8"
          >
            Book Appointment
          </Link>

          {/* Contact Info Links */}
          <div className="mt-4 flex flex-col sm:flex-row gap-6 bg-violet-800 w-full p-4 rounded-lg shadow-md text-white">
            <div className="flex items-center gap-2">
              <IoCall className="text-xl" />
              <span>Need a dental service</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-xl" />
              <span>Opening Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CiMail className="text-xl" />
              <div className="flex flex-col leading-tight">
                <span>Email us</span>
                <span>fixdentalcare@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side images */}
          <div className="space-y-4">
            <img
              src="/bg1.jpg"
              alt="Dentist treating patient"
              className="rounded-2xl shadow-md w-full object-cover h-[300px]"
            />
            <img
              src="/bg2.jpg"
              alt="Happy patient with dentist"
              className="rounded-2xl shadow-md w-full object-cover h-[300px]"
            />
          </div>

          {/* Right side text content */}
          <div>
            <p className="text-blue-600 font-medium mb-2">About Us</p>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 leading-snug">
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="services bg-blue-50 py-16 px-6 md:px-20">
        <h4 className="text-blue-600 font-medium mb-2">Our Services</h4>
        <h5 className="text-dark font-medium mb-3">
          Complete Care for Every Smile
        </h5>
        <p className="text-gray-600 mb-6">
          From routine cleanings to advanced restorations, we provide
          personalized dental solutions for patients of all ages.
        </p>
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
          <Button className="bg-blue-600 text-white">View All Services</Button>
        </div>
      </div>

      {/* Full-Width Rectangle Section */}
      <section className="bg-blue-800 text-white py-16">
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
      </section>
      {/* Why Choose Our Dental Care Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="container mx-auto">
          {/* Heading and Introductory Text */}
          <div className="mb-12">
            <p className="text-blue-600 font-medium mb-2">
              Why Choose Our Dental Care
            </p>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 leading-snug">
              Exceptional Service With a Personal Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Choosing the right dental provider matters. We combine expert
              care, advanced technology, and a warm atmosphere to ensure every
              visit is comfortable, efficient, and tailored to your unique
              needs.
            </p>
          </div>

          {/* Grid Layout for Images and Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Descriptions */}
            <div>
              {/* Description 1 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Experienced Dental Team
                </h3>
                <p className="text-gray-600">
                  Skilled care backed by years of trusted dental experience.
                </p>
              </div>

              {/* Description 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Advanced Technology
                </h3>
                <p className="text-gray-600">
                  Modern tools ensure accurate and efficient treatments.
                </p>
              </div>

              {/* Description 3 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Family-Friendly Environment
                </h3>
                <p className="text-gray-600">
                  Welcoming space for kids, teens, and adults.
                </p>
              </div>
            </div>

            {/* Column 2: Images */}
            <div>
              {/* Image 1 */}
              <img
                src="/bg1.jpg"
                alt="Dentist treating patient"
                className="w-full h-[250px] object-cover mb-4 rounded-lg shadow-md"
              />

              {/* Image 2 */}
              <img
                src="/bg1.jpg"
                alt="Happy patient"
                className="w-full h-[250px] object-cover mb-4 rounded-lg shadow-md"
              />

              {/* Image 3 */}
              <img
                src="/bg2.jpg"
                alt="Dentist with patient"
                className="w-full h-[250px] object-cover mb-4 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="services bg-blue-50 py-16 px-6 md:px-20">
        <h4 className="text-blue-600 font-medium mb-2">Meet Our Dental Team</h4>
        <h5 className="text-dark font-medium mb-3">Committed to Your Smile</h5>
        <p className="text-gray-600 mb-6">
          Our experienced dental team is here to make every visit positive and
          personalized. With gentle hands and caring hearts.
        </p>
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
      {/* FAQ Section */}
      <section className="bg-white py-16 px-6 md:px-20">
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
      </section>
    </div>
  );
}
