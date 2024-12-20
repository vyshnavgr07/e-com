import React from 'react'
import Title from './Title'

const HomeBanner = () => {
  return (
    <div className=' flex flex-col items-center  justify-center gap-5'>
        <Title className='text-3xl md:text-4xl uppercase font-bold text-center'>
        Lorem, ipsum dolor sit 
       </Title>
       <p className='text-sm text-center text-lightColor/80 font-medium max-w-[480px] '>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At a, maiores ipsa id minus temporibus cupiditate est numquam ducimus labore
       </p>
    </div>
  )
}

export default HomeBanner