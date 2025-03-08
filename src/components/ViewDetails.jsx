import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const service = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Service Header */}
          <div className="relative">
            <img
              src={service?.serviceImage}
              alt={service?.serviceName}
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 p-8">
              <div className="max-w-3xl mx-auto">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </span>
                <h1 className="text-4xl font-bold text-white mt-4">
                  {service.serviceName}
                </h1>
                <p className="text-xl text-gray-200 mt-2">
                  Serving {service.serviceArea}
                </p>
              </div>
            </div>
          </div>

          {/* Service Body */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Service Details
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">
                    Availability
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {service.availability}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">
                    Completed Bookings
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {service.bookings}+
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${service.price}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Fixed Price
                  </span>
                </div>
                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Book Now
                </button>
              </div>

              {/* Provider Card */}
              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <img
                    src={service?.provider?.image}
                    alt={service?.provider?.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {service?.provider?.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {service?.provider?.email}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(service.ratings)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {service.ratings} ({service.bookings} bookings)
                  </span>
                </div>
              </div>

              {/* Service Stats */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Service ID</dt>
                    <dd className="font-medium text-gray-900">
                      #{service._id.slice(-6)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Status</dt>
                    <dd className="font-medium text-green-600">
                      {service.status}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Response Time</dt>
                    <dd className="font-medium text-gray-900">
                      Within 24 hours
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;