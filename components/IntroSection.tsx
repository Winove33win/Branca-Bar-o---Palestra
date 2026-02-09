
import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section id="palestra" className="py-20 md:py-32 bg-brand-light text-brand-textDark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            A Palestra
          </h2>
          <p className="text-xl text-brand-red/80 font-serif italic max-w-3xl mx-auto">
            Todos os resultados da nossa vida são consequência daquilo que somos, sendo isso consciente ou não.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg shadow-2xl overflow-hidden mb-8">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/NvW6X9qHz9Y?start=2"
            title="Palestra Branca Barão"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Passamos grande parte da vida se encolhendo pra caber nas expectativas dos outros ou oprimidas pela nossa insegurança e medo.
          </p>
        </div>
      </div>
    </section>
  );
};
