/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { LinkAsA } from "./composites"
import PostMeta from "./post-meta"

export const DivPosts = ({ posts, ...props }) => {
  return (
    <div>
      {posts.map((node, i) => {
        return (
          <React.Fragment key={"pst1" + i}>
            <div sx={{ my: 4 }}>
              <Styled.h2 sx={{ mb: 2, fontSize: 4 }}>
                <LinkAsA to={node.slug}>{node.title} </LinkAsA>
              </Styled.h2>
              <PostMeta post={node}></PostMeta>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
