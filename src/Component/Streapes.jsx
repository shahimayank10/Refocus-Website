import React from 'react'
import Streap from './Streap.Jsx'

const Streapes = () => {

    const awards=[
        {image:"https://assets.awwwards.com/awards/media/cache/thumb_user_retina/avatar/241/5cb9b0bcde06a872097776.jpg", num:33},
        {image:"https://assets.awwwards.com/awards/media/cache/thumb_user_retina/avatar/60229/574c06250d056.jpeg",num:10},
        {image:"https://assets.awwwards.com/awards/media/cache/thumb_user_retina/avatar/250950/538c4ed159b91.jpeg",num:9},
        {image:"https://assets.awwwards.com/awards/media/cache/thumb_user_retina/avatar/237203/60231c64ede15878488619.jpg",num:12},
        {image:"https://assets.awwwards.com/awards/media/cache/thumb_user_retina/avatar/221/5e5e82f158fa1592082665.jpg",num:5},
    ]
    
  return (
    <div className='flex items-center w-full mt-10'>
      {awards.map((item,index)=><Streap val={item} key={index}/> )}
    </div>
  )
}

export default Streapes
