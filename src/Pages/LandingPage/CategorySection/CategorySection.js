import React from 'react';
import './CategorySection.css';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      image: 'Frame1.png',
      title: 'Wedding Photography',
      description: 'We capture your wedding as it naturally unfolds every emotion, ritual, and detail. From intimate moments to grand celebrations, your story is preserved beautifully.',
      // subtitle: 'Preserve every precious moment of your celebration.'
    },
    {
      id: 2,
      image: 'Frame2.png',
      title: 'Maternity and Baby Shoot',
      description: 'Celebrate the journey of new life with warm, thoughtful photography. We capture tender moments that you’ll cherish for years to come.',
      // subtitle: 'We capture tender moments that you\'ll cherish for years to come.'
    },
    {
      id: 3,
      image: 'Frame3.png',
      title: 'Event Photography',
      description: 'From private gatherings to large scale events, every moment matters. Our photographers ensure nothing important is missed, from start to finish.',
      // subtitle: 'Celebrate your special day in style.'
    },
    {
      id: 4,
      image: 'Frame4.png',
      title: 'Fashion Photography',
      description: 'High-quality visuals crafted to highlight style, creativity, and detail. Perfect for designers, brands, portfolios, and editorial storytelling.',
      // subtitle: 'Elevate your portfolio with striking visuals.'
    },
    {
      id: 5,
      image: 'Frame5.png',
      title: 'Corporate Photography',
      description: 'Professional photography that reflects your brand’s identity and values. Ideal for corporate profiles, teams, events, and marketing assets.',
      // subtitle: 'Strengthen your business presence.'
    },
    {
      id: 6,
      image: 'Frame6.png',
      title: 'Sports Photography',
      description: 'We freeze high-energy moments with precision and impact. Every shot captures motion, intensity, and the spirit of the game.',
      // subtitle: 'Freeze the thrill of victory.'
    },
    {
      id: 7,
      image: 'Frame7.png',
      title: 'Automotive Photography',
      description: 'Showcase vehicles with striking angles and refined detailing. Designed to highlight performance, design, and craftsmanship.',
      // subtitle: 'Highlight the beauty of automotive design.'
    },
    {
      id: 8,
      image: 'Frame8.png',
      title: 'Food Photography',
      description: 'Visually rich images that bring out texture, color, and freshness. Perfect for restaurants, menus, campaigns, and digital platforms.',
      // subtitle: 'Delight your audience with visual flavor.'
    },
    {
      id: 9,
      image: 'Frame9.png',
      title: 'Product Photography',
      description: 'Clean, compelling visuals that enhance product appeal. Designed to build trust, attract customers, and drive conversions',
      // subtitle: 'Showcase your products in the best light.'
    }
  ];

  return (
    <section className="category-section">
      <div className="category-header">
        <h2 className="category-title">What Are You Looking For?</h2>
      </div>
      <div className="category-grid-container">
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <img 
                src={`${process.env.PUBLIC_URL}/asset/landing-page/${category.image}`} 
                alt={category.title} 
              />
              <div className="category-overlay"></div>
              <div className="category-content">
                <h3 className="category-item-title">{category.title}</h3>
                <p className="category-item-description">{category.description}</p>
                <p className="category-item-subtitle">{category.subtitle}</p>
              </div>
              <div className="category-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2"/>
                  <path d="M9 12H15M15 12L12 9M15 12L12 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
