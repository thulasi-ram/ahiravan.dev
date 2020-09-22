/** @jsx jsx */
import { Link } from "gatsby"
import { Box, Flex, Heading, jsx, Styled, Badge } from "theme-ui"

export const SimilarArticlesComponent = ({
  articles,
  nextArticle,
  previousArticle,
}) => {
  return (
    <Box>
      <Flex>
        <Heading variant="section"> RELATED POSTS </Heading>
      </Flex>
      <ul sx={{ listStyleType: "square" }}>
        {articles.map((article, i) => {
          return (
            <li key={"sa" + i}>
              <Styled.a as={Link} to={"/blog" + article.article.slug}>
                {article.article.title}{" "}
              </Styled.a>
            </li>
          )
        })}

        {nextArticle && (
          <li key={"sa" + "next"}>
            <Styled.a as={Link} to={"/blog" + nextArticle.slug}>
              {nextArticle.title}
            </Styled.a>
            <Badge sx={{ mx: 2 }}>next</Badge>
          </li>
        )}

        {previousArticle && (
          <li key={"sa" + "prev"}>
            <Styled.a as={Link} to={"/blog" + previousArticle.slug}>
              {previousArticle.title}
            </Styled.a>
            <Badge sx={{ mx: 2 }}>prev</Badge>
          </li>
        )}
      </ul>
    </Box>
  )
}
