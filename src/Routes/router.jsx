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
import PopularServices from "../components/PopularServices";
import ShowAll from "../components/ShowAll";
import ViewDetails from "../components/ViewDetails";
import AddServices from "../pages/AddServices";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/popularservice",
        element: <PopularServices></PopularServices>,
      },
      {
        path: "/showall",
        element: <ShowAll></ShowAll>,
      },
      {
        path: "/main",
        element: <Main></Main>,
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      loader: ({params}) =>
        fetch(`http://localhost:5000/viewdetails/${params.id}`)

      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: 
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ,
        children:[
          {
            path: "addservices",
            element:<AddServices></AddServices>
          },
        ]
      },
      
    ],
  },
]);

export default router;
