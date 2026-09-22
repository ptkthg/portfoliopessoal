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
    <section id="certificacoes" ref={ref} className="fade-in-section section max-w-4xl">
      <p className="eyebrow text-glow">// certificações</p>
      <h2 className="section-title mb-8">Credenciais</h2>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {certifications.map((cert) => (
          <article key={cert.name} className="card card-hover p-4">
            <div className="mb-1 font-mono text-lg font-bold text-neon">{cert.name}</div>
            <p className="mb-3 text-xs leading-snug text-textprimary/70">{cert.full}</p>
            <div className="flex items-baseline justify-between gap-2">
              <p
                className={`font-mono text-xs font-semibold ${
                  ISSUER_COLORS[cert.issuer] ?? 'text-textprimary/50'
                }`}
              >
                {cert.issuer}
              </p>
              {cert.year && (
                <p className="font-mono text-xs text-textprimary/45">{cert.year}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
