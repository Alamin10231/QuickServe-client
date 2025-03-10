import React from "react";
import { Link } from "react-router-dom";

const Minimain = ({ service }) => {
                    const { 
                                        serviceName, 
                                        price, 
                                        serviceArea, 
                                        description, 
                                        provider, 
                                        serviceImage 
                                      } = service;

  return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
//       {/* Service Image */}
//       <img
//         src={serviceImage}
//         alt={title}
//         className="w-full h-48 object-cover"
//       />

//       {/* Content Section */}
//       <div className="p-4 flex flex-col flex-grow">
//         {/* Title and Company */}
//         {/* <h3 className="text-xl font-semibold mb-2">{title}</h3> */}
//         <h3 className="text-xl font-semibold mb-2">{serviceName}</h3>
//         {/* <p className="text-gray-600 text-sm mb-2"> {company}</p> */}

//         {/* Description */}
//         <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">
//           {description}
//         </p>

//         {/* Provider Info */}
//         <div className="flex items-center mb-4">
//           <img
//             src={provider.image}
//             alt={provider.name}
//             className="w-10 h-10 rounded-full mr-3"
//           />
//           <div>
//             <p className="font-medium">{provider.name}</p>
//             {/* <p className="text-sm text-gray-600">{provider.email}</p> */}
//           </div>
//         </div>

//         {/* Price and Location */}
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-2xl font-bold text-primary">${price}</span>
//           <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
//             {serviceArea}
//           </span>
//         </div>

//         {/* Ratings and Buttons */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//           {/* <div className="flex items-center">
//                                               <span className="text-yellow-500">★★★★☆</span>
//                                               <span className="ml-2 text-gray-600">
//                                                 ({ratings}/5 • {ratingsCount})
//                                               </span>
//                                             </div> */}

//           <div className="flex gap-4 w-full sm:w-auto">
//             {/* View Details Button */}
//             {/* <Link to={`/viewdetails/${id}`} className="flex-1 sm:flex-none">
//                                       <button className="h-12 bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all w-full sm:w-auto">
//                                         View Details
//                                       </button>
//                                     </Link> */}

//             {/* Show All Button */}
//             <Link to="showall" className="flex-1 sm:flex-none">
//               <button className="h-12 bg-gray-200 text-gray-700 px-6 py-2 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-all w-full sm:w-auto">
//                 Show All
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
   
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
<img
  src={serviceImage + "?w=500"}
  alt={serviceName}
  className="w-full h-48 object-cover"
/>
<div className="p-4">
  <h3 className="text-xl font-semibold mb-2">{serviceName}</h3>
  <p className="text-gray-700 mb-4">{description}</p>
  <div className="flex items-center mb-4">
    <img
      src={provider.image}
      alt={provider.name}
      className="w-10 h-10 rounded-full mr-3"
    />
    <p className="font-medium">{provider.name}</p>
  </div>
  <div className="flex justify-between items-center">
    <span className="text-2xl font-bold text-primary">৳{price}</span>
    {/* <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
      {serviceArea}
    </span> */}
  </div>
  <Link to="/services" className="flex-1 sm:flex-none">
    <button className="h-12 bg-gray-200 text-gray-700 px-6 py-2 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-all w-full sm:w-auto">
      Show All
    </button>
  </Link>
</div>
</div>
  );
};

export default Minimain;
