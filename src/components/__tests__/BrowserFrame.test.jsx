import { render, screen } from '@testing-library/react';
import BrowserFrame from '../BrowserFrame';

describe('BrowserFrame', () => {
  it('mostra a URL na barra de endereço', () => {
    render(<BrowserFrame url="iocenricher.vercel.app" title="IOC Enricher" />);
    expect(screen.getByText('iocenricher.vercel.app')).toBeInTheDocument();
  });

  it('renderiza a captura quando ela existe', () => {
    render(
      <BrowserFrame url="exemplo.app" title="IOC Enricher" screenshot="/assets/projects/ioc.png" />,
    );
    const img = screen.getByRole('img', { name: 'Captura de tela do IOC Enricher' });
    expect(img).toHaveAttribute('src', '/assets/projects/ioc.png');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('cai na maquete abstrata quando não há captura', () => {
    const { container } = render(<BrowserFrame url="exemplo.app" title="IOC Enricher" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(container.querySelector('.mockui')).toBeInTheDocument();
  });

  it('usa o título na barra quando o projeto não tem endereço', () => {
    const { container } = render(<BrowserFrame title="XDR Hunting Pack" />);
    expect(screen.getByText('XDR Hunting Pack')).toBeInTheDocument();
    expect(container.querySelector('use[href="#i-lock"]')).not.toBeInTheDocument();
  });
});
