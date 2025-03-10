import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";


const Booking = () => {
  
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const formData = new FormData(e.target);
    const bookingData = {
      serviceId: service._id,
      serviceImage: service.serviceImage,
      serviceName: service.serviceName,
      price: service.price,
      specialInstructions: formData.get("specialInstructions"),
      serviceDate: formData.get("serviceDate"),
      provider: {
        name: user?.displayName || "",
        email: user?.email || "",
        image: user?.photoURL || "",
      },
    };

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Booking failed");
      }

      setSuccess(true);
      setTimeout(() => navigate("/bookings", { state: { success: true } }), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Book {service.serviceName}
          </h2>

          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-50 p-4 rounded-lg flex items-center gap-3 mb-6"
            >
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
              <span className="text-green-700 font-medium">
                Booking successful! Redirecting...
              </span>
            </motion.div>
          )}

          {error && (
            <div className="bg-red-50 p-4 rounded-lg flex items-center gap-3 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-red-700">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Information Card */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Service Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Service ID</label>
                  <p className="font-medium">{service._id}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Service Name</label>
                  <p className="font-medium">{service.serviceName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Price</label>
                  <p className="font-medium">${service.price}</p>
                </div>
                <div className="md:col-span-2">
                  <img
                    src={service.serviceImage}
                    alt={service.serviceName}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Provider & User Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Service Provider</h3>
                <div className="space-y-2">
                  <div>
                    <label className="text-sm text-gray-600">Name</label>
                    <p className="font-medium">{service.provider?.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <p className="font-medium">{service.provider?.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Your Information</h3>
                <div className="space-y-2">
                  <div>
                    <label className="text-sm text-gray-600">Name</label>
                    <p className="font-medium">{user?.displayName}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <p className="font-medium">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Date *
                </label>
                <input
                  type="date"
                  name="serviceDate"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions
                </label>
                <textarea
                  name="specialInstructions"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Any special requirements or notes..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 relative"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                  Processing...
                </span>
              ) : (
                "Confirm Booking"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Booking;