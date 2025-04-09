import React from 'react';
import './Hero.css';
import m5HeroImg from '../assets/m5-hero.jpg'; // Make sure this image exists

function Hero() {
  return (
    <section className="hero-split" id='overview'>
      
      <div className="hero-content">
        <h1>BMW M5</h1>
        <p>
          Unleash the beast. With unmatched precision, raw power, and elegant design,
          the BMW M5 is the ultimate driving machine.
        </p>
        <a href="https://en.wikipedia.org/wiki/BMW_M5" className="hero-btn" target='blank'>Explore Specifications</a>
      </div>
      <div className="hero-image" >
        <img src={m5HeroImg} alt="BMW M5 Side View" />
      </div>
    </section>
  );
}
export default Hero;
