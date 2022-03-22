module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      mono: ['Roboto Mono', 'monospace'],
    },
    screens: {
      xs: '250px',
      sm: '360px',
      md: '640px',
      slg: '1024px',
      lg: '1280px',
      xl: '1536px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontSize: {
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        36: '36px',
      },
      colors: {
        semiblack: 'rgba(0,0,0,.3)',
        semiwhite: 'rgba(255,255,255,.7)',
        transparent: 'transparent',
        cadetblue: '#7c9eb7',
        cornflowerblue: '#7293d6',
        skyblue: '#8bcbeb',
        whitesmoke: '#f2f2f2',
        darkgray: '#a4a4a4',
        lightseagreen: '#30a7d7',
        dimgray: '#616161',
        // Types
        fire: '#fd7d24',
        poison: '#b97fc9',
        grass: '#9bcc50',
        water: '#4592c4',
        bug: '#729f3f',
        normal: '#a4acaf',
        electric: '#eed535',
        fairy: '#fdb9e9',
        fighting: '#d56723',
        psychic: '#f366b9',
        fying: '#e4f4f5',
        ground: '#b38e82',
        rock: '#a38c21',
        steel: '#9eb7b8',
        ice: '#51c4e7',
        ghost: '#7b62a3',
        dragon: '#177258',
        dark: '#707070',
        // End types

        // Stat
        hp: '#ff0000',
        attack: '#f08030',
        defense: '#f8d030',
        'special-attack': '#6890f0',
        'special-defense': '#78c850',
        speed: '#f85888',
      },
      keyframes: {
        slide: {
          '0%': { left: '100%', opacity: '0' },
          '100%': { right: 0, opacity: '1' },
        },
        spining: {
          to: {
            transform: 'rotateY(360deg)',
          },
        },
      },
      animation: {
        slide: 'slide 0s linear forwards',
        spining: 'spining 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
