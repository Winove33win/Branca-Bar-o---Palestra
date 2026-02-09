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
          <div className="max-w-xl md:max-w-2xl lg:max-w-[600px]">
            <div className="text-6xl md:text-7xl text-white/90 font-serif leading-none mb-4">“</div>
            <p className="text-2xl md:text-4xl font-serif leading-relaxed text-white drop-shadow-lg">
              A <span className="text-[#ff3b8d] font-semibold">autenticidade</span> é o elemento{' '}
              <span className="text-[#ff3b8d] font-semibold">mais potente</span> para destravar nossos{' '}
              <span className="text-[#ff3b8d] font-semibold">melhores resultados</span> no trabalho e na
              vida!
            </p>
            <p className="mt-6 text-lg md:text-2xl text-white/90 leading-relaxed drop-shadow-lg">
              E isso <span className="text-[#ff3b8d] font-semibold">não</span> é sobre estilo, é sobre a
              sua <span className="text-[#ff3b8d] font-semibold">maior fonte de energia</span>!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
