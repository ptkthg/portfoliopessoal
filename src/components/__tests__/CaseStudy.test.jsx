import { render, screen } from '@testing-library/react';
import CaseStudy from '../CaseStudy';

describe('CaseStudy', () => {
  beforeEach(() => render(<CaseStudy />));

  it('mostra as seis etapas do incidente, numeradas uma única vez', () => {
    const celulas = document.querySelectorAll('.case-cell');
    expect(celulas).toHaveLength(6);
    // A numeração vem do índice no componente; o rótulo nos dados é só o nome
    // da etapa, sem número — senão a célula sairia "01 · 01 · detecção".
    // Match exato (.textContent === ...), porque toHaveTextContent faz substring
    // e "01 · 01 · detecção" contém "01 · detecção", deixando o bug passar.
    expect(celulas[0].querySelector('.n').textContent).toBe('01 · detecção');
    expect(celulas[5].querySelector('.n').textContent).toBe('06 · resultado');
  });

  it('lista as ferramentas envolvidas', () => {
    expect(screen.getByText('Microsoft Defender')).toBeInTheDocument();
    expect(screen.getByText('GPO')).toBeInTheDocument();
  });

  it('não termina em lição genérica', () => {
    expect(document.body.textContent).not.toContain('lição');
  });
});
