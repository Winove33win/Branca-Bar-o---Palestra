
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
                  alt="Lorem Ipsum" 
                  className="rounded-full w-full aspect-square object-cover relative z-10 shadow-2xl border-4 border-white object-top"
                />
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-brand-red">
              BRANCA BARÃO
            </h2>
            <h3 className="font-sans text-xl uppercase tracking-widest mb-6 font-bold opacity-60">
              Lorem Ipsum Dolor
            </h3>
            <div className="w-20 h-1 bg-brand-red mb-8"></div>
            <p className="text-lg leading-relaxed mb-6 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
