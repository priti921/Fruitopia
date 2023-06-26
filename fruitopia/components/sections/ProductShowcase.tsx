import React from 'react'
import Image from 'next/image'

const ProductShowcase = () => {
  return (
    <section id="productshowcase">
      <div className="container">
        {/* PANEL 1*/}
        <div className="flex">
          <div className="relative -left-3">
            <Image
              src="/assets/productshowcase1.png"
              alt="productshowcase1"
              height={2000}
              width={2000}
              className='w-[100px] xl:w-[1500px] 2xl:w-[2100px]'
            />
          </div>
          <div className="relative xl:top-24 2xl:top-40 flex flex-col  xl:w-4/5 xl:mx-10 2xl:mx-16">
            <div className="flex items-center  text-4xl xl:text-4xl 2xl:text-4xl">
              <span className="font-['Satisfy']  tracking-wider">Best products</span>
              <span className="font-[Belanosima] font-medium tracking-wide text-[#6fa720]  mx-3">best results</span>
            </div>
            <p className="font-normal xl:text-base 2xl:text-xl text-slate-800 tracking-wider text-left leading-7 xl:w-3/4 2xl:w-full  my-10" >
              <span className="font-bold"> Our commitment to excellence shines through in every sip of our juices. </span>
              Each carefully crafted blend is made with the finest fruits, ensuring the best product and delivering exceptional results for your health and well-being. Experience the difference and unlock the power of nature&apos;s goodness with our top-quality offerings.</p>
          </div>
          <div className="absolute right-0 z-10">
            <Image
              src="/assets/fruitright3.png"
              alt="fruitright3"
              height={2000}
              width={2000}
              className='w-[100px] xl:w-[180px] 2xl:w-[200px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
