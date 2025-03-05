import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import MainLayout from "../pages/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
      path:"/",
      element:<h1>home</h1>
      },
      {
      path:"/login",
      element:<Login></Login>
      },
      {
      path:"/register",
      element:<Register></Register>
      },

    ]

  },
]);

export default router;
