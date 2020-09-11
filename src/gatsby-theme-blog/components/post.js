import { MDXRenderer } from "gatsby-plugin-mdx"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import PostHero from "gatsby-theme-blog/src/components/post-hero"
import { default as React} from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"





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
      <header>
        <PostHero post={post} />
        <h1>{post.title}</h1>
        <PostDate>{post.date}</PostDate>
      </header>
      <section>
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </article>

    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
