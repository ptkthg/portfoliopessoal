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
    <section id="estudo-caso" ref={ref} className="fade-in-section section max-w-4xl">
      <p className="eyebrow text-glow">// estudo de caso</p>
      <h2 className="section-title mb-3">{caseStudy.subtitle}</h2>
      <p className="section-lead mb-8">
        Um caso real, do alerta inicial até achar a causa e corrigir.
      </p>

      <ol className="card divide-y divide-neon/10 border-neon/25">
        {blockLabels.map((item, i) => (
          <li
            key={item.key}
            className="grid gap-1.5 p-4 sm:grid-cols-[130px_1fr] sm:gap-4 sm:p-5"
          >
            <h3 className="flex items-baseline gap-2 font-mono text-xs uppercase tracking-widest text-neon sm:pt-0.5">
              <span className="text-neon/35">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </h3>
            <p className="text-sm leading-relaxed text-textprimary/80">{caseStudy[item.key]}</p>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="border border-neon/20 px-2 py-1 font-mono text-[11px] leading-none text-textprimary/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
