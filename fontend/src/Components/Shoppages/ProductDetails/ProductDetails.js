import React from "react";
import {
  AiOutlineHome,
  AiOutlineRight, AiOutlineShoppingCart
} from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaRegHeart } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { ImArrowLeft } from 'react-icons/im';
import headphones2 from "../../../images/headphone-3.png";
import mobile3 from "../../../images/iphone-xr.png";
import laptop2 from "../../../images/laptop-2.png";
import shoes from "../../../images/shoes-5.png";
import shoes1 from "../../../images/slider-1.png";
import shoes2 from "../../../images/slider-2.png";
import shoes3 from "../../../images/slider-3.png";
import shoes4 from "../../../images/slider-4.png";
import shoes5 from "../../../images/slider-5.png";
import CarouselSlider from "../CarouselSlide/CarouselSlider";
import ProductInfo from "../ProductInfo/ProductInfo";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import Review from "../Review/Review";
const ProductDetails = () => {
  const [Image, setImage] = React.useState("first");
  const [tab, setTab] = React.useState("info");
  return (
    <div className="container">
      <div className="flex items-center mt-4 mb-6">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="text-primary mx-2" />
        <h6 className="text-primary">Shop</h6>
        <AiOutlineRight className="text-gray-500 mx-2" />
        <h6>Product Details</h6>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          {Image === "first" && <img src={shoes1} className="py-2 pb-3 h-height w-width rounded" alt="" />}
          {Image === "second" && <img src={shoes2} className="py-2 pb-3 h-height w-width rounded" alt="" />}
          {Image === "third" && <img src={shoes3} className="py-2 pb-3 h-height w-width rounded" alt="" />}
          {Image === "forth" && <img src={shoes4} className="py-2 pb-3 h-height w-width rounded" alt="" />}
          {Image === "fifth" && <img src={shoes5} className="py-2 pb-3 h-height w-width rounded" alt="" />}
          {Image === "sixth" && <img src={shoes1} className="py-2 pb-3 h-height w-width rounded" alt="" />}

          <CarouselSlider setImage={setImage}></CarouselSlider>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold mt-1">Men's Adidas CourtsMash</h2>
          <div className="flex items-center">
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
            </div>
            <div className=" text-gray-600 ml-3">50 Reviews</div>
          </div>
          <div className="divide-y divide-gray-300 space-y-5 mb-5">
          <div className="space-y-3">
            <div className="flex">
              <p className="font-bold">Availability :</p>
              <p className="pl-5 text-green-400 font-medium">In Stock</p>
            </div>
            <div className="flex">
              <p className="font-bold">Brand :</p>
              <p className="pl-5 font-medium">Bata</p>
            </div>
            <div className="flex">
              <p className="font-bold">Category :</p>
              <p className="pl-5 font-medium">Shoes</p>
            </div>
            <div className="flex">
              <p className="font-bold">SKU :</p>
              <p className="pl-5 font-medium">BE45VGRT</p>
            </div>
            <div className="flex space-x-3">
              <p className="line-through">$5000.00 </p>
              <p className="text-2xl text-primary font-bold -mt-1.5">$4500.00 </p>
              <p className="-mt-2 flex items-center"> <span className="text-2xl text-primary -mt-3 -mr-3"><ImArrowLeft/></span> <span className="text-white bg-primary mb-3 rounded-l-1/2 px-2 py-1  flex items-center"> -30% </span></p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt aliquid est molestias exercitationem laboriosam, totam
                excepturi sunt eaque dolorum, repudiandae distinctio vitae nam
                quisquam quasi.
              </p>
            </div>
            <div className="pt-2">
              <h3 className="text-xl font-medium uppercase text-gray-800 ">Size</h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input type="radio" className="hidden" name="size" id="size-xs" />
                  <label htmlFor="size-xs" className="text-xs border border-gray-300 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                </div>
                <div className="size-selector">
                  <input type="radio" className="hidden" name="size" id="size-s" />
                  <label htmlFor="size-s" className="text-xs border border-gray-300 h-6 w-6 rounded-sm text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">S</label>
                </div>
                <div className="size-selector">
                  <input type="radio" className="hidden" name="size" id="size-m" />
                  <label htmlFor="size-m" className="text-xs border border-gray-300 h-6 w-6 rounded-sm text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">M</label>
                </div>
                <div className="size-selector">
                  <input type="radio" className="hidden" name="size" id="size-L" />
                  <label htmlFor="size-L" className="text-xs border border-gray-300 h-6 w-6 rounded-sm text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">L</label>
                </div>
                <div className="size-selector">
                  <input type="radio" className="hidden" name="size" id="size-xl" />
                  <label htmlFor="size-xl" className="text-xs border border-gray-300 h-6 w-6 rounded-sm text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">XL</label>
                </div>
                
              </div>
            </div>
            <div className="pt-2">
            <h3 className="text-xl font-medium uppercase text-gray-800 ">Color</h3>
            
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input type="radio" name="color" className="hidden" id="color-red" />
                <label htmlFor="color-red" className="bborder border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-primary"></label>
              </div>
              <div className="color-selector">
                <input type="radio" name="color" className="hidden" id="color-white" />
                <label htmlFor="color-white" className="bborder border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-gray-200"></label>
              </div>
              <div className="color-selector">
                <input type="radio" name="color" className="hidden" id="color-black" />
                <label htmlFor="color-black" className="bborder border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-black"></label>
              </div>
            </div>
            </div>
            <div className="pt-2">
              <span className="font-medium">Quantity</span>
              <div class="flex">
                <span className="border-gray-700 border px-2 w-8 flex items-center">
                  <i class="fa-solid fa-minus"></i>
                </span>
                <input
                  class="px-2 border text-center w-8 max-h-8"
                  type="text"
                  value="1"
                />
                <span className="border-gray-700 px-2 w-8 flex items-center border">
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
            <div className="flex pt-4">
              <button className="border flex items-center border-gray-400 px-4 py-2 text-white rounded-md bg-primary hover:bg-transparent hover:text-primary font-medium mr-4"><AiOutlineShoppingCart/> <span className="ml-3">ADD TO CART</span></button>
              <button className="border flex items-center border-gray-400 px-8 py-2 text-primary rounded-md bg-white hover:bg-primary hover:text-white font-medium mr-4"><FaRegHeart/> <span className="ml-3">WishList</span></button>
            </div>
          </div>
          <div className="flex pt-5">
            <span className="h-8 w-8 border border-gray-400 flex items-center pl-1.5 hover:bg-gray-200  rounded-full"><FaFacebookF/></span>
            <span className="h-8 w-8 border border-gray-400 flex items-center pl-2 ml-2 hover:bg-gray-200  rounded-full"><BsTwitter/></span>
            <span className="h-8 w-8 border border-gray-400 flex items-center pl-1.5 ml-2 hover:bg-gray-200 rounded-full"><GrInstagram/></span>
          </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-300">
      <div className="flex mt-7">
        <p onClick={()=> setTab("info")} className="font-medium border border-gray-400 cursor-pointer hover:text-primary hover:border-primary rounded-md py-3 px-4">Personal Info</p>
        <p onClick={()=> setTab("answer")} className="font-medium border ml-2 rounded-md cursor-pointer border-gray-400 py-3 hover:text-primary hover:border-primary px-4">Question & Answer</p>
        <p onClick={()=> setTab("review")} className="font-medium border ml-2 rounded-md cursor-pointer hover:text-primary hover:border-primary border-gray-400 py-3 px-4">Review (10)</p>
      </div>
      {tab === "info" && <ProductInfo/>} 
      {tab === "answer" && <QuestionAnswer/>} 
      {tab === "review" && <Review/>} 
      </div>
      <div className="mt-10 mb-24">
        <h3 className="text-4xl py-4 font-medium">Related Products</h3>
        <div className="grid grid-cols-4 gap-6">
            <div className="bg-white shadow-lg rounded overflow-hidden group">
              <div className="relative">
                <div className="flex justify-center h-52 bg-gray-100">
                  <img
                    src={shoes}
                    className="object-contain pt-5 h-44 w-48"
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
              <div className="pt-3 pb-3 px-4">
                <a href="/#">
                  <h4 className="font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Men Casual Shoes
                  </h4>
                </a>
                <div className="group-hover:hidden">
                <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                  Queen Headboard
                </p>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$55.00</p>
                </div>
                <div className="flex items-center">
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
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
                </div>
              </div>
              <a
                href="/#"
                className="mt-10 py-1 w-full text-center hidden group-hover:block text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                add to card
              </a>
            </div>
            <div className="bg-white shadow-lg rounded overflow-hidden group">
              <div className="relative">
                <div className="flex justify-center h-52 bg-gray-100">
                  <img
                    src={headphones2}
                    className="object-contain pt-5 h-44 w-48"
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
              <div className="pt-3 pb-3 px-4">
                <a href="/#">
                  <h4 className="font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Cowin E7 Active
                  </h4>
                </a>
                <div className="group-hover:hidden">
                <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                  Queen Headboard
                </p>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$55.00</p>
                </div>
                <div className="flex items-center">
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
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
                </div>
              </div>
              <a
                href="/#"
                className="mt-10 py-1 w-full text-center hidden group-hover:block text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                add to card
              </a>
            </div>
           
            <div className="bg-white shadow-lg rounded overflow-hidden group">
              <div className="relative">
                <div className="flex justify-center h-52 bg-gray-100">
                  <img
                    src={laptop2}
                    className="object-contain pt-5 h-44 w-48"
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
              <div className="pt-3 pb-3 px-4">
                <a href="/#">
                  <h4 className="font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    HP Omen 13
                  </h4>
                </a>
                <div className="group-hover:hidden">
                <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                  fabric accent chair
                </p>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$70.00</p>
                  <p className="text-sm text-gray-400 line-through">$85.00</p>
                </div>
                <div className="flex items-center">
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
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(170)</div>
                </div>
                </div>
              </div>
              <a
                href="/#"
                className="mt-10 py-1 w-full text-center hidden group-hover:block text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                add to card
              </a>
            </div>
            <div className="bg-white shadow-lg rounded overflow-hidden group">
              <div className="relative">
                <div className="flex justify-center h-52 w-full bg-gray-100">
                  <img
                    src={mobile3}
                    className="object-contain pt-5 h-44 w-48"
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
              <div className="pt-3 pb-3 px-4">
                <a href="/#">
                  <h4 className="font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    iPhone 12 Pro XR
                  </h4>
                </a>
                <div className="group-hover:hidden">
                <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                  fabric accent chair
                </p>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$60.00</p>
                  <p className="text-sm text-gray-400 line-through">$70.00</p>
                </div>
                <div className="flex items-center">
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
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(170)</div>
                </div>
                </div>
              </div>
              <a
                href="/#"
                className="mt-10 py-1 w-full text-center hidden group-hover:block text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                add to card
              </a>
            </div>

          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
