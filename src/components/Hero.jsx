import { useState, useEffect } from 'react';

export default function Hero({ person, hasResume, description, subrole, whoami }) {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const target = person.firstName;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 75);
    return () => clearInterval(timer);
  }, [person.firstName]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated dot grid — CSS only */}
      <div className="hero-dots absolute inset-0 pointer-events-none" aria-hidden />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, #0a0a0f 100%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Terminal prompt */}
        <p className="font-mono text-neon/50 text-sm mb-6 tracking-wider">
          ~/security $ whoami
        </p>

        {/* Name — typewriter effect */}
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-white mb-5 leading-none" style={{ textShadow: '0 0 40px rgba(255,255,255,0.08)' }}>
          <span className={!done ? 'cursor-blink' : ''}>{typed}</span>
          {done && <span className="text-neon text-glow">_</span>}
        </h1>

        {/* whoami — resposta humana, aparece após digitar o nome */}
        {whoami && (
          <p className={`font-mono text-textprimary/60 text-sm md:text-base mb-5 transition-opacity duration-700 ${done ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-neon/50">&gt;</span> {whoami}
          </p>
        )}

        {/* Role */}
        <p className="font-mono text-neon text-xs sm:text-sm md:text-base mb-2 tracking-wide text-glow leading-relaxed">
          {person.role}
        </p>

        {/* Subrole */}
        <p className="font-mono text-textprimary/60 text-[11px] sm:text-xs md:text-sm mb-4 tracking-wide leading-relaxed">
          {subrole}
        </p>

        {description && (
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-textprimary/70 md:text-base">
            {description}
          </p>
        )}

        {/* Location */}
        <p className="font-mono text-textprimary/70 text-xs md:text-sm mb-10 tracking-wide">
          {person.city} &nbsp;·&nbsp; Aberto a oportunidades em Segurança da Informação
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projetos"
            className="font-mono text-sm border border-neon text-neon px-7 py-3 hover:bg-neon hover:text-terminal transition-all duration-200 tracking-wide"
          >
            ver o que eu construí
          </a>
          <a
            href={person.resumePath}
            download
            className={`font-mono text-sm border px-7 py-3 transition-all duration-200 tracking-wide ${
              hasResume
                ? 'border-textprimary/30 text-textprimary/70 hover:border-neon hover:text-neon'
                : 'border-textprimary/10 text-textprimary/20 cursor-not-allowed pointer-events-none'
            }`}
          >
            baixar currículo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-textprimary/25 text-xs animate-bounce select-none">
        scroll ↓
      </div>
    </section>
  );
}
