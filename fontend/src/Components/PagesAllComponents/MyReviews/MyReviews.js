import React from 'react';
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import keyboard from "../../../images/keyboard.png";
import MyAccountSidebar from '../MyAccountPages/Sidebar/MyAccountSidebar';

const MyReviews = () => {
    return (
        <div className="container mb-20">
        <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="mx-2 text-primary" />
        <h6 className="text-primary">My Account</h6>
        <AiOutlineRight className="mx-2" />
        <h6>My Reviews</h6>
      </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 mt-4">
            <MyAccountSidebar/>
          </div>
          <div className="col-span-9 mt-9">
            <div className="shadow-lg rounded-md border px-4 py-5">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center justify-center">
                  <div className="mr-10">
                    <img className="h-16" src={keyboard} alt="" />
                  </div>
                  <div>
                    <h1 className="font-semibold mb-2">
                      Herschel Leather Duffle Bag
                    </h1>
                    <p>$55</p>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold mb-2">Order Number</h1>
                  <p>798W4E574</p>
                </div>
                <div>
                  <h1 className="font-semibold mb-2">Purchased</h1>
                  <p className="text-green-400">16 Dec 2020</p>
                </div>
                <div>
                  <Link to="/myAccount/reviewsDetails">
                  <button className=" text-primary hover:bg-primary  hover:text-white border border-primary font-semibold py-2 px-4 mx-4 rounded-md flex items-center">
                    Write Review
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyReviews;