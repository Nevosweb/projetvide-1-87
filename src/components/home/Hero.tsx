
import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/e9/1c/86/e91c863eae8433384a62a63aea542ae6.jpg)',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-red-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
              🥩 Depuis 1984
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            La <span className="text-primary">passion</span> de la <br className="hidden md:block" />bonne viande
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Boucherie traditionnelle depuis 1984, nous sélectionnons avec soin les meilleures viandes pour votre plaisir gustatif.
          </motion.p>
          
          {/* Key Features */}
          <motion.div 
            className="flex flex-wrap gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-3 rounded-full">
              <Award className="w-5 h-5 mr-3 text-primary" />
              <span className="text-sm font-medium">Qualité Premium</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-3 rounded-full">
              <MapPin className="w-5 h-5 mr-3 text-primary" />
              <span className="text-sm font-medium">Origine France</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-3 rounded-full">
              <Clock className="w-5 h-5 mr-3 text-primary" />
              <span className="text-sm font-medium">40 ans d'expérience</span>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="feature-cards"
              smooth={true}
              duration={500}
              offset={-100}
              className="bg-gradient-to-r from-primary to-red-700 text-white px-8 py-4 rounded-full font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 cursor-pointer inline-block text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Découvrir nos viandes
            </Link>
            <button 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg"
              onClick={() => window.location.href = '/carte'}
            >
              Voir la carte
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Link
          to="feature-cards"
          smooth={true}
          duration={500}
          offset={-100}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
