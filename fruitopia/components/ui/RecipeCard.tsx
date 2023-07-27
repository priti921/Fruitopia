import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'


type Props = {
  name: string
  price: string
  image: string

}


const RecipeCard: FC<Props> = ({ name, price, image }) => {
  return (
    <div className="my-5 sm:my-0">
      <Image
        src={image}
        alt={name}
        height={1000}
        width={1000}
        className="w-[400px] my-3"
      />
      <div className="w-2/3 mx-auto ysa font-bold text-center whitespace-nowrap">
        <h1 className="text-neutral-800 text-lg mt-5 mb-2">{name}</h1>
        {/* stars*/}
        <div className="flex space-x-1 justify-center items-center mt-1">
          <Image
            src="/icons/star.png"
            alt="stars"
            height={2000}
            width={2000}
            className='w-[10px] xl:w-[15px] 2xl:w-[20px]'
          />
          <Image
            src="/icons/star.png"
            alt="stars"
            height={2000}
            width={2000}
            className='w-[10px] xl:w-[15px] 2xl:w-[20px]'
          />
          <Image
            src="/icons/star.png"
            alt="stars"
            height={2000}
            width={2000}
            className='w-[10px] xl:w-[15px] 2xl:w-[20px]'
          />
          <Image
            src="/icons/star.png"
            alt="stars"
            height={2000}
            width={2000}
            className='w-[10px] xl:w-[15px] 2xl:w-[20px]'
          />
          <Image
            src="/icons/star.png"
            alt="stars"
            height={2000}
            width={2000}
            className='w-[10px] xl:w-[15px] 2xl:w-[20px]'
          />
        </div>


        <p className="text-[#6fa720] mt-2 mb-4 font-extrabold text-2xl">${price}</p>
        <button className="bg-[#6fa720] text-white text-sm tracking-wide px-7 py-3 rounded-[5px] font-bold">
          <Link href={"/"} >Add to cart</Link>
        </button>
      </div>
    </div>
  )
}

export default RecipeCard
