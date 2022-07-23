import React from "react";
import {
  AiOutlineHome,
  AiOutlineRight
} from "react-icons/ai";
import MyAccountSidebar from "../Sidebar/MyAccountSidebar";
import MyAccountDetails from "./MyAccountDetails";

const MyAccount = () => {
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2" />
        <h6>My Account</h6>
      </div>
      <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3 mt-4">
        {/* sidebar start */}
            <MyAccountSidebar/>
          {/* sidebar end */}
        </div>   
        <div className="col-span-9 mt-9">
          <MyAccountDetails />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
