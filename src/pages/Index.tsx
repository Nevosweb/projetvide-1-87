
import React from 'react';
import Hero from '@/components/home/Hero';
import FeatureCards from '@/components/home/FeatureCards';
import ImageGallery from '@/components/home/ImageGallery';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeatureCards />
      <ImageGallery />
    </div>
  );
};

export default Index;
