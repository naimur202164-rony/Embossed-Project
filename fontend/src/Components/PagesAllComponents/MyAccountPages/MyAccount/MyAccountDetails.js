import React from "react";
import laptop from "../../../../images/laptop-5.png";
import tv from "../../../../images/tv.png";
const MyAccountDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <div className="shadow-lg rounded-md border bg-white h-52 py-5 px-4">
          <div className="flex justify-between items-center pb-7">
            <h1 className="font-semibold text-xl">Personal Profile </h1>
            <h1 className="text-primary hover:underline hover:cursor-pointer">
              Edit
            </h1>
          </div>
          <p className="font-semibold">Ashraful Islam</p>
          <p>example@mail.com</p>
          <p>(123) 456-789</p>
        </div>
        <div className="shadow-lg rounded-md border bg-white h-52 py-5 px-4">
          <div className="flex justify-between items-center pb-7">
            <h1 className="font-semibold text-xl">Shipping Address</h1>
            <h1 className="text-primary hover:underline hover:cursor-pointer">
              Edit
            </h1>
          </div>
          <p className="font-semibold">Ashraful Islam</p>
          <p>example@mail.com</p>
          <p>(123) 456-789</p>
        </div>
        <div className="shadow-lg rounded-md border bg-white h-52 py-5 px-4">
          <div className="flex justify-between items-center pb-7">
            <h1 className="font-semibold text-xl">Billing Address</h1>
            <h1 className="text-primary hover:underline hover:cursor-pointer">
              Edit
            </h1>
          </div>
          <p className="font-semibold">Ashraful Islam</p>
          <p>example@mail.com</p>
          <p>(123) 456-789</p>
        </div>
      </div>
      {/* Recent Orders */}
      <div className="mt-10">
        <div className="shadow-lg border bg-white rounded-md px-5 py-10">
          <div className="">
            <h1 className="font-medium text-xl">Recent Orders</h1>
            <div className="border-separate border border-gray-200 p-5 mt-5">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <img className="w-20" src={tv} alt="" />
                  </div>
                  <div>
                    <button className="hover:bg-primary hover:text-white  text-primary border border-primary font-semibold py-1 px-4 rounded-md">
                      View Order
                    </button>
                  </div>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th>Order Number</th>
                    <th>Purchased</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th className="flex justify-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left">
                    <td>23E34RT3</td>
                    <td>01 March 2021</td>
                    <td>x3</td>
                    <td>$120</td>
                    <td className="flex justify-center text-primary">
                      Cancelled
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-5">
            <div className="border-separate border border-gray-200 p-5 mt-5">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <img className="w-20" src={laptop} alt="" />
                  </div>
                  <div>
                    <button className="hover:bg-primary hover:text-white  text-primary border border-primary font-semibold py-1 px-4 rounded-md">
                      View Order
                    </button>
                  </div>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th>Order Number</th>
                    <th>Purchased</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th className="flex justify-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left">
                    <td>23E34RT3</td>
                    <td>01 March 2021</td>
                    <td>x3</td>
                    <td>$120</td>
                    <td className="flex justify-center text-green-600">
                      Delivered
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountDetails;
