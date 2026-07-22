import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Timeline() {
  const ref = useScrollReveal();

  return (
    <section id="experiencia" className="wrap">
      <div className="sec reveal" ref={ref}>
        <p className="eyebrow"><s /> 03 — Experiência profissional</p>

        <div className="tl">
          {portfolioData.experiences.map((exp, i) => (
            <article key={exp.company} className={`job${i === 0 ? ' now' : ''}`}>
              <div className="job-top">
                <div>
                  <h4>{exp.role}</h4>
                  <div className="co">{exp.company}</div>
                </div>
                <div className="per">{exp.period}</div>
              </div>
              <div className="jarea">{exp.area}</div>
              <ul>
                {exp.activities.map((a) => <li key={a}>{a}</li>)}
              </ul>
              <div className="jtools">
                <span className="jt">Ferramentas</span>
                <div className="tags">
                  {exp.tools.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
