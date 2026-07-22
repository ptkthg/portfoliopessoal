# Repaginação do portfólio: identidade tech, currículo e galeria de projetos

Data: 2026-07-22
Branch: `feat/portfolio-tech-2026`
Protótipo validado: `.superpowers/brainstorm/2666-1784737456/content/tema-verde-v3.html`

## Objetivo

Reformular o portfólio em `D:\Projetos\portfoliopessoal` em três frentes decididas nesta sessão:

1. Nova identidade visual e nova estrutura de navegação, mantendo o verde `#00ff88` e o fundo `#0a0a0f` do site atual.
2. Incorporar o conteúdo do currículo (`D:\Desktop\PS07CV.pdf`) como seção navegável, com download do PDF.
3. Substituir a lista de projetos por uma galeria com prévia visual em moldura de navegador, com página individual por projeto.

Em paralelo, todo o texto do site foi reescrito para linguagem factual: sem slogans, sem autodeclarações e sem números não verificáveis.

## Decisões tomadas

| Tema | Decisão |
|---|---|
| Direção visual | Estrutura "A2 assimétrico" com navegação horizontal no topo, sobre a paleta verde/grafite do site atual |
| Acento | `#00ff88`, cor de destaque única |
| Fundo | `#0a0a0f`; superfícies em branco a 1,5–3% de opacidade |
| Tipografia | Inter (texto e títulos) + JetBrains Mono (rótulos, numeração, tags, URLs) |
| Ícones | SVG inline via sprite; nenhum glifo de símbolo ou emoji |
| Logos | Marcas oficiais de GitHub e LinkedIn |
| Foto | Removida do hero |
| Grade de fundo | Removida; permanece só o brilho verde suave no topo |
| Roteamento | `react-router-dom`, URLs `/projetos/:slug` |
| Contato | `mailto:` com endereço visível e copiável; sem formulário e sem backend |
| WhatsApp | Removido do site, incluindo o número |
| Hookshade | Fora da galeria nesta entrega |

## Conteúdo: fonte da verdade

O conteúdo sai do `PS07CV.pdf` e dos dados já existentes em `portfolioData.js`. Nada é inventado. Divergências resolvidas com o usuário:

- Oceânica: **out/2025 — abr/2026**, cargo **Analista de Segurança da Informação**.
- Certificações Aviatrix MNA e Axur CPOP: **2025**.
- E-mail publicado: **ptkamp1@gmail.com**.
- Disponibilidade: **imediata**.

Correções pendentes no PDF, fora do escopo desta implementação: o período da Oceânica está `[10/2025] - [03/2025]` (ano final errado e ordem invertida) e há um campo de contato vazio `[]` no cabeçalho.

## Seções

1. **Início** — nome, cargo, especialidades, localização, selo de disponibilidade e botões (contato, currículo, LinkedIn, GitHub). Abaixo, faixa de quatro indicadores factuais: 2024 (início na área), 3 empresas, 5 plataformas de SIEM/monitoramento, N1/N2.
2. **Sobre** — resumo profissional em três parágrafos derivados do CV, lista de fatos em linhas e quatro blocos de áreas de responsabilidade.
3. **Experiência profissional** — timeline com empresa, cargo, período, área, atribuições e ferramentas.
4. **Competências técnicas** — nove categorias (Blue Team e SOC, Resposta a incidentes, IAM e PAM, Vulnerabilidades, Endpoints, Infraestrutura, Automação, Desenvolvimento, Governança e auditoria). O rótulo de cada linha indica onde a competência foi exercida, não nível autoatribuído. Filtros por categoria.
5. **Projetos** — galeria. Um projeto em destaque (prévia grande + informação ao lado) e os demais em grade de duas colunas. Cada item: categoria, título, status, objetivo, problema, funcionalidades, participação, tecnologias e links.
6. **Estudo de caso** — seis células: detecção, investigação, contenção, causa raiz, correção, resultado.
7. **Currículo** — resumo do CV, botões de download e impressão, bloco de metadados, formação e certificações.
8. **Contato** — "Contato profissional", cartões de LinkedIn, GitHub e e-mail, mais botões de enviar mensagem e baixar currículo.

Rodapé em três colunas: identificação, navegação e links externos.

## Páginas de projeto

Rota `/projetos/:slug`. Estrutura: voltar, categoria, título, resumo, botões de acesso, metadados em quatro colunas (participação, período, tecnologias, estado atual), captura em moldura de navegador e corpo em Objetivo, Problema tratado, Funcionalidades, Decisões técnicas e Estado atual, com índice lateral fixo e link para o próximo projeto.

## Arquitetura

**Dados.** `src/data/portfolioData.js` permanece como fonte única. Experiências ganham `area` e `tools`. Projetos ganham `slug`, `category`, `objective`, `problem`, `features`, `role`, `state`, `screenshot`, `links` e o corpo da página de detalhe. Entram `availability` e `specialties`. Saem `softSkills`, `developing`, `differentials`, `whatISeek`, `methodology`, `methodologyText`, `frameworks`, `arsenal` e `offensiveSkills`.

**Componentes.** Reescritos: `Header`, `Hero`, `About`, `Timeline`, `Skills`, `Projects`, `CaseStudy`, `Contact`, `Footer`. Novos: `Resume`, `ProjectPage`, `BrowserFrame`, `Icon`. Removidos: `Areas`, `Differentials`, `Certifications`, `Methodology`, `Arsenal`.

**Tema.** Tokens no `tailwind.config.js`. `index.css` perde `glitch-hover`, `cursor-blink` e `hero-dots`.

**Responsividade.** Quatro breakpoints, validados no protótipo: 1000px (respiro e colunas), 860px (navegação vira gaveta, tudo empilha), 620px (celular) e 400px (celular estreito).

**Acessibilidade.** Alvos de toque de 44px, `prefers-reduced-motion` respeitado, `aria-label` nos controles, contraste conferido do verde sobre o fundo escuro.

## Fora de escopo

- Correção do arquivo `PS07CV.pdf`.
- Formulário de contato com backend.
- Hookshade na galeria.
- Geração automática de PDF a partir dos dados do site.

## Pendência conhecida

As capturas reais dos projetos não existem ainda. `BrowserFrame` renderiza a maquete abstrata quando `screenshot` é nulo, então a seção funciona sem elas; a substituição por PNG é uma troca de campo no `portfolioData.js`.
