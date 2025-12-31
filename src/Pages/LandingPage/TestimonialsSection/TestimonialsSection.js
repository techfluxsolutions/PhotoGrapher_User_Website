import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    // Group 1
    {
      name: 'Richa K.',
      image: 'pic1.png',
      rating: 5,
      text: 'Very professional service and smooth process. The photos were delivered on time and the quality was excellent. Definitely booking again for future events.'
    },
    {
      name: 'Sushant',
      image: 'pic2.png',
      rating: 5,
      text: 'Very professional service and smooth process. The photos were delivered on time and the quality was excellent. Definitely booking again for future events.'
    },
    {
      name: 'Tanya Mathur',
      image: 'pic3.png',
      rating: 5,
      text: 'Wonderful experience from start to finish. The photographer was very patient with our child and the photos turned out beautiful. Highly recommended for birthday photoshoots.'
    },
    // Group 2
    {
      name: 'Arjun Mehta',
      image: 'pic1.png',
      rating: 5,
      text: 'Outstanding quality and attention to detail. The team captured every special moment perfectly. Will definitely recommend to friends and family.'
    },
    {
      name: 'Priya Singh',
      image: 'pic2.png',
      rating: 5,
      text: 'Amazing experience! The photographer made everyone feel comfortable and the final photos exceeded our expectations. Worth every penny.'
    },
    {
      name: 'Rahul Verma',
      image: 'pic3.png',
      rating: 5,
      text: 'Professional, creative, and punctual. The editing was superb and we received our photos much earlier than expected. Highly satisfied!'
    },
    // Group 3
    {
      name: 'Sneha Reddy',
      image: 'pic1.png',
      rating: 5,
      text: 'Absolutely loved working with this team. They understood our vision perfectly and delivered stunning photographs. Cannot recommend enough!'
    },
    {
      name: 'Vikram Joshi',
      image: 'pic2.png',
      rating: 5,
      text: 'Best photography service I have used! Great communication, beautiful results, and reasonable pricing. Will be using their services again.'
    },
    {
      name: 'Anjali Kapoor',
      image: 'pic3.png',
      rating: 5,
      text: 'Exceptional work and wonderful experience. The team was creative, professional and delivered photos that we will cherish forever.'
    }
  ];

  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerSlide;
    return testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-sidebar">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
      </div>
      <div className="testimonials-content">
        <button className="slider-arrow slider-arrow-left" onClick={handlePrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="testimonials-grid">
          {getCurrentTestimonials().map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar">
                <img
                  src={`${process.env.PUBLIC_URL}/asset/landing-page/${testimonial.image}`}
                  alt={testimonial.name}
                />
              </div>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <button className="slider-arrow slider-arrow-right" onClick={handleNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
