/** @jsx jsx */
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Flex, jsx, Styled } from "theme-ui"
import Breadcrumb from "../components/breadcrumb"
import { FlexFiller, LinkAsA } from "../components/composites"
import Layout from "../components/layout"
import { TabularPosts } from "../components/tabular_posts"
import { CrumbBuilderFactory } from "../services/crumb-builder"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext

  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/tags", "tags")
    .addCrumb("/tags/" + tag, tag).crumbs

  const { nodes, totalCount } = data.allBlogPost
  const tagHeader = `#${tag} - ${totalCount} post${totalCount === 1 ? "" : "s"}`
  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} />
      <Styled.h1> {tagHeader}</Styled.h1>

      <TabularPosts posts={nodes}></TabularPosts>

      <Flex>
        <FlexFiller></FlexFiller>
        <LinkAsA variant="postmeta" to="/blog">
          all posts
        </LinkAsA>
      </Flex>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allBlogPost(
      sort: { fields: [date], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMM DD, YYYY")
        tags
      }
    }
  }
`
