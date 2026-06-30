#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';

const DEFAULT_ROLES = [
  'tech recruiter',
  'technical recruiter',
  'it recruiter',
  'recruiter',
  'talent acquisition',
  'people acquisition',
  'sourcer',
];

const args = process.argv.slice(2);

function takeFlag(name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  const value = args[index + 1];
  args.splice(index, 2);
  return value;
}

function hasFlag(name) {
  const index = args.indexOf(name);
  if (index === -1) return false;
  args.splice(index, 1);
  return true;
}

function usage() {
  console.log(`
Uso:
  npm run recruiters -- "Empresa A" "Empresa B"
  npm run recruiters -- --file empresas.txt
  npm run recruiters -- --location Brasil --role "tech recruiter" "Empresa A"
  npm run recruiters -- --open "Empresa A"

Opcoes:
  --file <arquivo>       Le empresas, uma por linha.
  --location <local>     Adiciona local na busca. Padrao: Brasil.
  --role <cargo>         Usa um cargo especifico. Pode repetir.
  --open                 Abre os links no navegador padrao.
`);
}

const shouldOpen = hasFlag('--open');
const filePath = takeFlag('--file');
const location = takeFlag('--location') ?? 'Brasil';
const roles = [];

for (;;) {
  const role = takeFlag('--role');
  if (!role) break;
  roles.push(role);
}

if (hasFlag('--help') || hasFlag('-h')) {
  usage();
  process.exit(0);
}

let companies = args.filter((arg) => !arg.startsWith('--'));

if (filePath) {
  const fileCompanies = readFileSync(filePath, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));
  companies = [...companies, ...fileCompanies];
}

companies = [...new Set(companies.map((company) => company.trim()).filter(Boolean))];

if (!companies.length) {
  usage();
  process.exit(1);
}

const selectedRoles = roles.length ? roles : DEFAULT_ROLES;
const roleQuery = selectedRoles.map((role) => `"${role}"`).join(' OR ');

function googleUrl(company) {
  const query = `site:linkedin.com/in (${roleQuery}) "${company}" "${location}"`;
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function linkedinPeopleUrl(company) {
  const keywords = `${selectedRoles.join(' OR ')} ${company} ${location}`;
  return `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(keywords)}`;
}

function linkedinCompanyPeopleUrl(company) {
  const keywords = `${selectedRoles.join(' OR ')} "${company}"`;
  return `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(keywords)}&origin=GLOBAL_SEARCH_HEADER`;
}

function openUrl(url) {
  const command =
    process.platform === 'win32'
      ? ['cmd', ['/c', 'start', '', url]]
      : process.platform === 'darwin'
        ? ['open', [url]]
        : ['xdg-open', [url]];

  spawn(command[0], command[1], {
    detached: true,
    stdio: 'ignore',
  }).unref();
}

for (const company of companies) {
  const links = [
    ['Google LinkedIn profiles', googleUrl(company)],
    ['LinkedIn people search', linkedinPeopleUrl(company)],
    ['LinkedIn company keywords', linkedinCompanyPeopleUrl(company)],
  ];

  console.log(`\n=== ${company} ===`);
  for (const [label, url] of links) {
    console.log(`${label}: ${url}`);
    if (shouldOpen) openUrl(url);
  }
}

console.log('\nDica: salve empresas em um arquivo com uma por linha e rode: npm run recruiters -- --file empresas.txt');
