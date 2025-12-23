import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          dark: '#E55A2B',
          light: '#FF8F5E',
        },
        chestnut: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#654321',
        },
        cream: {
          DEFAULT: '#FFF8E7',
          dark: '#F5E6D3',
        },
        leaf: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
        },
      },
      fontFamily: {
        sans: ['Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
