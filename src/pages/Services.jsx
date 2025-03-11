import React, { useEffect, useState } from "react";
import PopularService from "../components/PopularService";
import UseTitle from "../components/UseTitle";

const Services = () => {
  UseTitle("Services");
  const [products, setProducts] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    fetch("https://quick-serve-server.vercel.app/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);
  const filterdata = products.filter((card) =>
    card.serviceName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="my-20 text-center animate__animated animate__fadeInDown">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setquery(e.target.value)}
          className="w-10/12 md:w-6/12 lg:w-4/12 px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-300 shadow-lg"
        />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Popular Services
      </h2>

      {products.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          Loading services...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterdata.map((p) => (
            <PopularService key={p._id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
