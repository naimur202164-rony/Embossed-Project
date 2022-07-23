import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import headphone from "../../../images/headphone-3.png";
import MyAccountSidebar from "../MyAccountPages/Sidebar/MyAccountSidebar";
import RatingStar from "./RatingStar";

const ReviewsDetails = () => {
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h6 className="text-primary">My Account</h6>
        <AiOutlineRight className="mx-2" />
        <h6>Reviews Details</h6>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 mt-4">
          <MyAccountSidebar />
        </div>
        <div className="col-span-9 mt-9">
          <div className="shadow-lg rounded-md border px-4 py-5">
            <h3 className="font-semibold text-lg">Write Review</h3>
            <div className="flex my-5">
              <div>
                <img
                  className="object-contain h-20 -ml-3 w-24"
                  src={headphone}
                  alt=""
                />
              </div>
              <div className="flex justify-between w-width items-center">
                <div className="">
                  <h4 className="font-semibold">Sound Intone 165 Earphone</h4>
                  <p className="text-gray-600">No Warranty Available</p>
                </div>
                <div>
                  <p className="font-semibold">Purchased</p>
                  <p>16 Dec 2020</p>
                </div>
              </div>
            </div>
            <div className="py-5 flex justify-between w-11/12">
              <div>
                <p className="font-semibold">Rate and review your product</p>
                <div className="flex py-4">
                  {/* rating start*/}
                  <RatingStar />
                  <p className="-mt-0.5 ml-2">Good</p>
                  {/* rating end */}
                </div>
              </div>
              <div>
                <p className="font-semibold">Rate and review your seller</p>

                <div className="flex py-4">
                  {/* rating start*/}
                  <RatingStar />
                  <p className="-mt-0.5 ml-2">Good</p>
                  {/* rating end */}
                </div>
              </div>
            </div>
            <div className="py-3 flex justify-between w-11/12">
              <label htmlFor="message">
                <span className="font-semibold">Review Details</span>
                <br />
                <textarea
                  rows="2"
                  type="message"
                  placeholder="Please share your feedback about the product: Was the product as described? What is the quality like?"
                  className="w-width1 text-sm text-gray-300 border border-gray-300"
                />
              </label>
              <div>
                <div>
                  <p className="font-semibold">Rate and review your seller</p>

                  <div className="flex py-4">
                    {/* rating start*/}
                    <RatingStar />
                    <p className="-mt-0.5 ml-2">Good</p>
                    {/* rating end */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-28 border-dashed border-2 border-primary cursor-pointer relative mt-2">
            <div className="absolute mt-3">
                <BsFillImageFill className="text-3xl ml-10 mb-3"/>
              <p className="ml-4 text-xs">Upload Photo</p>
              </div>
              <input type="file" className="h-20 w-28 opacity-0 cursor-pointer"/>
              
            </div>
            <button className="border border-primary py-2.5 px-5 font-semibold bg-primary text-white rounded-md hover:bg-transparent hover:text-primary my-5">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDetails;
