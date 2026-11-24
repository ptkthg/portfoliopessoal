import { spawn } from 'node:child_process';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [url, output, width = '1440', height = '900', mode] = process.argv.slice(2);
if (!url || !output) throw new Error('Usage: node capture-qa.mjs <url> <output> [width] [height]');
const profile = await mkdtemp(join(tmpdir(), 'portfolio-qa-'));
const browser = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank',
], { windowsHide: true, stdio: 'ignore' });
let socket;
try {
  let port;
  for (let i = 0; i < 100; i++) {
    try { port = Number((await readFile(join(profile, 'DevToolsActivePort'), 'utf8')).split('\n')[0]); break; }
    catch { await new Promise((resolve) => setTimeout(resolve, 100)); }
  }
  if (!port) throw new Error('Chrome debugging port unavailable');
  const pages = await (await fetch('http://127.0.0.1:' + port + '/json/list')).json();
  socket = new WebSocket(pages.find((page) => page.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let id = 0;
  const pending = new Map();
  const exceptions = [];
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    if (message.method === 'Runtime.exceptionThrown') exceptions.push(message.params.exceptionDetails.text + ' ' + (message.params.exceptionDetails.exception?.description || ''));
    if (message.method === 'Log.entryAdded') exceptions.push('LOG ' + message.params.entry.text);
    if (message.method === 'Network.loadingFailed') exceptions.push('NETWORK ' + message.params.errorText);
    if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') exceptions.push('CONSOLE ' + message.params.args.map((arg) => arg.value || arg.description).join(' '));
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      message.error ? reject(new Error(message.error.message)) : resolve(message.result);
    }
  };
  const command = (method, params = {}) => new Promise((resolve, reject) => {
    const current = ++id; pending.set(current, { resolve, reject });
    socket.send(JSON.stringify({ id: current, method, params }));
  });
  await command('Page.enable');
  await command('Runtime.enable');
  await command('Log.enable');
  await command('Network.enable');
  await command('Emulation.setDeviceMetricsOverride', { width: Number(width), height: Number(height), deviceScaleFactor: 1, mobile: Number(width) <= 500 });
  if (mode === 'reduced-motion') await command('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await command('Page.navigate', { url });
  await new Promise((resolve) => setTimeout(resolve, 7000));
  if (new URL(url).hash) {
    await command('Runtime.evaluate', { expression: "document.querySelector(location.hash)?.scrollIntoView({behavior:'instant'})" });
    await new Promise((resolve) => setTimeout(resolve, 1200));
  }
  if (mode === 'transition' || mode === 'transition-late') {
    await command('Runtime.evaluate', { expression: "document.querySelector('.scene-nav button:last-child')?.click()" });
    await new Promise((resolve) => setTimeout(resolve, mode === 'transition-late' ? 650 : 260));
  }
  if (mode === 'dialog') {
    await command('Runtime.evaluate', { expression: "document.querySelector('.project-item .project-links button')?.click()" });
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  if (mode === 'full') {
    const { cssContentSize } = await command('Page.getLayoutMetrics');
    await command('Emulation.setDeviceMetricsOverride', { width: Number(width), height: Math.ceil(cssContentSize.height), deviceScaleFactor: 1, mobile: Number(width) <= 500 });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  const { data } = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(output, Buffer.from(data, 'base64'));
  const result = await command('Runtime.evaluate', { expression: "JSON.stringify({title:document.title, width:document.documentElement.scrollWidth, viewport:innerWidth, h1:document.querySelector('h1')?.innerText, root:document.querySelector('#root')?.innerText?.slice(0,120), images:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src)})", returnByValue: true });
  process.stdout.write(result.result.value + '\n' + exceptions.join('\n') + '\n');
  if (mode === 'audit') {
    const audit = await command('Runtime.evaluate', { expression: `(async()=>{const pause=()=>new Promise(r=>setTimeout(r,80));document.querySelector('#skill-tab-1')?.click();await pause();const skill=document.querySelector('#skill-panel')?.innerText.includes('Entra ID');document.querySelector('.project-item .project-links button')?.click();await pause();const dialog=!!document.querySelector('[role=dialog]');const focus=document.activeElement?.getAttribute('aria-label');window.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'}));await pause();const closed=!document.querySelector('[role=dialog]');document.querySelector('.menu-toggle')?.click();await pause();const menu=document.querySelector('.menu-toggle')?.getAttribute('aria-expanded');const menuFocus=document.activeElement?.textContent?.trim();window.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'}));await pause();return JSON.stringify({sections:document.querySelectorAll('main section[id]').length,projects:document.querySelectorAll('.project-item').length,skillTab:skill,dialog,dialogFocus:focus,dialogClosed:closed,mobileMenu:menu,mobileMenuFocus:menuFocus,resume:document.querySelector('.resume-link')?.getAttribute('href')})})()`, awaitPromise: true, returnByValue: true });
    process.stdout.write('AUDIT ' + audit.result.value + '\n');
  }
  if (mode === 'responsive') {
    const audit = await command('Runtime.evaluate', { expression: `(async()=>{
      const pause=ms=>new Promise(r=>setTimeout(r,ms));
      const vertical=matchMedia('(max-width: 1023px)').matches;
      const ids=[...document.querySelectorAll('main section[id]')].map(s=>s.id);
      const first={width:innerWidth,scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight,vertical,trackDisplay:getComputedStyle(document.querySelector('.horizontal-track')).display,headerHeight:Math.round(document.querySelector('.site-header').getBoundingClientRect().height),sections:ids.length,projects:document.querySelectorAll('.project-item').length,counter:document.querySelector('.scene-nav span')?.textContent?.trim(),menuVisible:getComputedStyle(document.querySelector('.menu-toggle')).display!=='none'};
      let navigation=[];
      if(vertical){
        for(const id of ids){document.getElementById(id).scrollIntoView({behavior:'instant'});await pause(160);navigation.push({id,active:document.querySelector('.portfolio-viewport').dataset.activeSection,overflow:document.documentElement.scrollWidth>innerWidth+1});}
        document.querySelector('.menu-toggle').click();await pause(80);
        first.menuOpen=document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='true';
        first.locked=getComputedStyle(document.body).overflow==='hidden';
        window.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'}));await pause(80);
        first.escapeClosed=document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='false';
        document.querySelector('.menu-toggle').click();await pause(80);
        document.querySelector('.nav-links a[href="#projetos"]').click();await pause(500);
        first.linkClosed=document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='false';
        first.projectHash=location.hash;
      }else{
        document.querySelector('.desktop-nav a[href="#projetos"]').click();await pause(740);
        navigation.push({id:'projetos',active:document.querySelector('.portfolio-viewport').dataset.activeSection,hash:location.hash});
        window.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight'}));await pause(740);
        navigation.push({id:'trajetoria',active:document.querySelector('.portfolio-viewport').dataset.activeSection,hash:location.hash});
        first.internalScroll=document.querySelector('.scene.is-active').scrollHeight>document.querySelector('.scene.is-active').clientHeight;
      }
      return JSON.stringify({first,navigation,finalWidth:document.documentElement.scrollWidth,finalViewport:innerWidth});
    })()`, awaitPromise: true, returnByValue: true });
    process.stdout.write('RESPONSIVE ' + audit.result.value + '\n');
  }
  if (mode === 'horizontal') {
    const audit = await command('Runtime.evaluate', { expression: `(async()=>{const pause=()=>new Promise(r=>setTimeout(r,760));const current=()=>document.querySelector('.portfolio-viewport')?.dataset.activeSection;const start=current();document.querySelector('.scene-nav button:last-child')?.click();await pause();const afterNext=current();document.querySelector('.nav-links a[href="#projetos"]')?.click();await pause();const project=current();const scene=document.querySelector('.scene.is-active');const innerScroll=scene.scrollHeight>scene.clientHeight+10;scene.scrollTop=0;scene.dispatchEvent(new WheelEvent('wheel',{deltaY:120,bubbles:true,cancelable:true}));await new Promise(r=>setTimeout(r,80));const stayedForContent=current();scene.scrollTop=scene.scrollHeight;scene.dispatchEvent(new WheelEvent('wheel',{deltaY:120,bubbles:true,cancelable:true}));await pause();const afterBoundary=current();const hiddenInert=[...document.querySelectorAll('.scene:not(.is-active)')].every(s=>s.inert);return JSON.stringify({start,afterNext,project,innerScroll,stayedForContent,afterBoundary,hiddenInert,hash:location.hash})})()`, awaitPromise: true, returnByValue: true });
    process.stdout.write('HORIZONTAL ' + audit.result.value + '\n');
  }
  if (mode === 'fragment-audit' || mode === 'reduced-motion') {
    const audit = await command('Runtime.evaluate', { expression: `(async()=>{const pause=ms=>new Promise(r=>setTimeout(r,ms));const next=()=>document.querySelector('.scene-nav button:last-child')?.click();next();await pause(100);const first={active:document.querySelector('.portfolio-viewport')?.dataset.activeSection,layers:document.querySelectorAll('.fragment-layer').length,tiles:document.querySelectorAll('.fragment-tile').length};next();await pause(100);const rapid={active:document.querySelector('.portfolio-viewport')?.dataset.activeSection,layers:document.querySelectorAll('.fragment-layer').length,tiles:document.querySelectorAll('.fragment-tile').length};await pause(1050);const settled={active:document.querySelector('.portfolio-viewport')?.dataset.activeSection,layers:document.querySelectorAll('.fragment-layer').length,tiles:document.querySelectorAll('.fragment-tile').length};return JSON.stringify({reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,first,rapid,settled})})()`, awaitPromise: true, returnByValue: true });
    process.stdout.write('FRAGMENTS ' + audit.result.value + '\n');
  }
  if (mode === 'measure') {
    const audit = await command('Runtime.evaluate', { expression: "JSON.stringify([...document.querySelectorAll('.horizontal-track>.scene')].map(scene=>({id:scene.querySelector('section')?.id,viewport:scene.clientHeight,content:scene.scrollHeight,overflow:Math.max(0,scene.scrollHeight-scene.clientHeight),section:Math.round(scene.querySelector('section')?.getBoundingClientRect().height||0)})))", returnByValue: true });
    process.stdout.write('MEASURE ' + audit.result.value + '\n');
  }
} finally {
  socket?.close();
  browser.kill();
}
