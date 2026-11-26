import test from 'node:test';
import assert from 'node:assert/strict';
import { portfolioData } from '../src/data/portfolioData.js';
import { projectsFor, resolveHash } from '../src/projectNavigation.js';

test('resolve cenas sem alterar o destino da âncora', () => {
  assert.deepEqual(resolveHash('#hero'), { sceneIndex: 0, targetId: 'hero' });
  assert.deepEqual(resolveHash('#projetos'), { sceneIndex: 4, targetId: 'projetos' });
  assert.deepEqual(resolveHash('#contato'), { sceneIndex: 6, targetId: 'contato' });
});

test('abre cada área na cena Projetos mantendo o destino do grupo', () => {
  for (const targetId of ['projetos-destaques', 'projetos-incidentes', 'projetos-deteccao', 'projetos-intel', 'projetos-identidade']) {
    assert.deepEqual(resolveHash('#' + targetId), { sceneIndex: 4, targetId });
  }
});

test('volta à cena inicial quando o histórico retorna à URL sem fragmento', () => {
  assert.deepEqual(resolveHash(''), { sceneIndex: 0, targetId: 'hero' });
});

test('ignora hashes desconhecidos, vazios e parciais', () => {
  for (const hash of ['#', '#desconhecido', '#pontos-fortes', '#projetos-outro', '#projetos-intel-extra']) {
    assert.equal(resolveHash(hash), null);
  }
});

test('cada projeto aparece exatamente uma vez, com os destaques primeiro', () => {
  const shown = portfolioData.projectGroups.flatMap((group) => projectsFor(group).map((project) => project.title));
  assert.deepEqual([...shown].sort(), portfolioData.projects.map((project) => project.title).sort());
  assert.deepEqual(shown.slice(0, 4), ['Perito', 'Hookshade', 'KQL Detection as Code', 'Terraform GitHub Seguro']);
});

test('nenhum grupo de projetos fica vazio', () => {
  for (const group of portfolioData.projectGroups) {
    assert.ok(projectsFor(group).length > 0, group.id);
  }
});

test('abas de competências apontam para grupos existentes e cobrem todos', () => {
  const ids = portfolioData.skillGroups.map((group) => group.id);
  assert.equal(new Set(ids).size, ids.length, 'ids duplicados');
  const used = portfolioData.skillCategories.flatMap((category) => category.groups);
  for (const id of used) assert.ok(ids.includes(id), id);
  assert.deepEqual([...used].sort(), [...ids].sort());
});

test('projectsFor funciona passado direto ao flatMap (ignora índice e array)', () => {
  const direct = portfolioData.projectGroups.flatMap(projectsFor).map((project) => project.title);
  const wrapped = portfolioData.projectGroups.flatMap((group) => projectsFor(group)).map((project) => project.title);
  assert.deepEqual(direct, wrapped);
});
