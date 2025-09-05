const config = {
  locales: [
    // your locales here
  ],
  theme: {
    light: {
      colors: {
        primary100: "#FFF4E5",
        primary200: "#FFD6A0",
        primary500: "#FF9900", // main orange
        primary600: "#FF8800",
        primary700: "#FF7700",
        danger700: "#b72b1a",
      },
    },
    dark: {
      colors: {
        primary100: "#332200",
        primary200: "#664400",
        primary500: "#FF9900", // main orange
        primary600: "#FF8800",
        primary700: "#FF7700",
        danger700: "#b72b1a",
      },
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};