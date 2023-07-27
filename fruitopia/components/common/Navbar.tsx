import React, { FC, useState } from 'react'
import { Container, LoginModal } from '@components/index'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'


import { BiSearchAlt } from 'react-icons/bi'
import { FiShoppingBag } from 'react-icons/fi'
import { CiMenuFries } from 'react-icons/ci'

const Navbar: FC = () => {
  const { data: session } = useSession();


  const navLinks = ["home", "products", "shop", "contact"]


  //mobileNav
  const [MobileNav, setMobileNav] = useState(false)

  //handleMobileNavActive
  const handleMobileNavActive = () => {
    setMobileNav(!MobileNav)
  }

  //login/signup
  const [loginModal, setLoginModal] = useState(false)

  //handleLoginModal
  const handleLoginModal = () => {
    setLoginModal(!loginModal)
  }

  return (
    <Container>
      {/* PC/LAPTOP SCREEN NAVBAR */}
      <div className="flex flex-row xl:mx-44 2xl:mx-72 md:py-10 items-center  antialiased collapse sm:visible">

        {/* nav links */}
        <nav className="flex justify-start items-center space-x-6 text-base font-semibold capitalize tracking-wider">
          {navLinks.map((link, index) => (
            <Link key={link} href={index === 0 ? `/` : `#${link}`}>
              <p className={index === 0 ? "text-green-500" : ""}>{link}</p>
            </Link>
          ))}
        </nav>

        {/* LOGO */}
        <Link href="/" className="text-center w-full text-5xl uppercase text-bold"><h1>fruitopia</h1></Link>

        {/* user nav */}
        <nav className="flex flex-1 justify-end items-center space-x-10 capitalize">
          <div className="px-3 whitespace-nowrap capitalize">
            {
              session ? (
                <div>
                  <p>Hi, {session.user?.email}</p>
                  <button onClick={() => signOut()}>Sign Out </button>
                </div>
              ) :
                (
                  <button onClick={handleLoginModal}>
                    login / signup
                  </button>
                )
            }
          </div>

          <button>
            <BiSearchAlt className="text-[20px] 2xl:text-[30px]" />
          </button>
          <button>
            <FiShoppingBag className="text-[20px] 2xl:text-[30px]" />
          </button>
        </nav>
      </div >
      {/* SHOW LOGIN MODAL ON LOGIN/SIGNUP BUTTON CLICK*/}
      {
        loginModal ? (
          <div
            className="fixed inset-0 z-40 bg-zinc-800/40 backdrop-blur-sm"
            onClick={handleLoginModal}
          >
            <LoginModal signIn={signIn} />
          </div>
        ) : null
      }
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

                <div className="fixed inset-0 z-40 bg-zinc-800/40 backdrop-blur-sm" onClick={handleMobileNavActive} >
                  {/* EXPERIMENTAL NAV CLOSE ON CLILCK*/}
                  <div className="fixed inset-x-10 top-10 z-100  bg-white p-8" onClick={(event) => event.stopPropagation()}>
                    <nav className="mt-6">
                      <ul className="text-xl text-center  tracking-widest text-zinc-800">
                        {
                          navLinks.map((link, index) => {
                            return (
                              <li key={link} className="my-5 ysa">
                                <Link className="capitalize" href={index === 0 ? `/` : `#${link}`} onClick={handleMobileNavActive} >{link}</Link>
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

