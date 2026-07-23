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
            {/* A prévia leva ao mesmo destino que o "Detalhes" do card ao lado.
                Escondo-a da árvore de acessibilidade para o leitor de tela não
                ouvir dois links idênticos por projeto; o card mantém o link nomeado. */}
            <Link className="pcard" to={`/projetos/${featured.slug}`} tabIndex={-1} aria-hidden="true">
              <BrowserFrame url={featured.displayUrl} title={featured.title} screenshot={featured.screenshot} />
            </Link>
            <ProjectCard project={featured} />
          </div>
        )}

        <div className="grid2">
          {rest.map((p) => (
            <div key={p.slug}>
              <Link className="pcard" to={`/projetos/${p.slug}`} tabIndex={-1} aria-hidden="true">
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
