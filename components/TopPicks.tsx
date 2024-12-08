export default function TopPicks() {
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa _3",
      price: "Rs. 25,000.00",
      image: "/third-sec (1).png",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/third-sec (2).png",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/third-sec (3).png",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/third-sec (4).png",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Top Picks For You</h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-xs mx-auto h-auto"
            />

            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>

            <p className="text-sm text-gray-600 mt-2">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="text-sm underline font-semibold hover:text-gray-700">
          View More
        </button>
      </div>
    </section>
  );
}
