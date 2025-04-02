import React from 'react'

const Streap = ({val}) => {
  return (
        <div  className='flex items-center w-[20%] flex-wrap border-zinc-600  border-t-[1px] border-r-[1px] border-b-[1px] p-3  justify-between'>
         <img className='w-15' src={val.image}/>
         <span className=''>{val.num}</span>
        </div>
   
  )
}

export default Streap
