/** @jsx jsx */
import { Badge, Box, Flex, Heading, jsx, Text } from "theme-ui"
import { LinkAsA } from "./composites"

export const SimilarArticlesComponent = ({
  articles,
  nextArticle,
  previousArticle,
}) => {
  return (
    <Box>
      <Flex>
        <Heading as="h3" variant="section"> RELATED POSTS </Heading>
      </Flex>

      <ul>
        {nextArticle && (
          <li key={"sa-next"}>
            <LinkAsA variant="justmono" to={nextArticle.slug}>{nextArticle.title}</LinkAsA>
            <Badge variant="postmeta">next</Badge>
          </li>
        )}

        {previousArticle && (
          <li key={"sa-prev"}>
            <LinkAsA variant="justmono" to={previousArticle.slug}>{previousArticle.title}</LinkAsA>
            <Badge variant="postmeta">prev</Badge>
          </li>
        )}
      </ul>

      {articles && articles.length > 0 && (
        <div>
          <div sx={{ mx: 4 }}>
            <Text variant="postmetasmall">
              [similar articles]
            </Text>
          </div>

          <ul sx={{ listStyleType: "square" }}>
            {articles.map((article, i) => {
              return (
                <li key={"sa" + i}>
                  <LinkAsA variant="justmono" to={"/blog" + article.article.slug}>
                    {article.article.title}{" "}
                  </LinkAsA>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </Box>
  )
}
