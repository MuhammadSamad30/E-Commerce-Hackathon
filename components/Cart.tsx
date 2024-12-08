import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const Cart = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}
    >
      <div className="flex justify-center">
        <Image
          src="/Cart-logo.png"
          alt="Cart Logo"
          width={150} 
          height={50} 
        />
      </div>

      <div className="inline-flex items-center justify-center mt-4">
        <Link href="/" className="text-2xl font-bold">
          Home
        </Link>
        <IoIosArrowForward />
        <Link href="/cart" className="text-2xl font-normal">
          Cart
        </Link>
      </div>
    </section>
  );
};

export default Cart;
