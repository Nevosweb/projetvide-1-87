
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUp } from 'lucide-react';
import CartIcon from '@/components/cart/CartIcon';

// Categories for dropdown menu
const categories = [
  { name: "Bœuf", path: "/carte/boeuf" },
  { name: "Porc", path: "/carte/porc" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Navigation mobile avec scroll to top
  const handleMobileNavigation = (path: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    setIsDropdownOpen(false);
    navigate(path);
    
    setTimeout(() => {
      setIsMenuOpen(false);
      // Triple scroll to top pour compatibilité
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 150);
  };

  return (
    <>
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-red-100/20 py-2' 
          : 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-red-100/10 py-4'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <h1 className="text-2xl font-bold text-primary">
              <span className="font-playfair">Viande & Co</span>
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-medium hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Accueil
            </Link>
            
            <Link 
              to="/concept" 
              className="font-medium hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Le Concept
            </Link>
            
            {/* Dropdown */}
            <div className="relative">
              <button
                className="flex items-center font-medium hover:text-primary transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                La Carte
                <ChevronDown size={18} className="ml-1" />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-40 z-10">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      onClick={scrollToTop}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="font-medium hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Nous contacter
            </Link>
          </nav>
          
          {/* Cart Icon */}
          <div className="flex items-center">
            <div className="mr-6 md:mr-0">
              <CartIcon />
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden text-gray-700 p-3 min-h-[48px] min-w-[48px] flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 rounded-2xl hover:shadow-xl active:scale-95 border backdrop-blur-sm group relative overflow-hidden ${
                isMenuOpen 
                  ? 'bg-gradient-to-r from-red-600/30 to-red-700/30 border-red-400/30 shadow-lg' 
                  : 'hover:bg-gradient-to-r hover:from-red-600/20 hover:to-red-700/20 border-red-200/20'
              }`}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X size={24} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="transform group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu Mobile */}
       <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-white to-red-50 shadow-2xl border-b border-red-200 transition-all duration-500 ease-out transform ${
         isMenuOpen 
           ? 'opacity-100 translate-y-0 scale-100' 
           : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
       }`}>
        <div className="container max-w-7xl mx-auto py-6 px-4 flex flex-col space-y-3">
          
          {/* Accueil */}
          <button 
            onClick={(e) => handleMobileNavigation('/', e)}
            className={`font-medium px-5 py-4 min-h-[52px] text-left flex items-center rounded-2xl transition-all duration-300 border backdrop-blur-sm group relative overflow-hidden transform ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            } ${
              location.pathname === '/' 
                ? 'bg-gradient-to-r from-red-600/40 to-red-700/40 text-white border-red-400/30 shadow-lg' 
                : 'hover:bg-gradient-to-r hover:from-red-600/25 hover:to-red-700/25 text-gray-700 hover:text-white border-red-200/15 hover:border-red-400/30'
            }`}
            style={{ 
              transitionDelay: '0ms',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">Accueil</span>
          </button>
          
          {/* Le Concept */}
          <button 
            onClick={(e) => handleMobileNavigation('/concept', e)}
            className={`font-medium px-5 py-4 min-h-[52px] text-left flex items-center rounded-2xl transition-all duration-300 border backdrop-blur-sm group relative overflow-hidden transform ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            } ${
              location.pathname === '/concept' 
                ? 'bg-gradient-to-r from-red-600/40 to-red-700/40 text-white border-red-400/30 shadow-lg' 
                : 'hover:bg-gradient-to-r hover:from-red-600/25 hover:to-red-700/25 text-gray-700 hover:text-white border-red-200/15 hover:border-red-400/30'
            }`}
            style={{ 
              transitionDelay: '100ms',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">Le Concept</span>
          </button>
          
          {/* La Carte avec dropdown */}
          <div className={`flex flex-col transform transition-all duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`font-medium px-5 py-4 min-h-[52px] flex items-center justify-between rounded-2xl transition-all duration-300 w-full text-left border backdrop-blur-sm group relative overflow-hidden ${
                location.pathname.startsWith('/carte') 
                  ? 'bg-gradient-to-r from-red-600/40 to-red-700/40 text-white border-red-400/30 shadow-lg' 
                  : 'hover:bg-gradient-to-r hover:from-red-600/25 hover:to-red-700/25 text-gray-700 hover:text-white border-red-200/15 hover:border-red-400/30'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">La Carte</span>
              <ChevronDown size={20} className={`relative z-10 transition-all duration-300 ${
                isDropdownOpen ? 'rotate-180 text-red-400' : 'rotate-0'
              }`} />
            </button>
            
            {/* Sous-menu */}
            <div className={`overflow-hidden transition-all duration-500 ease-out ${
              isDropdownOpen 
                ? 'max-h-96 opacity-100 pointer-events-auto' 
                : 'max-h-0 opacity-0 pointer-events-none'
            }`}>
              <div className="flex flex-col pl-6 space-y-2 py-3">
                {categories.map((category, subIndex) => (
                  <button 
                    key={category.name} 
                    onClick={(e) => handleMobileNavigation(category.path, e)}
                    className={`flex items-center font-medium px-4 py-3 min-h-[48px] rounded-xl transition-all duration-200 text-sm border backdrop-blur-sm group relative overflow-hidden ${
                      location.pathname === category.path 
                        ? 'bg-gradient-to-r from-red-600/40 to-red-700/40 text-white border-red-400/30 shadow-md' 
                        : 'hover:bg-gradient-to-r hover:from-red-600/25 hover:to-red-700/25 text-gray-600 hover:text-white border-red-200/10 hover:border-red-400/20'
                    }`}
                    style={{ 
                      transitionDelay: isDropdownOpen ? `${subIndex * 50}ms` : '0ms',
                      WebkitTapHighlightColor: 'transparent'
                    }}
                  >
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Nous contacter */}
          <button 
            onClick={(e) => handleMobileNavigation('/contact', e)}
            className={`bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 w-full rounded-2xl py-4 min-h-[52px] mt-6 flex items-center justify-center text-white shadow-lg hover:shadow-2xl border border-red-500/30 group relative overflow-hidden transform ${
              isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
            }`}
            style={{ 
              transitionDelay: '400ms',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Nous contacter</span>
          </button>
        </div>
      </div>
    </header>
    
    {/* Bouton Scroll to Top */}
    {showScrollTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 h-12 w-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-[9999] flex items-center justify-center"
        aria-label="Retour en haut"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    )}
    </>
  );
};

export default Navbar;
