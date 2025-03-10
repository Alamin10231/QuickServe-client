import { useEffect, useState } from "react";
import UseTitle from "./UseTitle";

const Table = () => {
  UseTitle("Booked Service");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => console.error("Fetch Error:", error));
  }, []);

  return (
    <div className="overflow-x-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg mb-32">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Booking Details ({bookings.length})
      </h2>

      <table className="w-full border border-gray-300 dark:border-gray-700 ">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
            <th className="border border-gray-300 dark:border-gray-700 p-3">Booking ID</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Service Name</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Price</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Service Date</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Status</th>
          </tr>
        </thead>
        <tbody className="">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr
                key={booking._id}
                className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                <td className="border border-gray-300 dark:border-gray-700 p-3">
                  {booking._id.slice(-6).toUpperCase()}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">{booking.serviceName}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-blue-600 dark:text-blue-400">
                  ${booking.price}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">
                  {new Date(booking.serviceDate).toLocaleDateString()}
                </td>
                <td
                  className={`border border-gray-300 dark:border-gray-700 p-3 font-semibold ${
                    booking.status === "Completed"
                      ? "text-green-600 dark:text-green-400"
                      : booking.status === "Cancelled"
                      ? "text-red-600 dark:text-red-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  {booking.status || "Pending"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-6 text-gray-500 dark:text-gray-400">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
