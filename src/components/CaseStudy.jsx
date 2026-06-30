import { useScrollReveal } from '../hooks/useScrollReveal';

const blockLabels = [
  { key: 'context', label: 'Contexto' },
  { key: 'detection', label: 'Detecção' },
  { key: 'response', label: 'Resposta' },
  { key: 'rootCause', label: 'Causa raiz' },
  { key: 'correction', label: 'Correção' },
  { key: 'result', label: 'Resultado' },
  { key: 'lessonsLearned', label: 'Lições aprendidas' },
];

export default function CaseStudy({ caseStudy }) {
  const ref = useScrollReveal();

  if (!caseStudy) return null;

  return (
    <section id="estudo-caso" ref={ref} className="fade-in-section py-20 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// estudo de caso</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">{caseStudy.subtitle}</h2>
      <p className="text-textprimary/70 text-sm mb-8 max-w-2xl">
        Um caso real, do alerta inicial até achar a causa e corrigir.
      </p>

      <div className="border border-neon/25 bg-surface divide-y divide-neon/10">
        {blockLabels.map((item) => (
          <div key={item.key} className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-4 p-5">
            <h3 className="font-mono text-neon text-xs uppercase tracking-widest pt-0.5">{item.label}</h3>
            <p className="text-textprimary/80 text-sm leading-relaxed">{caseStudy[item.key]}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs border border-neon/20 text-textprimary/70 px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
