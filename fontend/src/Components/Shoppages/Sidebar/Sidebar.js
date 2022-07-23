import React from 'react';

const Sidebar = () => {
    return (
        <div className="col-span-1 bh-white px-4 pb-6 shadow-lg border rounded-md overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-5">
                categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Women
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(16)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Men
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Shoes
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(19)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Computer
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(35)</div>
                </div>
              </div>
            </div>
            {/* Brand */}
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-5">
                Brands
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Adidas
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(37)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Nike
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(40)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Easy
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(35)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Arong
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(30)</div>
                </div>
              </div>
            </div>
            {/* price */}
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-5">
                Price
              </h3>

              <div className="slider">
                <div className="progress"></div>
              </div>
              <div className="relative bg-slate-300 rounded h-3 slider">
                <div className="bg-primary ml-16 mr-16 h-3 rounded  progress"></div>
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min="0"
                  max="10000"
                  // value="2500"
                  step="100"
                />
                <input
                  type="range"
                  className="range-max"
                  min="0"
                  max="10000"
                  // value="7500"
                  step="100"
                />
              </div>

              <div className="pt-5 price-input">
                <div className="h-10 w-full flex items-center field">
                  <input
                    type="number"
                    className="w-full h-full focus:outline-none focus:ring-0 focus:border-primary rounded mr-2 input-min"
                    value="2500"
                  />
                </div>
                <div className="pt-2 separator"> ~ </div>
                <div className="h-10 w-full flex items-center field">
                  <input
                    type="number"
                    className="w-full h-full focus:outline-none focus:ring-0 focus:border-primary rounded ml-2 input-max"
                    value="7500"
                  />
                </div>
              </div>
            </div>
            {/* size filter */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xs"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-s"
                  />
                  <label
                    htmlFor="size-s"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-m"
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-l"
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xl"
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>
            {/* color filter */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Color
              </h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="color-red"
                    className="hidden"
                  />
                  <label
                    htmlFor="color-red"
                    className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-primary"
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="color-white"
                    className="hidden"
                  />
                  <label
                    htmlFor="color-white"
                    className="border border-gray-200 rounde3d-sm h-5 w-5 cursor-pointer shadow-sm block bg-white"
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="color-black"
                    className="hidden"
                  />
                  <label
                    htmlFor="color-black"
                    className="border border-gray-200 rounde3d-sm h-5 w-5 cursor-pointer shadow-sm block bg-black"
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Sidebar;