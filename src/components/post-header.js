/** @jsx jsx */
import { Heading } from "@theme-ui/components"
import { jsx } from "theme-ui"
import PostMeta from "./post-meta"


const PostHeader = ({ post }) => (
  <header sx={{ mb: 4 }}>
    {/* <PostHero post={post} /> */}
    <Heading as="h1" sx={{ mb: 0 }}>
      {post.title}
    </Heading>
    <PostMeta post={post} />
  </header>
)

export default PostHeader
