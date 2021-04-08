module.exports = {
  purge: [
    './src/**/*.svelte',
  ],
  variants: {},
  theme: {
    extend: {
      opacity: {
        '10': '0.1',
      },
      width: {
        'menu': 'calc(100% - 1rem)',
        'main': '100vw'
      },
      gridTemplateColumns: {
        'adjust': '15rem auto',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
        'red': '0 1px 3px 0 rgba(255, 0, 0, 0.3)',
      },
      textColor: {
        'teste': '#3490dc',
      },
      spacing: {
        '60': '15rem',
      }
    },
    maxWidth: {
      '3': '3rem',
      '10': '10rem',
      '1': '15rem',
      '5xl': '64rem',
    },
    maxHeight: {
      '3': '3rem',
      '4': '4rem',
      '7': '7rem',
      '10': '10rem',
      '1': '15rem',
      '5xl': '64rem',
    },
    minHeight: {
      '3': '3rem',
      '4': '4rem',
      '4/5': '4.5rem',
      '5': '5rem',
      '7': '7rem',
      '10': '10rem',
      '1': '15rem',
      '5xl': '64rem',
      'screen': '100vh',
      'auto': 'auto'
    }
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
