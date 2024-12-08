import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; 
import { IoIosArrowForward } from 'react-icons/io';

const Account = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}
    >
      <div className="flex items-center md:ml-[42%] ml-[18%]">
        <Image
          src="/Account-logo.png"
          alt="Logo"
          width={200} 
          height={200} 
          priority
        />
      </div>

      <div className="inline-flex items-center">
        <Link href="/" className="text-2xl font-bold">
          Home
        </Link>
        <IoIosArrowForward />
        <Link href="/account" className="text-2xl font-normal">
          Account
        </Link>
      </div>
    </section>
  );
};

export default Account;
