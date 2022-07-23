import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import headphone from "../../../images/headphone-3.png";
import MyAccountSidebar from "../MyAccountPages/Sidebar/MyAccountSidebar";
const ReturnOrderDetails = () => {
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h6 className="text-primary">My Account</h6>
        <AiOutlineRight className="mx-2" />
        <h6>Return Order Details</h6>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 mt-4">
          <MyAccountSidebar />
        </div>
        <div className="col-span-9 mt-9">
          <div className="shadow-lg rounded-md px-5 py-5 border">
            <h2 className="text-lg font-semibold pb-5">Return Request</h2>
            <div className="w-60">
              <div className="flex font-semibold justify-between">
                <p>Sold By</p>
                <p>Order Number</p>
              </div>
              <div className="flex justify-between pt-1">
                <p className="text-primary font-medium">EMBOSSED</p>
                <p>8973ER3463</p>
              </div>
            </div>
            <div className="flex my-5">
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
                  <label className="text-sm text-gray-500" htmlFor="">
                    Select A Reason <span className="text-primary">*</span>
                    <br />
                    <select className="rounded-md focus:outline-none focus:ring-0 focus:ring-primary">
                      <option className="font-semibold" disabled value="">
                        Select A Reason
                      </option>
                      <option value="">Deactive</option>
                      <option value="">Not as advertised</option>
                      <option value="">Wrong/Fake item</option>
                      <option value="">Missing accessories</option>
                      <option value="">Wrong size</option>
                      <option value="">Damaged</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-semibold py-3">Payment Method</p>
              <div className="flex space-x-2.5">
                <input className="ml-1.5 mt-1 focus:outline-none focus:ring-0 text-none focus:text-primary cursor-pointer border border-primary" type="radio" name="" id="" />
                <div>
                  <p className="text-gray-600 text-md">Refund By Credit Card</p>
                  <p className="text-gray-600 text-md">
                    Money will be return your Credit Card That you used for
                    purchased
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-semibold py-3">Slect Shipment Option</p>
              <div className="">
                <form>
                   {" "}
                  <input
                    type="radio"
                    id="html"
                    className="focus:outline-none focus:ring-0 text-none focus:text-primary cursor-pointer border border-primary"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label htmlFor="html">
                    <span className="text-gray-600 text-md">Courier Pick Up</span>
                  </label>
                  <br />
                   {" "}
                  <input
                    type="radio"
                    id="css"
                    className="focus:outline-none focus:ring-0 focus:text-primary cursor-pointer border border-primary"
                    name="fav_language"
                    value="CSS"
                  />
                   {" "}
                  <label htmlFor="css">
                    {" "}
                    <span className="text-gray-600 text-md">Drop Off</span>
                  </label>
                  <br />
                </form>
              </div>
              <div className="mt-3">
                <label htmlFor="message">
                  <span className="text-md text-gray-600">Additional Information (Optional)</span>
                </label>
                <textarea
                  type="message"
                  rows="2"
                  placeholder="Example: wrong size"
                  className="w-full"
                ></textarea>
              </div>
              <div className="py-2.5">
                <label htmlFor="">
                <input type="checkbox" className="focus:ring-0 focus:text-primary cursor-pointer border border-primary" name="" id="" />
                <span> I have Read and accepted the <span className="text-primary">Return Policy</span> of EMBOSSED</span>
                </label>
              </div>
              <button className="bg-primary text-white px-5 py-2.5 mt-3 mb-2 hover:bg-transparent hover:text-primary rounded-md font-semibold uppercase border border-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnOrderDetails;
