/** @jsx jsx */
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import Breadcrumb from "../components/breadcrumb"
import { LinkAsA } from "../components/composites"
import SEO from "../components/seo"
import { CrumbBuilderFactory } from "../services/crumb-builder"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/tags", "tags").crumbs

  return (
    <div>
      <SEO title="Ahiravan.dev all tags" />
      <Breadcrumb crumbs={crumbs} />
      <div>
        <h1>All Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={"tgs1" + tag.fieldValue}>
              <LinkAsA to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </LinkAsA>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
