/** @jsx jsx */
import { Fragment } from "react"
import { Text } from "@theme-ui/components"
import { jsx } from "@theme-ui/core"
import {LinkAsA} from "./composites"
const readingTime = require("reading-time")

const PostMeta = ({ post }) => {
  const stats = readingTime(post.body)
  return (
    <Text variant="postmeta" sx={{ mt: 0 }}>
      <span>{post.date}</span>
      <span> • </span>
      <span>{stats.text}</span>
      <span> • </span>
      <span>
        {post.tags.map((tag, index) => {
          return (
            <Fragment key={"pm" + index}>
              <LinkAsA
              variant="postmeta"
              to={"/tags/" + tag}
              sx={{ color: "inherit" }}
              >
                #{tag}
              </LinkAsA>
              <span sx={{ color: "inherit" }}>{index < post.tags.length - 1 ? ", " : ""}</span>
            </Fragment>
          )
        })}
      </span>
    </Text>
  )
}

export default PostMeta
