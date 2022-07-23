import axios from "axios";
import React, { useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsSuitHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';



const Product = () => {

  const [product, setProduct] = React.useState([]);
  useEffect(() => {
    axios.get("./data.json").then((data) => {
      const productItems = data.data;
      setProduct(productItems);
    });
  }, []);
  
  const handleButton = (id) => {
    console.log("click me");
  }

    return (
       <div className="container pb-16">
           <h2 className="text-3xl font-bold text-gray-800 uppercase mb-6">top new arrival</h2>

           <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <div className="grid grid-cols-4 gap-6">

          {product.map((items) => (
            <SwiperSlide key={items._id}>
            <div className="">
              <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                  <div className="flex justify-center h-52 bg-gray-100">
                  <img
                    src={items.image}
                    className="object-contain pt-5 h-48 w-48"
                    alt=""
                  />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Link
                      to="/"
                      className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    >
                      <AiFillEye/>
                             
                    </Link>
                    <Link to="/"
                      className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    >
                      <BsSuitHeartFill/>
                    </Link>
                  </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                  <a href="/#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                      {items.title}
                    </h4>
                  </a>
                  <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                    {items.description}
                  </p>
                  <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">
                      $ {items.price}
                    </p>
                    <p className="text-sm text-gray-400 line-through">
                      $ {items.pricepre}
                    </p>
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
                    <div className="text-xs text-gray-500 ml-3">
                      ({items.review})
                    </div>
                  </div>
                </div>
                <p
                  onClick={()=> handleButton(items._id)}
                  className="block w-full py-1 cursor-pointer text-center text-white hover:text-primary bg-primary border border-primary rounded-b hover:bg-transparent transition"
                >
                  Add to card
                </p>
              </div>
            </div>
            </SwiperSlide>
          ))}
       
        </div>
        </Swiper>


           {/* <div className="grid grid-cols-4 gap-6">
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="http://rafcart.rslahmed.com/assets/images/product9.jpg" className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                              <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer chair</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">Queen Headboard</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$45.00</p>
                        <p className="text-sm text-gray-400 line-throught">$55.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="http://rafcart.rslahmed.com/assets/images/product1.jpg" className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                             <BsSuitHeartFill/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                              <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">madeline sofa</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">Fabric Sofa bed</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$120.00</p>
                        <p className="text-sm text-gray-400 line-throught">$100.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(160)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="http://rafcart.rslahmed.com/assets/images/product12.jpg" className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                              <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">black archie</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">black bedside</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$400.00</p>
                        <p className="text-sm text-gray-400 line-throught">$380.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(130)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="http://rafcart.rslahmed.com/assets/images/product8.jpg" className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                              <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">bianco chair</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">fabric accent chair</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$60.00</p>
                        <p className="text-sm text-gray-400 line-throught">$55.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(170)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
        </div> */}
       </div>
    );
};

export default Product;