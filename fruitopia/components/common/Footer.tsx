import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='relative z-10'>
      <div className='w-3/4 mx-auto ysa font-sm text-[#361615]'>
        <hr className='border-t-[.1px] border-gray-300' />
        <p className='text-center my-5'> Copyright &copy; <span className='font-bold'>Fruitopia</span> {new Date().getFullYear()}.All Rights Reserved</p>
      </div>
    </section>
  )

}

export default Footer
