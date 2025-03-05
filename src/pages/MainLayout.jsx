import React from "react";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return <div className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
  </div>
};

export default MainLayout;
