/** @jsx jsx */
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Flex, jsx, Heading } from "theme-ui"
import Breadcrumb from "../components/breadcrumb"
import { FlexFiller, LinkAsA } from "../components/composites"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CrumbBuilderFactory } from "../services/crumb-builder"



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
      <Seo title="Ahiravan.dev all tags" />
      <Breadcrumb crumbs={crumbs} />
      <div>
        <Heading as="h1"> All tags </Heading>
        <ul>
          {group.map(tag => (
            <li key={"tgs1" + tag.fieldValue}>
              <LinkAsA to={`/tags/${tag.fieldValue}/`}>
                #{tag.fieldValue}
              </LinkAsA>
              ({tag.totalCount})
            </li>
          ))}
        </ul>
        <Flex>
          <FlexFiller></FlexFiller>
          <LinkAsA variant="postmeta" to="/blog">
            all posts
          </LinkAsA>
        </Flex>
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
