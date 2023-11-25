/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      colors: {
        fontblack: '#4D4D4D',
        fontwhite: '#FFFFFF',
        primary: '#E98865',
        secondary: '#F8F7F3',
        tertiary: '#E0A98A',
      },
      borderRadius: {
        '6xl': '3.75rem',
        '8xl': '6rem',
      },
      fontSize: {
        h1: [
          'clamp(1.5rem, 2.5vw, 2rem)',
          {
            fontWeight: '700',
          },
        ],
        h2: ['clamp(1.5rem, 2.5vw, 2rem)', {}],
        sectionHeader: [
          '1rem',
          {
            fontWeight: '700',
          },
        ],
        hero: [
          'clamp(3rem, 7vw, 6rem)',
          {
            fontWeight: '700',
            lineHeight: '1',
          },
        ],
      },
      height: {
        '1/3vh': '30vh',
        '1/2vh': '50vh',
      },
      gridColumn: {
        fullbleed: 'full-bleed-start / full-bleed-end;',
        mobile: 'mobile-start / mobile-end;',
        bleed: 'bleed-start / bleed-end;',
        content: 'content-start / content-end;',
      },
      gridColumnStart: {
        fullbleed: 'full-bleed-start',
        mobile: 'mobile-start',
        bleed: 'bleed-start ',
        content: 'content-start',
        half: 'half',
      },
      gridColumnEnd: {
        fullbleed: 'full-bleed-end',
        mobile: 'mobile-end',
        bleed: 'bleed-end ',
        content: 'content-end',
        half: 'half',
      },
      gridTemplateColumns: {
        container: `
        [full-bleed-start] 16px
        [mobile-start] 1fr
        [bleed-start] 1fr
        [content-start] 
        repeat(4, 1fr)
        [half] 
        repeat(4, 1fr)
        [content-end]
        1fr [bleed-end]
        1fr[mobile-end]
        16px [full-bleed-end]`,
      },
    },
    plugins: [],
  },
}
