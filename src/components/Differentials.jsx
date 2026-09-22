import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Differentials({ differentials, developing }) {
  const ref = useScrollReveal();

  return (
    <section id="pontos-fortes" ref={ref} className="fade-in-section section max-w-4xl">
      <p className="eyebrow text-glow">// pontos fortes</p>
      <h2 className="section-title mb-3">Por que me chamar</h2>
      <p className="section-lead mb-8">
        Onde já sou forte e onde estou crescendo. Sem inflar nenhum dos dois.
      </p>

      {/* Onde já sou forte */}
      <div className="mb-10 grid gap-3 sm:grid-cols-2">
        {differentials.map((item, i) => (
          <div
            key={item.title}
            className="card card-hover group relative overflow-hidden p-5"
          >
            <span
              className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-neon/60 transition-transform duration-300 group-hover:scale-y-100"
              aria-hidden
            />
            <div className="mb-1 font-mono text-xs text-neon/40">0{i + 1}</div>
            <h3 className="mb-2 font-mono text-sm font-bold text-neon">{item.title}</h3>
            <p className="text-sm leading-relaxed text-textprimary/70">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Onde estou crescendo */}
      {developing?.length > 0 && (
        <>
          <p className="eyebrow mb-4 text-yellow-400/70">// onde estou crescendo ↗</p>
          <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {developing.map((item) => (
              <li key={item.area} className="border-l-2 border-yellow-400/30 pl-3">
                <span className="font-mono text-sm text-textprimary/90">{item.area}</span>
                <span className="block text-xs leading-snug text-textprimary/55">{item.note}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
