/** @jsx jsx */
import { jsx } from "@theme-ui/core"
import SimilarArticles from "../templates/similar-articles"
import {CommentsComponent} from "../components/comments"

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
    <CommentsComponent current_url={post.slug}/>
  </footer>
)

export default PostFooter
