import React from "react";
import {
  AiFillGift,
  AiOutlineHeart
} from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import avatar from "../../../../images/cvphoto.png";
const MyAccountSidebar = () => {
  return (
    <div>
      <div className="flex shadow-lg py-4 px-3 bg-white border rounded-lg items-center my-5">
        <img
          className="mr-4 w-14 border border-gray-400 ring-2 ring-offset-2 ring-primary rounded-full"
          src={avatar}
          alt=""
        />
        <div>
          <h1>Hello,</h1>
          <h1 className="font-semibold text-xl">Ashraful Islam</h1>
        </div>
      </div>
      <div className="divide-y bg-white shadow-lg border px-4 py-5 rounded-lg divide-gray-300 space-y-5">
        <div>
          <div className="flex items-center group">
            <FaRegAddressCard className="group-hover:text-primary cursor-pointer font-medium text-xl" />
            <Link
              to="/myAccount"
             
            >
              <h1 className="ml-2 group-hover:text-primary cursor-pointer text-xl font-medium">Manage My Account</h1>
            </Link>
          </div>
          <div className="ml-7 mt-1">
            <Link
              to="/myAccount/profileInfo"
            >
              <h1 className="mt-1 hover:text-primary cursor-pointer">
              Profile Information
              </h1>
            </Link>
            <Link to="/myAccount/manageAddress">
            <h1 className="mt-1 hover:text-primary cursor-pointer">
              Manage Address
            </h1>
            </Link>
            <Link to="/myAccount/changePassword">
            <h1 className="mt-1 hover:text-primary cursor-pointer">
              Change Password
            </h1>
            </Link>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex items-center group">
            <AiFillGift className="group-hover:text-primary cursor-pointer text-xl" />
            <Link to="/myAccount/myOrderHistory">
            <h1 className="ml-2 group-hover:text-primary cursor-pointer text-xl font-medium">
              My Order History
            </h1>
            </Link>
          </div>
          <div className="ml-7">
            <Link to="/myAccount/myReturns">
            <h1 className="mt-1 hover:text-primary cursor-pointer">
              My Returns
            </h1>
            </Link>
            <Link to="/myAccount/orderCancel">
            <h1 className="mt-1 hover:text-primary cursor-pointer">
              My Cancellations
            </h1>
            </Link>
            <Link to="/myAccount/myReviews">
            <h1 className="mt-1 hover:text-primary cursor-pointer">
              My Reviews
            </h1>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center pt-5 group">
            <MdPayment className="group-hover:text-primary cursor-pointer text-xl" />
            <Link to="/myAccount/paymentMethods">
            <h1 className="ml-2 group-hover:text-primary cursor-pointer text-xl font-medium">
              Payments Methods
            </h1>
            </Link>
          </div>
          <div className="ml-7 mt-1">
            <Link to="/myAccount/payment">
            <h1 className="hover:text-primary cursor-pointer">Voucher</h1>
            </Link>
          </div>
        </div>
        <div className="flex items-center pt-5 group">
          <AiOutlineHeart className="group-hover:text-primary cursor-pointer text-xl" />
          <Link to="/myAccount/wishlist">
          <h1 className="ml-2 group-hover:text-primary cursor-pointer text-xl font-medium">
            My Wishlist
          </h1>
          </Link>
        </div>
        <div className="flex items-center py-5 group">
          <CgLogOff className="group-hover:text-primary cursor-pointer text-xl" />
          <Link to="/login">
          <h1 className="ml-2 group-hover:text-primary cursor-pointer text-xl font-medium">
            Log Out
          </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAccountSidebar;
