import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Mail, Menu, X } from 'lucide-react';
import { navItems, portfolioData as data } from './data/portfolioData';
import './editorial.css';

const num = (n) => String(n).padStart(2, '0');
const asset = '/assets/';
const desktopNav = [
  { id: 'hero', label: 'Início' }, { id: 'sobre', label: 'Sobre' },
  { id: 'areas', label: 'Atuação' }, { id: 'projetos', label: 'Projetos' },
  { id: 'trajetoria', label: 'Trajetória' }, { id: 'contato', label: 'Contato' },
];
const verticalQuery = '(max-width: 1023px)';

function Label({ n, children }) {
  return <p className="section-label"><span>{num(n)}</span><i />{children}</p>;
}

function Heading({ n, label, children, intro }) {
  return <div className="section-heading"><Label n={n}>{label}</Label><h2>{children}<b aria-hidden="true" /></h2>{intro && <p>{intro}</p>}</div>;
}

function Action({ href, children, outline = false, external = false }) {
  return <a className={outline ? 'action outline' : 'action'} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}<ArrowUpRight size={16} aria-hidden="true" /></a>;
}

function Header({ active }) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector('a')?.focus();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape') { if (open) { setOpen(false); toggleRef.current?.focus(); } setSubOpen(false); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const trap = (event) => {
      if (event.key !== 'Tab') return;
      const first = menuRef.current?.querySelector('a');
      const last = toggleRef.current;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener('keydown', trap);
    return () => window.removeEventListener('keydown', trap);
  }, [open]);
  useEffect(() => {
    const media = window.matchMedia(verticalQuery);
    const closeOnDesktop = () => { if (!media.matches) setOpen(false); };
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);
  useEffect(() => { setOpen(false); setSubOpen(false); }, [active]);
  const closeMenus = () => { setOpen(false); setSubOpen(false); };
  return <header className="site-header"><div className="header-inner">
    <a className="wordmark" href="#hero" onClick={closeMenus}><span className="wordmark-mark" aria-hidden="true" />PATRICK SANTOS</a>
    <nav className="desktop-nav" aria-label="Navegação principal">
      {desktopNav.map(({ id, label }) => id === 'areas' ? <div className="nav-group" key={id}>
        <a href="#areas" aria-current={['areas', 'skills', 'pontos-fortes'].includes(active) ? 'location' : undefined} onClick={() => setSubOpen(false)}>{label}</a>
        <button type="button" aria-label="Mostrar subseções de Atuação" aria-expanded={subOpen} aria-controls="areas-submenu" onClick={() => setSubOpen(!subOpen)}><ChevronDown size={16} aria-hidden="true" /></button>
        <div id="areas-submenu" className={subOpen ? 'nav-submenu is-open' : 'nav-submenu'}>
          <a href="#skills" aria-current={active === 'skills' ? 'location' : undefined} onClick={closeMenus}>Competências</a>
          <a href="#pontos-fortes" aria-current={active === 'pontos-fortes' ? 'location' : undefined} onClick={closeMenus}>Pontos fortes</a>
        </div>
      </div> : <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={closeMenus}>{label}</a>)}
    </nav>
    <nav ref={menuRef} className={open ? 'nav-links is-open' : 'nav-links'} id="main-navigation" aria-label="Navegação móvel">
      {navItems.map(({ id, label }) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={closeMenus}>{label}</a>)}
      <a className="resume-mobile" href={data.person.resumePath} target="_blank" rel="noreferrer" onClick={closeMenus}>Currículo <ArrowUpRight size={16} aria-hidden="true" /></a>
    </nav>
    <a className="resume-link" href={data.person.resumePath} target="_blank" rel="noreferrer">Currículo <ArrowUpRight size={16} aria-hidden="true" /></a>
    <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>;
}

function Photo({ src, alt, caption, className = '' }) {
  return <figure className={'editorial-photo ' + className}><img src={src} alt={alt} loading="lazy" decoding="async" /><span aria-hidden="true" /><figcaption>{caption}</figcaption></figure>;
}

