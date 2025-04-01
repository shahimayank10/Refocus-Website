import React from 'react'
import Button from './Button'

const Product = ({val}) => {
  return (
    <div className='w-full py-20'>
    <div className='max-w-screen-xl m-auto py-5 px-8 flex items-center justify-between '>
    <h1 className='text-6xl capitalize font-medium'>{val.name}</h1>
    <div id="content" className=' w-92 flex flex-col '>
    <p>Lorem ipsum dolor sit, amet consectetur adipi elit. Ratione et delectus, dolore culpa magnam modi in deserunt. Praesentium fugit quos, cum eaque ipsam impedit. Debitis pariatur, id vel temporibus veritatis ratione ipsam dicta minus animi explicabo beatae voluptatum ipsum illo!</p>
    <div className='flex mt-5 gap-2'>
    <Button val={"Get Started"}/>
    <Button val={"Case Study"}/>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Product
