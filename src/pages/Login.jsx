import React, { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import UseTitle from "../components/UseTitle";
import Swal from "sweetalert2";

const Login = () => {
  UseTitle("Login")
  const { login, signinwithgoogle } = useContext(AuthContext);
  const [success,setsuccess] = useState(false)
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setsuccess(false)

    login(email, password)
      .then((res) => {
        console.log(res.user);
        setsuccess(true)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
     

      })
      .catch((error) => {
        console.log(error.message);
          Swal.error({
                  position: "center",
                  icon: "error",
                  title: {error},
                  showConfirmButton: false,
                  timer: 1500,
                });
      });
    //signin with google
    
  };
  const handlegoogle = () => {
                    signinwithgoogle()
                      .then((result) => {
                        console.log(result.user);
                    //     toast.success("Successfully login");
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Successfully login",
                      showConfirmButton: false,
                      timer: 1500
                    });
                        navigate("/");
                      })
              
                      .catch((error) => {
                        console.log(error.message);
                        Swal.error({
                          position: "center",
                          icon: "error",
                          title: "Please Try Again",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                      });
                  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              ref={emailRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="text-right">
            <button
              //               onClick={handleforgetpass}
              type="button"
              className="text-sm text-green-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <button
            onClick={handlegoogle}
            //             onClick={handleGoogle}
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-200"
          >
            <FcGoogle size={24} />
            <span>Sign in with Google</span>
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-green-600 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
