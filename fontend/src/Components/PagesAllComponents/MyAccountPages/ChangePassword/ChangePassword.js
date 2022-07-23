import React, { useState } from "react";
import {
  AiFillEye, AiOutlineHome,
  AiOutlineRight
} from "react-icons/ai";
import MyAccountSidebar from "../Sidebar/MyAccountSidebar";
const ChangePassword = () => {
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const [passwordShown3, setPasswordShown3] = useState(false);
      const togglePasswordVisibility = (e) => {
          if (e==="password1") {
              setPasswordShown1(passwordShown1 ? false : true);
              
          }
          if (e==="password2") {
              setPasswordShown2(passwordShown2 ? false : true);
              
          }
          if (e==="password3") {
              setPasswordShown3(passwordShown3 ? false : true);
              
          }
      };
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
          <AiOutlineHome className="text-primary" />
          <AiOutlineRight className="mx-2 text-primary" />
          <h6 className="text-primary">My Account</h6>
          <AiOutlineRight className="mx-2" />
          <h6>Change Password</h6>
        </div>
      <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3 mt-4">
        {/* sidebar start */}
            <MyAccountSidebar/>
          {/* sidebar end */}
        </div> 
      <div className="col-span-9 mt-9">
      <div className="shadow-lg border rounded-md px-7 py-5">
      <h1 className="font-medium text-xl">Change Password</h1>
        <form>
          <div className="mt-4 relative">
            <label htmlFor="">Current Password</label> <br />
            <input
              className="w-1/2 mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
              type={passwordShown1 ? "text" : "password"}
              name="password1"
              placeholder="Current Password"
              id=""
            />
            <AiFillEye
              className="absolute left-96 bottom-3 cursor-pointer"
              onClick={() => togglePasswordVisibility("password1")}
            />
          </div>
          <div className="mt-4 relative">
            <label htmlFor="">New Password</label> <br />
            <input
              className="w-1/2 mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
              type={passwordShown2 ? "text" : "password"}
              name="password2"
              placeholder="New Password"
              id=""
            />
            <AiFillEye
              className="absolute left-96 bottom-3 cursor-pointer"
              onClick={() => togglePasswordVisibility("password2")}
            />
          </div>
          <div className="mt-4 relative">
            <label htmlFor="">Retype Password</label> <br />
            <input
              className="w-1/2 mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
              type={passwordShown3 ? "text" : "password"}
              name="password3"
              placeholder="Retype Password"
              id=""
            />
            <AiFillEye
              className="absolute left-96 bottom-3 cursor-pointer"
              onClick={() => togglePasswordVisibility("password3")}
            />
          </div>
          <button className="bg-myColor hover:bg-myColor uppercase text-white font-semibold py-3 px-4 mt-8 border-none rounded-md">
            SAVE CHANGES
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ChangePassword;
