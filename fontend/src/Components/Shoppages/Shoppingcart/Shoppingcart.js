import React from "react";
import {
  AiOutlineHome,
  AiOutlineRight
} from "react-icons/ai";
import headphone3 from "../../../images/headphone-4.png";
import iphone from "../../../images/iphone.png";
const Shoppingcart = () => {
  return (
    <div className="container pb-20">
      <div className="flex items-center mt-4 mb-6">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="text-primary mx-2" />
        <h6 className="text-primary">Shop</h6>
        <AiOutlineRight className="text-gray-500 mx-2" />
        <h6>Shopping cart</h6>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
        <div>
          <div className="flex justify-around bg-gray-200 py-2">
            <div className="">
              <h3 className="font-medium">Product</h3>
            </div>
            <div className="flex space-x-24">
              <h3 className="font-medium -mr-16">Quantity</h3>
              <h3 className="font-medium pl-20">Total Price</h3>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-2">
            <div className="col-span-9">
              <div className="grid grid-cols-1  gap-2">
                <div className="flex justify-between mt-5 border-gray-300 rounded-md shadow-lg border-2 ">
                  <div className="flex items-center">
                    <div className="bg-white ">
                      <img
                        src={headphone3}
                        alt=""
                        className="object-contain h-36 w-36 pt-5 pb-5"
                      />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-medium uppercase">
                        Xb450Ap extra bass headphones
                      </h5>
                      <p className="text-primary font-medium ">$45.00</p>
                      <p>Size : M</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <div className="flex space-x-16 mr-10">
                        <div class="flex">
                          <span className="border-gray-700 border px-3 flex items-center">
                            <i class="fa-solid fa-minus"></i>
                          </span>
                          <input
                            class="px-2 border text-center w-10"
                            type="text"
                            value="1"
                          />
                          <span className="border-gray-700 px-3 flex items-center border">
                            <i class="fa-solid fa-plus"></i>
                          </span>
                        </div>
                        <p className="text-2xl pt-1 text-primary">$45.00</p>
                        <div className="pt-2">
                          <i class="fa-solid fa-trash-can"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-1  gap-2">
            <div className="flex mt-5 justify-between border-gray-300 rounded-md shadow-lg border-2 ">
              <div className="flex items-center">
                <div className="bg-white ">
                  <img
                    src={iphone}
                    alt=""
                    className="object-contain h-36 w-36 pt-5 pb-5"
                  />
                </div>
                <div className="space-y-1">
                  <h5 className="font-medium uppercase">
                    iphone 11 pro max xr
                  </h5>
                  <p className="text-primary font-medium ">$499.00</p>
                  <p>Size : M</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <div className="flex space-x-16 mr-10">
                    <div class="flex">
                      <span className="border-gray-700 border px-3 flex items-center">
                        <i class="fa-solid fa-minus"></i>
                      </span>
                      <input
                        class="px-2 border text-center w-10"
                        type="text"
                        value="1"
                      />
                      <span className="border-gray-700 px-3 flex items-center border">
                        <i class="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <p className="text-2xl pt-1 text-primary">$499.00</p>
                    <div className="pt-2">
                      <i class="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-span-3">
          <div className="border-gray-400 border p-5 rounded-md">
            <h3 className="text-2xl font-medium mb-5">Order Summary</h3>
            <div className="divide-y divide-gray-300 space-y-5">
              <div className="space-y-2">
              <div className="flex justify-between">
                <p >Subtotal</p>
                <p>$45.00</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery</p>
                <p>$15.00</p>
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p>10%</p>
              </div>
              </div>
              <div className="flex justify-between pt-1">
                <p className="font-bold text-xl ">Total</p>
                <p className="font-bold">$45.00</p>
              </div>
            </div>
            <div className="flex px-1 pt-5">
              <input className="form-control w-44 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary" type="number" name="" placeholder="Enter Coupon" id="" />
              <button className="border-primary rounded-r-md text-white bg-primary hover:bg-transparent hover:text-primary border px-2">APPLY</button>
            </div>
            <button className="border border-primary mt-8 mb-3 py-2 px-7 text-white bg-primary hover:bg-transparent hover:text-primary font-bold rounded-md ">Process To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoppingcart;
