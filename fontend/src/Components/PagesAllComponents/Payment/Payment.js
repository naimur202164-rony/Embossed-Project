import React, { useState } from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import card3 from "../../../images/cash-on.png";
import card1 from "../../../images/credit-card.png";
import card2 from "../../../images/paypal.png";
import Payment1 from "./Payment1.js";
import Payment2 from "./Payment2.js";
import Payment3 from "./Payment3.js";


const Payment = () => {
  const [payment, setPayment] = useState("payment1");
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h1 className="text-primary">Shop</h1>
        <AiOutlineRight className="mx-2" />
        <h1>Payment</h1>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-12 gap-3 mt-20">
          <div className="col-span-8">
            <h1 className="text-lg font-medium bg-gray-300 py-2 pl-3">
              Select Payment Method
            </h1>
            <div className="flex mt-5">
              <div
                onClick={() => setPayment("payment1")}
                className=" flex justify-center flex-col  cursor-pointer rounded-md items-center h-32 w-44 border-2 border-gray-200"
              >
                <img src={card1} alt="" />
                <h1 className="mt-6"> Credit Card</h1>
              </div>

              <div
                onClick={() => setPayment("payment2")}
                className="flex justify-center flex-col items-center  cursor-pointer rounded-md h-32 w-44 mx-4 border-2 border-gray-200"
              >
                <img src={card2} alt="" />
                <h1 className="mt-11">Paypal</h1>
              </div>
              <div
                onClick={() => setPayment("payment3")}
                className="flex justify-center flex-col items-center h-32 w-44 cursor-pointer rounded-md border-2 border-gray-200"
              >
                <img src={card3} alt="" />
                <h1 className="mt-6">Cash on Delivery</h1>
              </div>
            </div>
            {payment === "payment1" && <Payment1 />}
            {payment === "payment2" && <Payment2 />}
            {payment === "payment3" && <Payment3 />}
          </div>
          <div className="col-span-4">
            <div>
              <h1 className="text-lg font-medium bg-gray-300 py-2 pl-3">
                Your Order
              </h1>
              <div className="border-2 shadow-lg  border-gray-200 px-5 py-5 rounded-md mt-5">
                <h1 className="border-b-2 text-xl font-semibold border-gray-200 pb-4">
                  ORDER SUMMARY
                </h1>
                <div className="border-b-2 border-gray-200 py-4">
                  <div>
                    <h1 className="flex justify-between items-center mt-2">
                      <span className="text-md font-medium">Beigh Knitted Shoes</span>
                      <span className="ml-10">x1</span>
                      <span>$84.00</span>
                    </h1>
                    <h1>Size: M</h1>
                  </div>
                  <div className="mt-4">
                    <h1 className="flex justify-between items-center mt-2">
                      <span className="text-md font-medium">Beigh Knitted Shoes</span>
                      <span className="ml-10">x1</span>
                      <span>$84.00</span>
                    </h1>
                    <h1>Size: M</h1>
                  </div>
                  <div className="mt-4">
                    <h1 className="flex justify-between items-center mt-2">
                      <span className="text-md font-medium">Beigh Knitted Shoes</span>
                      <span className="ml-10">x1</span>
                      <span>$84.00</span>
                    </h1>
                    <h1>Size: M</h1>
                  </div>
                  <h1 className="flex justify-between items-center mt-4">
                    <span className="text-md font-medium">SUBTOTAL</span>
                    <span>$140.00</span>
                  </h1>
                </div>
                <h1 className="flex justify-between items-center mt-2 border-b-2 border-gray-200 pb-4">
                  <span className="text-md font-medium">SHIPPING</span>
                  <span>FREE</span>
                </h1>
                <h1 className="flex justify-between items-center mt-2 border-b-2 border-gray-200 pb-4 mb-6">
                  <span className="text-xl font-semibold">TOTAL</span>
                  <span>$170.00</span>
                </h1>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;