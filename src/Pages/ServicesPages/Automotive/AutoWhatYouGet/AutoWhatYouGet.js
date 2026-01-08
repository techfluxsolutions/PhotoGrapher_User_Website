import React from 'react';
import './AutoWhatYouGet.css';

const AutoWhatYouGet = () => {
  const images = [
    { id: 1, src: "/asset/ServicePages/Automotive/youget1.png", alt: "Automotive Shot 1" },
    { id: 2, src: "/asset/ServicePages/Automotive/youget2.png", alt: "Automotive Shot 2" },
    { id: 3, src: "/asset/ServicePages/Automotive/youget3.png", alt: "Automotive Shot 3" }
  ];

  return (
    <div className="what-you-get-section">
      <h2 className="get-title">What You Get</h2>
      <div className="get-images-container">
        {images.map((img) => (
          <div key={img.id} className="get-image-wrapper">
            <img src={img.src} alt={img.alt} className="get-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoWhatYouGet;
