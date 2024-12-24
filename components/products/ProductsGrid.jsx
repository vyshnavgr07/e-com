'use client'
import React, { useState } from 'react'
import ProductTab from "./ProductTab"
import ProductCards from './ProductCards';
const ProductsGrid = () => {
    const categories = [
        { title: "Technology", value: "technology" },
        { title: "Health", value: "health" },
        { title: "Finance", value: "finance" },
        { title: "Education", value: "education" },
        { title: "Entertainment", value: "entertainment" },
    
      ];
      const [selected,setSelected]=useState(categories[0].value)
  return (
    <div className='mt-10 flex flex-col items-center'>
        <ProductTab selected={selected}
        categories={categories}
         setSelected={setSelected}/>

         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full'>
        {[...Array(10)].map((_,i)=>(
            <div key={i}>
   <ProductCards/>
                </div>
             
            ))}
               
           
         </div>
    </div>
   
  )
}

export default ProductsGrid