import { FaTooth } from "react-icons/fa";

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

type ServiceCardProps = {
  service: Service;
  selectedService: Service | null;
  selectedPriceOptionId: string | null;
  onSelectService: (service: Service, priceId: string) => void;
};

const ServiceCard = ({
  service,
  selectedService,
  selectedPriceOptionId,
  onSelectService,
}: ServiceCardProps) => {
  return (
    <div
      key={service.id}
      className={`p-4 border rounded-lg transition-all duration-200 flex flex-col items-center text-center
        ${
          selectedService?.id === service.id && selectedPriceOptionId
            ? "border-sky-500 ring-2 ring-sky-500 rounded-full"
            : "border-gray-300 hover:border-blue-400 hover:shadow-lg"
        }`}
    >
      <div className="flex items-center mb-2">
        <div className="w-12 h-12 border-2 border-sky-700 rounded-full flex items-center justify-center mr-2">
          <FaTooth className="text-sky-600 text-xl" />
        </div>
        <h3 className="font-semibold text-lg text-gray-800">{service.name}</h3>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {service.priceOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectService(service, option.id)}
            className={`py-2 px-4 rounded-full transition-colors duration-200
              ${
                selectedPriceOptionId === option.id
                  ? "bg-sky-700 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            <span className="font-bold">{option.ageGroup}</span>: {option.price}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
