import React from "react"
import Posts from "../../components/posts"

export default ({ location, data }) => {
  const { site, allBlogPost } = data
  return (
    <Posts
      location={location}
      posts={allBlogPost.nodes}
      siteTitle={site.siteMetadata.title}
      socialLinks={site.siteMetadata.social}
    />
  )
}