
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-400 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-3xl font-playfair font-bold mb-4 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
                  Viande & Co
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  La passion de la bonne viande depuis 1984. Nous sélectionnons avec soin les meilleures pièces pour vous offrir une expérience gustative exceptionnelle.
                </p>
                
                {/* Social Media */}
                <div className="flex space-x-4 mb-6">
                  <a href="#" className="group p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/25">
                    <Facebook size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                  <a href="#" className="group p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/25">
                    <Instagram size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                  <a href="#" className="group p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/25">
                    <Twitter size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div>
              <h3 className="text-xl font-playfair font-bold mb-6 text-red-300">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    onClick={scrollToTop}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:bg-red-400 transition-colors"></span>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/concept" 
                    onClick={scrollToTop}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:bg-red-400 transition-colors"></span>
                    Le Concept
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/carte/boeuf" 
                    onClick={scrollToTop}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:bg-red-400 transition-colors"></span>
                    La Carte
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    onClick={scrollToTop}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:bg-red-400 transition-colors"></span>
                    Nous contacter
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-playfair font-bold mb-6 text-red-300">Contactez-nous</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                    <MapPin size={16} className="text-red-400 group-hover:text-white" />
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">123 Rue du Boucher</p>
                    <p>75001 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                    <Phone size={16} className="text-red-400 group-hover:text-white" />
                  </div>
                  <a href="tel:0123456789" className="text-gray-300 hover:text-white transition-colors">
                    01 23 45 67 89
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                    <Mail size={16} className="text-red-400 group-hover:text-white" />
                  </div>
                  <a href="mailto:contact@viandeco.fr" className="text-gray-300 hover:text-white transition-colors">
                    contact@viandeco.fr
                  </a>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                    <Clock size={16} className="text-red-400 group-hover:text-white" />
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium mb-1">Horaires d'ouverture</p>
                    <p className="text-sm">Mardi-Samedi: 9h-19h</p>
                    <p className="text-sm">Dimanche: 9h-13h</p>
                    <p className="text-sm text-red-400">Fermé le lundi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-700">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Viande & Co. Tous droits réservés.
                </p>
                <div className="flex space-x-4 text-sm">
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Mentions légales</a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Politique de confidentialité</a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">CGV</a>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
