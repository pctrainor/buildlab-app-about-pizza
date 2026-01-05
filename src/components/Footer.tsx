import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer flex justify-between items-center px-6 bg-zinc-900 text-white">
      <div className="flex flex-col space-y-2">
        <span className="text-lg font-semibold">Pizza Delight</span>
        <span className="text-sm text-gray-400">Delicious pizzas at your doorstep</span>
        <span className="text-xs text-gray-500">&copy; 2023 Pizza Delight. All rights reserved.</span>
      </div>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export { Footer };