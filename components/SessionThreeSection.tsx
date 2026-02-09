import React from 'react';
import sessionThreeImage from '../assets/sessao 03.png';

export const SessionThreeSection: React.FC = () => {
  return (
    <section id="sessao-03" className="py-20 md:py-28 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Sessão 03</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mt-4"></div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src={sessionThreeImage}
            alt="Sessão 03"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
