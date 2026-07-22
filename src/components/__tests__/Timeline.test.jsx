import { render, screen } from '@testing-library/react';
import Timeline from '../Timeline';
import { portfolioData } from '../../data/portfolioData';

describe('Timeline', () => {
  beforeEach(() => render(<Timeline />));

  it('lista as três experiências', () => {
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(3);
  });

  it('mostra empresa, cargo, período e área', () => {
    expect(screen.getByText('Oceânica')).toBeInTheDocument();
    expect(screen.getByText('out 2025 — abr 2026')).toBeInTheDocument();
    expect(screen.getByText('Cibersegurança e governança')).toBeInTheDocument();
  });

  it('mostra as ferramentas de cada experiência', () => {
    const total = portfolioData.experiences.reduce((n, e) => n + e.tools.length, 0);
    expect(document.querySelectorAll('.jtools .tag')).toHaveLength(total);
  });

  it('destaca a experiência mais recente', () => {
    expect(document.querySelectorAll('.job.now')).toHaveLength(1);
  });
});
