import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Differentials({ differentials }) {
  const ref = useScrollReveal();

  return (
    <section id="diferenciais" ref={ref} className="fade-in-section py-20 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase">// diferenciais</p>
      <h2 className="font-mono text-3xl font-bold text-textprimary mb-10">O que me distingue</h2>

      <div className="grid sm:grid-cols-2 gap-3">
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
    </section>
  );
}
