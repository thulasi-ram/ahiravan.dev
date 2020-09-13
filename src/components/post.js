/** @jsx jsx */
import { MDXRenderer } from "gatsby-plugin-mdx"
import { jsx } from "theme-ui"
import Layout from "./layout"
import PostFooter from "./post-footer"
import PostHeader from "./post-header"
import SEO from "./seo"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      imageAlt={post.imageAlt}
    />

    <article>
      <PostHeader post={post}> </PostHeader>
      <section>
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
      <PostFooter {...{ previous, next }} />
    </article>
  </Layout>
)

export default Post
