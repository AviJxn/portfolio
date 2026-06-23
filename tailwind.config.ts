import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',      
        surface: '#121212',         
        borderMuted: 'rgba(255,255,255,0.08)', 
      },
    },
  },
  plugins: [],
}
export default config