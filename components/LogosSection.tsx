import React from 'react';
import logosImage from '../assets/logos-sessao.png';

export const LogosSection: React.FC = () => {
  return (
    <section id="logos" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-10">
          Empresas que confiam
        </h2>
        <div className="max-w-5xl mx-auto">
          <img
            src={logosImage}
            alt="Logos de empresas parceiras"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
