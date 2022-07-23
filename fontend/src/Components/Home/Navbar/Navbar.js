import React from "react";
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        {/* all category */}
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <i className="fas fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>
          <div className="absolute w-full left-0 top-full bg-white shadow-lg py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            {/* single category */}
            <a
              href="/#"
              className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-shoe-prints"></i>
              <span className="ml-6 text-gray-600 text-sm">Shoes</span>
            </a>

            <a
              href="/#"
              className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-person"></i>
              <span className="ml-6 text-gray-600 text-sm">Men</span>
            </a>

            <a
              href="/#"
              className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-person-dress"></i>
              <span className="ml-6 text-gray-600 text-sm">Women</span>
            </a>

            <a
              href="/#"
              className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-bed"></i>
              <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
            </a>

            <a
              href="/#"
              className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-mobile-screen-button"></i>
              <span className="ml-6 text-gray-600 text-sm">Mobile</span>
            </a>

            <a
              href="/#"
              className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-charging-station"></i>
              <span className="ml-6 text-gray-600 text-sm">Electronics</span>
            </a>

            <a
              href="/#"
              className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-headphones-simple"></i>
              <span className="ml-6 text-gray-600 text-sm">Headphones</span>
            </a>

            <a
              href="/#"
              className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-clock"></i>
              <span className="ml-6 text-gray-600 text-sm">Watchs</span>
            </a>

            <a
              href="/#"
              className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-desktop"></i>
              <span className="ml-6 text-gray-600 text-sm">Computer</span>
            </a>
            {/* single category end */}
          </div>
        </div>
        {/* all category end*/}
        {/* navbar links */}
        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link to="/" className="text-gray-200 flex py-4 hover:text-primary">
              Home 
            </Link>
            <div className="cursor-pointer relative group">
            <Link to="/" className="text-gray-200 flex hover:text-primary py-4">
              Shop <svg className="ml-2 mt-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            
            <div className="absolute  z-10 w-36 mt-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
              <ul className="py-1">
                <li>
                  <Link to="/gridview" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition">Grid view</Link>
                </li>
                <li>
                  <Link to="/listview" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition ">List view</Link>
                </li>
                <li>
                  <Link to="/shoppingcart" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition">Shopping cart</Link>
                </li>
                <li>
                  <Link to="/productDetails" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition">Product Details</Link>
                </li> 
              </ul>
            </div>
            </Link>
            </div>
            <div className="cursor-pointer relative group">
              <Link to="/" className="text-gray-200 flex hover:text-primary py-4">
            
              pages  <svg className="ml-2 mt-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            
              <div className="absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible z-10 mt-10 text-base w-width1 list-none bg-white rounded divide-y divide-gray-100 shadow">
                <table>
                  <thead>
                    <tr className="text-gray-600">
                      <th className="pl-3.5 pt-2">Others Pages</th>
                      <th className="pl-7 pt-2">Account Pages</th>
                      <th className="pl-7 pt-2">Checkout Pages</th>
                    </tr>
                  </thead>
                  <tbody className="mt-5">
                    <tr className="">
                      <td className="pl-7 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/aboutus">About us</Link></td>
                      <td className="pl-10 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/myAccount">My Account</Link></td>
                      <td className="pl-10 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/shop/checkout">Checkout</Link></td>
                    </tr>
                    <tr className="">
                      <td className="pl-7 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/contact">Contact Us</Link></td>
                      <td className="pl-10 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/login">Login</Link></td>
                      <td className="pl-10 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/shop/payment" >Payment</Link></td>
                    </tr>
                    <tr className="">
                      <td className="pl-7 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/trackorder">Track Order</Link></td>
                      <td className="pl-10 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/register">Register</Link> </td>
                      <td className="pl-10 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/myAccount/wishlist">Wishlist</Link></td>
                    </tr>
                    <tr className="">
                      <td className="pl-7 py-2 pb-4 text-gray-600 text-sm hover:bg-gray-100 hover:text-primary transition"><Link to="faq">FAQ</Link></td>
                      <td className="pl-10 py-2 pb-4 text-gray-600 text-sm hover:bg-gray-100 hover:text-primary transition"><Link to="forgotpassword">Forgot Password</Link></td> 
                      <td className="pl-10 pb-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition"><Link to="/orderComplete">Order Complete</Link></td> 
                      
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              </Link>
            </div>
            <Link to="/contact" className="text-gray-200 hover:text-primary cursor-pointer py-4">
              Contact Us
            </Link>
          </div>
         <div className="flex text-white">
           <FiPhoneCall className="mt-1 mr-2"/>
           <p>Call: +123 456 7890</p>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
