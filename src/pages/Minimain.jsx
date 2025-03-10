import React from "react";
import { Link } from "react-router-dom";

const Minimain = ({ service }) => {
  const { serviceName, price, serviceArea, description, provider, serviceImage } = service;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={serviceImage + "?w=500"}
        alt={serviceName}
        className="w-full h-48 object-cover dark:brightness-90"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">
          {serviceName}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center mb-4">
          <img
            src={provider.image}
            alt={provider.name}
            className="w-10 h-10 rounded-full mr-3 dark:brightness-90"
          />
          <p className="font-medium dark:text-gray-300">{provider.name}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-primary dark:text-green-400">
            ৳{price}
          </span>
          {serviceArea && (
            <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-gray-300">
              {serviceArea}
            </span>
          )}
        </div>
        <Link
          to="/services"
          className="flex-1 sm:flex-none"
        >
          <button className="h-12 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-all w-full sm:w-auto">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Minimain;