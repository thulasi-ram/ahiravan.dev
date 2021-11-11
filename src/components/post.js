/** @jsx jsx */
import { MDXRenderer } from "gatsby-plugin-mdx"
import { jsx, ThemeProvider, useThemeUI } from "theme-ui"
import { CrumbBuilderFactory } from "../services/crumb-builder"
import Breadcrumb from "./breadcrumb"
import Layout from "./layout"
import PostFooter from "./post-footer"
import PostHeader from "./post-header"
import Seo from "./seo"
// import "prismjs/themes/prism-twilight.css";
import "prism-theme-night-owl";
import "../css/prism.css"

const components = {
}

const Post = ({ post, location, previous, next }) => {
  const { theme } = useThemeUI()

  if (!post) {
    return <div></div>
  }


  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/blog/", "blog")
    .addCrumb(
      location.pathname,
      post.slug
        .replace("/blog", "")
        .replace("/", "")
        .replace("/", "")
    ).crumbs

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        imageSource={
          post.socialImage
            ? post.socialImage?.childImageSharp?.gatsbyImageData.src
            : post.image?.childImageSharp?.gatsbyImageData.src
        }
        imageAlt={post.imageAlt}
      />
      <Breadcrumb crumbs={crumbs} />

      <article>
        <PostHeader post={post}> </PostHeader>
        <section>
          <ThemeProvider theme={theme} components={components}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </ThemeProvider>
        </section>
        <PostFooter {...{ previous, next, post }} />
      </article>
    </Layout>
  )
}

export default Post
