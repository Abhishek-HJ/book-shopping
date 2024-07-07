import React from 'react';
import './Hero.css';
import hand from '../../assets/hand_icon.png';
import arrow from '../../assets/arrow.png';
import heroimg from '../../assets/hero.jpg';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand} alt='Hand Icon' />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt='Arrow Icon' />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroimg} alt='New Book Arrivals' />
      </div>
    </div>
  );
}

export default Hero;
