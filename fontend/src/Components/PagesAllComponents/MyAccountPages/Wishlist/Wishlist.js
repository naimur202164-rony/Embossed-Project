import React from "react";
import {
  AiOutlineHome,
  AiOutlineRight,
  AiOutlineShoppingCart
} from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import bag from "../../../../images/bag.png";
import keyboard from "../../../../images/keyboard.png";
import MyAccountSidebar from "../Sidebar/MyAccountSidebar";
const Wishlist = () => {
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h6 className="text-primary">My Account</h6>
        <AiOutlineRight className="mx-2" />
        <h6>Wishlist</h6>
      </div>
      <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3 mt-4">
        {/* sidebar start */}
            <MyAccountSidebar/>
          {/* sidebar end */}
        </div> 
        <div className="col-span-9 mt-9">
          <div className="shadow-lg border rounded-md px-7 py-10">
            <div className="flex items-center justify-between border-2 border-gray-200 p-5">
              <div className="flex items-center justify-center">
                <div className="mr-10">
                  <img className="h-16" src={bag} alt="" />
                </div>
                <div>
                  <p>CASUAL USB CHARGING LAPTOP BACKPACKS</p>
                  <p>
                    Availability:{" "}
                    <span className="text-green-600">In Stock</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <h1 className="text-primary font-bold text-lg">$45.00</h1>
                <button className="bg-primary text-white hover:bg-white  hover:text-primary border border-gray-200 font-semibold py-2 px-4 mx-4 rounded-md flex items-center">
                  <AiOutlineShoppingCart className="mr-2" />{" "}
                  <span>Add to Cart</span>
                </button>
                <RiDeleteBin6Line className="text-xl" />
              </div>
            </div>
            <div className="flex items-center justify-between border-2 border-gray-200 p-5 mt-5">
              <div className="flex items-center justify-center">
                <div className="mr-10">
                  <img className="h-16" src={keyboard} alt="" />
                </div>
                <div>
                  <p>HV-KB585GCM WIRELESS KEYBOARD & MOUSE</p>

                  <p>
                    Availability:{" "}
                    <span className="text-red-500">Out of Stock</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <h1 className="text-primary font-bold text-lg">$45.00</h1>
                <button className="bg-red-400 text-white hover:bg-white  hover:text-primary border border-gray-200 font-semibold py-2 px-4 mx-4 rounded-md flex items-center">
                  <AiOutlineShoppingCart className="mr-2" />{" "}
                  <span>Add to Cart</span>
                </button>
                <RiDeleteBin6Line className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
