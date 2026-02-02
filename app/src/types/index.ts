// Menu Types
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  is_veg: boolean;
  is_bestseller: boolean;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface MenuResponse {
  categories: MenuCategory[];
}

// Cart Types
export interface CartItem {
  item_id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

// Order Types
export interface OrderItemCreate {
  item_id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export interface OrderCreate {
  customer_name: string;
  phone: string;
  address: string;
  items: OrderItemCreate[];
}

export interface OrderResponse {
  id: string;
  customer_name: string;
  phone: string;
  address: string;
  total_price: number;
  created_at: string;
  status: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  item_id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export interface OrderSuccessResponse {
  success: boolean;
  order_id: string;
  message: string;
  estimated_time: string;
}

// App State
export type View = 'home' | 'menu' | 'cart' | 'checkout' | 'confirmation';
