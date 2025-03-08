import React from "react";
import SalekPathan from"../../assets/salekpathan.jpg"
import AhmedHasan from"../../assets/Ahmed Hasan.jpg"
import sumaiya from"../../assets/sumaiya.jpg"

const TopServiceProvider = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Service Providers
          </h2>

          {/* Added justify-center to grid container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Provider Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all text-center w-full max-w-sm">
              <div className="flex flex-col items-center mb-4">
                <img
                 src={AhmedHasan}
                  className="w-20 h-20 rounded-full border-4 border-blue-200 mb-4 object-cover"
                  alt="Provider"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Ahmed Hasan</h3>
                  <p className="text-blue-600">Electrician</p>
                  <div className="flex items-center mt-1 justify-center">
                    ⭐ 4.9 (120+ Reviews)
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-sm">✅ 500+ Services Completed</p>
                <p className="text-sm">📍 Mirpur, Dhaka</p>
              </div>
              <button className="mt-4 w-full max-w-[200px] mx-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Contact Now
              </button>
            </div>
            {/* Provider Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all text-center w-full max-w-sm">
              <div className="flex flex-col items-center mb-4">
                <img
                  src={SalekPathan}
                  className="w-20 h-20 rounded-full border-4 border-blue-200 mb-4 object-cover"
                  alt="Provider"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Salek Pathan</h3>
                  <p className="text-blue-600">Plumber</p>
                  <div className="flex items-center mt-1 justify-center">
                    ⭐ 4.7 (98+ Reviews)
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-sm">✅ 350+ Services Completed</p>
                <p className="text-sm">📍 Banani, Dhaka</p>
              </div>
              <button className="mt-4 w-full max-w-[200px] mx-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Contact Now
              </button>
            </div>
            {/* Provider Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all text-center w-full max-w-sm">
              <div className="flex flex-col items-center mb-4 ">
                <img
                  src={sumaiya}
                  
                  className="w-20 h-20 rounded-full border-4 border-blue-200 mb-4 object-cover"
                  alt="Provider"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Sumaiya Akter</h3>
                  <p className="text-blue-600">Interior Designer</p>
                  <div className="flex items-center mt-1 justify-center">
                    ⭐ 4.8 (110+ Reviews)
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-sm">✅ 400+ Services Completed</p>
                <p className="text-sm">📍 Gulshan, Dhaka</p>
              </div>
              <button className="mt-4 w-full max-w-[200px] mx-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopServiceProvider;
