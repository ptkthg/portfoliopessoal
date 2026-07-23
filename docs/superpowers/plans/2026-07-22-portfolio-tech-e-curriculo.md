# Repaginação do portfólio (tech + currículo + galeria) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reconstruir o portfólio em `D:\Projetos\portfoliopessoal` com a identidade e a estrutura validadas no protótipo, adicionando seção de currículo, galeria de projetos com moldura de navegador e páginas individuais por projeto.

**Architecture:** O CSS validado do protótipo é portado para `src/index.css` dentro de `@layer components`, preservando os nomes de classe (`.btn`, `.tag`, `.browser`, `.skillrow`…). Os componentes React consomem essas classes, o que mantém o JSX curto e a fidelidade visual verificável. `portfolioData.js` continua sendo a fonte única de conteúdo. `react-router-dom` adiciona as rotas `/` e `/projetos/:slug`.

**Tech Stack:** React 18, Vite 5, Tailwind 3, react-router-dom 6, Vitest + @testing-library/react + jsdom.

**Spec:** `docs/superpowers/specs/2026-07-22-portfolio-tech-e-curriculo-design.md`
**Protótipo (referência visual e de conteúdo):** `.superpowers/brainstorm/2666-1784737456/content/tema-verde-v3.html`

---

## Estrutura de arquivos

| Arquivo | Responsabilidade |
|---|---|
| `src/data/portfolioData.js` | Fonte única de conteúdo: pessoa, experiências, competências, projetos, caso, formação |
| `src/index.css` | Tokens CSS e classes de componente portadas do protótipo |
| `tailwind.config.js` | Cores, fontes e escala do tema |
| `src/lib/contact.js` | Monta o `mailto:` usado pelo hero, contato e rodapé |
| `src/components/Icon.jsx` | Sprite SVG e componente de ícone |
| `src/components/Header.jsx` | Barra fixa: marca, abas numeradas, CTA, gaveta mobile |
| `src/components/Hero.jsx` | Nome, cargo, especialidades, local, disponibilidade, botões, indicadores |
| `src/components/About.jsx` | Resumo, lista de fatos, blocos de responsabilidade |
| `src/components/Timeline.jsx` | Experiência profissional |
| `src/components/Skills.jsx` | Competências por categoria com filtros |
| `src/components/BrowserFrame.jsx` | Moldura de navegador com captura ou maquete |
| `src/components/Projects.jsx` | Galeria: destaque + grade |
| `src/components/ProjectCard.jsx` | Bloco de informação de um projeto |
| `src/components/CaseStudy.jsx` | Estudo de caso em seis células |
| `src/components/Resume.jsx` | Currículo, formação e certificações |
| `src/components/Contact.jsx` | Contato profissional com `mailto:` |
| `src/components/Footer.jsx` | Rodapé em três colunas |
| `src/pages/HomePage.jsx` | Composição da página inicial |
| `src/pages/ProjectPage.jsx` | Página individual de projeto |
| `src/App.jsx` | Rotas |
| `vercel.json` | Rewrite de SPA |

Removidos ao final: `Areas.jsx`, `Differentials.jsx`, `Certifications.jsx`, `Methodology.jsx`, `Arsenal.jsx`.

---

### Task 1: Ferramental de teste

**Files:**
- Modify: `package.json`
- Create: `vitest.config.js`
- Create: `src/test/setup.js`
- Test: `src/test/smoke.test.jsx`

- [ ] **Step 1: Instalar as dependências**

```bash
cd D:/Projetos/portfoliopessoal
npm install -D vitest@^2.1.8 jsdom@^25.0.1 @testing-library/react@^16.1.0 @testing-library/jest-dom@^6.6.3 @testing-library/user-event@^14.5.2
```

- [ ] **Step 2: Criar `vitest.config.js`**

```js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
});
```

- [ ] **Step 3: Criar `src/test/setup.js`**

```js
import '@testing-library/jest-dom/vitest';

// jsdom não implementa IntersectionObserver, usado pelo scroll reveal.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = IntersectionObserverStub;

// jsdom não implementa matchMedia, usado por prefers-reduced-motion.
globalThis.matchMedia =
  globalThis.matchMedia ||
  ((query) => ({
    matches: false,
    media: query,
    addEventListener() {},
    removeEventListener() {},
  }));
```

- [ ] **Step 4: Adicionar o script de teste ao `package.json`**

No objeto `"scripts"`, acrescentar:

```json
    "test": "vitest run",
    "test:watch": "vitest"
```

- [ ] **Step 5: Escrever o teste de fumaça**

`src/test/smoke.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';

describe('ambiente de teste', () => {
  it('renderiza JSX e aplica matchers do jest-dom', () => {
    render(<p>ambiente ok</p>);
    expect(screen.getByText('ambiente ok')).toBeInTheDocument();
  });
});
```

- [ ] **Step 6: Rodar e confirmar que passa**

Run: `npm test`
Expected: PASS, 1 teste.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json vitest.config.js src/test/
git commit -m "test: configura vitest, testing-library e jsdom"
```

---

### Task 2: Tokens do tema

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`

- [ ] **Step 1: Substituir o `theme.extend` do `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: '#0a0a0f',
        surface: '#111118',
        surface2: '#15151d',
        line: '#22222c',
        neon: '#00ff88',
        textprimary: '#f2f5f8',
        muted: '#9aa1ad',
        faint: '#666d7a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Reescrever `src/index.css`**

Abrir o protótipo `.superpowers/brainstorm/2666-1784737456/content/tema-verde-v3.html` e copiar o conteúdo da tag `<style>`, **exceto** os blocos abaixo, que existem só para a prévia e não fazem parte do site:

- `.tb`, `.tb b`, `.tb button`, `.tb .sep`, `.tb .hint`
- `.stage`
- `.frame`, `.frame:after`, `.frame > *`
- `.view`, `.view.on`

O arquivo final tem esta forma:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* colar aqui o bloco :root{...} do protótipo, sem a variável --pad duplicada */
  }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    -webkit-font-smoothing: antialiased;
  }
  svg { display: block; }
  * { box-sizing: border-box; }
}

@layer components {
  /* colar aqui todas as regras de componente do protótipo:
     .ic .ic-brand .topbar .topbar-in .mark .tabs .top-cta .burger .drawer
     .wrap .sec .eyebrow .h-lead .h-sec .sub .small .btns .btn .btn-fill .btn-ghost
     .hero .role .spec .loc .avail .hero-stats
     .about .facts .fact .pillars .pillar
     .tl .job .jarea .jtools .jt
     .filters .chip .skillrow .tags .tag
     .browser .bb-bar .dots .url .bb-shot .pcard .pcard-info .plinks .plink .status
     .featured .grid2 .alt
     .case .case-grid .case-cell
     .cv .cv-band .cv-meta .two .item
     .contact .clinks .clink
     .foot .foot-in .foot-bar
     .back .pp-title .pp-meta .shot .pp-body .side-box .toc
     .reveal */
}
```

O `<body>` do site tem largura total, então as media queries do protótipo, que usam `@container`, precisam virar `@media`. Substituir todas as ocorrências de `@container (max-width:` por `@media (max-width:` e remover a declaração `container-type: inline-size`.

