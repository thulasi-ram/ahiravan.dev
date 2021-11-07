/** @jsx jsx */
import { Heading } from "@theme-ui/components"
import { graphql } from "gatsby"
import { jsx } from "theme-ui"
import Breadcrumb from "../components/breadcrumb"
import { Flex, LinkAsA, PostMetaLinkAsA } from "../components/composites"
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
    .addCrumb("/tags/", "tags").crumbs

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
          <PostMetaLinkAsA sx={{ ml: "auto" }} to="/blog">
            all posts
          </PostMetaLinkAsA>
        </Flex>
      </div>
    </Layout>
  )
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
