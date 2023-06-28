import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
      {/* HERO LEFT FRUIT */}
      <div className="w-full mt-20 sm:mt-0">
        <div className='absolute left-0 mt-3 xl:mt-10 2xl:mt-40'>
          j  <Image
            src="/assets/fruitleft1.png"
            alt="fruitleft1"
            height={2000}
            width={2000}
            className='w-[100px] xl:w-[230px] 2xl:w-[270px]'
          />
        </div>
        {/* HERO RIGHT FRUIT */}
        <div className="absolute right-0 mt-3 xl:mt-10 2xl:mt-40">
          <Image
            src="/assets/fruitsright1.png"
            alt="fruitsright1"
            height={2000}
            width={2000}
            className='w-[100px] xl:w-[230px] 2xl:w-[300px]'
          />
        </div>
        {/* HERO BOTTOM FRUIT */}
        <div className="absolute left-20 bottom-40  xl:left-40 xl:bottom-0 xl:ml-10">
          <Image
            src="/assets/berry.png"
            alt="fruitsright1"
            height={2000}
            width={2000}
            className='w-[70px] xl:w-[150px] 2xl:w-[200px]'
          />
        </div>
        {/* HERO MAIN PRODUCT IMAGE | CENTERED */}
        <div className='w-screen flex  flex-col justify-center items-center'>
          <div className="text-center  mb-8 xl:mb-8 2xl:mt-10">
            <h1 className="italic tracking-tight font-bold text-gray-100 text-4xl xl:text-6xl 2xl:text-8xl capitalize herotext">your healthy life</h1>
            <div className='mt-1'>
              <p className='text-xl xl:text-2xl 2xl:text-4xl font-bold text-green-600'>start here</p>
            </div>
          </div>
          <Image
            src="/assets/heroproducts.png"
            alt="products"
            height={2000}
            width={2000}
            className='xl:w-[800px] 2xl:w-[1200px]'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
