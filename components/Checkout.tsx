import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Checkout = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}>
        <img src="/Checkout-logo.png" alt="Logo" className='flex items-center md:ml-[41%] ml-[13%]' />

      <div className="inline-flex items-center">
        <a href='/' className="text-2xl font-bold">Home 
        </a>
        <IoIosArrowForward/>
        <a href='/checkout' className="text-2xl font-normal">Checkout</a>
        
      </div>
      
    </section>
  )
}

export default Checkout