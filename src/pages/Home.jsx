import React from "react";
import Slider from "../components/Slider/Slider";
import { Outlet } from "react-router-dom";
import PopularServices from "../components/PopularServices";
import Main from "./Main";
import TopServiceProvider from "../components/ExtraSection/TopServiceProvider";
import Trending from "../components/ExtraSection/Trending";
import UseTitle from "../components/UseTitle";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <Main></Main>
      <TopServiceProvider></TopServiceProvider>
      <Trending></Trending>
      {/* <PopularServices></PopularServices>  */}
       {/* ekhane ami onno kichu dibo fake
      data bania */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
