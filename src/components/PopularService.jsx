import React from "react";
import { Link } from "react-router-dom";

const PopularService = ({ p }) => {
  const {
    _id,
    title,
    company,
    price,
    serviceArea,
    description,
    provider,
    serviceImage,
    ratings,
    ratingsCount,
    serviceName,
  } = p;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Service Image */}
      <img
        src={serviceImage}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        // onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
      />

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {serviceName}
        </h3>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Provider Info */}
        <div className="flex items-center mb-4">
          <img
            src={provider?.image}
            alt={provider?.name}
            className="w-10 h-10 rounded-full border-2 border-primary mr-3"
          />
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-200">
              {provider?.name}
            </p>
          </div>
        </div>

        {/* Price & Location */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${price}
          </span>
          <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-900 dark:text-gray-300">
            {serviceArea}
          </span>
        </div>

        {/* Ratings and Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          {/* Ratings */}
          <div className="flex items-center text-yellow-400">
            {"★".repeat(Math.round(ratings))}{" "}
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              ({ratings}/5 • {ratingsCount} reviews)
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full sm:w-auto">
            {/* View Details Button */}
            <Link to={`/viewdetails/${_id}`} className="flex-1 sm:flex-none">
              <button className="h-12 bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all w-full sm:w-auto">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularService;
