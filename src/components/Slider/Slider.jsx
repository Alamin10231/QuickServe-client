import React from "react";
import sea from "../../assets/slider1.jpg";
import hiker from "../../assets/slider2.jpg";
import forest from "../../assets/slider3.jpg"; // Fixed typo from 'forst' to 'forest'

const Slider = () => {
  return (
    <div className="w-10/12 mx-auto py-10">
      <div className="carousel rounded-box h-[600px] relative ">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img 
            src={sea} 
            className="w-full object-cover" 
            alt="Sea view"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle hover:scale-110 transition-transform">
              ❮
            </a> 
            <a href="#slide2" className="btn btn-circle hover:scale-110 transition-transform">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img 
            src={hiker} 
            className="w-full object-cover" 
            alt="Hiker in mountains" 
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle hover:scale-110 transition-transform">
              ❮
            </a> 
            <a href="#slide3" className="btn btn-circle hover:scale-110 transition-transform">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img 
            src={forest} 
            className="w-full object-cover" 
            alt="Forest landscape" 
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle hover:scale-110 transition-transform">
              ❮
            </a> 
            <a href="#slide1" className="btn btn-circle hover:scale-110 transition-transform">
              ❯
            </a>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
          <a href="#slide1" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors"></a>
          <a href="#slide2" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors"></a>
          <a href="#slide3" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors"></a>
        </div>
      </div>
    </div>
  );
};

export default Slider;