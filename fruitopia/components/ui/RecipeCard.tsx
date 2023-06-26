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
    <div className="sm:my-0">
      <Image
        src={image}
        alt={name}
        height={1000}
        width={1000}
        className="w-[400px] my-3"
      />
      <div className="w-2/3 mx-auto font-[sans] font-thin text-center whitespace-nowrap">
        <h1 className="text-black text-base font-thin my-5">{name}</h1>
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


        <p className="text-[#6fa720] my-3">${price}</p>
        <button className="bg-[#6fa720] text-white text-sm tracking-wide px-7 py-3 rounded-medium font-bold">
          <Link href={"/"} >Add to cart</Link>
        </button>
      </div>
    </div>
  )
}

export default RecipeCard
