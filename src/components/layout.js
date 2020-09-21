/** @jsx jsx */
import "normalize.css"
import PropTypes from "prop-types"
import { Container, jsx } from "theme-ui"
import Footer from "./footer"
import Header from "./header"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 2,
        minWidth: "320px",
        backfaceVisibility: "hidden",
      }}
    >
      <Helmet>
        <link rel="preload" href="font-ibm/optimized.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="stylesheet" href="css/global.css"/>
      </Helmet>
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
