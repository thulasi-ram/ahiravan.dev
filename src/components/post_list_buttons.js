/** @jsx jsx */
import { Button } from "@theme-ui/components"
import { jsx } from "theme-ui"
import { SetResponsiveLSVal } from "./responsive_posts"

const displayVal = {
  responsive: "fluid view",
  list: "list view",
  table: "table view",
}

export const PostListViewButton = ({ ...props }) => {
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
    <Button
      variant="link"
      sx={{
        py: 0,
        px: 1,
        display: "flex",
        height: "fit-content",
        alignItems: "center",
      }}
      onClick={() => buttonClick(preferredView)}
      aria-label={dVal}
      title={dVal}
    >
      <span sx={{ fontFamily: "heading", fontSize: 0, fontStyle: "italic" }}>
        {dVal}
      </span>
    </Button>
  )
}
