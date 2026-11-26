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

// Destaques aparecem primeiro; os grupos por área mostram só os projetos que não estão em destaque.
export function projectsFor(group) {
  return portfolioData.projects.filter((project) => (group.featured ? project.featured : project.group === group.id && !project.featured));
}
