import React from "react";

// Define the type for the component's props
type DateTimeSelectionProps = {
  onSelectDateTime: (selection: {
    date: Date | null;
    time: string | null;
  }) => void;
  selectedDate: Date | null;
  selectedTime: string | null;
  onAdvanceStep: () => void; // This prop is now passed down to calender
};

// 2. Date & Time Selection Component
const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  onSelectDateTime,
  selectedDate,
  selectedTime,
  onAdvanceStep,
}) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

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
    const newDate = new Date(currentYear, currentMonth, date);
    onSelectDateTime({ date: newDate, time: selectedTime });
  };

  const handleTimeClick = (time: string) => {
    onSelectDateTime({ date: selectedDate, time });
        onAdvanceStep();

  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Date & Time</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            {new Date(currentYear, currentMonth).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h3>
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
            {Array.from({
              length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1,
            }).map((_, i) => (
              <div key={`empty-${i}`} className="p-2"></div>
            ))}
            {dates.map((date) => (
              <div
                key={date}
                className={`p-2 rounded-full text-center cursor-pointer transition-all duration-200
                  ${
                    selectedDate &&
                    selectedDate.getDate() === date &&
                    selectedDate.getMonth() === currentMonth
                      ? "bg-sky-600 text-white shadow-lg"
                      : "hover:bg-gray-200"
                  }
                  ${
                    date < today.getDate() && currentMonth === today.getMonth()
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-800"
                  }`}
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
              <h4 className="font-semibold mb-2">{period}</h4>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => (
                  <div key={slot} className="flex flex-col items-center">
                    <button
                      className={`p-2 rounded-xl border transition-all duration-200 w-full
                        ${
                          selectedTime === slot
                            ? "bg-sky-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      onClick={() => handleTimeClick(slot)}
                    >
                      {slot}
                    </button>
                    <span className="mt-1 text-sm text-gray-500">
                      1 slot left
                    </span>
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

export default DateTimeSelection;
