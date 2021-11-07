/** @jsx jsx */
import { Heading } from "@theme-ui/components"
import { graphql } from "gatsby"
import { Fragment, useCallback, useEffect, useState } from "react"
import { jsx } from "theme-ui"
import Breadcrumb from "../components/breadcrumb"
import { Flex, PostMetaLinkAsA } from "../components/composites"
import Layout from "../components/layout"
import { PostListViewButton } from "../components/post_list_buttons"
import {
  GetResponsiveLSVal,
  ResponsivePosts,
} from "../components/responsive_posts"
import { CrumbBuilderFactory } from "../services/crumb-builder"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { allBlogPost, allReadingTime } = data

  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/tags", "tags")
    .addCrumb("/tags/" + tag + "/", tag).crumbs

  // const { nodes, totalCount } = data.allBlogPost
  // const tagHeader = `#${tag} - ${totalCount} post${totalCount === 1 ? "" : "s"}`

  const postsWithReadingTime = allBlogPost.nodes.map(element => {
    const rTime = allReadingTime.edges.find(
      rt => rt.node.parent.id === element.id
    )

    return {
      ...element,
      readingTime: rTime.node,
    }
  })

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

      <Flex sx={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <Heading as="h1"> #{tag}</Heading>
        <PostListViewButton
          preferredView={preferredView}
          setPreferredView={setPreferredView}
        />
      </Flex>
      <ResponsivePosts
        posts={postsWithReadingTime}
        preferredView={preferredView}
      />

      <Flex>
        <PostMetaLinkAsA sx={{ ml: "auto" }} to="/blog/">
          all posts
        </PostMetaLinkAsA>
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
    allReadingTime {
      edges {
        node {
          text
          blogPostID
          blogPostTitle
          parent {
            id
          }
        }
      }
    }
  }
`
