/** @jsx jsx */
import { Button, Flex, jsx, useThemeUI } from "theme-ui"
import { SetResponsiveLSVal } from "./responsive_posts"

const displayVal = {
  responsive: "fluid",
  list: "list",
  table: "table",
}

export const PostListViewButton = ({ ...props }) => {
  const { theme } = useThemeUI()
  let { preferredView, setPreferredView } = props

  const buttonClick = val => {
    var v = ""
    if (val === "responsive") {
      v = "list"
    } else if (val === "list") {
      v = "table"
    } else if (val === "table") {
      v = "responsive"
    } else {
      throw console.error("xx")
    }

    SetResponsiveLSVal(v)
    setPreferredView(v)
  }

  const dVal = displayVal[preferredView]

  return (
    <Flex
      sx={{
        alignItems: "center",
      }}
    >
      <Button
        variant="link"
        sx={{
          py: 0,
          px: 1,
        }}
        onClick={() => buttonClick(preferredView)}
        aria-label={`${dVal} view`}
        title={`${dVal} view`}
      >
        <span sx={{ fontFamily: "heading", fontSize: 0 }}>{dVal}</span>
      </Button>
    </Flex>
  )
}
