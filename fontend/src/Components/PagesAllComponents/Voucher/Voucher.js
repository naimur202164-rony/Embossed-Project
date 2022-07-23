import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import MyAccountSidebar from "../MyAccountPages/Sidebar/MyAccountSidebar.js";

const Voucher = () => {
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h6 className="text-primary">My Account</h6>
        <AiOutlineRight className="mx-2" />
        <h6>Edit Payment Method</h6>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 mt-4">
          <MyAccountSidebar />
        </div>
        <div className="col-span-9 mt-9">
          <div className="shadow-lg rounded-md border px-5 pb-52">
            <div className=" pt-5">
              <h1 className="text-lg font-semibold">My Vaucher</h1>
              <p>There are no vouchers yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
