import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  name: string
  details: string
  link: string
  color: string
  icon: string

}

const Card: FC<Props> = ({ name, details, link, color, icon }) => {
  const hexcolor = color.replace('"', '\\"').toString()
  console.log(hexcolor)
  return (
    <div className="sm:w-1/3 mx-7 my-3 sm:my-0">
      <div className={`p-5 rounded-3xl text-center`} style={{ backgroundColor: color }}>
        <Image
          src={icon}
          alt={name}
          height={1000}
          width={1000}
          className="w-[85px] mx-auto my-3"
        />
        <h1 className="text-black text-3xl my-5 capitalize">{name}</h1>
        <p className="font-normal text-base text-slate-800 leading-7 w-3/4 mx-auto my-2">{details}</p>
        <button className="bg-white text-sm tracking-wide px-10 py-3 my-5 font-[sans] rounded-lg capitalize font-thin">
          <Link href={link} >{link}</Link>
        </button>
      </div>
    </div>
  )
}

export default Card
