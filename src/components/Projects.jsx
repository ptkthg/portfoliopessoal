import { Link } from 'react-router-dom';
import BrowserFrame from './BrowserFrame';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal();
  const { projects } = portfolioData;
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="wrap" aria-labelledby="projetos-titulo">
      <div className="sec reveal" ref={ref}>
        <h2 className="eyebrow" id="projetos-titulo"><s /> 05 — Projetos</h2>

        {featured && (
          <div className="featured">
            <Link className="pcard" to={`/projetos/${featured.slug}`} aria-label={`Detalhes do ${featured.title}`}>
              <BrowserFrame url={featured.displayUrl} title={featured.title} screenshot={featured.screenshot} />
            </Link>
            <ProjectCard project={featured} />
          </div>
        )}

        <div className="grid2">
          {rest.map((p) => (
            <div key={p.slug}>
              <Link className="pcard" to={`/projetos/${p.slug}`} aria-label={`Detalhes do ${p.title}`}>
                <BrowserFrame url={p.displayUrl} title={p.title} screenshot={p.screenshot} />
              </Link>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
