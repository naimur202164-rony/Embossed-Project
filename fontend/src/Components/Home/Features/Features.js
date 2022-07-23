import React from 'react';

const Features = () => {
    return (
        <div className="container py-16">
           <div className="w-10" />
           <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-around items-center gap-5">
                <img src="http://rafcart.rslahmed.com/assets/images/svg/delivery-van.svg" className="w-12 h-12 object-contain" alt=""/>
                <div>
                    <h4 className="font-medium capitalize text-lg">Free shopping</h4>
                    <p className="text-gray-500 text-sm">order over $200</p>
                </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-around items-center gap-5">
                <img src="http://rafcart.rslahmed.com/assets/images/svg/money-back.svg" className="w-12 h-12 object-contain" alt=""/>
                <div>
                    <h4 className="font-medium capitalize text-lg">Money Returns</h4>
                    <p className="text-gray-500 text-sm">30 Days money return</p>
                </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-around items-center gap-5">
                <img src="http://rafcart.rslahmed.com/assets/images/svg/service-hours.svg" className="w-12 h-12 object-contain" alt=""/>
                <div>
                    <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                    <p className="text-gray-500 text-sm">Custommer support</p>
                </div>
                </div>
           </div>
        </div>
    );
};

export default Features;