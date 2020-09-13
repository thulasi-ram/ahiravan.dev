/** @jsx jsx */
import React, { Fragment } from "react"
import {jsx, Link, Styled, Heading } from "theme-ui"
import Layout from "./layout"
import SEO from "./seo"

const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ahiravan's Blog" />
      <Heading as='h1'> Ahiravan's Blog </Heading>

      <Styled.table class="table">
        <thead>
          <tr>
            <Styled.th>Post</Styled.th>
            <Styled.th>Posted On</Styled.th>
            <Styled.th>Tags</Styled.th>
          </tr>
        </thead>
        <tbody sx={{fontSize: 2,}}>
          {posts.map(node => {
            return (
              <Fragment key={node.slug}>
                <tr>
                  <Styled.td>
                    <Link href={node.slug}>{node.title}</Link>
                  </Styled.td>
                  <Styled.td>{node.date}</Styled.td>
                  <Styled.td>
                    {" "}
                    {node.tags.map((tag, index) => {
                      return (
                        <Fragment>
                          <Link href={"/tags#" + tag}>{tag}</Link>
                          <span>
                            {index < node.tags.length - 1 ? ", " : ""}
                          </span>
                        </Fragment>
                      )
                    })}
                  </Styled.td>
                </tr>
              </Fragment>
            )
          })}
        </tbody>
      </Styled.table>
    </Layout>
  )
}

export default Posts
