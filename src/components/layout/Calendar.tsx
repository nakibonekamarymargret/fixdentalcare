import React, { useState } from "react";

// Define the type for the component's props
type DateTimeSelectionProps = {
  onSelectDateTime: (selection: {
    date: Date | null;
    time: string | null;
  }) => void;
  selectedDate: Date | null;
  selectedTime: string | null;
  onAdvanceStep: () => void;
};

// 2. Date & Time Selection Component
const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  onSelectDateTime,
  selectedDate,
  selectedTime,
  onAdvanceStep,
}) => {
  const today = new Date();
  const [displayDate, setDisplayDate] = useState(today);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentMonth = displayDate.getMonth();
  const currentYear = displayDate.getFullYear();

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
    Evening: [
      "03:00 pm to 04:00 pm",
      "04:00 pm to 05:00 pm",
      "05:00 pm to 06:00 pm",
    ],
    Night: ["06:00 pm to 07:00 pm"],
  };

  const isTimeSlotExpired = (slot: string) => {
    // Only check for expired times on the current day
    if (!selectedDate || selectedDate.toDateString() !== today.toDateString()) {
      return false;
    }

    const now = new Date();
    // Use the end time of the slot for comparison
    const [endTime, endPeriod] = slot.split(" to ")[1].split(" ");
    // eslint-disable-next-line prefer-const
    let [endHour, endMinute] = endTime.split(":").map(Number); // The change is here

    // Convert to 24-hour format
    if (endPeriod.toLowerCase() === "pm" && endHour !== 12) {
      endHour += 12;
    }
    if (endPeriod.toLowerCase() === "am" && endHour === 12) {
      endHour = 0;
    }

    const slotEndDate = new Date();
    slotEndDate.setHours(endHour, endMinute, 0, 0);

    return now.getTime() > slotEndDate.getTime();
  };

  const handleDateClick = (date: number) => {
    const newDate = new Date(currentYear, currentMonth, date);
    onSelectDateTime({ date: newDate, time: null });
    setErrorMessage(null); // Clear any time-related errors
  };

  const handleTimeClick = (time: string) => {
    if (isTimeSlotExpired(time)) {
      setErrorMessage("Time already expired, choose another time slot.");
      return;
    }
    setErrorMessage(null);
    onSelectDateTime({ date: selectedDate, time });

    // Condition to check if both date and time are selected before advancing
    if (selectedDate && time) {
      onAdvanceStep();
    }
  };

  const handlePrevMonth = () => {
    setDisplayDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setDisplayDate(new Date(currentYear, currentMonth + 1, 1));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Date & Time</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              disabled={
                displayDate.getMonth() === today.getMonth() &&
                displayDate.getFullYear() === today.getFullYear()
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <h3 className="text-lg font-semibold text-gray-800">
              {displayDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
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
            {dates.map((date) => {
              const currentDate = new Date(currentYear, currentMonth, date);
              const isPastDate =
                currentDate.getTime() < today.setHours(0, 0, 0, 0);

              return (
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
                      isPastDate
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-800"
                    }`}
                  onClick={() => (!isPastDate ? handleDateClick(date) : null)}
                >
                  {date}
                </div>
              );
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Time Slot
          </h3>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center font-medium">
              {errorMessage}
            </div>
          )}
          {Object.entries(timeSlots).map(([period, slots]) => (
            <div key={period} className="mb-4">
              <h4 className="font-semibold mb-2">{period}</h4>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => {
                  const isExpired = isTimeSlotExpired(slot);
                  const isDateSelected = !!selectedDate;

                  return (
                    <div key={slot} className="flex flex-col items-center">
                      <button
                        className={`p-2 rounded-xl border transition-all duration-200 w-full
                          ${
                            selectedTime === slot
                              ? "bg-sky-600 text-white shadow-lg"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }
                          ${!isDateSelected || isExpired ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() =>
                          isDateSelected && !isExpired
                            ? handleTimeClick(slot)
                            : null
                        }
                        disabled={!isDateSelected || isExpired}
                      >
                        {slot}
                      </button>
                      <span className="mt-1 text-sm text-gray-500">
                        1 slot left
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
