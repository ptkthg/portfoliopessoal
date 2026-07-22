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

  it('leva para a página do projeto', () => {
    renderProjects();
    expect(screen.getAllByRole('link', { name: /Detalhes do IOC Enricher/ })[0]).toHaveAttribute(
      'href',
      '/projetos/ioc-enricher',
    );
  });

  it('aponta os links externos para as URLs reais', () => {
    renderProjects();
    const live = screen.getByRole('link', { name: /iocenricher\.vercel\.app/ });
    expect(live).toHaveAttribute('href', 'https://iocenricher.vercel.app');
    expect(live).toHaveAttribute('rel', 'noreferrer');
  });

  it('omite o link de repositório quando não existe', () => {
    renderProjects();
    const semRepo = portfolioData.projects.find((p) => !p.githubUrl);
    const bloco = screen.getByRole('heading', { name: new RegExp(semRepo.title) }).closest('.pcard-info');
    expect(within(bloco).queryByText('Repositório')).not.toBeInTheDocument();
  });
});
