import React from 'react';
import './WhyChooseSection.css';

const WhyChooseSection = () => {
  const features = [
    {
      icon: `${process.env.PUBLIC_URL}/asset/landing-page/camera.png`,
      title: 'Verified Professionals',
      subtitle: 'Only vetted photographers onboard'
    },
    {
      icon: `${process.env.PUBLIC_URL}/asset/landing-page/payment.png`,
      title: 'Escrow-Secured Payments',
      subtitle: 'Payments are released only after approval'
    },
    {
      icon: `${process.env.PUBLIC_URL}/asset/landing-page/cloud.png`,
      title: 'Private Cloud Storage',
      subtitle: 'High resolution pictures stored securely'
    },
    {
      icon: `${process.env.PUBLIC_URL}/asset/landing-page/delivery.png`,
      title: 'Fast Delivery',
      subtitle: 'Early preview with timely final delivery'
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-sidebar">
        <h2 className="why-choose-heading">Why Choose VEROA ?</h2>
      </div>
      <div className="why-choose-content">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-subtitle">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
