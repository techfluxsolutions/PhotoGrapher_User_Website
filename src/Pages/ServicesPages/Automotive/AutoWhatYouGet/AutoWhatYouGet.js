import React from 'react';
import './AutoWhatYouGet.css';

const AutoWhatYouGet = () => {
  const images = [
    { id: 1, src: "/asset/ServicePages/Automotive/youget1.png", alt: "Automotive Shot 1", title: "Dramatic Angles" },
    { id: 2, src: "/asset/ServicePages/Automotive/youget2.png", alt: "Automotive Shot 2", title: "Detail Perfection" },
    { id: 3, src: "/asset/ServicePages/Automotive/youget3.png", alt: "Automotive Shot 3", title: "Motion Blur" }
  ];

  return (
    <div className="what-you-get-section">
      <h2 className="get-title">What You Get</h2>
      <div className="get-images-container">
        {images.map((img) => (
          <div key={img.id} className="get-image-wrapper">
            <img src={img.src} alt={img.alt} className="get-image" />
            <div className="get-overlay"></div>
            <div className="get-content">
              <h3 className="get-item-title">{img.title}</h3>
            </div>
            <div className="get-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
                <path d="M9 12H15M15 12L12 9M15 12L12 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoWhatYouGet;
