import React, { useState } from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add newsletter subscription logic here
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Subscribe to our emails</h2>
        <p className="newsletter-subtitle">
          Subscribe to our mailing list for insider news, product launches, and more.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-submit" aria-label="Subscribe">
            →
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
