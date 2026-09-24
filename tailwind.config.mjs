import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF8F5',
          elevated: '#FFFFFF',
          muted: '#F3EFEA',
          border: '#E6E0D6',
          grid: '#EDE7DD',
        },
        sumi: {
          DEFAULT: '#1C2127',
          soft: '#384252',
          muted: '#667385',
          faint: '#9EAAB9',
        },
        night: {
          DEFAULT: '#0E1217',
          surface: '#151A22',
          card: '#1D232E',
          border: '#283141',
          highlight: '#2F3A4D',
        },
        nightText: {
          DEFAULT: '#ECEEF2',
          soft: '#CBD2DC',
          muted: '#8B98A9',
          faint: '#5C697B',
        },
        hanko: {
          DEFAULT: '#C23B2B',
          hover: '#A92D1F',
          light: '#E25545',
          soft: '#FBF0EE',
          darkBg: '#2D1615',
        },
        aizome: {
          DEFAULT: '#1E2D4A',
          light: '#2C3E63',
          dark: '#131D31',
        },
        detective: {
          gold: '#C59B27',
          brass: '#9E782F',
          teal: '#2A9D8F',
          amber: '#E76F51',
        },
      },
      fontFamily: {
        sans: [
          'Geist',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          '"BIZ UDPGothic"',
          '"Meiryo"',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        serif: [
          '"Newsreader"',
          '"Shippori Mincho"',
          '"Yu Mincho"',
          '"Hiragino Mincho ProN"',
          'serif',
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: theme('colors.sumi.DEFAULT'),
            lineHeight: '1.8',
            a: {
              color: theme('colors.hanko.DEFAULT'),
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.hanko.hover'),
              },
            },
            h1: {
              color: theme('colors.sumi.DEFAULT'),
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              color: theme('colors.sumi.DEFAULT'),
              fontWeight: '600',
              letterSpacing: '-0.015em',
              marginTop: '2em',
              marginBottom: '0.75em',
              borderBottom: `1px dashed ${theme('colors.paper.border')}`,
              paddingBottom: '0.4em',
            },
            h3: {
              color: theme('colors.sumi.DEFAULT'),
              fontWeight: '600',
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftColor: theme('colors.hanko.DEFAULT'),
              borderLeftWidth: '3px',
              backgroundColor: theme('colors.paper.muted'),
              padding: '0.85em 1.25em',
              borderRadius: '0 0.375rem 0.375rem 0',
              color: theme('colors.sumi.soft'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              backgroundColor: theme('colors.paper.muted'),
              color: theme('colors.hanko.DEFAULT'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.88em',
              fontFamily: theme('fontFamily.mono').join(', '),
            },
            hr: {
              borderColor: theme('colors.paper.border'),
              borderStyle: 'dashed',
              margin: '2.5em 0',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.nightText.DEFAULT'),
            a: {
              color: theme('colors.hanko.light'),
              '&:hover': {
                color: '#FF7B6E',
              },
            },
            h1: {
              color: theme('colors.nightText.DEFAULT'),
            },
            h2: {
              color: theme('colors.nightText.DEFAULT'),
              borderBottomColor: theme('colors.night.border'),
            },
            h3: {
              color: theme('colors.nightText.DEFAULT'),
            },
            blockquote: {
              backgroundColor: theme('colors.night.card'),
              borderLeftColor: theme('colors.hanko.light'),
              color: theme('colors.nightText.soft'),
            },
            code: {
              backgroundColor: theme('colors.night.card'),
              color: theme('colors.hanko.light'),
            },
            hr: {
              borderColor: theme('colors.night.border'),
            },
            strong: {
              color: theme('colors.nightText.DEFAULT'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
