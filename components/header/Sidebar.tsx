import React from 'react'
import {motion} from 'motion/react'
import Logo from './Logo';
import { Button } from '../ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from '../SocialMedia';



interface props{
  isOpen:boolean,
  onClose:()=>void;
}
const Sidebar = ({isOpen,onClose}:props) => {
  const menu = [
    { title: "Home", href: "/" },
    { title: "Men", href: "/men" },
    { title: "Women", href: "/women" },
    { title: "Kids", href: "/kids" },
    { title: "Featured", href: "/featured" },
];

const pathname=usePathname()

  return ( 
    <div className={`fixed inset-y-0 left-0 z-50
     bg-darkColor/50 shadow-xl hoverEffect w-full ${isOpen?"translate-x-0":"-translate-x-full"}`}>
   <motion.div initial={{opacity:0}} 
   animate={{opacity:1}}
   transition={{duration:0.4,delay:0.3}}

   >
    <div className='min-w-72 max-w-96 bg-darkColor text-white/90 h-screen p-10 border-r border-r-white flex flex-col'>
    <div className='flex items-center justify-between'>
      <button   onClick={onClose}>
      <Logo 
       className='text-white '>
         EVO
         </Logo> 
      </button>
       <Button 
        onClick={onClose}
        className='hover:text-red-500 hoverEffect  font-semibold text-3xl ' >
          x
        </Button >
</div>

<div className='flex flex-col gap-3.5 text-base font-semibold -tracking-wide '>
        {menu?.map((item)=>(
        <Link
        onClick={onClose}
        className={`text-base text-gray-300 hover:text-white  hoverEffect  ${pathname===item?.href && "text-white"}`}
         key={item?.title}  href={item.href}>
        {item.title}

        </Link>
        ))}
    </div>

<SocialMedia/>

    </div>
   </motion.div>
    </div>
  )
}

export default Sidebar