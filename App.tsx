import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { IntroSection } from './components/IntroSection';
import { SessionThreeSection } from './components/SessionThreeSection';
import { ImpactSection } from './components/ImpactSection';
import { SocialProofSection } from './components/SocialProofSection';
import { BioSection } from './components/BioSection';
import { LogosSection } from './components/LogosSection';
import { Footer } from './components/Footer';

function App() {
  
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <IntroSection />
      <SessionThreeSection />
      <ImpactSection />
      <SocialProofSection />
      <BioSection />
      <LogosSection />
      <Footer />
      
      {/* Sticky Mobile CTA - Visible only on small screens */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-dark/90 backdrop-blur-md border-t border-brand-red/20 md:hidden z-50 flex justify-center">
         <button className="w-full bg-brand-green hover:bg-brand-greenHover text-brand-dark font-bold py-3 rounded shadow-lg uppercase tracking-wide text-sm flex items-center justify-center">
            Fale com nossa equipe
         </button>
      </div>
    </div>
  );
}

export default App;
