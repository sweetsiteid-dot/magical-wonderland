/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night-blue': '#1a1446',
        'magic-purple': '#4a2a82',
        'gold-accent': '#ffd86b',
        'soft-pink': '#ffb3d1',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        'fog-slow': 'fogMove 25s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'window-glow': 'windowGlow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        fogMove: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(10%)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        windowGlow: {
          '0%': { fill: '#ffd86b', filter: 'drop-shadow(0 0 2px #ffd86b)' },
          '100%': { fill: '#fff2a8', filter: 'drop-shadow(0 0 10px #ffd86b)' },
        }
      }
    },
  },
  plugins: [],
};
