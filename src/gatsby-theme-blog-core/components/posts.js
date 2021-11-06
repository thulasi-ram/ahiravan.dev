import React from "react"
import Posts from "../../components/posts"

const posts = ({ location, data }) => {
  const { site, allBlogPost, allReadingTime } = data

  const postsWithReadingTime = allBlogPost.nodes.map((element) => {
    const rTime =  allReadingTime.edges.find(rt => rt.node.parent.id === element.id);

    return {
      ...element,
      readingTime: rTime.node
    }
  })


  return (
    <Posts
      location={location}
      posts={postsWithReadingTime}
      siteTitle={site.siteMetadata.title}
      socialLinks={site.siteMetadata.social}
    />
  )
}
export default posts