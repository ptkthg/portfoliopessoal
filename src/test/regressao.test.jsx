import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

const renderApp = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

describe('página inicial', () => {
  it('renderiza as oito seções na ordem definida', () => {
    const { container } = renderApp();
    const ids = [...container.querySelectorAll('main section[id]')].map((s) => s.id);
    expect(ids).toEqual([
      'inicio', 'sobre', 'experiencia', 'competencias',
      'projetos', 'caso', 'curriculo', 'contato',
    ]);
  });

  it('não contém glifos de símbolo remanescentes', () => {
    renderApp();
    expect(document.body.textContent).not.toMatch(/[↗↓☰✕→←]/u);
  });

  it('não menciona conteúdo removido nesta entrega', () => {
    renderApp();
    const texto = document.body.textContent.toLowerCase();
    ['whatsapp', 'hookshade', 'purple team', 'kali'].forEach((termo) =>
      expect(texto).not.toContain(termo),
    );
  });
});
