// components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-cover bg-center h-[60vh] flex items-center justify-center relative"
      style={{ backgroundImage: `url(${require('../assets/heroimg.webp')})` }}
    >
      <div className="text-center text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">Empower Your Learning Journey</h1>
        <p className="text-2xl mb-6 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">Join Thousands of Students in Achieving their Educational Goals</p>
      </div>
      
      <div className="absolute bottom-10">
        <Button text="Get Started" onClick={() => navigate('/login')} />
      </div>
    </section>
  );
};

export default HeroSection;
