import React from 'react';

const Categories = () => {
    return (
        <div className='container py-16'>
            <h2 className="text-3xl font-bold text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid grid-cols-3 gap-3">
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="http://rafcart.rslahmed.com/assets/images/category-1.jpg" className="w-full" alt="" />
                    <a href="/#" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Bedroom</a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="http://rafcart.rslahmed.com/assets/images/category-2.jpg" className="w-full" alt="" />
                    <a href="/#" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Mattresses</a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="http://rafcart.rslahmed.com/assets/images/category-3.jpg" className="w-full" alt="" />
                    <a href="/#" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Office</a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="http://rafcart.rslahmed.com/assets/images/category-4.jpg" className="w-full" alt="" />
                    <a href="/#" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Outdoor</a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="http://rafcart.rslahmed.com/assets/images/category-5.jpg" className="w-full" alt="" />
                    <a href="/#" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Lounges & Sofas</a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="http://rafcart.rslahmed.com/assets/images/category-6.jpg" className="w-full" alt="" />
                    <a href="/#" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Living & Dining</a>
                </div>
            </div>
        </div>
    );
};

export default Categories;