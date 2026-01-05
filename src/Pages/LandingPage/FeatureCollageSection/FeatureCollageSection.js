import React from 'react';
import './FeatureCollageSection.css';

const FeatureCollageSection = () => {
  // Create grid layout structure for each slide
  const createGridSlide = (startIndex) => {
    const images = [
      'feature1.png',
      'feature2.png',
      'feature3.png',
      'feature4.png',
      'feature5.png',
      'feature6.png'
    ];
    
    return [
      { src: images[(startIndex + 0) % 6], position: 'large-left' },
      { src: images[(startIndex + 1) % 6], position: 'small-top-right' },
      { src: images[(startIndex + 2) % 6], position: 'large-center' },
      { src: images[(startIndex + 3) % 6], position: 'small-top-far-right' },
      { src: images[(startIndex + 4) % 6], position: 'small-bottom-right' },
      { src: images[(startIndex + 5) % 6], position: 'small-bottom-far-right' }
    ];
  };

  // Create multiple slides for infinite loop (3 copies of 6 variations)
  const allSlides = [
    ...Array(6).fill(0).map((_, i) => createGridSlide(i)),
    ...Array(6).fill(0).map((_, i) => createGridSlide(i)),
    ...Array(6).fill(0).map((_, i) => createGridSlide(i))
  ];

  return (
    <section className="feature-collage-section">
      <div className="feature-collage-header">
        <h2 className="feature-collage-title">Feature Collage</h2>
      </div>

      <div className="feature-collage-slider">
        <div className="feature-collage-track">
          {allSlides.map((slide, slideIndex) => (
            <div key={slideIndex} className="feature-collage-grid">
              {slide.map((image, imgIndex) => (
                <div key={imgIndex} className={`collage-image ${image.position}`}>
                  <img
                    src={`${process.env.PUBLIC_URL}/asset/landing-page/${image.src}`}
                    alt={`Feature ${imgIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCollageSection;
