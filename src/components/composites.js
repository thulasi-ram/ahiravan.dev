/** @jsx jsx */
import { Link } from "gatsby"
import { Button, jsx, NavLink, Styled, Link as TLink, Text } from "theme-ui"
import { OutboundLink } from "gatsby-plugin-google-analytics"


export const IntroP = ({ ...props }) => <Text variant="intro" {...props} />
export const IntroA = ({ ...props }) => (
  <TLink rel="external" {...props} target="_blank" />
)
export const LinkAsA = ({ ...props }) => <TLink as={Link} {...props} />
export const ButtonAsA = ({ ...props }) => <Button as={Styled.a} {...props} />
export const FooterSocial = ({ ...props }) => (
  <OutboundLink
    sx={{
      textDecoration: "none",
      fill: "secondary",
      width: "1.4em",
      mx: "auto",
      my: "auto",
    }}
    rel="external"
    {...props}
  />
)
export const IndexPageButton = ({ ...props }) => (
  <ButtonAsA
    sx={{
      width: ["90%", "80%", "70%"],
      minWidth: "120px",
    }}
    variant="basic"
    {...props}
  />
)
export const FlexFiller = ({ ...props }) => (
  <div sx={{ mx: "auto" }} {...props}></div>
)
export const DividerWithText = ({ ...props }) => (
  <div
    sx={{
      width: ["70%", "50%", "30%"],
      textAlign: "center",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "muted",
      lineHeight: "0.1em",
      my: "2",
      mx: "4",

      "& > span": {
        bg: "background",
        px: "2",
        color: "gray",
      },
    }}
  >
    {" "}
    <span> {props.text} </span>
  </div>
)
export const HeaderNavLink = ({ ...props }) => (
  // refer: links.nav in index.js
  <NavLink variant="nav" className="middleanim" {...props} />
)
