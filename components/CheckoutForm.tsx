import React from "react";

const CheckoutForm = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 lg:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country / Region
              </label>
              <select className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black">
                <option>Sri Lanka</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Street Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Town / City
              </label>
              <input
                type="text"
                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Town / City"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Province
              </label>
              <select className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black">
                <option>Western Province</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  placeholder="ZIP Code"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Additional Information"
              />
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Product</h2>
          <div className="p-6 rounded-lg space-y-6">
            <div className="flex justify-between text-gray-700">
              <span>Asgaard Sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <hr />
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>Total</span>
              <span className="text-[#b88E2F]">Rs. 250,000.00</span>
            </div>
            <div>
              <p className="font-semibold mb-4">Payment Method</p>
              <div className="space-y-4">
                <div>
                  <input
                    type="radio"
                    name="payment"
                    id="bank-transfer"
                    className="mr-2"
                  />
                  <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                  <p className="text-sm text-gray-600 mt-1">
                    Make your payment directly into our bank account. Use your
                    Order ID as the payment reference.
                  </p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="payment"
                    id="cod"
                    className="mr-2"
                  />
                  <label htmlFor="cod">Cash on Delivery</label>
                  <p className="text-sm text-gray-700">
                    Your personal data will be used to support your experience
                    throughout this website. to manage access to your account
                    and for other purposes described in our <br />
                    <strong>Privacy Policy</strong>
                  </p>
                </div>
              </div>
            </div>
            <button className="w-[50%] ml-[25%] text-black border-2 border-[#222] py-2 rounded-xl">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
