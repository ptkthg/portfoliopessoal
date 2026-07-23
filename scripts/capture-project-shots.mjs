// Captura as prévias dos projetos para a galeria do portfólio.
// Dois sites no ar são fotografados direto; o XDR Hunting Pack não tem site,
// então renderizamos um trecho de query KQL num editor escuro.
//
// Uso: node scripts/capture-project-shots.mjs
// Saída: public/assets/projects/{ioc-enricher,statecraft-cyber,xdr-hunting-pack}.png
//
// A moldura de navegador (BrowserFrame) usa object-fit:cover em 16:10, então
// capturamos em 1280x800 (exatamente 16:10) para o recorte não distorcer.

import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '..', 'public', 'assets', 'projects');

const VIEWPORT = { width: 1280, height: 800 };

const liveSites = [
  // O IOC Enricher abre numa tela de login; entramos como convidado para a
  // prévia mostrar o painel da ferramenta em vez do formulário.
  { file: 'ioc-enricher.png', url: 'https://iocenricher.vercel.app', guest: true },
  { file: 'statecraft-cyber.png', url: 'https://statecraftcyber.vercel.app' },
];

// Trecho ilustrativo do pack — KQL padrão de caça a password spray no Defender XDR.
const kql = `// XDR Hunting Pack — password spray via falhas de logon
// MITRE ATT&CK: T1110.003 (Password Spraying)
let janela = 1h;
let limiteContas = 8;      // contas distintas atingidas
IdentityLogonEvents
| where Timestamp > ago(janela)
| where ActionType == "LogonFailed"
| where LogonType in ("Network", "RemoteInteractive")
| summarize
      ContasAlvo   = dcount(AccountUpn),
      Tentativas   = count(),
      Contas       = make_set(AccountUpn, 12)
    by IPAddress, bin(Timestamp, janela)
| where ContasAlvo >= limiteContas
| order by ContasAlvo desc`;

const kqlHtml = `<!doctype html><html><head><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1280px; height: 800px; background: #0a0a0f; overflow: hidden; }
  .frame { padding: 40px 46px; height: 800px; display: flex; flex-direction: column; }
  .title { font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: .18em;
    text-transform: uppercase; color: #00ff88; margin-bottom: 6px; }
  .sub { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #666d7a; margin-bottom: 26px; }
  .editor { flex: 1; background: #111118; border: 1px solid #22222c; border-radius: 12px;
    overflow: hidden; box-shadow: 0 24px 60px -30px rgba(0,0,0,.9); }
  .bar { display: flex; align-items: center; gap: 8px; padding: 12px 16px;
    background: rgba(0,0,0,.35); border-bottom: 1px solid #22222c; }
  .bar i { width: 11px; height: 11px; border-radius: 50%; background: #2a2a35; display: block; }
  .bar .name { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #9aa1ad; margin-left: 10px; }
  pre { margin: 0; padding: 26px 30px; font-family: 'JetBrains Mono', monospace;
    font-size: 17px; line-height: 1.85; color: #e2e8f0; white-space: pre; tab-size: 4; }
  .cmt { color: #5a8a6f; }
  .kw  { color: #00ff88; }
  .fn  { color: #7fd4ff; }
  .str { color: #d7a76b; }
  .num { color: #c98fff; }
</style></head><body>
  <div class="frame">
    <div class="title">XDR Hunting Pack</div>
    <div class="sub">threat hunting · Microsoft Defender XDR · MITRE ATT&amp;CK</div>
    <div class="editor">
      <div class="bar"><i></i><i></i><i></i><span class="name">password_spray.kql</span></div>
      <pre id="code"></pre>
    </div>
  </div>
<script>
  const raw = ${JSON.stringify(kql)};
  const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const kws = ['let','where','summarize','by','order','desc','in','count','dcount','make_set','bin','ago'];
  const lines = raw.split('\\n').map((line) => {
    const c = line.indexOf('//');
    let code = c >= 0 ? line.slice(0, c) : line;
    let comment = c >= 0 ? line.slice(c) : '';
    code = esc(code)
      .replace(/"[^"]*"/g, (m) => '<span class="str">' + m + '</span>')
      .replace(/\\b(\\d+[a-z]?)\\b/g, '<span class="num">$1</span>')
      .replace(new RegExp('\\\\b(' + kws.join('|') + ')\\\\b','g'), '<span class="kw">$1</span>')
      .replace(/([A-Za-z]+)(?=\\()/g, '<span class="fn">$1</span>');
    return code + (comment ? '<span class="cmt">' + esc(comment) + '</span>' : '');
  });
  document.getElementById('code').innerHTML = lines.join('\\n');
</script>
</body></html>`;

async function run() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2 });

  for (const site of liveSites) {
    const page = await ctx.newPage();
    console.log(`capturando ${site.url} ...`);
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(2000); // deixa fontes/animações assentarem
    if (site.guest) {
      try {
        await page.getByText(/Continue as Guest/i).first().click({ timeout: 6000 });
        await page.waitForTimeout(3500);
      } catch {
        console.log('  (botão de convidado não encontrado — mantém a landing)');
      }
    }
    await page.screenshot({ path: resolve(outDir, site.file) });
    console.log(`  -> ${site.file}`);
    await page.close();
  }

  const page = await ctx.newPage();
  console.log('renderizando query KQL do XDR ...');
  await page.setContent(kqlHtml, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: resolve(outDir, 'xdr-hunting-pack.png') });
  console.log('  -> xdr-hunting-pack.png');
  await page.close();

  await browser.close();
  console.log('pronto.');
}

run().catch((e) => { console.error(e); process.exit(1); });
