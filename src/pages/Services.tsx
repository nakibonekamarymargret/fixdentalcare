import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(servicesData).map(([id, service]) => (
          <Link
            key={id}
            to={`/services/${id}`}
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
