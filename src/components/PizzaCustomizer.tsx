import React, { useState } from 'react';
import { Pizza, Check, X } from 'lucide-react';

type Topping = {
  id: number;
  name: string;
  icon: JSX.Element;
  selected: boolean;
};

const mockToppings: Topping[] = [
  { id: 1, name: 'Pepperoni', icon: <Pizza className="w-6 h-6 text-red-500" />, selected: false },
  { id: 2, name: 'Mushrooms', icon: <Pizza className="w-6 h-6 text-green-500" />, selected: false },
  { id: 3, name: 'Onions', icon: <Pizza className="w-6 h-6 text-yellow-500" />, selected: false },
  { id: 4, name: 'Sausage', icon: <Pizza className="w-6 h-6 text-purple-500" />, selected: false },
  { id: 5, name: 'Bacon', icon: <Pizza className="w-6 h-6 text-pink-500" />, selected: false },
];

const PizzaCustomizer: React.FC = () => {
  const [toppings, setToppings] = useState<Topping[]>(mockToppings);

  const toggleToppingSelection = (id: number) => {
    setToppings((prevToppings) =>
      prevToppings.map((topping) =>
        topping.id === id ? { ...topping, selected: !topping.selected } : topping
      )
    );
  };

  return (
    <div className="card space-y-4">
      <h2 className="text-2xl font-bold text-white">Customize Your Pizza</h2>
      <div className="grid grid-cols-2 gap-4">
        {toppings.map((topping) => (
          <div
            key={topping.id}
            className={`flex items-center space-x-3 p-2 rounded-lg 
              ${topping.selected ? 'bg-gradient-to-r from-green-500 to-blue-500' : 'bg-zinc-700'}`}
          >
            {topping.icon}
            <span className="text-white">{topping.name}</span>
            <button
              onClick={() => toggleToppingSelection(topping.id)}
              className="ml-auto"
            >
              {topping.selected ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <X className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        ))}
      </div>
      <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded-lg hover:shadow-xl transition-shadow">
        Order Now
      </button>
    </div>
  );
};

export default PizzaCustomizer;