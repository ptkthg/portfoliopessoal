import { render, screen } from '@testing-library/react';
import Resume from '../Resume';
import { portfolioData } from '../../data/portfolioData';

describe('Resume', () => {
  beforeEach(() => render(<Resume />));

  it('mostra o resumo profissional do currículo', () => {
    expect(screen.getByText(portfolioData.resume.summary)).toBeInTheDocument();
  });

  it('oferece o download do PDF', () => {
    const link = screen.getByRole('link', { name: /Baixar PDF/ });
    expect(link).toHaveAttribute('href', portfolioData.person.resumePath);
    expect(link).toHaveAttribute('download');
  });

  it('mostra os metadados sem placeholders', () => {
    expect(screen.getByText('Segurança da Informação')).toBeInTheDocument();
    expect(document.body.textContent).not.toContain('a confirmar');
  });

  it('lista formação e certificações com o ano', () => {
    expect(screen.getByText(/Universidade Estácio de Sá/)).toBeInTheDocument();
    expect(screen.getByText('Aviatrix · 2025')).toBeInTheDocument();
    expect(screen.getByText('Axur · 2025')).toBeInTheDocument();
  });
});
