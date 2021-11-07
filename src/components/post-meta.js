/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import { PostMetaLinkAsA, PostMetaText } from "./composites"

const PostMeta = ({ post }) => {
  return (
    <PostMetaText sx={{ mt: 0 }}>
      <span>{post.date}</span>
      <span> • </span>
      <span>{post.readingTime.text}</span>
      <span> • </span>
      <span>
        {post.tags.map((tag, index) => {
          return (
            <Fragment key={"pm" + index}>
              <PostMetaLinkAsA
                to={"/tags/" + tag + "/"}
                sx={{ color: "inherit" }}
              >
                #{tag}
              </PostMetaLinkAsA>
              <span sx={{ color: "inherit" }}>
                {index < post.tags.length - 1 ? ", " : ""}
              </span>
            </Fragment>
          )
        })}
      </span>
    </PostMetaText>
  )
}

export default PostMeta
