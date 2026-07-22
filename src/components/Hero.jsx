import Icon from './Icon';
import { mailtoHref } from '../lib/contact';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const ref = useScrollReveal();
  const { person, highlights } = portfolioData;

  return (
    <section id="inicio" className="wrap">
      <div className="hero reveal" ref={ref}>
        <div>
          <p className="avail"><span className="pulse" /> Disponibilidade imediata</p>
          <h1 className="h-lead">{person.fullName}</h1>
          <p className="role">{person.role}</p>
          <p className="spec">{person.specialties}</p>
          <p className="loc"><Icon name="pin" /> {person.city}</p>

          <div className="btns">
            <a className="btn btn-fill" href={mailtoHref(person.email, person.shortName)}>
              <Icon name="mail" /> Contato
            </a>
            <a className="btn btn-ghost" href={person.resumePath} download>
              <Icon name="download" /> Currículo em PDF
            </a>
            <a className="btn btn-ghost" href={person.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" brand /> LinkedIn
            </a>
            <a className="btn btn-ghost" href={person.github} target="_blank" rel="noreferrer">
              <Icon name="github" brand /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {highlights.map((h) => (
          <div key={h.label}>
            <p className="v">{h.value}</p>
            <p className="l">{h.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
