import React, { FC, useState } from 'react'
import { Container } from '@components/index'
import Link from 'next/link'

import { BiSearchAlt } from 'react-icons/bi'
import { FiShoppingBag } from 'react-icons/fi'

import { CiMenuFries } from 'react-icons/ci'

const Navbar: FC = () => {
  const navLinks = ["home", "shop", "services", "blog", "contact"]


  //mobileNav
  const [MobileNav, setMobileNav] = useState(false)

  //handleMobileNavActive
  const handleMobileNavActive = () => {
    setMobileNav(!MobileNav)
    console.log(MobileNav)
  }

  return (
    <Container>
      {/* PC/LAPTOP SCREEN NAVBAR */}
      <div className="flex flex-row xl:mx-44 2xl:mx-72 md:py-10 items-center  antialiased collapse sm:visible">

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


      {/* MOBILE SCREEN NAVBAR*/}
      <div className="absolute right-0 top-0 z-10 sm:collapse">
        <div className="py-5 px-5">
          <button className="w-10"
            onClick={handleMobileNavActive}
          >
            <CiMenuFries className="mx-auto text-[30px]" />
          </button>
          {
            //OPENS MOBILE NAV
            MobileNav ?
              (<>

                <div className="fixed inset-0 z-40 bg-zinc-800/40 backdrop-blur-sm" >
                  {/* EXPERIMENTAL NAV CLOSE ON CLILCK*/}
                  <div className="fixed inset-0 z-50 " onClick={handleMobileNavActive} />
                  <div className="fixed inset-x-10 top-10 z-100  bg-white p-8">
                    <div className="flex flex-row-reverse items-center justify-between tracking-wider">
                      <button
                        className="m-1 p-1"
                        type="button"
                        onClick={handleMobileNavActive}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-10 w-10 text-zinc-500 dark:text-zinc-400"
                        >
                          <path
                            d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      {/*
                        <h2 className="text-xl font-medium text-zinc-600 ml-10">
                        Navigation
                      </h2>
                     */}
                    </div>
                    <nav className="mt-6">
                      <ul className="text-xl text-center  tracking-widest text-zinc-800">
                        {
                          navLinks.map((link) => {
                            return (
                              <li key={link} className="my-5">
                                <Link href={"${link}"} className="">{link}</Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </nav>
                  </div>
                </div>
              </>
              )
              : null
          }

        </div>
      </div>
    </Container >
  )
}

export default Navbar

