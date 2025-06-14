import { useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = useQuery(api.services.getBySlug, { slug });

  if (!service) return <div>Loading service...</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[#2e2976] mb-4">{service.name}</h1>
      <p className="mb-6 text-gray-700">{service.description}</p>

      {/* Images */}
      <div className="relative mb-6">
        {service.image1 && (
          <img
            src={service.image1}
            alt={service.name}
            className="w-full rounded-lg shadow-lg"
          />
        )}
        {service.image2 && (
          <img
            src={service.image2}
            alt="Overlay"
            className="absolute top-0 left-0 w-1/2 rounded-lg shadow-md"
          />
        )}
      </div>

      {/* Subservices */}
      {service.subservices?.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-2 text-[#2e2976]">
            Subservices
          </h2>
          {service.subservices.map((sub, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold">{sub.name}</h3>
              <p className="text-gray-600">{sub.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
