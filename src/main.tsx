import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Menu } from './pages';
import { Header } from './components/Header';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-900 text-slate-100">
      <Router>
        <Header />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}