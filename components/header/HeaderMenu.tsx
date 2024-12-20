'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderMenu = () => {
    const pathname=usePathname()
   console.log(pathname)
    const menu = [
        { title: "Home", href: "/" },
        { title: "Men", href: "/men" },
        { title: "Women", href: "/women" },
        { title: "Kids", href: "/kids" },
        { title: "Featured", href: "/featured" },
    ];
    
  return (
    <div className='hidden md:inline-flex items-center  w-1/3 gap-5 text-sm  capitalize font-semibold '>
        {menu?.map((item)=>(
        <Link
        className="hover:text-darkColor  hoverEffect relative group"
         key={item?.title}  href={item.href}>
        {item.title}
        <span className={`absolute -bottom-0.5 left-1/2 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2  group-hover:left-0 ${pathname===item?.href && "w-1/2"}`}></span>
        <span className={`absolute -bottom-0.5 right-1/2 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2  group-hover:right-0 ${pathname===item?.href && "w-1/2"} `}></span>

        </Link>
        ))}
    </div>
  )
}

export default HeaderMenu