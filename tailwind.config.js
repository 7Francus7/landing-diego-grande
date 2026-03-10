/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F7CE3C", // Diego Grande Yellow
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#000000", // Pure Black for luxury dark mode
          foreground: "#FFFFFF",
        },
        dark: {
          100: "#1A1A1A",
          200: "#121212",
          300: "#0A0A0A",
        },
        muted: {
          DEFAULT: "#1F1F1F",
          foreground: "#A1A1AA",
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px 0px rgba(247, 206, 60, 0.3)' },
          '50%': { opacity: '.8', boxShadow: '0 0 30px 6px rgba(247, 206, 60, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #000000 0%, #1A1A1A 50%, #000000 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(247, 206, 60, 0.5)',
        'glow-primary-sm': '0 0 20px rgba(247, 206, 60, 0.3)',
      }
    },
  },
  plugins: [],
}
