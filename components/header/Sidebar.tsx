import React from 'react'

interface props{
  isOpen:boolean,
  isClose:()=>void;
}
const Sidebar = ({isOpen,isClose}:props) => {
  return ( 
    <div className='fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect w-full'>
      Sidebar
    </div>
  )
}

export default Sidebar