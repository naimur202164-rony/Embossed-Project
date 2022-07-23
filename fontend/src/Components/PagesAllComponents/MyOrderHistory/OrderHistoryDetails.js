import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import headphone from "../../../images/headphone-3.png";
import MyAccountSidebar from "../MyAccountPages/Sidebar/MyAccountSidebar";
const OrderHistoryDetails = () => {
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h6 className="text-primary">My Account</h6>
        <AiOutlineRight className="mx-2" />
        <h6>Order Details</h6>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 mt-4">
          <MyAccountSidebar />
        </div>
        <div className="col-span-9 mt-9">
          <div className="shadow-lg rounded-md border py-5 px-5">
            <h3 className="font-semibold text-lg">Order Details</h3>
            <div className="flex justify-between mt-6 mb-8">
              <div className="flex justify-between w-4/6 ">
                <div className="">
                  <p className="font-semibold">Sold By</p>
                  <p className="text-primary">EMBOSSED</p>
                </div>
                <div className="">
                  <p className="font-semibold">Order Number</p>
                  <p className="text-sm">45478923ER</p>
                </div>
                <div className="">
                  <p className="font-semibold">Shipped Date</p>
                  <p className="text-sm">01 March 2022</p>
                </div>
              </div>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white rounded-md px-4">
                Write A Review
              </button>
            </div>
            <div className="">
              {/* time line start */}
              <div class=" mx-auto w-11/12 h-full">
                <div class="relative wrap overflow-hidden p-10 h-full">
                  <div className="ml-4">
                    <div class="border-2-2 absolute border border-[#4cae50] w-10/12"></div>
                  </div>
                  <div>
                    <div className="flex justify-between pl-4 mb-3">
                      <div className="">
                        <div class="z-20 flex items-center -mt-2  order-1 bg-[#4cae50] shadow-xl w-5 h-5 rounded-full"></div>
                        <span>Processing</span>
                      </div>
                      <div className="">
                        <div class="z-20 flex items-center -mt-2  order-1 bg-[#4cae50] shadow-xl w-5 h-5 rounded-full"></div>
                        <span className="-ml-5">Shipped</span>
                      </div>
                      <div className="">
                        <div class="z-20 flex items-center -mt-2  order-1 bg-[#4cae50] shadow-xl w-5 h-5 rounded-full"></div>
                        <span className="-ml-8">Delivered</span>
                      </div>
                    </div>

                    <div class="order-1 bg-gray-50 border rounded-lg shadow-xl w-full px-6 py-4">
                      <h3 class="mb-3 font-bold text-gray-800 text-xl">
                        Lorem Ipsum
                      </h3>
                      <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* time line end */}
              <div className="flex my-7">
                <div>
                  <img
                    className="object-contain h-20 -ml-3 w-24"
                    src={headphone}
                    alt=""
                  />
                </div>
                <div className="flex justify-between w-full items-center">
                  <div className="">
                    <h4 className="font-semibold">Sound Intone 165 Earphone</h4>
                    <p className="text-gray-600">No Warranty Available</p>
                  </div>
                  <div className="font-semibold">$50</div>
                  <div className="font-semibold">Qty: 1</div>
                  <div className="">
                    <h3 className="text-primary font-semibold">Return</h3>
                    <p className="text-gray-500">Unit 24-sep-2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="shadow-lg px-5 py-5 border rounded-md">
              <h3 className="py-2 text-lg font-medium">Shipping Address</h3>
              <div className="mb-2">
                <p className="font-medium">Ralph Bohner</p>
                <p>
                  3891 Ranchview Dr. Richardson, Califora <br /> (123) 456-789
                </p>
              </div>
            </div>
            <div className="shadow-lg px-5 py-5 border rounded-md">
              <h3 className="py-2 text-lg font-medium">Billing Address</h3>
              <div className="mb-2">
                <p className="font-medium">Ralph Bohner</p>
                <p>
                  3891 Ranchview Dr. Richardson, Califora <br /> (123) 456-789
                </p>
              </div>
            </div>
            <div className="shadow-lg px-5 border rounded-md">
              <h3 className="py-4 text-2xl font-semibold">Total Summary</h3>
              <div className="divide divide-y-2 ">
                <div>
                  <div className="mb-1 flex justify-between">
                    <p className="font-medium">Subtotal</p>
                    <p>$50</p>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <p className="font-medium">Shipping Fee</p>
                    <p>$30</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p>Total</p>
                    <p>$80</p>
                  </div>
                  <p>Paid by Cash on Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryDetails;
