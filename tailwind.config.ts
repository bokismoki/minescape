import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        body: "#f5f5f5",
        text: "#4e4e4e",
        dark: "#1b1b1b",
        accent: "#be3131",
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "100%",
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
        },
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
};
