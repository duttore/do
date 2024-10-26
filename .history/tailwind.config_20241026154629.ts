import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure you cover all potential file extensions used in your components
    "./pages/**/*.{js,ts,jsx,tsx}", // Include pages directory if applicable
    "./components/**/*.{js,ts,jsx,tsx}", // Include components directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
