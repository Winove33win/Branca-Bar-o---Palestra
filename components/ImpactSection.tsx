import React from 'react';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impacto" className="py-20 md:py-28 bg-brand-light text-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-red font-bold mb-6">
          FRASE DE IMPACTO
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          Protagonismo NÃO nasce de quem se encolhe,
          <br />
          nasce de quem ousa assumir o que quer da vida.
        </h2>
      </div>
    </section>
  );
};
