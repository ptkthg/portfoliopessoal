import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ProjectCard({ project }) {
  const { title, category, state, stateKind, objective, problem, features, role, tags,
          displayUrl, liveUrl, githubUrl, slug } = project;

  return (
    <div className="pcard-info">
      <div className="cat">{category}</div>
      <h4>
        {title}
        <span className={`status${stateKind === 'live' ? '' : ' int'}`}><i />{state}</span>
      </h4>

      <p><b>Objetivo:</b> {objective}</p>
      {problem && <p><b>Problema tratado:</b> {problem}</p>}
      <p><b>Funcionalidades:</b> {features}</p>
      <p><b>Participação:</b> {role}</p>

      <div className="tags">
        {tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="plinks">
        {liveUrl && (
          <a className="plink" href={liveUrl} target="_blank" rel="noreferrer">
            <Icon name="external" /> {displayUrl}
          </a>
        )}
        {githubUrl && (
          <a className="plink" href={githubUrl} target="_blank" rel="noreferrer">
            <Icon name="github" brand /> Repositório
          </a>
        )}
        <Link className="plink" to={`/projetos/${slug}`} aria-label={`Detalhes do ${title}`}>
          <Icon name="arrow" /> Detalhes
        </Link>
      </div>
    </div>
  );
}
