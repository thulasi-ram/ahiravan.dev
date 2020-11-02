// import { tailwind as baseStyles } from "@theme-ui/presets"
// import code_theme from '@theme-ui/prism/presets/github.json'
import code_theme from "@theme-ui/prism/presets/night-owl.json"
import {FONT_NAME} from "../constants"

// export default {
//   ...baseStyles,
//   styles: {
//     ...baseStyles.styles,
//   },
// }

export default {
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
        text: "rgba(255, 255, 255, 0.87)",
        background: "#1A202C",
        primary: "rgba(255, 255, 255, 0.87)",
        secondary: "#d6e0f0",
        muted: "#393e46",
        highlight: "#3c3c3c",
        gray: "#999",
        accent: "#3f3f3f",
      },
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        cursor: "pointer",
      },
      "&:active": {
        bg: "accent",
      },
    },
    basic: {
      color: "text",
      bg: "background",
      borderColor: "primary",
      borderStyle: "solid",
      borderWidth: "2px",
      "&:hover": {
        cursor: "pointer",
      },
      "&:active": {
        transform: "scale(0.98)",
      },
      "&:focus": {
        "outline" :"none",
      },
    },
    link: {
      color: "text",
      bg: "background",
    },
  },
  sizes: {
    container: "768px",
  },
  fonts: {
    body: "inherit",
    para: `'${FONT_NAME}', sans-serif`,
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  text: {
    section: {
      color: "background",
      bg: "text",
      fontSize: 3,
      fontWeight: "body",
      p: 1,
      my: 2,
    },
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "heading",
    },
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "body",
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
      fontSize: 1,
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 6,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    p: {
      fontFamily: "para",
      fontSize: 3,
    },
    a: {
      fontFamily: "para",
      color: "primary",
      fontSize: 2,
      cursor: "pointer",
      "&:hover": {
        color: "background",
        cursor: "pointer",
        bg: "primary",
        transition: "all .5s ease",
      },
      "&.active": {
        color: "primary",
        cursor: "pointer",
      },
      // "&:visited": {
      //   color: "inherit",
      // },
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
      borderRightWidth: 0,
      borderBottomWidth: 0,
      overflow: "auto",
      code: {
        color: "inherit",
      },
      highlight: {
        background: "hsla(0, 0%, 30%, .5)",
      },
    },
    code: {
      ...code_theme,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
      px: 2,
    },
    ul: {
      listStyleType: "square",
      fontSize: 2,
    },
    ol: {
      fontSize: 2,
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
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: 2,
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: 0,
    },
    hr: {
      border: 0,
      borderBottom: "8px solid",
      borderColor: "text",
    },
  },
  breakpoints: ["640px", "768px", "1024px"],
  cards: {
    primary: {
      padding: 2,
      bg: "background",
      borderRadius: 4,
      boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.75)"
    },
  },
  badges: {
    primary: {
      color: "background",
      bg: "text",
    }
  },
}
