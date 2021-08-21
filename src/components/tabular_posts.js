import React from "react"
import { Styled, Text } from "theme-ui"
import { LinkAsA } from "./composites"


export const TabularPosts = ({ posts, ...props }) => {
  return (
    <Styled.table>
      <thead>
        <tr>
          <Styled.th>Post</Styled.th>
          <Styled.th>Date</Styled.th>
          <Styled.th>Tags</Styled.th>
        </tr>
      </thead>
      <tbody>
        {posts.map((node, i) => {
          return (
            <React.Fragment key={"pst1" + i}>
              <Styled.tr sx={{ my: [10, 2, null] }}>
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
  )
}
