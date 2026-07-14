/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C84A',
          dark: '#B8952A',
        },
        black: {
          DEFAULT: '#000000',
          soft: '#0A0A0A',
          card: '#111111',
        },
        gray: {
          muted: '#B0B0B0',
          dark: '#2A2A2A',
        },
      },
      fontFamily: {
        script: ['Pinyon Script', 'cursive'],
        display: ['Bebas Neue', 'sans-serif'],
        editorial: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #B8952A 0%, #D4AF37 30%, #F5D97E 50%, #D4AF37 70%, #B8952A 100%)',
        'gold-subtle': 'linear-gradient(135deg, #D4AF37 0%, #F0CC5A 50%, #D4AF37 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-up': 'floatUp 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(212,175,55,0.4), 0 0 40px rgba(212,175,55,0.2)' },
          '50%': { textShadow: '0 0 40px rgba(212,175,55,0.8), 0 0 80px rgba(212,175,55,0.4), 0 0 120px rgba(212,175,55,0.2)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px)', opacity: '1' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212,175,55,0.3)',
        'gold-lg': '0 0 40px rgba(212,175,55,0.5)',
        'gold-intense': '0 0 60px rgba(212,175,55,0.7)',
      },
    },
  },
  plugins: [],
}
