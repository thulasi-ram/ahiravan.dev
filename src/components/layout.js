/** @jsx jsx */
import "normalize.css"
import PropTypes from "prop-types"
import { Container, jsx, useThemeUI } from "theme-ui"
import FontHeader from "./font"
import Footer from "./footer"
import Header from "./header"
import { css, Global } from "@emotion/core"

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
      opacity: 0.3;
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
  `

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 2,
        minWidth: "370px",
        backfaceVisibility: "hidden",
      }}
    >
      <Global
        styles={css`
          ${bodyCss}
        `}
      />
      <FontHeader />
      <Header />
      <main
        sx={{
          flex: "1 1 auto",
          my: 4,
          px: 4,
          pt: 2
        }}
      >
        {children}
      </main>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
