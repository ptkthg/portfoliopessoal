import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import EvidenceGallery from './EvidenceGallery';

export default function Projects({ projects }) {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const PROJECTS = projects ?? [];
  const project = PROJECTS[current];
  const isOperational = project.status === 'OPERATIONAL';

  return (
    <section id="projetos" ref={ref} className="fade-in-section section max-w-5xl">
      <p className="eyebrow text-glow">// projetos</p>
      <h2 className="section-title mb-3">Projetos</h2>
      <p className="section-lead mb-8">
        Ferramentas que eu mesmo construí pra resolver chatices reais do dia a dia de segurança. Duas estão no ar, é só abrir e testar.
      </p>

      {/* Abas — rolam na horizontal no mobile, com máscara indicando que há mais */}
      <div className="relative mb-8">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto border-b border-neon/10 sm:gap-5">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setCurrent(i)}
              aria-current={i === current ? 'true' : undefined}
              className={`tap shrink-0 whitespace-nowrap border-b-2 px-1 font-mono text-xs transition-all duration-200 ${
                i === current
                  ? 'border-neon text-neon'
                  : 'border-transparent text-textprimary/40 hover:text-textprimary/70'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
        {/* Sombra de borda: sinaliza conteúdo além da tela */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-terminal to-transparent sm:hidden" />
      </div>

      {/* Card */}
      <article
        className={`relative overflow-hidden border bg-surface transition-colors duration-300 ${
          isOperational ? 'scanline border-neon/60 shadow-neon' : 'border-textprimary/20'
        }`}
      >
        {/* Barra do terminal */}
        <div
          className={`flex items-center justify-between gap-2 border-b bg-black/40 px-3 py-2.5 sm:px-4 ${
            isOperational ? 'border-neon/20' : 'border-textprimary/10'
          }`}
        >
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c940]" />
          </div>
          <span className="truncate font-mono text-[11px] tracking-wide text-textprimary/40 sm:text-xs">
            {project.filename}
          </span>
          {project.liveUrl ? (
            <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-neon">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
              live
            </span>
          ) : (
            <span className="w-8 shrink-0 sm:w-12" aria-hidden />
          )}
        </div>

        <div className="p-4 sm:p-6">
          {/* Bloco de log: rola na horizontal para não quebrar o alinhamento
              dos prefixos, que só funciona em monoespaçado sem wrap. */}
          <div className="terminal-scroll -mx-4 mb-4 border-y border-neon/5 bg-black/25 px-4 py-3 sm:mx-0 sm:rounded-none sm:border-x">
            <pre className="w-max min-w-full font-mono text-[11px] leading-relaxed sm:text-xs">
              <span className="text-textprimary/35">$ ./{project.filename.split('.')[0]} --start</span>
              {'\n'}
              <span className="text-textprimary/35">[INIT] </span>
              <span className="font-semibold text-white">
                {project.title}{project.version ? ` ${project.version}` : ''}
              </span>
              {project.logs.map((log) => (
                <span key={log.prefix}>
                  {'\n'}
                  <span className="text-textprimary/35">{log.prefix}</span>{' '}
                  <span className="text-textprimary/80">{log.value}</span>
                </span>
              ))}
              {'\n'}
              <span className="text-textprimary/35">[STATUS]</span>{' '}
              <span className={`font-semibold ${project.statusColor}`}>{project.status}</span>
            </pre>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-textprimary/70">
            {project.description}
          </p>

          {/* Mídia opcional: demonstração animada do projeto em uso. */}
          {project.media && (
            <figure className="mb-5">
              <img
                src={project.media}
                alt={`Demonstração do ${project.title} em funcionamento`}
                loading="lazy"
                className={`w-full border ${
                  isOperational ? 'border-neon/25' : 'border-textprimary/15'
                }`}
              />
              {project.mediaCaption && (
                <figcaption className="mt-2 text-center text-[11px] text-textprimary/40">
                  {project.mediaCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Evidências visuais: só renderiza quando o projeto define `evidence`. */}
          {project.evidence && (
            <EvidenceGallery evidence={project.evidence} accent={isOperational} />
          )}

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`border px-2 py-0.5 font-mono text-[11px] ${
                  isOperational
                    ? 'border-neon/40 text-neon'
                    : 'border-textprimary/20 text-textprimary/50'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="tap gap-1.5 border border-neon bg-neon/10 px-4 font-mono text-xs uppercase tracking-wider text-neon transition-all duration-200 hover:bg-neon hover:text-terminal"
              >
                abrir app ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="tap gap-1.5 border border-textprimary/25 px-4 font-mono text-xs uppercase tracking-wider text-textprimary/60 transition-all duration-200 hover:border-neon/50 hover:text-neon/80"
              >
                ver código
              </a>
            )}
            {!project.liveUrl && !project.githubUrl && (
              <span className="tap border border-textprimary/15 px-4 font-mono text-xs text-textprimary/30">
                // uso interno corporativo
              </span>
            )}
          </div>
        </div>
      </article>

      {/* Navegação */}
      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
          disabled={current === 0}
          className="tap px-2 font-mono text-xs text-textprimary/50 transition-colors hover:text-neon disabled:opacity-20"
        >
          ← anterior
        </button>
        <div className="flex items-center gap-0.5">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Ir para ${p.title}`}
              aria-current={i === current ? 'true' : undefined}
              className="tap min-w-[36px] px-1"
            >
              <span
                className={`block h-1.5 w-full transition-all duration-200 ${
                  i === current ? 'bg-neon' : 'bg-textprimary/20 hover:bg-textprimary/40'
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setCurrent((prev) => Math.min(PROJECTS.length - 1, prev + 1))}
          disabled={current === PROJECTS.length - 1}
          className="tap px-2 font-mono text-xs text-textprimary/50 transition-colors hover:text-neon disabled:opacity-20"
        >
          próximo →
        </button>
      </div>
    </section>
  );
}
