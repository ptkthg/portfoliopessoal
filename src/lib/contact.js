export const mailtoHref = (email, name) =>
  `mailto:${email}?subject=${encodeURIComponent(`Contato profissional — ${name}`)}`;
