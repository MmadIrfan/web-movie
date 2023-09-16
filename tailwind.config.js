/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        birutua: "#112D4E",
        birumuda: "#3F72AF",
        hampirbiru: "#DBE2EF",
        putihb: "#F9F7F7",
      },
    },
  },
  plugins: [],
};
