import { useState, useEffect } from 'react';
import { navItems, portfolioData } from '../data/portfolioData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  const resumePath = portfolioData.person.resumePath;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Marca no menu a seção que está na tela.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Menu aberto: trava o scroll do fundo e fecha no Esc.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-neon/10 bg-terminal/95 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a
          href="#hero"
          className="tap -ml-1 justify-start font-mono text-sm font-semibold tracking-wider text-neon"
          aria-label="Voltar ao topo"
        >
          pt<span className="text-textprimary/40">@</span>security
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`font-mono text-xs uppercase tracking-wide transition-colors duration-200 ${
                    active === item.id
                      ? 'text-neon'
                      : 'text-textprimary/50 hover:text-neon'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {resumePath && (
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              className="border border-neon/40 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-neon transition-all duration-200 hover:bg-neon hover:text-terminal"
            >
              currículo
            </a>
          )}
        </div>

        {/* Hamburger — alvo de toque de 44px, antes eram 16×18px */}
        <button
          type="button"
          className="tap -mr-2 text-textprimary/70 transition-colors duration-200 hover:text-neon lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <>
          {/* Toque fora fecha */}
          <div
            className="fixed inset-0 top-14 -z-10 bg-terminal/60 lg:hidden"
            onClick={close}
            aria-hidden
          />
          <div className="max-h-[calc(100svh-3.5rem)] overflow-y-auto border-t border-neon/10 bg-terminal lg:hidden">
            <ul className="mx-auto max-w-5xl px-5 py-2 sm:px-6">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-neon/5 last:border-0">
                  <a
                    href={`#${item.id}`}
                    onClick={close}
                    className={`tap w-full justify-start gap-3 font-mono text-sm uppercase tracking-widest transition-colors duration-200 ${
                      active === item.id ? 'text-neon' : 'text-textprimary/65 hover:text-neon'
                    }`}
                  >
                    <span className="text-neon/40">›</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {resumePath && (
              <div className="mx-auto max-w-5xl px-5 pb-5 pt-2 sm:px-6">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                  className="tap w-full gap-2 border border-neon bg-neon/10 font-mono text-xs uppercase tracking-widest text-neon"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  baixar currículo
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
}
