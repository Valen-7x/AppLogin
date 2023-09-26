/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Agrega cualquier otro archivo donde se utilicen clases de Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      // Agrega las mismas rutas de archivos aquí
    ],
  },
};
