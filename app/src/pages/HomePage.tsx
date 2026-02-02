import { ArrowRight, Clock, MapPin, Phone, Star, Truck, Utensils } from 'lucide-react';
import type { View } from '@/types';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  onViewChange: (view: View) => void;
}

export function HomePage({ onViewChange }: HomePageProps) {
  const categories = [
    { name: 'Vada Pav', icon: '🍔', count: '4 items' },
    { name: 'Pav Bhaji', icon: '🥘', count: '4 items' },
    { name: 'Sandwiches', icon: '🥪', count: '4 items' },
    { name: 'Chinese', icon: '🍜', count: '5 items' },
    { name: 'Beverages', icon: '🥤', count: '5 items' },
  ];

  const features = [
    { icon: <Truck className="w-6 h-6" />, title: 'Fast Delivery', desc: '30-45 mins delivery' },
    { icon: <Star className="w-6 h-6" />, title: 'Best Quality', desc: 'Fresh ingredients daily' },
    { icon: <Clock className="w-6 h-6" />, title: 'Open Daily', desc: '10 AM - 11 PM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Mumbai, India</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Quality Fast Food
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Authentic Mumbai street food delivered to your doorstep. 
                Taste the flavors of Mumbai!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  onClick={() => onViewChange('menu')}
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  <Utensils className="w-5 h-5 mr-2" />
                  Order Now
                </Button>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
            
            {/* Hero Image/Illustration */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-9xl">🍽️</span>
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold animate-bounce">
                  20% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Menu</h2>
            <button
              onClick={() => onViewChange('menu')}
              className="text-orange-600 font-medium flex items-center hover:underline"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => onViewChange('menu')}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="text-4xl mb-2 block">{category.icon}</span>
                <h3 className="font-medium text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular Items
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Classic Vada Pav', price: 25, emoji: '🍔' },
              { name: 'Cheese Pav Bhaji', price: 80, emoji: '🥘' },
              { name: 'Veg Manchurian', price: 90, emoji: '🍜' },
              { name: 'Cold Coffee', price: 50, emoji: '🥤' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl text-center hover:bg-orange-50 transition-colors cursor-pointer"
                onClick={() => onViewChange('menu')}
              >
                <span className="text-4xl mb-2 block">{item.emoji}</span>
                <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                <p className="text-orange-600 font-bold">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Hungry? Order Now!</h2>
          <p className="text-white/90 mb-6">
            Call us directly or order online for quick delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100"
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 98765 43210
            </a>
            <Button
              onClick={() => onViewChange('menu')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Order Online
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Quality Fast Food</h3>
              <p className="text-sm">Serving authentic Mumbai street food since 2010</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Contact</h4>
              <p className="text-sm">📍 Mumbai, Maharashtra</p>
              <p className="text-sm">📞 +91 98765 43210</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Hours</h4>
              <p className="text-sm">Open Daily: 10 AM - 11 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm">
            © 2024 Quality Fast Food. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
