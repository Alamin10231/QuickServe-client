import React from "react";
import trendingservice from"../../assets/trendingservice.jpg"
import smarthome from"../../assets/smarthome.jpg"
const Trending = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Trending Now</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Trending Service 1 */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <img
                src={trendingservice}
               
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-all"
                alt="Trending Service"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">AC Repair Service</h3>
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-600 px-3 py-1 rounded-full">
                      🔥 80% Increase
                    </span>
                    <p>🕒 24/7 Service</p>
                  </div>
                  <div className="mt-4">
                    <div className="h-2 bg-gray-300 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <p className="mt-2">150+ orders in last 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trending Service 2 */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <img
                src={smarthome}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-all"
                alt="Smart Home"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Smart Home Setup</h3>
                  <div className="flex items-center gap-4">
                    <span className="bg-green-600 px-3 py-1 rounded-full">
                      🚀 New Trend
                    </span>
                    <p>🏠 Complete Package</p>
                  </div>
                  <div className="mt-4">
                    <div className="h-2 bg-gray-300 rounded-full">
                      <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <p className="mt-2">300+ inquiries last week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;
