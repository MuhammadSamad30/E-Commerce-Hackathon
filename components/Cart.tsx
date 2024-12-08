import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Cart = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}>
        <img src="/Cart-logo.png" alt="Logo" className='flex items-center md:ml-[46%] ml-[30%]' />

      <div className="inline-flex items-center">
        <a href='/' className="text-2xl font-bold">Home 
        </a>
        <IoIosArrowForward/>
        <a href='/cart' className="text-2xl font-normal">Cart</a>
        
      </div>
      
    </section>
  )
}

export default Cart