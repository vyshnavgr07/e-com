import React from 'react'
interface   categories{
title:string,
value:string
}
interface props{
    selected:string,
    setSelected:(tab:string)=>void,
    categories:categories[]
}
const ProductTab = ({selected,setSelected,categories}:props) => {

  return (
    <div className='flex text-sm font-semibold'>
      <div className='flex items-center gap-2 '>
        {categories.map((item)=>(
          <button 
          onClick={()=>setSelected(item.value)}
          className={`border border-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full
             hover:bg-darkColor hover:text-white hoverEffect ${selected===item.value&&"bg-darkColor text-white"}`}
          key={item.title}>
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductTab