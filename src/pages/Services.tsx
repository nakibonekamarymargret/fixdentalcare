import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(servicesData).map(([id, service]) => {
          const adultProcess = service.description.adult?.categoricalProcess;
          const childProcess = service.description.child?.categoricalProcess;

          // Prefer adult's process for preview, else child's
          const previewProcess =
            adultProcess?.[0] || childProcess?.[0] || null;

          return (
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
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Show short intro */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {service.introduction}
                </p>

                {/* If there is a categorical process, preview the first category */}
                {previewProcess && (
                  <div className="mt-2">
                    <p className="text-xs font-semibold text-gray-500">
                      Procedure Category:
                    </p>
                    <p className="text-sm text-gray-700">
                      {previewProcess.category}
                    </p>
                    <ul className="text-xs text-gray-600 list-disc pl-4 mt-1">
                      {previewProcess.items.slice(0, 2).map((step, idx) => (
                        <li key={idx}>{step.title}</li>
                      ))}
                      {previewProcess.items.length > 2 && (
                        <li>...more</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
