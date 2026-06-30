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

  if (!areas?.length) return null;

  return (
    <section id="areas" ref={ref} className="fade-in-section py-20 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// áreas de atuação</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">Domínios</h2>
      <p className="text-textprimary/50 text-sm mb-10 max-w-2xl">
        Eixo principal em Segurança da Informação, SOC, Blue Team, IAM e gestão de vulnerabilidades. Os cards marcados como{' '}
        <span className="text-neon/80 font-mono">ofensivo</span> refletem estudo aplicado à evolução para Purple Team.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => {
          const offensive = area.side === 'offensive';
          return (
            <article
              key={area.title}
              className={`border bg-surface p-5 transition-colors duration-200 ${
                offensive
                  ? 'border-neon/30 hover:border-neon/70'
                  : 'border-neon/15 hover:border-neon/40'
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center border border-neon/30 bg-terminal text-base">
                  {iconMap[area.icon] ?? '•'}
                </div>
                {offensive && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neon/70 border border-neon/30 px-2 py-0.5">
                    ofensivo
                  </span>
                )}
              </div>
              <h3 className="font-mono text-white text-base font-bold mb-2">{area.title}</h3>
              <p className="text-textprimary/65 text-sm leading-relaxed">{area.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
