import React from 'react';
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import tv from "../../../images/tv.png";
import MyAccountSidebar from '../MyAccountPages/Sidebar/MyAccountSidebar';
const MyOrderHistory = () => {
    return (
      <div className="container mb-20">
        <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h6 className="text-primary">My Account</h6>
        <AiOutlineRight className="mx-2" />
        <h6>Order History</h6>
      </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 mt-4">
            <MyAccountSidebar/>
          </div>
          <div className="col-span-9 mt-9">
            <div>
              <div className="border-separate border border-gray-200 p-5 shadow-lg rounded-md">
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <img className="w-20 mr-5" src={tv} alt="" />
                      <img className="w-20" src={tv} alt="" />
                    </div>
                    <div>
                      <Link to="/myAccount/orderDetails">
                      <button className="hover:bg-primary hover:text-white  text-primary border border-primary font-semibold py-1 transform duration-500 px-5 rounded-sm">
                        View Order
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className='my-2 font-medium'>Order Number</p>
                    <p>23E34RT3</p>
                  </div>
                  <div>
                    <p className='my-2 font-medium'>Purchased</p>
                    <p>01 March 2021</p>
                  </div>
                  <div>
                    <p className='my-2 font-medium'>Quantity</p>
                    <p>x3</p>
                  </div>
                  <div>
                    <p className='my-2 font-medium'>Total</p>
                    <p>$120</p>
                  </div>
                  <div className="mr-14">
                    <p className='my-2 font-medium'>Status</p>
                    <p className="text-red-400">Cancelled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyOrderHistory;