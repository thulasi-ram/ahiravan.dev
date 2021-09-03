import { Text } from "@theme-ui/components"
import { Themed } from "@theme-ui/mdx"
import React from "react"
import { LinkAsA } from "./composites"


export const TabularPosts = ({ posts, ...props }) => {
  return (
    <Themed.table>
      <thead>
        <tr>
          <Themed.th>Post</Themed.th>
          <Themed.th>Date</Themed.th>
          <Themed.th>Tags</Themed.th>
        </tr>
      </thead>
      <tbody>
        {posts.map((node, i) => {
          return (
            <React.Fragment key={"pst1" + i}>
              <Themed.tr sx={{ my: [10, 2, null] }}>
                <Themed.td>
                  <LinkAsA to={node.slug}>{node.title} </LinkAsA>
                </Themed.td>
                <Themed.td>
                  <Text variant="postmeta">{node.date}</Text>
                </Themed.td>
                <Themed.td>
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
                </Themed.td>
              </Themed.tr>
            </React.Fragment>
          )
        })}
      </tbody>
    </Themed.table>
  )
}
