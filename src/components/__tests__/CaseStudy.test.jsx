import { render, screen } from '@testing-library/react';
import CaseStudy from '../CaseStudy';

describe('CaseStudy', () => {
  beforeEach(() => render(<CaseStudy />));

  it('mostra as seis etapas do incidente', () => {
    const celulas = document.querySelectorAll('.case-cell');
    expect(celulas).toHaveLength(6);
    expect(celulas[0]).toHaveTextContent('detecção');
    expect(celulas[5]).toHaveTextContent('resultado');
  });

  it('lista as ferramentas envolvidas', () => {
    expect(screen.getByText('Microsoft Defender')).toBeInTheDocument();
    expect(screen.getByText('GPO')).toBeInTheDocument();
  });

  it('não termina em lição genérica', () => {
    expect(document.body.textContent).not.toContain('lição');
  });
});
