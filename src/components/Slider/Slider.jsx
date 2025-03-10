import React from "react";
import 'animate.css';
import sea from "../../assets/slider1.jpg";
import hiker from "../../assets/slider2.jpg";
import forest from "../../assets/slider3.jpg";

const Slider = () => {
  return (
    <div className="w-10/12 mx-auto py-10 animate__animated animate__fadeIn">
      <div className="carousel rounded-box h-[600px] relative shadow-xl">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img 
            src={sea} 
            className="w-full object-cover animate__animated animate__fadeIn animate__slow" 
            alt="Sea view"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle hover:scale-110 transition-transform animate__animated animate__bounceInLeft">
              ❮
            </a> 
            <a href="#slide2" className="btn btn-circle hover:scale-110 transition-transform animate__animated animate__bounceInRight">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img 
            src={hiker} 
            className="w-full object-cover animate__animated animate__slideInLeft animate__slow" 
            alt="Hiker in mountains" 
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle hover:scale-110 transition-transform animate__animated animate__bounceInLeft">
              ❮
            </a> 
            <a href="#slide3" className="btn btn-circle hover:scale-110 transition-transform animate__animated animate__bounceInRight">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img 
            src={forest} 
            className="w-full object-cover animate__animated animate__slideInRight animate__slow" 
            alt="Forest landscape" 
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle hover:scale-110 transition-transform animate__animated animate__bounceInLeft">
              ❮
            </a> 
            <a href="#slide1" className="btn btn-circle hover:scale-110 transition-transform animate__animated animate__bounceInRight">
              ❯
            </a>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
          <a href="#slide1" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors animate__animated animate__pulse"></a>
          <a href="#slide2" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors animate__animated animate__pulse"></a>
          <a href="#slide3" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors animate__animated animate__pulse"></a>
        </div>
      </div>
    </div>
  );
};

export default Slider;