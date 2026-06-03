/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        /** Deep navy from the Hope Football mark */
        ink: "#061a2f",
        /** Warm gold from the Hope Football mark */
        accent: "#9b6500",
        "accent-muted": "#d79a14",
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
