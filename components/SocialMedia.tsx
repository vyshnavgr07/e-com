import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface props{
    className?:string,
    iconClassName?:string;
    tooltipClassName?:string
}

const SocialMedia = ({className,iconClassName}:props) => {
    const socialLinks = [
        {
          title: "GitHub",
          icon:<Github  className='w-5 h-5'/>, 
          href: "https://github.com/yourusername",
        },
        {
          title: "LinkedIn",
          icon:<Linkedin  className='w-5 h-5'  />, 
          href: "https://www.linkedin.com/in/yourusername",
        },
        {
          title: "Instagram",
          icon:<Instagram className='w-5 h-5' />, 
          href: "https://www.instagram.com/yourusername",
        },
        {
          title: "Facebook",
          icon:<Facebook  className='w-5 h-5' />, 
          href: "https://www.facebook.com/yourusername",
        },
      ];
  return (
    <TooltipProvider>
        <div  className={cn('flex items-center   gap-3.5',className)}>
        {socialLinks.map((item)=>(
                <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                    <Link href={item.href} 
                    className={cn("rounded-full p-2 border hover:text-white hover:border-white hoverfect",iconClassName)}
                    >
                 
                    {item?.icon}
                    </Link>
                </TooltipTrigger>
                <TooltipContent className={cn("bg-white text-darkColor font-semibold")}>
                  {item?.title}
                </TooltipContent>
            </Tooltip>
        ))}
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia