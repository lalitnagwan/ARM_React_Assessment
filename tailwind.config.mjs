export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A3D3D',
          DEFAULT: '#174545',
        },
        accent: {
          blue: '#00B4D8',
        },
        text: {
          dark: '#1A1A1A',
          light: '#FFFFFF',
        },
        border: '#E0E0E0',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro', 'Outfit', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        '3xl': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
