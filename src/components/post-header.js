/** @jsx jsx */
import { jsx } from "theme-ui"
import PostHero from "./post-hero"
import PostMeta from "./post-meta"

const PostHeader = ({ post }) => (
  <header>
    <PostHero post={post} />
    <h1>{post.title}</h1>
    <PostMeta post={post} />
  </header>
)

export default PostHeader
