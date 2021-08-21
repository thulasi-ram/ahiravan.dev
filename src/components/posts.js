/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"
import { CrumbBuilderFactory } from "../services/crumb-builder"
import Breadcrumb from "./breadcrumb"
import { FlexFiller, LinkAsA } from "./composites"
import Layout from "./layout"
import SEO from "./seo"
import { TabularPosts } from "./tabular_posts"

const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/blog", "blog").crumbs

  return (
    <Layout>
      <SEO title="Ahiravan's Blog" />
      <Breadcrumb crumbs={crumbs} />
      <Styled.h1> All posts </Styled.h1>

      <TabularPosts posts={posts}></TabularPosts>
      <Flex>
        <FlexFiller></FlexFiller>
        <LinkAsA variant="postmeta" to="/tags">
          by tags
        </LinkAsA>
      </Flex>
    </Layout>
  )
}

export default Posts
