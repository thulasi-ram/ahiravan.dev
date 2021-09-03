/** @jsx jsx */
import { graphql, StaticQuery } from "gatsby"
import { jsx } from "@theme-ui/core"
import {
  SimilarArticlesFactory,
  getPostsFromQuery,
} from "../services/similar-articles-factory"
import { SimilarArticlesComponent } from "../components/similar-articles"

const similarArticlesQuery = props => (
  <StaticQuery
    query={graphql`
      query SimilarArticles {
        posts: allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {}
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
      const { currentArticle, nextArticle, previousArticle } = props

      // (2.) Marshall the response into articles
      const articles = getPostsFromQuery(data.posts)
      var excludeArticles = [currentArticle, nextArticle, previousArticle]

      const similarArticles = new SimilarArticlesFactory(
        articles,
        excludeArticles
      )
        .setMaxArticles(3)
        .setCategory("dummy")
        .setTags(currentArticle.tags)
        .getArticles()

      // (4.) Render it
      return (
        <SimilarArticlesComponent
          articles={similarArticles}
          nextArticle={nextArticle}
          previousArticle={previousArticle}
        />
      )
    }}
  />
)

export default similarArticlesQuery
