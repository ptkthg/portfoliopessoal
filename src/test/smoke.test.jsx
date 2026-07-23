import { render, screen } from '@testing-library/react';

describe('ambiente de teste', () => {
  it('renderiza JSX e aplica matchers do jest-dom', () => {
    render(<p>ambiente ok</p>);
    expect(screen.getByText('ambiente ok')).toBeInTheDocument();
  });
});
