import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

describe('Header', () => {
  it('mostra as oito abas numeradas', () => {
    renderHeader();
    const nav = screen.getByRole('navigation', { name: 'Seções' });
    expect(nav.querySelectorAll('a')).toHaveLength(8);
    expect(screen.getAllByText('Competências').length).toBeGreaterThan(0);
  });

  it('mantém a gaveta fechada por padrão', () => {
    renderHeader();
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument();
  });

  it('abre e fecha a gaveta pelo botão', async () => {
    const user = userEvent.setup();
    renderHeader();
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }));
    expect(screen.getByRole('navigation', { name: 'Menu' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Fechar menu' }));
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument();
  });

  it('fecha a gaveta ao escolher uma seção', async () => {
    const user = userEvent.setup();
    renderHeader();
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }));
    const drawer = screen.getByRole('navigation', { name: 'Menu' });
    await user.click(within(drawer).getByText('Projetos'));
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument();
  });
});
