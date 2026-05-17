import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const buildProjects = (iocEnricher) => [
  {
    filename: 'iocenricher.exe',
    title: 'IOC Enricher',
    version: 'v1.0.0',
    status: 'OPERATIONAL',
    statusColor: 'text-neon text-glow',
    description: 'Enriquece IP, domínio, URL ou hash com 11 fontes OSINT e análise por IA (Groq Llama 3.3 70B). Gera recomendação operacional e exporta relatório.',
    logs: [
      { prefix: '[SRC]', value: '11 OSINT sources loaded' },
      { prefix: '[AI] ', value: 'Groq Llama 3.3 70B active' },
    ],
    tags: ['React', 'Vite', 'Tailwind', 'Vercel', 'Groq', 'OSINT APIs'],
    liveUrl: iocEnricher?.liveUrl ?? 'https://iocenricher.vercel.app',
    githubUrl: iocEnricher?.githubUrl ?? 'https://github.com/ptkthg/iocenricher',
  },
  {
    filename: 'statecraft.next',
    title: 'Statecraft',
    version: 'v1.0.0',
    status: 'OPERATIONAL',
    statusColor: 'text-neon text-glow',
    description: 'Plataforma de threat intelligence em PT-BR: CVEs das últimas 72h com CVSS e EPSS, briefings gerados por IA a cada hora e IOC Search com fontes OSINT.',
    logs: [
      { prefix: '[FEEDS]', value: '19 RSS sources + NVD API' },
      { prefix: '[AI]   ', value: 'Groq Llama 3.3 70B · PT-BR' },
      { prefix: '[KEV]  ', value: 'CISA KEV + EPSS enrichment' },
    ],
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Groq AI'],
    liveUrl: 'https://statecraftcyber.vercel.app',
    githubUrl: null,
  },
  {
    filename: 'hunting_pack.kql',
    title: 'XDR Hunting Pack',
    version: null,
    status: 'INTERNAL',
    statusColor: 'text-yellow-400/90',
    description: 'Coleção de queries KQL para threat hunting no Microsoft Defender XDR, cobrindo password spray, LOLBins, PowerShell suspeito e Outlook criando processos anômalos.',
    logs: [
      { prefix: '[ENV]  ', value: 'Microsoft Defender XDR' },
      { prefix: '[MAP]  ', value: 'MITRE ATT&CK aligned' },
    ],
    tags: ['KQL', 'Defender XDR', 'MITRE ATT&CK', 'Threat Hunting'],
    liveUrl: null,
    githubUrl: null,
  },
];

export default function Projects({ iocEnricher }) {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const PROJECTS = buildProjects(iocEnricher);
  const project = PROJECTS[current];
  const isOperational = project.status === 'OPERATIONAL';

  return (
    <section id="projetos" ref={ref} className="fade-in-section py-20 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// projetos</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-4">Lab & Ferramentas</h2>

      {/* Tab navigation */}
      <div className="flex items-center gap-3 sm:gap-6 mb-8 border-b border-neon/10 pb-3 overflow-x-auto scrollbar-none">
        {PROJECTS.map((p, i) => (
          <button
            key={p.title}
            onClick={() => setCurrent(i)}
            className={`font-mono text-xs pb-3 -mb-3 border-b-2 whitespace-nowrap transition-all duration-200 shrink-0 ${
              i === current
                ? 'text-neon border-neon'
                : 'text-textprimary/35 border-transparent hover:text-textprimary/60'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Card */}
      <div
        className={`border bg-surface transition-colors duration-300 ${
          isOperational ? 'border-neon/60 shadow-neon' : 'border-textprimary/20'
        }`}
      >
        {/* Terminal bar */}
        <div
          className={`flex items-center justify-between px-4 py-2.5 bg-black/40 border-b ${
            isOperational ? 'border-neon/20' : 'border-textprimary/10'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c940]" />
          </div>
          <span className={`font-mono text-xs tracking-wide ${isOperational ? 'text-textprimary/40' : 'text-textprimary/30'}`}>
            {project.filename}
          </span>
          <div className="w-16" />
        </div>

        {/* Content */}
        <div className="p-6 font-mono text-sm">
          <p className="text-textprimary/40 mb-3">
            $ ./{project.filename.split('.')[0]} --start
          </p>

          <div className="space-y-1 mb-4">
            <p>
              <span className="text-textprimary/40">[INIT] </span>
              <span className="glitch-hover text-white font-semibold">
                {project.title}{project.version ? ` ${project.version}` : ''}
              </span>
            </p>
            {project.logs.map((log) => (
              <p key={log.prefix}>
                <span className="text-textprimary/40">{log.prefix}</span>{' '}
                <span className="text-textprimary/80">{log.value}</span>
              </p>
            ))}
            <p>
              <span className="text-textprimary/40">[STATUS]</span>{' '}
              <span className={`font-semibold ${project.statusColor}`}>{project.status}</span>
            </p>
          </div>

          <p
            className={`text-textprimary/50 text-xs pt-3 pb-4 border-t ${
              isOperational ? 'border-neon/10' : 'border-textprimary/10'
            }`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`border text-xs px-2 py-0.5 ${
                  isOperational
                    ? 'border-neon/40 text-neon'
                    : 'border-textprimary/20 text-textprimary/50'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-neon text-neon text-xs px-4 py-2 hover:bg-neon hover:text-terminal transition-all duration-200"
              >
                $ ./launch
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-textprimary/25 text-textprimary/60 text-xs px-4 py-2 hover:border-neon/50 hover:text-neon/80 transition-all duration-200"
              >
                git clone
              </a>
            )}
            {!project.liveUrl && !project.githubUrl && (
              <span className="font-mono text-xs text-textprimary/30 border border-textprimary/15 px-4 py-2 inline-block">
                // uso interno corporativo
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Arrows + dots */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
          disabled={current === 0}
          className="font-mono text-xs text-textprimary/40 hover:text-neon disabled:opacity-20 transition-colors"
        >
          ← anterior
        </button>
        <div className="flex gap-1.5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 transition-all duration-200 ${
                i === current ? 'bg-neon' : 'bg-textprimary/20 hover:bg-textprimary/40'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((prev) => Math.min(PROJECTS.length - 1, prev + 1))}
          disabled={current === PROJECTS.length - 1}
          className="font-mono text-xs text-textprimary/40 hover:text-neon disabled:opacity-20 transition-colors"
        >
          próximo →
        </button>
      </div>
    </section>
  );
}
