import React from "react";
import {
  Link,
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const Booking = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id } = useParams();
  const navigate = useNavigate();
  const handlepurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    // const serviceId = form.service._id
    
    const serviceImage = service.serviceImage;
    const serviceName =service.serviceName;
    const price = service.price;
    const specialInstructions = form.specialInstructions.value;
    const serviceDate = form.serviceDate.value;
    const provider = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };
    const allbookingdata = {
      // serviceId,
      serviceImage,
      serviceName,
      price,
      specialInstructions,
      serviceDate,
      provider,
    };
    console.log(allbookingdata);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allbookingdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Congrachulation!!!");
        navigate('/bookings');
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Book {service.serviceName}</h2>

      <form className="space-y-4" onSubmit={handlepurchase}>
        {/* Non-editable Service Info */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span>Service ID:</span>
            <span>{service._id}</span>
          </div>
          <div className="flex justify-between">
            <span>Service Name:</span>
            <span>{service.serviceName}</span>
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <span>${service.price}</span>
          </div>
          <img
            src={service.serviceImage}
            alt={service.serviceName}
            className="w-32 h-32 object-cover mx-auto"
          />
        </div>

        {/* Non-editable Provider Info */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span>Provider Name:</span>
            <span>{service.provider?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Provider Email:</span>
            <span>{service.provider?.email}</span>
          </div>
        </div>

        {/* Non-editable User Info */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span>Your Name:</span>
            <span>{user?.displayName}</span>
          </div>
          <div className="flex justify-between">
            <span>Your Email:</span>
            <span>{user?.email}</span>
          </div>
        </div>

        {/* Editable Fields */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Service Date *</label>
            <input
              type="date"
              name="serviceDate"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Special Instructions</label>
            <textarea
              name="specialInstructions"
              className="w-full p-2 border rounded h-32"
              placeholder="Enter your special requirements..."
            />
          </div>
        </div>

    
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Purchase Now
        </button>
       
      </form>
    </div>
  );
};

export default Booking;
