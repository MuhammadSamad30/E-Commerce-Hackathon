import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { IoIosArrowForward } from 'react-icons/io';

const ShopBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}
    >
      <div className="flex justify-center">
        <Image
          src="/Shop-logo.png"
          alt="Logo"
          width={300}
          height={100}
          className="md:ml-[45%] ml-[35%]"
        />
      </div>

      <div className="inline-flex items-center justify-center mt-6">
        <Link href="/" className="text-2xl font-bold">
        Home
        </Link>
        <IoIosArrowForward />
        <Link href="/shop" className="text-2xl font-normal">
        Shop
        </Link>
      </div>
    </section>
  );
};

export default ShopBanner;
