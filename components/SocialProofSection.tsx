
import React from 'react';
import depoimentosBackground from '../assets/depoimentos-background.png';
import hinodeLogo from '../assets/hinode-2048.png';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      id: 'unibrad',
      company: 'UNIBRAD',
      logo: {
        type: 'text',
        value: 'UNIBRAD',
        link: 'https://www.unibrad.com.br/UniversidadeCorporativa/'
      },
      quote:
        'A Branca é aquela pessoa que você contrata na certeza de entrega de alto nível e alta energia. Ela é exemplo de quem faz a diferença, que honra os combinados e supera qualquer resultado esperado!',
      author: 'Patricia Biasoli Roque'
    },
    {
      id: 'hinode',
      company: 'Hinode',
      logo: {
        type: 'image',
        value: hinodeLogo
      },
      quote:
        'A palestra da Branca nem é uma palestra, é uma verdadeira experiência transformadora. Ela consegue transmitir o conteúdo de forma profunda ao se conectar com o público e como resultado o impacto da mensagem é muito potente!!! Todo mundo sai com gosto de quero mais.',
      author: 'Elen Viegas'
    },
    {
      id: 'lindt',
      company: 'Lindt',
      logo: {
        type: 'image',
        value:
          'https://lindtbr.vtexassets.com/assets/vtex.file-manager-graphql/images/5a778b3b-9d47-4f40-9e45-50c3a373bdb6___a31bb44c6466eb47eeb4d72755c4707b.png?width=154&aspect=true&quality=10'
      },
      quote:
        'A Branca é um acontecimento. Sua energia e alto astral mudam qualquer ambiente que ela esteja. De uma maneira muito leve ela nos faz pensar e repensar sobre pontos importantes para a nossa vida pessoal e profissional.',
      author: 'Mayara Stevano'
    }
  ];

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-white text-brand-dark rounded-[32px] shadow-2xl border border-white/70 px-6 md:px-12 py-12">
          <div className="grid gap-10 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-dark/10 bg-white/90 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-brand-red/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              >
                <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-8">
                  <div className="mx-auto h-1 w-14 rounded-full bg-brand-red/70" />
                  <p className="text-base leading-relaxed text-brand-textDark/90 font-medium">
                    {testimonial.quote}
                  </p>
                  <div className="text-sm text-brand-textDark font-semibold uppercase tracking-wide">
                    {testimonial.author}
                  </div>
                </div>
                <div className="flex items-center justify-center border-t border-brand-dark/10 bg-brand-light/60 px-6 py-6">
                  {testimonial.logo.type === 'image' ? (
                    <img
                      src={testimonial.logo.value}
                      alt={`Logo ${testimonial.company}`}
                      className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <a
                      href={testimonial.logo.link}
                      className="text-2xl font-serif font-bold tracking-wide text-brand-dark text-center transition-transform duration-300 group-hover:scale-105"
                    >
                      {testimonial.logo.value}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-10 h-40 md:h-56 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${depoimentosBackground})` }}
        />
      </div>
    </section>
  );
};
