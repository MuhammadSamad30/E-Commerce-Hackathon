import React from "react";

const ShopCard = () => {
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/ShopCard (1).png",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/ShopCard (2).png",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/ShopCard (3).png",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/ShopCard (4).png",
    },
    {
      id: 5,
      name: "Grain coffee table",
      price: "Rs. 15,000.00",
      image: "ShopCard (5).png",
    },
    {
      id: 6,
      name: "Kent coffee table",
      price: "Rs. 225,000.00",
      image: "ShopCard (6).png",
    },
    {
      id: 7,
      name: "Round coffee table_color 2",
      price: "Rs. 251,000.00",
      image: "ShopCard (7).png",
    },
    {
      id: 8,
      name: "Reclaimed teak coffee table",
      price: "Rs. 25,200.00",
      image: "/ShopCard (8).png",
    },
    {
      id: 9,
      name: "Plain console_",
      price: "Rs. 258,200.00",
      image: "/ShopCard (9).png",
    },
    {
      id: 10,
      name: "Reclaimed teak Sideboard",
      price: "Rs. 20,000.00",
      image: "/ShopCard (10).png",
    },
    {
      id: 11,
      name: "SJP_0825",
      price: "Rs. 200,000.00",
      image: "/ShopCard (1).png",
    },
    {
      id: 12,
      name: "Bella chair and table",
      price: "Rs. 100,000.00",
      image: "/ShopCard (11).png",
    },
    {
      id: 13,
      name: "Granite square side table",
      price: "Rs. 258,800.00",
      image: "/ShopCard (12).png",
    },
    {
      id: 14,
      name: "Asgaard sofa",
      price: "Rs. 250,000.00",
      image: "/ShopCard (13).png",
    },
    {
      id: 15,
      name: "Maya sofa three seater",
      price: "Rs. 115,000.00",
      image: "/ShopCard (14).png",
    },
    {
      id: 16,
      name: "Outdoor sofa set",
      price: "Rs. 244,000.00",
      image: "/ShopCard (15).png",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-4 border border-gray-200 rounded shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-36 mb-4 rounded"
            />
            <h3 className="text-sm font-medium text-gray-800 text-center">
              {product.name}
            </h3>
            <p className="mt-2 text-sm font-semibold text-gray-600">
              {product.price}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button className="w-10 h-10 text-sm font-medium text-gray-700 bg-yellow-200 rounded hover:bg-yellow-300">
          1
        </button>
        <button className="w-10 h-10 text-sm font-medium text-gray-700 bg-yellow-200 rounded hover:bg-yellow-300">
          2
        </button>
        <button className="w-10 h-10 text-sm font-medium text-gray-700 bg-yellow-200 rounded hover:bg-yellow-300">
          3
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-yellow-200 rounded hover:bg-yellow-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
