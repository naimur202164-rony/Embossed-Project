import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Registered = () => {
  return (
    <div className="container mb-32">
      <div className="mt-4 flex items-center">
          <AiOutlineHome className="text-primary"/>
          <AiOutlineRight className="text-gray-400 mx-2"/>
        <p className="text-gray-600">Register</p>
      </div>
      <div className="flex justify-center">
        <div className="px-5 py-5 w-5/12 bg-white shadow-lg border rounded-md">
          <div className="">
            <h2 className="text-3xl font-semibold">Create an Account</h2>
            <p className="text-sm ">Register here if you are a new customer.</p>
          </div>
          <div className="">
            <form>
              <div className="mt-4 mb-6">
                <label
                  htmlfor="name"
                  className="block mb-1 text-sm font-medium text-gray-400 "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mt-4 mb-6">
                <label
                  htmlfor="email"
                  className="block mb-1 text-sm font-medium text-gray-400 "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div className="mt-4 mb-6">
                <label
                  htmlfor="password"
                  className="block mb-1 text-sm font-medium text-gray-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="type password"
                  required
                />
              </div>
              <div className="mt-4 mb-6">
                <label
                  htmlfor="repeat-password"
                  className="block mb-1 text-sm font-medium text-gray-400 "
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="repeat-password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="confirm your password"
                  required
                />
              </div>
              <div className="flex items-start mt-5 mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-50 border focus:outline-none focus:ring-0"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlfor="terms" className="font-medium text-gray-500 ">
                    I agree with the{" "}
                    <a href="/#" className="text-primary hover:underline ">
                      terms and conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white w-full border border-primary bg-primary hover:bg-transparent hover:text-primary focus:ring-4 focus:ring-primary font-medium rounded-md text-sm px-5 py-2.5 text-center "
              >
                Register new account
              </button>
            </form>
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-center space-x-3">
              <hr className="w-32 border border-gray-300"/>
              <div className="uppercase font-semibold">Or singup in with</div>
              <hr className="w-32 border border-gray-300"/>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <button className="border border-face w-52 rounded text-white bg-face hover:bg-transparent hover:text-face py-2.5">Facebook</button>
            <button className="border border-google w-52 rounded text-white bg-google hover:bg-transparent hover:text-google py-2.5">Google</button>
          </div>
          <p className="text-center mt-5">Already have an account.? <Link className="text-primary font-medium" to="/login">Login Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Registered;
