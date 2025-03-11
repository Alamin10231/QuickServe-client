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
import Booking from "../components/Booking";
import Table from "../components/Table";
import ManageService from "../pages/ManageService";
import UpdatePage from "../pages/UpdatePage";

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
        loader: ({ params }) =>
          fetch(
            `https://quick-serve-server.vercel.app/viewdetails/${params.id}`
          ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://quick-serve-server.vercel.app/viewdetails/${params.id}`
          ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Table></Table>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://quick-serve-server.vercel.app/bookings/${params.id}`),
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
        path: "/update/:id",
        element: <UpdatePage></UpdatePage>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "addservices",
            element: <AddServices></AddServices>,
          },
          {
            path: "manageservice",
            element: <ManageService></ManageService>,
          },
        ],
      },
    ],
  },
]);

export default router;
