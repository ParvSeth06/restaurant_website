import { useState } from 'react';
import { Plus, Minus, Leaf, Flame } from 'lucide-react';
import type { MenuItem } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/services/api';
import { Button } from '@/components/ui/button';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      item_id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      quantity,
    });
    
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuantity(1);
    }, 1500);
  };

  const incrementQuantity = () => {
    if (quantity < 20) {
      setQuantity(q => q + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Placeholder */}
      <div className="h-40 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center relative">
        <div className="text-center">
          <span className="text-4xl">
            {item.category === 'Vada Pav' && '🍔'}
            {item.category === 'Pav Bhaji' && '🥘'}
            {item.category === 'Sandwiches' && '🥪'}
            {item.category === 'Chinese' && '🍜'}
            {item.category === 'Beverages' && '🥤'}
          </span>
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {item.is_veg && (
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              Veg
            </span>
          )}
          {item.is_bestseller && (
            <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <Flame className="w-3 h-3" />
              Bestseller
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h3>
          <span className="font-bold text-orange-600">{formatPrice(item.price)}</span>
        </div>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-medium w-6 text-center">{quantity}</span>
            <button
              onClick={incrementQuantity}
              disabled={quantity >= 20}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={added}
            className={`transition-all ${
              added
                ? 'bg-green-500 hover:bg-green-500'
                : 'bg-orange-500 hover:bg-orange-600'
            }`}
            size="sm"
          >
            {added ? 'Added!' : 'Add'}
          </Button>
        </div>
      </div>
    </div>
  );
}
