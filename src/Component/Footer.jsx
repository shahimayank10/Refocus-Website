import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen-xl m-auto mt-20 h-52 px-5'>
      <h1 className='text-9xl'>Refokus.</h1>
      <div className='w-2/5 flex justify-between mt-10 items-center text-sm'>
        {["privacy Policy","Cookies Policy","Impressum","Terms"].map((item,i)=><p key={i}>{item}</p>)}</div>
    </div>
  )
}

export default Footer
