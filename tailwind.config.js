/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      neutral: {
        "000": "var(--neutral-000)",
        700: "var(--neutral-700)",
        900: "var(--neutral-900)",
        999: "var((--neutral-999)",
      },
      primary: {
        700: "var(--primary-700)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {}
  },

  plugins: [],
};
