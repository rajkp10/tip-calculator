/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
  theme: {
    screens: {
      md: "978px",
    },
    extend: {
      colors: {
        StrongCyan: "hsl(172, 67%, 45%)",
        VeryDarkCyan: "hsl(183, 100%, 15%)",
        DarkGrayishCyan: "hsl(186, 14%, 43%)",
        GrayishCyan: "hsl(184, 14%, 56%)",
        LightGrayishCyan: "hsl(185, 41%, 84%)",
        VeryLightGrayishCyan: "hsl(189, 41%, 97%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
