import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Button = ({val}) => {
  return (
    <div className='px-4 py-2 bg-white text-black rounded-3xl min-w-40 cursor-pointer flex items-center justify-between font-medium'>
      <span className='text-sm'>{val}</span>
      <MdOutlineSubdirectoryArrowRight/>
    </div>
  )
}

export default Button
