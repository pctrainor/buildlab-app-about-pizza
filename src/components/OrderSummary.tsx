import React from 'react';
import { CreditCard, DollarSign, Truck, CheckCircle } from 'lucide-react';

type OrderItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

const mockOrderItems: OrderItem[] = [
  { id: 1, name: 'Margherita', quantity: 2, price: 12 },
  { id: 2, name: 'Pepperoni', quantity: 1, price: 15 },
  { id: 3, name: 'BBQ Chicken', quantity: 1, price: 18 },
];

const OrderSummary: React.FC = () => {
  const totalAmount = mockOrderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <ul className="space-y-2 mb-4">
        {mockOrderItems.map(item => (
          <li key={item.id} className="flex justify-between items-center">
            <span>{item.quantity} x {item.name}</span>
            <span className="text-zinc-400">${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="border-t border-zinc-700 pt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">Total</span>
          <span className="text-xl font-bold">${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="flex items-center justify-center w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md hover:from-green-500 hover:to-blue-600">
            <DollarSign className="w-5 h-5 mr-2" />
            Pay Now
          </button>
          <button className="flex items-center justify-center w-full py-2 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-lg shadow-md hover:from-red-500 hover:to-pink-600">
            <CreditCard className="w-5 h-5 mr-2" />
            Pay Later
          </button>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center space-x-2 text-green-400">
            <CheckCircle className="w-6 h-6" />
            <span>Order Confirmed</span>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Truck className="w-6 h-6" />
            <span>Delivery in 30 mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;