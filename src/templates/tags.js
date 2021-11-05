/** @jsx jsx */
import { graphql } from "gatsby"
import { Fragment, useCallback, useEffect, useState } from "react"
import { Flex, Heading, jsx } from "theme-ui"
import Breadcrumb from "../components/breadcrumb"
import { FlexFiller, LinkAsA } from "../components/composites"
import Layout from "../components/layout"
import { PostListViewButton } from "../components/post_list_buttons"
import {
  GetResponsiveLSVal, ResponsivePosts
} from "../components/responsive_posts"
import { CrumbBuilderFactory } from "../services/crumb-builder"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext

  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/tags", "tags")
    .addCrumb("/tags/" + tag + "/", tag).crumbs

  // const { nodes, totalCount } = data.allBlogPost
  // const tagHeader = `#${tag} - ${totalCount} post${totalCount === 1 ? "" : "s"}`

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
      <Breadcrumb crumbs={crumbs} />

      <Flex>
        <Heading as="h1"> #{tag}</Heading>
        <FlexFiller></FlexFiller>
        <PostListViewButton
          preferredView={preferredView}
          setPreferredView={setPreferredView}
        />
      </Flex>
      <ResponsivePosts
        posts={data.allBlogPost.nodes}
        preferredView={preferredView}
      />

      <Flex>
        <FlexFiller></FlexFiller>
        <LinkAsA variant="postmeta" to="/blog/">
          all posts
        </LinkAsA>
      </Flex>
    </Layout>
  ) : (
    <Fragment></Fragment>
  )
}

export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allBlogPost(
      sort: { fields: [date], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      nodes {
        id
        body
        excerpt
        slug
        title
        date(formatString: "MMM DD, YYYY")
        tags
      }
    }
  }
`
