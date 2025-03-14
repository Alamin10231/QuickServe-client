import React, { useEffect, useState } from "react";
import PopularService from "./PopularService";

const PopularServices = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://quick-serve-server.vercel.app/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Popular Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <PopularService
            key={p._id} // Use MongoDB _id instead of index
            p={p}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Loading services...
        </div>
      )}
    </div>
  );
};

export default PopularServices;
