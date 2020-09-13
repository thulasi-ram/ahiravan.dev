/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, css, Flex, Styled, Heading, Box } from "theme-ui"
import SimilarArticles from "../components/similar-articles"
const PostFooter = ({ previous, next, post }) => (
  <footer sx={{
    marginTop: 5,
    marginBottom: 2
  }}>
    <Box>
      <Heading variant="section"> RELATED POSTS </Heading>
      <SimilarArticles tags={post.tags} currentArticleSlug={post.slug}/>
      </Box>  
  
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
            <Styled.a as={Link} to={previous.slug} rel="prev">
              ← {previous.title}
            </Styled.a>
          )}
        </li>
        <li>
          {next && (
            <Styled.a as={Link} to={next.slug} rel="next">
              {next.title} →
            </Styled.a>
          )}
        </li>
      </Flex>
    )}
  </footer>
)

export default PostFooter