import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#2A5C45",
          light: "#3D7A5C",
          dark: "#1A3D2E",
        },
        coral: "#E8513A",
        cream: {
          DEFAULT: "#F5F0E8",
          dark: "#EDE7DA",
        },
        sand: "#C4A882",
        pzblack: "#111410",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
