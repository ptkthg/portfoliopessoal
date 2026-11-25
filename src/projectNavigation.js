import { navItems, portfolioData } from './data/portfolioData.js';

export function resolveHash(hash) {
  // A URL sem fragmento representa a entrada inicial ao voltar pelo histórico.
  const targetId = hash === '' ? 'hero' : hash.slice(1);
  const sceneIndex = navItems.findIndex(({ id }) => id === targetId);
  if (sceneIndex >= 0) return { sceneIndex, targetId };
  if (portfolioData.projectGroups?.some(({ id }) => id === targetId)) {
    return { sceneIndex: navItems.findIndex(({ id }) => id === 'projetos'), targetId };
  }
  return null;
}
