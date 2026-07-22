import { mailtoHref } from '../contact';

describe('mailtoHref', () => {
  it('monta o endereço com assunto codificado', () => {
    expect(mailtoHref('a@b.com', 'Fulano')).toBe(
      'mailto:a@b.com?subject=Contato%20profissional%20%E2%80%94%20Fulano',
    );
  });
});
