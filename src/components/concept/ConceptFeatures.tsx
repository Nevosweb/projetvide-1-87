
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Truck, Users, Leaf, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ConceptFeatures: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Qualité supérieure",
      description: "Nos viandes sont sélectionnées parmi les meilleurs élevages et font l'objet d'une maturation parfaitement maîtrisée.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Savoir-faire artisanal",
      description: "Nos bouchers sont des artisans passionnés qui perpétuent les techniques de découpe traditionnelles.",
      color: "from-red-600 to-red-700"
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Circuit court",
      description: "Nous travaillons directement avec les éleveurs locaux pour garantir fraîcheur et traçabilité.",
      color: "from-red-700 to-red-800"
    }
  ];
  
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Respect de l'environnement",
      description: "Élevages durables et respectueux"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Bien-être animal",
      description: "Conditions d'élevage optimales"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Excellence gustative",
      description: "Saveurs authentiques garanties"
    }
  ];
  
  return (
    <section id="concept-features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* Main features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4">
            Notre <span className="text-primary">Approche</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Découvrez les piliers de notre excellence qui font de Viande & Co une référence dans l'art de la boucherie
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full bg-white">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <CardHeader className="flex flex-col items-center pt-8 pb-4">
                  <motion.div 
                    className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-primary/10 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-2xl text-center font-playfair font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <CardDescription className="text-center text-base leading-relaxed text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Values section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-center mb-12">
            Nos <span className="text-primary">Valeurs</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4 group-hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-red-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Prêt à découvrir nos produits d'exception ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Explorez notre sélection de viandes premium et laissez-vous séduire par la qualité
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              onClick={() => window.location.href = '/carte/boeuf'}
            >
              Découvrir la carte
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConceptFeatures;
