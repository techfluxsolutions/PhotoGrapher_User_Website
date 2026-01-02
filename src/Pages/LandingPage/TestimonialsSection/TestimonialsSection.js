import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([
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
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonials((prevTestimonials) => {
        const newTestimonials = [...prevTestimonials];
        const first = newTestimonials.shift();
        newTestimonials.push(first);
        return newTestimonials;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-sidebar">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
      </div>
      <div className="testimonials-content">
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
