/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Styled } from "theme-ui"
import {LinkAsA} from "./composites"
const readingTime = require("reading-time")

const PostMeta = ({ post }) => {
  const stats = readingTime(post.body)
  return (
    <Styled.p sx={{ mt: 0, color: "gray" }}>
      <span>{post.date}</span>
      <span>&nbsp; • &nbsp;</span>
      <span>{stats.text}</span>
      <span>&nbsp;•&nbsp;</span>
      <span>
        {post.tags.map((tag, index) => {
          return (
            <Fragment key={"pm" + index}>
              <LinkAsA
              to={"/tags/" + tag}
              sx={{ color: "inherit" }}
              >
                {tag}
              </LinkAsA>
              <span sx={{ color: "inherit" }}>{index < post.tags.length - 1 ? ", " : ""}</span>
            </Fragment>
          )
        })}
      </span>
    </Styled.p>
  )
}

export default PostMeta
