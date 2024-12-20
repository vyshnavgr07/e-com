import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

interface props{
    children:React.ReactNode;
    className?:string
}
const Logo = ({children,className}:props) => {
  return (
    <Link href={"/"}>
    <h2 className={cn('text-2xl text-darkColor font-black tracking-wider uppercase',className)}>
        {children}
    </h2>
    </Link>
  )
}

export default Logo