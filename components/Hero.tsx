
import React from 'react';
import { HERO_DATA } from '../constants';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/imagem-sessão-hero.png';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/30 z-10 pointer-events-none" />
      
      {/* Hero Image Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-brand-red/20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center min-h-[70vh]">
        <div className="w-full md:w-3/5 lg:w-1/2 pt-10 md:pt-0">
          
          <div className="inline-block px-3 py-1 border border-brand-green/30 rounded-full bg-brand-green/10 mb-6 backdrop-blur-sm">
            <span className="text-brand-green text-xs font-bold tracking-[0.2em] uppercase">
              Palestra
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white drop-shadow-2xl">
            Desperto o <span className="text-brand-green">BRILHO</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white font-light italic">
              que sempre foi SEU,
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light border-l-4 border-brand-green pl-6 max-w-xl shadow-black drop-shadow-md bg-brand-dark/20 backdrop-blur-sm py-2 rounded-r-lg">
            {HERO_DATA.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
             <Button className="shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)]">
               {HERO_DATA.cta}
             </Button>
             
             <div className="flex items-center gap-3 group cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                   <div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-white border-r-[6px] border-r-transparent ml-0.5 rotate-[-90deg]"></div>
                </div>
                <span className="text-sm font-medium text-white tracking-wide">Conheça a palestra</span>
             </div>
          </div>
        </div>
        
        {/* Right side spacer */}
        <div className="hidden md:block w-1/2 h-full"></div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow text-brand-light/70 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest mb-2">Role para ver mais</span>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};
