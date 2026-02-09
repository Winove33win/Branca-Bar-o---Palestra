
import React from 'react';

export const BioSection: React.FC = () => {
  return (
    <section id="bio" className="py-24 bg-brand-light text-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
             <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-red rounded-full"></div>
                <img 
                  src="https://tse3.mm.bing.net/th/id/OIP.OqLZ4DoqefDXsmIsM6MHNQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Branca Barão" 
                  className="rounded-full w-full aspect-square object-cover relative z-10 shadow-2xl border-4 border-white object-top"
                />
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-brand-red">
              BRANCA BARÃO
            </h2>
            <h3 className="font-sans text-xl uppercase tracking-widest mb-6 font-bold opacity-60">
              Palestrante e Master Trainer
            </h3>
            <div className="w-20 h-1 bg-brand-red mb-8"></div>
            <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
              <li>Master Trainer em Programação Neurolinguística Sistêmica com Certificação Internacional pela NLP;</li>
              <li>Certificação Internacional em dinâmicas humanas e de grupos;</li>
              <li>Especialista em Metodologia Disney de Gestão da Experiência do Cliente e Cultura Organizacional;</li>
              <li>Professora de Pós Graduação em Estudos da Felicidade.</li>
              <li>Membro da Mensa Brasil – Sociedade Internacional formada por pessoas de alto QI;</li>
              <li>
                Autora dos best-sellers - “A mulher que vivia de Propósito”, “8 ou 80” e “Vida: uma aventura só de ida”.
              </li>
              <li>Palestrante Top Five do maior congresso de Treinamento e Desenvolvimento da América Latina por 4 edições.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
