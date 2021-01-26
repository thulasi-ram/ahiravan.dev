/** @jsx jsx */
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex, jsx, Styled, Text } from "theme-ui"
import Breadcrumb from "../components/breadcrumb"
import { FlexFiller, LinkAsA } from "../components/composites"
import { CrumbBuilderFactory } from "../services/crumb-builder"
import Layout from "../components/layout"


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext

  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/tags", "tags")
    .addCrumb("/tags/" + tag, tag).crumbs

  const { edges, totalCount } = data.allMdx
  const tagHeader = `#${tag} - ${totalCount} post${
    totalCount === 1 ? "" : "s"
  }`
  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} />
      <Styled.h1> {tagHeader}</Styled.h1>

      <Styled.table>
        <thead>
          <tr>
            <Styled.th>Post</Styled.th>
            <Styled.th>Posted On</Styled.th>
            <Styled.th>Tags</Styled.th>
          </tr>
        </thead>
        <tbody>
          {edges.map((post, i) => {
            let node = post.node
            return (
              <React.Fragment key={"pst1" + i}>
                <Styled.tr>
                  <Styled.td>
                    <LinkAsA to={`/blog` + node.fields.slug}>
                      {node.frontmatter.title}{" "}
                    </LinkAsA>
                  </Styled.td>
                  <Styled.td>
                    <Text variant="postmeta">{node.frontmatter.date}</Text>
                  </Styled.td>
                  <Styled.td>
                    {node.frontmatter.tags.map((tag, j) => {
                      return (
                        <React.Fragment key={"pst2" + j}>
                          <LinkAsA variant="postmeta" to={"/tags/" + tag}>
                            #{tag}
                          </LinkAsA>
                          <span>
                            {j < node.frontmatter.tags.length - 1 ? ", " : ""}
                          </span>
                        </React.Fragment>
                      )
                    })}
                  </Styled.td>
                </Styled.tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </Styled.table>

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
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
