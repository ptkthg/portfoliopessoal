import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = {
  shield: '🛡️',
  radar: '📡',
  target: '🎯',
  bug: '🔎',
  key: '🔐',
  server: '🖥️',
  globe: '🌐',
  crosshair: '⌖',
};

export default function Areas({ areas }) {
  const ref = useScrollReveal();
  // No mobile a lista abre um item por vez: 8 cards abertos viravam
  // quase três telas de rolagem só nesta seção.
  const [openIndex, setOpenIndex] = useState(0);

  if (!areas?.length) return null;

  const intro = (
    <>
      <p className="eyebrow text-glow">// o que eu faço</p>
      <h2 className="section-title mb-3">Minhas funções principais</h2>
      <p className="section-lead mb-8">
        Meu eixo é defesa: SOC e resposta a incidentes, detecção, inteligência de ameaças, identidade e GRC. O card marcado como{' '}
        <span className="font-mono text-neon/80">ofensivo</span> é estudo de laboratório, rumo ao Purple Team.
      </p>
    </>
  );

  return (
    <section id="areas" ref={ref} className="fade-in-section section max-w-5xl">
      {intro}

      {/* Mobile: acordeão compacto */}
      <ul className="divide-y divide-neon/10 border border-neon/15 sm:hidden">
        {areas.map((area, i) => {
          const offensive = area.side === 'offensive';
          const open = openIndex === i;
          return (
            <li key={area.title} className="bg-surface">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center gap-3 px-4 py-3 text-left"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-neon/30 bg-terminal text-sm">
                  {iconMap[area.icon] ?? '•'}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-sm font-bold leading-snug text-white">
                    {area.title}
                  </span>
                  {offensive && (
                    <span className="mt-0.5 inline-block font-mono text-[10px] uppercase tracking-widest text-neon/70">
                      ofensivo
                    </span>
                  )}
                </span>
                <span
                  className={`shrink-0 font-mono text-neon/50 transition-transform duration-200 ${
                    open ? 'rotate-45' : ''
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {open && (
                <p className="px-4 pb-4 pl-[3.75rem] text-sm leading-relaxed text-textprimary/65">
                  {area.description}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {/* Desktop: grid com tudo visível */}
      <div className="hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => {
          const offensive = area.side === 'offensive';
          return (
            <article
              key={area.title}
              className={`group relative overflow-hidden border bg-surface p-5 transition-colors duration-200 ${
                offensive
                  ? 'border-neon/30 hover:border-neon/70'
                  : 'border-neon/15 hover:border-neon/45'
              }`}
            >
              <span
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-neon/60 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />

              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-neon/30 bg-terminal text-base">
                  {iconMap[area.icon] ?? '•'}
                </div>
                {offensive && (
                  <span className="border border-neon/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-neon/70">
                    ofensivo
                  </span>
                )}
              </div>

              <h3 className="mb-2 font-mono text-base font-bold leading-snug text-white">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-textprimary/65">{area.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
