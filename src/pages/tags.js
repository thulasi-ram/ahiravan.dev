/** @jsx jsx */
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { jsx, Styled } from "theme-ui"
import Breadcrumb from "../components/breadcrumb"
import { LinkAsA } from "../components/composites"
import SEO from "../components/seo"
import { CrumbBuilderFactory } from "../services/crumb-builder"
import Layout from "../components/layout"


const kebabCase = require('lodash/kebabCase')

const TagsPage = ({
  data: {
    allMdx: { group },
  },
}) => {
  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/tags", "tags").crumbs

  return (
    <Layout>
      <SEO title="Ahiravan.dev all tags" />
      <Breadcrumb crumbs={crumbs} />
      <div>
      <Styled.h1> All tags </Styled.h1>
        <ul>
          {group.map(tag => (
            <li key={"tgs1" + tag.fieldValue}>
              <LinkAsA to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                #{tag.fieldValue}
              </LinkAsA>
              ({tag.totalCount})
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
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
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
