import React from 'react';
import sessionThreeImage from '../assets/sessao 03.png';

export const SessionThreeSection: React.FC = () => {
  return (
    <section
      id="sessao-03"
      aria-label="Sessão 03"
      className="min-h-screen bg-brand-dark text-white bg-center bg-cover"
      style={{ backgroundImage: `url(${sessionThreeImage})` }}
    >
      <div className="min-h-screen" />
    </section>
  );
};
