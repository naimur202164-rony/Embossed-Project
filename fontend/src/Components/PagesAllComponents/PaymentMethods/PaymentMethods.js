import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import express from "../../../images/a-express.png";
import MyAccountSidebar from "../MyAccountPages/Sidebar/MyAccountSidebar";

const PaymentMethods = () => {
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h6 className="text-primary">My Account</h6>
        <AiOutlineRight className="mx-2" />
        <h6>Payment Methods</h6>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 mt-4">
          <MyAccountSidebar />
        </div>
        <div className="col-span-9 mt-9">
          <div className="shadow-lg border px-5 py-7">
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center justify-center">
                <div className="mr-10">
                  <img className="h-10" src={express} alt="" />
                </div>
                <div>
                  <h1 className="font-semibold mb-2">Method</h1>
                  <p>American Express</p>
                </div>
              </div>
              <div>
                <h1 className="font-semibold mb-2">Last Four</h1>
                <p>0022</p>
              </div>
              <div>
                <h1 className="font-semibold mb-2">Expires</h1>
                <p>01/22</p>
              </div>
              <div>
                <h1 className="font-semibold mb-2">Defalut</h1>
                <p>Yes</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="text-primary bg-white hover:bg-primary w-20 text-center  hover:text-white border border-primary font-semibold py-2  mx-1 rounded-md">
                  Edit
                </button>

                <button className="text-primary bg-white hover:bg-primary w-20 text-center  hover:text-white border border-primary font-semibold py-2  mx-1 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;