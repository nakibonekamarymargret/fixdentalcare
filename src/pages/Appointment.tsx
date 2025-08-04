import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser"; // Import emailjs
import { Calendar, User, CheckCircle, ClipboardList } from "lucide-react";
import { FaTooth } from "react-icons/fa";


type Service = {
  id: string;
  name: string;
  price: string;
  category: string;
}

type Category = {
  id: string;
  name: string;
};

const ServiceSelection = ({
  onSelectService,
  selectedService,
}: {
  onSelectService: (service: Service) => void;
  selectedService: Service | null;
}) => {
  // Define all services with their categories based on the PDF
  const allServices: Service[] = [
    // Consultation & Exams
    {
      id: "general-consultation",
      name: "General Dental Consultation" ,
      price: "UGX30,000",
      category: "Consultation & Exams",
    },
    {
      id: "emergency-consultation",
      name: "Emergency Consultation" ,
      price: "UGX60,000",
      category: "Consultation & Exams",
    },
    {
      id: "full-oral-exam",
      name: "Full Oral Examination + Report" ,
      price: "UGX90,000",
      category: "Consultation & Exams",
    },

    // Preventive Care
    {
      id: "scaling-polishing",
      name: "Scaling and Polishing" ,
      price: "UGX100,000",
      category: "Preventive Care",
    },
    {
      id: "oral-hygiene-instruction",
      name: "Oral Hygiene Instruction" ,
      price: "UGX30,000",
      category: "Preventive Care",
    },

    // Fillings (Restorative)
    {
      id: "temporary-filling",
      name: "Temporary Filling" ,
      price: "UGX40,000",
      category: "Fillings (Restorative)",
    },
    {
      id: "amalgam-filling",
      name: "Amalgam Filling (Posterior)" ,
      price: "UGX100,000",
      category: "Fillings (Restorative)",
    },
    {
      id: "composite-filling-small",
      name: "Composite Filling (Small)" ,
      price: "UGX120,000",
      category: "Fillings (Restorative)",
    },
    {
      id: "composite-filling-medium",
      name: "Composite Filling (Medium)" ,
      price: "UGX150,000",
      category: "Fillings (Restorative)",
    },
    {
      id: "composite-filling-large",
      name: "Composite Filling (Large)" ,
      price: "UGX180,000",
      category: "Fillings (Restorative)",
    },

    // Extractions
    {
      id: "simple-extraction",
      name: "Simple Extraction (1 tooth)" ,
      price: "UGX50,000",
      category: "Extractions",
    },
    {
      id: "difficult-extraction",
      name: "Difficult Extraction" ,
      price: "UGX130,000",
      category: "Extractions",
    },
    {
      id: "surgical-extraction",
      name: "Surgical Extraction (Impacted)" ,
      price: "UGX300,000",
      category: "Extractions",
    },

    // Root Canal Treatment (RCT)
    {
      id: "rct-anterior",
      name: "Anterior Tooth RCT" ,
      price: "UGX200,000",
      category: "Root Canal Treatment (RCT)",
    },
    {
      id: "rct-premolar",
      name: "Premolar RCT" ,
      price: "UGX250,000",
      category: "Root Canal Treatment (RCT)",
    },
    {
      id: "rct-molar",
      name: "Molar Tooth RCT" ,
      price: "UGX300,000",
      category: "Root Canal Treatment (RCT)",
    },
    {
      id: "rct-crown-package",
      name: "RCT with Crown Package" ,
      price: "UGX1,000,000",
      category: "Root Canal Treatment (RCT)",
    },

    // Crowns & Bridges
    {
      id: "temporary-crown",
      name: "Temporary Crown (Acrylic)" ,
      price: "UGX300,000",
      category: "Crowns & Bridges",
    },
    {
      id: "metal-ceramic-crown",
      name: "Metal-Ceramic Crown" ,
      price: "UGX500,000",
      category: "Crowns & Bridges",
    },
    {
      id: "full-ceramic-crown",
      name: "Full Ceramic (Zirconia) Crown" ,
      price: "UGX800,000",
      category: "Crowns & Bridges",
    },
    {
      id: "3-unit-bridge",
      name: "3-Unit Bridge (Metal-Ceramic)" ,
      price: "UGX1,500,000",
      category: "Crowns & Bridges",
    },

    // Cosmetic Dentistry
    {
      id: "tooth-whitening",
      name: "Tooth Whitening (In-office)" ,
      price: "UGX500,000",
      category: "Cosmetic Dentistry",
    },
    {
      id: "composite-veneers",
      name: "Composite Veneers (per tooth)" ,
      price: "UGX300,000",
      category: "Cosmetic Dentistry",
    },
    {
      id: "porcelain-veneers",
      name: "Porcelain Veneers (per tooth)" ,
      price: "UGX700,000",
      category: "Cosmetic Dentistry",
    },
    {
      id: "diastema-closure",
      name: "Diastema Closure (Gap Filling)" ,
      price: "UGX120,000",
      category: "Cosmetic Dentistry",
    },

    // Dentures
    {
      id: "partial-acrylic-denture",
      name: "Partial Acrylic Denture (1-4 teeth)" ,
      price: "UGX400,000",
      category: "Dentures",
    },
    {
      id: "complete-denture",
      name: "Complete Denture (One Jaw)" ,
      price: "UGX700,000",
      category: "Dentures",
    },
    {
      id: "flexible-denture",
      name: "Flexible Denture (Valplast)" ,
      price: "UGX1,000,000",

      category: "Dentures",
    },
    {
      id: "denture-repairs",
      name: "Denture Repairs/Relines" ,
      price: "UGX150,000",
      category: "Dentures",
    },

    // Diagnostic & Radiology
    {
      id: "intraoral-xray",
      name: "Intraoral X-Ray (Periapical)" ,
      price: "UGX25,000",
      category: "Diagnostic & Radiology",
    },

    // Implants & Surgery
    {
      id: "dental-implant",
      name: "Dental Implant (1 tooth)" ,
      price: "UGX5,000,000",
      category: "Implants & Surgery",
    },
    {
      id: "bone-grafting",
      name: "Bone Grafting" ,
      price: "UGX600,000",
      category: "Implants & Surgery",
    },
    {
      id: "sinus-lift",
      name: "Sinus Lift" ,
      price: "UGX1,200,000",
      category: "Implants & Surgery",
    },

    // Orthodontics
    {
      id: "metal-braces",
      name: "Metal Braces (Both Jaws)" ,
      price: "UGX2,000,000",
      category: "Orthodontics",
    },
    {
      id: "ceramic-braces",
      name: "Ceramic Braces (Both Jaws)" ,
      price: "UGX4,000,000",
      category: "Orthodontics",
    },
    {
      id: "invisalign",
      name: "Invisalign (Full Treatment)" ,
      price: "UGX9,000,000-12,000,000",
      category: "Orthodontics",
    },
    {
      id: "retainers",
      name: "Retainers (per arch)" ,
      price: "UGX250,000",
      category: "Orthodontics",
    },
  ];

  const categories: Category[] = [
    { id: "all", name: "ALL" },
    { id: "consultation-exams", name: "Consultation & Exams" },
    { id: "preventive-care", name: "Preventive Care" },
    { id: "fillings-restorative", name: "Fillings (Restorative)" },
    { id: "extractions", name: "Extractions" },
    { id: "root-canal-treatment", name: "Root Canal Treatment (RCT)" },
    { id: "crowns-bridges", name: "Crowns & Bridges" },
    { id: "cosmetic-dentistry", name: "Cosmetic Dentistry" },
    { id: "dentures", name: "Dentures" },
    { id: "diagnostic-radiology", name: "Diagnostic & Radiology" },
    { id: "implants-surgery", name: "Implants & Surgery" },
    { id: "orthodontics", name: "Orthodontics" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    onSelectService(null); // Deselect service when category changes
  };

  const filteredServices =
    selectedCategory === "all"
      ? allServices
      : allServices.filter(
          (service) =>
            service.category ===
            categories.find((cat) => cat.id === selectedCategory)?.name
        );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6  text-center">
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
      </p>{" "}
      {/* This text was already there, keeping it */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex flex-col items-center text-center
              ${selectedService?.id === service.id ? "border-sky-500 ring-2 ring-sky-500 rounded-full" : "border-gray-300 hover:border-blue-400 hover:shadow-lg"}`}
            onClick={() => onSelectService(service)}
          >
            <div className="flex items-center mb-2">
              <div className="w-12 h-12 border-2 border-sky-700 rounded-full flex items-center justify-center mr-2">
                <FaTooth className="text-sky-600 text-xl" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                {service.name}
              </h3>
            </div>

            <p className="text-md font-bold pt-3">
              <span className="bg-sky-700 text-white rounded-full p-3 text-sm">
                Price: {service.price}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. Date & Time Selection Component
const DateTimeSelection = ({
  onSelectDateTime,
  selectedDate,
  selectedTime,
}: {
  onSelectDateTime: (selection: {
    date: Date | null;
    time: string | null;
  }) => void;
  selectedDate: Date | null;
  selectedTime: string | null;
}) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Helper to get days in a month
  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  // Helper to get the first day of the month (0 = Sunday, 6 = Saturday)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const timeSlots = {
    Morning: [
      "09:00 am to 10:00 am",
      "10:00 am to 11:00 am",
      "11:00 am to 12:00 pm",
    ],
    Afternoon: [
      "12:00 pm to 01:00 pm",
      "01:00 pm to 02:00 pm",
      "02:00 pm to 03:00 pm",
    ],
    Evening: ["03:00 pm to 04:00 pm", "04:00 pm to 05:00 pm"],
  };

  const handleDateClick = (date: number) => {
    // Changed type to number as dates array contains numbers
    const newDate = new Date(currentYear, currentMonth, date);
    onSelectDateTime({ date: newDate, time: selectedTime });
  };

  const handleTimeClick = (time: string) => {
    onSelectDateTime({ date: selectedDate, time });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6  text-center">
        Date & Time
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            July 2025
          </h3>{" "}
          {/* Hardcoded for demo */}
          <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-2">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before the 1st of the month */}
            {Array.from({
              length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1,
            }).map((_, i) => (
              <div key={`empty-${i}`} className="p-2"></div>
            ))}
            {dates.map((date) => (
              <div
                key={date}
                className={`p-2 rounded-full text-center cursor-pointer transition-all duration-200 
                  ${selectedDate && selectedDate.getDate() === date && selectedDate.getMonth() === currentMonth ? "bg-sky-600 text-white shadow-lg" : "hover:bg-gray-200"}
                  ${date < today.getDate() && currentMonth === today.getMonth() ? "text-gray-400 cursor-not-allowed" : "text-gray-800"}`}
                onClick={() =>
                  date >= today.getDate() || currentMonth !== today.getMonth()
                    ? handleDateClick(date)
                    : null
                }
              >
                {date}
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Time Slot
          </h3>
          {Object.entries(timeSlots).map(([period, slots]) => (
            <div key={period} className="mb-4">
              <h4 className="font-semibold  mb-2">{period}</h4>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => (
                  <div key={slot} className="flex flex-col items-center">
                    {" "}
                    {/* Wrapper for button and text */}
                    <button
                      className={`p-2 rounded-xl border transition-all duration-200 w-full
                        ${selectedTime === slot ? "bg-sky-600 text-white shadow-lg" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                      onClick={() => handleTimeClick(slot)}
                    >
                      {slot}
                    </button>
                    <p className="text-red-700 text-xs mt-1">One Slot left</p>{" "}
                    {/* Moved here */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Basic Details Form Component
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note?: string;
};

const BasicDetailsForm = ({
  onUpdateDetails,
  formData,
}: {
  onUpdateDetails: (data: FormData) => void;
  formData: FormData;
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Added type for event
    const { name, value } = e.target;
    onUpdateDetails({ ...formData, [name as string]: value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6  text-center">
        Basic Details
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Firstname *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName || ""}
            onChange={handleChange}
            placeholder="Enter your firstname"
            className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Lastname *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleChange}
            placeholder="Enter your lastname"
            className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number *
          </label>
          <div className="flex items-center border rounded-md shadow-sm focus-within:ring-blue-500 focus-within:border-blue-500">
            <span className="inline-flex items-center px-3 text-gray-500 sm:text-sm">
              🇺🇬
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              placeholder="0712 345678"
              className="appearance-none rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Note
          </label>
          <textarea
            id="note"
            name="note"
            value={formData.note || ""}
            onChange={handleChange}
            placeholder="Enter note details"
            rows={4}
            className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

// 4. Appointment Summary Component
const AppointmentSummary = ({
  selectedService,
  selectedDate,
  selectedTime,
  formData,
}: {
  selectedService: Service | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  formData: FormData;
}) => {
  const formatPrice = (price: string) => {
    // Remove 'UGX' and any non-numeric characters, then format
    const numericPrice = parseFloat(price.replace("UGX", "").replace(/,/g, ""));
    return `UGX${numericPrice.toLocaleString("en-UG")}`;
  };

  const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  const customerName =
    `${formData.firstName || ""} ${formData.lastName || ""}`.trim();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Summary
      </h2>
      
      <p className="text-center text-gray-600 mb-6">
        Your appointment booking summary
      </p>

      <div className="mb-6 border-b pb-4">
        <h3 className="text-lg font-semibold  mb-2">Customer</h3>
        <p className="text-gray-800">{customerName || "N/A"}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border-b pb-4">
        <div>
          <h3 className="text-lg font-semibold  mb-2">Service</h3>
          <p className="text-gray-800">{selectedService?.name || "N/A"}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold  mb-2">
            Date & Time
          </h3>
          <p className="text-gray-800">{`${formattedDate}, ${selectedTime || "N/A"}`}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">
          Total Amount Payable
        </h3>
        <p className="text-xl font-bold text-sky-700">
          {selectedService ? formatPrice(selectedService.price) : "UGX0.00"}
        </p>
      </div>
    </div>
  );
};

// --- Main Appointment Component ---
const Appointment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    note: "",
  });
    useEffect(() => {
      // Initialize EmailJS with your Public Key
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
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

    const sendAppointmentEmail = async () => {
      if (!selectedService || !selectedDate || !selectedTime) {
        alert("Error: Missing appointment details for email.");
        return;
      }

      const templateParams = {
        customer_name: `${formData.firstName} ${formData.lastName}`,
        customer_email: formData.email, // This will be the recipient
        service_name: selectedService.name,
        appointment_date: new Date(selectedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        appointment_time: selectedTime,
        customer_phone: formData.phone,
        customer_note: formData.note,
      };

      try {
        await emailjs.send(
          "service_o2tqym9", // Replace with your Service ID from EmailJS
          "template_27avdpn", // Replace with your Template ID from EmailJS
          templateParams
        );
        alert("Appointment booked successfully and email sent!");
      } catch (error) {
        console.error("Failed to send email:", error);
        alert("Appointment booked, but failed to send confirmation email.");
      }
    };

    const handleNext = () => {
      if (currentStep === 0 && !selectedService) {
        alert("Please select a service.");
        return;
      }
      if (currentStep === 1 && (!selectedDate || !selectedTime)) {
        alert("Please select a date and time.");
        return;
      }
      if (currentStep === 2) {
        const { firstName, lastName, email, phone } = formData;
        if (!firstName || !lastName || !email || !phone) {
          alert("Please fill in all required personal details.");
          return;
        }
      }
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleGoBack = () => {
      setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const renderStepContent = () => {
      switch (currentStep) {
        case 0:
          return (
            <ServiceSelection
              onSelectService={setSelectedService}
              selectedService={selectedService}
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
            />
          );
        case 2:
          return (
            <BasicDetailsForm
              onUpdateDetails={setFormData}
              formData={formData}
            />
          );
        case 3:
          return (
            <AppointmentSummary
              selectedService={selectedService}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              formData={formData}
            />
          );
        default:
          return null;
      }
    };
 


  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-sky-50 py-10 rounded-b-lg shadow-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
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
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Step Navigation */}
          <div className="lg:col-span-1">
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
                    onClick={() => setCurrentStep(index)}
                  >
                    <step.icon size={20} className="mr-3" />
                    <span className="font-medium">{step.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Content Area - Step Forms/Summary */}
          <div className="lg:col-span-2">
            {renderStepContent()}
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <button
                  onClick={handleGoBack}
                  className="flex items-center px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition-colors duration-200 shadow-md"
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
                </button>
              )}
              {currentStep < steps.length - 1 && (
                <button
                  onClick={handleNext}
                  className="ml-auto flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md"
                >
                  Next {steps[currentStep + 1].name}
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
                </button>
              )}
              {currentStep === steps.length - 1 && (
                <button
                  onClick={sendAppointmentEmail} // Call the email sending function here
                  className="ml-auto flex items-center px-6 py-3 rounded-full bg-sky-900 text-white font-semibold hover:bg-sky-700 transition-colors duration-200 shadow-md"
                >
                  Book Appointment
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
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
