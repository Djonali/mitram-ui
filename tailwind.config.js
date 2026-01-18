module.exports = {
  darkMode: "class",
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
        primary: "#F87171",
        "primary-hover": "#ef4444",
        "background-light": "#f0fdf4",
        "background-dark": "#052e16",
        surface: "#ffffff",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
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
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        13: "3.25rem",
      },
    },
  },
  plugins: [],
};
