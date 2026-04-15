/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        /** Deep ink for hero / footer */
        ink: "#0a0a0a",
        /** Sky accent — trust + energy */
        accent: "#0ea5e9",
        "accent-muted": "#38bdf8",
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
