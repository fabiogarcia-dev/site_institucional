// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        verdeEscuro: "#1e3a2e",
        verdeMedio: "#2d5a3d",
        verdeClaro: "#008000",
        laranja: "#ffa500",
        laranjaClaro: "#ff8c5a",
        vermelho: "#e61919",
        cinza: "#808080",
        vermelhoEscuro: "#ea3841",
        azul: "#0165e1",
        vermelhoInsta: "#e1306c",
        azulLk: "#0a66c2",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}