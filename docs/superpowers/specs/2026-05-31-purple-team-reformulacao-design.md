# Reformulação do Portfólio — Direcionamento Purple Team

**Data:** 2026-05-31
**Projeto:** Portfólio pessoal Patrick Santos (React + Vite + Tailwind)

## Objetivo

Reposicionar o portfólio (hoje 100% Blue Team/SOC) para **Purple Team**, adicionando
conteúdo de pentest, domínios ofensivos e o arsenal de ferramentas do Kali Linux,
referenciando a prática de **Bug Bounty na HackerOne** — de forma **honesta**.

## Princípio de honestidade (guardrail)

- Experiência **profissional** permanece como Blue Team/SOC (verdade comprovável:
  Oceânica, Vortex, Rio Quality).
- O lado ofensivo (pentest, Kali, HackerOne) é apresentado **explicitamente como
  estudo + prática via bug bounty**, nunca como cargo/experiência profissional.
- **Proibido inventar**: nenhuma métrica de vulnerabilidades reportadas, badges,
  bounties ou casos resolvidos. Patrick declarou não ter esses números ainda.
- Narrativa-âncora: "penso como atacante para defender melhor" (Purple Team real).

## Decisões do usuário

- Posicionamento: **Blue Team + estudando ofensiva (honesto)**.
- Profundidade: **Arsenal + Metodologia + skills**.
- Reaproveitar componentes ocultos: **Areas.jsx** e **Methodology.jsx**.
- Skills ofensivas: **tags, sem barra de %** (defensivas mantêm %).
- Marca do topo: **`pt@security`**.
- HackerOne: **citado, sem link** de perfil.

## Stack / contexto técnico

- Conteúdo majoritariamente **hardcoded nos componentes**; `src/data/portfolioData.js`
  fornece `person`, `navItems`, `aboutText`, `experiences`, `differentials`,
  `certifications`, `areas`, `methodology`.
- Tema: terminal/neon — `terminal #0a0a0f`, `surface #111118`, `neon #00ff88`,
  `textprimary #e2e8f0`, fonte `JetBrains Mono`, bordas retas (sem arredondamento).
- `Areas.jsx` e `Methodology.jsx` existem mas **não são renderizados** e usam a paleta
  legada (`cyantech`/`white`/`rounded-xl`); serão **restilizados para o tema neon**.

## Mudanças por arquivo

### `src/data/portfolioData.js`
- `person.role` → posicionamento Purple Team honesto.
- `navItems` → adicionar `Áreas` (`areas`), `Metodologia` (`metodologia`),
  `Arsenal` (`arsenal`).
- `areas` → manter os 6 domínios defensivos e adicionar **Web AppSec / Bug Bounty**
  e **Pentest de Rede**, marcando-os como foco ofensivo (campo `side: 'offensive'`).
- `methodology` → substituir pelo fluxo de pentest:
  `Recon → Enumeração → Exploração → Pós-exploração → Relatório & Defesa`.
- `methodologyText` → enquadrar a metodologia ofensiva alimentando a defesa.
- Adicionar `frameworks`: `['OWASP Top 10','OWASP WSTG','PTES','MITRE ATT&CK','NIST SP 800-115']`.
- Adicionar `arsenal`: objeto categoria → lista de ferramentas Kali.
- Adicionar `offensiveSkills`: grupos de skills ofensivas (tags).

### `src/components/Hero.jsx`
- `ROLE` reformulado (Blue Team · SOC · Purple Team em formação).
- Linha honesta adicional: "Bug Bounty na HackerOne · segurança ofensiva com Kali Linux".

### `src/components/Header.jsx`
- Marca `pt@blueteam` → `pt@security`.

### `src/components/About.jsx`
- Acrescentar parágrafo de transição ao ofensivo (sem inflar `METRICS`).

### `src/components/Areas.jsx` (passar a renderizar)
- Restilizar para tema neon; receber `areas` via props; destacar cards ofensivos.

### `src/components/Methodology.jsx` (passar a renderizar)
- Restilizar para tema neon; renderizar fluxo + faixa de `frameworks`.

### `src/components/Arsenal.jsx` (novo)
- Blocos estilo terminal por categoria, listando ferramentas Kali.
- Rótulo honesto: "ferramentas que uso em estudos e bug bounty".

### `src/components/Skills.jsx`
- Manter grupos defensivos com barra de %.
- Adicionar grupos ofensivos renderizados como **tags** (sem %).

### `src/components/Contact.jsx`
- Ampliar a linha de status para "segurança ofensiva e defensiva (Purple Team)".

### `src/App.jsx`
- Importar e inserir `Areas`, `Methodology`, `Arsenal`.
- Ordem: Hero → About → Areas → Methodology → Arsenal → Timeline → Skills →
  Differentials → Projects → Certifications → Contact.

### `index.html`
- `<title>` e metas (`description`, `og:*`) → posicionamento Purple Team.

## Fora de escopo
- Projetos reais (IOC Enricher, Statecraft, XDR Hunting Pack), Trajetória e
  Certificações permanecem como estão.
- Não refatorar a duplicação de conteúdo entre componentes e `portfolioData.js`.

## Critérios de aceite
- Build/lint do Vite sem erros; app sobe no `npm run dev`.
- Nenhuma métrica ofensiva fabricada presente.
- Novas seções visíveis, navegáveis pelo menu e consistentes com o tema neon.
- Experiência profissional permanece descrita como Blue Team/SOC.
