import React, { useState } from 'react';
import './AutoWhatWeCover.css';

const AutoWhatWeCover = () => {
  const [activePage, setActivePage] = useState(0);

  const coverItems = [
    {
      id: 1,
      icon: "/asset/ServicePages/Automotive/shots.png",
      title: "Exterior &\nInterior Shots"
    },
    {
      id: 2,
      icon: "/asset/ServicePages/Automotive/highlights.png",
      title: "Detail\nHighlights"
    },
    {
      id: 3,
      icon: "/asset/ServicePages/Automotive/visuals.png",
      title: "Promotional\nVisuals"
    },
    // Dummy items
    {
      id: 4,
      icon: "/asset/ServicePages/Automotive/shots.png",
      title: "Action\nShots"
    },
    {
      id: 5,
      icon: "/asset/ServicePages/Automotive/highlights.png",
      title: "Studio\nLighting"
    },
    {
      id: 6,
      icon: "/asset/ServicePages/Automotive/visuals.png",
      title: "Brand\nIdentity"
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(coverItems.length / itemsPerPage);

  const handleDotClick = (index) => {
    setActivePage(index);
  };

  const displayedItems = coverItems.slice(
    activePage * itemsPerPage,
    (activePage + 1) * itemsPerPage
  );

  return (
    <div className="what-we-cover-section">
      <h2 className="cover-title">What We Cover</h2>
      
      <div className="cover-cards-container">
        {displayedItems.map((item) => (
          <div key={item.id} className="cover-card">
            <div className="cover-icon-wrapper">
              <img src={item.icon} alt={item.title.replace('\n', ' ')} className="cover-icon" />
            </div>
            <h3 className="cover-card-title">
              {item.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < item.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
          </div>
        ))}
      </div>

      <div className="pagination-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${activePage === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AutoWhatWeCover;
