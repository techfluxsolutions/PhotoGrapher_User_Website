import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        {/* Left Side - Text Content */}
        <div className="hero-text-container">
          <h1 className="hero-title">
            One-Stop Photography Studio
          </h1>
          <div className="hero-subtitle-container">
            <p className="hero-subtitle">
              Tap. Book. Shoot. Done. Everything delivered without the hassle.
              Tap. Book. Shoot. Done. Everything delivered without the hassle.
              Tap. Book. Shoot. Done. Everything delivered without the hassle.
              Tap. Book. Shoot. Done. Everything delivered without the hassle.
              Tap. Book. Shoot. Done. Everything delivered without the hassle.
              Tap. Book. Shoot. Done. Everything delivered without the hassle.
            </p>
          </div>
          <div className="hero-buttons">
            <button className="btn-secondary hero-btn">Explore Services</button>
            <button className="btn-primary hero-btn">Get a Quote</button>
          </div>
        </div>

        {/* Right Side - Image Collage */}
        <div className="hero-images-container">
          <div className="hero-image-large">
            <img
              src={`${process.env.PUBLIC_URL}/asset/landing-page/hero1.png`}
              alt="Camera"
            />
          </div>
          <div className="hero-image-small-group">
            <div className="hero-image-small">
              <img
                src={`${process.env.PUBLIC_URL}/asset/landing-page/hro2.png`}
                alt="Photography Equipment"
              />
            </div>
            <div className="hero-image-small">
              <img
                src={`${process.env.PUBLIC_URL}/asset/landing-page/hero3.png`}
                alt="Camera Lens"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
