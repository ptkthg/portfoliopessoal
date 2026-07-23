import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const ref = useScrollReveal();
  const [active, setActive] = useState('todas');
  const { skillGroups, skillFilters } = portfolioData;

  const visible =
    active === 'todas' ? skillGroups : skillGroups.filter((g) => g.category === active);

  return (
    <section id="competencias" className="wrap" aria-labelledby="competencias-titulo">
      <div className="sec reveal" ref={ref}>
        <h2 className="eyebrow" id="competencias-titulo"><s /> 04 — Competências técnicas</h2>

        <div className="filters">
          {skillFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`chip${active === f.id ? ' on' : ''}`}
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visible.map((group) => (
          <div key={group.label} className="skillrow">
            <div>
              <h4>{group.label}</h4>
              <div className="lvl">{group.where}</div>
            </div>
            <div className="tags">
              {group.skills.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
