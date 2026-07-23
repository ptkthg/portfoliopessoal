import { render } from '@testing-library/react';
import { useScrollReveal } from '../useScrollReveal';

function RevealBox() {
  const ref = useScrollReveal();
  return <div data-testid="box" className="reveal" ref={ref} />;
}

describe('useScrollReveal', () => {
  it('revela o elemento imediatamente quando IntersectionObserver não está disponível', () => {
    const original = globalThis.IntersectionObserver;
    delete globalThis.IntersectionObserver;

    try {
      const { getByTestId } = render(<RevealBox />);
      expect(getByTestId('box')).toHaveClass('in');
    } finally {
      globalThis.IntersectionObserver = original;
    }
  });
});
