import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Timeline({ experiences }) {
  const ref = useScrollReveal();
  const [active, setActive] = useState(experiences.length - 1);

  const exp = experiences[active];

  return (
    <section id="trajetoria" ref={ref} className="fade-in-section py-20 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase">// trajetória</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-12">Linha do Tempo</h2>

      {/* Timeline selector */}
      <div className="relative mb-10">
        <div className="absolute top-[10px] left-0 right-0 h-px bg-neon/20" />
        <div className="flex justify-between">
          {experiences.map((e, i) => (
            <button
              key={e.company}
              onClick={() => setActive(i)}
              className="relative flex flex-col items-center group flex-1"
            >
              <div
                className={`w-5 h-5 border-2 flex items-center justify-center mb-3 z-10 transition-all duration-200 ${
                  i === active
                    ? 'border-neon bg-terminal'
                    : 'border-textprimary/30 bg-terminal group-hover:border-neon/60'
                }`}
              >
                {i === active && <div className="w-2 h-2 bg-neon" />}
              </div>
              <p
                className={`font-mono text-[10px] sm:text-xs text-center px-1 leading-snug transition-colors duration-200 ${
                  i === active ? 'text-neon' : 'text-textprimary/40 group-hover:text-textprimary/60'
                }`}
              >
                {e.period.split(' –')[0]}
              </p>
              <p
                className={`font-mono text-[9px] sm:text-[10px] mt-0.5 text-center px-1 transition-colors duration-200 hidden sm:block ${
                  i === active ? 'text-neon/70' : 'text-textprimary/25'
                }`}
              >
                {e.company}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Detail card */}
      <div className="border border-neon/25 bg-surface p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-mono text-neon/60 text-xs tracking-wide mb-1">{exp.period}</p>
            <h3 className="font-mono text-white text-xl font-bold">{exp.role}</h3>
            <p className="font-mono text-neon text-sm mt-1">{exp.company}</p>
          </div>
          <span className="font-mono text-neon/30 text-xs border border-neon/15 px-2 py-1 shrink-0">
            0{active + 1} / 0{experiences.length}
          </span>
        </div>

        <ul className="space-y-2 border-t border-neon/10 pt-4">
          {exp.activities.map((activity) => (
            <li key={activity} className="flex gap-2 text-sm text-textprimary/80">
              <span className="text-neon/60 shrink-0 font-mono">›</span>
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Arrows */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setActive((prev) => Math.max(0, prev - 1))}
          disabled={active === 0}
          className="font-mono text-xs text-textprimary/40 hover:text-neon disabled:opacity-20 transition-colors"
        >
          ← anterior
        </button>
        <button
          onClick={() => setActive((prev) => Math.min(experiences.length - 1, prev + 1))}
          disabled={active === experiences.length - 1}
          className="font-mono text-xs text-textprimary/40 hover:text-neon disabled:opacity-20 transition-colors"
        >
          próximo →
        </button>
      </div>
    </section>
  );
}
