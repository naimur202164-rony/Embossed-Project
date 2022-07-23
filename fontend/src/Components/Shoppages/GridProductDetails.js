import React from 'react';
import headphones from "../../images/headphone-2.png";
import headphones2 from "../../images/headphone-3.png";
import mobile3 from "../../images/iphone-xr.png";
import laptop2 from "../../images/laptop-2.png";
import laptop from "../../images/laptop-3.png";
import mobile from "../../images/phone-1.png";
import mobile2 from "../../images/phone-2.png";
import shoes2 from "../../images/shoes-3.png";
import shoes from "../../images/shoes-5.png";
const GridProductDetails = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded overflow-hidden group">
              <div className="relative">
                <div className="flex justify-center h-52 bg-gray-100">
                  <img
                    src={laptop}
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
                    HP Pavilion 15
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
                className="mt-10 py-1 w-full text-center hidden group-hover:block text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition-all"
              >
                add to card
              </a>
            </div>
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
                    src={mobile}
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
                    Madeline Sofa
                  </h4>
                </a>
                <div className="group-hover:hidden">
                <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                  Fabric Sofa bed
                </p>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$120.00</p>
                  <p className="text-sm text-gray-400 line-through">$100.00</p>
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
                  <div className="text-xs text-gray-500 ml-3">(160)</div>
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
                    src={mobile2}
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
                    Black Archie
                  </h4>
                </a>
                <div className="group-hover:hidden">
                <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                  black bedside
                </p>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$400.00</p>
                  <p className="text-sm text-gray-400 line-through">$380.00</p>
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
                  <div className="text-xs text-gray-500 ml-3">(130)</div>
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
                    src={shoes2}
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
                    Women High Shoes
                  </h4>
                </a>
                <div className="group-hover:hidden">
                <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                  fabric accent chair
                </p>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$60.00</p>
                  <p className="text-sm text-gray-400 line-through">$65.00</p>
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
                <div className="flex justify-center h-52 bg-gray-100">
                  <img
                    src={headphones}
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
                    Bose Headphone
                  </h4>
                </a>
                <div className="group-hover:hidden">
                <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                  fabric accent chair
                </p>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$50.00</p>
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
    );
};

export default GridProductDetails;