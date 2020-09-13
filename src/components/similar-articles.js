/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { SimilarArticlesFactory } from "../services/similar-articles-factory"

function getPostsFromQuery (posts) {
    console.log("ppppp", posts)
    if (posts) {
      return posts.edges
        .map(edge => edge.node)
        .map(node => Object.assign({}, node.frontmatter, node.fields, { excerpt: node.excerpt }))
    }
  
    return []
  }

const SimilarArticlesComponent = ({ articles }) => (
  <section>
    <ul>
      {articles.map((article, i) => {
          console.log("a", article)
          return (
          <React.Fragment key={article.article.slug}><li key={article.article.slug}>{article.article.slug}</li></React.Fragment>
          )
      })}
    </ul>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      query SimilarArticles {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug

              }
              frontmatter {
                title
                date
                tags
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { category, tags, currentArticleSlug } = props
      console.log("s", currentArticleSlug)

      // (2.) Marshall the response into articles
      const articles = getPostsFromQuery(data.posts)

      // (3.) Use a SimilarArticlesFactory to get my similar articles
      const similarArticles = new SimilarArticlesFactory(
        articles,
        currentArticleSlug
      )
        .setMaxArticles(4)
        .setCategory("false")
        .setTags(tags)
        .getArticles()

      // (4.) Render it
      return <SimilarArticlesComponent articles={similarArticles} />
    }}
  />
)
