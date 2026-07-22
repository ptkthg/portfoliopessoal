import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Skills from '../Skills';
import { portfolioData } from '../../data/portfolioData';

describe('Skills', () => {
  it('mostra todas as categorias por padrão', () => {
    render(<Skills />);
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(
      portfolioData.skillGroups.length,
    );
  });

  // Dois grupos compartilham o mesmo `where`, então a asserção percorre a lista
  // inteira em vez de procurar um texto único.
  it('indica onde cada competência foi exercida', () => {
    render(<Skills />);
    const rotulos = [...document.querySelectorAll('.skillrow .lvl')].map((e) => e.textContent);
    expect(rotulos).toEqual(portfolioData.skillGroups.map((g) => g.where));
  });

  it('filtra as categorias ao escolher um filtro', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    await user.click(screen.getByRole('button', { name: 'iam e pam' }));
    const titulos = screen.getAllByRole('heading', { level: 4 }).map((h) => h.textContent);
    expect(titulos).toEqual(['IAM e PAM']);
  });

  it('volta a mostrar tudo ao escolher "todas"', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    await user.click(screen.getByRole('button', { name: 'iam e pam' }));
    await user.click(screen.getByRole('button', { name: 'todas' }));
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(
      portfolioData.skillGroups.length,
    );
  });

  it('marca o filtro ativo', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    const alvo = screen.getByRole('button', { name: 'endpoints' });
    await user.click(alvo);
    expect(alvo).toHaveAttribute('aria-pressed', 'true');
  });
});
