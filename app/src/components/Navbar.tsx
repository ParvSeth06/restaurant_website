import { ShoppingCart, Utensils, Home, Menu as MenuIcon, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { View } from '@/types';

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export function Navbar({ currentView, onViewChange }: NavbarProps) {
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  const navItems: { view: View; label: string; icon: React.ReactNode }[] = [
    { view: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { view: 'menu', label: 'Menu', icon: <MenuIcon className="w-5 h-5" /> },
    { view: 'cart', label: 'Cart', icon: <ShoppingCart className="w-5 h-5" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onViewChange('home')}
            className="flex items-center space-x-2"
          >
            <div className="bg-orange-500 p-2 rounded-full">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900">Quality Fast Food</span>
              <span className="block text-xs text-gray-500">Mumbai</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => onViewChange(item.view)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  currentView === item.view
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.view === 'cart' && cartCount > 0 && (
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="tel:+919876543210"
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Us</span>
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onViewChange(item.view)}
              className={`flex flex-col items-center p-2 rounded-lg ${
                currentView === item.view
                  ? 'text-orange-600'
                  : 'text-gray-500'
              }`}
            >
              <div className="relative">
                {item.icon}
                {item.view === 'cart' && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
