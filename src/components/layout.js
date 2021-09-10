/** @jsx jsx */
import { css, Global } from "@emotion/react"
import { Container, jsx, useThemeUI } from "theme-ui"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  const { theme } = useThemeUI()
  const bodyCss = `
    body {
      transition: background 0.1s ease;
    }
    
    a[target='_blank']:hover::after {
      opacity: 1;
    }
    
    a[target='_blank']::after {
      content: '↗';
      transition: all 0.1s;
      font-size: 0.5em;
      opacity: 0.5;
    }
    a.middleanim {
      position: relative;
    }
    a.middleanim:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.primary};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
    }
    a.middleanim:hover:before {
    visibility: visible;
    transform: scaleX(1);
    }
    .cactus-login-form {
      background-color: ${theme.colors.background} !important;
      border: 1px solid ${theme.colors.primary} !important;
      width: 80%;
      max-width: 300px;
    }
  `

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 2,
        minWidth: "274px",
        backfaceVisibility: "hidden",
      }}
    >
      <Global
        styles={css`
          ${bodyCss}
        `}
      />
      <Header />
      <main
        sx={{
          flex: "1 1 auto",
          my: 4,
          px: 4,
          pt: 2,
        }}
      >
      {children}
      </main>
      <Footer />
    </Container>
  )
}

export default Layout
