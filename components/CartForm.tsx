import React from "react";
import Image from "next/image";

const CartForm = () => {
  return (
    <div className="p-6 lg:p-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="py-3 px-4 text-left font-medium text-gray-700">
                    Product
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-gray-700">
                    Price
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-gray-700">
                    Quantity
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-gray-700">
                    Subtotal
                  </th>
                  <th className="py-3 px-4 text-center font-medium text-gray-700">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-4 flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/Asgaard sofa 1.png"
                        alt="Product"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg bg-gray-100"
                      />
                    </div>
                    <span className="font-medium hidden md:block text-gray-800">
                      Asgaard Sofa
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-700">Rs. 250,000.00</td>
                  <td className="py-4 px-4">
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-12 border border-gray-300 rounded-md text-center"
                    />
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-semibold">
                    Rs. 250,000.00
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl items-center justify-center ml-[28%] md:ml-[30%] font-bold text-gray-800">
            Cart Totals
          </h2>
          <div className="flex justify-between">
            <span className="text-gray-700">Subtotal</span>
            <span className="text-gray-800 font-medium">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Total</span>
            <span className="text-[#B88E2F] font-bold text-lg">
              Rs. 250,000.00
            </span>
          </div>
          <button className="w-[50%] ml-[25%] text-black border-2 border-[#222] py-2 rounded-xl">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
