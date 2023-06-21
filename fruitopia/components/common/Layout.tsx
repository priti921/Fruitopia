import React, { FC, ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type PropType = {
  children: ReactNode
}

const Layout: FC<PropType> = ({ children }) => {
  return (
    <div className="h-full mx-auto">
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
