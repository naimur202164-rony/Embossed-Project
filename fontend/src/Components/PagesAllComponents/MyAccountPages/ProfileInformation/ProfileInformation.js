import React from "react";
import {
  AiOutlineHome,
  AiOutlineRight
} from "react-icons/ai";
import MyAccountSidebar from "../Sidebar/MyAccountSidebar";
const ProfileInformation = () => {
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h6 className="text-primary">My Account</h6>
        <AiOutlineRight className="mx-2" />
        <h6>Profile Information</h6>
      </div>
      <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3 mt-4">
        {/* sidebar start */}
            <MyAccountSidebar/>
          {/* sidebar end */}
        </div>  
        
        <div className="col-span-9 mt-9">
          <div className="px-7 py-5 shadow-lg border rounded-md">
            <h1 className="font-medium text-xl">Profile Information</h1>
            <form>
              <div className="md:flex">
                <div className="w-full mt-4">
                  <label htmlFor="">First Name *</label> <br />
                  <input
                    className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="First Name"
                    id=""
                  />
                </div>
                <div className="w-full md:ml-4 mt-4">
                  <label htmlFor="">Last Name *</label>
                  <br />
                  <input
                    className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="Last Name"
                    id=""
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="w-full mt-4">
                  <label htmlFor="">Birthday *</label> <br />
                  <input
                    className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                    type="date"
                    name=""
                    placeholder="Birthday"
                    id=""
                  />
                </div>
                <div className="w-full md:ml-4 mt-4">
                  <label htmlFor="">Gender *</label>
                  <br />
                  <select
                    className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                    name="gender"
                  >
                    <option value="none" selected>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
              <div className="md:flex">
                <div className="w-full mt-4">
                  <label htmlFor="">Email *</label> <br />
                  <input
                    className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                    type="email"
                    name=""
                    placeholder="Email"
                    id=""
                  />
                </div>
                <div className="w-full md:ml-4 mt-4">
                  <label htmlFor="">Phone Number *</label>
                  <br />
                  <input
                    className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                    type="number"
                    name=""
                    placeholder="Phone Number
"
                    id=""
                  />
                </div>
              </div>
              <button className="bg-primary hover:bg-transparent hover:text-primary uppercase text-white font-semibold py-3 px-10 mt-8 border border-primary rounded-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
