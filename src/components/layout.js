/** @jsx jsx */
import { css, Global } from "@emotion/react"
import { Container, jsx, useThemeUI } from "theme-ui"
import Footer from "./footer"
import Header from "./header"
import SentryHeader from "./sentry"

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
      border-radius: 10px !important;
      max-width: 350px;
    }
    .cactus-button {
      color: ${theme.colors.text} !important;
      background-color: ${theme.colors.background} !important;
      border: 1px solid ${theme.colors.primary} !important;
      border-radius: 4px !important;
      padding-left: 2em !important;
      padding-right: 2em !important;
    }
    .cactus-button:hover {
      color: ${theme.colors.background} !important;
      background-color: ${theme.colors.text} !important;
      transition: "all .5s ease",
    }
    .cactus-button:disabled,
    .cactus-button[disabled]{
      color: ${theme.colors.gray} !important;
      background-color: ${theme.colors.muted} !important;
      border: 1px solid ${theme.colors.muted} !important;
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
      <SentryHeader/>
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
