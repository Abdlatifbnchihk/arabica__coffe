import React from 'react'
import HeroSection from './Hero'
import hero__img from '/img/optimi__images/hero__bg.webp';


function Home() {
  return (
    <div className="container" style={{
        background: `linear-gradient(rgba(60, 58, 58, 0.454), rgba(21, 20, 20, 0.61)), url(${hero__img}) center/cover no-repeat`,
        backgroundSize: 'cover',
      }}>
        <HeroSection />
    </div>
  )
}

export default Home