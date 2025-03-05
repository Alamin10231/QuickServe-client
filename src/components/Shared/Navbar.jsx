import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-green-600 font-semibold border-b-2 border-green-500"
            : "text-gray-700 hover:text-green-600 transition-colors duration-300"
        }
      >
        <li className="px-4 py-2">Home </li>
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-green-600 font-semibold border-b-2 border-green-500"
            : "text-gray-700 hover:text-green-600 transition-colors duration-300"
        }
      >
        <li className="px-4 py-2">Services</li>
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="navbar  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <button className="btn btn-ghost lg:hidden text-gray-600 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 space-y-2">
              {links}
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost normal-case text-xl p-0 hover:bg-transparent"
          >
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-bold">
              ServiceHub
            </span>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2 text-[15px] font-medium">
            {links}
          </ul>
        </div>

        <div className="navbar-end space-x-3 ">
          <Link to="/login">
            <button className="btn bg-green-600 hover:bg-green-700 text-white px-6 rounded-md transition-colors duration-300 border-none">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
