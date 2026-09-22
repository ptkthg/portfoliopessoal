import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const ref = useScrollReveal();
  const [showOffensive, setShowOffensive] = useState(false);

  const skillGroups = portfolioData.skillGroups ?? [];
  const softSkills = portfolioData.softSkills ?? [];
  const offensiveSkills = portfolioData.offensiveSkills ?? {};
  const offensiveGroups = Object.entries(offensiveSkills);

  return (
    <section id="skills" ref={ref} className="fade-in-section section max-w-5xl">
      <p className="eyebrow text-glow">// competências</p>
      <h2 className="section-title mb-3">Competências</h2>
      <p className="section-lead mb-8">
        O que eu opero no trabalho, o que uso nos projetos e o que ainda estou estudando. Cada nível aqui é honesto, não inflei nada.
      </p>

      {/* Técnicas */}
      <div className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="card card-hover p-4 sm:p-5">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-neon/15 pb-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon">
                {group.label}
              </h3>
              {group.level && (
                <span className="font-mono text-[10px] uppercase tracking-wider text-textprimary/45">
                  {group.level}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-neon/20 px-2 py-1 font-mono text-[11px] leading-none text-textprimary/75 transition-colors duration-200 hover:border-neon/50 hover:text-neon/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pessoais */}
      {softSkills.length > 0 && (
        <>
          <p className="eyebrow mb-4 mt-10 text-neon/60">// pessoais</p>
          <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {softSkills.map((skill) => (
              <li key={skill} className="flex gap-2 text-sm leading-relaxed text-textprimary/80">
                <span className="shrink-0 font-mono text-neon/60">›</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Ofensivo — recolhido por padrão: é estudo, não o eixo principal */}
      {offensiveGroups.length > 0 && (
        <div className="mt-10">
          <button
            type="button"
            onClick={() => setShowOffensive((v) => !v)}
            aria-expanded={showOffensive}
            className="tap w-full justify-between border border-neon/15 bg-surface px-4 font-mono text-xs uppercase tracking-widest text-neon/70 transition-colors duration-200 hover:border-neon/40 hover:text-neon"
          >
            <span>// ofensivo (estudo de laboratório)</span>
            <span aria-hidden className="text-neon/50">{showOffensive ? '−' : '+'}</span>
          </button>

          {showOffensive && (
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {offensiveGroups.map(([label, items]) => (
                <div key={label} className="card p-4 sm:p-5">
                  <h3 className="mb-3 border-b border-neon/15 pb-2 font-mono text-xs uppercase tracking-widest text-neon">
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="border border-neon/20 px-2 py-1 font-mono text-[11px] leading-none text-textprimary/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
