import React from 'react'
import pro from "../../public/pro3.png"
import Image from 'next/image'
import Price from './Price'
const ProductCards = () => {
  return (
    <div className='rounded-lg text-sm overflow-hidden'>
        <div className='bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden'>
        <Image 
        width={500} 
        height={500}  
        src={pro} alt='products'
        priority
        className={`w-full  h-72 object-contain overflow-hidden hover:scale-105 hoverEffect`}
        />
</div>
<div className='py-3 px-2 flex flex-col gap-1 bg-zinc-50 border-t-0 rounded-lg rounded-tl-none rounded-tr-none'>
    <h2 className='font-semibold line-clamp-1 '>Asus republic of gamers</h2>
    <p className=''>simple t-shirt for daily use</p>
    <Price 
    className=''
    price={2000} 
    discount={20}/>
</div>
    </div>
  )
}

export default ProductCards