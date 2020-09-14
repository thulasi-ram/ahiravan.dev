/** @jsx jsx */
import { Link } from "gatsby"
import { Box, Flex, Heading, jsx, Styled } from "theme-ui"


export const SimilarArticlesComponent = ({ articles }) => {
  if (articles && articles.length > 0) {
    return (
      <Box>
        <Flex>
          <Heading variant="section"> RELATED POSTS </Heading>
        </Flex>
        <ul sx={{ listStyleType: "none" }}>
          {articles.map((article, i) => {
            return (
              <li key={"sa" + i}>
                <Styled.a as={Link} to={"/blog" + article.article.slug}>
                  {article.article.title}{" "}
                </Styled.a>
              </li>
            )
          })}
        </ul>
      </Box>
    )
  } else {
    return <Box></Box>
  }
}
