/** @jsx jsx */
import React from "react"
import { jsx, Styled, Text, Flex } from "theme-ui"
import Breadcrumb from "./breadcrumb"
import SEO from "./seo"
import { CrumbBuilderFactory } from "../services/crumb-builder"
import { LinkAsA, FlexFiller} from "./composites"
import Layout from "./layout"


const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/blog", "blog").crumbs

  return (
    <Layout>
      <SEO title="Ahiravan's Blog" />
      <Breadcrumb crumbs={crumbs} />
      <Styled.h1> All posts </Styled.h1>

      <Styled.table>
        <thead>
          <tr>
            <Styled.th>Post</Styled.th>
            <Styled.th>Posted On</Styled.th>
            <Styled.th>Tags</Styled.th>
          </tr>
        </thead>
        <tbody>
          {posts.map((node, i) => {
            return (
              <React.Fragment key={"pst1" + i}>
                <Styled.tr>
                  <Styled.td>
                    <LinkAsA to={node.slug}>{node.title} </LinkAsA>
                  </Styled.td>
                  <Styled.td>
                    <Text variant="postmeta">{node.date}</Text>
                    </Styled.td>
                  <Styled.td>
                    {" "}
                    {node.tags.map((tag, j) => {
                      return (
                        <React.Fragment key={"pst2" + j}>
                          <LinkAsA variant="postmeta" to={"/tags/" + tag}>
                            #{tag}
                          </LinkAsA>
                          <span>{j < node.tags.length - 1 ? ", " : ""}</span>
                        </React.Fragment>
                      )
                    })}
                  </Styled.td>
                </Styled.tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </Styled.table>
      <Flex>
        <FlexFiller></FlexFiller>
        <LinkAsA variant="postmeta" to="/tags">
          by tags
        </LinkAsA>
      </Flex>
    </Layout>
  )
}

export default Posts
