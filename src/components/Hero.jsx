import { useState, useEffect } from 'react';

export default function Hero({ name, areas }) {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(name.slice(0, i));
      if (i >= name.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 90);
    return () => clearInterval(timer);
  }, [name]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle dot grid — mantém a estética cyber sem poluir */}
      <div className="hero-dots absolute inset-0 pointer-events-none opacity-50" aria-hidden />

      {/* Vignette overlay — foca o olhar no centro */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 35%, #0a0a0f 100%)' }}
        aria-hidden
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Nome em destaque */}
        <h1
          className="font-mono text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-none"
          style={{ textShadow: '0 0 50px rgba(255,255,255,0.08)' }}
        >
          <span className={!done ? 'cursor-blink' : ''}>{typed}</span>
          {done && <span className="text-neon text-glow">_</span>}
        </h1>

        {/* Áreas de interesse profissional */}
        <p className="font-mono text-xs sm:text-sm md:text-base text-textprimary/70 tracking-wide leading-relaxed max-w-2xl mx-auto">
          {areas.map((area, i) => (
            <span key={area} className="whitespace-nowrap">
              {i > 0 && <span className="text-neon/50 mx-2.5" aria-hidden>·</span>}
              {area}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
