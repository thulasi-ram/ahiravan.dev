/** @jsx jsx */
import moment from "moment"
import { Box, Flex, Heading, jsx, Link } from "theme-ui"

const style = { "list-style-type": "none" }
export const SimilarArticlesComponent = ({ articles }) => {
  if (articles && articles.length > 0) {
    return (
      <Box>
        <Flex>
          <Heading variant="section"> RELATED POSTS </Heading>
        </Flex>
        <ul style={style}>
          {articles.map((article, i) => {
            return (
              <li>
                <Link
                  href={"/blog" + article.article.slug}
                  key={"k" + article.article.slug}
                >
                  [ {moment(article.article.date).format("YYYY-MM-DD")}]{" "}
                  {article.article.title}{" "}
                </Link>
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
