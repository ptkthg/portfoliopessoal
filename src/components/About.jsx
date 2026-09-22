import { useScrollReveal } from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const ref = useScrollReveal();
  const {
    aboutText,
    aboutMetrics: METRICS,
    aboutPillars: PILLARS,
    languages,
    education,
  } = portfolioData;

  return (
    <section id="sobre" ref={ref} className="fade-in-section section max-w-4xl">
      <p className="eyebrow text-glow">// sobre</p>
      <h2 className="section-title mb-8">Quem sou</h2>

      <div className="mb-10 space-y-4 border-l-2 border-neon/30 pl-4 sm:pl-5">
        {aboutText.map((paragraph, i) => (
          <p
            key={i}
            className={`text-sm leading-relaxed sm:text-base ${
              i === 0 ? 'text-white/90' : 'text-textprimary/80'
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Métricas de carreira */}
      <div className="mb-12 grid grid-cols-2 gap-px border border-neon/15 bg-neon/15 md:grid-cols-4">
        {METRICS.map((m) => (
          <div key={m.label} className="bg-surface p-4 text-center">
            <div className="font-mono text-2xl font-bold text-neon sm:text-3xl">{m.value}</div>
            <div className="mt-1.5 text-[11px] uppercase leading-snug tracking-wider text-textprimary/65">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Ciclo defensivo */}
      <p className="eyebrow mb-4 text-neon/60">// ciclo defensivo</p>
      <div className="mb-12 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {PILLARS.map((p) => (
          <div key={p.label} className="card card-hover p-4">
            <div className="mb-1 font-mono text-xs text-neon/40">{p.index}</div>
            <div className="mb-2 font-mono text-sm font-bold text-neon">{p.label}</div>
            <p className="text-xs leading-snug text-textprimary/60">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Formação e idiomas */}
      <div className="grid gap-3 sm:grid-cols-2">
        {education && (
          <div className="card p-4">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-neon/60">
              // formação
            </p>
            <p className="text-sm font-semibold leading-snug text-white">{education.course}</p>
            <p className="mt-1 text-xs text-textprimary/60">{education.institution}</p>
            <p className="mt-1 font-mono text-xs text-neon/70">{education.status}</p>
          </div>
        )}

        {languages?.length > 0 && (
          <div className="card p-4">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-neon/60">
              // idiomas
            </p>
            <ul className="space-y-1.5">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-baseline justify-between gap-3">
                  <span className="text-sm text-textprimary/85">{lang.name}</span>
                  <span className="font-mono text-xs text-neon/70">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
