import Icon from './Icon';
import { navItems, portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { person } = portfolioData;
  const atalhos = navItems.filter((n) => ['sobre', 'experiencia', 'competencias', 'projetos'].includes(n.id));

  return (
    <footer className="foot">
      <div className="foot-in">
        <div>
          <div className="mark">
            <span className="glyph"><Icon name="shield" /></span>
            <span>
              <span className="nm">{person.shortName}</span>
              <span className="rl">{person.tag} · RJ</span>
            </span>
          </div>
          <p className="small">
            Analista de Segurança da Informação · Blue Team, SOC, IAM/PAM e gestão de vulnerabilidades.
          </p>
        </div>

        <div>
          <h5>navegar</h5>
          {atalhos.map((n) => <a key={n.id} href={`/#${n.id}`}>{n.label}</a>)}
        </div>

        <div>
          <h5>encontrar</h5>
          <a href={person.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" brand /> LinkedIn</a>
          <a href={person.github} target="_blank" rel="noreferrer"><Icon name="github" brand /> GitHub</a>
          <a href={`mailto:${person.email}`}><Icon name="mail" /> E-mail</a>
          <a href={person.resumePath} download><Icon name="download" /> Currículo PDF</a>
        </div>
      </div>

      <div className="foot-bar">
        <div>
          <span>{person.fullName} · {person.city}</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
