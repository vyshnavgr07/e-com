'use client'
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const MobileMenu = () => {
  const[isOpen,setIsOpen]=useState(false)
  return (
<>
<div>
       <AlignLeft className='hover:text-darkColor hoverEffect md:hidden'/> 
       </div>
       <div className='md:hidden'>
       <Sidebar 
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}
       />
       </div>


</>
  )
}

export default MobileMenu