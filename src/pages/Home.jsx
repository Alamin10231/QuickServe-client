import React from "react";
import Slider from "../components/Slider/Slider";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
