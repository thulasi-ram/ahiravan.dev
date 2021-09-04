/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import PostMeta from "./post-meta"

const PostHeader = ({ post }) => (
  <header sx={{ mb: 4 }}>
    {/* <PostHero post={post} /> */}
    <Themed.h1 sx={{ mb: 0 }}>{post.title}</Themed.h1>
    <PostMeta post={post} />
  </header>
)

export default PostHeader
