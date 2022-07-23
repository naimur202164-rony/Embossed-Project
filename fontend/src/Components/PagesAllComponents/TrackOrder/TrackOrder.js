import React from 'react';
import { AiOutlineCheck, AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { BsExclamationLg } from "react-icons/bs";

const TrackOrder = () => {
    return (
      <div className="container mb-20">
        <div className="flex items-center mt-4">
          <AiOutlineHome className="text-primary" />
          <AiOutlineRight className="text-gray-400 mx-2"/>
          <h6>Tracking Order</h6>
        </div>

        <div className="shadow-lg rounded-md border mt-10 px-10 py-10">
          <div>
            <h1 className="font-semibold text-3xl">ORDER TRACKING</h1>
          </div>
          <div className="mt-4">
            <label htmlFor="">Order ID *</label> <br />
            <input
              className="w-1/3 mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-primary"
              type="search"
              name=""
              placeholder="search"
              id=""
            />
          </div>
          <button className="bg-primary hover:bg-primary uppercase text-white font-semibold py-3 px-10 my-8 border-none rounded-md">
            TRACK ORDER
          </button>
          <div className="bg-green-600 py-2">
            <h1 className="text-center text-white uppercase text-2xl font-semibold">
              DELIVERED
            </h1>
          </div>
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="absolute border-opacity-20 border-gray-800 h-full border-2 border-dashed"
                style={{ left: "50%" }}
              ></div>
              <div className="mb-8 flex justify-around items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    <AiOutlineCheck />
                  </h1>
                </div>
                <div className="order-1 border-solid border-2 border-gray-200 shadow-md w-5/12 px-6 py-4 text-sm leading-snug tracking-wide text-opacity-100">
                  <p className="font-semibold text-base	">01. Order Placement</p>
                  <p className="">30 january, 2021, 8:37 AM</p>
                </div>
              </div>

              <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    <AiOutlineCheck />
                  </h1>
                </div>

                <div className="order-1 border-solid border-2 border-gray-200  shadow-md w-5/12 px-6 py-4">
                  <p className="font-semibold text-base	">02. Processing</p>
                  <p className="">30 january, 2021, 8:37 AM</p>
                </div>
              </div>

              <div className="mb-8 flex justify-around items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    <AiOutlineCheck />
                  </h1>
                </div>
                <div className="order-1 border-solid border-2 border-gray-200 shadow-md w-5/12 px-6 py-4">
                  <p className="font-semibold text-base	">03. Shipping</p>
                  <p className="">30 january, 2021, 8:37 AM</p>
                </div>
              </div>

              <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-yellow-400 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    <BsExclamationLg />
                  </h1>
                </div>
                <div className="order-1 border-solid border-2 border-gray-200  shadow-md w-5/12 px-6 py-4">
                  <p className="font-semibold text-base	">04. delivery</p>
                  <p className="">30 january, 2021, 8:37 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TrackOrder;