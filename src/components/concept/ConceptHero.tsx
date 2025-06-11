
import React from 'react';
import { motion } from 'framer-motion';

const ConceptHero: React.FC = () => {
  return (
    <section className="relative">
      {/* Philosophy section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
              Notre <span className="text-primary">Philosophie</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Sélection rigoureuse</h3>
                <p className="text-gray-700">
                  Nous proposons des viandes d'exception, sélectionnées avec soin auprès d'éleveurs partageant nos valeurs. Nous privilégions les races à viande reconnues pour leurs qualités gustatives.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Maturation parfaite</h3>
                <p className="text-gray-700">
                  La maturation est au cœur de notre savoir-faire. Chaque pièce de bœuf est maturée entre 21 et 60 jours dans nos caves dédiées, pour développer des arômes complexes et une tendreté incomparable.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Expertise artisanale</h3>
                <p className="text-gray-700">
                  Nos bouchers sont des artisans passionnés qui perpétuent les techniques de découpe traditionnelles. Ils sont à votre écoute pour vous conseiller et préparer vos morceaux selon vos préférences.
                </p>
              </motion.div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Viande de qualité" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-medium">
                  "La qualité n'est jamais un accident ; c'est toujours le résultat d'un effort intelligent." - Notre devise depuis 1984
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptHero;
