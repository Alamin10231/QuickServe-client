import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-green-600 dark:text-green-400 font-semibold border-b-2 border-green-500"
            : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
        }
      >
        <li className="px-4 py-2">Home</li>
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-green-600 dark:text-green-400 font-semibold border-b-2 border-green-500"
            : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
        }
      >
        <li className="px-4 py-2">Services</li>
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    signout()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700 sticky top-0 z-50">
      <div className="navbar mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button className="btn btn-ghost lg:hidden text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
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
            <ul className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-white dark:bg-gray-700 rounded-box w-52 space-y-2">
              {links}
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 dark:text-green-400 font-semibold border-b-2 border-green-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                }
              >
                <li>Dashboard</li>
              </NavLink>
              <ul className="p-2 cursor-pointer">
                <NavLink to="/dashboard/addservices" className="text-gray-700 dark:text-gray-200">
                  <li>Add Service</li>
                </NavLink>
                <Link to="/dashboard/manageservice" className="text-gray-700 dark:text-gray-200">
                  <li>Manage Service</li>
                </Link>
                <Link to="/bookings" className="text-gray-700 dark:text-gray-200">
                  <li>Booked Services</li>
                </Link>
                <li className="text-gray-700 dark:text-gray-200">Service To-Do</li>
              </ul>
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost normal-case text-xl p-0 hover:bg-transparent"
          >
            <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent font-bold">
              ServiceHub
            </span>
          </NavLink>
        </div>

        {/* Navbar Center (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2 text-[15px] font-medium">
            {links}
            <li>
              <details>
                <summary className="text-gray-700 dark:text-gray-300">Dashboard</summary>
                <ul className="p-2 cursor-pointer absolute z-[100] bg-white dark:bg-gray-700 shadow-lg rounded-box">
                  <Link to="/dashboard/addservices" className="text-gray-700 dark:text-gray-200">
                    <li>Add Service</li>
                  </Link>
                  <Link to="/dashboard/manageservice" className="text-gray-700 dark:text-gray-200">
                    <li>Manage Service</li>
                  </Link>
                  <Link to="/bookings" className="text-gray-700 dark:text-gray-200">
                    <li>Booked Services</li>
                  </Link>
                  <li className="text-gray-700 dark:text-gray-200">Service To-Do</li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end space-x-4">
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <label className="flex cursor-pointer gap-2 dark:text-gray-100">
  {/* Sun icon */}
  {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stroke-gray-800 dark:stroke-white"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg> */}
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stroke-gray-800 dark:stroke-white"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>

  {/* Toggle input */}
  <input
    type="checkbox"
    value="light"
    className="toggle theme-controller bg-gray-200 dark:bg-gray-600 checked:bg-gray-200 dark:checked:bg-gray-600"
    defaultChecked // This sets initial state to checked
  />

  {/* Moon icon */}
  {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stroke-gray-800 dark:stroke-white"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg> */}
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stroke-gray-800 dark:stroke-white"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>


</label>

            {/* User Section */}
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Profile"
                      src={user.photoURL || "https://via.placeholder.com/150"}
                      title={user.displayName || "User"}
                      className="dark:brightness-90"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-700 rounded-box z-[100] mt-3 w-52 p-2 shadow"
                >
                  <li className="text-gray-700 dark:text-gray-200">
                    <a className="justify-between">Profile</a>
                  </li>
                  <li className="text-gray-700 dark:text-gray-200">
                    <button>Update Profile</button>
                  </li>
                  <li className="text-gray-700 dark:text-gray-200">
                    <button onClick={handleSignOut}>Log Out</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login">
                  <button className="text-white dark:text-gray-100 bg-[#900C3F] dark:bg-[#6A0935] px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-[#7A0B35] transition duration-300 text-sm sm:text-base">
                    Log In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="hidden md:flex text-white dark:text-gray-100 bg-[#900C3F] dark:bg-[#6A0935] px-4 py-2 rounded-lg hover:bg-[#7A0B35] transition duration-300">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;