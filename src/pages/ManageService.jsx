import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import UseTitle from "../components/UseTitle";
import Swal from "sweetalert2";
import axios from "axios";

const ManageService = () => {
  UseTitle("Manage Service");
  const [manager, setManage] = useState([]);

  useEffect(() => {
    // fetch("https://quick-serve-server.vercel.app")
    //   .then((res) => res.json())
    axios
      .get("https://quick-serve-server.vercel.app")

      .then((res) => setManage(res.data));
  }, []);

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://quick-serve-server.vercel.app/manage/${id}`)

          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
              });

              const updatedManager = manager.filter(
                (service) => service._id !== id
              );
              setManage(updatedManager);
            }
          });
      }
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Manage Services ({manager.length})
        </h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {manager.map((p) => (
            <motion.div
              key={p._id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48">
                <img
                  src={p.serviceImage}
                  alt={p.serviceName}
                  className="w-full h-full object-cover"
                  // onError={(e) => {
                  //   e.target.src = 'https://via.placeholder.com/300';
                  // }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {p.serviceName}
                </h3>
                <div className="space-y-1 mb-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Price:</span> ${p.price}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Area:</span> {p.serviceArea}
                  </p>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handledelete(p._id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                  >
                    <TrashIcon className="h-5 w-5" />
                    Delete
                  </button>

                  <Link
                    to={`/update/${p._id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    <PencilIcon className="h-5 w-5" />
                    Update
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ManageService;
