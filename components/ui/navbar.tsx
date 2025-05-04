'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('Home')

  const navItems = ['Home', 'About', 'Projects', 'Contact']

  return (
    <div className='flex justify-between items-center lg:px-50 sm:px-20 md:px-30 px-5 pt-10 gap-5 '>
      <div className='font-bold text-2xl text-blue-500'><Link href='/'>Shiva</Link></div>
      <div className='flex justify-center items-center sm:gap-10 gap-x-3 font-bold'>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setActive(item)}
            className={`cursor-pointer  ${
              active === item ? 'border-b-2 border-blue-500' : 'hover:border-b-2 hover:border-blue-500'
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
