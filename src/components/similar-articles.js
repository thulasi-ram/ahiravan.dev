/** @jsx jsx */
import {  jsx } from "theme-ui"
import { Badge, Heading, Text } from "@theme-ui/components"
import { LinkAsA, Flex } from "./composites"

export const SimilarArticlesComponent = ({
  articles,
  nextArticle,
  previousArticle,
}) => {
  return (
    <div>
      <Flex>
        <Heading as="h3" variant="section"> RELATED POSTS </Heading>
      </Flex>

      <ul>
        {nextArticle && (
          <li key={"sa-next"}>
            <LinkAsA to={nextArticle.slug}>{nextArticle.title}</LinkAsA>
            <Badge variant="postmeta">next</Badge>
          </li>
        )}

        {previousArticle && (
          <li key={"sa-prev"}>
            <LinkAsA to={previousArticle.slug}>{previousArticle.title}</LinkAsA>
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
                  <LinkAsA to={"/blog" + article.article.slug}>
                    {article.article.title}{" "}
                  </LinkAsA>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
