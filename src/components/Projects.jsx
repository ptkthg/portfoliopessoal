import { useScrollReveal } from '../hooks/useScrollReveal';

const IOC_STACK = ['React', 'Vite', 'Tailwind', 'Vercel', 'Groq', 'OSINT APIs'];
const KQL_TAGS = ['KQL', 'Defender XDR', 'MITRE ATT&CK', 'Threat Hunting'];

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
      </div>
    </section>
  );
}
