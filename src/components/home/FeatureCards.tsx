
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Clock, ShoppingCart } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative">
      {/* Image with overlay */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating icon */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          {title.includes('local') && <Leaf className="w-5 h-5 text-primary" />}
          {title.includes('Maturation') && <Clock className="w-5 h-5 text-primary" />}
          {title.includes('Commandez') && <ShoppingCart className="w-5 h-5 text-primary" />}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-2xl font-playfair font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        {/* CTA Link */}
        <Link 
          to={link}
          className="inline-flex items-center text-primary font-bold hover:text-red-700 transition-colors duration-300 group/link"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

const FeatureCards: React.FC = () => {
  const features = [
    {
      title: "Sélection locale",
      description: "Nous collaborons avec des éleveurs locaux pour vous offrir des viandes de qualité supérieure, issues d'animaux élevés dans le respect du bien-être animal.",
      imageUrl: "https://i.pinimg.com/736x/12/b7/80/12b7803717ea655f3885fc91693d6d39.jpg",
      link: "/concept"
    },
    {
      title: "Maturation maison",
      description: "Nos viandes sont maturées dans nos caves pour développer leurs saveurs et garantir une tendreté exceptionnelle. Un savoir-faire artisanal.",
      imageUrl: "https://i.pinimg.com/736x/a8/56/b9/a856b9276d9e70d2b609fd2999775f88.jpg",
      link: "/concept"
    },
    {
      title: "Commandez en ligne",
      description: "Découvrez notre sélection de viandes et commandez depuis chez vous. Nous préparons votre commande avec le même soin qu'en boutique.",
      imageUrl: "https://i.pinimg.com/474x/5f/49/81/5f4981c35087d5a941915f21d37f9857.jpg",
      link: "/carte/boeuf"
    }
  ];

  return (
    <section id="feature-cards" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-playfair font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Notre <span className="text-primary">engagement</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-red-700 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Découvrez les valeurs qui nous animent et font de notre boucherie un lieu d'exception depuis près de 40 ans.
          </motion.p>
        </motion.div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/concept"
            className="inline-flex items-center bg-gradient-to-r from-primary to-red-700 text-white px-8 py-4 rounded-full font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            Découvrir notre concept
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCards;
