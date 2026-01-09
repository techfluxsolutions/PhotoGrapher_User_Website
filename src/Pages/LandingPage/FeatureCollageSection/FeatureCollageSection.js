import React from 'react';
import './FeatureCollageSection.css';

const FeatureCollageSection = () => {
  // Define source images in the specific order for the layout:
  // 1: Tall (Left)
  // 2: Top (Middle-Left)
  // 3: Bottom (Middle-Left)
  // 4: Tall (Middle-Right)
  // 5: Top (Right)
  // 6: Bottom (Right)
  const featureImages = [
    'feature1.png', // Tall
    'feature6.png',  // Bottom Split 2
    'feature3.png', // Bottom Split 1
    'feature4.png', // Tall
    'feature5.png', // Top Split 2
    'feature2.png' // Top Split 1
  ];

  // We need multiple sets for the infinite loop
  const slides = [1, 2, 3]; 

  return (
    <section className="feature-collage-section">
      <div className="feature-collage-header">
        <h2 className="feature-collage-title">Feature Collage</h2>
      </div>

      <div className="feature-collage-slider">
        <div className="feature-collage-track">
          {slides.map((_, index) => (
            <div key={index} className="feature-collage-block">
              {/* Column 1: Tall */}
              <div className="collage-item item-tall-1">
                <img src={`${process.env.PUBLIC_URL}/asset/landing-page/${featureImages[0]}`} alt="Feature 1" />
              </div>

              {/* Column 2: Split */}
              <div className="collage-item item-split-top-1">
                <img src={`${process.env.PUBLIC_URL}/asset/landing-page/${featureImages[1]}`} alt="Feature 2" />
              </div>
              <div className="collage-item item-split-bottom-1">
                <img src={`${process.env.PUBLIC_URL}/asset/landing-page/${featureImages[2]}`} alt="Feature 3" />
              </div>

              {/* Column 3: Tall */}
              <div className="collage-item item-tall-2">
                <img src={`${process.env.PUBLIC_URL}/asset/landing-page/${featureImages[3]}`} alt="Feature 4" />
              </div>

              {/* Column 4: Split */}
              <div className="collage-item item-split-top-2">
                <img src={`${process.env.PUBLIC_URL}/asset/landing-page/${featureImages[4]}`} alt="Feature 5" />
              </div>
              <div className="collage-item item-split-bottom-2">
                <img src={`${process.env.PUBLIC_URL}/asset/landing-page/${featureImages[5]}`} alt="Feature 6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCollageSection;
