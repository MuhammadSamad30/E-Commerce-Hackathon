export default function ProductGrid() {
    const products = [
      {
        id: 1,
        name: 'Side table',
        image: '/sec-img.png',
      },
      {
        id: 2,
        name: 'Side table',
        image: '/third-img.png',
      },
    ];
  
    return (
      <section className="px-6 md:px-16 py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center space-y-2"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-sm sm:pr-5 h-auto"
              />
  
              {/* Product Title */}
              <h2 className="text-2xl font-semibold">{product.name}</h2>
  
              {/* View More Button */}
              <button className="text-md  underline font-semibold hover:text-gray-700">
                View More
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  