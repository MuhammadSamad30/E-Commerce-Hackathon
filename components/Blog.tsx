import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const blog = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}>
        <img src="/Blog-logo.png" alt="Logo" className='flex items-center md:ml-[46%] ml-[32%]' />

      <div className="inline-flex items-center">
        <a href='/' className="text-2xl font-bold">Home 
        </a>
        <IoIosArrowForward/>
        <a href='/shop' className="text-2xl font-normal">Cart</a>
        
      </div>
      
    </section>
  )
}

export default blog