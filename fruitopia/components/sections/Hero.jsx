import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="background"></div>
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
        {/* HERO MAIN PRODUCT IMAGE | CENTERED */}
        <div className='w-screen flex  flex-col justify-center items-center'>
          <div className="text-center text-white mb-8 xl:mb-8 2xl:mt-10">
            <h1 className="italic tracking-tight text-4xl xl:text-5xl 2xl:text-7xl">your healthy life</h1>
            <div className='mt-1'>
              <p className='text-xl xl:text-3xl 2xl:text-4xl font-bold'>start here</p>
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

        {/* HERO BOTTOM FRUIT */}
      </div>
    </>
  )
}

export default Hero
