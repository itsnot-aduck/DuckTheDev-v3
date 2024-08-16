import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'
import MobileNav from './MobileNav'

function Header() {
  return (
    <div className='w-full flex justify-between shadow-md'>
      <div className='container mx-auto my-2'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <div className='hidden md:block'>
              <Nav />
            </div>
            <div className='md:hidden'>
              <MobileNav />
            </div>
          </div>
          <Search />
        </div>
      </div>
    </div>
    
  )
};

export default Header;