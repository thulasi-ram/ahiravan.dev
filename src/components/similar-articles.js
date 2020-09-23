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

      <ul>
        {nextArticle && (
          <li key={"sa-next"}>
            <LinkAsA to={nextArticle.slug}>{nextArticle.title}</LinkAsA>
            <Badge sx={{ mx: 2, color: "background" }}>next</Badge>
          </li>
        )}

        {previousArticle && (
          <li key={"sa-prev"}>
            <LinkAsA to={previousArticle.slug}>{previousArticle.title}</LinkAsA>
            <Badge sx={{ mx: 2, color: "background" }}>prev</Badge>
          </li>
        )}
      </ul>

      {articles && articles.length > 0 && (
        <div>
          <div sx={{ mx: 4 }}>
            <small sx={{ color: "gray", fontSize: 1 }}>
              [similar articles]
            </small>
          </div>

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
          </ul>
        </div>
      )}
    </Box>
  )
}
