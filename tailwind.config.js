const colors = require("./src/style/themes/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "security-shape": "url(/img/line-bg.png)",
      },
      backgroundPosition: {
        "top-25": "center top 35%",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        expand: "95% 200%",
      },
      colors: colors,
      screen: {
        sm: "360px",
        md: "420px",
        lg: "600px",
        xl: "1080px",
        "2xl": "1460px",
      },
    },
  },
  plugins: [],
};
