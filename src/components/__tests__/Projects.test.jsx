import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../Projects';
import { portfolioData } from '../../data/portfolioData';

const renderProjects = () =>
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>,
  );

describe('Projects', () => {
  it('mostra todos os projetos', () => {
    renderProjects();
    portfolioData.projects.forEach((p) =>
      expect(screen.getByRole('heading', { name: new RegExp(p.title) })).toBeInTheDocument(),
    );
  });

  it('separa o destaque da grade', () => {
    const { container } = renderProjects();
    expect(container.querySelectorAll('.featured')).toHaveLength(1);
    expect(container.querySelectorAll('.grid2 .pcard-info')).toHaveLength(
      portfolioData.projects.filter((p) => !p.featured).length,
    );
  });

  it('descreve cada projeto com objetivo, funcionalidades e participação', () => {
    renderProjects();
    expect(screen.getAllByText('Objetivo:').length).toBe(portfolioData.projects.length);
    expect(screen.getAllByText('Funcionalidades:').length).toBe(portfolioData.projects.length);
    expect(screen.getAllByText('Participação:').length).toBe(portfolioData.projects.length);
  });

  it('leva para a página do projeto com um único link nomeado por projeto', () => {
    renderProjects();
    // A prévia é aria-hidden, então só o link do card conta como nome acessível.
    const links = screen.getAllByRole('link', { name: /Detalhes do IOC Enricher/ });
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', '/projetos/ioc-enricher');
  });

  it('renderiza o projeto sem endereço nem repositório sem links quebrados', () => {
    renderProjects();
    const semLinks = portfolioData.projects.find((p) => !p.liveUrl && !p.githubUrl);
    const bloco = screen
      .getByRole('heading', { name: new RegExp(semLinks.title) })
      .closest('.pcard-info');
    expect(within(bloco).queryByText('Repositório')).not.toBeInTheDocument();
    expect(within(bloco).queryByText('Acessar site')).not.toBeInTheDocument();
    expect(within(bloco).queryByText('Problema tratado:')).not.toBeInTheDocument();
    // O link interno de detalhes continua presente.
    expect(within(bloco).getByRole('link', { name: new RegExp(`Detalhes do ${semLinks.title}`) }))
      .toHaveAttribute('href', `/projetos/${semLinks.slug}`);
  });

  it('aponta os links externos para as URLs reais', () => {
    renderProjects();
    const live = screen.getByRole('link', { name: /iocenricher\.vercel\.app/ });
    expect(live).toHaveAttribute('href', 'https://iocenricher.vercel.app');
    expect(live).toHaveAttribute('rel', 'noreferrer');
  });
});
