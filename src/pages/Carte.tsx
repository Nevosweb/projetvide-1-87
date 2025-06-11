
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Award, Clock, ArrowRight } from 'lucide-react';

// Meat categories
const categories = [
  {
    id: "boeuf",
    name: "Bœuf",
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Nos viandes de bœuf sont issues d'élevages français et européens sélectionnés pour leur qualité et leur respect du bien-être animal."
  },
  {
    id: "porc",
    name: "Porc",
    image: "https://cdn.pixabay.com/photo/2014/11/09/01/20/pork-523102_1280.jpg",
    description: "Des porcs élevés en plein air et nourris selon des méthodes traditionnelles pour une viande savoureuse et tendre."
  }
];

const Carte: React.FC = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-500 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-red-400 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">La</span>
            <span className="text-primary">Carte</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Découvrez notre sélection de viandes de qualité, choisies avec soin par notre équipe de bouchers passionnés.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <ChefHat className="w-5 h-5 mr-3 text-primary" />
              <span>Sélection artisanale</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <Award className="w-5 h-5 mr-3 text-primary" />
              <span>Qualité premium</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 mr-3 text-primary" />
              <span>Fraîcheur garantie</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Nos <span className="text-primary">Spécialités</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chaque morceau est sélectionné avec expertise pour vous offrir une expérience gustative exceptionnelle.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={`/carte/${category.id}`}
                  className="group block"
                  onClick={scrollToTop}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                        Premium
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl font-playfair font-bold group-hover:text-primary transition-colors duration-300">{category.name}</h2>
                        <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg group-hover:underline transition-all duration-300">
                          Découvrir nos morceaux
                        </span>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <ChefHat className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-red-700">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
          <motion.h3 
            className="text-3xl md:text-4xl font-playfair font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Une question sur nos produits ?
          </motion.h3>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Notre équipe de bouchers experts est à votre disposition pour vous conseiller et préparer vos commandes sur mesure.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button 
              className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Nous contacter
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300"
              onClick={() => window.location.href = '/concept'}
            >
              Notre savoir-faire
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Carte;
