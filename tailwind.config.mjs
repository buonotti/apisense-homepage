import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#e2bdc6",
  600: "#a64665",
  900: "#4d232f",
  950: "#351b22",
};
const gray = {
  100: "#f6f6fa",
  200: "#ecedf6",
  300: "#c0c1cc",
  400: "#89899e",
  500: "#565669",
  700: "#363648",
  800: "#252535",
  900: "#17171f",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
