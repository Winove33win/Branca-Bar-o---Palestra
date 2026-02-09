import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'A Palestra', href: '#palestra' },
    { name: 'Impacto', href: '#impacto' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'A Palestrante', href: '#bio' },
    { name: 'Empresas', href: '#logos' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Adjust for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-gradient-to-b from-brand-dark/80 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="z-50 relative group"
        >
          <span className={`font-serif italic text-2xl md:text-3xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-brand-light' : 'text-brand-light drop-shadow-md'
          }`}>
            Branca Barão
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs xl:text-sm uppercase tracking-widest font-medium text-gray-200 hover:text-brand-green transition-colors relative group whitespace-nowrap cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="pl-4">
            <Button className="!py-2 !px-6 !text-xs !shadow-none hover:!shadow-lg">
              FALE COM A EQUIPE
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden z-50 text-brand-light p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-brand-dark/98 flex flex-col items-center justify-center space-y-8 transition-all duration-500 transform ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } lg:hidden`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="font-serif text-2xl md:text-3xl text-brand-light hover:text-brand-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
             <Button onClick={() => setIsMenuOpen(false)}>
               FALE COM A EQUIPE
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
