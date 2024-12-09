import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const Blog = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}
    >
      <div className="flex items-center justify-center">
        <Image
          src="/Blog-logo.png"
          alt="Logo"
          width={120}
          height={120} 
          priority 
        />
      </div>

      <div className="inline-flex items-center">
        <Link href="/" className="text-2xl font-bold">
          Home
        </Link>
        <IoIosArrowForward />
        <Link href="/about" className="text-2xl font-normal">
          Blog
        </Link>
      </div>
    </section>
  );
};

export default Blog;
