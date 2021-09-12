/** @jsx jsx */
import { Flex, jsx, useThemeUI } from "theme-ui"
import DocListSvg from "../svgs/doc_list.svg"
import ResponsiveSvg from "../svgs/responsive.svg"
import TableSvg from "../svgs/table.svg"
import { SetResponsiveLSVal } from "./responsive_posts"
import toast, { Toaster } from 'react-hot-toast';


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
  let { preferredView, setPreferredView } = props

  const buttonClick = val => {
    SetResponsiveLSVal(val)
    setPreferredView(val)
    toast(`${ val[0].toUpperCase() + val.slice(1)} view has been set`)
  }

  const svgSx = {
    width: "18px",
  }

  return (
    <Flex
      sx={{
        alignItems: "center",
        borderRadius: "1em",
        verticalAlign: "middle",
      }}
    >
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
      <Toaster position="bottom-center"/>
    </Flex>
  )
}
