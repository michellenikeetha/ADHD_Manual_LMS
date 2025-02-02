// components/LandingPage.js
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import WhyChooseSection from './WhyChooseSection';
import ContactInfo from './ContactInfo';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <ContactInfo />
    </div>
  );
};

export default LandingPage;
