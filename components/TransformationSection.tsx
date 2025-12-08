
import React, { useState } from 'react';
import { XCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { TRANSFORMATION_DATA } from '../constants';
import { Button } from './Button';

// Internal Accordion Component
interface AccordionItemProps {
  item: { title: string; description: string };
  type: 'negative' | 'positive';
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isNegative = type === 'negative';

  // Styling Configuration based on type
  const config = {
    negative: {
      icon: XCircle,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-500/20',
      titleColor: 'text-brand-textDark',
      descColor: 'text-brand-textDark/80',
      arrowColor: 'text-brand-textDark/50',
      hoverBg: 'hover:bg-black/5',
      borderColor: 'border-brand-dark/10'
    },
    positive: {
      icon: CheckCircle2,
      iconColor: 'text-brand-green',
      iconBg: 'bg-brand-green/20',
      titleColor: 'text-gray-200',
      descColor: 'text-gray-400',
      arrowColor: 'text-gray-500',
      hoverBg: 'hover:bg-white/5',
      borderColor: 'border-white/10'
    }
  };

  const styles = isNegative ? config.negative : config.positive;
  const Icon = styles.icon;

  return (
    <div className={`border-b ${styles.borderColor} last:border-0`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-start gap-3 py-3 text-left transition-all duration-200 rounded-lg px-2 -mx-2 ${styles.hoverBg} group`}
        aria-expanded={isOpen}
      >
        <div className="mt-1 min-w-[20px] shrink-0">
          <div className={`w-5 h-5 rounded-full ${styles.iconBg} flex items-center justify-center transition-transform duration-300 ${isOpen ? 'scale-110' : ''}`}>
            <Icon className={`w-3 h-3 ${styles.iconColor}`} />
          </div>
        </div>
        <div className="flex-1">
          <span className={`${styles.titleColor} font-medium text-sm md:text-base leading-snug block`}>
            {item.title}
          </span>
        </div>
        <div className="mt-1 shrink-0">
          {isOpen ? (
            <ChevronUp className={`w-4 h-4 ${styles.arrowColor}`} />
          ) : (
            <ChevronDown className={`w-4 h-4 ${styles.arrowColor}`} />
          )}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="pl-10 pr-2">
          <p className={`text-sm ${styles.descColor} leading-relaxed`}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TransformationSection: React.FC = () => {
  return (
    <section id="transformacao" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Lorem Ipsum Dolor
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto mb-16 items-start">
          {/* Negative Side */}
          <div className="bg-brand-dark/5 p-6 md:p-8 rounded-2xl border border-brand-dark/10 shadow-sm">
             <h3 className="text-brand-dark font-bold text-xl mb-6 flex items-center uppercase tracking-widest opacity-70 border-b border-brand-dark/10 pb-4">
                <XCircle className="w-6 h-6 mr-2 text-red-500" /> 
                LOREM IPSUM
             </h3>
             <div className="space-y-1">
                {TRANSFORMATION_DATA.negative.map((item, idx) => (
                  <AccordionItem key={idx} item={item} type="negative" />
                ))}
             </div>
          </div>

          {/* Positive Side */}
          <div className="bg-brand-dark text-white p-6 md:p-8 rounded-2xl shadow-2xl transform md:-translate-y-4 border border-brand-light/10">
             <h3 className="text-brand-light font-bold text-xl mb-6 flex items-center uppercase tracking-widest border-b border-white/10 pb-4">
                <CheckCircle2 className="w-6 h-6 mr-2 text-brand-green" /> 
                DOLOR SIT AMET
             </h3>
             <div className="space-y-1">
                {TRANSFORMATION_DATA.positive.map((item, idx) => (
                  <AccordionItem key={idx} item={item} type="positive" />
                ))}
             </div>
          </div>
        </div>

        <div className="text-center">
          <Button>ACESSE O PLANO DA PALESTRA</Button>
        </div>
      </div>
    </section>
  );
};
