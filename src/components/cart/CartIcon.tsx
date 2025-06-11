
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartIcon: React.FC = () => {
  const { cartCount, toggleCart } = useCart();

  return (
    <div className="relative cursor-pointer" onClick={toggleCart}>
      <ShoppingCart className="w-6 h-6" />
      {cartCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-cart-pulse">
          {cartCount}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
