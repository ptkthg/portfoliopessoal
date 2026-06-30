import { useScrollReveal } from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const ref = useScrollReveal();
  const { aboutText, aboutMetrics: METRICS, aboutPillars: PILLARS } = portfolioData;

  return (
    <section id="sobre" ref={ref} className="fade-in-section py-20 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// sobre</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-8">Quem sou</h2>

      <div className="space-y-4 mb-10 border-l-2 border-neon/30 pl-5">
        {aboutText.map((paragraph, i) => (
          <p
            key={i}
            className={`text-base leading-relaxed ${i === 0 ? 'text-white/90' : 'text-textprimary/80'}`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="border border-neon/20 bg-surface p-4 text-center hover:border-neon/50 transition-colors duration-200"
          >
            <div className="font-mono text-neon text-3xl font-bold">{m.value}</div>
            <div className="text-textprimary/70 text-xs mt-1.5 uppercase tracking-wider leading-snug">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <p className="font-mono text-neon text-xs mb-4 tracking-widest uppercase">// ciclo defensivo</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {PILLARS.map((p) => (
          <div
            key={p.label}
            className="border border-neon/15 bg-surface p-4 hover:border-neon/40 transition-colors duration-200"
          >
            <div className="font-mono text-neon/40 text-xs mb-1">{p.index}</div>
            <div className="font-mono text-neon text-sm font-bold mb-2">{p.label}</div>
            <p className="text-textprimary/60 text-xs leading-snug">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
