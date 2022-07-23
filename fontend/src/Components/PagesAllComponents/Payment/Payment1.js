import React from 'react';
import img3 from "../../../images/payment-express.png";
import img2 from "../../../images/payment-master.png";
import img1 from "../../../images/payment-visa.png";
const Payment1 = () => {
    return (
      <div className="shadow-xl">
        <div className="mt-10 pb-8 px-10 border rounded-lg">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Credit Card</h1>
            <div className="flex items-center">
              <img src={img1} alt="" />
              <img className="mx-4" src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
          <form>
            <div>
              <label htmlFor="">Card Number <span className="text-primary">*</span></label>
              <br />
              <input
                className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                type="text"
                name=""
                placeholder="type card number"
                id=""
              />
            </div>
            <div className="mt-4">
              <label htmlFor="">Name on Card <span className="text-primary">*</span></label>
              <br />
              <input
                className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                type="text"
                name=""
                placeholder="type name on card"
                id=""
              />
            </div>
            <div className="md:flex">
              <div className="w-full mt-4">
                <label htmlFor="">Expiration Date <span className="text-primary">*</span></label> <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="date"
                  name=""
                  placeholder="Expiration Date"
                  id=""
                />
              </div>
              <div className="w-full md:ml-4 mt-4">
                <label htmlFor="">CVV <span className="text-primary">*</span></label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="number"
                  name=""
                  placeholder="type CVV"
                  id=""
                />
              </div>
            </div>
            <button className="bg-primary hover:bg-white uppercase text-white hover:text-primary border-2 border-primary font-semibold py-2 px-6 mt-6 rounded-md">
              PAY NOW
            </button>
          </form>
        </div>
      </div>
    );
};

export default Payment1;