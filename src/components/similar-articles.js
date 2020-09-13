/** @jsx jsx */
import { graphql, StaticQuery } from "gatsby"
import { jsx, Link } from "theme-ui"
import { SimilarArticlesFactory } from "../services/similar-articles-factory"

function getPostsFromQuery(posts) {
  console.log("ppppp", posts)
  if (posts) {
    return posts.edges
      .map(edge => edge.node)
      .map(node =>
        Object.assign({}, node.frontmatter, node.fields, {
          excerpt: node.excerpt,
        })
      )
  }

  return []
}

const SimilarArticlesComponent = ({ articles }) => (
  <section>
    <ul>
      {articles.map((article, i) => {
        return (
        <li key={"k" + article.article.slug}>
            <Link href={'/blog'+ article.article.slug}> {article.article.slug} </Link>
        </li>
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
        .setCategory("false")
        .setTags(tags)
        .getArticles()

      // (4.) Render it
      return <SimilarArticlesComponent articles={similarArticles} />
    }}
  />
)
