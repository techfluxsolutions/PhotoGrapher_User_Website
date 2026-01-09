import React from 'react';
import './AutoWhyVeroa.css';

const AutoWhyVeroa = () => {
  const whyItems = [
    {
      id: 1,
      icon: "/asset/ServicePages/Automotive/why1.png",
      text: "Detail-focused\nExperts"
    },
    {
      id: 2,
      icon: "/asset/ServicePages/Automotive/why2.png",
      text: "Premium\nFinishing"
    },
    {
      id: 3,
      icon: "/asset/ServicePages/Automotive/why3.png",
      text: "Secure\nDelivery"
    }
  ];

  return (
    <div className="why-veroa-section">
      <div className="why-veroa-title-container">
        <h2 className="why-veroa-title">Why Veroa ?</h2>
      </div>
      <div className="why-veroa-cards">
        {whyItems.map((item) => (
          <div key={item.id} className="why-veroa-card">
            <img src={item.icon} alt={item.text.replace('\n', ' ')} className="why-icon" />
            <p className="why-card-text">
              {item.text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < item.text.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoWhyVeroa;
