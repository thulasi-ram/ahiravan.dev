/** @jsx jsx */
import { Link } from "gatsby"
import { Button, jsx, Link as TLink, Themed } from "theme-ui"
export const LinkAsA = ({ ...props }) => <TLink as={Link} {...props} />
export const ButtonAsA = ({ ...props }) => <Button as={Themed.a} {...props} />

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
export const FlexFiller = ({ ...props }) => (
  <div sx={{ mx: "auto" }} {...props}></div>
)
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

