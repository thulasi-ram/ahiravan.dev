/** @jsx jsx */
import { jsx, Link, Styled } from "theme-ui"

const PostMeta = ({ post }) => {
  return (
    <Styled.p>
      <span>{post.date}</span>
      <span>&nbsp; • &nbsp;</span>
      <span>{}</span>
      <span>&nbsp;•&nbsp;</span>
      <span>
        {post.tags.map((tag, index) => {
          return (
            <>
              <Link href={"/tags#" + tag}>{tag}</Link>
              <span>{index < post.tags.length - 1 ? ", " : ""}</span>
            </>
          )
        })}
      </span>
    </Styled.p>
  )
}

export default PostMeta
