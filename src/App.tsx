import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Menu } from './pages';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Pizza } from 'lucide-react';

const App: React.FC = () => {
  const mockPizzas = [
    { id: 1, name: 'Margherita', description: 'Classic delight with 100% real mozzarella cheese', price: '$10' },
    { id: 2, name: 'Pepperoni', description: 'A delicious combination of pepperoni and mozzarella', price: '$12' },
    { id: 3, name: 'BBQ Chicken', description: 'Grilled chicken with BBQ sauce and onions', price: '$14' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-900 text-slate-100 flex flex-col">
      <Router>
        <Header />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home pizzas={mockPizzas} />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu pizzas={mockPizzas} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <div className="fixed bottom-4 right-4 flex items-center space-x-2 text-slate-400">
        <Pizza className="w-6 h-6" />
        <span>Powered by Pizza</span>
      </div>
    </div>
  );
};

export default App;