/** @jsx jsx */
import { Text } from "@theme-ui/components"
import { Fragment } from "react"
import { jsx } from "theme-ui"
import { LinkAsA } from "./composites"

const PostMeta = ({ post }) => {
  return (
    <Text variant="postmeta" sx={{ mt: 0 }}>
      <span>{post.date}</span>
      <span> • </span>
      <span>{post.readingTime.text}</span>
      <span> • </span>
      <span>
        {post.tags.map((tag, index) => {
          return (
            <Fragment key={"pm" + index}>
              <LinkAsA
                variant="postmeta"
                to={"/tags/" + tag + "/"}
                sx={{ color: "inherit" }}
              >
                #{tag}
              </LinkAsA>
              <span sx={{ color: "inherit" }}>
                {index < post.tags.length - 1 ? ", " : ""}
              </span>
            </Fragment>
          )
        })}
      </span>
    </Text>
  )
}

export default PostMeta
