import React from "react"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import PostList from "gatsby-theme-blog/src/components/post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
      <PostList posts={posts} />
  </Layout>
)

export default Posts