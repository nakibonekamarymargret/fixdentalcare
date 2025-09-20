import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

// ImageModal Component
const ImageModal = ({
  imageUrl,
  onClose,
  images,
  onNavigate,
}: {
  imageUrl: string;
  onClose: () => void;
  images: string[];
  currentImageIndex: number;
  onNavigate: (direction: "prev" | "next") => void;
}) => {
  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75  flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-full bg-white rounded-lg shadow-xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 text-xl hover:bg-gray-700 transition-colors z-10"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate("prev")}
            className="absolute bottom-4 left-4 z-10 text-white text-4xl bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
            aria-label="Previous Image"
          >
            &#8249;
          </button>
        )}

        <img
          src={imageUrl}
          alt="Enlarged Service Detail"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate("next")}
            className="absolute bottom-4 right-4 z-10 text-white text-4xl bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
            aria-label="Next Image"
          >
            &#8250;
          </button>
        )}
      </div>
    </div>
  );
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId || ""];
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <div className="p-8 text-red-600">Service not found.</div>;
  }
  const allServices = Object.values(servicesData);

  const bookAppointment = () => {
    navigate("/appointment");
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(-1);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    const totalImages = (service.moreImages ?? []).length;
    let newIndex = selectedImageIndex;
    if (direction === "next") {
      newIndex = (selectedImageIndex + 1) % totalImages;
    } else if (direction === "prev") {
      newIndex = (selectedImageIndex - 1 + totalImages) % totalImages;
    }
    setSelectedImageIndex(newIndex);
  };

  // Helper functions
  const renderPriceSection = (details: {
    price?: string;
    categoricalPrice?: {
      category: string;
      items: { name: string; price: string }[];
    }[];
  }) => {
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
          {details.categoricalPrice.map(
            (
              cat: {
                category: string;
                items: { name: string; price: string }[];
              },
              catIndex: number
            ) => (
              <div key={catIndex} className="bg-white p-3 rounded-md mb-2">
                <h6 className="font-semibold text-gray-700 mb-2">
                  {cat.category}
                </h6>
                <ul className="list-none space-y-1">
                  {cat.items.map(
                    (
                      item: { name: string; price: string },
                      itemIndex: number
                    ) => (
                      <li
                        key={itemIndex}
                        className="flex justify-start text-base gap-2 text-blue-900"
                      >
                        <span className="text-base font-medium">
                          {item.name}
                        </span>
                        <span className="text-base text-black font-bold">
                          {" "}
                          UGX {item.price}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
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
    return categoryKey === "adult" ? "Adults" : "Children";
  }

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Mobile Dropdown Menu */}
        <div className="p-4 md:hidden relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold shadow-sm"
          >
            <span>{service.title}</span>
            <span
              className={`transform transition-transform duration-200 ${
                isDropdownOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              &gt;
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-2 z-10 max-h-64 overflow-y-auto">
              <ul className="space-y-1 p-2">
                {allServices.map((s) => (
                  <li key={s.title}>
                    <Link
                      to={`/services/${s.slug}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        service.slug === s.slug
                          ? "bg-[var(--color-primary)] text-white font-semibold"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Sidebar Menu */}
        <div className="w-full md:w-1/4 bg-blue-50 p-6 shadow-md hidden md:block">
          <h3 className="text-xl font-bold mb-4">Service List</h3>
          <ul className="space-y-2 rounded-full">
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
            <Button onClick={bookAppointment}>Make appointment</Button>
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
            <div className="space-y-6">
              <div className="relative w-full h-[400px] md:h-[500px] mb-6 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-4xl font-bold mb-4 border-b-2 pb-2">
                {service.title}
              </h2>
              <p className="text-lg text-gray-700 font-medium">
                {service.definition}
              </p>
              {/* Major services provided */}
              {service.servicesProvided &&
                service.servicesProvided.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-2">
                      Major Services Provided
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {service.servicesProvided.map((item, index) => (
                        <li key={index} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-400">
                <h4 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">
                  Service Overview
                </h4>
                <p className="text-gray-800">{service.introduction}</p>
                {service.description.main && (
                  <p className="text-gray-700 mt-4">
                    {service.description.main}
                  </p>
                )}
              </div>
              <h4 className="text-2xl font-semibold ">Service Details</h4>
              {(() => {
                const hasAdult = Boolean(service.description.adult);
                const hasChild = Boolean(service.description.child);
                const columns =
                  hasAdult && hasChild ? "grid-cols-2" : "grid-cols-1";
                return (
                  <div className={`grid grid-cols-1 md:${columns} gap-4 mt-6`}>
                    {hasAdult && (
                      <div className="bg-gray-50 p-6 rounded-lg ">
                        {service.description.adult && (
                          <div className="bg-gray-50 p-6 rounded-lg border-l-4 b border-gray-400">
                            <h5 className="text-lg font-bold text-gray-800 mb-4">
                              {getCategoryHeading("adult")} in adults
                            </h5>
                            <div className="space-y-4 text-sm">
                              {service.description.adult.causes &&
                                service.description.adult.causes.length > 0 && (
                                  <div>
                                    <h6 className="font-semibold text-gray-700 text-lg">
                                      Causes{" "}
                                    </h6>
                                    <ul className="list-disc list-inside ml-4 text-base">
                                      {service.description.adult.causes.map(
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
                                (service.description.adult.process ?? [])
                                  .length > 0 && (
                                  <div className="space-y-4 mt-8">
                                    <h5 className="font-semibold text-[var(--color-primary)] text-lg">
                                      Procedure at FIX Dental Care
                                    </h5>
                                    <ol className="list-decimal list-inside ml-4 space-y-2 text-base leading-relaxed">
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
                                  <h5 className="font-semibold text-[var(--color-primary)] text-lg">
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
                                      <ol className="list-decimal list-inside ml-4 space-y-1 text-base leading-relaxed">
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
                              {service.description.adult
                                .aftercareAndExpectations &&
                                service.description.adult
                                  .aftercareAndExpectations.length > 0 && (
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
                              {renderPriceSection(service.description.adult)}
                            </div>
                          </div>
                        )}{" "}
                      </div>
                    )}
                    {hasChild && (
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                        {service.description.child && (
                          <div className="bg-gray-50 p-6 rounded-lg ">
                            <h5 className="text-lg font-bold text-gray-800 mb-4">
                              {getCategoryHeading("child")} in children
                            </h5>
                            <div className="space-y-4 text-sm">
                              {service.description.child.causes &&
                                service.description.child.causes.length > 0 && (
                                  <div>
                                    <h6 className="font-semibold text-gray-700 text-lg">
                                      Signs your child may need it{" "}
                                    </h6>
                                    <ul className="list-disc list-inside ml-4 text-base">
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
                                (service.description.child.process ?? [])
                                  .length > 0 && (
                                  <div className="space-y-4 mt-8">
                                    <h5 className="font-semibold text-[var(--color-primary)]0 text-lg">
                                      Procedure at FIX Dental Care
                                    </h5>
                                    <ol className="list-decimal list-inside ml-4 space-y-2 text-base leading-relaxed">
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
                                  <h5 className="font-semibold text-[var(--color-primary)] text-lg">
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
                                      <ol className="list-decimal list-inside ml-4 space-y-1 text-base leading-relaxed">
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
                              {service.description.child
                                .aftercareAndExpectations &&
                                service.description.child
                                  .aftercareAndExpectations.length > 0 && (
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
                  <h5 className="font-semibold text-gray-800">
                    How it is done
                  </h5>
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
              {/* Additional Images (Gallery with Modal Trigger) */}
              {(service.moreImages ?? []).length > 0 && (
                <div className="space-y-4 mt-8">
                  <h4 className="text-2xl font-semibold ">
                    More {service.title} Pictures
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {(service.moreImages ?? []).map((imgSrc, index) => (
                      <div
                        key={index}
                        className="w-full h-32 md:h-40 rounded-lg shadow-md overflow-hidden cursor-pointer
                                   hover:scale-105 transition-transform duration-300 relative"
                        onClick={() => openImageModal(index)}
                      >
                        <img
                          src={imgSrc}
                          alt={`${service.title} detail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Aftercare and Expectations Section */}
              {service.aftercareAndExpectations &&
                service.aftercareAndExpectations.length > 0 && (
                  <div className="space-y-4 mt-8">
                    <h4 className="text-2xl font-semibold text-[var(--color-primary)]">
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

        {/* Render the Image Modal */}
        {isModalOpen && (
          <ImageModal
            imageUrl={(service.moreImages ?? [])[selectedImageIndex]}
            onClose={closeImageModal}
            images={service.moreImages ?? []}
            currentImageIndex={selectedImageIndex}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  );
}
