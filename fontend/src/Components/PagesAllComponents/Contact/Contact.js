import React from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineRight } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <div className="pb-40">
      <div className="bg-cover bg-no-repeat bg-center bg-bgImage2 py-40">
        <div className="inset-0 flex justify-center  items-center  text-white">
          <div>
            <h1 className="text-4xl font-medium uppercase">Contact Us</h1>
            <div className="flex items-center justify-center mt-2">
              <AiOutlineHome className="text-primary" />
              <AiOutlineRight className="mx-2" />
              <h6>Contact us</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-6 mt-20">
          <div className="col-span-8 shadow-lg rounded-md bg-white px-10 py-10">
            <h1 className="text-3xl font-semibold">LEAVE US A MESSAGE</h1>
            <p className="mb-3 mt-1">
              Use the form below to get in touch with the sales team
            </p>
            <form>
              <div className="md:flex">
                <div className="w-full mt-4">
                  <label htmlFor="">
                    First Name <span className="text-primary">*</span>
                  </label>{" "}
                  <br />
                  <input
                    className="w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="type first name"
                    id=""
                  />
                </div>
                <div className="w-full md:ml-4 mt-4">
                  <label htmlFor="">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <br />
                  <input
                    className="w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="type last name"
                    id=""
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                  <label htmlFor="email">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <br />
                  <input
                    className="w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="type email"
                    id="email"
                  />
                </div>
              <div className="mt-4">
                <label htmlFor="">
                  Subject <span className="text-primary">*</span>
                </label>
                <br />
                <input
                    className="w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="type subject"
                    id="email"
                  />
              </div>
              <div className="mt-4">
                <label htmlFor="">
                  Your message <span className="text-primary">*</span>
                </label>
                <br />
               <textarea
                    className="w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm py-2 px-2 border-2 border-gray-200"
                    type="description"
                    rows="4"
                    placeholder="type message"
               />
              </div>
              <button className="bg-primary hover:bg-transparent hover:text-primary uppercase text-white font-semibold py-3 px-10 mt-8 border border-primary rounded-md">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-span-4 shadow-lg rounded-md bg-white px-10 py-10">
            <div>
              <h1 className="text-lg uppercase font-bold mb-3">OUR STORE</h1>
              <p className="flex items-center mt-3">
                <FiMapPin className="mr-4 text-2xl" />
                <span>
                  7895 Dr New Albuquerue, NM 19800, United States Of America
                </span>
              </p>
              <p className="flex items-center mt-3">
                <MdCall className="mr-4 text-xl" />
                <span>+566 477 256, +566 254 575</span>
              </p>
              <p className="flex items-center mt-3">
                <AiOutlineMail className="mr-4 text-xl" />
                <span>info@domain.com</span>
              </p>
              <h1 className="text-lg font-bold uppercase mb-3 mt-4">
                HOURS OF OPERATION
              </h1>
              <div>
                <h1 className="flex justify-between items-center mt-2">
                  <span>Saturday</span>
                  <span>12:00 PM</span>
                </h1>
                <h1 className="flex justify-between items-center mt-2">
                  <span>Sunday</span>
                  <span>12:00 PM</span>
                </h1>
                <h1 className="flex justify-between items-center mt-2">
                  <span>Monday</span>
                  <span>12:00 PM</span>
                </h1>
                <h1 className="flex justify-between items-center mt-2">
                  <span>Tuesday</span>
                  <span>12:00 PM</span>
                </h1>
                <h1 className="flex justify-between items-center mt-2">
                  <span>Wednesday</span>
                  <span>12:00 PM</span>
                </h1>
                <h1 className="flex justify-between items-center mt-2">
                  <span>Thursday</span>
                  <span>12:00 PM</span>
                </h1>
                <h1 className="flex justify-between items-center mt-2">
                  <span>Friday</span>
                  <span>12:00 PM</span>
                </h1>
              </div>
              <h1 className="text-lg uppercase font-bold mb-3 mt-4">CAREERS</h1>
              <p>
                If you are interesting in emplyment opportunities at RAFCARTs.
                Please email us:
              </p>
              <p className="text-primary">contact@familiar.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
