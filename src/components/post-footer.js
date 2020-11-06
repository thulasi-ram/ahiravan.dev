/** @jsx jsx */
import { jsx } from "theme-ui"
import SimilarArticles from "../templates/similar-articles"

const PostFooter = ({ previous, next, post }) => (
  <footer
    sx={{
      marginTop: 5,
      marginBottom: 2,
    }}
  >
    <SimilarArticles
      currentArticle={post}
      nextArticle={next}
      previousArticle={previous}
    />
  </footer>
)

export default PostFooter