- [ ] **Step 3: Ajustar o `body` do `index.html`**

Trocar `<body class="bg-terminal">` por `<body>`, já que a cor agora vem do `@layer base`.

- [ ] **Step 4: Verificar que o build continua de pé**

Run: `npm run build`
Expected: build concluído sem erro, sem aviso de classe Tailwind desconhecida.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.js src/index.css index.html
git commit -m "style: porta tokens e classes de componente do prototipo validado"
```

---

### Task 3: Componente de ícone

**Files:**
- Create: `src/components/Icon.jsx`
- Test: `src/components/__tests__/Icon.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
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
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- Icon`
Expected: FAIL, "Failed to resolve import ../Icon".

- [ ] **Step 3: Implementar**

`src/components/Icon.jsx`. Os `path` de cada símbolo devem ser copiados do bloco `<svg width="0" height="0">` do protótipo, que já contém os treze símbolos com os traçados corretos, incluindo as marcas oficiais de GitHub e LinkedIn.

```jsx
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      {/* colar aqui os treze <symbol> do protótipo, na íntegra */}
    </svg>
  );
}

export default function Icon({ name, brand = false, className = '', title }) {
  return (
    <svg
      className={`${brand ? 'ic-brand' : 'ic'} ${className}`.trim()}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
    >
      {title && <title>{title}</title>}
      <use href={`#i-${name}`} />
    </svg>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- Icon`
Expected: PASS, 4 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/Icon.jsx src/components/__tests__/Icon.test.jsx
git commit -m "feat: adiciona sprite svg e componente de icone"
```

---

### Task 4: Reestruturar os dados

**Files:**
- Modify: `src/data/portfolioData.js`
- Test: `src/data/__tests__/portfolioData.test.js`

- [ ] **Step 1: Escrever o teste**

```js
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
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- portfolioData`
Expected: FAIL, `person.email` é `undefined` ou `availability` não existe.

- [ ] **Step 3: Reescrever `src/data/portfolioData.js`**

O conteúdo textual de cada campo é copiado **literalmente** do protótipo `.superpowers/brainstorm/2666-1784737456/content/tema-verde-v3.html`, que é a versão revisada e aprovada pelo usuário. Nada é reescrito nem resumido nesta task. Mapa de origem:

| Campo | Onde está no protótipo |
|---|---|
| `about` (3 parágrafos) | `<div class="about">`, os três `<p>` da coluna esquerda |
| `facts` | os seis `<div class="fact">` |
| `responsibilities` | os quatro `<div class="pillar">` |
| `experiences[].activities` | os `<li>` de cada `<div class="job">` |
| `experiences[].tools` | as `<span class="tag">` dentro de `.jtools` de cada job |
| `experiences[].area` | o `<div class="jarea">` de cada job |
| `skillGroups` | os nove `<div class="skillrow">`: `h4` vira `label`, `.lvl` vira `where`, as tags viram `skills` |
| `skillFilters` | as oito `<span class="chip">` |
| `projects[].objective/problem/features/role` | os `<p><b>…</b></p>` de cada `.pcard-info` |
| `projects[].detail.sections` | os `<h3>` + `<p>` da página de projeto, na aba "Projeto" |
| `caseStudy.steps` | as seis `<div class="case-cell">`: `.n` vira `label`, o `<p>` vira `desc` |
| `resume.summary` | o `<p>` dentro de `.cv-band` |
| `resume.meta` | os quatro blocos de `.cv-meta` |

Apenas `xdr-hunting-pack` não tem `detail.sections` no protótipo, porque a prévia só detalhou o IOC Enricher. Para ele e para o Statecraft, montar as cinco seções a partir do que já está no card correspondente (`objective` vira Objetivo, `features` vira Funcionalidades, `state` vira Estado atual) e deixar "Problema tratado" e "Decisões técnicas" com o mesmo teor factual do card, sem inventar detalhe técnico novo.

Estrutura:

```js
export const portfolioData = {
  person: {
    fullName: 'Patrick Santos',
    shortName: 'Patrick Santos',
    role: 'Analista de Segurança da Informação',
    tag: 'SEC.ANALYST',
    specialties: 'Blue Team · SOC · SIEM · IAM/PAM · Resposta a incidentes · Gestão de vulnerabilidades',
    city: 'Rio de Janeiro, RJ',
    email: 'ptkamp1@gmail.com',
    availability: 'Imediata',
    linkedin: 'https://www.linkedin.com/in/ptkthg/',
    github: 'https://github.com/ptkthg',
    resumePath: '/assets/patrickcv0426.pdf',
    resumeUpdatedAt: 'julho de 2026',
  },

  // Faixa de indicadores do hero — todos verificáveis nas experiências abaixo.
  highlights: [
    { value: '2024', label: 'início em segurança da informação' },
    { value: '3', label: 'empresas' },
    { value: '5', label: 'plataformas de SIEM e monitoramento' },
    { value: 'N1/N2', label: 'nível de triagem e resposta' },
  ],

  about: [ /* os três parágrafos do protótipo */ ],

  facts: [
    { label: 'Local', value: 'Rio de Janeiro, RJ' },
    { label: 'Última experiência', value: 'Oceânica' },
    { label: 'Cargo', value: 'Analista de Segurança da Informação' },
    { label: 'Disponibilidade', value: 'Imediata' },
    { label: 'Formação', value: 'ADS · Estácio, conclusão em 2026' },
    { label: 'Idiomas', value: 'Inglês intermediário, espanhol intermediário' },
  ],

  responsibilities: [
    { index: '01', title: 'Monitoramento e triagem', desc: '…' },
    { index: '02', title: 'Resposta a incidentes', desc: '…' },
    { index: '03', title: 'IAM e PAM', desc: '…' },
    { index: '04', title: 'Vulnerabilidades', desc: '…' },
  ],

  experiences: [
    {
      company: 'Oceânica',
      role: 'Analista de Segurança da Informação',
      period: 'out 2025 — abr 2026',
      area: 'Cibersegurança e governança',
      activities: [ /* cinco itens do protótipo */ ],
      tools: ['Defender XDR', 'Entra ID', 'PAM', 'Intune', 'ASM', 'WAF', 'n8n'],
    },
    // Vortex e Rio Quality na mesma forma
  ],

  // O rótulo indica onde a competência foi exercida, não nível autoatribuído.
  skillGroups: [
    { label: 'Blue Team e SOC', where: 'Oceânica · Vortex', category: 'blue-team', skills: [ /* … */ ] },
    // as outras oito categorias
  ],

  skillFilters: [
    { id: 'todas', label: 'todas' },
    { id: 'blue-team', label: 'blue team e soc' },
    // …
  ],

  projects: [
    {
      slug: 'ioc-enricher',
      title: 'IOC Enricher',
      category: 'Ferramenta para triagem Blue Team',
      featured: true,
      state: 'Em produção',
      stateKind: 'live',
      objective: '…',
      problem: '…',
      features: '…',
      role: 'Concepção, desenvolvimento e publicação',
      period: '2026',
      tags: ['React', 'Vite', 'Tailwind', 'Vercel', 'Groq · Llama 3.3 70B', 'APIs OSINT'],
      displayUrl: 'iocenricher.vercel.app',
      liveUrl: 'https://iocenricher.vercel.app',
      githubUrl: 'https://github.com/ptkthg/iocenricher',
      screenshot: null, // trocar por '/assets/projects/ioc-enricher.png' quando houver captura
      detail: {
        summary: '…',
        sections: [
          { title: 'Objetivo', body: '…' },
          { title: 'Problema tratado', body: '…' },
          { title: 'Funcionalidades', body: '…' },
          { title: 'Decisões técnicas', body: '…' },
          { title: 'Estado atual', body: '…' },
        ],
      },
    },
    // statecraft-cyber e xdr-hunting-pack na mesma forma
  ],

  caseStudy: {
    title: 'Resposta a incidente em endpoint com Microsoft Defender',
    summary: '…',
    steps: [ /* seis: detecção, investigação, contenção, causa raiz, correção, resultado */ ],
    tools: ['Microsoft Defender', 'SIEM', 'Active Directory', 'PowerShell', 'GPO'],
  },

  resume: {
    summary: '…',
    meta: [
      { label: 'área de atuação', value: 'Segurança da Informação' },
      { label: 'disponibilidade', value: 'Imediata' },
      { label: 'e-mail', value: 'ptkamp1@gmail.com' },
      { label: 'última atualização', value: 'julho de 2026' },
    ],
  },

  education: [
    { title: 'Análise e Desenvolvimento de Sistemas', detail: 'Universidade Estácio de Sá · cursando · conclusão prevista em 2026' },
    { title: 'Idiomas', detail: 'Inglês intermediário · espanhol intermediário' },
  ],

  certifications: [
    { name: 'Multicloud Network Associate (MNA)', issuer: 'Aviatrix', year: '2025' },
    { name: 'Certified Professional Operational Partner (CPOP)', issuer: 'Axur', year: '2025' },
  ],
};

export const navItems = [
  { label: 'Início', id: 'inicio', index: '01' },
  { label: 'Sobre', id: 'sobre', index: '02' },
  { label: 'Trajetória', id: 'experiencia', index: '03' },
  { label: 'Competências', id: 'competencias', index: '04' },
  { label: 'Projetos', id: 'projetos', index: '05' },
  { label: 'Caso', id: 'caso', index: '06' },
  { label: 'Currículo', id: 'curriculo', index: '07' },
  { label: 'Contato', id: 'contato', index: '08' },
];
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- portfolioData`
Expected: PASS, 8 testes.

- [ ] **Step 5: Commit**

```bash
git add src/data/portfolioData.js src/data/__tests__/portfolioData.test.js
git commit -m "feat: reestrutura portfolioData com conteudo factual revisado"
```

---

### Task 5: Header

**Files:**
- Rewrite: `src/components/Header.jsx`
- Test: `src/components/__tests__/Header.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
import { render, screen } from '@testing-library/react';
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
```

Acrescentar `within` ao import: `import { render, screen, within } from '@testing-library/react';`

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- Header`
Expected: FAIL, não encontra a navegação "Seções".

- [ ] **Step 3: Implementar**

```jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { navItems, portfolioData } from '../data/portfolioData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { shortName, tag, resumePath } = portfolioData.person;

  return (
    <header className="topbar">
      <div className="topbar-in">
        <Link to="/" className="mark">
          <span className="glyph"><Icon name="shield" /></span>
          <span>
            <span className="nm">{shortName}</span>
            <span className="rl">{tag}</span>
          </span>
        </Link>

        <nav className="tabs" aria-label="Seções">
          {navItems.map((item) => (
            <a key={item.id} href={`/#${item.id}`}>
              <i>{item.index}</i>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="top-cta" href={resumePath} download>
          <Icon name="download" /> Currículo
        </a>

        <button
          type="button"
          className="burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {open && (
        <nav className="drawer open" aria-label="Menu">
          {navItems.map((item) => (
            <a key={item.id} href={`/#${item.id}`} onClick={() => setOpen(false)}>
              <i>{item.index}</i>
              {item.label}
            </a>
          ))}
          <div className="dfoot">
            <a className="btn btn-fill" href={resumePath} download>
              <Icon name="download" /> Currículo
            </a>
            <a className="btn btn-ghost" href={portfolioData.person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" brand />
            </a>
            <a className="btn btn-ghost" href={portfolioData.person.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" brand />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- Header`
Expected: PASS, 4 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.jsx src/components/__tests__/Header.test.jsx
git commit -m "feat: navegacao no topo com abas numeradas e gaveta mobile"
```

---

### Task 6: Hero

**Files:**
- Create: `src/lib/contact.js`
- Rewrite: `src/components/Hero.jsx`
- Test: `src/lib/__tests__/contact.test.js`
- Test: `src/components/__tests__/Hero.test.jsx`

- [ ] **Step 0: Criar o helper de `mailto:` com teste**

`src/lib/__tests__/contact.test.js`:

```js
import { mailtoHref } from '../contact';

describe('mailtoHref', () => {
  it('monta o endereço com assunto codificado', () => {
    expect(mailtoHref('a@b.com', 'Fulano')).toBe(
      'mailto:a@b.com?subject=Contato%20profissional%20%E2%80%94%20Fulano',
    );
  });
});
```

`src/lib/contact.js`:

```js
export const mailtoHref = (email, name) =>
  `mailto:${email}?subject=${encodeURIComponent(`Contato profissional — ${name}`)}`;
```

Run: `npm test -- contact`
Expected: PASS, 1 teste.

- [ ] **Step 1: Escrever o teste**

```jsx
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { portfolioData } from '../../data/portfolioData';

describe('Hero', () => {
  beforeEach(() => render(<Hero />));

  it('usa o nome completo como título da página', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Patrick Santos',
    );
  });

  it('mostra cargo, especialidades, local e disponibilidade', () => {
    expect(screen.getByText('Analista de Segurança da Informação')).toBeInTheDocument();
    expect(screen.getByText(portfolioData.person.specialties)).toBeInTheDocument();
    expect(screen.getByText('Rio de Janeiro, RJ')).toBeInTheDocument();
    expect(screen.getByText(/Disponibilidade imediata/)).toBeInTheDocument();
  });

  it('oferece os quatro caminhos de contato', () => {
    expect(screen.getByRole('link', { name: /Contato/ })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:ptkamp1@gmail.com'),
    );
    expect(screen.getByRole('link', { name: /Currículo em PDF/ })).toHaveAttribute('download');
    expect(screen.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute('href', portfolioData.person.linkedin);
    expect(screen.getByRole('link', { name: /GitHub/ })).toHaveAttribute('href', portfolioData.person.github);
  });

  it('mostra os quatro indicadores factuais', () => {
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('plataformas de SIEM e monitoramento')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- Hero`
Expected: FAIL, o `h1` ainda tem o efeito de máquina de escrever do componente antigo.

- [ ] **Step 3: Implementar**

```jsx
import Icon from './Icon';
import { mailtoHref } from '../lib/contact';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const ref = useScrollReveal();
  const { person, highlights } = portfolioData;

  return (
    <section id="inicio" className="wrap" aria-labelledby="inicio-titulo">
      <div className="hero reveal" ref={ref}>
        <div>
          <p className="avail"><span className="pulse" /> Disponibilidade imediata</p>
          <h1 className="h-lead" id="inicio-titulo">{person.fullName}</h1>
          <p className="role">{person.role}</p>
          <p className="spec">{person.specialties}</p>
          <p className="loc"><Icon name="pin" /> {person.city}</p>

          <div className="btns">
            <a className="btn btn-fill" href={mailtoHref(person.email, person.shortName)}>
              <Icon name="mail" /> Contato
            </a>
            <a className="btn btn-ghost" href={person.resumePath} download>
              <Icon name="download" /> Currículo em PDF
            </a>
            <a className="btn btn-ghost" href={person.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" brand /> LinkedIn
            </a>
            <a className="btn btn-ghost" href={person.github} target="_blank" rel="noreferrer">
              <Icon name="github" brand /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {highlights.map((h) => (
          <div key={h.label}>
            <p className="v">{h.value}</p>
            <p className="l">{h.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- Hero`
Expected: PASS, 4 testes.

- [ ] **Step 5: Commit**

```bash
git add src/lib/ src/components/Hero.jsx src/components/__tests__/Hero.test.jsx
git commit -m "feat: hero factual com nome, cargo, especialidades e disponibilidade"
```

---

### Task 7: About

**Files:**
- Rewrite: `src/components/About.jsx`
- Test: `src/components/__tests__/About.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
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
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- About`
Expected: FAIL, `portfolioData.about` não é lido pelo componente atual.

- [ ] **Step 3: Implementar**

```jsx
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();
  const { about, facts, responsibilities } = portfolioData;

  return (
    <section id="sobre" className="wrap">
      <div className="sec reveal" ref={ref}>
        <p className="eyebrow"><s /> 02 — Sobre</p>

        <div className="about">
          <div>
            {about.map((paragraph, i) => (
              <p key={paragraph} className={i === 0 ? 'first' : undefined}>{paragraph}</p>
            ))}
          </div>
          <div className="facts">
            {facts.map((f) => (
              <div key={f.label} className="fact">
                <b>{f.label}</b>
                <span>{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pillars">
          {responsibilities.map((r) => (
            <div key={r.index} className="pillar">
              <div className="n">{r.index}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- About`
Expected: PASS, 4 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/About.jsx src/components/__tests__/About.test.jsx
git commit -m "feat: secao sobre com resumo factual e areas de responsabilidade"
```

---

### Task 8: Experiência profissional

**Files:**
- Rewrite: `src/components/Timeline.jsx`
- Test: `src/components/__tests__/Timeline.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
import { render, screen } from '@testing-library/react';
import Timeline from '../Timeline';
import { portfolioData } from '../../data/portfolioData';

describe('Timeline', () => {
  beforeEach(() => render(<Timeline />));

  it('lista as três experiências', () => {
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(3);
  });

  it('mostra empresa, cargo, período e área', () => {
    expect(screen.getByText('Oceânica')).toBeInTheDocument();
    expect(screen.getByText('out 2025 — abr 2026')).toBeInTheDocument();
    expect(screen.getByText('Cibersegurança e governança')).toBeInTheDocument();
  });

  it('mostra as ferramentas de cada experiência', () => {
    const total = portfolioData.experiences.reduce((n, e) => n + e.tools.length, 0);
    expect(document.querySelectorAll('.jtools .tag')).toHaveLength(total);
  });

  it('destaca a experiência mais recente', () => {
    expect(document.querySelectorAll('.job.now')).toHaveLength(1);
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- Timeline`
Expected: FAIL, não encontra "Cibersegurança e governança".

- [ ] **Step 3: Implementar**

```jsx
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Timeline() {
  const ref = useScrollReveal();

  return (
    <section id="experiencia" className="wrap">
      <div className="sec reveal" ref={ref}>
        <p className="eyebrow"><s /> 03 — Experiência profissional</p>

        <div className="tl">
          {portfolioData.experiences.map((exp, i) => (
            <article key={exp.company} className={`job${i === 0 ? ' now' : ''}`}>
              <div className="job-top">
                <div>
                  <h4>{exp.role}</h4>
                  <div className="co">{exp.company}</div>
                </div>
                <div className="per">{exp.period}</div>
              </div>
              <div className="jarea">{exp.area}</div>
              <ul>
                {exp.activities.map((a) => <li key={a}>{a}</li>)}
              </ul>
              <div className="jtools">
                <span className="jt">Ferramentas</span>
                <div className="tags">
                  {exp.tools.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- Timeline`
Expected: PASS, 4 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/Timeline.jsx src/components/__tests__/Timeline.test.jsx
git commit -m "feat: experiencia profissional com area e ferramentas por cargo"
```

---

### Task 9: Competências com filtro

**Files:**
- Rewrite: `src/components/Skills.jsx`
- Test: `src/components/__tests__/Skills.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
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
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- Skills`
Expected: FAIL, não existem botões de filtro.

- [ ] **Step 3: Implementar**

```jsx
import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const ref = useScrollReveal();
  const [active, setActive] = useState('todas');
  const { skillGroups, skillFilters } = portfolioData;

  const visible =
    active === 'todas' ? skillGroups : skillGroups.filter((g) => g.category === active);

  return (
    <section id="competencias" className="wrap" aria-labelledby="competencias-titulo">
      <div className="sec reveal" ref={ref}>
        <h2 className="eyebrow" id="competencias-titulo"><s /> 04 — Competências técnicas</h2>

        <div className="filters">
          {skillFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`chip${active === f.id ? ' on' : ''}`}
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visible.map((group) => (
          <div key={group.label} className="skillrow">
            <div>
              <h4>{group.label}</h4>
              <div className="lvl">{group.where}</div>
            </div>
            <div className="tags">
              {group.skills.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- Skills`
Expected: PASS, 5 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/Skills.jsx src/components/__tests__/Skills.test.jsx
git commit -m "feat: competencias por categoria com filtro e origem da experiencia"
```

---

### Task 10: Moldura de navegador

**Files:**
- Create: `src/components/BrowserFrame.jsx`
- Test: `src/components/__tests__/BrowserFrame.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
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
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- BrowserFrame`
Expected: FAIL, "Failed to resolve import ../BrowserFrame".

- [ ] **Step 3: Implementar**

```jsx
import Icon from './Icon';

// Enquanto não há captura real, desenha uma maquete abstrata da interface.
function Placeholder() {
  return (
    <div className="mockui">
      <div className="bar a" />
      <div className="row">
        <div className="box hi" />
        <div className="box" />
        <div className="box" />
      </div>
      <div className="bar b" />
      <div className="wide" />
      <div className="bar c" />
    </div>
  );
}

export default function BrowserFrame({ url, title, screenshot = null, ratio }) {
  return (
    <div className="browser">
      <div className="bb-bar">
        <div className="dots"><i /><i /><i /></div>
        <div className="url"><Icon name="lock" /> {url}</div>
      </div>
      <div className="bb-shot" style={ratio ? { aspectRatio: ratio } : undefined}>
        {screenshot ? (
          <img
            src={screenshot}
            alt={`Captura de tela do ${title}`}
            loading="lazy"
            className="shot-img"
          />
        ) : (
          <Placeholder />
        )}
      </div>
    </div>
  );
}
```

Acrescentar ao `@layer components` do `src/index.css`:

```css
.shot-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- BrowserFrame`
Expected: PASS, 3 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/BrowserFrame.jsx src/components/__tests__/BrowserFrame.test.jsx src/index.css
git commit -m "feat: moldura de navegador com captura ou maquete de fallback"
```

---

### Task 11: Galeria de projetos

**Files:**
- Create: `src/components/ProjectCard.jsx`
- Rewrite: `src/components/Projects.jsx`
- Test: `src/components/__tests__/Projects.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../Projects';
import { portfolioData } from '../../data/portfolioData';

const renderProjects = () =>
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>,
  );

describe('Projects', () => {
  it('mostra todos os projetos', () => {
    renderProjects();
    portfolioData.projects.forEach((p) =>
      expect(screen.getByRole('heading', { name: new RegExp(p.title) })).toBeInTheDocument(),
    );
  });

  it('separa o destaque da grade', () => {
    const { container } = renderProjects();
    expect(container.querySelectorAll('.featured')).toHaveLength(1);
    expect(container.querySelectorAll('.grid2 .pcard-info')).toHaveLength(
      portfolioData.projects.filter((p) => !p.featured).length,
    );
  });

  it('descreve cada projeto com objetivo, funcionalidades e participação', () => {
    renderProjects();
    expect(screen.getAllByText('Objetivo:').length).toBe(portfolioData.projects.length);
    expect(screen.getAllByText('Funcionalidades:').length).toBe(portfolioData.projects.length);
    expect(screen.getAllByText('Participação:').length).toBe(portfolioData.projects.length);
  });

  it('leva para a página do projeto com um único link nomeado por projeto', () => {
    renderProjects();
    // A prévia é aria-hidden, então só o link do card conta como nome acessível.
    const links = screen.getAllByRole('link', { name: /Detalhes do IOC Enricher/ });
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', '/projetos/ioc-enricher');
  });

  it('renderiza o projeto sem endereço nem repositório sem links quebrados', () => {
    renderProjects();
    const semLinks = portfolioData.projects.find((p) => !p.liveUrl && !p.githubUrl);
    const bloco = screen
      .getByRole('heading', { name: new RegExp(semLinks.title) })
      .closest('.pcard-info');
    expect(within(bloco).queryByText('Repositório')).not.toBeInTheDocument();
    expect(within(bloco).queryByText('Acessar site')).not.toBeInTheDocument();
    expect(within(bloco).queryByText('Problema tratado:')).not.toBeInTheDocument();
    // O link interno de detalhes continua presente.
    expect(within(bloco).getByRole('link', { name: new RegExp(`Detalhes do ${semLinks.title}`) }))
      .toHaveAttribute('href', `/projetos/${semLinks.slug}`);
  });

  it('aponta os links externos para as URLs reais', () => {
    renderProjects();
    const live = screen.getByRole('link', { name: /iocenricher\.vercel\.app/ });
    expect(live).toHaveAttribute('href', 'https://iocenricher.vercel.app');
    expect(live).toHaveAttribute('rel', 'noreferrer');
  });

  it('omite o link de repositório quando não existe', () => {
    renderProjects();
    const semRepo = portfolioData.projects.find((p) => !p.githubUrl);
    const bloco = screen.getByRole('heading', { name: new RegExp(semRepo.title) }).closest('.pcard-info');
    expect(within(bloco).queryByText('Repositório')).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- Projects`
Expected: FAIL, o componente atual é um carrossel e não tem `.featured`.

- [ ] **Step 3: Implementar `ProjectCard.jsx`**

```jsx
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ProjectCard({ project }) {
  const { title, category, state, stateKind, objective, problem, features, role, tags,
          displayUrl, liveUrl, githubUrl, slug } = project;

  return (
    <div className="pcard-info">
      <div className="cat">{category}</div>
      <h4>
        {title}
        <span className={`status${stateKind === 'live' ? '' : ' int'}`}><i />{state}</span>
      </h4>

      <p><b>Objetivo:</b> {objective}</p>
      {problem && <p><b>Problema tratado:</b> {problem}</p>}
      <p><b>Funcionalidades:</b> {features}</p>
      <p><b>Participação:</b> {role}</p>

      <div className="tags">
        {tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="plinks">
        {liveUrl && (
          <a className="plink" href={liveUrl} target="_blank" rel="noreferrer">
            <Icon name="external" /> {displayUrl}
          </a>
        )}
        {githubUrl && (
          <a className="plink" href={githubUrl} target="_blank" rel="noreferrer">
            <Icon name="github" brand /> Repositório
          </a>
        )}
        <Link className="plink" to={`/projetos/${slug}`} aria-label={`Detalhes do ${title}`}>
          <Icon name="arrow" /> Detalhes
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Implementar `Projects.jsx`**

```jsx
import { Link } from 'react-router-dom';
import BrowserFrame from './BrowserFrame';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal();
  const { projects } = portfolioData;
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="wrap" aria-labelledby="projetos-titulo">
      <div className="sec reveal" ref={ref}>
        <h2 className="eyebrow" id="projetos-titulo"><s /> 05 — Projetos</h2>

        {featured && (
          <div className="featured">
            {/* A prévia leva ao mesmo destino que o "Detalhes" do card ao lado.
                Escondo-a da árvore de acessibilidade para o leitor de tela não
                ouvir dois links idênticos por projeto; o card mantém o link nomeado. */}
            <Link className="pcard" to={`/projetos/${featured.slug}`} tabIndex={-1} aria-hidden="true">
              <BrowserFrame url={featured.displayUrl} title={featured.title} screenshot={featured.screenshot} />
            </Link>
            <ProjectCard project={featured} />
          </div>
        )}

        <div className="grid2">
          {rest.map((p) => (
            <div key={p.slug}>
              <Link className="pcard" to={`/projetos/${p.slug}`} tabIndex={-1} aria-hidden="true">
                <BrowserFrame url={p.displayUrl} title={p.title} screenshot={p.screenshot} />
              </Link>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Rodar e ver passar**

Run: `npm test -- Projects`
Expected: PASS, 6 testes.

- [ ] **Step 6: Commit**

```bash
git add src/components/Projects.jsx src/components/ProjectCard.jsx src/components/__tests__/Projects.test.jsx
git commit -m "feat: galeria de projetos com destaque, grade e moldura de navegador"
```

---

### Task 12: Estudo de caso

**Files:**
- Rewrite: `src/components/CaseStudy.jsx`
- Test: `src/components/__tests__/CaseStudy.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
import { render, screen } from '@testing-library/react';
import CaseStudy from '../CaseStudy';

describe('CaseStudy', () => {
  beforeEach(() => render(<CaseStudy />));

  it('mostra as seis etapas do incidente, numeradas uma única vez', () => {
    const celulas = document.querySelectorAll('.case-cell');
    expect(celulas).toHaveLength(6);
    // A numeração vem do índice no componente; o rótulo nos dados é só o nome
    // da etapa, sem número — senão a célula sairia "01 · 01 · detecção".
    // Match exato (.textContent === ...), porque toHaveTextContent faz substring
    // e "01 · 01 · detecção" contém "01 · detecção", deixando o bug passar.
    expect(celulas[0].querySelector('.n').textContent).toBe('01 · detecção');
    expect(celulas[5].querySelector('.n').textContent).toBe('06 · resultado');
  });

  it('lista as ferramentas envolvidas', () => {
    expect(screen.getByText('Microsoft Defender')).toBeInTheDocument();
    expect(screen.getByText('GPO')).toBeInTheDocument();
  });

  it('não termina em lição genérica', () => {
    expect(document.body.textContent).not.toContain('lição');
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- CaseStudy`
Expected: FAIL, o componente atual renderiza blocos nomeados, não seis células.

- [ ] **Step 3: Implementar**

```jsx
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CaseStudy() {
  const ref = useScrollReveal();
  const { title, summary, steps, tools } = portfolioData.caseStudy;

  return (
    <section id="caso" className="wrap" aria-labelledby="caso-titulo">
      <div className="sec reveal" ref={ref}>
        <p className="eyebrow"><s /> 06 — Estudo de caso</p>
        <h2 className="h-sec" id="caso-titulo">{title}</h2>

        <div className="case">
          <p className="sub">{summary}</p>
          <div className="case-grid">
            {steps.map((step, i) => (
              <div key={step.label} className="case-cell">
                <div className="n">{String(i + 1).padStart(2, '0')} · {step.label}</div>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="jtools">
            <span className="jt">Ferramentas</span>
            <div className="tags">
              {tools.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- CaseStudy`
Expected: PASS, 3 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/CaseStudy.jsx src/components/__tests__/CaseStudy.test.jsx
git commit -m "feat: estudo de caso em seis etapas com ferramentas"
```

---

### Task 13: Currículo, formação e certificações

**Files:**
- Create: `src/components/Resume.jsx`
- Test: `src/components/__tests__/Resume.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
import { render, screen } from '@testing-library/react';
import Resume from '../Resume';
import { portfolioData } from '../../data/portfolioData';

describe('Resume', () => {
  beforeEach(() => render(<Resume />));

  it('mostra o resumo profissional do currículo', () => {
    expect(screen.getByText(portfolioData.resume.summary)).toBeInTheDocument();
  });

  it('oferece o download do PDF', () => {
    const link = screen.getByRole('link', { name: /Baixar PDF/ });
    expect(link).toHaveAttribute('href', portfolioData.person.resumePath);
    expect(link).toHaveAttribute('download');
  });

  it('mostra os metadados sem placeholders', () => {
    expect(screen.getByText('Segurança da Informação')).toBeInTheDocument();
    expect(document.body.textContent).not.toContain('a confirmar');
  });

  it('lista formação e certificações com o ano', () => {
    expect(screen.getByText(/Universidade Estácio de Sá/)).toBeInTheDocument();
    expect(screen.getByText('Aviatrix · 2025')).toBeInTheDocument();
    expect(screen.getByText('Axur · 2025')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- Resume`
Expected: FAIL, "Failed to resolve import ../Resume".

- [ ] **Step 3: Implementar**

```jsx
import Icon from './Icon';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Resume() {
  const ref = useScrollReveal();
  const { resume, person, education, certifications } = portfolioData;

  return (
    <section id="curriculo" className="wrap" aria-labelledby="curriculo-titulo">
      <div className="sec reveal" ref={ref}>
        <p className="eyebrow"><s /> 07 — Currículo</p>
        <h2 className="h-sec" id="curriculo-titulo">Currículo</h2>

        <div className="cv">
          <div>
            <div className="cv-band"><p>{resume.summary}</p></div>
            <div className="btns">
              <a className="btn btn-fill" href={person.resumePath} download>
                <Icon name="download" /> Baixar PDF
              </a>
              <a className="btn btn-ghost" href={person.resumePath} target="_blank" rel="noreferrer">
                <Icon name="doc" /> Abrir em nova aba
              </a>
            </div>
            <p className="small">
              O conteúdo desta página e o PDF são gerados a partir da mesma fonte de dados.
            </p>
          </div>

          <div className="cv-meta">
            {resume.meta.map((m) => (
              <div key={m.label}>
                <div className="k">{m.label}</div>
                <div className="v">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="two">
          <div>
            <h3>Formação acadêmica</h3>
            {education.map((e) => (
              <div key={e.title} className="item">
                <h4>{e.title}</h4>
                <p>{e.detail}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>Certificações</h3>
            {certifications.map((c) => (
              <div key={c.name} className="item">
                <h4>{c.name}</h4>
                <p>{c.issuer} · {c.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

Acrescentar ao `@layer components` do `src/index.css`:

```css
.two h3 { font-size: 20px; font-weight: 600; letter-spacing: -.02em; margin: 0 0 6px; }
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- Resume`
Expected: PASS, 4 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/Resume.jsx src/components/__tests__/Resume.test.jsx src/index.css
git commit -m "feat: secao de curriculo com download, formacao e certificacoes"
```

---

### Task 14: Contato

**Files:**
- Rewrite: `src/components/Contact.jsx`
- Test: `src/components/__tests__/Contact.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
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
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- Contact`
Expected: FAIL, o componente atual ainda tem o bloco de WhatsApp.

- [ ] **Step 3: Implementar**

O botão de copiar existe porque `mailto:` não faz nada visível em quem usa webmail sem cliente configurado.

```jsx
import { useState } from 'react';
import Icon from './Icon';
import { mailtoHref } from '../lib/contact';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();
  const [copied, setCopied] = useState(false);
  const { person } = portfolioData;

  const copy = async () => {
    await navigator.clipboard.writeText(person.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="wrap" aria-labelledby="contato-titulo">
      <div className="sec contact reveal" ref={ref}>
        <p className="eyebrow"><s /> 08 — Contato</p>
        <h2 id="contato-titulo">Contato profissional</h2>

        <div className="clinks">
          <a className="clink" href={person.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" brand className="clink-brand-in" />
            <span className="lb">LinkedIn<em>/in/ptkthg</em></span>
          </a>
          <a className="clink" href={person.github} target="_blank" rel="noreferrer">
            <Icon name="github" brand />
            <span className="lb">GitHub<em>/ptkthg</em></span>
          </a>
          <a className="clink" href={mailtoHref(person.email, person.shortName)}>
            <Icon name="mail" />
            <span className="lb">E-mail<em>{person.email}</em></span>
          </a>
        </div>

        <div className="btns">
          <a className="btn btn-fill" href={mailtoHref(person.email, person.shortName)}>
            <Icon name="mail" /> Enviar mensagem
          </a>
          <button type="button" className="btn btn-ghost" onClick={copy} aria-label="Copiar e-mail">
            <Icon name="doc" /> {copied ? 'E-mail copiado' : 'Copiar e-mail'}
          </button>
          <a className="btn btn-ghost" href={person.resumePath} download>
            <Icon name="download" /> Currículo em PDF
          </a>
        </div>
      </div>
    </section>
  );
}
```

Acrescentar ao `@layer components` do `src/index.css`:

```css
.clink .ic-brand, .clink .ic { width: 19px; height: 19px; }
.clink-brand-in { color: #0A66C2; }
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- Contact`
Expected: PASS, 5 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.jsx src/components/__tests__/Contact.test.jsx src/index.css
git commit -m "feat: contato profissional com mailto e copia de e-mail"
```

---

### Task 15: Rodapé

**Files:**
- Rewrite: `src/components/Footer.jsx`
- Test: `src/components/__tests__/Footer.test.jsx`

- [ ] **Step 1: Escrever o teste**

```jsx
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
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- Footer`
Expected: FAIL, o rodapé atual tem uma linha só.

- [ ] **Step 3: Implementar**

```jsx
import Icon from './Icon';
import { navItems, portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { person } = portfolioData;
  const atalhos = navItems.filter((n) => ['sobre', 'experiencia', 'competencias', 'projetos'].includes(n.id));

  return (
    <footer className="foot">
      <div className="foot-in">
        <div>
          <div className="mark">
            <span className="glyph"><Icon name="shield" /></span>
            <span>
              <span className="nm">{person.shortName}</span>
              <span className="rl">{person.tag} · RJ</span>
            </span>
          </div>
          <p className="small">
            Analista de Segurança da Informação · Blue Team, SOC, IAM/PAM e gestão de vulnerabilidades.
          </p>
        </div>

        <div>
          <h5>navegar</h5>
          {atalhos.map((n) => <a key={n.id} href={`/#${n.id}`}>{n.label}</a>)}
        </div>

        <div>
          <h5>encontrar</h5>
          <a href={person.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" brand /> LinkedIn</a>
          <a href={person.github} target="_blank" rel="noreferrer"><Icon name="github" brand /> GitHub</a>
          <a href={`mailto:${person.email}`}><Icon name="mail" /> E-mail</a>
          <a href={person.resumePath} download><Icon name="download" /> Currículo PDF</a>
        </div>
      </div>

      <div className="foot-bar">
        <div>
          <span>{person.fullName} · {person.city}</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `npm test -- Footer`
Expected: PASS, 3 testes.

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer.jsx src/components/__tests__/Footer.test.jsx
git commit -m "feat: rodape em tres colunas com navegacao e links externos"
```

---

### Task 16: Rotas e página de projeto

**Files:**
- Create: `src/pages/HomePage.jsx`
- Create: `src/pages/ProjectPage.jsx`
- Rewrite: `src/App.jsx`
- Modify: `src/main.jsx`
- Create: `vercel.json`
- Test: `src/pages/__tests__/ProjectPage.test.jsx`

- [ ] **Step 1: Instalar o roteador**

```bash
npm install react-router-dom@^6.28.0
```

- [ ] **Step 2: Escrever o teste**

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectPage from '../ProjectPage';
import { portfolioData } from '../../data/portfolioData';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projetos/:slug" element={<ProjectPage />} />
        <Route path="/" element={<p>home</p>} />
      </Routes>
    </MemoryRouter>,
  );

describe('ProjectPage', () => {
  it('mostra o projeto correspondente ao slug', () => {
    renderAt('/projetos/ioc-enricher');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('IOC Enricher');
  });

  it('mostra as cinco seções objetivas do detalhe', () => {
    renderAt('/projetos/ioc-enricher');
    ['Objetivo', 'Problema tratado', 'Funcionalidades', 'Decisões técnicas', 'Estado atual'].forEach(
      (t) => expect(screen.getByRole('heading', { level: 3, name: t })).toBeInTheDocument(),
    );
  });

  it('mostra os metadados do projeto', () => {
    renderAt('/projetos/ioc-enricher');
    expect(screen.getByText('participação')).toBeInTheDocument();
    expect(screen.getByText('Em produção')).toBeInTheDocument();
  });

  it('oferece volta para a listagem', () => {
    renderAt('/projetos/ioc-enricher');
    expect(screen.getByRole('link', { name: /Projetos/ })).toHaveAttribute('href', '/#projetos');
  });

  it('redireciona slug inexistente para a home', () => {
    renderAt('/projetos/nao-existe');
    expect(screen.getByText('home')).toBeInTheDocument();
  });

  it('omite a célula de período quando o dado não foi confirmado', () => {
    renderAt('/projetos/statecraft-cyber');
    expect(screen.queryByText('período')).not.toBeInTheDocument();
  });

  it('não tem slug duplicado, que colidiria de rota', () => {
    const slugs = portfolioData.projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
```

- [ ] **Step 3: Rodar e ver falhar**

Run: `npm test -- ProjectPage`
Expected: FAIL, "Failed to resolve import ../ProjectPage".

- [ ] **Step 4: Implementar `ProjectPage.jsx`**

```jsx
import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import BrowserFrame from '../components/BrowserFrame';
import Icon from '../components/Icon';
import { portfolioData } from '../data/portfolioData';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = portfolioData.projects.find((p) => p.slug === slug);
  const proximo = project
    ? portfolioData.projects[
        (portfolioData.projects.indexOf(project) + 1) % portfolioData.projects.length
      ]
    : null;

  useEffect(() => {
    if (project) document.title = `${project.title} | ${portfolioData.person.shortName}`;
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="wrap pp">
      <a className="back" href="/#projetos"><Icon name="arrow-l" /> Projetos</a>

      <div className="cat">{project.category}</div>
      <h1 className="pp-title">{project.title}</h1>
      <p className="sub">{project.detail.summary}</p>

      <div className="btns">
        {project.liveUrl && (
          <a className="btn btn-fill" href={project.liveUrl} target="_blank" rel="noreferrer">
            <Icon name="external" /> Abrir aplicação
          </a>
        )}
        {project.githubUrl && (
          <a className="btn btn-ghost" href={project.githubUrl} target="_blank" rel="noreferrer">
            <Icon name="github" brand /> Repositório
          </a>
        )}
      </div>

      <div className="pp-meta">
        <div><div className="k">participação</div><div className="v">{project.role}</div></div>
        {project.period && (
          <div><div className="k">período</div><div className="v">{project.period}</div></div>
        )}
        <div><div className="k">tecnologias</div><div className="v">{project.tags.slice(0, 3).join(' · ')}</div></div>
        <div><div className="k">estado atual</div><div className="v v-state">{project.state}</div></div>
      </div>

      <BrowserFrame
        url={project.displayUrl}
        title={project.title}
        screenshot={project.screenshot}
        ratio="16 / 8"
      />

      <div className="pp-body">
        <div>
          {project.detail.sections.map((s) => (
            <section key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </section>
          ))}
        </div>

        <aside className="side-box">
          <div className="k">nesta página</div>
          <div className="toc">
            {project.detail.sections.map((s, i) => (
              <span key={s.title} className={i === 0 ? 'on' : undefined}>{s.title}</span>
            ))}
          </div>
          <div className="k">tecnologias</div>
          <div className="tags">
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </aside>
      </div>

      {proximo && proximo.slug !== project.slug && (
        <div className="pp-next">
          <span className="k">próximo</span>
          <Link to={`/projetos/${proximo.slug}`}>{proximo.title} <Icon name="arrow" /></Link>
        </div>
      )}
    </div>
  );
}
```

Acrescentar ao `@layer components` do `src/index.css`:

```css
.pp { padding-top: 52px; }
.pp .cat { font-family: var(--mono); font-size: 9.5px; letter-spacing: .16em;
  text-transform: uppercase; color: var(--faint); margin-top: 26px; }
.pp-meta .v-state { color: var(--neon); }
.pp-next { border-top: 1px solid var(--line-soft); margin-top: 60px;
  padding: 22px 0 56px; display: flex; justify-content: space-between; gap: 14px; font-size: 13.5px; }
.pp-next .k { font-family: var(--mono); font-size: 10px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--faint); }
.pp-next a { display: inline-flex; align-items: center; gap: 8px; color: var(--text); text-decoration: none; }
.pp-next a:hover { color: var(--neon); }
```

- [ ] **Step 5: Implementar `HomePage.jsx`**

```jsx
import About from '../components/About';
import CaseStudy from '../components/CaseStudy';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <CaseStudy />
      <Resume />
      <Contact />
    </>
  );
}
```

- [ ] **Step 6: Reescrever `App.jsx`**

```jsx
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { IconSprite } from './components/Icon';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <IconSprite />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 7: Envolver a aplicação no roteador em `src/main.jsx`**

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

- [ ] **Step 8: Criar `vercel.json`**

Sem isso, abrir `/projetos/ioc-enricher` direto no navegador devolve 404 na Vercel.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

- [ ] **Step 9: Rodar e ver passar**

Run: `npm test -- ProjectPage`
Expected: PASS, 5 testes.

- [ ] **Step 10: Commit**

```bash
git add package.json package-lock.json vercel.json src/App.jsx src/main.jsx src/pages/ src/index.css
git commit -m "feat: rotas e pagina individual de projeto"
```

---

### Task 17: Limpeza e metadados

**Files:**
- Delete: `src/components/Areas.jsx`, `src/components/Differentials.jsx`, `src/components/Certifications.jsx`, `src/components/Methodology.jsx`, `src/components/Arsenal.jsx`
- Modify: `index.html`
- Test: `src/test/regressao.test.jsx`

- [ ] **Step 1: Escrever o teste de regressão**

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

const renderApp = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

describe('página inicial', () => {
  it('renderiza as oito seções na ordem definida', () => {
    const { container } = renderApp();
    const ids = [...container.querySelectorAll('main section[id]')].map((s) => s.id);
    expect(ids).toEqual([
      'inicio', 'sobre', 'experiencia', 'competencias',
      'projetos', 'caso', 'curriculo', 'contato',
    ]);
  });

  it('não contém glifos de símbolo remanescentes', () => {
    renderApp();
    expect(document.body.textContent).not.toMatch(/[↗↓☰✕→←]/u);
  });

  it('não menciona conteúdo removido nesta entrega', () => {
    renderApp();
    const texto = document.body.textContent.toLowerCase();
    ['whatsapp', 'hookshade', 'purple team', 'kali'].forEach((termo) =>
      expect(texto).not.toContain(termo),
    );
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- regressao`
Expected: FAIL, a ordem das seções não bate porque `App.jsx` ainda importa componentes antigos, ou o teste acusa import quebrado.

- [ ] **Step 3: Apagar os componentes órfãos**

```bash
git rm src/components/Areas.jsx src/components/Differentials.jsx src/components/Certifications.jsx src/components/Methodology.jsx src/components/Arsenal.jsx
```

- [ ] **Step 4: Atualizar os metadados do `index.html`**

Substituir o bloco de `<title>` e metatags por:

```html
    <title>Patrick Santos | Analista de Segurança da Informação</title>
    <meta
      name="description"
      content="Analista de Segurança da Informação no Rio de Janeiro. Blue Team, SOC, SIEM, IAM/PAM, resposta a incidentes e gestão de vulnerabilidades. Splunk, Microsoft Defender XDR, Entra ID, BeyondTrust e Wazuh. Currículo, experiência profissional e projetos."
    />

    <meta property="og:title" content="Patrick Santos | Analista de Segurança da Informação" />
    <meta
      property="og:description"
      content="Blue Team, SOC, SIEM, IAM/PAM e gestão de vulnerabilidades. Experiência profissional, competências técnicas, projetos e currículo."
    />
    <meta property="og:type" content="profile" />
    <meta property="og:url" content="https://portfolioptk.vercel.app" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Patrick Santos | Analista de Segurança da Informação" />
    <meta name="twitter:description" content="Blue Team, SOC, SIEM, IAM/PAM e gestão de vulnerabilidades." />
```

As metatags `og:image` e `twitter:image` apontam para `patrickseg.png`, que era a foto do hero. Como a foto saiu do layout, remover as duas linhas até existir uma imagem de compartilhamento nova.

- [ ] **Step 5: Rodar a suíte inteira**

Run: `npm test`
Expected: PASS em todos os arquivos de teste.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: remove componentes orfaos e atualiza metadados"
```

---

### Task 18: Verificação final

**Files:** nenhum arquivo novo.

- [ ] **Step 1: Build de produção**

Run: `npm run build`
Expected: build concluído sem erro nem aviso.

- [ ] **Step 2: Servir o build e conferir as rotas**

```bash
npm run preview
```

Abrir `http://localhost:4173/` e depois `http://localhost:4173/projetos/ioc-enricher` digitando a URL direto na barra de endereço. Ambas devem carregar.

- [ ] **Step 3: Conferir os quatro breakpoints**

No DevTools, com a barra de dispositivos, verificar em 1280, 900, 600 e 390 px:

- 900: pilares em duas colunas, respiro lateral menor.
- 600 e abaixo: abas somem, hamburguer aparece, gaveta abre e fecha, galeria em coluna única, botões com no mínimo 44px de altura.
- 390: nada transborda horizontalmente; a página não rola para os lados.

- [ ] **Step 4: Conferir movimento reduzido**

No DevTools, em Rendering, ativar "prefers-reduced-motion: reduce" e recarregar. As seções devem aparecer sem animação e o ponto de disponibilidade deve parar de pulsar.

- [ ] **Step 5: Commit final e push**

```bash
git add -A
git commit -m "chore: verificacao de build, rotas e responsividade" --allow-empty
git push -u origin feat/portfolio-tech-2026
```

---

## Pendências registradas

Estes itens ficam fora do plano por dependerem de decisão ou material externo:

1. **Capturas dos projetos.** `BrowserFrame` já aceita `screenshot`. Quando os PNGs existirem, salvar em `public/assets/projects/` e preencher o campo em `portfolioData.js`. Sem isso a galeria mostra a maquete abstrata.
2. **Imagem de compartilhamento.** As metatags `og:image` e `twitter:image` ficaram sem valor.
3. **PDF do currículo.** `public/assets/patrickcv0426.pdf` está desatualizado e o `PS07CV.pdf` tem o período da Oceânica errado (`10/2025 - 03/2025`) e um campo de contato vazio.
4. **Hookshade.** Fora desta entrega por decisão do usuário.
