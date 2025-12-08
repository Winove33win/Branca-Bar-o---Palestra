
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from './Button';

export const IntroSection: React.FC = () => {
  return (
    <section id="palestra" className="py-20 md:py-32 bg-brand-light text-brand-textDark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            Lorem Ipsum Dolor
          </h2>
          <p className="text-xl text-brand-red/80 font-serif italic max-w-2xl mx-auto">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg shadow-2xl overflow-hidden group cursor-pointer mb-12">
          <img 
            src="https://tse4.mm.bing.net/th/id/OIP.16a1h0J5VA8vzViJ5M1C8AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Lorem Ipsum" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-brand-dark fill-current ml-1" />
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed">
            Duis aute irure dolor in <span className="text-brand-red font-bold">reprehenderit in voluptate</span> velit esse cillum dolore eu <span className="text-brand-red font-bold">fugiat nulla</span> pariatur.
            <br className="hidden md:block"/> Excepteur sint occaecat cupidatat non proident!
          </p>
          <Button>ACESSE O PLANO DA PALESTRA</Button>
        </div>
      </div>
    </section>
  );
};
