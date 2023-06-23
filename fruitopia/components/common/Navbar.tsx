import React, { FC } from 'react'
import { Container } from '@components/index'
import Link from 'next/link'

import { BiSearchAlt } from 'react-icons/bi'
import { FiShoppingBag } from 'react-icons/fi'

const Navbar: FC = () => {
  const navLinks = ["home", "shop", "services", "blog", "contact"]

  return (
    <Container>
      <div className="flex flex-row xl:mx-44 2xl:mx-72 md:py-10 items-center  antialiased">

        {/* nav links */}
        <nav className="flex justify-start items-center space-x-6 text-base font-semibold capitalize tracking-wider">
          {navLinks.map((link, index) => (
            <Link key={link} href={`/${link}`}>
              <p className={index === 0 ? "text-green-500" : ""}>{link}</p>
            </Link>
          ))}
        </nav>

        {/* LOGO */}
        <Link href="/" className="text-center w-full text-5xl uppercase text-bold"><h1>fruitopia</h1></Link>

        {/* user nav */}
        <nav className="flex flex-1 justify-end items-center space-x-10 capitalize">
          <p className="px-3 whitespace-nowrap">login / signup</p>
          <BiSearchAlt className="text-[20px] 2xl:text-[30px]" />
          <FiShoppingBag className="text-[20px] 2xl:text-[30px]" />
        </nav>
      </div>
    </Container>
  )
}

export default Navbar

