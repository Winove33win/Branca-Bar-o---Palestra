
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
    <section
      id="depoimentos"
      className="py-24 text-white relative overflow-hidden"
      style={{ backgroundColor: '#130039' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-light mb-4">
            Depoimentos de empresas
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experiências reais de quem viveu a energia da Branca Barão.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6 backdrop-blur-sm shadow-lg"
            >
              <div className="flex items-center justify-center w-full min-h-[72px]">
                {testimonial.logo.type === 'image' ? (
                  <img
                    src={testimonial.logo.value}
                    alt={`Logo ${testimonial.company}`}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <a
                    href={testimonial.logo.link}
                    className="text-2xl font-serif font-bold tracking-wide text-brand-light text-center w-full"
                  >
                    {testimonial.logo.value}
                  </a>
                )}
              </div>
              <p className="text-sm leading-relaxed text-gray-200">“{testimonial.quote}”</p>
              <div className="text-sm text-brand-green font-semibold">{testimonial.author}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <img
            src={depoimentosBackground}
            alt="Mosaico de depoimentos"
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
};
