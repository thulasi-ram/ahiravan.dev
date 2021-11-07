/** @jsx jsx */
import { useState, Fragment, useEffect, useCallback } from "react"
import { Flex, jsx, Heading } from "theme-ui"
import { CrumbBuilderFactory } from "../services/crumb-builder"
import Breadcrumb from "./breadcrumb"
import { LinkAsA } from "./composites"
import Layout from "./layout"
import { PostListViewButton } from "./post_list_buttons"
import { ResponsivePosts, GetResponsiveLSVal } from "./responsive_posts"
import Seo from "./seo"



const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/blog/", "blog").crumbs

  const [preferredView, setPreferredView] = useState()

  const pfCallBack = useCallback((val) => {
    setPreferredView(val)
  }, [setPreferredView])

  useEffect(() => {
    const val = GetResponsiveLSVal()
    pfCallBack(val)
  }, [pfCallBack])

  return preferredView ? (
    <Layout>
      <Seo title="Ahiravan's Blog" />
      <Breadcrumb crumbs={crumbs} />

      <Flex sx={{justifyContent: "space-between", alignItems: "baseline"}}>
        <Heading as="h1"> All posts </Heading>
        <PostListViewButton preferredView={preferredView} setPreferredView={setPreferredView}/>
      </Flex>

      <ResponsivePosts posts={posts} preferredView={preferredView} />

      <Flex>
        <LinkAsA sx={{ml: "auto"}} variant="postmeta" to="/tags/">
          by tags
        </LinkAsA>
      </Flex>
    </Layout>
  ) : <Fragment></Fragment>
}

export default Posts
