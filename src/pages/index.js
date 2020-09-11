/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1 sx={{ fontSize: 1 }}>Hi people</Styled.h1>
    <Styled.p>Welcome to your new Gatsby site.</Styled.p>
    <Styled.p>Now go build something great.</Styled.p>
    <div sx={{ maxWidth: 300, marginBottom: [3] }}>
      <Image />
    </div>
    <Styled.p>
      <Link to="/more/">Go to page 2</Link>
    </Styled.p>
  </Layout>
)

export default IndexPage
