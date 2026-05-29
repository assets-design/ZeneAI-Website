import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:    'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary:  'var(--color-secondary)',
        background: 'var(--color-bg)',
        foreground: 'var(--color-fg)',
        muted:      'var(--color-muted)',
        border:     'var(--color-border)',
        accent:     'var(--color-accent)',
        'zene-blue':  'var(--color-zene-blue)',
        'zene-cyan':  'var(--color-zene-cyan)',
        'zene-yellow':'var(--color-zene-yellow)',
        'zene-pink':  'var(--color-zene-pink)',
        'zene-green': 'var(--color-zene-green)',
      },
      fontFamily: {
        heading: ['Fira Sans Extra Condensed', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        sans:    ['DM Sans', 'sans-serif'],
      },
      spacing: {
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      backgroundImage: {
        'header-gradient': 'var(--gradient-header)',
      },
      maxWidth: {
        header: 'var(--header-max-width)',
      },
      height: {
        'header-announcement': 'var(--header-announcement-h)',
        'header-nav': 'var(--header-nav-h)',
      },
      borderRadius: {
        'header-announcement': 'var(--header-announcement-radius)',
        'header-nav': 'var(--header-nav-radius)',
        'header-pdf': 'var(--header-pdf-radius)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config
