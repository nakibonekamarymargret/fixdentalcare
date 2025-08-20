// ... (imports remain the same)
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <div className="p-8 text-red-600">Service not found.</div>;
  }
  const allServices = Object.values(servicesData);

  // A helper function to render the price section
  const renderPriceSection = (details: { price?: string; categoricalPrice?: { category: string; items: { name: string; price: string }[] }[] }) => {
    if (details.price) {
      return (
        <div className="flex justify-between items-center bg-white p-3 rounded-md mt-4">
          <span className="font-semibold">Price / Cost</span>
          <span className="text-blue-600 font-bold">{details.price}</span>
        </div>
      );
    }

    if (details.categoricalPrice && details.categoricalPrice.length > 0) {
      return (
        <div className="mt-4">
          {details.categoricalPrice.map((cat: { category: string; items: { name: string; price: string }[] }, catIndex: number) => (
            <div key={catIndex} className="bg-white p-3 rounded-md mb-2">
              <h6 className="font-semibold text-gray-700 mb-2">
                {cat.category}
              </h6>
              <ul className="list-none space-y-1">
                {cat.items.map((item: { name: string; price: string }, itemIndex: number) => (
                  <li
                    key={itemIndex}
                    className="flex justify-start text-sm gap-2 text-blue-700"
                  >
                    <span>{item.name}</span>
                    <span className=" text-black bold">UGX {item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };
 function getCategoryHeading(categoryKey: "adult" | "child") {
   const desc = service.description[categoryKey];
   if (desc?.categoricalPrice && desc.categoricalPrice.length > 0) {
     return desc.categoricalPrice[0].category;
   }
   // Fallback titles
   return categoryKey === "adult" ? "Adults" : "Children";
 }
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/4 bg-blue-50 p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">Service List</h3>
        <ul className="space-y-2  rounded-full">
          {allServices.map((s) => (
            <li key={s.title} className="mb-2">
              <Link
                to={`/services/${s.slug}`}
                className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                  service.slug === s.slug
                    ? "bg-blue-600 text-white font-semibold shadow-inner"
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
              className="w-full max-w-xl mx-auto rounded-lg mb-6 shadow-lg object-contain"
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

            {(() => {
              const hasAdult = Boolean(service.description.adult);
              const hasChild = Boolean(service.description.child);
              const columns =
                hasAdult && hasChild ? "grid-cols-2" : "grid-cols-1";

              return (
                <div className={`grid grid-cols-1 ${columns} gap-4 mt-6`}>
                  {/* Adult Section */}
                  {hasAdult && (
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                      {service.description.adult && (
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                          <h5 className="text-lg font-bold text-gray-800 mb-4">
                            {getCategoryHeading("adult")} in adults
                          </h5>

                          <div className="space-y-4 text-sm">
                            {/* causes  */}
                            {service.description.adult.causes &&
                              service.description.adult.causes.length > 0 && (
                                <div>
                                  <h6 className="font-semibold text-gray-700 text-[20px]">
                                    Causes{" "}
                                  </h6>
                                  <ul className="list-disc list-inside ml-4 text-[18px]">
                                    {service.description.adult.causes.map(
                                      (c, i) => (
                                        <li key={i}>{c}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            {/* Process (flat or categorical) */}
                            {Array.isArray(
                              service.description.adult?.process ?? []
                            ) &&
                              (service.description.adult.process ?? []).length >
                                0 && (
                                <div className="space-y-4 mt-8">
                                  <h5 className="font-semibold text-[var(--color-primary)] text-lg px-2 pt-2">
                                    Procedure at FIX Dental Care
                                  </h5>
                                  <ol className="list-decimal list-inside ml-4 space-y-2">
                                    {(
                                      service.description.adult.process ?? []
                                    ).map((p, i) => (
                                      <li key={i}>{p}</li>
                                    ))}
                                  </ol>
                                </div>
                              )}

                            {(
                              service.description.adult?.categoricalProcess ??
                              []
                            ).length > 0 && (
                              <div className="space-y-4 mt-8">
                                <h5 className="font-semibold text-[var(--color-primary)] text-lg px-2 pt-2">
                                  Procedure at FIXED Dental Care
                                </h5>
                                {(
                                  service.description.adult
                                    .categoricalProcess ?? []
                                ).map((cat, ci) => (
                                  <div
                                    key={ci}
                                    className="bg-white p-3 rounded-md shadow-sm"
                                  >
                                    <h6 className="font-semibold text-gray-700 mb-2">
                                      {cat.category}
                                    </h6>
                                    <ol className="list-decimal list-inside ml-4 space-y-1">
                                      {cat.items.map((step, si) => (
                                        <li key={si}>
                                          <strong>{step.title}:</strong>{" "}
                                          {step.procedure}
                                        </li>
                                      ))}
                                    </ol>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Aftercare and Expectations Section */}
                            {service.description.adult
                              .aftercareAndExpectations &&
                              service.description.adult.aftercareAndExpectations
                                .length > 0 && (
                                <div className="space-y-4 mt-8">
                                  <h4 className="text-2xl font-semibold text-[var(--color-primary)]">
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
                            {/* Price - Call the new helper function here */}
                            {renderPriceSection(service.description.adult)}
                          </div>
                        </div>
                      )}{" "}
                    </div>
                  )}
                  {/* Child Section */}
                  {hasChild && (
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                      {service.description.child && (
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                          <h5 className="text-lg font-bold text-gray-800 mb-4">
                            {getCategoryHeading("child")} in children
                          </h5>
                          <div className="space-y-4 text-sm">
                            {/* causes  */}
                            {service.description.child.causes &&
                              service.description.child.causes.length > 0 && (
                                <div>
                                  <h6 className="font-semibold text-gray-700">
                                    Signs your child may need it{" "}
                                  </h6>
                                  <ul className="list-disc list-inside ml-4">
                                    {service.description.child.causes.map(
                                      (c, i) => (
                                        <li key={i}>{c}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            {Array.isArray(
                              service.description.adult?.process ?? []
                            ) &&
                              (service.description.child.process ?? []).length >
                                0 && (
                                <div className="space-y-4 mt-8">
                                  <h5 className="font-semibold text-[var(--color-primary)] text-lg px-2 pt-2">
                                    Procedure at FIX Dental Care
                                  </h5>
                                  <ol className="list-decimal list-inside ml-4 space-y-2">
                                    {(
                                      service.description.child.process ?? []
                                    ).map((p, i) => (
                                      <li key={i}>{p}</li>
                                    ))}
                                  </ol>
                                </div>
                              )}

                            {(
                              service.description.child?.categoricalProcess ??
                              []
                            ).length > 0 && (
                              <div className="space-y-4 mt-8">
                                <h5 className="font-semibold text-[var(--color-primary)] text-lg px-2 pt-2">
                                  Procedure at FIXED Dental Care
                                </h5>
                                {(
                                  service.description.child
                                    .categoricalProcess ?? []
                                ).map((cat, ci) => (
                                  <div
                                    key={ci}
                                    className="bg-white p-3 rounded-md shadow-sm"
                                  >
                                    <h6 className="font-semibold text-gray-700 mb-2">
                                      {cat.category}
                                    </h6>
                                    <ol className="list-decimal list-inside ml-4 space-y-1">
                                      {cat.items.map((step, si) => (
                                        <li key={si}>
                                          <strong>{step.title}:</strong>{" "}
                                          {step.procedure}
                                        </li>
                                      ))}
                                    </ol>
                                  </div>
                                ))}
                              </div>
                            )}
                            {/* Aftercare and Expectations Section */}
                            {service.description.child
                              .aftercareAndExpectations &&
                              service.description.child.aftercareAndExpectations
                                .length > 0 && (
                                <div className="space-y-4 mt-8">
                                  <h4 className="text-2xl font-semibold text-[var(--color-primary)]">
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
                            {/* Price - Call the new helper function here */}
                            {renderPriceSection(service.description.child)}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })()}
            {/* More About this Service */}
            <div className="space-y-4 mt-8">
              <h4 className="text-2xl font-semibold">
                More about this service
              </h4>
              <div>
                <h5 className="font-semibold text-gray-800">How it is done</h5>
                <p className="text-gray-700 mt-2">{service.howItIsDone}</p>
              </div>
              {service.whyIsItNecessary && (
                <div>
                  <h5 className="font-semibold text-gray-800">
                    Why is it necessary
                  </h5>
                  <p className="text-gray-700 mt-2">
                    {service.whyIsItNecessary}
                  </p>
                </div>
              )}
            </div>
            {/* Additional Images */}
            {(service.moreImages ?? []).length > 0 && (
              <div className="space-y-4 mt-8">
                <h4 className="text-2xl font-semibold ">
                 More {service.title} Pictures
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(service.moreImages ?? []).map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${service.title} detail ${index + 1}`}
                      // Updated classes for a consistent size and clear appearance
                      className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />

                  ))}
                </div>
              </div>
            )}
            {/* Aftercare and Expectations Section */}
            {service.aftercareAndExpectations &&
              service.aftercareAndExpectations.length > 0 && (
                <div className="space-y-4 mt-8">
                  <h4 className="text-2xl font-semibold text-blue-800">
                    Aftercare and Expectations
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {service.aftercareAndExpectations.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
