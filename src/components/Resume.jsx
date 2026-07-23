import Icon from './Icon';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Resume() {
  const ref = useScrollReveal();
  const { resume, person, education, certifications } = portfolioData;

  return (
    <section id="curriculo" className="wrap" aria-labelledby="curriculo-titulo">
      <div className="sec reveal" ref={ref}>
        <p className="eyebrow"><s /> 07 — Currículo</p>
        <h2 className="h-sec" id="curriculo-titulo">Currículo</h2>

        <div className="cv">
          <div>
            <div className="cv-band"><p>{resume.summary}</p></div>
            <div className="btns">
              <a className="btn btn-fill" href={person.resumePath} download>
                <Icon name="download" /> Baixar PDF
              </a>
              <a className="btn btn-ghost" href={person.resumePath} target="_blank" rel="noreferrer">
                <Icon name="doc" /> Abrir em nova aba
              </a>
            </div>
            <p className="small">
              O conteúdo desta página e o PDF são gerados a partir da mesma fonte de dados.
            </p>
          </div>

          <div className="cv-meta">
            {resume.meta.map((m) => (
              <div key={m.label}>
                <div className="k">{m.label}</div>
                <div className="v">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="two">
          <div>
            <h3>Formação acadêmica</h3>
            {education.map((e) => (
              <div key={e.title} className="item">
                <h4>{e.title}</h4>
                <p>{e.detail}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>Certificações</h3>
            {certifications.map((c) => (
              <div key={c.name} className="item">
                <h4>{c.name}</h4>
                <p>{c.issuer} · {c.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
