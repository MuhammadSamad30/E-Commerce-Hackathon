import React from "react";

const FourthSecShop = () => {
  return (
    <div className="flex items-center justify-center bg-[#f9f9f9] py-8">
      <div className="grid gap-6 text-center sm:grid-cols-3 lg:gap-10">
        {/* Free Delivery */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Free Delivery</h2>
          <p className="mt-2 text-sm text-gray-600">
            For all orders over $50, consectetur <br /> adipiscing elit.
          </p>
        </div>

        {/* 90 Days Return */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">90 Days Return</h2>
          <p className="mt-2 text-sm text-gray-600">
            If goods have problems, consectetur <br /> adipiscing elit.
          </p>
        </div>

        {/* Secure Payment */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Secure Payment</h2>
          <p className="mt-2 text-sm text-gray-600">
            100% secure payment, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSecShop;
