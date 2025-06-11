
import React from 'react';
import ConceptHero from '@/components/concept/ConceptHero';
import ConceptFeatures from '@/components/concept/ConceptFeatures';

const Concept: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <ConceptHero />
      <ConceptFeatures />
    </div>
  );
};

export default Concept;
