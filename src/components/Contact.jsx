import { useScrollReveal } from '../hooks/useScrollReveal';

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

export default function Contact({ person, whatISeek }) {
  const ref = useScrollReveal();

  const links = [
    {
      label: 'Email',
      href: `mailto:${person.email}`,
      icon: MailIcon,
      display: person.email,
      hint: 'respondo rápido',
    },
    {
      label: 'LinkedIn',
      href: person.linkedin,
      icon: LinkedInIcon,
      display: 'linkedin.com/in/ptkthg',
      hint: 'histórico completo',
    },
    {
      label: 'GitHub',
      href: person.github,
      icon: GitHubIcon,
      display: 'github.com/ptkthg',
      hint: 'código dos projetos',
    },
  ];

  return (
    <section id="contato" ref={ref} className="fade-in-section section max-w-4xl">
      <p className="eyebrow text-glow">// contato</p>
      <h2 className="section-title mb-3">O que eu busco</h2>

      {whatISeek && (
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-textprimary/80 sm:text-base">
          {whatISeek}
        </p>
      )}

      <p className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-textprimary/55">
        <span>{person.city}</span>
        <span className="text-neon/40" aria-hidden>·</span>
        <span className="text-neon/80">aberto a oportunidades</span>
      </p>

      {/* Currículo em destaque */}
      {person.resumePath && (
        <a
          href={person.resumePath}
          target="_blank"
          rel="noreferrer"
          className="group mb-3 flex items-center gap-4 border border-neon/50 bg-neon/5 p-5 transition-all duration-200 hover:border-neon hover:bg-neon/10"
        >
          <span className="shrink-0 text-neon">
            <FileIcon />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-mono text-sm font-semibold text-neon">
              Baixar currículo (PDF)
            </span>
            <span className="block text-xs text-textprimary/60">
              Experiência, competências e projetos em uma página
            </span>
          </span>
          <span className="shrink-0 font-mono text-neon/50 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
            ↗
          </span>
        </a>
      )}

      <div className="grid gap-3 sm:grid-cols-3">
        {links.map(({ label, href, icon: Icon, display, hint }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={label}
            className="card card-hover group flex items-center gap-3 p-4"
          >
            <span className="shrink-0 text-neon/60 transition-colors duration-200 group-hover:text-neon">
              <Icon />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-mono text-xs text-textprimary/75 transition-colors duration-200 group-hover:text-neon/90">
                {display}
              </span>
              <span className="block text-[11px] text-textprimary/45">{hint}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
