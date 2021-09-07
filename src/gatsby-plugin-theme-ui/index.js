import code_theme from "@theme-ui/prism/presets/night-owl.json"

const theme = {
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
        outline: "none",
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
    body: '"Iosevka Etoile Optimized", "Verdana", sans-serif',
    heading: `"Iosevka Aile Optimized", Monaco, monospace`,
    monospace: '"Iosevka Aile Optimized", Courier, monospace',
  },
  fontSizes: [12, 14, 16, 19, 22, 25, 29, 33],
  fontWeights: {
    body: 400,
    heading: 500,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  text: {
    section: {
      color: "background",
      bg: "text",
      p: 1,
      my: 2,
      fontSize: 2,
      fontFamily: "heading",
      letterSpacing: "0.1em",
    },
    intro: {
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
    },
    footer: {
      color: "gray",
      fontSize: 1,
      fontFamily: "body",
    },
    postmeta: {
      fontSize: 1,
      color: "gray",
      fontFamily: "heading",
    },
    postmetasmall: {
      variant: "text.postmeta",
      fontSize: 0,
    },
  },
  links: {
    crumb: {
      fontSize: 1,
      color: "secondary",
      fontFamily: "heading",
      textDecoration: "none",
      "&.active": {
        color: "primary",
        textDecoration: "underline",
      },
      "&:hover": {
        fontWeight: "heading",
      },
    },
    postmeta: {
      variant: "text.postmeta",
    },
    justmono: {
      variant: "styles.a",
      fontFamily: "heading",
    },
    nav: {
      mr: 5,
      class: "middleanim",
      fontFamily: "body",
      fontWeight: "body",
      letterSpacing: "1px",
      "&:hover": {
        fontWeight: "heading",
      },
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      overflowWrap: "break-word",
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 7,
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 6,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 5,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 4,
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 3,
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    p: {},
    a: {
      fontFamily: "body",
      color: "primary",
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
      fontFamily: "monospace"
    },
    code: {
      ...code_theme,
      p: 3,
      my: 4,
      overflow: "auto",
      fontSize: [0, 1, 1],
    },
    inlineCode: {
      backgroundColor: "muted",
      color: "text",
      fontFamily: "body",
      py:0,
      px: 1,
    },
    ul: {
      listStyleType: "square",
    },
    ol: {},
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
  breakpoints: ["400px", "768px", "1024px"],
  cards: {
    primary: {
      padding: 2,
      bg: "background",
      borderRadius: 4,
      boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.75)",
    },
  },
  badges: {
    primary: {
      color: "background",
      bg: "text",
    },
    postmeta: {
      mx: 2,
      color: "background",
      fontFamily: "heading",
    },
  },
}


export default theme