import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

const PostHero = ({ post }) => (
  <>
    {post?.image?.childImageSharp && (
      <GatsbyImage
        image={post.image.childImageSharp.gatsbyImageData}
        alt={post.imageAlt ? post.imageAlt : post.excerpt} />
    )}
  </>
)

export default PostHero