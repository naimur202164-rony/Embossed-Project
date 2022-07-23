import React from 'react';

const ProductInfo = () => {
    return (
        <div className="flex justify-start pt-10">
           <div className="w-4/5 text-justify">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nec condimentum lorem lacus. Lectus libero in vulputate quis massa nisl risus, libero ut. Morbi praesent ipsum sed morbi turpis sed. Amet sed fames fermentum, augue dignissim. Montes, velit velit eu gravida nibh in feugiat.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nec condimentum lorem lacus. Lectus libero in vulputate quis massa nisl risus, libero ut. Morbi praesent ipsum sed morbi turpis sed. Amet sed fames fermentum, augue dignissim. Montes, velit velit eu gravida nibh in feugiat.</p>
            <table className="border border-gray-500 w-full mb-8 mt-8">
                <tr>
                    <td  className="border border-gray-500 p-3">Color</td>
                    <td  className="border border-gray-500 p-3">Black, Brown, Red</td>
                </tr>
                <tr>
                    <td className="border border-gray-500 p-3">Material</td>
                    <td className="border border-gray-500 p-3">Artificial Leather</td>
                </tr>
                <tr>
                    <td className="border border-gray-500 p-3">Weight</td>
                    <td className="border border-gray-500 p-3">0.5 kg</td>
                </tr>
            </table>
           </div>
        </div>
    );
};

export default ProductInfo;