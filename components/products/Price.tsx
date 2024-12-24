import React from 'react'
import PriceFormatter from './PriceFormatter'
interface props {
    price:number|undefined,
    discount:number|undefined,
    className:string
}
const Price = ({price,discount,className}:props) => {
  return (
    <div className='flex items-center  gap-2'>
      <PriceFormatter amount={price}
      className={className}
      />
      {price && discount &&
      <PriceFormatter 
      className='line-through text-xs font-medium' 
      amount={price+(discount*price)/100}/>
      }

    </div>
  )
}

export default Price