import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();
  const { about, facts, responsibilities } = portfolioData;

  return (
    <section id="sobre" className="wrap">
      <div className="sec reveal" ref={ref}>
        <p className="eyebrow"><s /> 02 — Sobre</p>

        <div className="about">
          <div>
            {about.map((paragraph, i) => (
              <p key={paragraph} className={i === 0 ? 'first' : undefined}>{paragraph}</p>
            ))}
          </div>
          <div className="facts">
            {facts.map((f) => (
              <div key={f.label} className="fact">
                <b>{f.label}</b>
                <span>{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pillars">
          {responsibilities.map((r) => (
            <div key={r.index} className="pillar">
              <div className="n">{r.index}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
