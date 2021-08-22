/** @jsx jsx */
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { useState } from "react"
import { Flex, jsx, Styled } from "theme-ui"
import Breadcrumb from "../components/breadcrumb"
import { FlexFiller, LinkAsA } from "../components/composites"
import Layout from "../components/layout"
import { PostListViewButton } from "../components/post_list_buttons"
import { ResponsivePosts } from "../components/responsive_posts"
import { CrumbBuilderFactory } from "../services/crumb-builder"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext

  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/tags", "tags")
    .addCrumb("/tags/" + tag, tag).crumbs

  const { nodes, totalCount } = data.allBlogPost
  const tagHeader = `#${tag} - ${totalCount} post${totalCount === 1 ? "" : "s"}`

  const [prefrredView, setPrefrredView] = useState()
  const preferredViewCallback = val => {
    setPrefrredView(val)
  }

  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} />

      <Flex>
        <Styled.h1> {tagHeader}</Styled.h1>
        <FlexFiller></FlexFiller>
        <PostListViewButton
          preferredViewCallback={preferredViewCallback}
          sx={{ verticalAlign: "middle" }}
        />
      </Flex>
      <ResponsivePosts posts={nodes} prefrredView={prefrredView} />

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
        body
        excerpt
        slug
        title
        date(formatString: "MMM DD, YYYY")
        tags
      }
    }
  }
`
