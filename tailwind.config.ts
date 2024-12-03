import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "transparent": "transparent",
        "white": "#ffffff",
        "olive": "#001800",
        "lemon": "#e4f93b",
        "cyan": "#15f2c1"
      },
      boxShadow: {
        'button-glow': '20px 10px 80px #15f2c130, -20px -10px 80px #e4f93b30',
      }
    },
  },
  plugins: [],
} satisfies Config;
