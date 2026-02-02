import { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { HomePage } from '@/pages/HomePage';
import { MenuPage } from '@/pages/MenuPage';
import { CartPage } from '@/pages/CartPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { ConfirmationPage } from '@/pages/ConfirmationPage';
import type { View } from '@/types';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [orderId, setOrderId] = useState<string>('');

  const handleOrderSuccess = (id: string) => {
    setOrderId(id);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onViewChange={setCurrentView} />;
      case 'menu':
        return <MenuPage />;
      case 'cart':
        return <CartPage onViewChange={setCurrentView} />;
      case 'checkout':
        return <CheckoutPage onViewChange={setCurrentView} onOrderSuccess={handleOrderSuccess} />;
      case 'confirmation':
        return <ConfirmationPage onViewChange={setCurrentView} orderId={orderId} />;
      default:
        return <HomePage onViewChange={setCurrentView} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        {currentView !== 'confirmation' && (
          <Navbar currentView={currentView} onViewChange={setCurrentView} />
        )}
        <main>
          {renderView()}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
