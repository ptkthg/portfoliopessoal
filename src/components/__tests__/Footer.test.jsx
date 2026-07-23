import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  beforeEach(() => render(<Footer />));

  it('identifica o profissional e a localização', () => {
    // O nome aparece na marca e na barra inferior; a asserção mira a linha de
    // identificação, que junta nome e cidade e é única.
    expect(
      screen.getByText(/Patrick Santos · Rio de Janeiro, RJ/),
    ).toBeInTheDocument();
  });

  it('repete os links externos com rel seguro', () => {
    const linkedin = screen.getByRole('link', { name: /LinkedIn/ });
    expect(linkedin).toHaveAttribute('target', '_blank');
    expect(linkedin).toHaveAttribute('rel', 'noreferrer');
  });

  it('oferece o download do currículo', () => {
    expect(screen.getByRole('link', { name: /Currículo/ })).toHaveAttribute('download');
  });
});
