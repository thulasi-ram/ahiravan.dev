/** @jsx jsx */
import { Link as TLink } from "@theme-ui/components"
import { Link } from "gatsby"
import { jsx } from "theme-ui"
export const LinkAsA = ({ ...props }) => <TLink as={Link} {...props} />
export const Flex = ({ ...props }) => (
  <div sx={{ display: "flex" }} {...props} />
)

const postMetaSx = { fontSize: 1, color: "gray", fontFamily: "heading" }
export const PostMetaText = ({ ...props }) => (
  <p sx={postMetaSx} {...props} />
)

export const PostMetaLinkAsA = ({ ...props }) => (
  <LinkAsA sx={postMetaSx} {...props} />
)

export const SectionHeading = ({ ...props }) => (
  <h3
    sx={{
      color: "background",
      bg: "text",
      p: 1,
      my: 2,
      fontSize: 2,
      fontFamily: "heading",
      letterSpacing: "0.1em",
    }}
    {...props}
  />
)
// export const ButtonAsA = ({ ...props }) => <Button as={TLink} {...props} />

// export const IndexPageButton = ({ ...props }) => (
//   <ButtonAsA
//     sx={{
//       width: ["90%", "80%", "70%"],
//       minWidth: "120px",
//     }}
//     variant="basic"
//     {...props}
//   />
// )
// export const FlexFiller = ({ ...props }) => (
//   <div sx={{ mx: "auto" }} {...props}></div>
// )
// export const DividerWithText = ({ ...props }) => (
//   <div
//     sx={{
//       width: ["70%", "50%", "30%"],
//       textAlign: "center",
//       borderBottomWidth: "1px",
//       borderBottomStyle: "solid",
//       borderBottomColor: "muted",
//       lineHeight: "0.1em",
//       my: "2",
//       mx: "4",

//       "& > span": {
//         bg: "background",
//         px: "2",
//         color: "gray",
//       },
//     }}
//   >
//     {" "}
//     <span> {props.text} </span>
//   </div>
// )
