import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience({ experiences }) {
  const ref = useScrollReveal();

  return (
    <section id="experiencia" ref={ref} className="fade-in-section py-20 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase">// experiência</p>
      <h2 className="font-mono text-3xl font-bold text-textprimary mb-10">Trajetória Profissional</h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-neon/30" aria-hidden />

        <div className="space-y-8 pl-8">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="relative border border-neon/10 bg-surface p-5 hover:border-neon/30 transition-colors duration-300"
            >
              {/* Timeline dot */}
              <span
                className="absolute -left-[34px] top-5 w-2.5 h-2.5 bg-neon/80 border border-terminal"
                aria-hidden
              />

              <p className="font-mono text-neon/70 text-xs tracking-wide mb-1">{exp.period}</p>
              <h3 className="font-mono text-textprimary text-lg font-semibold">{exp.role}</h3>
              <p className="font-mono text-textprimary/50 text-sm mb-4">{exp.company}</p>

              <ul className="space-y-1.5">
                {exp.activities.slice(0, 3).map((activity) => (
                  <li key={activity} className="flex gap-2 text-sm text-textprimary/70">
                    <span className="text-neon/60 shrink-0 font-mono">›</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
