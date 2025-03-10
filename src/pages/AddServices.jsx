import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import UseTitle from "../components/UseTitle";

const AddServices = () => {
  UseTitle("Add Service")
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    const serviceData = {
      serviceImage: form.serviceImage.value,
      serviceName: form.serviceName.value,
      price: form.price.value,
      serviceArea: form.serviceArea.value,
      description: form.description.value,
      provider: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };

    fetch("http://localhost:5000/addservices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
       
          setShowSuccess(true);
          form.reset();
          setTimeout(() => {
            Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Added Service ",
                      showConfirmButton: false,
                      timer: 1500
                    });
            navigate("/services");
            setShowSuccess(false);
          }, 1500);
        }
      })
      .catch((error) => console.error("Error:", error))
      
      .finally(() => setIsSubmitting(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Add New Service
            </h1>
            <p className="text-gray-600">Fill in the details of your new service</p>
          </div>

          <form onSubmit={handlesubmit} className="space-y-6">
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 p-4 rounded-lg flex items-center gap-3"
              >
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
                <span className="text-green-700 font-medium">
                  Service added successfully!
                </span>
              </motion.div>
            )}

            <div className="space-y-4">
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  name="serviceImage"
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Name
                </label>
                <input
                  type="text"
                  name="serviceName"
                  placeholder="e.g., Home Cleaning"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="0.00"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Area
                  </label>
                  <input
                    type="text"
                    name="serviceArea"
                    placeholder="e.g., New York City"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Describe your service..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-32"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Adding...
                </div>
              ) : (
                "Add Service"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AddServices;