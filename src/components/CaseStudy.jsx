import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CaseStudy() {
  const ref = useScrollReveal();
  const { title, summary, steps, tools } = portfolioData.caseStudy;

  return (
    <section id="caso" className="wrap" aria-labelledby="caso-titulo">
      <div className="sec reveal" ref={ref}>
        <p className="eyebrow"><s /> 06 — Estudo de caso</p>
        <h2 className="h-sec" id="caso-titulo">{title}</h2>

        <div className="case">
          <p className="sub">{summary}</p>
          <div className="case-grid">
            {steps.map((step, i) => (
              <div key={step.label} className="case-cell">
                <div className="n">{String(i + 1).padStart(2, '0')} · {step.label}</div>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="jtools">
            <span className="jt">Ferramentas</span>
            <div className="tags">
              {tools.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
