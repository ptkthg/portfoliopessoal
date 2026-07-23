/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: '#0a0a0f',
        surface: '#111118',
        surface2: '#15151d',
        line: '#22222c',
        neon: '#00ff88',
        textprimary: '#f2f5f8',
        muted: '#9aa1ad',
        faint: '#666d7a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
