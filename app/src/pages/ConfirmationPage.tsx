import { CheckCircle, Clock, Phone, Package, Home } from 'lucide-react';
import type { View } from '@/types';
import { Button } from '@/components/ui/button';

interface ConfirmationPageProps {
  onViewChange: (view: View) => void;
  orderId: string;
}

export function ConfirmationPage({ onViewChange, orderId }: ConfirmationPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-500 mb-6">
            Thank you for ordering from Quality Fast Food
          </p>

          {/* Order ID */}
          <div className="bg-orange-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Your Order ID</p>
            <p className="text-2xl font-bold text-orange-600 tracking-wider">
              {orderId}
            </p>
          </div>

          {/* Delivery Info */}
          <div className="space-y-3 mb-6 text-left">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Clock className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Estimated Delivery</p>
                <p className="font-medium text-gray-900">30-45 minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Package className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Order Status</p>
                <p className="font-medium text-gray-900">Confirmed & Preparing</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Need Help?</p>
                <a href="tel:+919876543210" className="font-medium text-orange-600">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button
              onClick={() => onViewChange('home')}
              className="w-full bg-orange-500 hover:bg-orange-600"
              size="lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>

            <button
              onClick={() => onViewChange('menu')}
              className="w-full text-orange-600 font-medium hover:underline"
            >
              Order More Food
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-6">
          A confirmation message has been sent to your phone
        </p>
      </div>
    </div>
  );
}
