import React from 'react'

import Product from './Product'

const Products = () => {

    const product=[
        {name:"Arqital",image:"",},
        {name:"TTR",image:"",},
        {name:"Rainfall",image:"",},
        {name:"Jungle",image:"",},
        {name:"Silvr",image:"",},
    ]
  return (
    <div className='w-full py-10 mt-20'>
    { product.map((item,index)=><Product val={item} key={index}/>
     )}
    </div>
  )
}

export default Products
