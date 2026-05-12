import { useScrollReveal } from '../hooks/useScrollReveal';

const METRICS = [
  { value: '2+', label: 'Anos de experiência' },
  { value: '30+', label: 'Ferramentas dominadas' },
  { value: '5', label: 'Análises técnicas' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="sobre" ref={ref} className="fade-in-section py-20 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// sobre</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-8">Quem sou</h2>

      <div className="space-y-3 mb-10 border-l-2 border-neon/30 pl-5">
        <p className="text-white/90 text-base leading-relaxed">
          Profissional de Blue Team com 2+ anos em SOC, detecção de ameaças e resposta a incidentes.
        </p>
        <p className="text-textprimary/80 text-base leading-relaxed">
          Especializado em Microsoft Defender XDR, KQL, MITRE ATT&CK e governança de identidades no
          Active Directory e Entra ID.
        </p>
        <p className="text-textprimary/80 text-base leading-relaxed">
          Busco um time onde eu possa contribuir com detecção precoce de ameaças e redução contínua
          da superfície de ataque.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="border border-neon/20 bg-surface p-4 text-center hover:border-neon/50 transition-colors duration-200"
          >
            <div className="font-mono text-neon text-3xl font-bold">{m.value}</div>
            <div className="text-textprimary/50 text-xs mt-1.5 uppercase tracking-wider leading-snug">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
