
import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus } from 'lucide-react';

const CartOverlay: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    isCartOpen, 
    toggleCart 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-auto animate-fade-in">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-playfair font-bold">Votre panier</h2>
          <button 
            onClick={toggleCart}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Fermer le panier"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-lg mb-4">Votre panier est vide</p>
              <button 
                onClick={toggleCart}
                className="btn-primary"
              >
                Poursuivre vos achats
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex border-b pb-4">
                    <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden mr-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500"
                          aria-label="Retirer du panier"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">{item.origin}</p>
                      <p className="mt-1">{item.price.toFixed(2)} €/kg</p>
                      
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border rounded-l-md"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 border-t border-b">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border rounded-r-md"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus size={14} />
                        </button>
                        <span className="ml-auto font-medium">
                          {(item.price * item.quantity).toFixed(2)} €
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>{cartTotal.toFixed(2)} €</span>
                </div>
                
                <div className="mt-6 space-y-2">
                  <button className="btn-primary w-full">
                    Commander
                  </button>
                  <button 
                    onClick={toggleCart}
                    className="w-full text-center p-2 hover:underline"
                  >
                    Poursuivre vos achats
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartOverlay;
