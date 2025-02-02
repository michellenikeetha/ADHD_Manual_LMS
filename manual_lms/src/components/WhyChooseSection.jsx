// components/WhyChooseSection.js
import React from 'react';
import FeatureCard from './FeatureCard';
import { FaChalkboardTeacher, FaCertificate, FaUsers } from 'react-icons/fa';

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-20">Why Choose EduLearn?</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<FaChalkboardTeacher />} 
          title="Expert Instructors" 
          description="Learn from industry experts with years of experience in their fields."
        />
        <FeatureCard 
          icon={<FaCertificate />} 
          title="Certified Courses" 
          description="Gain certifications that are recognized by top employers worldwide."
        />
        <FeatureCard 
          icon={<FaUsers />} 
          title="Community Support" 
          description="Join a vibrant community of learners to exchange knowledge and grow together."
        />
      </div>
    </section>
  );
};

export default WhyChooseSection;
