import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-[10%] py-20 bg-yellow-100">
      {/* Text Section */}
      <div className="text-center md:text-left max-w-md md:pl-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
          Rocket single seater
        </h1>
        <button className="text-lg pl-2 underline font-medium hover:text-gray-700">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0" id="hero-img">
        <Image
          src="/hero-img.png"
          alt="Rocket single seater"
          className="w-full max-w-lg md:max-w-4xl"
          width={800} // Add width for Image component
          height={600} // Add height for Image component
          priority 
        />
      </div>
    </section>
  );
}
