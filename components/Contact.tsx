import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Contact = () => {
    return (
        <section
          className="relative bg-cover bg-center text-center py-20 px-6"
          style={{
            backgroundImage: "url('/Shop-banner.png')",
          }}>
            <img src="/Contact-logo.png" alt="Logo" className='flex items-center md:ml-[42%] ml-[18%]' />
    
          <div className="inline-flex items-center">
            <a href='/' className="text-2xl font-bold">Home 
            </a>
            <IoIosArrowForward/>
            <a href='/contact' className="text-2xl font-normal">Contact</a>
            
          </div>
          
        </section>
      )
}

export default Contact
