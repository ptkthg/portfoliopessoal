import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Galeria de evidências de um projeto: grid de cards responsivo com lightbox.
 * Cada card traz o número da etapa, a captura e a legenda técnica.
 * Quando a imagem ainda não existe em `public/`, o card cai num estado de
 * placeholder em vez de mostrar imagem quebrada.
 */
export default function EvidenceGallery({ evidence, accent = true }) {
  const items = evidence?.items ?? [];
  const [openIndex, setOpenIndex] = useState(null);
  const [failed, setFailed] = useState({});
  const closeRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const isOpen = openIndex !== null;
  const total = items.length;

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTriggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta) => setOpenIndex((prev) => (prev === null ? prev : (prev + delta + total) % total)),
    [total]
  );

  // Teclado do lightbox: Esc fecha, setas navegam.
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, step]);

  if (total === 0) return null;

  const border = accent ? 'border-neon/25' : 'border-textprimary/15';
  const borderHover = accent ? 'hover:border-neon/60' : 'hover:border-textprimary/40';
  const active = items[openIndex] ?? null;

  const open = (i, e) => {
    lastTriggerRef.current = e.currentTarget;
    setOpenIndex(i);
  };

  return (
    <section className={`mb-5 pt-4 border-t ${accent ? 'border-neon/10' : 'border-textprimary/10'}`}>
      <p className="font-mono text-neon text-[10px] tracking-widest uppercase mb-2 text-glow">
        // {evidence.label ?? 'evidências visuais'}
      </p>
      {evidence.intro && (
        <p className="text-textprimary/50 text-xs mb-4 max-w-2xl">{evidence.intro}</p>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
        {items.map((item, i) => (
          <li key={item.id ?? item.src}>
            <button
              type="button"
              onClick={(e) => open(i, e)}
              className={`group w-full h-full text-left border ${border} ${borderHover} bg-black/30 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-neon`}
              aria-label={`Ampliar evidência: ${item.title}`}
            >
              <div className="flex items-center justify-between px-3 py-2 bg-black/40 border-b border-inherit">
                <span className="font-mono text-[10px] tracking-widest uppercase text-neon">
                  passo {i + 1} de {total}
                </span>
                <span className="font-mono text-[10px] text-textprimary/30 group-hover:text-neon/70 transition-colors">
                  ampliar +
                </span>
              </div>

              <div className="aspect-video bg-terminal overflow-hidden">
                {failed[item.src] ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-1 px-4 text-center">
                    <span className="font-mono text-[10px] text-textprimary/35 tracking-widest uppercase">
                      captura pendente
                    </span>
                    <span className="font-mono text-[10px] text-textprimary/20 break-all">
                      {item.src}
                    </span>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    onError={() => setFailed((prev) => ({ ...prev, [item.src]: true }))}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-200"
                  />
                )}
              </div>

              <div className="p-3">
                <p className="font-mono text-xs text-white font-semibold mb-1">{item.title}</p>
                <p className="text-textprimary/50 text-[11px] leading-relaxed">{item.description}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox. Vai por portal no body: a seção fica dentro de um
          `.fade-in-section`, que cria contexto de empilhamento e prenderia o
          z-index do modal abaixo do header fixo. */}
      {active && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl border border-neon/30 bg-surface shadow-neon"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-b border-neon/20">
              <span className="font-mono text-[10px] tracking-widest uppercase text-neon">
                passo {openIndex + 1} de {total}
              </span>
              <button
                type="button"
                ref={closeRef}
                onClick={close}
                className="font-mono text-xs text-textprimary/50 hover:text-neon transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-neon px-2"
                aria-label="Fechar"
              >
                fechar ✕
              </button>
            </div>

            <figure className="m-0">
              {failed[active.src] ? (
                <div className="aspect-video flex flex-col items-center justify-center gap-2 bg-terminal px-6 text-center">
                  <span className="font-mono text-xs text-textprimary/40 tracking-widest uppercase">
                    captura pendente
                  </span>
                  <span className="font-mono text-[11px] text-textprimary/25 break-all">
                    {active.src}
                  </span>
                </div>
              ) : (
                <img
                  src={active.src}
                  alt={active.title}
                  onError={() => setFailed((prev) => ({ ...prev, [active.src]: true }))}
                  className="w-full max-h-[70vh] object-contain bg-terminal"
                />
              )}
              <figcaption className="p-4 border-t border-neon/10">
                <p className="font-mono text-sm text-white font-semibold mb-1">{active.title}</p>
                <p className="text-textprimary/60 text-xs leading-relaxed">{active.description}</p>
              </figcaption>
            </figure>

            <div className="flex items-center justify-between px-4 py-2 border-t border-neon/10">
              <button
                type="button"
                onClick={() => step(-1)}
                className="font-mono text-xs text-textprimary/40 hover:text-neon transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-neon px-1"
              >
                ← anterior
              </button>
              <div className="flex gap-1.5">
                {items.map((item, i) => (
                  <button
                    key={item.id ?? item.src}
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-label={`Ir para o passo ${i + 1}`}
                    className={`w-1.5 h-1.5 transition-all duration-200 ${
                      i === openIndex ? 'bg-neon' : 'bg-textprimary/20 hover:bg-textprimary/40'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => step(1)}
                className="font-mono text-xs text-textprimary/40 hover:text-neon transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-neon px-1"
              >
                próximo →
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
