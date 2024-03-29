import { graphql } from "gatsby"
import PostsPage from "../components/posts"

export default PostsPage

export const query = graphql`
  query CustomPostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      nodes {
        id
        body
        excerpt
        slug
        title
        date(formatString: "MMM DD, YYYY")
        tags
      }
    }
    allReadingTime {
      edges {
        node {
          text
          blogPostID
          blogPostTitle
          parent {
            id
          }
        }
      }
    }
  }
`