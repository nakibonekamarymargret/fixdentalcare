import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(servicesData).map(([id, service], index) => {
          const servicesProvided = service.servicesProvided;
          const isEven = index % 2 === 0; // alternate cards

          return (
            <Link
              key={id}
              to={`/services/${id}`}
              className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white p-6"
            >
              <h3 className="text-[18px] font-bold mb-2 text-center uppercase">
                {service.title}
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Image */}
                <div
                  className={`flex-shrink-0 w-full h-32 md:w-40 md:h-40 overflow-hidden border-2 border-gray-200 ${
                    isEven ? "order-2" : "order-1"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`flex-grow ${isEven ? "order-1" : "order-2"}`}>
                  <p className="text-[15px] text-gray-600 line-clamp-3 mb-3">
                    {service.introduction}
                  </p>

                  {servicesProvided && (
                    <div className="mt-4">
                      <h4 className="text-[16px] font-semibold  tracking-wider">
                        Popular Services Provided at Fix Dental Care
                      </h4>

                      <ul className="text-[15px] text-gray-500 list-none pl-4 mt-1">
                        {servicesProvided.slice(0, 3).map((step, idx) => (
                          <li
                            className="before:content-['>'] before:mr-2 before:text-blue-500"
                             key={idx}
                          >
                            {step}
                          </li>
                        ))}
                        {servicesProvided.length > 2 && <li>...and more</li>}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
