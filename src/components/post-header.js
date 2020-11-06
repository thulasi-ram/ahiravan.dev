/** @jsx jsx */
import { jsx,Styled } from "theme-ui"
import PostHero from "./post-hero"
import PostMeta from "./post-meta"

const PostHeader = ({ post }) => (
  <header sx={{mb:4}}>
    <PostHero post={post} />
    <Styled.h1 sx={{mb: 0}}>{post.title}</Styled.h1>
    <PostMeta post={post} />
  </header>
)

export default PostHeader
