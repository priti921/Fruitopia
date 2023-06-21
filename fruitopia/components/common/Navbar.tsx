import React, { FC } from 'react'
import { Container } from '@components/index'
import Link from 'next/link'

const Navbar: FC = () => {
  const navLinks = ["home", "shop", "services", "blog", "contact"]

  return (
    <Container>
      <div className="flex flex-row sm:mx-72 md:py-10 items-center  antialiased">

        {/* nav links */}
        <nav className="flex justify-start space-x-6 text-base font-semibold capitalize tracking-wider">
          {navLinks.map((link, index) => (
            <Link key={link} href={`/${link}`}>
              <p className={index === 0 ? "text-green-500" : ""}>{link}</p>
            </Link>
          ))}
        </nav>

        {/* LOGO */}
        <Link href="/" className="text-center w-full text-5xl uppercase text-bold"><h1>fruitopia</h1></Link>

        {/* user nav */}
        <nav className="flex flex-1 justify-end space-x-10 capitalize">
          <p>login/sign up</p>
          <p>search</p>
          <p>bag</p>
        </nav>
      </div>
    </Container>
  )
}

export default Navbar

