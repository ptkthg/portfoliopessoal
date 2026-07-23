import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { mailtoHref } from '../lib/contact';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();
  const [copied, setCopied] = useState(false);
  const timer = useRef();
  const { person } = portfolioData;

  useEffect(() => () => clearTimeout(timer.current), []);

  // Só marca "copiado" se a escrita deu certo. Sem clipboard (contexto inseguro
  // ou navegador antigo) o rótulo não muda, evitando falso sucesso — e o e-mail
  // continua visível no cartão ao lado.
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contato" className="wrap" aria-labelledby="contato-titulo">
      <div className="sec contact reveal" ref={ref}>
        <p className="eyebrow"><s /> 08 — Contato</p>
        <h2 id="contato-titulo">Contato profissional</h2>

        <div className="clinks">
          <a className="clink" href={person.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" brand className="clink-brand-in" />
            <span className="lb">LinkedIn<em>/in/ptkthg</em></span>
          </a>
          <a className="clink" href={person.github} target="_blank" rel="noreferrer">
            <Icon name="github" brand />
            <span className="lb">GitHub<em>/ptkthg</em></span>
          </a>
          <a className="clink" href={mailtoHref(person.email, person.shortName)}>
            <Icon name="mail" />
            <span className="lb">E-mail<em>{person.email}</em></span>
          </a>
        </div>

        <div className="btns">
          <a className="btn btn-fill" href={mailtoHref(person.email, person.shortName)}>
            <Icon name="mail" /> Enviar mensagem
          </a>
          <button type="button" className="btn btn-ghost" onClick={copy} aria-label="Copiar e-mail">
            <Icon name="doc" /> {copied ? 'E-mail copiado' : 'Copiar e-mail'}
          </button>
          <a className="btn btn-ghost" href={person.resumePath} download>
            <Icon name="download" /> Currículo em PDF
          </a>
        </div>
      </div>
    </section>
  );
}
