import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects({ projects }) {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const PROJECTS = projects ?? [];
  const project = PROJECTS[current];
  const isOperational = project.status === 'OPERATIONAL';

  return (
    <section id="projetos" ref={ref} className="fade-in-section py-20 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// projetos</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-4">Projetos</h2>
      <p className="text-textprimary/70 text-sm mb-8 max-w-2xl">
        Ferramentas que eu mesmo construí pra resolver chatices reais do dia a dia de segurança. Duas estão no ar, é só abrir e testar.
      </p>

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
          {project.liveUrl ? (
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-neon tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              live
            </span>
          ) : (
            <div className="w-16" />
          )}
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
                className="border border-neon bg-neon/10 text-neon text-xs px-4 py-2 hover:bg-neon hover:text-terminal transition-all duration-200"
              >
                abrir app ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-textprimary/25 text-textprimary/60 text-xs px-4 py-2 hover:border-neon/50 hover:text-neon/80 transition-all duration-200"
              >
                ver código
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
