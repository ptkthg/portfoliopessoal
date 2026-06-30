/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: '#0a0a0f',
        surface: '#111118',
        neon: '#00ff88',
        textprimary: '#e2e8f0',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 255, 136, 0.25)',
        card: '0 15px 35px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
