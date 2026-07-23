import { render, screen } from '@testing-library/react';
import Icon, { IconSprite } from '../Icon';

describe('Icon', () => {
  it('referencia o símbolo pedido', () => {
    const { container } = render(<Icon name="download" />);
    expect(container.querySelector('use')).toHaveAttribute('href', '#i-download');
  });

  it('marca ícones de marca com a classe de preenchimento', () => {
    const { container } = render(<Icon name="github" brand />);
    expect(container.querySelector('svg')).toHaveClass('ic-brand');
  });

  it('esconde o ícone de leitores de tela por padrão', () => {
    const { container } = render(<Icon name="mail" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('expõe o sprite com todos os símbolos usados no site', () => {
    const { container } = render(<IconSprite />);
    const ids = [...container.querySelectorAll('symbol')].map((s) => s.id);
    expect(ids).toEqual(
      expect.arrayContaining([
        'i-shield', 'i-download', 'i-external', 'i-arrow', 'i-arrow-l',
        'i-menu', 'i-close', 'i-lock', 'i-mail', 'i-doc', 'i-pin',
        'i-github', 'i-linkedin',
      ]),
    );
  });
});
