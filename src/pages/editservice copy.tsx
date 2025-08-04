import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId || ""];

  useEffect(() => {
    // Scroll to top of the page when serviceId changes
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <div className="p-8 text-red-600">Service not found.</div>;
  }
  const allServices = Object.values(servicesData);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Column: Services List */}
      <div className="w-full md:w-1/4 bg-blue-50 p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">Service List</h3>
        <ul className="space-y-2  rounded-full">
          {allServices.map((s) => (
            <li key={s.title} className="mb-2">
              <Link
                to={`/services/${s.slug}`}
                className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                  service.slug === s.slug
                    ? "bg-[var(--color-primary)] text-white font-semibold shadow-inner"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {s.title}
                <span>&gt;</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="pb-5">
          <Button>Make appointment</Button>
        </div>
      </div>
      {/* Right Column: Service Details */}
      <div className="w-full md:w-3/4 p-8 bg-white relative">
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Image */}
          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4 border-b-2 pb-2">
            {service.title}
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 font-medium">
              {service.definition}
            </p>
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="text-2xl font-semibold text-blue-600 mb-2">
                Service Overview
              </h4>
              <p className="text-gray-800">{service.introduction}</p>
            </div>
            {/* Adults vs. Children Details Section */}
            <h4 className="text-2xl font-semibold ">Service Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Adults Section */}
              {service.description.adult && (
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">
                    Adults
                  </h5>
                  <div className="space-y-4 text-sm">
                    {/* causes  */}
                    {service.description.adult.causes.length > 0 && (
                      <div>
                        <h6 className="font-semibold text-gray-700">causes </h6>
                        <ul className="list-disc list-inside ml-4">
                          {service.description.adult.causes.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Process */}
                    {service.description.adult.process.length > 0 && (
                      <div>
                        <h6 className="font-semibold text-gray-700">
                          Procedure at FIX Dental Care
                        </h6>
                        <ol className="	list-decimal list-inside ml-4">
                          {service.description.adult.process.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                    {/* Aftercare and Expectations Section */}
                    {service.description.adult.aftercareAndExpectations &&
                      service.description.adult.aftercareAndExpectations
                        .length > 0 && (
                        <div className="space-y-4 mt-8">
                          <h4 className="text-2xl font-semibold text-blue-800">
                            Aftercare and Expectations
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {service.description.adult.aftercareAndExpectations.map(
                              (item, index) => (
                                <li key={index}>{item}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    {/* Price */}
                    <div className="flex justify-between items-center bg-white p-3 rounded-md mt-4">
                      <span className="font-semibold">Price / Cost</span>
                      <span className="text-blue-600 font-bold">
                        {service.description.adult.price}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {/* Children Section */}
              {service.description.child && (
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">
                    Children
                  </h5>
                  <div className="space-y-4 text-sm">
                    {/* causes  */}
                    {service.description.child.causes.length > 0 && (
                      <div>
                        <h6 className="font-semibold text-gray-700">causes </h6>
                        <ul className="list-disc list-inside ml-4">
                          {service.description.child.causes.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Process */}
                    {service.description.child.process.length > 0 && (
                      <div>
                        <h6 className="font-semibold text-gray-700">
                          Procedure at FIX Dental Care
                        </h6>
                        <ol className="list-decimal0 list-inside ml-4">
                          {service.description.child.process.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                    {/* Aftercare and Expectations Section */}
                    {service.description.child.aftercareAndExpectations &&
                      service.description.child.aftercareAndExpectations
                        .length > 0 && (
                        <div className="space-y-4 mt-8">
                          <h4 className="text-2xl font-semibold text-blue-800">
                            Aftercare and Expectations
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {service.description.child.aftercareAndExpectations.map(
                              (item, index) => (
                                <li key={index}>{item}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    {/* Price */}
                    <div className="flex justify-between items-center bg-white p-3 rounded-md mt-4">
                      <span className="font-semibold">Price / Cost</span>
                      <span className="text-blue-600 font-bold">
                        {service.description.child.price}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* More About this Service */}
            <div className="space-y-4 mt-8">
              <h4 className="text-2xl font-semibold">
                More about this service
              </h4>
              <div>
                <h5 className="font-semibold text-gray-800">How it is done</h5>
                <p className="text-gray-700 mt-2">{service.howItIsDone}</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">
                  Why is it necessary
                </h5>
                <p className="text-gray-700 mt-2">{service.whyIsItNecessary}</p>
              </div>
            </div>
            {/* Additional Images */}
            {(service.moreImages ?? []).length > 0 && (
              <div className="space-y-4 mt-8">
                <h4 className="text-2xl font-semibold text-blue-800">
                  Images more
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(service.moreImages ?? []).map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${service.title} detail ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
