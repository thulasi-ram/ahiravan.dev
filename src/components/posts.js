/** @jsx jsx */
import { Heading } from "@theme-ui/components"
import { Fragment, useCallback, useEffect, useState } from "react"
import { jsx } from "theme-ui"
import { CrumbBuilderFactory } from "../services/crumb-builder"
import Breadcrumb from "./breadcrumb"
import { Flex, PostMetaLinkAsA } from "./composites"
import Layout from "./layout"
import { PostListViewButton } from "./post_list_buttons"
import { GetResponsiveLSVal, ResponsivePosts } from "./responsive_posts"
import Seo from "./seo"


const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/blog/", "blog").crumbs

  const [preferredView, setPreferredView] = useState()

  const pfCallBack = useCallback(
    val => {
      setPreferredView(val)
    },
    [setPreferredView]
  )

  useEffect(() => {
    const val = GetResponsiveLSVal()
    pfCallBack(val)
  }, [pfCallBack])

  return preferredView ? (
    <Layout>
      <Seo title="Ahiravan's Blog" />
      <Breadcrumb crumbs={crumbs} />

      <Flex sx={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <Heading as="h1"> All posts </Heading>
        <PostListViewButton
          preferredView={preferredView}
          setPreferredView={setPreferredView}
        />
      </Flex>

      <ResponsivePosts posts={posts} preferredView={preferredView} />

      <Flex>
        <PostMetaLinkAsA sx={{ ml: "auto" }} to="/tags/">
          by tags
        </PostMetaLinkAsA>
      </Flex>
    </Layout>
  ) : (
    <Fragment></Fragment>
  )
}

export default Posts
