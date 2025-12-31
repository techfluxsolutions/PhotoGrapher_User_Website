import React from 'react';
import './HourlyShoots.css';

const HourlyShoots = () => {
  const hourOptions = [
    { hours: '0-3', label: 'hours' },
    { hours: '6', label: 'hours' },
    { hours: '12', label: 'hours' }
  ];

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/asset/landing-page/hourly-shoots-bg.png)`
  };

  return (
    <section className="hourly-shoots-section" style={sectionStyle}>
      <div className="hourly-shoots-content">
        <div className="hourly-shoots-header">
          <h2 className="hourly-shoots-title">Hourly Shoots</h2>
        </div>
        <div className="hourly-shoots-cards">
          {hourOptions.map((option, index) => (
            <div key={index} className="hourly-card">
              <h3 className="hourly-card-hours">{option.hours}</h3>
              <p className="hourly-card-label">{option.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HourlyShoots;
