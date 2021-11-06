import React from "react"
import Post from "../../components/post"

const post = ({ location, data }) => {
  const postData = {
    readingTime: data.readingTime,
    ...data.blogPost
  }
  return (
    <Post
      post={postData} 
      location={location}
      previous={data.previous}
      next={data.next}
    />
  )
}

export default post