import React from "react"
import Post from "../../components/post"

export default ({ location, data }) => {
  const { blogPost, previous, next } = data
  return (
    <Post
      post={blogPost} 
      location={location}
      previous={previous}
      next={next}
    />
  )
}