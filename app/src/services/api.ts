import type { MenuResponse, OrderCreate, OrderSuccessResponse, OrderResponse } from '@/types';

// API Base URL - Change this for production
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// API client
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new Error(error.detail || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Menu APIs
  async getMenu(): Promise<MenuResponse> {
    return this.fetch<MenuResponse>('/menu');
  }

  // Order APIs
  async createOrder(order: OrderCreate): Promise<OrderSuccessResponse> {
    return this.fetch<OrderSuccessResponse>('/order', {
      method: 'POST',
      body: JSON.stringify(order),
    });
  }

  async getOrder(orderId: string): Promise<OrderResponse> {
    return this.fetch<OrderResponse>(`/orders/${orderId}`);
  }
}

export const api = new ApiClient(API_BASE_URL);

// Format price in INR
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Validate Indian phone number
export const validatePhone = (phone: string): { valid: boolean; error?: string } => {
  // Remove spaces, dashes, and +91 prefix
  const cleaned = phone.replace(/[\s\-]/g, '');
  
  if (cleaned.startsWith('+91')) {
    const num = cleaned.slice(3);
    if (/^[6-9]\d{9}$/.test(num)) {
      return { valid: true };
    }
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    const num = cleaned.slice(2);
    if (/^[6-9]\d{9}$/.test(num)) {
      return { valid: true };
    }
  } else if (/^[6-9]\d{9}$/.test(cleaned)) {
    return { valid: true };
  }
  
  return { 
    valid: false, 
    error: 'Please enter a valid 10-digit Indian mobile number (e.g., 9876543210)' 
  };
};

// Format phone number for display
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
};
