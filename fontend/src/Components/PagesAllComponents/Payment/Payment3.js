import React from "react";
import cash from "../../../images/cash-on.png";

const Payment3 = () => {
  return (
    <div className="mt-10 px-10 shadow-lg border rounded-md py-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-bold">Cash On delivery</h1>
        <img src={cash} alt="" />
      </div>
      <p className="text-center">you can pay in cash to our courier when you</p>
      <p className="text-center">receive the goods at your doorstep.</p>
      <div className="flex justify-center mt-3">
        <button className="bg-primary text-white hover:bg-white  hover:text-primary border hover:border-primary font-semibold py-2 px-4 mb-5 rounded-md">
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};

export default Payment3;