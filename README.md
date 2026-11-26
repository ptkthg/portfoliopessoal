# Portfólio · Patrick Santos

Site pessoal publicado em **[portfolioptk.vercel.app](https://portfolioptk.vercel.app)**: projetos de security engineering,
resposta a incidentes e identidade.

## Stack

- React 18 + Vite 5, sem framework de CSS (`src/editorial.css`).
- Conteúdo separado do layout: textos, projetos e competências ficam em `src/data/portfolioData.js`.
- Deploy automático da branch `main` na Vercel.

## Segurança do próprio site

| Controle | Onde |
|---|---|
| Content-Security-Policy restritiva (`script-src 'self'`, `frame-ancestors 'none'`, `object-src 'none'`) | `vercel.json` |
| `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` | `vercel.json` |
| Canal de reporte de vulnerabilidades (RFC 9116) | `public/.well-known/security.txt` |
| Dependências com versão fixada e `package-lock.json` versionado | `package.json` |
| CI com `permissions: contents: read`, actions fixadas por SHA e `npm audit` | `.github/workflows/ci.yml` |
| Atualizações semanais de npm e GitHub Actions | `.github/dependabot.yml` |

Para conferir os cabeçalhos em produção: [securityheaders.com](https://securityheaders.com/?q=portfolioptk.vercel.app&followRedirects=on).

Limitação conhecida: a CSP ainda permite `style-src 'unsafe-inline'` e carrega fontes do Google Fonts.

## Como rodar

```bash
npm ci
npm run dev      # servidor local
npm test         # testes de navegação e de consistência dos dados (node:test)
npm run build    # build de produção em dist/
```

## Uso

Fique à vontade para estudar o código. Textos, currículo e fotos são pessoais: não os reutilize sem autorização.
