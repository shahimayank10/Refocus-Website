import React from 'react'

import Product from './Product'

const Products = () => {

    const product=[
        {name:"",image:"",},
        {name:"",image:"",},
        {name:"",image:"",},
        {name:"",image:"",},
        {name:"",image:"",},
    ]
  return (
    <div className='w-full py-5 mt-20'>
    { product.map((item,index)=><Product val={item} key={index}/>
     )}
    </div>
  )
}

export default Products
