/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-plus-200": "calc(100vh + 200px)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-diagonal-bottom": {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)",
          borderRadius: "0", // Ensures sharp diagonal corners
        },
        ".clip-diagonal-both": {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0", // Ensures sharp diagonal corners
        },
      };
      addUtilities(newUtilities); // No need for "responsive" option
    },
  ],
};
