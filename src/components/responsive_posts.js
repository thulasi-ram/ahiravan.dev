import React from "react"
import { DivPosts } from "./div_posts"
import { TabularPosts } from "./tabular_posts"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export const ResponsivePosts = ({ ...props }) => {
  const breakpoints = useBreakpoint()

  const getComp = val => {
    return val === "list" ? (
      <DivPosts {...props} />
    ) : (
      <TabularPosts {...props} />
    )
  }

  const getRespComp = () => {
    let val = breakpoints.posts_list_break ? "list" : "table"
    return getComp(val)
  }

  return props.preferredView !== undefined && props.preferredView !== "responsive" 
    ? getComp(props.preferredView)
    : getRespComp()
}
