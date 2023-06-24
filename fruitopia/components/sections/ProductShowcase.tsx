import React from 'react'
import Image from 'next/image'

const ProductShowcase = () => {
  return (
    <section id="productshowcase">
      <div className="container">
        {/* PANEL 1*/}
        <div className="flex">
          <div className="absolute -left-2">
            <Image
              src="/assets/productshowcase1.png"
              alt="fruitleft1"
              height={2000}
              width={2000}
              className='w-[100px] xl:w-[650px] 2xl:w-[950px]'
            />
          </div>
          <div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
