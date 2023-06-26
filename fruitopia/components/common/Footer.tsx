import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='relative z-10'>
      <div className='w-3/4 mx-auto font-[sans]'>
        <hr className='border-t-2 border-gray-300' />
        <p className='text-center font-thin text-sm my-5 text-gray-700'> Copyright &copy; <span className='font-bold'>Fruitopia</span> {new Date().getFullYear()}.All Rights Reserved</p>
      </div>
    </section>
  )

}

export default Footer
