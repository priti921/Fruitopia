import React from 'react'
import Image from 'next/image'

import { CiFacebook, CiYoutube, CiTwitter, CiInstagram } from 'react-icons/ci'

const Contact = () => {
  return (
    <section id="contact" >
      <div className='w-3/4  mx-auto relative z-10'>
        <Image

          src="/assets/farmers.png"
          alt="farmers"
          height={2000}
          width={2000}
          className='w-full'
        />
      </div>

      <div className='bg-yellow-100  absolute w-screen h-[400px] z-5 -mt-28 '></div>
      <div className='flex justify-between w-3/4 mx-auto my-10 font-[sans] relative z-10'>
        <div className='w-1/3'>
          <p className='w-3/4 text-gray-600 font-thin text-sm my-2'>Get the latest news,events & more delivered to your box</p>
          <input type='email' placeholder='Email address...' className='border-[0.1em] border-gray-400 rounded w-3/4 p-2 my-4 text-left text-sm ' />
        </div>
        <div className='w-1/3 text-center text-medium  tracking-wider'>
          <div className='flex space-x-4 justify-center mb-5 '>
            <CiFacebook className='text-[40px] rounded-full bg-[#520d0c] text-white' />
            <CiYoutube className='text-[40px] rounded-full bg-[#520d0c] text-white' />
            <CiTwitter className='text-[40px] rounded-full bg-[#520d0c] text-white' />
            <CiInstagram className='text-[40px] rounded-full bg-[#520d0c] text-white' />
          </div>
          <p className='font-thin m-1'> 184 Hopewell Junction</p>
          <p className='font-bold m-1'>(+880) 196-7979-110</p>
        </div>
        <div className='w-1/3 text-sm font-thin text-gray-600'>
          <ul className='grid grid-cols-2 text-right lipad'>
            <li>Brands</li>
            <li>Gift Voucher</li>
            <li>Affiliates</li>
            <li>Specials</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
