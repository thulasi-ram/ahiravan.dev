/** @jsx jsx */
import { Badge, Box, Flex, Heading, jsx } from "theme-ui"
import { LinkAsA } from "./composites"

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
              <LinkAsA to={"/blog" + article.article.slug}>
                {article.article.title}{" "}
              </LinkAsA>
            </li>
          )
        })}

        {nextArticle && (
          <li key={"sa-next"}>
            <LinkAsA to={nextArticle.slug}>
              {nextArticle.title}
            </LinkAsA>
            <Badge sx={{ mx: 2 }}>next</Badge>
          </li>
        )}

        {previousArticle && (
          <li key={"sa-prev"}>
            <LinkAsA to={previousArticle.slug}>
              {previousArticle.title}
            </LinkAsA>
            <Badge sx={{ mx: 2 }}>prev</Badge>
          </li>
        )}
      </ul>
    </Box>
  )
}
