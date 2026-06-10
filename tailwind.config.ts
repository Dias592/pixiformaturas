import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        bgCard: '#1a1a1a',
        gold: '#C9A84C',
        goldHover: '#B8973A',
        goldMuted: '#8B6914',
        magenta: '#C0185A',
        magentaLight: '#E8206E',
        textMain: '#FFFFFF',
        textMuted: '#CCCCCC',
        textDark: '#1A1A1A',
        borderC: '#2a2a2a',
        numberBg: '#3a3020',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
