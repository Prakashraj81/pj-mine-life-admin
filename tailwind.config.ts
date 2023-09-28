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
        'primary-blue': '#5D87FF',
        'primary-light': '#ECF2FF',
        'primary-main': '#5D87FF',
        'success-main': '#3BB900',
        'success-light': '#ECFBE6',
        'secondary-main': '#49BEFF',
        'secondary-light': '#E8F7FF',
        'error-main': '#F4002C',
        'error-light': '#FFE8EC',
        'warning-main': '#F49200',
        'warning-light': '#FFF6E8',  
        'info-main': '#539BFF',
        'info-light': '#EBF3FE',        
      },
    },
  },
  plugins: [],
}
export default config
