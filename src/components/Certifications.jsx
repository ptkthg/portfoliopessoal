import { useScrollReveal } from '../hooks/useScrollReveal';

const ISSUER_COLORS = {
  Microsoft: 'text-[#00a4ef]',
  'Security Blue Team': 'text-[#4a90e2]',
  LetsDefend: 'text-[#e87722]',
  CompTIA: 'text-[#c8202f]',
  Aviatrix: 'text-[#0080ff]',
  Axur: 'text-[#00c4a0]',
};

export default function Certifications({ certifications }) {
  const ref = useScrollReveal();

  if (!certifications?.length) return null;

  return (
    <section id="certificacoes" ref={ref} className="fade-in-section py-20 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase">// certificações</p>
      <h2 className="font-mono text-3xl font-bold text-textprimary mb-10">Credenciais</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="border border-neon/15 bg-surface p-4 hover:border-neon/40 transition-colors duration-200"
          >
            <div className="font-mono text-neon text-lg font-bold mb-1">{cert.name}</div>
            <p className="text-textprimary/70 text-xs leading-snug mb-3">{cert.full}</p>
            <p
              className={`font-mono text-xs font-semibold ${
                ISSUER_COLORS[cert.issuer] ?? 'text-textprimary/50'
              }`}
            >
              {cert.issuer}
            </p>
            <p className="font-mono text-textprimary/55 text-xs mt-0.5">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
