import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Differentials({ differentials, developing }) {
  const ref = useScrollReveal();

  return (
    <section id="pontos-fortes" ref={ref} className="fade-in-section py-20 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// pontos fortes</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">Por que me chamar</h2>
      <p className="text-textprimary/70 text-sm mb-10 max-w-2xl">
        Onde já sou forte e onde estou crescendo. Sem inflar nenhum dos dois.
      </p>

      {/* Onde já sou forte */}
      <p className="font-mono text-neon/60 text-xs mb-4 tracking-widest uppercase">// onde já sou forte</p>
      <div className="grid sm:grid-cols-2 gap-3 mb-12">
        {differentials.map((item, i) => (
          <div
            key={item.title}
            className="border border-neon/15 bg-surface p-5 hover:border-neon/40 transition-colors duration-200"
          >
            <div className="font-mono text-neon/40 text-xs mb-1">0{i + 1}</div>
            <h3 className="font-mono text-neon text-sm font-bold mb-2">{item.title}</h3>
            <p className="text-textprimary/70 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Onde estou crescendo */}
      {developing?.length > 0 && (
        <>
          <p className="font-mono text-yellow-400/70 text-xs mb-4 tracking-widest uppercase">// onde estou crescendo ↗</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {developing.map((item) => (
              <li key={item.area} className="flex gap-2 border-l-2 border-yellow-400/30 pl-3">
                <div>
                  <span className="font-mono text-textprimary/90 text-sm">{item.area}</span>
                  <span className="block text-textprimary/55 text-xs leading-snug">{item.note}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
