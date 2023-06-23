import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="background"></div>
      <div>
        <div className='w-screen flex  flex-col justify-center items-center'>
          <div className="text-center text-white mb-8 2xl:mt-10">
            <h1 className="italic tracking-tight text-2xl xl:text-5xl 2xl:text-7xl">your healthy life</h1>
            <div className='mt-1'>
              <p className='text-xl xl:text-3xl 2xl:text-4xl font-bold'>start here</p>
            </div>
          </div>
          <Image
            src="/assets/heroproducts.png"
            alt="products"
            height={800}
            width={800}
            className='xl:w-[800px] 2xl:w-[1200px]'
          />
        </div>
      </div>
    </>
  )
}

export default Hero
