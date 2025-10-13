module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#b6d6ff",
          300: "#89bcff",
          400: "#5b9bff",
          500: "#2f74ff",
          600: "#1e5be6",
          700: "#1849b4",
          800: "#153f8f",
          900: "#143876",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      spacing: {
        13: "3.25rem",
      },
    },
  },
  plugins: [],
};
