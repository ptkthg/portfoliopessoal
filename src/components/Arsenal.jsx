import { useScrollReveal } from '../hooks/useScrollReveal';

// Mapeia o nome da categoria para um "comando" estilo terminal.
const CMD = {
  'Recon & Scanning': 'ls recon/',
  'Web AppSec': 'ls webapp/',
  'Exploração': 'ls exploit/',
  'Senhas & Cracking': 'ls passwords/',
  'Wireless': 'ls wireless/',
  'Análise de tráfego': 'ls traffic/',
};

export default function Arsenal({ arsenal }) {
  const ref = useScrollReveal();

  if (!arsenal) return null;
  const categories = Object.entries(arsenal);

  return (
    <section id="arsenal" ref={ref} className="fade-in-section py-20 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// arsenal — kali linux</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">Ferramentas por categoria</h2>
      <p className="text-textprimary/50 text-sm mb-10 max-w-2xl">
        Ferramentas que uso em estudos de pentest e na prática de bug bounty.
      </p>

      <div className="border border-neon/30 bg-surface shadow-neon">
        {/* Terminal bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-neon/20">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c940]" />
          </div>
          <span className="font-mono text-xs tracking-wide text-textprimary/40">patrick@kali: ~/arsenal</span>
          <div className="w-16" />
        </div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neon/10">
          {categories.map(([category, tools]) => (
            <div key={category} className="bg-surface p-5">
              <p className="font-mono text-xs mb-3 pb-2 border-b border-neon/10">
                <span className="text-neon/60">$</span>{' '}
                <span className="text-neon">{CMD[category] ?? `ls ${category}/`}</span>
              </p>
              <p className="font-mono text-textprimary/40 text-[11px] uppercase tracking-widest mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs border border-neon/20 text-textprimary/70 px-2 py-0.5 hover:border-neon/50 hover:text-neon/80 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
