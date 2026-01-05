import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Home, Info } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header flex justify-between items-center px-6">
      <div className="flex items-center space-x-2">
        <Pizza className="text-red-500 w-8 h-8" />
        <span className="text-xl font-bold text-white">Pizza Delight</span>
      </div>
      <nav className="flex space-x-4">
        <Link to="/" className="flex items-center space-x-1 hover:text-cyan-300 transition-colors">
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link to="/about" className="flex items-center space-x-1 hover:text-cyan-300 transition-colors">
          <Info className="w-5 h-5" />
          <span>About</span>
        </Link>
        <Link to="/menu" className="flex items-center space-x-1 hover:text-cyan-300 transition-colors">
          <Pizza className="w-5 h-5" />
          <span>Menu</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;