function Hero() {
  return <section className="hero section-shell" id="hero"><div className="hero-image" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" /><div className="page-width hero-inner">
    <div className="hero-copy"><Label n={0}>PORTFÓLIO / 2026</Label><p className="hero-kicker">SECURITY ENGINEERING · DFIR &amp; IAM</p><h1>PATRICK<br />SANTOS<span>.</span></h1><p className="hero-description">Analista de Segurança da Informação com base em resposta a incidentes e gestão de identidades. Hoje escrevo controles de segurança como código, com testes e revisão no CI.</p><dl className="hero-stats">{data.heroStats.map(({ value, label }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><div className="hero-actions"><Action href="#projetos">Ver projetos</Action><Action href="#contato" outline>Contato</Action></div></div>
    <p className="hero-side-note">RIO DE JANEIRO, BRASIL / DISPONÍVEL PARA OPORTUNIDADES</p>
  </div><span className="cross cross-one" aria-hidden="true">+</span><span className="cross cross-two" aria-hidden="true">+</span><a className="scroll-cue" href="#sobre">PRÓXIMA SEÇÃO <ArrowRight size={14} aria-hidden="true" /></a></section>;
}

function About() {
  return <section className="section-shell about-section" id="sobre"><div className="page-width about-layout"><div className="about-copy"><Heading n={1} label="SOBRE" intro="Tecnologia, contexto e decisão no mesmo campo de visão.">SOBRE<br />MIM</Heading><div className="prose"><p>Sou Patrick Santos, analista de Segurança da Informação no Rio de Janeiro. Minha trajetória começou na administração de identidades e infraestrutura e avançou para operações de segurança, investigação e resposta a incidentes.</p><p>Trabalho com sinais técnicos e suas consequências reais: da triagem em SIEM ao controle de acesso, da detecção ao relatório que orienta uma decisão. O interesse por relações internacionais amplia meu olhar para ameaças, risco e o ambiente em que a tecnologia opera.</p><p>Desenvolvo ferramentas próprias para reduzir trabalho repetitivo em segurança. Agora levo essa experiência para security engineering, construindo os controles que eu gostaria de ter encontrado durante as investigações. O primeiro projeto público nessa linha é um módulo Terraform que cria repositórios do GitHub já protegidos. Também estudo segurança de nuvem e IA aplicada à análise defensiva.</p></div></div><Photo src={asset + 'editorial-analysis.jpg'} alt="Analista observa mapas e documentos em uma sala de trabalho" caption="ANÁLISE / CONTEXTO / DEFESA" className="about-photo" /><div className="academic-line"><span>FORMAÇÃO</span><p>{data.education.course}<br /><small>{data.education.institution} · {data.education.status}</small></p></div></div></section>;
}

const areas = [
  ['Segurança da Informação', 'Operações defensivas, investigação, resposta a incidentes e melhoria contínua de detecções.', '01 / DEFESA'],
  ['IAM & Governança', 'Gestão de identidades, acessos privilegiados, menor privilégio, controles e evidências para auditoria.', '02 / CONTROLE'],
  ['Infraestrutura & Cloud', 'Visibilidade de redes e ativos, hardening, SIEM e estudo aplicado de segurança em Azure e AWS.', '03 / AMBIENTE'],
  ['Automação', 'Scripts, integrações e ferramentas que tornam a análise mais consistente e o fluxo operacional mais ágil.', '04 / SISTEMAS'],
  ['Security Engineering', 'Segurança escrita como código: infraestrutura e pipelines versionados, detecções com teste e exceções registradas com justificativa.', '05 / ENGENHARIA'],
];

function Areas() {
  return <section className="section-shell areas-section" id="areas"><div className="page-width"><div className="areas-top"><Heading n={2} label="O QUE FAÇO" intro="Transformo eventos, acessos e riscos em decisões e controles verificáveis.">O QUE<br />FAÇO</Heading><p className="micro-copy">DA TELEMETRIA AO CONTEXTO<br />DA INVESTIGAÇÃO À AÇÃO</p></div><div className="areas-list">{areas.map(([title, description, code]) => <article key={title} className="area-row"><span>{code}</span><h3>{title}</h3><p>{description}</p><b aria-hidden="true"><ArrowUpRight size={22} /></b></article>)}</div></div></section>;
}

const categories = [
  { name: 'Security Engineering', groups: [9] },
  { name: 'Segurança', groups: [0, 1, 2] },
  { name: 'IAM / PAM', groups: [3] },
  { name: 'Cloud e Infraestrutura', groups: [5] },
  { name: 'Automação', groups: [6, 7] },
  { name: 'Governança', groups: [4, 8] },
];

function Skills() {
  const [selected, setSelected] = useState(0);
  return <section className="section-shell skills-section" id="skills"><div className="page-width skills-layout"><div><Heading n={3} label="COMPETÊNCIAS" intro="Ferramentas e conhecimentos que uso no trabalho e nos projetos.">COMPETÊNCIAS</Heading><p className="micro-copy skill-hint">SELECIONE UMA ÁREA PARA EXPLORAR <ArrowDownRight size={14} aria-hidden="true" /></p></div><div className="skill-console"><div className="console-top"><span>PS / SKILL_INDEX</span><span><i className="status-dot" aria-hidden="true" />DISPONÍVEL</span></div><div className="skill-tabs" role="tablist" aria-label="Categorias de competências">{categories.map((cat, index) => <button key={cat.name} type="button" role="tab" id={'skill-tab-' + index} aria-controls="skill-panel" aria-selected={index === selected} tabIndex={index === selected ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={(event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + categories.length) % categories.length; setSelected(next); document.getElementById('skill-tab-' + next)?.focus(); } }}>{cat.name}</button>)}</div><div className="skill-panel" role="tabpanel" id="skill-panel" aria-labelledby={'skill-tab-' + selected}><p className="console-command">&gt; LISTAR / {categories[selected].name.toUpperCase()}</p>{categories[selected].groups.map((groupIndex, offset) => { const group = data.skillGroups[groupIndex]; return <details className="skill-group" key={selected + group.label} open={offset === 0 ? true : undefined}><summary><strong>{group.label}</strong><small>{group.level}</small></summary><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></details>; })}</div><div className="console-bottom">// CONHECIMENTO APLICADO EM OPERAÇÕES E PROJETOS</div></div></div></section>;
}

function Strengths() {
  return <section className="section-shell strengths-section" id="pontos-fortes"><div className="page-width strengths-layout"><div><Heading n={4} label="PONTOS FORTES" intro="A forma como trabalho importa tanto quanto as ferramentas.">PONTOS<br />FORTES</Heading><div className="strengths-list">{data.differentials.map((item, index) => <article key={item.title}><span>{num(index + 1)}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div><Photo src={asset + 'patrickseg-optimized.jpg'} alt="Retrato de Patrick Santos" caption="PATRICK SANTOS / RIO DE JANEIRO" className="portrait-photo" /></div></section>;
}

const projectCaptures = {
  'IOC Enricher': '/assets/project-ioc.png',
  Perito: '/assets/project-perito.png',
  Statecraft: '/assets/project-statecraft.jpg',
  'Terraform GitHub Seguro': '/evidences/terraform_github_seguro.svg',
  'XDR Hunting Pack': '/evidences/xdr_hunting_pack.svg',
  'KQL Detection as Code': '/evidences/kql_detection_as_code.svg',
};
// Diagramas não são capturas de tela: o texto alternativo descreve o que o desenho mostra.
const projectDiagramAlts = {
  'Terraform GitHub Seguro': 'Diagrama: o mapa de repositórios passa pelo módulo repositorio-seguro, que cria cinco recursos de proteção, enquanto o CI valida o código sem token',
  'XDR Hunting Pack': 'Diagrama: quatro consultas KQL de threat hunting organizadas por tática do MITRE ATT&CK',
  Perito: 'Console do Perito na visão geral de um caso fictício: resumo do incidente com cada frase marcada como comprovada, suposição ou sem dados',
  'KQL Detection as Code': 'Diagrama: detecção em YAML, fixtures sintéticos e schema oficial viram um datatable executado no emulador Kusto; o positivo precisa disparar, o negativo não, e o CI gera a documentação',
};

function ProjectProof({ proof }) {
  if (!proof) return null;
  return <p className="project-proof"><span>VERIFICAR /</span>{proof.ci && <a href={proof.ci} target="_blank" rel="noreferrer">CI no GitHub Actions <ArrowUpRight size={14} aria-hidden="true" /></a>}{proof.tests && <span>{proof.tests}</span>}{proof.evidence && <span>{proof.evidence}</span>}</p>;
}

function ProjectVisual({ project }) {
  const evidence = project.evidence?.items?.find((item) => /dashboard|pipeline/.test(item.id)) || project.evidence?.items?.[0];
  const image = projectCaptures[project.title] || project.media || evidence?.src;
  const alt = projectDiagramAlts[project.title] || evidence?.title || 'Captura da interface do projeto ' + project.title;
  return <div className={'project-visual ' + (image ? '' : 'project-visual-type')}>{image ? <img src={image} alt={alt} loading="lazy" decoding="async" /> : <div className="project-file"><span>// ARQUIVO DE PROJETO</span><strong>{project.filename}</strong><small>{project.logs?.[0]?.prefix} {project.logs?.[0]?.value}</small></div>}<span aria-hidden="true" /></div>;
}

const projectSummaries = {
  Perito: 'Junta evidências de 7 ferramentas numa timeline única, com custódia SHA-256 e ATT&CK, até o relatório executivo.',
  'SecIdentity AI': 'Automatiza atendimento ITSM e controle de acessos privilegiados com trilha auditável.',
  'Terraform GitHub Seguro': 'Cria repositórios do GitHub já protegidos, com cada decisão de segurança testada e documentada.',
  'Deception Loop': 'Converte IOCs e eventos de arquivos-isca em regras YARA e bloqueios de firewall.',
  'IOC Enricher': 'Enriquece indicadores com OSINT e IA para apoiar a triagem defensiva.',
  Statecraft: 'Reúne vulnerabilidades, briefings e busca de IOCs em uma plataforma de CTI.',
  'XDR Hunting Pack': 'Consultas KQL de threat hunting usadas na operação da Oceânica (código interno).',
  'KQL Detection as Code': 'Detecções KQL versionadas como código e testadas num motor Kusto real a cada push.',
  'NetShield SOC': 'Laboratório de perímetro com NGFW, IDS e SIEM para validar detecção e tuning.',
};

function ProjectDetails({ project, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const handler = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const links = [...document.querySelectorAll('.detail-dialog a')];
        const focusable = [closeRef.current, ...links];
        const index = focusable.indexOf(document.activeElement);
        if (event.shiftKey && index === 0) { event.preventDefault(); focusable.at(-1)?.focus(); }
        if (!event.shiftKey && index === focusable.length - 1) { event.preventDefault(); focusable[0]?.focus(); }
      }
    };
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', handler); previousFocus?.focus(); };
  }, [onClose]);
  return <div className="detail-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detail-title"><button ref={closeRef} className="detail-close" type="button" onClick={onClose} aria-label="Fechar detalhes"><X size={20} /></button><p className="section-label"><span>ARQUIVO</span><i />{project.filename}</p><h3 id="detail-title">{project.title}</h3><p>{project.description}</p><ProjectProof proof={project.proof} />{project.evidence?.items?.length > 0 && <div className="detail-evidence"><h4>Evidências do projeto</h4>{project.evidence.items.map((item) => <figure key={item.id}><img src={item.src} alt={item.title} loading="lazy" /><figcaption><strong>{item.title}</strong><span>{item.description}</span></figcaption></figure>)}</div>}<div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Demonstração <ArrowUpRight size={14} aria-hidden="true" /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Repositório <ArrowUpRight size={14} aria-hidden="true" /></a>}</div></div></div>;
}

function Roadmap() {
  return <div className="roadmap"><span>EM CONSTRUÇÃO / PRÓXIMOS PASSOS</span><ol>{data.roadmap.map((item) => <li key={item.title}><small>{item.status}</small><strong>{item.title}</strong><p>{item.detail}</p></li>)}</ol></div>;
}

function CaseStudy() {
  const study = data.caseStudy;
  return <div className="case-link"><span>ESTUDO DE CASO / RESPOSTA A INCIDENTE</span><details><summary>{study.subtitle}<span>+</span></summary><div className="case-study">
    <p className="case-intro">{study.context}</p>
    <ol className="case-steps">{study.steps.map((step) => <li key={step.phase}><strong>{step.phase}</strong>{step.tag && <em className={'case-tag tag-' + step.tag.toLowerCase().normalize('NFD').replace(/[^a-z]/g, '')}>{step.tag}</em>}<p>{step.text}</p></li>)}</ol>
    <div className="case-attack"><h4>MITRE ATT&amp;CK</h4><ul>{study.attack.map((technique) => <li key={technique.id}><code>{technique.id}</code><span>{technique.name}</span>{technique.note && <small>{technique.note}</small>}</li>)}</ul></div>
    <p className="case-limitation"><em className="case-tag tag-limitacao">LIMITAÇÃO</em>{study.limitation}</p>
  </div></details></div>;
}

function Projects() {
  const [selected, setSelected] = useState(null);
  return <><section className="section-shell projects-section" id="projetos"><div className="page-width"><div className="projects-intro"><Heading n={5} label="PROJETOS" intro="Ferramentas, laboratórios e estudos construídos para problemas concretos de segurança.">PROJETOS</Heading><span>ARQUIVO / {num(data.projects.length)} ENTRADAS</span></div><div className="project-grid">{data.projects.map((project, index) => <article className="project-item" key={project.title}><ProjectVisual project={project} /><h3>{project.title === 'Statecraft' ? 'Statecraft Cyber' : project.title}</h3><p className="project-description">{projectSummaries[project.title]}</p><div className="project-meta"><span>{num(index + 1)} / {project.status === 'INTERNAL' ? 'INTERNO' : project.liveUrl ? 'DEMONSTRAÇÃO' : 'REPOSITÓRIO'}</span><span>{project.version || '—'}</span></div><p className="project-stack-label">STACK PRINCIPAL</p><ul className="project-tags">{project.tags.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}</ul><ProjectProof proof={project.proof} /><div className="project-links"><button type="button" onClick={() => setSelected(project)}>Ver detalhes <ArrowUpRight size={14} aria-hidden="true" /></button>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Demonstração <ArrowUpRight size={14} aria-hidden="true" /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Código <ArrowUpRight size={14} aria-hidden="true" /></a>}</div></article>)}</div><Roadmap /><CaseStudy /></div></section>{selected && createPortal(<ProjectDetails project={selected} onClose={() => setSelected(null)} />, document.body)}</>;
}

