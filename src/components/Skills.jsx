import { useScrollReveal } from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const ref = useScrollReveal();
  const skillGroups = portfolioData.skillGroups ?? [];
  const softSkills = portfolioData.softSkills ?? [];
  const offensiveSkills = portfolioData.offensiveSkills ?? {};
  const offensiveGroups = Object.entries(offensiveSkills);

  return (
    <section id="skills" ref={ref} className="fade-in-section py-20 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// competências</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">Competências</h2>
      <p className="text-textprimary/70 text-sm mb-10 max-w-2xl">
        O que eu já faço com segurança, o que uso no dia a dia e o que ainda estou estudando. Cada nível aqui é honesto, não inflei nada.
      </p>

      <p className="font-mono text-neon/60 text-xs mb-4 tracking-widest uppercase">// técnicas</p>
      <div className="grid md:grid-cols-2 gap-5">
        {skillGroups.map((group) => (
          <div key={group.label} className="border border-neon/15 bg-surface p-6 hover:border-neon/35 transition-colors duration-300">
            <div className="flex items-center justify-between mb-5 pb-2 border-b border-neon/15">
              <h3 className="font-mono text-neon text-xs uppercase tracking-widest">{group.label}</h3>
              {group.level && (
                <span className="font-mono text-textprimary/45 text-[10px] uppercase tracking-wider whitespace-nowrap">
                  {group.level}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs border border-neon/20 text-textprimary/75 px-2.5 py-1 hover:border-neon/50 hover:text-neon/80 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {softSkills.length > 0 && (
        <>
          <p className="font-mono text-neon/60 text-xs mt-10 mb-4 tracking-widest uppercase">// pessoais</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {softSkills.map((skill) => (
              <li key={skill} className="flex gap-2 text-sm text-textprimary/80 leading-relaxed">
                <span className="text-neon/60 shrink-0 font-mono">›</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {offensiveGroups.length > 0 && (
        <>
          <p className="font-mono text-neon/60 text-xs mt-10 mb-4 tracking-widest uppercase">// ofensivo (estudo)</p>
          <div className="grid md:grid-cols-2 gap-5">
            {offensiveGroups.map(([label, items]) => (
              <div key={label} className="border border-neon/15 bg-surface p-6 hover:border-neon/35 transition-colors duration-300">
                <h3 className="font-mono text-neon text-xs uppercase tracking-widest mb-5 pb-2 border-b border-neon/15">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs border border-neon/20 text-textprimary/70 px-2.5 py-1 hover:border-neon/50 hover:text-neon/80 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
