import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}
    >
      <div className="flex items-center justify-center">
        <Image
          src="/Contact-logo.png"
          alt="Logo"
          width={200}
          height={100} 
          className="md:ml-[1%] ml-[10%]"
        />
      </div>

      <div className="inline-flex items-center justify-center mt-4">
        <Link href="/" className="text-2xl font-bold">
          Home
        </Link>
        <IoIosArrowForward />
        <Link href="/contact" className="text-2xl font-normal">
         Contact
        </Link>
      </div>
    </section>
  );
};

export default Contact;
