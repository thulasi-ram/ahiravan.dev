// import { tailwind as baseStyles } from "@theme-ui/presets"

// export default {
//   ...baseStyles,
//   styles: {
//     ...baseStyles.styles,
//   },
// }

export default {
  useCustomProperties: true,
  initialColorMode: "dark",
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#000",
    secondary: "#3f3f3f",
    muted: "#e0e0e0",
    highlight: "#9f9f9f",
    gray: "#6c6c6c",
    accent: "#3f3f3f",
    modes: {
      dark: {
        text: "#fff",
        background: "#060606",
        primary: "#d2d2d2",
        secondary: "#b2b2b2",
        muted: "#191919",
        highlight: "#3c3c3c",
        gray: "#999",
        accent: "#e0e0e0",
      },
    },
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
    link: {
      color: "text",
      bg: "background",
    },
  },
  sizes: {
    container: "768px",
  },
  links: {
    nav: {
      fontWeight: "body",
      px: 1,
      margin: 2,
      textTransform: "lowercase",
      "&:hover": {
        color: "background",
        bg: "primary",
      },
    },
    logo: {
      fontWeight: "medium",
      // textTransform: 'lowercase',
      cursor: "pointer",
      "&:hover": {
        fontWeight: "heading",
      },
    },
  },
  fonts: {
    body: "Sen",
    heading: "inherit",
    logo: "WyvernWingsWydeBRK",
    monospace: "Menlo, monospace",
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    medium: 500,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "textStyles.display",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    p: {
      fontSize: 2,
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary",
      },
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      borderColor: "text",
      borderStyle: "solid",
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 8,
      borderBottomWidth: 8,
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
      px: 2,
    },
    ul: {
      listStyleType: "square",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "text",
        borderBottomStyle: "solid",
      },
    },
    th: {
      backgroundColor: "muted",
      verticalAlign: "bottom",
      borderBottomWidth: 8,
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: 4,
    },
    hr: {
      border: 0,
      borderBottom: "8px solid",
      borderColor: "text",
    },
  },
}
