import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { portfolioData } from '../../data/portfolioData';

describe('Hero', () => {
  beforeEach(() => render(<Hero />));

  it('usa o nome completo como título da página', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Patrick Santos',
    );
  });

  it('mostra cargo, especialidades, local e disponibilidade', () => {
    expect(screen.getByText('Analista de Segurança da Informação')).toBeInTheDocument();
    expect(screen.getByText(portfolioData.person.specialties)).toBeInTheDocument();
    expect(screen.getByText('Rio de Janeiro, RJ')).toBeInTheDocument();
    expect(screen.getByText(/Disponibilidade imediata/)).toBeInTheDocument();
  });

  it('oferece os quatro caminhos de contato', () => {
    expect(screen.getByRole('link', { name: /Contato/ })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:ptkamp1@gmail.com'),
    );
    expect(screen.getByRole('link', { name: /Currículo em PDF/ })).toHaveAttribute('download');
    expect(screen.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute('href', portfolioData.person.linkedin);
    expect(screen.getByRole('link', { name: /GitHub/ })).toHaveAttribute('href', portfolioData.person.github);
  });

  it('mostra os quatro indicadores factuais', () => {
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('plataformas de SIEM e monitoramento')).toBeInTheDocument();
  });
});
