import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Navbar from '../Components/Navbar/Navbar'
import HomeImg from '../Components/Assets/HomePage.avif'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      
      <Navbar/>
      <Hero
        cName="hero"
        heroImg={HomeImg}
        btnClass='hide'

      />
      
      <Popular/>
      
   
      <NewsLetter/>
    </div>
  )
}

export default Shop
