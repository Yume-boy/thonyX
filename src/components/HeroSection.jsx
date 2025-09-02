import React from 'react';
import heroImage from './heroImage.jpg'


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <img src={heroImage} alt="Individual" className="center-image" />
        
        <h2>ThonyX</h2>
        <h3></h3>
      </div>
    </div>
  );
};

export default HeroSection;