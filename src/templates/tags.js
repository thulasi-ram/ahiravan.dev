/** @jsx jsx */
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx, Styled } from "theme-ui"
import {CrumbBuilderFactory} from "../services/crumb-builder"
import Breadcrumb from "../components/breadcrumb"

const Tags = ({ pageContext, data }) => {



  const { tag } = pageContext


  const crumbs = new CrumbBuilderFactory()
  .addCrumb("/", 'home')
  .addCrumb("/tags", 'tags')
  .addCrumb("/tags/" + tag, tag).crumbs

  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <div>
      <Breadcrumb crumbs={crumbs} />
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={"tgs2" + slug}>
              <Styled.a as={Link} to={"/blog" + slug}>
                {title}
              </Styled.a>
            </li>
          )
        })}
      </ul>
      <Styled.a as={Link} to="/tags">
        All tags
      </Styled.a>
    </div>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
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
    allMarkdownRemark(
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
          }
        }
      }
    }
  }
`
