import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../Contact';

describe('Contact', () => {
  it('usa um título direto', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: 'Contato profissional' })).toBeInTheDocument();
  });

  it('oferece LinkedIn, GitHub e e-mail', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: /LinkedIn/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /GitHub/ })).toBeInTheDocument();
    expect(screen.getByText('ptkamp1@gmail.com')).toBeInTheDocument();
  });

  it('encaminha a mensagem por mailto com assunto preenchido', () => {
    render(<Contact />);
    const href = screen.getByRole('link', { name: /Enviar mensagem/ }).getAttribute('href');
    expect(href).toMatch(/^mailto:ptkamp1@gmail\.com\?subject=/);
  });

  it('não expõe WhatsApp nem telefone', () => {
    render(<Contact />);
    expect(document.body.textContent.toLowerCase()).not.toContain('whatsapp');
    expect(document.body.textContent).not.toContain('99803');
  });

  it('copia o endereço para a área de transferência', async () => {
    // userEvent.setup() instala o próprio stub de clipboard, então lemos de
    // volta o que o componente escreveu em vez de espionar com um mock manual
    // (que o próprio user-event sobreporia).
    const user = userEvent.setup();
    render(<Contact />);
    await user.click(screen.getByRole('button', { name: 'Copiar e-mail' }));
    expect(await navigator.clipboard.readText()).toBe('ptkamp1@gmail.com');
    expect(await screen.findByText('E-mail copiado')).toBeInTheDocument();
  });

  it('não quebra nem mostra falso sucesso quando o clipboard falha', async () => {
    const original = navigator.clipboard;
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: () => Promise.reject(new Error('sem permissão')) },
      configurable: true,
    });
    try {
      render(<Contact />);
      const botao = screen.getByRole('button', { name: 'Copiar e-mail' });
      botao.click();
      await Promise.resolve();
      expect(screen.queryByText('E-mail copiado')).not.toBeInTheDocument();
    } finally {
      Object.defineProperty(navigator, 'clipboard', { value: original, configurable: true });
    }
  });
});
