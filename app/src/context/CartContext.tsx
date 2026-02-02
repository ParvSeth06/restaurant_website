import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { CartItem, OrderItemCreate } from '@/types';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getCartItemsForOrder: () => OrderItemCreate[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.item_id === item.item_id);
      
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((i) =>
          i.item_id === item.item_id
            ? { ...i, quantity: Math.min(i.quantity + item.quantity, 20) }
            : i
        );
      }
      
      // Add new item
      return [...prevItems, item];
    });
  }, []);

  const removeFromCart = useCallback((itemId: number) => {
    setItems((prevItems) => prevItems.filter((i) => i.item_id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.item_id === itemId ? { ...i, quantity: Math.min(quantity, 20) } : i
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const getCartItemsForOrder = useCallback((): OrderItemCreate[] => {
    return items.map((item) => ({
      item_id: item.item_id,
      name: item.name,
      category: item.category,
      price: item.price,
      quantity: item.quantity,
    }));
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        getCartItemsForOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
