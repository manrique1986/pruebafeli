/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dorado: '#FFD700', // dorado para usar en gradientes
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'gradient-animation': 'gradientAnimation 10s ease infinite',
      },
      keyframes: {
        gradientAnimation: {
          '0%': {
            backgroundPosition: '0% 0%',
          },
          '50%': {
            backgroundPosition: '100% 100%',
          },
          '100%': {
            backgroundPosition: '0% 0%',
          },
        },
      },
    },
  },
  plugins: [],
};
