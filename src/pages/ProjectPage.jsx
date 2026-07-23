import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import BrowserFrame from '../components/BrowserFrame';
import Icon from '../components/Icon';
import { portfolioData } from '../data/portfolioData';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = portfolioData.projects.find((p) => p.slug === slug);
  const proximo = project
    ? portfolioData.projects[
        (portfolioData.projects.indexOf(project) + 1) % portfolioData.projects.length
      ]
    : null;

  useEffect(() => {
    if (project) document.title = `${project.title} | ${portfolioData.person.shortName}`;
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="wrap pp">
      <a className="back" href="/#projetos"><Icon name="arrow-l" /> Projetos</a>

      <div className="cat">{project.category}</div>
      <h1 className="pp-title">{project.title}</h1>
      <p className="sub">{project.detail.summary}</p>

      <div className="btns">
        {project.liveUrl && (
          <a className="btn btn-fill" href={project.liveUrl} target="_blank" rel="noreferrer">
            <Icon name="external" /> Abrir aplicação
          </a>
        )}
        {project.githubUrl && (
          <a className="btn btn-ghost" href={project.githubUrl} target="_blank" rel="noreferrer">
            <Icon name="github" brand /> Repositório
          </a>
        )}
      </div>

      <div className="pp-meta">
        <div><div className="k">participação</div><div className="v">{project.role}</div></div>
        {project.period && (
          <div><div className="k">período</div><div className="v">{project.period}</div></div>
        )}
        <div><div className="k">tecnologias</div><div className="v">{project.tags.slice(0, 3).join(' · ')}</div></div>
        <div><div className="k">estado atual</div><div className="v v-state">{project.state}</div></div>
      </div>

      <BrowserFrame
        url={project.displayUrl}
        title={project.title}
        screenshot={project.screenshot}
        ratio="16 / 8"
      />

      <div className="pp-body">
        <div>
          {project.detail.sections.map((s) => (
            <section key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </section>
          ))}
        </div>

        <aside className="side-box">
          <div className="k">nesta página</div>
          <div className="toc">
            {project.detail.sections.map((s, i) => (
              <span key={s.title} className={i === 0 ? 'on' : undefined}>{s.title}</span>
            ))}
          </div>
          <div className="k">tecnologias</div>
          <div className="tags">
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </aside>
      </div>

      {proximo && proximo.slug !== project.slug && (
        <div className="pp-next">
          <span className="k">próximo</span>
          <Link to={`/projetos/${proximo.slug}`}>{proximo.title} <Icon name="arrow" /></Link>
        </div>
      )}
    </div>
  );
}
