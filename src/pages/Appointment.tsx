// ... (imports remain the same)
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { User, CheckCircle, ClipboardList, Calendar } from "lucide-react";
import DateTimeSelection from "../components/layout/Calendar";
import BasicDetailsForm from "../components/appointments/ AppointmentForm";
import ServiceSelection from "../components/appointments/ServiceSelection";
import { Button } from "../components/ui/button";

// Type Definitions (same as before)
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
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note?: string;
};

// Appointment Summary Component (same as before)
const AppointmentSummary = ({
  selectedService,
  selectedDate,
  selectedTime,
  selectedPriceOption,
  formData,
}: {
  selectedService: Service | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  selectedPriceOption: PriceOption | null;
  formData: FormData;
}) => {
  const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";
  const customerName = `${formData.firstName} ${formData.lastName}`.trim();
  const serviceDisplayName = selectedService
    ? `${selectedService.name} (${selectedPriceOption?.ageGroup || "N/A"})`
    : "N/A";
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Review Booking
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-800">Name</h3>
          <p>{customerName || "N/A"}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Email</h3>
          <p>{formData.email || "N/A"}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800">Service</h3>
            <p>{serviceDisplayName}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Date & Time</h3>
            <p>{`${formattedDate}, ${selectedTime || "N/A"}`}</p>
          </div>
        </div>
        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total Payable</span>
            <span className="text-xl font-bold text-sky-700">
              {selectedPriceOption?.price || "UGX 0"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Appointment Component
const Appointment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPriceOption, setSelectedPriceOption] =
    useState<PriceOption | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [, setErrors] = useState({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("EmailJS public key is missing.");
    }
  }, []);

  const steps = [
    { name: "Service", icon: ClipboardList },
    { name: "Date & Time", icon: Calendar },
    { name: "Basic Details", icon: User },
    { name: "Summary", icon: CheckCircle },
  ];

  const resetForm = () => {
    setSelectedService(null);
    setSelectedPriceOption(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      note: "",
    });
    setErrors({});
    setCurrentStep(0);
    setIsSuccess(false);
    setCompletedSteps([]);
    window.scrollTo(0, 0);
  };

  const handleServiceSelect = (
    service: Service | null,
    priceId: string | null
  ) => {
    setSelectedService(service);
    if (service && priceId) {
      const selectedOption = service.priceOptions.find(
        (opt) => opt.id === priceId
      );
      setSelectedPriceOption(selectedOption || null);
    } else {
      setSelectedPriceOption(null);
    }
  };

  const sendAppointmentEmail = async () => {
    if (
      !selectedService ||
      !selectedPriceOption ||
      !selectedDate ||
      !selectedTime
    ) {
      alert("Error: Missing appointment details for email.");
      return;
    }
    const { firstName, lastName, email, phone } = formData;
    if (!firstName || !lastName || !email || !phone) {
      alert("Please fill in all required personal details.");
      return;
    }
    setIsSubmitting(true);
    const clientTemplateParams = {
      client_name: `${formData.firstName} ${formData.lastName}`,
      client_email: formData.email,
      email: formData.email,
      service_name: `${selectedService.name} (${selectedPriceOption.ageGroup})`,
      appointment_date: new Date(selectedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      appointment_time: selectedTime,
      client_number: formData.phone,
      note: formData.note,
      service_price: selectedPriceOption.price,
    };
    // Parameters for the clinic's notification email
    const clinicTemplateParams = {
      client_name: `${formData.firstName} ${formData.lastName}`,
      service_name: `${selectedService.name} (${selectedPriceOption.ageGroup})`,
      appointment_date: new Date(selectedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      appointment_time: selectedTime,
      client_number: formData.phone,
      client_email: formData.email,
      note: formData.note,
    };
    try {
      // Send confirmation email to the client (existing logic)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID, // Client's NEW template ID
        clientTemplateParams
      );
      // Send a separate notification email to the clinic
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CLINIC_TEMPLATE_ID,
        clinicTemplateParams
      );
      setIsSuccess(true);
      window.scrollTo(0, 0); // Add scroll to top after successful submission
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Appointment booked, but failed to send confirmation email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    // if (currentStep === 0) {
    //   if (!selectedService || !selectedPriceOption) {
    //     alert("Please select a service before proceeding.");
    //     return;
    //   }
    // }

    // if (currentStep === 1) {
    //   if (!selectedDate || !selectedTime) {
    //     alert("Please select a date and time before proceeding.");
    //     return;
    //   }
    // }

    if (currentStep === 2) {
      const { firstName, lastName, email, phone } = formData;
      if (!firstName || !lastName || !email || !phone) {
        alert("Please fill in all required personal details.");
        return;
      }
    }

    setCompletedSteps((prev) => [...prev, currentStep]);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    window.scrollTo(0, 0);
  };

  const renderStepContent = () => {
    if (isSuccess) {
      return (
        <div className="text-center p-8">
          <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your appointment has been booked. A confirmation email was sent to{" "}
            <strong>{formData.email}</strong>.
          </p>
          <Button
            onClick={resetForm}
            className="px-6 py-3 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition"
          >
            Book Another
          </Button>
        </div>
      );
    }
    switch (currentStep) {
      case 0:
        return (
          <ServiceSelection
            onSelectService={handleServiceSelect}
            selectedService={selectedService}
            selectedPriceOptionId={selectedPriceOption?.id || null}
            onAdvanceStep={handleNext}
          />
        );
      case 1:
        return (
          <DateTimeSelection
            onSelectDateTime={({ date, time }) => {
              setSelectedDate(date);
              setSelectedTime(time);
            }}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onAdvanceStep={handleNext}
          />
        );
      case 2:
        return (
          <BasicDetailsForm onUpdateDetails={setFormData} formData={formData} />
        );
      case 3:
        return (
          <AppointmentSummary
            selectedService={selectedService}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedPriceOption={selectedPriceOption}
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  // This is the main return statement for the Appointment component
  return (
    <div className="bg-gray-100 min-h-screen font-sans overflow-x-hidden">
      <div className="bg-sky-50 py-10 rounded-b-lg shadow-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2">
            Book Appointment
          </h1>
          <p className="text-gray-600 mb-4">
            Schedule your dental visit in just a few clicks
          </p>
          <hr className="border-t border-black/60 w-1/2 mx-auto mb-4" />
          <nav className="text-sm text-gray-500">
            <ol className="inline-flex items-center space-x-1">
              <li>
                <a href="/" className="hover:underline ">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">›</span>
              </li>
              <li className="text-gray-700 font-medium">Book Appointment</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vertical Navigation (Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <ul className="space-y-4">
                {steps.map((step, index) => (
                  <li
                    key={step.name}
                    className={`flex items-center p-3 transition-colors duration-200 rounded-full
                      ${
                        index === currentStep
                          ? "bg-sky-800 text-white shadow-md rounded-full"
                          : "text-gray-700 hover:bg-gray-100 cursor-pointer"
                      }
                      ${index < currentStep ? "bg-sky-100 text-sky-800" : ""}
                    `}
                    onClick={() => handleStepClick(index)}
                  >
                    {completedSteps.includes(index) ? (
                      <CheckCircle size={20} className="mr-3 text-green-500" />
                    ) : (
                      <step.icon size={20} className="mr-3" />
                    )}
                    <span className="font-medium">{step.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            {/* Horizontal Progress Bar (Mobile) */}
            <div className="lg:hidden w-full overflow-hidden mb-8">
              <div className="flex justify-between items-center text-center">
                {steps.map((step, index) => (
                  <div
                    key={step.name}
                    className={`flex-1 flex flex-col items-center cursor-pointer transition-all duration-300
                                ${index <= currentStep ? "text-sky-700" : "text-gray-400"}
                              `}
                    onClick={() => handleStepClick(index)}
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-colors duration-300
                                  ${
                                    index === currentStep
                                      ? "bg-sky-700 text-white border-sky-700 shadow-md"
                                      : "bg-white border-gray-300"
                                  }
                                  ${index < currentStep ? "bg-sky-100 text-sky-700 border-sky-700" : ""}
                                `}
                    >
                      {index < currentStep ? (
                        <CheckCircle size={20} />
                      ) : (
                        <step.icon size={20} />
                      )}
                    </div>
                    <span className="mt-2 text-sm font-medium hidden sm:inline-block">
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {renderStepContent()}
            {!isSuccess && (
              <div className="flex justify-between mt-8">
                {currentStep > 0 && (
                  <Button
                    onClick={handleGoBack}
                    variant="outline"
                    className="flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-gray-800 font-semibold hover:bg-gray-300 transition-colors duration-200 shadow-md"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      ></path>
                    </svg>
                    Go Back
                  </Button>
                )}
                {currentStep < steps.length - 1 && (
                  <Button
                    onClick={handleNext}
                    className="ml-auto flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:bg-blue-900 transition-colors duration-200 shadow-md"
                  >
                    <span className="hidden sm:inline">
                      Next {steps[currentStep + 1].name}
                    </span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Button>
                )}
                 {currentStep === steps.length - 1 && (
  <Button
    onClick={sendAppointmentEmail}
    disabled={isSubmitting}
    className="ml-auto flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-sky-900 text-white font-semibold hover:bg-sky-700 transition-colors duration-200 shadow-md disabled:bg-gray-400"
  >
    {isSubmitting ? (
      "Booking..."
    ) : (
      <>
        <span className="inline sm:hidden">Book</span>
        <span className="hidden sm:inline">Book Appointment</span>
      </>
    )}
    <svg
      className="w-4 h-4 ml-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  </Button>
)}
            
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;