import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../data/servicesData";

type PriceOption = {
  id: string;
  ageGroup: string;
  price: string;
};

type Service = {
  id: string;
  name: string;
  category: string;
  priceOptions: PriceOption[];
};

type Category = {
  id: string;
  name: string;
};

type ServiceSelectionProps = {
  onSelectService: (service: Service | null, priceId: string | null) => void;
  selectedService: Service | null;
  selectedPriceOptionId: string | null;
  onAdvanceStep: () => void;
};

// Helper function to create a unique ID from a string
const createServiceId = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Helper function to create a unique price option ID
const createPriceOptionId = (serviceName: string, ageGroup: string) =>
  `${createServiceId(serviceName)}-${ageGroup.toLowerCase()}`;

const ServiceSelection = ({
  onSelectService,
  selectedService,
  selectedPriceOptionId,
  onAdvanceStep,
}: ServiceSelectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories: Category[] = [{ id: "all", name: "ALL" }];
  const allServices: Service[] = [];

  // Iterate over each main service group (e.g., "General Dentistry", "Orthodontics")
  Object.values(servicesData).forEach((serviceCategory) => {
    if (!serviceCategory?.title) return;

    const categoryName = serviceCategory.title;
    const categoryId = createServiceId(categoryName);
    categories.push({ id: categoryId, name: categoryName });

    // Use a temporary map to store services for the current category,
    // this prevents duplicate service names from overwriting each other
    // within the same category (e.g. if a service name appears twice in one category)
    const categoryServices = new Map<string, Service>();

    // Process adult services
    const adultPriceCategories =
      serviceCategory.description?.adult?.categoricalPrice || [];
    adultPriceCategories.forEach((cat) => {
      cat.items.forEach((item: any) => {
        const serviceName = item.name;
        const servicePrice = item.price.toString();

        // Create a unique key by combining category and service name
        const uniqueKey = `${categoryId}-${createServiceId(serviceName)}`;

        if (!categoryServices.has(uniqueKey)) {
          categoryServices.set(uniqueKey, {
            id: uniqueKey, // The service ID is now globally unique
            name: serviceName,
            category: categoryName,
            priceOptions: [],
          });
        }
        categoryServices.get(uniqueKey)?.priceOptions.push({
          id: createPriceOptionId(serviceName, "Adult"),
          ageGroup: "Adult",
          price: `UGX ${servicePrice}`,
        });
      });
    });

    // Process child services
    const childPriceCategories =
      serviceCategory.description?.child?.categoricalPrice || [];
    childPriceCategories.forEach((cat) => {
      cat.items.forEach((item: any) => {
        const serviceName = item.name;
        const servicePrice = item.price.toString();

        // Create a unique key by combining category and service name
        const uniqueKey = `${categoryId}-${createServiceId(serviceName)}`;

        if (!categoryServices.has(uniqueKey)) {
          categoryServices.set(uniqueKey, {
            id: uniqueKey, // The service ID is now globally unique
            name: serviceName,
            category: categoryName,
            priceOptions: [],
          });
        }
        categoryServices.get(uniqueKey)?.priceOptions.push({
          id: createPriceOptionId(serviceName, "Child"),
          ageGroup: "Child",
          price: `UGX ${servicePrice}`,
        });
      });
    });

    // Push all services for this category into the main array
    allServices.push(...Array.from(categoryServices.values()));
  });

  // Sort categories alphabetically
  categories.sort((a, b) => a.name.localeCompare(b.name));

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    onSelectService(null, null);
  };

  const handleServiceSelect = (service: Service, priceId: string) => {
    onSelectService(service, priceId);
    onAdvanceStep();
  };

  const filteredServices =
    selectedCategory === "all"
      ? allServices
      : allServices.filter(
          (service) => createServiceId(service.category) === selectedCategory
        );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Select a Service
      </h2>
      <div className="mb-6">
        <label
          htmlFor="category"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select Category
        </label>
        <div className="relative inline-block text-gray-700 w-full md:w-1/2">
          <select
            id="category"
            name="category"
            className="block appearance-none w-full bg-white border border-gray-300 py-2 px-4 pr-8 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-pointer"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="pt-4 text-gray-700 text-sm font-bold mb-2">
        Select a service
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredServices.map((service) => (
          <ServiceCard
            // This key is now truly unique because the service.id itself
            // is a combination of category and service name.
            key={service.id}
            service={service}
            selectedService={selectedService}
            selectedPriceOptionId={selectedPriceOptionId}
            onSelectService={handleServiceSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
