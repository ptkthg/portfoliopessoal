import { useScrollReveal } from '../hooks/useScrollReveal';

const IOC_STACK = ['React', 'Vite', 'Tailwind', 'Vercel', 'Groq', 'OSINT APIs'];
const KQL_TAGS = ['KQL', 'Defender XDR', 'MITRE ATT&CK', 'Threat Hunting'];
const STATECRAFT_STACK = ['Next.js 15', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Groq AI', 'Vercel'];

export default function Projects({ iocEnricher }) {
  const ref = useScrollReveal();

  const liveUrl = iocEnricher?.liveUrl ?? 'https://iocenricher.vercel.app';
  const githubUrl = iocEnricher?.githubUrl ?? 'https://github.com/ptkthg/iocenricher';

  return (
    <section id="projetos" ref={ref} className="fade-in-section py-20 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// projetos</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-10">Lab & Ferramentas</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {/* IOC Enricher — deployed app */}
        <div className="border border-neon/60 bg-surface shadow-neon">
          <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-neon/20">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c940]" />
            </div>
            <span className="font-mono text-textprimary/40 text-xs tracking-wide">iocenricher.exe</span>
            <div className="w-16" />
          </div>

          <div className="p-6 font-mono text-sm space-y-1">
            <p className="text-textprimary/40 mb-3">$ ./iocenricher --start</p>
            <p>
              <span className="text-textprimary/40">[INIT]</span>{' '}
              <span className="glitch-hover text-white font-semibold">IOC Enricher v1.0.0</span>
            </p>
            <p>
              <span className="text-textprimary/40">[SRC] &nbsp;</span>{' '}
              <span className="text-textprimary/80">11 OSINT sources loaded</span>
            </p>
            <p>
              <span className="text-textprimary/40">[AI] &nbsp;&nbsp;</span>{' '}
              <span className="text-textprimary/80">Groq Llama 3.3 70B active</span>
            </p>
            <p className="pb-2">
              <span className="text-textprimary/40">[STATUS]</span>{' '}
              <span className="text-neon font-semibold text-glow">OPERATIONAL</span>
            </p>

            <p className="text-textprimary/40 text-xs pt-2 pb-1 border-t border-neon/10">
              Enriquece IP, domínio, URL ou hash com OSINT + análise por IA
            </p>

            <div className="flex flex-wrap gap-2 pt-3">
              {IOC_STACK.map((tag) => (
                <span key={tag} className="border border-neon/40 text-neon text-xs px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-5">
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-neon text-neon text-xs px-4 py-2 hover:bg-neon hover:text-terminal transition-all duration-200"
              >
                $ ./launch
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-textprimary/25 text-textprimary/60 text-xs px-4 py-2 hover:border-neon/50 hover:text-neon/80 transition-all duration-200"
              >
                git clone
              </a>
            </div>
          </div>
        </div>

        {/* KQL Hunting Pack — internal */}
        <div className="border border-textprimary/20 bg-surface hover:border-textprimary/40 transition-colors duration-300">
          <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-textprimary/10">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c940]" />
            </div>
            <span className="font-mono text-textprimary/30 text-xs tracking-wide">hunting_pack.kql</span>
            <div className="w-16" />
          </div>

          <div className="p-6 font-mono text-sm space-y-1">
            <p className="text-textprimary/40 mb-3">$ cat hunting_pack.kql | head</p>
            <p>
              <span className="text-textprimary/40">[INIT]</span>{' '}
              <span className="glitch-hover text-white font-semibold">XDR Hunting Pack</span>
            </p>
            <p>
              <span className="text-textprimary/40">[ENV] &nbsp;</span>{' '}
              <span className="text-textprimary/80">Microsoft Defender XDR</span>
            </p>
            <p>
              <span className="text-textprimary/40">[MAP] &nbsp;</span>{' '}
              <span className="text-textprimary/80">MITRE ATT&CK aligned</span>
            </p>
            <p>
              <span className="text-textprimary/40">[RULES]</span>{' '}
              <span className="text-textprimary/80">Password spray · LOLBins · PowerShell · Outlook</span>
            </p>
            <p className="pb-2">
              <span className="text-textprimary/40">[STATUS]</span>{' '}
              <span className="text-yellow-400/90 font-semibold">INTERNAL</span>
            </p>

            <p className="text-textprimary/40 text-xs pt-2 pb-1 border-t border-textprimary/10">
              Queries de threat hunting para triagem e investigação em XDR
            </p>

            <div className="flex flex-wrap gap-2 pt-3">
              {KQL_TAGS.map((tag) => (
                <span key={tag} className="border border-textprimary/20 text-textprimary/50 text-xs px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-5">
              <span className="font-mono text-xs text-textprimary/30 border border-textprimary/15 px-4 py-2 inline-block">
                // uso interno corporativo
              </span>
            </div>
          </div>
        </div>

        {/* Statecraft — deployed platform */}
        <div className="border border-neon/60 bg-surface shadow-neon md:col-span-2">
          <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-neon/20">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c940]" />
            </div>
            <span className="font-mono text-textprimary/40 text-xs tracking-wide">statecraft.next</span>
            <div className="w-16" />
          </div>

          <div className="p-6 font-mono text-sm md:grid md:grid-cols-2 md:gap-10">
            <div className="space-y-1">
              <p className="text-textprimary/40 mb-3">$ ./statecraft --start</p>
              <p>
                <span className="text-textprimary/40">[INIT]&nbsp;&nbsp;</span>{' '}
                <span className="glitch-hover text-white font-semibold">Statecraft v1.0.0</span>
              </p>
              <p>
                <span className="text-textprimary/40">[FEEDS]&nbsp;</span>{' '}
                <span className="text-textprimary/80">19 RSS sources + NVD API active</span>
              </p>
              <p>
                <span className="text-textprimary/40">[AI]&nbsp;&nbsp;&nbsp;</span>{' '}
                <span className="text-textprimary/80">Groq Llama 3.3 70B · PT-BR briefings</span>
              </p>
              <p>
                <span className="text-textprimary/40">[KEV]&nbsp;&nbsp;</span>{' '}
                <span className="text-textprimary/80">CISA KEV + EPSS enrichment</span>
              </p>
              <p className="pb-2">
                <span className="text-textprimary/40">[STATUS]</span>{' '}
                <span className="text-neon font-semibold text-glow">OPERATIONAL</span>
              </p>
              <p className="text-textprimary/40 text-xs pt-2 pb-1 border-t border-neon/10">
                Plataforma de threat intelligence em PT-BR: CVEs, IOCs, notícias e briefings por IA
              </p>
              <div className="flex flex-wrap gap-2 pt-3">
                {STATECRAFT_STACK.map((tag) => (
                  <span key={tag} className="border border-neon/40 text-neon text-xs px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-5">
                <a
                  href="https://statecraftcyber.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-neon text-neon text-xs px-4 py-2 hover:bg-neon hover:text-terminal transition-all duration-200"
                >
                  $ ./launch
                </a>
              </div>
            </div>

            <div className="mt-6 md:mt-0 border-t border-neon/10 md:border-t-0 md:border-l md:border-neon/10 md:pl-10 pt-4 md:pt-0 space-y-3 text-xs text-textprimary/60">
              <p className="text-textprimary/30 uppercase tracking-widest text-[10px] mb-4">// módulos ativos</p>
              <p><span className="text-neon/70">+</span> Threat Briefings gerados por IA a cada hora</p>
              <p><span className="text-neon/70">+</span> CVEs das últimas 72h com CVSS, EPSS e CISA KEV</p>
              <p><span className="text-neon/70">+</span> Notícias de 19 feeds globais classificadas por tipo</p>
              <p><span className="text-neon/70">+</span> IOC Search com lookup em fontes OSINT</p>
              <p><span className="text-neon/70">+</span> Pipeline: NVD API + CISA KEV + OTX AlienVault</p>
              <p><span className="text-neon/70">+</span> DB com cache de artigos via Prisma + PostgreSQL</p>
              <p className="pt-3 text-textprimary/30 border-t border-textprimary/10">
                Construído do zero como lab pessoal de threat intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
