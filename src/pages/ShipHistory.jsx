import React, { useState } from "react";

const ShipHistory = () => {
  const [selectedTab, setSelectedTab] = useState("past");
  const [bookings, setBookings] = useState([]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    // Fetch bookings based on the selected tab
    // Example static data, replace with actual API call
    if (tab === "past") {
      setBookings([
        { id: 1, date: "2024-07-01", time: "10:00 AM", weight: "500kg" },
        { id: 2, date: "2024-07-02", time: "02:00 PM", weight: "700kg" },
      ]);
    } else {
      setBookings([
        { id: 3, date: "2024-08-01", time: "11:00 AM", weight: "800kg" },
        { id: 4, date: "2024-08-02", time: "03:00 PM", weight: "900kg" },
      ]);
    }
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12 h-[100vh] bg-gray-50">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <div className="flex items-center mb-6">
          <button
            onClick={() => window.history.back()}
            className="mr-4 p-2 rounded-full hover:bg-gray-200 transition"
          >
            ←
          </button>
          <h2 className="text-2xl font-bold text-gray-800">Your Trips/Bookings</h2>
        </div>
        <div className="flex border-b mb-6">
          <button
            onClick={() => handleTabClick("past")}
            className={`px-4 py-2 font-semibold ${
              selectedTab === "past"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-600"
            } transition`}
          >
            Past
          </button>
          <button
            onClick={() => handleTabClick("upcoming")}
            className={`px-4 py-2 font-semibold ${
              selectedTab === "upcoming"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-600"
            } transition`}
          >
            Upcoming
          </button>
        </div>
        <div className="mt-8">
          {bookings.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600">You haven't taken a trip yet</p>
            </div>
          ) : (
            <ul>
              {bookings.map((booking) => (
                <li
                  key={booking.id}
                  className="mb-4 p-4 border rounded-lg shadow-sm bg-white"
                >
                  <p className="text-lg font-semibold text-gray-800">Date: {booking.date}</p>
                  <p className="text-md text-gray-600">Time: {booking.time}</p>
                  <p className="text-md text-gray-600">Weight: {booking.weight}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShipHistory;
