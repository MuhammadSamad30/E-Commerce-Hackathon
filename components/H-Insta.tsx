import React from 'react';

const InstagramSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-center py-20 px-6"
      style={{
        backgroundImage: "url('/insta-bg.png')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold">Our Instagram</h2>
        <p className="text-gray-600 mt-2">Follow our store on Instagram</p>
        <button className="mt-6 px-6 py-3 bg-white shadow-lg rounded-full text-black font-medium hover:shadow-xl transition">
          Follow Us
        </button>
      </div>
    </section>
  );
};

export default InstagramSection;
