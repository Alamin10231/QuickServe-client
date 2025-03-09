import { useEffect, useState } from "react";

const Table = () => {
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
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Details ({bookings.length})</h2>
      <table className="table w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Booking ID</th>
            <th className="border border-gray-300 p-2">Service Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Service Date</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{booking._id}</td>
              <td className="border border-gray-300 p-2">{booking.serviceName}</td>
              <td className="border border-gray-300 p-2">${booking.price}</td>
              <td className="border border-gray-300 p-2">{new Date(booking.serviceDate).toLocaleDateString()}</td>
              <td className="border border-gray-300 p-2">{booking.status || "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
