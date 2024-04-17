/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pr_border: "rgba(209, 209, 209, 1)",
      },
    },
  },
  plugins: [],
};
