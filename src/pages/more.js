/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MorePage = () => (
  <Layout>
    <SEO title="Page more" />
    <Styled.h1>Hi from the second page</Styled.h1>
    <Styled.p>Welcome to page 2</Styled.p>
  </Layout>
)

export default MorePage
