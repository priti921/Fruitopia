import React from 'react'
import Image from 'next/image'

const ProductShowcase = () => {
  return (
    <section id="products">
      <div className="container">
        {/* PANEL 1*/}
        <div className="flex flex-col sm:flex-row">
          <div className="relative -left-3">
            <Image
              src="/assets/productshowcase1.png"
              alt="productshowcase1"
              height={2000}
              width={2000}
              className='w-[1000px] xl:w-[1500px] 2xl:w-[2500px]'
            />
          </div>
          <div className="relative xl:top-24 2xl:top-56 flex flex-col  xl:w-5/6  xl:mx-10">
            <div className="flex items-center text-4xl xl:text-4xl 2xl:text-5xl whitespace-nowrap">
              <p className="font-['Satisfy'] tracking-wider">Best products</p>
              <p className="ysa font-medium tracking-wide mb-3 text-[#6fa720]  mx-3">Best results</p>
            </div>
            <div className=" xl:text-base 2xl:text-xl text-slate-800 tracking-wider text-right leading-7  xl:w-5/6 2xl:w-full  my-10 font-Ysabeau" >
              <p className="my-3 font-thin"> Our commitment to excellence shines through in every sip of our juices. </p>
              <p className="font-normal">
                Each carefully crafted blend is made with the finest fruits, ensuring the best product and delivering exceptional results for your health and well-being. Experience the difference and unlock the power of nature&apos;s goodness with our top-quality offerings.
              </p>
            </div>
          </div>
          <div className="absolute right-0 z-10">
            <Image
              src="/assets/fruitright3.png"
              alt="fruitright3"
              height={2000}
              width={2000}
              className='w-[0px] xl:w-[180px] 2xl:w-[300px]'
            />
          </div>
        </div>
        {/* PANEL 2*/}
        <div className="flex flex-col sm:flex-row">
          <div className="absolute -left-3 z-10">
            <Image
              src="/assets/fruitleft2.png"
              alt="fruitright3"
              height={2000}
              width={2000}
              className='w-[0px] xl:w-[180px] 2xl:w-[200px]'
            />
          </div>
          <div className="sm:relative mx-auto xl:top-24 2xl:top-40 2xl:mt-40 sm:right-32 2xl:right-48 flex flex-col xl:w-1/2 ">
            <div className="flex items-center text-4xl xl:text-4xl 2xl:text-4xl">
              <p className="font-['Satisfy']  tracking-wider">Always Organic </p>
              <p className="ysa font-[Belanosima] font-medium mb-3 tracking-wide text-[#6fa720]  mx-3">Always Fresh</p>
            </div>
            <div className="font-normal font-Ysabeau xl:text-base 2xl:text-xl text-slate-800 tracking-wider  leading-7 xl:w-3/4   my-10" >
              <p className="font-thin">At our juice company, we take pride in our unwavering dedication to organic practices. From farm to bottle, we select only the freshest organic fruits.</p>
              <ul className="mt-12 whitespace-nowrap list">
                <li>Pure nutrition without pesticides or additives</li>
                <li>Support sustainable agriculture and a healthier planet.</li>
                <li>Experience the true flavors of fresh fruits.</li>
                <li>Boost your well-being with higher levels of antioxidants and nutrients.</li>
              </ul>
            </div>
          </div>

          <div className="sm:absolute sm:-right-1 order-1">
            <Image
              src="/assets/productshowcase2.png"
              alt="productshowcase1"
              height={2000}
              width={2000}
              className='w-[1000px] xl:w-[600px] 2xl:w-[1000px]'
            />
          </div>
        </div>
        {/* PANEL 3*/}
        <div className="flex flex-col sm:flex-row mt-24 2xl:mt-96">
          <div className="relative -left-3">
            <Image
              src="/assets/productshowcase3.png"
              alt="productshowcase1"
              height={4000}
              width={4000}
              className='w-[1000px] xl:w-[1500px] 2xl:w-[2500px]'
            />
          </div>
          <div className="relative xl:top-24 2xl:top-56 flex flex-col  xl:w-5/6  xl:mx-10">
            <div className="flex items-center text-4xl xl:text-4xl 2xl:text-4xl whitespace-nowrap">
              <p className="font-['Satisfy']  tracking-wider">Made with </p>
              <p className="ysa font-medium tracking-wide mb-3 text-[#6fa720]  mx-3">Love</p>
            </div>
            <div className="font-normal xl:text-base 2xl:text-xl text-slate-800 tracking-wider text-left leading-7  xl:w-4/5 2xl:w-full  my-10" >
              <p className="font-Ysabeau"> Our juices are more than just beverages; they are a labor of love. Each bottle is crafted with utmost care and attention to detail. </p>
              <h1 className="mt-12 xl:text-2xl 2xl:text-3xl font-[Satisfy]">&quot; The results have been amazing for me and many of my clients. &quot;</h1>
              <div className="flex space-x-1 mt-5">
                <Image
                  src="/icons/star.png"
                  alt="stars"
                  height={2000}
                  width={2000}
                  className='w-[10px] xl:w-[20px] 2xl:w-[30px]'
                />
                <Image
                  src="/icons/star.png"
                  alt="stars"
                  height={2000}
                  width={2000}
                  className='w-[10px] xl:w-[20px] 2xl:w-[30px]'
                />
                <Image
                  src="/icons/star.png"
                  alt="stars"
                  height={2000}
                  width={2000}
                  className='w-[10px] xl:w-[20px] 2xl:w-[30px]'
                />
                <Image
                  src="/icons/star.png"
                  alt="stars"
                  height={2000}
                  width={2000}
                  className='w-[10px] xl:w-[20px] 2xl:w-[30px]'
                />
                <Image
                  src="/icons/star.png"
                  alt="stars"
                  height={2000}
                  width={2000}
                  className='w-[10px] xl:w-[20px] 2xl:w-[30px]'
                />
              </div>
            </div>
            <p className="font-bold text-base text-slate-500 ysa">Zoltal Dul, Las Vegas</p>
          </div>
          <div className="absolute right-0 mt-24 z-10">
            <Image
              src="/assets/fruitright2.png"
              alt="fruitright3"
              height={2000}
              width={2000}
              className='w-[0px] xl:w-[180px] 2xl:w-[300px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
