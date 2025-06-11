
import React, { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('Votre message a été envoyé avec succès !');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
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
            <span className="block">Nous</span>
            <span className="text-primary">Contacter</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Une question, une commande spéciale ou simplement envie de discuter de nos produits ? 
            Notre équipe est là pour vous accompagner.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <Phone className="w-5 h-5 mr-3 text-primary" />
              <span>01 23 45 67 89</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <Mail className="w-5 h-5 mr-3 text-primary" />
              <span>contact@viandeco.fr</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold">Envoyez-nous un message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="flex items-center text-sm font-medium mb-2 text-gray-700">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      Nom complet <span className="text-primary ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-gray-300"
                      placeholder="Votre nom complet"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="flex items-center text-sm font-medium mb-2 text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      Email <span className="text-primary ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-gray-300"
                      placeholder="votre.email@exemple.com"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="phone" className="flex items-center text-sm font-medium mb-2 text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-gray-300"
                      placeholder="01 23 45 67 89"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="flex items-center text-sm font-medium mb-2 text-gray-700">
                      <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                      Message <span className="text-primary ml-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-gray-300 resize-none"
                      placeholder="Décrivez votre demande, vos besoins ou posez-nous vos questions..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-red-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Envoyer le message
                  </motion.button>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-playfair font-bold mb-8 text-center">
                  Informations <span className="text-primary">Pratiques</span>
                </h2>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">Notre adresse</h3>
                      <p className="text-gray-600">123 Rue du Boucher</p>
                      <p className="text-gray-600">75001 Paris, France</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">Horaires d'ouverture</h3>
                      <div className="space-y-1 text-gray-600">
                        <p><span className="font-medium">Mardi - Vendredi :</span> 9h00 - 19h00</p>
                        <p><span className="font-medium">Samedi :</span> 8h00 - 19h00</p>
                        <p><span className="font-medium">Dimanche :</span> 9h00 - 13h00</p>
                        <p><span className="font-medium text-red-500">Lundi :</span> Fermé</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">Nous joindre</h3>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Téléphone :</span> 
                        <a href="tel:0123456789" className="ml-1 hover:text-primary transition-colors">01 23 45 67 89</a>
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Email :</span> 
                        <a href="mailto:contact@viandeco.fr" className="ml-1 hover:text-primary transition-colors">contact@viandeco.fr</a>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Google Maps */}
              <motion.div 
                className="h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.346923015674204!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e19ff53a01%3A0x36401da7abfa068d!2sCath%C3%A9drale%20Notre-Dame%20de%20Paris!5e0!3m2!1sfr!2sfr!4v1646232195540!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Carte Google Maps - Viande & Co"
                  className="hover:contrast-110 transition-all duration-300"
                ></iframe>
              </motion.div>
            </motion.div>
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
            Vous préférez nous rendre visite ?
          </motion.h3>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Venez découvrir notre boutique et rencontrer nos bouchers passionnés. 
            Ils seront ravis de vous conseiller et de préparer vos commandes sur mesure.
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
              onClick={() => window.location.href = '/carte/boeuf'}
            >
              Découvrir nos produits
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300"
              onClick={() => window.location.href = '/concept'}
            >
              En savoir plus
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
