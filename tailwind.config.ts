import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      invert: {
        0.9: ".9",
        0.5: ".5",
        0.6: ".65",
      },
      colors: {
        white: "#FFFFFF",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        stroke: "#E2E8F0",
        lightblue: "#00B3CE",
        blue: "#2d7198",
        "gray-3": "#FAFAFA",
        "darkmode-dark": "#001118",
        strokedark: "#2f0261",
      },
    
      spacing: {
        5.5: "1.375rem",
        7.5: "1.875rem",
        72.5: "18.125rem",
        
      },
 
      zIndex: {
        9999: "9999",
      }
    },
  },
  plugins: [],
};
export default config;
