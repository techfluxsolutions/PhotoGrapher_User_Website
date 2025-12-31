import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img 
            src={`${process.env.PUBLIC_URL}/asset/landing-page/logo.png`}
            alt="Logo" 
          />
        </div>

        {/* Navigation Links with Divider */}
        <div className="footer-nav-container">
          <div className="footer-nav">
            <a href="#about" className="footer-link">About</a>
            <a href="#features" className="footer-link">Features</a>
            <a href="#pricing" className="footer-link">Pricing</a>
            <a href="#gallery" className="footer-link">Gallery</a>
            <a href="#join" className="footer-link">Join as Team</a>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-sub-nav">
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#terms" className="footer-link">Terms of Use</a>
            <a href="#sales" className="footer-link">Sales and Refunds</a>
            <a href="#legal" className="footer-link">Legal</a>
            <a href="#sitemap" className="footer-link">Site Map</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#facebook" className="social-icon" aria-label="Facebook">
            <img 
              src={`${process.env.PUBLIC_URL}/asset/landing-page/facebook.png`}
              alt="Facebook" 
            />
          </a>
          <a href="#telegram" className="social-icon" aria-label="Telegram">
            <img 
              src={`${process.env.PUBLIC_URL}/asset/landing-page/telegram.png`}
              alt="Telegram" 
            />
          </a>
          <a href="#instagram" className="social-icon" aria-label="Instagram">
            <img 
              src={`${process.env.PUBLIC_URL}/asset/landing-page/instagram.png`}
              alt="Instagram" 
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© xyz. All Rights Reserved.</p>
      </div>

      {/* Blue Bottom Line */}
      <div className="footer-blue-line"></div>
    </footer>
  );
};

export default Footer;
