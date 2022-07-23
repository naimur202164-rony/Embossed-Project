import React from "react";
import {
  AiFillGift,
  AiOutlineHeart, AiOutlineShoppingCart
} from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items justify-between">
        <h3 className="w-32 text-4xl font-bold">
          <span className="text-primary">EMBO</span>SSED
        </h3>

        {/* search bar */}
        <div className="w-full max-w-xl flex relative">
          <span className="absolute left-4 top-2 text-lg text-gray-400">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            className="w-full border border-primary border-r-0 pl-12 py-2 pr-3 rounded-l-md"
            placeholder="search"
          />
          <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary cursor-pointer transition">
            Search
          </button>
        </div>

        {/* icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/myAccount/wishList"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl flex justify-center">
              <FiHeart />
            </div>
            <div className="text-xs leading-3">Wish List</div>
            <span className="absolute right-0 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </span>
          </Link>
          <Link
            to="/shoppingCart"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl flex justify-center">
              <AiOutlineShoppingCart />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <span className="absolute -right-3.5 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              6
            </span>
          </Link>
          <Link
            to="/"
            className="text-center text-gray-700 hover:text-primary transition relative group"
          >
            <div className="text-2xl">
              <i className="far fa-user"></i>
            </div>
            <div className="text-xs leading-3">Account</div>
            {/* dropdown start*/}
            <div className="absolute right-0 opacity-0 group-hover:opacity-100 invisible group-hover:visible z-10 w-60 text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
                <h3 className="py-5 text-gray-600 font-medium">Welcome to EMBOSSED Shop</h3>
                <div className="flex justify-around">
                    <Link to="/register">
                    <button className="border border-primary bg-primary text-white hover:bg-transparent hover:text-primary rounded-md px-4 py-1 w-24">JOIN</button>
                    </Link>
                    <Link to="/login">
                    <button className="border border-primary bg-primary text-white hover:bg-transparent hover:text-primary rounded-md px-4 py-1 w-24">Sign In</button>
                    </Link>
                </div>
              <ul className="py-1">
                <li>
                  <Link
                    to="/myAccount"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition"
                  >
                    <div className="flex">
                    <FaRegAddressCard className="mr-2" />
                      <p>My Account</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myAccount/myOrderHistory"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition "
                  >
                    <div className="flex">
                    <AiFillGift className="mr-2" />
                      <p>My Order</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shoppingcart"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition"
                  >
                    <div className="flex">
                    <AiOutlineShoppingCart className="mr-2" />
                      <p>My Cart</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myAccount/wishlist"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition"
                  >
                    <div className="flex">
                    <AiOutlineHeart className="mr-2" />
                      <p>My Wishlist</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition"
                  >
                    <div className="flex">
                    <CgLogOff className="mr-2" />
                      <p>Log Out</p>
                    </div>
                  </Link>
                </li>
                
              </ul>
            </div>
            {/* dropdown end */}
            {/* <ul>
                    <li>
                        <Link
                      to="/myAccount"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <FaRegAddressCard className="mr-2" />
                      <p>My Account</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myAccount/myOrderHistory"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <AiFillGift className="mr-2" />
                      <p>My Order</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myAccount/wishlist"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <AiOutlineHeart className="mr-2" />
                      <p>My Wishlist</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shoppingCart"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <AiOutlineShoppingCart className="mr-2" />
                      <p>My Cart</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <CgLogOff className="mr-2" />
                      <p>Log Out</p>
                    </Link>
                    </li>
                    </ul> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
