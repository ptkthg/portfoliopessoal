export default function Hero({ name, areas, role, tagline, stats, resumePath, imagePath, imageAlt, imagePosition }) {
  return (
    <section id="hero" className="hero-shell relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:py-28">
      <div className="hero-dots pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:gap-16">
        <div className="min-w-0 text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 border border-neon/25 bg-neon/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neon sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon shadow-[0_0_12px_#00ff88]" />
            Disponível para oportunidades
          </p>

          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-textprimary/50 sm:text-xs">
            Portfólio / segurança da informação
          </p>
          <h1 className="hero-title mb-4 font-mono font-bold tracking-tight text-white">
            {name}<span className="text-neon">.</span>
          </h1>
          {role && <p className="mb-5 font-mono text-sm font-medium text-neon sm:text-base">{role}</p>}
          {tagline && <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-textprimary/75 sm:text-base lg:mx-0">{tagline}</p>}

          <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#projetos" className="tap gap-2 border border-neon bg-neon px-5 font-mono text-xs font-semibold uppercase tracking-wider text-terminal transition-colors hover:bg-[#80ffc0]">
              Explorar projetos <span aria-hidden="true">↗</span>
            </a>
            {resumePath && (
              <a href={resumePath} target="_blank" rel="noreferrer" className="tap border border-textprimary/25 px-5 font-mono text-xs uppercase tracking-wider text-textprimary/80 transition-colors hover:border-neon/60 hover:text-neon">
                Ver currículo
              </a>
            )}
          </div>

          {stats?.length > 0 && (
            <ul className="mx-auto mb-7 grid max-w-xl grid-cols-3 border-y border-neon/20 py-4 text-left lg:mx-0">
              {stats.map((item) => (
                <li key={item.label} className="min-w-0 border-r border-neon/15 px-2 first:pl-0 last:border-r-0 last:pr-0 sm:px-5">
                  <span className="block font-mono text-lg font-bold text-white sm:text-2xl">{item.value}</span>
                  <span className="mt-1 block text-[10px] uppercase leading-tight tracking-wide text-textprimary/55 sm:text-xs">{item.label}</span>
                </li>
              ))}
            </ul>
          )}

          {areas?.length > 0 && (
            <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {areas.map((area) => <li key={area} className="border border-neon/20 bg-surface/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-textprimary/65">{area}</li>)}
            </ul>
          )}
        </div>

        {imagePath && (
          <div className="relative order-first mx-auto w-40 sm:w-52 lg:order-last lg:w-full lg:max-w-[360px]">
            <div className="absolute -inset-2 border border-neon/25 lg:-inset-3" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden border border-neon/40 bg-surface lg:aspect-[4/5]">
              <img src={imagePath} alt={imageAlt || name} fetchPriority="high" className="h-full w-full object-cover" style={{ objectPosition: imagePosition || 'center' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-terminal/35 via-transparent to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden border border-neon/35 bg-terminal px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-neon lg:block">
              Blue Team / SecOps
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
