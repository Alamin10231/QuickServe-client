import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);
  const links = (
    <>
      <Link
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-green-600 font-semibold border-b-2 border-green-500"
            : "text-gray-700 hover:text-green-600 transition-colors duration-300"
        }
      >
        <li className="px-4 py-2">Home </li>
      </Link>
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
  const handleSignOut = () => {
    signout()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // toast.error(error.message);
      });
  };

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

              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold border-b-2 border-green-500"
                    : "text-gray-700 hover:text-green-600 transition-colors duration-300"
                }
              >
                <li>Dashboard</li>
              </NavLink>

              <ul className="p-2 cursor-pointer">
                <NavLink to="/dashboard/addservices">
                  <li>Add Service</li>
                </NavLink>

                <li>Manage Service</li>
                <li>Booked Services</li>
                <li>Service To-Do</li>
              </ul>
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
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold border-b-2 border-green-500"
                  : "text-gray-700 hover:text-green-600 transition-colors duration-300"
              }
            ></NavLink>
            <li>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2 cursor-pointer ">
                  <Link to="/dashboard/addservices">
                    <li>Add Service</li>
                  </Link>
                  <li>Manage Service</li>
                  <li>Booked-Services</li>
                  <li>Service-To-Do</li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="navbar-end space-x-2">
          <div className="navbar-end space-x-2">
            <div className="">
              <label className="flex cursor-pointer gap-2 ">
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
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="light"
                  className="toggle theme-controller"
                />
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
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL || "https://via.placeholder.com/150"}
                      title={user.displayName || "User"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>Update Profile</li>
                  <li>
                    <button onClick={handleSignOut}>log out</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-x-2 flex">
                <Link to="/login">
                  <button className="text-white bg-[#900C3F] px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-[#7A0B35] transition duration-300 text-sm sm:text-base">
                    Log in
                  </button>
                </Link>
                <Link to="/register">
                  <button className=" hidden md:flex text-white bg-[#900C3F] px-4 py-2 rounded-lg hover:bg-[#7A0B35] transition duration-300">
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
