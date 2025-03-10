import React, { useEffect, useState } from "react";
import PopularService from "../components/PopularService";
import UseTitle from "../components/UseTitle";

const Services = () => {
  UseTitle("Services");
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Popular Services
      </h2>

      {products.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          Loading services...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <PopularService key={p._id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
