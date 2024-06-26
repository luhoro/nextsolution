import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'jua': ["Jua", "sans-serif"]
      },
      colors: {
        'purpleMain': '#763ad8',
        'purpleDark': '#5A1BC0',
        'purpleLight': '#A384D5',
      },
      boxShadow: {
        'thin': '0 0 20px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};
export default config;
