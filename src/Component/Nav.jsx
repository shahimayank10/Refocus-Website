import React from 'react'
import Button from './Button'

const Nav = () => {
  return (
    <div className='max-w-screen-xl px-4 py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-600'>
     
     <div id='nav-section' className='flex gap-16 text-sm  items-center justify-between'>
     {["Home","Work","Culture","","News"].map((item,index)=>item.length>0 ? (<a key={index} href='#'>{item}</a>) :(<span key={index} className='w-[1px] h-7 bg-zinc-600'></span>))}
     </div>

      <Button val={"Get Started"}/>
    </div>
  )
}

export default Nav
