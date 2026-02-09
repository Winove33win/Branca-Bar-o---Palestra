
import React from 'react';

export const Marquee: React.FC = () => {
  const text = "Se diminuir não é uma opção! - Se encolher não ajuda o mundo - Autenticidade não machuca e nem ofende - Nossos resultados refletem nossa autenticidade - ";
  const repeatedText = Array(20).fill(text).join("");

  return (
    <div className="w-full bg-brand-red overflow-hidden py-3 border-y border-brand-light/10 relative z-30">
      <div className="whitespace-nowrap animate-marquee">
        <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-white/90 uppercase">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};
