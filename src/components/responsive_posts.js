import React from "react"
import { DivPosts } from "./div_posts"
import { TabularPosts } from "./tabular_posts"

export const ResponsivePosts = ({ ...props }) => {

  return props.prefrredView === "list" ? (
    <DivPosts {...props} />
  ) : (
    <TabularPosts {...props} />
  )
}
