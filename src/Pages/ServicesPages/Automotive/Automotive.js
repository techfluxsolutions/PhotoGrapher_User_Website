import React from 'react';

import AutoHeroSection from './AutoHeroSection/AutoHeroSection';
import AutoWhatWeCover from './AutoWhatWeCover/AutoWhatWeCover';
import AutoWhatYouGet from './AutoWhatYouGet/AutoWhatYouGet';
import AutoWhyVeroa from './AutoWhyVeroa/AutoWhyVeroa';
import AutoFinalCost from './AutoFinalCost/AutoFinalCost';
import AutoPersonalizedQuote from './AutoPersonalizedQuote/AutoPersonalizedQuote';
import TestimonialsSection from '../../LandingPage/TestimonialsSection/TestimonialsSection';
import AutoFAQ from './AutoFAQ/AutoFAQ';

const Automotive = () => {
  return (
    <div className="automotive-page">
      <AutoHeroSection />
      <AutoWhatWeCover />
      <AutoWhatYouGet />
      <AutoWhyVeroa />
      <AutoFinalCost />
      <AutoPersonalizedQuote />
      <TestimonialsSection />
      <AutoFAQ />
    </div>
  )
}

export default Automotive;