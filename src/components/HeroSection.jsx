import React from 'react';
import heroImage from './heroImage.jpg';
// import './HeroSection.css'; // optional for extra styling

const HeroSection = () => {
  return (
    <div className="hero-section position-relative text-center text-white">
      <div className="overlay d-flex flex-column align-items-center justify-content-center">
        <img 
          src={heroImage} 
          alt="Individual" 
          className="center-image rounded-circle mb-3"
        />
        <h1 className=" ">ThonyX</h1>
        <h3 className="mb-2">Writer | Community Manager</h3>
        <p className="lead fst-italic">
          Turning ideas into clean, functional, and scalable digital solutions.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
