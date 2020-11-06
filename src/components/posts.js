/** @jsx jsx */
import React from "react"
import { jsx, Styled, Text } from "theme-ui"
import Breadcrumb from "./breadcrumb"
import SEO from "./seo"
import { CrumbBuilderFactory } from "../services/crumb-builder"
import { LinkAsA } from "./composites"

const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  const crumbs = new CrumbBuilderFactory()
    .addCrumb("/", "home")
    .addCrumb("/blog", "blog").crumbs

  return (
    <div>
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
                            {tag}
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
    </div>
  )
}

export default Posts
