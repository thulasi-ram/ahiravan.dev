// import { tailwind as baseStyles } from "@theme-ui/presets"
// import code_theme from '@theme-ui/prism/presets/github.json'
import code_theme from '@theme-ui/prism/presets/night-owl.json'

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
      mx: 2,
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
  text: {
    section: {
      color: "background",
      bg: "text",
      fontSize: 3,
      fontWeight: "body",
      p: 1,
      my: 2,
    }
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
    }
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
      borderRightWidth: 0,
      borderBottomWidth: 0,
      overflow: "auto",
      code: {
        color: "inherit",
      },
      "highlight": {
        "background": "hsla(0, 0%, 30%, .5)"
      }
    },
    code: {
      ...code_theme
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
      px: 2,
    },
    ul: {
      listStyleType: "square",
      fontSize: 2
    },
    ol: {
      fontSize: 2
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
      // backgroundColor: "muted",
      verticalAlign: "bottom",
      borderBottomWidth: 2,
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: 1,
    },
    hr: {
      border: 0,
      borderBottom: "8px solid",
      borderColor: "text",
    },
  },
}
