/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Styled } from "theme-ui"
import {Link} from "gatsby"
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
              <Styled.a 
              as={Link} 
              to={"/tags/" + tag}
              sx={{ color: "inherit" }}
              >
                {tag}
              </Styled.a>
              <span sx={{ color: "inherit" }}>{index < post.tags.length - 1 ? ", " : ""}</span>
            </Fragment>
          )
        })}
      </span>
    </Styled.p>
  )
}

export default PostMeta
