import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const Checkout = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}
    >
      <div className="flex items-center justify-center md:ml-[1%] ml-[8%]">
        <Image
          src="/Checkout-logo.png"
          alt="Checkout Logo"
          width={200}
          height={80}
          priority 
        />
      </div>

      <div className="inline-flex items-center">
        <Link href="/" className="text-2xl font-bold">
          Home
        </Link>
        <IoIosArrowForward />
        <Link href="/checkout" className="text-2xl font-normal">
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default Checkout;
