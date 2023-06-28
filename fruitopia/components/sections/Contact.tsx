import React from 'react'
import Image from 'next/image'

import { CiFacebook, CiYoutube, CiTwitter, CiInstagram } from 'react-icons/ci'

const Contact = () => {
  return (
    <section id="contact" className='text-[#361615]'>
      <div className='sm:w-3/4  mx-auto relative z-10'>
        <Image

          src="/assets/farmers.png"
          alt="farmers"
          height={2000}
          width={2000}
          className='w-full'
        />
      </div>

      <div className='bg-yellow-100  absolute w-screen h-[420px] z-5 -mt-28 '></div>
      <div className='flex flex-col space-y-5 sm:flex-row ysa font-normal text-lg justify-between items-start w-3/4 mx-auto my-10 font-[sans] relative z-10'>
        <div className='sm:w-1/3 flex flex-col justify-center'>
          <p className='sm:w-3/4 my-2'>Get the latest news, events & more delivered to your inbox</p>
          <input type='email' placeholder='Email address...' className='focus:outline-none focus:ring-1 border-[0.1px] border-gray-500 rounded w-3/4 p-1 mt-4 mb-2 text-left' />
          <button className='text-center w-3/4 uppercase text-neutral-100 rounded-[5px] py-1 bg-[#361615]'>submit</button>
        </div>
        <div className='sm:w-1/3 text-center text-medium  tracking-wider'>
          <div className='flex space-x-4 justify-center p-3 mb-5  '>
            <CiFacebook className='text-[50px] p-3  rounded-full bg-[#361615] text-white' />
            <CiYoutube className='text-[50px] p-3 rounded-full bg-[#361615] text-white' />
            <CiTwitter className='text-[50px] p-3 rounded-full bg-[#361615] text-white' />
            <CiInstagram className='text-[50px] p-3 rounded-full bg-[#361615] text-white' />
          </div>
          <p className=' m-1'> 184 Hopewell Junction</p>
          <p className='font-bold m-1'>(+880) 196-7979-110</p>
        </div>
        <div className='w-1/3   '>
          <ul className='grid grid-cols-2 text-base text-right lipad'>
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
