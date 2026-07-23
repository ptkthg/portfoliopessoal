import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectPage from '../ProjectPage';
import { portfolioData } from '../../data/portfolioData';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projetos/:slug" element={<ProjectPage />} />
        <Route path="/" element={<p>home</p>} />
      </Routes>
    </MemoryRouter>,
  );

describe('ProjectPage', () => {
  it('mostra o projeto correspondente ao slug', () => {
    renderAt('/projetos/ioc-enricher');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('IOC Enricher');
  });

  it('mostra as cinco seções objetivas do detalhe', () => {
    renderAt('/projetos/ioc-enricher');
    ['Objetivo', 'Problema tratado', 'Funcionalidades', 'Decisões técnicas', 'Estado atual'].forEach(
      (t) => expect(screen.getByRole('heading', { level: 3, name: t })).toBeInTheDocument(),
    );
  });

  it('mostra os metadados do projeto', () => {
    renderAt('/projetos/ioc-enricher');
    expect(screen.getByText('participação')).toBeInTheDocument();
    expect(screen.getByText('Em produção')).toBeInTheDocument();
  });

  it('oferece volta para a listagem', () => {
    renderAt('/projetos/ioc-enricher');
    expect(screen.getByRole('link', { name: /Projetos/ })).toHaveAttribute('href', '/#projetos');
  });

  it('redireciona slug inexistente para a home', () => {
    renderAt('/projetos/nao-existe');
    expect(screen.getByText('home')).toBeInTheDocument();
  });

  it('omite a célula de período quando o dado não foi confirmado', () => {
    renderAt('/projetos/statecraft-cyber');
    expect(screen.queryByText('período')).not.toBeInTheDocument();
  });

  it('não tem slug duplicado, que colidiria de rota', () => {
    const slugs = portfolioData.projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
