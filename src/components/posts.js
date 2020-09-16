/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import {jsx, Styled, Heading } from "theme-ui"
import Layout from "./layout"
import SEO from "./seo"

const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  return (
    <div>
      <SEO title="Ahiravan's Blog" />
      <Heading as='h1'> Ahiravan's Blog </Heading>

      <Styled.table>
        <thead>
          <tr>
            <Styled.th>Post</Styled.th>
            <Styled.th>Posted On</Styled.th>
            <Styled.th>Tags</Styled.th>
          </tr>
        </thead>
        <tbody sx={{fontSize: 2,}}>
          {posts.map((node, i) => {
            return (
              <React.Fragment key={'pst1' + i}>
                <tr>
                  <Styled.td>
                    <Styled.a as={Link} to={node.slug}>{node.title}</Styled.a>
                  </Styled.td>
                  <Styled.td>{node.date}</Styled.td>
                  <Styled.td>
                    {" "}
                    {node.tags.map((tag, j) => {
                      return (
                        <React.Fragment key={'pst2' + j}>
                          <Styled.a as={Link} to={"/tags/" + tag}>{tag}</Styled.a>
                          <span>
                            {j < node.tags.length - 1 ? ", " : ""}
                          </span>
                        </React.Fragment>
                      )
                    })}
                  </Styled.td>
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </Styled.table>
      </div>
  )
}

export default Posts
