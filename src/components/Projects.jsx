import { useScrollReveal } from '../hooks/useScrollReveal';

const STACK_TAGS = ['React', 'Vite', 'Tailwind', 'Vercel', 'Groq', 'OSINT APIs'];

export default function Projects({ iocEnricher }) {
  const ref = useScrollReveal();

  const liveUrl = iocEnricher?.liveUrl ?? 'https://iocenricher.vercel.app';
  const githubUrl = iocEnricher?.githubUrl ?? 'https://github.com/ptkthg/iocenricher';

  return (
    <section id="projetos" ref={ref} className="fade-in-section py-20 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase">// projetos</p>
      <h2 className="font-mono text-3xl font-bold text-textprimary mb-10">Lab & Ferramentas</h2>

      {/* Terminal card */}
      <div className="border border-neon/60 bg-surface shadow-neon max-w-2xl">
        {/* Terminal header bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-neon/20">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c940]" />
          </div>
          <span className="font-mono text-textprimary/40 text-xs tracking-wide">
            iocenricher.exe
          </span>
          <div className="w-16" />
        </div>

        {/* Terminal body */}
        <div className="p-6 font-mono text-sm space-y-1">
          <p className="text-textprimary/40 mb-3">$ ./iocenricher --start</p>

          <p>
            <span className="text-textprimary/40">[INIT]</span>{' '}
            <span className="glitch-hover text-textprimary font-semibold">IOC Enricher v1.0.0</span>
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
            <span className="text-neon font-semibold">OPERATIONAL</span>
          </p>

          <p className="text-textprimary/40 text-xs pt-2 pb-1 border-t border-neon/10">
            Enriquece IP, domínio, URL ou hash com fontes OSINT + análise por IA
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 pt-3">
            {STACK_TAGS.map((tag) => (
              <span
                key={tag}
                className="border border-neon/40 text-neon text-xs px-2 py-0.5 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-5">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-neon text-neon text-xs px-4 py-2 hover:bg-neon hover:text-terminal transition-all duration-200 font-mono"
            >
              $ ./launch
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-textprimary/25 text-textprimary/60 text-xs px-4 py-2 hover:border-neon/50 hover:text-neon/80 transition-all duration-200 font-mono"
            >
              git clone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
