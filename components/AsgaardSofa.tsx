import React from 'react';

const AsgaardSofa = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 bg-gray-50">
      {/* Image Section */}
      <div className="w-full md:w-[80%] flex justify-center mb-8 md:mb-0">
        <img src="/Asgaard sofa 1.png" alt="Asgaard Sofa" className="w-full max-w-2xl h-auto" />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 md:pl-12">
        <h3 className="font-medium text-gray-600 text-lg mb-2 ml-[14%]">New Arrivals</h3>
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 md:mr-[20%] ml-5">Asgaard Sofa</h1>
        <a href='/shop/products' className="border-2 border-black px-6 py-3 ml-[12%] text-sm font-light hover:bg-black hover:text-white transition">
          Order Now
        </a>
      </div>
    </div>
  );
};

export default AsgaardSofa;
