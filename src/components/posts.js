/** @jsx jsx */
import { Link } from "gatsby"
import React from "react"
import { jsx, Styled } from "theme-ui"
import Breadcrumb from "./breadcrumb"
import SEO from "./seo"
import {CrumbBuilderFactory} from "../services/crumb-builder"


const Posts = ({ location, posts, siteTitle, socialLinks }) => {
  const crumbs = new CrumbBuilderFactory()
  .addCrumb("/", 'home')
  .addCrumb("/blog", 'blog').crumbs
  
  return (
    <div>
      <SEO title="Ahiravan's Blog" />
      <Breadcrumb crumbs={crumbs} />
      <h1> All posts </h1>

      <Styled.table>
        <thead>
          <tr>
            <Styled.th>Post</Styled.th>
            <Styled.th>Posted On</Styled.th>
            <Styled.th>Tags</Styled.th>
          </tr>
        </thead>
        <tbody sx={{ fontSize: 2 }}>
          {posts.map((node, i) => {
            return (
              <React.Fragment key={"pst1" + i}>
                <tr>
                  <Styled.td>
                    <Styled.a as={Link} to={node.slug}>
                      {node.title}
                    </Styled.a>
                  </Styled.td>
                  <Styled.td>{node.date}</Styled.td>
                  <Styled.td>
                    {" "}
                    {node.tags.map((tag, j) => {
                      return (
                        <React.Fragment key={"pst2" + j}>
                          <Styled.a as={Link} to={"/tags/" + tag}>
                            {tag}
                          </Styled.a>
                          <span>{j < node.tags.length - 1 ? ", " : ""}</span>
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
