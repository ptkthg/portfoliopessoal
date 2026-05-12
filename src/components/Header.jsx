import { useState, useEffect } from 'react';
import { navItems } from '../data/portfolioData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-terminal/95 border-b border-neon/10 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-neon text-sm font-semibold tracking-wider">
          pt<span className="text-textprimary/40">@</span>blueteam
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="font-mono text-xs text-textprimary/50 hover:text-neon transition-colors duration-200 tracking-wide uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden font-mono text-lg text-textprimary/60 hover:text-neon transition-colors duration-200 leading-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-neon/10 bg-terminal/98">
          <ul className="max-w-5xl mx-auto px-6 py-5 space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  className="font-mono text-sm text-textprimary/60 hover:text-neon transition-colors duration-200 tracking-widest uppercase flex items-center gap-2"
                >
                  <span className="text-neon/40">›</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
