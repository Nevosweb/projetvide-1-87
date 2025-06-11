
import React, { useRef, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from 'framer-motion';
import { Camera, Heart, Star } from 'lucide-react';

const ImageGallery: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Images pour le carrousel
  const galleryImages = [
    {
      url: "https://i.pinimg.com/736x/59/72/53/59725330ed3cb7c9336d3ff5e0e220f2.jpg",
      alt: "Sélection de viandes premium"
    },
    {
      url: "https://i.pinimg.com/736x/1e/c7/24/1ec72403b9492128022a357d54987f22.jpg",
      alt: "Produits de terroir"
    },
    {
      url: "https://i.pinimg.com/736x/8a/41/87/8a418737216466141b13c4223f2bf3d2.jpg",
      alt: "Élevage local"
    },
    {
      url: "https://i.pinimg.com/736x/6d/28/aa/6d28aa6effe65410c281c039bbe7dc00.jpg",
      alt: "Ferme partenaire"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-red-500 rounded-full blur-2xl"></div>
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
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Camera className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold">
              Notre boucherie en <span className="text-primary">images</span>
            </h2>
          </motion.div>
          
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
            Plongez dans l'univers de notre boucherie artisanale et découvrez notre savoir-faire à travers ces images authentiques.
          </motion.p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div 
          className="px-4 sm:px-12 lg:px-16 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-full">
                  <div className="p-2">
                    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                      <AspectRatio ratio={16/9} className="bg-muted">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Overlay with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Image caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-xl font-bold mb-2">{image.alt}</h3>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-2" />
                            <span className="text-sm">Fait avec passion</span>
                          </div>
                        </div>
                        
                        {/* Decorative corner */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                          <Star className="w-4 h-4 text-primary" />
                        </div>
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation buttons */}
            <div className="hidden sm:block">
              <CarouselPrevious className="left-4 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300" />
              <CarouselNext className="right-4 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300" />
            </div>
          </Carousel>

          {/* Custom dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Aller à l'image ${index + 1}`}
                className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                  index === current 
                    ? "bg-primary shadow-lg scale-125" 
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Statistics Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-primary mb-2">40+</div>
            <div className="text-gray-600 font-medium">Années d'expérience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600 font-medium">Origine France</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Clients satisfaits</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;
