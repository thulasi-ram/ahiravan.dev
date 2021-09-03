/** @jsx jsx */
import { useEffect, useState } from "react"
import { jsx, useThemeUI } from "@theme-ui/core"
import { Flex } from "@theme-ui/components"
import DocListSvg from "../svgs/doc_list.svg"
import ResponsiveSvg from "../svgs/responsive.svg"
import TableSvg from "../svgs/table.svg"

const PostLinkButton = ({ val, preferredView, ...props }) => {
  const { theme } = useThemeUI()

  let sx = {
    cursor: "pointer",
    mx: 1,
    py: 1,
    alignItems: "center",
    verticalAlign: "middle",
    display: "flex",
    color: theme.colors.gray,
    border: 0,
    backgroundColor: theme.colors.background,
    borderRadius: "2px",
  }

  if (preferredView === val) {
    sx["color"] = theme.colors.primary
    sx["borderBottom"] = `2px solid  ${theme.colors.primary}`
  }
  return (
    <button
      {...props}
      sx={sx}
      aria-label={`${val} view`}
      title={`${val} view`}
    />
  )
}

export const PostListViewButton = ({ ...props }) => {
  let [preferredView, setPreferredView] = useState()
  const lsKeyName = "post_list_view"

  useEffect(() => {
    let lsVal = window.localStorage.getItem(lsKeyName)
    lsVal = lsVal ? JSON.parse(lsVal) : "responsive"
    props.preferredViewCallback(lsVal)
    setPreferredView(lsVal)
  }, [lsKeyName, props])

  const buttonClick = val => {
    if (val === "responsive") {
      window.localStorage.removeItem(lsKeyName)
    } else {
      window.localStorage.setItem(lsKeyName, JSON.stringify(val))
    }
    props.preferredViewCallback(val)
    setPreferredView(val)
  }

  const svgSx = {
    width: "1em",
  }

  return (
    <Flex sx={{ alignItems: "center", borderRadius: "1em" }}>
      <PostLinkButton
        val="list"
        preferredView={preferredView}
        onClick={() => buttonClick("list")}
      >
        {/* <span>list</span> */}
        <DocListSvg sx={svgSx} />
      </PostLinkButton>
      <PostLinkButton
        val="table"
        preferredView={preferredView}
        onClick={() => buttonClick("table")}
      >
        {/* <span>table</span> */}
        <TableSvg sx={svgSx} />
      </PostLinkButton>
      <PostLinkButton
        val="responsive"
        preferredView={preferredView}
        onClick={() => buttonClick("responsive")}
      >
        {/* <span>responsive</span> */}
        <ResponsiveSvg sx={svgSx} />
      </PostLinkButton>
    </Flex>
  )
}
