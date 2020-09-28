/** @jsx jsx */
import "normalize.css"
import PropTypes from "prop-types"
import { Container, jsx } from "theme-ui"
import FontHeader from "./font"
import Footer from "./footer"
import Header from "./header"
import { css, Global } from "@emotion/core"


export const actualCss = `
body {
  -webkit-transition: all 0.5s ease;
  -moz-transition:    all 0.5s ease;
  -ms-transition:     all 0.5s ease;
  -o-transition:      all 0.5s ease;
}
`

const Layout = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 2,
        minWidth: "370px",
        backfaceVisibility: "hidden"
      }}
    >
      <Global
        styles={css`${actualCss}`}
      />
      <FontHeader />
      <Header />
      <main
        sx={{
          flex: "1 1 auto",
          my: 4,
          px: 4,
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
