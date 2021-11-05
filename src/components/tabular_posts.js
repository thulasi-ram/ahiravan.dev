/** @jsx jsx */
import React from "react"
import { jsx, Text } from "theme-ui"
import { LinkAsA } from "./composites"

const Table = ({ ...props }) => (
  <table
    sx={{
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
    }}
    {...props}
  />
)

const Th = ({ ...props }) => (
  <th
    sx={{
      textAlign: "left",
      py: "4px",
      pl: 0,
      borderColor: "muted",
      borderBottomStyle: "solid",
      verticalAlign: "bottom",
      borderBottomWidth: 2,
    }}
    {...props}
  />
)

const Td = ({ ...props }) => (
  <td
    sx={{
      textAlign: "left",
      py: "4px",
      pl: 0,
      verticalAlign: "top",
    }}
    {...props}
  />
)

export const TabularPosts = ({ posts, ...props }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Post</Th>
          <Th>Date</Th>
          <Th>Tags</Th>
        </tr>
      </thead>
      <tbody>
        {posts.map((node, i) => {
          return (
            <React.Fragment key={"pst1" + i}>
              <tr sx={{ my: [10, 2, null] }}>
                <Td>
                  <LinkAsA to={node.slug}>{node.title} </LinkAsA>
                </Td>
                <Td>
                  <Text variant="postmeta">{node.date}</Text>
                </Td>
                <Td>
                  {" "}
                  {node.tags.map((tag, j) => {
                    return (
                      <React.Fragment key={"pst2" + j}>
                        <LinkAsA variant="postmeta" to={"/tags/" + tag + "/"}>
                          #{tag}
                        </LinkAsA>
                        <span>{j < node.tags.length - 1 ? ", " : ""}</span>
                      </React.Fragment>
                    )
                  })}
                </Td>
              </tr>
            </React.Fragment>
          )
        })}
      </tbody>
    </Table>
  )
}
