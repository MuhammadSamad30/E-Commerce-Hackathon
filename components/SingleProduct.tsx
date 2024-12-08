import React from "react";

const productImages = [
  {
    id: 1,
    src: "/Asgaard sofa 1.png",
    alt: "Product Main Image",
    isMain: true,
  },
  {
    id: 2,
    src: "/Asgaard sofa 1.png",
    alt: "Thumbnail 1",
    isMain: false,
  },
  {
    id: 3,
    src: "/Asgaard sofa 1.png",
    alt: "Thumbnail 2",
    isMain: false,
  },
  {
    id: 4,
    src: "/Asgaard sofa 1.png",
    alt: "Thumbnail 3",
    isMain: false,
  },
  {
    id: 5,
    src: "/Asgaard sofa 1.png",
    alt: "Thumbnail 4",
    isMain: false,
  },
];

const relatedProducts = [
  {
    id: 1,
    src: "/ShopCard (1).png",
    name: "Product 1",
    price: "Rs. 12,000.00",
  },
  {
    id: 2,
    src: "/ShopCard (2).png",
    name: "Product 2",
    price: "Rs. 15,000.00",
  },
  {
    id: 3,
    src: "/ShopCard (3).png",
    name: "Product 3",
    price: "Rs. 18,000.00",
  },
  {
    id: 4,
    src: "/ShopCard (4).png",
    name: "Product 4",
    price: "Rs. 20,000.00",
  },
];

const SingleProduct = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg shadow-md">
        <div className="flex-1">
          {productImages
            .filter((img) => img.isMain)
            .map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="w-full rounded-lg"
              />
            ))}
          <div className="flex gap-2 mt-4">
            {productImages
              .filter((img) => !img.isMain)
              .map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className="w-20 h-20 rounded-lg object-cover border"
                />
              ))}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Asgaard Sofa</h1>
          <p className="text-gray-600">
            A stylish and comfortable sofa to enhance your living space.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-gray-800">
              Rs. 25,000.00
            </span>
            <span className="text-sm text-gray-500 line-through">
              Rs. 30,000.00
            </span>
          </div>
          <div>
            <p className="font-semibold">Colors:</p>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-black"></button>
              <button className="w-8 h-8 rounded-full bg-gray-400"></button>
              <button className="w-8 h-8 rounded-full bg-blue-600"></button>
            </div>
          </div>
          <div>
            <p className="font-semibold">Quantity:</p>
            <div className="flex items-center gap-2">
              <button className="bg-gray-200 px-3 py-1 rounded-lg">-</button>
              <span className="px-3">1</span>
              <button className="bg-gray-200 px-3 py-1 rounded-lg">+</button>
            </div>
          <button className="w-[30%] ml-[30%] my-2 text-black py-2 rounded-3xl border-2">
            Add to Cart
          </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
        <div className="flex gap-4 border-b pb-2">
          <button className="font-semibold border-b-2 border-black">
            Description
          </button>
          <button className="font-semibold">Additional Info</button>
          <button className="font-semibold">Reviews</button>
        </div>
        <p className="mt-4 text-gray-600">
          Designed for both comfort and style, perfect for your living space.
        </p>
        <div className="flex ">

        <img
          src={"/Cloud-sofa.png"}
          className="w-full h-60 border-3 object-cover rounded-lg mb-4"
          />
        <img
          src={"/Cloud-sofa.png"}
          className="w-full h-60 border-3 object-cover rounded-lg mb-4"
          />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="font-semibold">{product.name}</p>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
