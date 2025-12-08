
import React from 'react';
import { CheckSquare } from 'lucide-react';
import { DELIVERY_TOPICS, DELIVERY_CARDS } from '../constants';
import { VideoPlayer } from './VideoPlayer';

export const DeliverySection: React.FC = () => {
  return (
    <section
      id="entrega"
      className="relative overflow-hidden py-24 bg-brand-dark text-white border-t border-brand-red/20"
    >
      {/* Top Gradient Overlay for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-brand-light/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 mb-24 items-start">
          {/* Text Content - Optimized Layout */}
          <div className="lg:w-1/2 order-2 lg:order-1 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-light">
              Lorem Ipsum
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-brand-green pl-6">
              Lorem ipsum dolor sit amet. Consectetur adipiscing elit. <br />
              Sed do eiusmod tempor incididunt ut labore et dolore:
            </p>

            {/* Grid Layout for Topics */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DELIVERY_TOPICS.map((topic, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300 group"
                >
                  <div className="shrink-0 mt-0.5 p-1.5 bg-brand-dark rounded-full border border-brand-green/30 group-hover:border-brand-green/80 transition-colors">
                    <CheckSquare className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video Embed */}
          <div className="lg:w-1/2 relative order-1 lg:order-2 w-full max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-brand-red rounded-2xl rotate-3 transform translate-x-4 translate-y-4 z-0 opacity-50" />

            <div className="relative z-10 w-full drop-shadow-2xl">
              <VideoPlayer
                videoId="u7iH2dRmwDQ"
                className="aspect-video"
                start={4}
                title="Palestra Branca Barão - Minha Entrega"
              />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERY_CARDS.map((card, index) => (
            <div
              key={index}
              className="group bg-brand-red/5 border border-brand-red/10 rounded-xl overflow-hidden hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-bold text-brand-light flex items-center gap-2">
                    <card.icon className="w-5 h-5 text-brand-green" />
                    {card.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
