import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Account = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: "url('/Shop-banner.png')",
      }}>
        <img src="/Account-logo.png" alt="Logo" className='flex items-center md:ml-[39%] ml-[4%]' />

      <div className="inline-flex items-center">
        <a href='/' className="text-2xl font-bold">Home 
        </a>
        <IoIosArrowForward/>
        <a href='/account' className="text-2xl font-normal">Account</a>
        
      </div>
    </section>
  )
}

export default Account