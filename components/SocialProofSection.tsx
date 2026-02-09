import React from 'react';
import depoimentosBackground from '../assets/depoimentos-background.png';
import hinodeLogo from '../assets/hinode-2048.png';
import unibradLogo from '../assets/Logo_Unibrad_Novo.png';
import lindtLogo from '../assets/logo-lindt.webp';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      id: 'unibrad',
      company: 'UNIBRAD',
      logo: unibradLogo,
      quote:
        'A Branca é aquela pessoa que você contrata na certeza de entrega de alto nível e alta energia. Ela é exemplo de quem faz a diferença, que honra os combinados e supera qualquer resultado esperado!',
      author: 'Patricia Biasoli Roque'
    },
    {
      id: 'hinode',
      company: 'Hinode',
      logo: hinodeLogo,
      quote:
        'A palestra da Branca nem é uma palestra, é uma verdadeira experiência transformadora. Ela consegue transmitir o conteúdo de forma profunda ao se conectar com o público e como resultado o impacto da mensagem é muito potente!!! Todo mundo sai com gosto de quero mais.',
      author: 'Elen Viegas'
    },
    {
      id: 'lindt',
      company: 'Lindt',
      logo: lindtLogo,
      quote:
        'A Branca é um acontecimento. Sua energia e alto astral mudam qualquer ambiente que ela esteja. De uma maneira muito leve ela nos faz pensar e repensar sobre pontos importantes para a nossa vida pessoal e profissional.',
      author: 'Mayara Stevano'
    }
  ];

  return (
    <section id="depoimentos" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-white via-white to-brand-light/40 text-brand-dark rounded-[36px] shadow-2xl border border-white/70 px-6 md:px-12 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex h-full flex-col gap-6 rounded-3xl border border-brand-light/50 bg-white/90 p-6 text-center shadow-lg shadow-brand-dark/5"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center w-full min-h-[88px]">
                    <img
                      src={testimonial.logo}
                      alt={`Logo ${testimonial.company}`}
                      className="h-20 w-auto max-w-[180px] object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-textDark/70">
                    {testimonial.company}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-brand-textDark/90 font-medium">
                  “{testimonial.quote}”
                </p>
                <div className="mt-auto text-sm font-semibold text-brand-dark">
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-10 w-full min-h-screen bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${depoimentosBackground})` }}
        />
      </div>
    </section>
  );
};
