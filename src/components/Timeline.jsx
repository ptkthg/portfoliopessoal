import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Timeline({ experiences }) {
  const ref = useScrollReveal();
  const [active, setActive] = useState(experiences.length - 1);

  const exp = experiences[active];

  return (
    <section id="trajetoria" ref={ref} className="fade-in-section section max-w-4xl">
      <p className="eyebrow text-glow">// trajetória</p>
      <h2 className="section-title mb-3">Linha do Tempo</h2>
      <p className="section-lead mb-10">
        Três contextos em dois anos: da administração de identidade à resposta N2/N3 com engenharia de detecção.
      </p>

      {/* Seletor */}
      <div className="relative mb-8">
        <div className="absolute left-0 right-0 top-[14px] h-px bg-neon/20" />
        <div className="flex justify-between">
          {experiences.map((e, i) => (
            <button
              key={e.company}
              type="button"
              onClick={() => setActive(i)}
              aria-current={i === active ? 'true' : undefined}
              aria-label={`${e.company}, ${e.period}`}
              className="group relative flex flex-1 flex-col items-center pb-1 pt-1.5"
            >
              <div
                className={`z-10 mb-3 flex h-5 w-5 items-center justify-center border-2 transition-all duration-200 ${
                  i === active
                    ? 'border-neon bg-terminal'
                    : 'border-textprimary/30 bg-terminal group-hover:border-neon/60'
                }`}
              >
                {i === active && <div className="h-2 w-2 bg-neon" />}
              </div>
              <span
                className={`px-1 text-center font-mono text-[10px] leading-snug transition-colors duration-200 sm:text-xs ${
                  i === active ? 'text-neon' : 'text-textprimary/45 group-hover:text-textprimary/70'
                }`}
              >
                {e.period.split(' –')[0]}
              </span>
              <span
                className={`mt-0.5 px-1 text-center font-mono text-[9px] leading-snug transition-colors duration-200 sm:text-[10px] ${
                  i === active ? 'text-neon/70' : 'text-textprimary/30'
                }`}
              >
                {e.company}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Card de detalhe */}
      <article className="card border-neon/25">
        <header className="border-b border-neon/10 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="mb-1 font-mono text-xs tracking-wide text-neon/60">{exp.period}</p>
              <h3 className="font-mono text-lg font-bold leading-tight text-white sm:text-xl">
                {exp.role}
              </h3>
              <p className="mt-1 font-mono text-sm text-neon">{exp.company}</p>
            </div>
            <span className="shrink-0 border border-neon/15 px-2 py-1 font-mono text-xs text-neon/30">
              0{active + 1} / 0{experiences.length}
            </span>
          </div>
          {exp.focus && (
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-textprimary/45">
              {exp.focus}
            </p>
          )}
        </header>

        {/* Métricas em destaque */}
        {exp.metrics?.length > 0 && (
          <ul className="grid grid-cols-2 gap-px border-b border-neon/10 bg-neon/10 sm:grid-cols-4">
            {exp.metrics.map((m) => (
              <li key={m.label} className="bg-surface px-3 py-4 text-center">
                <div className="font-mono text-xl font-bold leading-none text-neon sm:text-2xl">
                  {m.value}
                </div>
                <div className="mt-1.5 text-[10px] uppercase leading-tight tracking-wider text-textprimary/55">
                  {m.label}
                </div>
              </li>
            ))}
          </ul>
        )}

        <ul className="space-y-2.5 p-5 sm:p-6">
          {exp.activities.map((activity) => (
            <li key={activity} className="flex gap-2.5 text-sm leading-relaxed text-textprimary/80">
              <span className="shrink-0 font-mono text-neon/60">›</span>
              <span>{activity}</span>
            </li>
          ))}
        </ul>

        {exp.stack?.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-neon/10 px-5 pb-5 pt-4 sm:px-6">
            {exp.stack.map((tool) => (
              <span
                key={tool}
                className="border border-neon/20 px-2 py-0.5 font-mono text-[11px] text-textprimary/65"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Navegação */}
      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setActive((prev) => Math.max(0, prev - 1))}
          disabled={active === 0}
          className="tap px-2 font-mono text-xs text-textprimary/50 transition-colors hover:text-neon disabled:opacity-20"
        >
          ← anterior
        </button>
        <button
          type="button"
          onClick={() => setActive((prev) => Math.min(experiences.length - 1, prev + 1))}
          disabled={active === experiences.length - 1}
          className="tap px-2 font-mono text-xs text-textprimary/50 transition-colors hover:text-neon disabled:opacity-20"
        >
          próximo →
        </button>
      </div>
    </section>
  );
}
