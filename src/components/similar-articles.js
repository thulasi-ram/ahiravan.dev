/** @jsx jsx */
import { Badge, Heading } from "@theme-ui/components"
import { jsx } from "theme-ui"
import { Flex, LinkAsA, PostMetaText } from "./composites"

export const SimilarArticlesComponent = ({
  articles,
  nextArticle,
  previousArticle,
}) => {
  return (
    <div>
      <Flex>
        <Heading as="h3" variant="section">
          {" "}
          RELATED POSTS{" "}
        </Heading>
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
            <PostMetaText sx={{ fontSize: 0 }}>[similar articles]</PostMetaText>
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
