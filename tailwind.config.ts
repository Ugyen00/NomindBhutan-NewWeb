import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // keyframes: {
      //   ripple: {
      //     '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 0 3px rgba(255, 255, 255, 0.3), 0 0 0 5px rgba(255, 255, 255, 0.3)' },
      //     '100%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.3), 0 0 0 20px rgba(255, 255, 255, 0), 0 0 0 30px rgba(255, 255, 255, 0)' },
      //   }
      // }
    },
  },
  plugins: [],
}
export default config
