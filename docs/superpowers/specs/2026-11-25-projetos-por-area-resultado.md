# Resultado — Projetos por área de atuação

Implementação em 25/11/2026, conforme `docs/superpowers/specs/2026-11-25-projetos-por-area.md`.

## O que mudou

- `src/data/portfolioData.js`: quatro grupos na ordem da spec, campo `group` nos dez projetos e reordenação global. A comparação com `HEAD`, desconsiderando apenas `group`, confirmou a preservação integral dos objetos originais.
- `src/Portfolio.jsx`: índice com números, títulos curtos e contagens; seções de grupo com contexto e hierarquia h2 → h3 → h4; cards numerados de 01 a 10. Cabeçalho, roadmap, estudo de caso e conteúdo dos cards preservados.
- `src/Portfolio.jsx`: submenu desktop de Projetos e links recuados no menu mobile. Os submenus de Atuação e Projetos fecham um ao abrir o outro.
- `src/projectNavigation.js`: resolução única de hashes, usada nos cliques, no histórico e na abertura inicial. Grupos ativam Projetos e rolam até o destino no contêiner desktop ou no documento mobile, respeitando movimento reduzido. Hashes desconhecidos são ignorados.
- `src/editorial.css`: índice em quatro colunas no desktop e lista no mobile; separadores e espaçamento de 100 px entre grupos no desktop e 65 px no mobile, com fontes e tokens existentes. Seletores de título dos cards adaptados para h4, preservando o tamanho visual.
- `tests/projectNavigation.test.js`: quatro testes executáveis com `node --test tests/projectNavigation.test.js`, sem novas dependências.

## Decisões e desvios

- Preservado o breakpoint real do código: mobile até 1023 px, desktop a partir de 1024 px. A referência a 961 px no contexto da spec não corresponde ao `verticalQuery` atual. Os tamanhos de aceite foram verificados conforme pedidos.
- A URL sem fragmento representa a cena inicial. Isso preserva o caminho `/` → Projetos → Voltar → início. Um fragmento desconhecido, incluindo `#`, continua sem destino. Esse caso foi identificado na revisão e corrigido após um teste que falhou antes da mudança.
- A resolução de hashes foi extraída para um módulo pequeno para permitir testes diretos com o executor nativo do Node.
- Chrome DevTools MCP não estava disponível. A validação usou Chrome real, em perfil isolado e modo headless, via Playwright instalado em diretório temporário. Nenhuma dependência ou configuração do repositório foi alterada para isso.
- Sem alterações em outras seções, `public/`, `vercel.json` ou dependências. Sem commit ou push.

## Verificação

- Testes de resolução: **4 aprovados, 0 falhas**. Cobrem cenas, quatro áreas, retorno à URL sem fragmento e hashes desconhecidos/parciais.
- Desktop **1440×900**: índice visível sem rolagem; quatro links do índice e quatro do submenu alinhados aos destinos; link direto `/#projetos-deteccao`; transição de outra cena para um grupo; setas esquerda/direita; voltar/avançar; hash desconhecido sem redirecionar ao início.
- Ordem e numeração dos dez cards confirmadas no DOM. Os dez modais abriram, mantiveram o ciclo de foco com Tab/Shift+Tab, fecharam com Escape e devolveram o foco ao botão de origem. Incluído o modal de projeto interno sem links externos.
- Movimento reduzido: navegação até grupo sem criar fragmentos animados.
- Mobile **390×844**: link direto `/#projetos-intel`, índice em lista, quatro áreas no menu, navegação para os quatro grupos e ausência de overflow horizontal. Capturas de tela inspecionadas para desktop, índice mobile e menu mobile; nenhum texto cortado nas áreas verificadas.
- Nenhum erro JavaScript observado nos fluxos automatizados.
- Revisão independente somente leitura: conteúdo dos dados preservado; caso do histórico sem fragmento identificado e corrigido. Ajuste dos submenus também validado no Chrome.
- `git diff --check`: sem erros de whitespace. O Git apenas informou sua conversão configurada de LF para CRLF.

## Build final

Comando solicitado: `npm run build` (executado como `npm.cmd run build` no PowerShell).

Saída, código de saída **0**, sem avisos:

```text
> patrick-thiago-portfolio@1.0.0 build
> vite build

vite v5.4.21 building for production...
transforming...
✓ 1743 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   1.83 kB │ gzip:  0.70 kB
dist/assets/index-DsUBmES4.css   44.50 kB │ gzip: 10.05 kB
dist/assets/index-WqgZBoTv.js   203.94 kB │ gzip: 65.77 kB
✓ built in 3.28s
```
