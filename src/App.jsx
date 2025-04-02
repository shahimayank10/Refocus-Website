import { useState } from 'react'
import Nav from './Component/Nav'
import Work from './Component/Work'
import Streapes from './Component/Streapes'
import Products from './Component/Products'
import Marquees from './Component/Marquees'
import Footer from './Component/Footer'
import LocomotiveScroll from 'locomotive-scroll';





function App() {

  const locomotiveScroll = new LocomotiveScroll();
 

  return (
    <div className='w-full h-auto bg-zinc-800  text-white'>
      <Nav/>
      <Work/>
     <Streapes/>
     <Products/>
     <Marquees/>
     <Footer/>
    </div>
  )
}

export default App
