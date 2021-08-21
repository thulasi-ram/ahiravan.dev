import React from "react"
import { Styled, Text } from "theme-ui"
import { LinkAsA } from "./composites"
import { DivPosts } from "./div_posts"
import { TabularPosts } from "./tabular_posts"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';


export const ResponsivePosts = ({...props}) => {
    const breakpoints = useBreakpoint();

    return (
        <>
        {breakpoints.posts_list_break ? <DivPosts  {...props}/> : <TabularPosts {...props}/>}
        </>
    )
}