/** @jsx jsx */
import { useState } from "react"
import { Flex, jsx, Themed } from "theme-ui"
import { CrumbBuilderFactory } from "../services/crumb-builder"
import Breadcrumb from "./breadcrumb"
import { FlexFiller, LinkAsA } from "./composites"
import Layout from "./layout"
import { PostListViewButton } from "./post_list_buttons"
import { ResponsivePosts } from "./responsive_posts"
import Seo from "./seo"



const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/blog", "blog").crumbs

  const [preferredView, setPreferredView] = useState()
  const preferredViewCallback = val => {
    setPreferredView(val)
  }

  return (
    <Layout>
      <Seo title="Ahiravan's Blog" />
      <Breadcrumb crumbs={crumbs} />

      <Flex>
        <Themed.h1> All posts </Themed.h1>
        <FlexFiller></FlexFiller>
        <PostListViewButton
          preferredViewCallback={preferredViewCallback}
          sx={{ verticalAlign: "middle" }}
        />
      </Flex>

      <ResponsivePosts posts={posts} preferredView={preferredView} />

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
