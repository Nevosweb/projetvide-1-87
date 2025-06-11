
import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Star, Award, MapPin, Filter } from 'lucide-react';
import { useCart, Product } from '@/context/CartContext';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Meat data by category
const meatData: Record<string, { title: string; description: string; products: Product[] }> = {
  boeuf: {
    title: "Bœuf - nos morceaux",
    description: "Nos viandes de bœuf sont issues d'élevages français et européens sélectionnés pour leur qualité et leur respect du bien-être animal.",
    products: [
      { id: "boeuf-1", name: "Entrecôte", category: "boeuf", origin: "France - Charolais", price: 39.90, image: "https://i.pinimg.com/736x/41/00/5d/41005d786d50cba962837db6769296e8.jpg" },
      { id: "boeuf-2", name: "Faux-filet", category: "boeuf", origin: "France - Limousin", price: 34.90, image: "https://i.pinimg.com/736x/1e/c7/24/1ec72403b9492128022a357d54987f22.jpg" },
      { id: "boeuf-3", name: "Côte de bœuf", category: "boeuf", origin: "France - Normande", price: 29.90, image: "https://i.pinimg.com/736x/3c/fc/a0/3cfca0ff70d30be129f8c768f129c8b1.jpg" },
      { id: "boeuf-4", name: "Filet", category: "boeuf", origin: "France - Charolais", price: 49.90, image: "https://i.pinimg.com/736x/62/bb/82/62bb82f4456ada7e2d14bfdd5e55172d.jpg" },
      { id: "boeuf-5", name: "Rumsteck", category: "boeuf", origin: "France - Limousin", price: 32.90, image: "https://i.pinimg.com/736x/11/63/f0/1163f0ab5e26ccf8dc371ecb3273bea5.jpg" },
      { id: "boeuf-6", name: "Bavette", category: "boeuf", origin: "France - Aubrac", price: 28.90, image: "https://i.pinimg.com/736x/77/11/f9/7711f945bb86e140e0f4d33a58a71291.jpg" },
      { id: "boeuf-7", name: "Onglet", category: "boeuf", origin: "France - Charolais", price: 29.90, image: "https://i.pinimg.com/736x/62/bb/82/62bb82f4456ada7e2d14bfdd5e55172d.jpg" },
      { id: "boeuf-8", name: "Hampe", category: "boeuf", origin: "France - Limousin", price: 27.90, image: "https://i.pinimg.com/736x/c5/ca/29/c5ca296f430c48858a9f13e393c9a0f7.jpg" },
      { id: "boeuf-9", name: "Paleron", category: "boeuf", origin: "France - Normande", price: 19.90, image: "https://i.pinimg.com/736x/ca/cb/47/cacb4726a8f15916c3496a45fe52f10c.jpg" },
      { id: "boeuf-10", name: "Basse côte", category: "boeuf", origin: "France - Charolais", price: 19.90, image: "https://i.pinimg.com/736x/3b/e6/21/3be621879d112f57fa7b3aa311e9a9cc.jpg" },
      { id: "boeuf-11", name: "Steak haché", category: "boeuf", origin: "France - Normande", price: 19.90, image: "https://i.pinimg.com/736x/40/f9/7e/40f97e8a604670c7637d94becd4015e0.jpg" }
    ]
  },
  porc: {
    title: "Porc - nos morceaux",
    description: "Des porcs élevés en plein air et nourris selon des méthodes traditionnelles pour une viande savoureuse et tendre.",
    products: [
      { id: "porc-1", name: "Côte échine", category: "porc", origin: "France - Bretagne", price: 18.90, image: "https://i.pinimg.com/736x/e9/54/54/e95454b1af292e2e8098e68603724b34.jpg" },
      { id: "porc-3", name: "Filet mignon", category: "porc", origin: "France - Ardennes", price: 24.90, image: "https://i.pinimg.com/736x/84/a3/12/84a31251f5be73a4f5cd1da4969607c6.jpg" },
      { id: "porc-5", name: "Poitrine", category: "porc", origin: "France - Auvergne", price: 12.90, image: "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
      { id: "porc-6", name: "Travers", category: "porc", origin: "France - Ardennes", price: 16.90, image: "https://i.pinimg.com/736x/ce/10/00/ce10005544724e8cb85e8370140f4bd2.jpg" },
    ]
  },
};

const ProductCategory: React.FC = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  
  // Default to boeuf if category is not found
  const categoryData = meatData[category || 'boeuf'] || meatData.boeuf;
  
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} ajouté au panier`);
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
            {categoryData.title.split(' - ')[0]} - <span className="text-primary">nos morceaux</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {categoryData.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <Award className="w-5 h-5 mr-3 text-primary" />
              <span>Qualité premium</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5 mr-3 text-primary" />
              <span>Origine France</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <Star className="w-5 h-5 mr-3 text-primary" />
              <span>{categoryData.products.length} morceaux</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Notre <span className="text-primary">Sélection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chaque morceau est choisi avec soin pour vous garantir une qualité exceptionnelle et un goût authentique.
            </p>
          </motion.div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryData.products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Premium Badge */}
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                      Premium
                    </div>
                    
                    {/* Quick Add Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 shadow-lg"
                      aria-label={`Ajouter ${product.name} au panier`}
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-playfair font-bold group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">
                          {product.price.toFixed(2)}€
                        </span>
                        <span className="text-sm text-gray-500 block">/kg</span>
                      </div>
                    </div>
                    
                    {/* Origin Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                        <MapPin className="w-3 h-3 mr-1" />
                        {product.origin}
                      </span>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-gradient-to-r from-primary to-red-700 text-white py-3 px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-xl"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2 group-hover/btn:animate-pulse" />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
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
            Besoin de conseils ?
          </motion.h3>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos bouchers experts sont là pour vous guider dans le choix de vos morceaux et vous proposer les meilleures préparations.
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
              onClick={() => window.location.href = '/carte'}
            >
              Voir toute la carte
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
