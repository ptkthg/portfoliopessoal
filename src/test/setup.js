import '@testing-library/jest-dom/vitest';

// jsdom não implementa IntersectionObserver, usado pelo scroll reveal.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = IntersectionObserverStub;

// jsdom não implementa matchMedia, usado por prefers-reduced-motion.
globalThis.matchMedia =
  globalThis.matchMedia ||
  ((query) => ({
    matches: false,
    media: query,
    addEventListener() {},
    removeEventListener() {},
  }));
