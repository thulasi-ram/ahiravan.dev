/** @jsx jsx */
import { MDXRenderer } from "gatsby-plugin-mdx"
import { jsx } from "theme-ui"
import Breadcrumb from "./breadcrumb"
import PostFooter from "./post-footer"
import PostHeader from "./post-header"
import SEO from "./seo"
import {CrumbBuilderFactory} from "../services/crumb-builder"

const Post = ({
  post,
  location,
  previous,
  next,
}) => {

  if (!post){
    return (<div></div>)
  }
  const crumbs = new CrumbBuilderFactory()
  .addCrumb("/", 'home')
  .addCrumb("/blog", 'blog')
  .addCrumb(
    location.pathname, 
    post.slug
    .replace("/blog", '')
    .replace("/", "")
    .replace("/", "")
  ).crumbs

  return (
    <div>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        imageSource={
          post.socialImage
            ? post.socialImage?.childImageSharp?.fluid.src
            : post.image?.childImageSharp?.fluid.src
        }
        imageAlt={post.imageAlt}
      />
      <Breadcrumb crumbs={crumbs} />


      <article>
        <PostHeader post={post}> </PostHeader>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
        <PostFooter {...{ previous, next, post }} />
      </article>
    </div>
  )
}

export default Post
