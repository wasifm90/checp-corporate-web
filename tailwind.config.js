/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12161F",
        "primary-container": "#12161F",
        "on-primary": "#FFFFFF",
        secondary: "#C8963E",
        "secondary-hover": "#D9A74E",
        "secondary-container": "#C8963E",
        "secondary-fixed": "#C8963E",
        "on-secondary-fixed": "#12161F",
        surface: "#FAF9F5",
        "surface-bright": "#FFFFFF",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F5F4F0",
        "surface-container": "#EFECEA",
        "surface-container-high": "#E5E2DC",
        "surface-container-highest": "#DCD8D0",
        "on-surface": "#12161F",
        "on-surface-variant": "#585D66",
        "neutral-gray": "#787E87",
        outline: "#D1CEC7",
        "outline-variant": "#E2E0D8"
      },
      fontFamily: {
        headline: ["'Space Grotesk'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"]
      },
      fontSize: {
        'fluid-hero': 'clamp(2.5rem, 5.5vw, 5.25rem)',
        'fluid-h2': 'clamp(1.75rem, 3.5vw, 3.25rem)',
        'fluid-h3': 'clamp(1.35rem, 2.2vw, 2rem)',
        'fluid-body': 'clamp(1rem, 1.1vw, 1.25rem)'
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.03em'
      }
    },
  },
  plugins: [],
}
