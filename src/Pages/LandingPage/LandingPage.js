import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import CategorySection from './CategorySection/CategorySection';
import HourlyShoots from './HourlyShoots/HourlyShoots';
import WhyChooseSection from './WhyChooseSection/WhyChooseSection';
import FeatureCollageSection from './FeatureCollageSection/FeatureCollageSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import BookNowSection from './BookNowSection/BookNowSection';
import NewsletterSection from './NewsletterSection/NewsletterSection';
// import Footer from './Footer/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <CategorySection />
      <HourlyShoots />
      <WhyChooseSection />
      <FeatureCollageSection />
      <TestimonialsSection />
      <BookNowSection />
      <NewsletterSection />
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;