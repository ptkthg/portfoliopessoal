import { render, screen } from '@testing-library/react';
import About from '../About';
import { portfolioData } from '../../data/portfolioData';

describe('About', () => {
  beforeEach(() => render(<About />));

  it('renderiza todos os parágrafos do resumo', () => {
    portfolioData.about.forEach((p) => expect(screen.getByText(p)).toBeInTheDocument());
  });

  it('lista os fatos objetivos', () => {
    expect(screen.getByText('Última experiência')).toBeInTheDocument();
    expect(screen.getByText('Oceânica')).toBeInTheDocument();
  });

  it('mostra as quatro áreas de responsabilidade', () => {
    expect(screen.getByText('Monitoramento e triagem')).toBeInTheDocument();
    expect(screen.getByText('IAM e PAM')).toBeInTheDocument();
  });

  it('não contém linguagem promocional', () => {
    const texto = document.body.textContent.toLowerCase();
    ['apaixonado', 'transformando desafios', 'sempre em busca', 'incríveis'].forEach((frase) =>
      expect(texto).not.toContain(frase),
    );
  });
});
