import React from 'react';
import heroImage from '../public/heroImage.jpg'


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <img src={heroImage} alt="Individual" className="center-image" />
        
        <h2>Anthony</h2>
      </div>
    </div>
  );
};

export default HeroSection;