import { portfolioData, navItems } from '../portfolioData';

describe('portfolioData', () => {
  it('publica os dados de contato confirmados', () => {
    expect(portfolioData.person.email).toBe('ptkamp1@gmail.com');
    expect(portfolioData.person.availability).toBe('Imediata');
  });

  it('não expõe telefone nem WhatsApp', () => {
    const serialized = JSON.stringify(portfolioData).toLowerCase();
    expect(serialized).not.toContain('whatsapp');
    expect(serialized).not.toContain('99803');
  });

  it('registra a experiência mais recente com o período confirmado', () => {
    const [atual] = portfolioData.experiences;
    expect(atual.company).toBe('Oceânica');
    expect(atual.role).toBe('Analista de Segurança da Informação');
    expect(atual.period).toBe('out 2025 — abr 2026');
    expect(atual.area).toBeTruthy();
    expect(atual.tools.length).toBeGreaterThan(0);
  });

  it('dá a cada experiência área, atribuições e ferramentas', () => {
    portfolioData.experiences.forEach((exp) => {
      expect(exp.area).toBeTruthy();
      expect(exp.activities.length).toBeGreaterThan(0);
      expect(exp.tools.length).toBeGreaterThan(0);
    });
  });

  it('descreve cada projeto com os campos exigidos pela galeria', () => {
    portfolioData.projects.forEach((p) => {
      expect(p.slug).toMatch(/^[a-z0-9-]+$/);
      expect(p.category).toBeTruthy();
      expect(p.objective).toBeTruthy();
      expect(p.features).toBeTruthy();
      expect(p.role).toBeTruthy();
      expect(p.state).toBeTruthy();
      expect(Array.isArray(p.tags)).toBe(true);
      expect(p.detail.sections.length).toBeGreaterThan(0);
    });
  });

  it('não inclui Hookshade nesta entrega', () => {
    const slugs = portfolioData.projects.map((p) => p.slug);
    expect(slugs).not.toContain('hookshade');
  });

  it('registra o ano das certificações', () => {
    portfolioData.certifications.forEach((c) => expect(c.year).toBe('2025'));
  });

  it('tem uma aba de navegação por seção da página', () => {
    expect(navItems.map((n) => n.id)).toEqual([
      'inicio', 'sobre', 'experiencia', 'competencias',
      'projetos', 'caso', 'curriculo', 'contato',
    ]);
  });
});
