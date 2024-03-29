import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/*.tsx',
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/contexts/**/*.tsx',
    './src/app/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  }
}
export default config
