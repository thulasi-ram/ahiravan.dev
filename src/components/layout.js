/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby"
import "normalize.css"
import PropTypes from "prop-types"
import { Container, jsx } from "theme-ui"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
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
