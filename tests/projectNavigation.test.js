import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveHash } from '../src/projectNavigation.js';

test('resolve cenas sem alterar o destino da âncora', () => {
  assert.deepEqual(resolveHash('#hero'), { sceneIndex: 0, targetId: 'hero' });
  assert.deepEqual(resolveHash('#projetos'), { sceneIndex: 5, targetId: 'projetos' });
  assert.deepEqual(resolveHash('#contato'), { sceneIndex: 7, targetId: 'contato' });
});

test('abre cada área na cena Projetos mantendo o destino do grupo', () => {
  for (const targetId of ['projetos-incidentes', 'projetos-deteccao', 'projetos-intel', 'projetos-identidade']) {
    assert.deepEqual(resolveHash('#' + targetId), { sceneIndex: 5, targetId });
  }
});

test('volta à cena inicial quando o histórico retorna à URL sem fragmento', () => {
  assert.deepEqual(resolveHash(''), { sceneIndex: 0, targetId: 'hero' });
});

test('ignora hashes desconhecidos, vazios e parciais', () => {
  for (const hash of ['#', '#desconhecido', '#projetos-outro', '#projetos-intel-extra']) {
    assert.equal(resolveHash(hash), null);
  }
});
