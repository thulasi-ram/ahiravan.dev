import React from "react"
import { DivPosts } from "./div_posts"
import { TabularPosts } from "./tabular_posts"
import { useBreakpoint } from "gatsby-plugin-breakpoints"


const lsKeyName = "post_list_view"

export const GetResponsiveLSVal = () => {
  let lsVal = window.localStorage.getItem(lsKeyName)
  try {
    lsVal =  JSON.parse(lsVal)
  } catch(e) {
    window.localStorage.removeItem(lsKeyName)
    alert(e); // error in the above string (in this case, yes)!
  }
  return lsVal ? lsVal : "responsive"
}

export const SetResponsiveLSVal = (val) => {
  if (val === "responsive") {
    window.localStorage.removeItem(lsKeyName)
  } else {
    window.localStorage.setItem(lsKeyName, JSON.stringify(val))
  }
}


export const ResponsivePosts = ({ ...props }) => {
  const breakpoints = useBreakpoint()

  const getComp = val => {
    if (val === "list") {
      return <DivPosts {...props} />
    } else if (val === "table"){
      return <TabularPosts {...props} />
    } else {
      return <></>
    }
  }

  const getRespComp = () => {
    let val = breakpoints.posts_list_break ? "list" : "table"
    return getComp(val)
  }

  return props.preferredView === "responsive" ? getRespComp() : getComp(props.preferredView)
}
