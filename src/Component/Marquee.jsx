import React from 'react'

const Marquee = ({image}) => {
  return (
    <div  className='w-32 font-sky-50 shrink-0 flex justify-center items-center whitespace-nowrap'>
      <img src={image}/>
    </div>
  )
}

export default Marquee
