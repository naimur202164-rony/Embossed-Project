import React from "react";
import headphone from "../../../images/headphone-3.png";
import mobile from "../../../images/iphone-xr.png";
import shoes from "../../../images/shoes-5.png";
const ListProductDetails = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="flex bg-white shadow-lg overflow-hidden rounded mb-3 group">
        <div className="relative">
          <div className="flex justify-center center h-72 bg-gray-100">
            <img
              src={headphone}
              className="object-contain pt-10 h-60 w-80"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <a
              href="/#"
              className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i class="fa-solid fa-eye"></i>
            </a>
            <a
              href="/#"
              className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i className="fas fa-heart"></i>
            </a>
          </div>
        </div>
        <div className="ml-4 mt-6">
          <h4 className="text-2xl font-medium text-gray-800 mb-2">
            Cowin E7 Active
          </h4>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-primary font-medium">$45.00</p>
            <p className="text-gray-500 font-medium  line-through">$55.45</p>
          </div>
          <div className="flex items-center mt-2 mb-3">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <p className="text-gray-600">(150)</p>
            </div>
          </div>
          <div className="mt-5 mb-7">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit try amet.{" "}
              <br /> Voluptatem asperiores, obcaecati cum sed earum eius
              aliquam.
            </p>
          </div>
          <div className="flex space-x-3">
            <a
              href="/#"
              className="bg-primary text-white border border-primary px-7 py-2 hover:bg-transparent hover:text-primary rounded-md font-medium"
            >
              <i class="fa-solid fa-cart-plus"></i>{" "}
              <span className="ml-2">Add to Card</span>
            </a>
            <a
              href="/#"
              className="bg-white text-primary border border-primary px-10  py-2 hover:bg-primary hover:text-white rounded-md font-medium"
            >
              <i class="fa-solid fa-heart"></i>
              <span className="ml-3">Wishlist</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex bg-white shadow-lg rounded overflow-hidden mb-3 group">
        <div className="relative">
        <div className="flex justify-center center h-72 bg-gray-100">
          <img src={shoes} className="object-contain pt-12 h-56 w-80 " alt="" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <a
              href="/#"
              className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i class="fa-solid fa-eye"></i>
            </a>
            <a
              href="/#"
              className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i className="fas fa-heart"></i>
            </a>
          </div>
        </div>
        <div className="ml-4 mt-6">
          <h4 className="text-2xl font-medium capitalize text-gray-800 mb-2">
            Men Casual Shoes
          </h4>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-primary font-medium">$60.00</p>
            <p className="text-gray-500 font-medium  line-through">$65.45</p>
          </div>
          <div className="flex items-center mt-2 mb-3">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <p className="text-gray-600">(160)</p>
            </div>
          </div>
          <div className="mt-5 mb-7">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit try amet.{" "}
              <br /> Voluptatem asperiores, obcaecati cum sed earum eius
              aliquam.
            </p>
          </div>
          <div className="flex space-x-3">
            <a
              href="/#"
              className="bg-primary text-white border border-primary px-7 py-2 hover:bg-transparent hover:text-primary rounded-md font-medium"
            >
              <i class="fa-solid fa-cart-plus"></i>{" "}
              <span className="ml-2">Add to Card</span>
            </a>
            <a
              href="/#"
              className="bg-white text-primary border border-primary px-10  py-2 hover:bg-primary hover:text-white rounded-md font-medium"
            >
              <i class="fa-solid fa-heart"></i>
              <span className="ml-3">Wishlist</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex bg-white shadow-lg rounded overflow-hidden group">
        <div className="relative">
        <div className="flex justify-center center h-72 bg-gray-100">
          <img src={mobile} className="object-contain pt-10 h-60 w-80 " alt="" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <a
              href="/#"
              className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i class="fa-solid fa-eye"></i>
            </a>
            <a
              href="/#"
              className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i className="fas fa-heart"></i>
            </a>
          </div>
        </div>
        <div className="ml-4 mt-6">
          <h4 className="text-2xl font-medium text-gray-800 mb-2">
            Apple iPhone XR
          </h4>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-primary font-medium">$70.00</p>
            <p className="text-gray-500 font-medium  line-through">$85.45</p>
          </div>
          <div className="flex items-center mt-2 mb-3">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <p className="text-gray-600">(150)</p>
            </div>
          </div>
          <div className="mt-5 mb-7">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit try amet.{" "}
              <br /> Voluptatem asperiores, obcaecati cum sed earum eius
              aliquam.
            </p>
          </div>
          <div className="flex space-x-3">
            <a
              href="/#"
              className="bg-primary text-white border border-primary px-7 py-2 hover:bg-transparent hover:text-primary rounded-md font-medium"
            >
              <i class="fa-solid fa-cart-plus"></i>{" "}
              <span className="ml-2">Add to Card</span>
            </a>
            <a
              href="/#"
              className="bg-white text-primary border border-primary px-10  py-2 hover:bg-primary hover:text-white rounded-md font-medium"
            >
              <i class="fa-solid fa-heart"></i>
              <span className="ml-3">Wishlist</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductDetails;
