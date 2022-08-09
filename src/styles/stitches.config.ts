import { createStitches } from "@stitches/react";

const stitches = createStitches({
  theme: {
    colors: {
      red: "#ff6d6d",
      steel: "#363645",
      black: "#000",
      white: "#fff",
      grey: "#666",
      text: "hsl(0, 0%, 17%)",
      "dark-gray": "hsl(0, 0%, 59%)",
      "very-dark-gray": "hsl(0, 0%, 17%)",
    },
    fonts: {
      body: 'Rubik, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    },
    sizes: {
      header: "18rem",
      full: "100%",
      half: "50%",
    },
  },
  utils: {
    // Abbreviated margin properties
    m: (value: number | string) => ({
      margin: value,
    }),
    mt: (value: number | string) => ({
      marginTop: value,
    }),
    mr: (value: number | string) => ({
      marginRight: value,
    }),
    mb: (value: number | string) => ({
      marginBottom: value,
    }),
    ml: (value: number | string) => ({
      marginLeft: value,
    }),
    mx: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // Abbreviated padding properties
    p: (value: number | string) => ({
      padding: value,
    }),
    pt: (value: number | string) => ({
      paddingTop: value,
    }),
    pr: (value: number | string) => ({
      paddingRight: value,
    }),
    pb: (value: number | string) => ({
      paddingBottom: value,
    }),
    pl: (value: number | string) => ({
      paddingLeft: value,
    }),
    px: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: number | string) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: number | string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    round: (value: number | string) => ({
      borderRadius: value,
    }),
  },
  media: {
    mobileUp: "(min-width: 375px)",
    tabletUp: "(min-width: 768px)",
    desktopUp: "(min-width: 1024px)",
    largeDesktopUp: "(min-width: 1680px)",
  },
});

export const { styled, globalCss, getCssText, css } = stitches;
