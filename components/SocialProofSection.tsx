
import React, { useState, useRef, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Button } from './Button';

export const SocialProofSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Helper to determine card styles based on position relative to active index
  const getCardStyle = (index: number) => {
    if (index === activeIndex) {
      return "scale-100 opacity-100 z-10 shadow-2xl border-brand-light/50";
    }
    // Calculate distance for cyclic wrapping could be complex, 
    // but for simple visual scaling in this view:
    return "scale-90 opacity-40 z-0 border-white/10 blur-[1px]";
  };

  // Calculate translation
  // We want the active item to be centered.
  // Item width is fixed usually. Let's assume on desktop item is 300px wide + gap.
  // A simpler way for a "carousel" look without complex math is to just slide a track 
  // and use CSS flex centering.
  
  // Strategy: Use a transform on the track.
  // Center of screen should align with center of active item.
  // On mobile: 100% width items.
  // On desktop: 300px items.

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-brand-red to-brand-dark text-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Logos */}
        <div className="text-center mb-20">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-brand-light leading-tight">
            Lorem Ipsum Dolor Sit Amet <br/> Consectetur Adipiscing
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold font-serif tracking-widest">LOREM</div>
            <div className="text-2xl font-bold font-sans tracking-tight">IPSUM</div>
            <div className="text-2xl font-bold font-serif italic">DOLOR</div>
            <div className="text-2xl font-bold font-mono">AMET</div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/10 mb-20"></div>

        {/* Why Angela */}
        <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">LOREM IPSUM DOLOR?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Ut enim ad minim veniam, quis nostrud exercitation. <br/>
                Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </p>
        </div>

        {/* Custom Carousel */}
        <div className="relative max-w-6xl mx-auto mb-20 group">
            
            {/* Desktop Navigation Buttons */}
            <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-brand-light/10 hover:bg-brand-green text-white hover:text-brand-dark backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-brand-light/10 hover:bg-brand-green text-white hover:text-brand-dark backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Viewport */}
            <div className="overflow-hidden py-10" ref={containerRef}>
                <div 
                    className="flex transition-transform duration-500 ease-out will-change-transform items-center"
                    style={{ 
                        transform: `translateX(calc(50% - ${activeIndex * 320}px - 160px))`, // Centers the active item (approx 320px width card)
                    }}
                >
                    {/* Note: In a real responsive scenario, we might change the px value or use % based on screen width. 
                        For this generic implementation, we assume a card width of roughly 300px + 20px margin.
                        Mobile override logic is handled by CSS media queries on the card size usually, 
                        but for simple translation math in React without resize listeners, we'll use a fixed card width logic 
                        or switch to a snap-scroll container. 
                        
                        To make it robust for mobile:
                    */}
                    <style>{`
                        @media (max-width: 768px) {
                            .carousel-track {
                                transform: translateX(calc(50% - ${activeIndex * 100}% - 50%)) !important;
                            }
                            .carousel-card {
                                min-width: 80vw !important;
                                margin: 0 10vw !important;
                            }
                        }
                    `}</style>
                    
                    {/* Desktop Style overrides applied inline above in style tag for simplicity in this generated output */}
                    
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div 
                            key={testimonial.id}
                            className={`carousel-card relative shrink-0 transition-all duration-500 ease-out mx-4 md:mx-6
                                        w-[280px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border-2
                                        ${getCardStyle(index)}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img 
                                src={testimonial.video} 
                                alt={`Depoimento de ${testimonial.author}`} 
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6 transition-opacity duration-300">
                                <div className={`w-14 h-14 rounded-full bg-brand-green/90 flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-300 ${index === activeIndex ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}>
                                    <Play className="w-5 h-5 text-brand-dark fill-current ml-1" />
                                </div>
                                <div className="text-center absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                    <p className="font-bold text-lg text-white font-serif">{testimonial.author}</p>
                                    <p className="text-xs text-brand-green uppercase tracking-wider mt-1">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-4">
                {TESTIMONIALS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'w-8 bg-brand-green' : 'w-2 bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>

        <div className="text-center pb-8">
           <p className="font-serif text-xl md:text-2xl italic text-brand-light mb-8 max-w-3xl mx-auto">
             "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
           </p>
           <Button>ACESSE O PLANO DA PALESTRA</Button>
        </div>

      </div>
    </section>
  );
};
