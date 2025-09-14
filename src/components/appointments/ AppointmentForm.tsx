// Type Definitions (moved from Appointment.tsx)
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note?: string;
};

type BasicDetailsFormProps = {
  onUpdateDetails: (data: FormData) => void;
  formData: FormData;
};

// Basic Details Form Component (moved from Appointment.tsx)
const BasicDetailsForm: React.FC<BasicDetailsFormProps> = ({
  onUpdateDetails,
  formData,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onUpdateDetails({ ...formData, [name as string]: value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Basic Details</h2>
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
export default BasicDetailsForm;
