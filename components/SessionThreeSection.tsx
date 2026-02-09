import React from 'react';
import sessionThreeImage from '../assets/sessao-03-sem-texto.png';

export const SessionThreeSection: React.FC = () => {
  return (
    <section
      id="sessao-03"
      aria-label="Sessão 03"
      className="min-h-screen bg-brand-dark text-white bg-center bg-cover"
      style={{ backgroundImage: `url(${sessionThreeImage})` }}
    >
      <div className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl md:max-w-2xl lg:max-w-[520px] bg-brand-dark/75 backdrop-blur-sm p-6 md:p-10 rounded-2xl">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-brand-light">
              A autenticidade é o elemento mais potente para destravar nossos melhores resultados no
              trabalho e na vida!
            </p>
            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              E isso não é sobre estilo, é sobre a sua maior fonte de energia!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
