module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    darkMode: "class",
  },
  plugins: [require("@tailwindcss/typography")],
  variants: {
    extend: {
      typography: ["dark"],
    },
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
    ],
    borderColor: ["dark", "dark-disabled", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active", "dark-placeholder"],
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
};
