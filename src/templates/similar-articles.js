/** @jsx jsx */
import { graphql, StaticQuery } from "gatsby"
import { jsx } from "theme-ui"
import { SimilarArticlesFactory, getPostsFromQuery } from "../services/similar-articles-factory"
import {SimilarArticlesComponent} from '../components/similar-articles'


export default props => (
  <StaticQuery
    query={graphql`
      query SimilarArticles {
        posts: allMarkdownRemark(
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
      const { tags, currentArticleSlug } = props

      // (2.) Marshall the response into articles
      const articles = getPostsFromQuery(data.posts)

      // (3.) Use a SimilarArticlesFactory to get my similar articles
      const similarArticles = new SimilarArticlesFactory(
        articles,
        currentArticleSlug
      )
        .setMaxArticles(4)
        .setCategory("dummy")
        .setTags(tags)
        .getArticles()

      // (4.) Render it
      return <SimilarArticlesComponent articles={similarArticles} />
    }}
  />
)
