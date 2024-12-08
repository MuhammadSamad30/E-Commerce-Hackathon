import Link from 'next/link';
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-[#fff] text-gray-800 py-10 px-4 md:px-20 max-w-full">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-1/3 text-sm">
          <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>

        <div className="w-full md:w-1/3 flex justify-between text-sm">
          <div>
            <h3 className="font-medium mb-2">Links</h3>
            <ul>
              <Link href="/"><li className="mb-1">Home</li></Link>
              <Link href="/shop"><li className="mb-1">Shop</li></Link>
              <Link href="/about"><li className="mb-1">About</li></Link>
              <Link href="/contact"><li className="mb-1">Contact</li></Link>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Help</h3>
            <ul>
              <li className="mb-1">Payment Options</li>
              <li className="mb-1">Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
        </div>

        <div className="w-[80%] md:w-1/3">
          <h3 className="font-medium mb-2">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-grow px-2 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-sm border-t border-gray-300 pt-4">
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
