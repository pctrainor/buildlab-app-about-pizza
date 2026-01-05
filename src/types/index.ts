export type Reward = {
  id: number;
  description: string;
  pointsRequired: number;
  icon: JSX.Element;
};

export type Topping = {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
};

export type Order = {
  id: number;
  customerName: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
};

export type OrderItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  loyaltyPoints: number;
};

export type ApiResponse<T> = {
  data: T;
  error?: string;
};

export type Currency = 'USD' | 'EUR' | 'GBP';