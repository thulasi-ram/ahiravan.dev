/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Link, Styled} from "theme-ui"
const readingTime = require("reading-time")

const PostMeta = ({ post }) => {
  const stats = readingTime(post.body)
  return (
    <Styled.p sx={{mt: 0, color:'gray'}}>
      <span>{post.date}</span>
      <span>&nbsp; • &nbsp;</span>
      <span>{stats.text}</span>
      <span>&nbsp;•&nbsp;</span>
      <span>
        {post.tags.map((tag, index) => {
          return (
            <Fragment key={"t1" + tag} sx={{color: 'gray'}}>
              <Link sx={{color: 'gray'}} href={"/tags/" + tag}>{tag}</Link>
              <span>{index < post.tags.length - 1 ? ", " : ""}</span>
            </Fragment>
          )
        })}
      </span>
    </Styled.p>
  )
}

export default PostMeta
