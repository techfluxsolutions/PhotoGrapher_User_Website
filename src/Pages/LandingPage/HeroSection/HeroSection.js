import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/asset/landing-page/hero-bg.png)`
  };

  return (
    <section className="hero-section" style={heroStyle}>
      <div className="hero-content-wrapper">
        <div className="hero-text-container">
          <h1 className="hero-title">
            One-Stop<br />
            Photography Studio
          </h1>
          <p className="hero-subtitle">
            Tap. Book. Shoot. Done. Everything delivered without the hassle.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary hero-btn">Get a Quote</button>
            <button className="btn-secondary hero-btn">Explore Services</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
