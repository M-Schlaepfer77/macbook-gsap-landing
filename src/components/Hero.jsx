import React from 'react'
import { useEffect, useRef } from 'react'


const Hero = () => {
    const videoRef = useRef;
    useEffect(() => {
    }, []);
  return (
    <section id="hero">
        <div>
            <h1>Macbook Pro</h1>    
            <img src='/title.png' alt='Macbook Pro Title' />   
        </div>
        <video src='/videos/hero.mp4' autoPlay muted playsInline />
        <button>Buy Now</button>
        <p>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero
