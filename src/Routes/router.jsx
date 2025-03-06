import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import MainLayout from "../pages/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
      path:"/",
      element:<Home></Home>
      },
      {
      path:"/login",
      element:<Login></Login>
      },
      {
      path:"/register",
      element:<Register></Register>
      },
      {
      path:"/services",
      element:<PrivateRoute><Services></Services></PrivateRoute>
      },
      {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },

    ]

  },
]);

export default router;
