
import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-brand-red/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="font-serif italic text-2xl text-brand-light">Branca Barão</span>
          <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Branca Barão. Todos os direitos reservados.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Instagram className="w-6 h-6" /></a>
          <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Facebook className="w-6 h-6" /></a>
          <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Youtube className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  );
};
