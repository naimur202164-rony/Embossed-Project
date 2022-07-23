import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import Accordion from "./Accordion";
const FAQ = () => {
  return (
    <div className="container mb-20">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="text-gray-400 mx-2"/>
        <h1>Forgot Password</h1>
      </div>
      <div className="">
          <div className="mt-7 ">
              <h2 className="text-3xl font-medium">F.A.Q</h2>
              <p className="py-4">Can't find the answer you're looking for? We've shared some <br/> of your most frequently asked questions to help you out!</p>
          </div>
          <div className="mt-3">
              {/* Accordion start */}
              <Accordion/>
          </div>
      </div>
    </div>
  );
};

export default FAQ;
