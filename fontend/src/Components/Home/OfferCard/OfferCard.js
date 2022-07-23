import React from "react";
import sofa1 from "../../../images/sofa-1.png";
import sofa2 from "../../../images/sofa-2.png";
const OfferCard = () => {
  return (
    <div className="container">
    <div className=" grid grid-cols-2 gap-3">
      <div className="flex justify-between items-center h-60 group cursor-pointer bg-[#fbe3e4] p-8 rounded-md">
        <div className="mr-14 ">
          <h1 className="text-primary text-2xl">30% offer</h1>
          <h1 className="text-2xl font-medium">Free Shipping</h1>
          <p>Attractive Natural Furniture</p>
          <button className="text-white bg-primary hover:bg-transparent hover:text-primary border border-primary px-4 py-2 rounded-md mt-5">Shop Now</button>
        </div>
        <div>
          <img className="h-48 w-56 group-hover:scale-110 transform duration-1000" src={sofa1} alt="" />
        </div>
      </div>
      <div className="flex justify-between group items-center h-60 cursor-pointer bg-[#edecec] p-8 rounded-md">
        <div className="mr-10 ">
          <h1 className="text-primary text-2xl">30% offer</h1>
          <h1 className="text-2xl font-medium">Free Shipping</h1>
          <p>Attractive Natural Furniture</p>
          <button className="text-white bg-primary hover:bg-transparent hover:text-primary border border-primary px-4 py-2 rounded-md mt-5">Shop Now</button>
        </div>
        <div>
          <img className="h-48 w-60 group-hover:scale-110 transform duration-1000" src={sofa2} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default OfferCard;