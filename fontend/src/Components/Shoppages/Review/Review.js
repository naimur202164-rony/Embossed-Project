import React from "react";
import { AiFillStar } from "react-icons/ai";
import img3 from "../../../images/ashraful.jpg";
import img2 from "../../../images/emran.jpeg";
import img1 from "../../../images/jonayed.jpg";
const Review = () => {
  return (
    <div className="pt-10">
      <div className="flex">
        <div className="space-y-1 mr-10">
          <h3 className="text-4xl font-bold">4.9/5</h3>
          <div className="flex space-x-1 text-lg text-yellow-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>20 Ratings</p>
        </div>
        <div>
          <div className="flex items-center mb-1.5 gap-5">
            <div className="flex space-x-1 text-lg text-yellow-400">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-48 bg-gray-400 rounded h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded w-4/5"></div>
              </div>
              <p>18</p>
            </div>
          </div>
          <div className="flex items-center mb-1.5 gap-5">
            <div className="flex space-x-1 text-lg">
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <AiFillStar />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-48 bg-gray-400 rounded h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded w-28"></div>
              </div>
              <p>12</p>
            </div>
          </div>
          <div className="flex items-center mb-1.5 gap-5">
            <div className="flex space-x-1 text-lg ">
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-48 bg-gray-400 rounded h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded w-20"></div>
              </div>
              <p>8</p>
            </div>
          </div>
          <div className="flex items-center mb-1.5 gap-5">
            <div className="flex space-x-1 text-lg ">
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-48 bg-gray-400 rounded h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded w-12"></div>
              </div>
              <p>5</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex space-x-1 text-lg">
              <span className="text-yellow-400">
                <AiFillStar />
              </span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-48 bg-gray-400 rounded h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded w-8"></div>
              </div>
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="">
          <h3>Product Reviews</h3>
          <div className="divide-y divide-gray-300 space-y-3 mb-10">
            <div className="flex pt-10">
              <div className="object-contain h-44 w-44">
                <img src={img1} alt="" />
              </div>
              <div className="space-y-3 pl-5">
                <h3 className="text-2xl font-semibold">by Jonayed Islam</h3>
                <div className="flex space-x-1 text-yellow-400 text-lg">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="text-xs">18 Mar 2022</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, fugit? Officiis quisquam quae accusantium ipsa porro dolor sit id quidem, eos aspernatur doloremque iure dignissimos ex culpa deleniti velit soluta!</p>
              </div>
            </div>
            <div className="flex pt-10">
              <div className="object-contain h-44 w-44">
                <img src={img3} alt="" />
              </div>
              <div className="space-y-3 pl-5">
                <h3 className="text-2xl font-semibold">by Ashraful Alam</h3>
                <div className="flex space-x-1 text-yellow-400 text-lg">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="text-xs">18 Mar 2022</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, fugit? Officiis quisquam quae accusantium ipsa porro dolor sit id quidem, eos aspernatur doloremque iure dignissimos ex culpa deleniti velit soluta!</p>
              </div>
            </div>
            <div className="flex pt-10">
              <div className="object-contain h-44 w-44">
                <img src={img2} alt="" />
              </div>
              <div className="space-y-3 pl-5">
                <h3 className="text-2xl font-semibold">by Emran Hossen</h3>
                <div className="flex space-x-1 text-yellow-400 text-lg">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="text-xs">18 Mar 2022</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, fugit? Officiis quisquam quae accusantium ipsa porro dolor sit id quidem, eos aspernatur doloremque iure dignissimos ex culpa deleniti velit soluta!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <select className="border border-gray-300">
            <option value="sort-by">Sort by</option>
            <option value="low">Price low-high</option>
            <option value="high">Price high-low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Review;
