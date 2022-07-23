import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="text-gray-400 mx-2"/>
        <h1>Forgot Password</h1>
      </div>
      <div className="flex justify-center items-center py-16">
          <div className="shadow-lg rounded-md border px-10 py-10">
              <h3 className="uppercase text-3xl font-medium">REset password</h3>
              <p>Please enter your email address below to receive a link.</p>
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
              <button className="border border-primary text-white bg-primary hover:bg-transparent hover:text-primary px-7 uppercase font-medium rounded-md py-2">Reset My password</button>
          </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
