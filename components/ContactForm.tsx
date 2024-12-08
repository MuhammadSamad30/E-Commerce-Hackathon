import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="p-6 lg:p-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section - Contact Information */}
        <div className="space-y-8 ml-[10%] w-full">
          <h2 className="text-center w-full lg:text-left md:text-center md:ml-[70%] text-2xl font-bold text-gray-800">
            Get In Touch With Us
          </h2>
          <p className="text-center  w-full lg:text-left ml-[50%] md:text-center text-gray-600">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
          <div className="space-y-6 mt[50%]">
            <div className="flex items-start space-x-4">
              <span className="text-xl text-gray-700"><IoLocation/> </span>
              <div>
                <h4 className="text-gray-800 font-bold">Address</h4>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-xl text-gray-700"><FaPhoneAlt/> </span>
              <div>
                <h4 className="text-gray-800 font-bold">Phone</h4>
                <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                <p className="text-gray-600">Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-xl text-gray-700"><CiClock1/> </span>
              <div>
                <h4 className="text-gray-800 font-bold">Working Time</h4>
                <p className="text-gray-600">Monday–Friday: 9:00 – 22:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00 – 21:00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-10 mt-[25%] p-6 rounded-lg">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="mt-2 w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Abc@def.com"
                className="mt-2 w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optional"
                className="mt-2 w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I'd like to ask about ..."
                className="mt-2 w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[50%] ml-[25%] text-black border-2 border-[#222] py-2 rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
