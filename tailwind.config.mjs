/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        /** Near-black from the Hope Football mark */
        ink: "#020204",
        /** Royal blue from the Hope Football mark */
        accent: "#1457e8",
        "accent-muted": "#2f6fff",
      },
      boxShadow: {
        soft: "0 22px 50px -12px rgb(0 0 0 / 0.12)",
        card: "0 4px 24px -4px rgb(0 0 0 / 0.08)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
};

export default config;
