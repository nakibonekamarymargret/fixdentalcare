import { TiTick } from "react-icons/ti";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
  
const About = () => {
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

      {/* About Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/bg1.jpg"
              alt="Dental Care"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img 
              src="/bg2.jpg"
              alt="Dental Team"
              className="w-full h-64 object-cover rounded-lg shadow-md mt-9"
            />
          </div>

          {/* Text */}
          <div>
            <h4 className="text-blue-600 text-center uppercase mb-2">
              About us
            </h4>
            <h3 className="text-2xl font-semibold mb-4">
              Professionals and Personalized Dental Excellence
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              We offer high-quality dental care tailored for the whole family.
              From routine checkups to advanced treatments, our compassionate
              team ensures your smile stays healthy and confident.
            </p>

            {/* Tick Points */}
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

            <Button className="bg-blue-800/50">Book Appointment</Button>
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
            personalized. <br /> With gentle hands and caring hearts, <br /> we create a
            welcoming environment for all.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Card
                key={i}
                className="rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                <CardContent className="p-0">
                  <img
                    src={i % 2 === 0 ? "/bg1.jpg" : "/bg2.jpg"}
                    alt="Team Member"
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dr. Jane Doe
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expert in teeth whitening and oral surgery with over 10
                    years of experience.
                  </p>
                </div>
              </Card>
            ))}
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
    </div>
  );
};

export default About;
