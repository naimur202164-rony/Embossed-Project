import React from 'react';

const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center py-40 bg-bgImage" >
            <div className="container">
                <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
                    best collection for <br/> home decoration.
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti, <br/> totam consequuntur accusantium nemo maxime modi transition part <br/> recusandae asperiores amet officia!</p>
                <div className="mt-12">
                    <a href="/#" className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition">Shop Now</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;