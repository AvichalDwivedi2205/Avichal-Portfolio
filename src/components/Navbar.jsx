import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles'
import { navLinks } from '../contants'
import {logo, menu, close} from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  

  return (
    <nav
      className={`${styles.paddingX} lg-pl-10 w-full flex
      items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className='w-full flex justify-between items-center
         max-w-7xl mx-auto select-none'>
          <Link
            to="/"
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              //setActive keeps track of where we are on the page
              window.scrollTo(0, 0);
            }}>
              <img src={logo} alt="logo" className='w-14 h-14 object-contain'/>
              <p className='text-white text-lg 
              font-bold cursor-pointer'>Avichal Dwivedi 
              <span className='sm:block hidden'> | Portfolio Website</span></p>
          </Link>
          <ul className='hidden sm:flex flex-row gap-12 lg:gap-20'>
             {navLinks.map((content) => (
               <li
               key={content.id}
               onClick={() => setActive(content.title)}
               className={`${
                active === content.title
                 ? "text-white" 
                 : "text-secondary"
               } hover:text-white hover:text-[20px]
               font-bold cursor-pointer lg:text-2xl lg:font-bold`}
               >
                <a href={`#${content.id}`}>{content.title}</a>
               </li>
             ))}
          </ul>

          <div  className='sm:hidden flex justify-end
          items-center'>
            <img 
            src= {toggle? close : menu}
            alt="menu" 
            className='h-[30px] w-[30px] object-contain
            cursor-pointer'
            onClick={() => setToggle(!toggle)}/>

            <div className={`${!toggle ? "hidden" : "flex"}
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2
            min-w-[140px] z-10 rounded-xl`}>
              <ul className='flex flex-col gap-6'>
             {navLinks.map((content) => (
               <li
               key={content.id}
               className={`${
                active === content.title ? "text-white" : "text-secondary"
               } hover:text-white hover:text-[20px]
               font-bold cursor-pointer`}
               onClick={() => {
                setToggle(!toggle)
                setActive(content.title)
              }}
               >
                <a href={`${content.id}`}>{content.title}</a>
               </li>
             ))}
          </ul>
            </div>

          </div>
         </div>
    </nav>
  )
}

export default Navbar