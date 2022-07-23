import React from 'react';
import { AiOutlineCheck, AiOutlineHome, AiOutlineRight } from "react-icons/ai";
const OrderComplete = () => {
    return (
        <div className="container mb-24">
      <div className="text-center">
        <div className="flex items-center mt-4">
          <AiOutlineHome className="text-primary" />
          <AiOutlineRight className="text-gray-400 mx-2" />
         
          <h1>Order complete</h1>
        </div>
        <div className="">
        <div className="flex justify-center  items-center h-40">
          <div className="flex justify-center  items-center text-5xl bg-primary rounded-full h-16 w-16 text-white text-center">
            <AiOutlineCheck />
          </div>
        </div>
        <h1 className="uppercase text-2xl my-3 font-semibold">
          YOUR ORDER IS COMPLETED!
        </h1>
        <p>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours.
        </p>
        <p>
          You will receive an email confirmation when your order is completed.
        </p>
        <button className="bg-primary text-white hover:bg-white  hover:text-primary border hover:border-primary font-semibold py-2 px-4 mt-5 rounded-md">
          CONTINUE SHOPPING
        </button>
      </div>
      </div>
      </div>
    );
};

export default OrderComplete;