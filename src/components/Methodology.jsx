import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Methodology({ methodology, methodologyText, frameworks }) {
  const ref = useScrollReveal();

  if (!methodology?.length) return null;

  return (
    <section id="metodologia" ref={ref} className="fade-in-section py-20 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// metodologia de pentest</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">Do recon ao relatório</h2>
      {methodologyText && (
        <p className="text-textprimary/55 text-sm mb-10 max-w-2xl leading-relaxed">{methodologyText}</p>
      )}

      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {methodology.map((item, i) => (
          <li
            key={item.step}
            className="border border-neon/15 bg-surface p-4 hover:border-neon/40 transition-colors duration-200"
          >
            <div className="font-mono text-neon/40 text-xs mb-1">0{i + 1}</div>
            <div className="font-mono text-neon text-sm font-bold mb-2">{item.step}</div>
            <p className="text-textprimary/60 text-xs leading-snug">{item.desc}</p>
          </li>
        ))}
      </ol>

      {frameworks?.length > 0 && (
        <div className="mt-10">
          <p className="font-mono text-neon/60 text-xs mb-3 tracking-widest uppercase">// frameworks & padrões</p>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((fw) => (
              <span
                key={fw}
                className="font-mono text-xs border border-neon/20 text-textprimary/70 px-3 py-1 hover:border-neon/50 hover:text-neon/80 transition-colors duration-200"
              >
                {fw}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
