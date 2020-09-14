/** @jsx jsx */
import { jsx } from "theme-ui"
import PostHero from "./post-hero"
import PostMeta from "./post-meta"

const PostHeader = ({ post }) => (
  <header sx={{mb:4}}>
    <PostHero post={post} />
    <h1 sx={{mb: 0}}>{post.title}</h1>
    <PostMeta post={post} />
  </header>
)

export default PostHeader
