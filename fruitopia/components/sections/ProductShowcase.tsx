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
              className='w-[100px] xl:w-[1500px] 2xl:w-[2500px]'
            />
          </div>
          <div className="relative xl:top-24 2xl:top-56 flex flex-col  xl:w-5/6  xl:mx-10">
            <div className="flex items-center  text-4xl xl:text-4xl 2xl:text-5xl whitespace-nowrap">
              <span className="font-['Satisfy']  tracking-wider">Best products</span>
              <span className="font-[Belanosima] font-medium tracking-wide text-[#6fa720]  mx-3">best results</span>
            </div>
            <p className="font-normal xl:text-base 2xl:text-xl text-slate-800 tracking-wider text-left leading-7  xl:w-4/5 2xl:w-full  my-10" >
              <span> Our commitment to excellence shines through in every sip of our juices. </span>
              <span className="font-thin">
                Each carefully crafted blend is made with the finest fruits, ensuring the best product and delivering exceptional results for your health and well-being. Experience the difference and unlock the power of nature&apos;s goodness with our top-quality offerings.
              </span>
            </p>
          </div>
          <div className="absolute right-0 z-10">
            <Image
              src="/assets/fruitright3.png"
              alt="fruitright3"
              height={2000}
              width={2000}
              className='w-[100px] xl:w-[180px] 2xl:w-[300px]'
            />
          </div>
        </div>
        {/* PANEL 2*/}
        <div className="flex">
          <div className="absolute -left-3 z-10">
            <Image
              src="/assets/fruitleft2.png"
              alt="fruitright3"
              height={2000}
              width={2000}
              className='w-[100px] xl:w-[180px] 2xl:w-[200px]'
            />
          </div>
          <div className="relative mx-auto xl:top-24 2xl:top-40 right-16 flex flex-col xl:w-1/2 ">
            <div className="flex items-center text-4xl xl:text-4xl 2xl:text-4xl">
              <span className="font-['Satisfy']  tracking-wider">Always Organic </span>
              <span className="font-[Belanosima] font-medium tracking-wide text-[#6fa720]  mx-3">Always Fresh</span>
            </div>
            <p className="font-normal xl:text-base 2xl:text-xl text-slate-800 tracking-wider  leading-7 xl:w-3/4   my-10" >
              <span className="font-thin">At our juice company, we take pride in our unwavering dedication to organic practices. From farm to bottle, we select only the freshest organic fruits.</span>
              <ul className="mt-12">
                <li>Pure nutrition without pesticides or additives</li>
                <li>Support sustainable agriculture and a healthier planet.</li>
                <li>Experience the true flavors of fresh fruits.</li>
                <li>Boost your well-being with higher levels of antioxidants and nutrients.</li>
              </ul>
            </p>
          </div>

          <div className="absolute -right-6">
            <Image
              src="/assets/productshowcase2.png"
              alt="productshowcase1"
              height={2000}
              width={2000}
              className='w-[100px] xl:w-[600px] 2xl:w-[1000px]'
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductShowcase
