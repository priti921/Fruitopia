import Card from '@components/ui/Card'
import Image from 'next/image'
import React, { FC } from 'react'

const ProductCards: FC = () => {

  const cardData = [
    {
      name: "organic",
      details: "Experience the refreshing taste of our carefully selected, pesticide-free fruits. Each sip celebrates nature's goodness, delivering pure nourishment to your body and soul",
      link: "learn more",
      linkName: "#story",
      color: "#ffe7ad",
      icon: "/icons/orange.png"
    },
    {
      name: "natural",
      details: "Indulge in the true essence of fruits with our vibrant and additive-free juices. We preserve the integrity of each fruit, providing a genuine and invigorating taste experience.",
      link: "view products",
      linkName: "#products",
      color: "#bafca9",
      icon: "/icons/cherries.png"
    }, {
      name: "healthy",
      details: "Embrace a healthier lifestyle with our juices. Our balanced recipes enhance vitality, support natural defenses, and provide a delicious way to boost your well-being",
      link: "contact us",
      linkName: "#contact",
      color: "#facabb",
      icon: "/icons/strawberry-juice.png"
    }
  ]


  return (
    <section id="productcards" className="h-full">
      {/* PRODUCT TITLE */}
      <div className="container mx-auto sm:-mt-16 2xl:px-24 pt-5 sm:pt-36 xl:pt-24 2xl:pt-32">
        {/* HERO RIGHT FRUIT */}
        <div className="absolute right-0 mt-[650px] xl:mt-52 2xl:mt-12">
          <Image
            src="/assets/fruitright2.png"
            alt="fruitsright1"
            height={2000}
            width={2000}
            className='w-[100px] xl:w-[150px] 2xl:w-[230px]'
          />
        </div>
        <div className='absolute -left-3 mt-[1200px] xl:mt-64 2xl:mt-40'>
          <Image
            src="/assets/fruitleft2.png"
            alt="fruitleft1"
            height={2000}
            width={2000}
            className='w-[100px] xl:w-[150px] 2xl:w-[230px]'
          />
        </div>

        <div className="mx-auto text-center  xl:w-1/2 flex flex-col w-full sm:mb-10">
          <div className="flex flex-col  items-center justify-center text-4xl xl:text-6xl 2xl:text-8xl">
            <h1 className="font-[Satisfy] capitalize tracking-wider"> what makes us</h1>
            <p className="font-Ysabeau font-medium tracking-wide text-[#6fa720]  mx-3">different</p>
          </div>
          <p className="text-sm sm:text-base font-bold w-3/4 sm:w-1/2 mx-auto my-5 text-slate-800 tracking-wider capitalize">Fresh, sustainable, customer-centric: Redefining the juice experience.</p>
        </div>
        {/* CARDS */}
        <div className="flex flex-col mt-10 sm:flex-row sm:mx-20 sm:my-24">
          {
            cardData.map(({ name, details, link, linkName, color, icon }) => <Card key={name} name={name} details={details} link={link} linkName={linkName} color={color} icon={icon} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ProductCards
