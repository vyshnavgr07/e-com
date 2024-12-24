import { cn } from '@/lib/utils';
import React from 'react'

interface props{
    amount:number|undefined;
    className:string
}
const PriceFormatter = ({amount,className}:props) => {
    const formattedPrice = new Number(amount).toLocaleString(
        "en-IN",{
            style: "currency",
             currency: "INR", 
        }
    )
return (
<span className={cn('text-sm font-semibold text-darkColor',className)}>{formattedPrice}</span>  
  )
}

export default PriceFormatter
