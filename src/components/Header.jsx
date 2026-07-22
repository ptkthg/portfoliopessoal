import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { navItems, portfolioData } from '../data/portfolioData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { shortName, tag, resumePath, linkedin, github } = portfolioData.person;

  return (
    <header className="topbar">
      <div className="topbar-in">
        <Link to="/" className="mark">
          <span className="glyph"><Icon name="shield" /></span>
          <span>
            <span className="nm">{shortName}</span>
            <span className="rl">{tag}</span>
          </span>
        </Link>

        <nav className="tabs" aria-label="Seções">
          {navItems.map((item) => (
            <a key={item.id} href={`/#${item.id}`}>
              <i>{item.index}</i>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="top-cta" href={resumePath} download>
          <Icon name="download" /> Currículo
        </a>

        <button
          type="button"
          className="burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {open && (
        <nav className="drawer open" aria-label="Menu">
          {navItems.map((item) => (
            <a key={item.id} href={`/#${item.id}`} onClick={() => setOpen(false)}>
              <i>{item.index}</i>
              {item.label}
            </a>
          ))}
          <div className="dfoot">
            <a className="btn btn-fill" href={resumePath} download>
              <Icon name="download" /> Currículo
            </a>
            <a className="btn btn-ghost" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" brand />
            </a>
            <a className="btn btn-ghost" href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" brand />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