function Timeline() {
  return <section className="section-shell timeline-section" id="trajetoria"><div className="page-width timeline-layout"><div><Heading n={6} label="TRAJETÓRIA" intro="Do suporte e da identidade à investigação e à resposta em segurança.">TRAJETÓRIA</Heading><div className="education-note"><span>FORMAÇÃO ACADÊMICA</span><p>{data.education.course}</p><small>{data.education.institution} · {data.education.status}</small></div></div><div className="timeline-list">{[...data.experiences].reverse().map((exp, index) => <article key={exp.company}><span className="timeline-dot" aria-hidden="true" /><span className="timeline-index">{num(index + 1)} / {exp.period}</span><h3>{exp.company}</h3><p className="timeline-role">{exp.role}</p><p className="timeline-focus">{exp.focus}</p><ul className="timeline-activities">{exp.activities.slice(0, 2).map((activity) => <li key={activity}>{activity}</li>)}</ul><ul className="timeline-stack">{exp.stack.slice(0, 4).map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div><div className="page-width credentials-line"><h3>Certificações e credenciais</h3><div>{data.certifications.map((cert) => <p key={cert.name}><strong>{cert.name}</strong> / {cert.full} · {cert.issuer}</p>)}</div></div></section>;
}

function Contact() {
  return <section className="section-shell contact-section" id="contato"><div className="page-width contact-layout"><div><Heading n={7} label="CONTATO" intro="Aberto a oportunidades em segurança da informação e a conversas sobre projetos e colaboração.">VAMOS<br />CONVERSAR?</Heading><p className="contact-location">RIO DE JANEIRO, RJ / BRASIL</p></div><div className="contact-links"><a href={'mailto:' + data.person.email}><Mail aria-hidden="true" /><span><small>E-MAIL</small>{data.person.email}</span><ArrowUpRight aria-hidden="true" /></a><a href={data.person.linkedin} target="_blank" rel="noreferrer"><span className="brand-icon" aria-hidden="true">in</span><span><small>LINKEDIN</small>linkedin.com/in/ptkthg</span><ArrowUpRight aria-hidden="true" /></a><a href={data.person.github} target="_blank" rel="noreferrer"><span className="brand-icon" aria-hidden="true">gh</span><span><small>GITHUB</small>github.com/ptkthg</span><ArrowUpRight aria-hidden="true" /></a><a href={data.person.resumePath} target="_blank" rel="noreferrer"><span className="brand-icon" aria-hidden="true">CV</span><span><small>CURRÍCULO</small>Visualizar PDF</span><ArrowUpRight aria-hidden="true" /></a></div></div><footer className="site-footer page-width"><span>© {new Date().getFullYear()} PATRICK SANTOS</span><span className="footer-security"><a href="https://securityheaders.com/?q=portfolioptk.vercel.app&amp;followRedirects=on" target="_blank" rel="noreferrer">VERIFICAR CABEÇALHOS <ArrowUpRight size={14} aria-hidden="true" /></a><a href="/.well-known/security.txt">SECURITY.TXT</a></span><a href="#hero"><ArrowLeft size={14} aria-hidden="true" /> VOLTAR AO INÍCIO</a></footer></section>;
}

function createFragmentLayer(scene, direction) {
  const width = scene.clientWidth;
  const height = scene.clientHeight;
  const columns = width < 680 ? 3 : 5;
  const rows = width < 680 ? 5 : 3;
  const layer = document.createElement('div');
  layer.className = 'fragment-layer';
  layer.setAttribute('aria-hidden', 'true');
  layer.inert = true;

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      const left = column * width / columns;
      const top = row * height / rows;
      const tile = document.createElement('div');
      const snapshot = scene.cloneNode(true);
      tile.className = 'fragment-tile';
      tile.style.left = `${left}px`;
      tile.style.top = `${top}px`;
      tile.style.width = `${width / columns + 1}px`;
      tile.style.height = `${height / rows + 1}px`;
      tile.style.setProperty('--fragment-delay', `${((row * 2 + column * 3) % 6) * 25}ms`);
      tile.style.setProperty('--fragment-x', `${direction * (65 + (index * 37) % 90)}px`);
      tile.style.setProperty('--fragment-y', `${((index * 53) % 130) - 65}px`);
      tile.style.setProperty('--fragment-rotate', `${((index * 7) % 13) - 6}deg`);
      snapshot.removeAttribute('id');
      snapshot.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
      snapshot.className = 'scene fragment-snapshot';
      snapshot.setAttribute('aria-hidden', 'true');
      snapshot.inert = true;
      snapshot.style.width = `${width}px`;
      snapshot.style.height = `${height}px`;
      snapshot.style.left = `${-left}px`;
      snapshot.style.top = `${-top}px`;
      snapshot.scrollTop = scene.scrollTop;
      tile.appendChild(snapshot);
      layer.appendChild(tile);
    }
  }
  return layer;
}

export default function Portfolio() {
  const initialSection = () => Math.max(0, navItems.findIndex(({ id }) => '#' + id === window.location.hash));
  const [activeIndex, setActiveIndex] = useState(initialSection);
  const [isVertical, setIsVertical] = useState(() => window.matchMedia(verticalQuery).matches);
  const [transitioning, setTransitioning] = useState(false);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const activeRef = useRef(activeIndex);
  const transitionTimer = useRef(null);
  const fragmentLayerRef = useRef(null);
  const activeItem = navItems[activeIndex];

  const navigate = useCallback((index, updateHash = true) => {
    if (index < 0 || index >= navItems.length) return;
    if (isVertical) {
      document.getElementById(navItems[index].id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      if (updateHash) window.history.pushState(null, '', '#' + navItems[index].id);
      activeRef.current = index;
      setActiveIndex(index);
      return;
    }
    if (index === activeRef.current) {
      viewportRef.current?.querySelector('.scene.is-active')?.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.clearTimeout(transitionTimer.current);
    fragmentLayerRef.current?.remove();
    fragmentLayerRef.current = null;
    if (!reducedMotion) {
      const scene = viewportRef.current?.querySelector('.scene.is-active');
      if (scene) {
        fragmentLayerRef.current = createFragmentLayer(scene, Math.sign(index - activeRef.current));
        viewportRef.current.appendChild(fragmentLayerRef.current);
        fragmentLayerRef.current.querySelectorAll('.fragment-snapshot').forEach((snapshot) => { snapshot.scrollTop = scene.scrollTop; });
      }
      setTransitioning(true);
      transitionTimer.current = window.setTimeout(() => {
        fragmentLayerRef.current?.remove();
        fragmentLayerRef.current = null;
        setTransitioning(false);
      }, 650);
    } else {
      setTransitioning(false);
    }
    activeRef.current = index;
    setActiveIndex(index);
    if (updateHash) window.history.pushState(null, '', '#' + navItems[index].id);
  }, [isVertical]);

  useEffect(() => {
    const media = window.matchMedia(verticalQuery);
    const update = () => setIsVertical(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('horizontal-mode', !isVertical);
    if (isVertical) {
      window.clearTimeout(transitionTimer.current);
      fragmentLayerRef.current?.remove();
      fragmentLayerRef.current = null;
      setTransitioning(false);
      if (window.location.hash) requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
    }
    return () => { document.body.classList.remove('horizontal-mode'); window.clearTimeout(transitionTimer.current); fragmentLayerRef.current?.remove(); };
  }, [isVertical]);

  useEffect(() => {
    [...trackRef.current.children].forEach((scene, index) => { scene.inert = !isVertical && index !== activeIndex; });
  }, [activeIndex, isVertical]);

  useEffect(() => {
    if (!isVertical) return;
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const sections = [...trackRef.current.querySelectorAll('.section-shell[id]')];
        const offset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
        let index = 0;
        sections.forEach((section, candidate) => { if (section.getBoundingClientRect().top <= offset + 100) index = candidate; });
        if (index !== activeRef.current) { activeRef.current = index; setActiveIndex(index); }
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); cancelAnimationFrame(frame); };
  }, [isVertical]);

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
      if (!link) return;
      const index = navItems.findIndex(({ id }) => link.getAttribute('href') === '#' + id);
      if (index < 0) return;
      if (isVertical) return;
      event.preventDefault();
      navigate(index);
    };
    const onHistory = () => navigate(Math.max(0, navItems.findIndex(({ id }) => '#' + id === window.location.hash)), false);
    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onHistory);
    window.addEventListener('hashchange', onHistory);
    return () => { document.removeEventListener('click', onClick); window.removeEventListener('popstate', onHistory); window.removeEventListener('hashchange', onHistory); };
  }, [navigate, isVertical]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (isVertical) return;
      if (event.altKey || event.ctrlKey || event.metaKey || (event.target instanceof Element && event.target.closest('input, textarea, select, [role="tablist"], [role="dialog"]'))) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        navigate(activeRef.current + (event.key === 'ArrowRight' ? 1 : -1));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigate, isVertical]);

  useEffect(() => {
    if (isVertical) return;
    let locked = false;
    let unlockTimer;
    let wheelSum = 0;
    const onWheel = (event) => {
      if (event.ctrlKey || (event.target instanceof Element && event.target.closest('.skill-tabs, .detail-dialog, .nav-links'))) return;
      const scene = viewportRef.current?.querySelector('.scene.is-active');
      if (!scene) return;
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      const delta = horizontal ? event.deltaX : event.deltaY;
      if (Math.abs(delta) < 8) return;
      const limit = scene.scrollHeight - scene.clientHeight;
      const canScrollInside = !horizontal && limit > 2 && (delta > 0 ? scene.scrollTop < limit - 2 : scene.scrollTop > 2);
      if (canScrollInside) { wheelSum = 0; return; }
      if (locked) return;
      wheelSum = Math.sign(wheelSum) === Math.sign(delta) ? wheelSum + delta : delta;
      if (Math.abs(wheelSum) < 80) return;
      wheelSum = 0;
      const next = activeRef.current + Math.sign(delta);
      if (next < 0 || next >= navItems.length) return;
      event.preventDefault();
      locked = true;
      navigate(next);
      unlockTimer = window.setTimeout(() => { locked = false; }, 700);
    };
    const viewport = viewportRef.current;
    viewport.addEventListener('wheel', onWheel, { passive: false });
    return () => { viewport.removeEventListener('wheel', onWheel); window.clearTimeout(unlockTimer); };
  }, [navigate, isVertical]);

  const sections = [<Hero />, <About />, <Areas />, <Skills />, <Strengths />, <Projects />, <Timeline />, <Contact />];
  return <><a className="skip-link" href="#hero">Pular para o conteúdo</a><Header active={activeItem.id} />
    <div className="portfolio-viewport" ref={viewportRef} data-active-section={activeItem.id}>
      <main className="horizontal-track" ref={trackRef} style={isVertical ? undefined : { transform: `translate3d(-${activeIndex * 100}vw, 0, 0)` }}>
        {sections.map((section, index) => <div className={index === activeIndex ? `scene is-active${transitioning ? ' is-forming' : ''}` : 'scene'} key={navItems[index].id} aria-hidden={!isVertical && index !== activeIndex}>{section}</div>)}
      </main>
      <div className={transitioning ? 'scene-transition is-active' : 'scene-transition'} aria-hidden="true"><span>RECOMPONDO / {num(activeIndex + 1)}</span><i /></div>
      <div className="scene-nav" aria-label="Navegação entre seções">
        <button type="button" aria-label="Seção anterior" disabled={activeIndex === 0} onClick={() => navigate(activeIndex - 1)}><ArrowLeft size={20} aria-hidden="true" /></button>
        <span>{num(activeIndex + 1)} <b>/</b> {num(navItems.length)}</span>
        <button type="button" aria-label="Próxima seção" disabled={activeIndex === navItems.length - 1} onClick={() => navigate(activeIndex + 1)}><ArrowRight size={20} aria-hidden="true" /></button>
      </div>
      <p className="sr-only" aria-live="polite">Seção {activeItem.label}</p>
    </div>
  </>;
}
