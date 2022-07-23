import React from 'react';
import paypal from "../../../images/paypal.png";
const Payment2 = () => {
    return (
      <div className='mt-10 px-10 border shadow-lg py-5 rounded-md'>
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-lg font-bold">Paypal</h1>
          <img src={paypal} alt="" />
        </div>
        <h1 className="text-center">Payment using your paypal</h1>
        <div className="flex justify-center">
          <button className="bg-primary text-white hover:bg-white  hover:text-primary border hover:border-primary font-semibold py-2 px-4 mt-3 mb-5 rounded-md">
            PAY NOW
          </button>
        </div>
      </div>
    );
};

export default Payment2;