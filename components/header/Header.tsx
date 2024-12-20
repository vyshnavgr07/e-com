import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import { Butterfly_Kids } from 'next/font/google'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='border-b border-b-gray-400 py-5 '>
    <Container className='flex items-center justify-between  gap-7  text-lightColor '>
    <HeaderMenu/>
    <div className='w-auto  md:w-1/3 flex items-center gap-2  '>
    <MobileMenu/>
      <Logo>
       EVO
      </Logo>
      </div>
      <div className='w-auto md:1/3 flex items-center justify-end gap-5' >
       <SearchBar/>
       <CartIcon/>
       <div>
        <button>Login</button>
       </div>
        </div>
    </Container>
    </header>
  )
}

export default Header