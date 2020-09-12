import React, {Fragment} from "react"

import SEO from "./seo"
import Layout from "./layout"
import {Styled, css} from "theme-ui"
import {Link} from "gatsby"
// import PostList from "gatsby-theme-blog/src/components/post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) =>{
  console.log("koko", posts)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {posts.map((node) => {
          const title = node.title || node.slug
          const keywords = node.keywords || []
          return (
            <Fragment key={node.slug}>
              <SEO title="Home" keywords={keywords} />
              <div>
                <Styled.h2
                  css={css({
                    mb: 1,
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={{
                      textDecoration: `none`,
                    }}
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>{node.date}</small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          )
        })}
    </Layout>
  )
} 

export default Posts