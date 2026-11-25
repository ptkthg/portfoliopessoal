# Projetos organizados por área de atuação

**Implementador:** Codex. **Revisor:** Claude. Data: 25/11/2026. Base: commit `edb50cc`.

## Contexto

A seção Projetos (`#projetos`) mostra os 10 projetos numa grade única de duas colunas, na ordem do array
`portfolioData.projects`. O dono do portfólio escolheu agrupá-los **por área de atuação**, em quatro seções com título,
uma linha de contexto e atalho na navegação. O objetivo é que um recrutador de Security Engineering ache em segundos
os projetos da área que interessa à vaga.

No desktop (`min-width: 961px`, ver `verticalQuery`) a página funciona por cenas: cada item de `navItems` é uma tela,
com rolagem interna (`.scene.is-active`) e transição entre cenas. No mobile, a página rola na vertical. As duas formas
precisam funcionar.

## 1. Dados (`src/data/portfolioData.js`)

Criar `projectGroups` dentro de `portfolioData`, nesta ordem, e o campo `group` em cada projeto:

| id | Título | Linha de contexto | Projetos, nesta ordem |
|---|---|---|---|
| `projetos-incidentes` | Resposta a incidentes & SOC | Da triagem do alerta ao relatório, com evidência e custódia. | Perito, Hookshade, NetShield SOC |
| `projetos-deteccao` | Engenharia de detecção & hunting | Detecções versionadas, testadas e ajustadas para disparar no que importa. | KQL Detection as Code, XDR Hunting Pack, Deception Loop |
| `projetos-intel` | Threat intelligence | Indicadores e vulnerabilidades com contexto para priorizar a defesa. | Statecraft, IOC Enricher |
| `projetos-identidade` | Identidade, nuvem & DevSecOps | Acessos e infraestrutura com controles de segurança desde a criação. | SecIdentity AI, Terraform GitHub Seguro |

- Reordene o array `projects` para seguir a ordem da tabela (o modal de detalhes e outros usos continuam funcionando).
- Não altere textos, links, provas nem imagens dos projetos.

## 2. Seção Projetos (`src/Portfolio.jsx`, função `Projects`)

- Mantenha o cabeçalho atual (`Heading n={5}`, intro e "ARQUIVO / 10 ENTRADAS").
- Logo abaixo do cabeçalho, um índice das quatro áreas: uma linha com quatro links, cada um com número (01–04), título
  curto e contagem ("3 projetos"). Em mobile, vira lista vertical. Rótulo acessível: `aria-label="Áreas dos projetos"`.
- Para cada grupo, um bloco `<section id={group.id} aria-labelledby=...>` com: número do grupo e contagem em IBM Plex
  Mono, título `h3` em Space Grotesk, a linha de contexto e a grade atual (`.project-grid`) só com os projetos do grupo.
  Os cards dos projetos passam a usar `h4` (hierarquia: h2 da seção → h3 do grupo → h4 do projeto), mantendo o
  tamanho visual atual.
- A numeração no card ("01 / DEMONSTRAÇÃO") segue a ordem global nova (01 a 10), não reinicia por grupo.
- Roadmap e Estudo de caso continuam no fim da seção, depois dos quatro grupos.
- Estilo: reaproveite tokens e fontes existentes (`--blue`, `--line`, IBM Plex Mono, Space Grotesk). Separe os grupos
  com a linha fina já usada em `.case-link` (border-top `var(--line)`) e espaçamento de 90–110 px no desktop e 60–70 px
  no mobile. Sem cores, fontes ou ícones novos.

## 3. Navegação e âncoras

Hoje `onHistory` e o clique em `a[href^="#"]` procuram o hash em `navItems`. Um hash como `#projetos-deteccao` não é
encontrado, e o código cai no índice 0 (volta para o hero). Corrigir assim:

- Uma função única que resolve um hash para `{ sceneIndex, targetId }`: ids de `navItems` resolvem para a própria cena;
  ids de `projectGroups` resolvem para a cena `projetos` com `targetId` do grupo; qualquer outro hash é ignorado (não
  navega para o hero).
- Ao navegar para um grupo: no desktop, ativa a cena Projetos (com a transição atual, se vier de outra cena) e depois
  rola o contêiner `.scene.is-active` até o bloco do grupo; no mobile, `scrollIntoView` no bloco. Respeite
  `prefers-reduced-motion` como o código já faz.
- Use essa função no clique, no `popstate`/`hashchange` e no carregamento inicial (`initialSection` e o
  `requestAnimationFrame` da linha ~331), para que um link direto `…/#projetos-intel` abra na área certa.
- Os links do índice da seção atualizam o hash (`pushState`), como os demais.
- Menu desktop: "Projetos" ganha um submenu igual ao de "Atuação" (botão com `aria-expanded` e `aria-controls`) com
  as quatro áreas. `aria-current="location"` no item Projetos quando a cena ativa for Projetos.
- Menu mobile: as quatro áreas aparecem logo abaixo de "Projetos", recuadas, com fonte menor.

## 4. Critérios de aceite

- `npm run build` sem erros nem avisos novos.
- Desktop 1440×900: na cena Projetos, o índice das áreas aparece sem rolar; cada link do índice e do submenu leva ao
  grupo certo; setas ← → continuam trocando de cena; abrir `/#projetos-deteccao` direto abre a cena Projetos no grupo
  de detecção.
- Mobile 390×844: grupos empilhados, índice em lista, menu mobile com as áreas, nenhum texto cortado.
- Modal "Ver detalhes" funciona em todos os cards, com foco preso e Escape fechando.
- Nenhum hash desconhecido manda o usuário para o hero.
- Não altere outras seções, `public/`, `vercel.json` nem dependências. Não faça commit nem push.
- Registre o resultado em `docs/superpowers/specs/2026-11-25-projetos-por-area-resultado.md` (o que mudou, desvios,
  saída do build), com caminhos relativos ao repositório.
