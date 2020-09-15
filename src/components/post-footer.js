/** @jsx jsx */
import { Link } from "gatsby"
import { css, Flex, jsx, Styled } from "theme-ui"
import SimilarArticles from "../templates/similar-articles"
const PostFooter = ({ previous, next, post }) => (
  <footer
    sx={{
      marginTop: 5,
      marginBottom: 2,
      fontSize: 2
    }}
  >
    <SimilarArticles tags={post.tags} currentArticleSlug={post.slug} />

    {(previous || next) && (
      <Flex
        as="ul"
        css={css({
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        })}
      >
        <li>
          {previous && (
            <Styled.a as={Link} to={previous.slug} rel="prev" sx={{fontWeight: 'bold'}}>
              ← {previous.title}
            </Styled.a>
          )}
        </li>
        <li>
          {next && (
            <Styled.a as={Link} to={next.slug} rel="next"  sx={{fontWeight: 'bold'}}>
              {next.title} →
            </Styled.a>
          )}
        </li>
      </Flex>
    )}
  </footer>
)

export default PostFooter
