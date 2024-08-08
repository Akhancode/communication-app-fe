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
      colors: {
        primary: "#1E40AF", // A darker blue for primary actions
        secondary: "#F59E0B", // A warm orange for secondary actions
        accent: "#8B5CF6", // A softer purple for accents
        
        background: "#1F2937", // A dark background color for the app
        surface: "#2D3748", // A slightly lighter dark color for cards or sections
        success: "#16A34A", // A green for success messages
        warning: "#F59E0B", // An orange for warnings
        error: "#DC2626", // A strong red for error messages
        neutral: {
          100: "#E2E8F0", // Lightest neutral color for light text or subtle details
          200: "#CBD5E1", // Light neutral color for borders or less prominent text
          300: "#9CA3AF", // Medium neutral color for text or UI elements
          400: "#6B7280", // Darker neutral color for borders or prominent text
          500: "#4B5563", // Darkest neutral color for headings or strong contrast elements
        },
      },
    },
  },
  plugins: [],
};
export default config;
